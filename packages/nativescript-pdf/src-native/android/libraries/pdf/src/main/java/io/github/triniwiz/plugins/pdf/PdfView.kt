package io.github.triniwiz.plugins.pdf

import android.annotation.SuppressLint
import android.content.Context
import android.content.res.Configuration
import android.graphics.Bitmap
import android.graphics.Canvas
import android.graphics.Color
import android.graphics.Rect
import android.os.Handler
import android.os.HandlerThread
import android.util.AttributeSet
import android.util.Log
import android.view.Gravity
import android.view.View
import android.view.ViewGroup
import android.widget.FrameLayout
import android.widget.ProgressBar
import android.widget.RelativeLayout
import androidx.collection.LruCache
import androidx.core.content.ContextCompat
import androidx.core.graphics.createBitmap
import androidx.core.view.doOnNextLayout
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.PagerSnapHelper
import androidx.recyclerview.widget.RecyclerView
import androidx.recyclerview.widget.RecyclerView.ViewHolder
import me.zhanghai.android.fastscroll.FastScrollerBuilder
import me.zhanghai.android.fastscroll.FixItemDecorationRecyclerView
import java.net.URI
import java.nio.ByteBuffer
import java.nio.ByteOrder
import java.nio.channels.Channels


class PdfView @JvmOverloads constructor(
  context: Context, attrs: AttributeSet? = null
) : FrameLayout(context, attrs) {
  private val list = FixItemDecorationRecyclerView(context)
  private var adapter = PdfViewAdapter(this)
  private var layoutManager = LinearLayoutManager(context, LinearLayoutManager.VERTICAL, false)
  private val snapHelper = PagerSnapHelper()
  var useTiles = false
  var document: PdfDocument? = null
    set(value) {
      val count = field?.count() ?: 0
      if (count > 0) {
        cache.evictAll()
      }
      field = value
      post {
        if (list.adapter == null) {
          list.adapter = adapter
        } else {
          if (count > 0) {
            adapter.notifyItemRangeRemoved(0, count)
            val newCount = value?.count() ?: 0
            if (newCount > 0) {
              adapter.notifyItemRangeInserted(0, newCount)
            }
          } else {
            adapter.notifyDataSetChanged()
          }
        }
      }
    }

  var listener: Listener? = null

  internal var handler: Handler
  internal val handlerThread = HandlerThread("PdfViewHandler").apply {
    start()
    handler = Handler(this.looper)
  }

  private var fastScroll = FastScrollerBuilder(list)
    .setPopupStyle {
      it.setTextColor(Color.BLACK)
      it.textAlignment = TEXT_ALIGNMENT_CENTER
      it.gravity = Gravity.VERTICAL_GRAVITY_MASK
      it.minWidth = (75 * resources.displayMetrics.density).toInt()
      it.minHeight = (25 * resources.displayMetrics.density).toInt()
      it.setBackgroundResource(R.drawable.oval_background)
      it.setPadding(0, 0, (10 * resources.displayMetrics.density).toInt(), 0)
    }
    .setPopupTextProvider { _, position ->
      "${position + 1} / ${document?.count() ?: 0}"
    }.apply {
      ContextCompat.getDrawable(context, R.drawable.thumb)?.let {
        this.setThumbDrawable(it)
      }
      ContextCompat.getDrawable(context, R.drawable.track)?.let {
        this.setTrackDrawable(it)
      }
    }
    .build()

  @SuppressLint("NotifyDataSetChanged")
  private fun updateCurrentOrientation(force: Boolean = false) {
    val deviceOrientation = resources.configuration.orientation
    if (force || currentOrientation != deviceOrientation) {
      if (deviceOrientation != Configuration.ORIENTATION_LANDSCAPE && deviceOrientation != Configuration.ORIENTATION_PORTRAIT) {
        return
      }
      currentOrientation = deviceOrientation
      list.adapter?.let {
        cache.evictAll()
        post {
          it.notifyItemChanged(currentPage)
        }
      }
    }
  }


  private var currentOrientation = Configuration.ORIENTATION_PORTRAIT
  override fun onSizeChanged(w: Int, h: Int, oldw: Int, oldh: Int) {
    super.onSizeChanged(w, h, oldw, oldh)
    updateCurrentOrientation((oldw == 0 || oldh == 0) && w > 0 && h > 0)
  }

  override fun onAttachedToWindow() {
    super.onAttachedToWindow()
    updateCurrentOrientation()
  }

  var currentPage: Int = 0
    private set

  var canSnap = false
    set(value) {
      field = value
      if (value) {
        snapHelper.attachToRecyclerView(list)
      } else {
        snapHelper.attachToRecyclerView(null)
      }
    }

  val cacheSize = (Runtime.getRuntime().maxMemory() / 1024 / 8).toInt()

  val cache = object : LruCache<Int, Bitmap>(cacheSize) {
    override fun sizeOf(key: Int, value: Bitmap): Int {
      return value.byteCount / 1024
    }
  }

  class PdfViewHolder(root: View, val pageView: PdfPageView, val spinner: ProgressBar) :
    ViewHolder(root)

  class PdfTileViewHolder(root: View, val pageView: PdfTilePageView, val spinner: ProgressBar) :
    ViewHolder(root)


  class PdfViewAdapter(val pdfView: PdfView) : RecyclerView.Adapter<PdfViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): PdfViewHolder {
      val root = RelativeLayout(parent.context)
      root.setBackgroundColor(Color.WHITE)
      root.elevation = 4f

      root.layoutParams = LayoutParams(
        LayoutParams.MATCH_PARENT,
        LayoutParams.MATCH_PARENT
      )

      val pageView = PdfPageView(parent.context)
      pageView.pdfView = pdfView

      pageView.layoutParams = ViewGroup.LayoutParams(
        ViewGroup.LayoutParams.MATCH_PARENT,
        ViewGroup.LayoutParams.MATCH_PARENT
      )

      val spinner = ProgressBar(parent.context)
      spinner.isIndeterminate = true

      val layout = RelativeLayout.LayoutParams(
        RelativeLayout.LayoutParams.WRAP_CONTENT,
        RelativeLayout.LayoutParams.WRAP_CONTENT
      )
      layout.alignWithParent = true
      layout.addRule(
        RelativeLayout.CENTER_IN_PARENT
      )

      root.addView(spinner, layout)

      root.addView(pageView)

      return PdfViewHolder(root, pageView, spinner)
    }

    override fun getItemCount(): Int {
      return pdfView.document?.count() ?: 0
    }

    override fun onBindViewHolder(holder: PdfViewHolder, position: Int) {
      val cached = pdfView.cache[position]
      if (cached != null) {
        holder.pageView.pdfView = pdfView
        holder.pageView.pageIndex = position
        holder.pageView.bitmap = cached
        holder.pageView.invalidate()
        holder.spinner.visibility = View.INVISIBLE
        return
      }

      val width = holder.itemView.width
      val height = holder.itemView.height

      holder.spinner.visibility = VISIBLE


      if (width <= 0 || height <= 0) {
        holder.itemView.doOnNextLayout {
          if (itemCount > 0) {
            holder.itemView.post {
              onBindViewHolder(holder, position)
            }
          }
        }
        // todo
        return
      }

      pdfView.handler.post {
        pdfView.document?.let { document ->
          val bitmap = createBitmap(width, height)
          holder.pageView.pageIndex = position
          holder.pageView.bitmap = bitmap
          document.renderToBitmap(position, bitmap)

          if (holder.bindingAdapterPosition == position) {
            pdfView.cache.put(position, bitmap)
            holder.pageView.invalidate()
            holder.spinner.visibility = View.INVISIBLE
          }
        }
      }

    }

    override fun onViewRecycled(holder: PdfViewHolder) {
      holder.spinner.visibility = VISIBLE
      super.onViewRecycled(holder)
    }
  }

  class PdfTileViewAdapter(val pdfView: PdfView) : RecyclerView.Adapter<PdfTileViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): PdfTileViewHolder {
      val root = RelativeLayout(parent.context)
      root.setBackgroundColor(Color.WHITE)
      root.elevation = 4f

      root.layoutParams = LayoutParams(
        LayoutParams.MATCH_PARENT,
        LayoutParams.MATCH_PARENT
      )

      val pageView = PdfTilePageView(parent.context)

      pageView.layoutParams = ViewGroup.LayoutParams(
        ViewGroup.LayoutParams.MATCH_PARENT,
        ViewGroup.LayoutParams.MATCH_PARENT
      )

      val spinner = ProgressBar(parent.context)
      spinner.isIndeterminate = true

      val layout = RelativeLayout.LayoutParams(
        RelativeLayout.LayoutParams.WRAP_CONTENT,
        RelativeLayout.LayoutParams.WRAP_CONTENT
      )
      layout.alignWithParent = true
      layout.addRule(
        RelativeLayout.CENTER_IN_PARENT
      )

      root.addView(spinner, layout)

      root.addView(pageView)

      return PdfTileViewHolder(root, pageView, spinner)
    }

    override fun getItemCount(): Int {
      return pdfView.document?.count() ?: 0
    }

    override fun onBindViewHolder(holder: PdfTileViewHolder, position: Int) {

    }

    override fun onViewRecycled(holder: PdfTileViewHolder) {
      super.onViewRecycled(holder)
    }
  }

  class PageSpacingDecoration(private val spacePx: Int) : RecyclerView.ItemDecoration() {
    override fun getItemOffsets(
      outRect: Rect, view: View, parent: RecyclerView, state: RecyclerView.State
    ) {
      outRect.bottom = spacePx
    }
  }

  init {
    addView(
      list, LayoutParams(
        LayoutParams.MATCH_PARENT,
        LayoutParams.MATCH_PARENT
      )
    )

    list.scrollBarStyle

    if (canSnap) {
      snapHelper.attachToRecyclerView(list)
    }

    list.addItemDecoration(PageSpacingDecoration((16 * resources.displayMetrics.density).toInt()))

    list.setItemViewCacheSize(5)

    layoutManager.isItemPrefetchEnabled = true

    list.layoutManager = layoutManager

    list.addOnScrollListener(object : RecyclerView.OnScrollListener() {
      override fun onScrolled(recyclerView: RecyclerView, dx: Int, dy: Int) {
        super.onScrolled(recyclerView, dx, dy)

        val recyclerCenterY = recyclerView.height / 2
        var closestPosition = RecyclerView.NO_POSITION
        var closestDistance = Int.MAX_VALUE

        val firstVisible = layoutManager.findFirstVisibleItemPosition()
        val lastVisible = layoutManager.findLastVisibleItemPosition()

        for (i in firstVisible..lastVisible) {
          val view = layoutManager.findViewByPosition(i) ?: continue
          val viewCenterY = (view.top + view.bottom) / 2
          val distance = kotlin.math.abs(viewCenterY - recyclerCenterY)
          if (distance < closestDistance) {
            closestDistance = distance
            closestPosition = i
          }
        }

        if (closestPosition != RecyclerView.NO_POSITION && closestPosition != currentPage) {
          currentPage = closestPosition
          listener?.onPageChange(currentPage)
        }
      }
    })


  }

  interface Listener {
    fun onError(error: Exception)
    fun onLoad(document: PdfDocument)
    fun onPageChange(currentPage: Int)
  }

  @JvmOverloads
  fun loadFromBytes(bytes: ByteArray, password: String? = null) {
    handler.post {
      var document: PdfDocument? = null
      var error: Exception? = null
      try {
        document = Pdf.instance.loadFromBytes(bytes, password)
      } catch (e: Exception) {
        error = e
      } finally {
        if (document != null) {
          this.document = document
          listener?.onLoad(document)
        } else if (error != null) {
          listener?.onError(error)
        }
      }
    }
  }

  @JvmOverloads
  fun loadFromBuffer(buffer: ByteBuffer, password: String? = null) {
    handler.post {
      var document: PdfDocument? = null
      var error: Exception? = null
      try {
        document = if (buffer.isDirect) {
          Pdf.instance.loadFromBuffer(buffer, password)
        } else {
          Pdf.instance.loadFromBytes(buffer.array(), password)
        }
      } catch (e: Exception) {
        error = e
      } finally {
        if (document != null) {
          this.document = document
          listener?.onLoad(document)
        } else if (error != null) {
          listener?.onError(error)
        }
      }
    }
  }

  @JvmOverloads
  fun loadFromPath(path: String, password: String? = null) {
    handler.post {
      var document: PdfDocument? = null
      var error: Exception? = null
      try {
        document = Pdf.instance.loadFromPath(path, password)
      } catch (e: Exception) {
        error = e
      } finally {
        if (document != null) {
          this.document = document
          listener?.onLoad(document)
        } else if (error != null) {
          listener?.onError(error)
        }
      }
    }
  }

  @JvmOverloads
  fun loadFromUrl(url: String, password: String? = null) {
    handler.post {
      var document: PdfDocument? = null
      var error: Exception? = null
      try {
        val value = URI(url).toURL()
        val connection = value.openConnection()
        val len = connection.contentLength
        val stream = connection.getInputStream()
        if (len == -1) {
          val content = value.readBytes()
          document = Pdf.instance.loadFromBytes(content, password)
        } else {
          val channel = Channels.newChannel(stream)
          val buffer = ByteBuffer.allocateDirect(len)

          while (buffer.hasRemaining()) {
            val bytesRead = channel.read(buffer)
            if (bytesRead == -1) break
          }

          buffer.order(ByteOrder.nativeOrder())
          buffer.flip()
          document = Pdf.instance.loadFromBuffer(buffer)
        }

      } catch (e: Exception) {
        error = e
      } finally {
        if (document != null) {
          this.document = document
          listener?.onLoad(document)
        } else if (error != null) {
          listener?.onError(error)
        }
      }
    }
  }
}

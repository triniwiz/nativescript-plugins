package io.github.triniwiz.plugins.pdf

import android.content.Context
import android.graphics.Bitmap
import android.graphics.Canvas
import android.graphics.Color
import android.graphics.PorterDuff
import android.graphics.Rect
import android.util.AttributeSet
import android.util.Log
import android.view.GestureDetector
import android.view.GestureDetector.SimpleOnGestureListener
import android.view.MotionEvent
import android.view.ScaleGestureDetector
import android.view.View
import android.widget.OverScroller
import kotlin.math.max
import androidx.core.graphics.createBitmap
import java.io.File
import java.io.FileOutputStream

class PdfTilePageView @JvmOverloads constructor(
  context: Context, attrs: AttributeSet? = null, defStyleAttr: Int = 0
) : View(context, attrs, defStyleAttr), ScaleGestureDetector.OnScaleGestureListener {
  private var pageIndex = 0
  private var pdfView: PdfView? = null
  private val scaleDetector = ScaleGestureDetector(context, this)
  private var scale = 1f
  private var scrollXOffset = 0f
  private var scrollYOffset = 0f

  internal var lowResBitmap: Bitmap? = null
  internal var highResBitmap: Bitmap? = null
  private var highResRect: Rect? = null

  private var isZooming = false

  private val scroller = OverScroller(context)

  private val gestureListener = object : SimpleOnGestureListener() {
    override fun onScroll(e1: MotionEvent?, e2: MotionEvent, dx: Float, dy: Float): Boolean {
      scrollXOffset += dx
      scrollYOffset += dy
      clampScroll()
      loadVisibleHighResRegion()
      invalidate()
      return true
    }

    override fun onFling(
      e1: MotionEvent?, e2: MotionEvent, velocityX: Float, velocityY: Float
    ): Boolean {
//      scroller.fling(
//        scrollXOffset.toInt(),
//        scrollYOffset.toInt(),
//        (-velocityX).toInt(),
//        (-velocityY).toInt(),
//        0,
//        (pageWidth * scale - width).toInt(),
//        0,
//        (pageHeight * scale - height).toInt()
//      )
      postInvalidateOnAnimation()
      return true
    }
  }

  private val gestureDetector = GestureDetector(context, gestureListener)

  private fun loadLowResPreview() {
    val width = width.takeIf { it > 0 } ?: 800
    val height = height.takeIf { it > 0 } ?: 1000
    lowResBitmap = createBitmap(width, height)
    //   pdfium.renderPageBitmap(pdfDoc!!, lowResBitmap!!, pageIndex, 0, 0, width, height)
    invalidate()
  }

  fun resetZoomAndScroll() {
    scale = 1f
    scrollXOffset = 0f
    scrollYOffset = 0f
    highResBitmap = null
    highResRect = null
  }

  override fun draw(canvas: Canvas) {
    super.draw(canvas)
    canvas.drawColor(Color.WHITE, PorterDuff.Mode.CLEAR)

    val bitmap = highResBitmap ?: lowResBitmap ?: return

    Log.d("com.test", "$bitmap")

    canvas.save()
    canvas.translate(-scrollXOffset, -scrollYOffset)
    canvas.drawBitmap(bitmap, 0f, 0f, null)
    canvas.restore()
  }

  override fun computeScroll() {
    if (scroller.computeScrollOffset()) {
      scrollXOffset = scroller.currX.toFloat()
      scrollYOffset = scroller.currY.toFloat()
      loadVisibleHighResRegion()
      invalidate()
      postInvalidateOnAnimation()
    }
  }

  private fun clampScroll() {
    val contentWidth = (lowResBitmap?.width ?: width) * scale
    val contentHeight = (lowResBitmap?.height ?: height) * scale

    val maxX = max(0f, contentWidth - width)
    val maxY = max(0f, contentHeight - height)

    scrollXOffset = scrollXOffset.coerceIn(0f, maxX)
    scrollYOffset = scrollYOffset.coerceIn(0f, maxY)
  }

  override fun onTouchEvent(event: MotionEvent): Boolean {
    gestureDetector.onTouchEvent(event)
    scaleDetector.onTouchEvent(event)
    if (isZooming || event.pointerCount > 1) {
      parent?.requestDisallowInterceptTouchEvent(true)
    }
    return true
  }

  override fun onScale(detector: ScaleGestureDetector): Boolean {
    val prevScale = scale
    scale *= detector.scaleFactor
    scale = scale.coerceIn(1f, 5f)

    val focusX = detector.focusX
    val focusY = detector.focusY

    val scaleFactor = scale / prevScale


    scrollXOffset = (scrollXOffset + focusX) * scaleFactor - focusX
    scrollYOffset = (scrollYOffset + focusY) * scaleFactor - focusY

    clampScroll()
    loadVisibleHighResRegion()
    invalidate()
    return true
  }

  override fun onScaleBegin(detector: ScaleGestureDetector): Boolean {
    isZooming = true
    return true
  }

  override fun onScaleEnd(detector: ScaleGestureDetector) {
    isZooming = false
  }

  private fun loadVisibleHighResRegion() {
    if (scale == 1f) {
      scrollXOffset = 0f
      scrollYOffset = 0f
      highResBitmap = null
      highResRect = null
      postInvalidate()
      return
    }

    val pdfX = scrollXOffset / scale
    val pdfY = scrollYOffset / scale
    val viewportWidth = width
    val viewportHeight = height

    val region = Rect(
      pdfX.toInt(),
      pdfY.toInt(),
      (pdfX + viewportWidth / scale).toInt(),
      (pdfY + viewportHeight / scale).toInt()
    )

    pdfView?.let {
      it.handler.post {
        val bitmap = createBitmap(viewportWidth, viewportHeight, Bitmap.Config.ARGB_8888)

        val file = File(context.getExternalFilesDir(null), "debug_bitmap.png")
        val fos = FileOutputStream(file)
        bitmap?.compress(Bitmap.CompressFormat.PNG, 100, fos)
        fos.flush()
        fos.close()


        it.document?.renderToBitmap(
          pageIndex,
          bitmap,
          region,
          scale
        )
        highResBitmap = bitmap
        highResRect = region
        postInvalidate()
      }
    }
  }

  fun loadPage(index: Int, pdfView: PdfView) {
    pageIndex = index
    this.pdfView = pdfView
    if (width <= 0 || height <= 0) {
      viewTreeObserver.addOnGlobalLayoutListener {
        loadPage(index, pdfView) // Retry once view is laid out
      }
      return
    }
    pdfView.handler.post {
      val bitmap = createBitmap(width, height, Bitmap.Config.ARGB_8888)
      Log.d("com.test", "loaded $index $bitmap")
      pdfView.document?.renderToBitmap(
        index, bitmap
      )
      lowResBitmap = bitmap
      invalidate()
    }

    /*
     val cached = pdfView.cache[position]
     if (cached != null) {
       holder.spinner.visibility = View.GONE
       holder.imageView.setImageBitmap(cached)
     } else {
       holder.spinner.visibility = View.VISIBLE
       holder.imageView.setImageBitmap(null)
       if (pdfView.width <= 0 || pdfView.height <= 0) {
         return
       }
       pdfView.handler.post {
         val bm = createBitmap(pdfView.width, pdfView.height)
         pdfView.document?.renderToBitmap(position, bm)
         pdfView.cache.put(position, bm)

         if (holder.getBindingAdapterPosition() == position) {
           holder.imageView.post {
             holder.imageView.setImageBitmap(bm)
             holder.spinner.visibility = View.GONE
           }
         }

       }
     }
     */
  }
}

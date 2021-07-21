package com.github.triniwiz.imagecacheit

import android.annotation.SuppressLint
import android.app.Application
import android.content.ComponentCallbacks2
import android.content.Context
import android.content.SharedPreferences
import android.content.res.Configuration
import android.graphics.*
import android.graphics.drawable.BitmapDrawable
import android.graphics.drawable.Drawable
import android.net.Uri
import android.os.Handler
import android.os.Looper
import android.util.AttributeSet
import android.util.Base64
import android.util.DisplayMetrics
import android.util.Log
import android.view.WindowManager
import androidx.appcompat.widget.AppCompatImageView
import com.bumptech.glide.Glide
import com.bumptech.glide.RequestBuilder
import com.bumptech.glide.RequestManager
import com.bumptech.glide.load.DataSource
import com.bumptech.glide.load.engine.DiskCacheStrategy
import com.bumptech.glide.load.engine.GlideException
import com.bumptech.glide.load.model.GlideUrl
import com.bumptech.glide.load.model.LazyHeaderFactory
import com.bumptech.glide.load.model.LazyHeaders
import com.bumptech.glide.load.resource.gif.GifDrawable
import com.bumptech.glide.request.RequestListener
import com.bumptech.glide.request.target.Target
import jp.co.cyberagent.android.gpuimage.GPUImage
import jp.co.cyberagent.android.gpuimage.filter.*
import org.json.JSONException
import org.json.JSONObject
import java.io.File
import java.io.FileNotFoundException
import java.io.FileOutputStream
import java.io.IOException
import java.lang.reflect.InvocationHandler
import java.lang.reflect.InvocationTargetException
import java.lang.reflect.Proxy
import java.util.*
import java.util.concurrent.Executors
import kotlin.collections.HashMap

/**
 * Created by triniwiz on 4/6/20
 */
class ImageView : AppCompatImageView, ImageViewProgressListener {
  var paint = Paint()
  var bitmapShader: BitmapShader? = null
  private val path = Path()
  private val rect = RectF()
  private var scaleW = 1.0
  private var scaleH = 1.0
  var rotationAngle = 0f
    set(rotationAngle) {
      field = rotationAngle
      invalidate()
    }
  private var mMatrix: Matrix? = null
  private var source: Any? = null
  private var mDecodeWidth = 0
  private var mDecodeHeight = 0
  private var mKeepAspectRatio = false
  private var mUseCache = false
  private var mAsync = false
  private var mListener: Any? = null
  private var mAttachedToWindow = false
  private var placeHolder: Any? = null
  private var errorHolder: RequestBuilder<Drawable>? = null
  private var fallbackImage: Any? = null
  var requestManager: RequestManager? = null
  var overlayColor = 0
  var progressListener: ProgressListener? = null
  var eventsListener: EventsListener? = null


  private fun handleImageSource(
    image: ImageView,
    source: Any?,
    decodeWidth: Int,
    decodeHeight: Int,
    keepAspectRatio: Boolean,
    useCache: Boolean,
    async: Boolean
  ) {
    if (source == null) {
      setNullSource()
    } else {
      if (source is Int) {
        image.setSource(source, decodeWidth, decodeHeight, keepAspectRatio, useCache, async)
      } else if (source is File) {
        var src: Uri? = null
        try {
          src = Uri.parse(source.absolutePath)
        } catch (e: Exception) {
        }
        image.setSource(src, decodeWidth, decodeHeight, keepAspectRatio, useCache, async)
      } else {
        if (source is String) {
          if (source.startsWith("res://")) {
            image.setSource(
              getIdentifier(source.replace("res://", ""), "drawable"),
              decodeWidth,
              decodeHeight,
              keepAspectRatio,
              useCache,
              async
            )
          } else {
            image.setSource(
              File(source),
              decodeWidth,
              decodeHeight,
              keepAspectRatio,
              useCache,
              async
            )
          }
        } else {
          image.setSource(source, decodeWidth, decodeHeight, keepAspectRatio, useCache, async)
        }

      }
    }
  }

  private fun handleImage(image: ImageView, source: Any?, sourceType: String) {
    when (sourceType) {
      "placeholder" -> {
        source?.let {
          when (source) {
            is Int -> {
              image.setPlaceHolder(it as Int)
            }
            is Drawable -> {
              image.setPlaceHolder(getRawBitmapDrawable(it))
            }
            is Bitmap -> {
              image.setPlaceHolder(BitmapDrawable(resources, source as Bitmap?))
            }
            is Uri -> {
              image.setPlaceHolder(BitmapDrawable(resources, (source as Uri).toString()))
            }
            is String -> {
              if (source.startsWith("res://")) {
                image.setPlaceHolder(getIdentifier(source.replace("res://", ""), "drawable"))
              } else {
                image.setPlaceHolder(getBitmapDrawable(it))
              }
            }
            is File -> {
              image.setPlaceHolder(getBitmapDrawable(it))
            }
          }
        }
      }
      "errorHolder" -> {
        source?.let {
          when (source) {
            is Int -> {
              image.setErrorHolder(it as Int)
            }
            is Drawable -> {
              image.setErrorHolder(getRawBitmapDrawable(it))
            }
            is Bitmap -> {
              image.setErrorHolder(BitmapDrawable(resources, source as Bitmap?))
            }
            is Uri -> {
              image.setErrorHolder(BitmapDrawable(resources, (source as Uri).toString()))
            }
            is String -> {
              if (source.startsWith("res://")) {
                image.setErrorHolder(getIdentifier(source.replace("res://", ""), "drawable"))
              } else {
                image.setErrorHolder(getBitmapDrawable(it))
              }
            }
            is File -> {
              image.setErrorHolder(getBitmapDrawable(it))
            }
          }
        }
      }
      "fallback" -> {
        source?.let {
          if (source is Int) {
            image.setFallbackImage(it as Int)
          }
          if (source is Drawable) {
            image.setFallbackImage(getRawBitmapDrawable(it))
          }
          if (source is Bitmap) {
            image.setFallbackImage(BitmapDrawable(resources, source as Bitmap?))
          }
          if (source is Uri) {
            image.setFallbackImage(BitmapDrawable(resources, (source as Uri).toString()))
          }
          if (source is String) {
            if (source.startsWith("res://")) {
              image.setFallbackImage(getIdentifier(source.replace("res://", ""), "drawable"))
            } else {
              image.setFallbackImage(getBitmapDrawable(it))
            }
          }
          if (source is File) {
            image.setFallbackImage(getBitmapDrawable(it))
          }
        }
      }
    }
  }

  fun batch(
    data: String,
    src: Any?,
    decodeWidth: Int,
    decodeHeight: Int,
    keepAspectRatio: Boolean,
    useCache: Boolean,
    async: Boolean, errorHolder: Any?, placeholder: Any?, fallback: Any?
  ) {
    apply {
      try {
        val json = JSONObject(data)
        when (json.optString("stretch")) {
          "aspectFit" -> {
            scaleType = ScaleType.FIT_CENTER
          }
          "aspectFill" -> {
            scaleType = ScaleType.CENTER_CROP
          }
          "fill" -> {
            scaleType = ScaleType.FIT_XY
          }
          "none" -> {
            scaleType = ScaleType.MATRIX
          }
        }
        val headers = json.optJSONObject("headers")
        headers?.let {
          val headersMap = HashMap<String, String>()
          it.keys().forEach { key ->
            headersMap[key] = headers.optString(key)
          }
          this.headers = headersMap
        }
        this.setFilter(json.optString("filter"))
        if (json.has("overlayColor")) {
          overlayColor = json.getInt("overlayColor")
        }
        when (json.optInt("priority", 1)) {
          0 -> this.priority = Priority.Low
          2 -> this.priority = Priority.High
          else -> {
            this.priority = Priority.Normal
          }
        }
      } catch (e: Exception) {
      }

      handleImageSource(this, src, decodeWidth, decodeHeight, keepAspectRatio, useCache, async)
      handleImage(this, placeholder, "placeholder")
      handleImage(this, errorHolder, "errorHolder")
      handleImage(this, fallback, "fallback")
    }
  }

  override fun onProgress(key: String?, bytesRead: Long, expectedLength: Long) {
    if (progressListener != null) {
      if (expectedLength <= 0) {
        progressListener!!.onProgress(bytesRead, expectedLength, 100, key)
      } else {
        progressListener!!.onProgress(
          bytesRead,
          expectedLength,
          (bytesRead / expectedLength * 100).toInt(),
          key
        )
      }
    }
  }

  override val granularityPercentage: Float
    get() = 0.1.toFloat()

  enum class Priority {
    Low, Normal, High
  }

  class BasicAuthorization(private val username: String, private val password: String) :
    LazyHeaderFactory {
    override fun buildHeader(): String {
      return "Basic " + Base64.encodeToString("$username:$password".toByteArray(), Base64.NO_WRAP)
    }
  }

  var priority = Priority.Normal
  var headers: HashMap<String, String>? = HashMap()

  constructor(context: Context?) : super(context) {
    init()
  }

  constructor(context: Context, attrs: AttributeSet?) : super(context, attrs) {
    init()
    if (attrs != null) {
      val a = context.obtainStyledAttributes(
        attrs,
        R.styleable.ImageView
      )
      try {
        val filter = a.getString(R.styleable.ImageView_filter)
        filter?.let { setFilter(it) }

        val overlayColor = a.getColor(R.styleable.ImageView_overlayColor, Color.TRANSPARENT)
        if (overlayColor != 0) {
          this.overlayColor = overlayColor
        }
      } finally {
        a.recycle()
      }
    }
  }

  private fun init() {
    preferences = context.getSharedPreferences(IMAGE_CACHE_STORE, Context.MODE_PRIVATE)
    mMatrix = Matrix()
    this.scaleType = ScaleType.FIT_CENTER
    try {
      val BitmapOwner = Class.forName("org.nativescript.widgets.image.BitmapOwner")
      Proxy.newProxyInstance(
        BitmapOwner.classLoader,
        arrayOf(),
        InvocationHandler { proxy, method, args ->
          val name = method.name
          if (name == "setBitmap") {
            setBitmap(args[0] as Bitmap)
            return@InvocationHandler null
          } else if (name == "setDrawable") {
            drawable = args[0] as Drawable
            return@InvocationHandler null
          }
          throw RuntimeException("no method found")
        })
    } catch (e: ClassNotFoundException) {
    }
  }

  override fun onAttachedToWindow() {
    mAttachedToWindow = true
    super.onAttachedToWindow()
    // this.loadImage();
  }

  override fun onDetachedFromWindow() {
    mAttachedToWindow = false
    super.onDetachedFromWindow()
    //        if (requestManager != null) {
//            requestManager.clear(this);
//        }
//        if (source != null) {
//            this.setImageBitmap(null);
//        }
  }

  var emptyObjArray = arrayOf<Any?>(null)
  override fun onMeasure(widthMeasureSpec: Int, heightMeasureSpec: Int) {
    val width = MeasureSpec.getSize(widthMeasureSpec)
    val widthMode = MeasureSpec.getMode(widthMeasureSpec)
    val height = MeasureSpec.getSize(heightMeasureSpec)
    val heightMode = MeasureSpec.getMode(heightMeasureSpec)
    val drawable = this.drawable
    var measureWidth: Int
    var measureHeight: Int
    if (drawable != null) {
      measureWidth = drawable.intrinsicWidth
      measureHeight = drawable.intrinsicHeight
    } else {
      measureWidth = 0
      measureHeight = 0
    }
    val finiteWidth = widthMode != MeasureSpec.UNSPECIFIED
    val finiteHeight = heightMode != MeasureSpec.UNSPECIFIED
    if (measureWidth != 0 && measureHeight != 0 && (finiteWidth || finiteHeight)) {
      computeScaleFactor(
        width,
        height,
        finiteWidth,
        finiteHeight,
        measureWidth.toDouble(),
        measureHeight.toDouble()
      )
      val resultW = Math.round(measureWidth * scaleW).toInt()
      val resultH = Math.round(measureHeight * scaleH).toInt()
      measureWidth = if (finiteWidth) Math.min(resultW, width) else resultW
      measureHeight = if (finiteHeight) Math.min(resultH, height) else resultH
    }
    measureWidth += this.paddingLeft + this.paddingRight
    measureHeight += this.paddingTop + this.paddingBottom
    measureWidth = Math.max(measureWidth, suggestedMinimumWidth)
    measureHeight = Math.max(measureHeight, suggestedMinimumHeight)
    try {
      val CommonLayoutParams = Class.forName("org.nativescript.widgets.CommonLayoutParams")
      val debuggableF = CommonLayoutParams.getDeclaredField("debuggable")
      debuggableF.isAccessible = true
      val debuggable = debuggableF[null] as Int
      if (debuggable > 0) {
        val sb =
          CommonLayoutParams.getDeclaredMethod("getStringBuilder").invoke(null) as StringBuilder
        sb.append("ImageView onMeasure: ")
        sb.append(MeasureSpec.toString(widthMeasureSpec))
        sb.append(", ")
        sb.append(MeasureSpec.toString(heightMeasureSpec))
        sb.append(", stretch: ")
        sb.append(this.scaleType)
        sb.append(", measureWidth: ")
        sb.append(measureWidth)
        sb.append(", measureHeight: ")
        sb.append(measureHeight)
        val tag = CommonLayoutParams.getDeclaredField("TAG")
        tag.isAccessible = true
        val TAG = tag[null] as String
        val log = CommonLayoutParams.getDeclaredMethod("log", *logParams)
        log.isAccessible = true
        log.invoke(null, TAG, sb.toString())
      }
    } catch (e: ClassNotFoundException) {
    } catch (e: NoSuchFieldException) {
    } catch (e: IllegalAccessException) {
    } catch (e: NoSuchMethodException) {
    } catch (e: InvocationTargetException) {
    }
    val widthSizeAndState = resolveSizeAndState(measureWidth, widthMeasureSpec, 0)
    val heightSizeAndState = resolveSizeAndState(measureHeight, heightMeasureSpec, 0)
    setMeasuredDimension(widthSizeAndState, heightSizeAndState)
  }

  private val logParams = arrayOf<Class<*>>(String::class.java, String::class.java)
  private fun computeScaleFactor(
    measureWidth: Int,
    measureHeight: Int,
    widthIsFinite: Boolean,
    heightIsFinite: Boolean,
    nativeWidth: Double,
    nativeHeight: Double
  ) {
    scaleW = 1.0
    scaleH = 1.0
    val scale = this.scaleType
    if ((scale == ScaleType.CENTER_CROP || scale == ScaleType.FIT_CENTER || scale == ScaleType.FIT_XY) &&
      (widthIsFinite || heightIsFinite)
    ) {
      scaleW = if (nativeWidth > 0) measureWidth / nativeWidth else 0.0
      scaleH = if (nativeHeight > 0) measureHeight / nativeHeight else 0.0
      if (!widthIsFinite) {
        scaleW = scaleH
      } else if (!heightIsFinite) {
        scaleH = scaleW
      } else {
        // No infinite dimensions.
        when (scale) {
          ScaleType.FIT_CENTER -> {
            scaleH = if (scaleW < scaleH) scaleW else scaleH
            scaleW = scaleH
          }
          ScaleType.CENTER_CROP -> {
            scaleH = if (scaleW > scaleH) scaleW else scaleH
            scaleW = scaleH
          }
          else -> {
          }
        }
      }
    }
  }

  fun setNullSource() {
    this.setSource(null, 0, 0, false, false, true)
  }

  fun setSource(source: Any?) {
    this.setSource(source, 0, 0, false, false, true)
  }

  fun setSource(
    source: Any?,
    decodeWidth: Int,
    decodeHeight: Int,
    useCache: Boolean,
    async: Boolean
  ) {
    this.setSource(source, decodeWidth, decodeHeight, false, useCache, async)
  }

  fun setSource(
    source: Int,
    decodeWidth: Int,
    decodeHeight: Int,
    useCache: Boolean,
    async: Boolean
  ) {
    this.setSource(source, decodeWidth, decodeHeight, false, useCache, async)
  }

  fun setSource(
    source: Any?,
    decodeWidth: Int,
    decodeHeight: Int,
    keepAspectRatio: Boolean,
    useCache: Boolean,
    async: Boolean
  ) {
    this.source = source
    mDecodeWidth = decodeWidth
    mDecodeHeight = decodeHeight
    mKeepAspectRatio = keepAspectRatio
    mUseCache = useCache
    mAsync = async

    //if (mAttachedToWindow) {
    loadImage()
    // }
  }

  inner class ThumbConfig {
    var enable = false
    var x = 0
    var y = 0
    var width = 0
    var height = 0
    var format: Bitmap.CompressFormat? = null
    var quality = 0
    var filter: String? = null
    var directory: String? = null
    var ext: String? = null
    var key: String? = null
    fun handleThumbCreation(resource: Drawable) {
      if (!enable) {
        return
      }
      var key = thumbConfig.key
      if (key == null || key.isEmpty()) {
        key = source.toString()
      }
      if (preferences == null) {
        preferences = context.getSharedPreferences(IMAGE_CACHE_STORE, Context.MODE_PRIVATE)
      }
      if (preferences?.contains(key) == true) {
        try {
          preferences?.let {
            val json = JSONObject(it.getString(key, ""))
            if (json.has("path")) {
              val path = File(json.getString("path"))
              if (!path.exists()) {
                // file missing recreate
                thumbConfig.createThumb(resource)
              }
            } else {
              // invalid object
              // remove & create
              preferences!!.edit().remove(key).apply()
              thumbConfig.createThumb(resource)
            }
          }
        } catch (e: JSONException) {
          // failed to create object from store path data
          // try creating ?
        }
      } else {
        thumbConfig.createThumb(resource)
      }
    }

    @SuppressLint("ApplySharedPref")
    fun createThumb(resource: Drawable) {
      if (thumbConfig.width > 0 && thumbConfig.height > 0) {
        val pool = Glide.get(context).bitmapPool
        var bm = pool[thumbConfig.width, thumbConfig.height, Bitmap.Config.ARGB_8888]
        val canvas = Canvas(bm)
        canvas.save()
        canvas.translate(thumbConfig.x.toFloat(), thumbConfig.y.toFloat())
        resource.setBounds(0, 0, right, bottom)
        resource.draw(canvas)
        resource.setBounds(0, 0, 0, 0)
        canvas.restore()
        val gpuImage = GPUImage(context)
        handleImageFilters(gpuImage, thumbConfig.filter)
        bm = gpuImage.getBitmapWithFilterApplied(bm)
        val dir = File(thumbConfig.directory, IMAGE_CACHE_DIR)
        if (!dir.exists()) {
          dir.mkdirs()
        }
        val path = File(dir, UUID.randomUUID().toString() + thumbConfig.ext)
        var fos: FileOutputStream? = null
        try {
          fos = FileOutputStream(path)
          bm.compress(thumbConfig.format, thumbConfig.quality, fos)
          var key = thumbConfig.key
          if (key == null || key.isEmpty()) {
            key = source.toString()
          }
          val json = JSONObject()
          json.put("width", thumbConfig.width)
          json.put("height", thumbConfig.height)
          json.put("path", path.absolutePath)
          val editor = preferences!!.edit()
          editor.putString(key, json.toString())
          editor.apply()
        } catch (e: FileNotFoundException) {
          // TODO log thumb creation failure
        } catch (e: JSONException) {
          // TODO log thumb store failure
        } finally {
          try {
            fos?.close()
          } catch (ignored: IOException) {
          }
        }
      }
    }
  }

  var thumbConfig = ThumbConfig()
  var preferences: SharedPreferences? = null
  fun setGenerateThumb(
    enable: Boolean,
    x: Int,
    y: Int,
    width: Int,
    height: Int,
    format: String,
    quality: Int,
    key: String?,
    filter: String?,
    directory: String?
  ) {
    thumbConfig.enable = enable
    thumbConfig.x = x
    thumbConfig.y = y
    thumbConfig.width = width
    thumbConfig.height = height
    if ("png" == format) {
      thumbConfig.ext = ".png"
      thumbConfig.format = Bitmap.CompressFormat.PNG
    } else {
      thumbConfig.ext = ".jpg"
      thumbConfig.format = Bitmap.CompressFormat.JPEG
    }
    thumbConfig.quality = quality
    thumbConfig.filter = filter
    if (directory == null) {
      thumbConfig.directory = context.cacheDir.absolutePath
    } else {
      thumbConfig.directory = directory
    }
    thumbConfig.key = key
  }

  private var mFilter: String? = null
  private var basicAuthorization: BasicAuthorization? = null
  fun addBasicAuth(username: String, password: String) {
    basicAuthorization = BasicAuthorization(username, password)
  }

  private fun getValue(value: String): String {
    return value.substring(value.indexOf('(') + 1, value.indexOf(')'))
  }

  fun setFilter(filter: String?) {
    mFilter = filter
  }

  fun setImageLoadedListener(listener: Any?) {
    mListener = listener
  }

  fun executeListener(success: Boolean) {
    if (mListener == null) {
      return
    }
    try {
      val loaderClass =
        Class.forName("org.nativescript.widgets.image.Worker\$OnImageLoadedListener")
      if (loaderClass.isInstance(mListener)) {
        val onImageLoadedMethod =
          loaderClass.getDeclaredMethod("onImageLoaded", Boolean::class.javaPrimitiveType)
        onImageLoadedMethod.invoke(mListener, success)
      }
    } catch (e: NoSuchMethodException) {
    } catch (e: IllegalAccessException) {
    } catch (e: InvocationTargetException) {
    }
  }

  private fun handleImageFilters(gpuImage: GPUImage, imageFilter: String? = mFilter) {
    val filterGroup = GPUImageFilterGroup()
    if (imageFilter != null) {
      val filters = imageFilter.split(" ").toTypedArray()
      for (filter in filters) {
        val value = getValue(filter)
        if (filter.contains("blur")) {
          var width = 0f
          val realWidth = getWidth()
          if (value.contains("%")) {
            width = getWidth() * value.replace("%", "").toFloat()
          } else if (value.contains("px")) {
            width = value.replace("px", "").toFloat()
          } else if (value.contains("dip")) {
            width =
              value.replace("dip", "").toFloat() * context.resources.displayMetrics.density.toInt()
          }
          if (width > 0f && realWidth > 0f) {
            //  width = width / realWidth;
          }
          if (width > 1f) {
            //  width = 1f;
          }
          if (width > 0f) { /*
                                                RenderScript rs = null;
                                                Allocation input = null;
                                                Allocation output = null;
                                                ScriptIntrinsicBlur blur = null;
                                                try {
                                                    rs = RenderScript.create(getContext());
                                                    rs.setMessageHandler(new RenderScript.RSMessageHandler());
                                                    input = Allocation.createFromBitmap(rs, bitmap);
                                                    output = Allocation.createTyped(rs,input.getType());
                                                    blur = ScriptIntrinsicBlur.create(rs, Element.U8_4(rs));
                                                    blur.setRadius(width);
                                                    blur.setInput(input);
                                                    blur.forEach(output);
                                                    output.copyTo(bitmap);

                                                }catch (Exception e){
                                                }finally {
                                                    if (rs != null) {
                                                        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                                                            RenderScript.releaseAllContexts();
                                                        } else {
                                                            rs.destroy();
                                                        }
                                                    }
                                                    if (input != null) {
                                                        input.destroy();
                                                    }
                                                    if (output != null) {
                                                        output.destroy();
                                                    }
                                                    if (blur != null) {
                                                        blur.destroy();
                                                    }
                                                }
                                                */
            //gpuImage.setImage(FastBlur.blur(((BitmapDrawable) resource).getBitmap(), width, true));
            filterGroup.addFilter(GPUImageGaussianBlurFilter(width, true))

            //gpuImage.setFilter(new SupportRSBlurTransformation());
          }
        }
        if (filter.contains("boxblur")) {
          var width = 0f
          val realWidth = getWidth()
          if (value.contains("%")) {
            width = getWidth() * value.replace("%", "").toFloat()
          } else if (value.contains("px")) {
            width = value.replace("px", "").toFloat()
          } else if (value.contains("dip")) {
            width =
              value.replace("dip", "").toFloat() * context.resources.displayMetrics.density.toInt()
          }
          if (width > 0f && realWidth > 0f) {
            //  width = width / realWidth;
          }
          if (width > 1f) {
            //  width = 1f;
          }
          if (width > 0f) {
            //gpuImage.setImage(FastBlur.blur(((BitmapDrawable) resource).getBitmap(), width, true));
            filterGroup.addFilter(GPUImageBoxBlurFilter(width))

            //gpuImage.setFilter(new SupportRSBlurTransformation());
          }
        }
        if (filter.contains("bilateralblur")) {
          var width = 0f
          val realWidth = getWidth()
          if (value.contains("%")) {
            width = getWidth() * value.replace("%", "").toFloat()
          } else if (value.contains("px")) {
            width = value.replace("px", "").toFloat()
          } else if (value.contains("dip")) {
            width =
              value.replace("dip", "").toFloat() * context.resources.displayMetrics.density.toInt()
          }
          if (width > 0f && realWidth > 0f) {
            //  width = width / realWidth;
          }
          if (width > 1f) {
            //  width = 1f;
          }
          if (width > 0f) {
            //gpuImage.setImage(FastBlur.blur(((BitmapDrawable) resource).getBitmap(), width, true));
            filterGroup.addFilter(GPUImageBilateralBlurFilter(width))

            //gpuImage.setFilter(new SupportRSBlurTransformation());
          }
        } else if (filter.contains("contrast")) {
          if (value.contains("%")) {
            val contrast = value.replace("%", "").toFloat() / 100
            filterGroup.addFilter(GPUImageContrastFilter(contrast))
          }
        } else if (filter.contains("brightness")) {
          if (value.contains("%")) {
            var brightness = value.replace("%", "").toFloat() / 100
            if (brightness >= 0 && brightness < 1) {
              brightness = -1 + brightness
            }
            filterGroup.addFilter(GPUImageBrightnessFilter(brightness))
          }
        } else if (filter.contains("grayscale") || filter.contains("greyscale")) {
          // TODO handle value
          filterGroup.addFilter(GPUImageGrayscaleFilter())
        } else if (filter.contains("invert")) {
          // TODO handle value
          filterGroup.addFilter(GPUImageColorInvertFilter())
        } else if (filter.contains("sepia")) {
          val sepia = value.replace("%", "").toInt().toFloat() / 100
          filterGroup.addFilter(GPUImageSepiaToneFilter(sepia))
        } else if (filter.contains("opacity")) {
          var opacity: Float
          opacity = if (value.contains("%")) {
            value.replace("%", "").toInt().toFloat() / 100
          } else if (value.contains(".")) {
            value.toFloat()
          } else {
            (value.toInt() / 100).toFloat()
          }
          filterGroup.addFilter(GPUImageOpacityFilter(opacity))
        } else if (filter.contains("hue")) {
          var hue = 0f
          if (value.contains("deg")) {
            hue = value.replace("deg", "").toInt().toFloat()
          } else if (value.contains("turn")) {
            hue = value.replace("turn", "").toFloat() * 360f
          }
          filterGroup.addFilter(GPUImageHueFilter(hue))
        } else if (filter.contains("saturate")) {
          var saturate = 1f
          saturate = if (value.contains("%")) {
            value.replace("%", "").toInt().toFloat() / 100
          } else if (value.contains(".")) {
            value.toFloat()
          } else {
            value.toInt().toFloat()
          }
          filterGroup.addFilter(GPUImageSaturationFilter(saturate))
        }
      }
      gpuImage.setFilter(filterGroup)
    }
  }

  private fun drawOverlay(image: Bitmap): Bitmap {
    val pool = Glide.get(context).bitmapPool
    val bitmapCopy = pool[image.width, image.height, Bitmap.Config.ARGB_8888]
    val canvas = Canvas(bitmapCopy)
    val paint = Paint()
    val porterDuffMode = PorterDuff.Mode.MULTIPLY
    paint.colorFilter = PorterDuffColorFilter(overlayColor, porterDuffMode)
    val maskPaint = Paint()
    maskPaint.xfermode = PorterDuffXfermode(PorterDuff.Mode.OVERLAY)
    canvas.drawBitmap(image, 0f, 0f, paint)
    canvas.drawBitmap(image, 0f, 0f, maskPaint)
    return bitmapCopy
  }

  private fun sendLoadEvent(res: Drawable) {
    val handler = Handler(Looper.getMainLooper())
    handler.post {
      if (mListener != null) {
        executeListener(true)
      }
      if (eventsListener != null) {
        eventsListener!!.onLoadedEnd(res)
      }
      setImageDrawable(res)
    }
  }

  private var isLoading: Boolean = false

  @SuppressLint("CheckResult")
  private fun loadImage() {
    if (requestManager != null) {
      requestManager!!.clear(this)
    } else {
      requestManager = Glide.with(this)
    }
    val lazyHeaders = LazyHeaders.Builder()
    if (basicAuthorization != null) {
      lazyHeaders.addHeader("Authorization", basicAuthorization!!)
    }
    if (headers != null) {
      for ((key, value) in headers!!) {
        lazyHeaders.addHeader(key, value)
      }
    }
    val localSrc: Any?
    var hasGlideUrl = false
    if (source is Uri && (source as Uri).scheme != null && (source as Uri).scheme!!.contains("http")) {
      hasGlideUrl = true
      localSrc = GlideUrl(source.toString(), lazyHeaders.build())
      MyAppGlideModule.expect(source.toString(), this)
    } else if (source is String && (source as String).startsWith("http")) {
      hasGlideUrl = true
      localSrc = GlideUrl(source.toString(), lazyHeaders.build())
      MyAppGlideModule.expect(source.toString(), this)
    } else {
      localSrc = source
    }
    var requestBuilder: RequestBuilder<Drawable?>
    requestBuilder = if (localSrc is Int) {
      requestManager!!
        .load(localSrc)
    } else {
      requestManager!!
        .load(localSrc)
    }
    val finalHasGlideUrl = hasGlideUrl
    requestBuilder.addListener(object : RequestListener<Drawable?> {
      override fun onLoadFailed(
        e: GlideException?,
        model: Any?,
        target: Target<Drawable?>?,
        isFirstResource: Boolean
      ): Boolean {
        isLoading = false
        if (finalHasGlideUrl && source != null) {
          MyAppGlideModule.forget(source.toString())
        }
        if (mListener != null) {
          executeListener(false)
        }
        if (eventsListener != null) {
          var message: String? = ""
          if (e != null) {
            message = e.message
          }
          eventsListener!!.onLoadError(message)
          eventsListener!!.onLoadedEnd(null)
        }
        return false
      }

      override fun onResourceReady(
        resource: Drawable?,
        model: Any?,
        target: Target<Drawable?>?,
        dataSource: DataSource?,
        isFirstResource: Boolean
      ): Boolean {
        isLoading = false
        if (resource is GifDrawable) {
          if (finalHasGlideUrl && source != null) {
            MyAppGlideModule.forget(source.toString())
          }
          if (mListener != null) {
            executeListener(true)
          }
          if (eventsListener != null) {
            eventsListener!!.onLoadedEnd(resource)
          }
          return false
        }
        if (source != null) {
          var length = 0
          if (resource is BitmapDrawable) {
            length = resource.bitmap.byteCount / 1024
          }
          onProgress(source.toString(), length.toLong(), 0)
        }
        if (mFilter == null || mFilter!!.isEmpty() || mFilter!!.split(" ").toTypedArray()
            .isEmpty()
        ) {
          if (preferences == null) {
            preferences = context.getSharedPreferences(IMAGE_CACHE_STORE, Context.MODE_PRIVATE)
          }
          executor.submit {
            var res = resource
            if (resource is BitmapDrawable) {
              if (overlayColor != 0) {
                val bitmapResource = drawOverlay(resource.bitmap)
                res = BitmapDrawable(resources, bitmapResource)
              }
            }
            res?.let {
              thumbConfig.handleThumbCreation(it)
              sendLoadEvent(it)
            }
          }
        } else {
          executor.submit(Runnable {
            val gpuImage = GPUImage(context)
            val bitmap: Bitmap
            val pool = Glide.get(context).bitmapPool
            var bmWidth: Int
            var bmHeight: Int
            try {
              bmWidth = resource?.intrinsicWidth ?: 0
              bmHeight = resource?.intrinsicHeight ?: 0
              if (bmWidth <= 0) {
                bmWidth = width
              }
              if (bmHeight <= 0) {
                bmHeight = height
              }
              if (resource is BitmapDrawable) {
                bitmap = resource.bitmap
              } else {
                bitmap = pool[bmWidth, bmHeight, Bitmap.Config.ARGB_8888]
                val canvas = Canvas(bitmap)
                resource?.draw(canvas)
              }
              handleImageFilters(gpuImage)
            } catch (outOfMemoryError: OutOfMemoryError) {
              if (mListener != null) {
                executeListener(false)
              }
              if (eventsListener != null) {
                val message = outOfMemoryError.message
                eventsListener!!.onLoadError(message)
                eventsListener!!.onLoadedEnd(null)
              }
              return@Runnable
            }
            val handler = Handler(Looper.getMainLooper())
            try {
              val filteredImage = gpuImage.getBitmapWithFilterApplied(bitmap)
              var res = BitmapDrawable(resources, filteredImage)
              if (overlayColor != 0) {
                val bitmapResource = drawOverlay(filteredImage)
                res = BitmapDrawable(resources, bitmapResource)
              }
              thumbConfig.createThumb(res)
              sendLoadEvent(res)
            } catch (outOfMemoryError: OutOfMemoryError) {
              // try again ?
              handler.post {
                if (mListener != null) {
                  executeListener(false)
                }
                if (eventsListener != null) {
                  val message = outOfMemoryError.message
                  eventsListener!!.onLoadError(message)
                  eventsListener!!.onLoadedEnd(null)
                }
              }
            }
          })
        }
        return true
      }
    })

    when (priority) {
      Priority.Low -> requestBuilder.priority(com.bumptech.glide.Priority.LOW)
      Priority.High -> requestBuilder.priority(com.bumptech.glide.Priority.HIGH)
      else -> requestBuilder.priority(com.bumptech.glide.Priority.NORMAL)
    }
    placeHolder?.let {
      if (placeHolder is Int) {
        requestBuilder.placeholder(it as Int)
      }
      if (placeHolder is Drawable) {
        requestBuilder.placeholder(getRawBitmapDrawable(it))
      }
      if (placeHolder is Bitmap) {
        requestBuilder.placeholder(BitmapDrawable(resources, placeHolder as Bitmap?))
      }
      if (placeHolder is Uri) {
        requestBuilder.placeholder(BitmapDrawable(resources, placeHolder.toString()))
      }
      if (placeHolder is String) {
        requestBuilder.placeholder(getBitmapDrawable(it))
      }
      if (placeHolder is File) {
        requestBuilder.placeholder(getBitmapDrawable(it))
      }
    }
    fallbackImage?.let {
      if (fallbackImage is Int) {
        requestBuilder.fallback(it as Int)
      }
      if (fallbackImage is Drawable) {
        requestBuilder.fallback(getRawBitmapDrawable(it))
      }
      if (fallbackImage is Bitmap) {
        requestBuilder.fallback(BitmapDrawable(resources, fallbackImage as Bitmap?))
      }
      if (fallbackImage is Uri) {
        requestBuilder.fallback(BitmapDrawable(resources, (fallbackImage as Uri).toString()))
      }
      if (fallbackImage is String) {
        requestBuilder.fallback(getBitmapDrawable(it))
      }
      if (fallbackImage is File) {
        requestBuilder.fallback(getBitmapDrawable(it))
      }
    }
    errorHolder?.let {
      requestBuilder = requestBuilder.error(errorHolder)
    }
    requestBuilder.diskCacheStrategy(DiskCacheStrategy.ALL)
    requestBuilder
      .dontTransform()
      .transform(AspectTransformer(mDecodeWidth, mDecodeHeight, mKeepAspectRatio))

    // requestBuilder.downsample(DownsampleStrategy.AT_MOST);
    if (eventsListener != null) {
      eventsListener!!.onLoadStart()
    }
    isLoading = true
    requestBuilder.into(this)
  }

  var didLoadPlaceHolder = false
  var didLoadFallbackImage = false

  var toDraw = Canvas()
  override fun onDraw(canvas: Canvas) {
    var background: Any? = null
    if (this.background != null && this.background.javaClass.name.contains("BorderDrawable")) {
      background = this.background
    }
    var mBitmap: Bitmap? = null
    if (drawable is BitmapDrawable) {
      mBitmap = (drawable as BitmapDrawable).bitmap
    } else {
      val drawable = drawable
      if (drawable != null) {
        val pool = Glide.get(context).bitmapPool
        if (drawable.intrinsicWidth > 0 && drawable.intrinsicHeight > 0) {
          mBitmap = pool[drawable.intrinsicWidth, drawable.intrinsicHeight, Bitmap.Config.ARGB_8888]
          toDraw.setBitmap(mBitmap)
          drawable.draw(toDraw)
        }
      }
    }
    if (mBitmap != null) {
      var borderTopLeftRadius = 0f
      var borderTopRightRadius = 0f
      var borderBottomRightRadius = 0f
      var borderBottomLeftRadius = 0f
      if (background != null) {
        try {
          val drawMethod = background.javaClass.getDeclaredMethod("draw", Canvas::class.java)
          drawMethod.invoke(background, canvas)
          borderTopLeftRadius = background.javaClass.getDeclaredMethod("getBorderTopLeftRadius")
            .invoke(background) as Float
          borderTopRightRadius = background.javaClass.getDeclaredMethod("getBorderTopRightRadius")
            .invoke(background) as Float
          borderBottomRightRadius =
            background.javaClass.getDeclaredMethod("getBorderBottomRightRadius")
              .invoke(background) as Float
          borderBottomLeftRadius =
            background.javaClass.getDeclaredMethod("getBorderBottomLeftRadius")
              .invoke(background) as Float
        } catch (e: NoSuchMethodException) {
        } catch (e: IllegalAccessException) {
        } catch (e: InvocationTargetException) {
        }
      }

      // Padding?
      val borderTopWidth = this.paddingTop.toFloat()
      val borderRightWidth = this.paddingRight.toFloat()
      val borderBottomWidth = this.paddingBottom.toFloat()
      val borderLeftWidth = this.paddingLeft.toFloat()
      val innerWidth: Float
      val innerHeight: Float
      val rotationDegree = rotationAngle
      val swap = Math.abs(rotationDegree % 180) > 45 && Math.abs(rotationDegree % 180) < 135
      innerWidth = this.width - borderLeftWidth - borderRightWidth
      innerHeight = this.height - borderTopWidth - borderBottomWidth

      // TODO: Capture all created objects here in locals and update them instead...
      path.reset()
      paint.reset()
      val radii = floatArrayOf(
        Math.max(0f, borderTopLeftRadius - borderLeftWidth),
        Math.max(0f, borderTopLeftRadius - borderTopWidth),
        Math.max(0f, borderTopRightRadius - borderRightWidth),
        Math.max(0f, borderTopRightRadius - borderTopWidth),
        Math.max(0f, borderBottomRightRadius - borderRightWidth),
        Math.max(0f, borderBottomRightRadius - borderBottomWidth),
        Math.max(0f, borderBottomLeftRadius - borderLeftWidth),
        Math.max(0f, borderBottomLeftRadius - borderBottomWidth)
      )
      rect.setEmpty()
      rect[borderLeftWidth, borderTopWidth, borderLeftWidth + innerWidth] =
        borderTopWidth + innerHeight
      path.addRoundRect(rect, radii, Path.Direction.CW)
      bitmapShader = BitmapShader(mBitmap, Shader.TileMode.CLAMP, Shader.TileMode.CLAMP)
      var bitmapWidth = mBitmap.width.toFloat()
      var bitmapHeight = mBitmap.height.toFloat()
      val matrix = mMatrix
      matrix!!.reset()
      matrix.postRotate(rotationDegree, bitmapWidth / 2, bitmapHeight / 2)
      if (swap) {
        matrix.postTranslate((bitmapHeight - bitmapWidth) / 2, (bitmapWidth - bitmapHeight) / 2)
        val temp = bitmapWidth
        bitmapWidth = bitmapHeight
        bitmapHeight = temp
      }
      val fittingScaleX = innerWidth / bitmapWidth
      val fittingScaleY = innerHeight / bitmapHeight
      val uniformScale: Float
      var pivotX: Float
      var pivotY: Float
      when (this.scaleType) {
        ScaleType.FIT_CENTER -> {
          uniformScale = Math.min(fittingScaleX, fittingScaleY)
          matrix.postTranslate((innerWidth - bitmapWidth) / 2, (innerHeight - bitmapHeight) / 2)
          matrix.postScale(uniformScale, uniformScale, innerWidth / 2, innerHeight / 2)
          canvas.clipRect(
            borderLeftWidth + (innerWidth - bitmapWidth * uniformScale) / 2,
            borderTopWidth + (innerHeight - bitmapHeight * uniformScale) / 2,
            borderLeftWidth + (innerWidth + bitmapWidth * uniformScale) / 2,
            borderTopWidth + (innerHeight + bitmapHeight * uniformScale) / 2
          )
        }
        ScaleType.CENTER_CROP -> {
          uniformScale = Math.max(fittingScaleX, fittingScaleY)
          matrix.postTranslate((innerWidth - bitmapWidth) / 2, (innerHeight - bitmapHeight) / 2)
          matrix.postScale(uniformScale, uniformScale, innerWidth / 2, innerHeight / 2)
          canvas.clipRect(
            borderLeftWidth + (innerWidth - bitmapWidth * uniformScale) / 2,
            borderTopWidth + (innerHeight - bitmapHeight * uniformScale) / 2,
            borderLeftWidth + (innerWidth + bitmapWidth * uniformScale) / 2,
            borderTopWidth + (innerHeight + bitmapHeight * uniformScale) / 2
          )
        }
        ScaleType.FIT_XY -> matrix.postScale(fittingScaleX, fittingScaleY)
        ScaleType.MATRIX -> canvas.clipRect(
          borderLeftWidth,
          borderTopWidth,
          borderLeftWidth + bitmapWidth,
          borderTopWidth + bitmapHeight
        )
      }
      matrix.postTranslate(borderLeftWidth, borderTopWidth)
      bitmapShader!!.setLocalMatrix(matrix)
      paint.isAntiAlias = true
      paint.isFilterBitmap = true
      paint.shader = bitmapShader
      val filter = this.colorFilter
      if (filter != null) {
        paint.colorFilter = filter
      }
      canvas.drawPath(path, paint)
    }
  }

  fun setBitmap(value: Bitmap) {
    setImageBitmap(value)
  }

  fun setUri(uri: Uri?) {
    source = uri
    invalidate()
  }

  fun setDrawable(asyncDrawable: Drawable?) {
    setImageDrawable(asyncDrawable)
  }

  private fun getBitmapDrawable(source: Any): BitmapDrawable {
    var bitmap: Bitmap? = null
    try {
      val options = BitmapFactory.Options()
      options.inJustDecodeBounds = true
      if (source is String) {
        bitmap = BitmapFactory.decodeFile(source, options)
        val viewSize = ISize(-1, -1)
        if (width > 0) {
          viewSize.width = width
        }
        if (height > 0) {
          viewSize.height = height
        }
        val iSize = getRequestedImageSize(ISize(options.outWidth, options.outHeight), viewSize)
        options.inSampleSize = calculateInSampleSize(options, iSize.width, iSize.height)
        options.inJustDecodeBounds = false
        bitmap = BitmapFactory.decodeFile(source, options)
      } else if (source is File) {
        bitmap = BitmapFactory.decodeFile(source.absolutePath, options)
        val viewSize = ISize(-1, -1)
        if (width > 0) {
          viewSize.width = width
        }
        if (height > 0) {
          viewSize.height = height
        }
        val iSize = getRequestedImageSize(ISize(options.outWidth, options.outHeight), viewSize)
        options.inSampleSize = calculateInSampleSize(options, iSize.width, iSize.height)
        options.inJustDecodeBounds = false
        bitmap = BitmapFactory.decodeFile(source.absolutePath, options)
      }
    } catch (e: Exception) {
    }
    return BitmapDrawable(resources, bitmap)
  }

  private fun getRawBitmapDrawable(source: Any): BitmapDrawable {
    var image: Bitmap? = null
    val srcWidth: Int
    val srcHeight: Int
    val width = width
    val height = height
    val pool = Glide.get(context).bitmapPool
    var bm: Bitmap
    val opts = BitmapFactory.Options()
    if (source is String) {
      if (source.startsWith("res://")) {
        val id = getResourceId(context, source, "drawable")
        if (id > 0) {
          opts.inJustDecodeBounds = true
          BitmapFactory.decodeResource(this.resources, id, opts)
          srcWidth = opts.outWidth
          srcHeight = opts.outHeight
          opts.inBitmap = pool[width, height, opts.inPreferredConfig]
          opts.inJustDecodeBounds = false
          opts.inScaled = true
          opts.inDensity = srcWidth
          opts.inTargetDensity = width
          opts.inSampleSize = calculateInSampleSize(opts, width, height)
          opts.inTargetDensity = width * opts.inSampleSize
          // worth it ?
          // opts.inScreenDensity = platforms.screen.mainScreen.scale;
          image = BitmapFactory.decodeResource(this.resources, id, opts)
        }
      } else {
        var path = source
        if (source.startsWith("~/")) {
          // path = fs.path.join(fs.knownFolders.currentApp().path, source.replace('~/', ''));
        } else if (source.startsWith("file://")) {
          path = source.replace("file://", "")
        }
        opts.inJustDecodeBounds = true
        BitmapFactory.decodeFile(path.toString(), opts)
        srcWidth = opts.outWidth
        srcHeight = opts.outHeight
        opts.inBitmap = pool[width, height, opts.inPreferredConfig]
        opts.inJustDecodeBounds = false
        opts.inScaled = true
        opts.inDensity = srcWidth
        opts.inSampleSize = calculateInSampleSize(opts, width, height)
        opts.inTargetDensity = width * opts.inSampleSize
        image = BitmapFactory.decodeFile(path.toString(), opts)
      }
    } else if (source is Int) {
      if (source > 0) {
        opts.inJustDecodeBounds = true
        BitmapFactory.decodeResource(resources, source, opts)
        srcWidth = opts.outWidth
        srcHeight = opts.outHeight
        opts.inBitmap = pool[width, height, Bitmap.Config.ARGB_8888]
        opts.inJustDecodeBounds = false
        opts.inScaled = false
        opts.inDensity = srcWidth
        val viewSize = ISize(-1, -1)
        if (getWidth() > 0) {
          viewSize.width = getWidth()
        }
        if (getHeight() > 0) {
          viewSize.height = getHeight()
        }
        val iSize = getRequestedImageSize(ISize(opts.outWidth, opts.outHeight), viewSize)
        opts.inSampleSize = calculateInSampleSize(opts, iSize.width, iSize.height)
        //opts.inSampleSize = 1;//ImageView.calculateInSampleSize(opts, width, height);
        opts.inTargetDensity = width * opts.inSampleSize
        image = BitmapFactory.decodeResource(resources, source, opts)
      }
    } else if (source is Bitmap) {
      image = source
      srcWidth = image!!.width
      srcHeight = image.height
    } else if (source is BitmapDrawable) {
      image = (placeHolder as BitmapDrawable?)!!.bitmap
      srcWidth = image.width
      srcHeight = image.height
    }
    return BitmapDrawable(resources, image)
  }

  private fun getIdentifier(name: String, type: String): Int {
    return getResourceId(context, name, type)
  }

  internal class ISize {
    var width: Int
    var height: Int

    constructor(width: Int, height: Int) {
      this.width = width
      this.height = height
    }

    constructor(width: Double, height: Double) {
      this.width = width.toInt()
      this.height = height.toInt()
    }
  }

  private fun getAspectSafeDimensions(
    sourceWidth: Int,
    sourceHeight: Int,
    reqWidth: Int,
    reqHeight: Int
  ): ISize {
    if (sourceHeight == 0 || sourceWidth == 0 || reqWidth == 0 || reqHeight == 0) {
      return ISize(0, 0)
    }
    val widthCoef = sourceWidth / reqWidth
    val heightCoef = sourceHeight / reqHeight
    val aspectCoef = Math.min(widthCoef, heightCoef)
    return ISize(
      Math.floor((sourceWidth / aspectCoef).toDouble()),
      Math.floor((sourceHeight / aspectCoef).toDouble())
    )
  }

  private fun getRequestedImageSize(src: ISize, options: ISize): ISize {
    val metrics = DisplayMetrics()
    val manager = context.getSystemService(Context.WINDOW_SERVICE) as WindowManager
    manager?.defaultDisplay?.getRealMetrics(metrics)
    var reqWidth: Int
    var reqHeight: Int
    reqWidth = if (options.width >= 1) {
      options.width
    } else {
      Math.min(src.width, metrics.widthPixels)
    }
    reqHeight = if (options.height >= 1) {
      options.height
    } else {
      Math.min(src.height, metrics.heightPixels)
    }
    val safeAspectSize = getAspectSafeDimensions(src.width, src.height, reqWidth, reqHeight)
    reqWidth = safeAspectSize.width
    reqHeight = safeAspectSize.height
    return ISize(reqWidth, reqHeight)
  }

  fun setFallbackImage(drawable: Drawable?) {
    fallbackImage = drawable
  }

  fun setFallbackImage(bitmap: Bitmap?) {
    fallbackImage = bitmap
  }

  fun setFallbackImage(uri: Uri) {
    var fallback: Any = uri
    if (fallback.toString().startsWith("res://")) {
      fallback = getIdentifier(fallback.toString(), "drawable")
    }
    fallbackImage = fallback
  }

  fun setFallbackImage(path: Path?) {
    fallbackImage = path
  }

  fun setFallbackImage(id: Int) {
    fallbackImage = id
  }

  fun setFallbackImage(file: File?) {
    fallbackImage = file
  }

  fun setFallbackImage(path: String) {
    fallbackImage = if (path.startsWith("res://")) {
      getIdentifier(path, "drawable")
    } else {
      path
    }
  }

  fun setPlaceHolder(drawable: Drawable?) {
    placeHolder = drawable
  }

  fun setPlaceHolder(bitmap: Bitmap?) {
    placeHolder = bitmap
  }

  fun setPlaceHolder(uri: Uri) {
    placeHolder = if (uri.toString().startsWith("res://")) {
      getIdentifier(uri.toString(), "drawable")
    } else {
      uri
    }
  }

  fun setPlaceHolder(file: File?) {
    placeHolder = file
  }

  fun setPlaceHolder(path: String) {
    placeHolder = if (path.startsWith("res://")) {
      getIdentifier(path, "drawable")
    } else {
      path
    }
  }

  fun setPlaceHolder(id: Int) {
    placeHolder = id
  }

  fun setErrorHolder(drawable: Drawable?) {
    errorHolder = Glide.with(this).load(drawable)
  }

  fun setErrorHolder(bitmap: Bitmap?) {
    errorHolder = Glide.with(this).load(bitmap)
  }

  fun setErrorHolder(uri: Uri) {
    var error: Any = uri
    if (error.toString().startsWith("res://")) {
      error = getIdentifier(uri.toString(), "drawable")
    }
    errorHolder = Glide.with(this).load(error)
  }

  fun setErrorHolder(path: Path?) {
    errorHolder = Glide.with(this).load(path)
  }

  fun setErrorHolder(id: Int) {
    errorHolder = Glide.with(this).load(id)
  }

  fun setErrorHolder(file: File?) {
    errorHolder = Glide.with(this).load(file)
  }

  fun setErrorHolder(path: String) {
    var error: Any = path
    if (path.startsWith("res://")) {
      error = getIdentifier(path, "drawable")
    }
    errorHolder = Glide.with(this).load(error)
  }

  fun addHeader(key: String, value: String) {
    headers!![key] = value
  }

  companion object {
    private const val EPSILON = 1E-05
    private val executor = Executors.newFixedThreadPool(4)

    @JvmStatic
    var IMAGE_CACHE_DIR = "image_cache_it"

    @JvmStatic
    var IMAGE_CACHE_STORE = "com.github.triniwiz.imagecacheit.image_cache_it_store"
    private fun calculateInSampleSize(
      options: BitmapFactory.Options,
      reqWidth: Int,
      reqHeight: Int
    ): Int {
      // Raw height and width of image
      val height = options.outHeight
      val width = options.outWidth
      var inSampleSize = 1
      if (reqHeight != 0 && reqWidth != 0 && (height > reqHeight || width > reqWidth)) {
        if (height == 0 || width == 0) {
          return inSampleSize
        }
        val halfHeight = height / 2
        val halfWidth = width / 2
        while (halfHeight / inSampleSize >= reqHeight
          && halfWidth / inSampleSize >= reqWidth
        ) {
          inSampleSize *= 2
        }
      }
      return inSampleSize
    }

    private fun getResourceId(context: Context, name: String, type: String): Int {
      val id: Int
      val packageName = context.packageName
      id = try {
        val className = Class.forName("$packageName.R$$type")
        className.getDeclaredField(name.replace("res://", ""))[null] as Int
      } catch (e: ClassNotFoundException) {
        0
      } catch (e: NoSuchFieldException) {
        0
      } catch (e: IllegalAccessException) {
        0
      }
      return id
    }

    private var componentCallbacks2: ComponentCallbacks2? = null

    @JvmStatic
    fun enableAutoMM(application: Application?) {
      if (application == null) {
        return
      }
      if (componentCallbacks2 != null) {
        application.unregisterComponentCallbacks(componentCallbacks2)
        componentCallbacks2 = null
      }
      componentCallbacks2 = object : ComponentCallbacks2 {
        override fun onConfigurationChanged(newConfig: Configuration) {}
        override fun onLowMemory() {
          Glide.get(application.applicationContext).clearMemory()
        }

        override fun onTrimMemory(level: Int) {
          Glide.get(application.applicationContext).trimMemory(level)
        }
      }
      application.registerComponentCallbacks(componentCallbacks2)
    }

    @JvmStatic
    fun disableAutoMM(application: Application?) {
      if (application == null) {
        return
      }
      if (componentCallbacks2 != null) {
        application.unregisterComponentCallbacks(componentCallbacks2)
        componentCallbacks2 = null
      }
    }

    @JvmStatic
    fun clear(context: Context?, memoryOnly: Boolean) {
      val glide = Glide.get(context!!)
      glide.clearMemory()
      if (!memoryOnly) {
        executor.submit { glide.clearDiskCache() }
      }
    }

    @JvmStatic
    fun trimMemory(context: Context?, level: Int) {
      Glide.get(context!!).trimMemory(level)
    }
  }
}

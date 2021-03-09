package com.github.triniwiz.imagecacheit

import android.content.Context
import android.os.Handler
import android.os.Looper
import com.bumptech.glide.Glide
import com.bumptech.glide.GlideBuilder
import com.bumptech.glide.Registry
import com.bumptech.glide.annotation.Excludes
import com.bumptech.glide.annotation.GlideModule
import com.bumptech.glide.integration.okhttp3.OkHttpLibraryGlideModule
import com.bumptech.glide.integration.okhttp3.OkHttpUrlLoader
import com.bumptech.glide.load.engine.bitmap_recycle.LruBitmapPool
import com.bumptech.glide.load.engine.cache.InternalCacheDiskCacheFactory
import com.bumptech.glide.load.engine.cache.LruResourceCache
import com.bumptech.glide.load.model.GlideUrl
import com.bumptech.glide.load.resource.bitmap.ExifInterfaceImageHeaderParser
import com.bumptech.glide.module.AppGlideModule
import okhttp3.Interceptor
import okhttp3.MediaType
import okhttp3.OkHttpClient
import okhttp3.ResponseBody
import okio.*
import java.io.IOException
import java.io.InputStream
import java.util.*

@GlideModule
@Excludes(OkHttpLibraryGlideModule::class)
class MyAppGlideModule : AppGlideModule() {
  override fun registerComponents(context: Context, glide: Glide, registry: Registry) {
    super.registerComponents(context, glide, registry)
    val okHttpClient = OkHttpClient()
    registry.replace(GlideUrl::class.java, InputStream::class.java, OkHttpUrlLoader.Factory(okHttpClient))
    val client = OkHttpClient.Builder()
      .addInterceptor(createInterceptor(progressListener))
      .build()
    val factory = OkHttpUrlLoader.Factory(client)
    registry.replace(GlideUrl::class.java, InputStream::class.java, factory)
    for (parser in registry.imageHeaderParsers) {
      if (parser is ExifInterfaceImageHeaderParser) {
        registry.imageHeaderParsers.remove(parser)
      }
    }
  }

  override fun applyOptions(context: Context, builder: GlideBuilder) {
    if (maxDiskCacheSize > 0) {
      builder.setDiskCache(InternalCacheDiskCacheFactory(context, maxDiskCacheSize))
    }
    if (maxMemoryCacheSize > 0) {
      builder.setMemoryCache(LruResourceCache(maxMemoryCacheSize))
      builder.setBitmapPool(LruBitmapPool(maxMemoryCacheSize))
    }
  }

  private interface ResponseProgressListener {
    fun update(key: String, bytesRead: Long, contentLength: Long)
  }

  private class DispatchingProgressListener internal constructor() : ResponseProgressListener {
    private val LISTENERS: MutableMap<String, ImageViewProgressListener> = WeakHashMap()
    private val PROGRESSES: MutableMap<String, Long> = HashMap()
    private val handler: Handler = Handler(Looper.getMainLooper())
    fun forget(key: String) {
      LISTENERS.remove(key)
      PROGRESSES.remove(key)
    }

    fun expect(key: String, listener: ImageViewProgressListener) {
      LISTENERS[key] = listener
    }

    override fun update(key: String, bytesRead: Long, contentLength: Long) {
      val listener = LISTENERS[key] ?: return
      if (contentLength <= bytesRead) {
        forget(key)
      }
      if (needsDispatch(key, bytesRead, contentLength, listener.granularityPercentage)) {
        handler.post { listener.onProgress(key, bytesRead, contentLength) }
      }
    }

    private fun needsDispatch(key: String, current: Long, total: Long, granularity: Float): Boolean {
      if (granularity == 0f || current == 0L || total == current) {
        return true
      }
      val percent = 100f * current / total
      val currentProgress = (percent / granularity).toLong()
      val lastProgress = PROGRESSES[key]
      return if (lastProgress == null || currentProgress != lastProgress) {
        PROGRESSES[key] = currentProgress
        true
      } else {
        false
      }
    }

  }

  private class OkHttpProgressResponseBody internal constructor(
    private val key: String,
    private val responseBody: ResponseBody?,
    private val progressListener: ResponseProgressListener
  ) : ResponseBody() {
    private var bufferedSource: BufferedSource? = null
    override fun contentType(): MediaType? {
      return responseBody!!.contentType()
    }

    override fun contentLength(): Long {
      return responseBody!!.contentLength()
    }

    override fun source(): BufferedSource {
      if (bufferedSource == null) {
        bufferedSource = Okio.buffer(source(responseBody!!.source()))
      }
      return bufferedSource!!
    }

    private fun source(source: Source): Source {
      return object : ForwardingSource(source) {
        var totalBytesRead = 0L
        @Throws(IOException::class)
        override fun read(sink: Buffer, byteCount: Long): Long {
          val bytesRead = super.read(sink, byteCount)
          val fullLength = responseBody!!.contentLength()
          if (bytesRead == -1L) {
            // this source is exhausted
            totalBytesRead = fullLength
          } else {
            totalBytesRead += bytesRead
          }
          progressListener.update(key, totalBytesRead, fullLength)
          return bytesRead
        }
      }
    }
  }

  companion object {
    private val progressListener = DispatchingProgressListener()
    @JvmStatic
    var maxDiskCacheSize: Long = 0
    @JvmStatic
    var maxMemoryCacheSize: Long = 0
    @JvmStatic
    var maxDiskCacheAge: Long = 0
    private fun createInterceptor(listener: ResponseProgressListener): Interceptor {
      return Interceptor { chain ->
        val request = chain.request()
        val response = chain.proceed(request)
        val key = request.url().toString()
        response
          .newBuilder()
          .body(OkHttpProgressResponseBody(key, response.body(), listener))
          .build()
      }
    }

    fun forget(key: String) {
      progressListener.forget(key)
    }

    fun expect(key: String, listener: ImageViewProgressListener) {
      progressListener.expect(key, listener)
    }
  }
}

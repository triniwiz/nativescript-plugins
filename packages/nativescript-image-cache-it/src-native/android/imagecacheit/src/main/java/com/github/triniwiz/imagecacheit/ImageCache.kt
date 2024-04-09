package com.github.triniwiz.imagecacheit

import android.annotation.SuppressLint
import android.content.Context
import android.os.Handler
import android.os.Looper
import com.bumptech.glide.Glide
import com.bumptech.glide.RequestManager
import com.bumptech.glide.load.DataSource
import com.bumptech.glide.load.engine.GlideException
import com.bumptech.glide.load.model.GlideUrl
import com.bumptech.glide.load.model.LazyHeaders
import com.bumptech.glide.request.RequestListener
import com.bumptech.glide.request.RequestOptions
import com.bumptech.glide.request.target.Target
import java.io.File
import java.util.concurrent.ExecutorService
import java.util.concurrent.Executors

class ImageCache {
  companion object {
    @JvmStatic
    private var manager: RequestManager? = null

    @JvmStatic
    private var glide: Glide? = null

    @JvmStatic
    private var executorService: ExecutorService? = null

    @JvmStatic
    private var mContext: Context? = null

    @JvmStatic
    fun init(context: Context?) {
      if (context != mContext) {
        manager = null
      }
      if (manager == null) {
        manager = Glide.with(context!!)
        glide = null
      }
      if (glide == null) {
        glide = Glide.get(context!!)
      }
      if (executorService == null) {
        executorService = Executors.newCachedThreadPool()
      }
      mContext = context
    }

    @SuppressLint("CheckResult")
    @JvmStatic
    fun hasItem(url: String?, callback: Callback?) {
      val asyncCallback = makeAsync(callback);
      val requestOptions = RequestOptions()
      requestOptions.onlyRetrieveFromCache(true)
      manager?.asFile()?.load(url)?.apply(requestOptions)?.listener(object : RequestListener<File> {
        override fun onLoadFailed(
          e: GlideException?,
          model: Any?,
          target: Target<File>,
          isFirstResource: Boolean
        ): Boolean {
          asyncCallback?.onError(e)
          return false
        }

        override fun onResourceReady(
          resource: File,
          model: Any,
          target: Target<File>,
          dataSource: DataSource,
          isFirstResource: Boolean
        ): Boolean {
          asyncCallback?.onSuccess(resource.absolutePath)
          return false
        }
      })?.submit()

    }


    @JvmStatic
    fun getItemWithHeaders(url: String?, headers: Map<String, String>, callback: Callback?) {
      val asyncCallback = makeAsync(callback);


      val lazyHeaders = LazyHeaders.Builder()

      for ((key, value) in headers) {
        lazyHeaders.addHeader(key, value)
      }

      val gurl: GlideUrl? = if (url != null) GlideUrl(url, lazyHeaders.build()) else {
        null
      }


      val requestOptions = RequestOptions()
      manager?.asFile()
        ?.load(gurl)
        ?.apply(requestOptions)
        ?.listener(object : RequestListener<File> {
          override fun onLoadFailed(
            e: GlideException?,
            model: Any?,
            target: Target<File>,
            isFirstResource: Boolean
          ): Boolean {
            asyncCallback?.onError(e)
            return false
          }

          override fun onResourceReady(
            resource: File,
            model: Any,
            target: Target<File>,
            dataSource: DataSource,
            isFirstResource: Boolean
          ): Boolean {
            asyncCallback?.onSuccess(resource.absolutePath)
            return false
          }
        })
        ?.submit()
    }


    @JvmStatic
    fun getItem(url: String?, options: Map<String?, String?>?, callback: Callback?) {
      val asyncCallback = makeAsync(callback);
      val requestOptions = RequestOptions()
      manager?.asFile()
        ?.load(url)
        ?.apply(requestOptions)
        ?.listener(object : RequestListener<File> {
          override fun onLoadFailed(
            e: GlideException?,
            model: Any?,
            target: Target<File>,
            isFirstResource: Boolean
          ): Boolean {
            asyncCallback?.onError(e)
            return false
          }

          override fun onResourceReady(
            resource: File,
            model: Any,
            target: Target<File>,
            dataSource: DataSource,
            isFirstResource: Boolean
          ): Boolean {
            asyncCallback?.onSuccess(resource.absolutePath)
            return false
          }
        })
        ?.submit()
    }

    @JvmStatic
    fun clear() {
      if (glide != null) {
        glide!!.clearMemory()
        executorService!!.execute { glide!!.clearDiskCache() }
      }
    }

    @JvmStatic
    private fun makeAsync(callback: Callback?): Callback? {
      if (callback == null) {
        return null;
      }
      val handler = Handler(Looper.myLooper()!!);
      return object : Callback {
        override fun onSuccess(value: Any?) {
          handler.post { callback.onSuccess(value); }
        }

        override fun onError(value: Any?) {
          handler.post { callback.onError(value); }
        }
      }
    }
  }

  interface Callback {
    fun onSuccess(value: Any?)
    fun onError(value: Any?)
  }
}

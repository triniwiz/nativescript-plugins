package com.github.triniwiz.imagecacheit

import android.annotation.SuppressLint
import android.content.Context
import com.bumptech.glide.Glide
import com.bumptech.glide.RequestManager
import com.bumptech.glide.load.DataSource
import com.bumptech.glide.load.engine.GlideException
import com.bumptech.glide.request.RequestListener
import com.bumptech.glide.request.RequestOptions
import com.bumptech.glide.request.target.Target
import java.io.File
import java.util.concurrent.ExecutorService
import java.util.concurrent.Executors

object ImageCache {
  var manager: RequestManager? = null
  var glide: Glide? = null
  var executorService: ExecutorService? = null
  fun init(context: Context?) {
    if (manager == null) {
      manager = Glide.with(context!!)
    }
    if (glide == null) {
      glide = Glide.get(context!!)
    }
    if (executorService == null) {
      executorService = Executors.newCachedThreadPool()
    }
  }

  @SuppressLint("CheckResult")
  fun hasItem(url: String?, callback: Callback?) {
    val requestOptions = RequestOptions()
    requestOptions.onlyRetrieveFromCache(true)
    manager?.asFile()?.load(url)?.apply(requestOptions)?.listener(object : RequestListener<File> {
      override fun onLoadFailed(e: GlideException?, model: Any, target: Target<File>, isFirstResource: Boolean): Boolean {
        callback?.onError(e)
        return false
      }

      override fun onResourceReady(resource: File, model: Any, target: Target<File>, dataSource: DataSource, isFirstResource: Boolean): Boolean {
        callback?.onSuccess(resource.absolutePath)
        return false
      }
    })?.submit()

  }

  fun getItem(url: String?, options: Map<String?, String?>?, callback: Callback?) {
    val requestOptions = RequestOptions()
    manager?.asFile()
      ?.load(url)
      ?.apply(requestOptions)
      ?.listener(object : RequestListener<File> {
        override fun onLoadFailed(e: GlideException?, model: Any, target: Target<File>, isFirstResource: Boolean): Boolean {
          callback?.onError(e)
          return false
        }

        override fun onResourceReady(resource: File, model: Any, target: Target<File>, dataSource: DataSource, isFirstResource: Boolean): Boolean {
          callback?.onSuccess(resource.absolutePath)
          return false
        }
      })
      ?.submit()
  }

  fun clear() {
    if (glide != null) {
      glide!!.clearMemory()
      executorService!!.execute { glide!!.clearDiskCache() }
    }
  }

  interface Callback {
    fun onSuccess(value: Any?)
    fun onError(value: Any?)
  }
}

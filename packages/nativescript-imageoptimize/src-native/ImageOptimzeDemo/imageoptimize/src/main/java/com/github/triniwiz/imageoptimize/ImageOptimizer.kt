package com.github.triniwiz.imageoptimize

import android.content.Context
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.os.Build
import id.zelory.compressor.Compressor
import id.zelory.compressor.constraint.destination
import id.zelory.compressor.constraint.format
import id.zelory.compressor.constraint.quality
import id.zelory.compressor.constraint.resolution
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import java.io.File
import java.io.FileInputStream
import java.lang.Exception

class ImageOptimizer {
  companion object {
    @JvmStatic
    fun optimize(file: File, context: Context, options: Map<String, Any?>, callback: Callback) {
      GlobalScope.launch {
        try {
          val result = Compressor.compress(context, file) {
            val height = options["height"]
            val width = options["width"]
            FileInputStream(file).use {
              val bitmapInfo = BitmapFactory.decodeFileDescriptor(it.fd)
              if (height != null && width == null) {
                val ratio = (height as Int) / bitmapInfo.height
                resolution(bitmapInfo.width * ratio, height)
              }

              if (width != null && height == null) {
                val ratio = width as Int / bitmapInfo.width;
                resolution(width, bitmapInfo.height * ratio)
              }

              bitmapInfo.recycle()

              if (width != null && height != null) {
                resolution(width as Int, height as Int)
              }

              options["quality"].let {
                if (it != null) {
                  quality(it as Int)
                }
              }

              options["format"].let {
                when (it as? String) {
                  "png" -> {
                    format(Bitmap.CompressFormat.PNG)
                  }
                  "webp" -> {
                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
                      format(Bitmap.CompressFormat.WEBP_LOSSY)
                    } else {
                      @Suppress("DEPRECATION")
                      format(Bitmap.CompressFormat.WEBP)
                    }
                  }
                  else -> {
                    format(Bitmap.CompressFormat.JPEG)
                  }
                }
              }

              val dest = options["dest"]
              if (dest != null) {
                destination(File(dest as String))
              } else {
                val tmpDir = File(context.cacheDir, "TNSOPTIMIZER")
                if (!tmpDir.exists()) {
                  tmpDir.mkdir()
                }
                destination(tmpDir)
              }
            }
          }
          callback.onSuccess(File(result, file.name))
        } catch (e: Exception) {
          callback.onError(e.localizedMessage ?: "Failed to optimize with unknown error")
        }
      }
    }
  }

  interface Callback {
    fun onSuccess(file: File)
    fun onError(message: String)
  }
}

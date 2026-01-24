package io.github.triniwiz.plugins.pdf

import android.graphics.Bitmap
import java.nio.ByteBuffer
import java.util.concurrent.Executors

class PdfImage(internal var nativeImage: Long) {
  @Synchronized
  @Throws(Throwable::class)
  protected fun finalize() {
    if (nativeImage != 0L) {
      nativeRelease(nativeImage)
      nativeImage = 0
    }
  }

  val width: Int
    get() {
      if (nativeImage == 0L) {
        return 0
      }
      return nativeGetWidth(nativeImage)
    }

  val height: Int
    get() {
      if (nativeImage == 0L) {
        return 0
      }
      return nativeGetHeight(nativeImage)
    }

  companion object {
    private val executors = Executors.newCachedThreadPool()

    @JvmStatic
    private external fun nativeGetWidth(
      instance: Long,
    ): Int

    @JvmStatic
    private external fun nativeGetHeight(
      instance: Long,
    ): Int


    @JvmStatic
    private external fun nativeEncodedImage(
      instance: Long,
      image: ByteArray
    ): Long

    @JvmStatic
    private external fun nativeEncodedImageBuffer(
      instance: Long,
      image: ByteBuffer
    ): Long


    @JvmStatic
    private external fun nativeImage(
      instance: Long,
      image: ByteArray,
      width: Int,
      height: Int
    ): Long

    @JvmStatic
    private external fun nativeImageBuffer(
      instance: Long,
      image: ByteBuffer,
      width: Int,
      height: Int
    ): Long


    @JvmStatic
    private external fun nativeImageBitmap(
      instance: Long,
      image: Bitmap
    ): Long

    @JvmStatic
    private external fun nativeRelease(
      image: Long
    )


    @JvmStatic
    fun fromData(data: ByteArray, width: Int, height: Int): PdfImage? {
      val image = nativeImage(Pdf.PDFInstance, data, width, height)
      if (image == 0L) {
        return null
      }
      return PdfImage(image)
    }

    @JvmStatic
    fun fromDataAsync(data: ByteArray, width: Int, height: Int, callback: (PdfImage?) -> Unit) {
      executors.execute {
        callback(fromData(data, width, height))
      }
    }

    @JvmStatic
    fun fromData(data: ByteBuffer, width: Int, height: Int): PdfImage? {
      val image = nativeImageBuffer(Pdf.PDFInstance, data, width, height)
      if (image == 0L) {
        return null
      }
      return PdfImage(image)
    }

    @JvmStatic
    fun fromDataAsync(data: ByteBuffer, width: Int, height: Int, callback: (PdfImage?) -> Unit) {
      executors.execute {
        callback(fromData(data, width, height))
      }
    }

    @JvmStatic
    fun fromEncodedData(data: ByteBuffer): PdfImage? {
      val image = nativeEncodedImageBuffer(Pdf.PDFInstance, data)
      if (image == 0L) {
        return null
      }
      return PdfImage(image)
    }

    @JvmStatic
    fun fromEncodedDataAsync(data: ByteBuffer, callback: (PdfImage?) -> Unit) {
      executors.execute {
        callback(fromEncodedData(data))
      }
    }

    @JvmStatic
    fun fromEncodedData(data: ByteArray): PdfImage? {
      val image = nativeEncodedImage(Pdf.PDFInstance, data)
      if (image == 0L) {
        return null
      }
      return PdfImage(image)
    }

    @JvmStatic
    fun fromEncodedDataAsync(data: ByteArray, callback: (PdfImage?) -> Unit) {
      executors.execute {
        callback(fromEncodedData(data))
      }
    }

    @JvmStatic
    fun fromBitmap(data: Bitmap): PdfImage? {
      val image = nativeImageBitmap(Pdf.PDFInstance, data)
      if (image == 0L) {
        return null
      }
      return PdfImage(image)
    }


    @JvmStatic
    fun fromBitmapAsync(data: Bitmap, callback: (PdfImage?) -> Unit) {
      executors.execute {
        callback(fromBitmap(data))
      }
    }
  }
}

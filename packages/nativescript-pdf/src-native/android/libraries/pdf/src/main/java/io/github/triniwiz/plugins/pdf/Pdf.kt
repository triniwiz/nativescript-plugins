package io.github.triniwiz.plugins.pdf

import android.util.Log
import java.nio.ByteBuffer

class Pdf {
  var scale: Float = 1F
  @JvmOverloads
  fun loadFromPath(path: String, password: String? = null): PdfDocument? {
    val document = nativeLoadFromPath(PDFInstance, path, password)
    if (document == 0L) {
      return null
    }
    return PdfDocument(document)
  }

  @JvmOverloads
  fun loadFromBuffer(buffer: ByteBuffer, password: String? = null): PdfDocument? {
    val document = nativeLoadFromBuffer(PDFInstance, buffer, password)
    if (document == 0L) {
      return null
    }
    return PdfDocument(document)
  }

  @JvmOverloads
  fun loadFromBytes(bytes: ByteArray, password: String? = null): PdfDocument? {
    val document = nativeLoadFromBytes(PDFInstance, bytes, password)
    if (document == 0L) {
      return null
    }
    return PdfDocument(document)
  }

  companion object {
    internal var PDFInstance: Long = 0


    val instance = Pdf()
    internal var isLibraryLoaded = false
    init {
      loadLib()
    }

    @JvmStatic
    fun loadLib() {
      if (!isLibraryLoaded) {
        try {
          System.loadLibrary("pdfnative")
          isLibraryLoaded = true
          PDFInstance = nativeInit()
        } catch (e: Exception) {
          e.printStackTrace()
        }
      }
    }


    @JvmStatic
    private external fun nativeInit(): Long

    @JvmStatic
    private external fun nativeRelease(instance: Long)

    @JvmStatic
    private external fun nativeLoadFromPath(instance: Long, path: String, password: String?): Long

    @JvmStatic
    private external fun nativeLoadFromBuffer(
      instance: Long,
      buffer: ByteBuffer,
      password: String?
    ): Long

    @JvmStatic
    private external fun nativeLoadFromBytes(
      instance: Long,
      bytes: ByteArray,
      password: String?
    ): Long

  }
}

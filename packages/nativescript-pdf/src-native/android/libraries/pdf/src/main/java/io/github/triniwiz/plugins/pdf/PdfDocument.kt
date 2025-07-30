package io.github.triniwiz.plugins.pdf

import android.graphics.Bitmap
import android.graphics.Rect
import android.util.Base64
import io.github.triniwiz.plugins.pdf.table.ColumnDef
import io.github.triniwiz.plugins.pdf.table.ColumnKey
import io.github.triniwiz.plugins.pdf.table.PdfTable
import io.github.triniwiz.plugins.pdf.table.StyleDef
import io.github.triniwiz.plugins.pdf.table.TableCellOrString
import java.nio.ByteBuffer
import java.util.concurrent.Executors

class PdfDocument internal constructor(document: Long?, config: PdfDocumentConfig? = null) {
  private val executor = Executors.newSingleThreadExecutor()
  var config = PdfDocumentConfig()
    private set

  @JvmOverloads
  constructor(config: PdfDocumentConfig? = null) : this(null, null) {
    config?.let {
      this.config = it
    }
  }

  internal var nativeDocument = 0L

  init {
    nativeDocument = document ?: nativeInit(
      Pdf.PDFInstance,
      this.config.size.type,
      this.config.size.width,
      this.config.size.height,
      this.config.orientation.value,
      this.config.units.value,
      this.config.deviceScale
    )
  }

  @Synchronized
  @Throws(Throwable::class)
  protected fun finalize() {
    if (nativeDocument != 0L) {
      nativeRelease(nativeDocument)
      nativeDocument = 0
    }
  }

  val width: Float
    get() {
      return nativeGetWidth(nativeDocument)
    }

  val height: Float
    get() {
      return nativeGetHeight(nativeDocument)
    }

  fun count(): Int {
    return nativeCount(nativeDocument)
  }

  var fontSize: Float
    get() {
      return nativeGetFontSize(nativeDocument)
    }
    set(value) {
      nativeSetFontSize(nativeDocument, value)
    }


  @JvmOverloads
  fun setFontColor(r: Int, g: Int, b: Int, a: Int = 255) {
    nativeSetFontColor(nativeDocument, r, g, b, a)
  }

  @JvmOverloads
  fun setDrawColor(r: Int, g: Int, b: Int, a: Int = 255) {
    nativeSetDrawColor(nativeDocument, r, g, b, a)
  }

  @JvmOverloads
  fun setFillColor(r: Int, g: Int, b: Int, a: Int = 255) {
    nativeSetFillColor(nativeDocument, r, g, b, a)
  }

  var lineWidth: Float
    get() {
      return nativeGetLineWidth(nativeDocument)
    }
    set(value) {
      nativeSetLineWidth(nativeDocument, value)
    }


  @JvmOverloads
  fun addText(text: String, x: Float, y: Float, options: PdfTextOptions? = null) {
    val opts = options ?: PdfTextOptions()
    if (opts.angle.isMatrix) {
      nativeAddTextMatrix(
        nativeDocument,
        text,
        x,
        y,
        opts.align.value,
        opts.baseline.value,
        opts.angle.matrix.a,
        opts.angle.matrix.b,
        opts.angle.matrix.c,
        opts.angle.matrix.d,
        opts.angle.matrix.e,
        opts.angle.matrix.f,
        opts.rotationDirection.value,
        opts.charSpace,
        opts.horizontalScale,
        opts.lineHeightFactor,
        opts.maxWidth
      )
    } else {
      nativeAddText(
        nativeDocument,
        text,
        x,
        y,
        opts.align.value,
        opts.baseline.value,
        opts.angle.angle,
        opts.rotationDirection.value,
        opts.charSpace,
        opts.horizontalScale,
        opts.lineHeightFactor,
        opts.maxWidth
      )
    }
  }

  @JvmOverloads
  fun addImage(
    image: String,
    mime: String,
    x: Float,
    y: Float,
    width: Int? = -1,
    height: Int? = -1
  ) {
    when (mime) {
      "JPG", "JPEG", "PNG", "WEBP" -> {
        val input = image.split(",")
        var img: ByteArray = if (input.size > 1) {
          input[1].toByteArray()
        } else {
          image.toByteArray()
        }
        val decoded = Base64.decode(img, Base64.NO_WRAP)
        nativeAddImage(nativeDocument, decoded, x, y, width ?: -1, height ?: -1)
      }
    }
  }


  @JvmOverloads
  fun addImage(bitmap: Bitmap, x: Float, y: Float, width: Int? = -1, height: Int? = -1) {
    nativeAddImageBitmap(nativeDocument, bitmap, x, y, width ?: -1, height ?: -1)
  }

  @JvmOverloads
  fun addImage(bytes: ByteArray, x: Float, y: Float, width: Int? = -1, height: Int? = -1) {
    nativeAddImage(nativeDocument, bytes, x, y, width ?: -1, height ?: -1)
  }

  @JvmOverloads
  fun addImage(buffer: ByteBuffer, x: Float, y: Float, width: Int? = -1, height: Int? = -1) {
    nativeAddImageBuffer(nativeDocument, buffer, x, y, width ?: -1, height ?: -1)
  }

  @JvmOverloads
  fun addPage(
    size: PdfPagerSize? = null, orientation: PdfOrientation? = null
  ) {
    nativeAddPage(
      nativeDocument,
      size?.type ?: 0,
      size?.width ?: PdfStandardPaperSize.A4.width.toFloat(),
      size?.height ?: PdfStandardPaperSize.A4.height.toFloat(),
      orientation?.value ?: PdfOrientation.Portrait.value
    )
  }


  @JvmOverloads
  fun circle(x: Float, y: Float, r: Float, style: PdfStyle = PdfStyle.S) {
    nativeCircle(nativeDocument, x, y, r, style.value)
  }


  @JvmOverloads
  fun ellipse(x: Float, y: Float, rx: Float, ry: Float, style: PdfStyle = PdfStyle.S) {
    nativeEllipse(nativeDocument, x, y, rx, ry, style.value)
  }

  @JvmOverloads
  fun rect(x: Float, y: Float, width: Float, height: Float, style: PdfStyle = PdfStyle.S) {
    nativeRect(nativeDocument, x, y, width, height, style.value)
  }

  @JvmOverloads
  fun roundedRect(
    x: Float,
    y: Float,
    width: Float,
    height: Float,
    rx: Float,
    ry: Float,
    style: PdfStyle = PdfStyle.S
  ) {
    nativeRoundedRect(nativeDocument, x, y, width, height, rx, ry, style.value)
  }


  @JvmOverloads
  fun renderToBitmap(page: Int, bitmap: Bitmap, rect: Rect? = null, scale: Float = 1f) {
    if (rect != null) {
      nativeRenderToBitmapWithRect(
        nativeDocument,
        page,
        bitmap,
        rect.left,
        rect.top,
        rect.width(),
        rect.height(),
        scale
      )
    } else {
      nativeRenderToBitmap(nativeDocument, page, bitmap)
    }
  }


  private fun getWidth(measureOutput: Long): Float {
    return java.lang.Float.intBitsToFloat(-0x1 and (measureOutput shr 32).toInt())
  }

  private fun getHeight(measureOutput: Long): Float {
    return java.lang.Float.intBitsToFloat(-0x1 and measureOutput.toInt())
  }

  fun table(config: PdfTable): String {
    val output = nativeTable(
      nativeDocument,
      config.columns,
      config.columnStyles?.keys?.toTypedArray(),
      config.columnStyles?.values?.toTypedArray(),
      config.styles,
      config.alternateRowStyles,
      config.headStyles,
      config.bodyStyles,
      config.footStyles,
      config.head,
      config.body,
      config.foot,
      config.position.first,
      config.position.second,
      config.theme.value,
      config.pageBreak.value,
      config.showHead.value,
      config.showFoot.value
    )
    return "{width:${"%.2f".format(getWidth(output))}, height:${"%.2f".format(getHeight(output))}}"
  }

  fun saveSync(path: String) {
    val msg = nativeSaveToFile(nativeDocument, path)
    if (msg != null) {
      throw Error(msg)
    }
  }

  fun save(path: String, callback: (Error?) -> Void) {
    executor.execute {
      val msg = nativeSaveToFile(nativeDocument, path)
      if (msg != null) {
        callback(Error(msg))
      } else {
        callback(null)
      }
    }
  }

  companion object {

    init {
      Pdf.loadLib()
    }

    @JvmStatic
    private external fun nativeInit(
      pdfInstance: Long,
      type: Int,
      width: Float,
      height: Float,
      orientation: Int,
      units: Int,
      deviceScale: Float
    ): Long

    @JvmStatic
    private external fun nativeRelease(instance: Long)

    @JvmStatic
    private external fun nativeCount(instance: Long): Int

    @JvmStatic
    private external fun nativeSetFontSize(instance: Long, size: Float)

    @JvmStatic
    private external fun nativeGetFontSize(instance: Long): Float

    @JvmStatic
    private external fun nativeSetFontColor(instance: Long, r: Int, g: Int, b: Int, a: Int)

    @JvmStatic
    private external fun nativeSetDrawColor(instance: Long, r: Int, g: Int, b: Int, a: Int)

    @JvmStatic
    private external fun nativeSetFillColor(instance: Long, r: Int, g: Int, b: Int, a: Int)

    @JvmStatic
    private external fun nativeSetLineWidth(instance: Long, width: Float)

    @JvmStatic
    private external fun nativeGetLineWidth(instance: Long): Float

    @JvmStatic
    private external fun nativeGetWidth(instance: Long): Float

    @JvmStatic
    private external fun nativeGetHeight(instance: Long): Float

    @JvmStatic
    private external fun nativeAddText(
      instance: Long, text: String, x: Float, y: Float, align: Int,
      baseline: Int,
      angle: Float,
      rotationDirection: Int,
      charSpace: Int,
      horizontalScale: Float,
      lineHeightFactor: Float,
      maxWidth: Int
    )

    @JvmStatic
    private external fun nativeAddTextMatrix(
      instance: Long, text: String, x: Float, y: Float, align: Int,
      baseline: Int,
      matrixA: Float,
      matrixB: Float,
      matrixC: Float,
      matrixD: Float,
      matrixE: Float,
      matrixF: Float,
      rotationDirection: Int,
      charSpace: Int,
      horizontalScale: Float,
      lineHeightFactor: Float,
      maxWidth: Int
    )

    @JvmStatic
    private external fun nativeAddImageBitmap(
      instance: Long, bitmap: Bitmap, x: Float, y: Float, width: Int, height: Int
    )

    @JvmStatic
    private external fun nativeAddImage(
      instance: Long, image: ByteArray, x: Float, y: Float, width: Int, height: Int
    )

    @JvmStatic
    private external fun nativeAddImageBuffer(
      instance: Long, image: ByteBuffer, x: Float, y: Float, width: Int, height: Int
    )

    @JvmStatic
    private external fun nativeAddPage(
      instance: Long,
      sizeType: Int,
      sizeWidth: Float,
      sizeHeight: Float,
      orientation: Int,
    )

    @JvmStatic
    private external fun nativeCircle(
      instance: Long,
      x: Float,
      y: Float,
      r: Float,
      style: Int
    )

    @JvmStatic
    private external fun nativeEllipse(
      instance: Long,
      x: Float,
      y: Float,
      rx: Float,
      ry: Float,
      style: Int
    )

    @JvmStatic
    private external fun nativeRect(
      instance: Long,
      x: Float,
      y: Float,
      width: Float,
      height: Float,
      style: Int
    )

    @JvmStatic
    private external fun nativeRoundedRect(
      instance: Long,
      x: Float,
      y: Float,
      width: Float,
      height: Float,
      rx: Float,
      ry: Float,
      style: Int
    )


    @JvmStatic
    private external fun nativeRenderToBitmap(
      instance: Long,
      index: Int,
      bitmap: Bitmap,
    )

    @JvmStatic
    private external fun nativeRenderToBitmapWithRect(
      instance: Long,
      index: Int,
      bitmap: Bitmap,
      x: Int,
      y: Int,
      width: Int,
      height: Int,
      scale: Float,
    )


    @JvmStatic
    private external fun nativeTable(
      instance: Long,
      columns: Array<ColumnDef>?,
      columnStylesKeys: Array<ColumnKey>?,
      columnStylesValue: Array<StyleDef>?,
      styles: StyleDef?,
      alternateRowStyles: StyleDef?,
      headStyles: StyleDef?,
      bodyStyles: StyleDef?,
      footStyles: StyleDef?,
      head: Array<Array<TableCellOrString>>,
      body: Array<Array<TableCellOrString>>,
      foot: Array<Array<TableCellOrString>>,
      first: Float,
      second: Float,
      theme: Int,
      pageBreak: Int,
      showHead: Int,
      showFoot: Int,
    ): Long


    @JvmStatic
    private external fun nativeSaveToFile(
      instance: Long,
      path: String
    ): String?
  }
}

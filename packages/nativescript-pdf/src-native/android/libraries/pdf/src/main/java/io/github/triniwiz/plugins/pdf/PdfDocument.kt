package io.github.triniwiz.plugins.pdf

import android.graphics.Bitmap
import android.graphics.Rect
import android.os.Build
import android.util.Base64
import android.util.Base64InputStream
import io.github.triniwiz.plugins.pdf.table.ColumnDef
import io.github.triniwiz.plugins.pdf.table.ColumnKey
import io.github.triniwiz.plugins.pdf.table.PdfTable
import io.github.triniwiz.plugins.pdf.table.StyleDef
import io.github.triniwiz.plugins.pdf.table.TableCellOrString
import java.io.ByteArrayOutputStream
import java.io.IOException
import java.io.InputStream
import java.io.Reader
import java.io.StringReader
import java.nio.ByteBuffer
import java.nio.charset.StandardCharsets
import java.util.concurrent.Executors


class PdfDocument internal constructor(document: Long?, config: PdfDocumentConfig? = null) {
  private val executor = Executors.newSingleThreadExecutor()
  private var vfs: MutableMap<String, String> = mutableMapOf()
  var config = PdfDocumentConfig()
    private set

  @JvmOverloads
  constructor(config: PdfDocumentConfig? = null) : this(null, null) {
    config?.let {
      this.config = it
    }
  }

  internal var nativeDocument = 0L

  class ReaderInputStream(private val reader: Reader) : InputStream() {
    private val charBuffer = CharArray(4096) // temporary char buffer
    private var byteBuffer = ByteArray(0) // holds converted bytes
    private var bytePos = 0

    @Throws(IOException::class)
    override fun read(): Int {
      if (bytePos >= byteBuffer.size) {
        val charsRead: Int = reader.read(charBuffer)
        if (charsRead == -1) return -1 // end of stream


        // Convert chars to bytes (UTF-8)
        byteBuffer = String(charBuffer, 0, charsRead).toByteArray(StandardCharsets.UTF_8)
        bytePos = 0
      }
      return byteBuffer[bytePos++].toInt() and 0xFF
    }

    @Throws(IOException::class)
    override fun read(b: ByteArray, off: Int, len: Int): Int {
      var i: Int
      i = 0
      while (i < len) {
        val next = read()
        if (next == -1) return if (i == 0) -1 else i
        b[off + i] = next.toByte()
        i++
      }
      return i
    }
  }

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

  internal fun pagesInfo(buffer: ByteBuffer) {
    nativePageInfo(nativeDocument, buffer)
  }

  var fontSize: Float
    get() {
      return nativeGetFontSize(nativeDocument)
    }
    set(value) {
      nativeSetFontSize(nativeDocument, value)
    }

  fun addFileToVFS(fileName: String, fileContent: String) {
    vfs[fileName] = fileContent
  }

  fun existsFileInVFS(fileName: String): Boolean {
    return vfs.contains(fileName)
  }

  fun getFileFromVFS(fileName: String): String? {
    return vfs[fileName]
  }


  @JvmOverloads
  fun addFont(
    postScriptNameOrPath: String,
    id: String,
    fontStyle: String = "normal",
    fontWeight: String = "normal",
    encoding: String = "Identity-H"
  ): Boolean {
    var added = false
    var isTTF = true
    var isCid = true
    if (encoding == "StandardEncoding" || encoding == "MacRomanEncoding" || encoding == "WinAnsiEncoding") {
      isTTF = false
      isCid = false
    }
    if (postScriptNameOrPath.startsWith("/")) {
      added =
        nativeAddFont(nativeDocument, postScriptNameOrPath, id, fontStyle, fontWeight, isTTF, isCid)
    } else {
      vfs[postScriptNameOrPath]?.let { fontData ->
        try {
          val os = ByteArrayOutputStream()
          val reader = StringReader(fontData)
          val b64is = Base64InputStream(ReaderInputStream(reader), Base64.DEFAULT)
          if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            b64is.transferTo(os)
          } else {
            val buffer = ByteArray(8192)
            var read: Int
            while ((b64is.read(buffer).also { read = it }) != -1) {
              os.write(buffer, 0, read)
            }
          }


          val raw = os.toByteArray()
          if (raw.isNotEmpty()) {
            added = nativeAddFontWithBytes(
              nativeDocument,
              raw,
              id,
              fontStyle,
              fontWeight,
              isTTF,
              isCid
            )
          }
        } catch (_: Exception) {
        }
      }
    }
    return added
  }

  @JvmOverloads
  fun setFont(fontName: String, fontStyle: String, fontWeight: String? = null) {
    var weight = fontWeight
    if (fontWeight == null) {
      when (fontStyle) {
        "normal", "bold", "italic" -> {
          weight = fontStyle
        }

        "bolditalic" -> {
          weight = "bold"
        }

        else -> {}
      }
    }
    nativeSetFont(nativeDocument, fontName, fontStyle, weight ?: "normal")
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
        val img: ByteArray = if (input.size > 1) {
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


  private fun getFirst(measureOutput: Long): Float {
    return java.lang.Float.intBitsToFloat(-0x1 and (measureOutput shr 32).toInt())
  }

  private fun getSecond(measureOutput: Long): Float {
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
      config.showFoot.value,
      config.margin.left,
      config.margin.leftChanged,
      config.margin.top,
      config.margin.topChanged,
      config.margin.right,
      config.margin.rightChanged,
      config.margin.bottom,
      config.margin.bottomChanged
    )

    val json = """
    {
        "x": %.2f,
        "y": %.2f
    }
""".trimIndent().format(getFirst(output), getSecond(output))


    return json
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
    private external fun nativePageInfo(
      pdfInstance: Long,
      buffer: ByteBuffer
    ): Long

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
    private external fun nativeSetFont(
      instance: Long,
      fontName: String,
      fontStyle: String,
      fontWeight: String,
    )

    @JvmStatic
    private external fun nativeAddFont(
      instance: Long,
      path: String,
      id: String,
      style: String,
      weight: String,
      isTTF: Boolean,
      isCidFont: Boolean
    ): Boolean


    @JvmStatic
    private external fun nativeAddFontWithBuffer(
      instance: Long,
      buffer: ByteBuffer,
      id: String,
      style: String,
      weight: String,
      isTTF: Boolean,
      isCidFont: Boolean,
    ): Boolean


    @JvmStatic
    private external fun nativeAddFontWithBytes(
      instance: Long,
      bytes: ByteArray,
      id: String,
      style: String,
      weight: String,
      isTTF: Boolean,
      isCidFont: Boolean,
    ): Boolean

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
      marginLeft: Float,
      marginLeftChanged: Boolean,
      marginTop: Float,
      marginTopChanged: Boolean,
      marginRight: Float,
      marginRightChanged: Boolean,
      marginBottom: Float,
      marginBottomChanged: Boolean,
    ): Long


    @JvmStatic
    private external fun nativeSaveToFile(
      instance: Long,
      path: String
    ): String?
  }
}

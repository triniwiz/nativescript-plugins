package io.github.triniwiz.plugins.pdf

// standard 0 , custom 1
class PdfPagerSize internal constructor(
  internal var type: Int, internal var width: Float, internal var height: Float
) {

  companion object {
    @JvmStatic
    fun custom(width: Float, height: Float): PdfPagerSize {
      return PdfPagerSize(1, width, height)
    }

    @JvmStatic
    fun standard(size: PdfStandardPaperSize): PdfPagerSize {
      return PdfPagerSize(0, size.width.toFloat(), size.height.toFloat())
    }

    @JvmStatic
    fun a4(): PdfPagerSize {
      return standard(PdfStandardPaperSize.A4)
    }
  }
}

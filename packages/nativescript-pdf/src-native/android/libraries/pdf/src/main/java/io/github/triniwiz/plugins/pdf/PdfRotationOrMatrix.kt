package io.github.triniwiz.plugins.pdf

class PdfRotationOrMatrix private constructor(internal val isMatrix: Boolean) {
  internal var angle = 1f
  internal var matrix = Matrix(0f, 0f, 0f, 0f, 0f, 0f)

  data class Matrix(
    val a: Float,
    val b: Float,
    val c: Float,
    val d: Float,
    val e: Float,
    val f: Float
  )

  companion object {
    val zero = angle(0f)

    @JvmStatic
    fun angle(value: Float): PdfRotationOrMatrix {
      return PdfRotationOrMatrix(false).apply {
        angle = value
      }
    }

    @JvmStatic
    fun matrix(
      a: Float,
      b: Float,
      c: Float,
      d: Float,
      e: Float,
      f: Float
    ): PdfRotationOrMatrix {
      return PdfRotationOrMatrix(true).apply {
        matrix = Matrix(a, b, c, d, e, f)
      }
    }
  }
}

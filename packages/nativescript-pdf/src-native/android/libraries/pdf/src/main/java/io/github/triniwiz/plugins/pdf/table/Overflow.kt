package io.github.triniwiz.plugins.pdf.table

enum class Overflow(val value: Int) {
  LineBreak(0),
  Ellipsize(1),
  Visible(2),
  Hidden(3);

  companion object {
    @JvmStatic
    fun default(): Overflow {
      return LineBreak
    }
  }
}

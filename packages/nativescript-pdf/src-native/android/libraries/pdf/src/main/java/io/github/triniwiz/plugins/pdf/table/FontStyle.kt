package io.github.triniwiz.plugins.pdf.table

enum class FontStyle(val value: Int) {
  Normal(0),
  Bold(1),
  Italic(2),
  BoldItalic(3);

  companion object {
    @JvmStatic
    fun default(): FontStyle {
      return Normal
    }
  }
}

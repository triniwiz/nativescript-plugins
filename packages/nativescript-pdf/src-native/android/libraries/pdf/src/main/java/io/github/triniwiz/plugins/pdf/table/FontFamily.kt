package io.github.triniwiz.plugins.pdf.table

enum class FontFamily(val value: Int) {
  Helvetica(0),
  Times(1),
  Courier(2);

  companion object {
    @JvmStatic
    fun default(): FontFamily {
      return Helvetica
    }
  }
}

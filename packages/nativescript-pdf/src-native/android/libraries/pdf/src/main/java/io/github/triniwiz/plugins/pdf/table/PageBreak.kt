package io.github.triniwiz.plugins.pdf.table

enum class PageBreak(val value: Int) {
  Auto(0),
  Avoid(1),
  Always(2);

  companion object {
    @JvmStatic
    fun default(): PageBreak {
      return Auto
    }
  }
}

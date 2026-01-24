package io.github.triniwiz.plugins.pdf.table

enum class ShowFoot(val value: Int) {
  EveryPage(0),
  LastPage(1),
  Never(2);

  companion object {
    @JvmStatic
    fun default(): ShowFoot {
      return EveryPage
    }
  }
}

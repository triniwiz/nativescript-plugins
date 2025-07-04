package io.github.triniwiz.plugins.pdf.table

enum class ShowHead(val value: Int) {
  EveryPage(0),
  FirstPage(1),
  Never(2);

  companion object {
    @JvmStatic
    fun default(): ShowHead {
      return EveryPage
    }
  }
}

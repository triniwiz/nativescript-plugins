package io.github.triniwiz.plugins.pdf.table

enum class TableTheme(val value: Int) {
  Striped(0),
  Grid(1),
  Plain(2);

  companion object {
    @JvmStatic
    fun default(): TableTheme {
      return Striped
    }
  }
}

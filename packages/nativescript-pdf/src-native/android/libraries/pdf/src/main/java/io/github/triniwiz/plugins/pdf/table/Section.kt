package io.github.triniwiz.plugins.pdf.table

enum class Section(val value: Int) {
  Head(0),
  Body(1),
  Foot(2);

  companion object {
    @JvmStatic
    fun from(value: Int): Section {
      return when (value) {
        0 -> Head
        1 -> Body
        2 -> Foot
        else -> {
          throw IllegalArgumentException("Unknown Section value: $value")
        }
      }
    }
  }
}

package io.github.triniwiz.plugins.pdf.table

sealed class CellWidth {
  data object Auto : CellWidth()
  data object Wrap : CellWidth()
  data class Fixed(val points: Float) : CellWidth()
}

package io.github.triniwiz.plugins.pdf.table

data class TableCell(
  val content: String,
  val rowSpan: Int,
  val colSpan: Int,
  val style: StyleDef
)

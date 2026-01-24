package io.github.triniwiz.plugins.pdf.table

class CellHookData(
  pageIndex: Int,
  x: Float,
  y: Float,
  val section: Section,
  val rowIndex: Int,
  val columnIndex: Int,
  val width: Float,
  val height: Float,
  val colSpan: Int,
  val rowSpan: Int,
  val lineCount: Int,
  var content: String
) : HookData(pageIndex, x, y)

package io.github.triniwiz.plugins.pdf.table

class PdfTable {
  var columns: Array<ColumnDef>? = null
  var columnStyles: Map<ColumnKey, StyleDef>? = null
  var headStyles: StyleDef? = null
  var bodyStyles: StyleDef? = null
  var footStyles: StyleDef? = null
  var head: Array<Array<TableCellOrString>> = emptyArray()
  var body: Array<Array<TableCellOrString>> = emptyArray()
  var foot: Array<Array<TableCellOrString>> = emptyArray()
  var position: Pair<Float, Float> = Pair(0f, 0f)
  var theme = TableTheme.default()
  var pageBreak = PageBreak.default()
  var showHead = ShowHead.default()
  var showFoot = ShowFoot.default()

  fun updatePosition(x: Float, y: Float) {
    position = Pair(x, y)
  }
}

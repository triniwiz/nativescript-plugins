package io.github.triniwiz.plugins.pdf.table

sealed class TableCellOrString(val isCell: Boolean) {
  data class StringValue(val value: String) : TableCellOrString(false)
  data class Cell(val cell: TableCell) : TableCellOrString(true)
}

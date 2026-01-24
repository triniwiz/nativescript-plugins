package io.github.triniwiz.plugins.pdf.table

import android.util.Log

class PdfTable {
  var columns: Array<ColumnDef>? = null
  var columnStyles: Map<ColumnKey, StyleDef>? = null
  var styles: StyleDef? = null
  var alternateRowStyles: StyleDef? = null
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
  var margin = Margin.default(40f)
  var hooksListener: TableHookListener? = null

  fun updatePosition(x: Float, y: Float) {
    position = Pair(x, y)
  }

  fun onWillDrawPage(index: Int, x: Float, y: Float) {
    hooksListener?.onWillDrawPage(HookData(index, x, y))
  }

  fun onDidDrawPage(index: Int, x: Float, y: Float) {
    hooksListener?.onDidDrawPage(HookData(index, x, y))
  }

  // return the updated string if changed
   fun onWillDrawCell(
    index: Int,
    x: Float,
    y: Float,
    section: Int,
    rowIndex: Int,
    columnIndex: Int,
    width: Float,
    height: Float,
    colSpan: Int,
    rowSpan: Int,
    lineCount: Int,
    content: String
  ): android.util.Pair<Boolean, String>? {
    return hooksListener?.let {
      val data = CellHookData(
        index,
        x,
        y,
        Section.from(section),
        rowIndex,
        columnIndex,
        width,
        height,
        colSpan,
        rowSpan,
        lineCount,
        content
      )
      it.onWillDrawCell(
        data
      )
    }
  }

  fun onDidDrawCell(
    index: Int,
    x: Float,
    y: Float,
    section: Int,
    rowIndex: Int,
    columnIndex: Int,
    width: Float,
    height: Float,
    colSpan: Int,
    rowSpan: Int,
    lineCount: Int,
    content: String
  ) {
     hooksListener?.let {
      val data = CellHookData(
        index,
        x,
        y,
        Section.from(section),
        rowIndex,
        columnIndex,
        width,
        height,
        colSpan,
        rowSpan,
        lineCount,
        content
      )
      it.onDidDrawCell(
        data
      )
    }
  }
}

package io.github.triniwiz.plugins.pdf.table

sealed class ColumnKey(val isDataKey: Boolean) {
  data class Index(val index: Int) : ColumnKey(false)
  data class DataKey(val key: String) : ColumnKey(true)
}

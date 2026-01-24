package io.github.triniwiz.plugins.pdf.table

interface TableHookListener {
  fun onWillDrawPage(hook: HookData)
  fun onDidDrawPage(hook: HookData)
  fun onWillDrawCell(hook: CellHookData): android.util.Pair<Boolean, String>?
  fun onDidDrawCell(hook: CellHookData)
}

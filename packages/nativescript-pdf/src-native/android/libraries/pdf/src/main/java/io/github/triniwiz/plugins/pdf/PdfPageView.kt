package io.github.triniwiz.plugins.pdf

import android.content.Context
import android.graphics.Bitmap
import android.graphics.Canvas
import android.util.AttributeSet
import android.widget.FrameLayout

class PdfPageView @JvmOverloads constructor(
  context: Context, attrs: AttributeSet? = null
) : FrameLayout(context, attrs) {
  internal var bitmap: Bitmap? = null
  internal var pageIndex: Int = -1
  internal var pdfView: PdfView? = null

  override fun onDraw(canvas: Canvas) {
    super.onDraw(canvas)
    bitmap?.let {
      canvas.drawBitmap(it, 0f, 0f, null)
    }
  }
}

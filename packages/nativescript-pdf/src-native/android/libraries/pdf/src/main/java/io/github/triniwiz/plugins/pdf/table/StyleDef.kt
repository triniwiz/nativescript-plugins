package io.github.triniwiz.plugins.pdf.table

import io.github.triniwiz.plugins.pdf.Color
import java.nio.ByteBuffer
import java.nio.ByteOrder

class StyleDef(
  var font: FontFamily,
  var fontStyle: FontStyle,
  var overflow: Overflow,
  var fillColor: Color?,
  var textColor: Color?,
  var cellWidth: CellWidth,
  var minCellWidth: Float?,
  var minCellHeight: Float,
  var horizontalAlign: HorizontalAlign,
  var verticalAlign: VerticalAlign,
  var fontSize: Float,
  var cellPadding: Padding,
  var lineColor: Color?,
  var lineWidth: Float
) {

  @JvmOverloads
  fun setFillColor(r: Int, g: Int, b: Int, a: Int = 255) {
    fillColor = Color(r, g, b, a)
  }

  @JvmOverloads
  fun setTextColor(r: Int, g: Int, b: Int, a: Int = 255) {
    textColor = Color(r, g, b, a)
  }

  @JvmOverloads
  fun setLineColor(r: Int, g: Int, b: Int, a: Int = 255) {
    lineColor = Color(r, g, b, a)
  }


  var fontValue: Int = 0
    set(value) {
      when (value) {
        0 -> {
          font = FontFamily.Helvetica
          field = 0
        }

        1 -> {
          font = FontFamily.Times
          field = 1
        }

        2 -> {
          font = FontFamily.Courier
          field = 2
        }

        else -> {}
      }
    }
    get() {
      return font.value
    }

  var fontStyleValue: Int = 0
    set(value) {
      when (value) {
        0 -> {
          field = 0
          fontStyle = FontStyle.Normal
        }

        1 -> {
          field = 1
          fontStyle = FontStyle.Bold
        }

        2 -> {
          field = 2
          fontStyle = FontStyle.Italic
        }

        3 -> {
          field = 3
          fontStyle = FontStyle.BoldItalic
        }

        else -> {}
      }
    }
    get() {
      return fontStyle.value
    }

  var overflowValue: Int = 0
    set(value) {
      when (value) {
        0 -> {
          field = 0
          overflow = Overflow.LineBreak
        }

        1 -> {
          field = value
          overflow = Overflow.Ellipsize
        }

        2 -> {
          field = value
          overflow = Overflow.Visible
        }

        3 -> {
          field = value
          overflow = Overflow.Hidden
        }

        else -> {}
      }
    }
    get() {
      return overflow.value
    }


  var horizontalAlignValue: Int = 0
    set(value) {
      when (value) {
        0 -> {
          field = 0
          horizontalAlign = HorizontalAlign.Left
        }

        1 -> {
          field = value
          horizontalAlign = HorizontalAlign.Center
        }

        2 -> {
          field = value
          horizontalAlign = HorizontalAlign.Right
        }

        else -> {}
      }
    }
    get() {
      return horizontalAlign.value
    }

  var verticalAlignValue: Int = 0
    set(value) {
      when (value) {
        0 -> {
          field = 0
          verticalAlign = VerticalAlign.Top
        }

        1 -> {
          field = value
          verticalAlign = VerticalAlign.Middle
        }

        2 -> {
          field = value
          verticalAlign = VerticalAlign.Bottom
        }

        else -> {}
      }
    }
    get() {
      return verticalAlign.value
    }

  init {
    fontValue = font.value
  }


  fun getFillColorValue(value: ByteBuffer): Boolean {
    value.order(ByteOrder.nativeOrder())
    return fillColor?.let {
      value
        .asIntBuffer()
        .put(0, it.r)
        .put(1, it.g)
        .put(2, it.b)
        .put(3, it.a)
      true
    } ?: false
  }

  fun getTextColorValue(value: ByteBuffer): Boolean {
    value.order(ByteOrder.nativeOrder())
    return textColor?.let {
      value
        .asIntBuffer()
        .put(0, it.r)
        .put(1, it.g)
        .put(2, it.b)
        .put(3, it.a)
      true
    } ?: false
  }

  fun getCellWidthValue(value: ByteBuffer) {
    value.order(ByteOrder.nativeOrder())
    when (cellWidth) {
      CellWidth.Auto -> {
        value.asIntBuffer().put(0, 0)
        value.asFloatBuffer().put(1, 0f)
      }

      CellWidth.Wrap -> {
        value.asIntBuffer().put(0, 1)
        value.asFloatBuffer().put(1, 0f)
      }

      is CellWidth.Fixed -> {
        value.asIntBuffer().put(0, 2)
        value.asFloatBuffer().put(1, (cellWidth as CellWidth.Fixed).points)
      }
    }
  }

  fun getCellPadding(value: ByteBuffer) {
    value.order(ByteOrder.nativeOrder())
    value.asFloatBuffer()
      .put(0, cellPadding.left)
      .put(1, cellPadding.top)
      .put(2, cellPadding.right)
      .put(3, cellPadding.bottom)
  }

  fun getLineColorValue(value: ByteBuffer): Boolean {
    value.order(ByteOrder.nativeOrder())
    return lineColor?.let {
      value
        .asIntBuffer()
        .put(0, it.r)
        .put(1, it.g)
        .put(2, it.b)
        .put(3, it.a)
      true
    } ?: false
  }

  fun clone(): StyleDef {
    return StyleDef(
      font,
      fontStyle,
      overflow,
      fillColor,
      textColor,
      cellWidth,
      minCellWidth,
      minCellHeight,
      horizontalAlign,
      verticalAlign,
      fontSize,
      cellPadding,
      lineColor,
      lineWidth
    )
  }

  companion object {
    @JvmStatic
    fun default(): StyleDef {
      return StyleDef(
        FontFamily.default(),
        FontStyle.default(),
        Overflow.default(),
        null,
        Color.grey(20),
        CellWidth.Auto,
        10f,
        0f,
        HorizontalAlign.Left,
        VerticalAlign.Top,
        10f,
        Padding(10f),
        Color.grey(10),
        0f
      )
    }
  }
}

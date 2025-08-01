package io.github.triniwiz.plugins.pdf.table

class Margin(
  top: Float,
  left: Float,
  bottom: Float,
  right: Float
) {

  var top: Float = 0.0f
    set(value) {
      field = value
      topChanged = true
    }
  var left: Float = 0.0f
    set(value) {
      field = value
      leftChanged = true
    }
  var bottom: Float = 0.0f
    set(value) {
      field = value
      bottomChanged = true
    }
  var right: Float = 0.0f
    set(value) {
      field = value
      rightChanged = true
    }

  init {
    this.top = top
    this.left = left
    this.bottom = bottom
    this.right = right
  }

  internal var topChanged = false
  internal var leftChanged = false
  internal var bottomChanged = false
  internal var rightChanged = false

  constructor(uniform: Float) : this(uniform, uniform, uniform, uniform)

  companion object {

    @JvmStatic
    fun default(): Margin {
      val ret = Margin(0f)
      ret.topChanged = false
      ret.leftChanged = false
      ret.bottomChanged = false
      ret.rightChanged = false
      return ret
    }

    @JvmStatic
    fun default(uniform: Float): Margin {
      val ret = Margin(uniform)
      ret.topChanged = false
      ret.leftChanged = false
      ret.bottomChanged = false
      ret.rightChanged = false
      return ret
    }

    @JvmStatic
    fun default(left: Float, right: Float, top: Float, bottom: Float): Margin {
      val ret = Margin(top, left, bottom, right)
      ret.topChanged = false
      ret.leftChanged = false
      ret.bottomChanged = false
      ret.rightChanged = false
      return ret
    }
  }
}

package io.github.triniwiz.plugins.pdf.table

import java.nio.ByteBuffer

class Padding(
  var left: Float,
  var top: Float,
  var right: Float,
  var bottom: Float
) {
  constructor(uniform: Float) : this(uniform, uniform, uniform, uniform)
}

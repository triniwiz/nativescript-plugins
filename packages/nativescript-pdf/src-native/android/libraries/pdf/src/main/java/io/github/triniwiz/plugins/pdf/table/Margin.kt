package io.github.triniwiz.plugins.pdf.table

class Margin(
  var top: Float,
  var left: Float,
  var bottom: Float,
  var right: Float
) {
  constructor(uniform: Float) : this(uniform, uniform, uniform, uniform)
}

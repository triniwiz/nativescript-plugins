package io.github.triniwiz.plugins.pdf.table

class Padding(
  var left: Float,
  var top: Float,
  var right: Float,
  var bottom: Float
) {
  constructor(uniform: Float) : this(uniform, uniform, uniform, uniform)
}

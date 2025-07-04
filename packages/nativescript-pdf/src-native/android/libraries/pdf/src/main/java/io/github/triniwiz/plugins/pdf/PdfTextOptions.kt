package io.github.triniwiz.plugins.pdf

class PdfTextOptions {
  var align = PdfTextAlignment.Left
  var baseline = PdfTextBaseline.Alphabetic
  var angle = PdfRotationOrMatrix.zero

  var rotationDirection = PdfRotationDirection.CW
  var charSpace: Int = 0
  var horizontalScale = 1f
  var lineHeightFactor = 1.15f
  var maxWidth = 0
}

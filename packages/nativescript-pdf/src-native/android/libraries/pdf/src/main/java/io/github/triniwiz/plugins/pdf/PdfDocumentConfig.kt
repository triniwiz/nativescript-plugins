package io.github.triniwiz.plugins.pdf

class PdfDocumentConfig {
  var orientation = PdfOrientation.Portrait
  var size = PdfPagerSize.a4()
  var units = PdfUnit.mm
  var deviceScale = Pdf.instance.scale
}

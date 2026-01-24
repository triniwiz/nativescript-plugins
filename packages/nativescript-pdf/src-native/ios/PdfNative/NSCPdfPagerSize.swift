//
//  NSCPdfPagerSize.swift
//  PdfNative
//
//  Created by Osei Fortune on 28/06/2025.
//

@objcMembers
@objc(NSCPdfPagerSize)
public class NSCPdfPagerSize: NSObject {
  internal let pdfium: PdfNativePaperSize
  init(size: PdfNativePaperSize) {
    self.pdfium = size
  }
  public static func custom(_ width: Float, _ height: Float) -> NSCPdfPagerSize {
    var size = PdfNativePaperSize()
    size.tag = PdfNativePaperSize_Custom
    size.custom = PdfNativePaperSize_Custom_Body(_0: width, _1: height)
    return NSCPdfPagerSize(size: size)
  }
  
  public static func standard(_ value: NSCPdfStandardPaperSize) ->NSCPdfPagerSize {
    var size = PdfNativePaperSize()
    size.tag = PdfNativePaperSize_StandardPaper
    size.standard_paper = value.pdfium
    return NSCPdfPagerSize(size: size)
  }
  
  public static func a4() -> NSCPdfPagerSize{
    return standard(.A4)
  }
}

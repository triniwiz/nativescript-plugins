//
//  NSCPdfPadding.swift
//  PdfNative
//
//  Created by Osei Fortune on 02/07/2025.
//

@objcMembers
@objc(NSCPdfPadding)
public class NSCPdfPadding: NSObject {
  public var top: Float = 0
  public var left: Float = 0
  public var bottom: Float = 0
  public var right: Float = 0
  
  public init(_ top: Float, _ left: Float, _ bottom: Float, _ right: Float) {
    self.top = top
    self.left = left
    self.bottom = bottom
    self.right = right
  }
  
  public init(uniform: Float) {
    self.top = uniform
    self.left = uniform
    self.bottom = uniform
    self.right = uniform
  }
  
  func pdfium(_ unit: NSCPdfUnit) -> CPdfNativePadding {
    return CPdfNativePadding(top: CPdfNativePoints(value: top, unit: unit.pdfium),
                             right: CPdfNativePoints(value: right, unit: unit.pdfium),
                             bottom: CPdfNativePoints(value: bottom, unit: unit.pdfium),
                             left: CPdfNativePoints(value: left, unit: unit.pdfium))
  }
}

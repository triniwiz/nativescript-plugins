//
//  NSCPdfMargin.swift
//  PdfNative
//
//  Created by Osei Fortune on 30/07/2025.
//

@objcMembers
@objc(NSCPdfMargin)
public class NSCPdfMargin: NSObject {
  var topChanged = false
  var leftChanged = false
  var bottomChanged = false
  var rightChanged = false
  
  public var top: Float = 0 {
    didSet {
      topChanged = true
    }
  }
  
  public var left: Float = 0{
    didSet {
      leftChanged = true
    }
  }
  public var bottom: Float = 0{
    didSet {
      bottomChanged = true
    }
  }
  public var right: Float = 0{
    didSet {
      rightChanged = true
    }
  }
  
  public static func `default`(uniform: Float = 0) -> NSCPdfMargin{
    var ret = NSCPdfMargin(uniform: uniform)
    ret.topChanged = false
    ret.leftChanged = false
    ret.bottomChanged = false
    ret.rightChanged = false
    return ret
  }
  
  public static func `default`(left: Float = 0, right: Float = 0, top: Float = 0, bottom: Float = 0) -> NSCPdfMargin{
    var ret = NSCPdfMargin(left, right, top, bottom)
    ret.topChanged = false
    ret.leftChanged = false
    ret.bottomChanged = false
    ret.rightChanged = false
    return ret
  }
  
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
  
  func pdfium(_ unit: NSCPdfUnit) -> CPdfNativeMargin {
    return CPdfNativeMargin(top: CPdfNativePoints(value: top, unit: unit.pdfium, changed: topChanged),
                             right: CPdfNativePoints(value: right, unit: unit.pdfium, changed: rightChanged),
                             bottom: CPdfNativePoints(value: bottom, unit: unit.pdfium, changed: bottomChanged),
                             left: CPdfNativePoints(value: left, unit: unit.pdfium, changed: leftChanged))
  }
}

//
//  NSCPdfCellWidth.swift
//  PdfNative
//
//  Created by Osei Fortune on 02/07/2025.
//

enum NSCPdfCellWidthType {
  case Auto
  case Wrap
  case Fixed
}

@objcMembers
@objc(NSCPdfCellWidth)
public class NSCPdfCellWidth: NSObject {
  var kind = NSCPdfCellWidthType.Auto
  var points: Float = 0
  
  init(kind: NSCPdfCellWidthType = NSCPdfCellWidthType.Auto, points: Float) {
    self.kind = kind
    self.points = points
  }
  
  public static let Auto = NSCPdfCellWidth(kind: NSCPdfCellWidthType.Auto, points: 0)
  public static let Wrap = NSCPdfCellWidth(kind: NSCPdfCellWidthType.Wrap, points: 0)
  public static func Fixed(_ value: Float) -> NSCPdfCellWidth {
    return NSCPdfCellWidth(kind: .Fixed, points: value)
  }
  
  func pdfium(_ unit: NSCPdfUnit) -> CCellWidth {
    var type = CCellWidthType_Auto
    switch kind {
    case .Auto:
      type = CCellWidthType_Auto
    case .Wrap:
      type = CCellWidthType_Wrap
    case .Fixed:
      type = CCellWidthType_Fixed
    }
    
    return CCellWidth(type_: type, value: CPdfNativePoints(value: points, unit: unit.pdfium, changed: true))
  }
}

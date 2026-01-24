//
//  NSCPdfUnit.swift
//  PdfNative
//
//  Created by Osei Fortune on 28/06/2025.
//

@objc(NSCPdfUnit)
public enum NSCPdfUnit: Int32, RawRepresentable {
  case mm
  case points
  case cm
  case inches
  
  public typealias RawValue = Int32
  public init?(rawValue: Int32) {
    switch rawValue {
    case 0:
      self = .mm
    case 1:
      self = .points
    case 2:
      self = .cm
    case 3:
      self = .inches
    default:
      return nil
    }
  }
  
  public var rawValue: Int32 {
    switch self {
    case .mm:
      return 0
    case .points:
      return 1
    case .cm:
      return 2
    case .inches:
      return 3
    }
  }
  
  var pdfium: PdfNativeUnit {
    switch self {
    case .mm:
      return PdfNativeUnit_Mm
    case .points:
      return PdfNativeUnit_Points
    case .cm:
      return PdfNativeUnit_Cm
    case .inches:
      return PdfNativeUnit_Inches
    }
  }
}

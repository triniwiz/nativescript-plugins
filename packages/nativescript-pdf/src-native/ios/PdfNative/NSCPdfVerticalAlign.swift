//
//  NSCPdfVerticalAlign.swift
//  PdfNative
//
//  Created by Osei Fortune on 02/07/2025.
//

@objc(NSCPdfVerticalAlign)
public enum NSCPdfVerticalAlign: Int, RawRepresentable {
  case top
  case middle
  case bottom
  
  public typealias RawValue = Int32
  
  public init?(rawValue: Int32) {
    switch rawValue {
    case 0:
      self = .top
    case 1:
      self = .middle
    case 2:
      self = .bottom
    default:
      return nil
    }
  }
  
  public var rawValue: Int32 {
    switch self {case .top:
      return 0
    case .middle:
      return 1
    case .bottom:
      return 2
    }
  }
  
  
  var pdfium: CVerticalAlign {
    switch self {case .top:
      return CVerticalAlign_Top
    case .middle:
      return CVerticalAlign_Middle
    case .bottom:
      return CVerticalAlign_Bottom
    }
  }
}

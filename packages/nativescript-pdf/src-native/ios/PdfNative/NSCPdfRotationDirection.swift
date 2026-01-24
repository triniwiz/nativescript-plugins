//
//  NSCPdfRotationDirection.swift
//  PdfNative
//
//  Created by Osei Fortune on 02/07/2025.
//

@objc(NSCPdfRotationDirection)
public enum NSCPdfRotationDirection: Int, RawRepresentable {
  case cw
  case ccw
  public typealias RawValue = Int32
  
  public init?(rawValue: Int32) {
    switch rawValue {
    case 0:
      self = .cw
    case 1:
      self = .ccw
    default:
      return nil
    }
  }
  
  public var rawValue: Int32 {
    switch self {case .cw:
      return 0
    case .ccw:
      return 1
    }
  }
  
  
  var pdfium: PdfNativeRotationDirection {
    switch self {case .cw:
      return PdfNativeRotationDirection_CW
    case .ccw:
      return PdfNativeRotationDirection_CCW
    }
  }
  
}

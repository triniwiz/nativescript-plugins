//
//  NSCPdfFontFamily.swift
//  PdfNative
//
//  Created by Osei Fortune on 02/07/2025.
//

@objc(NSCPdfFontFamily)
public enum NSCPdfFontFamily: Int, RawRepresentable {
  case   helvetica
  case times
  case courier
  
  public typealias RawValue = Int32
  
  public static func `default`()-> NSCPdfFontFamily {
    return .helvetica
  }
  
  public init?(rawValue: Int32) {
    switch rawValue {
    case 0:
      self = .helvetica
    case 1:
      self = .times
    case 2:
      self = .courier
    default:
      return nil
    }
  }
  
  public var rawValue: Int32 {
    switch self {case .helvetica:
      return 0
    case .times:
      return 1
    case .courier:
      return 2
    }
  }
  
  var pdfium: PdfNativeFontFamily {
    switch(self){case .helvetica:
      return PdfNativeFontFamily_Helvetica
    case .times:
      return PdfNativeFontFamily_Times
    case .courier:
      return PdfNativeFontFamily_Courier
    }
  }
}

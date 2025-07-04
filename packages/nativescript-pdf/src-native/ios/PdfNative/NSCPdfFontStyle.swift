//
//  NSCPdfFontStyle.swift
//  PdfNative
//
//  Created by Osei Fortune on 02/07/2025.
//

@objc(NSCPdfFontStyle)
public enum NSCPdfFontStyle: Int, RawRepresentable {
  case  normal
  case    bold
  case     italic
  case   boldItalic
  
  public typealias RawValue = Int32
  
  public static func `default`()-> NSCPdfFontStyle {
    return .normal
  }
  
  public init?(rawValue: Int32) {
    switch rawValue {
    case 0:
      self = .normal
    case 1:
      self = .bold
    case 2:
      self = .italic
    case 3:
      self = .boldItalic
    default:
      return nil
    }
  }
  
  public var rawValue: Int32 {
    switch self {
    case .normal:
      return 0
    case .bold:
      return 1
    case .italic:
      return 2
    case .boldItalic:
      return 3
    }
  }
  
  var pdfium: PdfNativeFontStyle {
    switch(self){case .normal:
      return PdfNativeFontStyle_Normal
    case .bold:
      return PdfNativeFontStyle_Bold
    case .italic:
      return PdfNativeFontStyle_Italic
    case .boldItalic:
      return PdfNativeFontStyle_BoldItalic
    }
  }
}

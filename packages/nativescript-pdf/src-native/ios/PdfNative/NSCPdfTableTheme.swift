//
//  NSCPdfTableTheme.swift
//  PdfNative
//
//  Created by Osei Fortune on 02/07/2025.
//

@objc(NSCPdfTableTheme)
public enum NSCPdfTableTheme: Int, RawRepresentable {
  case striped
  case grid
  case plain
  public typealias RawValue = Int32
  public static func `default`() -> NSCPdfTableTheme{
    return .striped
  }
  
  public init?(rawValue: Int32) {
    switch rawValue {
    case 0:
      self = .striped
    case 1:
      self = .grid
    case 2:
      self = .plain
    default:
      return nil
    }
  }
  
  public var rawValue: Int32 {
    switch(self){case .striped:
      return 0
    case .grid:
      return 1
    case .plain:
      return 2
    }
  }
  
  var pdfium: PdfNativeTableTheme {
    switch(self){
    case .striped:
      return PdfNativeTableTheme_Striped
    case .grid:
      return PdfNativeTableTheme_Grid
    case .plain:
      return PdfNativeTableTheme_Plain
    }
  }
}

//
//  NSCPdfPageBreak.swift
//  PdfNative
//
//  Created by Osei Fortune on 02/07/2025.
//

@objc(NSCPdfPageBreak)
public enum NSCPdfPageBreak: Int, RawRepresentable {
  case auto
  case avoid
  case always
  
  public typealias RawValue = Int32
  public init?(rawValue: Int32) {
    switch(rawValue){
    case 0:
      self = .auto
      break
    case 1:
      self = .avoid
      break
    case 2:
      self = .always
      break
    default:
      return nil
    }
  }
  
  public var rawValue: Int32 {
    switch(self){
    case .auto:
      return 0
    case .avoid:
      return 1
    case .always:
      return 2
    }
  }
  
  public static func `default`()-> NSCPdfPageBreak {
    return .auto
  }
  
  var pdfium: PdfNativePageBreak {
    switch(self){
    case .auto:
      return PdfNativePageBreak_Auto
    case .avoid:
      return PdfNativePageBreak_Avoid
    case .always:
      return PdfNativePageBreak_Always
    }
  }
}

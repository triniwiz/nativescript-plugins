//
//  NSCPdfShowHead.swift
//  PdfNative
//
//  Created by Osei Fortune on 02/07/2025.
//

@objc(NSCPdfShowHead)
public enum NSCPdfShowHead: Int, RawRepresentable {
  
  case everyPage
  case firstPage
  case never
  
  public typealias RawValue = Int32
  
  
  public init?(rawValue: Int32) {
    switch(rawValue){
    case 0:
      self = .everyPage
      break
    case 1:
      self = .firstPage
      break
    case 2:
      self = .never
      break
    default:
      return nil
    }
  }
  
  
  public var rawValue: Int32 {
    switch(self){
    case .everyPage:
      return 0
    case .firstPage:
      return 1
    case .never:
      return 2
    }
  }
  
  public static func `default`()-> NSCPdfShowHead {
    return .everyPage
  }
  
  var pdfium: PdfNativeShowHead {
    switch(self){
    case .everyPage:
      return PdfNativeShowHead_EveryPage
    case .firstPage:
      return PdfNativeShowHead_FirstPage
    case .never:
      return PdfNativeShowHead_Never
    }
  }
}

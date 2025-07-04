//
//  NSCPdfShowFoot.swift
//  PdfNative
//
//  Created by Osei Fortune on 02/07/2025.
//

@objc(NSCPdfShowFoot)
public enum NSCPdfShowFoot: Int, RawRepresentable {
  case everyPage
    case lastPage
    case never
  
  public typealias RawValue = Int32
  
  public init?(rawValue: Int32) {
    switch(rawValue){
    case 0:
      self = .everyPage
      break
    case 1:
      self = .lastPage
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
    case .lastPage:
      return 1
    case .never:
      return 2
    }
  }
  
  public static func `default`() -> NSCPdfShowFoot {
    return .everyPage
  }
  
  var pdfium: PdfNativeShowFoot {
    switch(self){
    case .everyPage:
      return PdfNativeShowFoot_EveryPage
    case .lastPage:
      return PdfNativeShowFoot_LastPage
    case .never:
      return PdfNativeShowFoot_Never
    }
  }
}

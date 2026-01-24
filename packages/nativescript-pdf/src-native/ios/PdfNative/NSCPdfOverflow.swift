//
//  NSCPdfOverflow.swift
//  PdfNative
//
//  Created by Osei Fortune on 02/07/2025.
//

@objc(NSCPdfOverflow)
public enum NSCPdfOverflow: Int, RawRepresentable {
  case lineBreak
  case ellipsize
  case visible
  case hidden
  
  public typealias RawValue = Int32
  
  
  public init?(rawValue: Int32) {
    switch rawValue {
    case 0:
      self = .lineBreak
    case 1:
      self = .ellipsize
    case 2:
      self = .visible
    case 3:
      self = .hidden
    default:
      return nil
    }
  }
  
  public var rawValue: Int32 {
    switch self {
    case .lineBreak:
      return 0
    case .ellipsize:
      return 1
    case .visible:
      return 2
    case .hidden:
      return 3
    }
  }
  
  public static func `default`()-> NSCPdfOverflow {
    return .lineBreak
  }
  
  var pdfium: PdfNativeOverflow {
    switch(self){case .lineBreak:
      return PdfNativeOverflow_LineBreak
    case .ellipsize:
      return PdfNativeOverflow_Ellipsize
    case .visible:
      return PdfNativeOverflow_Visible
    case .hidden:
      return PdfNativeOverflow_Hidden
    }
  }
  
}

//
//  NSCPdfStyle.swift
//  PdfNative
//
//  Created by Osei Fortune on 02/07/2025.
//

@objc(NSCPdfStyle)
public enum NSCPdfStyle: Int, RawRepresentable {
  case s
  case f
  case df
  case fd
  
  public typealias RawValue = Int32
  public init?(rawValue: Int32) {
    switch rawValue {
    case 0:
      self = .s
    case 1:
      self = .f
    case 2:
      self = .df
    case 3:
      self = .fd
    default:
      return nil
    }
  }
  
  public var rawValue: Int32 {
    switch self {
    case .s:
      return 0
    case .f:
      return 1
    case .df:
      return 2
    case .fd:
      return 3
    }
  }
  
  internal var pdfium: PdfNativeStyle {
    switch self {
    case .s:
      return PdfNativeStyle_S
    case .f:
      return PdfNativeStyle_F
    case .df:
      return PdfNativeStyle_DF
    case .fd:
      return PdfNativeStyle_FD
    }
  }
}

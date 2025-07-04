//
//  NSCPdfOrientation.swift
//  PdfNative
//
//  Created by Osei Fortune on 28/06/2025.
//

@objc(NSCPdfOrientation)
public enum NSCPdfOrientation: Int32, RawRepresentable {
  case Landscape
  case Portrait
  public typealias RawValue = Int32
  public init?(rawValue: Int32) {
    switch rawValue {
    case 0:
      self = .Landscape
    case 1:
      self = .Portrait
    default:
      return nil
    }
  }
  
  public var rawValue: Int32 {
    switch self {
    case .Landscape:
      return 0
    case .Portrait:
      return 1
    }
  }
  
  internal var pdfium: PdfNativeOrientation {
    switch self {
    case .Landscape:
      return PdfNativeOrientation_Portrait
    case .Portrait:
      return PdfNativeOrientation_Landscape
    }
  }
}

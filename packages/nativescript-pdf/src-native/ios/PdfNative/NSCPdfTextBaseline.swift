//
//  NSCPdfTextBaseline.swift
//  PdfNative
//
//  Created by Osei Fortune on 02/07/2025.
//


@objc(NSCPdfTextBaseline)
public enum NSCPdfTextBaseline: Int, RawRepresentable {
  case alphabetic
  case ideographic
  case bottom
  case top
  case middle
  case hanging
  
  public typealias RawValue = Int32
  
  public init?(rawValue: Int32) {
    switch rawValue {
    case 0:
      self = .alphabetic
    case 1:
      self = .ideographic
    case 2:
      self = .bottom
    case 3:
      self = .top
    case 4:
      self = .middle
    case 5:
      self = .hanging
    default:
      return nil
    }
  }
  
  public var rawValue: Int32 {
    switch self {case .alphabetic:
      return 0
    case .ideographic:
      return 1
    case .bottom:
      return 2
    case .top:
      return 3
    case .middle:
      return 4
    case .hanging:
      return 5
    }
  }
  
  var pdfium: PdfNativeTextBaseline {
    switch self {case .alphabetic:
      return PdfNativeTextBaseline_Alphabetic
    case .ideographic:
      return PdfNativeTextBaseline_Ideographic
    case .bottom:
      return PdfNativeTextBaseline_Bottom
    case .top:
      return PdfNativeTextBaseline_Top
    case .middle:
      return PdfNativeTextBaseline_Middle
    case .hanging:
      return PdfNativeTextBaseline_Hanging
    }
  }
}

//
//  NSCPdfHorizontalAlign.swift
//  PdfNative
//
//  Created by Osei Fortune on 02/07/2025.
//

@objc(NSCPdfHorizontalAlign)
public enum NSCPdfHorizontalAlign: Int, RawRepresentable {
  case left
  case center
  case right
  
  public typealias RawValue = Int32
  
  public init?(rawValue: Int32) {
    switch rawValue {
    case 0:
      self = .left
    case 1:
      self = .center
    case 2:
      self = .right
    default:
      return nil
    }
  }
  
  public var rawValue: Int32 {
    switch self {case .left:
      return 0
    case .center:
      return 1
    case .right:
      return 2
    }
  }
  
  var pdfium: CHorizontalAlign {
    switch self {case .left:
      return CHorizontalAlign_Left
    case .center:
      return CHorizontalAlign_Center
    case .right:
      return CHorizontalAlign_Right
    }
  }
}

//
//  NSCPdfCellRenderInfo.swift
//  PdfNative
//
//  Created by Osei Fortune on 11/09/2025.
//

import Foundation


@objc(NSCPdfSection)
public enum NSCPdfSection: Int, RawRepresentable {
  case head
  case body
  case foot
  
  public typealias RawValue = Int32
  public init?(rawValue: Int32) {
    switch(rawValue){
    case 0:
      self = .head
      break
    case 1:
      self = .body
      break
    case 2:
      self = .foot
      break
    default:
      return nil
    }
  }
  
  public var rawValue: Int32 {
    switch(self){
    case .head:
      return 0
    case .body:
      return 1
    case .foot:
      return 2
    }
  }
}


@objcMembers
@objc(NSCPdfHookData)
public class NSCPdfHookData: NSObject {
  public let pageIndex: UInt32
  public let x: Float
  public let y: Float
  public init(_ pageIndex: UInt32, _ x: Float, _ y: Float) {
    self.pageIndex = pageIndex
    self.x = x
    self.y = y
    super.init()
  }
}


@objcMembers
@objc(NSCPdfCellHookData)
public class NSCPdfCellHookData: NSCPdfHookData {
  
  public var section: NSCPdfSection {
    switch(data.pointee.section){
    case PdfNativeSection_Body:
      return NSCPdfSection.body
    case PdfNativeSection_Foot:
      return NSCPdfSection.foot
    default:
      return NSCPdfSection.head
    }
  }
  public var rowIndex: UInt32 {
    return data.pointee.row_index
  }
  
  public var columnIndex: UInt32{
    return data.pointee.column_index
  }
  
  public var width: Float{
    return data.pointee.width
  }
  
  public var height: Float{
    return data.pointee.height
  }

  public var colSpan:UInt32{
    return data.pointee.col_span
  }
  
  public var rowSpan: UInt32{
    return data.pointee.row_span
  }
  
  public var lineCount: UInt32{
    return data.pointee.line_count
  }
  
  public var content: String {
    set {
      pdf_native_cell_render_info_set_content(data, newValue)
    }
    get {
      if(data.pointee.content == nil){
        return ""
      }
      let content = pdf_native_cell_render_info_get_content(data)
      if(content == nil){
        return ""
      }
      return CFStringCreateWithCStringNoCopy(
          kCFAllocatorDefault,
          content,
          CFStringBuiltInEncodings.UTF8.rawValue,
          kCFAllocatorNull
      ) as String
    }
  }
  
  internal var data: UnsafeMutablePointer<PdfNativeCellRenderInfo>
  
  internal init(data info: UnsafeMutablePointer<PdfNativeCellRenderInfo>){
    data = info
    super.init(data.pointee.page_index, data.pointee.x, data.pointee.y)
    
  }

}

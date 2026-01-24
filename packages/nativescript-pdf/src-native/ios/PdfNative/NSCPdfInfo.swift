//
//  NSCPdfInfo.swift
//  PdfNative
//
//  Created by Osei Fortune on 12/07/2025.
//

@objcMembers
@objc(NSCPdfInfo)
public class NSCPdfInfo: NSObject {
  let width: UInt
  let height: UInt
  let data: NSData
  public init(width: UInt, height: UInt, data: NSData) {
    self.width = width
    self.height = height
    self.data = data
  }
}

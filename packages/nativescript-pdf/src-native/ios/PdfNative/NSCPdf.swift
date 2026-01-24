//
//  NSCPdfNative.swift
//  PdfNative
//
//  Created by Osei Fortune on 25/06/2025.
//

import Foundation

@objc(NSCPdf)
@objcMembers
public class NSCPdf: NSObject {
  public static let instance = NSCPdf()
  internal var PDFInstance: OpaquePointer!
  public override init() {
    PDFInstance = pdf_native_init()
  }
  

  public func loadFromPath(path: String, password: String? = nil) -> NSCPdfDocument? {
    let document = pdf_native_load_from_path(PDFInstance, path, password)
    if (document == nil) {
      return nil
    }
    return NSCPdfDocument(document: document)
  }


  public func loadFromBytes(bytes: NSData, password: String? = nil) -> NSCPdfDocument? {
    let document = pdf_native_load_from_bytes(PDFInstance, bytes.bytes, UInt(bytes.count), password)
    if (document == nil) {
      return nil
    }
    return NSCPdfDocument(document: document)
  }

}

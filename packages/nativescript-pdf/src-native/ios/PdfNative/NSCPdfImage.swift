//
//  NSCPdfImage.swift
//  PdfNative
//
//  Created by Osei Fortune on 13/09/2025.
//

import Foundation
import UIKit

@objcMembers
@objc(NSCPdfImage)
public class NSCPdfImage: NSObject {
  internal var nativeImage: OpaquePointer? = nil
  init(image: OpaquePointer) {
    nativeImage = image
  }
  
  
  public var width: Int {
    guard let nativeImage = nativeImage else {return 0}
    return Int(pdf_native_image_get_width(nativeImage))
  }
  
  public var height: Int {
    guard let nativeImage = nativeImage else {return 0}
    return Int(pdf_native_image_get_height(nativeImage))
  }
  
  fileprivate static func executeInLoop(_ runloop: CFRunLoop?, _ function: @escaping() -> Void){
    if let runloop = runloop {
      let currentMode = CFRunLoopCopyCurrentMode(runloop)
      // off main 
      if(currentMode == nil){
        function()
        return
      }
      CFRunLoopPerformBlock(runloop, CFRunLoopMode.defaultMode.rawValue) {
        function()
      }
      CFRunLoopWakeUp(runloop)
    }else {
      function()
    }
  }
  
  
  public static func fromImage(_ image: UIImage) -> NSCPdfImage? {
    guard let data = NSCPdfDocument.getBytesFromUIImage(image) else {return nil}
    guard let image = pdf_native_image_from_data(NSCPdf.instance.PDFInstance, data.bytes, UInt(data.length), UInt32(image.size.width), UInt32(image.size.height)) else {return nil}
    return NSCPdfImage(image: image)
  }
  
  
  static func execute(_ current: CFRunLoop?, _ image: UIImage, _ callback:@escaping (NSCPdfImage?) -> Void){
    guard let data = NSCPdfDocument.getBytesFromUIImage(image) else {
      executeInLoop(current) {
        callback(nil)
      }
      return
    }
    
  
    let image = pdf_native_image_from_data(
      NSCPdf.instance.PDFInstance,
      data.mutableBytes,
      UInt(data.count),
      UInt32(image.size.width), UInt32(image.size.height)
    )
    
    executeInLoop(current) {
      guard let image = image else {
        callback(nil)
        return
      }
      callback(NSCPdfImage(image: image))
    }
  }
  
  public static func fromImageAsync(_ image: UIImage, _ callback:@escaping (NSCPdfImage?) -> Void){
    let current = CFRunLoopGetCurrent()
    
    if #available(iOS 13.0, *) {
      Task {
        execute(current, image, callback)
      }
    } else {
      DispatchQueue.global(qos: .background).async {
        execute(current, image, callback)
      }
    }
    
  }
  
  public static func fromData(_ data: NSData, _ width: UInt32, _ height: UInt32) -> NSCPdfImage? {
    guard let image = pdf_native_image_from_data(NSCPdf.instance.PDFInstance, data.bytes, UInt(data.length), width, height) else {return nil}
    return NSCPdfImage(image: image)
  }
  
  public static func fromEncodedData(_ data: NSData) -> NSCPdfImage?{
    guard let image = pdf_native_image_from_encoded_data(NSCPdf.instance.PDFInstance, data.bytes, UInt(data.length)) else {return nil}
    return NSCPdfImage(image: image)
  }
  
  
  public static func fromDataAsync(_ data: NSData, _ width: UInt32, _ height: UInt32, _ callback:@escaping (NSCPdfImage?) -> Void) {
    let current = CFRunLoopGetCurrent()
    let swiftData = data as Data
    DispatchQueue.global(qos: .userInteractive).async {
      swiftData.withUnsafeBytes { rawBuffer in
        guard let baseAddress = rawBuffer.baseAddress else {
          callback(nil)
          return
        }
        executeInLoop(current) {
          guard let image = pdf_native_image_from_data(
            NSCPdf.instance.PDFInstance,
            baseAddress,
            UInt(rawBuffer.count),
            width,
            height
          ) else {
            callback(nil)
            return
          }
          callback(NSCPdfImage(image: image))
        }
      }
    }
  }
  
  public static func fromEncodedDataAsync(_ data: NSData, _ callback:@escaping (NSCPdfImage?) -> Void){
    let current = CFRunLoopGetCurrent()
    let swiftData = data as Data
    DispatchQueue.global(qos: .userInteractive).async {
      swiftData.withUnsafeBytes { rawBuffer in
        guard let baseAddress = rawBuffer.baseAddress else {
          callback(nil)
          return
        }
        executeInLoop(current) {
          guard let image = pdf_native_image_from_encoded_data(NSCPdf.instance.PDFInstance, baseAddress,
                                                               UInt(rawBuffer.count)) else {
            callback(nil)
            return
          }
          callback(NSCPdfImage(image: image))
        }
      }
    }
    
    
  }
  
  deinit {
    if(nativeImage != nil){
      pdf_native_release(nativeImage)
      nativeImage = nil
    }
  }
}

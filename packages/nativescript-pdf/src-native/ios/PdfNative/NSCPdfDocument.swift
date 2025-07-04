//
//  NSCPdfDocument.swift
//  PdfNative
//
//  Created by Osei Fortune on 25/06/2025.
//
import Foundation
import CoreImage
import UIKit

@objcMembers
@objc(NSCPdfDocument)
public class NSCPdfDocument: NSObject {
  internal var pdfDocument: OpaquePointer?
  internal var config: NSCPdfDocumentConfig
  public override init() {
    config = NSCPdfDocumentConfig()
    super.init()
    var pdfium = config.pdfium
    pdfDocument = pdf_native_document_init(NSCPdf.instance.PDFInstance, &pdfium)
  }
  
  public init(config: NSCPdfDocumentConfig) {
    self.config = config
    var pdfium = config.pdfium
    pdfDocument = pdf_native_document_init(NSCPdf.instance.PDFInstance, &pdfium)
  }
  
  deinit {
    guard let ptr = pdfDocument else {return}
    pdf_native_document_release(ptr)
    pdfDocument = nil
  }
  
  init(document: OpaquePointer!) {
    config = NSCPdfDocumentConfig()
    pdfDocument = document
    super.init()
  }
  
  public var count: Int {
    return Int(pdf_native_document_count(pdfDocument))
  }
  
  public var width: Float {
    return pdf_native_document_width(pdfDocument)
  }
  
  public var height: Float {
    return pdf_native_document_height(pdfDocument)
  }
  
  public var fontSize: Float {
    get {
      return pdf_native_document_get_font_size(pdfDocument)
    }
    set {
      pdf_native_document_set_font_size(pdfDocument, newValue)
    }
  }
  
  public func setFontColor(_ r: Int32, _ g: Int32, _ b: Int32, a: Int32){
    pdf_native_document_set_font_color(pdfDocument, r,g,b,a)
  }
  
  public func setFontColor(_ r: Int32, _ g: Int32, _ b: Int32){
    pdf_native_document_set_font_color(pdfDocument,r,g,b,255)
  }
  
  public func setDrawColor(_ r: Int32, _ g: Int32, _ b: Int32, a: Int32){
    pdf_native_document_set_draw_color(pdfDocument,r,g,b,a)
  }
  
  public func setDrawColor(_ r: Int32, _ g: Int32, _ b: Int32){
    pdf_native_document_set_draw_color(pdfDocument,r,g,b,255)
  }
  
  public func setFillColor(_ r: Int32, _ g: Int32, _ b: Int32, a: Int32){
    pdf_native_document_set_fill_color(pdfDocument,r,g,b,a)
  }
  
  public func setFillColor(_ r: Int32, _ g: Int32, _ b: Int32){
    pdf_native_document_set_fill_color(pdfDocument,r,g,b,255)
  }
  
  public var lineWidth: Float {
    get {
      return pdf_native_document_get_line_width(pdfDocument)
    }
    set {
      pdf_native_document_set_line_width(pdfDocument, newValue)
    }
  }
  
  public func addPage(){
    addPage(size: .a4(), orientation: .Portrait)
  }
  
  public func addPage(size: NSCPdfPagerSize = .a4(), orientation: NSCPdfOrientation = .Portrait){
    pdf_native_document_add_page(pdfDocument, size.pdfium, orientation.pdfium)
  }
  
  
  public func addText(_ text: String, _ x: Float, _ y: Float, _ options: NSCPdfTextOptions? = nil){
    guard let options = options else {
      pdf_native_document_add_text(pdfDocument, text, x, y, nil)
      return
    }
    
    var opts = options.pdfium()
    pdf_native_document_add_text(pdfDocument, text, x, y, &opts)
  }
  
  public func addImage(_ image: UIImage, _ x: Float, _ y: Float){
    guard let data = NSCPdfDocument.getBytesFromUIImage(image) else {return}
    pdf_native_document_add_image(pdfDocument, data.mutableBytes, UInt32(data.length), x, y, -1, -1)
  }
  
  
  public func addImage(_ image: UIImage, _ x: Float, _ y: Float, _ width: Float, _ height: Float){
    guard let data = NSCPdfDocument.getBytesFromUIImage(image) else {return}
    pdf_native_document_add_image(pdfDocument, data.mutableBytes, UInt32(data.length), x, y, Int32(ceil(width)),Int32(ceil(height)))
  }
  
  public func addImage(data: NSData, _ x: Float, _ y: Float){
    pdf_native_document_add_image(pdfDocument, data.bytes, UInt32(data.length), x, y, -1, -1)
  }
  
  
  public func addImage(data: NSData, _ x: Float, _ y: Float, _ width: Float, _ height: Float){
    pdf_native_document_add_image(pdfDocument, data.bytes, UInt32(data.length), x, y, Int32(ceil(width)),Int32(ceil(height)))
  }
  
  
  public func circle(_ x: Float, _ y: Float, _ r: Float, _ style: NSCPdfStyle = NSCPdfStyle.s) {
      pdf_native_document_circle(pdfDocument, x, y, r, style.pdfium)
    }


  public func ellipse(_ x: Float, _ y: Float, _ rx: Float, _ ry: Float, _ style: NSCPdfStyle = NSCPdfStyle.s) {
      pdf_native_document_ellipse(pdfDocument, x, y, rx, ry, style.pdfium)
    }


  public func rect(_ x: Float, _ y: Float, _ width: Float, _ height: Float, _ style: NSCPdfStyle = NSCPdfStyle.s) {
      pdf_native_document_rect(pdfDocument, x, y, width, height, style.pdfium)
    }


  
  public func renderToBuffer(
    _ index: Int32,
    _ buffer: NSMutableData,
    _ width: Int32,
    _ height: Int32
  ) {
    pdf_native_document_render_to_buffer(pdfDocument, index, UInt32(width), UInt32(height), buffer.mutableBytes, UInt(buffer.count))
  }
  
  public func renderToCGImage(_ index: Int32, _ width: Int32,
                              _ height: Int32){
    
    
  }
  
  public func renderToCGContext(_ index: Int32, _ width: CGFloat, _ height: CGFloat, _ rect: CGRect, in context: CGContext){
    let scaleX: CGFloat = sqrt(context.ctm.a * context.ctm.a + context.ctm.c * context.ctm.c)
    let scaleY: CGFloat = sqrt(context.ctm.b * context.ctm.b + context.ctm.d * context.ctm.d)
    
    
    let scaledX = Float(Int(ceil(rect.origin.x * scaleX)))
    let scaledY = Float(Int(ceil(rect.origin.y * scaleY)))
    let bufferWidth = Int(ceil(rect.width * scaleX))
    let bufferHeight = Int(ceil(rect.height * scaleY))
    
    
    let bufferSize = bufferWidth * bufferHeight * 4
    let buffer = UnsafeMutablePointer<UInt8>.allocate(capacity: bufferSize)
    buffer.initialize(repeating: 255, count: bufferSize)
    
    
    pdf_native_document_render_with_buffer_size(pdfDocument, index, buffer, UInt(bufferSize), Float(width), Float(height),Float(scaleX), Float(scaleY),  Float(rect.origin.x), Float(rect.origin.y), Float(rect.width), Float(rect.height),scaledX, scaledY, Float(bufferWidth), Float(bufferHeight))
    
    
    if let provider = CGDataProvider(dataInfo: nil, data: buffer, size: bufferSize, releaseData: { _, data, _ in
      data.deallocate()
    }) {
      let cgImage = CGImage(
        width: bufferWidth,
        height: bufferHeight,
        bitsPerComponent: 8,
        bitsPerPixel: 32,
        bytesPerRow: bufferWidth * 4,
        space: CGColorSpaceCreateDeviceRGB(),
        bitmapInfo: CGBitmapInfo.byteOrder32Little.union(CGBitmapInfo(rawValue: CGImageAlphaInfo.premultipliedFirst.rawValue)),
        provider: provider,
        decode: nil,
        shouldInterpolate: true,
        intent: .defaultIntent
      )
      
      if let image = cgImage {
        context.saveGState()
        context.translateBy(x: rect.origin.x, y: rect.origin.y + rect.height)
        context.scaleBy(x: 1.0, y: -1.0)
        context.draw(image, in: CGRect(origin: .zero, size: rect.size))
        context.restoreGState()
      }
    }
    
    
  }
  
  
  public func renderToCGContextImage(_ index: Int32, _ width: CGFloat, _ height: CGFloat, _ rect: CGRect, _ scaleX: CGFloat, _ scaleY: CGFloat, _ withScale: Bool = true) -> CGImage? {
    
    var sx = scaleX
    var sy = scaleY
    if(!withScale){
      sx = 1
      sy = 1
    }
  
    
    let scaledX = Float(ceil(rect.origin.x * sx))
    let scaledY = Float(ceil(rect.origin.y * sy))
    let bufferWidth = Int(ceil(rect.width * sx))
    let bufferHeight = Int(ceil(rect.height * sy))
    
    
    
    let bufferSize = bufferWidth * bufferHeight * 4
    let buffer = UnsafeMutablePointer<UInt8>.allocate(capacity: bufferSize)
    buffer.initialize(repeating: 255, count: bufferSize)
    

    if(withScale){
      pdf_native_document_render_with_buffer_size(pdfDocument, index, buffer, UInt(bufferSize), Float(width), Float(height),Float(sx), Float(sy), Float(rect.origin.x), Float(rect.origin.y), Float(rect.width), Float(rect.height),scaledX, scaledY, Float(bufferWidth), Float(bufferHeight))
    }else {
      pdf_native_document_render_to_buffer(pdfDocument, index, UInt32(width), UInt32(height), buffer, UInt(bufferSize))
    }

    
    if let provider = CGDataProvider(dataInfo: nil, data: buffer, size: bufferSize, releaseData: { _, data, _ in
      data.deallocate()
    }) {
      let cgImage = CGImage(
        width: bufferWidth,
        height: bufferHeight,
        bitsPerComponent: 8,
        bitsPerPixel: 32,
        bytesPerRow: bufferWidth * 4,
        space: CGColorSpaceCreateDeviceRGB(),
        bitmapInfo: CGBitmapInfo.byteOrder32Little.union(CGBitmapInfo(rawValue: CGImageAlphaInfo.premultipliedFirst.rawValue)),
        provider: provider,
        decode: nil,
        shouldInterpolate: true,
        intent: .defaultIntent
      )
      
      return cgImage
    }
    
    return nil
  }
  
  
  
  public func roundedRect(
      _ x: Float,
      _ y: Float,
      _ width: Float,
      _ height: Float,
      _ rx: Float,
      _ ry: Float,
      _ style: NSCPdfStyle = NSCPdfStyle.s
    ) {
      pdf_native_document_rounded_rect(pdfDocument, x, y, width, height, rx, ry, style.pdfium)
    }

  
  
  public func table(_ config: NSCPdfTable){
    var pdfium = config.pdfium(self.config.units)
    pdf_native_document_table(pdfDocument, &pdfium)
  }
  
  
  static func getBytesFromUIImage(_ image: UIImage) -> NSMutableData? {
          var cgImage = image.cgImage
          
          if(cgImage == nil && image.ciImage != nil){
              let context = CIContext()
              cgImage = context.createCGImage(image.ciImage!, from: image.ciImage!.extent)
          }
          
          guard let cgImage = cgImage else {
              return nil
          }
         
          let width = cgImage.width
          let height = cgImage.height
          let bytesPerRow = width * 4
          let size = width * height * 4
          let buffer = NSMutableData(length: size)
          let colorSpace = CGColorSpaceCreateDeviceRGB()
          let ctx = CGContext(data: buffer?.mutableBytes, width: width, height: height, bitsPerComponent: 8, bytesPerRow: bytesPerRow, space: colorSpace, bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue | CGBitmapInfo.byteOrder32Big.rawValue)
          
          ctx?.draw(cgImage, in: CGRect(x: 0, y: 0, width: width, height: height))
          
          return buffer!
      }
}

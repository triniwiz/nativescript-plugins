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
  
  public func saveSync(to file: String) -> NSError? {
    let error = pdf_native_document_save_to_file(pdfDocument, file)
    if(error !=  nil){
      let msg = String(cString: error!)
      let err = NSError(
          domain: "PdfView",
          code: 1,
          userInfo: [NSLocalizedDescriptionKey: msg]
      )
      
      pdf_native_string_release(error)
      return err
    }
    return nil
  }
  
  public func save(to file: String, callback: @escaping(NSError?) -> Void) {
    DispatchQueue.global().async {
      let error = pdf_native_document_save_to_file(self.pdfDocument, file)
      if(error !=  nil){
        let msg = String(cString: error!)
        let err = NSError(
            domain: "PdfView",
            code: 1,
            userInfo: [NSLocalizedDescriptionKey: msg]
        )
        
        pdf_native_string_release(error)
        callback(err)
        return
      }
      callback(nil)
    }
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
  
  public func addImage(base64: String, _ mime: String, _ x: Float, _ y: Float){
    var data: NSData?
    switch(mime){
    case "JPG","JPEG", "PNG":
      let input = base64.split(separator: ",")
      if(input.count > 1){
        data = NSData(base64Encoded: String(input[1]),  options: .ignoreUnknownCharacters)
      }else {
        data = NSData(base64Encoded: base64,  options: .ignoreUnknownCharacters)
      }
      break
    default: break
    }
    guard let data = data else {return}
    pdf_native_document_add_image(pdfDocument, data.bytes, UInt32(data.length), x, y, -1, -1)
  }
  
  
  public func addImage(base64: String, _ mime: String, _ x: Float, _ y: Float, _ width: Float, _ height: Float){
    var data: NSData?
    switch(mime){
    case "JPG","JPEG", "PNG":
      let input = base64.split(separator: ",")
      if(input.count > 1){
        data = NSData(base64Encoded: String(input[1]),  options: .ignoreUnknownCharacters)
      }else {
        data = NSData(base64Encoded: base64,  options: .ignoreUnknownCharacters)
      }
      break
    default: break
    }
    guard let data = data else {return}
    pdf_native_document_add_image(pdfDocument, data.bytes, UInt32(data.length), x, y, Int32(ceil(width)),Int32(ceil(height)))
  }
  
  
 
  
  public func addImage(_ image: UIImage, _ x: Float, _ y: Float){
    guard let data = NSCPdfDocument.getBytesFromUIImage(image) else {return}
    pdf_native_document_add_raw_image(pdfDocument, data.mutableBytes, UInt32(data.length),UInt32(image.size.width),UInt32(image.size.height), x, y, -1, -1)
  }
  
  
  public func addImage(_ image: UIImage, _ x: Float, _ y: Float, _ width: Float, _ height: Float){
    guard let data = NSCPdfDocument.getBytesFromUIImage(image) else {return}
    pdf_native_document_add_raw_image(pdfDocument, data.mutableBytes, UInt32(data.length), UInt32(image.size.width),UInt32(image.size.height), x, y, Int32(ceil(width)),Int32(ceil(height)))
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
    pdf_native_document_render_into_buffer(pdfDocument,index, buffer.mutableBytes, UInt(buffer.length), UInt32(width), UInt32(height))
  }
  
  
  public func renderToCGContext(_ index: Int32, _ width: CGFloat, _ height: CGFloat, _ rect: CGRect, in context: CGContext){
    let scaleX: CGFloat = sqrt(context.ctm.a * context.ctm.a + context.ctm.c * context.ctm.c)
    let scaleY: CGFloat = sqrt(context.ctm.b * context.ctm.b + context.ctm.d * context.ctm.d)
    
    
    
    guard let info = pdf_native_document_render_to_buffer_with_scale(pdfDocument, index, Float(width), Float(height),Float(scaleX), Float(scaleY),  Float(rect.origin.x), Float(rect.origin.y), Float(rect.width), Float(rect.height), false, false) else {return}
    
    
    let bufferWidth = Int(info.pointee.width)
    let bufferHeight = Int(info.pointee.height)
    let dataPtr: Unmanaged<NSData> = Unmanaged.fromOpaque(info.pointee.data)
    let data = dataPtr.takeRetainedValue()
    
    
    guard let provider = CGDataProvider(data: data) else {
      pdf_native_render_info_release(info)
      return
    }
    
    
    
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
    
    pdf_native_render_info_release(info)
    
    
  }
  
  
  public func renderToCGContextImage(_ index: Int32, _ width: CGFloat, _ height: CGFloat, _ rect: CGRect, _ scaleX: CGFloat, _ scaleY: CGFloat, _ withScale: Bool = true, _ flipVertical: Bool = false, _ flipHorizontal: Bool = false) -> CGImage? {
    
    
    
    
    
    let info = if(withScale){
      pdf_native_document_render_to_buffer_with_scale(pdfDocument,
                                                      index,
                                                      Float(width), Float(height),
                                                      Float(scaleX), Float(scaleY),
                                                      Float(rect.origin.x), Float(rect.origin.y), Float(rect.width), Float(rect.height), flipVertical, flipHorizontal)
    }else {
      pdf_native_document_render_to_buffer(pdfDocument, index, UInt32(width), UInt32(height), flipVertical, flipHorizontal)
    }
    
    
    guard let info = info else {
      return nil
    }
    
    
    let bufferWidth = Int(info.pointee.width)
    let bufferHeight = Int(info.pointee.height)
    let dataPtr: Unmanaged<NSData> = Unmanaged.fromOpaque(info.pointee.data)
    let data = dataPtr.takeRetainedValue()
    
    
    guard let provider = CGDataProvider(data: data) else {
      pdf_native_render_info_release(info)
      return nil
    }
    
    
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
    
    pdf_native_render_info_release(info)
    
    return cgImage
  }
  
  
  
  public func renderToCGContextImages(_ indices: [Int32], _ width: CGFloat, _ height: CGFloat, _ rect: CGRect, _ scaleX: CGFloat, _ scaleY: CGFloat, _ withScale: Bool = true, _ flipVertical: Bool = false, _ flipHorizontal: Bool = false) -> [CGImage?]? {
    
    
    
    let info = if(withScale){
      pdf_native_document_render_to_buffers_with_scale(pdfDocument,
                                                       indices,
                                                      UInt(indices.count),
                                                      Float(width), Float(height),
                                                      Float(scaleX), Float(scaleY),
                                                      Float(rect.origin.x), Float(rect.origin.y), Float(rect.width), Float(rect.height), flipVertical, flipHorizontal)
    }else {
      
      pdf_native_document_render_to_buffers(pdfDocument,
                                            indices,
                                           UInt(indices.count), UInt32(width), UInt32(height), flipVertical, flipHorizontal)
    }
    
    
    guard let info = info else {
      return nil
    }
    
    let arrayPtr: Unmanaged<NSArray> = Unmanaged.fromOpaque(info)
    let array = arrayPtr.takeRetainedValue()
    
  
    return array.map { item in
      guard let info = item as? NSCPdfInfo else {
        return nil
      }
      
      guard let provider = CGDataProvider(data: info.data) else {
        return nil
      }
      
      return CGImage(
        width: Int(info.width),
        height: Int(info.height),
        bitsPerComponent: 8,
        bitsPerPixel: 32,
        bytesPerRow:  Int(info.width) * 4,
        space: CGColorSpaceCreateDeviceRGB(),
        bitmapInfo: CGBitmapInfo.byteOrder32Little.union(CGBitmapInfo(rawValue: CGImageAlphaInfo.premultipliedFirst.rawValue)),
        provider: provider,
        decode: nil,
        shouldInterpolate: true,
        intent: .defaultIntent
      )
    }
    
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
  
  
  static func getFirst(_ measureOutput: Int64) -> Float {
        return Float(bitPattern: UInt32(0xFFFFFFFF & (measureOutput  >> 32)))
    }
    
    static  func getSecond(_ measureOutput: Int64) -> Float {
        return Float(bitPattern: UInt32(0xFFFFFFFF & measureOutput))
    }
  
  
  public func table(_ config: NSCPdfTable) -> String{
    var pdfium = config.pdfium(self.config.units)
    let output = pdf_native_document_table(pdfDocument, &pdfium)
    return String(format: "{ \"x\": %.2f, \"y\": %.2f }", NSCPdfDocument.getFirst(output), NSCPdfDocument.getSecond(output))
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

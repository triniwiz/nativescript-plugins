//
//  NSCPdfTiledView.swift
//  PdfNative
//
//  Created by Osei Fortune on 24/07/2025.
//
import UIKit

@objc(NSCPdfTiledView)
@objcMembers
public class NSCPdfTiledView: UIScrollView, UIScrollViewDelegate, LDOTiledViewDataSource
{
  
  let tileCache = NSCache<NSString, UIImage>()
  internal var lowResCache = NSCache<NSNumber, UIImage>()
  internal var pendingItems: [PendingItemKey: DispatchWorkItem] = [:]
  private let pendingLock = NSLock()
  private let pages = [
    LDOTiledView(frame: .zero),
    LDOTiledView(frame: .zero),
    LDOTiledView(frame: .zero),
    LDOTiledView(frame: .zero),
    LDOTiledView(frame: .zero)
  ]
  public var document: NSCPdfDocument? {
    didSet {
      pendingItems.values.forEach { item in
        item.cancel()
      }
      pendingItems.removeAll()
      lowResCache.removeAllObjects()
      tileCache.removeAllObjects()
    }
  }
  
  func tiledView(_ tiledView: LDOTiledView, tileForRow row: Int, column: Int, zoomLevel: Int, bounds: CGRect) -> UIImage? {
    var image: UIImage? = nil
    
    guard let document = document else {
      return nil
    }
    
    let key = "\(tiledView.index),\(row),\(column),\(zoomLevel)" as NSString
    
    let lowRes = lowResCache.object(forKey: NSNumber(value: Int32(tiledView.index)))
    if(lowRes == nil && getPending(key: tiledView.index) == nil){
      var workItem: DispatchWorkItem? = nil
      
      workItem = DispatchWorkItem {
        if workItem?.isCancelled == true {
          return
        }
        defer {
          self.removePending(key: tiledView.index)
        }
        
        let image = document.renderToCGContextImage(
          Int32(tiledView.index),
          bounds.size.width,
          bounds.size.height,
          CGRect(origin: .zero, size: bounds.size),
          1,
          1,
          false
        )
        
        
        if let image = image {
          let image = UIImage(cgImage: image)
          self.lowResCache.setObject(image, forKey: NSNumber(value: Int32(tiledView.index)))
          DispatchQueue.main.async {
            tiledView.setNeedsDisplay()
          }
        }
        
      }
      
      if let workItem = workItem {
        queue.async(execute: workItem)
      }
      
      // todo loading
      
      return nil
      
      
    }
    
    
    if let lowRes = lowRes {
        let tileSize = tiledView.tileSize
        let tileOriginX = CGFloat(column) * tileSize.width
        let tileOriginY = CGFloat(row) * tileSize.height

        let tileRect = CGRect(x: tileOriginX, y: tileOriginY, width: tileSize.width, height: tileSize.height)

        // Clamp to available image size
        let imageSizeInPoints = lowRes.size
        let croppedRect = tileRect.intersection(CGRect(origin: .zero, size: imageSizeInPoints))

        if croppedRect.isEmpty {
            return nil
        }

        guard let cgImage = lowRes.cgImage else {
            return nil
        }

        let scale = lowRes.scale
        let imageHeightInPixels = CGFloat(cgImage.height)

        // Convert from points to pixels and flip Y
        let pixelRect = CGRect(
            x: croppedRect.origin.x * scale,
            y: imageHeightInPixels - (croppedRect.origin.y + croppedRect.height) * scale,
            width: croppedRect.width * scale,
            height: croppedRect.height * scale
        )

        guard let croppedCGImage = cgImage.cropping(to: pixelRect) else {
            return nil
        }

        return UIImage(cgImage: croppedCGImage, scale: scale, orientation: lowRes.imageOrientation)
    }
    
    
    if let cachedImage = tileCache.object(forKey: key as NSString) {
      return cachedImage
    }
    
    queue.async {
      
      let info = pdf_native_document_render_to_buffer_with_scale_and_tile(self.document?.pdfDocument, Int32(self.currentPage), UInt32(tiledView.tileSize.width), UInt32(tiledView.tileSize.height), Float(bounds.width), Float(bounds.height), Float(zoomLevel), UInt32(row), UInt32(column))
      
      if let info = info {
        
        let bufferWidth = Int(info.pointee.width)
        let bufferHeight = Int(info.pointee.height)
        let dataPtr: Unmanaged<NSData> = Unmanaged.fromOpaque(info.pointee.data)
        let data = dataPtr.takeRetainedValue()
        
        if let provider = CGDataProvider(data: data)  {
          
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
          
          if let cgImage = cgImage {
            image = UIImage(cgImage: cgImage)
            self.tileCache.setObject(image!, forKey: key)
            DispatchQueue.main.async {
              tiledView.setNeedsDisplay()
            }
          }
          
          pdf_native_render_info_release(info)
        }else {
          pdf_native_render_info_release(info)
        }
        
        
      }
      
    }
    
    
    return image
  }
  
  internal let queue = NSCPdfQueue()
  public var onLoaded: ((NSCPdfDocument) -> Void)?
  public var onError: ((Error?) -> Void)?
  public var onPageChange: ((Int) -> Void)?
  var currentPage: Int = 0
  private let contentView = UIView()
  private var zoomScaleFactor: CGFloat = 1.0
  
  internal func getPending(key: Int) -> DispatchWorkItem? {
    pendingLock.lock(); defer { pendingLock.unlock() }
    return pendingItems[PendingItemKey.page(key)]
  }
  
  internal func getPending(key: TileKey) -> DispatchWorkItem? {
    pendingLock.lock(); defer { pendingLock.unlock() }
    return pendingItems[PendingItemKey.tile(key)]
  }
  
  internal func getPending(_ key: PendingItemKey) -> DispatchWorkItem? {
    pendingLock.lock(); defer { pendingLock.unlock() }
    return pendingItems[key]
  }
  
  internal func setPending(_ key: PendingItemKey, value: DispatchWorkItem) {
    pendingLock.lock(); defer { pendingLock.unlock() }
    pendingItems[key] = value
  }
  
  internal func setPending(key: Int, value: DispatchWorkItem) {
    pendingLock.lock(); defer { pendingLock.unlock() }
    pendingItems[PendingItemKey.page(key)] = value
  }
  
  internal func setPending(key: TileKey, value: DispatchWorkItem) {
    pendingLock.lock(); defer { pendingLock.unlock() }
    pendingItems[PendingItemKey.tile(key)] = value
  }
  
  internal func removePending(_ key: PendingItemKey) {
    pendingLock.lock(); defer { pendingLock.unlock() }
    pendingItems.removeValue(forKey: key)
  }
  
  
  internal func removePending(key: Int) {
    pendingLock.lock(); defer { pendingLock.unlock() }
    pendingItems.removeValue(forKey: PendingItemKey.page(key))
  }
  
  internal func removePending(key: TileKey) {
    pendingLock.lock(); defer { pendingLock.unlock() }
    pendingItems.removeValue(forKey: PendingItemKey.tile(key))
  }
  
  public override init(frame: CGRect) {
    let padding = UIEdgeInsets(top: 10, left: 10, bottom: 10, right: 10)
    super.init(frame: frame.inset(by: padding))
    minimumZoomScale = 1
    if #available(iOS 11.0, *) {
      //   contentInsetAdjustmentBehavior = .never
    }
    //    self.bounces = false
    //    self.alwaysBounceVertical = true
    //    self.alwaysBounceHorizontal = false
    delegate = self
    contentView.frame = bounds
    addSubview(contentView)
    
    
    pages[0].maximumZoomScale = 5
    
    maximumZoomScale =  pages[0].maximumZoomScale
        
    pages[0].index = 0
    pages[0].debugAnnotateTiles = true
    
    pages[0].dataSource = self
    pages[0].imageSize = bounds.size
    pages[0].frame = bounds
    
    contentView.addSubview(pages[0])
  }
  
  required init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  public func viewForZooming(in scrollView: UIScrollView) -> UIView? {
    return contentView
  }
  
  
  public func loadFromBytes(_ bytes: NSData, _ password: String?) {
    queue.async {
      let document = NSCPdf.instance.loadFromBytes(bytes: bytes, password: password)
      if(document != nil){
        DispatchQueue.main.async {
          self.document = document
          if let document = document {
            self.onLoaded?(document)
          }
        }
      }
    }
  }
  
  
  public func loadFromPath(_ path: String, _ password: String?) {
    queue.async {
      let document = NSCPdf.instance.loadFromPath(path: path.replacingOccurrences(of: "file://", with: ""), password: password)
      if (document == nil) {
        self.document = nil
        self.onError?(NSError(domain: "NativeScript", code: 1000, userInfo: [:]))
        return
      }
      
      DispatchQueue.main.async {
        self.document = document
        if let document = document {
          self.onLoaded?(document)
        }
      }
    }
  }
  
  
  public func loadFromUrl(_ url: String, _ password: String?) {
    let request  = URLRequest(url: URL(string: url)!)
    let session = URLSession(configuration: URLSessionConfiguration.default)
    session.dataTask(with: request) { [self] data, response, error in
      guard let data = data else {
        self.onError?(error)
        return
      }
      NSCPdfQueue.shared.async {
        let document = NSCPdf.instance.loadFromBytes(bytes: data as NSData)
        DispatchQueue.main.async {
          self.document = document
          if let document = document {
            self.onLoaded?(document)
          }
        }
      }
    }.resume()
  }
}

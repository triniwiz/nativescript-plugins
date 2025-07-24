////
////  NSCPdfPageView.swift
////  PdfNative
////
////  Created by Osei Fortune on 11/07/2025.
////
//import UIKit
//
//
//final class NoFadeTiledLayer: CATiledLayer {
//  override class func fadeDuration() -> CFTimeInterval {
//    return 0.0
//  }
//}
//
//@objcMembers
//@objc(NSCPdfPageView)
//public class NSCPdfPageView: UIView {
//  
//  var spinner: UIActivityIndicatorView?
//  var lowRes: CGImage? = nil
//  weak var pdfView: NSCPdfView? = nil
//  var index: Int = -1
//
//  public override init(frame: CGRect) {
//    super.init(frame: frame)
//    
//    contentMode = .redraw
//    
//    if #available(iOS 13.0, *) {
//      spinner = UIActivityIndicatorView(style: .medium)
//    } else {
//      spinner = UIActivityIndicatorView(style: .gray)
//    }
//    
//    if let spinner = spinner {
//      spinner.hidesWhenStopped = true
//      addSubview(spinner)
//    }
//    
//    let tiledLayer = self.layer as! CATiledLayer
//    tiledLayer.levelsOfDetail = 4
//    tiledLayer.levelsOfDetailBias = 3
//    tiledLayer.tileSize = CGSize(width: 256 * UIScreen.main.scale, height: 256 * UIScreen.main.scale)
//    tiledLayer.contentsScale = UIScreen.main.scale
//    self.isOpaque = true
//  }
//  
//  public override func layoutSubviews() {
//    super.layoutSubviews()
//    // Center spinner properly on bounds change
//    spinner?.center = CGPoint(x: bounds.midX, y: bounds.midY)
//  }
//  
//  deinit {
//    pdfView?.getPending(key: index)?.cancel()
//  }
//  
//  public override func draw(_ rect: CGRect) {
//    guard let context = UIGraphicsGetCurrentContext(),
//          let pdfView = pdfView,
//          let document = pdfView.document else { return }
//
//    let ctm = context.ctm
//    let scaleX = sqrt(ctm.a * ctm.a + ctm.c * ctm.c)
//    let scaleY = sqrt(ctm.b * ctm.b + ctm.d * ctm.d)
//    let zoomScaleInt = Int((scaleX * 1000).rounded())
//    let key = TileKey(index: index, rect: rect, zoomScale: CGFloat(zoomScaleInt))
//    let keyWrapper = TileKeyWrapper(key)
//
//
////    if lowRes == nil {
////      if let cached = pdfView.lowResCache.object(forKey: NSNumber(value: index)) {
////        lowRes = cached
////      } else if !pdfView.isLowResPending(for: index) {
////        prepareLowResPreview()
////      }
////    }
//
//
//    if let lowRes = self.lowRes {
//      context.saveGState()
//      context.interpolationQuality = .low
//      context.translateBy(x: 0, y: bounds.height)
//      context.scaleBy(x: 1, y: -1)
//      context.draw(lowRes, in: bounds)
//      context.restoreGState()
//    } else {
//      context.setFillColor(UIColor.white.cgColor)
//      context.fill(rect)
//    }
//
//
//    if let tileImage = pdfView.tileCache.object(forKey: keyWrapper) {
//      context.saveGState()
//      context.translateBy(x: rect.origin.x, y: rect.origin.y + rect.size.height)
//      context.scaleBy(x: 1, y: -1)
//      context.draw(tileImage, in: CGRect(origin: .zero, size: rect.size))
//      context.restoreGState()
//      return
//    }
//
//    // Don't trigger work if pending already
//    if pdfView.getPending(key: key) != nil {
//      return
//    }
//
//    let width = bounds.width
//    let height = bounds.height
//
//    var workItem: DispatchWorkItem? = nil
//
//    workItem = DispatchWorkItem { [weak self] in
//      guard let self = self else { return }
//      defer { pdfView.removePending(key: key) }
//
//      if workItem?.isCancelled == true {
//        return
//      }
//
//      let tile = document.renderToCGContextImage(
//        Int32(self.index),
//        width,
//        height,
//        rect,
//        scaleX,
//        scaleY
//      )
//
//      guard let image = tile else {
//        DispatchQueue.main.async {
//          self.setNeedsDisplay(rect)
//        }
//        return
//      }
//
//      pdfView.tileCache.setObject(image, forKey: keyWrapper)
//
//      DispatchQueue.main.async {
//        // Redraw only affected rect
//        self.setNeedsDisplay(rect)
//      }
//    }
//
//    pdfView.setPending(key: key, value: workItem!)
//    pdfView.queue.async(execute: workItem!)
//  }
//  
//  internal func prepareLowResPreview() {
//    guard let pdfView = pdfView, let document = pdfView.document else { return }
//    let size = bounds.size
//    if(size == .zero){
//      return
//    }
//    
//    if let cached = pdfView.lowResCache.object(forKey: NSNumber(value: index)) {
//      self.lowRes = cached
//      self.setNeedsDisplay()
//      return
//    }
//    
//    let key = PendingItemKey.page(index)
//    
//    if(pdfView.getPending(key) != nil){
//      return
//    }
//    var workItem: DispatchWorkItem? = nil
//    
//    workItem = DispatchWorkItem { [weak self] in
//      guard let self = self else { return }
//      if workItem?.isCancelled == true { return }
//      let image = document.renderToCGContextImage(
//        Int32(self.index),
//        size.width,
//        size.height,
//        CGRect(origin: .zero, size: size),
//        1,
//        1,
//        false
//      )
//      DispatchQueue.main.async {
//        self.lowRes = image
//        pdfView.removePending(key)
//        self.setNeedsDisplay()
//      }
//    }
//    pdfView.setPending(key, value: workItem!)
//    pdfView.queue.async(execute: workItem!)
//  }
//  
//  override public class var layerClass: AnyClass {
//    return NoFadeTiledLayer.self
//  }
//  
//  required init?(coder: NSCoder) {
//    fatalError("init(coder:) has not been implemented")
//  }
//}

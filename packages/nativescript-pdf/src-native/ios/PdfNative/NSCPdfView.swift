//
//  NSCPdfView.swift
//  PdfNative
//
//  Created by Osei Fortune on 25/06/2025.
//

import UIKit


@objc(NSCPdfView)
@objcMembers
public class NSCPdfView: UIView, UICollectionViewDataSource, UICollectionViewDelegateFlowLayout,  UICollectionViewDataSourcePrefetching
{
  private var lowResCache = NSCache<NSNumber, CGImage>()
  private var lowResPreviewWorkItems: [Int: DispatchWorkItem] = [:]
  
  public var document: NSCPdfDocument? {
    didSet {
      list.reloadData()
    }
  }
  
  private let layout = UICollectionViewFlowLayout()
  var list: UICollectionView!
  private let queue = NSCPdfQueue()
  // private let queue = DispatchQueue(label: "NSCPdfView-Queue" )
  
  public var onLoaded: ((NSCPdfDocument) -> Void)?
  public var onError: ((Error?) -> Void)?
  public var onPageChange: ((Int) -> Void)?
  
  
  class PageView: UIView {
    let index: Int
    let document: NSCPdfDocument
    let pdfView: NSCPdfView
    var lowRes: CGImage? = nil
    let tileCache = NSCache<TileKeyWrapper, CGImage>()
    var pendingWorkItems: [TileKey: DispatchWorkItem] = [:]
    
    var currentZoomScale: Int = 0
    
    private let workItemLock = NSLock()
    var lowResWorkItem: DispatchWorkItem?
    
    
    private func safeGet(_ key: TileKey) -> DispatchWorkItem? {
      workItemLock.lock(); defer { workItemLock.unlock() }
      return pendingWorkItems[key]
    }
    
    private func safeSet(_ key: TileKey, value: DispatchWorkItem) {
      workItemLock.lock(); defer { workItemLock.unlock() }
      pendingWorkItems[key] = value
    }
    
    private func safeRemove(_ key: TileKey) {
      workItemLock.lock(); defer { workItemLock.unlock() }
      pendingWorkItems.removeValue(forKey: key)
    }
    
    var spinner: UIActivityIndicatorView?
    init(frame: CGRect, pdfView: NSCPdfView , index: Int, document: NSCPdfDocument) {
      self.pdfView = pdfView
      self.index = index
      self.document = document
      //      let padding = UIEdgeInsets(top: 10, left: 10, bottom: 10, right: 10)
      //      super.init(frame: frame.inset(by: padding))
      super.init(frame: frame)
      
      clipsToBounds = true
      
     // tileCache.countLimit = 100
      
      if #available(iOS 13.0, *) {
        spinner = UIActivityIndicatorView(style: .medium)
      } else {
        spinner = UIActivityIndicatorView(style: .gray)
      }
      
      if let spinner = spinner {
        spinner.center = CGPoint(x: bounds.width / 2, y: bounds.height / 2)
        spinner.autoresizingMask = [.flexibleTopMargin, .flexibleBottomMargin, .flexibleLeftMargin, .flexibleRightMargin]
        spinner.hidesWhenStopped = true
        addSubview(spinner)
      }
      
      let tiledLayer = self.layer as! CATiledLayer
      tiledLayer.levelsOfDetail = 4
      tiledLayer.levelsOfDetailBias = 3
      tiledLayer.tileSize = CGSize(width: 256 * UIScreen.main.scale, height: 256 * UIScreen.main.scale)
      self.isOpaque = true
      prepareLowResPreview()
    }
    
    deinit {
      lowResWorkItem?.cancel()
    }
    
    
    override func layoutSubviews() {
      super.layoutSubviews()
      if(lowResWorkItem == nil && lowRes == nil){
        prepareLowResPreview()
      }
      // progress.frame.origin = .init(x: bounds.size.width / 2 - 50, y: bounds.size.height / 2 - 50)
    }
    
    
    
    private func prepareLowResPreview() {
      let size = bounds.size
      if(size == .zero){
        return
      }
      
      if let cached = pdfView.lowResCache.object(forKey: NSNumber(value: index)) {
        self.lowRes = cached
        self.setNeedsDisplay()
        return
      }
      
      if(lowResWorkItem != nil){
        return
      }
      
      lowResWorkItem?.cancel()
      var workItem: DispatchWorkItem? = nil
      
      workItem = DispatchWorkItem { [weak self] in
        guard let self = self else { return }
        if workItem?.isCancelled == true { return }
        let image = self.document.renderToCGContextImage(
          Int32(self.index),
          size.width,
          size.height,
          CGRect(origin: .zero, size: size),
          1,
          1,
          false
        )
        DispatchQueue.main.async {
          self.lowRes = image
          self.lowResWorkItem = nil
          self.setNeedsDisplay()
        }
      }
      
      lowResWorkItem = workItem!
      pdfView.queue.async(execute: workItem!)
    }
    
    func clearCache() {
      tileCache.removeAllObjects()
      lowRes = nil
      setNeedsDisplay()
    }
    
    func cancelAllPendingWork() {
      workItemLock.lock()
      let canceledItems = pendingWorkItems
      pendingWorkItems.removeAll()
      workItemLock.unlock()
      
      for (key, item) in canceledItems {
        item.cancel()
        safeRemove(key)
      }
      
      lowResWorkItem?.cancel()
      
    }
    
    override class var layerClass: AnyClass { CATiledLayer.self }
    
    
    private var didFadeInHighRes = false
    
    
    private func fadeInHighResIfNeeded() {
      guard !didFadeInHighRes else { return }
      
      didFadeInHighRes = true
      
      let transition = CATransition()
      transition.type = .fade
      transition.duration = 0.25
      self.layer.add(transition, forKey: kCATransition)
      
      CATransaction.begin()
      CATransaction.setDisableActions(true)
      self.setNeedsDisplay()
      CATransaction.commit()
    }
    
    private func drawLowResFallback(in context: CGContext, scaleX: CGFloat, scaleY: CGFloat , rect: CGRect, viewSize: CGSize) {
      
      guard let preview = lowRes else {
              context.setFillColor(UIColor.white.cgColor)
              context.fill(rect)
              return
          }

          let imageWidth = CGFloat(preview.width)
          let imageHeight = CGFloat(preview.height)

      let cropX = rect.origin.x / viewSize.width * imageWidth
      let cropY = rect.origin.y / viewSize.height * imageHeight
      let cropWidth = rect.width / viewSize.width * imageWidth
      let cropHeight = rect.height / viewSize.height * imageHeight

          let cropRect = CGRect(x: cropX, y: cropY, width: cropWidth, height: cropHeight)

  
          let intersection = cropRect.intersection(CGRect(x: 0, y: 0, width: imageWidth, height: imageHeight))

          guard intersection.width >= 1, intersection.height >= 1 else {
              context.setFillColor(UIColor.white.cgColor)
              context.fill(rect)
              return
          }

          guard let cropped = preview.cropping(to: intersection.integral) else {
              return
          }

          let scaleW = rect.width / cropWidth
          let scaleH = rect.height / cropHeight

          let dx = (intersection.origin.x - cropX) * scaleW
          let dy = (intersection.origin.y - cropY) * scaleH
          let dw = intersection.width * scaleW
          let dh = intersection.height * scaleH

          let drawRect = CGRect(x: rect.origin.x + dx,
                                y: rect.origin.y + dy,
                                width: dw,
                                height: dh)

          context.saveGState()
          context.translateBy(x: 0, y: drawRect.origin.y * 2 + drawRect.size.height)
          context.scaleBy(x: 1, y: -1)
          context.draw(cropped, in: drawRect)
          context.restoreGState()
      
    }
    
    
    
    override func draw(_ rect: CGRect)  {
      if lowRes == nil {
        if let cached = pdfView.lowResCache.object(forKey: NSNumber(value: index)) {
          self.lowRes = cached
        } else if lowResWorkItem == nil {
          prepareLowResPreview()
        }
      }
      
      let pageRect = CGRect(origin: .zero, size: bounds.size)
        guard pageRect.intersects(rect) else {
          return
        }
      
      guard bounds.contains(rect) || rect.intersects(bounds) else {
        return
      }
      
      
      let showSpinner = lowRes == nil &&
      tileCache.object(forKey: TileKeyWrapper(TileKey(index:index, rect:rect, zoomScale: CGFloat(currentZoomScale)))) == nil
      
      DispatchQueue.main.async {
        if showSpinner {
          self.spinner?.startAnimating()
        } else {
          self.spinner?.stopAnimating()
        }
      }
      
      
      guard let context = UIGraphicsGetCurrentContext() else { return }
      
      
      let ctm = context.ctm
      let scaleX = sqrt(ctm.a * ctm.a + ctm.c * ctm.c)
      let scaleY = sqrt(ctm.b * ctm.b + ctm.d * ctm.d)
      
      
      let zoomScaleInt = Int((scaleX * 1000).rounded())
      
      drawLowResFallback(in: context, scaleX: scaleX, scaleY: scaleY,  rect: rect, viewSize: bounds.size)
      
      if zoomScaleInt != currentZoomScale {
        currentZoomScale = zoomScaleInt
        didFadeInHighRes = false
        
        workItemLock.lock()
        let cancelledItems = pendingWorkItems
        pendingWorkItems.removeAll()
        workItemLock.unlock()
        
        
        for (_, item) in cancelledItems {
          item.cancel()
        }
        
        tileCache.removeAllObjects()
        
        DispatchQueue.main.async {
          self.setNeedsDisplay()
        }
        
        return
      }
      
      
      let key = TileKey(index:index, rect: rect, zoomScale: scaleX)
      let keyWrapper = TileKeyWrapper(key)
      
      if let image = tileCache.object(forKey: keyWrapper) {
        guard self.bounds.intersects(rect) else { return }
          
          context.saveGState()
          context.clip(to: self.bounds)
          context.translateBy(x: rect.origin.x, y: rect.origin.y + rect.height)
          context.scaleBy(x: 1, y: -1)
          context.draw(image, in: CGRect(origin: .zero, size: rect.size))
          context.restoreGState()
        return
      }
      
      
      if let existingWorkItem = safeGet(key), !existingWorkItem.isCancelled {
        drawLowResFallback(in: context, scaleX: scaleX, scaleY: scaleY, rect: rect, viewSize: bounds.size)
        return
      }
      
      
      let width = self.bounds.width
      let height = self.bounds.height
      
      let workItem = DispatchWorkItem { [weak self] in
        guard let self = self else { return }
        defer {
          safeRemove(key)
        }
        
        guard let item = safeGet(key), !item.isCancelled else {
          return
        }
        
        
        let image = self.document.renderToCGContextImage(Int32(self.index), width, height, rect, scaleX, scaleY)
        
        guard let image = image else {
          return
        }
        
        self.tileCache.setObject(image, forKey: keyWrapper)
        
        DispatchQueue.main.async {
          self.setNeedsDisplay(rect)
          self.spinner?.stopAnimating()
        }
        
      }
      
      safeSet(key, value: workItem)
      pdfView.queue.async(execute: workItem)
    }
    
    required init?(coder: NSCoder) {
      fatalError("init(coder:) has not been implemented")
    }
    
  }
  
  
  class ZoomablePageView: UIScrollView, UIScrollViewDelegate {
    private(set) var pageView: PageView!
    private var pdfView: NSCPdfView!
    init(frame: CGRect, pdfView: NSCPdfView, index: Int, document: NSCPdfDocument) {
      super.init(frame: frame)
      self.pdfView = pdfView
      self.delegate = self
      self.minimumZoomScale = 1
      self.maximumZoomScale = 6
      self.bouncesZoom = false
      self.showsVerticalScrollIndicator = false
      self.showsHorizontalScrollIndicator = false
      
      clipsToBounds = true
      
      pageView = PageView(frame: CGRect(origin: .zero, size: bounds.size) , pdfView: pdfView, index: index, document: document)
      self.addSubview(pageView)
      self.contentSize = pageView.bounds.size
    }
    
    
    func viewForZooming(in scrollView: UIScrollView) -> UIView? {
      return pageView
    }
    
    
    required init?(coder: NSCoder) { fatalError("init(coder:) has not been implemented") }
  }
  
  
  class PageViewCell: UICollectionViewCell {
    var pageView: ZoomablePageView?
    
    func configure(index: Int, pdfView: NSCPdfView, document: NSCPdfDocument) {
      pageView?.removeFromSuperview()
      
      let zoomable = ZoomablePageView(frame: contentView.bounds, pdfView: pdfView, index: index, document: document)
 
      contentView.addSubview(zoomable)
      
      contentView.clipsToBounds = true
  
      pageView = zoomable
    }
    
    override func prepareForReuse() {
      super.prepareForReuse()
      pageView?.pageView.cancelAllPendingWork()
      pageView?.pageView.clearCache()
      pageView?.removeFromSuperview()
      pageView = nil
    }
    
    override func layoutSubviews() {
      super.layoutSubviews()
      pageView?.frame = contentView.bounds
    }
  }
  
  
  class ImageViewCell: UICollectionViewCell {
    var imageView: NSCPdfImageZoomView?
    
    func configure(index: Int, pdfView: NSCPdfView, document: NSCPdfDocument) {
      imageView?.removeFromSuperview()
      
      let zoomable = NSCPdfImageZoomView(frame: contentView.bounds, pdfView: pdfView, index: index, document: document)
      zoomable.translatesAutoresizingMaskIntoConstraints = true
      zoomable.autoresizingMask = [.flexibleWidth, .flexibleHeight]
      
      contentView.addSubview(zoomable)
      
      
      imageView = zoomable
    }
    
    override func prepareForReuse() {
      super.prepareForReuse()
      imageView?.removeFromSuperview()
      imageView = nil
    }
    
    override func layoutSubviews() {
      super.layoutSubviews()
      imageView?.frame = contentView.bounds
    }
  }
  
  
  public override init(frame: CGRect) {
    super.init(frame: frame)
    layout.minimumLineSpacing = 10
    layout.estimatedItemSize = .zero
    list = UICollectionView(frame: bounds, collectionViewLayout: layout)
    list.contentInset = .zero
    list.dataSource = self
    list.delegate = self
    list.prefetchDataSource = self
    list.isPrefetchingEnabled = true
    list.register(PageViewCell.self, forCellWithReuseIdentifier: "pageView")
    list.register(ImageViewCell.self, forCellWithReuseIdentifier: "imageView")
    addSubview(list)
  
  }
  
  required init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  private var lastSize: CGSize = .zero
  
  public func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
    return bounds.size
  }
  
  public override func layoutSubviews() {
    super.layoutSubviews()
    
    list.frame = bounds
    
    if bounds.size != lastSize {
      lastSize = bounds.size
      layout.itemSize = bounds.size
      DispatchQueue.main.async { [self] in
        lowResCache.removeAllObjects()
        for index in list.indexPathsForVisibleItems {
          if let cell = list.cellForItem(at: index) as? PageViewCell {
            cell.pageView?.pageView.clearCache()
          }
        }
        list.reloadItems(at: list.indexPathsForVisibleItems)
      }
      
    }
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
      let document = pdf_native_load_from_path(NSCPdf.instance.PDFInstance, path, password)
      
      if (document == nil) {
        self.onError?(NSError(domain: "NativeScript", code: 1000, userInfo: [:]))
        return
      }
      
      self.onLoaded?(NSCPdfDocument(document: document!))
    }
  }
  
  public func loadFromUrl(_ url: String, _ password: String?) {
    let request  = URLRequest(url: URL(string: url)!)
    URLSession.shared.dataTask(with: request) { [self] data, response, error in
      guard let data = data else {
        self.onError?(error)
        return
      }
      NSCPdfQueue.shared.async {
        let document = NSCPdf.instance.loadFromBytes(bytes: NSData(data: data))
        DispatchQueue.main.async {
          self.document = document
          if let document = document {
            self.onLoaded?(document)
          }
        }
      }
    }.resume()
  }
  
  
  public func collectionView(_ collectionView: UICollectionView, prefetchItemsAt indexPaths: [IndexPath]) {
    for indexPath in indexPaths {
      let pageIndex = indexPath.item
      if lowResCache.object(forKey: NSNumber(value: pageIndex)) != nil {
        continue
      }
      
      let size = self.bounds.size
      
      let workItem = DispatchWorkItem { [weak self] in
        guard let self = self else { return }
        
        let image = self.document?.renderToCGContextImage(
          Int32(pageIndex),
          size.width,
          size.height,
          CGRect(origin: .zero, size: size),
          1,
          1,
          false
        )
        
        if let image = image {
          self.lowResCache.setObject(image, forKey: NSNumber(value: pageIndex))
        }
      }
      
      lowResPreviewWorkItems[pageIndex] = workItem
      
      queue.async(execute: workItem)
    }
  }
  
  public func collectionView(_ collectionView: UICollectionView, cancelPrefetchingForItemsAt indexPaths: [IndexPath]) {
    for indexPath in indexPaths {
      let pageIndex = indexPath.item
      if let item = lowResPreviewWorkItems[pageIndex] {
        item.cancel()
        lowResPreviewWorkItems.removeValue(forKey: pageIndex)
      }
    }
  }
  
  
  public func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
    return document?.count ?? 0
  }
  
  public func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
    let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "pageView", for: indexPath) as! PageViewCell
    cell.configure(index: indexPath.item, pdfView: self, document: document!)
    return cell
  }
  
  
  
}



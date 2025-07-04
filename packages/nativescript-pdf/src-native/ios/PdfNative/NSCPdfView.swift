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
  
  var useTiles = true
  
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
           UIScreen.main.scale,
           UIScreen.main.scale,
           false
         )


         if let image = image {
           self.lowResCache.setObject(image, forKey: NSNumber(value: pageIndex))
         }
       }

       lowResLock.lock()
       lowResPreviewWorkItems[pageIndex] = workItem
       lowResLock.unlock()

       queue.async(execute: workItem)
     }
  }
  
  public func collectionView(_ collectionView: UICollectionView, cancelPrefetchingForItemsAt indexPaths: [IndexPath]) {
    for indexPath in indexPaths {
      let pageIndex = indexPath.item
      lowResLock.lock()
      if let item = lowResPreviewWorkItems[pageIndex] {
        item.cancel()
        lowResPreviewWorkItems.removeValue(forKey: pageIndex)
      }
      lowResLock.unlock()
    }
  }
  
  
  public func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
    return document?.count ?? 0
  }
  
  public func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {

    if(useTiles){
      let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "pageView", for: indexPath) as! PageViewCell
      cell.configure(index: indexPath.item, pdfView: self, document: document!)
      return cell
    }else {
      let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "imageView", for: indexPath) as! ImageViewCell
      cell.configure(index: indexPath.item, pdfView: self, document: document!)
      return cell
    }
  }
  
  public func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout,
                             sizeForItemAt indexPath: IndexPath) -> CGSize {
    return collectionView.bounds.size
  }
  

  
  private var lowResCache = NSCache<NSNumber, CGImage>()
  private var lowResPreviewWorkItems: [Int: DispatchWorkItem] = [:]
  private let lowResLock = NSLock()

  public var document: NSCPdfDocument? {
    didSet {
      list.reloadData()
    }
  }
  private let layout = UICollectionViewFlowLayout()
  var list: UICollectionView!
  private let queue = DispatchQueue(label: "NSCPdfView-Queue" )
  
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
    
    var tilesLoadingCount = 0
    var allTilesLoadedForCurrentZoom = false
    var currentZoomScale: Int = 0
    var useTiles = false
    
    private let renderLock = NSLock()
    private let workItemLock = NSLock()
    private var lowResWorkItem: DispatchWorkItem?
    
    
    private func safeGet(_ key: TileKey) -> DispatchWorkItem? {
        workItemLock.lock(); defer { workItemLock.unlock() }
        return pendingWorkItems[key]
    }

    private func safeSet(_ key: TileKey, value: DispatchWorkItem) {
        workItemLock.lock(); defer { workItemLock.unlock() }
        pendingWorkItems[key] = value
    }
    
    //var progress: UIActivityIndicatorView!
    init(frame: CGRect, pdfView: NSCPdfView , index: Int, document: NSCPdfDocument) {
      self.pdfView = pdfView
      self.index = index
      self.document = document
      let padding = UIEdgeInsets(top: 10, left: 10, bottom: 10, right: 10)
      super.init(frame: frame.inset(by: padding))
      
     // tileCache.countLimit = 100

//      progress = UIActivityIndicatorView(frame: .init(origin: .init(x: bounds.size.width / 2 - 50, y: bounds.size.height / 2 - 50), size: .init(width: 100, height: 100)))
//      progress.startAnimating()
//      progress.isHidden = false

      //addSubview(progress)
      if(useTiles){
        let tiledLayer = self.layer as! CATiledLayer
        tiledLayer.levelsOfDetail = 4
        tiledLayer.levelsOfDetailBias = 3
        tiledLayer.tileSize = CGSize(width: 512, height: 512)
      }
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
      
      
      lowResWorkItem?.cancel()
      var workItem: DispatchWorkItem? = nil

        workItem = DispatchWorkItem { [weak self] in
            guard let self = self else { return }
            if workItem?.isCancelled == true { return }
            self.renderLock.lock()
            let image = self.document.renderToCGContextImage(
              Int32(self.index),
              size.width,
              size.height,
              CGRect(origin: .zero, size: size),
              UIScreen.main.scale,
              UIScreen.main.scale,
              false
            )
            self.renderLock.unlock()
            DispatchQueue.main.async {
              self.lowRes = image
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
      for (_, workItem) in pendingWorkItems {
            workItem.cancel()
        }
        tilesLoadingCount = 0
        allTilesLoadedForCurrentZoom = false
        pendingWorkItems.removeAll()
        lowResWorkItem?.cancel()
    }
    
    override class var layerClass: AnyClass { CATiledLayer.self }
    
    
    private var didFadeInHighRes = false
    
    func resetTilesLoadingCount(zoomScale: CGFloat) {
        guard let tiledLayer = self.layer as? CATiledLayer else { return }
        let tileSizePoints = tiledLayer.tileSize.width
        let scaledTileSize = tileSizePoints / zoomScale

        let tilesAcross = Int(ceil(bounds.width / scaledTileSize))
        let tilesDown = Int(ceil(bounds.height / scaledTileSize))
      
        tilesLoadingCount = tilesAcross * tilesDown
    }
    

    override func draw(_ rect: CGRect)  {

      guard let context = UIGraphicsGetCurrentContext() else { return }

      let scaleX = abs(context.ctm.a / UIScreen.main.scale)
      let scaleY = abs(context.ctm.d / UIScreen.main.scale)
    

      let zoomScaleInt = Int((scaleX * 100).rounded())

      if zoomScaleInt != currentZoomScale {
          currentZoomScale = zoomScaleInt
          allTilesLoadedForCurrentZoom = false
          didFadeInHighRes = false
          resetTilesLoadingCount(zoomScale: scaleX)
        
          workItemLock.lock(); defer { workItemLock.unlock() }
          pendingWorkItems.values.forEach { $0.cancel() }
          pendingWorkItems.removeAll()
          tileCache.removeAllObjects()
          setNeedsDisplay() 
          
      }

      #if DEBUG
      context.setStrokeColor(UIColor.red.cgColor)
      context.stroke(rect.insetBy(dx: 0.5, dy: 0.5))
      #endif
      
      let key = TileKey(rect, zoomScale: scaleX)
      let keyWrapper = TileKeyWrapper(key)
      
    

      if useTiles, allTilesLoadedForCurrentZoom, let image = tileCache.object(forKey: keyWrapper) {
        context.saveGState()
        context.translateBy(x: rect.origin.x, y: rect.origin.y + rect.height)
        context.scaleBy(x: 1, y: -1)
        context.draw(image, in: CGRect(origin: .zero, size: rect.size))
        context.restoreGState()
        return
      }
      
      
      if let existingWorkItem = safeGet(key), !existingWorkItem.isCancelled {
        if let preview = lowRes {
          context.saveGState()
          context.clip(to: rect)
          context.translateBy(x: 0, y: bounds.height)
          context.scaleBy(x: 1, y: -1)
          context.draw(preview, in: CGRect(origin: .zero, size: bounds.size))
          context.restoreGState()
        } else {
          context.setFillColor(UIColor.white.cgColor)
          context.fill(rect)
        }
        return
      }
      
      if let preview = lowRes {
        context.saveGState()
        context.clip(to: rect)
        context.translateBy(x: 0, y: bounds.height)
        context.scaleBy(x: 1, y: -1)
        context.draw(preview, in: CGRect(origin: .zero, size: bounds.size))
        context.restoreGState()
      } else {
        context.setFillColor(UIColor.white.cgColor)
        context.fill(rect)
      }
      
      if(!useTiles){return}

      let width = self.bounds.width
      let height = self.bounds.height
      
      
      let workItem = DispatchWorkItem { [weak self] in
        guard let self = self else { return }
        
        if safeGet(key)?.isCancelled == true {
          return
        }
        
        self.renderLock.lock()
        let image = self.document.renderToCGContextImage(Int32(self.index), width, height, rect, scaleX, scaleY)
        self.renderLock.unlock()
       
        guard let image = image else {
          return
        }
        
        self.tileCache.setObject(image, forKey: keyWrapper)
        
        DispatchQueue.main.async {
   
          self.tilesLoadingCount = max(self.tilesLoadingCount - 1, 0)
          if self.tilesLoadingCount == 0 {
              self.allTilesLoadedForCurrentZoom = true
            
            
            if !self.didFadeInHighRes {
                self.didFadeInHighRes = true
                let transition = CATransition()
                transition.type = .fade
                transition.duration = 0.25
                self.layer.add(transition, forKey: kCATransition)
            }

            
            CATransaction.begin()
            CATransaction.setDisableActions(true)
            self.setNeedsDisplay()
            CATransaction.commit()

          } else {
              self.setNeedsDisplay(rect)
          }
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
      self.maximumZoomScale = 4.0
      self.bouncesZoom = false
      self.showsVerticalScrollIndicator = false
      self.showsHorizontalScrollIndicator = false
      
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
      zoomable.translatesAutoresizingMaskIntoConstraints = true
      zoomable.autoresizingMask = [.flexibleWidth, .flexibleHeight]
      
      contentView.addSubview(zoomable)

      
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
    layout.minimumLineSpacing = 0
    list = UICollectionView(frame: .zero, collectionViewLayout: layout)
    list.translatesAutoresizingMaskIntoConstraints = false
    
    list.dataSource = self
    list.delegate = self
    list.prefetchDataSource = self
    list.isPrefetchingEnabled = true
    list.register(PageViewCell.self, forCellWithReuseIdentifier: "pageView")
    list.register(ImageViewCell.self, forCellWithReuseIdentifier: "imageView")
    addSubview(list)
    
    NSLayoutConstraint.activate([
      list.topAnchor.constraint(equalTo: topAnchor),
      list.bottomAnchor.constraint(equalTo: bottomAnchor),
      list.leadingAnchor.constraint(equalTo: leadingAnchor),
      list.trailingAnchor.constraint(equalTo: trailingAnchor)
    ])
  }
  
  required init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  
  
  public func loadFromBytes(_ bytes: NSData, _ password: String?) {
    queue.async {
      var document = NSCPdf.instance.loadFromBytes(bytes: bytes, password: password)
      if(document != nil){
        DispatchQueue.main.async {
          self.document = document
          self.list.reloadData()
          if let document = document {
            self.onLoaded?(document)
          }
        }
      }
    }
  }
  
  
  public func loadFromPath(_ path: String, _ password: String?) {
    DispatchQueue.global(qos: .background).async {
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
      let document = NSCPdf.instance.loadFromBytes(bytes: NSData(data: data))
      DispatchQueue.main.async {
        self.document = document
        self.list.reloadData()
        if let document = document {
          self.onLoaded?(document)
        }
      }
    }.resume()
  }
}



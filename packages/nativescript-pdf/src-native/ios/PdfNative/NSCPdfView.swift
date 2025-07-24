//
//  NSCPdfView.swift
//  PdfNative
//
//  Created by Osei Fortune on 25/06/2025.
//

import UIKit


@objc(NSCPdfView)
@objcMembers
public class NSCPdfView: UIView, UICollectionViewDelegate, UICollectionViewDataSource, UICollectionViewDataSourcePrefetching, UICollectionViewDelegateFlowLayout
{
  
  
  public func collectionView(_ collectionView: UICollectionView, prefetchItemsAt indexPaths: [IndexPath]) {
    for indexPath in indexPaths {
      let pageIndex = indexPath.item
      if(getPending(key: pageIndex) != nil){
        return
      }
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
      
      
      setPending(PendingItemKey.page(pageIndex), value: workItem)
      
      queue.async(execute: workItem)
    }
  }
  
  public func collectionView(_ collectionView: UICollectionView, cancelPrefetchingForItemsAt indexPaths: [IndexPath]) {
    for indexPath in indexPaths {
      let pageIndex = indexPath.item
      if let item = getPending(key: pageIndex) {
        item.cancel()
        removePending(key: pageIndex)
      }
    }
  }
  
  
  
  public func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
    return document?.count ?? 0
  }
  
  public func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
    let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "imageView", for: indexPath) as! ImageViewCell
    cell.configure(index: indexPath.item, pdfView: self, document: document!)
    return cell
  }
  
  public func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout,
                             sizeForItemAt indexPath: IndexPath) -> CGSize {
    return collectionView.bounds.size
  }
  
  public func collectionView(_ collectionView: UICollectionView, willDisplay cell: UICollectionViewCell, forItemAt indexPath: IndexPath) {
    let index = indexPath.item
    let img = lowResCache.object(forKey: index as NSNumber)
    if let img = img {
      DispatchQueue.main.async {
        if let cell = cell as? ImageViewCell {
          cell.imageView?.imageView.image = UIImage(cgImage: img)
        }
      }
    }else {
      if(getPending(key: index) != nil){
        return
      }
      let size = collectionView.bounds.size
      
      let workItem = DispatchWorkItem { [weak self] in
        guard let self = self else { return }
        
        
        let image = self.document?.renderToCGContextImage(
          Int32(index),
          size.width,
          size.height,
          CGRect(origin: .zero, size: size),
          UIScreen.main.scale,
          UIScreen.main.scale,
          false
        )
        
        
        if let image = image {
          self.lowResCache.setObject(image, forKey: NSNumber(value: index))
          DispatchQueue.main.async {
            if let cell = cell as? ImageViewCell {
              cell.imageView?.imageView.image = UIImage(cgImage: image)
            }
          }
        }
      }
      
      
      setPending(PendingItemKey.page(index), value: workItem)
      
      queue.async(execute: workItem)
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
  
  
  
  internal let collection: UICollectionView
  internal var lowResCache = NSCache<NSNumber, CGImage>()
  internal var pendingItems: [PendingItemKey: DispatchWorkItem] = [:]
  private let pendingLock = NSLock()
  public var document: NSCPdfDocument? {
    didSet {
      pendingItems.values.forEach { item in
        item.cancel()
      }
      pendingItems.removeAll()
      lowResCache.removeAllObjects()
      collection.reloadData()
    }
  }
  
  
  
  
  internal let queue = NSCPdfQueue()
  public var onLoaded: ((NSCPdfDocument) -> Void)?
  public var onError: ((Error?) -> Void)?
  public var onPageChange: ((Int) -> Void)?
  var currentPage: Int = 0
  
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
  
  private let layout = UICollectionViewFlowLayout()
  public override init(frame: CGRect) {
    //    let padding = UIEdgeInsets(top: 10, left: 10, bottom: 10, right: 10)
    collection = UICollectionView(frame: .zero, collectionViewLayout: layout)
    super.init(frame: frame)
    collection.translatesAutoresizingMaskIntoConstraints = false
    collection.register(ImageViewCell.self, forCellWithReuseIdentifier: "imageView")
    addSubview(collection)
    collection.delegate = self
    collection.dataSource = self
    collection.prefetchDataSource = self
    collection.isPrefetchingEnabled = true
    NSLayoutConstraint.activate([
      collection.topAnchor.constraint(equalTo: topAnchor),
      collection.bottomAnchor.constraint(equalTo: bottomAnchor),
      collection.leadingAnchor.constraint(equalTo: leadingAnchor),
      collection.trailingAnchor.constraint(equalTo: trailingAnchor)
    ])
    
    
    if #available(iOS 11.0, *) {
      //   contentInsetAdjustmentBehavior = .never
    }
    //    self.bounces = false
    //    self.alwaysBounceVertical = true
    //    self.alwaysBounceHorizontal = false
    
  }
  
  required init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
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



//
//  NSCPdfPageView.swift
//  PdfNative
//
//  Created by Osei Fortune on 3/09/2025.
//

import UIKit

// Page view that renders a single PDF page using LDOTiledView as a child view
@objcMembers
@objc(NSCPdfPageView)
public class NSCPdfPageView: UIView {
  
  // MARK: - Properties
  
  private var _pageIndex: Int
  private weak var _document: NSCPdfDocument?
  private var tiledView: LDOTiledView!
  
  // Cached page sizes to avoid recalculation
  private var _cachedPageSizes: [CGSize]?
  
  // Public accessors
  public var pageIndex: Int { return _pageIndex }
  public var document: NSCPdfDocument? { return _document }
  
  // Cache for rendered tiles
  private static let tileCache = NSCache<NSString, UIImage>()
  private static let renderQueue = DispatchQueue(label: "pdf.rendering", qos: .userInitiated)

  // Low-res full page cache (used to synthesize low-res tiles)
  private static let lowResPageCache = NSCache<NSString, UIImage>()
  private static let lowResLock = NSLock()
  private static var lowResInFlight = Set<String>()
  private static let lowResHiQueue = DispatchQueue(label: "pdf.lowres.hi", qos: .userInitiated)
  private static let lowResQueue   = DispatchQueue(label: "pdf.lowres", qos: .utility)

  // Helper functions for page info
  private func getUInt32(_ data: NSData, _ index: Int) -> UInt32 {
    return data.bytes.advanced(by: index).assumingMemoryBound(to: UInt32.self).pointee
  }
  
  private func getFloat(_ data: NSData, _ index: Int) -> Float {
    return data.bytes.advanced(by: index).assumingMemoryBound(to: Float.self).pointee
  }
  
  private func getPageSizes() -> [CGSize] {
    // Return cached value if available
    if let cached = _cachedPageSizes {
      return cached
    }
    
    guard let document = document else { return [] }
    
    let info = NSMutableData(length: document.count * 12)!
    document.pageInfo(info)
    
    var pageSizes: [CGSize] = []
    var offset = 0
    
    for _ in 0..<document.count {
      let _ = getUInt32(info, offset)  // Page index
      offset += 4
      let width = getFloat(info, offset)   // Page width
      offset += 4
      let height = getFloat(info, offset)  // Page height
      offset += 4
      
      pageSizes.append(CGSize(width: CGFloat(width), height: CGFloat(height)))
    }
    
    // Cache the result
    _cachedPageSizes = pageSizes
    return pageSizes
  }
  
  private func getCurrentPageSize() -> CGSize {
    let allSizes = getPageSizes()
    guard pageIndex < allSizes.count else { return CGSize.zero }
    return allSizes[pageIndex]
  }
  
  // MARK: - Initialization
  
  init(frame: CGRect, pageIndex: Int, document: NSCPdfDocument) {
    self._pageIndex = pageIndex
    self._document = document
    super.init(frame: frame)
    
    setupTiledView()
    
    // Preload page sizes for immediate availability
    _ = getPageSizes()
  }
  
  public override init(frame: CGRect) {
    self._pageIndex = 0
    self._document = nil
    super.init(frame: frame)
    setupTiledView()
  }
  
  required init?(coder: NSCoder) {
    self._pageIndex = 0
    self._document = nil
    super.init(coder: coder)
    setupTiledView()
  }
  
  private func setupTiledView() {
    // Configure the container view
    backgroundColor = UIColor.white

    // Create the LDOTiledView as a child view
    tiledView = LDOTiledView(frame: bounds)
    tiledView.dataSource = self
    tiledView.backgroundColor = UIColor.white
    tiledView.tileSize = CGSize(width: 256, height: 256)

    // IMPORTANT: tile in view-space; pdfium will map to PDF coords
    tiledView.imageSize = bounds.size

    // Set maximum zoom level (allow zooming up to 4x)
    tiledView.maximumZoomLevel = 4

    // Add the tiled view as a subview
    addSubview(tiledView)
  }
  
  // MARK: - Layout
  
  override public func layoutSubviews() {
    super.layoutSubviews()
    tiledView.frame = bounds
    // Keep tiling grid in view-space
    tiledView.imageSize = bounds.size
    // Removed: automatic ensureLowResPage() to avoid enqueueing every page at once
  }
  
  // Remove page-size mapping; stay in view-space
  private func updateTiledViewSize(withZoomScale parentZoomScale: CGFloat = 1.0) {
    tiledView.imageSize = bounds.size
  }
  
  // MARK: - Public Methods
  
  public func configure(pageIndex: Int, document: NSCPdfDocument) {
    let documentChanged = self._document !== document
    self._pageIndex = pageIndex
    self._document = document

    if documentChanged {
      _cachedPageSizes = nil
      Self.tileCache.removeAllObjects()
    }

    tiledView.imageSize = bounds.size
    // Removed: ensureLowResPage() here; prewarming is orchestrated by the scroll view

    tiledView.setNeedsDisplay()
  }
  
  public func clearCache() {
    // Clear cache entries for this page
    Self.tileCache.removeAllObjects()
    tiledView.setNeedsDisplay()
  }
  
  // Called when the parent scroll view zoom changes
  public func updateForZoomScale(_ zoomScale: CGFloat) {
    // Only refresh; scale handled by pdfium
    tiledView.setNeedsDisplay()
  }
  
  // MARK: - Low-res full page (single image used to synthesize fallback tiles)

  // Unique per-document key part
  private func docKeyPart() -> String {
    guard let doc = document else { return "nil" }
    return String(UInt(bitPattern: Unmanaged.passUnretained(doc).toOpaque()))
  }

  private func lowResKey(for size: CGSize) -> NSString {
    let w = Int(size.width.rounded())
    let h = Int(size.height.rounded())
    return NSString(string: "lowres_doc\(docKeyPart())_p\(pageIndex)_w\(w)_h\(h)")
  }

  // Public prewarm entry so the scroll view can enqueue low-res first
  public func prewarmLowRes(highPriority: Bool = false) {
    ensureLowResPage(for: bounds.size, highPriority: highPriority)
  }

  // Render and cache a low-res full page matching current viewport size (in points)
  private func ensureLowResPage(for viewport: CGSize, highPriority: Bool = false) {
    guard let document = document, viewport.width > 0, viewport.height > 0 else { return }
    let key = lowResKey(for: viewport)
    if Self.lowResPageCache.object(forKey: key) != nil { return }

    // prevent duplicate work
    let k = key as String
    Self.lowResLock.lock()
    if Self.lowResInFlight.contains(k) { Self.lowResLock.unlock(); return }
    Self.lowResInFlight.insert(k)
    Self.lowResLock.unlock()

    let deviceScale = UIScreen.main.scale
    let currentMaxPx = max(viewport.width, viewport.height) * deviceScale
    let targetMaxPx: CGFloat = 1024
    let rasterScale = max(0.25, min(deviceScale, targetMaxPx / max(currentMaxPx, 1)))

    let q = highPriority ? Self.lowResHiQueue : Self.lowResQueue
    q.async {
      var imgOut: UIImage?
      if let cg = document.renderTileWithViewportOffset(
        Int32(self.pageIndex),
        viewportWidth: viewport.width,
        viewportHeight: viewport.height,
        scale: rasterScale,
        x: 0, y: 0,
        width: viewport.width,
        height: viewport.height
      ) {
        imgOut = UIImage(cgImage: cg, scale: deviceScale, orientation: .up)
      }

      DispatchQueue.main.async {
        Self.lowResLock.lock()
        Self.lowResInFlight.remove(k)
        Self.lowResLock.unlock()

        if let img = imgOut {
          Self.lowResPageCache.setObject(img, forKey: key)
          if self.bounds.size == viewport {
            self.tiledView.setNeedsDisplay()
          }
        }
      }
    }
  }

  // Crop a tile from cached low-res page if available (top-left origin)
  private func lowResTile(from tileRectInView: CGRect) -> UIImage? {
    let viewport = bounds.size
    let key = lowResKey(for: viewport)
    guard let full = Self.lowResPageCache.object(forKey: key),
          let cg = full.cgImage else { return nil }

    // Map points -> pixels using CGImage dimensions (don’t rely on UIImage.scale here)
    let sx = CGFloat(cg.width) / max(viewport.width, 1)
    let sy = CGFloat(cg.height) / max(viewport.height, 1)

    var x = floor(tileRectInView.minX * sx)
    var y = floor(tileRectInView.minY * sy)
    var w = ceil(tileRectInView.width * sx)
    var h = ceil(tileRectInView.height * sy)

    // Clamp to image bounds
    x = max(0, min(CGFloat(cg.width), x))
    y = max(0, min(CGFloat(cg.height), y))
    w = max(0, min(CGFloat(cg.width) - x, w))
    h = max(0, min(CGFloat(cg.height) - y, h))
    guard w > 0, h > 0 else { return nil }

    let crop = CGRect(x: x, y: y, width: w, height: h)
    guard let cropped = cg.cropping(to: crop) else { return nil }
    return UIImage(cgImage: cropped, scale: UIScreen.main.scale, orientation: .up)
  }

  // MARK: - Touch Handling
  
  override public func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
    // Pass touch events to parent scroll view
    superview?.touchesBegan(touches, with: event)
  }
  
  override public func touchesMoved(_ touches: Set<UITouch>, with event: UIEvent?) {
    superview?.touchesMoved(touches, with: event)
  }
  
  override public func touchesEnded(_ touches: Set<UITouch>, with event: UIEvent?) {
    superview?.touchesEnded(touches, with: event)
  }
  
  override public func touchesCancelled(_ touches: Set<UITouch>, with event: UIEvent?) {
    superview?.touchesCancelled(touches, with: event)
  }
}

extension NSCPdfPageView: LDOTiledViewDataSource {

  public func tiledView(_ tiledView: LDOTiledView,
                        tileForRow row: Int,
                        column col: Int,
                        zoomLevel: Int,
                        zoomScale preciseZoomScale: CGFloat,
                        bounds viewBounds: CGRect,
                        rect tileRect: CGRect) -> UIImage? {
    guard let document = document else { return nil }

    // rect is the tile in view-space; bounds is the full view
    let viewport = CGRect(origin: .zero, size: self.bounds.size)
    let clamped = tileRect.intersection(viewport)
    guard !clamped.isNull, clamped.width > 0, clamped.height > 0 else { return nil }

    let deviceScale = UIScreen.main.scale
    // guard against 0 zoomScale coming from the tiler
    let tileZoom = max(preciseZoomScale, 1.0)
    let effectiveScale = tileZoom * deviceScale

    // UIKit (top-left) -> pdfium (bottom-left)
    let pdfY = viewport.height - clamped.minY - clamped.height

    // Snap to device pixels to avoid seams
    let s = max(effectiveScale, deviceScale)
    let x0 = floor(clamped.minX * s) / s
    let y0 = floor(pdfY * s) / s
    let x1 = ceil(clamped.maxX * s) / s
    let y1 = ceil((pdfY + clamped.height) * s) / s
    let snapped = CGRect(x: x0, y: y0, width: max(0, x1 - x0), height: max(0, y1 - y0))
    guard snapped.width > 0, snapped.height > 0 else { return nil }

    // High-res cache lookup
    let cacheKey = String(
      format: "p%d_r%d_c%d_z%d_s%.3f_V%.0fx%.0f_X%.3f_Y%.3f_W%.3f_H%.3f",
      pageIndex, row, col, zoomLevel, s,
      viewport.width, viewport.height,
      snapped.minX, snapped.minY, snapped.width, snapped.height
    ) as NSString
    if let cached = Self.tileCache.object(forKey: cacheKey) { return cached }

    // Try high-res render via pdfium
    var image: UIImage?
    Self.renderQueue.sync {
      if let cg = document.renderTileWithViewportOffset(
        Int32(pageIndex),
        viewportWidth: viewport.width,
        viewportHeight: viewport.height,
        scale: s,
        x: snapped.minX,
        y: snapped.minY,
        width: snapped.width,
        height: snapped.height
      ) {
        image = UIImage(cgImage: cg, scale: deviceScale, orientation: .up)
      }
    }

    if let img = image {
      let cost = Int(snapped.width * s * snapped.height * s * 4.0)
      Self.tileCache.setObject(img, forKey: cacheKey, cost: cost)
      return img
    }

    // Fallback: cropped low-res tile; also kick off generation if missing
    let fallback = lowResTile(from: clamped)
    if fallback == nil {
      ensureLowResPage(for: viewport.size, highPriority: false)
    }
    return fallback
  }
}

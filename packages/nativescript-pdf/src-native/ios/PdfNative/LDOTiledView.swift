//
//  LDOTiledView.swift
//  PdfNative
//
//
import UIKit


class LDOTiledLayer: CATiledLayer {
  override class func fadeDuration() -> CFTimeInterval {
    return 0.0
  }
}

protocol LDOTiledViewDataSource: AnyObject {
  // zoomLevel is a discrete level derived from the scale, while zoomScale is the exact normalized scale (1.0, 1.5, 2.0, ...)
  func tiledView(_ tiledView: LDOTiledView, tileForRow row: Int, column: Int, zoomLevel: Int, zoomScale: CGFloat, bounds: CGRect, rect: CGRect) -> UIImage?
}


public class LDOTiledView: UIView {
  
  // MARK: - Properties
  
  weak var dataSource: LDOTiledViewDataSource?
  
  var index: Int = -1
  
  var imageSize: CGSize = .zero {
    didSet {
      invalidateIntrinsicContentSize()
      setNeedsDisplay()
    }
  }
  
  var tileSize: CGSize = CGSize(width: 256, height: 256) {
    didSet {
      // CATiledLayer.tileSize is in pixels, so we scale from points
  let scale = UIScreen.main.scale
  contentScaleFactor = scale
  tiledLayer.contentsScale = scale
      tiledLayer.tileSize = CGSize(width: tileSize.width * scale,
                                   height: tileSize.height * scale)
    }
  }
  
  var maximumZoomLevel: Int {
    get { tiledLayer.levelsOfDetail }
    set {
      let levels = max(1, newValue)
      tiledLayer.levelsOfDetail = levels
      tiledLayer.levelsOfDetailBias = levels - 1
    }
  }
  
  var maximumZoomScale: CGFloat {
    get { Self.zoomScale(forZoomLevel: CGFloat(maximumZoomLevel)) }
    set {
      maximumZoomLevel = Int(Self.zoomLevel(forZoomScale: newValue).rounded())
    }
  }
  
  var debugAnnotateTiles: Bool = false {
    didSet {
      setNeedsDisplay()
    }
  }
  
  private var tiledLayer: LDOTiledLayer {
    return self.layer as! LDOTiledLayer
  }
  
  // MARK: - UIView Overrides
  
  public override class var layerClass: AnyClass {
    return LDOTiledLayer.self
  }
  
  public override var intrinsicContentSize: CGSize {
    return imageSize
  }
  
  // MARK: - Initializers
  
  override init(frame: CGRect) {
    super.init(frame: frame)
  let scale = UIScreen.main.scale
  contentScaleFactor = scale
  tiledLayer.contentsScale = scale
    self.tileSize = CGSize(width: 256, height: 256)
  }
  
  required init?(coder: NSCoder) {
    super.init(coder: coder)
    self.tileSize = CGSize(width: 256, height: 256)
  }
  
  // MARK: - Drawing
  
  public override func draw(_ rect: CGRect) {
    guard let context = UIGraphicsGetCurrentContext() else { return }
  // Determine the effective zoom for the CATiledLayer by comparing the context scale to the screen scale
  let contextScaleX = sqrt(context.ctm.a * context.ctm.a + context.ctm.c * context.ctm.c)
  let screenScale = UIScreen.main.scale
  // Normalized scale factor in points relative to 1x zoom
  let normalizedContentScale = (contextScaleX / screenScale)
    
  // rect is in the view's coordinate space in points, so compute tile indices directly in points
  let col = Int(floor(rect.origin.x / tileSize.width))
  let row = Int(floor(rect.origin.y / tileSize.height))
    
  let zoomLevel = Int(Self.zoomLevel(forZoomScale: normalizedContentScale).rounded())
    
    if let tileImage = dataSource?.tiledView(self, tileForRow: row, column: col, zoomLevel: zoomLevel, zoomScale: normalizedContentScale, bounds: bounds, rect: rect) {
      tileImage.draw(in: rect)
    }
    
    if debugAnnotateTiles {
      annotate(rect: rect, col: col, row: row, zoomLevel: zoomLevel, scale: Int(normalizedContentScale), context: context)
    }
  }
  
  // MARK: - Annotation
  
  private func annotate(rect: CGRect, col: Int, row: Int, zoomLevel: Int, scale: Int, context: CGContext) {
    let lineWidth = 2.0 / CGFloat(scale)
    let halfLineWidth = lineWidth / 2
    let fontSize = 12.0 / CGFloat(scale)
    
    let pointString = "\(zoomLevel)x(\(col), \(row)) @\(Int(UIScreen.main.scale))x"
    let textOrigin = CGPoint(x: rect.minX + lineWidth, y: rect.minY + lineWidth)
    
    pointString.draw(at: textOrigin, withAttributes: [
      .font: UIFont.boldSystemFont(ofSize: fontSize),
      .foregroundColor: UIColor.darkGray
    ])
    
    UIColor.red.set()
    context.setLineWidth(lineWidth)
    context.stroke(rect.insetBy(dx: halfLineWidth, dy: halfLineWidth))
  }
  
  // MARK: - Zoom Helpers
  
  static func zoomScale(forZoomLevel zoomLevel: CGFloat) -> CGFloat {
    return pow(2, zoomLevel - 1)
  }
  
  static func zoomLevel(forZoomScale zoomScale: CGFloat) -> CGFloat {
    return log2(zoomScale) + 1
  }
}

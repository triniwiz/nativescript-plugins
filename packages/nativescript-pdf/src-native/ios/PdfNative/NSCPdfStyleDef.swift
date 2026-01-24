//
//  NSCStyleDef.swift
//  PdfNative
//
//  Created by Osei Fortune on 02/07/2025.
//

@objcMembers
@objc(NSCPdfColor)
public class NSCPdfColor: NSObject {
  public var r: Int32
  public var g: Int32
  public var b: Int32
  public var a: Int32
  
  public init(_ r: Int32, _ g: Int32, _ b: Int32) {
    self.r = r
    self.g = g
    self.b = b
    self.a = 255
  }
  
  public init(_ r: Int32, _ g: Int32, _ b: Int32, a: Int32) {
    self.r = r
    self.g = g
    self.b = b
    self.a = a
  }
  
  
  override public func isEqual(_ object: Any?) -> Bool {
    guard let other = object as? NSCPdfColor else { return false }
    return self.r == other.r &&
           self.g == other.g &&
           self.b == other.b &&
           self.a == other.a
  }

  override public var hash: Int {
    var hasher = Hasher()
    hasher.combine(r)
    hasher.combine(g)
    hasher.combine(b)
    hasher.combine(a)
    return hasher.finalize()
  }
  
  public static func gray(_ value: Int32) -> NSCPdfColor {
    return NSCPdfColor(value, value, value)
  }
  
  public static func grey(_ value: Int32) -> NSCPdfColor {
    return NSCPdfColor(value, value, value)
  }
  
  var pdfium: CPdfNativeColor {
    return CPdfNativeColor(r: r, g: g, b: b, a: a)
  }
  
}

@objcMembers
@objc(NSCPdfStyleDef)
public class NSCPdfStyleDef:NSObject {
  public var font: NSCPdfFontFamily
  public var fontStyle: NSCPdfFontStyle
  public var overflow: NSCPdfOverflow
  public var fillColor: NSCPdfColor?
  public var textColor: NSCPdfColor?
  public var cellWidth: NSCPdfCellWidth
  public var minCellWidth: Float?
  var minCellHeightChanged = false
  public var minCellHeight: Float {
    didSet {
      minCellHeightChanged = true
    }
  }
  
  public var horizontalAlign: NSCPdfHorizontalAlign
  public var verticalAlign: NSCPdfVerticalAlign
  public var fontSize: Float
  public var cellPadding: NSCPdfPadding
  public var lineColor: NSCPdfColor?
  public var lineWidth: Float
  
  
  public func updateMinCellWidth(_ value: Float){
    if(value <= -1){
      minCellWidth = nil
    }else {
      minCellWidth = value
    }
  }
  
  
  public func getMinCellWidth() -> Float{
    return minCellWidth ?? -1
  }
  
  init(font: NSCPdfFontFamily, fontStyle: NSCPdfFontStyle, overflow: NSCPdfOverflow, fillColor: NSCPdfColor? = nil, textColor: NSCPdfColor? = nil, cellWidth: NSCPdfCellWidth, minCellWidth: Float? = nil, minCellHeight: Float, horizontalAlign: NSCPdfHorizontalAlign, verticalAlign: NSCPdfVerticalAlign, fontSize: Float, cellPadding: NSCPdfPadding, lineColor: NSCPdfColor?, lineWidth: Float) {
    self.font = font
    self.fontStyle = fontStyle
    self.overflow = overflow
    self.fillColor = fillColor
    self.textColor = textColor
    self.cellWidth = cellWidth
    self.minCellWidth = minCellWidth
    self.minCellHeight = minCellHeight
    if(minCellHeight == 0){
      minCellHeightChanged = false
    }
    self.horizontalAlign = horizontalAlign
    self.verticalAlign = verticalAlign
    self.fontSize = fontSize
    self.cellPadding = cellPadding
    self.lineColor = lineColor
    self.lineWidth = lineWidth
  }
  
  public func clone() -> NSCPdfStyleDef {
    return NSCPdfStyleDef(font: font, fontStyle: fontStyle, overflow: overflow, fillColor: fillColor, textColor: textColor, cellWidth: cellWidth, minCellWidth: minCellWidth, minCellHeight: minCellHeight, horizontalAlign: horizontalAlign, verticalAlign: verticalAlign, fontSize: fontSize, cellPadding: cellPadding, lineColor: lineColor, lineWidth: lineWidth)
  }
  
  public static func `default`()-> NSCPdfStyleDef {
    return NSCPdfStyleDef(font: .default(), fontStyle: .default(), overflow: .default(), cellWidth: .Auto, minCellHeight: 0,
                          horizontalAlign: NSCPdfHorizontalAlign.left, verticalAlign: NSCPdfVerticalAlign.top, fontSize: 10, cellPadding: NSCPdfPadding(uniform: 10), lineColor: NSCPdfColor.grey(10), lineWidth: 0)
  }
  
  func pdfium(_ unit:  NSCPdfUnit) -> CStyleDef {
    
    let fillColor = if let fillColor {
      CPdfNativeColorOptional(kind: CPdfNativeColorOptionalType_Some, data: CPdfNativeColorOptionalData(value: fillColor.pdfium))
    } else {
      CPdfNativeColorOptional(kind: CPdfNativeColorOptionalType_None, data: CPdfNativeColorOptionalData())
    }
    
    
    let textColor = if let textColor {
      CPdfNativeColorOptional(kind: CPdfNativeColorOptionalType_Some, data: CPdfNativeColorOptionalData(value: textColor.pdfium))
    } else {
      CPdfNativeColorOptional(kind: CPdfNativeColorOptionalType_None, data: CPdfNativeColorOptionalData())
    }
    
    let minCellWidth = if let minCellWidth {
      CPdfNativePointsOptional(kind: CPdfNativePointsOptionalType_Some, data: CPdfNativePointsOptionalData(value: CPdfNativePoints(value: minCellWidth, unit: unit.pdfium, changed: true)))
    } else {
      CPdfNativePointsOptional(kind: CPdfNativePointsOptionalType_None, data: CPdfNativePointsOptionalData())
    }
    
    let lineColor = if let lineColor = self.lineColor {
      CPdfNativeColorOptional(kind: CPdfNativeColorOptionalType_Some, data: CPdfNativeColorOptionalData(value: lineColor.pdfium))
    }else {
      CPdfNativeColorOptional(kind: CPdfNativeColorOptionalType_None, data: CPdfNativeColorOptionalData())
    }
    
    
    return CStyleDef(font: font.pdfium, font_style: fontStyle.pdfium, overflow: overflow.pdfium, fill_color: fillColor, text_color: textColor, cell_width: cellWidth.pdfium(unit), min_cell_width: minCellWidth, min_cell_height: CPdfNativePoints(value: minCellHeight, unit: unit.pdfium, changed: minCellHeightChanged), horizontal_align: horizontalAlign.pdfium, vertical_align: verticalAlign.pdfium, font_size: fontSize, cell_padding: cellPadding.pdfium(unit), line_color: lineColor, line_width: lineWidth)
  }
  
  func pdfiumRaw(_ unit:  NSCPdfUnit) -> UnsafePointer<CStyleDef> {
    
    let fillColor = if let fillColor {
      CPdfNativeColorOptional(kind: CPdfNativeColorOptionalType_Some, data: CPdfNativeColorOptionalData(value: fillColor.pdfium))
    } else {
      CPdfNativeColorOptional(kind: CPdfNativeColorOptionalType_None, data: CPdfNativeColorOptionalData())
    }
    
    
    let textColor = if let textColor {
      CPdfNativeColorOptional(kind: CPdfNativeColorOptionalType_Some, data: CPdfNativeColorOptionalData(value: textColor.pdfium))
    } else {
      CPdfNativeColorOptional(kind: CPdfNativeColorOptionalType_None, data: CPdfNativeColorOptionalData())
    }
    
    let minCellWidth = if let minCellWidth {
      CPdfNativePointsOptional(kind: CPdfNativePointsOptionalType_Some, data: CPdfNativePointsOptionalData(value: CPdfNativePoints(value: minCellWidth, unit: unit.pdfium, changed: true)))
    } else {
      CPdfNativePointsOptional(kind: CPdfNativePointsOptionalType_None, data: CPdfNativePointsOptionalData())
    }
    
    let lineColor = if let lineColor = self.lineColor {
      CPdfNativeColorOptional(kind: CPdfNativeColorOptionalType_Some, data: CPdfNativeColorOptionalData(value: lineColor.pdfium))
    }else {
      CPdfNativeColorOptional(kind: CPdfNativeColorOptionalType_None, data: CPdfNativeColorOptionalData())
    }
  
    let value = CStyleDef(font: font.pdfium, font_style: fontStyle.pdfium, overflow: overflow.pdfium, fill_color: fillColor, text_color: textColor, cell_width: cellWidth.pdfium(unit), min_cell_width: minCellWidth, min_cell_height: CPdfNativePoints(value: minCellHeight, unit: unit.pdfium, changed: minCellHeightChanged), horizontal_align: horizontalAlign.pdfium, vertical_align: verticalAlign.pdfium, font_size: fontSize, cell_padding: cellPadding.pdfium(unit), line_color: lineColor, line_width: lineWidth)
    
    let ret = UnsafeMutablePointer<CStyleDef>.allocate(capacity: 1)
    ret.initialize(to: value)
    return UnsafePointer(ret)
  }
}

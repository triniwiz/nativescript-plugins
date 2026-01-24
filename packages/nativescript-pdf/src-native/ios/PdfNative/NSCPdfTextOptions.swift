//
//  NSCPdfTextOptions.swift
//  PdfNative
//
//  Created by Osei Fortune on 02/07/2025.
//

@objcMembers
@objc(NSCPdfTextOptions)
public class NSCPdfTextOptions: NSObject {
  public var align = NSCPdfTextAlignment.left
  public var baseline = NSCPdfTextBaseline.alphabetic
  public var angle = NSCPdfRotationOrMatrix.zero

  public var rotationDirection = NSCPdfRotationDirection.cw
  public var charSpace: Int = 0
  public var horizontalScale: Float = 1
  public var lineHeightFactor: Float = 1.15
  public var maxWidth = 0
  
  public func pdfium() -> PdfNativeTextOptions {
    return PdfNativeTextOptions(align: align.pdfium, baseline: baseline.pdfium, angle: angle.pdfium, rotation_direction: rotationDirection.pdfium, char_space: UInt32(charSpace), horizontal_scale: horizontalScale, line_height_factor: lineHeightFactor, max_width: UInt32(maxWidth))
  }
}

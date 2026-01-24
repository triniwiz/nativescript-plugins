//
//  NSCPdfDocumentConfig.swift
//  PdfNative
//
//  Created by Osei Fortune on 28/06/2025.
//

import UIKit

@objcMembers
@objc(NSCPdfDocumentConfig)
public class NSCPdfDocumentConfig: NSObject {
  public var orientation: NSCPdfOrientation
  public var size: NSCPdfPagerSize
  public var units: NSCPdfUnit
  public var deviceScale: Float
  
  public override init() {
    orientation = .Portrait
    size = .standard(.A4)
    units = .mm
    deviceScale = Float(UIScreen.main.scale)
  }
  
  public init(_ orientation: NSCPdfOrientation, _ size: NSCPdfPagerSize, _ units: NSCPdfUnit, _ deviceScale: Float) {
    self.orientation = orientation
    self.size = size
    self.units = units
    self.deviceScale = deviceScale
  }
  
  
  internal var pdfium: PdfNativeDocumentConfig {
    return PdfNativeDocumentConfig(orientation: orientation.pdfium, size: size.pdfium, units: units.pdfium, device_scale: deviceScale)
  }
}

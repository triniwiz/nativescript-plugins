//
//  Cache.swift
//  PdfNative
//
//  Created by Osei Fortune on 27/06/2025.
//

import CoreGraphics
import UIKit

internal struct TileKey: Hashable {
  let index: Int
  let scale: Int
  let x: Int
  let y: Int
  
  init(index:Int , rect: CGRect, zoomScale: CGFloat, tileSize: CGFloat = 256) {
    
    self.index = index
    
    self.scale = Int((zoomScale * 1000).rounded())
    
    
    let scaledTile = tileSize / zoomScale
 
    
    let clampedX = max(0, rect.origin.x)
    let clampedY = max(0, rect.origin.y)

    self.x = Int(floor(clampedX / scaledTile))
    self.y = Int(floor(clampedY / scaledTile))
  
    
  }
}


internal class TileKeyWrapper: NSObject {
    let key: TileKey

    init(_ key: TileKey) {
        self.key = key
    }

    override var hash: Int {
        return key.hashValue
    }

    override func isEqual(_ object: Any?) -> Bool {
        guard let other = object as? TileKeyWrapper else { return false }
        return self.key == other.key
    }
}

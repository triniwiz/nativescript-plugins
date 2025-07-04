//
//  Cache.swift
//  PdfNative
//
//  Created by Osei Fortune on 27/06/2025.
//

import CoreGraphics

internal struct TileKey: Hashable {
  let scale: Int
  let x: Int
  let y: Int
  
  init(_ rect: CGRect, zoomScale: CGFloat, tileSize: CGFloat = 512) {
    self.scale = Int((zoomScale * 100).rounded())
    
    
    let scaledTile = tileSize / zoomScale
    self.x = Int((rect.origin.x / scaledTile).rounded(.down))
    self.y = Int((rect.origin.y / scaledTile).rounded(.down))
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

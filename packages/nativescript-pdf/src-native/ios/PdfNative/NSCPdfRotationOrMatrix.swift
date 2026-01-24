//
//  NSCPdfRotationOrMatrix.swift
//  PdfNative
//
//  Created by Osei Fortune on 02/07/2025.
//

@objcMembers
@objc(NSCPdfRotationOrMatrix)
public class NSCPdfRotationOrMatrix: NSObject {
  var angle: Float = 0
  var matrix: [Float] = [0,0,0,0,0,0]
  
  var isMatrix = false
  
  var pdfium: PdfNativeRotationOrMatrix!
  
  public static let zero = angle(0)
  
  public static func angle(_ deg: Float) -> NSCPdfRotationOrMatrix {
    let ret = NSCPdfRotationOrMatrix()
    ret.angle = deg
    ret.pdfium = PdfNativeRotationOrMatrix(kind: PdfNativeRotationOrMatrixKind_Rotation, data: PdfNativeRotationOrMatrixData(rotation: deg))
    return ret
  }
  
  public static func matrix(_ a: Float, _ b: Float, _ c: Float, _ d: Float, _ e: Float, _ f: Float) -> NSCPdfRotationOrMatrix {
    let ret = NSCPdfRotationOrMatrix()
    ret.matrix[0] = a
    ret.matrix[1] = b
    ret.matrix[2] = c
    ret.matrix[3] = d
    ret.matrix[4] = e
    ret.matrix[5] = f
    ret.isMatrix = true
    ret.pdfium = PdfNativeRotationOrMatrix(kind: PdfNativeRotationOrMatrixKind_Matrix, data: PdfNativeRotationOrMatrixData(matrix: (a,b,c,d,e,f)))
    return ret
  }
  
  
}

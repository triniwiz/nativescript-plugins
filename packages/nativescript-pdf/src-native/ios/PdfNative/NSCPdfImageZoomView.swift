//
//  NSCPdfImageZoomView.swift
//  PdfNative
//
//  Created by Osei Fortune on 03/07/2025.
//

import UIKit


class NSCPdfImageZoomView: UIScrollView, UIScrollViewDelegate {
  var imageView: UIImageView!
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
    
    imageView = UIImageView(frame: CGRect(origin: .zero, size: bounds.size))
    self.addSubview(imageView)
    self.contentSize = imageView.bounds.size
  }
  

  func viewForZooming(in scrollView: UIScrollView) -> UIView? {
    return imageView
  }
  
  
  required init?(coder: NSCoder) { fatalError("init(coder:) has not been implemented") }
}

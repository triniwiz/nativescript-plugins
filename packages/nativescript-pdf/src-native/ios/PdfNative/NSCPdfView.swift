//
//  NSCPdfView.swift
//  PdfNative
//
//  Created by Osei Fortune on 25/06/2025.
//

import UIKit

@objc(NSCPdfView)
@objcMembers
public class NSCPdfView: UIView
{
  
  // Internal scroll view that handles all PDF functionality
  private var scrollView: NSCPdfScrollView!
  
  // Event callbacks - maintained for compatibility
  public var onLoaded: ((NSCPdfDocument) -> Void)?
  public var onError: ((Error?) -> Void)?
  public var onPageChange: ((Int) -> Void)?
  
  // Document property that forwards to scroll view
  public var document: NSCPdfDocument? {
    get { return scrollView.document }
    set { scrollView.document = newValue }
  }
  
  // Current page property that forwards to scroll view  
  public var currentPage: Int {
    get { return scrollView.currentPage }
    set { scrollView.currentPage = newValue }
  }
  
  // MARK: - Initialization
  
  public override init(frame: CGRect) {
    super.init(frame: frame)
    setupScrollView()
  }
  
  required init?(coder: NSCoder) {
    super.init(coder: coder)
    setupScrollView()
  }
  
  private func setupScrollView() {
    // Create the scroll view
    scrollView = NSCPdfScrollView(frame: bounds)
    scrollView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
    addSubview(scrollView)
    
    // Forward events from scroll view to our callbacks
    scrollView.onLoaded = { [weak self] document in
      self?.onLoaded?(document)
    }
    
    scrollView.onError = { [weak self] error in
      self?.onError?(error)
    }
    
    scrollView.onPageChange = { [weak self] page in
      self?.onPageChange?(page)
    }
  }
  
  // MARK: - Layout
  
  public override func layoutSubviews() {
    super.layoutSubviews()
    scrollView.frame = bounds
  }
  
  // MARK: - Document Loading Methods
  
  public func loadFromBytes(_ bytes: NSData, _ password: String?) {
    scrollView.loadFromBytes(bytes, password)
  }
  
  public func loadFromPath(_ path: String, _ password: String?) {
    scrollView.loadFromPath(path, password)
  }
  
  public func loadFromUrl(_ url: String, _ password: String?) {
    scrollView.loadFromUrl(url, password)
  }
  
  // MARK: - Additional Methods for Compatibility
  
  // Method to scroll to a specific page
  public func scrollToPage(_ page: Int, animated: Bool = true) {
    scrollView.scrollToPage(page, animated: animated)
  }
  
  // Method to get current zoom level
  public var zoomScale: CGFloat {
    get { return scrollView.zoomScale }
    set { scrollView.zoomScale = newValue }
  }
  
  // Method to get/set minimum zoom scale
  public var minimumZoomScale: CGFloat {
    get { return scrollView.minimumZoomScale }
    set { scrollView.minimumZoomScale = newValue }
  }
  
  // Method to get/set maximum zoom scale
  public var maximumZoomScale: CGFloat {
    get { return scrollView.maximumZoomScale }
    set { scrollView.maximumZoomScale = newValue }
  }
}
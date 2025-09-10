//
//  NSCPdfScrollView.swift
//  PdfNative
//
//  Created by Osei Fortune on 3/09/2025.
//

import UIKit

@objc(NSCPdfScrollView)
@objcMembers
public class NSCPdfScrollView: UIScrollView, UIScrollViewDelegate {
    
    // MARK: - Properties
    
    private var documentView: UIView!
    private var pageViews: [NSCPdfPageView] = []
    private var pageBounds: [CGRect] = []
    private let pageSpacing: CGFloat = 16
    
    // Caching
    private let lowResCache = NSCache<NSNumber, UIImage>()
    private let tileCache = NSCache<NSString, UIImage>()
    private var pendingItems: [PendingItemKey: DispatchWorkItem] = [:]
    private let pendingLock = NSLock()
    private let queue = NSCPdfQueue()
    
    // Scrollbar (track + thumb)
    private var scrollbarView: UIView!
    private var scrollbarThumb: UIView!
    private var scrollbarTimer: Timer?
    private var isScrollbarDragging = false
    private var scrollbarDragStartY: CGFloat = 0
    private var scrollbarStartOffset: CGFloat = 0

    // Toast page indicator (replaces the old pageIndicatorLabel)
    private var toastView: UIView!
    private var toastLabel: UILabel!
    private var toastTimer: Timer?

    // Document and callbacks
    public var document: NSCPdfDocument? {
        didSet {
            // Cancel all pending operations
            pendingItems.values.forEach { $0.cancel() }
            pendingItems.removeAll()
            lowResCache.removeAllObjects()
            tileCache.removeAllObjects()
            
            setupDocument()
        }
    }
    
    public var onLoaded: ((NSCPdfDocument) -> Void)?
    public var onError: ((Error?) -> Void)?
    public var onPageChange: ((Int) -> Void)?
    
    private var _currentPage: Int = 1
    public var currentPage: Int {
        get { _currentPage }
        set {
            if newValue != _currentPage && newValue >= 1 && newValue <= (document?.count ?? 0) {
                _currentPage = newValue
                onPageChange?(newValue)
                showPageToast()
            }
        }
    }
    
    // MARK: - Initialization
    
    public override init(frame: CGRect) {
        super.init(frame: frame)
        setupScrollView()
       // setupScrollbar()
        setupToast()            // NEW
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setupScrollView()
       // setupScrollbar()
        setupToast()            // NEW
    }
    
    private func setupScrollView() {
        delegate = self
      if #available(iOS 13.0, *) {
        backgroundColor = UIColor.systemBackground
      } else {
        // Fallback on earlier versions
      }
        showsVerticalScrollIndicator = false
        showsHorizontalScrollIndicator = false
        alwaysBounceVertical = false
        alwaysBounceHorizontal = false
        
        // Create document container
        documentView = UIView()
        documentView.backgroundColor = UIColor.clear
        addSubview(documentView)
        
        // Setup pinch to zoom
        minimumZoomScale = 1.0
        maximumZoomScale = 5.0
        zoomScale = 1.0
        bouncesZoom = true
    }
    
    private func setupScrollbar() {
        // Main scrollbar track
        scrollbarView = UIView()
        scrollbarView.backgroundColor = UIColor.black.withAlphaComponent(0.2)
        scrollbarView.layer.cornerRadius = 6
        scrollbarView.alpha = 0
        addSubview(scrollbarView)

        // Scrollbar thumb
        scrollbarThumb = UIView()
        if #available(iOS 13.0, *) {
            scrollbarThumb.backgroundColor = UIColor.label.withAlphaComponent(0.6)
        }
        scrollbarThumb.layer.cornerRadius = 3
        scrollbarView.addSubview(scrollbarThumb)

        // Add pan gesture for scrollbar dragging
        let panGesture = UIPanGestureRecognizer(target: self, action: #selector(handleScrollbarPan(_:)))
        scrollbarView.addGestureRecognizer(panGesture)
    }

    // Simple toast with blur-like background
    private func setupToast() {
        let container = UIView()
        container.backgroundColor = UIColor.black.withAlphaComponent(0.7)
        container.layer.cornerRadius = 12
        container.clipsToBounds = true
        container.alpha = 0
        container.isUserInteractionEnabled = false
        container.layer.zPosition = 1000   // keep above content
        addSubview(container)

        let label = UILabel()
        label.textColor = .white
        label.font = UIFont.systemFont(ofSize: 14, weight: .semibold)
        label.textAlignment = .center
        container.addSubview(label)

        toastView = container
        toastLabel = label
    }

    // Positions toast near top-left of the VISIBLE viewport (follows scroll)
    private func updateToastLayout() {
        guard toastView != nil, toastLabel != nil else { return }
        let hPadding: CGFloat = 12
        let vPadding: CGFloat = 8
        let maxWidth = bounds.width * 0.6

        toastLabel.preferredMaxLayoutWidth = maxWidth - hPadding * 2
        toastLabel.sizeToFit()

        let w = min(maxWidth, toastLabel.bounds.width + hPadding * 2)
        let h = toastLabel.bounds.height + vPadding * 2

        // Anchor to visible rect: include contentOffset so it doesn't scroll away
        let x = contentOffset.x + safeAreaInsets.left + 12
        let y = contentOffset.y + safeAreaInsets.top + 12
        toastView.frame = CGRect(x: x, y: y, width: w, height: h)

        // center label inside
        toastLabel.frame = CGRect(x: hPadding, y: vPadding, width: w - hPadding * 2, height: h - vPadding * 2)
    }

    // Show/update toast text and auto-hide
    private func showPageToast() {
        let total = document?.count ?? 0
        toastLabel.text = "\(currentPage) of \(total)"
        updateToastLayout()

        toastTimer?.invalidate()
        UIView.animate(withDuration: 0.15) {
            self.toastView.alpha = 1.0
        }
        toastTimer = Timer.scheduledTimer(withTimeInterval: 1.5, repeats: false) { [weak self] _ in
            guard let self = self else { return }
            UIView.animate(withDuration: 0.3) {
                self.toastView.alpha = 0
            }
        }
    }

    // MARK: - Document Loading
    
    public func loadFromBytes(_ bytes: NSData, _ password: String?) {
        queue.async {
            let document = NSCPdf.instance.loadFromBytes(bytes: bytes, password: password)
            DispatchQueue.main.async {
                if let document = document {
                    self.document = document
                    self.onLoaded?(document)
                } else {
                    self.onError?(NSError(domain: "NSCPdfScrollView", code: 1001, userInfo: [NSLocalizedDescriptionKey: "Failed to load PDF from bytes"]))
                }
            }
        }
    }
    
    public func loadFromPath(_ path: String, _ password: String?) {
        queue.async {
            let cleanPath = path.replacingOccurrences(of: "file://", with: "")
            let document = NSCPdf.instance.loadFromPath(path: cleanPath, password: password)
            DispatchQueue.main.async {
                if let document = document {
                    self.document = document
                    self.onLoaded?(document)
                } else {
                    self.onError?(NSError(domain: "NSCPdfScrollView", code: 1002, userInfo: [NSLocalizedDescriptionKey: "Failed to load PDF from path: \(cleanPath)"]))
                }
            }
        }
    }
    
    public func loadFromUrl(_ url: String, _ password: String?) {
        guard let url = URL(string: url) else {
            onError?(NSError(domain: "NSCPdfScrollView", code: 1003, userInfo: [NSLocalizedDescriptionKey: "Invalid URL: \(url)"]))
            return
        }
        
        let request = URLRequest(url: url)
        let session = URLSession(configuration: .default)
        
        session.dataTask(with: request) { [weak self] data, response, error in
            guard let self = self else { return }
            
            if let error = error {
                DispatchQueue.main.async {
                    self.onError?(error)
                }
                return
            }
            
            guard let data = data else {
                DispatchQueue.main.async {
                    self.onError?(NSError(domain: "NSCPdfScrollView", code: 1004, userInfo: [NSLocalizedDescriptionKey: "No data received from URL"]))
                }
                return
            }
            
            self.queue.async {
                let document = NSCPdf.instance.loadFromBytes(bytes: data as NSData, password: password)
                DispatchQueue.main.async {
                    if let document = document {
                        self.document = document
                        self.onLoaded?(document)
                    } else {
                        self.onError?(NSError(domain: "NSCPdfScrollView", code: 1005, userInfo: [NSLocalizedDescriptionKey: "Failed to parse PDF data"]))
                    }
                }
            }
        }.resume()
    }
  
  private func getUInt32(_ data: NSData, _ index: Int) -> UInt32 {
    return data.bytes.advanced(by: index).assumingMemoryBound(to: UInt32.self).pointee
  }

  
  private func getFloat(_ data: NSData, _ index: Int) -> Float {
    return data.bytes.advanced(by: index).assumingMemoryBound(to: Float.self).pointee
  }
    
    // MARK: - Document Setup
    
    private func setupDocument() {
        guard let document = document else { return }
        
        // Clear existing views
        pageViews.forEach { $0.removeFromSuperview() }
        pageViews.removeAll()
        pageBounds.removeAll()
        
        let pageCount = document.count
        var totalHeight: CGFloat = 0
        let containerWidth = bounds.width > 0 ? bounds.width : UIScreen.main.bounds.width
      
  
      let info = NSMutableData(length: document.count * 12)!
      document.pageInfo(info)
      var offset = 0
        
        // Calculate page bounds and create page views
        for i in 0..<pageCount {
            let _ = getUInt32(info, offset)
            offset += 4
            let w = getFloat(info, offset)
            offset += 4
            let h = getFloat(info, offset)
            offset += 4
            let aspectRatio = w / h
            let pageWidth = containerWidth - (pageSpacing * 2)
            let pageHeight = pageWidth / CGFloat(aspectRatio)
            
            let pageRect = CGRect(
                x: pageSpacing,
                y: totalHeight + (i > 0 ? pageSpacing : 0),
                width: pageWidth,
                height: pageHeight
            )
            
            pageBounds.append(pageRect)
            
            // Create page view with tiled layer
            let pageView = NSCPdfPageView(frame: pageRect, pageIndex: i, document: document)
            pageView.backgroundColor = UIColor.white
            pageView.layer.shadowColor = UIColor.black.cgColor
            pageView.layer.shadowOffset = CGSize(width: 0, height: 2)
            pageView.layer.shadowOpacity = 0.2
            pageView.layer.shadowRadius = 4
            
            documentView.addSubview(pageView)
            pageViews.append(pageView)
            
            totalHeight = pageRect.maxY
        }
        
        // Update document view size
        let documentSize = CGSize(width: containerWidth, height: totalHeight + pageSpacing)
        documentView.frame = CGRect(origin: .zero, size: documentSize)
        contentSize = documentSize

        // Reset zoom and position
        zoomScale = 1.0
        contentOffset = .zero
        currentPage = 1

        // Center horizontally if content is narrower than viewport
        updateContentInsetsForCentering()

        // Show scrollbar temporarily
        // showScrollbarAndIndicator()
        showsVerticalScrollIndicator = true
    }
    
    // MARK: - Navigation
    
    public func scrollToPage(_ page: Int, animated: Bool = true) {
        guard let document = document, 
              page >= 1, 
              page <= document.count,
              page <= pageBounds.count else { return }
        
        let pageIndex = page - 1 // Convert to 0-based index
        let pageRect = pageBounds[pageIndex]
        
        // Calculate scroll position to center the page
        let targetY = pageRect.origin.y * zoomScale
        let centeredY = targetY - (bounds.height - pageRect.height * zoomScale) / 2
        let clampedY = max(0, min(centeredY, contentSize.height - bounds.height))
        
        let targetOffset = CGPoint(x: contentOffset.x, y: clampedY)
        
        setContentOffset(targetOffset, animated: animated)
        
        // Update current page immediately if not animated
        if !animated {
            currentPage = page
        }
    }
    
    // MARK: - Layout
    
    public override func layoutSubviews() {
        super.layoutSubviews()
        // Keep centering correct on rotation/size changes
        updateContentInsetsForCentering()
        // updateScrollbarLayout()
        updateToastLayout()

        if bounds.width != documentView.bounds.width && document != nil {
            setupDocument()
        }
    }
    
    private func updateScrollbarLayout() {
        let scrollbarWidth: CGFloat = 12

        // Track dimensions should match the VISIBLE viewport height
        let topInset = safeAreaInsets.top
        let bottomInset = safeAreaInsets.bottom
        let verticalMargin: CGFloat = 10
        let trackHeight = max(0, bounds.height - topInset - bottomInset - verticalMargin * 2)

        // Place track in the right white margin (pageSpacing) or centering inset if wider
        let rightGutter = max(contentInset.right, pageSpacing)
        let trackX = contentOffset.x + bounds.width - rightGutter / 2 - scrollbarWidth / 2
        let trackY = contentOffset.y + topInset + verticalMargin

        scrollbarView.frame = CGRect(
            x: trackX,
            y: trackY,
            width: scrollbarWidth,
            height: trackHeight
        )

        updateScrollbarThumb()
        // toast layout is updated separately
    }
    
    private func updateScrollbarThumb() {
        guard contentSize.height > bounds.height else {
            scrollbarThumb.frame = .zero
            return
        }
        
        let scrollableHeight = contentSize.height - bounds.height
        let scrollProgress = scrollableHeight > 0 ? contentOffset.y / scrollableHeight : 0
        let thumbHeight = max(20, scrollbarView.bounds.height * (bounds.height / contentSize.height))
        let maxThumbY = scrollbarView.bounds.height - thumbHeight
        let thumbY = scrollProgress * maxThumbY
        
        scrollbarThumb.frame = CGRect(
            x: 3,
            y: thumbY,
            width: 6,
            height: thumbHeight
        )
    }
    
    // MARK: - Page Tracking

    private func updateCurrentPage() {
        guard !pageBounds.isEmpty else { return }

        let viewCenter = contentOffset.y + bounds.height / 2

        for (index, pageRect) in pageBounds.enumerated() {
            let scaledRect = CGRect(
                x: pageRect.origin.x * zoomScale,
                y: pageRect.origin.y * zoomScale,
                width: pageRect.size.width * zoomScale,
                height: pageRect.size.height * zoomScale
            )
            if viewCenter >= scaledRect.minY && viewCenter <= scaledRect.maxY {
                currentPage = index + 1
                break
            }
        }
    }

    // MARK: - Scrollbar Visibility

    private func showScrollbarAndIndicator() {
      // todo
      /*  // show only scrollbar now
        scrollbarTimer?.invalidate()
        UIView.animate(withDuration: 0.2) {
            self.scrollbarView.alpha = 1.0
        }
        if !isScrollbarDragging {
            scheduleScrollbarHide()
        }
      */
    }

    private func scheduleScrollbarHide() {
        scrollbarTimer?.invalidate()
        scrollbarTimer = Timer.scheduledTimer(withTimeInterval: 2.0, repeats: false) { _ in
            if !self.isScrollbarDragging {
                UIView.animate(withDuration: 0.5) {
                    self.scrollbarView.alpha = 0
                }
            }
        }
    }
    
    // MARK: - Scrollbar Interaction
    
    @objc private func handleScrollbarPan(_ gesture: UIPanGestureRecognizer) {
        switch gesture.state {
        case .began:
            isScrollbarDragging = true
            scrollbarDragStartY = gesture.location(in: scrollbarView).y
            scrollbarStartOffset = contentOffset.y
            scrollbarTimer?.invalidate()
            UIView.animate(withDuration: 0.1) {
                if #available(iOS 13.0, *) {
                    self.scrollbarThumb.backgroundColor = UIColor.label.withAlphaComponent(0.8)
                }
                self.scrollbarView.alpha = 1.0
            }
            showPageToast()

        case .changed:
            let translation = gesture.translation(in: scrollbarView)
            let scrollableHeight = max(0, contentSize.height - bounds.height)
            let thumbTrackHeight = max(1, scrollbarView.bounds.height - scrollbarThumb.bounds.height)

            if thumbTrackHeight > 0 && scrollableHeight > 0 {
                let scrollRatio = translation.y / thumbTrackHeight
                let newOffset = scrollbarStartOffset + (scrollRatio * scrollableHeight)
                let clampedOffset = max(0, min(scrollableHeight, newOffset))

                contentOffset = CGPoint(x: contentOffset.x, y: clampedOffset)
                updateCurrentPage()
                showPageToast()
            }

        case .ended, .cancelled:
            isScrollbarDragging = false
            UIView.animate(withDuration: 0.2) {
                if #available(iOS 13.0, *) {
                    self.scrollbarThumb.backgroundColor = UIColor.label.withAlphaComponent(0.6)
                }
            }
            scheduleScrollbarHide()

        default:
            break
        }
    }
    
    // MARK: - UIScrollViewDelegate
    
    public func scrollViewDidScroll(_ scrollView: UIScrollView) {
        // Keep overlays pinned to the viewport while scrolling
        //updateScrollbarLayout()
        updateToastLayout()

        updateCurrentPage()
        showPageToast()                 // update toast as you scroll
        if !isScrollbarDragging {
            showScrollbarAndIndicator()
        }
    }
    
    public func viewForZooming(in scrollView: UIScrollView) -> UIView? {
        return documentView
    }
    
    public func scrollViewDidZoom(_ scrollView: UIScrollView) {
        pageViews.forEach { $0.updateForZoomScale(scrollView.zoomScale) }
        // Recenter horizontally during zooming
        updateContentInsetsForCentering()
        // updateScrollbarThumb()
        showPageToast()                 // update toast on zoom
        showScrollbarAndIndicator()
    }
    
    public func scrollViewDidEndZooming(_ scrollView: UIScrollView, with view: UIView?, atScale scale: CGFloat) {
        // Trigger high-res rendering at final zoom level
        pageViews.forEach { pageView in
            pageView.updateForZoomScale(scale)
        }
    }
    
    // MARK: - Cache Management
    
    internal func getPending(key: Int) -> DispatchWorkItem? {
        pendingLock.lock(); defer { pendingLock.unlock() }
        return pendingItems[PendingItemKey.page(key)]
    }
    
    internal func setPending(key: Int, value: DispatchWorkItem) {
        pendingLock.lock(); defer { pendingLock.unlock() }
        pendingItems[PendingItemKey.page(key)] = value
    }
    
    internal func removePending(key: Int) {
        pendingLock.lock(); defer { pendingLock.unlock() }
        pendingItems.removeValue(forKey: PendingItemKey.page(key))
    }
    
    // Keep content centered horizontally when it’s narrower than the viewport
    private func updateContentInsetsForCentering() {
        guard documentView != nil else { return }
        let contentW = documentView.bounds.width * zoomScale
        let insetX = max(0, (bounds.width - contentW) / 2)

        let newInsets = UIEdgeInsets(top: contentInset.top, left: insetX, bottom: contentInset.bottom, right: insetX)
        if contentInset != newInsets {
            contentInset = newInsets
            scrollIndicatorInsets = newInsets
        }

        // Snap offset so the content appears centered when zoomed out
        if contentW < bounds.width {
            let targetX = -insetX
            if abs(contentOffset.x - targetX) > 0.5 {
                contentOffset = CGPoint(x: targetX, y: contentOffset.y)
            }
        }
    }
}

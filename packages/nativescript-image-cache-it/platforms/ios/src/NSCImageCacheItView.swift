//
//  NSCImageCacheItView.swift
//  NativeScript ImageCacheIt
//
//  Created by Osei Fortune on 01/04/2024.
//
import UIKit

#if canImport(SDWebImage)
import SDWebImage

struct CacheItem {
  var headers: [String: String]
  var url: URL?
}

@objc(NSCImageCacheItTransition)
public enum NSCImageCacheItTransition: Int, RawRepresentable{
  public typealias RawValue = Int
  case None
  case Fade
  
  public var rawValue: Int {
    switch(self){
    case .None:
      return 0
    case .Fade:
      return 1
    }
  }
  
  public init?(rawValue: Int) {
    switch(rawValue){
    case 0:
      self = .None
    case 1:
      self = .Fade
    default:
      return nil
    }
  }
}


@objc(NSCImageCacheItPriority)
public enum NSCImageCacheItPriority: Int, RawRepresentable {
  public typealias RawValue = Int
  case Low
  case Normal
  case High
  
  public init?(rawValue: Int) {
    switch(rawValue){
    case 0:
      self = .Low
    case 1:
      self = .Normal
    case 2:
      self = .High
    default:
      return nil
    }
  }
  
  public var rawValue: Int {
    switch(self){
    case .Low:
      return 0
    case .Normal:
      return 1
    case .High:
      return 2
    }
  }
  
  var priority: SDWebImageOptions {
    switch(self){
    case .Low:
      return .lowPriority
    case .Normal:
      return SDWebImageOptions.init(rawValue: 0)
    case .High:
      return .highPriority
    }
  }
}

@objc(NSCImageCacheItStretch)
public enum NSCImageCacheItStretch: Int, RawRepresentable {
  public typealias RawValue = Int
  case None
  case AspectFit
  case AspectFill
  case Fill
  
  public var rawValue: Int {
    switch(self){
    case .None:
      return 0
    case .AspectFit:
      return 1
    case .AspectFill:
      return 2
    case .Fill:
      return 3
    }
  }
  
  public init?(rawValue: Int) {
    switch(rawValue){
    case 0:
      self = .None
    case 1:
      self = .AspectFit
    case 2:
      self = .AspectFill
    case 3:
      self = .Fill
    default:
      return nil
    }
  }
}


@objc(NSCImageCacheItLoadMode)
public enum NSCImageCacheItLoadMode: Int, RawRepresentable {
  public typealias RawValue = Int
  case Sync
  case Async
  
  public var rawValue: Int {
    switch(self){
    case .Sync:
      return 0
    case .Async:
      return 1
    }
  }
  
  public init?(rawValue: Int) {
    switch(rawValue){
    case 0:
      self = .Sync
    case 1:
      self = .Async
    default:
      return nil
    }
  }
}


extension UIColor {
    func toHexValue() -> String {
        var red: CGFloat = 0
        var green: CGFloat = 0
        var blue: CGFloat = 0
        var alpha: CGFloat = 0

        guard self.getRed(&red, green: &green, blue: &blue, alpha: &alpha) else {
            assertionFailure("Failed to get RGBA components from UIColor")
            return "#000000"
        }

        // Clamp components to [0.0, 1.0]
        red = max(0, min(1, red))
        green = max(0, min(1, green))
        blue = max(0, min(1, blue))
        alpha = max(0, min(1, alpha))

        if alpha == 1 {
            // RGB
            return String(
                format: "#%02lX%02lX%02lX",
                Int(round(red * 255)),
                Int(round(green * 255)),
                Int(round(blue * 255))
            )
        } else {
            // RGBA
            return String(
                format: "#%02lX%02lX%02lX%02lX",
                Int(round(red * 255)),
                Int(round(green * 255)),
                Int(round(blue * 255)),
                Int(round(alpha * 255))
            )
        }
    }
}


@objcMembers
@objc(NSCImageCacheItView)
public class NSCImageCacheItView: SDAnimatedImageView {
  private var requestId = UUID()
  public var fallback: UIImage? = nil
  public var placeHolder: UIImage? = nil
  public var errorHolder: UIImage? = nil
  private var ctx = ImageCacheItUtils.createContext()
  private var loadItem: DispatchWorkItem? = nil
  public override init(image: UIImage?) {
    super.init(image: image)
    contentMode = .scaleAspectFit
    clipsToBounds = true
  }
  
  public var runLayout: (() -> Void)? = nil
  
  var font: UIFont? = nil
  var color: UIColor? = nil
  var overlayColor: UIColor? = nil
  var filter: String? = nil
  
  func isFontIconURI(_ uri: String) -> Bool{
    let firstSegment = uri.trimmingCharacters(in: .whitespacesAndNewlines).components(separatedBy: .init(charactersIn: "//"))
    return firstSegment.first?.starts(with: "font:") ?? false
  }
  
  func isDataURI(_ uri: String)-> Bool {
    let firstSegment = uri.trimmingCharacters(in: .whitespacesAndNewlines).components(separatedBy: .init(charactersIn: ",")).first
    
    return firstSegment?.starts(with: "data:") ?? false && firstSegment?.contains("base64") ?? false
  }
  
  
  private func fontToImage(_ src: String) -> UIImage?{
    var attributes: [NSAttributedString.Key: Any] = [
      NSAttributedString.Key.font: font ?? UIFont.systemFont(ofSize: UIFont.systemFontSize, weight: .regular),
        ]

        if (color != nil) {
          attributes[NSAttributedString.Key.foregroundColor] = color!
        }

        let attributedString = NSAttributedString.init(string: src, attributes: attributes)

        UIGraphicsBeginImageContextWithOptions(attributedString.size(), false, 0.0)
        attributedString.draw(at: CGPointMake(0, 0))

        let iconImage = UIGraphicsGetImageFromCurrentImageContext()
        UIGraphicsEndImageContext()
    return iconImage
  }
  
  private func base64ToImage(_ src: String) -> UIImage? {
    guard let data = NSData(base64Encoded: src, options: .ignoreUnknownCharacters) else {
      return nil
    }
    return UIImage(data: data as Data)
  }
  
  private func processImage(_ image: UIImage?) -> UIImage?{
    var options: [String: String]? = nil
    if(filter != nil){
      options = ["filter": filter!]
    }
    if let overlayColor = overlayColor {
      if(options != nil){
        options!["overlayColor"] = overlayColor.toHexValue()
      }else {
        options = ["overlayColor": overlayColor.toHexValue()]
      }
    }

    if(options != nil){
      return ImageCacheItUtils.applyProcessingSync(ctx, image, options!)
    }else {
     return image
    }
    
  }
  
  public var loadMode: NSCImageCacheItLoadMode = .Async
  
  public func setImageSource(_ image: UIImage?){
    if(loadMode == .Sync){
      var image = processImage(image)
      if(!self.setImageTint(color: self.imageTint, image: image)){
        self.image = image
      }
      runLayout?()
    }else {
      loadItem = DispatchWorkItem(block: {
        var image = self.processImage(image)
        DispatchQueue.main.async {
          if(!self.setImageTint(color: self.imageTint, image: image)){
            self.image = image
          }
          
          self.runLayout?()
        }
      })
      
      DispatchQueue.global(qos: .utility).async(execute: loadItem!)
    }
  }
  
  public var src: String? = nil {
    didSet {
      loadItem?.cancel()
      guard let src = src else {
        if(self.fallback != nil){
          if(!self.setImageTint(color: self.imageTint, image: self.fallback)){
            self.image = self.fallback
          }
        }else {
          self.image = nil
        }
        return
      }
      if(src.starts(with: "http://") || src.starts(with: "https://")){
        loadImage(string: src)
        return
      }
      
      if(src.starts(with: "res://")){
        let newSrc = src.replacingOccurrences(of: "res://", with: "")
        if(loadMode == .Sync){
          let gif = Bundle.main.url(forResource: newSrc, withExtension: "gif")
          let image = if(gif != nil){
            if let gifData = try? Data(contentsOf: gif!) {
             SDAnimatedImage(data: gifData)
           }else {
             self.processImage(UIImage(named: newSrc))
           }
          }else {
            self.processImage(UIImage(named: newSrc))
          }
          
          if(!self.setImageTint(color: self.imageTint, image: image)){
            self.image = image
          }
          runLayout?()
        }else {
          loadItem = DispatchWorkItem(block: {
            let gif = Bundle.main.url(forResource: newSrc, withExtension: "gif")
        
            let image = if(gif != nil){
              if let gifData = try? Data(contentsOf: gif!) {
               SDAnimatedImage(data: gifData)
             }else {
               self.processImage(UIImage(named: newSrc))
             }
            }else {
              self.processImage(UIImage(named: newSrc))
            }
            DispatchQueue.main.async {
              if(!self.setImageTint(color: self.imageTint, image: image)){
                self.image = image
              }
              
              self.runLayout?()
            }
          })
          
          DispatchQueue.global(qos: .utility).async(execute: loadItem!)
        }
      }else if(isFontIconURI(src)){
        if(loadMode == .Sync){
          let image = processImage(fontToImage(src))
          if(!self.setImageTint(color: self.imageTint, image: image)){
            self.image = image
          }
          runLayout?()
        }else {
          loadItem = DispatchWorkItem(block: {
            let image = self.processImage(self.fontToImage(src))
            DispatchQueue.main.async {
              if(!self.setImageTint(color: self.imageTint, image: image)){
                self.image = image
              }
              self.runLayout?()
            }
          })
          
          DispatchQueue.global(qos: .utility).async(execute: loadItem!)
        }
      }else if(isDataURI(src)){
        if(loadMode == .Sync){
          let image = processImage(base64ToImage(src))
          if(!self.setImageTint(color: self.imageTint, image: image)){
            self.image = image
          }
          runLayout?()
        }else {
          loadItem = DispatchWorkItem(block: {
            let image = self.processImage(self.base64ToImage(src))
            DispatchQueue.main.async {
              if(!self.setImageTint(color: self.imageTint, image: image)){
                self.image = image
              }
              self.runLayout?()
            }
          })
          
          DispatchQueue.global(qos: .utility).async(execute: loadItem!)
        }
      }else {
        let url = if (src.starts(with: "file:")){
          URL(string: src)
        }else {
          URL(fileURLWithPath: src)
        }
        
        guard let url = url else {
          self.image = self.fallback
          return
        }
        if(loadMode == .Sync){
          do {
            let data = try Data(contentsOf: url)
            let image = if(NSCImageCacheItView.getMagicBytes(data) == "image/gif"){
              SDAnimatedImage(data: data)
            }else {
              processImage(UIImage(data: data))
            }
            if(!self.setImageTint(color: self.imageTint, image: image)){
              self.image = image
            }
            runLayout?()
          }catch {
            self.image = errorHolder
          }
        }else {
          loadItem = DispatchWorkItem(block: {
            do {
              let data = try Data(contentsOf: url)
              let image = if(NSCImageCacheItView.getMagicBytes(data) == "image/gif"){
                SDAnimatedImage(data: data)
              }else {
                self.processImage(UIImage(data: data))
              }
              DispatchQueue.main.async {
                if(!self.setImageTint(color: self.imageTint, image: image)){
                  self.image = image
                }
                self.runLayout?()
              }
            }catch {
              DispatchQueue.main.async {
                self.image = self.errorHolder
              }
            }
          })
          
          DispatchQueue.global(qos: .utility).async(execute: loadItem!)
        }
      }
    }
  }
  
  
  @objc static func didReceiveMemoryWarning(notification: NSNotification){
    guard let imageCache = SDWebImageManager.shared.imageCache as? SDImageCache else {
      return
    }
    imageCache.clearMemory()
  }
  
  private static var autoMMEnabled = false
  
  public static func enableAutoMM() {
    if(!autoMMEnabled){
      NotificationCenter.default.addObserver(NSCImageCacheItView.self, selector: #selector(NSCImageCacheItView.didReceiveMemoryWarning(notification:)), name: UIApplication.didReceiveMemoryWarningNotification, object: nil)
      autoMMEnabled = true
    }
  }
  
  public static func disableAutoMM(){
    if(autoMMEnabled){
      NotificationCenter.default.removeObserver(NSCImageCacheItView.self, name: UIApplication.didReceiveMemoryWarningNotification, object: nil)
    }
  }

  
  public override init(frame: CGRect) {
    super.init(frame: frame)
    contentMode = .scaleAspectFit
  }
  
  required init?(coder: NSCoder) {
    super.init(coder: coder)
  }
  
  public static func hasItem(_ src: String, _ callback: @escaping (Bool)-> Void){
    guard let url = URL(string: src) else {
      callback(false)
      return
    }
    
    guard let imageCache = SDWebImageManager.shared.imageCache as? SDImageCache else {
      callback(false)
      return
    }
    
    let key = SDWebImageManager.shared.cacheKey(for: url)
    
    imageCache.containsImage(forKey: key, cacheType: .all) { type in
      switch(type){
      case .disk, .memory, .all:
        callback(true)
        break
      default:
        callback(false)
        break
      }
    }
    
  }
  
  public static func deleteItem(_ src: String, _ callback: @escaping (Error?)-> Void){
    guard let url = URL(string: src) else {
      callback(nil)
      return
    }
    guard let imageCache = SDWebImageManager.shared.imageCache as? SDImageCache else {
      callback(nil)
      return
    }
    let key =  SDWebImageManager.shared.cacheKey(for: url)
    imageCache.removeImage(forKey: key, fromDisk: true) {
      callback(nil)
    }
  }
  
  public static func getItem(_ src: String, _ headers: [String: String]?, _ callback: @escaping (Error?,String?) -> Void){
    guard let url = URL(string: src) else {
      return
    }
    
    
    SDWebImageManager.shared.loadImage(with: url, options: .scaleDownLargeImages, progress: nil) { image, data, error, type, finished, completedUrl in
      if(image == nil && error != nil && data == nil){
        callback(error, nil)
      }else if(finished && completedUrl != nil){
        guard let imageCache = SDWebImageManager.shared.imageCache as? SDImageCache else {
          callback(nil, nil)
          return
        }
        if (type == .disk) {
          let key = SDWebImageManager.shared.cacheKey(for: completedUrl)
          let source = imageCache.cachePath(forKey: key)
          callback(nil, source)
        } else {
          SDImageCache.shared.store(image, forKey: completedUrl?.absoluteString) {
            let key = SDWebImageManager.shared.cacheKey(for: completedUrl)
            let source = imageCache.cachePath(forKey: key)
            callback(nil, source)
          }
        }
      }
    }
    
  }
  
  public static func clear(_ done: @escaping () -> Void){
    guard let cache = SDWebImageManager.shared.imageCache as? SDImageCache else {
      done()
      return
    }
    cache.clearMemory()
    cache.clearDisk {
      done()
    }
  }
  
  public var loadStart: ((String) -> Void)?
  
  private static func getMagicBytes(_ data: Data) -> String {
    var signature = "";
    for i in 0...16 {
      signature += String(format: "%02hhx", data[i])
    }
    
    if(signature.contains("89504E47")){
      return "image/png"
    }else if(signature.contains("47494638")){
      return "image/gif"
    }else if(signature.contains("25504446")){
      return "application/pdf"
    }else if(signature.contains("FFD8FFDB") || signature.contains("FFD8FFE0") || signature.contains("FFD8FFE1")){
      return"image/jpeg"
    }else if(signature.contains("504B0304")){
      return "application/zip"
    }else {
      return "application/octet-stream"
    }
  }
  
  public var stretch: NSCImageCacheItStretch = NSCImageCacheItStretch.None {
    didSet {
      switch(stretch){
      case .None:
        contentMode = .left
      case .AspectFit:
        contentMode = .scaleAspectFit
      case .AspectFill:
        contentMode = .scaleAspectFill
      case .Fill:
        contentMode = .scaleToFill
      }
    }
  }
  
  private static var hasModifier = false
  private static func setModifier(){
    if(hasModifier){return}
    SDWebImageDownloader.shared.requestModifier = SDWebImageDownloaderRequestModifier(block: { request in
      guard let url =  request.url as? NSURL else { return request }
      guard let uuid = url.uuid else { return request }
      guard let item = cacheHeaders[uuid] else {return request}
      if(item.url?.absoluteString == url.absoluteString){
        let newRequest = (request as NSURLRequest).mutableCopy() as! NSMutableURLRequest
        
        item.headers.forEach { key, value in
          newRequest.addValue(value, forHTTPHeaderField: key)
        }
        return newRequest as URLRequest
      }
      return request
    })
    hasModifier = true
  }
  
  public var headers: [String: String] {
    get {
      NSCImageCacheItView.cacheHeaders[requestId.uuidString]?.headers ?? [:]
    }
    set {
      NSCImageCacheItView.setModifier()
      var cached = NSCImageCacheItView.cacheHeaders[requestId.uuidString]
      if(cached != nil){
        cached?.headers = newValue
      }else {
        NSCImageCacheItView.cacheHeaders[requestId.uuidString] = CacheItem(headers: headers, url: nil)
      }
    }
  }
  
  private static var cacheHeaders: [String: CacheItem] = [:]
  
  
  public static var maxDiskCacheSize: UInt{
    get {
      return SDImageCache.shared.config.maxDiskSize
    }
    set {
      SDImageCache.shared.config.maxDiskSize = newValue
    }
  }
  
  public static var maxMemoryCacheSize: UInt{
    get {
      return SDImageCache.shared.config.maxMemoryCost
    }
    set {
      SDImageCache.shared.config.maxMemoryCost = newValue
    }
  }
  
  
  public static var maxDiskCacheAge: Double{
    get {
      return SDImageCache.shared.config.maxDiskAge
    }
    set {
      SDImageCache.shared.config.maxDiskAge = newValue
    }
  }
  public var transition = NSCImageCacheItTransition.None
  
  public var priority: NSCImageCacheItPriority = .Normal
  
  public internal(set) var isLoading = false
  
  private var loadStarted = false
  
  public internal(set) var progress: Double = 0.0
  
  public var onProgress: ((Int, Int, Double, String?)->Void)?
  
  public var onLoadEnd: ((String?, UIImage?) -> Void)?
  
  public var onError: ((String?, String?) -> Void)?
  
  public var imageTint: UIColor? = nil {
    didSet {
      setImageTint(color: imageTint, image: image)
    }
  }
  
  private var templateImageWasCreated = false
  
  @discardableResult private func setImageTint(color: UIColor?, image: UIImage?) ->  Bool {
    if let image = image {
      if let color = color {
        if(!templateImageWasCreated){
          self.image = image.withRenderingMode(.alwaysTemplate)
          templateImageWasCreated = true
          tintColor = color
          return true
        }
      }else {
        if(templateImageWasCreated){
          templateImageWasCreated = false
          self.image = image.withRenderingMode(.automatic)
          tintColor = color
          return true
        }
      }
    }
    
    tintColor = color
    return false
  }
  
  
  public func loadImage(string: String?){
    guard let string = string else {
      if(placeHolder != nil){
        if(!self.setImageTint(color: self.imageTint, image: placeHolder)){
          image = placeHolder
        }
      }
      return
    }
    guard let url = URL(string: string) as NSURL? else {
      if(placeHolder != nil){
        if(!self.setImageTint(color: self.imageTint, image: placeHolder)){
          image = placeHolder
        }
      }
      return
    }
    loadStarted = true
    
    loadStart?(string)
    
    progress = 0.0
    
    sd_cancelCurrentImageLoad()
    
    url.uuid = requestId.uuidString
    
    
    let options = SDWebImageOptions.avoidAutoSetImage.rawValue | SDWebImageOptions.retryFailed.rawValue | SDWebImageOptions.scaleDownLargeImages.rawValue | priority.priority.rawValue
    
    let transformers = ImageCacheItUtils.buildPipelineTransformer(ctx, filter)
    
    let context: [SDWebImageContextOption: AnyObject]? = if let transformers = transformers {
      [SDWebImageContextOption.imageTransformer: transformers]
    }else {
      nil
    }
    
    sd_setImage(with: url as URL, placeholderImage: placeHolder, options: SDWebImageOptions(rawValue: options) , context: context) { current, total, url in
      var progress = Double()
      if (total != 0) {
        progress = Double(current / total)
      } else {
        progress = 1
      }
      
      progress = max(min(progress, 1), 0) * 100
      
      DispatchQueue.main.async {
        if(!self.loadStarted){
          self.loadStart?(string)
          self.loadStarted = true
        }
        
        self.progress = progress
        
        self.onProgress?(current, total, progress, url?.absoluteString)
      }
    } completed: { image, error, type, responseURL in
      DispatchQueue.global(qos: .userInitiated).async {
      
        DispatchQueue.main.async {
        if(error != nil){
          self.onError?(error?.localizedDescription,responseURL?.absoluteString ?? url.absoluteString)
          self.onLoadEnd?(responseURL?.absoluteString ?? url.absoluteString, image)
          if(self.errorHolder != nil){
              self.image = self.errorHolder
          }
        }else if(type == .memory && self.transition != .Fade) {
          switch self.transition {
          case .Fade:
            self.alpha = 0
            UIView.animate(withDuration: 1) {
              self.alpha = 1
              self.onLoadEnd?(responseURL?.absoluteString ?? url.absoluteString, image)
              self.loadStarted = false
            }
            break
          default:
            // noop
            break
          }
        }
          if(!self.setImageTint(color: self.imageTint, image: image)){
            self.image = image
          }
          
        }
      }
    }
    
    
  }
  
}

#endif

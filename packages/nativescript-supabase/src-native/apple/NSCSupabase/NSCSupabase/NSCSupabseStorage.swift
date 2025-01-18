//
//  NSCSupabseStorage.swift
//  NSCSupabase
//
//  Created by Osei Fortune on 11/01/2025.
//

internal import Supabase

@objcMembers
@objc(NSCSupabseStorageBucketOptions)
public class NSCSupabseStorageBucketOptions: NSObject {
  public var `public`: Bool = false
  public var fileSizeLimit: String? = nil
  public var allowedMimeTypes: [String]? = nil
  
  public override init() {}
  
  public init(_ `public`: Bool = false, _ fileSizeLimit: String?, _ allowedMimeTypes: [String]?) {
    self.`public` = `public`
    self.fileSizeLimit = fileSizeLimit
    self.allowedMimeTypes = allowedMimeTypes
  }
  
  var options: BucketOptions {
    get {
      BucketOptions(public: `public`, fileSizeLimit: fileSizeLimit, allowedMimeTypes: allowedMimeTypes)
    }
  }
}

@objcMembers
@objc(NSCSupabseStorageBucket)
public class NSCSupabseStorageBucket: NSObject {
  let bucket: Bucket
  init(bucket: Bucket) {
    self.bucket = bucket
  }
  
  public var id: String {
    get {
      return bucket.id
    }
  }
  public var name: String{
    get {
      return bucket.name
    }
  }
  public var owner: String{
    get {
      return bucket.owner
    }
  }
  public var isPublic: Bool{
    get {
      return bucket.isPublic
    }
  }
  public var createdAt: Date {
    get {
      return bucket.createdAt
    }
  }
  public var updatedAt: Date {
    get {
      return bucket.updatedAt
    }
  }
  public var allowedMimeTypes: [String]? {
    get {
      return bucket.allowedMimeTypes
    }
  }
  public var fileSizeLimit: Int64? {
    get {
      return bucket.fileSizeLimit
    }
  }
}

@objcMembers
@objc(NSCSupabseStorageFileUploadResponse)
public class NSCSupabseStorageFileUploadResponse: NSObject {
  let response: FileUploadResponse
  init(response: FileUploadResponse) {
    self.response = response
  }
  
  public var id: String {
    response.id
  }
  public var path: String {
    response.path
  }
  public var  fullPath: String {
    response.fullPath
  }
  
}

@objcMembers
@objc(NSCSupabseStorageSignedURLUploadResponse)
public class NSCSupabseStorageSignedURLUploadResponse: NSObject {
  let response: SignedURLUploadResponse
  init(response: SignedURLUploadResponse) {
    self.response = response
  }
  
  public var path: String {
    response.path
  }
  public var  fullPath: String {
    response.fullPath
  }
}


@objcMembers
@objc(NSCSupabseStorageFileOptions)
public class NSCSupabseStorageFileOptions: NSObject {
  var options: FileOptions
  init(options: FileOptions = FileOptions()) {
    self.options = options
  }
  
  
  public var cacheControl: String {
    set {
      options.cacheControl = newValue
    }
    get {
      options.cacheControl
    }
  }
  
  public var contentType: String? {
    set {
      options.contentType = newValue
    }
    get {
      options.contentType
    }
  }
  
  
  public var upsert: Bool {
    set {
      options.upsert = newValue
    }
    get {
      options.upsert
    }
  }
  
  
  public var duplex: String?{
    set {
      options.duplex = newValue
    }
    get {
      options.duplex
    }
  }
  
  
  public var metadata: [String: AnyHashable]? {
    set {
      options.metadata = NSCSupabaseHelpers.encodeObject(newValue)
    }
    get {
      NSCSupabaseHelpers.decodeObject(options.metadata)
    }
  }
  
  
  public var headers: [String: String]? {
    set {
      options.headers = newValue
    }
    get {
      options.headers
    }
  }
}
  
  
  
  @objcMembers
  @objc(NSCSupabseStorageTransformOptions)
  public class NSCSupabseStorageTransformOptions: NSObject {
    var options: TransformOptions
    init(options: TransformOptions = TransformOptions()) {
      self.options = options
    }
    
    public var width: NSNumber? {
      set {
        options.width = newValue?.intValue
      }
      get {
        guard let width = options.width else { return nil }
        return NSNumber(value: width)
      }
    }
    public var height: NSNumber? {
      set {
        options.height = newValue?.intValue
      }
      get {
        guard let height = options.height else { return nil }
        return NSNumber(value: height)
      }
    }
    public var resize: String? {
      set {
        options.resize = newValue
      }
      get {
        options.resize
      }
    }
    public var quality: NSNumber?{
      set {
        options.quality = newValue?.intValue
      }
      get  {
        guard let quality = options.quality else { return nil }
        return NSNumber(value: quality)
      }
    }
    public var format: String? {
      set {
        options.format = newValue
      }
      get {
        options.format
      }
    }
  }
  
  @objcMembers
  @objc(NSCSupabseStorageSortBy)
  public class NSCSupabseStorageSortBy: NSObject {
    var sortBy: SortBy
    init(sortBy: SortBy = SortBy()) {
      self.sortBy = sortBy
    }
    
    public var column: String? {
      set {
        sortBy.column = newValue
      }
      
      get {
        sortBy.column
      }
    }
    public var order: String? {
      set {
        sortBy.order = newValue
      }
      
      get {
        sortBy.order
      }
    }
  }
  
  
  @objcMembers
  @objc(NSCSupabseStorageSearchOptions)
  public class NSCSupabseStorageSearchOptions: NSObject {
    var options: SearchOptions
    init(options: SearchOptions = SearchOptions()) {
      self.options = options
    }
    
    public var limit: NSNumber? {
      set {
        options.limit = newValue?.intValue
      }
      get {
        guard let limit = options.limit else {return nil}
        return NSNumber(value: limit)
      }
    }
    
    public var offset: NSNumber? {
      set {
        options.offset = newValue?.intValue
      }
      get {
        guard let offset = options.offset else {return nil}
        return NSNumber(value: offset)
      }
    }
    
    public var sortBy: NSCSupabseStorageSortBy? {
      set {
        options.sortBy = newValue?.sortBy
      }
      get {
        guard let sortBy = options.sortBy else {return nil}
        return NSCSupabseStorageSortBy(sortBy: sortBy)
      }
    }
    
    public var search: String? {
      set {
        options.search = newValue
      }
      get {
        options.search
      }
    }
  }
  
  @objcMembers
  @objc(NSCSupabseStorageFileObject)
  public class NSCSupabseStorageFileObject: NSObject {
    let file: FileObject
    init(file: FileObject) {
      self.file = file
    }
    
    public var name: String {
      file.name
    }
    public var bucketId: String? {
      file.bucketId
    }
    public var owner: String? {
      file.owner
    }
    public var id: String? {
      file.id?.uuidString
    }
    public var updatedAt: Date? {
      file.updatedAt
    }
    public var createdAt: Date? {
      file.createdAt
    }
    public var lastAccessedAt: Date? {
      file.lastAccessedAt
    }
    public var metadata: [String: AnyHashable]? {
      guard let metadata = file.metadata else {return nil}
      return NSCSupabaseHelpers.decodeObject(metadata)
    }
    public var buckets: NSCSupabseStorageBucket? {
      guard let buckets = file.buckets else {return nil}
      return NSCSupabseStorageBucket(bucket: buckets)
    }
  }
  
  
  @objcMembers
  @objc(NSCSupabseStorageSignedUploadURL)
  public class NSCSupabseStorageSignedUploadURL: NSObject {
    let url: SignedUploadURL
    init(url: SignedUploadURL) {
      self.url = url
    }
    
    public lazy var signedURL: String = {
      url.signedURL.absoluteString
    }()
    
    public lazy var path: String = {
      url.path
    }()
    
    public lazy var token: String = {
      url.token
    }()
  }

  
  
  @objcMembers
  @objc(NSCSupabseStorageFileApi)
  public class NSCSupabseStorageFileApi: NSObject {
    let fileApi: StorageFileApi
    init(fileApi: StorageFileApi) {
      self.fileApi = fileApi
    }
    
    
    public func upload(_ path: String, data: Data, _ options: NSCSupabseStorageFileOptions, _ callback:@escaping (NSCSupabseStorageFileUploadResponse?, Error?) -> Void){
      Task {
        do {
          let response = try await fileApi.upload(path, data: data, options: options.options)
          callback(NSCSupabseStorageFileUploadResponse(response: response), nil)
        }catch {
          callback(nil, error)
        }
      }
    }
    
    public func upload(_ path: String, file: URL, _ options: NSCSupabseStorageFileOptions, _ callback:@escaping (NSCSupabseStorageFileUploadResponse?, Error?) -> Void){
      Task {
        do {
          let response = try await fileApi.upload(path, fileURL: file, options: options.options)
          callback(NSCSupabseStorageFileUploadResponse(response: response), nil)
        }catch {
          callback(nil, error)
        }
      }
    }
    
    
    
    public func download(_ path: String, _ options: NSCSupabseStorageTransformOptions, _ callback:@escaping (Data?, Error?) -> Void){
      Task {
        do {
          let response = try await fileApi.download(path: path, options: options.options)
          callback(response, nil)
        }catch {
          callback(nil, error)
        }
      }
    }
    
    public func list(_ path: String?, _ options: NSCSupabseStorageSearchOptions?, _ callback:@escaping ([NSCSupabseStorageFileObject]?, Error?) -> Void){
      Task {
        do {
          let response = try await fileApi.list(path: path, options: options?.options).map { file in
            NSCSupabseStorageFileObject(file: file)
          }
          callback(response, nil)
        }catch {
          callback(nil, error)
        }
      }
    }
    
    public func update(_ path: String, data: Data, _ options: NSCSupabseStorageFileOptions, _ callback:@escaping (NSCSupabseStorageFileUploadResponse?, Error?) -> Void){
      Task {
        do {
          let response = try await fileApi.update(path, data: data, options: options.options)
          callback(NSCSupabseStorageFileUploadResponse(response: response), nil)
        }catch {
          callback(nil, error)
        }
      }
    }
    
    public func update(_ path: String, file: URL, _ options: NSCSupabseStorageFileOptions, _ callback:@escaping (NSCSupabseStorageFileUploadResponse?, Error?) -> Void){
      Task {
        do {
          let response = try await fileApi.update(path, fileURL: file, options: options.options)
          callback(NSCSupabseStorageFileUploadResponse(response: response), nil)
        }catch {
          callback(nil, error)
        }
      }
    }
    
    public func move(_ fromPath: String, _ toPath: String, _ callback:@escaping (Error?) -> Void){
      Task{
        do {
           try await fileApi.move(from: fromPath, to: toPath)
          callback(nil)
        }catch{
          callback(error)
        }
      }
    }
    
    public func copy(_ fromPath: String, _ toPath: String, _ callback:@escaping (String?,Error?) -> Void){
      Task{
        do {
          let response = try await fileApi.copy(from: fromPath, to: toPath)
          callback(response, nil)
        }catch{
          callback(nil, error)
        }
      }
    }
    
    public func remove(_ paths: [String], _ callback:@escaping ([NSCSupabseStorageFileObject]?,Error?) -> Void){
      Task{
        do {
          let response = try await fileApi.remove(paths: paths).map { file in
            NSCSupabseStorageFileObject(file: file)
          }
          callback(response, nil)
        }catch{
          callback(nil, error)
        }
      }
    }
    
    public func createSignedUrl(_ path: String, _ expiresIn: Int, _ download: String?, _ options: NSCSupabseStorageTransformOptions?, _ callback:@escaping (String?, Error?) -> Void){
      Task {
        do {
         let response = if(download != nil){
           try await fileApi.createSignedURL(path: path, expiresIn: expiresIn, download: download, transform: options?.options)
         }else {
           try await fileApi.createSignedURL(path: path, expiresIn: expiresIn, download: false, transform: options?.options)
         }
          callback(response.absoluteString, nil)
        }catch{
          callback(nil, error)
        }
      }
    }
    
    public func createSignedUrls(_ paths: [String], _ expiresIn: Int, _ download: String?, _ callback:@escaping ([String]?, Error?) -> Void){
      Task {
        do {
         let response = if(download != nil){
           try await fileApi.createSignedURLs(paths: paths, expiresIn: expiresIn, download: download)
         }else {
           try await fileApi.createSignedURLs(paths: paths, expiresIn: expiresIn, download: false)
         }
          
          let ret = response.map({ url in
            return url.absoluteString
          })
          
          callback(ret, nil)
        }catch{
          callback(nil, error)
        }
      }
    }
    
    public func createSignedUploadUrl(_ path: String, _ callback:@escaping (NSCSupabseStorageSignedUploadURL?, Error?) -> Void){
      Task {
        do {
          let response =  try await fileApi.createSignedUploadURL(path: path)
          callback(NSCSupabseStorageSignedUploadURL(url: response), nil)
        }catch{
          callback(nil, error)
        }
      }
    }
    
    
    public func uploadToSignedUrl(_ path: String, _ token: String, data: Data, _ options: NSCSupabseStorageFileOptions?, _ callback:@escaping (NSCSupabseStorageSignedURLUploadResponse?, Error?) -> Void){
      Task {
        do {
          let response = try await fileApi.uploadToSignedURL(path, token: token, data: data, options: options?.options)
          callback(NSCSupabseStorageSignedURLUploadResponse(response: response), nil)
        }catch {
          callback(nil, error)
        }
      }
    }
    
    
    public func getPublicUrl(_ path: String, _ download: String?, _ options: NSCSupabseStorageTransformOptions?) throws -> String {
      let response = try fileApi.getPublicURL(path: path, download: download, options: options?.options)
      return response.absoluteString
    }
    
    
  }
  
  @objcMembers
  @objc(NSCSupabseStorage)
  public class NSCSupabseStorage: NSObject {
    let storage: SupabaseStorageClient
    init(storage: SupabaseStorageClient) {
      self.storage = storage
    }
    
    public func createBucket(_ id: String, _ options: NSCSupabseStorageBucketOptions, _ callback: @escaping (Error?) -> Void){
      Task {
        do {
          try await storage.createBucket(id, options: options.options)
          callback(nil)
        }catch {
          callback(error)
        }
      }
    }
    
    public func getBucket(_ id: String, _ callback: @escaping (NSCSupabseStorageBucket?, Error?) -> Void){
      Task {
        do {
          let bucket = try await storage.getBucket(id)
          callback(NSCSupabseStorageBucket(bucket: bucket), nil)
        }catch {
          callback(nil, error)
        }
      }
    }
    
    
    public func listBuckets(_ id: String, _ callback: @escaping ([NSCSupabseStorageBucket]?, Error?) -> Void){
      Task {
        do {
          let buckets = try await storage.listBuckets().map { bucket in
            NSCSupabseStorageBucket(bucket: bucket)
          }
          callback(buckets, nil)
        }catch {
          callback(nil, error)
        }
      }
    }
    
    public func updateBucket(_ id: String, _ options: NSCSupabseStorageBucketOptions, _ callback: @escaping (Error?) -> Void){
      Task {
        do {
          try await storage.updateBucket(id, options: options.options)
          callback(nil)
        }catch {
          callback(error)
        }
      }
    }
    
    
    public func deleteBucket(_ id: String, _ callback:@escaping (Error?) -> Void){
      Task {
        do {
          try await storage.deleteBucket(id)
          callback(nil)
        }catch {
          callback(error)
        }
      }
    }
    
    public func emptyBucket(_ id: String, _ callback:@escaping (Error?) -> Void){
      Task {
        do {
          try await storage.emptyBucket(id)
          callback(nil)
        }catch {
          callback(error)
        }
      }
    }
    
    public func from(_ id: String) -> NSCSupabseStorageFileApi {
      return NSCSupabseStorageFileApi(fileApi: storage.from(id))
    }
  }

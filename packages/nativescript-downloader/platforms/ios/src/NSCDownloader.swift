//
//  NSCDownloader.swift
//  NativeScript Downloader
//
//  Created by Osei Fortune on 02/04/2024.
//
import Foundation



@objc(NSCDownloaderStatusCode)
enum NSCDownloaderStatusCode: Int8, RawRepresentable {
    case PENDING
    case PAUSED
    case DOWNLOADING
    case COMPLETED
    case ERROR
  typealias RawValue = Int8
  
  public init?(rawValue: Int) {
          switch rawValue {
          case 0:
            self = .PENDING
          case 1:
            self = .PAUSED
          case 2:
            self = .DOWNLOADING
          case 3:
            self = .COMPLETED
          case 4:
            self = .ERROR
          default:
              return nil
          }
      }
      
      public var rawValue: Int {
          switch self {
          case .PENDING:
            return 0
          case .PAUSED:
            return 1
          case .DOWNLOADING:
            return 2
          case .COMPLETED:
            return 3
          case .ERROR:
            return 4
          }
      }
  
  }

struct DownloadInfo {
    let path: String
    let url: String
    var status: NSCDownloaderStatusCode
    var progress: ((String, Double, Int, Int64, Int64) -> Void)?
    var complete: ((String, String?,String?) -> Void)
}

struct Download {
    let task: URLSessionDownloadTask
    var info: DownloadInfo
}

struct LastData {
    var write: Int64
    var time: Int
}

@objcMembers
@objc(NSCDownloader)
public class NSCDownloader: NSObject, URLSessionDownloadDelegate {
  static let config = URLSessionConfiguration.background(withIdentifier: "NativeScript Downloader")
  static let instance = NSCDownloader()
    static var timeOut: Int = 60 {
        didSet {
            config.timeoutIntervalForRequest = TimeInterval(timeOut)
            config.timeoutIntervalForResource = TimeInterval(timeOut)
        }
    }
   
    private static var downloads: [String: Download] = [:]
    private static var taskToUUID: [URLSessionDownloadTask?: String] = [:]
    private static var taskToRefreshTimeAndBytes: [URLSessionDownloadTask?: LastData] = [:]
    
    static func createDownload(_ url: String, _ path: String?, _ fileName: String?,_ headers: [String: String]?, _ progress: ((String, Double, Int, Int64, Int64) -> Void)?, _ complete: @escaping ((String,String?, String?) -> Void)) -> String {
        let id = UUID().uuidString.lowercased()
        var request = URLRequest(url: URL(string: url)!, cachePolicy: .useProtocolCachePolicy, timeoutInterval: TimeInterval(NSCDownloader.timeOut))
      let session = URLSession(configuration: NSCDownloader.config, delegate: instance, delegateQueue: nil)
        
        if(headers != nil){
            for (_, value) in headers!.enumerated() {
                request.addValue(value.value, forHTTPHeaderField: value.key)
            }
        }
        
        let task = session.downloadTask(with: request)
        var newPath: String
        if(path != nil && fileName != nil){
            newPath = URL(fileURLWithPath: path!).appendingPathComponent(fileName!).absoluteString
        }else if(path == nil && fileName != nil) {
            newPath = FileManager.default.temporaryDirectory.appendingPathComponent(fileName!).absoluteString
        }else if(path != nil && fileName == nil) {
            newPath = URL(fileURLWithPath: path!).appendingPathComponent(UUID().uuidString.lowercased()).absoluteString
        }else {
            if #available(iOS 16.0, *) {
                newPath = FileManager.default.temporaryDirectory.appending(path: UUID().uuidString.lowercased(), directoryHint: .inferFromPath).absoluteString
            } else {
                newPath = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString.lowercased()).absoluteString
            }
        }
        
    
        NSCDownloader.downloads[id] = Download(task: task, info: DownloadInfo(path: newPath, url: url, status: .PENDING, progress: progress, complete: complete))
        
        NSCDownloader.taskToUUID[task] = id
        
        return id
    }

    static func has(_ id: String) -> Bool {
        guard let task = NSCDownloader.downloads[id] else {
            return false
        }
        return true
    }
    
    static func start(_ id: String){
        guard let task = NSCDownloader.downloads[id] else {
            return
        }
        task.task.resume()
    }
    
    static func getStatus(_ id: String) -> NSCDownloaderStatusCode {
        guard let task = NSCDownloader.downloads[id] else {
            return .PENDING
        }
        return task.info.status
    }
    
    static func pause(_ id: String){
        guard var task = NSCDownloader.downloads[id] else {
            return
        }
        
        task.task.suspend()
        task.info.status = .PAUSED
    }
    
    static func resume(_ id: String){
        guard let task = NSCDownloader.downloads[id] else {
            return
        }
        task.task.resume()
    }
    
    static func cancel(_ id: String){
        guard let task = NSCDownloader.downloads[id] else {
            return
        }
        
        task.task.cancel()
    }
    
    static func getPath(_ id: String) -> String?{
        guard let task = NSCDownloader.downloads[id] else {
            return nil
        }
        
        return task.info.path
    }
    
    
    public func urlSession(_ session: URLSession, downloadTask: URLSessionDownloadTask, didResumeAtOffset fileOffset: Int64, expectedTotalBytes: Int64) {
        guard let downloadId = NSCDownloader.taskToUUID[downloadTask] else {return}
        guard var download = NSCDownloader.downloads[downloadId] else {return}
        download.info.status = .DOWNLOADING
    }
    
    public func urlSession(_ session: URLSession, downloadTask: URLSessionDownloadTask, didWriteData bytesWritten: Int64, totalBytesWritten: Int64, totalBytesExpectedToWrite: Int64) {
        guard let downloadId = NSCDownloader.taskToUUID[downloadTask] else {return}
        guard let download = NSCDownloader.downloads[downloadId] else {return}
        let current = floor(downloadTask.progress.fractionCompleted * 100)
        var last = NSCDownloader.taskToRefreshTimeAndBytes[downloadTask]
        
        if(last == nil){
            last = LastData(write: 0, time: 0)
            NSCDownloader.taskToRefreshTimeAndBytes[downloadTask] = last
        }
        
        guard var last = last else {return}
        
        var speed: Int = 0
        let currentBytes = downloadTask.countOfBytesReceived
        let totalBytes = downloadTask.progress.totalUnitCount
        
        let currentTime = Int(Date().timeIntervalSince1970 * 1000)
        let minTime = Int(100)
        let isGreater = (currentTime - last.time) >= minTime
        let isSame = currentBytes == totalBytes
        
        if (isGreater || isSame) {
            var intervalTime = currentTime - last.time
            if (intervalTime == 0) {
                intervalTime += 1
            }
            let updateBytes = Int(currentBytes - last.write)
            speed = Int(floor(round(Double(updateBytes / intervalTime))))
            
            
            download.info.progress?(downloadId, current, speed, currentBytes, downloadTask.progress.totalUnitCount)
            last.time = Int(Date().timeIntervalSince1970 * 1000)
            last.write = currentBytes
            
            NSCDownloader.taskToRefreshTimeAndBytes[downloadTask] = last
            
        }
        
    }
    
    public func urlSession(_ session: URLSession, task: URLSessionTask, didCompleteWithError error: (any Error)?) {
        guard let downloadTask = task as? URLSessionDownloadTask else {return}
        guard let downloadId = NSCDownloader.taskToUUID[downloadTask] else {return}
        guard let download = NSCDownloader.downloads[downloadId] else {return}
        download.info.complete(downloadId,nil, error?.localizedDescription)
    }
    
    public func urlSession(_ session: URLSession, downloadTask: URLSessionDownloadTask, didFinishDownloadingTo location: URL) {
        guard let downloadId = NSCDownloader.taskToUUID[downloadTask] else {return}
        guard let download = NSCDownloader.downloads[downloadId] else {return}
       
        do {
                let savedURL = URL(string: download.info.path)!
                try FileManager.default.moveItem(at: location, to: savedURL)
                download.info.complete(downloadId, download.info.path, nil)
              } catch {
                  download.info.complete(downloadId, nil, "Failed to save file to path \(download.info.path)")
              }
    }
}

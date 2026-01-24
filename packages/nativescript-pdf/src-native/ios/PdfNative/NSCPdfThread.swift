//
//  NSCPdfQueue.swift
//  PdfNative
//
//  Created by Osei Fortune on 04/07/2025.
//

internal final class NSCPdfQueue: NSObject {
  static let shared = NSCPdfQueue()
  
  private var thread: Thread!
  private let port = Port()
  
  override init() {
    super.init()
    thread = Thread(target: self, selector: #selector(threadEntry), object: nil)
    thread.name = "NSCPdfQueue"
    thread.start()
  }
  
  
  @objc private func threadEntry() {
    let runLoop = RunLoop.current
    runLoop.add(port, forMode: .default)
    while !Thread.current.isCancelled {
      runLoop.run(mode: .default, before: .distantFuture)
    }
  }
  
  func sync<T>(_ block: @escaping () -> T) -> T {
    if Thread.current == thread {
      return block()
    }
    
    var result: T!
    let semaphore = DispatchSemaphore(value: 0)
    perform(#selector(runBlock(_:)), on: thread, with: BlockWrapper {
      result = block()
      semaphore.signal()
    }, waitUntilDone: false)
    semaphore.wait()
    return result
  }
  
  func async(_ block: @escaping () -> Void) {
    perform(#selector(runBlock(_:)), on: thread, with: BlockWrapper(block), waitUntilDone: false)
  }
  
  func async(execute workItem: DispatchWorkItem) {
    perform(#selector(runWorkItemWrapper(_:)), on: thread, with: WorkItemWrapper(workItem), waitUntilDone: false)
  }
  
  @objc private func runBlock(_ wrapper: BlockWrapper) {
    wrapper.block()
  }
  
  @objc private func runWorkItemWrapper(_ wrapper: WorkItemWrapper) {
    wrapper.item.perform()
  }
  
  private class BlockWrapper: NSObject {
    let block: () -> Void
    init(_ block: @escaping () -> Void) {
      self.block = block
    }
  }
  
  private class WorkItemWrapper: NSObject {
    let item: DispatchWorkItem
    init(_ item: DispatchWorkItem) {
      self.item = item
    }
  }
}

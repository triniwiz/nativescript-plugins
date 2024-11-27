import Foundation

#if canImport(CouchbaseLite)
import CouchbaseLite
#endif

@objc(NSCCouchbase)
@objcMembers
public class NSCCouchbase: NSObject {
    
    @objc public static func createQueue(_ name: String, _ concurrent: Bool) -> DispatchQueue {
        if(concurrent){
            return DispatchQueue(label: name, attributes: .concurrent)
        }
        return DispatchQueue(label: name)
    }
    
#if canImport(CouchbaseLite)
    @objc public static func asyncNext(_ queue: DispatchQueue ,_ result: CBLQueryResultSet, _ callback: @escaping (Any?) -> Void) {
        let currentQueue = OperationQueue.current
        queue.async {
            let next =  result.nextObject()
            currentQueue?.addOperation {
                callback(next)
            }
        }
    }
#endif
}

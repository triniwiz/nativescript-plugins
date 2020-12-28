import Foundation
import UIKit
@objcMembers
@objc(PagerUtils)
public class PagerUtils: NSObject {
    public static func updateCollection(_ update: [String: Any],_ collection : UICollectionView) {
        collection.performBatchUpdates({
        var changes: [IndexPath] = []
            var addedCount: Int = 0
            var removedCount: Int = 0
            let index = update["index"] as! Int
          switch update["action"] as! String {
            case "add":
            addedCount = update["addedCount"] as! Int
            for i in 0...addedCount - 1 {
                changes.append(
                 IndexPath(row: index + i, section: 0)   
                )
            }
            collection.insertItems(at:changes)
            case "delete":
            removedCount = update["removedCount"] as! Int
            for i in 0...removedCount - 1 {
                changes.append(
                 IndexPath(row: index + i, section: 0)   
                )
            }
             collection.deleteItems(at: changes)
            case "update":
            collection.reloadItems(at: [
                IndexPath(row: index, section: 0)   
            ])

            case "splice":
                removedCount = update["removedCount"] as! Int
                addedCount = update["addedCount"] as! Int
                    if (removedCount > 0) {
                for i in 0...removedCount - 1 {
                  changes.append(
                 IndexPath(row: index + i, section: 0)   
                )
                }
                collection.deleteItems(at: changes)
              } else {
                let addedArray: [IndexPath] = []
                for i in 0...addedCount - 1 {
                  changes.append(
                 IndexPath(row: index + i, section: 0)   
                )
                }
                collection.insertItems(at:addedArray)
              }

           // case "change":
            default:
            // NO-OP
            changes = []
        }
        }, completion: nil)
    }
}

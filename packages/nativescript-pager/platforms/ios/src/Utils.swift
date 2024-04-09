import Foundation
import UIKit


@objcMembers
@objc(UICollectionViewFlowLinearLayoutImpl)
public class UICollectionViewFlowLinearLayoutImpl: UICollectionViewFlowLayout {
    
    public var transformer: String?
    
    public override func layoutAttributesForElements(in rect: CGRect) -> [UICollectionViewLayoutAttributes]? {
        
        let originalLayoutAttribute = super.layoutAttributesForElements(in:rect)
        guard let collectionView = collectionView else {return originalLayoutAttribute}
        if (transformer == "scale") {
            originalLayoutAttribute?.forEach({ attr in
                attr.frame.size.width = attr.frame.size.width * 0.75
                attr.frame.size.height = attr.frame.size.height * 0.75
                let spacing = minimumLineSpacing
                var distance = CGFloat(0)
                
                if(scrollDirection == .horizontal){
                    distance = abs(
                        collectionView.contentOffset.x +
                        collectionView.contentInset.left +
                        spacing - attr.frame.origin.x
                    )
                }else {
                    distance = abs(
                        collectionView.contentOffset.y +
                        collectionView.contentInset.top +
                        spacing - attr.frame.origin.y
                    )
                }
                
                
                var scale = CGFloat(0)
                
                if(scrollDirection == .horizontal){
                    scale = min(max(1 - distance / collectionView.bounds.size.width, 0.75), 1)
                }else {
                    scale = min(max(1 - distance / collectionView.bounds.size.height, 0.75), 1)
                }
                
                
                attr.transform = CGAffineTransformScale(attr.transform, 1, scale)
            })
        }
        
        return originalLayoutAttribute
        
    }
    
    public override func shouldInvalidateLayout(forBoundsChange newBounds: CGRect) -> Bool {
        if (transformer == "scale") {
            return true
        }
        return false
    }
    
    
    public override func initialLayoutAttributesForAppearingItem(at itemIndexPath: IndexPath) -> UICollectionViewLayoutAttributes? {
        guard let attrs = super.initialLayoutAttributesForAppearingItem(at: itemIndexPath) else {return nil}
        attrs.alpha = 1
        return attrs
    }
    
    public override func finalLayoutAttributesForDisappearingItem(at itemIndexPath: IndexPath) -> UICollectionViewLayoutAttributes? {
        guard let attrs = super.finalLayoutAttributesForDisappearingItem(at: itemIndexPath) else {return nil}
        attrs.alpha = 1
        return attrs
    }
    
    var onPageChange: ((Int)-> Void)?
    
    
    public override func targetContentOffset(forProposedContentOffset proposedContentOffset: CGPoint, withScrollingVelocity velocity: CGPoint) -> CGPoint {
        
        guard let collectionView = collectionView else { return proposedContentOffset }
        
        var targetRect: CGRect = .zero
        
        var verticalCenter = CGFloat(0)
        
        if(scrollDirection == .horizontal){
            targetRect = CGRect(x: proposedContentOffset.x, y: 0, width: collectionView.frame.width, height: collectionView.frame.height)
            verticalCenter = proposedContentOffset.x + collectionView.frame.width / 2
        }else {
            targetRect = CGRect(x: 0, y: proposedContentOffset.y, width: collectionView.frame.width, height: collectionView.frame.height)
            verticalCenter = proposedContentOffset.y + collectionView.frame.height / 2
        }
        
        
        var offsetAdjustment = CGFloat.greatestFiniteMagnitude
        
        // Retrieve the layout attributes for all of the cells in the target rectangle.
        guard let attributesList = super.layoutAttributesForElements(in: targetRect) else { return proposedContentOffset }
        for attributes in attributesList {
            // Find the nearest attributes to the center of collectionView.
            if(scrollDirection == .horizontal){
                if abs(attributes.center.x - verticalCenter) < abs(offsetAdjustment) {
                    offsetAdjustment = attributes.center.x - verticalCenter
                }
            }else {
                if abs(attributes.center.y - verticalCenter) < abs(offsetAdjustment) {
                    offsetAdjustment = attributes.center.y - verticalCenter
                }
            }
            
        }
        
        if(scrollDirection == .horizontal){
            return CGPoint(x: proposedContentOffset.x + offsetAdjustment, y: proposedContentOffset.y)
        }else {
            return CGPoint(x: proposedContentOffset.x, y: proposedContentOffset.y + offsetAdjustment)
        }
    }
}



@objcMembers
@objc(PagerUtils)
public class PagerUtils: NSObject {
    
    
    public static func updateCollection(_ update: [String: Any],_ collection : UICollectionView) {
        DispatchQueue.main.async {
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
}

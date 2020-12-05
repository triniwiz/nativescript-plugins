import Foundation
@objcMembers
@objc(ImageCacheItUtils)
public class ImageCacheItUtils: NSObject {
    public static func createConcurrentQueue(_ name: String) -> DispatchQueue{
        return DispatchQueue(label: name, attributes: .concurrent)
    }
}

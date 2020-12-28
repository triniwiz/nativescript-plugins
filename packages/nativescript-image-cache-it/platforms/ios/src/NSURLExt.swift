import Foundation
extension NSURL {
 private struct NSURLProps {
            static var uuid: String? = nil
        }
    public var uuid: String? {
        get {
            return objc_getAssociatedObject(self, &NSURLProps.uuid) as? String
        }
        set{
            if let unwrappedValue = newValue{
                objc_setAssociatedObject(self, &NSURLProps.uuid, unwrappedValue as NSString?, .OBJC_ASSOCIATION_RETAIN_NONATOMIC)
            }
        }
    }
}

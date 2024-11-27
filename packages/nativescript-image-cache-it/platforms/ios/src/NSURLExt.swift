import Foundation
extension NSURL {
    private struct NSURLProps {
        static var uuid: UInt8 = 0
    }
    public var uuid: String? {
        get {
            return objc_getAssociatedObject(self, &NSURLProps.uuid) as? String
        }
        set{
            if let unwrappedValue = newValue{
                objc_setAssociatedObject(self, &NSURLProps.uuid, unwrappedValue as String?, .OBJC_ASSOCIATION_RETAIN_NONATOMIC)
            }
        }
    }
}

#if canImport(PusherSwift)
import PusherSwift


import Foundation

@objcMembers
public class TNSPusherUtils: NSObject {
    
    public static func createPusherAuth(_ authToken: [String: AnyHashable]) -> PusherAuth? {
        #if canImport(PusherSwift)
        return PusherAuth(auth: authToken["auth"] as? String ?? "", channelData: authToken["channel_data"] as? String, sharedSecret: nil)
        #else
        return nil
        #endif
    }
    
}
#endif
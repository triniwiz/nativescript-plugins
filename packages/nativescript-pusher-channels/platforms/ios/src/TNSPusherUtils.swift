import PusherSwift
import Foundation

@objcMembers
public class TNSPusherUtils: NSObject {
    
    public static func createPusherAuth(_ authToken: [String: AnyHashable]) -> PusherAuth{
        return PusherAuth(auth: authToken["auth"] as? String ?? "", channelData: authToken["channel_data"] as? String, sharedSecret: nil)
    }
    
}

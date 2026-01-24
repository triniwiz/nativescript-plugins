import Foundation
import UIKit

@objc(NSCKlaviyoPushNotificationHelper)
public class NSCKlaviyoPushNotificationHelper: NSObject {
  static let REMOTE_NOTIFICATIONS_REGISTRATION_STATUS = "io.github.triniwiz.klaviyo.notifications.status"
  
  private static var _sharedInstance: NSCKlaviyoPushNotificationHelper?  = nil
  
  @objc public static var sharedInstance: NSCKlaviyoPushNotificationHelper {
    get {
      if(_sharedInstance == nil){
        _sharedInstance = NSCKlaviyoPushNotificationHelper()
      }
      
      return _sharedInstance!
    }
  }
  
  @objc public func observe(){
    NotificationCenter.default.addObserver(NSCKlaviyoPushNotificationHelper._sharedInstance!, selector: #selector(NSCKlaviyoPushNotificationHelper.applicationDidFinishLaunchingNotification(_:)), name: UIApplication.didFinishLaunchingNotification, object: nil)
  }
  
  
  @objc func applicationDidFinishLaunchingNotification(_ notification: NSNotification) {
    NSCNSCKlaviyoPushUIApplicationDelegate.sharedInstance.observe()
    if #available(iOS 10.0, *) {
      NSCKlaviyoPushUNUserNotificationCenterDelegate.sharedInstance.observe()
    }
    
    
    let auto = UserDefaults.standard.bool(forKey: NSCKlaviyoPushNotificationHelper.REMOTE_NOTIFICATIONS_REGISTRATION_STATUS)
    let isSimulator = UIDevice.current.name.lowercased().contains("simulator")
    if (auto && !isSimulator) {
      UIApplication.shared.registerForRemoteNotifications()
    }
  }
}

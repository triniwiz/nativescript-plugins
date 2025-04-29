import Foundation
import UIKit
import GoogleUtilities
import NSCKlaviyoPush

@objc(NSCNSCKlaviyoPushUIApplicationDelegate)
public class NSCNSCKlaviyoPushUIApplicationDelegate: UIResponder, UIApplicationDelegate {
  
  public static let sharedInstance = NSCNSCKlaviyoPushUIApplicationDelegate()
  
  public func observe(){
    GULAppDelegateSwizzler.registerAppDelegateInterceptor(NSCNSCKlaviyoPushUIApplicationDelegate.sharedInstance)
    GULAppDelegateSwizzler.proxyOriginalDelegateIncludingAPNSMethods()
    
    guard GULAppDelegateSwizzler.sharedApplication()?.delegate != nil else {
      return
    }
    
    let selector = #selector((NSCNSCKlaviyoPushUIApplicationDelegate).application(_:didReceiveRemoteNotification:fetchCompletionHandler:))
    if (!(GULAppDelegateSwizzler.sharedApplication()!.delegate!.responds(to: selector))) {
      
      
      let method = class_getInstanceMethod(
        object_getClass(NSCNSCKlaviyoPushUIApplicationDelegate.sharedInstance),
        selector
      );
      
      guard method != nil else {
        return
      }
      
      class_addMethod(
        object_getClass(
          GULAppDelegateSwizzler.sharedApplication()!.delegate
        ), selector,
        method_getImplementation(method!),
        method_getTypeEncoding(method!)
      );
    }
    
    
    
    let tokenSelector = #selector(NSCNSCKlaviyoPushUIApplicationDelegate.application(_:didRegisterForRemoteNotificationsWithDeviceToken:))
    if (!(GULAppDelegateSwizzler.sharedApplication()!.delegate!.responds(to: tokenSelector))) {
      
      
      let method = class_getInstanceMethod(
        object_getClass(NSCNSCKlaviyoPushUIApplicationDelegate.sharedInstance),
        tokenSelector
      );
      
      guard method != nil else {
        return
      }
      
      class_addMethod(
        object_getClass(
          GULAppDelegateSwizzler.sharedApplication()!.delegate
        ), tokenSelector,
        method_getImplementation(method!),
        method_getTypeEncoding(method!)
      );
    }
    
    
    let urlHandlingSelector = #selector(NSCNSCKlaviyoPushUIApplicationDelegate.application(_:open:options:))
    if (!(GULAppDelegateSwizzler.sharedApplication()!.delegate!.responds(to: urlHandlingSelector))) {
      
      
      let method = class_getInstanceMethod(
        object_getClass(NSCNSCKlaviyoPushUIApplicationDelegate.sharedInstance),
        urlHandlingSelector
      );
      
      guard method != nil else {
        return
      }
      
      class_addMethod(
        object_getClass(
          GULAppDelegateSwizzler.sharedApplication()!.delegate
        ), urlHandlingSelector,
        method_getImplementation(method!),
        method_getTypeEncoding(method!)
      );
    }
    
  }
  
  
  @objc public func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
    guard let components = NSURLComponents(url: url, resolvingAgainstBaseURL: true) else {
      return false
    }
    NSCKlaviyoPush.onDeepLinkCallback?(url)
    return false
  }
  
  
  @objc public func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
    NSCKlaviyoPush.registerDeviceForRemoteMessagesCallback?(false,error as NSError)
    NSCKlaviyoPush.registerDeviceForRemoteMessagesCallback = nil
  }
  
  @objc public func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
    UserDefaults.standard.set(true, forKey: NSCKlaviyoPushNotificationHelper.REMOTE_NOTIFICATIONS_REGISTRATION_STATUS)
    NSCKlaviyoPush.registerDeviceForRemoteMessagesCallback?(UIApplication.shared.isRegisteredForRemoteNotifications, nil)
    NSCKlaviyoPush.onTokenCallback?(NSCKlaviyoPush.apnsToken(toString: deviceToken))
    
  }
  
  @objc public func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable : Any], fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
    if let customData = userInfo["key_value_pairs"] as? [String: String] {
      NSCKlaviyoPush.onCustomDataMessageCallback?(customData, nil)
      completionHandler(.newData)
    } else {
      completionHandler(.noData)
    }
  }
  
  
}

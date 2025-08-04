import Foundation
import KlaviyoSwift
import UIKit
import NSCKlaviyoPush

struct KlaviyoOriginalDelegateRespondsTo {
  var willPresentNotification: Bool
  var didReceiveNotificationResponse:Bool
  var openSettingsForNotification: Bool
}


@available(iOS 10.0, *)
@objc(NSCKlaviyoPushUNUserNotificationCenterDelegate)
public class NSCKlaviyoPushUNUserNotificationCenterDelegate: NSObject, UNUserNotificationCenterDelegate {
  
  static var notificationCenterDelegateObserving = false
  
  static var originalNotificationCenterDelegate: UNUserNotificationCenterDelegate? = nil
  
  static var originalDelegateRespondsTo = KlaviyoOriginalDelegateRespondsTo(willPresentNotification: false, didReceiveNotificationResponse: false, openSettingsForNotification: false)
  
  public static let sharedInstance = NSCKlaviyoPushUNUserNotificationCenterDelegate()
  
  public func observe(){
    if(!NSCKlaviyoPushUNUserNotificationCenterDelegate.notificationCenterDelegateObserving){
      let center = UNUserNotificationCenter.current()
      if (center.delegate != nil) {
        NSCKlaviyoPushUNUserNotificationCenterDelegate.originalNotificationCenterDelegate = center.delegate
        if #available(iOS 12.0, *) {
          NSCKlaviyoPushUNUserNotificationCenterDelegate.originalDelegateRespondsTo.openSettingsForNotification = NSCKlaviyoPushUNUserNotificationCenterDelegate.originalNotificationCenterDelegate!.responds(to: #selector(UNUserNotificationCenterDelegate.userNotificationCenter(_:openSettingsFor:)))
        }
        
        NSCKlaviyoPushUNUserNotificationCenterDelegate.originalDelegateRespondsTo.willPresentNotification = NSCKlaviyoPushUNUserNotificationCenterDelegate.originalNotificationCenterDelegate!.responds(to: #selector(UNUserNotificationCenterDelegate.userNotificationCenter(_:willPresent:withCompletionHandler:)))
        
        NSCKlaviyoPushUNUserNotificationCenterDelegate.originalDelegateRespondsTo.didReceiveNotificationResponse = NSCKlaviyoPushUNUserNotificationCenterDelegate.originalNotificationCenterDelegate!.responds(to: #selector(UNUserNotificationCenterDelegate.userNotificationCenter(_:didReceive:withCompletionHandler:)))
      }
      center.delegate = NSCKlaviyoPushUNUserNotificationCenterDelegate.sharedInstance
      NSCKlaviyoPushUNUserNotificationCenterDelegate.notificationCenterDelegateObserving = true
    }
  }
  
  
  public func userNotificationCenter(_ center: UNUserNotificationCenter, openSettingsFor notification: UNNotification?) {
    if ((NSCKlaviyoPushUNUserNotificationCenterDelegate.originalNotificationCenterDelegate != nil) && NSCKlaviyoPushUNUserNotificationCenterDelegate.originalDelegateRespondsTo.openSettingsForNotification) {
      if #available(iOS 12.0, *) {
        NSCKlaviyoPushUNUserNotificationCenterDelegate.originalNotificationCenterDelegate?.userNotificationCenter?(center, openSettingsFor: notification)
      }
    }
  }
  
  public func userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Void) {
    
    let handled = KlaviyoSDK().handle(notificationResponse: response, withCompletionHandler: completionHandler)
    if handled {
      return
    }
    
    
    if (NSCKlaviyoPushUNUserNotificationCenterDelegate.originalNotificationCenterDelegate != nil && NSCKlaviyoPushUNUserNotificationCenterDelegate.originalDelegateRespondsTo.didReceiveNotificationResponse) {
      NSCKlaviyoPushUNUserNotificationCenterDelegate.originalNotificationCenterDelegate?.userNotificationCenter?(center, didReceive: response, withCompletionHandler: completionHandler)
    } else {
      completionHandler()
    }
  }
  
  public func userNotificationCenter(_ center: UNUserNotificationCenter, willPresent notification: UNNotification, withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void) {
    var options = UNNotificationPresentationOptions(rawValue: 0)
    
    let aps = notification.request.content.userInfo["aps"] as? NSDictionary
    
    if (NSCKlaviyoPush.showNotificationsWhenInForeground || notification.request.content.userInfo["gcm.notification.showWhenInForeground"] as? String == "true" || notification.request.content.userInfo["showWhenInForeground"] as? Bool ?? false ||
        aps != nil && aps?["showWhenInForeground"] as? Bool ?? false) {
      var alertOptions: UInt = 0
      if #available(iOS 14.0, *) {
        alertOptions = UNNotificationPresentationOptions.list.rawValue | UNNotificationPresentationOptions.banner.rawValue
      } else {
        alertOptions = UNNotificationPresentationOptions.alert.rawValue
      }
      options = UNNotificationPresentationOptions(rawValue: alertOptions |  UNNotificationPresentationOptions.sound.rawValue | UNNotificationPresentationOptions.badge.rawValue)
    }
    
    
    if (NSCKlaviyoPushUNUserNotificationCenterDelegate.originalNotificationCenterDelegate != nil && NSCKlaviyoPushUNUserNotificationCenterDelegate.originalDelegateRespondsTo.willPresentNotification) {
      NSCKlaviyoPushUNUserNotificationCenterDelegate.originalNotificationCenterDelegate?.userNotificationCenter?(center, willPresent: notification, withCompletionHandler: completionHandler)
    } else {
      completionHandler(options)
    }
  }
  
}

#import "NSCKlaviyoPush.h"
@implementation NSCKlaviyoPush

BOOL NSCKlaviyoShowNotificationsWhenInForeground = NO;
BoolCallback NSCKlaviyoRegisterDeviceForRemoteMessagesCallback = nil;
CompletableResponseCallback NSCKlaviyoOnMessageCallback = nil;
CompletableResponseCallback NSCKlaviyoOnNonKlaviyoMessageCallback = nil;
StringCallback NSCKlaviyoOnTokenCallback = nil;
DeepLinkCallback NSCKlaviyoOnDeepLinkCallback = nil;
CustomDataCallback NSCKlaviyoOnCustomDataMessageCallback = nil;


+(BOOL) isSimulator {
#if TARGET_IPHONE_SIMULATOR
    return true;
#else
   return false;
#endif
}

+ (void)setShowNotificationsWhenInForeground:(BOOL)showNotificationsWhenInForeground {
    NSCKlaviyoShowNotificationsWhenInForeground = showNotificationsWhenInForeground;
}

+ (BOOL)showNotificationsWhenInForeground {
    return NSCKlaviyoShowNotificationsWhenInForeground;
}

+ (BoolCallback)registerDeviceForRemoteMessagesCallback {
    return NSCKlaviyoRegisterDeviceForRemoteMessagesCallback;
}

+ (void)setRegisterDeviceForRemoteMessagesCallback:(BoolCallback)callback {
    NSCKlaviyoRegisterDeviceForRemoteMessagesCallback = callback;
}


+ (CompletableResponseCallback)onMessageCallback {
    return NSCKlaviyoOnMessageCallback;
}

+ (void)setOnMessageCallback:(CompletableResponseCallback)callback {
    NSCKlaviyoOnMessageCallback = callback;
}

+ (CompletableResponseCallback)onNonKlaviyMessageCallback {
    return NSCKlaviyoOnNonKlaviyoMessageCallback;
}

+ (void)setOnNonKlaviyMessageCallback:(CompletableResponseCallback)callback {
  NSCKlaviyoOnNonKlaviyoMessageCallback = callback;
}


+ (DeepLinkCallback)onDeepLinkCallback {
    return NSCKlaviyoOnDeepLinkCallback;
}

+ (void)setOnDeepLinkCallback:(DeepLinkCallback)callback {
    NSCKlaviyoOnDeepLinkCallback = callback;
}


+ (StringCallback)onTokenCallback {
    return NSCKlaviyoOnTokenCallback;
}

+ (void)setOnTokenCallback:(StringCallback)callback {
    NSCKlaviyoOnTokenCallback = callback;
}

+ (CustomDataCallback)onCustomDataMessageCallback {
    return NSCKlaviyoOnCustomDataMessageCallback;
}

+ (void)setOnCustomDataMessageCallback:(CustomDataCallback)callback {
    NSCKlaviyoOnCustomDataMessageCallback = callback;
}




+ (NSString *)APNSTokenToString:(NSData *)tokenData {
    return [tokenData base64EncodedStringWithOptions:0];
}
@end


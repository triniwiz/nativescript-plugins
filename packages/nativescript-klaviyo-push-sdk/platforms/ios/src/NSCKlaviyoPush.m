#import "NSCKlaviyoPush.h"
@implementation NSCKlaviyoPush

BOOL ShowNotificationsWhenInForeground = NO;
BoolCallback RegisterDeviceForRemoteMessagesCallback = nil;
CompletableResponseCallback OnMessageCallback = nil;
CompletableResponseCallback OnNonKlaviyoMessageCallback = nil;
StringCallback OnTokenCallback = nil;
DeepLinkCallback OnDeepLinkCallback = nil;
CustomDataCallback OnCustomDataMessageCallback = nil;


+(BOOL) isSimulator {
#if TARGET_IPHONE_SIMULATOR
    return true;
#else
   return false;
#endif
}

+ (void)setShowNotificationsWhenInForeground:(BOOL)showNotificationsWhenInForeground {
    ShowNotificationsWhenInForeground = showNotificationsWhenInForeground;
}

+ (BOOL)showNotificationsWhenInForeground {
    return ShowNotificationsWhenInForeground;
}

+ (BoolCallback)registerDeviceForRemoteMessagesCallback {
    return RegisterDeviceForRemoteMessagesCallback;
}

+ (void)setRegisterDeviceForRemoteMessagesCallback:(BoolCallback)callback {
    RegisterDeviceForRemoteMessagesCallback = callback;
}


+ (CompletableResponseCallback)onMessageCallback {
    return OnMessageCallback;
}

+ (void)setOnMessageCallback:(CompletableResponseCallback)callback {
    OnMessageCallback = callback;
}

+ (CompletableResponseCallback)onNonKlaviyMessageCallback {
    return OnNonKlaviyoMessageCallback;
}

+ (void)setOnNonKlaviyMessageCallback:(CompletableResponseCallback)callback {
  OnNonKlaviyoMessageCallback = callback;
}


+ (DeepLinkCallback)onDeepLinkCallback {
    return OnDeepLinkCallback;
}

+ (void)setOnDeepLinkCallback:(DeepLinkCallback)callback {
    OnDeepLinkCallback = callback;
}


+ (StringCallback)onTokenCallback {
    return OnTokenCallback;
}

+ (void)setOnTokenCallback:(StringCallback)callback {
    OnTokenCallback = callback;
}

+ (CustomDataCallback)onCustomDataMessageCallback {
    return OnCustomDataMessageCallback;
}

+ (void)setOnCustomDataMessageCallback:(CustomDataCallback)callback {
    OnCustomDataMessageCallback = callback;
}




+ (NSString *)APNSTokenToString:(NSData *)tokenData {
    const char *data = [tokenData bytes];

    NSMutableString *token = [NSMutableString string];
    for (NSInteger i = 0; i < tokenData.length; i++) {
      [token appendFormat:@"%02.2hhX", data[i]];
    }

    return [token copy];
}
@end


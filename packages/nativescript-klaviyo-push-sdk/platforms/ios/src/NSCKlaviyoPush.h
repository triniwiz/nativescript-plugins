#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

typedef void(^BoolCallback)(BOOL success, NSError* _Nullable error);
typedef void(^CompletableResponseCallback)(UNNotificationResponse* _Nullable response, void(^_Nonnull complete)(void));
typedef void(^StringCallback)(NSString* _Nullable value);
typedef void(^CustomDataCallback)(NSDictionary* _Nonnull value, UNNotificationResponse* _Nullable response);
typedef void(^DeepLinkCallback)(NSURL* _Nonnull link);

@interface NSCKlaviyoPush: NSObject

@property (class) BOOL showNotificationsWhenInForeground;

@property (nonatomic, strong, class) BoolCallback _Nullable registerDeviceForRemoteMessagesCallback;

@property (nonatomic, strong, class) CompletableResponseCallback _Nullable onMessageCallback;

@property (nonatomic, strong, class) StringCallback _Nullable onTokenCallback;

@property (nonatomic, strong, class) CustomDataCallback _Nullable onCustomDataMessageCallback;

@property (nonatomic, strong, class) DeepLinkCallback _Nullable onDeepLinkCallback;

@property (nonatomic, strong, class) CompletableResponseCallback _Nullable onNonKlaviyoMessageCallback;

+(BOOL) isSimulator;

+(NSString* _Nonnull) APNSTokenToString: (NSData* _Nonnull)tokenData;
@end

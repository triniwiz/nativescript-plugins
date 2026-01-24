
declare class NSCKlaviyoPush extends NSObject {

	static APNSTokenToString(tokenData: NSData): string;

	static alloc(): NSCKlaviyoPush; // inherited from NSObject

	static new(): NSCKlaviyoPush; // inherited from NSObject

	static onCustomDataMessageCallback: (p1: NSDictionary<any, any>, p2: UNNotificationResponse) => void;

	static onDeepLinkCallback: (p1: NSURL) => void;

	static onMessageCallback: (p1: UNNotificationResponse, p2: () => void) => void;

	static onNonKlaviyoMessageCallback: (p1: UNNotificationResponse, p2: () => void) => void;

	static onTokenCallback: (p1: string) => void;

	static registerDeviceForRemoteMessagesCallback: (p1: boolean, p2: NSError) => void;

	static showNotificationsWhenInForeground: boolean;

	static isSimulator(): boolean
}

declare class NSCKlaviyoPushLoader extends NSObject {

	static alloc(): NSCKlaviyoPushLoader; // inherited from NSObject

	static new(): NSCKlaviyoPushLoader; // inherited from NSObject
}

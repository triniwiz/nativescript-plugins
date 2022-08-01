
declare class NSCPusherUtils extends NSObject {

	static alloc(): NSCPusherUtils; // inherited from NSObject

	static createPusherAuth(authToken: NSDictionary<string, NSObject>): PusherAuth;

	static new(): NSCPusherUtils; // inherited from NSObject
}

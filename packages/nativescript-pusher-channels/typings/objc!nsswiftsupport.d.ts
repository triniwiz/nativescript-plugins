declare class TNSPusherUtils extends NSObject {

	static alloc(): TNSPusherUtils; // inherited from NSObject

	static createPusherAuth(authToken: NSDictionary): PusherAuth;

	static new(): TNSPusherUtils; // inherited from NSObject
}

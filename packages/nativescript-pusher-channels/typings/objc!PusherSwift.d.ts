
interface AuthRequestBuilderProtocol {

	requestForSocketIDChannelName?(socketID: string, channelName: string): NSURLRequest;
}
declare var AuthRequestBuilderProtocol: {

	prototype: AuthRequestBuilderProtocol;
};

interface Authorizer {

	fetchAuthValueWithSocketIDChannelNameCompletionHandler(socketID: string, channelName: string, completionHandler: (p1: PusherAuth) => void): void;
}
declare var Authorizer: {

	prototype: Authorizer;
};

declare const enum ConnectionState {

	Connecting = 0,

	Connected = 1,

	Disconnecting = 2,

	Disconnected = 3,

	Reconnecting = 4
}

declare class GlobalChannel extends PusherChannel {

	static alloc(): GlobalChannel; // inherited from NSObject

	static new(): GlobalChannel; // inherited from NSObject
}

declare class OCAuthMethod extends NSObject {

	static alloc(): OCAuthMethod; // inherited from NSObject

	static new(): OCAuthMethod; // inherited from NSObject

	constructor(o: { authEndpoint: string; });

	constructor(o: { authRequestBuilder: AuthRequestBuilderProtocol; });

	constructor(o: { authorizer: Authorizer; });

	constructor(o: { secret: string; });

	constructor(o: { type: number; });

	initWithAuthEndpoint(authEndpoint: string): this;

	initWithAuthRequestBuilder(authRequestBuilder: AuthRequestBuilderProtocol): this;

	initWithAuthorizer(authorizer: Authorizer): this;

	initWithSecret(secret: string): this;

	initWithType(type: number): this;
}

declare class OCPusherHost extends NSObject {

	static alloc(): OCPusherHost; // inherited from NSObject

	static new(): OCPusherHost; // inherited from NSObject

	constructor(o: { cluster: string; });

	constructor(o: { host: string; });

	initWithCluster(cluster: string): this;

	initWithHost(host: string): this;
}

declare class Pusher extends NSObject {

	static alloc(): Pusher; // inherited from NSObject

	static new(): Pusher; // inherited from NSObject

	readonly connection: PusherConnection;

	delegate: PusherDelegate;

	constructor(o: { appKey: string; options: PusherClientOptions; });

	constructor(o: { key: string; });

	constructor(o: { key: string; options: PusherClientOptions; });

	bind(callback: (p1: any) => void): string;

	bindWithEventCallback(eventCallback: (p1: PusherEvent) => void): string;

	connect(): void;

	disconnect(): void;

	initWithAppKeyOptions(key: string, options: PusherClientOptions): this;

	initWithKey(key: string): this;

	initWithKeyOptions(key: string, options: PusherClientOptions): this;

	subscribeAuthOnMemberAddedOnMemberRemoved(channelName: string, auth: PusherAuth, onMemberAdded: (p1: PusherPresenceChannelMember) => void, onMemberRemoved: (p1: PusherPresenceChannelMember) => void): PusherChannel;

	subscribeToPresenceChannelWithChannelName(channelName: string): PusherPresenceChannel;

	subscribeToPresenceChannelWithChannelNameAuthOnMemberAddedOnMemberRemoved(channelName: string, auth: PusherAuth, onMemberAdded: (p1: PusherPresenceChannelMember) => void, onMemberRemoved: (p1: PusherPresenceChannelMember) => void): PusherPresenceChannel;

	subscribeToPresenceChannelWithChannelNameOnMemberAddedOnMemberRemoved(channelName: string, onMemberAdded: (p1: PusherPresenceChannelMember) => void, onMemberRemoved: (p1: PusherPresenceChannelMember) => void): PusherPresenceChannel;

	subscribeWithChannelName(channelName: string): PusherChannel;

	subscribeWithChannelNameOnMemberAddedOnMemberRemoved(channelName: string, onMemberAdded: (p1: PusherPresenceChannelMember) => void, onMemberRemoved: (p1: PusherPresenceChannelMember) => void): PusherChannel;

	unbindAll(): void;

	unbindWithCallbackId(callbackId: string): void;

	unsubscribe(channelName: string): void;

	unsubscribeAll(): void;
}

declare class PusherAuth extends NSObject {

	static alloc(): PusherAuth; // inherited from NSObject

	static new(): PusherAuth; // inherited from NSObject
}

declare class PusherChannel extends NSObject {

	static alloc(): PusherChannel; // inherited from NSObject

	static new(): PusherChannel; // inherited from NSObject

	auth: PusherAuth;

	connection: PusherConnection;

	readonly name: string;

	subscribed: boolean;

	constructor(o: { name: string; connection: PusherConnection; auth: PusherAuth; });

	bindWithEventNameCallback(eventName: string, callback: (p1: any) => void): string;

	bindWithEventNameEventCallback(eventName: string, eventCallback: (p1: PusherEvent) => void): string;

	handleEventWithEvent(event: PusherEvent): void;

	initWithNameConnectionAuth(name: string, connection: PusherConnection, auth: PusherAuth): this;

	triggerWithEventNameData(eventName: string, data: any): void;

	unbindAll(): void;

	unbindAllForEventName(eventName: string): void;

	unbindWithEventNameCallbackId(eventName: string, callbackId: string): void;
}

declare class PusherChannels extends NSObject {

	static alloc(): PusherChannels; // inherited from NSObject

	static new(): PusherChannels; // inherited from NSObject

	channels: NSDictionary<string, PusherChannel>;

	findPresenceWithName(name: string): PusherPresenceChannel;

	findWithName(name: string): PusherChannel;
}

declare class PusherClientOptions extends NSObject {

	static alloc(): PusherClientOptions; // inherited from NSObject

	static new(): PusherClientOptions; // inherited from NSObject

	readonly attemptToReturnJSONObject: boolean;

	readonly autoReconnect: boolean;

	readonly host: string;

	readonly path: string;

	readonly port: number;

	readonly useTLS: boolean;

	constructor(o: { authMethod: OCAuthMethod; });

	constructor(o: { ocAuthMethod: OCAuthMethod; attemptToReturnJSONObject: boolean; autoReconnect: boolean; ocHost: OCPusherHost; port: number; useTLS: boolean; activityTimeout: number; });

	constructor(o: { ocAuthMethod: OCAuthMethod; autoReconnect: boolean; ocHost: OCPusherHost; port: number; useTLS: boolean; activityTimeout: number; });

	initWithAuthMethod(authMethod: OCAuthMethod): this;

	initWithOcAuthMethodAttemptToReturnJSONObjectAutoReconnectOcHostPortUseTLSActivityTimeout(authMethod: OCAuthMethod, attemptToReturnJSONObject: boolean, autoReconnect: boolean, host: OCPusherHost, port: number, useTLS: boolean, activityTimeout: number): this;

	initWithOcAuthMethodAutoReconnectOcHostPortUseTLSActivityTimeout(authMethod: OCAuthMethod, autoReconnect: boolean, host: OCPusherHost, port: number, useTLS: boolean, activityTimeout: number): this;

	setAuthMethodWithAuthMethod(authMethod: OCAuthMethod): void;
}

declare class PusherConnection extends NSObject {

	static alloc(): PusherConnection; // inherited from NSObject

	static new(): PusherConnection; // inherited from NSObject

	OCMaxReconnectGapInSeconds: number;

	OCReconnectAttemptsMax: number;

	URLSession: NSURLSession;

	activityTimeoutInterval: number;

	channels: PusherChannels;

	connectionState: ConnectionState;

	delegate: PusherDelegate;

	globalChannel: GlobalChannel;

	readonly key: string;

	options: PusherClientOptions;

	pongResponseTimeoutInterval: number;

	reconnectAttempts: number;

	socketId: string;

	readonly url: string;

	userDataFetcher: () => PusherPresenceChannelMember;

	connect(): void;

	disconnect(): void;

	handleErrorWithError(error: PusherError): void;

	handleEventWithEvent(event: PusherEvent): void;

	sendEventWithEventDataChannel(event: string, data: any, channel: PusherChannel): void;
}

interface PusherDelegate {

	changedConnectionStateFromTo?(old: ConnectionState, new_: ConnectionState): void;

	debugLogWithMessage?(message: string): void;

	failedToDecryptEventWithEventNameChannelNameData?(eventName: string, channelName: string, data: string): void;

	failedToSubscribeToChannelWithNameResponseDataError?(name: string, response: NSURLResponse, data: string, error: NSError): void;

	receivedError?(error: PusherError): void;

	subscribedToChannelWithName?(name: string): void;
}
declare var PusherDelegate: {

	prototype: PusherDelegate;
};

declare class PusherError extends NSObject {

	static alloc(): PusherError; // inherited from NSObject

	static new(): PusherError; // inherited from NSObject

	readonly codeOC: number;

	readonly message: string;
}

declare class PusherEvent extends NSObject implements NSCopying {

	static alloc(): PusherEvent; // inherited from NSObject

	static new(): PusherEvent; // inherited from NSObject

	readonly channelName: string;

	readonly data: string;

	readonly eventName: string;

	readonly userId: string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	propertyWithKey(key: string): any;
}

declare class PusherPresenceChannel extends PusherChannel {

	static alloc(): PusherPresenceChannel; // inherited from NSObject

	static new(): PusherPresenceChannel; // inherited from NSObject

	members: NSArray<PusherPresenceChannelMember>;

	myId: string;

	onMemberAdded: (p1: PusherPresenceChannelMember) => void;

	onMemberRemoved: (p1: PusherPresenceChannelMember) => void;

	findMemberWithUserId(userId: string): PusherPresenceChannelMember;

	me(): PusherPresenceChannelMember;
}

declare class PusherPresenceChannelMember extends NSObject {

	static alloc(): PusherPresenceChannelMember; // inherited from NSObject

	static new(): PusherPresenceChannelMember; // inherited from NSObject

	readonly userId: string;

	readonly userInfo: any;

	constructor(o: { userId: string; userInfo: any; });

	initWithUserIdUserInfo(userId: string, userInfo: any): this;
}

declare var PusherSwiftVersionNumber: number;

declare var PusherSwiftVersionString: interop.Reference<number>;

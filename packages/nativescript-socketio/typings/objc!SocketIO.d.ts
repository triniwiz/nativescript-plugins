
declare class OnAckCallback extends NSObject {

	static alloc(): OnAckCallback; // inherited from NSObject

	static new(): OnAckCallback; // inherited from NSObject

	timingOutAfterCallback(seconds: number, callback: (p1: NSArray<any>) => void): void;
}

declare class SocketAckEmitter extends NSObject {

	static alloc(): SocketAckEmitter; // inherited from NSObject

	static new(): SocketAckEmitter; // inherited from NSObject

	readonly expected: boolean;

	readonly rawEmitView: SocketRawAckView;

	constructor(o: { socket: SocketIOClient; ackNum: number; });

	initWithSocketAckNum(socket: SocketIOClient, ackNum: number): this;

	with(items: NSArray<any> | any[]): void;
}

declare class SocketAnyEvent extends NSObject {

	static alloc(): SocketAnyEvent; // inherited from NSObject

	static new(): SocketAnyEvent; // inherited from NSObject

	readonly event: string;

	readonly items: NSArray<any>;
}

declare class SocketEngine extends NSObject implements NSURLSessionDelegate {

	static alloc(): SocketEngine; // inherited from NSObject

	static new(): SocketEngine; // inherited from NSObject

	client: SocketEngineClient;

	readonly closed: boolean;

	readonly compress: boolean;

	connectParams: NSDictionary<string, any>;

	readonly connected: boolean;

	readonly cookies: NSArray<NSHTTPCookie>;

	readonly enableSOCKSProxy: boolean;

	readonly engineQueue: NSObject;

	extraHeaders: NSDictionary<string, string>;

	readonly fastUpgrade: boolean;

	readonly forcePolling: boolean;

	readonly forceWebsockets: boolean;

	readonly invalidated: boolean;

	readonly polling: boolean;

	readonly probing: boolean;

	readonly session: NSURLSession;

	readonly sid: string;

	readonly socketPath: string;

	readonly urlPolling: NSURL;

	readonly urlWebSocket: NSURL;

	waitingForPoll: boolean;

	waitingForPost: boolean;

	readonly websocket: boolean;

	readonly wsConnected: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { client: SocketEngineClient; url: NSURL; options: NSDictionary<string, any>; });

	URLSessionDidBecomeInvalidWithError(session: NSURLSession, error: NSError): void;

	URLSessionDidFinishEventsForBackgroundURLSession(session: NSURLSession): void;

	URLSessionDidReceiveChallengeCompletionHandler(session: NSURLSession, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

	URLSessionWithSessionDidBecomeInvalidWithError(session: NSURLSession, error: NSError): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	connect(): void;

	didErrorWithReason(reason: string): void;

	disconnectWithReason(reason: string): void;

	doFastUpgrade(): void;

	flushWaitingForPostToWebSocket(): void;

	initWithClientUrlOptions(client: SocketEngineClient, url: NSURL, options: NSDictionary<string, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	parseEngineData(data: NSData): void;

	parseEngineMessage(message: string): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	writeWithTypeWithDataCompletion(msg: string, type: SocketEnginePacketType, data: NSArray<NSData> | NSData[], completion: () => void): void;
}

interface SocketEngineClient {

	engineDidCloseWithReason(reason: string): void;

	engineDidErrorWithReason(reason: string): void;

	engineDidOpenWithReason(reason: string): void;

	engineDidReceivePing(): void;

	engineDidReceivePong(): void;

	engineDidSendPing(): void;

	engineDidSendPong(): void;

	engineDidWebsocketUpgradeWithHeaders(headers: NSDictionary<string, string>): void;

	parseEngineBinaryData(data: NSData): void;

	parseEngineMessage(msg: string): void;
}
declare var SocketEngineClient: {

	prototype: SocketEngineClient;
};

declare const enum SocketEnginePacketType {

	Open = 0,

	Close = 1,

	Ping = 2,

	Pong = 3,

	Message = 4,

	Upgrade = 5,

	Noop = 6
}

declare class SocketIOClient extends NSObject {

	static alloc(): SocketIOClient; // inherited from NSObject

	static new(): SocketIOClient; // inherited from NSObject

	readonly anyHandler: (p1: SocketAnyEvent) => void;

	readonly nsp: string;

	readonly rawEmitView: SocketRawView;

	readonly sid: string;

	readonly status: SocketIOStatus;

	connectWithPayload(payload: NSDictionary<string, any>): void;

	connectWithPayloadTimeoutAfterWithHandler(payload: NSDictionary<string, any>, timeoutAfter: number, handler: () => void): void;

	didConnectToNamespacePayload(namespace_: string, payload: NSDictionary<string, any>): void;

	didDisconnectWithReason(reason: string): void;

	disconnect(): void;

	emitAckWith(ack: number, items: NSArray<any> | any[]): void;

	handleAckData(ack: number, data: NSArray<any> | any[]): void;

	handleEventDataIsInternalMessageWithAck(event: string, data: NSArray<any> | any[], isInternalMessage: boolean, ack: number): void;

	joinNamespaceWithPayload(payload: NSDictionary<string, any>): void;

	leaveNamespace(): void;

	off(event: string): void;

	offWithId(id: NSUUID): void;

	onAny(handler: (p1: SocketAnyEvent) => void): void;

	onCallback(event: string, callback: (p1: NSArray<any>, p2: SocketAckEmitter) => void): NSUUID;

	onceCallback(event: string, callback: (p1: NSArray<any>, p2: SocketAckEmitter) => void): NSUUID;

	removeAllHandlers(): void;

	setReconnectingWithReason(reason: string): void;
}

declare const enum SocketIOStatus {

	NotConnected = 0,

	Disconnected = 1,

	Connecting = 2,

	Connected = 3
}

declare var SocketIOVersionNumber: number;

declare var SocketIOVersionString: interop.Reference<number>;

declare class SocketManager extends NSObject implements SocketEngineClient {

	static alloc(): SocketManager; // inherited from NSObject

	static new(): SocketManager; // inherited from NSObject

	readonly defaultSocket: SocketIOClient;

	forceNew: boolean;

	handleQueue: NSObject;

	nsps: NSDictionary<string, SocketIOClient>;

	randomizationFactor: number;

	reconnectWait: number;

	reconnectWaitMax: number;

	reconnects: boolean;

	readonly socketURL: NSURL;

	readonly status: SocketIOStatus;

	constructor(o: { socketURL: NSURL; config: NSDictionary<string, any>; });

	connect(): void;

	connectSocketWithPayload(socket: SocketIOClient, payload: NSDictionary<string, any>): void;

	didDisconnectWithReason(reason: string): void;

	disconnect(): void;

	disconnectSocket(socket: SocketIOClient): void;

	disconnectSocketForNamespace(nsp: string): void;

	engineDidCloseWithReason(reason: string): void;

	engineDidErrorWithReason(reason: string): void;

	engineDidOpenWithReason(reason: string): void;

	engineDidReceivePing(): void;

	engineDidReceivePong(): void;

	engineDidSendPing(): void;

	engineDidSendPong(): void;

	engineDidWebsocketUpgradeWithHeaders(headers: NSDictionary<string, string>): void;

	initWithSocketURLConfig(socketURL: NSURL, config: NSDictionary<string, any>): this;

	parseEngineBinaryData(data: NSData): void;

	parseEngineMessage(msg: string): void;

	reconnect(): void;

	removeSocket(socket: SocketIOClient): SocketIOClient;

	socketForNamespace(nsp: string): SocketIOClient;
}

declare class SocketRawAckView extends NSObject {

	static alloc(): SocketRawAckView; // inherited from NSObject

	static new(): SocketRawAckView; // inherited from NSObject

	with(items: NSArray<any> | any[]): void;
}

declare class SocketRawView extends NSObject {

	static alloc(): SocketRawView; // inherited from NSObject

	static new(): SocketRawView; // inherited from NSObject

	emitWith(event: string, items: NSArray<any> | any[]): void;

	emitWithAckWith(event: string, items: NSArray<any> | any[]): OnAckCallback;
}

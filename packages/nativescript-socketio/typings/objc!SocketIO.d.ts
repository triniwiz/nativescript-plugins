declare class OnAckCallback extends NSObject {

	static alloc(): OnAckCallback; // inherited from NSObject

	static new(): OnAckCallback; // inherited from NSObject

	timingOutAfterCallback(seconds: number, callback: (p1: NSArray<any>) => void): void;
}

declare class SSLSecurity extends NSObject {

	static alloc(): SSLSecurity; // inherited from NSObject

	static new(): SSLSecurity; // inherited from NSObject

	constructor(o: { usePublicKeys: boolean; });

	initWithUsePublicKeys(usePublicKeys: boolean): this;
}

declare class SocketAckEmitter extends NSObject {

	static alloc(): SocketAckEmitter; // inherited from NSObject

	static new(): SocketAckEmitter; // inherited from NSObject

	readonly rawEmitView: SocketRawAckView;

	with(items: NSArray<any>): void;
}

declare class SocketAnyEvent extends NSObject {

	static alloc(): SocketAnyEvent; // inherited from NSObject

	static new(): SocketAnyEvent; // inherited from NSObject

	readonly event: string;

	readonly items: NSArray<any>;
}

declare class SocketEngine extends NSObject implements NSURLSessionDelegate, SocketEngineSpec {

	static alloc(): SocketEngine; // inherited from NSObject

	static new(): SocketEngine; // inherited from NSObject

	client: SocketEngineClient; // inherited from SocketEngineSpec

	readonly closed: boolean; // inherited from SocketEngineSpec

	readonly compress: boolean; // inherited from SocketEngineSpec

	connectParams: NSDictionary<string, any>; // inherited from SocketEngineSpec

	readonly connected: boolean; // inherited from SocketEngineSpec

	readonly cookies: NSArray<NSHTTPCookie>; // inherited from SocketEngineSpec

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly engineQueue: NSObject; // inherited from SocketEngineSpec

	extraHeaders: NSDictionary<string, string>; // inherited from SocketEngineSpec

	readonly fastUpgrade: boolean; // inherited from SocketEngineSpec

	readonly forcePolling: boolean; // inherited from SocketEngineSpec

	readonly forceWebsockets: boolean; // inherited from SocketEngineSpec

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly polling: boolean; // inherited from SocketEngineSpec

	readonly probing: boolean; // inherited from SocketEngineSpec

	readonly sid: string; // inherited from SocketEngineSpec

	readonly socketPath: string; // inherited from SocketEngineSpec

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly urlPolling: NSURL; // inherited from SocketEngineSpec

	readonly urlWebSocket: NSURL; // inherited from SocketEngineSpec

	readonly websocket: boolean; // inherited from SocketEngineSpec

	readonly ws: WebSocket; // inherited from SocketEngineSpec

	readonly  // inherited from NSObjectProtocol

	constructor(o: { client: SocketEngineClient; url: NSURL; options: NSDictionary<string, any>; }); // inherited from SocketEngineSpec

	URLSessionDidBecomeInvalidWithError(session: NSURLSession, error: NSError): void;

	URLSessionDidFinishEventsForBackgroundURLSession(session: NSURLSession): void;

	URLSessionDidReceiveChallengeCompletionHandler(session: NSURLSession, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

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

	writeWithTypeWithData(msg: string, type: SocketEnginePacketType, data: NSArray<NSData>): void;
}

interface SocketEngineClient {

	engineDidCloseWithReason(reason: string): void;

	engineDidErrorWithReason(reason: string): void;

	engineDidOpenWithReason(reason: string): void;

	engineDidReceivePong(): void;

	engineDidSendPing(): void;

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

interface SocketEngineSpec {

	client: SocketEngineClient;

	closed: boolean;

	compress: boolean;

	connectParams: NSDictionary<string, any>;

	connected: boolean;

	cookies: NSArray<NSHTTPCookie>;

	engineQueue: NSObject;

	extraHeaders: NSDictionary<string, string>;

	fastUpgrade: boolean;

	forcePolling: boolean;

	forceWebsockets: boolean;

	polling: boolean;

	probing: boolean;

	sid: string;

	socketPath: string;

	urlPolling: NSURL;

	urlWebSocket: NSURL;

	websocket: boolean;

	ws: WebSocket;

	connect(): void;

	didErrorWithReason(reason: string): void;

	disconnectWithReason(reason: string): void;

	doFastUpgrade(): void;

	flushWaitingForPostToWebSocket(): void;

	initWithClientUrlOptions?(client: SocketEngineClient, url: NSURL, options: NSDictionary<string, any>): SocketEngineSpec;

	parseEngineData(data: NSData): void;

	parseEngineMessage(message: string): void;

	writeWithTypeWithData(msg: string, type: SocketEnginePacketType, data: NSArray<NSData>): void;
}
declare var SocketEngineSpec: {

	prototype: SocketEngineSpec;
};

declare class SocketIOClient extends NSObject {

	static alloc(): SocketIOClient; // inherited from NSObject

	static new(): SocketIOClient; // inherited from NSObject

	readonly manager: SocketManagerSpec;

	readonly nsp: string;

	readonly rawEmitView: SocketRawView;

	readonly sid: string;

	readonly status: SocketIOStatus;

	constructor(o: { manager: SocketManagerSpec; nsp: string; });

	connect(): void;

	connectWithTimeoutAfterWithHandler(timeoutAfter: number, handler: () => void): void;

	disconnect(): void;

	emitWith(event: string, items: NSArray<any>): void;

	emitWithAckWith(event: string, items: NSArray<any>): OnAckCallback;

	handleAckData(ack: number, data: NSArray<any>): void;

	handleEventDataIsInternalMessageWithAck(event: string, data: NSArray<any>, isInternalMessage: boolean, ack: number): void;

	initWithManagerNsp(manager: SocketManagerSpec, nsp: string): this;

	joinNamespace(): void;

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

declare class SocketManager extends NSObject implements SocketManagerSpec {

	static alloc(): SocketManager; // inherited from NSObject

	static new(): SocketManager; // inherited from NSObject

	readonly defaultSocket: SocketIOClient; // inherited from SocketManagerSpec

	engine: SocketEngineSpec; // inherited from SocketManagerSpec

	forceNew: boolean; // inherited from SocketManagerSpec

	handleQueue: NSObject; // inherited from SocketManagerSpec

	nsps: NSDictionary<string, SocketIOClient>; // inherited from SocketManagerSpec

	reconnectWait: number; // inherited from SocketManagerSpec

	reconnects: boolean; // inherited from SocketManagerSpec

	readonly socketURL: NSURL; // inherited from SocketManagerSpec

	readonly status: SocketIOStatus; // inherited from SocketManagerSpec

	constructor(o: { socketURL: NSURL; config: NSDictionary<string, any>; });

	connect(): void;

	connectSocket(socket: SocketIOClient): void;

	didDisconnectWithReason(reason: string): void;

	disconnect(): void;

	disconnectSocket(socket: SocketIOClient): void;

	disconnectSocketForNamespace(nsp: string): void;

	emitAllWithItems(event: string, items: NSArray<any>): void;

	engineDidCloseWithReason(reason: string): void;

	engineDidErrorWithReason(reason: string): void;

	engineDidOpenWithReason(reason: string): void;

	engineDidReceivePong(): void;

	engineDidSendPing(): void;

	initWithSocketURLConfig(socketURL: NSURL, config: NSDictionary<string, any>): this;

	parseEngineBinaryData(data: NSData): void;

	parseEngineMessage(msg: string): void;

	reconnect(): void;

	removeSocket(socket: SocketIOClient): SocketIOClient;

	socketForNamespace(nsp: string): SocketIOClient;
}

interface SocketManagerSpec extends SocketEngineClient {

	defaultSocket: SocketIOClient;

	engine: SocketEngineSpec;

	forceNew: boolean;

	handleQueue: NSObject;

	nsps: NSDictionary<string, SocketIOClient>;

	reconnectWait: number;

	reconnects: boolean;

	socketURL: NSURL;

	status: SocketIOStatus;

	connect(): void;

	connectSocket(socket: SocketIOClient): void;

	didDisconnectWithReason(reason: string): void;

	disconnect(): void;

	disconnectSocket(socket: SocketIOClient): void;

	disconnectSocketForNamespace(nsp: string): void;

	emitAllWithItems(event: string, items: NSArray<any>): void;

	reconnect(): void;

	removeSocket(socket: SocketIOClient): SocketIOClient;

	socketForNamespace(nsp: string): SocketIOClient;
}
declare var SocketManagerSpec: {

	prototype: SocketManagerSpec;
};

declare class SocketRawAckView extends NSObject {

	static alloc(): SocketRawAckView; // inherited from NSObject

	static new(): SocketRawAckView; // inherited from NSObject

	with(items: NSArray<any>): void;
}

declare class SocketRawView extends NSObject {

	static alloc(): SocketRawView; // inherited from NSObject

	static new(): SocketRawView; // inherited from NSObject

	emitWith(event: string, items: NSArray<any>): void;

	emitWithAckWith(event: string, items: NSArray<any>): OnAckCallback;
}
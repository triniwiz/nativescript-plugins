declare class NSCSocketIO extends NSObject {

	static alloc(): NSCSocketIO; // inherited from NSObject

	static new(): NSCSocketIO; // inherited from NSObject

	readonly connected: boolean;

	readonly manager: SocketManager;

	readonly socket: SocketIOClient;

	constructor();

	constructor(o: { manager: SocketManager; socket: SocketIOClient; });

	connect(payload: NSDictionary<string, any>): void;

	disconnect(): void;

	emit(event: string, data: NSArray<any> | any[], ack: (p1: NSArray<any>) => void): void;

	init(url: string, config: NSCSocketIOConfiguration): this;

	initWithManagerSocket(manager: SocketManager, socket: SocketIOClient): this;

	joinNamespaceWithNsp(nsp: string): NSCSocketIO;

	leaveNamespace(): void;

	off(event: string): void;

	onCallback(event: string, callback: (p1: NSArray<any>, p2: (p1: NSArray<any>) => void) => void): () => void;

	onceCallback(event: string, callback: (p1: NSArray<any>, p2: (p1: NSArray<any>) => void) => void): () => void;
}

declare class NSCSocketIOConfiguration extends NSObject {

	static alloc(): NSCSocketIOConfiguration; // inherited from NSObject

	static new(): NSCSocketIOConfiguration; // inherited from NSObject

	compress: boolean;

	connectParams: NSDictionary<any, any>;

	cookies: NSArray<NSHTTPCookie>;

	enableSOCKSProxy: boolean;

	extraHeaders: NSDictionary<string, string>;

	forceNew: boolean;

	forcePolling: boolean;

	forceWebsockets: boolean;

	log: boolean;

	path: string;

	reconnectAttempts: number;

	reconnects: boolean;

	secure: boolean;
}
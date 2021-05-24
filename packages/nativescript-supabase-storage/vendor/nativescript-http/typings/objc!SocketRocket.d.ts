
declare var SRHTTPResponseErrorKey: string;

declare const enum SRReadyState {

	R_CONNECTING = 0,

	R_OPEN = 1,

	R_CLOSING = 2,

	R_CLOSED = 3
}

declare const enum SRStatusCode {

	CodeNormal = 1000,

	CodeGoingAway = 1001,

	CodeProtocolError = 1002,

	CodeUnhandledType = 1003,

	NoStatusReceived = 1005,

	CodeAbnormal = 1006,

	CodeInvalidUTF8 = 1007,

	CodePolicyViolated = 1008,

	CodeMessageTooBig = 1009,

	CodeMissingExtension = 1010,

	CodeInternalError = 1011,

	CodeServiceRestart = 1012,

	CodeTryAgainLater = 1013,

	CodeTLSHandshake = 1015
}

declare class SRWebSocket extends NSObject implements NSStreamDelegate {

	static alloc(): SRWebSocket; // inherited from NSObject

	static new(): SRWebSocket; // inherited from NSObject

	delegate: SRWebSocketDelegate;

	readonly protocol: string;

	readonly readyState: SRReadyState;

	readonly receivedHTTPHeaders: any;

	requestCookies: NSArray<any>;

	readonly url: NSURL;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { URL: NSURL; });

	constructor(o: { URL: NSURL; protocols: NSArray<any> | any[]; });

	constructor(o: { URL: NSURL; protocols: NSArray<any> | any[]; allowsUntrustedSSLCertificates: boolean; });

	constructor(o: { URLRequest: NSURLRequest; });

	constructor(o: { URLRequest: NSURLRequest; protocols: NSArray<any> | any[]; });

	constructor(o: { URLRequest: NSURLRequest; protocols: NSArray<any> | any[]; allowsUntrustedSSLCertificates: boolean; });

	class(): typeof NSObject;

	close(): void;

	closeWithCodeReason(code: number, reason: string): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithURL(url: NSURL): this;

	initWithURLProtocols(url: NSURL, protocols: NSArray<any> | any[]): this;

	initWithURLProtocolsAllowsUntrustedSSLCertificates(url: NSURL, protocols: NSArray<any> | any[], allowsUntrustedSSLCertificates: boolean): this;

	initWithURLRequest(request: NSURLRequest): this;

	initWithURLRequestProtocols(request: NSURLRequest, protocols: NSArray<any> | any[]): this;

	initWithURLRequestProtocolsAllowsUntrustedSSLCertificates(request: NSURLRequest, protocols: NSArray<any> | any[], allowsUntrustedSSLCertificates: boolean): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	open(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scheduleInRunLoopForMode(aRunLoop: NSRunLoop, mode: string): void;

	self(): this;

	send(data: any): void;

	sendPing(data: NSData): void;

	setDelegateDispatchQueue(queue: NSObject): void;

	setDelegateOperationQueue(queue: NSOperationQueue): void;

	streamHandleEvent(aStream: NSStream, eventCode: NSStreamEvent): void;

	unscheduleFromRunLoopForMode(aRunLoop: NSRunLoop, mode: string): void;
}

interface SRWebSocketDelegate extends NSObjectProtocol {

	webSocketDidCloseWithCodeReasonWasClean?(webSocket: SRWebSocket, code: number, reason: string, wasClean: boolean): void;

	webSocketDidFailWithError?(webSocket: SRWebSocket, error: NSError): void;

	webSocketDidOpen?(webSocket: SRWebSocket): void;

	webSocketDidReceiveMessage(webSocket: SRWebSocket, message: any): void;

	webSocketDidReceivePong?(webSocket: SRWebSocket, pongPayload: NSData): void;

	webSocketShouldConvertTextFrameToString?(webSocket: SRWebSocket): boolean;
}
declare var SRWebSocketDelegate: {

	prototype: SRWebSocketDelegate;
};

declare var SRWebSocketErrorDomain: string;

declare var SocketRocketVersionNumber: number;

declare var SocketRocketVersionString: interop.Reference<number>;

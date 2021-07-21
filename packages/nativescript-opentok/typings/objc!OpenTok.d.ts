
interface OTAudioBus extends NSObjectProtocol {

	readRenderDataNumberOfSamples(data: interop.Pointer | interop.Reference<any>, count: number): number;

	writeCaptureDataNumberOfSamples(data: interop.Pointer | interop.Reference<any>, count: number): void;
}
declare var OTAudioBus: {

	prototype: OTAudioBus;
};

interface OTAudioDevice extends NSObjectProtocol {

	captureFormat(): OTAudioFormat;

	captureIsAvailable(): boolean;

	captureIsInitialized(): boolean;

	estimatedCaptureDelay(): number;

	estimatedRenderDelay(): number;

	initializeCapture(): boolean;

	initializeRendering(): boolean;

	isCapturing(): boolean;

	isRendering(): boolean;

	renderFormat(): OTAudioFormat;

	renderingIsAvailable(): boolean;

	renderingIsInitialized(): boolean;

	setAudioBus(audioBus: OTAudioBus): boolean;

	startCapture(): boolean;

	startRendering(): boolean;

	stopCapture(): boolean;

	stopRendering(): boolean;
}
declare var OTAudioDevice: {

	prototype: OTAudioDevice;
};

declare class OTAudioDeviceManager extends NSObject {

	static alloc(): OTAudioDeviceManager; // inherited from NSObject

	static currentAudioDevice(): OTAudioDevice;

	static new(): OTAudioDeviceManager; // inherited from NSObject

	static setAudioDevice(device: OTAudioDevice): void;
}

declare class OTAudioFormat extends NSObject {

	static alloc(): OTAudioFormat; // inherited from NSObject

	static new(): OTAudioFormat; // inherited from NSObject

	numChannels: number;

	sampleRate: number;
}

declare const enum OTCameraCaptureFrameRate {

	Rate30FPS = 30,

	Rate15FPS = 15,

	Rate7FPS = 7,

	Rate1FPS = 1
}

declare const enum OTCameraCaptureResolution {

	Low = 0,

	Medium = 1,

	High = 2
}

declare class OTConnection extends NSObject {

	static alloc(): OTConnection; // inherited from NSObject

	static new(): OTConnection; // inherited from NSObject

	readonly connectionId: string;

	readonly creationTime: Date;

	readonly data: string;
}

declare class OTError extends NSError {

	static _stds_invalidJSONFieldError(fieldName: string): OTError; // inherited from NSError

	static _stds_jweError(): OTError; // inherited from NSError

	static _stds_missingJSONFieldError(fieldName: string): OTError; // inherited from NSError

	static _stds_timedOutError(): OTError; // inherited from NSError

	static alloc(): OTError; // inherited from NSObject

	static awsmtl_modelErrorWithException(exception: NSException): OTError; // inherited from NSError

	static errorWithDomainCodeUserInfo(domain: string, code: number, dict: NSDictionary<string, any>): OTError; // inherited from NSError

	static fileProviderErrorForCollisionWithItem(existingItem: NSFileProviderItem): OTError; // inherited from NSError

	static fileProviderErrorForNonExistentItemWithIdentifier(itemIdentifier: string): OTError; // inherited from NSError

	static new(): OTError; // inherited from NSObject
}

declare class OTForceMuteOptions extends NSObject {

	static alloc(): OTForceMuteOptions; // inherited from NSObject

	static new(): OTForceMuteOptions; // inherited from NSObject
}

declare class OTMuteForcedInfo extends NSObject {

	static alloc(): OTMuteForcedInfo; // inherited from NSObject

	static new(): OTMuteForcedInfo; // inherited from NSObject
}

declare const enum OTPixelFormat {

	I420 = 1228157488,

	ARGB = 1095911234,

	NV12 = 1314271538
}

declare class OTPublisher extends OTPublisherKit {

	static alloc(): OTPublisher; // inherited from NSObject

	static new(): OTPublisher; // inherited from NSObject

	cameraPosition: AVCaptureDevicePosition;

	readonly view: UIView;

	viewScaleBehavior: OTVideoViewScaleBehavior;

	constructor(o: { delegate: OTPublisherKitDelegate; name: string; cameraResolution: OTCameraCaptureResolution; cameraFrameRate: OTCameraCaptureFrameRate; });

	constructor(o: { delegate: OTPublisherKitDelegate; settings: OTPublisherSettings; });

	initWithDelegateNameCameraResolutionCameraFrameRate(delegate: OTPublisherKitDelegate, name: string, cameraResolution: OTCameraCaptureResolution, cameraFrameRate: OTCameraCaptureFrameRate): this;

	initWithDelegateSettings(delegate: OTPublisherKitDelegate, settings: OTPublisherSettings): this;
}

interface OTPublisherDelegate extends OTPublisherKitDelegate {

	publisherDidChangeCameraPosition?(publisher: OTPublisher, position: AVCaptureDevicePosition): void;
}
declare var OTPublisherDelegate: {

	prototype: OTPublisherDelegate;
};

declare const enum OTPublisherErrorCode {

	PublisherSuccess = 0,

	SessionDisconnected = 1010,

	PublisherInternalError = 2000,

	PublisherWebRTCError = 1610
}

declare class OTPublisherKit extends NSObject {

	static alloc(): OTPublisherKit; // inherited from NSObject

	static new(): OTPublisherKit; // inherited from NSObject

	audioFallbackEnabled: boolean;

	audioLevelDelegate: OTPublisherKitAudioLevelDelegate;

	delegate: OTPublisherKitDelegate;

	readonly name: string;

	networkStatsDelegate: OTPublisherKitNetworkStatsDelegate;

	publishAudio: boolean;

	publishVideo: boolean;

	rtcStatsReportDelegate: OTPublisherKitRtcStatsReportDelegate;

	readonly session: OTSession;

	readonly stream: OTStream;

	videoCapture: OTVideoCapture;

	videoRender: OTVideoRender;

	videoType: OTPublisherKitVideoType;

	constructor(o: { delegate: OTPublisherKitDelegate; });

	constructor(o: { delegate: OTPublisherKitDelegate; name: string; });

	constructor(o: { delegate: OTPublisherKitDelegate; name: string; audioTrack: boolean; videoTrack: boolean; });

	constructor(o: { delegate: OTPublisherKitDelegate; settings: OTPublisherKitSettings; });

	getRtcStatsReport(): void;

	initWithDelegate(delegate: OTPublisherKitDelegate): this;

	initWithDelegateName(delegate: OTPublisherKitDelegate, name: string): this;

	initWithDelegateNameAudioTrackVideoTrack(delegate: OTPublisherKitDelegate, name: string, audioTrack: boolean, videoTrack: boolean): this;

	initWithDelegateSettings(delegate: OTPublisherKitDelegate, settings: OTPublisherKitSettings): this;
}

interface OTPublisherKitAudioLevelDelegate extends NSObjectProtocol {

	publisherAudioLevelUpdated(publisher: OTPublisherKit, audioLevel: number): void;
}
declare var OTPublisherKitAudioLevelDelegate: {

	prototype: OTPublisherKitAudioLevelDelegate;
};

declare class OTPublisherKitAudioNetworkStats extends NSObject {

	static alloc(): OTPublisherKitAudioNetworkStats; // inherited from NSObject

	static new(): OTPublisherKitAudioNetworkStats; // inherited from NSObject

	readonly audioBytesSent: number;

	readonly audioPacketsLost: number;

	readonly audioPacketsSent: number;

	readonly connectionId: string;

	readonly startTime: number;

	readonly subscriberId: string;

	readonly timestamp: number;

	constructor(o: { connectionId: string; subscriberId: string; packetsLost: number; packetsSent: number; bytesSent: number; timestamp: number; startTime: number; });

	initWithConnectionIdSubscriberIdPacketsLostPacketsSentBytesSentTimestampStartTime(connectionId: string, subscriberId: string, packetsLost: number, packetsSent: number, bytesSent: number, timestamp: number, startTime: number): this;
}

interface OTPublisherKitDelegate extends NSObjectProtocol {

	publisherDidFailWithError(publisher: OTPublisherKit, error: OTError): void;

	publisherMuteForced?(publisher: OTPublisherKit, muteForcedInfo: OTMuteForcedInfo): void;

	publisherStreamCreated?(publisher: OTPublisherKit, stream: OTStream): void;

	publisherStreamDestroyed?(publisher: OTPublisherKit, stream: OTStream): void;
}
declare var OTPublisherKitDelegate: {

	prototype: OTPublisherKitDelegate;
};

interface OTPublisherKitNetworkStatsDelegate extends NSObjectProtocol {

	publisherAudioNetworkStatsUpdated?(publisher: OTPublisherKit, stats: NSArray<OTPublisherKitAudioNetworkStats> | OTPublisherKitAudioNetworkStats[]): void;

	publisherVideoNetworkStatsUpdated?(publisher: OTPublisherKit, stats: NSArray<OTPublisherKitVideoNetworkStats> | OTPublisherKitVideoNetworkStats[]): void;
}
declare var OTPublisherKitNetworkStatsDelegate: {

	prototype: OTPublisherKitNetworkStatsDelegate;
};

interface OTPublisherKitRtcStatsReportDelegate extends NSObjectProtocol {

	publisherRtcStatsReport?(publisher: OTPublisherKit, stats: NSArray<OTPublisherRtcStats> | OTPublisherRtcStats[]): void;
}
declare var OTPublisherKitRtcStatsReportDelegate: {

	prototype: OTPublisherKitRtcStatsReportDelegate;
};

declare class OTPublisherKitSettings extends NSObject {

	static alloc(): OTPublisherKitSettings; // inherited from NSObject

	static new(): OTPublisherKitSettings; // inherited from NSObject

	audioBitrate: number;

	audioTrack: boolean;

	name: string;

	videoTrack: boolean;
}

declare class OTPublisherKitVideoNetworkStats extends NSObject {

	static alloc(): OTPublisherKitVideoNetworkStats; // inherited from NSObject

	static new(): OTPublisherKitVideoNetworkStats; // inherited from NSObject

	readonly connectionId: string;

	readonly startTime: number;

	readonly subscriberId: string;

	readonly timestamp: number;

	readonly videoBytesSent: number;

	readonly videoPacketsLost: number;

	readonly videoPacketsSent: number;

	constructor(o: { connectionId: string; subscriberId: string; packetsLost: number; packetsSent: number; bytesSent: number; timestamp: number; startTime: number; });

	initWithConnectionIdSubscriberIdPacketsLostPacketsSentBytesSentTimestampStartTime(connectionId: string, subscriberId: string, packetsLost: number, packetsSent: number, bytesSent: number, timestamp: number, startTime: number): this;
}

declare const enum OTPublisherKitVideoType {

	Camera = 1,

	Screen = 2
}

declare class OTPublisherRtcStats extends NSObject {

	static alloc(): OTPublisherRtcStats; // inherited from NSObject

	static new(): OTPublisherRtcStats; // inherited from NSObject

	connectionId: string;

	jsonArrayOfReports: string;
}

declare class OTPublisherSettings extends OTPublisherKitSettings {

	static alloc(): OTPublisherSettings; // inherited from NSObject

	static new(): OTPublisherSettings; // inherited from NSObject

	cameraFrameRate: OTCameraCaptureFrameRate;

	cameraResolution: OTCameraCaptureResolution;

	videoCapture: OTVideoCapture;
}

declare class OTSession extends NSObject {

	static alloc(): OTSession; // inherited from NSObject

	static new(): OTSession; // inherited from NSObject

	apiQueue: NSObject;

	readonly capabilities: OTSessionCapabilities;

	readonly connection: OTConnection;

	delegate: OTSessionDelegate;

	readonly sessionConnectionStatus: OTSessionConnectionStatus;

	readonly sessionId: string;

	readonly streams: NSDictionary<string, OTStream>;

	constructor(o: { apiKey: string; sessionId: string; delegate: OTSessionDelegate; });

	constructor(o: { apiKey: string; sessionId: string; delegate: OTSessionDelegate; settings: OTSessionSettings; });

	connectWithTokenError(token: string, error: interop.Pointer | interop.Reference<OTError>): void;

	disconnect(error: interop.Pointer | interop.Reference<OTError>): void;

	forceMuteAllOptionsError(excludedStreams: NSArray<OTStream> | OTStream[], options: OTForceMuteOptions, error: interop.Pointer | interop.Reference<OTError>): void;

	forceMuteStreamOptionsError(stream: OTStream, options: OTForceMuteOptions, error: interop.Pointer | interop.Reference<OTError>): void;

	initWithApiKeySessionIdDelegate(apiKey: string, sessionId: string, delegate: OTSessionDelegate): this;

	initWithApiKeySessionIdDelegateSettings(apiKey: string, sessionId: string, delegate: OTSessionDelegate, settings: OTSessionSettings): this;

	publish(publisher: OTPublisherKit): void;

	publishError(publisher: OTPublisherKit, error: interop.Pointer | interop.Reference<OTError>): void;

	reportIssue(issueId: interop.Pointer | interop.Reference<string>): void;

	signalWithTypeStringConnectionError(type: string, string: string, connection: OTConnection, error: interop.Pointer | interop.Reference<OTError>): void;

	signalWithTypeStringConnectionRetryAfterReconnectError(type: string, string: string, connection: OTConnection, retryAfterReconnect: boolean, error: interop.Pointer | interop.Reference<OTError>): void;

	subscribe(subscriber: OTSubscriberKit): void;

	subscribeError(subscriber: OTSubscriberKit, error: interop.Pointer | interop.Reference<OTError>): void;

	unpublish(publisher: OTPublisherKit): void;

	unpublishError(publisher: OTPublisherKit, error: interop.Pointer | interop.Reference<OTError>): void;

	unsubscribe(subscriber: OTSubscriberKit): void;

	unsubscribeError(subscriber: OTSubscriberKit, error: interop.Pointer | interop.Reference<OTError>): void;
}

declare class OTSessionCapabilities extends NSObject {

	static alloc(): OTSessionCapabilities; // inherited from NSObject

	static new(): OTSessionCapabilities; // inherited from NSObject

	readonly canForceMute: boolean;

	readonly canPublish: boolean;

	readonly canSubscribe: boolean;

	constructor(o: { canPublish: boolean; canSubscribe: boolean; canForceMute: boolean; });

	initWithCanPublishCanSubscribeCanForceMute(publish: boolean, subscribe: boolean, forceMute: boolean): this;
}

declare const enum OTSessionConnectionStatus {

	NotConnected = 0,

	Connected = 1,

	Connecting = 2,

	Reconnecting = 3,

	Disconnecting = 4,

	Failed = 5
}

interface OTSessionDelegate extends NSObjectProtocol {

	sessionArchiveStartedWithIdName?(session: OTSession, archiveId: string, name: string): void;

	sessionArchiveStoppedWithId?(session: OTSession, archiveId: string): void;

	sessionConnectionCreated?(session: OTSession, connection: OTConnection): void;

	sessionConnectionDestroyed?(session: OTSession, connection: OTConnection): void;

	sessionDidBeginReconnecting?(session: OTSession): void;

	sessionDidConnect(session: OTSession): void;

	sessionDidDisconnect(session: OTSession): void;

	sessionDidFailWithError(session: OTSession, error: OTError): void;

	sessionDidReconnect?(session: OTSession): void;

	sessionMuteForced?(session: OTSession, muteForcedInfo: OTMuteForcedInfo): void;

	sessionReceivedSignalTypeFromConnectionWithString?(session: OTSession, type: string, connection: OTConnection, string: string): void;

	sessionStreamCreated(session: OTSession, stream: OTStream): void;

	sessionStreamDestroyed(session: OTSession, stream: OTStream): void;
}
declare var OTSessionDelegate: {

	prototype: OTSessionDelegate;
};

declare const enum OTSessionErrorCode {

	SessionSuccess = 0,

	AuthorizationFailure = 1004,

	ErrorInvalidSession = 1005,

	ConnectionFailed = 1006,

	NullOrInvalidParameter = 1011,

	NotConnected = 1010,

	SessionIllegalState = 1015,

	NoMessagingServer = 1503,

	ConnectionRefused = 1023,

	SessionStateFailed = 1020,

	P2PSessionMaxParticipants = 1403,

	SessionConnectionTimeout = 1021,

	SessionInternalError = 2000,

	SessionInvalidSignalType = 1461,

	SessionSignalDataTooLong = 1413,

	SessionUnableToForceMute = 1540,

	ConnectionDropped = 1022,

	SessionSubscriberNotFound = 1112,

	SessionPublisherNotFound = 1113,

	SessionBlockedCountry = 1026,

	SessionConnectionLimitExceeded = 1027
}

declare class OTSessionICEConfig extends NSObject {

	static alloc(): OTSessionICEConfig; // inherited from NSObject

	static maxTURNServersLimit(): number;

	static new(): OTSessionICEConfig; // inherited from NSObject

	readonly customIceServers: NSArray<any>;

	includeServers: OTSessionICEIncludeServers;

	transportPolicy: OTSessionICETransportPolicy;

	addICEServerWithURLUserNameCredentialError(turn_url: string, username: string, credential: string): void;
}

declare const enum OTSessionICEIncludeServers {

	All = 0,

	Custom = 1
}

declare const enum OTSessionICETransportPolicy {

	All = 0,

	Relay = 1
}

declare class OTSessionSettings extends NSObject {

	static alloc(): OTSessionSettings; // inherited from NSObject

	static new(): OTSessionSettings; // inherited from NSObject

	apiURL: NSURL;

	connectionEventsSuppressed: boolean;

	iceConfig: OTSessionICEConfig;

	ipWhitelist: boolean;

	proxyURL: string;
}

declare class OTStream extends NSObject {

	static alloc(): OTStream; // inherited from NSObject

	static new(): OTStream; // inherited from NSObject

	readonly connection: OTConnection;

	readonly creationTime: Date;

	readonly hasAudio: boolean;

	readonly hasVideo: boolean;

	readonly name: string;

	readonly session: OTSession;

	readonly streamId: string;

	readonly videoDimensions: CGSize;

	readonly videoType: OTStreamVideoType;
}

declare const enum OTStreamVideoType {

	Camera = 1,

	Screen = 2,

	Custom = 3
}

declare class OTSubscriber extends OTSubscriberKit {

	static alloc(): OTSubscriber; // inherited from NSObject

	static new(): OTSubscriber; // inherited from NSObject

	readonly view: UIView;

	viewScaleBehavior: OTVideoViewScaleBehavior;
}

interface OTSubscriberDelegate extends OTSubscriberKitDelegate {

	subscriberVideoDataReceived?(subscriber: OTSubscriber): void;
}
declare var OTSubscriberDelegate: {

	prototype: OTSubscriberDelegate;
};

declare const enum OTSubscriberErrorCode {

	SubscriberSuccess = 0,

	ConnectionTimedOut = 1542,

	SubscriberSessionDisconnected = 1010,

	SubscriberWebRTCError = 1600,

	SubscriberServerCannotFindStream = 1604,

	SubscriberStreamLimitExceeded = 1605,

	SubscriberInternalError = 2000
}

declare class OTSubscriberKit extends NSObject {

	static alloc(): OTSubscriberKit; // inherited from NSObject

	static new(): OTSubscriberKit; // inherited from NSObject

	audioLevelDelegate: OTSubscriberKitAudioLevelDelegate;

	delegate: OTSubscriberKitDelegate;

	networkStatsDelegate: OTSubscriberKitNetworkStatsDelegate;

	preferredFrameRate: number;

	preferredResolution: CGSize;

	rtcStatsReportDelegate: OTSubscriberKitRtcStatsReportDelegate;

	readonly session: OTSession;

	readonly stream: OTStream;

	subscribeToAudio: boolean;

	subscribeToVideo: boolean;

	videoRender: OTVideoRender;

	constructor(o: { stream: OTStream; delegate: OTSubscriberKitDelegate; });

	getRtcStatsReport(): void;

	initWithStreamDelegate(stream: OTStream, delegate: OTSubscriberKitDelegate): this;
}

interface OTSubscriberKitAudioLevelDelegate extends NSObjectProtocol {

	subscriberAudioLevelUpdated(subscriber: OTSubscriberKit, audioLevel: number): void;
}
declare var OTSubscriberKitAudioLevelDelegate: {

	prototype: OTSubscriberKitAudioLevelDelegate;
};

declare class OTSubscriberKitAudioNetworkStats extends NSObject {

	static alloc(): OTSubscriberKitAudioNetworkStats; // inherited from NSObject

	static new(): OTSubscriberKitAudioNetworkStats; // inherited from NSObject

	readonly audioBytesReceived: number;

	readonly audioPacketsLost: number;

	readonly audioPacketsReceived: number;

	readonly timestamp: number;

	constructor(o: { packetsLost: number; packetsReceived: number; bytesReceived: number; timestamp: number; });

	initWithPacketsLostPacketsReceivedBytesReceivedTimestamp(packetsLost: number, packetsReceived: number, bytesReceived: number, timestamp: number): this;
}

interface OTSubscriberKitDelegate extends NSObjectProtocol {

	subscriberDidConnectToStream(subscriber: OTSubscriberKit): void;

	subscriberDidDisconnectFromStream?(subscriber: OTSubscriberKit): void;

	subscriberDidFailWithError(subscriber: OTSubscriberKit, error: OTError): void;

	subscriberDidReconnectToStream?(subscriber: OTSubscriberKit): void;

	subscriberVideoDisableWarning?(subscriber: OTSubscriberKit): void;

	subscriberVideoDisableWarningLifted?(subscriber: OTSubscriberKit): void;

	subscriberVideoDisabledReason?(subscriber: OTSubscriberKit, reason: OTSubscriberVideoEventReason): void;

	subscriberVideoEnabledReason?(subscriber: OTSubscriberKit, reason: OTSubscriberVideoEventReason): void;
}
declare var OTSubscriberKitDelegate: {

	prototype: OTSubscriberKitDelegate;
};

interface OTSubscriberKitNetworkStatsDelegate extends NSObjectProtocol {

	subscriberAudioNetworkStatsUpdated?(subscriber: OTSubscriberKit, stats: OTSubscriberKitAudioNetworkStats): void;

	subscriberVideoNetworkStatsUpdated?(subscriber: OTSubscriberKit, stats: OTSubscriberKitVideoNetworkStats): void;
}
declare var OTSubscriberKitNetworkStatsDelegate: {

	prototype: OTSubscriberKitNetworkStatsDelegate;
};

interface OTSubscriberKitRtcStatsReportDelegate extends NSObjectProtocol {

	subscriberRtcStatsReport?(subscriber: OTSubscriberKit, jsonArrayOfReports: string): void;
}
declare var OTSubscriberKitRtcStatsReportDelegate: {

	prototype: OTSubscriberKitRtcStatsReportDelegate;
};

declare class OTSubscriberKitVideoNetworkStats extends NSObject {

	static alloc(): OTSubscriberKitVideoNetworkStats; // inherited from NSObject

	static new(): OTSubscriberKitVideoNetworkStats; // inherited from NSObject

	readonly timestamp: number;

	readonly videoBytesReceived: number;

	readonly videoPacketsLost: number;

	readonly videoPacketsReceived: number;

	constructor(o: { packetsLost: number; packetsReceived: number; bytesReceived: number; timestamp: number; });

	initWithPacketsLostPacketsReceivedBytesReceivedTimestamp(packetsLost: number, packetsReceived: number, bytesReceived: number, timestamp: number): this;
}

declare const enum OTSubscriberVideoEventReason {

	PublisherPropertyChanged = 1,

	SubscriberPropertyChanged = 2,

	QualityChanged = 3,

	CodecNotSupported = 4
}

interface OTVideoCapture extends NSObjectProtocol {

	videoCaptureConsumer: OTVideoCaptureConsumer;

	captureSettings(videoFormat: OTVideoFormat): number;

	initCapture(): void;

	isCaptureStarted(): boolean;

	releaseCapture(): void;

	startCapture(): number;

	stopCapture(): number;
}
declare var OTVideoCapture: {

	prototype: OTVideoCapture;
};

interface OTVideoCaptureConsumer extends NSObjectProtocol {

	consumeFrame(frame: OTVideoFrame): void;

	consumeImageBufferOrientationTimestampMetadata(frame: any, orientation: OTVideoOrientation, ts: CMTime, metadata: NSData): boolean;
}
declare var OTVideoCaptureConsumer: {

	prototype: OTVideoCaptureConsumer;
};

declare class OTVideoFormat extends NSObject {

	static alloc(): OTVideoFormat; // inherited from NSObject

	static new(): OTVideoFormat; // inherited from NSObject

	static videoFormatARGBWithWidthHeight(width: number, height: number): OTVideoFormat;

	static videoFormatI420WithWidthHeight(width: number, height: number): OTVideoFormat;

	static videoFormatNV12WithWidthHeight(width: number, height: number): OTVideoFormat;

	bytesPerRow: NSMutableArray<any>;

	estimatedCaptureDelay: number;

	estimatedFramesPerSecond: number;

	imageHeight: number;

	imageWidth: number;

	name: string;

	pixelFormat: OTPixelFormat;
}

declare class OTVideoFrame extends NSObject {

	static alloc(): OTVideoFrame; // inherited from NSObject

	static new(): OTVideoFrame; // inherited from NSObject

	format: OTVideoFormat;

	readonly metadata: NSData;

	orientation: OTVideoOrientation;

	planes: NSPointerArray;

	timestamp: CMTime;

	constructor(o: { format: OTVideoFormat; });

	clearPlanes(): void;

	initWithFormat(videoFormat: OTVideoFormat): this;

	setMetadataError(data: NSData, error: interop.Pointer | interop.Reference<OTError>): void;

	setPlanesWithPointersNumPlanes(planes: interop.Reference<string>, numPlanes: number): void;
}

declare const enum OTVideoOrientation {

	Up = 1,

	Down = 2,

	Left = 3,

	Right = 4
}

interface OTVideoRender extends NSObjectProtocol {

	renderVideoFrame(frame: OTVideoFrame): void;
}
declare var OTVideoRender: {

	prototype: OTVideoRender;
};

declare const enum OTVideoViewScaleBehavior {

	Fit = 0,

	Fill = 1
}


declare class AFAutoPurgingImageCache extends NSObject implements AFImageRequestCache {

	static alloc(): AFAutoPurgingImageCache; // inherited from NSObject

	static new(): AFAutoPurgingImageCache; // inherited from NSObject

	memoryCapacity: number;

	readonly memoryUsage: number;

	preferredMemoryUsageAfterPurge: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { memoryCapacity: number; preferredMemoryCapacity: number; });

	addImageForRequestWithAdditionalIdentifier(image: UIImage, request: NSURLRequest, identifier: string): void;

	addImageWithIdentifier(image: UIImage, identifier: string): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	imageWithIdentifier(identifier: string): UIImage;

	imageforRequestWithAdditionalIdentifier(request: NSURLRequest, identifier: string): UIImage;

	initWithMemoryCapacityPreferredMemoryCapacity(memoryCapacity: number, preferredMemoryCapacity: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeAllImages(): boolean;

	removeImageWithIdentifier(identifier: string): boolean;

	removeImageforRequestWithAdditionalIdentifier(request: NSURLRequest, identifier: string): boolean;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldCacheImageForRequestWithAdditionalIdentifier(image: UIImage, request: NSURLRequest, identifier: string): boolean;
}

declare class AFCompoundResponseSerializer extends AFHTTPResponseSerializer {

	static alloc(): AFCompoundResponseSerializer; // inherited from NSObject

	static compoundSerializerWithResponseSerializers(responseSerializers: NSArray<AFURLResponseSerialization> | AFURLResponseSerialization[]): AFCompoundResponseSerializer;

	static new(): AFCompoundResponseSerializer; // inherited from NSObject

	static serializer(): AFCompoundResponseSerializer; // inherited from AFHTTPResponseSerializer

	readonly responseSerializers: NSArray<AFURLResponseSerialization>;
}

declare const enum AFHTTPRequestQueryStringSerializationStyle {

	DefaultStyle = 0
}

declare class AFHTTPRequestSerializer extends NSObject implements AFURLRequestSerialization {

	static alloc(): AFHTTPRequestSerializer; // inherited from NSObject

	static new(): AFHTTPRequestSerializer; // inherited from NSObject

	static serializer(): AFHTTPRequestSerializer;

	HTTPMethodsEncodingParametersInURI: NSSet<string>;

	readonly HTTPRequestHeaders: NSDictionary<string, string>;

	HTTPShouldHandleCookies: boolean;

	HTTPShouldUsePipelining: boolean;

	allowsCellularAccess: boolean;

	cachePolicy: NSURLRequestCachePolicy;

	networkServiceType: NSURLRequestNetworkServiceType;

	stringEncoding: number;

	timeoutInterval: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	class(): typeof NSObject;

	clearAuthorizationHeader(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	multipartFormRequestWithMethodURLStringParametersConstructingBodyWithBlockError(method: string, URLString: string, parameters: NSDictionary<string, any>, block: (p1: AFMultipartFormData) => void): NSMutableURLRequest;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	requestBySerializingRequestWithParametersError(request: NSURLRequest, parameters: any): NSURLRequest;

	requestWithMethodURLStringParametersError(method: string, URLString: string, parameters: any): NSMutableURLRequest;

	requestWithMultipartFormRequestWritingStreamContentsToFileCompletionHandler(request: NSURLRequest, fileURL: NSURL, handler: (p1: NSError) => void): NSMutableURLRequest;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setAuthorizationHeaderFieldWithUsernamePassword(username: string, password: string): void;

	setQueryStringSerializationWithBlock(block: (p1: NSURLRequest, p2: any, p3: interop.Pointer | interop.Reference<NSError>) => string): void;

	setQueryStringSerializationWithStyle(style: AFHTTPRequestQueryStringSerializationStyle): void;

	setValueForHTTPHeaderField(value: string, field: string): void;

	valueForHTTPHeaderField(field: string): string;
}

declare class AFHTTPResponseSerializer extends NSObject implements AFURLResponseSerialization {

	static alloc(): AFHTTPResponseSerializer; // inherited from NSObject

	static new(): AFHTTPResponseSerializer; // inherited from NSObject

	static serializer(): AFHTTPResponseSerializer;

	acceptableContentTypes: NSSet<string>;

	acceptableStatusCodes: NSIndexSet;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	responseObjectForResponseDataError(response: NSURLResponse, data: NSData): any;

	retainCount(): number;

	self(): this;

	validateResponseDataError(response: NSHTTPURLResponse, data: NSData): boolean;
}

declare class AFHTTPSessionManager extends AFURLSessionManager implements NSCopying, NSSecureCoding {

	static alloc(): AFHTTPSessionManager; // inherited from NSObject

	static manager(): AFHTTPSessionManager;

	static new(): AFHTTPSessionManager; // inherited from NSObject

	readonly baseURL: NSURL;

	requestSerializer: AFHTTPRequestSerializer;

	responseSerializer: AFHTTPResponseSerializer;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { baseURL: NSURL; });

	constructor(o: { baseURL: NSURL; sessionConfiguration: NSURLSessionConfiguration; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	DELETEParametersHeadersSuccessFailure(URLString: string, parameters: any, headers: NSDictionary<string, string>, success: (p1: NSURLSessionDataTask, p2: any) => void, failure: (p1: NSURLSessionDataTask, p2: NSError) => void): NSURLSessionDataTask;

	GETParametersHeadersProgressSuccessFailure(URLString: string, parameters: any, headers: NSDictionary<string, string>, downloadProgress: (p1: NSProgress) => void, success: (p1: NSURLSessionDataTask, p2: any) => void, failure: (p1: NSURLSessionDataTask, p2: NSError) => void): NSURLSessionDataTask;

	HEADParametersHeadersSuccessFailure(URLString: string, parameters: any, headers: NSDictionary<string, string>, success: (p1: NSURLSessionDataTask) => void, failure: (p1: NSURLSessionDataTask, p2: NSError) => void): NSURLSessionDataTask;

	PATCHParametersHeadersSuccessFailure(URLString: string, parameters: any, headers: NSDictionary<string, string>, success: (p1: NSURLSessionDataTask, p2: any) => void, failure: (p1: NSURLSessionDataTask, p2: NSError) => void): NSURLSessionDataTask;

	POSTParametersHeadersConstructingBodyWithBlockProgressSuccessFailure(URLString: string, parameters: any, headers: NSDictionary<string, string>, block: (p1: AFMultipartFormData) => void, uploadProgress: (p1: NSProgress) => void, success: (p1: NSURLSessionDataTask, p2: any) => void, failure: (p1: NSURLSessionDataTask, p2: NSError) => void): NSURLSessionDataTask;

	POSTParametersHeadersProgressSuccessFailure(URLString: string, parameters: any, headers: NSDictionary<string, string>, uploadProgress: (p1: NSProgress) => void, success: (p1: NSURLSessionDataTask, p2: any) => void, failure: (p1: NSURLSessionDataTask, p2: NSError) => void): NSURLSessionDataTask;

	PUTParametersHeadersSuccessFailure(URLString: string, parameters: any, headers: NSDictionary<string, string>, success: (p1: NSURLSessionDataTask, p2: any) => void, failure: (p1: NSURLSessionDataTask, p2: NSError) => void): NSURLSessionDataTask;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	dataTaskWithHTTPMethodURLStringParametersHeadersUploadProgressDownloadProgressSuccessFailure(method: string, URLString: string, parameters: any, headers: NSDictionary<string, string>, uploadProgress: (p1: NSProgress) => void, downloadProgress: (p1: NSProgress) => void, success: (p1: NSURLSessionDataTask, p2: any) => void, failure: (p1: NSURLSessionDataTask, p2: NSError) => void): NSURLSessionDataTask;

	encodeWithCoder(coder: NSCoder): void;

	initWithBaseURL(url: NSURL): this;

	initWithBaseURLSessionConfiguration(url: NSURL, configuration: NSURLSessionConfiguration): this;

	initWithCoder(coder: NSCoder): this;
}

interface AFImageCache extends NSObjectProtocol {

	addImageWithIdentifier(image: UIImage, identifier: string): void;

	imageWithIdentifier(identifier: string): UIImage;

	removeAllImages(): boolean;

	removeImageWithIdentifier(identifier: string): boolean;
}
declare var AFImageCache: {

	prototype: AFImageCache;
};

declare const enum AFImageDownloadPrioritization {

	FIFO = 0,

	LIFO = 1
}

declare class AFImageDownloadReceipt extends NSObject {

	static alloc(): AFImageDownloadReceipt; // inherited from NSObject

	static new(): AFImageDownloadReceipt; // inherited from NSObject

	receiptID: NSUUID;

	task: NSURLSessionDataTask;
}

declare class AFImageDownloader extends NSObject {

	static alloc(): AFImageDownloader; // inherited from NSObject

	static defaultInstance(): AFImageDownloader;

	static defaultURLCache(): NSURLCache;

	static defaultURLSessionConfiguration(): NSURLSessionConfiguration;

	static new(): AFImageDownloader; // inherited from NSObject

	downloadPrioritization: AFImageDownloadPrioritization;

	imageCache: AFImageRequestCache;

	sessionManager: AFHTTPSessionManager;

	constructor(o: { sessionConfiguration: NSURLSessionConfiguration; });

	constructor(o: { sessionManager: AFHTTPSessionManager; downloadPrioritization: AFImageDownloadPrioritization; maximumActiveDownloads: number; imageCache: AFImageRequestCache; });

	cancelTaskForImageDownloadReceipt(imageDownloadReceipt: AFImageDownloadReceipt): void;

	downloadImageForURLRequestSuccessFailure(request: NSURLRequest, success: (p1: NSURLRequest, p2: NSHTTPURLResponse, p3: UIImage) => void, failure: (p1: NSURLRequest, p2: NSHTTPURLResponse, p3: NSError) => void): AFImageDownloadReceipt;

	downloadImageForURLRequestWithReceiptIDSuccessFailure(request: NSURLRequest, receiptID: NSUUID, success: (p1: NSURLRequest, p2: NSHTTPURLResponse, p3: UIImage) => void, failure: (p1: NSURLRequest, p2: NSHTTPURLResponse, p3: NSError) => void): AFImageDownloadReceipt;

	initWithSessionConfiguration(configuration: NSURLSessionConfiguration): this;

	initWithSessionManagerDownloadPrioritizationMaximumActiveDownloadsImageCache(sessionManager: AFHTTPSessionManager, downloadPrioritization: AFImageDownloadPrioritization, maximumActiveDownloads: number, imageCache: AFImageRequestCache): this;
}

interface AFImageRequestCache extends AFImageCache {

	addImageForRequestWithAdditionalIdentifier(image: UIImage, request: NSURLRequest, identifier: string): void;

	imageforRequestWithAdditionalIdentifier(request: NSURLRequest, identifier: string): UIImage;

	removeImageforRequestWithAdditionalIdentifier(request: NSURLRequest, identifier: string): boolean;

	shouldCacheImageForRequestWithAdditionalIdentifier(image: UIImage, request: NSURLRequest, identifier: string): boolean;
}
declare var AFImageRequestCache: {

	prototype: AFImageRequestCache;
};

declare class AFImageResponseSerializer extends AFHTTPResponseSerializer {

	static alloc(): AFImageResponseSerializer; // inherited from NSObject

	static new(): AFImageResponseSerializer; // inherited from NSObject

	static serializer(): AFImageResponseSerializer; // inherited from AFHTTPResponseSerializer

	automaticallyInflatesResponseImage: boolean;

	imageScale: number;
}

declare function AFJSONObjectByRemovingKeysWithNullValues(JSONObject: any, readingOptions: NSJSONReadingOptions): any;

declare class AFJSONRequestSerializer extends AFHTTPRequestSerializer {

	static alloc(): AFJSONRequestSerializer; // inherited from NSObject

	static new(): AFJSONRequestSerializer; // inherited from NSObject

	static serializer(): AFJSONRequestSerializer; // inherited from AFHTTPRequestSerializer

	static serializerWithWritingOptions(writingOptions: NSJSONWritingOptions): AFJSONRequestSerializer;

	writingOptions: NSJSONWritingOptions;
}

declare class AFJSONResponseSerializer extends AFHTTPResponseSerializer {

	static alloc(): AFJSONResponseSerializer; // inherited from NSObject

	static new(): AFJSONResponseSerializer; // inherited from NSObject

	static serializer(): AFJSONResponseSerializer; // inherited from AFHTTPResponseSerializer

	static serializerWithReadingOptions(readingOptions: NSJSONReadingOptions): AFJSONResponseSerializer;

	readingOptions: NSJSONReadingOptions;

	removesKeysWithNullValues: boolean;
}

interface AFMultipartFormData {

	appendPartWithFileDataNameFileNameMimeType(data: NSData, name: string, fileName: string, mimeType: string): void;

	appendPartWithFileURLNameError(fileURL: NSURL, name: string): boolean;

	appendPartWithFileURLNameFileNameMimeTypeError(fileURL: NSURL, name: string, fileName: string, mimeType: string): boolean;

	appendPartWithFormDataName(data: NSData, name: string): void;

	appendPartWithHeadersBody(headers: NSDictionary<string, string>, body: NSData): void;

	appendPartWithInputStreamNameFileNameLengthMimeType(inputStream: NSInputStream, name: string, fileName: string, length: number, mimeType: string): void;

	throttleBandwidthWithPacketSizeDelay(numberOfBytes: number, delay: number): void;
}
declare var AFMultipartFormData: {

	prototype: AFMultipartFormData;
};

declare class AFNetworkActivityIndicatorManager extends NSObject {

	static alloc(): AFNetworkActivityIndicatorManager; // inherited from NSObject

	static new(): AFNetworkActivityIndicatorManager; // inherited from NSObject

	static sharedManager(): AFNetworkActivityIndicatorManager;

	activationDelay: number;

	completionDelay: number;

	enabled: boolean;

	readonly networkActivityIndicatorVisible: boolean;

	decrementActivityCount(): void;

	incrementActivityCount(): void;

	setNetworkingActivityActionWithBlock(block: (p1: boolean) => void): void;
}

declare class AFNetworkReachabilityManager extends NSObject {

	static alloc(): AFNetworkReachabilityManager; // inherited from NSObject

	static manager(): AFNetworkReachabilityManager;

	static managerForAddress(address: interop.Pointer | interop.Reference<any>): AFNetworkReachabilityManager;

	static managerForDomain(domain: string): AFNetworkReachabilityManager;

	static new(): AFNetworkReachabilityManager; // inherited from NSObject

	static sharedManager(): AFNetworkReachabilityManager;

	readonly networkReachabilityStatus: AFNetworkReachabilityStatus;

	readonly reachable: boolean;

	readonly reachableViaWWAN: boolean;

	readonly reachableViaWiFi: boolean;

	constructor(o: { reachability: any; });

	initWithReachability(reachability: any): this;

	localizedNetworkReachabilityStatusString(): string;

	setReachabilityStatusChangeBlock(block: (p1: AFNetworkReachabilityStatus) => void): void;

	startMonitoring(): void;

	stopMonitoring(): void;
}

declare const enum AFNetworkReachabilityStatus {

	Unknown = -1,

	NotReachable = 0,

	ReachableViaWWAN = 1,

	ReachableViaWiFi = 2
}

declare var AFNetworkingOperationFailingURLRequestErrorKey: string;

declare var AFNetworkingOperationFailingURLResponseDataErrorKey: string;

declare var AFNetworkingOperationFailingURLResponseErrorKey: string;

declare var AFNetworkingReachabilityDidChangeNotification: string;

declare var AFNetworkingReachabilityNotificationStatusItem: string;

declare var AFNetworkingTaskDidCompleteAssetPathKey: string;

declare var AFNetworkingTaskDidCompleteErrorKey: string;

declare var AFNetworkingTaskDidCompleteNotification: string;

declare var AFNetworkingTaskDidCompleteResponseDataKey: string;

declare var AFNetworkingTaskDidCompleteResponseSerializerKey: string;

declare var AFNetworkingTaskDidCompleteSerializedResponseKey: string;

declare var AFNetworkingTaskDidCompleteSessionTaskMetrics: string;

declare var AFNetworkingTaskDidResumeNotification: string;

declare var AFNetworkingTaskDidSuspendNotification: string;

declare var AFNetworkingVersionNumber: number;

declare var AFNetworkingVersionString: interop.Reference<number>;

declare function AFPercentEscapedStringFromString(string: string): string;

declare class AFPropertyListRequestSerializer extends AFHTTPRequestSerializer {

	static alloc(): AFPropertyListRequestSerializer; // inherited from NSObject

	static new(): AFPropertyListRequestSerializer; // inherited from NSObject

	static serializer(): AFPropertyListRequestSerializer; // inherited from AFHTTPRequestSerializer

	static serializerWithFormatWriteOptions(format: NSPropertyListFormat, writeOptions: number): AFPropertyListRequestSerializer;

	format: NSPropertyListFormat;

	writeOptions: number;
}

declare class AFPropertyListResponseSerializer extends AFHTTPResponseSerializer {

	static alloc(): AFPropertyListResponseSerializer; // inherited from NSObject

	static new(): AFPropertyListResponseSerializer; // inherited from NSObject

	static serializer(): AFPropertyListResponseSerializer; // inherited from AFHTTPResponseSerializer

	static serializerWithFormatReadOptions(format: NSPropertyListFormat, readOptions: NSPropertyListMutabilityOptions): AFPropertyListResponseSerializer;

	format: NSPropertyListFormat;

	readOptions: NSPropertyListMutabilityOptions;
}

declare function AFQueryStringFromParameters(parameters: NSDictionary<any, any>): string;

declare const enum AFSSLPinningMode {

	None = 0,

	PublicKey = 1,

	Certificate = 2
}

declare class AFSecurityPolicy extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): AFSecurityPolicy; // inherited from NSObject

	static certificatesInBundle(bundle: NSBundle): NSSet<NSData>;

	static defaultPolicy(): AFSecurityPolicy;

	static new(): AFSecurityPolicy; // inherited from NSObject

	static policyWithPinningMode(pinningMode: AFSSLPinningMode): AFSecurityPolicy;

	static policyWithPinningModeWithPinnedCertificates(pinningMode: AFSSLPinningMode, pinnedCertificates: NSSet<NSData>): AFSecurityPolicy;

	readonly SSLPinningMode: AFSSLPinningMode;

	allowInvalidCertificates: boolean;

	pinnedCertificates: NSSet<NSData>;

	validatesDomainName: boolean;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	evaluateServerTrustForDomain(serverTrust: any, domain: string): boolean;

	initWithCoder(coder: NSCoder): this;
}

declare function AFStringFromNetworkReachabilityStatus(status: AFNetworkReachabilityStatus): string;

interface AFURLRequestSerialization extends NSCopying, NSObjectProtocol, NSSecureCoding {

	requestBySerializingRequestWithParametersError(request: NSURLRequest, parameters: any): NSURLRequest;
}
declare var AFURLRequestSerialization: {

	prototype: AFURLRequestSerialization;
};

declare var AFURLRequestSerializationErrorDomain: string;

interface AFURLResponseSerialization extends NSCopying, NSObjectProtocol, NSSecureCoding {

	responseObjectForResponseDataError(response: NSURLResponse, data: NSData): any;
}
declare var AFURLResponseSerialization: {

	prototype: AFURLResponseSerialization;
};

declare var AFURLResponseSerializationErrorDomain: string;

declare var AFURLSessionDidInvalidateNotification: string;

declare var AFURLSessionDownloadTaskDidFailToMoveFileNotification: string;

declare var AFURLSessionDownloadTaskDidMoveFileSuccessfullyNotification: string;

declare class AFURLSessionManager extends NSObject implements NSCopying, NSSecureCoding, NSURLSessionDataDelegate, NSURLSessionDelegate, NSURLSessionDownloadDelegate, NSURLSessionTaskDelegate {

	static alloc(): AFURLSessionManager; // inherited from NSObject

	static new(): AFURLSessionManager; // inherited from NSObject

	completionGroup: NSObject;

	completionQueue: NSObject;

	readonly dataTasks: NSArray<NSURLSessionDataTask>;

	readonly downloadTasks: NSArray<NSURLSessionDownloadTask>;

	readonly operationQueue: NSOperationQueue;

	reachabilityManager: AFNetworkReachabilityManager;

	responseSerializer: AFURLResponseSerialization;

	securityPolicy: AFSecurityPolicy;

	readonly session: NSURLSession;

	readonly tasks: NSArray<NSURLSessionTask>;

	readonly uploadTasks: NSArray<NSURLSessionUploadTask>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { sessionConfiguration: NSURLSessionConfiguration; });

	URLSessionDataTaskDidBecomeDownloadTask(session: NSURLSession, dataTask: NSURLSessionDataTask, downloadTask: NSURLSessionDownloadTask): void;

	URLSessionDataTaskDidBecomeStreamTask(session: NSURLSession, dataTask: NSURLSessionDataTask, streamTask: NSURLSessionStreamTask): void;

	URLSessionDataTaskDidReceiveData(session: NSURLSession, dataTask: NSURLSessionDataTask, data: NSData): void;

	URLSessionDataTaskDidReceiveResponseCompletionHandler(session: NSURLSession, dataTask: NSURLSessionDataTask, response: NSURLResponse, completionHandler: (p1: NSURLSessionResponseDisposition) => void): void;

	URLSessionDataTaskWillCacheResponseCompletionHandler(session: NSURLSession, dataTask: NSURLSessionDataTask, proposedResponse: NSCachedURLResponse, completionHandler: (p1: NSCachedURLResponse) => void): void;

	URLSessionDidBecomeInvalidWithError(session: NSURLSession, error: NSError): void;

	URLSessionDidFinishEventsForBackgroundURLSession(session: NSURLSession): void;

	URLSessionDidReceiveChallengeCompletionHandler(session: NSURLSession, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

	URLSessionDownloadTaskDidFinishDownloadingToURL(session: NSURLSession, downloadTask: NSURLSessionDownloadTask, location: NSURL): void;

	URLSessionDownloadTaskDidResumeAtOffsetExpectedTotalBytes(session: NSURLSession, downloadTask: NSURLSessionDownloadTask, fileOffset: number, expectedTotalBytes: number): void;

	URLSessionDownloadTaskDidWriteDataTotalBytesWrittenTotalBytesExpectedToWrite(session: NSURLSession, downloadTask: NSURLSessionDownloadTask, bytesWritten: number, totalBytesWritten: number, totalBytesExpectedToWrite: number): void;

	URLSessionTaskDidCompleteWithError(session: NSURLSession, task: NSURLSessionTask, error: NSError): void;

	URLSessionTaskDidFinishCollectingMetrics(session: NSURLSession, task: NSURLSessionTask, metrics: NSURLSessionTaskMetrics): void;

	URLSessionTaskDidReceiveChallengeCompletionHandler(session: NSURLSession, task: NSURLSessionTask, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

	URLSessionTaskDidSendBodyDataTotalBytesSentTotalBytesExpectedToSend(session: NSURLSession, task: NSURLSessionTask, bytesSent: number, totalBytesSent: number, totalBytesExpectedToSend: number): void;

	URLSessionTaskIsWaitingForConnectivity(session: NSURLSession, task: NSURLSessionTask): void;

	URLSessionTaskNeedNewBodyStream(session: NSURLSession, task: NSURLSessionTask, completionHandler: (p1: NSInputStream) => void): void;

	URLSessionTaskWillBeginDelayedRequestCompletionHandler(session: NSURLSession, task: NSURLSessionTask, request: NSURLRequest, completionHandler: (p1: NSURLSessionDelayedRequestDisposition, p2: NSURLRequest) => void): void;

	URLSessionTaskWillPerformHTTPRedirectionNewRequestCompletionHandler(session: NSURLSession, task: NSURLSessionTask, response: NSHTTPURLResponse, request: NSURLRequest, completionHandler: (p1: NSURLRequest) => void): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	dataTaskWithRequestUploadProgressDownloadProgressCompletionHandler(request: NSURLRequest, uploadProgressBlock: (p1: NSProgress) => void, downloadProgressBlock: (p1: NSProgress) => void, completionHandler: (p1: NSURLResponse, p2: any, p3: NSError) => void): NSURLSessionDataTask;

	downloadProgressForTask(task: NSURLSessionTask): NSProgress;

	downloadTaskWithRequestProgressDestinationCompletionHandler(request: NSURLRequest, downloadProgressBlock: (p1: NSProgress) => void, destination: (p1: NSURL, p2: NSURLResponse) => NSURL, completionHandler: (p1: NSURLResponse, p2: NSURL, p3: NSError) => void): NSURLSessionDownloadTask;

	downloadTaskWithResumeDataProgressDestinationCompletionHandler(resumeData: NSData, downloadProgressBlock: (p1: NSProgress) => void, destination: (p1: NSURL, p2: NSURLResponse) => NSURL, completionHandler: (p1: NSURLResponse, p2: NSURL, p3: NSError) => void): NSURLSessionDownloadTask;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithSessionConfiguration(configuration: NSURLSessionConfiguration): this;

	invalidateSessionCancelingTasksResetSession(cancelPendingTasks: boolean, resetSession: boolean): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setAuthenticationChallengeHandler(authenticationChallengeHandler: (p1: NSURLSession, p2: NSURLSessionTask, p3: NSURLAuthenticationChallenge, p4: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void) => any): void;

	setDataTaskDidBecomeDownloadTaskBlock(block: (p1: NSURLSession, p2: NSURLSessionDataTask, p3: NSURLSessionDownloadTask) => void): void;

	setDataTaskDidReceiveDataBlock(block: (p1: NSURLSession, p2: NSURLSessionDataTask, p3: NSData) => void): void;

	setDataTaskDidReceiveResponseBlock(block: (p1: NSURLSession, p2: NSURLSessionDataTask, p3: NSURLResponse) => NSURLSessionResponseDisposition): void;

	setDataTaskWillCacheResponseBlock(block: (p1: NSURLSession, p2: NSURLSessionDataTask, p3: NSCachedURLResponse) => NSCachedURLResponse): void;

	setDidFinishEventsForBackgroundURLSessionBlock(block: (p1: NSURLSession) => void): void;

	setDownloadTaskDidFinishDownloadingBlock(block: (p1: NSURLSession, p2: NSURLSessionDownloadTask, p3: NSURL) => NSURL): void;

	setDownloadTaskDidResumeBlock(block: (p1: NSURLSession, p2: NSURLSessionDownloadTask, p3: number, p4: number) => void): void;

	setDownloadTaskDidWriteDataBlock(block: (p1: NSURLSession, p2: NSURLSessionDownloadTask, p3: number, p4: number, p5: number) => void): void;

	setSessionDidBecomeInvalidBlock(block: (p1: NSURLSession, p2: NSError) => void): void;

	setSessionDidReceiveAuthenticationChallengeBlock(block: (p1: NSURLSession, p2: NSURLAuthenticationChallenge, p3: interop.Pointer | interop.Reference<NSURLCredential>) => NSURLSessionAuthChallengeDisposition): void;

	setTaskDidCompleteBlock(block: (p1: NSURLSession, p2: NSURLSessionTask, p3: NSError) => void): void;

	setTaskDidFinishCollectingMetricsBlock(block: (p1: NSURLSession, p2: NSURLSessionTask, p3: NSURLSessionTaskMetrics) => void): void;

	setTaskDidSendBodyDataBlock(block: (p1: NSURLSession, p2: NSURLSessionTask, p3: number, p4: number, p5: number) => void): void;

	setTaskNeedNewBodyStreamBlock(block: (p1: NSURLSession, p2: NSURLSessionTask) => NSInputStream): void;

	setTaskWillPerformHTTPRedirectionBlock(block: (p1: NSURLSession, p2: NSURLSessionTask, p3: NSURLResponse, p4: NSURLRequest) => NSURLRequest): void;

	uploadProgressForTask(task: NSURLSessionTask): NSProgress;

	uploadTaskWithRequestFromDataProgressCompletionHandler(request: NSURLRequest, bodyData: NSData, uploadProgressBlock: (p1: NSProgress) => void, completionHandler: (p1: NSURLResponse, p2: any, p3: NSError) => void): NSURLSessionUploadTask;

	uploadTaskWithRequestFromFileProgressCompletionHandler(request: NSURLRequest, fileURL: NSURL, uploadProgressBlock: (p1: NSProgress) => void, completionHandler: (p1: NSURLResponse, p2: any, p3: NSError) => void): NSURLSessionUploadTask;

	uploadTaskWithStreamedRequestProgressCompletionHandler(request: NSURLRequest, uploadProgressBlock: (p1: NSProgress) => void, completionHandler: (p1: NSURLResponse, p2: any, p3: NSError) => void): NSURLSessionUploadTask;
}

declare class AFXMLParserResponseSerializer extends AFHTTPResponseSerializer {

	static alloc(): AFXMLParserResponseSerializer; // inherited from NSObject

	static new(): AFXMLParserResponseSerializer; // inherited from NSObject

	static serializer(): AFXMLParserResponseSerializer; // inherited from AFHTTPResponseSerializer
}

declare var kAFUploadStream3GSuggestedDelay: number;

declare var kAFUploadStream3GSuggestedPacketSize: number;

declare class NSCDownloader extends NSObject implements NSURLSessionDownloadDelegate {

	static alloc(): NSCDownloader; // inherited from NSObject

	static cancel(id: string): void;

	static createDownload(url: string, path: string, fileName: string, headers: NSDictionary<string, string>, progress: (p1: string, p2: number, p3: number, p4: number, p5: number) => void, complete: (p1: string, p2: string, p3: string) => void): string;

	static getPath(id: string): string;

	static getStatus(id: string): StatusCode;

	static has(id: string): boolean;

	static new(): NSCDownloader; // inherited from NSObject

	static pause(id: string): void;

	static resume(id: string): void;

	static setTimeOut(value: number): void;

	static start(id: string): void;

	static readonly config: NSURLSessionConfiguration;

	static readonly instance: NSCDownloader;

	static timeOut: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	URLSessionDidBecomeInvalidWithError(session: NSURLSession, error: NSError): void;

	/**
	 * @since 16.0
	 */
	URLSessionDidCreateTask(session: NSURLSession, task: NSURLSessionTask): void;

	/**
	 * @since 7.0
	 */
	URLSessionDidFinishEventsForBackgroundURLSession(session: NSURLSession): void;

	URLSessionDidReceiveChallengeCompletionHandler(session: NSURLSession, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

	URLSessionDownloadTaskDidFinishDownloadingToURL(session: NSURLSession, downloadTask: NSURLSessionDownloadTask, location: NSURL): void;

	URLSessionDownloadTaskDidResumeAtOffsetExpectedTotalBytes(session: NSURLSession, downloadTask: NSURLSessionDownloadTask, fileOffset: number, expectedTotalBytes: number): void;

	URLSessionDownloadTaskDidWriteDataTotalBytesWrittenTotalBytesExpectedToWrite(session: NSURLSession, downloadTask: NSURLSessionDownloadTask, bytesWritten: number, totalBytesWritten: number, totalBytesExpectedToWrite: number): void;

	URLSessionTaskDidCompleteWithError(session: NSURLSession, task: NSURLSessionTask, error: NSError): void;

	/**
	 * @since 10.0
	 */
	URLSessionTaskDidFinishCollectingMetrics(session: NSURLSession, task: NSURLSessionTask, metrics: NSURLSessionTaskMetrics): void;

	URLSessionTaskDidReceiveChallengeCompletionHandler(session: NSURLSession, task: NSURLSessionTask, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

	/**
	 * @since 17.0
	 */
	URLSessionTaskDidReceiveInformationalResponse(session: NSURLSession, task: NSURLSessionTask, response: NSHTTPURLResponse): void;

	URLSessionTaskDidSendBodyDataTotalBytesSentTotalBytesExpectedToSend(session: NSURLSession, task: NSURLSessionTask, bytesSent: number, totalBytesSent: number, totalBytesExpectedToSend: number): void;

	/**
	 * @since 11.0
	 */
	URLSessionTaskIsWaitingForConnectivity(session: NSURLSession, task: NSURLSessionTask): void;

	URLSessionTaskNeedNewBodyStream(session: NSURLSession, task: NSURLSessionTask, completionHandler: (p1: NSInputStream) => void): void;

	/**
	 * @since 17.0
	 */
	URLSessionTaskNeedNewBodyStreamFromOffsetCompletionHandler(session: NSURLSession, task: NSURLSessionTask, offset: number, completionHandler: (p1: NSInputStream) => void): void;

	/**
	 * @since 11.0
	 */
	URLSessionTaskWillBeginDelayedRequestCompletionHandler(session: NSURLSession, task: NSURLSessionTask, request: NSURLRequest, completionHandler: (p1: NSURLSessionDelayedRequestDisposition, p2: NSURLRequest) => void): void;

	URLSessionTaskWillPerformHTTPRedirectionNewRequestCompletionHandler(session: NSURLSession, task: NSURLSessionTask, response: NSHTTPURLResponse, request: NSURLRequest, completionHandler: (p1: NSURLRequest) => void): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AbstractSession extends NSObject implements Session {

	static alloc(): AbstractSession; // inherited from NSObject

	static new(): AbstractSession; // inherited from NSObject

	constructor(o: { withLogCallback: NSArray<any> | any[]; withLogRedirectionStrategy: (p1: Log) => void; });

	addLog(log: Log): void;

	cancel(): void;

	complete(returnCode: ReturnCode): void;

	fail(exception: NSException): void;

	getAllLogs(): NSArray<any>;

	getAllLogsAsString(): string;

	getAllLogsAsStringWithTimeout(waitTimeout: number): string;

	getAllLogsWithTimeout(waitTimeout: number): NSArray<any>;

	getArguments(): NSArray<any>;

	getCommand(): string;

	getCreateTime(): Date;

	getDuration(): number;

	getEndTime(): Date;

	getFailStackTrace(): string;

	getLogCallback(): (p1: Log) => void;

	getLogRedirectionStrategy(): LogRedirectionStrategy;

	getLogs(): NSArray<any>;

	getLogsAsString(): string;

	getOutput(): string;

	getReturnCode(): ReturnCode;

	getSessionId(): number;

	getStartTime(): Date;

	getState(): SessionState;

	initWithLogCallbackWithLogRedirectionStrategy(_arguments: NSArray<any> | any[], logCallback: (p1: Log) => void, logRedirectionStrategy: LogRedirectionStrategy): this;

	isFFmpeg(): boolean;

	isFFprobe(): boolean;

	isMediaInformation(): boolean;

	startRunning(): void;

	thereAreAsynchronousMessagesInTransmit(): boolean;

	waitForAsynchronousMessagesInTransmit(timeout: number): void;
}

declare var AbstractSessionDefaultTimeoutForAsynchronousMessagesInTransmit: number;

declare class ArchDetect extends NSObject {

	static alloc(): ArchDetect; // inherited from NSObject

	static getArch(): string;

	static getCpuArch(): string;

	static new(): ArchDetect; // inherited from NSObject
}

declare class AtomicLong extends NSObject {

	static alloc(): AtomicLong; // inherited from NSObject

	static new(): AtomicLong; // inherited from NSObject

	constructor(o: { value: number; });

	getAndIncrement(): number;

	incrementAndGet(): number;

	initWithValue(value: number): this;
}

declare class Chapter extends NSObject {

	static alloc(): Chapter; // inherited from NSObject

	static new(): Chapter; // inherited from NSObject

	constructor();

	getAllProperties(): NSDictionary<any, any>;

	getEnd(): number;

	getEndTime(): string;

	getId(): number;

	getNumberProperty(key: string): number;

	getProperties(key: string): NSDictionary<any, any>;

	getStart(): number;

	getStartTime(): string;

	getStringProperty(key: string): string;

	getTags(): NSDictionary<any, any>;

	getTimeBase(): string;

	init(chapterDictionary: NSDictionary<any, any>): this;
}

declare var ChapterKeyEnd: string;

declare var ChapterKeyEndTime: string;

declare var ChapterKeyId: string;

declare var ChapterKeyStart: string;

declare var ChapterKeyStartTime: string;

declare var ChapterKeyTags: string;

declare var ChapterKeyTimeBase: string;

declare class FFmpegKit extends NSObject {

	static alloc(): FFmpegKit; // inherited from NSObject

	static cancel(): void;

	static execute(command: string): FFmpegSession;

	static executeAsyncWithCompleteCallback(command: string, completeCallback: (p1: FFmpegSession) => void): FFmpegSession;

	static executeAsyncWithCompleteCallbackOnDispatchQueue(command: string, completeCallback: (p1: FFmpegSession) => void, queue: NSObject): FFmpegSession;

	static executeAsyncWithCompleteCallbackWithLogCallbackWithStatisticsCallback(command: string, completeCallback: (p1: FFmpegSession) => void, logCallback: (p1: Log) => void, statisticsCallback: (p1: Statistics) => void): FFmpegSession;

	static executeAsyncWithCompleteCallbackWithLogCallbackWithStatisticsCallbackOnDispatchQueue(command: string, completeCallback: (p1: FFmpegSession) => void, logCallback: (p1: Log) => void, statisticsCallback: (p1: Statistics) => void, queue: NSObject): FFmpegSession;

	static executeWithArguments(_arguments: NSArray<any> | any[]): FFmpegSession;

	static executeWithArgumentsAsyncWithCompleteCallback(_arguments: NSArray<any> | any[], completeCallback: (p1: FFmpegSession) => void): FFmpegSession;

	static executeWithArgumentsAsyncWithCompleteCallbackOnDispatchQueue(_arguments: NSArray<any> | any[], completeCallback: (p1: FFmpegSession) => void, queue: NSObject): FFmpegSession;

	static executeWithArgumentsAsyncWithCompleteCallbackWithLogCallbackWithStatisticsCallback(_arguments: NSArray<any> | any[], completeCallback: (p1: FFmpegSession) => void, logCallback: (p1: Log) => void, statisticsCallback: (p1: Statistics) => void): FFmpegSession;

	static executeWithArgumentsAsyncWithCompleteCallbackWithLogCallbackWithStatisticsCallbackOnDispatchQueue(_arguments: NSArray<any> | any[], completeCallback: (p1: FFmpegSession) => void, logCallback: (p1: Log) => void, statisticsCallback: (p1: Statistics) => void, queue: NSObject): FFmpegSession;

	static listSessions(): NSArray<any>;

	static new(): FFmpegKit; // inherited from NSObject
}

declare class FFmpegKitConfig extends NSObject {

	static alloc(): FFmpegKitConfig; // inherited from NSObject

	static argumentsToString(_arguments: NSArray<any> | any[]): string;

	static asyncFFmpegExecute(ffmpegSession: FFmpegSession): void;

	static asyncFFmpegExecuteOnDispatchQueue(ffmpegSession: FFmpegSession, queue: NSObject): void;

	static asyncFFprobeExecute(ffprobeSession: FFprobeSession): void;

	static asyncFFprobeExecuteOnDispatchQueue(ffprobeSession: FFprobeSession, queue: NSObject): void;

	static asyncGetMediaInformationExecuteOnDispatchQueueWithTimeout(mediaInformationSession: MediaInformationSession, queue: NSObject, waitTimeout: number): void;

	static asyncGetMediaInformationExecuteWithTimeout(mediaInformationSession: MediaInformationSession, waitTimeout: number): void;

	static clearSessions(): void;

	static closeFFmpegPipe(ffmpegPipePath: string): void;

	static disableRedirection(): void;

	static enableFFmpegSessionCompleteCallback(ffmpegSessionCompleteCallback: (p1: FFmpegSession) => void): void;

	static enableFFprobeSessionCompleteCallback(ffprobeSessionCompleteCallback: (p1: FFprobeSession) => void): void;

	static enableLogCallback(logCallback: (p1: Log) => void): void;

	static enableMediaInformationSessionCompleteCallback(mediaInformationSessionCompleteCallback: (p1: MediaInformationSession) => void): void;

	static enableRedirection(): void;

	static enableStatisticsCallback(statisticsCallback: (p1: Statistics) => void): void;

	static ffmpegExecute(ffmpegSession: FFmpegSession): void;

	static ffprobeExecute(ffprobeSession: FFprobeSession): void;

	static getBuildDate(): string;

	static getFFmpegSessionCompleteCallback(): (p1: FFmpegSession) => void;

	static getFFmpegSessions(): NSArray<any>;

	static getFFmpegVersion(): string;

	static getFFprobeSessionCompleteCallback(): (p1: FFprobeSession) => void;

	static getFFprobeSessions(): NSArray<any>;

	static getLastCompletedSession(): Session;

	static getLastSession(): Session;

	static getLogLevel(): number;

	static getLogRedirectionStrategy(): LogRedirectionStrategy;

	static getMediaInformationExecuteWithTimeout(mediaInformationSession: MediaInformationSession, waitTimeout: number): void;

	static getMediaInformationSessionCompleteCallback(): (p1: MediaInformationSession) => void;

	static getMediaInformationSessions(): NSArray<any>;

	static getSession(sessionId: number): Session;

	static getSessionHistorySize(): number;

	static getSessions(): NSArray<any>;

	static getSessionsByState(state: SessionState): NSArray<any>;

	static getVersion(): string;

	static ignoreSignal(signal: Signal): void;

	static isLTSBuild(): number;

	static logLevelToString(level: number): string;

	static messagesInTransmit(sessionId: number): number;

	static new(): FFmpegKitConfig; // inherited from NSObject

	static parseArguments(command: string): NSArray<any>;

	static registerNewFFmpegPipe(): string;

	static sessionStateToString(state: SessionState): string;

	static setEnvironmentVariableValue(variableName: string, variableValue: string): number;

	static setFontDirectoryListWith(fontDirectoryList: NSArray<any> | any[], fontNameMapping: NSDictionary<any, any>): void;

	static setFontDirectoryWith(fontDirectoryPath: string, fontNameMapping: NSDictionary<any, any>): void;

	static setFontconfigConfigurationPath(path: string): number;

	static setLogLevel(level: number): void;

	static setLogRedirectionStrategy(logRedirectionStrategy: LogRedirectionStrategy): void;

	static setSessionHistorySize(sessionHistorySize: number): void;
}

declare var FFmpegKitVersion: string;

declare class FFmpegSession extends AbstractSession {

	static alloc(): FFmpegSession; // inherited from NSObject

	static new(): FFmpegSession; // inherited from NSObject

	constructor();

	constructor(o: { withCompleteCallback: NSArray<any> | any[]; });

	constructor(o: { withCompleteCallback: NSArray<any> | any[]; withLogCallback: (p1: FFmpegSession) => void; withStatisticsCallback: (p1: Log) => void; });

	constructor(o: { withCompleteCallback: NSArray<any> | any[]; withLogCallback: (p1: FFmpegSession) => void; withStatisticsCallback: (p1: Log) => void; withLogRedirectionStrategy: (p1: Statistics) => void; });

	addStatistics(statistics: Statistics): void;

	getAllStatistics(): NSArray<any>;

	getAllStatisticsWithTimeout(waitTimeout: number): NSArray<any>;

	getCompleteCallback(): (p1: FFmpegSession) => void;

	getLastReceivedStatistics(): Statistics;

	getStatistics(): NSArray<any>;

	getStatisticsCallback(): (p1: Statistics) => void;

	init(_arguments: NSArray<any> | any[]): this;

	initWithCompleteCallback(_arguments: NSArray<any> | any[], completeCallback: (p1: FFmpegSession) => void): this;

	initWithCompleteCallbackWithLogCallbackWithStatisticsCallback(_arguments: NSArray<any> | any[], completeCallback: (p1: FFmpegSession) => void, logCallback: (p1: Log) => void, statisticsCallback: (p1: Statistics) => void): this;

	initWithCompleteCallbackWithLogCallbackWithStatisticsCallbackWithLogRedirectionStrategy(_arguments: NSArray<any> | any[], completeCallback: (p1: FFmpegSession) => void, logCallback: (p1: Log) => void, statisticsCallback: (p1: Statistics) => void, logRedirectionStrategy: LogRedirectionStrategy): this;
}

declare class FFprobeKit extends NSObject {

	static alloc(): FFprobeKit; // inherited from NSObject

	static execute(command: string): FFprobeSession;

	static executeAsyncWithCompleteCallback(command: string, completeCallback: (p1: FFprobeSession) => void): FFprobeSession;

	static executeAsyncWithCompleteCallbackOnDispatchQueue(command: string, completeCallback: (p1: FFprobeSession) => void, queue: NSObject): FFprobeSession;

	static executeAsyncWithCompleteCallbackWithLogCallback(command: string, completeCallback: (p1: FFprobeSession) => void, logCallback: (p1: Log) => void): FFprobeSession;

	static executeAsyncWithCompleteCallbackWithLogCallbackOnDispatchQueue(command: string, completeCallback: (p1: FFprobeSession) => void, logCallback: (p1: Log) => void, queue: NSObject): FFprobeSession;

	static executeWithArguments(_arguments: NSArray<any> | any[]): FFprobeSession;

	static executeWithArgumentsAsyncWithCompleteCallback(_arguments: NSArray<any> | any[], completeCallback: (p1: FFprobeSession) => void): FFprobeSession;

	static executeWithArgumentsAsyncWithCompleteCallbackOnDispatchQueue(_arguments: NSArray<any> | any[], completeCallback: (p1: FFprobeSession) => void, queue: NSObject): FFprobeSession;

	static executeWithArgumentsAsyncWithCompleteCallbackWithLogCallback(_arguments: NSArray<any> | any[], completeCallback: (p1: FFprobeSession) => void, logCallback: (p1: Log) => void): FFprobeSession;

	static executeWithArgumentsAsyncWithCompleteCallbackWithLogCallbackOnDispatchQueue(_arguments: NSArray<any> | any[], completeCallback: (p1: FFprobeSession) => void, logCallback: (p1: Log) => void, queue: NSObject): FFprobeSession;

	static getMediaInformation(path: string): MediaInformationSession;

	static getMediaInformationAsyncWithCompleteCallback(path: string, completeCallback: (p1: MediaInformationSession) => void): MediaInformationSession;

	static getMediaInformationAsyncWithCompleteCallbackOnDispatchQueue(path: string, completeCallback: (p1: MediaInformationSession) => void, queue: NSObject): MediaInformationSession;

	static getMediaInformationAsyncWithCompleteCallbackWithLogCallbackOnDispatchQueueWithTimeout(path: string, completeCallback: (p1: MediaInformationSession) => void, logCallback: (p1: Log) => void, queue: NSObject, waitTimeout: number): MediaInformationSession;

	static getMediaInformationAsyncWithCompleteCallbackWithLogCallbackWithTimeout(path: string, completeCallback: (p1: MediaInformationSession) => void, logCallback: (p1: Log) => void, waitTimeout: number): MediaInformationSession;

	static getMediaInformationFromCommand(command: string): MediaInformationSession;

	static getMediaInformationFromCommandArgumentsAsyncWithCompleteCallbackWithLogCallbackOnDispatchQueueWithTimeout(_arguments: NSArray<any> | any[], completeCallback: (p1: MediaInformationSession) => void, logCallback: (p1: Log) => void, queue: NSObject, waitTimeout: number): MediaInformationSession;

	static getMediaInformationFromCommandAsyncWithCompleteCallbackWithLogCallbackOnDispatchQueueWithTimeout(command: string, completeCallback: (p1: MediaInformationSession) => void, logCallback: (p1: Log) => void, queue: NSObject, waitTimeout: number): MediaInformationSession;

	static getMediaInformationWithTimeout(path: string, waitTimeout: number): MediaInformationSession;

	static listFFprobeSessions(): NSArray<any>;

	static listMediaInformationSessions(): NSArray<any>;

	static new(): FFprobeKit; // inherited from NSObject
}

declare class FFprobeSession extends AbstractSession {

	static alloc(): FFprobeSession; // inherited from NSObject

	static new(): FFprobeSession; // inherited from NSObject

	constructor();

	constructor(o: { withCompleteCallback: NSArray<any> | any[]; });

	constructor(o: { withCompleteCallback: NSArray<any> | any[]; withLogCallback: (p1: FFprobeSession) => void; });

	constructor(o: { withCompleteCallback: NSArray<any> | any[]; withLogCallback: (p1: FFprobeSession) => void; withLogRedirectionStrategy: (p1: Log) => void; });

	getCompleteCallback(): (p1: FFprobeSession) => void;

	init(_arguments: NSArray<any> | any[]): this;

	initWithCompleteCallback(_arguments: NSArray<any> | any[], completeCallback: (p1: FFprobeSession) => void): this;

	initWithCompleteCallbackWithLogCallback(_arguments: NSArray<any> | any[], completeCallback: (p1: FFprobeSession) => void, logCallback: (p1: Log) => void): this;

	initWithCompleteCallbackWithLogCallbackWithLogRedirectionStrategy(_arguments: NSArray<any> | any[], completeCallback: (p1: FFprobeSession) => void, logCallback: (p1: Log) => void, logRedirectionStrategy: LogRedirectionStrategy): this;
}

declare const enum Level {

	AVLogStdErr = -16,

	AVLogQuiet = -8,

	AVLogPanic = 0,

	AVLogFatal = 8,

	AVLogError = 16,

	AVLogWarning = 24,

	AVLogInfo = 32,

	AVLogVerbose = 40,

	AVLogDebug = 48,

	AVLogTrace = 56
}

declare class Log extends NSObject {

	static alloc(): Log; // inherited from NSObject

	static new(): Log; // inherited from NSObject

	constructor();

	getLevel(): number;

	getMessage(): string;

	getSessionId(): number;

	init(sessionId: number, level: number, message: string): this;
}

declare const enum LogRedirectionStrategy {

	AlwaysPrintLogs = 0,

	PrintLogsWhenNoCallbacksDefined = 1,

	PrintLogsWhenGlobalCallbackNotDefined = 2,

	PrintLogsWhenSessionCallbackNotDefined = 3,

	NeverPrintLogs = 4
}

declare class MediaInformation extends NSObject {

	static alloc(): MediaInformation; // inherited from NSObject

	static new(): MediaInformation; // inherited from NSObject

	constructor(o: { withStreams: NSDictionary<any, any>; withChapters: NSArray<any> | any[]; });

	getAllProperties(): NSDictionary<any, any>;

	getBitrate(): string;

	getChapters(): NSArray<any>;

	getDuration(): string;

	getFilename(): string;

	getFormat(): string;

	getLongFormat(): string;

	getMediaProperties(): NSDictionary<any, any>;

	getNumberProperty(key: string): number;

	getProperties(key: string): NSDictionary<any, any>;

	getSize(): string;

	getStartTime(): string;

	getStreams(): NSArray<any>;

	getStringProperty(key: string): string;

	getTags(): NSDictionary<any, any>;

	initWithStreamsWithChapters(mediaDictionary: NSDictionary<any, any>, streams: NSArray<any> | any[], chapters: NSArray<any> | any[]): this;
}

declare class MediaInformationJsonParser extends NSObject {

	static alloc(): MediaInformationJsonParser; // inherited from NSObject

	static from(ffprobeJsonOutput: string): MediaInformation;

	static fromWith(ffprobeJsonOutput: string, error: NSError): MediaInformation;

	static new(): MediaInformationJsonParser; // inherited from NSObject
}

declare class MediaInformationSession extends AbstractSession {

	static alloc(): MediaInformationSession; // inherited from NSObject

	static new(): MediaInformationSession; // inherited from NSObject

	constructor();

	constructor(o: { withCompleteCallback: NSArray<any> | any[]; });

	constructor(o: { withCompleteCallback: NSArray<any> | any[]; withLogCallback: (p1: MediaInformationSession) => void; });

	getCompleteCallback(): (p1: MediaInformationSession) => void;

	getMediaInformation(): MediaInformation;

	init(_arguments: NSArray<any> | any[]): this;

	initWithCompleteCallback(_arguments: NSArray<any> | any[], completeCallback: (p1: MediaInformationSession) => void): this;

	initWithCompleteCallbackWithLogCallback(_arguments: NSArray<any> | any[], completeCallback: (p1: MediaInformationSession) => void, logCallback: (p1: Log) => void): this;

	setMediaInformation(mediaInformation: MediaInformation): void;
}

declare var MediaKeyBitRate: string;

declare var MediaKeyDuration: string;

declare var MediaKeyFilename: string;

declare var MediaKeyFormat: string;

declare var MediaKeyFormatLong: string;

declare var MediaKeyMediaProperties: string;

declare var MediaKeySize: string;

declare var MediaKeyStartTime: string;

declare var MediaKeyTags: string;

declare class Packages extends NSObject {

	static alloc(): Packages; // inherited from NSObject

	static getExternalLibraries(): NSArray<any>;

	static getPackageName(): string;

	static new(): Packages; // inherited from NSObject
}

declare class ReturnCode extends NSObject {

	static alloc(): ReturnCode; // inherited from NSObject

	static isCancel(value: ReturnCode): boolean;

	static isSuccess(value: ReturnCode): boolean;

	static new(): ReturnCode; // inherited from NSObject

	constructor();

	getValue(): number;

	init(value: number): this;

	isValueCancel(): boolean;

	isValueError(): boolean;

	isValueSuccess(): boolean;
}

declare const enum ReturnCodeEnum {

	Success = 0,

	Cancel = 255
}

interface Session {

	addLog(log: Log): void;

	cancel(): void;

	complete(returnCode: ReturnCode): void;

	fail(exception: NSException): void;

	getAllLogs(): NSArray<any>;

	getAllLogsAsString(): string;

	getAllLogsAsStringWithTimeout(waitTimeout: number): string;

	getAllLogsWithTimeout(waitTimeout: number): NSArray<any>;

	getArguments(): NSArray<any>;

	getCommand(): string;

	getCreateTime(): Date;

	getDuration(): number;

	getEndTime(): Date;

	getFailStackTrace(): string;

	getLogCallback(): (p1: Log) => void;

	getLogRedirectionStrategy(): LogRedirectionStrategy;

	getLogs(): NSArray<any>;

	getLogsAsString(): string;

	getOutput(): string;

	getReturnCode(): ReturnCode;

	getSessionId(): number;

	getStartTime(): Date;

	getState(): SessionState;

	isFFmpeg(): boolean;

	isFFprobe(): boolean;

	isMediaInformation(): boolean;

	startRunning(): void;

	thereAreAsynchronousMessagesInTransmit(): boolean;
}
declare var Session: {

	prototype: Session;
};

declare const enum SessionState {

	Created = 0,

	Running = 1,

	Failed = 2,

	Completed = 3
}

declare const enum Signal {

	Int = 2,

	Quit = 3,

	Pipe = 13,

	Term = 15,

	Xcpu = 24
}

declare class Statistics extends NSObject {

	static alloc(): Statistics; // inherited from NSObject

	static new(): Statistics; // inherited from NSObject

	constructor(o: { videoFrameNumber: number; videoFps: number; videoQuality: number; size: number; time: number; bitrate: number; speed: number; });

	getBitrate(): number;

	getSessionId(): number;

	getSize(): number;

	getSpeed(): number;

	getTime(): number;

	getVideoFps(): number;

	getVideoFrameNumber(): number;

	getVideoQuality(): number;

	initVideoFrameNumberVideoFpsVideoQualitySizeTimeBitrateSpeed(sessionId: number, videoFrameNumber: number, videoFps: number, videoQuality: number, size: number, time: number, bitrate: number, speed: number): this;
}

declare class StreamInformation extends NSObject {

	static alloc(): StreamInformation; // inherited from NSObject

	static new(): StreamInformation; // inherited from NSObject

	constructor();

	getAllProperties(): NSDictionary<any, any>;

	getAverageFrameRate(): string;

	getBitrate(): string;

	getChannelLayout(): string;

	getCodec(): string;

	getCodecLong(): string;

	getCodecTimeBase(): string;

	getDisplayAspectRatio(): string;

	getFormat(): string;

	getHeight(): number;

	getIndex(): number;

	getNumberProperty(key: string): number;

	getProperties(key: string): NSDictionary<any, any>;

	getRealFrameRate(): string;

	getSampleAspectRatio(): string;

	getSampleFormat(): string;

	getSampleRate(): string;

	getStringProperty(key: string): string;

	getTags(): NSDictionary<any, any>;

	getTimeBase(): string;

	getType(): string;

	getWidth(): number;

	init(streamDictionary: NSDictionary<any, any>): this;
}

declare var StreamKeyAverageFrameRate: string;

declare var StreamKeyBitRate: string;

declare var StreamKeyChannelLayout: string;

declare var StreamKeyCodec: string;

declare var StreamKeyCodecLong: string;

declare var StreamKeyCodecTimeBase: string;

declare var StreamKeyDisplayAspectRatio: string;

declare var StreamKeyFormat: string;

declare var StreamKeyHeight: string;

declare var StreamKeyIndex: string;

declare var StreamKeyRealFrameRate: string;

declare var StreamKeySampleAspectRatio: string;

declare var StreamKeySampleFormat: string;

declare var StreamKeySampleRate: string;

declare var StreamKeyTags: string;

declare var StreamKeyTimeBase: string;

declare var StreamKeyType: string;

declare var StreamKeyWidth: string;

declare var ex_buf__: interop.Reference<number>;

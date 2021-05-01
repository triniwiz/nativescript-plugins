export enum LogLevel {
	/**
	 * Print no output.
	 */
	AV_LOG_QUIET = -8,

	/**
	 * Something went really wrong and we will crash now.
	 */
	AV_LOG_PANIC = 0,

	/**
	 * Something went wrong and recovery is not possible.
	 * For example, no header was found for a format which depends
	 * on headers or an illegal combination of parameters is used.
	 */
	AV_LOG_FATAL = 8,

	/**
	 * Something went wrong and cannot losslessly be recovered.
	 * However, not all future data is affected.
	 */
	AV_LOG_ERROR = 16,

	/**
	 * Something somehow does not look correct. This may or may not
	 * lead to problems. An example would be the use of '-vstrict -2'.
	 */
	AV_LOG_WARNING = 24,

	/**
	 * Standard information.
	 */
	AV_LOG_INFO = 32,

	/**
	 * Detailed information.
	 */
	AV_LOG_VERBOSE = 40,

	/**
	 * Stuff which is only useful for libav* developers.
	 */
	AV_LOG_DEBUG = 48,

	/**
	 * Extremely verbose debugging, useful for libav* development.
	 */
	AV_LOG_TRACE = 56,
}

export enum TNSLogRedirectionStrategy {

	AlwaysPrintLogs = 0,

	PrintLogsWhenNoCallbacksDefined = 1,

	PrintLogsWhenGlobalCallbackNotDefined = 2,

	PrintLogsWhenSessionCallbackNotDefined = 3,

	NeverPrintLogs = 4
}

export enum TNSSessionState {
	Created = 'created',

	Running = 'running',

	Failed = 'failed',

	Completed = 'completed',
}

export abstract class TNSSessionBase {
	abstract readonly ios: any;
	abstract readonly android: any;
	readonly native: any;
	abstract readonly state: TNSSessionState;
	constructor(native: any) {
		this.native = native;
	}
	abstract cancel(): void;

    abstract addLog(log: TNSLogBase): void;

	abstract allLogs: TNSLogBase[];

	abstract allLogsAsString: string;

	abstract allLogsAsStringWithTimeout(waitTimeout: number): string;

	abstract allLogsWithTimeout(waitTimeout: number): any[];

	abstract arguments: string[];

	abstract command: string;

	abstract createTime: Date;

	abstract duration: number;

	abstract endTime: Date;

	abstract failStackTrace: string;

	abstract logRedirectionStrategy: TNSLogRedirectionStrategy;

	abstract logs: TNSLogBase[];

	abstract logsAsString: string;

	abstract output: string;

	abstract returnCode: TNSReturnCodeBase;

	abstract sessionId: number;

	abstract startTime: Date;

	abstract isFFmpeg: boolean;

	abstract isFFprobe: boolean;

	abstract startRunning(): void;

	abstract thereAreAsynchronousMessagesInTransmit: boolean;
}

export abstract class TNSLogBase {
	abstract readonly ios: any;
	abstract readonly android: any;
	readonly native: any;
	abstract readonly sessionId: number;
	abstract readonly logLevel: LogLevel;
	abstract readonly message: string;
	constructor(native: any) {
		this.native = native;
	}
}

export abstract class TNSStatisticsBase {
	abstract readonly ios: any;
	abstract readonly android: any;
	readonly native: any;
	constructor(native: any) {
		this.native = native;
	}

	abstract bitrate: number;
	abstract sessionId: number;
	abstract size: number;
	abstract speed: number;
	abstract time: number;
	abstract videoFps: number;
	abstract videoFrameNumber: number;
	abstract videoQuality: number;
}

export abstract class TNSReturnCodeBase {
	abstract readonly ios: any;
	abstract readonly android: any;
	readonly native: any;
	constructor(native: any) {
		this.native = native;
	}

	abstract readonly isSuccess: boolean;
	abstract readonly isError: boolean;
	abstract readonly isCancel: boolean;
	abstract readonly value: number;
}

export abstract class TNSMediaStreamBase {
	abstract readonly ios: any;
	abstract readonly android: any;
	readonly native: any;
	constructor(native: any) {
		this.native = native;
	}

	abstract id: number;
	abstract type: string;
	abstract codec: string;
	abstract fullCodec: string;
	abstract format: string;
	abstract width: number;
	abstract height: number;
	abstract bitrate: string;
	abstract sampleRate: string;
	abstract sampleFormat: string;
	abstract channelLayout: string;
	abstract sampleAspectRatio: string;
	abstract displayAspectRatio: string;
	abstract averageFrameRate: string;
	abstract realFrameRate: string;
	abstract timeBase: string;
	abstract codecTimeBase: string;
}

export abstract class TNSMediaInformationBase {
	abstract readonly ios: any;
	abstract readonly android: any;
	readonly native: any;
	constructor(native: any) {
		this.native = native;
	}
	abstract bitrate: string;
	abstract duration: string;
	abstract format: string;
	abstract fileName: string;
	abstract startTime: string;
	abstract tags: {[key: string]:[value: any]};
	abstract streams: TNSMediaStreamBase[];
}

export * from './common';
import { TNSSessionBase, TNSLogBase, TNSStatisticsBase, TNSMediaStreamBase, TNSMediaInformationBase } from './common';
export declare class TNSSession extends TNSSessionBase {
	readonly android;
	readonly ios: any;

	cancel(): void;

	addLog(log: TNSLogBase): void;

	readonly allLogs: TNSLogBase[];

	readonly allLogsAsString: string;

	allLogsAsStringWithTimeout(waitTimeout: number): string;

	allLogsWithTimeout(waitTimeout: number): any[];

	readonly arguments: string[];

	readonly command: string;

	readonly createTime: Date;

	readonly duration: number;

	readonly endTime: Date;

	readonly failStackTrace: string;

	readonly logRedirectionStrategy: TNSLogRedirectionStrategy;

	readonly logs: TNSLogBase[];

	readonly logsAsString: string;

	readonly output: string;

	readonly returnCode: TNSReturnCodeBase;

	readonly sessionId: number;

	readonly startTime: Date;

	readonly isFFmpeg: boolean;

	readonly isFFprobe: boolean;

	startRunning(): void;

	readonly thereAreAsynchronousMessagesInTransmit: boolean;
}

export declare class TNSLog extends TNSLogBase {
	readonly android: any;
	readonly ios: any;
	readonly sessionId: number;
	readonly logLevel: LogLevel;
	readonly message: string;
}

export declare class TNSStatistics extends TNSStatisticsBase {
	readonly ios: any;
	readonly android: any;
	readonly bitrate: number;
	readonly sessionId: number;
	readonly size: number;
	readonly speed: number;
	readonly time: number;
	readonly videoFps: number;
	readonly videoFrameNumber: number;
	readonly videoQuality: number;
}

export declare class TNSReturnCode extends TNSReturnCodeBase {
	readonly ios: any;
	readonly android: any;
	readonly isSuccess: boolean;
	readonly isCancel: boolean;
	readonly isError: boolean;
	readonly value: number;
}

export declare class TNSMediaStream extends TNSMediaStreamBase {
	readonly ios: any;
	readonly android: any;

	readonly id: number;
	readonly type: string;
	readonly codec: string;
	readonly fullCodec: string;
	readonly format: string;
	readonly width: number;
	readonly height: number;
	readonly bitrate: string;
	readonly sampleRate: string;
	readonly sampleFormat: string;
	readonly channelLayout: string;
	readonly sampleAspectRatio: string;
	readonly displayAspectRatio: string;
	readonly averageFrameRate: string;
	readonly realFrameRate: string;
	readonly timeBase: string;
	readonly codecTimeBase: string;
}

export declare class TNSMediaInformation extends TNSMediaInformationBase {
	readonly ios: any;
	readonly android: any;
	readonly bitrate: string;
	readonly duration: string;
	readonly format: string;
	readonly fileName: string;
	readonly startTime: string;
	readonly streams: TNSMediaStream[];
}

export declare class FFmpeg {
	public static execute(cmd: string): Promise<TNSSession>;

	public static executeWithArguments(args: string[]): Promise<TNSSession>;

	public static getFFmpegVersion(): number;

	public static getPlatform(): string;

	public static cancel();

	public static getMediaInformation(file: string): Promise<TNSMediaInformation>;

	public static getMediaInformation(file: string, sessionCallback: (session: TNSSession) => void): Promise<TNSMediaInformation>;

	public static getMediaInformation(file: string, sessionCallback: (session: TNSSession) => void, logCallback: (session: TNSSession) => void): Promise<TNSMediaInformation>;

	public static getMediaInformation(file: string, sessionCallback: (session: TNSSession) => void, logCallback: (session: TNSSession) => void, timeOut = 10000): Promise<TNSMediaInformation>;

	public static disableRedirection();

	public static enableRedirection();

	public static getLogLevel(): LogLevel;

	public static setLogLevel(level: LogLevel);

	public static disableLogs();

	public static disableStatistics();

	public static enableLogCallback(callback?: Function);

	public static enableStatisticsCallback(callback?: Function);

	public static resetStatistics();

	public static getExternalLibraries(): string[];

	public static getLastReceivedStatistics(): TNSStatistics | undefined;

	public static getLastReturnCode(): TNSReturnCode | undefined;

	public static getLastCommandOutput(): string;

	public static setFontDirectory();

	public static setFontconfigConfigurationPath();
}

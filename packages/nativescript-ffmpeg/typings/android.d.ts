declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class Abi {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.Abi>;
				public static ABI_ARMV7A_NEON: com.arthenica.ffmpegkit.Abi;
				public static ABI_ARMV7A: com.arthenica.ffmpegkit.Abi;
				public static ABI_ARM: com.arthenica.ffmpegkit.Abi;
				public static ABI_X86: com.arthenica.ffmpegkit.Abi;
				public static ABI_X86_64: com.arthenica.ffmpegkit.Abi;
				public static ABI_ARM64_V8A: com.arthenica.ffmpegkit.Abi;
				public static ABI_UNKNOWN: com.arthenica.ffmpegkit.Abi;
				public static from(param0: string): com.arthenica.ffmpegkit.Abi;
				public static valueOf(param0: string): com.arthenica.ffmpegkit.Abi;
				public getName(): string;
				public static values(): native.Array<com.arthenica.ffmpegkit.Abi>;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class AbiDetect {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.AbiDetect>;
				public static getCpuAbi(): string;
				public static getAbi(): string;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export abstract class AbstractSession extends com.arthenica.ffmpegkit.Session {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.AbstractSession>;
				public static sessionIdGenerator: java.util.concurrent.atomic.AtomicLong;
				public static DEFAULT_TIMEOUT_FOR_ASYNCHRONOUS_MESSAGES_IN_TRANSMIT: number;
				public sessionId: number;
				public executeCallback: com.arthenica.ffmpegkit.ExecuteCallback;
				public logCallback: com.arthenica.ffmpegkit.LogCallback;
				public createTime: java.util.Date;
				public startTime: java.util.Date;
				public endTime: java.util.Date;
				public arguments: native.Array<string>;
				public logs: java.util.List<com.arthenica.ffmpegkit.Log>;
				public logsLock: any;
				public future: java.util.concurrent.Future<any>;
				public state: com.arthenica.ffmpegkit.SessionState;
				public returnCode: com.arthenica.ffmpegkit.ReturnCode;
				public failStackTrace: string;
				public logRedirectionStrategy: com.arthenica.ffmpegkit.LogRedirectionStrategy;
				public isFFmpeg(): boolean;
				public getState(): com.arthenica.ffmpegkit.SessionState;
				public getSessionId(): number;
				public getLogCallback(): com.arthenica.ffmpegkit.LogCallback;
				public getDuration(): number;
				public getArguments(): native.Array<string>;
				public getCreateTime(): java.util.Date;
				public addLog(param0: com.arthenica.ffmpegkit.Log): void;
				public getEndTime(): java.util.Date;
				public getStartTime(): java.util.Date;
				public getLogRedirectionStrategy(): com.arthenica.ffmpegkit.LogRedirectionStrategy;
				public cancel(): void;
				public getFailStackTrace(): string;
				public getAllLogs(param0: number): java.util.List<com.arthenica.ffmpegkit.Log>;
				public getOutput(): string;
				public getCommand(): string;
				public getReturnCode(): com.arthenica.ffmpegkit.ReturnCode;
				public getFuture(): java.util.concurrent.Future<any>;
				public thereAreAsynchronousMessagesInTransmit(): boolean;
				public getAllLogs(): java.util.List<com.arthenica.ffmpegkit.Log>;
				public constructor(param0: native.Array<string>, param1: com.arthenica.ffmpegkit.ExecuteCallback, param2: com.arthenica.ffmpegkit.LogCallback, param3: com.arthenica.ffmpegkit.LogRedirectionStrategy);
				public getExecuteCallback(): com.arthenica.ffmpegkit.ExecuteCallback;
				public getAllLogsAsString(param0: number): string;
				public waitForAsynchronousMessagesInTransmit(param0: number): void;
				public getAllLogsAsString(): string;
				public getLogsAsString(): string;
				public getLogs(): java.util.List<com.arthenica.ffmpegkit.Log>;
				public isFFprobe(): boolean;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class AsyncFFmpegExecuteTask {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.AsyncFFmpegExecuteTask>;
				public constructor(param0: com.arthenica.ffmpegkit.FFmpegSession);
				public run(): void;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class AsyncFFprobeExecuteTask {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.AsyncFFprobeExecuteTask>;
				public run(): void;
				public constructor(param0: com.arthenica.ffmpegkit.FFprobeSession);
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class AsyncGetMediaInformationTask {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.AsyncGetMediaInformationTask>;
				public run(): void;
				public constructor(param0: com.arthenica.ffmpegkit.MediaInformationSession, param1: java.lang.Integer);
				public constructor(param0: com.arthenica.ffmpegkit.MediaInformationSession);
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class BuildConfig {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static BUILD_TYPE: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class CameraSupport {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.CameraSupport>;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class ExecuteCallback {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.ExecuteCallback>;
				/**
				 * Constructs a new instance of the com.arthenica.ffmpegkit.ExecuteCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					apply(param0: com.arthenica.ffmpegkit.Session): void;
				});
				public constructor();
				public apply(param0: com.arthenica.ffmpegkit.Session): void;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class FFmpegKit {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.FFmpegKit>;
				public static executeAsync(param0: string, param1: com.arthenica.ffmpegkit.ExecuteCallback, param2: com.arthenica.ffmpegkit.LogCallback, param3: com.arthenica.ffmpegkit.StatisticsCallback, param4: java.util.concurrent.ExecutorService): com.arthenica.ffmpegkit.FFmpegSession;
				public static executeAsync(param0: native.Array<string>, param1: com.arthenica.ffmpegkit.ExecuteCallback, param2: com.arthenica.ffmpegkit.LogCallback, param3: com.arthenica.ffmpegkit.StatisticsCallback, param4: java.util.concurrent.ExecutorService): com.arthenica.ffmpegkit.FFmpegSession;
				public static executeAsync(param0: native.Array<string>, param1: com.arthenica.ffmpegkit.ExecuteCallback, param2: java.util.concurrent.ExecutorService): com.arthenica.ffmpegkit.FFmpegSession;
				public static execute(param0: string): com.arthenica.ffmpegkit.FFmpegSession;
				public static cancel(param0: number): void;
				public static executeAsync(param0: native.Array<string>, param1: com.arthenica.ffmpegkit.ExecuteCallback, param2: com.arthenica.ffmpegkit.LogCallback, param3: com.arthenica.ffmpegkit.StatisticsCallback): com.arthenica.ffmpegkit.FFmpegSession;
				public static executeAsync(param0: string, param1: com.arthenica.ffmpegkit.ExecuteCallback, param2: java.util.concurrent.ExecutorService): com.arthenica.ffmpegkit.FFmpegSession;
				public static argumentsToString(param0: native.Array<string>): string;
				public static parseArguments(param0: string): native.Array<string>;
				public static executeAsync(param0: string, param1: com.arthenica.ffmpegkit.ExecuteCallback, param2: com.arthenica.ffmpegkit.LogCallback, param3: com.arthenica.ffmpegkit.StatisticsCallback): com.arthenica.ffmpegkit.FFmpegSession;
				public static listSessions(): java.util.List<com.arthenica.ffmpegkit.FFmpegSession>;
				public static executeAsync(param0: native.Array<string>, param1: com.arthenica.ffmpegkit.ExecuteCallback): com.arthenica.ffmpegkit.FFmpegSession;
				public static executeAsync(param0: string, param1: com.arthenica.ffmpegkit.ExecuteCallback): com.arthenica.ffmpegkit.FFmpegSession;
				public static cancel(): void;
				public static execute(param0: native.Array<string>): com.arthenica.ffmpegkit.FFmpegSession;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class FFmpegKitConfig {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.FFmpegKitConfig>;
				public static isLTSBuild(): boolean;
				public static asyncFFprobeExecute(param0: com.arthenica.ffmpegkit.FFprobeSession): void;
				public static getBuildDate(): string;
				public static getLogRedirectionStrategy(): com.arthenica.ffmpegkit.LogRedirectionStrategy;
				public static getLastSession(): com.arthenica.ffmpegkit.Session;
				public static setLogRedirectionStrategy(param0: com.arthenica.ffmpegkit.LogRedirectionStrategy): void;
				public static asyncFFprobeExecute(param0: com.arthenica.ffmpegkit.FFprobeSession, param1: java.util.concurrent.ExecutorService): void;
				public static printToLogcat(param0: number, param1: string): void;
				public static closeFFmpegPipe(param0: string): void;
				public static asyncGetMediaInformationExecute(param0: com.arthenica.ffmpegkit.MediaInformationSession, param1: java.util.concurrent.ExecutorService, param2: number): void;
				public static getAsyncConcurrencyLimit(): number;
				public static getSessionHistorySize(): number;
				public static asyncGetMediaInformationExecute(param0: com.arthenica.ffmpegkit.MediaInformationSession, param1: number): void;
				public static setSessionHistorySize(param0: number): void;
				public static ffmpegExecute(param0: com.arthenica.ffmpegkit.FFmpegSession): void;
				public static setAsyncConcurrencyLimit(param0: number): void;
				public static asyncFFmpegExecute(param0: com.arthenica.ffmpegkit.FFmpegSession, param1: java.util.concurrent.ExecutorService): void;
				public static setLogLevel(param0: com.arthenica.ffmpegkit.Level): void;
				public static getSession(param0: number): com.arthenica.ffmpegkit.Session;
				public static getSafParameterForRead(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri): string;
				public static getLogLevel(): com.arthenica.ffmpegkit.Level;
				public static getSessionsByState(param0: com.arthenica.ffmpegkit.SessionState): java.util.List<com.arthenica.ffmpegkit.Session>;
				public static enableLogCallback(param0: com.arthenica.ffmpegkit.LogCallback): void;
				public static enableRedirection(): void;
				public static setEnvironmentVariable(param0: string, param1: string): number;
				public static getLastCompletedSession(): com.arthenica.ffmpegkit.Session;
				public static ignoreSignal(param0: com.arthenica.ffmpegkit.Signal): void;
				public static enableExecuteCallback(param0: com.arthenica.ffmpegkit.ExecuteCallback): void;
				public static getSafParameterForWrite(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri): string;
				public static setFontDirectoryList(param0: globalAndroid.content.Context, param1: java.util.List<string>, param2: java.util.Map<string,string>): void;
				public static setFontconfigConfigurationPath(param0: string): number;
				public static ffprobeExecute(param0: com.arthenica.ffmpegkit.FFprobeSession): void;
				public static getMediaInformationExecute(param0: com.arthenica.ffmpegkit.MediaInformationSession, param1: number): void;
				public static enableStatisticsCallback(param0: com.arthenica.ffmpegkit.StatisticsCallback): void;
				public static setFontDirectory(param0: globalAndroid.content.Context, param1: string, param2: java.util.Map<string,string>): void;
				public static asyncFFmpegExecute(param0: com.arthenica.ffmpegkit.FFmpegSession): void;
				public static getSessions(): java.util.List<com.arthenica.ffmpegkit.Session>;
				public static disableRedirection(): void;
				public static getFFmpegVersion(): string;
				public static getSupportedCameraIds(param0: globalAndroid.content.Context): java.util.List<string>;
				public static getVersion(): string;
				public static messagesInTransmit(param0: number): number;
				public static registerNewFFmpegPipe(param0: globalAndroid.content.Context): string;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class FFmpegSession extends com.arthenica.ffmpegkit.AbstractSession implements com.arthenica.ffmpegkit.Session {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.FFmpegSession>;
				public isFFmpeg(): boolean;
				public getState(): com.arthenica.ffmpegkit.SessionState;
				public getSessionId(): number;
				public getLogCallback(): com.arthenica.ffmpegkit.LogCallback;
				public constructor(param0: native.Array<string>, param1: com.arthenica.ffmpegkit.ExecuteCallback, param2: com.arthenica.ffmpegkit.LogCallback, param3: com.arthenica.ffmpegkit.StatisticsCallback);
				public addStatistics(param0: com.arthenica.ffmpegkit.Statistics): void;
				public getDuration(): number;
				public getArguments(): native.Array<string>;
				public getStatisticsCallback(): com.arthenica.ffmpegkit.StatisticsCallback;
				public getCreateTime(): java.util.Date;
				public getAllStatistics(): java.util.List<com.arthenica.ffmpegkit.Statistics>;
				public addLog(param0: com.arthenica.ffmpegkit.Log): void;
				public getStatistics(): java.util.List<com.arthenica.ffmpegkit.Statistics>;
				public getEndTime(): java.util.Date;
				public getStartTime(): java.util.Date;
				public getLogRedirectionStrategy(): com.arthenica.ffmpegkit.LogRedirectionStrategy;
				public getAllStatistics(param0: number): java.util.List<com.arthenica.ffmpegkit.Statistics>;
				public cancel(): void;
				public getFailStackTrace(): string;
				public getAllLogs(param0: number): java.util.List<com.arthenica.ffmpegkit.Log>;
				public getOutput(): string;
				public getCommand(): string;
				public getReturnCode(): com.arthenica.ffmpegkit.ReturnCode;
				public getFuture(): java.util.concurrent.Future<any>;
				public thereAreAsynchronousMessagesInTransmit(): boolean;
				public getAllLogs(): java.util.List<com.arthenica.ffmpegkit.Log>;
				public constructor(param0: native.Array<string>, param1: com.arthenica.ffmpegkit.ExecuteCallback, param2: com.arthenica.ffmpegkit.LogCallback, param3: com.arthenica.ffmpegkit.LogRedirectionStrategy);
				public toString(): string;
				public constructor(param0: native.Array<string>, param1: com.arthenica.ffmpegkit.ExecuteCallback);
				public getExecuteCallback(): com.arthenica.ffmpegkit.ExecuteCallback;
				public getAllLogsAsString(param0: number): string;
				public constructor(param0: native.Array<string>, param1: com.arthenica.ffmpegkit.ExecuteCallback, param2: com.arthenica.ffmpegkit.LogCallback, param3: com.arthenica.ffmpegkit.StatisticsCallback, param4: com.arthenica.ffmpegkit.LogRedirectionStrategy);
				public getLastReceivedStatistics(): com.arthenica.ffmpegkit.Statistics;
				public getAllLogsAsString(): string;
				public getLogsAsString(): string;
				public constructor(param0: native.Array<string>);
				public isFFprobe(): boolean;
				public getLogs(): java.util.List<com.arthenica.ffmpegkit.Log>;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class FFprobeKit {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.FFprobeKit>;
				public static execute(param0: native.Array<string>): com.arthenica.ffmpegkit.FFprobeSession;
				public static getMediaInformation(param0: string, param1: number): com.arthenica.ffmpegkit.MediaInformationSession;
				public static executeAsync(param0: native.Array<string>, param1: com.arthenica.ffmpegkit.ExecuteCallback, param2: com.arthenica.ffmpegkit.LogCallback, param3: java.util.concurrent.ExecutorService): com.arthenica.ffmpegkit.FFprobeSession;
				public static executeAsync(param0: string, param1: com.arthenica.ffmpegkit.ExecuteCallback, param2: com.arthenica.ffmpegkit.LogCallback): com.arthenica.ffmpegkit.FFprobeSession;
				public static executeAsync(param0: native.Array<string>, param1: com.arthenica.ffmpegkit.ExecuteCallback): com.arthenica.ffmpegkit.FFprobeSession;
				public static execute(param0: string): com.arthenica.ffmpegkit.FFprobeSession;
				public static getMediaInformationAsync(param0: string, param1: com.arthenica.ffmpegkit.ExecuteCallback, param2: com.arthenica.ffmpegkit.LogCallback, param3: number): com.arthenica.ffmpegkit.MediaInformationSession;
				public static executeAsync(param0: native.Array<string>, param1: com.arthenica.ffmpegkit.ExecuteCallback, param2: com.arthenica.ffmpegkit.LogCallback): com.arthenica.ffmpegkit.FFprobeSession;
				public static executeAsync(param0: native.Array<string>, param1: com.arthenica.ffmpegkit.ExecuteCallback, param2: java.util.concurrent.ExecutorService): com.arthenica.ffmpegkit.FFprobeSession;
				public static getMediaInformationFromCommandAsync(param0: string, param1: com.arthenica.ffmpegkit.ExecuteCallback, param2: com.arthenica.ffmpegkit.LogCallback, param3: number): com.arthenica.ffmpegkit.MediaInformationSession;
				public static executeAsync(param0: string, param1: com.arthenica.ffmpegkit.ExecuteCallback, param2: java.util.concurrent.ExecutorService): com.arthenica.ffmpegkit.FFprobeSession;
				public static getMediaInformationAsync(param0: string, param1: com.arthenica.ffmpegkit.ExecuteCallback): com.arthenica.ffmpegkit.MediaInformationSession;
				public static getMediaInformationFromCommand(param0: string): com.arthenica.ffmpegkit.MediaInformationSession;
				public static executeAsync(param0: string, param1: com.arthenica.ffmpegkit.ExecuteCallback): com.arthenica.ffmpegkit.FFprobeSession;
				public static listSessions(): java.util.List<com.arthenica.ffmpegkit.FFprobeSession>;
				public static getMediaInformationAsync(param0: string, param1: com.arthenica.ffmpegkit.ExecuteCallback, param2: java.util.concurrent.ExecutorService): com.arthenica.ffmpegkit.MediaInformationSession;
				public static executeAsync(param0: string, param1: com.arthenica.ffmpegkit.ExecuteCallback, param2: com.arthenica.ffmpegkit.LogCallback, param3: java.util.concurrent.ExecutorService): com.arthenica.ffmpegkit.FFprobeSession;
				public static getMediaInformation(param0: string): com.arthenica.ffmpegkit.MediaInformationSession;
				public static getMediaInformationAsync(param0: string, param1: com.arthenica.ffmpegkit.ExecuteCallback, param2: com.arthenica.ffmpegkit.LogCallback, param3: java.util.concurrent.ExecutorService, param4: number): com.arthenica.ffmpegkit.MediaInformationSession;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class FFprobeSession extends com.arthenica.ffmpegkit.AbstractSession implements com.arthenica.ffmpegkit.Session {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.FFprobeSession>;
				public isFFmpeg(): boolean;
				public getState(): com.arthenica.ffmpegkit.SessionState;
				public getSessionId(): number;
				public getLogCallback(): com.arthenica.ffmpegkit.LogCallback;
				public getDuration(): number;
				public getArguments(): native.Array<string>;
				public getCreateTime(): java.util.Date;
				public addLog(param0: com.arthenica.ffmpegkit.Log): void;
				public getEndTime(): java.util.Date;
				public getStartTime(): java.util.Date;
				public getLogRedirectionStrategy(): com.arthenica.ffmpegkit.LogRedirectionStrategy;
				public cancel(): void;
				public getFailStackTrace(): string;
				public getAllLogs(param0: number): java.util.List<com.arthenica.ffmpegkit.Log>;
				public getOutput(): string;
				public getCommand(): string;
				public getReturnCode(): com.arthenica.ffmpegkit.ReturnCode;
				public getFuture(): java.util.concurrent.Future<any>;
				public constructor(param0: native.Array<string>, param1: com.arthenica.ffmpegkit.ExecuteCallback, param2: com.arthenica.ffmpegkit.LogCallback);
				public thereAreAsynchronousMessagesInTransmit(): boolean;
				public getAllLogs(): java.util.List<com.arthenica.ffmpegkit.Log>;
				public constructor(param0: native.Array<string>, param1: com.arthenica.ffmpegkit.ExecuteCallback, param2: com.arthenica.ffmpegkit.LogCallback, param3: com.arthenica.ffmpegkit.LogRedirectionStrategy);
				public toString(): string;
				public constructor(param0: native.Array<string>, param1: com.arthenica.ffmpegkit.ExecuteCallback);
				public getExecuteCallback(): com.arthenica.ffmpegkit.ExecuteCallback;
				public getAllLogsAsString(param0: number): string;
				public getAllLogsAsString(): string;
				public getLogsAsString(): string;
				public constructor(param0: native.Array<string>);
				public isFFprobe(): boolean;
				public getLogs(): java.util.List<com.arthenica.ffmpegkit.Log>;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class Level {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.Level>;
				public static AV_LOG_STDERR: com.arthenica.ffmpegkit.Level;
				public static AV_LOG_QUIET: com.arthenica.ffmpegkit.Level;
				public static AV_LOG_PANIC: com.arthenica.ffmpegkit.Level;
				public static AV_LOG_FATAL: com.arthenica.ffmpegkit.Level;
				public static AV_LOG_ERROR: com.arthenica.ffmpegkit.Level;
				public static AV_LOG_WARNING: com.arthenica.ffmpegkit.Level;
				public static AV_LOG_INFO: com.arthenica.ffmpegkit.Level;
				public static AV_LOG_VERBOSE: com.arthenica.ffmpegkit.Level;
				public static AV_LOG_DEBUG: com.arthenica.ffmpegkit.Level;
				public static AV_LOG_TRACE: com.arthenica.ffmpegkit.Level;
				public static valueOf(param0: string): com.arthenica.ffmpegkit.Level;
				public static values(): native.Array<com.arthenica.ffmpegkit.Level>;
				public static from(param0: number): com.arthenica.ffmpegkit.Level;
				public getValue(): number;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class Log {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.Log>;
				public getLevel(): com.arthenica.ffmpegkit.Level;
				public getSessionId(): number;
				public constructor(param0: number, param1: com.arthenica.ffmpegkit.Level, param2: string);
				public getMessage(): string;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class LogCallback {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.LogCallback>;
				/**
				 * Constructs a new instance of the com.arthenica.ffmpegkit.LogCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					apply(param0: com.arthenica.ffmpegkit.Log): void;
				});
				public constructor();
				public apply(param0: com.arthenica.ffmpegkit.Log): void;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class LogRedirectionStrategy {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.LogRedirectionStrategy>;
				public static ALWAYS_PRINT_LOGS: com.arthenica.ffmpegkit.LogRedirectionStrategy;
				public static PRINT_LOGS_WHEN_NO_CALLBACKS_DEFINED: com.arthenica.ffmpegkit.LogRedirectionStrategy;
				public static PRINT_LOGS_WHEN_GLOBAL_CALLBACK_NOT_DEFINED: com.arthenica.ffmpegkit.LogRedirectionStrategy;
				public static PRINT_LOGS_WHEN_SESSION_CALLBACK_NOT_DEFINED: com.arthenica.ffmpegkit.LogRedirectionStrategy;
				public static NEVER_PRINT_LOGS: com.arthenica.ffmpegkit.LogRedirectionStrategy;
				public static valueOf(param0: string): com.arthenica.ffmpegkit.LogRedirectionStrategy;
				public static values(): native.Array<com.arthenica.ffmpegkit.LogRedirectionStrategy>;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class MediaInformation {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.MediaInformation>;
				public static KEY_MEDIA_PROPERTIES: string;
				public static KEY_FILENAME: string;
				public static KEY_FORMAT: string;
				public static KEY_FORMAT_LONG: string;
				public static KEY_START_TIME: string;
				public static KEY_DURATION: string;
				public static KEY_SIZE: string;
				public static KEY_BIT_RATE: string;
				public static KEY_TAGS: string;
				public getTags(): org.json.JSONObject;
				public getMediaProperties(): org.json.JSONObject;
				public getFormat(): string;
				public getDuration(): string;
				public getLongFormat(): string;
				public getProperties(param0: string): org.json.JSONObject;
				public constructor(param0: org.json.JSONObject, param1: java.util.List<com.arthenica.ffmpegkit.StreamInformation>);
				public getSize(): string;
				public getBitrate(): string;
				public getStreams(): java.util.List<com.arthenica.ffmpegkit.StreamInformation>;
				public getStringProperty(param0: string): string;
				public getNumberProperty(param0: string): java.lang.Long;
				public getFilename(): string;
				public getStartTime(): string;
				public getAllProperties(): org.json.JSONObject;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class MediaInformationJsonParser {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.MediaInformationJsonParser>;
				public static from(param0: string): com.arthenica.ffmpegkit.MediaInformation;
				public static fromWithError(param0: string): com.arthenica.ffmpegkit.MediaInformation;
				public constructor();
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class MediaInformationSession extends com.arthenica.ffmpegkit.FFprobeSession implements com.arthenica.ffmpegkit.Session {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.MediaInformationSession>;
				public isFFmpeg(): boolean;
				public getState(): com.arthenica.ffmpegkit.SessionState;
				public getSessionId(): number;
				public getLogCallback(): com.arthenica.ffmpegkit.LogCallback;
				public getDuration(): number;
				public getArguments(): native.Array<string>;
				public getCreateTime(): java.util.Date;
				public setMediaInformation(param0: com.arthenica.ffmpegkit.MediaInformation): void;
				public addLog(param0: com.arthenica.ffmpegkit.Log): void;
				public getEndTime(): java.util.Date;
				public getStartTime(): java.util.Date;
				public getLogRedirectionStrategy(): com.arthenica.ffmpegkit.LogRedirectionStrategy;
				public getMediaInformation(): com.arthenica.ffmpegkit.MediaInformation;
				public cancel(): void;
				public getFailStackTrace(): string;
				public getAllLogs(param0: number): java.util.List<com.arthenica.ffmpegkit.Log>;
				public getOutput(): string;
				public getCommand(): string;
				public getReturnCode(): com.arthenica.ffmpegkit.ReturnCode;
				public getFuture(): java.util.concurrent.Future<any>;
				public constructor(param0: native.Array<string>, param1: com.arthenica.ffmpegkit.ExecuteCallback, param2: com.arthenica.ffmpegkit.LogCallback);
				public thereAreAsynchronousMessagesInTransmit(): boolean;
				public getAllLogs(): java.util.List<com.arthenica.ffmpegkit.Log>;
				public constructor(param0: native.Array<string>, param1: com.arthenica.ffmpegkit.ExecuteCallback, param2: com.arthenica.ffmpegkit.LogCallback, param3: com.arthenica.ffmpegkit.LogRedirectionStrategy);
				public toString(): string;
				public constructor(param0: native.Array<string>, param1: com.arthenica.ffmpegkit.ExecuteCallback);
				public getExecuteCallback(): com.arthenica.ffmpegkit.ExecuteCallback;
				public getAllLogsAsString(param0: number): string;
				public getAllLogsAsString(): string;
				public getLogsAsString(): string;
				public constructor(param0: native.Array<string>);
				public getLogs(): java.util.List<com.arthenica.ffmpegkit.Log>;
				public isFFprobe(): boolean;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class NativeLoader {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.NativeLoader>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class Packages {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.Packages>;
				public static getExternalLibraries(): java.util.List<string>;
				public static getPackageName(): string;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class ReturnCode {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.ReturnCode>;
				public static SUCCESS: number;
				public static CANCEL: number;
				public isError(): boolean;
				public isCancel(): boolean;
				public constructor(param0: number);
				public static isCancel(param0: com.arthenica.ffmpegkit.ReturnCode): boolean;
				public isSuccess(): boolean;
				public getValue(): number;
				public toString(): string;
				public static isSuccess(param0: com.arthenica.ffmpegkit.ReturnCode): boolean;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class Session {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.Session>;
				/**
				 * Constructs a new instance of the com.arthenica.ffmpegkit.Session interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getExecuteCallback(): com.arthenica.ffmpegkit.ExecuteCallback;
					getLogCallback(): com.arthenica.ffmpegkit.LogCallback;
					getSessionId(): number;
					getCreateTime(): java.util.Date;
					getStartTime(): java.util.Date;
					getEndTime(): java.util.Date;
					getDuration(): number;
					getArguments(): native.Array<string>;
					getCommand(): string;
					getAllLogs(param0: number): java.util.List<com.arthenica.ffmpegkit.Log>;
					getAllLogs(): java.util.List<com.arthenica.ffmpegkit.Log>;
					getLogs(): java.util.List<com.arthenica.ffmpegkit.Log>;
					getAllLogsAsString(param0: number): string;
					getAllLogsAsString(): string;
					getLogsAsString(): string;
					getOutput(): string;
					getState(): com.arthenica.ffmpegkit.SessionState;
					getReturnCode(): com.arthenica.ffmpegkit.ReturnCode;
					getFailStackTrace(): string;
					getLogRedirectionStrategy(): com.arthenica.ffmpegkit.LogRedirectionStrategy;
					thereAreAsynchronousMessagesInTransmit(): boolean;
					addLog(param0: com.arthenica.ffmpegkit.Log): void;
					getFuture(): java.util.concurrent.Future<any>;
					isFFmpeg(): boolean;
					isFFprobe(): boolean;
					cancel(): void;
				});
				public constructor();
				public isFFmpeg(): boolean;
				public getState(): com.arthenica.ffmpegkit.SessionState;
				public getSessionId(): number;
				public getLogCallback(): com.arthenica.ffmpegkit.LogCallback;
				public getDuration(): number;
				public getArguments(): native.Array<string>;
				public getCreateTime(): java.util.Date;
				public addLog(param0: com.arthenica.ffmpegkit.Log): void;
				public getEndTime(): java.util.Date;
				public getStartTime(): java.util.Date;
				public getLogRedirectionStrategy(): com.arthenica.ffmpegkit.LogRedirectionStrategy;
				public cancel(): void;
				public getFailStackTrace(): string;
				public getAllLogs(param0: number): java.util.List<com.arthenica.ffmpegkit.Log>;
				public getOutput(): string;
				public getCommand(): string;
				public getReturnCode(): com.arthenica.ffmpegkit.ReturnCode;
				public getFuture(): java.util.concurrent.Future<any>;
				public thereAreAsynchronousMessagesInTransmit(): boolean;
				public getAllLogs(): java.util.List<com.arthenica.ffmpegkit.Log>;
				public getExecuteCallback(): com.arthenica.ffmpegkit.ExecuteCallback;
				public getAllLogsAsString(param0: number): string;
				public getAllLogsAsString(): string;
				public getLogsAsString(): string;
				public getLogs(): java.util.List<com.arthenica.ffmpegkit.Log>;
				public isFFprobe(): boolean;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class SessionState {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.SessionState>;
				public static CREATED: com.arthenica.ffmpegkit.SessionState;
				public static RUNNING: com.arthenica.ffmpegkit.SessionState;
				public static FAILED: com.arthenica.ffmpegkit.SessionState;
				public static COMPLETED: com.arthenica.ffmpegkit.SessionState;
				public static values(): native.Array<com.arthenica.ffmpegkit.SessionState>;
				public static valueOf(param0: string): com.arthenica.ffmpegkit.SessionState;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class Signal {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.Signal>;
				public static SIGINT: com.arthenica.ffmpegkit.Signal;
				public static SIGQUIT: com.arthenica.ffmpegkit.Signal;
				public static SIGPIPE: com.arthenica.ffmpegkit.Signal;
				public static SIGTERM: com.arthenica.ffmpegkit.Signal;
				public static SIGXCPU: com.arthenica.ffmpegkit.Signal;
				public static valueOf(param0: string): com.arthenica.ffmpegkit.Signal;
				public static values(): native.Array<com.arthenica.ffmpegkit.Signal>;
				public getValue(): number;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class Statistics {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.Statistics>;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number);
				public getSessionId(): number;
				public getVideoQuality(): number;
				public setSize(param0: number): void;
				public toString(): string;
				public getTime(): number;
				public setBitrate(param0: number): void;
				public getBitrate(): number;
				public setVideoFps(param0: number): void;
				public setSessionId(param0: number): void;
				public setVideoQuality(param0: number): void;
				public getSize(): number;
				public setVideoFrameNumber(param0: number): void;
				public getSpeed(): number;
				public setSpeed(param0: number): void;
				public setTime(param0: number): void;
				public getVideoFrameNumber(): number;
				public getVideoFps(): number;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class StatisticsCallback {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.StatisticsCallback>;
				/**
				 * Constructs a new instance of the com.arthenica.ffmpegkit.StatisticsCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					apply(param0: com.arthenica.ffmpegkit.Statistics): void;
				});
				public constructor();
				public apply(param0: com.arthenica.ffmpegkit.Statistics): void;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class StreamInformation {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.StreamInformation>;
				public static KEY_INDEX: string;
				public static KEY_TYPE: string;
				public static KEY_CODEC: string;
				public static KEY_CODEC_LONG: string;
				public static KEY_FORMAT: string;
				public static KEY_WIDTH: string;
				public static KEY_HEIGHT: string;
				public static KEY_BIT_RATE: string;
				public static KEY_SAMPLE_RATE: string;
				public static KEY_SAMPLE_FORMAT: string;
				public static KEY_CHANNEL_LAYOUT: string;
				public static KEY_SAMPLE_ASPECT_RATIO: string;
				public static KEY_DISPLAY_ASPECT_RATIO: string;
				public static KEY_AVERAGE_FRAME_RATE: string;
				public static KEY_REAL_FRAME_RATE: string;
				public static KEY_TIME_BASE: string;
				public static KEY_CODEC_TIME_BASE: string;
				public static KEY_TAGS: string;
				public getType(): string;
				public getTags(): org.json.JSONObject;
				public constructor(param0: org.json.JSONObject);
				public getFormat(): string;
				public getRealFrameRate(): string;
				public getSampleFormat(): string;
				public getDisplayAspectRatio(): string;
				public getCodec(): string;
				public getCodecTimeBase(): string;
				public getProperties(param0: string): org.json.JSONObject;
				public getChannelLayout(): string;
				public getSampleRate(): string;
				public getBitrate(): string;
				public getStringProperty(param0: string): string;
				public getHeight(): java.lang.Long;
				public getSampleAspectRatio(): string;
				public getAverageFrameRate(): string;
				public getFullCodec(): string;
				public getNumberProperty(param0: string): java.lang.Long;
				public getWidth(): java.lang.Long;
				public getTimeBase(): string;
				public getAllProperties(): org.json.JSONObject;
				public getIndex(): java.lang.Long;
			}
		}
	}
}

//Generics information:


import { LogLevel, TNSLogBase, TNSLogRedirectionStrategy, TNSMediaInformationBase, TNSMediaStreamBase, TNSReturnCodeBase, TNSSessionBase, TNSSessionState, TNSStatisticsBase } from './common';

export { LogLevel };

export class TNSSession extends TNSSessionBase {
    native: Session;
	readonly  android: any;
	get ios() {
		return this.native;
	}
	cancel(): void {
		this.native?.cancel();
	}

    addLog(log: TNSLog): void {
        this.native.addLog(log.native);
    }

    get allLogs(): TNSLog[] {
        const logs = [];
        this.native.getAllLogs().enumerateObjectsUsingBlock((log, index, stop) =>{
            logs.push(new TNSLog(log));
        });
        return logs;
    }
    get allLogsAsString(): string {
       return this.native.getAllLogsAsString();
    }

    allLogsAsStringWithTimeout(waitTimeout: number): string {
        return this.native.getAllLogsAsStringWithTimeout(waitTimeout);
    }

    allLogsWithTimeout(waitTimeout: number): any[] {
        const logs = [];
        this.native.getAllLogsWithTimeout(waitTimeout).enumerateObjectsUsingBlock((log, index, stop) =>{
            logs.push(new TNSLog(log));
        });
        return logs;
    }

    get arguments(): any[] {
        const args =  [];
        this.native.getArguments().enumerateObjectsUsingBlock((arg, index, stop)=>{
        args.push(args);
        });
        return args;
    }
    get command(): string {
        return this.native.getCommand();
    }
    get createTime(): Date {
        return this.native.getCreateTime();
    }
    get duration(): number {
        return this.native.getDuration();
    }
    get endTime(): Date {
        return this.native.getEndTime();
    }
    get failStackTrace(): string {
        return this.native.getFailStackTrace();
    }
    get logRedirectionStrategy(): TNSLogRedirectionStrategy {
      return this.native.getLogRedirectionStrategy().valueOf();
    }
    get logs(): TNSLog[] {
        const logs = [];
        this.native.getLogs().enumerateObjectsUsingBlock((log, index, stop) =>{
            logs.push(new TNSLog(log));
        });
        return logs;
    }
    get logsAsString(): string {
        return this.native.getAllLogsAsString();
    }
    get output(): string {
        return this.native.getOutput();
    }
    get returnCode(): TNSReturnCode {
        return new TNSReturnCode(this.native.getReturnCode());
    }
    get sessionId(): number {
        return this.native.getSessionId();
    }
    get startTime(): Date {
        return this.native.getStartTime();
    }
    get state() {
		switch (this.native.getState()) {
			case SessionState.Completed:
				return TNSSessionState.Completed;
			case SessionState.Created:
				return TNSSessionState.Created;
			case SessionState.Failed:
				return TNSSessionState.Failed;
			case SessionState.Running:
				return TNSSessionState.Running;
		}
	}
    get isFFmpeg(): boolean {
        return this.native.isFFmpeg();
    }
    get isFFprobe(): boolean {
        return this.native.isFFprobe();
    }
    startRunning(): void {
        this.native.startRunning();
    }
    get thereAreAsynchronousMessagesInTransmit(): boolean {
        return this.native.thereAreAsynchronousMessagesInTransmit();
    }
}

export class TNSLog extends TNSLogBase {
	native: Log;
	readonly android: any;
	get ios(): any {
		return this.native;
	}
	get sessionId(): number {
		return this.native.getSessionId();
	}
	get logLevel(): LogLevel {
		return this.native.getLevel();
	}
	get message(): string {
		return this.native.getMessage();
	}
}

export class TNSStatistics extends TNSStatisticsBase {
	native: Statistics;
	get ios(): any {
		return this.native;
	}
	android: any;
	get bitrate(): number {
		return this.native.getBitrate();
	}

	get sessionId(): number {
		return this.native.getSessionId();
	}

	get size(): number {
		return this.native.getSize();
	}

	get speed(): number {
		return this.native.getSpeed();
	}

	get time(): number {
		return this.native.getTime();
	}

	get videoFps(): number {
		return this.native.getVideoFps();
	}

	get videoFrameNumber(): number {
		return this.native.getVideoFrameNumber();
	}

	get videoQuality(): number {
		return this.native.getVideoQuality();
	}
}

export class TNSReturnCode extends TNSReturnCodeBase {
	native: ReturnCode;
	get ios() {
		return this.native;
	}
	android: any;
	get isSuccess(): boolean {
		return this.native.isSuccess();
	}

	get isCancel(): boolean {
		return this.native.isCancel();
	}
	get isError(): boolean {
		return this.native.isError();
	}

	get value(): number {
		return this.native.getValue();
	}

	static fromNative(native: ReturnCode): TNSReturnCode | undefined {
		if (native) {
			return new TNSReturnCode(native);
		}
		return undefined;
	}
}

export class TNSMediaStream extends TNSMediaStreamBase {
	native: StreamInformation;
	get ios(): any {
		return this.native;
	}
	android: any;

	get id(): number {
		return this.native.getIndex();
	}
	get type(): string {
		return this.native.getType();
	}
	get codec(): string {
		return this.native.getCodec();
	}
	get fullCodec(): string {
		return this.native.getFullCodec();
	}
	get format(): string {
		return this.native.getFormat();
	}
	get width(): number {
		return this.native.getWidth();
	}
	get height(): number {
		return this.native.getHeight();
	}
	get bitrate(): string {
		return this.native.getBitrate();
	}
	get sampleRate(): string {
		return this.native.getSampleRate();
	}
	get sampleFormat(): string {
		return this.native.getSampleFormat();
	}
	get channelLayout(): string {
		return this.native.getChannelLayout();
	}
	get sampleAspectRatio(): string {
		return this.native.getSampleAspectRatio();
	}
	get displayAspectRatio(): string {
		return this.native.getDisplayAspectRatio();
	}
	get averageFrameRate(): string {
		return this.native.getAverageFrameRate();
	}
	get realFrameRate(): string {
		return this.native.getRealFrameRate();
	}
	get timeBase(): string {
		return this.native.getTimeBase();
	}
	get codecTimeBase(): string {
		return this.native.getCodecTimeBase();
	}
}

export class TNSMediaInformation extends TNSMediaInformationBase {
	native: MediaInformationSession;

	get ios(): any {
		return this.native;
	}
	android: any;

	get bitrate() {
		return this.native.getMediaInformation().getBitrate();
	}

	get duration(): string {
		return this.native.getMediaInformation().getDuration();
	}
	get format(): string {
		return this.native.getMediaInformation().getFormat();
	}
	get fileName(): string {
		return this.native.getMediaInformation().getFilename();
	}
	get startTime(): string {
		return this.native.getMediaInformation().getStartTime();
	}
	get tags(): {[key: string]:any} {
		const tags = {};
		const info = this.native.getMediaInformation();
		if (info) {
			const allTags = this.native.getMediaInformation().getTags();
			const allKeys = allTags.allKeys;
			const count = allKeys.count;
			for (let i = 0; i < count; i++) {
				const key = allKeys.objectAtIndex(i);
				tags[key] = allTags.objectForKey(key);
			}
		}
        return tags;
	}

	get streams(): TNSMediaStream[] {
		const streams = [];
		const info = this.native.getMediaInformation();
		if (info) {
			const ns = info.getStreams();
			const count = ns.count;
			for (let i = 0; i < count; i++) {
				streams.push(new TNSMediaStream(ns.objectAtIndex(i)));
			}
		}
		return streams;
	}
}

export class FFmpeg {
	private static _logCallback: Function;
	private static _statisticsCallback: Function;

	public static execute(cmd: string, statisticsCallback: (session: TNSStatistics) => void = null, logCallback: (session: TNSLog) => void = null): Promise<TNSSession> {
		return new Promise((resolve, reject) => {
			FFmpegKit.executeAsyncWithCompleteCallbackWithLogCallbackWithStatisticsCallback(
				cmd,
				(session) => {
					resolve(new TNSSession(session));
				},
				(log) => {
					if (typeof logCallback === 'function') {
						logCallback(new TNSLog(log));
					}
				},
				(statistics) => {
					if (typeof statisticsCallback === 'function') {
						statisticsCallback(new TNSStatistics(statistics));
					}
				}
			);
		});
	}

	public static executeWithArguments(args: string[], statisticsCallback: (session: TNSStatistics) => void = null, logCallback: (session: TNSLog) => void = null): Promise<TNSSession> {
		return new Promise((resolve, reject) => {
			FFmpegKit.executeWithArgumentsAsyncWithExecuteCallbackWithLogCallbackWithStatisticsCallback(
				args,
				(session) => {
					resolve(new TNSSession(session));
				},
				(log) => {
					if (typeof logCallback === 'function') {
						logCallback(new TNSLog(log));
					}
				},
				(statistics) => {
					if (typeof statisticsCallback === 'function') {
						statisticsCallback(new TNSStatistics(statistics));
					}
				}
			);
		});
	}

	public static getFFmpegVersion() {
		return FFmpegKitConfig.getFFmpegVersion();
	}

	public static getPlatform(): string {
		return `ios-${ArchDetect.getArch()}`;
	}

	public static cancel() {
		FFmpegKit.cancel();
	}

	public static getMediaInformation(file: string, sessionCallback: (session: TNSSession) => void = null, logCallback: (session: TNSLog) => void = null, timeOut = 10000): Promise<TNSMediaInformation> {
		return new Promise((resolve, reject) => {
			FFprobeKit.getMediaInformationAsyncWithCompleteCallbackWithLogCallbackWithTimeout(
				file,
				(session) => {
					if(!session){
						reject('Failed to get mediainformation');
					}
					resolve(new TNSMediaInformation(session));
				},
				(log) => {
                    if(logCallback){
                        logCallback?.(new TNSLog(log));
                    }
                },
				timeOut
			);
		});
	}

	public static disableRedirection() {
		FFmpegKitConfig.disableRedirection();
	}

	public static enableRedirection() {
		FFmpegKitConfig.enableRedirection();
	}

	public static getLogLevel(): LogLevel {
		return FFmpegKitConfig.getLogLevel();
	}

	public static setLogLevel(level: LogLevel) {
		FFmpegKitConfig.setLogLevel(level.valueOf());
	}

	public static disableLogs() {
		FFmpegKitConfig.setLogLevel(LogLevel.AV_LOG_QUIET);
	}

	public static disableStatistics() {
		FFmpegKitConfig.enableStatisticsCallback(null);
	}

	public static enableLogCallback(callback?: Function) {
		if (typeof callback === 'function') {
			this._logCallback = callback;
			FFmpegKitConfig.enableLogCallback((log) => {
				this._logCallback?.(new TNSLog(log));
			});
		} else {
			this._logCallback = undefined;
			FFmpegKitConfig.enableLogCallback(null);
		}
	}

	public static enableStatisticsCallback(callback?: Function) {
		if (typeof callback === 'function') {
			this._statisticsCallback = callback;
			FFmpegKitConfig.enableStatisticsCallback((statistics) => {
				this._statisticsCallback?.(new TNSStatistics(statistics));
			});
		} else {
			com.arthenica.ffmpegkit.FFmpegKitConfig.enableStatisticsCallback(null);
			this._statisticsCallback = undefined;
		}
	}

	public static resetStatistics() {}

	public static getExternalLibraries(): string[] {
		const nl = Packages.getExternalLibraries();
		const libs = [];
		for (let i = 0; i < nl.count; i++) {
			libs.push(nl.objectAtIndex(i));
		}
		return libs;
	}

	public static getLastReceivedStatistics(): TNSStatistics | undefined {
		const session: FFmpegSession = FFmpegKitConfig.getFFmpegSessions().lastObject;
		if (session) {
			const statistics = session.getLastReceivedStatistics();
			if (statistics) {
				return new TNSStatistics(statistics);
			}
		}
		return;
	}

	public static getLastReturnCode(): TNSReturnCode | undefined {
		return TNSReturnCode.fromNative(FFmpegKitConfig.getLastSession()?.getReturnCode?.());
	}

	public static getLastCommandOutput(): string {
		return FFmpegKitConfig.getLastSession()?.getCommand?.() ?? '';
	}

	public static setFontDirectory() {}

	public static setFontconfigConfigurationPath() {}
}

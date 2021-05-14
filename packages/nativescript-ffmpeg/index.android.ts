import { LogLevel, TNSLogBase, TNSLogRedirectionStrategy, TNSMediaInformationBase, TNSMediaStreamBase, TNSReturnCodeBase, TNSSessionBase, TNSSessionState, TNSStatisticsBase } from './common';

export class TNSSession extends TNSSessionBase {
	native: com.arthenica.ffmpegkit.Session;
	get android() {
		return this.native;
	}
	get ios() {
		return undefined;
	}

    cancel(): void {
		this.native?.cancel();
	}

    addLog(log: TNSLog): void {
        this.native.addLog(log.native);
    }

    get allLogs(): TNSLog[] {
        const logs = [];
        const nl = this.native.getAllLogs().toArray();
        for(let i = 0; i< nl.length; i++){
            logs.push(new TNSLog(nl[i]));
        }
        return logs;
    }
    get allLogsAsString(): string {
       return this.native.getAllLogsAsString();
    }

    allLogsAsStringWithTimeout(waitTimeout: number): string {
        return this.native.getAllLogsAsString(waitTimeout);
    }

    allLogsWithTimeout(waitTimeout: number): any[] {
        const logs = [];
        const nl = this.native.getAllLogs(waitTimeout).toArray();
        for(let i = 0; i< nl.length; i++){
            logs.push(new TNSLog(nl[i]));
        }
        return logs;
    }

    get arguments(): any[] {
        const args = [];
        const na = this.native.getArguments();
        for(let i = 0; i< na.length; i++){
            args.push(na[i]);
        }
        return args;
    }
    get command(): string {
        return this.native.getCommand();
    }
    get createTime(): Date {
        return this.native.getCreateTime() as any;
    }
    get duration(): number {
        return this.native.getDuration();
    }
    get endTime(): Date {
        return this.native.getEndTime() as any;
    }

    get failStackTrace(): string {
        return this.native.getFailStackTrace();
    }

    get logRedirectionStrategy(): TNSLogRedirectionStrategy {
      return this.native.getLogRedirectionStrategy().valueOf() as any;
    }
    get logs(): TNSLog[] {
        const logs = [];
        const nl = this.native.getLogs().toArray();
        for(let i = 0; i< nl.length; i++){
            logs.push(new TNSLog(nl[i]));
        }
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
        return this.native.getStartTime() as any;
    }
    public get state(){
        switch(this.native.getState()){
            case com.arthenica.ffmpegkit.SessionState.COMPLETED:
                return TNSSessionState.Completed;
                case com.arthenica.ffmpegkit.SessionState.CREATED:
                return TNSSessionState.Created;
                case com.arthenica.ffmpegkit.SessionState.FAILED:
                return TNSSessionState.Failed;
                case com.arthenica.ffmpegkit.SessionState.RUNNING:
                return TNSSessionState.Running;
        }
    }
    get isFFmpeg(): boolean {
        return this.native.isFFmpeg();
    }
    get isFFprobe(): boolean {
        return this.native.isFFprobe();
    }
    startRunning(): void {}
    get thereAreAsynchronousMessagesInTransmit(): boolean {
        return this.native.thereAreAsynchronousMessagesInTransmit();
    }
}

export class TNSLog extends TNSLogBase {
	native: com.arthenica.ffmpegkit.Log;
	get android(): any{
        return this.native;
    }
	ios: any;
	get sessionId(): number {
		return this.native.getSessionId();
	}
	get logLevel(): LogLevel {
		return this.native.getLevel().getValue();
	}
	get message(): string {
		return this.native.getMessage();
	}
}
export class TNSStatistics extends TNSStatisticsBase {
	native: com.arthenica.ffmpegkit.Statistics;
	ios: any;
	get android(): any  {
		return this.native;
	}
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
	native: com.arthenica.ffmpegkit.ReturnCode;
	ios: any;
	get android(){
        return this.native;
    }
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

	static fromNative(native: com.arthenica.ffmpegkit.ReturnCode): TNSReturnCode | undefined {
		if (native) {
			return new TNSReturnCode(native);
		}
		return undefined;
	}
}

export class TNSMediaStream extends TNSMediaStreamBase {
	native: com.arthenica.ffmpegkit.StreamInformation;
	readonly ios: any;
	get android(): any{
        return this.native;
    }

	get id(): number {
		return this.native.getIndex().longValue();
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
		return this.native.getWidth().longValue();
	}
	get height(): number {
		return this.native.getHeight().longValue();
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
	native: com.arthenica.ffmpegkit.MediaInformationSession;

	get android(): any {
		return this.native;
	}
	readonly ios: any;

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
	get tags(): {[key: string]: any} {
        let json = {};
        try{
            json = JSON.parse(this.native.getMediaInformation().getTags().toString())
        }catch(e){}
        return json;
	}

	get streams(): TNSMediaStream[] {
		const info = this.native.getMediaInformation().getStreams();
		const count = info.size();
		const streams = [];
		for (let i = 0; i < count; i++) {
			streams.push(new TNSMediaStream(info.get(i)));
		}
		return streams;
	}
}


export class FFmpeg {
	private static _logCallback: Function;
	private static _statisticsCallback: Function;
	public static execute(cmd: string, statisticsCallback: (session: TNSStatistics) => void = null, logCallback: (session: TNSLog) => void = null): Promise<TNSSession> {
        return new Promise((resolve, reject) => {
            com.arthenica.ffmpegkit.FFmpegKit.executeAsync(cmd, new com.arthenica.ffmpegkit.ExecuteCallback({
                apply(session: com.arthenica.ffmpegkit.Session){
                    resolve(new TNSSession(session));
                }
            }),new com.arthenica.ffmpegkit.LogCallback({
                apply(log: com.arthenica.ffmpegkit.Log){
                    if (typeof logCallback === 'function') {
						logCallback(new TNSLog(log));
					}
                }
            }), new com.arthenica.ffmpegkit.StatisticsCallback({
                apply(statistics: com.arthenica.ffmpegkit.Statistics){
                    if (typeof statisticsCallback === 'function') {
						statisticsCallback(new TNSStatistics(statistics));
					}
                }
            }));
		});
	}

	public static executeWithArguments(args: string[], statisticsCallback: (session: TNSStatistics) => void = null, logCallback: (session: TNSLog) => void = null): Promise<TNSSession> {
		return new Promise((resolve, reject) => {
            com.arthenica.ffmpegkit.FFmpegKit.executeAsync(args, new com.arthenica.ffmpegkit.ExecuteCallback({
                apply(session: com.arthenica.ffmpegkit.Session){
                    resolve(new TNSSession(session));
                }
            }),new com.arthenica.ffmpegkit.LogCallback({
                apply(log: com.arthenica.ffmpegkit.Log){
                    if (typeof logCallback === 'function') {
						logCallback(new TNSLog(log));
					}
                }
            }), new com.arthenica.ffmpegkit.StatisticsCallback({
                apply(statistics: com.arthenica.ffmpegkit.Statistics){
                    if (typeof statisticsCallback === 'function') {
						statisticsCallback(new TNSStatistics(statistics));
					}
                }
            }));
		});
	}

	public static getFFmpegVersion() {
		return com.arthenica.ffmpegkit.FFmpegKitConfig.getFFmpegVersion();
	}

	public static getPlatform(): string{
        return `android-${com.arthenica.ffmpegkit.AbiDetect.getAbi()}`;
	}

	public static cancel(){
		com.arthenica.ffmpegkit.FFmpegKit.cancel();
    }

	public static getMediaInformation(file: string, sessionCallback: (session: TNSSession) => void = null, logCallback: (session: TNSLog) => void = null, timeOut = 10000): Promise<any> {
        return new Promise((resolve,reject)=>{
            com.arthenica.ffmpegkit.FFprobeKit.getMediaInformationAsync(file,new com.arthenica.ffmpegkit.ExecuteCallback({
                apply(session: com.arthenica.ffmpegkit.Session){
                    resolve(new TNSMediaInformation(session));
                }
            }),new com.arthenica.ffmpegkit.LogCallback({
                apply(log: com.arthenica.ffmpegkit.Log){
                    if (typeof logCallback === 'function') {
						logCallback(new TNSLog(log));
					}
                }
            }), timeOut);
        })
	}

	public static disableRedirection() {
        com.arthenica.ffmpegkit.FFmpegKitConfig.disableRedirection();
	}

	public static enableRedirection() {
		com.arthenica.ffmpegkit.FFmpegKitConfig.enableRedirection();
	}

	public static getLogLevel(): LogLevel {
        return com.arthenica.ffmpegkit.FFmpegKitConfig.getLogLevel().getValue();
	}

	public static setLogLevel(level: LogLevel) {
		com.arthenica.ffmpegkit.FFmpegKitConfig.setLogLevel(com.arthenica.ffmpegkit.Level.from(level.valueOf()));
	}

	public static disableLogs() {
		com.arthenica.ffmpegkit.FFmpegKitConfig.setLogLevel(com.arthenica.ffmpegkit.Level.AV_LOG_QUIET);
	}

	public static disableStatistics() {
        com.arthenica.ffmpegkit.FFmpegKitConfig.enableStatisticsCallback(null);
	}

	public static enableLogCallback(callback?: Function) {
        if(typeof callback === 'function'){
            this._logCallback = callback;
            com.arthenica.ffmpegkit.FFmpegKitConfig.enableLogCallback(new com.arthenica.ffmpegkit.LogCallback({
                apply(log: com.arthenica.ffmpegkit.Log){
                    callback(new TNSLog(log));
                }
            }))
        }else {
            com.arthenica.ffmpegkit.FFmpegKitConfig.enableLogCallback(null);
        }
	}

	public static enableStatisticsCallback(callback?: Function) {
		if(typeof callback === 'function'){
            this._statisticsCallback = callback;
            com.arthenica.ffmpegkit.FFmpegKitConfig.enableStatisticsCallback(new com.arthenica.ffmpegkit.StatisticsCallback({
                apply(statistics: com.arthenica.ffmpegkit.Statistics){
                    callback(new TNSStatistics(statistics));
                }
            }))
        }else {
            com.arthenica.ffmpegkit.FFmpegKitConfig.enableStatisticsCallback(null);
        }
	}

	public static resetStatistics() {

	}

	public static getExternalLibraries(): string[] {
        const nl = com.arthenica.ffmpegkit.Packages.getExternalLibraries().toArray();
        const libs = [];
        for(let i = 0; i < nl.length;i++){
            libs.push(nl[i]);
        }
        return libs;
	}

	public static getLastReceivedStatistics(): TNSStatistics | undefined {
        const session = com.arthenica.ffmpegkit.FFmpegKitConfig.getLastSession();
		if (session && session.isFFmpeg()) {
			const statistics = (session as com.arthenica.ffmpegkit.FFmpegSession).getLastReceivedStatistics();
			if (statistics) {
				return new TNSStatistics(statistics);
			}
		}
		return;
	}

	public static getLastReturnCode(): TNSReturnCode {
        return TNSReturnCode.fromNative(com.arthenica.ffmpegkit.FFmpegKitConfig.getLastSession()?.getReturnCode?.());
	}

	public static getLastCommandOutput(): string {
		return com.arthenica.ffmpegkit.FFmpegKitConfig.getLastSession()?.getCommand?.() ?? '';
	}

	public static setFontDirectory() {}

	public static setFontconfigConfigurationPath() {}

}

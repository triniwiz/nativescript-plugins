import { VideoRecorderBase, CameraPosition, CameraPositionType, Options, RecordResult, VideoFormat, VideoFormatType } from './common';
export { CameraPosition, CameraPositionType, Options, RecordResult, VideoFormat, VideoFormatType };
export declare class VideoRecorder extends VideoRecorderBase {
	options: Options;
	constructor(options: Options = {});

	@deprecated('Options as argument is deprecated here')
	public record(options: Options = {}): Promise<RecordResult>;

	public requestPermissions(explanation?: string): Promise<void>;

	public static isAvailable(): boolean;
}

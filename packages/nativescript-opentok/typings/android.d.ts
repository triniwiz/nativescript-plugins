/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module opentok {
		export module android {
			export class AudioDeviceManager {
				public static class: java.lang.Class<com.opentok.android.AudioDeviceManager>;
				public static getAudioDevice(): com.opentok.android.BaseAudioDevice;
				public static setAudioDevice(param0: com.opentok.android.BaseAudioDevice): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export abstract class BaseAudioDevice {
				public static class: java.lang.Class<com.opentok.android.BaseAudioDevice>;
				public getCaptureSettings(): com.opentok.android.BaseAudioDevice.AudioSettings;
				public onResume(): void;
				public destroyCapturer(): boolean;
				public getEstimatedCaptureDelay(): number;
				public getOutputMode(): com.opentok.android.BaseAudioDevice.OutputMode;
				public onPause(): void;
				public finalize(): void;
				public startRenderer(): boolean;
				public startCapturer(): boolean;
				public getAudioBus(): com.opentok.android.BaseAudioDevice.AudioBus;
				public constructor();
				public getEstimatedRenderDelay(): number;
				public initRenderer(): boolean;
				public destroyRenderer(): boolean;
				public getRenderSettings(): com.opentok.android.BaseAudioDevice.AudioSettings;
				public stopCapturer(): boolean;
				public setOutputMode(param0: com.opentok.android.BaseAudioDevice.OutputMode): boolean;
				public stopRenderer(): boolean;
				public getBluetoothState(): com.opentok.android.BaseAudioDevice.BluetoothState;
				public initCapturer(): boolean;
			}
			export module BaseAudioDevice {
				export class AudioBus {
					public static class: java.lang.Class<com.opentok.android.BaseAudioDevice.AudioBus>;
					public readRenderData(param0: java.nio.ByteBuffer, param1: number): number;
					public writeCaptureData(param0: java.nio.ByteBuffer, param1: number): void;
					public readRenderData(param0: java.nio.ShortBuffer, param1: number): number;
					public writeCaptureData(param0: java.nio.ShortBuffer, param1: number): void;
				}
				export class AudioSettings {
					public static class: java.lang.Class<com.opentok.android.BaseAudioDevice.AudioSettings>;
					public getNumChannels(): number;
					public getSampleRate(): number;
					public setNumChannels(param0: number): void;
					public setSampleRate(param0: number): void;
					public constructor(param0: number, param1: number);
				}
				export class BluetoothState {
					public static class: java.lang.Class<com.opentok.android.BaseAudioDevice.BluetoothState>;
					public static Connected: com.opentok.android.BaseAudioDevice.BluetoothState;
					public static Disconnected: com.opentok.android.BaseAudioDevice.BluetoothState;
					public static values(): native.Array<com.opentok.android.BaseAudioDevice.BluetoothState>;
					public static valueOf(param0: string): com.opentok.android.BaseAudioDevice.BluetoothState;
				}
				export class OutputMode {
					public static class: java.lang.Class<com.opentok.android.BaseAudioDevice.OutputMode>;
					public static SpeakerPhone: com.opentok.android.BaseAudioDevice.OutputMode;
					public static Handset: com.opentok.android.BaseAudioDevice.OutputMode;
					public static valueOf(param0: string): com.opentok.android.BaseAudioDevice.OutputMode;
					public static values(): native.Array<com.opentok.android.BaseAudioDevice.OutputMode>;
				}
				export class otc_audio_settings extends com.opentok.otc.otc_audio_device_settings {
					public static class: java.lang.Class<com.opentok.android.BaseAudioDevice.otc_audio_settings>;
				}
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export abstract class BaseVideoCapturer {
				public static class: java.lang.Class<com.opentok.android.BaseVideoCapturer>;
				public static NV21: number;
				public static ARGB: number;
				public static YUV420P: number;
				public static NV12: number;
				public static YUY2: number;
				public static UYVY: number;
				public static BGRA: number;
				public static RGB: number;
				public static MJPEG: number;
				public static ABGR: number;
				public static RGBA: number;
				public onResume(): void;
				public isCaptureStarted(): boolean;
				public startCapture(): number;
				public onPause(): void;
				public provideBufferFrame(param0: java.nio.ByteBuffer, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: native.Array<number>): void;
				public provideIntArrayFrame(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: native.Array<number>): void;
				public provideByteArrayFrame(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: boolean): void;
				public provideByteArrayFrame(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: native.Array<number>): void;
				public constructor();
				public init(): void;
				public stopCapture(): number;
				public destroy(): void;
				public provideBufferFramePlanar(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: boolean): void;
				public provideBufferFramePlanar(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: boolean, param13: native.Array<number>): void;
				public setPublisherKit(param0: com.opentok.android.PublisherKit): void;
				public onRestart(): void;
				public provideBufferFrame(param0: java.nio.ByteBuffer, param1: number, param2: number, param3: number, param4: number, param5: boolean): void;
				public provideIntArrayFrame(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: boolean): void;
				public onStop(): void;
				public getCaptureSettings(): com.opentok.android.BaseVideoCapturer.CaptureSettings;
			}
			export module BaseVideoCapturer {
				export class CaptureSettings {
					public static class: java.lang.Class<com.opentok.android.BaseVideoCapturer.CaptureSettings>;
					public format: number;
					public width: number;
					public height: number;
					public fps: number;
					public expectedDelay: number;
					public mirrorInLocalRender: boolean;
					public constructor();
				}
				export class CaptureSwitch {
					public static class: java.lang.Class<com.opentok.android.BaseVideoCapturer.CaptureSwitch>;
					/**
					 * Constructs a new instance of the com.opentok.android.BaseVideoCapturer$CaptureSwitch interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						cycleCamera(): void;
						getCameraIndex(): number;
						swapCamera(param0: number): void;
					});
					public constructor();
					public cycleCamera(): void;
					public getCameraIndex(): number;
					public swapCamera(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export abstract class BaseVideoRenderer {
				public static class: java.lang.Class<com.opentok.android.BaseVideoRenderer>;
				public static STYLE_VIDEO_SCALE: string;
				public static STYLE_VIDEO_FILL: string;
				public static STYLE_VIDEO_FIT: string;
				public getView(): globalAndroid.view.View;
				public onFrame(param0: com.opentok.android.BaseVideoRenderer.Frame): void;
				public onVideoPropertiesChanged(param0: boolean): void;
				public onResume(): void;
				public onPause(): void;
				public setStyle(param0: string, param1: string): void;
				public constructor();
			}
			export module BaseVideoRenderer {
				export class Frame {
					public static class: java.lang.Class<com.opentok.android.BaseVideoRenderer.Frame>;
					public internalBuffer: number;
					public buffer: java.nio.ByteBuffer;
					public format: com.opentok.otc.otc_video_frame_format;
					public width: number;
					public height: number;
					public mirrored: boolean;
					public yStride: number;
					public uvStride: number;
					public metadata: native.Array<number>;
					public destroy(): void;
					public getBuffer(): java.nio.ByteBuffer;
					public getUvStride(): number;
					public recycle(): void;
					public getYstride(): number;
					public getHeight(): number;
					public finalize(): void;
					public getWidth(): number;
					public constructor(param0: com.opentok.android.BaseVideoRenderer);
					public isMirroredX(): boolean;
					public getMetadata(): native.Array<number>;
				}
				export class swig_otc_video_frame extends com.opentok.otc.SWIGTYPE_p_otc_video_frame {
					public static class: java.lang.Class<com.opentok.android.BaseVideoRenderer.swig_otc_video_frame>;
					public destroy(): void;
					public constructor();
					public getCPtr(): number;
					public static getCPtr(param0: com.opentok.otc.SWIGTYPE_p_otc_video_frame): number;
					public constructor(param0: number, param1: boolean);
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export class BuildConfig {
				public static class: java.lang.Class<com.opentok.android.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static BUILD_TYPE: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public static BUILD_DATE: string;
				public static BUILD_REVISION: string;
				public static LIB_NAME: string;
				public static SDK_VERSION: string;
				public static API_URL: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export class Camera2VideoCapturer extends com.opentok.android.BaseVideoCapturer implements com.opentok.android.BaseVideoCapturer.CaptureSwitch {
				public static class: java.lang.Class<com.opentok.android.Camera2VideoCapturer>;
				public onResume(): void;
				public isCaptureStarted(): boolean;
				public startCapture(): number;
				public onPause(): void;
				public constructor(param0: globalAndroid.content.Context, param1: com.opentok.android.Publisher.CameraCaptureResolution, param2: com.opentok.android.Publisher.CameraCaptureFrameRate);
				public cycleCamera(): void;
				public constructor();
				public init(): void;
				public swapCamera(param0: number): void;
				public stopCapture(): number;
				public destroy(): void;
				public getCameraIndex(): number;
				public getCaptureSettings(): com.opentok.android.BaseVideoCapturer.CaptureSettings;
			}
			export module Camera2VideoCapturer {
				export class Camera2Exception {
					public static class: java.lang.Class<com.opentok.android.Camera2VideoCapturer.Camera2Exception>;
					public constructor(param0: string);
				}
				export class CameraInfoCache {
					public static class: java.lang.Class<com.opentok.android.Camera2VideoCapturer.CameraInfoCache>;
					public constructor(param0: globalAndroid.hardware.camera2.CameraCharacteristics);
					public sensorOrientation(): number;
					public get(param0: globalAndroid.hardware.camera2.CameraCharacteristics.Key): any;
					public isFrontFacing(): boolean;
				}
				export class CameraState {
					public static class: java.lang.Class<com.opentok.android.Camera2VideoCapturer.CameraState>;
					public static CLOSED: com.opentok.android.Camera2VideoCapturer.CameraState;
					public static CLOSING: com.opentok.android.Camera2VideoCapturer.CameraState;
					public static SETUP: com.opentok.android.Camera2VideoCapturer.CameraState;
					public static OPEN: com.opentok.android.Camera2VideoCapturer.CameraState;
					public static CAPTURE: com.opentok.android.Camera2VideoCapturer.CameraState;
					public static ERROR: com.opentok.android.Camera2VideoCapturer.CameraState;
					public static valueOf(param0: string): com.opentok.android.Camera2VideoCapturer.CameraState;
					public static values(): native.Array<com.opentok.android.Camera2VideoCapturer.CameraState>;
				}
				export class DisplayOrientationCache {
					public static class: java.lang.Class<com.opentok.android.Camera2VideoCapturer.DisplayOrientationCache>;
					public constructor(param0: globalAndroid.view.Display, param1: globalAndroid.os.Handler);
					public run(): void;
					public getOrientation(): number;
				}
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export class Connection {
				public static class: java.lang.Class<com.opentok.android.Connection>;
				public getConnectionId(): string;
				public getData(): string;
				public getCreationTime(): java.util.Date;
				public hashCode(): number;
				public finalize(): void;
				public equals(param0: any): boolean;
			}
			export module Connection {
				export class swig_otc_connection extends com.opentok.otc.SWIGTYPE_p_otc_connection {
					public static class: java.lang.Class<com.opentok.android.Connection.swig_otc_connection>;
					public constructor();
					public constructor(param0: number, param1: boolean);
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export class DefaultAudioDevice extends com.opentok.android.BaseAudioDevice {
				public static class: java.lang.Class<com.opentok.android.DefaultAudioDevice>;
				public getCaptureSettings(): com.opentok.android.BaseAudioDevice.AudioSettings;
				public onResume(): void;
				public destroyCapturer(): boolean;
				public getEstimatedCaptureDelay(): number;
				public onPause(): void;
				public startRenderer(): boolean;
				public startCapturer(): boolean;
				public constructor();
				public getEstimatedRenderDelay(): number;
				public initRenderer(): boolean;
				public destroyRenderer(): boolean;
				public getRenderSettings(): com.opentok.android.BaseAudioDevice.AudioSettings;
				public constructor(param0: globalAndroid.content.Context);
				public stopCapturer(): boolean;
				public setOutputMode(param0: com.opentok.android.BaseAudioDevice.OutputMode): boolean;
				public stopRenderer(): boolean;
				public getBluetoothState(): com.opentok.android.BaseAudioDevice.BluetoothState;
				public initCapturer(): boolean;
			}
			export module DefaultAudioDevice {
				export class AudioManagerMode {
					public static class: java.lang.Class<com.opentok.android.DefaultAudioDevice.AudioManagerMode>;
				}
				export class AudioState {
					public static class: java.lang.Class<com.opentok.android.DefaultAudioDevice.AudioState>;
				}
				export class OutputType {
					public static class: java.lang.Class<com.opentok.android.DefaultAudioDevice.OutputType>;
					public static SPEAKER_PHONE: com.opentok.android.DefaultAudioDevice.OutputType;
					public static EAR_PIECE: com.opentok.android.DefaultAudioDevice.OutputType;
					public static HEAD_PHONES: com.opentok.android.DefaultAudioDevice.OutputType;
					public static BLUETOOTH: com.opentok.android.DefaultAudioDevice.OutputType;
					public static valueOf(param0: string): com.opentok.android.DefaultAudioDevice.OutputType;
					public static values(): native.Array<com.opentok.android.DefaultAudioDevice.OutputType>;
				}
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export class DefaultVideoCapturer extends com.opentok.android.BaseVideoCapturer implements com.opentok.android.BaseVideoCapturer.CaptureSwitch {
				public static class: java.lang.Class<com.opentok.android.DefaultVideoCapturer>;
				public previewBufferLock: java.util.concurrent.locks.ReentrantLock;
				public setPublisher(param0: com.opentok.android.Publisher): void;
				public onResume(): void;
				public onPreviewFrame(param0: native.Array<number>, param1: globalAndroid.hardware.Camera): void;
				public isCaptureStarted(): boolean;
				public startCapture(): number;
				public onPause(): void;
				public constructor(param0: globalAndroid.content.Context, param1: com.opentok.android.Publisher.CameraCaptureResolution, param2: com.opentok.android.Publisher.CameraCaptureFrameRate);
				public cycleCamera(): void;
				public constructor();
				public init(): void;
				public swapCamera(param0: number): void;
				public stopCapture(): number;
				public destroy(): void;
				public isFrontCamera(): boolean;
				public getCameraIndex(): number;
				public getCaptureSettings(): com.opentok.android.BaseVideoCapturer.CaptureSettings;
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export class DefaultVideoRenderer extends com.opentok.android.BaseVideoRenderer {
				public static class: java.lang.Class<com.opentok.android.DefaultVideoRenderer>;
				public nativeInstance: number;
				public getView(): globalAndroid.view.View;
				public onResume(): void;
				public onFrame(param0: com.opentok.android.BaseVideoRenderer.Frame): void;
				public onVideoPropertiesChanged(param0: boolean): void;
				public constructor(param0: globalAndroid.content.Context);
				public onPause(): void;
				public setStyle(param0: string, param1: string): void;
				public constructor();
			}
			export module DefaultVideoRenderer {
				export class MyRenderer {
					public static class: java.lang.Class<com.opentok.android.DefaultVideoRenderer.MyRenderer>;
					public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
					public constructor(param0: com.opentok.android.DefaultVideoRenderer);
					public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
					public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export class ForceMuteOptions {
				public static class: java.lang.Class<com.opentok.android.ForceMuteOptions>;
				public constructor(param0: com.opentok.android.Stream);
				public constructor(param0: java.lang.Iterable<com.opentok.android.Stream>);
			}
			export module ForceMuteOptions {
				export class ForceMuteAllOptionsBuilder {
					public static class: java.lang.Class<com.opentok.android.ForceMuteOptions.ForceMuteAllOptionsBuilder>;
					public build(): com.opentok.android.ForceMuteOptions;
					public constructor();
					public setExcludedStreams(param0: java.lang.Iterable<com.opentok.android.Stream>): com.opentok.android.ForceMuteOptions.ForceMuteAllOptionsBuilder;
				}
				export class ForceMuteStreamOptionsBuilder {
					public static class: java.lang.Class<com.opentok.android.ForceMuteOptions.ForceMuteStreamOptionsBuilder>;
					public build(): com.opentok.android.ForceMuteOptions;
					public constructor(param0: com.opentok.android.Stream);
				}
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export class Loader {
				public static class: java.lang.Class<com.opentok.android.Loader>;
				public static load(): void;
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export class MediaCodecVideoDecoder {
				public static class: java.lang.Class<com.opentok.android.MediaCodecVideoDecoder>;
				public static disableVp9HwCodec(): void;
				public static disableVp8HwCodec(): void;
				public static isVp8HwSupported(): boolean;
				public static printStackTrace(): void;
				public static setErrorCallback(param0: com.opentok.android.MediaCodecVideoDecoder.MediaCodecVideoDecoderErrorCallback): void;
				public static disableH264HwCodec(): void;
				public static isH264HwSupported(): boolean;
				public static isVp9HwSupported(): boolean;
				public static isH264HighProfileHwSupported(): boolean;
			}
			export module MediaCodecVideoDecoder {
				export class DecodedOutputBuffer {
					public static class: java.lang.Class<com.opentok.android.MediaCodecVideoDecoder.DecodedOutputBuffer>;
					public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number);
				}
				export class DecodedTextureBuffer {
					public static class: java.lang.Class<com.opentok.android.MediaCodecVideoDecoder.DecodedTextureBuffer>;
					public constructor(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number);
				}
				export class DecoderProperties {
					public static class: java.lang.Class<com.opentok.android.MediaCodecVideoDecoder.DecoderProperties>;
					public codecName: string;
					public colorFormat: number;
					public meta: java.util.Map<string,java.lang.Integer>;
					public constructor(param0: string, param1: number, param2: java.util.Map<string,java.lang.Integer>);
				}
				export class MediaCodecVideoDecoderErrorCallback {
					public static class: java.lang.Class<com.opentok.android.MediaCodecVideoDecoder.MediaCodecVideoDecoderErrorCallback>;
					/**
					 * Constructs a new instance of the com.opentok.android.MediaCodecVideoDecoder$MediaCodecVideoDecoderErrorCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMediaCodecVideoDecoderCriticalError(param0: number): void;
					});
					public constructor();
					public onMediaCodecVideoDecoderCriticalError(param0: number): void;
				}
				export class SupportedDecoderRecord {
					public static class: java.lang.Class<com.opentok.android.MediaCodecVideoDecoder.SupportedDecoderRecord>;
					public prefix: string;
					public supportedVersion: number;
					public priority: com.opentok.android.MediaCodecVideoDecoder.SupportedDecoderRecord.Priority;
					public meta: java.util.Map<string,java.lang.Integer>;
					public constructor(param0: string, param1: number, param2: com.opentok.android.MediaCodecVideoDecoder.SupportedDecoderRecord.Priority, param3: java.util.Map<string,java.lang.Integer>);
				}
				export module SupportedDecoderRecord {
					export class Priority {
						public static class: java.lang.Class<com.opentok.android.MediaCodecVideoDecoder.SupportedDecoderRecord.Priority>;
						public static HARDWARE: com.opentok.android.MediaCodecVideoDecoder.SupportedDecoderRecord.Priority;
						public static SOFTWARE: com.opentok.android.MediaCodecVideoDecoder.SupportedDecoderRecord.Priority;
						public static values(): native.Array<com.opentok.android.MediaCodecVideoDecoder.SupportedDecoderRecord.Priority>;
						public static valueOf(param0: string): com.opentok.android.MediaCodecVideoDecoder.SupportedDecoderRecord.Priority;
					}
				}
				export class TextureListener extends org.otwebrtc.SurfaceTextureHelper61.OnTextureFrameAvailableListener {
					public static class: java.lang.Class<com.opentok.android.MediaCodecVideoDecoder.TextureListener>;
					public isWaitingForTexture(): boolean;
					public onTextureFrameAvailable(param0: number, param1: native.Array<number>, param2: number): void;
					public dequeueTextureBuffer(param0: number): com.opentok.android.MediaCodecVideoDecoder.DecodedTextureBuffer;
					public constructor(param0: org.otwebrtc.SurfaceTextureHelper61);
					public addBufferToRender(param0: com.opentok.android.MediaCodecVideoDecoder.DecodedOutputBuffer): void;
					public release(): void;
				}
				export class TimeStamps {
					public static class: java.lang.Class<com.opentok.android.MediaCodecVideoDecoder.TimeStamps>;
					public constructor(param0: number, param1: number, param2: number);
				}
				export class VideoCodecType {
					public static class: java.lang.Class<com.opentok.android.MediaCodecVideoDecoder.VideoCodecType>;
					public static VIDEO_CODEC_GENERIC: com.opentok.android.MediaCodecVideoDecoder.VideoCodecType;
					public static VIDEO_CODEC_VP8: com.opentok.android.MediaCodecVideoDecoder.VideoCodecType;
					public static VIDEO_CODEC_VP9: com.opentok.android.MediaCodecVideoDecoder.VideoCodecType;
					public static VIDEO_CODEC_AV1: com.opentok.android.MediaCodecVideoDecoder.VideoCodecType;
					public static VIDEO_CODEC_H264: com.opentok.android.MediaCodecVideoDecoder.VideoCodecType;
					public static valueOf(param0: string): com.opentok.android.MediaCodecVideoDecoder.VideoCodecType;
					public static values(): native.Array<com.opentok.android.MediaCodecVideoDecoder.VideoCodecType>;
				}
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export class MediaCodecVideoEncoder {
				public static class: java.lang.Class<com.opentok.android.MediaCodecVideoEncoder>;
				public static isVp9HwSupportedUsingTextures(): boolean;
				public static disableVp9HwCodec(): void;
				public static disableVp8HwCodec(): void;
				public static isVp8HwSupported(): boolean;
				public static printStackTrace(): void;
				public static disableH264HwCodec(): void;
				public static isH264HwSupported(): boolean;
				public static isVp8HwSupportedUsingTextures(): boolean;
				public static isVp9HwSupported(): boolean;
				public static setErrorCallback(param0: com.opentok.android.MediaCodecVideoEncoder.MediaCodecVideoEncoderErrorCallback): void;
				public static isH264HwSupportedUsingTextures(): boolean;
				public static isH264HighProfileHwSupported(): boolean;
			}
			export module MediaCodecVideoEncoder {
				export class BitrateAdjustmentType {
					public static class: java.lang.Class<com.opentok.android.MediaCodecVideoEncoder.BitrateAdjustmentType>;
					public static NO_ADJUSTMENT: com.opentok.android.MediaCodecVideoEncoder.BitrateAdjustmentType;
					public static FRAMERATE_ADJUSTMENT: com.opentok.android.MediaCodecVideoEncoder.BitrateAdjustmentType;
					public static DYNAMIC_ADJUSTMENT: com.opentok.android.MediaCodecVideoEncoder.BitrateAdjustmentType;
					public static valueOf(param0: string): com.opentok.android.MediaCodecVideoEncoder.BitrateAdjustmentType;
					public static values(): native.Array<com.opentok.android.MediaCodecVideoEncoder.BitrateAdjustmentType>;
				}
				export class EncoderProperties {
					public static class: java.lang.Class<com.opentok.android.MediaCodecVideoEncoder.EncoderProperties>;
					public codecName: string;
					public colorFormat: number;
					public bitrateAdjustmentType: com.opentok.android.MediaCodecVideoEncoder.BitrateAdjustmentType;
					public meta: java.util.Map<string,java.lang.Integer>;
					public constructor(param0: string, param1: number, param2: com.opentok.android.MediaCodecVideoEncoder.BitrateAdjustmentType, param3: java.util.Map<string,java.lang.Integer>);
				}
				export class H264Profile {
					public static class: java.lang.Class<com.opentok.android.MediaCodecVideoEncoder.H264Profile>;
					public static CONSTRAINED_BASELINE: com.opentok.android.MediaCodecVideoEncoder.H264Profile;
					public static BASELINE: com.opentok.android.MediaCodecVideoEncoder.H264Profile;
					public static MAIN: com.opentok.android.MediaCodecVideoEncoder.H264Profile;
					public static CONSTRAINED_HIGH: com.opentok.android.MediaCodecVideoEncoder.H264Profile;
					public static HIGH: com.opentok.android.MediaCodecVideoEncoder.H264Profile;
					public static values(): native.Array<com.opentok.android.MediaCodecVideoEncoder.H264Profile>;
					public static valueOf(param0: string): com.opentok.android.MediaCodecVideoEncoder.H264Profile;
					public getValue(): number;
				}
				export class MediaCodecVideoEncoderErrorCallback {
					public static class: java.lang.Class<com.opentok.android.MediaCodecVideoEncoder.MediaCodecVideoEncoderErrorCallback>;
					/**
					 * Constructs a new instance of the com.opentok.android.MediaCodecVideoEncoder$MediaCodecVideoEncoderErrorCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMediaCodecVideoEncoderCriticalError(param0: number): void;
					});
					public constructor();
					public onMediaCodecVideoEncoderCriticalError(param0: number): void;
				}
				export class OutputBufferInfo {
					public static class: java.lang.Class<com.opentok.android.MediaCodecVideoEncoder.OutputBufferInfo>;
					public index: number;
					public buffer: java.nio.ByteBuffer;
					public isKeyFrame: boolean;
					public presentationTimestampUs: number;
					public constructor(param0: number, param1: java.nio.ByteBuffer, param2: boolean, param3: number);
				}
				export class SupportedEncoderRecord {
					public static class: java.lang.Class<com.opentok.android.MediaCodecVideoEncoder.SupportedEncoderRecord>;
					public prefix: string;
					public supportedVersion: number;
					public priority: com.opentok.android.MediaCodecVideoEncoder.SupportedEncoderRecord.Priority;
					public meta: java.util.Map<string,java.lang.Integer>;
					public bitrateAdjustmentType: com.opentok.android.MediaCodecVideoEncoder.BitrateAdjustmentType;
					public constructor(param0: string, param1: number, param2: com.opentok.android.MediaCodecVideoEncoder.SupportedEncoderRecord.Priority, param3: com.opentok.android.MediaCodecVideoEncoder.BitrateAdjustmentType, param4: java.util.Map<string,java.lang.Integer>);
				}
				export module SupportedEncoderRecord {
					export class Priority {
						public static class: java.lang.Class<com.opentok.android.MediaCodecVideoEncoder.SupportedEncoderRecord.Priority>;
						public static HARDWARE: com.opentok.android.MediaCodecVideoEncoder.SupportedEncoderRecord.Priority;
						public static SOFTWARE: com.opentok.android.MediaCodecVideoEncoder.SupportedEncoderRecord.Priority;
						public static valueOf(param0: string): com.opentok.android.MediaCodecVideoEncoder.SupportedEncoderRecord.Priority;
						public static values(): native.Array<com.opentok.android.MediaCodecVideoEncoder.SupportedEncoderRecord.Priority>;
					}
				}
				export class VideoCodecType {
					public static class: java.lang.Class<com.opentok.android.MediaCodecVideoEncoder.VideoCodecType>;
					public static VIDEO_CODEC_GENERIC: com.opentok.android.MediaCodecVideoEncoder.VideoCodecType;
					public static VIDEO_CODEC_VP8: com.opentok.android.MediaCodecVideoEncoder.VideoCodecType;
					public static VIDEO_CODEC_VP9: com.opentok.android.MediaCodecVideoEncoder.VideoCodecType;
					public static VIDEO_CODEC_AV1: com.opentok.android.MediaCodecVideoEncoder.VideoCodecType;
					public static VIDEO_CODEC_H264: com.opentok.android.MediaCodecVideoEncoder.VideoCodecType;
					public static valueOf(param0: string): com.opentok.android.MediaCodecVideoEncoder.VideoCodecType;
					public static values(): native.Array<com.opentok.android.MediaCodecVideoEncoder.VideoCodecType>;
				}
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export class MediaUtils {
				public static class: java.lang.Class<com.opentok.android.MediaUtils>;
				public static getSupportedCodecs(param0: globalAndroid.content.Context): com.opentok.android.MediaUtils.SupportedCodecs;
				public constructor();
			}
			export module MediaUtils {
				export class SupportedCodecs {
					public static class: java.lang.Class<com.opentok.android.MediaUtils.SupportedCodecs>;
					public videoEncoderCodecs: java.util.ArrayList<com.opentok.android.MediaUtils.VideoCodecType>;
					public videoDecoderCodecs: java.util.ArrayList<com.opentok.android.MediaUtils.VideoCodecType>;
					public constructor(param0: com.opentok.android.MediaUtils);
				}
				export class VideoCodecType {
					public static class: java.lang.Class<com.opentok.android.MediaUtils.VideoCodecType>;
					public static VIDEO_CODEC_VP8: com.opentok.android.MediaUtils.VideoCodecType;
					public static VIDEO_CODEC_H264: com.opentok.android.MediaUtils.VideoCodecType;
					public static valueOf(param0: string): com.opentok.android.MediaUtils.VideoCodecType;
					public getValue(): number;
					public static getValue(param0: number): com.opentok.android.MediaUtils.VideoCodecType;
					public static values(): native.Array<com.opentok.android.MediaUtils.VideoCodecType>;
				}
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export class MuteForcedInfo {
				public static class: java.lang.Class<com.opentok.android.MuteForcedInfo>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export class OpenTokConfig {
				public static class: java.lang.Class<com.opentok.android.OpenTokConfig>;
				public static setWebRTCLogs(param0: boolean): void;
				public static getPreferH264Codec(): com.opentok.android.OpenTokConfig.PreferH264;
				public static setPreferH264Codec(param0: com.opentok.android.OpenTokConfig.PreferH264): void;
				public static getJNILogs(): boolean;
				public static setOTKitLogs(param0: boolean): void;
				public static getDumpClientLoggingToFile(): boolean;
				public static setJNILogs(param0: boolean): void;
				public static setDumpClientLoggingToFile(param0: boolean): void;
				public static getOTKitLogs(): boolean;
				public static getWebRTCLogs(): boolean;
				public constructor();
			}
			export module OpenTokConfig {
				export class PreferH264 {
					public static class: java.lang.Class<com.opentok.android.OpenTokConfig.PreferH264>;
					public static NOT_SET: com.opentok.android.OpenTokConfig.PreferH264;
					public static ENABLE: com.opentok.android.OpenTokConfig.PreferH264;
					public static DISABLE: com.opentok.android.OpenTokConfig.PreferH264;
					public static valueOf(param0: string): com.opentok.android.OpenTokConfig.PreferH264;
					public static values(): native.Array<com.opentok.android.OpenTokConfig.PreferH264>;
				}
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export class OpentokError {
				public static class: java.lang.Class<com.opentok.android.OpentokError>;
				public errorDomain: com.opentok.android.OpentokError.Domain;
				public errorCode: com.opentok.android.OpentokError.ErrorCode;
				public errorMessage: string;
				public exception: java.lang.Exception;
				public constructor(param0: com.opentok.android.OpentokError.Domain, param1: number, param2: java.lang.Exception);
				public getException(): java.lang.Exception;
				public constructor(param0: com.opentok.android.OpentokError.Domain, param1: number, param2: string);
				public getMessage(): string;
				public getErrorDomain(): com.opentok.android.OpentokError.Domain;
				public getErrorCode(): com.opentok.android.OpentokError.ErrorCode;
			}
			export module OpentokError {
				export class Domain {
					public static class: java.lang.Class<com.opentok.android.OpentokError.Domain>;
					public static SessionErrorDomain: com.opentok.android.OpentokError.Domain;
					public static PublisherErrorDomain: com.opentok.android.OpentokError.Domain;
					public static SubscriberErrorDomain: com.opentok.android.OpentokError.Domain;
					public static valueOf(param0: string): com.opentok.android.OpentokError.Domain;
					public static values(): native.Array<com.opentok.android.OpentokError.Domain>;
				}
				export class ErrorCode {
					public static class: java.lang.Class<com.opentok.android.OpentokError.ErrorCode>;
					public static UnknownError: com.opentok.android.OpentokError.ErrorCode;
					public static AuthorizationFailure: com.opentok.android.OpentokError.ErrorCode;
					public static InvalidSessionId: com.opentok.android.OpentokError.ErrorCode;
					public static ConnectionFailed: com.opentok.android.OpentokError.ErrorCode;
					public static NoMessagingServer: com.opentok.android.OpentokError.ErrorCode;
					public static ConnectionRefused: com.opentok.android.OpentokError.ErrorCode;
					public static SessionStateFailed: com.opentok.android.OpentokError.ErrorCode;
					public static P2PSessionMaxParticipants: com.opentok.android.OpentokError.ErrorCode;
					public static SessionConnectionTimeout: com.opentok.android.OpentokError.ErrorCode;
					public static SessionInternalError: com.opentok.android.OpentokError.ErrorCode;
					public static SessionInvalidSignalType: com.opentok.android.OpentokError.ErrorCode;
					public static SessionSignalDataTooLong: com.opentok.android.OpentokError.ErrorCode;
					public static SessionSignalTypeTooLong: com.opentok.android.OpentokError.ErrorCode;
					public static SessionUnableToForceMute: com.opentok.android.OpentokError.ErrorCode;
					public static ConnectionDropped: com.opentok.android.OpentokError.ErrorCode;
					public static SessionDisconnected: com.opentok.android.OpentokError.ErrorCode;
					public static PublisherInternalError: com.opentok.android.OpentokError.ErrorCode;
					public static PublisherWebRTCError: com.opentok.android.OpentokError.ErrorCode;
					public static PublisherUnableToPublish: com.opentok.android.OpentokError.ErrorCode;
					public static PublisherUnexpectedPeerConnectionDisconnection: com.opentok.android.OpentokError.ErrorCode;
					public static PublisherCannotAccessCamera: com.opentok.android.OpentokError.ErrorCode;
					public static PublisherCameraAccessDenied: com.opentok.android.OpentokError.ErrorCode;
					public static ConnectionTimedOut: com.opentok.android.OpentokError.ErrorCode;
					public static SubscriberWebRTCError: com.opentok.android.OpentokError.ErrorCode;
					public static SubscriberServerCannotFindStream: com.opentok.android.OpentokError.ErrorCode;
					public static SubscriberStreamLimitExceeded: com.opentok.android.OpentokError.ErrorCode;
					public static SubscriberInternalError: com.opentok.android.OpentokError.ErrorCode;
					public static UnknownPublisherInstance: com.opentok.android.OpentokError.ErrorCode;
					public static UnknownSubscriberInstance: com.opentok.android.OpentokError.ErrorCode;
					public static SessionNullOrInvalidParameter: com.opentok.android.OpentokError.ErrorCode;
					public static VideoCaptureFailed: com.opentok.android.OpentokError.ErrorCode;
					public static CameraFailed: com.opentok.android.OpentokError.ErrorCode;
					public static VideoRenderFailed: com.opentok.android.OpentokError.ErrorCode;
					public static SessionSubscriberNotFound: com.opentok.android.OpentokError.ErrorCode;
					public static SessionPublisherNotFound: com.opentok.android.OpentokError.ErrorCode;
					public static PublisherTimeout: com.opentok.android.OpentokError.ErrorCode;
					public static SessionBlockedCountry: com.opentok.android.OpentokError.ErrorCode;
					public static SessionConnectionLimitExceeded: com.opentok.android.OpentokError.ErrorCode;
					public static SessionUnexpectedGetSessionInfoResponse: com.opentok.android.OpentokError.ErrorCode;
					public static SessionIllegalState: com.opentok.android.OpentokError.ErrorCode;
					public getErrorCode(): number;
					public static values(): native.Array<com.opentok.android.OpentokError.ErrorCode>;
					public static valueOf(param0: string): com.opentok.android.OpentokError.ErrorCode;
					public static fromTypeCode(param0: number): com.opentok.android.OpentokError.ErrorCode;
				}
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export class OtLog {
				public static class: java.lang.Class<com.opentok.android.OtLog>;
				public static i(param0: java.lang.Throwable, param1: string, param2: native.Array<any>): void;
				public static w(param0: java.lang.Throwable, param1: string, param2: native.Array<any>): void;
				public static e(param0: string, param1: native.Array<any>): void;
				public static v(param0: java.lang.Throwable, param1: string, param2: native.Array<any>): void;
				public static i(param0: string, param1: native.Array<any>): void;
				public static d(param0: string, param1: native.Array<any>): void;
				public constructor();
				public static LogToken(param0: string): com.opentok.android.OtLog.LogToken;
				public static e(param0: java.lang.Throwable, param1: string, param2: native.Array<any>): void;
				public static w(param0: string, param1: native.Array<any>): void;
				public static v(param0: string, param1: native.Array<any>): void;
				public static LogToken(): com.opentok.android.OtLog.LogToken;
				public static d(param0: java.lang.Throwable, param1: string, param2: native.Array<any>): void;
			}
			export module OtLog {
				export class LogToken {
					public static class: java.lang.Class<com.opentok.android.OtLog.LogToken>;
					public v(param0: string, param1: native.Array<any>): void;
					public i(param0: string, param1: native.Array<any>): void;
					public i(param0: java.lang.Throwable, param1: string, param2: native.Array<any>): void;
					public constructor(param0: any);
					public w(param0: java.lang.Throwable, param1: string, param2: native.Array<any>): void;
					public d(param0: java.lang.Throwable, param1: string, param2: native.Array<any>): void;
					public e(param0: string, param1: native.Array<any>): void;
					public constructor(param0: boolean);
					public constructor();
					public v(param0: java.lang.Throwable, param1: string, param2: native.Array<any>): void;
					public constructor(param0: string, param1: boolean);
					public d(param0: string, param1: native.Array<any>): void;
					public w(param0: string, param1: native.Array<any>): void;
					public e(param0: java.lang.Throwable, param1: string, param2: native.Array<any>): void;
				}
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export class ProxyReceiver {
				public static class: java.lang.Class<com.opentok.android.ProxyReceiver>;
				public close(): void;
				public constructor(param0: globalAndroid.content.Context);
				public static forceSetProxy(param0: string, param1: number): void;
				public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export class Publisher extends com.opentok.android.PublisherKit {
				public static class: java.lang.Class<com.opentok.android.Publisher>;
				public cameraFrameRate: com.opentok.android.Publisher.CameraCaptureFrameRate;
				public cameraResolution: com.opentok.android.Publisher.CameraCaptureResolution;
				public cameraListener: com.opentok.android.Publisher.CameraListener;
				public setCameraListener(param0: com.opentok.android.Publisher.CameraListener): void;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: boolean, param3: boolean, param4: com.opentok.android.BaseVideoCapturer, param5: com.opentok.android.BaseVideoRenderer);
				public constructor(param0: globalAndroid.content.Context, param1: string);
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.opentok.android.BaseVideoCapturer);
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: boolean, param3: boolean);
				public startPreview(): void;
				public onCameraError(param0: com.opentok.android.OpentokError): void;
				public onCameraChanged(param0: number): void;
				public cycleCamera(): void;
				public swapCamera(): void;
				public getCameraId(): number;
				public setCameraId(param0: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: boolean, param3: number, param4: boolean, param5: com.opentok.android.BaseVideoCapturer, param6: com.opentok.android.Publisher.CameraCaptureResolution, param7: com.opentok.android.Publisher.CameraCaptureFrameRate, param8: com.opentok.android.BaseVideoRenderer);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: boolean, param3: boolean, param4: com.opentok.android.BaseVideoCapturer, param5: com.opentok.android.Publisher.CameraCaptureResolution, param6: com.opentok.android.Publisher.CameraCaptureFrameRate, param7: com.opentok.android.BaseVideoRenderer);
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: boolean, param3: number, param4: boolean, param5: com.opentok.android.BaseVideoCapturer, param6: com.opentok.android.BaseVideoRenderer);
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.opentok.android.Publisher.CameraCaptureResolution, param3: com.opentok.android.Publisher.CameraCaptureFrameRate);
			}
			export module Publisher {
				export class Builder extends com.opentok.android.PublisherKit.Builder {
					public static class: java.lang.Class<com.opentok.android.Publisher.Builder>;
					public renderer(param0: com.opentok.android.BaseVideoRenderer): com.opentok.android.Publisher.Builder;
					public name(param0: string): com.opentok.android.Publisher.Builder;
					public build(): com.opentok.android.PublisherKit;
					public build(): com.opentok.android.Publisher;
					public frameRate(param0: com.opentok.android.Publisher.CameraCaptureFrameRate): com.opentok.android.Publisher.Builder;
					public audioTrack(param0: boolean): com.opentok.android.PublisherKit.Builder;
					public videoTrack(param0: boolean): com.opentok.android.Publisher.Builder;
					public capturer(param0: com.opentok.android.BaseVideoCapturer): com.opentok.android.Publisher.Builder;
					public renderer(param0: com.opentok.android.BaseVideoRenderer): com.opentok.android.PublisherKit.Builder;
					public constructor(param0: globalAndroid.content.Context);
					public resolution(param0: com.opentok.android.Publisher.CameraCaptureResolution): com.opentok.android.Publisher.Builder;
					public audioTrack(param0: boolean): com.opentok.android.Publisher.Builder;
					public videoTrack(param0: boolean): com.opentok.android.PublisherKit.Builder;
					public audioBitrate(param0: number): com.opentok.android.Publisher.Builder;
					public name(param0: string): com.opentok.android.PublisherKit.Builder;
					public capturer(param0: com.opentok.android.BaseVideoCapturer): com.opentok.android.PublisherKit.Builder;
					public audioBitrate(param0: number): com.opentok.android.PublisherKit.Builder;
				}
				export class CameraCaptureFrameRate {
					public static class: java.lang.Class<com.opentok.android.Publisher.CameraCaptureFrameRate>;
					public static FPS_30: com.opentok.android.Publisher.CameraCaptureFrameRate;
					public static FPS_15: com.opentok.android.Publisher.CameraCaptureFrameRate;
					public static FPS_7: com.opentok.android.Publisher.CameraCaptureFrameRate;
					public static FPS_1: com.opentok.android.Publisher.CameraCaptureFrameRate;
					public static valueOf(param0: string): com.opentok.android.Publisher.CameraCaptureFrameRate;
					public static values(): native.Array<com.opentok.android.Publisher.CameraCaptureFrameRate>;
				}
				export class CameraCaptureResolution {
					public static class: java.lang.Class<com.opentok.android.Publisher.CameraCaptureResolution>;
					public static LOW: com.opentok.android.Publisher.CameraCaptureResolution;
					public static MEDIUM: com.opentok.android.Publisher.CameraCaptureResolution;
					public static HIGH: com.opentok.android.Publisher.CameraCaptureResolution;
					public static valueOf(param0: string): com.opentok.android.Publisher.CameraCaptureResolution;
					public static values(): native.Array<com.opentok.android.Publisher.CameraCaptureResolution>;
				}
				export class CameraListener {
					public static class: java.lang.Class<com.opentok.android.Publisher.CameraListener>;
					/**
					 * Constructs a new instance of the com.opentok.android.Publisher$CameraListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCameraChanged(param0: com.opentok.android.Publisher, param1: number): void;
						onCameraError(param0: com.opentok.android.Publisher, param1: com.opentok.android.OpentokError): void;
					});
					public constructor();
					public onCameraChanged(param0: com.opentok.android.Publisher, param1: number): void;
					public onCameraError(param0: com.opentok.android.Publisher, param1: com.opentok.android.OpentokError): void;
				}
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export class PublisherKit {
				public static class: java.lang.Class<com.opentok.android.PublisherKit>;
				public handler: globalAndroid.os.Handler;
				public publisherListener: com.opentok.android.PublisherKit.PublisherListener;
				public audioLevelListener: com.opentok.android.PublisherKit.AudioLevelListener;
				public videoStatsListener: com.opentok.android.PublisherKit.VideoStatsListener;
				public audioStatsListener: com.opentok.android.PublisherKit.AudioStatsListener;
				public muteListener: com.opentok.android.PublisherKit.MuteListener;
				public rtcStatsReportListener: com.opentok.android.PublisherKit.PublisherRtcStatsReportListener;
				public context: globalAndroid.content.Context;
				public renderer: com.opentok.android.BaseVideoRenderer;
				public capturer: com.opentok.android.BaseVideoCapturer;
				public setPublishAudio(param0: boolean): void;
				public getView(): globalAndroid.view.View;
				public constructor(param0: globalAndroid.content.Context, param1: string);
				public setAudioFallbackEnabled(param0: boolean): void;
				public onPause(): void;
				public finalize(): void;
				public onStreamDestroyed(param0: com.opentok.android.Stream): void;
				public onStreamCreated(param0: com.opentok.android.Stream): void;
				public getCapturer(): com.opentok.android.BaseVideoCapturer;
				public setAudioLevelListener(param0: com.opentok.android.PublisherKit.AudioLevelListener): void;
				public getStream(): com.opentok.android.Stream;
				public setCapturer(param0: com.opentok.android.BaseVideoCapturer): void;
				public destroy(): void;
				public getRenderer(): com.opentok.android.BaseVideoRenderer;
				public constructor(param0: globalAndroid.content.Context);
				public getPublisherVideoType(): com.opentok.android.PublisherKit.PublisherKitVideoType;
				public onStop(): void;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: boolean, param3: number, param4: boolean, param5: com.opentok.android.BaseVideoCapturer, param6: com.opentok.android.BaseVideoRenderer);
				public setName(param0: string): void;
				public setRenderer(param0: com.opentok.android.BaseVideoRenderer): void;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: boolean, param3: boolean, param4: com.opentok.android.BaseVideoCapturer, param5: com.opentok.android.BaseVideoRenderer);
				public setPublisherVideoType(param0: com.opentok.android.PublisherKit.PublisherKitVideoType): void;
				public setAudioStatsListener(param0: com.opentok.android.PublisherKit.AudioStatsListener): void;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: boolean, param3: boolean);
				public onResume(): void;
				public getPublishAudio(): boolean;
				public setMuteListener(param0: com.opentok.android.PublisherKit.MuteListener): void;
				public getName(): string;
				public getPublishVideo(): boolean;
				public setStyle(param0: string, param1: string): void;
				public setVideoStatsListener(param0: com.opentok.android.PublisherKit.VideoStatsListener): void;
				public setPublisherListener(param0: com.opentok.android.PublisherKit.PublisherListener): void;
				public getRtcStatsReport(): void;
				public onAudioLevelUpdated(param0: number): void;
				public getAudioFallbackEnabled(): boolean;
				public update(param0: java.util.Observable, param1: any): void;
				public onRtcStatsReport(param0: native.Array<com.opentok.android.PublisherKit.PublisherRtcStats>): void;
				public getSession(): com.opentok.android.Session;
				public onRestart(): void;
				public setRtcStatsReportListener(param0: com.opentok.android.PublisherKit.PublisherRtcStatsReportListener): void;
				public onMuteForced(param0: com.opentok.android.MuteForcedInfo): void;
				public onError(param0: com.opentok.android.OpentokError): void;
				public setPublishVideo(param0: boolean): void;
			}
			export module PublisherKit {
				export class AudioLevelListener {
					public static class: java.lang.Class<com.opentok.android.PublisherKit.AudioLevelListener>;
					/**
					 * Constructs a new instance of the com.opentok.android.PublisherKit$AudioLevelListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAudioLevelUpdated(param0: com.opentok.android.PublisherKit, param1: number): void;
					});
					public constructor();
					public onAudioLevelUpdated(param0: com.opentok.android.PublisherKit, param1: number): void;
				}
				export class AudioStatsListener {
					public static class: java.lang.Class<com.opentok.android.PublisherKit.AudioStatsListener>;
					/**
					 * Constructs a new instance of the com.opentok.android.PublisherKit$AudioStatsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAudioStats(param0: com.opentok.android.PublisherKit, param1: native.Array<com.opentok.android.PublisherKit.PublisherAudioStats>): void;
					});
					public constructor();
					public onAudioStats(param0: com.opentok.android.PublisherKit, param1: native.Array<com.opentok.android.PublisherKit.PublisherAudioStats>): void;
				}
				export class Builder {
					public static class: java.lang.Class<com.opentok.android.PublisherKit.Builder>;
					public constructor(param0: globalAndroid.content.Context);
					public videoTrack(param0: boolean): com.opentok.android.PublisherKit.Builder;
					public build(): com.opentok.android.PublisherKit;
					public name(param0: string): com.opentok.android.PublisherKit.Builder;
					public capturer(param0: com.opentok.android.BaseVideoCapturer): com.opentok.android.PublisherKit.Builder;
					public audioTrack(param0: boolean): com.opentok.android.PublisherKit.Builder;
					public renderer(param0: com.opentok.android.BaseVideoRenderer): com.opentok.android.PublisherKit.Builder;
					public audioBitrate(param0: number): com.opentok.android.PublisherKit.Builder;
				}
				export class MuteListener {
					public static class: java.lang.Class<com.opentok.android.PublisherKit.MuteListener>;
					/**
					 * Constructs a new instance of the com.opentok.android.PublisherKit$MuteListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMuteForced(param0: com.opentok.android.PublisherKit, param1: com.opentok.android.MuteForcedInfo): void;
					});
					public constructor();
					public onMuteForced(param0: com.opentok.android.PublisherKit, param1: com.opentok.android.MuteForcedInfo): void;
				}
				export class PublisherAudioStats {
					public static class: java.lang.Class<com.opentok.android.PublisherKit.PublisherAudioStats>;
					public connectionId: string;
					public subscriberId: string;
					public audioPacketsLost: number;
					public audioPacketsSent: number;
					public audioBytesSent: number;
					public timeStamp: number;
					public startTime: number;
				}
				export class PublisherKitVideoType {
					public static class: java.lang.Class<com.opentok.android.PublisherKit.PublisherKitVideoType>;
					public static PublisherKitVideoTypeCamera: com.opentok.android.PublisherKit.PublisherKitVideoType;
					public static PublisherKitVideoTypeScreen: com.opentok.android.PublisherKit.PublisherKitVideoType;
					public static values(): native.Array<com.opentok.android.PublisherKit.PublisherKitVideoType>;
					public static valueOf(param0: string): com.opentok.android.PublisherKit.PublisherKitVideoType;
					public getVideoType(): number;
				}
				export class PublisherListener {
					public static class: java.lang.Class<com.opentok.android.PublisherKit.PublisherListener>;
					/**
					 * Constructs a new instance of the com.opentok.android.PublisherKit$PublisherListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onStreamCreated(param0: com.opentok.android.PublisherKit, param1: com.opentok.android.Stream): void;
						onStreamDestroyed(param0: com.opentok.android.PublisherKit, param1: com.opentok.android.Stream): void;
						onError(param0: com.opentok.android.PublisherKit, param1: com.opentok.android.OpentokError): void;
					});
					public constructor();
					public onStreamDestroyed(param0: com.opentok.android.PublisherKit, param1: com.opentok.android.Stream): void;
					public onError(param0: com.opentok.android.PublisherKit, param1: com.opentok.android.OpentokError): void;
					public onStreamCreated(param0: com.opentok.android.PublisherKit, param1: com.opentok.android.Stream): void;
				}
				export class PublisherRtcStats {
					public static class: java.lang.Class<com.opentok.android.PublisherKit.PublisherRtcStats>;
					public connectionId: string;
					public jsonArrayOfReports: string;
					public constructor();
				}
				export class PublisherRtcStatsReportListener {
					public static class: java.lang.Class<com.opentok.android.PublisherKit.PublisherRtcStatsReportListener>;
					/**
					 * Constructs a new instance of the com.opentok.android.PublisherKit$PublisherRtcStatsReportListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onRtcStatsReport(param0: com.opentok.android.PublisherKit, param1: native.Array<com.opentok.android.PublisherKit.PublisherRtcStats>): void;
					});
					public constructor();
					public onRtcStatsReport(param0: com.opentok.android.PublisherKit, param1: native.Array<com.opentok.android.PublisherKit.PublisherRtcStats>): void;
				}
				export class PublisherVideoStats {
					public static class: java.lang.Class<com.opentok.android.PublisherKit.PublisherVideoStats>;
					public connectionId: string;
					public subscriberId: string;
					public videoPacketsLost: number;
					public videoPacketsSent: number;
					public videoBytesSent: number;
					public timeStamp: number;
					public startTime: number;
				}
				export class VideoStatsListener {
					public static class: java.lang.Class<com.opentok.android.PublisherKit.VideoStatsListener>;
					/**
					 * Constructs a new instance of the com.opentok.android.PublisherKit$VideoStatsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onVideoStats(param0: com.opentok.android.PublisherKit, param1: native.Array<com.opentok.android.PublisherKit.PublisherVideoStats>): void;
					});
					public constructor();
					public onVideoStats(param0: com.opentok.android.PublisherKit, param1: native.Array<com.opentok.android.PublisherKit.PublisherVideoStats>): void;
				}
				export class swig_otc_publisher_cb extends com.opentok.otc.otc_publisher_callbacks {
					public static class: java.lang.Class<com.opentok.android.PublisherKit.swig_otc_publisher_cb>;
					public getCPointer(): number;
					public constructor();
					public constructor(param0: number, param1: boolean);
					public constructor(param0: number);
				}
				export class swig_otc_rtc_stats_report_cb extends com.opentok.otc.otc_publisher_rtc_stats_report_cb {
					public static class: java.lang.Class<com.opentok.android.PublisherKit.swig_otc_rtc_stats_report_cb>;
					public getCPointer(): number;
					public constructor();
					public constructor(param0: number, param1: boolean);
					public constructor(param0: number);
				}
				export class swig_otc_video_capturer_cb extends com.opentok.otc.otc_video_capturer_callbacks {
					public static class: java.lang.Class<com.opentok.android.PublisherKit.swig_otc_video_capturer_cb>;
					public getCPointer(): number;
					public constructor();
					public constructor(param0: number, param1: boolean);
					public constructor(param0: number);
				}
				export class swig_otc_video_capturer_settings extends com.opentok.otc.otc_video_capturer_settings {
					public static class: java.lang.Class<com.opentok.android.PublisherKit.swig_otc_video_capturer_settings>;
					public constructor();
					public constructor(param0: number, param1: boolean);
					public updateValuesWithSettings(param0: com.opentok.android.BaseVideoCapturer.CaptureSettings): void;
				}
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export class Session {
				public static class: java.lang.Class<com.opentok.android.Session>;
				public sessionListener: com.opentok.android.Session.SessionListener;
				public connectionListener: com.opentok.android.Session.ConnectionListener;
				public streamPropertiesListener: com.opentok.android.Session.StreamPropertiesListener;
				public signalListener: com.opentok.android.Session.SignalListener;
				public archiveListener: com.opentok.android.Session.ArchiveListener;
				public reconnectionListener: com.opentok.android.Session.ReconnectionListener;
				public muteListener: com.opentok.android.Session.MuteListener;
				public apiKey: string;
				public sessionId: string;
				public apiUrl: java.net.URL;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: com.opentok.android.Session.SessionOptionsProvider);
				public sendSignal(param0: string, param1: string, param2: com.opentok.android.Connection, param3: boolean): void;
				public setArchiveListener(param0: com.opentok.android.Session.ArchiveListener): void;
				public publish(param0: com.opentok.android.PublisherKit): void;
				public onStreamHasVideoChanged(param0: com.opentok.android.Stream, param1: number): void;
				public onPause(): void;
				public onArchiveStarted(param0: string, param1: string): void;
				public connect(param0: string): void;
				public finalize(): void;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: boolean, param4: com.opentok.android.Session.SessionOptions, param5: com.opentok.android.Session.Builder.TransportPolicy, param6: com.opentok.android.Session.Builder.IncludeServers, param7: native.Array<com.opentok.android.Session.Builder.IceServer>, param8: java.net.URL, param9: boolean, param10: string);
				public onStreamHasAudioChanged(param0: com.opentok.android.Stream, param1: number): void;
				public getCapabilities(): com.opentok.android.Session.Capabilities;
				public onConnected(): void;
				public setMuteListener(param0: com.opentok.android.Session.MuteListener): void;
				public setStreamPropertiesListener(param0: com.opentok.android.Session.StreamPropertiesListener): void;
				public disconnect(): void;
				public onDisconnected(): void;
				public sendSignal(param0: string, param1: string, param2: com.opentok.android.Connection): void;
				public onArchiveStopped(param0: string): void;
				public setReconnectionListener(param0: com.opentok.android.Session.ReconnectionListener): void;
				public sendSignal(param0: string, param1: string, param2: boolean): void;
				public onResume(): void;
				public onStreamVideoDimensionsChanged(param0: com.opentok.android.Stream, param1: number, param2: number): void;
				public onReconnecting(): void;
				public reportIssue(): string;
				public forceMuteStream(param0: com.opentok.android.ForceMuteOptions): void;
				public setConnectionListener(param0: com.opentok.android.Session.ConnectionListener): void;
				public onSignalReceived(param0: string, param1: string, param2: com.opentok.android.Connection): void;
				public setSignalListener(param0: com.opentok.android.Session.SignalListener): void;
				public onStreamDropped(param0: com.opentok.android.Stream): void;
				public onConnectionCreated(param0: com.opentok.android.Connection): void;
				public subscribe(param0: com.opentok.android.SubscriberKit): void;
				public unsubscribe(param0: com.opentok.android.SubscriberKit): void;
				public sendSignal(param0: string, param1: string): void;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: com.opentok.android.Session.SessionOptions);
				public getConnection(): com.opentok.android.Connection;
				public onReconnected(): void;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: string);
				public onConnectionDestroyed(param0: com.opentok.android.Connection): void;
				public forceMuteAll(param0: com.opentok.android.ForceMuteOptions): void;
				public setSessionListener(param0: com.opentok.android.Session.SessionListener): void;
				public onMuteForced(param0: com.opentok.android.MuteForcedInfo): void;
				public onStreamVideoTypeChanged(param0: com.opentok.android.Stream, param1: number): void;
				public onError(param0: com.opentok.android.OpentokError): void;
				public unpublish(param0: com.opentok.android.PublisherKit): void;
				public onStreamReceived(param0: com.opentok.android.Stream): void;
				public getSessionId(): string;
			}
			export module Session {
				export class ArchiveListener {
					public static class: java.lang.Class<com.opentok.android.Session.ArchiveListener>;
					/**
					 * Constructs a new instance of the com.opentok.android.Session$ArchiveListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onArchiveStarted(param0: com.opentok.android.Session, param1: string, param2: string): void;
						onArchiveStopped(param0: com.opentok.android.Session, param1: string): void;
					});
					public constructor();
					public onArchiveStopped(param0: com.opentok.android.Session, param1: string): void;
					public onArchiveStarted(param0: com.opentok.android.Session, param1: string, param2: string): void;
				}
				export class Builder {
					public static class: java.lang.Class<com.opentok.android.Session.Builder>;
					public setCustomIceServers(param0: java.util.List<com.opentok.android.Session.Builder.IceServer>, param1: com.opentok.android.Session.Builder.IncludeServers): com.opentok.android.Session.Builder;
					public setIpWhitelist(param0: boolean): com.opentok.android.Session.Builder;
					public constructor(param0: globalAndroid.content.Context, param1: string, param2: string);
					public setProxyUrl(param0: string): com.opentok.android.Session.Builder;
					public setIceRouting(param0: com.opentok.android.Session.Builder.TransportPolicy): com.opentok.android.Session.Builder;
					public setApiUrl(param0: java.net.URL): com.opentok.android.Session.Builder;
					public build(): com.opentok.android.Session;
					public connectionEventsSuppressed(param0: java.lang.Boolean): com.opentok.android.Session.Builder;
					public sessionOptions(param0: com.opentok.android.Session.SessionOptions): com.opentok.android.Session.Builder;
				}
				export module Builder {
					export class IceServer {
						public static class: java.lang.Class<com.opentok.android.Session.Builder.IceServer>;
						public url: string;
						public user: string;
						public credential: string;
						public constructor(param0: string, param1: string, param2: string);
						public equals(param0: any): boolean;
						public toString(): string;
					}
					export class IncludeServers {
						public static class: java.lang.Class<com.opentok.android.Session.Builder.IncludeServers>;
						public static All: com.opentok.android.Session.Builder.IncludeServers;
						public static Custom: com.opentok.android.Session.Builder.IncludeServers;
						public static values(): native.Array<com.opentok.android.Session.Builder.IncludeServers>;
						public static valueOf(param0: string): com.opentok.android.Session.Builder.IncludeServers;
					}
					export class TransportPolicy {
						public static class: java.lang.Class<com.opentok.android.Session.Builder.TransportPolicy>;
						public static All: com.opentok.android.Session.Builder.TransportPolicy;
						public static Relay: com.opentok.android.Session.Builder.TransportPolicy;
						public static valueOf(param0: string): com.opentok.android.Session.Builder.TransportPolicy;
						public static values(): native.Array<com.opentok.android.Session.Builder.TransportPolicy>;
					}
				}
				export class Capabilities {
					public static class: java.lang.Class<com.opentok.android.Session.Capabilities>;
					public canPublish: boolean;
					public canSubscribe: boolean;
					public canForceMute: boolean;
					public toString(): string;
					public constructor();
				}
				export class ConfigurableSessionOptions extends com.opentok.android.Session.SessionOptions {
					public static class: java.lang.Class<com.opentok.android.Session.ConfigurableSessionOptions>;
					public isHwDecodingSupported(): boolean;
				}
				export class ConnectionListener {
					public static class: java.lang.Class<com.opentok.android.Session.ConnectionListener>;
					/**
					 * Constructs a new instance of the com.opentok.android.Session$ConnectionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onConnectionCreated(param0: com.opentok.android.Session, param1: com.opentok.android.Connection): void;
						onConnectionDestroyed(param0: com.opentok.android.Session, param1: com.opentok.android.Connection): void;
					});
					public constructor();
					public onConnectionDestroyed(param0: com.opentok.android.Session, param1: com.opentok.android.Connection): void;
					public onConnectionCreated(param0: com.opentok.android.Session, param1: com.opentok.android.Connection): void;
				}
				export class MuteListener {
					public static class: java.lang.Class<com.opentok.android.Session.MuteListener>;
					/**
					 * Constructs a new instance of the com.opentok.android.Session$MuteListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMuteForced(param0: com.opentok.android.Session, param1: com.opentok.android.MuteForcedInfo): void;
					});
					public constructor();
					public onMuteForced(param0: com.opentok.android.Session, param1: com.opentok.android.MuteForcedInfo): void;
				}
				export class ReconnectionListener {
					public static class: java.lang.Class<com.opentok.android.Session.ReconnectionListener>;
					/**
					 * Constructs a new instance of the com.opentok.android.Session$ReconnectionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onReconnecting(param0: com.opentok.android.Session): void;
						onReconnected(param0: com.opentok.android.Session): void;
					});
					public constructor();
					public onReconnected(param0: com.opentok.android.Session): void;
					public onReconnecting(param0: com.opentok.android.Session): void;
				}
				export class SessionListener {
					public static class: java.lang.Class<com.opentok.android.Session.SessionListener>;
					/**
					 * Constructs a new instance of the com.opentok.android.Session$SessionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onConnected(param0: com.opentok.android.Session): void;
						onDisconnected(param0: com.opentok.android.Session): void;
						onStreamReceived(param0: com.opentok.android.Session, param1: com.opentok.android.Stream): void;
						onStreamDropped(param0: com.opentok.android.Session, param1: com.opentok.android.Stream): void;
						onError(param0: com.opentok.android.Session, param1: com.opentok.android.OpentokError): void;
					});
					public constructor();
					public onStreamReceived(param0: com.opentok.android.Session, param1: com.opentok.android.Stream): void;
					public onDisconnected(param0: com.opentok.android.Session): void;
					public onStreamDropped(param0: com.opentok.android.Session, param1: com.opentok.android.Stream): void;
					public onError(param0: com.opentok.android.Session, param1: com.opentok.android.OpentokError): void;
					public onConnected(param0: com.opentok.android.Session): void;
				}
				export abstract class SessionOptions {
					public static class: java.lang.Class<com.opentok.android.Session.SessionOptions>;
					public useTextureViews(): boolean;
					public isHwDecodingSupported(): boolean;
					public constructor();
					public isCamera2Capable(): boolean;
				}
				export class SessionOptionsProvider {
					public static class: java.lang.Class<com.opentok.android.Session.SessionOptionsProvider>;
					/**
					 * Constructs a new instance of the com.opentok.android.Session$SessionOptionsProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isHwDecodingSupported(): boolean;
					});
					public constructor();
					public isHwDecodingSupported(): boolean;
				}
				export class SessionPauseResumeEvent {
					public static class: java.lang.Class<com.opentok.android.Session.SessionPauseResumeEvent>;
				}
				export class SignalListener {
					public static class: java.lang.Class<com.opentok.android.Session.SignalListener>;
					/**
					 * Constructs a new instance of the com.opentok.android.Session$SignalListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSignalReceived(param0: com.opentok.android.Session, param1: string, param2: string, param3: com.opentok.android.Connection): void;
					});
					public constructor();
					public onSignalReceived(param0: com.opentok.android.Session, param1: string, param2: string, param3: com.opentok.android.Connection): void;
				}
				export class StreamPropertiesListener {
					public static class: java.lang.Class<com.opentok.android.Session.StreamPropertiesListener>;
					/**
					 * Constructs a new instance of the com.opentok.android.Session$StreamPropertiesListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onStreamHasAudioChanged(param0: com.opentok.android.Session, param1: com.opentok.android.Stream, param2: boolean): void;
						onStreamHasVideoChanged(param0: com.opentok.android.Session, param1: com.opentok.android.Stream, param2: boolean): void;
						onStreamVideoDimensionsChanged(param0: com.opentok.android.Session, param1: com.opentok.android.Stream, param2: number, param3: number): void;
						onStreamVideoTypeChanged(param0: com.opentok.android.Session, param1: com.opentok.android.Stream, param2: com.opentok.android.Stream.StreamVideoType): void;
					});
					public constructor();
					public onStreamVideoTypeChanged(param0: com.opentok.android.Session, param1: com.opentok.android.Stream, param2: com.opentok.android.Stream.StreamVideoType): void;
					public onStreamVideoDimensionsChanged(param0: com.opentok.android.Session, param1: com.opentok.android.Stream, param2: number, param3: number): void;
					public onStreamHasVideoChanged(param0: com.opentok.android.Session, param1: com.opentok.android.Stream, param2: boolean): void;
					public onStreamHasAudioChanged(param0: com.opentok.android.Session, param1: com.opentok.android.Stream, param2: boolean): void;
				}
				export class swig_otc_session_cb extends com.opentok.otc.otc_session_callbacks {
					public static class: java.lang.Class<com.opentok.android.Session.swig_otc_session_cb>;
					public getCPointer(): number;
					public constructor();
					public constructor(param0: number, param1: boolean);
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export class Stream {
				public static class: java.lang.Class<com.opentok.android.Stream>;
				public getVideoHeight(): number;
				public hasAudio(): boolean;
				public getStreamId(): string;
				public finalize(): void;
				public getName(): string;
				public getStreamVideoType(): com.opentok.android.Stream.StreamVideoType;
				public toString(): string;
				public getConnection(): com.opentok.android.Connection;
				public getSession(): com.opentok.android.Session;
				public getCreationTime(): java.util.Date;
				public getVideoWidth(): number;
				public hashCode(): number;
				public compareTo(param0: any): number;
				public equals(param0: any): boolean;
				public hasVideo(): boolean;
			}
			export module Stream {
				export class StreamVideoType {
					public static class: java.lang.Class<com.opentok.android.Stream.StreamVideoType>;
					public static StreamVideoTypeCamera: com.opentok.android.Stream.StreamVideoType;
					public static StreamVideoTypeScreen: com.opentok.android.Stream.StreamVideoType;
					public static StreamVideoTypeCustom: com.opentok.android.Stream.StreamVideoType;
					public static values(): native.Array<com.opentok.android.Stream.StreamVideoType>;
					public getVideoType(): number;
					public static valueOf(param0: string): com.opentok.android.Stream.StreamVideoType;
				}
				export class swig_otc_stream extends com.opentok.otc.SWIGTYPE_p_otc_stream {
					public static class: java.lang.Class<com.opentok.android.Stream.swig_otc_stream>;
					public constructor();
					public constructor(param0: number, param1: boolean);
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export class Subscriber extends com.opentok.android.SubscriberKit {
				public static class: java.lang.Class<com.opentok.android.Subscriber>;
				public constructor(param0: globalAndroid.content.Context, param1: com.opentok.android.Stream, param2: com.opentok.android.BaseVideoRenderer);
				public constructor(param0: globalAndroid.content.Context, param1: com.opentok.android.Stream);
			}
			export module Subscriber {
				export class Builder extends com.opentok.android.SubscriberKit.Builder {
					public static class: java.lang.Class<com.opentok.android.Subscriber.Builder>;
					public renderer(param0: com.opentok.android.BaseVideoRenderer): com.opentok.android.Subscriber.Builder;
					public renderer(param0: com.opentok.android.BaseVideoRenderer): com.opentok.android.SubscriberKit.Builder;
					public build(): com.opentok.android.Subscriber;
					public constructor(param0: globalAndroid.content.Context, param1: com.opentok.android.Stream);
					public build(): com.opentok.android.SubscriberKit;
				}
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export class SubscriberKit {
				public static class: java.lang.Class<com.opentok.android.SubscriberKit>;
				public static VIDEO_REASON_PUBLISH_VIDEO: string;
				public static VIDEO_REASON_SUBSCRIBE_TO_VIDEO: string;
				public static VIDEO_REASON_QUALITY: string;
				public static VIDEO_REASON_CODEC_NOT_SUPPORTED: string;
				public static NO_PREFERRED_RESOLUTION: com.opentok.android.VideoUtils.Size;
				public static NO_PREFERRED_FRAMERATE: number;
				public videoStatsListener: com.opentok.android.SubscriberKit.VideoStatsListener;
				public audioStatsListener: com.opentok.android.SubscriberKit.AudioStatsListener;
				public subscriberListener: com.opentok.android.SubscriberKit.SubscriberListener;
				public rtcStatsReportListener: com.opentok.android.SubscriberKit.SubscriberRtcStatsReportListener;
				public videoListener: com.opentok.android.SubscriberKit.VideoListener;
				public audioLevelListener: com.opentok.android.SubscriberKit.AudioLevelListener;
				public streamListener: com.opentok.android.SubscriberKit.StreamListener;
				public session: com.opentok.android.Session;
				public renderer: com.opentok.android.BaseVideoRenderer;
				public stream: com.opentok.android.Stream;
				public getView(): globalAndroid.view.View;
				public onPause(): void;
				public finalize(): void;
				public setPreferredResolution(param0: com.opentok.android.VideoUtils.Size): void;
				public detachFromSession(param0: com.opentok.android.Session): void;
				public getStream(): com.opentok.android.Stream;
				public onConnected(): void;
				public destroy(): void;
				public setVideoListener(param0: com.opentok.android.SubscriberKit.VideoListener): void;
				public onVideoEnabled(param0: string): void;
				public getSubscribeToVideo(): boolean;
				public getRenderer(): com.opentok.android.BaseVideoRenderer;
				public onAudioEnabled(): void;
				public setAudioLevelListener(param0: com.opentok.android.SubscriberKit.AudioLevelListener): void;
				public getSubscribeToAudio(): boolean;
				public onVideoDisabled(param0: string): void;
				public constructor(param0: globalAndroid.content.Context, param1: com.opentok.android.Stream, param2: com.opentok.android.BaseVideoRenderer);
				public onDisconnected(): void;
				public attachToSession(param0: com.opentok.android.Session): void;
				public onAudioDisabled(): void;
				public getPreferredResolution(): com.opentok.android.VideoUtils.Size;
				public setStreamListener(param0: com.opentok.android.SubscriberKit.StreamListener): void;
				public setRenderer(param0: com.opentok.android.BaseVideoRenderer): void;
				public setAudioStatsListener(param0: com.opentok.android.SubscriberKit.AudioStatsListener): void;
				public onResume(): void;
				public onRtcStatsReport(param0: string): void;
				public onVideoDisableWarningLifted(): void;
				public setStyle(param0: string, param1: string): void;
				public onStreamDisconnected(): void;
				public getRtcStatsReport(): void;
				public onAudioLevelUpdated(param0: number): void;
				public setVideoStatsListener(param0: com.opentok.android.SubscriberKit.VideoStatsListener): void;
				public update(param0: java.util.Observable, param1: any): void;
				public getSession(): com.opentok.android.Session;
				public setPreferredFrameRate(param0: number): void;
				public getPreferredFrameRate(): number;
				public setSubscribeToAudio(param0: boolean): void;
				public onError(param0: com.opentok.android.OpentokError): void;
				public onVideoDisableWarning(): void;
				public onStreamReconnected(): void;
				public onVideoDataReceived(): void;
				public setSubscriberListener(param0: com.opentok.android.SubscriberKit.SubscriberListener): void;
				public constructor(param0: globalAndroid.content.Context, param1: com.opentok.android.Stream);
				public setSubscribeToVideo(param0: boolean): void;
				public setRtcStatsReportListener(param0: com.opentok.android.SubscriberKit.SubscriberRtcStatsReportListener): void;
			}
			export module SubscriberKit {
				export class AudioLevelListener {
					public static class: java.lang.Class<com.opentok.android.SubscriberKit.AudioLevelListener>;
					/**
					 * Constructs a new instance of the com.opentok.android.SubscriberKit$AudioLevelListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAudioLevelUpdated(param0: com.opentok.android.SubscriberKit, param1: number): void;
					});
					public constructor();
					public onAudioLevelUpdated(param0: com.opentok.android.SubscriberKit, param1: number): void;
				}
				export class AudioStatsListener {
					public static class: java.lang.Class<com.opentok.android.SubscriberKit.AudioStatsListener>;
					/**
					 * Constructs a new instance of the com.opentok.android.SubscriberKit$AudioStatsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAudioStats(param0: com.opentok.android.SubscriberKit, param1: com.opentok.android.SubscriberKit.SubscriberAudioStats): void;
					});
					public constructor();
					public onAudioStats(param0: com.opentok.android.SubscriberKit, param1: com.opentok.android.SubscriberKit.SubscriberAudioStats): void;
				}
				export class Builder {
					public static class: java.lang.Class<com.opentok.android.SubscriberKit.Builder>;
					public renderer(param0: com.opentok.android.BaseVideoRenderer): com.opentok.android.SubscriberKit.Builder;
					public constructor(param0: globalAndroid.content.Context, param1: com.opentok.android.Stream);
					public build(): com.opentok.android.SubscriberKit;
				}
				export class StreamListener {
					public static class: java.lang.Class<com.opentok.android.SubscriberKit.StreamListener>;
					/**
					 * Constructs a new instance of the com.opentok.android.SubscriberKit$StreamListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onReconnected(param0: com.opentok.android.SubscriberKit): void;
						onDisconnected(param0: com.opentok.android.SubscriberKit): void;
						onAudioEnabled(param0: com.opentok.android.SubscriberKit): void;
						onAudioDisabled(param0: com.opentok.android.SubscriberKit): void;
					});
					public constructor();
					public onAudioEnabled(param0: com.opentok.android.SubscriberKit): void;
					public onAudioDisabled(param0: com.opentok.android.SubscriberKit): void;
					public onDisconnected(param0: com.opentok.android.SubscriberKit): void;
					public onReconnected(param0: com.opentok.android.SubscriberKit): void;
				}
				export class SubscriberAudioStats {
					public static class: java.lang.Class<com.opentok.android.SubscriberKit.SubscriberAudioStats>;
					public audioPacketsLost: number;
					public audioPacketsReceived: number;
					public audioBytesReceived: number;
					public timeStamp: number;
				}
				export class SubscriberListener {
					public static class: java.lang.Class<com.opentok.android.SubscriberKit.SubscriberListener>;
					/**
					 * Constructs a new instance of the com.opentok.android.SubscriberKit$SubscriberListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onConnected(param0: com.opentok.android.SubscriberKit): void;
						onDisconnected(param0: com.opentok.android.SubscriberKit): void;
						onError(param0: com.opentok.android.SubscriberKit, param1: com.opentok.android.OpentokError): void;
					});
					public constructor();
					public onError(param0: com.opentok.android.SubscriberKit, param1: com.opentok.android.OpentokError): void;
					public onConnected(param0: com.opentok.android.SubscriberKit): void;
					public onDisconnected(param0: com.opentok.android.SubscriberKit): void;
				}
				export class SubscriberRtcStatsReportListener {
					public static class: java.lang.Class<com.opentok.android.SubscriberKit.SubscriberRtcStatsReportListener>;
					/**
					 * Constructs a new instance of the com.opentok.android.SubscriberKit$SubscriberRtcStatsReportListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onRtcStatsReport(param0: com.opentok.android.SubscriberKit, param1: string): void;
					});
					public constructor();
					public onRtcStatsReport(param0: com.opentok.android.SubscriberKit, param1: string): void;
				}
				export class SubscriberVideoStats {
					public static class: java.lang.Class<com.opentok.android.SubscriberKit.SubscriberVideoStats>;
					public videoPacketsLost: number;
					public videoPacketsReceived: number;
					public videoBytesReceived: number;
					public timeStamp: number;
				}
				export class VideoListener {
					public static class: java.lang.Class<com.opentok.android.SubscriberKit.VideoListener>;
					/**
					 * Constructs a new instance of the com.opentok.android.SubscriberKit$VideoListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onVideoDataReceived(param0: com.opentok.android.SubscriberKit): void;
						onVideoDisabled(param0: com.opentok.android.SubscriberKit, param1: string): void;
						onVideoEnabled(param0: com.opentok.android.SubscriberKit, param1: string): void;
						onVideoDisableWarning(param0: com.opentok.android.SubscriberKit): void;
						onVideoDisableWarningLifted(param0: com.opentok.android.SubscriberKit): void;
					});
					public constructor();
					public onVideoEnabled(param0: com.opentok.android.SubscriberKit, param1: string): void;
					public onVideoDisableWarning(param0: com.opentok.android.SubscriberKit): void;
					public onVideoDisableWarningLifted(param0: com.opentok.android.SubscriberKit): void;
					public onVideoDisabled(param0: com.opentok.android.SubscriberKit, param1: string): void;
					public onVideoDataReceived(param0: com.opentok.android.SubscriberKit): void;
				}
				export class VideoStatsListener {
					public static class: java.lang.Class<com.opentok.android.SubscriberKit.VideoStatsListener>;
					/**
					 * Constructs a new instance of the com.opentok.android.SubscriberKit$VideoStatsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onVideoStats(param0: com.opentok.android.SubscriberKit, param1: com.opentok.android.SubscriberKit.SubscriberVideoStats): void;
					});
					public constructor();
					public onVideoStats(param0: com.opentok.android.SubscriberKit, param1: com.opentok.android.SubscriberKit.SubscriberVideoStats): void;
				}
				export class swig_otc_rtc_stats_report_cb extends com.opentok.otc.otc_subscriber_rtc_stats_report_cb {
					public static class: java.lang.Class<com.opentok.android.SubscriberKit.swig_otc_rtc_stats_report_cb>;
					public getCPointer(): number;
					public constructor();
					public constructor(param0: number, param1: boolean);
					public constructor(param0: number);
				}
				export class swig_otc_subscriber_cb extends com.opentok.otc.otc_subscriber_callbacks {
					public static class: java.lang.Class<com.opentok.android.SubscriberKit.swig_otc_subscriber_cb>;
					public getCPointer(): number;
					public constructor();
					public constructor(param0: number, param1: boolean);
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export class TextureViewRenderer extends com.opentok.android.BaseVideoRenderer {
				public static class: java.lang.Class<com.opentok.android.TextureViewRenderer>;
				public getView(): globalAndroid.view.View;
				public onFrame(param0: com.opentok.android.BaseVideoRenderer.Frame): void;
				public onVideoPropertiesChanged(param0: boolean): void;
				public onResume(): void;
				public constructor(param0: globalAndroid.content.Context);
				public onPause(): void;
				public setStyle(param0: string, param1: string): void;
				public constructor();
			}
			export module TextureViewRenderer {
				export class Renderer {
					public static class: java.lang.Class<com.opentok.android.TextureViewRenderer.Renderer>;
					public onSurfaceTextureAvailable(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number): void;
					public run(): void;
					public onSurfaceTextureDestroyed(param0: globalAndroid.graphics.SurfaceTexture): boolean;
					public onSurfaceTextureUpdated(param0: globalAndroid.graphics.SurfaceTexture): void;
					public onSurfaceTextureSizeChanged(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export class Utils {
				public static class: java.lang.Class<com.opentok.android.Utils>;
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export class VideoCaptureFactory {
				public static class: java.lang.Class<com.opentok.android.VideoCaptureFactory>;
				public static constructCapturer(param0: globalAndroid.content.Context, param1: com.opentok.android.Publisher.CameraCaptureResolution, param2: com.opentok.android.Publisher.CameraCaptureFrameRate): com.opentok.android.BaseVideoCapturer;
				public static constructCapturer(param0: globalAndroid.content.Context): com.opentok.android.BaseVideoCapturer;
				public static enableCamera2api(param0: boolean): void;
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export class VideoRenderFactory {
				public static class: java.lang.Class<com.opentok.android.VideoRenderFactory>;
				public static constructRenderer(param0: globalAndroid.content.Context): com.opentok.android.BaseVideoRenderer;
				public static useTextureViews(param0: boolean): void;
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export class VideoUtils {
				public static class: java.lang.Class<com.opentok.android.VideoUtils>;
				public constructor();
			}
			export module VideoUtils {
				export class Size {
					public static class: java.lang.Class<com.opentok.android.VideoUtils.Size>;
					public width: number;
					public height: number;
					public equals(param0: any): boolean;
					public equals(param0: number, param1: number): boolean;
					public constructor();
					public set(param0: number, param1: number): void;
					public constructor(param0: com.opentok.android.VideoUtils.Size);
					public set(param0: com.opentok.android.VideoUtils.Size): void;
					public constructor(param0: number, param1: number);
				}
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export module grafika {
				export module gles {
					export class EglCore {
						public static class: java.lang.Class<com.opentok.android.grafika.gles.EglCore>;
						public c(param0: globalAndroid.opengl.EGLSurface): boolean;
						public constructor();
						public a(): void;
						public b(param0: globalAndroid.opengl.EGLSurface): void;
						public a(param0: any): globalAndroid.opengl.EGLSurface;
						public a(param0: globalAndroid.opengl.EGLSurface): void;
						public constructor(param0: globalAndroid.opengl.EGLContext, param1: number);
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export module grafika {
				export module gles {
					export class WindowSurface extends com.opentok.android.grafika.gles.a {
						public static class: java.lang.Class<com.opentok.android.grafika.gles.WindowSurface>;
						public constructor(param0: com.opentok.android.grafika.gles.EglCore);
						public constructor(param0: com.opentok.android.grafika.gles.EglCore, param1: globalAndroid.graphics.SurfaceTexture);
						public d(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module opentok {
		export module android {
			export module grafika {
				export module gles {
					export class a {
						public static class: java.lang.Class<com.opentok.android.grafika.gles.a>;
						public a(): void;
						public constructor(param0: com.opentok.android.grafika.gles.EglCore);
						public c(): boolean;
						public a(param0: any): void;
						public b(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module opentok {
		export module client {
			export class SDKVersion {
				public static class: java.lang.Class<com.opentok.client.SDKVersion>;
				public static LIB_NAME: string;
				public static BUILD_REVISION: string;
				public static BUILD_DATE: string;
				public static SDK_VERSION: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module impl {
			export class a extends com.opentok.android.OpentokError {
				public static class: java.lang.Class<com.opentok.impl.a>;
				public constructor(param0: com.opentok.android.OpentokError.Domain, param1: number, param2: java.lang.Exception);
				public constructor(param0: com.opentok.android.OpentokError.Domain, param1: number, param2: string);
				public constructor(param0: com.opentok.android.OpentokError.Domain, param1: number);
				public static a(param0: number): string;
			}
			export module a {
				export class a {
					public static class: java.lang.Class<com.opentok.impl.a.a>;
				}
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_f_p_q_const__struct_otc_video_capturer_p_void__int {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_f_p_q_const__struct_otc_video_capturer_p_void__int>;
				public constructor(param0: number, param1: boolean);
				public static a(param0: com.opentok.otc.SWIGTYPE_p_f_p_q_const__struct_otc_video_capturer_p_void__int): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_f_p_q_const__struct_otc_video_capturer_p_void_p_struct_otc_video_capturer_settings__int {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_f_p_q_const__struct_otc_video_capturer_p_void_p_struct_otc_video_capturer_settings__int>;
				public constructor(param0: number, param1: boolean);
				public static a(param0: com.opentok.otc.SWIGTYPE_p_f_p_q_const__struct_otc_video_capturer_p_void_p_struct_otc_video_capturer_settings__int): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_f_p_struct_otc_publisher_p_void_a___struct_otc_publisher_audio_stats_size_t__void {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_a___struct_otc_publisher_audio_stats_size_t__void>;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_a___struct_otc_publisher_audio_stats_size_t__void): number;
				public constructor(param0: number, param1: boolean);
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_f_p_struct_otc_publisher_p_void_a___struct_otc_publisher_video_stats_size_t__void {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_a___struct_otc_publisher_video_stats_size_t__void>;
				public constructor(param0: number, param1: boolean);
				public static a(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_a___struct_otc_publisher_video_stats_size_t__void): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_f_p_struct_otc_publisher_p_void_float__void {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_float__void>;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_float__void): number;
				public constructor(param0: number, param1: boolean);
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_f_p_struct_otc_publisher_p_void_p_q_const__char_enum_otc_publisher_error_code__void {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_p_q_const__char_enum_otc_publisher_error_code__void>;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_p_q_const__char_enum_otc_publisher_error_code__void): number;
				public constructor(param0: number, param1: boolean);
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_f_p_struct_otc_publisher_p_void_p_q_const__struct_otc_on_mute_forced_info__void {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_p_q_const__struct_otc_on_mute_forced_info__void>;
				public constructor(param0: number, param1: boolean);
				public static a(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_p_q_const__struct_otc_on_mute_forced_info__void): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_f_p_struct_otc_publisher_p_void_p_q_const__struct_otc_publisher_rtc_stats_size_t__void {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_p_q_const__struct_otc_publisher_rtc_stats_size_t__void>;
				public constructor(param0: number, param1: boolean);
				public static a(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_p_q_const__struct_otc_publisher_rtc_stats_size_t__void): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_f_p_struct_otc_publisher_p_void_p_q_const__struct_otc_stream__void {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_p_q_const__struct_otc_stream__void>;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_p_q_const__struct_otc_stream__void): number;
				public constructor(param0: number, param1: boolean);
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_f_p_struct_otc_publisher_p_void_p_q_const__struct_otc_video_frame__void {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_p_q_const__struct_otc_video_frame__void>;
				public constructor(param0: number, param1: boolean);
				public static a(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_p_q_const__struct_otc_video_frame__void): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_f_p_struct_otc_session_p_void__void {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void__void>;
				public constructor(param0: number, param1: boolean);
				public static a(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void__void): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__char__void {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__char__void>;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__char__void): number;
				public constructor(param0: number, param1: boolean);
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__char_enum_otc_session_error_code__void {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__char_enum_otc_session_error_code__void>;
				public constructor(param0: number, param1: boolean);
				public static a(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__char_enum_otc_session_error_code__void): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__char_p_q_const__char__void {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__char_p_q_const__char__void>;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__char_p_q_const__char__void): number;
				public constructor(param0: number, param1: boolean);
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__char_p_q_const__char_p_q_const__struct_otc_connection__void {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__char_p_q_const__char_p_q_const__struct_otc_connection__void>;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__char_p_q_const__char_p_q_const__struct_otc_connection__void): number;
				public constructor(param0: number, param1: boolean);
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__struct_otc_connection__void {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__struct_otc_connection__void>;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__struct_otc_connection__void): number;
				public constructor(param0: number, param1: boolean);
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__struct_otc_stream__void {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__struct_otc_stream__void>;
				public constructor(param0: number, param1: boolean);
				public static a(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__struct_otc_stream__void): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__struct_otc_stream_enum_otc_stream_video_type__void {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__struct_otc_stream_enum_otc_stream_video_type__void>;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__struct_otc_stream_enum_otc_stream_video_type__void): number;
				public constructor(param0: number, param1: boolean);
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__struct_otc_stream_int__void {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__struct_otc_stream_int__void>;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__struct_otc_stream_int__void): number;
				public constructor(param0: number, param1: boolean);
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__struct_otc_stream_int_int__void {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__struct_otc_stream_int_int__void>;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__struct_otc_stream_int_int__void): number;
				public constructor(param0: number, param1: boolean);
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_f_p_struct_otc_session_p_void_p_struct_otc_on_mute_forced_info__void {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_struct_otc_on_mute_forced_info__void>;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public static a(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_struct_otc_on_mute_forced_info__void): number;
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_f_p_struct_otc_subscriber_p_void__void {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void__void>;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void__void): number;
				public constructor(param0: number, param1: boolean);
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_enum_otc_video_reason__void {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_enum_otc_video_reason__void>;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_enum_otc_video_reason__void): number;
				public constructor(param0: number, param1: boolean);
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_float__void {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_float__void>;
				public constructor(param0: number, param1: boolean);
				public static a(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_float__void): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_p_q_const__char__void {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_p_q_const__char__void>;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_p_q_const__char__void): number;
				public constructor(param0: number, param1: boolean);
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_p_q_const__char_enum_otc_subscriber_error_code__void {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_p_q_const__char_enum_otc_subscriber_error_code__void>;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public static a(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_p_q_const__char_enum_otc_subscriber_error_code__void): number;
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_p_q_const__struct_otc_stream__void {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_p_q_const__struct_otc_stream__void>;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_p_q_const__struct_otc_stream__void): number;
				public constructor(param0: number, param1: boolean);
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_p_q_const__struct_otc_video_frame__void {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_p_q_const__struct_otc_video_frame__void>;
				public constructor(param0: number, param1: boolean);
				public static a(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_p_q_const__struct_otc_video_frame__void): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_struct_otc_subscriber_audio_stats__void {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_struct_otc_subscriber_audio_stats__void>;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_struct_otc_subscriber_audio_stats__void): number;
				public constructor(param0: number, param1: boolean);
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_struct_otc_subscriber_video_stats__void {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_struct_otc_subscriber_video_stats__void>;
				public constructor(param0: number, param1: boolean);
				public static a(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_struct_otc_subscriber_video_stats__void): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_otc_connection {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_otc_connection>;
				public static getCPtr(param0: com.opentok.otc.SWIGTYPE_p_otc_connection): number;
				public constructor(param0: number, param1: boolean);
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_otc_publisher {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_otc_publisher>;
				public constructor(param0: number, param1: boolean);
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_publisher): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_otc_session {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_otc_session>;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_session): number;
				public constructor(param0: number, param1: boolean);
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_otc_stream {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_otc_stream>;
				public static getCPtr(param0: com.opentok.otc.SWIGTYPE_p_otc_stream): number;
				public constructor(param0: number, param1: boolean);
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_otc_subscriber {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_otc_subscriber>;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_subscriber): number;
				public constructor(param0: number, param1: boolean);
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_otc_video_frame {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_otc_video_frame>;
				public static getCPtr(param0: com.opentok.otc.SWIGTYPE_p_otc_video_frame): number;
				public constructor(param0: number, param1: boolean);
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class SWIGTYPE_p_void {
				public static class: java.lang.Class<com.opentok.otc.SWIGTYPE_p_void>;
				public constructor(param0: number, param1: boolean);
				public static a(param0: com.opentok.otc.SWIGTYPE_p_void): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class a {
				public static class: java.lang.Class<com.opentok.otc.a>;
				public constructor(param0: number, param1: boolean);
				public static a(param0: com.opentok.otc.a): number;
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class b {
				public static class: java.lang.Class<com.opentok.otc.b>;
				public static a(param0: com.opentok.otc.b): number;
				public constructor(param0: number, param1: boolean);
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class c {
				public static class: java.lang.Class<com.opentok.otc.c>;
				public static a(param0: com.opentok.otc.c): number;
				public constructor(param0: number, param1: boolean);
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class d {
				public static class: java.lang.Class<com.opentok.otc.d>;
				public constructor(param0: number, param1: boolean);
				public static a(param0: com.opentok.otc.d): number;
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class e extends com.opentok.otc.f {
				public static class: java.lang.Class<com.opentok.otc.e>;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_session, param1: string, param2: com.opentok.otc.otc_force_mute_options): number;
				public static b(param0: com.opentok.otc.SWIGTYPE_p_otc_subscriber): number;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_video_frame, param1: com.opentok.otc.k): number;
				public static d(param0: com.opentok.otc.SWIGTYPE_p_otc_connection): string;
				public static c(param0: com.opentok.otc.SWIGTYPE_p_otc_publisher): string;
				public static i(param0: com.opentok.otc.SWIGTYPE_p_otc_publisher): com.opentok.otc.i;
				public static b(param0: com.opentok.otc.SWIGTYPE_p_otc_session, param1: com.opentok.otc.SWIGTYPE_p_otc_publisher): number;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_video_frame): com.opentok.otc.otc_video_frame_format;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_session, param1: native.Array<string>, param2: number, param3: com.opentok.otc.otc_force_mute_options): number;
				public static k(param0: com.opentok.otc.SWIGTYPE_p_otc_stream): number;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_subscriber): number;
				public static e(param0: com.opentok.otc.SWIGTYPE_p_otc_publisher): number;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_stream): com.opentok.otc.SWIGTYPE_p_otc_stream;
				public static h(param0: com.opentok.otc.SWIGTYPE_p_otc_publisher): com.opentok.otc.SWIGTYPE_p_otc_stream;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_session, param1: string, param2: string, param3: com.opentok.otc.SWIGTYPE_p_otc_connection): number;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_publisher): number;
				public static d(param0: com.opentok.otc.SWIGTYPE_p_otc_session, param1: native.Array<number>): native.Array<string>;
				public static a(param0: com.opentok.otc.c): number;
				public static b(param0: com.opentok.otc.SWIGTYPE_p_otc_session): number;
				public static e(param0: com.opentok.otc.SWIGTYPE_p_otc_stream): string;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_session, param1: string, param2: string, param3: number, param4: number, param5: string): number;
				public static a(param0: com.opentok.otc.b, param1: number): number;
				public static b(param0: com.opentok.otc.SWIGTYPE_p_otc_session, param1: string, param2: string): number;
				public static h(param0: com.opentok.otc.SWIGTYPE_p_otc_stream): com.opentok.otc.otc_stream_video_type;
				public static f(param0: com.opentok.otc.SWIGTYPE_p_otc_publisher): number;
				public static c(): com.opentok.otc.b;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_session, param1: string, param2: string, param3: com.opentok.otc.SWIGTYPE_p_otc_connection, param4: com.opentok.otc.otc_signal_options): number;
				public static b(param0: com.opentok.otc.SWIGTYPE_p_otc_subscriber, param1: number): number;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_subscriber, param1: number, param2: number): number;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_connection): com.opentok.otc.SWIGTYPE_p_otc_connection;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_subscriber, param1: native.Array<number>, param2: native.Array<number>): number;
				public static g(param0: com.opentok.otc.SWIGTYPE_p_otc_publisher): com.opentok.otc.SWIGTYPE_p_otc_session;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_session): number;
				public static d(param0: com.opentok.otc.SWIGTYPE_p_otc_stream): number;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_session, param1: string, param2: string): number;
				public static a(param0: com.opentok.otc.a, param1: number): number;
				public static c(param0: com.opentok.otc.SWIGTYPE_p_otc_connection): number;
				public static c(param0: com.opentok.otc.SWIGTYPE_p_otc_session): com.opentok.otc.otc_session_capabilities;
				public static b(param0: com.opentok.otc.SWIGTYPE_p_otc_video_frame): number;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_video_frame, param1: com.opentok.otc.c): com.opentok.otc.d;
				public static d(param0: com.opentok.otc.SWIGTYPE_p_otc_session): com.opentok.otc.SWIGTYPE_p_otc_connection;
				public static f(param0: com.opentok.otc.SWIGTYPE_p_otc_stream): string;
				public static b(param0: com.opentok.otc.SWIGTYPE_p_otc_publisher): number;
				public static e(param0: com.opentok.otc.SWIGTYPE_p_otc_session): string;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_session, param1: com.opentok.otc.SWIGTYPE_p_otc_publisher): number;
				public static b(param0: com.opentok.otc.SWIGTYPE_p_otc_connection): number;
				public static j(param0: com.opentok.otc.SWIGTYPE_p_otc_stream): number;
				public static a(param0: com.opentok.otc.b, param1: number, param2: native.Array<string>, param3: native.Array<string>, param4: native.Array<string>, param5: number, param6: number): number;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_session, param1: com.opentok.otc.SWIGTYPE_p_otc_subscriber): number;
				public static a(param0: com.opentok.otc.b): number;
				public static c(param0: com.opentok.otc.SWIGTYPE_p_otc_stream): com.opentok.otc.SWIGTYPE_p_otc_connection;
				public static b(param0: com.opentok.otc.SWIGTYPE_p_otc_session, param1: native.Array<number>): number;
				public static i(param0: com.opentok.otc.SWIGTYPE_p_otc_stream): number;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_publisher, param1: com.opentok.otc.otc_publisher_rtc_stats_report_cb): number;
				public static b(): com.opentok.otc.a;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_subscriber, param1: native.Array<number>): number;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_subscriber, param1: com.opentok.otc.otc_subscriber_rtc_stats_report_cb): number;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_publisher, param1: com.opentok.otc.i): number;
				public static a(param0: string, param1: string, param2: com.opentok.otc.otc_session_callbacks, param3: com.opentok.otc.b): com.opentok.otc.SWIGTYPE_p_otc_session;
				public static b(param0: com.opentok.otc.SWIGTYPE_p_otc_stream): number;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_session, param1: com.opentok.otc.h): void;
				public static c(param0: com.opentok.otc.SWIGTYPE_p_otc_video_frame): number;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_session, param1: string, param2: string, param3: com.opentok.otc.otc_signal_options): number;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_session, param1: string): string;
				public static b(param0: com.opentok.otc.SWIGTYPE_p_otc_session, param1: com.opentok.otc.SWIGTYPE_p_otc_subscriber): number;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_session, param1: native.Array<number>): native.Array<string>;
				public static c(param0: com.opentok.otc.SWIGTYPE_p_otc_publisher, param1: number): number;
				public static a(): com.opentok.otc.c;
				public static c(param0: com.opentok.otc.SWIGTYPE_p_otc_session, param1: native.Array<number>): native.Array<string>;
				public static a(param0: com.opentok.otc.a, param1: string): number;
				public static a(param0: com.opentok.otc.otc_publisher_callbacks, param1: com.opentok.otc.a): com.opentok.otc.SWIGTYPE_p_otc_publisher;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_stream, param1: com.opentok.otc.otc_subscriber_callbacks): com.opentok.otc.SWIGTYPE_p_otc_subscriber;
				public static b(param0: com.opentok.otc.b, param1: number): number;
				public static c(param0: com.opentok.otc.SWIGTYPE_p_otc_subscriber, param1: number): number;
				public static b(param0: com.opentok.otc.SWIGTYPE_p_otc_publisher, param1: number): number;
				public static a(param0: com.opentok.otc.a, param1: com.opentok.otc.otc_video_capturer_callbacks): number;
				public static e(param0: com.opentok.otc.SWIGTYPE_p_otc_connection): string;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_publisher, param1: number): number;
				public static d(param0: com.opentok.otc.SWIGTYPE_p_otc_publisher): number;
				public static d(param0: com.opentok.otc.SWIGTYPE_p_otc_subscriber): com.opentok.otc.SWIGTYPE_p_otc_stream;
				public static b(param0: com.opentok.otc.a, param1: number): number;
				public static c(param0: com.opentok.otc.SWIGTYPE_p_otc_subscriber): com.opentok.otc.SWIGTYPE_p_otc_session;
				public static a(param0: com.opentok.otc.b, param1: string): number;
				public static f(param0: com.opentok.otc.SWIGTYPE_p_otc_subscriber): number;
				public static a(param0: com.opentok.otc.SWIGTYPE_p_otc_subscriber, param1: number): number;
				public static f(param0: com.opentok.otc.SWIGTYPE_p_otc_session): number;
				public static g(param0: com.opentok.otc.SWIGTYPE_p_otc_stream): number;
				public static a(param0: com.opentok.otc.a): number;
				public static e(param0: com.opentok.otc.SWIGTYPE_p_otc_subscriber): number;
				public static a(param0: com.opentok.otc.d, param1: number): number;
				public static a(param0: native.Array<number>): native.Array<string>;
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class f {
				public static class: java.lang.Class<com.opentok.otc.f>;
				/**
				 * Constructs a new instance of the com.opentok.otc.f interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					<clinit>(): void;
				});
				public constructor();
				public static b0: string;
				public static q: string;
				public static p: string;
				public static s: string;
				public static r: string;
				public static u: string;
				public static t: string;
				public static w: string;
				public static v: string;
				public static y: string;
				public static x: string;
				public static z: string;
				public static a: string;
				public static c: string;
				public static b: string;
				public static e: string;
				public static d: string;
				public static g: string;
				public static f: string;
				public static i: string;
				public static h: string;
				public static k: string;
				public static j: string;
				public static m: string;
				public static l: string;
				public static o: string;
				public static a0: string;
				public static n: string;
				public static Q: string;
				public static P: string;
				public static S: string;
				public static R: string;
				public static U: string;
				public static T: string;
				public static W: string;
				public static V: string;
				public static Y: string;
				public static X: string;
				public static Z: string;
				public static A: string;
				public static C: string;
				public static B: string;
				public static E: string;
				public static D: string;
				public static G: string;
				public static F: string;
				public static I: string;
				public static H: string;
				public static K: string;
				public static J: string;
				public static M: string;
				public static L: string;
				public static O: string;
				public static N: string;
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class g {
				public static class: java.lang.Class<com.opentok.otc.g>;
				public static c: com.opentok.otc.g;
				public static d: com.opentok.otc.g;
				public static e: com.opentok.otc.g;
				public a(): number;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class h {
				public static class: java.lang.Class<com.opentok.otc.h>;
				public static c: com.opentok.otc.h;
				public static d: com.opentok.otc.h;
				public static e: com.opentok.otc.h;
				public static f: com.opentok.otc.h;
				public a(): number;
				public static a(param0: number): com.opentok.otc.h;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class i {
				public static class: java.lang.Class<com.opentok.otc.i>;
				public static c: com.opentok.otc.i;
				public static d: com.opentok.otc.i;
				public static a(param0: number): com.opentok.otc.i;
				public a(): number;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class j {
				public static class: java.lang.Class<com.opentok.otc.j>;
				public static c: com.opentok.otc.j;
				public static d: com.opentok.otc.j;
				public static e: com.opentok.otc.j;
				public a(): number;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class k {
				public static class: java.lang.Class<com.opentok.otc.k>;
				public static c: com.opentok.otc.k;
				public static d: com.opentok.otc.k;
				public static e: com.opentok.otc.k;
				public static f: com.opentok.otc.k;
				public static g: com.opentok.otc.k;
				public static h: com.opentok.otc.k;
				public a(): number;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class opentokJNI {
				public static class: java.lang.Class<com.opentok.otc.opentokJNI>;
				public static new_otc_force_mute_options(): number;
				public static otc_session_callbacks_on_archive_stopped_get(param0: number, param1: com.opentok.otc.otc_session_callbacks): number;
				public static OTC_STATS_KEY_BUCKETDELAY_get(): string;
				public static otc_subscriber_callbacks_on_video_disable_warning_lifted_set(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks, param2: number): void;
				public static otc_subscriber_callbacks_on_video_disable_warning_set(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks, param2: number): void;
				public static otc_video_capturer_callbacks_stop_get(param0: number, param1: com.opentok.otc.otc_video_capturer_callbacks): number;
				public static OTC_STATS_KEY_JITTERRECEIVED_get(): string;
				public static otc_subscriber_callbacks_on_video_disable_warning_lifted_get(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks): number;
				public static otc_session_log_external_device_use(param0: number, param1: number): void;
				public static otc_session_callbacks_on_error_set(param0: number, param1: com.opentok.otc.otc_session_callbacks, param2: number): void;
				public static otc_subscriber_callbacks_user_data_get(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks): number;
				public static otc_publisher_set_publish_audio(param0: number, param1: number): number;
				public static otc_subscriber_callbacks_on_error_get(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks): number;
				public static OTC_SUCCESS_get(): number;
				public static OTC_VIDEO_FRAME_FORMAT_RGB24_get(): number;
				public static OTC_PUBLISHER_VIDEO_TYPE_SCREEN_get(): number;
				public static otc_subscriber_new(param0: number, param1: number, param2: com.opentok.otc.otc_subscriber_callbacks): number;
				public static otc_video_capturer_callbacks_user_data_get(param0: number, param1: com.opentok.otc.otc_video_capturer_callbacks): number;
				public static otc_subscriber_callbacks_on_audio_stats_get(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks): number;
				public static otc_session_callbacks_on_stream_dropped_set(param0: number, param1: com.opentok.otc.otc_session_callbacks, param2: number): void;
				public static otc_publisher_rtc_stats_report_cb_user_data_get(param0: number, param1: com.opentok.otc.otc_publisher_rtc_stats_report_cb): number;
				public static OTC_STREAM_VIDEO_TYPE_SCREEN_get(): number;
				public static new_otc_subscriber_callbacks(): number;
				public static new_otc_publisher_callbacks(): number;
				public static otc_video_capturer_callbacks_reserved_set(param0: number, param1: com.opentok.otc.otc_video_capturer_callbacks, param2: number): void;
				public static otc_subscriber_callbacks_on_reconnected_set(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks, param2: number): void;
				public static otc_session_callbacks_on_stream_has_video_changed_set(param0: number, param1: com.opentok.otc.otc_session_callbacks, param2: number): void;
				public static otc_subscriber_callbacks_on_connected_set(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks, param2: number): void;
				public static otc_subscriber_get_session(param0: number): number;
				public static otc_external_audio_get(): number;
				public static OTC_STATS_KEY_PACKETSRECEIVED_get(): string;
				public static OTC_STATS_KEY_CHANNELID_get(): string;
				public static OTC_STATS_KEY_TARGETENCBITRATE_get(): string;
				public static otc_publisher_callbacks_on_render_frame_set(param0: number, param1: com.opentok.otc.otc_publisher_callbacks, param2: number): void;
				public static otc_stream_get_video_width(param0: number): number;
				public static otc_session_callbacks_on_stream_video_type_changed_set(param0: number, param1: com.opentok.otc.otc_session_callbacks, param2: number): void;
				public static otc_session_subscribe(param0: number, param1: number): number;
				public static OTC_STATS_KEY_FIRSRECEIVED_get(): string;
				public static otc_session_settings_new(): number;
				public static otc_publisher_delete(param0: number): number;
				public static otc_session_callbacks_on_reconnection_started_get(param0: number, param1: com.opentok.otc.otc_session_callbacks): number;
				public static otc_subscriber_set_video_data_callback_behavior(param0: number, param1: number): number;
				public static OTC_STATS_KEY_TRANSPORTID_get(): string;
				public static otc_session_callbacks_on_archive_stopped_set(param0: number, param1: com.opentok.otc.otc_session_callbacks, param2: number): void;
				public static OTC_TRUE_get(): number;
				public static otc_session_callbacks_user_data_set(param0: number, param1: com.opentok.otc.otc_session_callbacks, param2: number): void;
				public static OTC_VIDEO_FRAME_FORMAT_NV12_get(): number;
				public static new_otc_session_callbacks(): number;
				public static otc_subscriber_set_rtc_stats_report_cb(param0: number, param1: number, param2: com.opentok.otc.otc_subscriber_rtc_stats_report_cb): number;
				public static OTC_STATS_KEY_REMOTECANDIDATETYPE_get(): string;
				public static otc_subscriber_callbacks_on_audio_level_updated_set(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks, param2: number): void;
				public static IS_MAC_OS_get(): number;
				public static otc_session_callbacks_on_reconnection_started_set(param0: number, param1: com.opentok.otc.otc_session_callbacks, param2: number): void;
				public static otc_publisher_get_publish_audio(param0: number): number;
				public static otc_video_capturer_callbacks_start_set(param0: number, param1: com.opentok.otc.otc_video_capturer_callbacks, param2: number): void;
				public static otc_publisher_settings_set_audio_track(param0: number, param1: number): number;
				public static otc_subscriber_callbacks_user_data_set(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks, param2: number): void;
				public static otc_subscriber_callbacks_on_render_frame_get(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks): number;
				public static OTC_VIDEO_FRAME_PLANE_Y_get(): number;
				public static OTC_STATS_KEY_TRANSMITBITRATE_get(): string;
				public static otc_session_callbacks_on_connected_get(param0: number, param1: com.opentok.otc.otc_session_callbacks): number;
				public static OTC_STATS_KEY_CONTENTNAME_get(): string;
				public static otc_session_callbacks_reserved_set(param0: number, param1: com.opentok.otc.otc_session_callbacks, param2: number): void;
				public static OTC_VIDEO_FRAME_FORMAT_UYVY_get(): number;
				public static otc_subscriber_callbacks_on_video_data_received_set(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks, param2: number): void;
				public static otc_video_capturer_callbacks_user_data_set(param0: number, param1: com.opentok.otc.otc_video_capturer_callbacks, param2: number): void;
				public static otc_publisher_callbacks_on_stream_destroyed_get(param0: number, param1: com.opentok.otc.otc_publisher_callbacks): number;
				public static otc_publisher_callbacks_on_publisher_mute_forced_get(param0: number, param1: com.opentok.otc.otc_publisher_callbacks): number;
				public static otc_connection_copy(param0: number): number;
				public static otc_subscriber_rtc_stats_report_cb_on_rtc_stats_report_set(param0: number, param1: com.opentok.otc.otc_subscriber_rtc_stats_report_cb, param2: number): void;
				public static IS_LINUX_get(): number;
				public static OTC_VIDEO_FRAME_FORMAT_YUV420P_get(): number;
				public static OTC_STATS_KEY_FRAMERATESENT_get(): string;
				public static otc_video_frame_get_metadata(param0: number, param1: number): number;
				public static new_otc_video_capturer_settings(): number;
				public static otc_session_callbacks_on_stream_received_get(param0: number, param1: com.opentok.otc.otc_session_callbacks): number;
				public static otc_publisher_callbacks_on_stream_destroyed_set(param0: number, param1: com.opentok.otc.otc_publisher_callbacks, param2: number): void;
				public static OTC_STATS_KEY_INITIATOR_get(): string;
				public static otc_subscriber_callbacks_reserved_get(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks): number;
				public static otc_video_frame_get_width(param0: number): number;
				public static OTC_STATS_KEY_TRANSPORTTYPE_get(): string;
				public static OTC_STATS_KEY_PACKETSLOST_get(): string;
				public static OTC_VIDEO_FRAME_FORMAT_ARGB32_get(): number;
				public static otc_video_capturer_settings_expected_delay_get(param0: number, param1: com.opentok.otc.otc_video_capturer_settings): number;
				public static delete_otc_subscriber_callbacks(param0: number): void;
				public static otc_subscriber_get_rtc_stats_report(param0: number): number;
				public static otc_publisher_callbacks_on_audio_level_updated_set(param0: number, param1: com.opentok.otc.otc_publisher_callbacks, param2: number): void;
				public static delete_otc_publisher_rtc_stats_report_cb(param0: number): void;
				public static otc_subscriber_callbacks_on_video_enabled_set(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks, param2: number): void;
				public static otc_session_force_mute_stream(param0: number, param1: string, param2: number, param3: com.opentok.otc.otc_force_mute_options): number;
				public static otc_video_capturer_settings_format_set(param0: number, param1: com.opentok.otc.otc_video_capturer_settings, param2: number): void;
				public static OTC_STATS_KEY_FRAMEHEIGHTRECEIVED_get(): string;
				public static OTC_VIDEO_FRAME_PLANE_UV_INTERLEAVED_get(): number;
				public static otc_session_settings_set_proxy_url(param0: number, param1: string): number;
				public static delete_otc_subscriber_rtc_stats_report_cb(param0: number): void;
				public static otc_video_capturer_settings_width_set(param0: number, param1: com.opentok.otc.otc_video_capturer_settings, param2: number): void;
				public static otc_subscriber_set_subscribe_to_audio(param0: number, param1: number): number;
				public static otc_session_unpublish(param0: number, param1: number): number;
				public static otc_session_capabilities_force_mute_get(param0: number, param1: com.opentok.otc.otc_session_capabilities): number;
				public static otc_subscriber_get_subscribe_to_video(param0: number): number;
				public static otc_publisher_get_session(param0: number): number;
				public static new_otc_audio_device_settings(): number;
				public static otc_internal_audio_get(): number;
				public static otc_video_frame_get_format(param0: number): number;
				public static otc_subscriber_rtc_stats_report_cb_user_data_set(param0: number, param1: com.opentok.otc.otc_subscriber_rtc_stats_report_cb, param2: number): void;
				public static otc_session_publish(param0: number, param1: number): number;
				public static otc_session_connect_to_host(param0: number, param1: string, param2: string, param3: number, param4: number, param5: string): number;
				public static otc_subscriber_callbacks_on_audio_disabled_get(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks): number;
				public static OTC_VIDEO_FRAME_FORMAT_UNKNOWN_get(): number;
				public static otc_audio_device_settings_sampling_rate_set(param0: number, param1: com.opentok.otc.otc_audio_device_settings, param2: number): void;
				public static delete_otc_force_mute_options(param0: number): void;
				public static otc_signal_options_retry_after_reconnect_set(param0: number, param1: com.opentok.otc.otc_signal_options, param2: number): void;
				public static otc_video_capturer_callbacks_reserved_get(param0: number, param1: com.opentok.otc.otc_video_capturer_callbacks): number;
				public static otc_publisher_get_audio_fallback_enabled(param0: number): number;
				public static otc_session_settings_delete(param0: number): number;
				public static OTC_STATS_KEY_AVAILABLERECEIVEBANDWIDTH_get(): string;
				public static otc_connection_get_data(param0: number): string;
				public static otc_session_callbacks_on_reconnected_get(param0: number, param1: com.opentok.otc.otc_session_callbacks): number;
				public static otc_session_get_connection(param0: number): number;
				public static otc_publisher_rtc_stats_report_cb_reserved_set(param0: number, param1: com.opentok.otc.otc_publisher_rtc_stats_report_cb, param2: number): void;
				public static OTC_VIDEO_FRAME_FORMAT_RGBA32_get(): number;
				public static otc_session_send_signal_to_connection_with_options(param0: number, param1: string, param2: string, param3: number, param4: number, param5: com.opentok.otc.otc_signal_options): number;
				public static otc_subscriber_callbacks_on_disconnected_set(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks, param2: number): void;
				public static otc_connection_get_creation_time(param0: number): number;
				public static OTC_STATS_KEY_ECHODELAYMEDIAN_get(): string;
				public static otc_session_send_signal(param0: number, param1: string, param2: string): number;
				public static otc_session_callbacks_on_archive_started_get(param0: number, param1: com.opentok.otc.otc_session_callbacks): number;
				public static otc_publisher_set_max_audio_bitrate(param0: number, param1: number): number;
				public static otc_session_callbacks_on_connected_set(param0: number, param1: com.opentok.otc.otc_session_callbacks, param2: number): void;
				public static OTC_STATS_KEY_LOCALADDRESS_get(): string;
				public static otc_publisher_callbacks_on_publisher_mute_forced_set(param0: number, param1: com.opentok.otc.otc_publisher_callbacks, param2: number): void;
				public static otc_publisher_callbacks_on_error_get(param0: number, param1: com.opentok.otc.otc_publisher_callbacks): number;
				public static otc_publisher_rtc_stats_report_cb_reserved_get(param0: number, param1: com.opentok.otc.otc_publisher_rtc_stats_report_cb): number;
				public static OTC_STATS_KEY_WRITABLE_get(): string;
				public static OTC_STATS_KEY_NACKSRECEIVED_get(): string;
				public static otc_internal_video_get(): number;
				public static otc_session_callbacks_on_reconnected_set(param0: number, param1: com.opentok.otc.otc_session_callbacks, param2: number): void;
				public static otc_subscriber_get_stream(param0: number): number;
				public static OTC_STATS_KEY_ECHOCANCELLATIONQUALITYMIN_get(): string;
				public static otc_publisher_callbacks_on_audio_stats_get(param0: number, param1: com.opentok.otc.otc_publisher_callbacks): number;
				public static otc_subscriber_callbacks_on_error_set(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks, param2: number): void;
				public static OTC_SUBSCRIBER_VIDEO_DATA_EVERY_FRAME_get(): number;
				public static otc_media_utils_get_supported_codecs_array(param0: native.Array<number>): native.Array<string>;
				public static otc_subscriber_callbacks_reserved_set(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks, param2: number): void;
				public static OTC_STATS_KEY_AUDIOOUTPUTLEVEL_get(): string;
				public static otc_session_callbacks_on_disconnected_get(param0: number, param1: com.opentok.otc.otc_session_callbacks): number;
				public static otc_video_capturer_settings_fps_get(param0: number, param1: com.opentok.otc.otc_video_capturer_settings): number;
				public static otc_subscriber_callbacks_on_audio_enabled_set(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks, param2: number): void;
				public static otc_video_capturer_settings_width_get(param0: number, param1: com.opentok.otc.otc_video_capturer_settings): number;
				public static otc_session_send_signal_with_options(param0: number, param1: string, param2: string, param3: number, param4: com.opentok.otc.otc_signal_options): number;
				public static otc_session_callbacks_on_stream_has_audio_changed_get(param0: number, param1: com.opentok.otc.otc_session_callbacks): number;
				public static otc_publisher_rtc_stats_report_cb_on_rtc_stats_report_get(param0: number, param1: com.opentok.otc.otc_publisher_rtc_stats_report_cb): number;
				public static OTC_STREAM_VIDEO_TYPE_CAMERA_get(): number;
				public static OTC_VIDEO_FRAME_PLANE_V_get(): number;
				public static otc_session_get_ice_config_server_count(param0: number, param1: native.Array<number>): number;
				public static otc_publisher_settings_set_video_track(param0: number, param1: number): number;
				public static otc_publisher_callbacks_on_video_stats_set(param0: number, param1: com.opentok.otc.otc_publisher_callbacks, param2: number): void;
				public static otc_publisher_settings_set_name(param0: number, param1: string): number;
				public static new_otc_session_capabilities(): number;
				public static otc_session_callbacks_reserved_get(param0: number, param1: com.opentok.otc.otc_session_callbacks): number;
				public static OTC_STATS_KEY_SSRC_get(): string;
				public static otc_publisher_get_video_type(param0: number): number;
				public static otc_session_callbacks_on_connection_created_get(param0: number, param1: com.opentok.otc.otc_session_callbacks): number;
				public static otc_subscriber_set_preferred_framerate(param0: number, param1: number): number;
				public static otc_publisher_callbacks_on_audio_level_updated_get(param0: number, param1: com.opentok.otc.otc_publisher_callbacks): number;
				public static new_otc_publisher_rtc_stats_report_cb(): number;
				public static OTC_STATS_KEY_AUDIOINPUTLEVEL_get(): string;
				public static otc_session_get_ice_config_credentials(param0: number, param1: native.Array<number>): native.Array<string>;
				public static otc_subscriber_delete(param0: number): number;
				public static OTC_STATS_KEY_PACKETSSENT_get(): string;
				public static otc_publisher_set_video_type(param0: number, param1: number): number;
				public static otc_subscriber_callbacks_on_connected_get(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks): number;
				public static OTC_STATS_KEY_FIRSSENT_get(): string;
				public static OTC_PUBLISHER_VIDEO_TYPE_CAMERA_get(): number;
				public static otc_session_callbacks_on_stream_video_dimensions_changed_get(param0: number, param1: com.opentok.otc.otc_session_callbacks): number;
				public static otc_subscriber_rtc_stats_report_cb_user_data_get(param0: number, param1: com.opentok.otc.otc_subscriber_rtc_stats_report_cb): number;
				public static otc_subscriber_callbacks_on_audio_level_updated_get(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks): number;
				public static OTC_STATS_KEY_ECHORETURNLOSS_get(): string;
				public static OTC_STREAM_VIDEO_TYPE_CUSTOM_get(): number;
				public static otc_session_reconnect(param0: number): number;
				public static OTC_STATS_KEY_CODECNAME_get(): string;
				public static OTC_STATS_KEY_LOCALCANDIDATETYPE_get(): string;
				public static otc_session_callbacks_on_stream_video_dimensions_changed_set(param0: number, param1: com.opentok.otc.otc_session_callbacks, param2: number): void;
				public static otc_subscriber_callbacks_on_video_data_received_get(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks): number;
				public static otc_video_capturer_settings_format_get(param0: number, param1: com.opentok.otc.otc_video_capturer_settings): number;
				public static new_otc_video_capturer_callbacks(): number;
				public static otc_session_callbacks_on_archive_started_set(param0: number, param1: com.opentok.otc.otc_session_callbacks, param2: number): void;
				public static otc_publisher_callbacks_on_render_frame_get(param0: number, param1: com.opentok.otc.otc_publisher_callbacks): number;
				public static otc_connection_get_id(param0: number): string;
				public static otc_publisher_settings_new(): number;
				public static OTC_STATS_KEY_ECHORETURNLOSSENHANCEMENT_get(): string;
				public static delete_otc_video_capturer_callbacks(param0: number): void;
				public static otc_video_capturer_callbacks_init_set(param0: number, param1: com.opentok.otc.otc_video_capturer_callbacks, param2: number): void;
				public static OTC_VIDEO_FRAME_PLANE_VU_INTERLEAVED_get(): number;
				public static otc_session_force_mute_all(param0: number, param1: native.Array<string>, param2: number, param3: number, param4: com.opentok.otc.otc_force_mute_options): number;
				public static otc_session_settings_set_ip_whitelist(param0: number, param1: number): number;
				public static otc_session_settings_set_custom_ice_config_no_struct(param0: number, param1: number, param2: native.Array<string>, param3: native.Array<string>, param4: native.Array<string>, param5: number, param6: number): number;
				public static otc_session_disconnect(param0: number): number;
				public static otc_connection_delete(param0: number): number;
				public static otc_subscriber_rtc_stats_report_cb_reserved_set(param0: number, param1: com.opentok.otc.otc_subscriber_rtc_stats_report_cb, param2: number): void;
				public static otc_stream_copy(param0: number): number;
				public static otc_video_capturer_callbacks_get_capture_settings_get(param0: number, param1: com.opentok.otc.otc_video_capturer_callbacks): number;
				public static otc_subscriber_callbacks_on_audio_disabled_set(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks, param2: number): void;
				public static otc_subscriber_callbacks_on_video_disabled_get(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks): number;
				public static otc_stream_delete(param0: number): number;
				public static OTC_STATS_KEY_FRAMEWIDTHRECEIVED_get(): string;
				public static otc_video_capturer_callbacks_init_get(param0: number, param1: com.opentok.otc.otc_video_capturer_callbacks): number;
				public static otc_session_callbacks_on_stream_has_audio_changed_set(param0: number, param1: com.opentok.otc.otc_session_callbacks, param2: number): void;
				public static otc_publisher_set_audio_fallback_enabled(param0: number, param1: number): number;
				public static OTC_STATS_KEY_NACKSSENT_get(): string;
				public static otc_subscriber_callbacks_on_video_enabled_get(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks): number;
				public static otc_video_frame_get_height(param0: number): number;
				public static otc_subscriber_get_preferred_framerate(param0: number, param1: native.Array<number>): number;
				public static sizetPointer_value(param0: number): number;
				public static OTC_VIDEO_FRAME_PLANE_PACKED_get(): number;
				public static otc_subscriber_callbacks_on_video_stats_set(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks, param2: number): void;
				public static OTC_VIDEO_FRAME_FORMAT_YUY2_get(): number;
				public static otc_publisher_set_rtc_stats_report_cb(param0: number, param1: number, param2: com.opentok.otc.otc_publisher_rtc_stats_report_cb): number;
				public static delete_otc_session_callbacks(param0: number): void;
				public static delete_otc_video_capturer_settings(param0: number): void;
				public static otc_session_settings_set_connection_events_suppressed(param0: number, param1: number): number;
				public static OTC_STATS_KEY_LOCALRELAYPROTOCOL_get(): string;
				public static otc_external_video_get(): number;
				public static otc_session_callbacks_on_stream_received_set(param0: number, param1: com.opentok.otc.otc_session_callbacks, param2: number): void;
				public static OTC_FALSE_get(): number;
				public static otc_audio_device_settings_number_of_channels_get(param0: number, param1: com.opentok.otc.otc_audio_device_settings): number;
				public static otc_subscriber_get_subscribe_to_audio(param0: number): number;
				public static OTC_VIDEO_FRAME_METADATA_MAX_SIZE_get(): number;
				public static otc_publisher_callbacks_user_data_set(param0: number, param1: com.opentok.otc.otc_publisher_callbacks, param2: number): void;
				public static otc_session_callbacks_on_connection_dropped_set(param0: number, param1: com.opentok.otc.otc_session_callbacks, param2: number): void;
				public static otc_subscriber_callbacks_on_render_frame_set(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks, param2: number): void;
				public static otc_session_get_ice_config_users(param0: number, param1: native.Array<number>): native.Array<string>;
				public static otc_publisher_callbacks_on_error_set(param0: number, param1: com.opentok.otc.otc_publisher_callbacks, param2: number): void;
				public static otc_stream_has_audio(param0: number): number;
				public static otc_publisher_set_publish_video(param0: number, param1: number): number;
				public static otc_session_callbacks_on_error_get(param0: number, param1: com.opentok.otc.otc_session_callbacks): number;
				public static delete_otc_session_capabilities(param0: number): void;
				public static otc_session_callbacks_user_data_get(param0: number, param1: com.opentok.otc.otc_session_callbacks): number;
				public static OTC_STATS_KEY_RTT_get(): string;
				public static otc_session_unsubscribe(param0: number, param1: number): number;
				public static otc_video_capturer_settings_height_get(param0: number, param1: com.opentok.otc.otc_video_capturer_settings): number;
				public static otc_subscriber_rtc_stats_report_cb_on_rtc_stats_report_get(param0: number, param1: com.opentok.otc.otc_subscriber_rtc_stats_report_cb): number;
				public static otc_publisher_callbacks_user_data_get(param0: number, param1: com.opentok.otc.otc_publisher_callbacks): number;
				public static otc_session_callbacks_on_mute_forced_get(param0: number, param1: com.opentok.otc.otc_session_callbacks): number;
				public static otc_publisher_get_name(param0: number): string;
				public static delete_otc_publisher_callbacks(param0: number): void;
				public static new_sizetPointer(): number;
				public static otc_video_capturer_settings_fps_set(param0: number, param1: com.opentok.otc.otc_video_capturer_settings, param2: number): void;
				public static otc_publisher_rtc_stats_report_cb_on_rtc_stats_report_set(param0: number, param1: com.opentok.otc.otc_publisher_rtc_stats_report_cb, param2: number): void;
				public static OTC_VIDEO_FRAME_FORMAT_COMPRESSED_get(): number;
				public static otc_session_callbacks_on_stream_dropped_get(param0: number, param1: com.opentok.otc.otc_session_callbacks): number;
				public static otc_stream_has_video(param0: number): number;
				public static OTC_VIDEO_FRAME_FORMAT_ABGR32_get(): number;
				public static otc_stream_get_connection(param0: number): number;
				public static otc_publisher_get_rtc_stats_report(param0: number): number;
				public static new_otc_signal_options(): number;
				public static otc_session_send_signal_to_connection(param0: number, param1: string, param2: string, param3: number): number;
				public static OTC_STATS_KEY_CANDIDATEPAIR_get(): string;
				public static otc_session_callbacks_on_connection_created_set(param0: number, param1: com.opentok.otc.otc_session_callbacks, param2: number): void;
				public static otc_session_delete(param0: number): number;
				public static delete_otc_signal_options(param0: number): void;
				public static OTC_STATS_KEY_FRAMEHEIGHTSENT_get(): string;
				public static uint8Array_getitem(param0: number, param1: number): number;
				public static otc_subscriber_callbacks_on_audio_enabled_get(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks): number;
				public static OTC_STATS_KEY_RETRANSMITBITRATE_get(): string;
				public static OTC_STATS_KEY_READABLE_get(): string;
				public static otc_publisher_settings_delete(param0: number): number;
				public static OTC_VIDEO_FRAME_FORMAT_MJPEG_get(): number;
				public static otc_video_capturer_callbacks_destroy_set(param0: number, param1: com.opentok.otc.otc_video_capturer_callbacks, param2: number): void;
				public static otc_session_get_capabilities(param0: number): number;
				public static otc_audio_device_settings_sampling_rate_get(param0: number, param1: com.opentok.otc.otc_audio_device_settings): number;
				public static OTC_STATS_KEY_TRACKID_get(): string;
				public static otc_subscriber_callbacks_on_disconnected_get(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks): number;
				public static OTC_STATS_KEY_ACTIVECONNECTION_get(): string;
				public static otc_stream_get_video_type(param0: number): number;
				public static otc_session_callbacks_on_signal_received_set(param0: number, param1: com.opentok.otc.otc_session_callbacks, param2: number): void;
				public static otc_subscriber_rtc_stats_report_cb_reserved_get(param0: number, param1: com.opentok.otc.otc_subscriber_rtc_stats_report_cb): number;
				public static otc_subscriber_set_preferred_resolution(param0: number, param1: number, param2: number): number;
				public static otc_session_capabilities_publish_get(param0: number, param1: com.opentok.otc.otc_session_capabilities): number;
				public static otc_session_report_issue_ex(param0: number, param1: string): string;
				public static otc_video_frame_delete(param0: number): number;
				public static OTC_STATS_KEY_FRAMERATEINPUT_get(): string;
				public static otc_video_capturer_settings_height_set(param0: number, param1: com.opentok.otc.otc_video_capturer_settings, param2: number): void;
				public static otc_subscriber_callbacks_on_audio_stats_set(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks, param2: number): void;
				public static otc_publisher_callbacks_on_stream_created_set(param0: number, param1: com.opentok.otc.otc_publisher_callbacks, param2: number): void;
				public static otc_subscriber_get_preferred_resolution(param0: number, param1: native.Array<number>, param2: native.Array<number>): number;
				public static otc_stream_get_creation_time(param0: number): number;
				public static OTC_STATS_KEY_FRAMEWIDTHSENT_get(): string;
				public static otc_publisher_callbacks_reserved_get(param0: number, param1: com.opentok.otc.otc_publisher_callbacks): number;
				public static otc_subscriber_callbacks_on_reconnected_get(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks): number;
				public static otc_video_capturer_callbacks_destroy_get(param0: number, param1: com.opentok.otc.otc_video_capturer_callbacks): number;
				public static otc_publisher_get_publish_video(param0: number): number;
				public static otc_publisher_callbacks_on_audio_stats_set(param0: number, param1: com.opentok.otc.otc_publisher_callbacks, param2: number): void;
				public static otc_session_callbacks_on_mute_forced_set(param0: number, param1: com.opentok.otc.otc_session_callbacks, param2: number): void;
				public static OTC_VIDEO_FRAME_PLANE_U_get(): number;
				public static new_otc_subscriber_rtc_stats_report_cb(): number;
				public static otc_video_capturer_settings_mirror_on_local_render_set(param0: number, param1: com.opentok.otc.otc_video_capturer_settings, param2: number): void;
				public static OTC_STATS_KEY_BYTESSENT_get(): string;
				public static otc_video_capturer_settings_mirror_on_local_render_get(param0: number, param1: com.opentok.otc.otc_video_capturer_settings): number;
				public static OTC_STATS_KEY_BYTESRECEIVED_get(): string;
				public static otc_session_callbacks_on_signal_received_get(param0: number, param1: com.opentok.otc.otc_session_callbacks): number;
				public static otc_audio_device_settings_number_of_channels_set(param0: number, param1: com.opentok.otc.otc_audio_device_settings, param2: number): void;
				public static otc_publisher_rtc_stats_report_cb_user_data_set(param0: number, param1: com.opentok.otc.otc_publisher_rtc_stats_report_cb, param2: number): void;
				public static otc_session_callbacks_on_stream_has_video_changed_get(param0: number, param1: com.opentok.otc.otc_session_callbacks): number;
				public static otc_video_capturer_callbacks_stop_set(param0: number, param1: com.opentok.otc.otc_video_capturer_callbacks, param2: number): void;
				public static OTC_VIDEO_FRAME_FORMAT_NV21_get(): number;
				public static OTC_STATS_KEY_REMOTERELAYPROTOCOL_get(): string;
				public static OTC_STATS_KEY_ECHODELAYSTDDEV_get(): string;
				public static OTC_STATS_KEY_FRAMERATERECEIVED_get(): string;
				public static otc_publisher_new_with_settings(param0: number, param1: com.opentok.otc.otc_publisher_callbacks, param2: number): number;
				public static otc_publisher_callbacks_on_stream_created_get(param0: number, param1: com.opentok.otc.otc_publisher_callbacks): number;
				public static otc_session_callbacks_on_stream_video_type_changed_get(param0: number, param1: com.opentok.otc.otc_session_callbacks): number;
				public static otc_stream_get_video_height(param0: number): number;
				public static OTC_STATS_KEY_COMPONENT_get(): string;
				public static delete_otc_audio_device_settings(param0: number): void;
				public static otc_subscriber_callbacks_on_video_stats_get(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks): number;
				public static OTC_STATS_KEY_FRAMERATEOUTPUT_get(): string;
				public static otc_session_callbacks_on_disconnected_set(param0: number, param1: com.opentok.otc.otc_session_callbacks, param2: number): void;
				public static otc_subscriber_callbacks_on_video_disabled_set(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks, param2: number): void;
				public static otc_subscriber_set_subscribe_to_video(param0: number, param1: number): number;
				public static OTC_VIDEO_FRAME_FORMAT_BGRA32_get(): number;
				public static otc_publisher_callbacks_reserved_set(param0: number, param1: com.opentok.otc.otc_publisher_callbacks, param2: number): void;
				public static otc_session_log_custom_client_event(param0: number, param1: string, param2: string): number;
				public static otc_session_get_ice_config_server_urls(param0: number, param1: native.Array<number>): native.Array<string>;
				public static otc_video_frame_get_plane_stride(param0: number, param1: number): number;
				public static otc_publisher_callbacks_on_video_stats_get(param0: number, param1: com.opentok.otc.otc_publisher_callbacks): number;
				public static OTC_STATS_KEY_FRAMERATEDECODED_get(): string;
				public static otc_publisher_settings_set_video_capturer(param0: number, param1: number, param2: com.opentok.otc.otc_video_capturer_callbacks): number;
				public static otc_video_capturer_callbacks_start_get(param0: number, param1: com.opentok.otc.otc_video_capturer_callbacks): number;
				public static otc_session_get_id(param0: number): string;
				public static otc_stream_get_id(param0: number): string;
				public static otc_video_capturer_settings_expected_delay_set(param0: number, param1: com.opentok.otc.otc_video_capturer_settings, param2: number): void;
				public static OTC_STATS_KEY_AVAILABLESENDBANDWIDTH_get(): string;
				public static otc_session_callbacks_on_connection_dropped_get(param0: number, param1: com.opentok.otc.otc_session_callbacks): number;
				public static otc_video_capturer_callbacks_get_capture_settings_set(param0: number, param1: com.opentok.otc.otc_video_capturer_callbacks, param2: number): void;
				public static OTC_STATS_KEY_REMOTEADDRESS_get(): string;
				public static OTC_STATS_KEY_LOCALCANDIDATEPRIORITY_get(): string;
				public static otc_stream_get_name(param0: number): string;
				public static otc_subscriber_callbacks_on_video_disable_warning_get(param0: number, param1: com.opentok.otc.otc_subscriber_callbacks): number;
				public static otc_publisher_get_stream(param0: number): number;
				public static OTC_STATS_KEY_ACTUALENCBITRATE_get(): string;
				public static otc_session_new_with_settings(param0: string, param1: string, param2: number, param3: com.opentok.otc.otc_session_callbacks, param4: number): number;
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class otc_audio_device_settings {
				public static class: java.lang.Class<com.opentok.otc.otc_audio_device_settings>;
				public swigCMemOwn: boolean;
				public static getCPtr(param0: com.opentok.otc.otc_audio_device_settings): number;
				public setSampling_rate(param0: number): void;
				public setNumber_of_channels(param0: number): void;
				public getNumber_of_channels(): number;
				public delete(): void;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public getSampling_rate(): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class otc_force_mute_options {
				public static class: java.lang.Class<com.opentok.otc.otc_force_mute_options>;
				public b: boolean;
				public static a(param0: com.opentok.otc.otc_force_mute_options): number;
				public finalize(): void;
				public a(): void;
				public constructor(param0: number, param1: boolean);
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class otc_publisher_callbacks {
				public static class: java.lang.Class<com.opentok.otc.otc_publisher_callbacks>;
				public swigCMemOwn: boolean;
				public getOn_audio_stats(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_a___struct_otc_publisher_audio_stats_size_t__void;
				public finalize(): void;
				public getOn_video_stats(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_a___struct_otc_publisher_video_stats_size_t__void;
				public setOn_audio_level_updated(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_float__void): void;
				public constructor();
				public setOn_video_stats(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_a___struct_otc_publisher_video_stats_size_t__void): void;
				public delete(): void;
				public getReserved(): com.opentok.otc.SWIGTYPE_p_void;
				public getOn_render_frame(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_p_q_const__struct_otc_video_frame__void;
				public getUser_data(): com.opentok.otc.SWIGTYPE_p_void;
				public setUser_data(param0: com.opentok.otc.SWIGTYPE_p_void): void;
				public getOn_publisher_mute_forced(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_p_q_const__struct_otc_on_mute_forced_info__void;
				public getOn_audio_level_updated(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_float__void;
				public setOn_render_frame(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_p_q_const__struct_otc_video_frame__void): void;
				public getOn_stream_created(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_p_q_const__struct_otc_stream__void;
				public getOn_error(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_p_q_const__char_enum_otc_publisher_error_code__void;
				public setReserved(param0: com.opentok.otc.SWIGTYPE_p_void): void;
				public constructor(param0: number, param1: boolean);
				public getOn_stream_destroyed(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_p_q_const__struct_otc_stream__void;
				public setOn_stream_created(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_p_q_const__struct_otc_stream__void): void;
				public setOn_error(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_p_q_const__char_enum_otc_publisher_error_code__void): void;
				public setOn_publisher_mute_forced(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_p_q_const__struct_otc_on_mute_forced_info__void): void;
				public setOn_audio_stats(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_a___struct_otc_publisher_audio_stats_size_t__void): void;
				public setOn_stream_destroyed(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_p_q_const__struct_otc_stream__void): void;
				public static getCPtr(param0: com.opentok.otc.otc_publisher_callbacks): number;
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class otc_publisher_rtc_stats_report_cb {
				public static class: java.lang.Class<com.opentok.otc.otc_publisher_rtc_stats_report_cb>;
				public swigCMemOwn: boolean;
				public static getCPtr(param0: com.opentok.otc.otc_publisher_rtc_stats_report_cb): number;
				public getOn_rtc_stats_report(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_p_q_const__struct_otc_publisher_rtc_stats_size_t__void;
				public delete(): void;
				public getReserved(): com.opentok.otc.SWIGTYPE_p_void;
				public finalize(): void;
				public setReserved(param0: com.opentok.otc.SWIGTYPE_p_void): void;
				public constructor(param0: number, param1: boolean);
				public getUser_data(): com.opentok.otc.SWIGTYPE_p_void;
				public setUser_data(param0: com.opentok.otc.SWIGTYPE_p_void): void;
				public setOn_rtc_stats_report(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_publisher_p_void_p_q_const__struct_otc_publisher_rtc_stats_size_t__void): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class otc_session_callbacks {
				public static class: java.lang.Class<com.opentok.otc.otc_session_callbacks>;
				public swigCMemOwn: boolean;
				public setOn_connection_created(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__struct_otc_connection__void): void;
				public setOn_reconnected(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void__void): void;
				public static getCPtr(param0: com.opentok.otc.otc_session_callbacks): number;
				public getOn_stream_dropped(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__struct_otc_stream__void;
				public getOn_connected(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void__void;
				public finalize(): void;
				public setOn_stream_has_video_changed(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__struct_otc_stream_int__void): void;
				public constructor();
				public getOn_error(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__char_enum_otc_session_error_code__void;
				public setOn_archive_stopped(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__char__void): void;
				public setOn_disconnected(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void__void): void;
				public delete(): void;
				public getReserved(): com.opentok.otc.SWIGTYPE_p_void;
				public setOn_stream_has_audio_changed(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__struct_otc_stream_int__void): void;
				public getOn_connection_dropped(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__struct_otc_connection__void;
				public setOn_reconnection_started(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void__void): void;
				public getOn_stream_video_type_changed(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__struct_otc_stream_enum_otc_stream_video_type__void;
				public getUser_data(): com.opentok.otc.SWIGTYPE_p_void;
				public setOn_stream_received(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__struct_otc_stream__void): void;
				public setUser_data(param0: com.opentok.otc.SWIGTYPE_p_void): void;
				public getOn_stream_video_dimensions_changed(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__struct_otc_stream_int_int__void;
				public setOn_stream_video_dimensions_changed(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__struct_otc_stream_int_int__void): void;
				public setOn_connected(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void__void): void;
				public getOn_connection_created(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__struct_otc_connection__void;
				public getOn_reconnection_started(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void__void;
				public getOn_reconnected(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void__void;
				public setOn_stream_video_type_changed(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__struct_otc_stream_enum_otc_stream_video_type__void): void;
				public getOn_stream_has_audio_changed(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__struct_otc_stream_int__void;
				public setOn_error(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__char_enum_otc_session_error_code__void): void;
				public getOn_mute_forced(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_struct_otc_on_mute_forced_info__void;
				public setOn_connection_dropped(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__struct_otc_connection__void): void;
				public setReserved(param0: com.opentok.otc.SWIGTYPE_p_void): void;
				public constructor(param0: number, param1: boolean);
				public setOn_stream_dropped(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__struct_otc_stream__void): void;
				public getOn_archive_stopped(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__char__void;
				public getOn_stream_received(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__struct_otc_stream__void;
				public setOn_signal_received(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__char_p_q_const__char_p_q_const__struct_otc_connection__void): void;
				public setOn_archive_started(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__char_p_q_const__char__void): void;
				public getOn_disconnected(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void__void;
				public getOn_signal_received(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__char_p_q_const__char_p_q_const__struct_otc_connection__void;
				public setOn_mute_forced(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_struct_otc_on_mute_forced_info__void): void;
				public getOn_stream_has_video_changed(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__struct_otc_stream_int__void;
				public getOn_archive_started(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_session_p_void_p_q_const__char_p_q_const__char__void;
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class otc_session_capabilities {
				public static class: java.lang.Class<com.opentok.otc.otc_session_capabilities>;
				public c(): number;
				public finalize(): void;
				public a(): void;
				public b(): number;
				public constructor(param0: number, param1: boolean);
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class otc_signal_options {
				public static class: java.lang.Class<com.opentok.otc.otc_signal_options>;
				public b: boolean;
				public static a(param0: com.opentok.otc.otc_signal_options): number;
				public finalize(): void;
				public a(): void;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public a(param0: number): void;
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class otc_stream_video_type {
				public static class: java.lang.Class<com.opentok.otc.otc_stream_video_type>;
				public static c: com.opentok.otc.otc_stream_video_type;
				public static d: com.opentok.otc.otc_stream_video_type;
				public static e: com.opentok.otc.otc_stream_video_type;
				public static a(param0: number): com.opentok.otc.otc_stream_video_type;
				public a(): number;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class otc_subscriber_callbacks {
				public static class: java.lang.Class<com.opentok.otc.otc_subscriber_callbacks>;
				public swigCMemOwn: boolean;
				public getOn_video_disabled(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_enum_otc_video_reason__void;
				public getOn_audio_disabled(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void__void;
				public getOn_audio_level_updated(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_float__void;
				public finalize(): void;
				public setOn_video_disable_warning(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void__void): void;
				public setOn_video_stats(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_struct_otc_subscriber_video_stats__void): void;
				public constructor();
				public setOn_video_enabled(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_enum_otc_video_reason__void): void;
				public setOn_reconnected(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void__void): void;
				public setOn_video_disabled(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_enum_otc_video_reason__void): void;
				public getOn_video_disable_warning_lifted(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void__void;
				public delete(): void;
				public setOn_render_frame(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_p_q_const__struct_otc_video_frame__void): void;
				public getReserved(): com.opentok.otc.SWIGTYPE_p_void;
				public getOn_audio_enabled(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void__void;
				public setOn_video_data_received(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void__void): void;
				public getUser_data(): com.opentok.otc.SWIGTYPE_p_void;
				public getOn_error(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_p_q_const__char_enum_otc_subscriber_error_code__void;
				public setUser_data(param0: com.opentok.otc.SWIGTYPE_p_void): void;
				public getOn_video_enabled(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_enum_otc_video_reason__void;
				public setOn_audio_level_updated(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_float__void): void;
				public getOn_video_data_received(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void__void;
				public static getCPtr(param0: com.opentok.otc.otc_subscriber_callbacks): number;
				public setOn_error(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_p_q_const__char_enum_otc_subscriber_error_code__void): void;
				public getOn_video_stats(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_struct_otc_subscriber_video_stats__void;
				public setReserved(param0: com.opentok.otc.SWIGTYPE_p_void): void;
				public constructor(param0: number, param1: boolean);
				public setOn_disconnected(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void__void): void;
				public getOn_connected(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_p_q_const__struct_otc_stream__void;
				public setOn_connected(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_p_q_const__struct_otc_stream__void): void;
				public getOn_video_disable_warning(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void__void;
				public setOn_audio_stats(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_struct_otc_subscriber_audio_stats__void): void;
				public getOn_render_frame(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_p_q_const__struct_otc_video_frame__void;
				public setOn_audio_enabled(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void__void): void;
				public getOn_reconnected(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void__void;
				public getOn_audio_stats(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_struct_otc_subscriber_audio_stats__void;
				public getOn_disconnected(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void__void;
				public setOn_audio_disabled(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void__void): void;
				public setOn_video_disable_warning_lifted(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void__void): void;
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class otc_subscriber_rtc_stats_report_cb {
				public static class: java.lang.Class<com.opentok.otc.otc_subscriber_rtc_stats_report_cb>;
				public swigCMemOwn: boolean;
				public getOn_rtc_stats_report(): com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_p_q_const__char__void;
				public static getCPtr(param0: com.opentok.otc.otc_subscriber_rtc_stats_report_cb): number;
				public delete(): void;
				public getReserved(): com.opentok.otc.SWIGTYPE_p_void;
				public finalize(): void;
				public setReserved(param0: com.opentok.otc.SWIGTYPE_p_void): void;
				public constructor(param0: number, param1: boolean);
				public getUser_data(): com.opentok.otc.SWIGTYPE_p_void;
				public setUser_data(param0: com.opentok.otc.SWIGTYPE_p_void): void;
				public setOn_rtc_stats_report(param0: com.opentok.otc.SWIGTYPE_p_f_p_struct_otc_subscriber_p_void_p_q_const__char__void): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class otc_video_capturer_callbacks {
				public static class: java.lang.Class<com.opentok.otc.otc_video_capturer_callbacks>;
				public swigCMemOwn: boolean;
				public setGet_capture_settings(param0: com.opentok.otc.SWIGTYPE_p_f_p_q_const__struct_otc_video_capturer_p_void_p_struct_otc_video_capturer_settings__int): void;
				public getInit(): com.opentok.otc.SWIGTYPE_p_f_p_q_const__struct_otc_video_capturer_p_void__int;
				public setDestroy(param0: com.opentok.otc.SWIGTYPE_p_f_p_q_const__struct_otc_video_capturer_p_void__int): void;
				public setStart(param0: com.opentok.otc.SWIGTYPE_p_f_p_q_const__struct_otc_video_capturer_p_void__int): void;
				public setStop(param0: com.opentok.otc.SWIGTYPE_p_f_p_q_const__struct_otc_video_capturer_p_void__int): void;
				public finalize(): void;
				public setReserved(param0: com.opentok.otc.SWIGTYPE_p_void): void;
				public constructor(param0: number, param1: boolean);
				public static getCPtr(param0: com.opentok.otc.otc_video_capturer_callbacks): number;
				public constructor();
				public setInit(param0: com.opentok.otc.SWIGTYPE_p_f_p_q_const__struct_otc_video_capturer_p_void__int): void;
				public getStart(): com.opentok.otc.SWIGTYPE_p_f_p_q_const__struct_otc_video_capturer_p_void__int;
				public getStop(): com.opentok.otc.SWIGTYPE_p_f_p_q_const__struct_otc_video_capturer_p_void__int;
				public delete(): void;
				public getReserved(): com.opentok.otc.SWIGTYPE_p_void;
				public getDestroy(): com.opentok.otc.SWIGTYPE_p_f_p_q_const__struct_otc_video_capturer_p_void__int;
				public getUser_data(): com.opentok.otc.SWIGTYPE_p_void;
				public setUser_data(param0: com.opentok.otc.SWIGTYPE_p_void): void;
				public getGet_capture_settings(): com.opentok.otc.SWIGTYPE_p_f_p_q_const__struct_otc_video_capturer_p_void_p_struct_otc_video_capturer_settings__int;
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class otc_video_capturer_settings {
				public static class: java.lang.Class<com.opentok.otc.otc_video_capturer_settings>;
				public swigCMemOwn: boolean;
				public setHeight(param0: number): void;
				public getHeight(): number;
				public getExpected_delay(): number;
				public static getCPtr(param0: com.opentok.otc.otc_video_capturer_settings): number;
				public getMirror_on_local_render(): number;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public setExpected_delay(param0: number): void;
				public constructor();
				public getFormat(): number;
				public setWidth(param0: number): void;
				public setMirror_on_local_render(param0: number): void;
				public getWidth(): number;
				public setFps(param0: number): void;
				public delete(): void;
				public setFormat(param0: number): void;
				public getFps(): number;
			}
		}
	}
}

declare module com {
	export module opentok {
		export module otc {
			export class otc_video_frame_format {
				public static class: java.lang.Class<com.opentok.otc.otc_video_frame_format>;
				public static c: com.opentok.otc.otc_video_frame_format;
				public static d: com.opentok.otc.otc_video_frame_format;
				public static e: com.opentok.otc.otc_video_frame_format;
				public static f: com.opentok.otc.otc_video_frame_format;
				public static g: com.opentok.otc.otc_video_frame_format;
				public static h: com.opentok.otc.otc_video_frame_format;
				public static i: com.opentok.otc.otc_video_frame_format;
				public static j: com.opentok.otc.otc_video_frame_format;
				public static k: com.opentok.otc.otc_video_frame_format;
				public static l: com.opentok.otc.otc_video_frame_format;
				public static m: com.opentok.otc.otc_video_frame_format;
				public static n: com.opentok.otc.otc_video_frame_format;
				public static o: com.opentok.otc.otc_video_frame_format;
				public static p: com.opentok.otc.otc_video_frame_format;
				public static a(param0: number): com.opentok.otc.otc_video_frame_format;
				public toString(): string;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class AndroidVideoDecoder implements org.otwebrtc.VideoDecoder, org.otwebrtc.VideoSink {
			public static class: java.lang.Class<org.otwebrtc.AndroidVideoDecoder>;
			public release(): org.otwebrtc.VideoCodecStatus;
			public decode(param0: org.otwebrtc.EncodedImage, param1: org.otwebrtc.VideoDecoder.DecodeInfo): org.otwebrtc.VideoCodecStatus;
			public onFrame(param0: org.otwebrtc.VideoFrame): void;
			public createSurfaceTextureHelper(): org.otwebrtc.SurfaceTextureHelper;
			public deliverDecodedFrame(): void;
			public copyPlane(param0: java.nio.ByteBuffer, param1: number, param2: java.nio.ByteBuffer, param3: number, param4: number, param5: number): void;
			public getImplementationName(): string;
			public createNativeVideoDecoder(): number;
			public allocateI420Buffer(param0: number, param1: number): org.otwebrtc.VideoFrame.I420Buffer;
			public releaseSurface(): void;
			public getPrefersLateDecoding(): boolean;
			public initDecode(param0: org.otwebrtc.VideoDecoder.Settings, param1: org.otwebrtc.VideoDecoder.Callback): org.otwebrtc.VideoCodecStatus;
		}
		export module AndroidVideoDecoder {
			export class DecodedTextureMetadata {
				public static class: java.lang.Class<org.otwebrtc.AndroidVideoDecoder.DecodedTextureMetadata>;
			}
			export class FrameInfo {
				public static class: java.lang.Class<org.otwebrtc.AndroidVideoDecoder.FrameInfo>;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class AudioDecoderFactoryFactory {
			public static class: java.lang.Class<org.otwebrtc.AudioDecoderFactoryFactory>;
			/**
			 * Constructs a new instance of the org.otwebrtc.AudioDecoderFactoryFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createNativeAudioDecoderFactory(): number;
			});
			public constructor();
			public createNativeAudioDecoderFactory(): number;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class AudioEncoderFactoryFactory {
			public static class: java.lang.Class<org.otwebrtc.AudioEncoderFactoryFactory>;
			/**
			 * Constructs a new instance of the org.otwebrtc.AudioEncoderFactoryFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createNativeAudioEncoderFactory(): number;
			});
			public constructor();
			public createNativeAudioEncoderFactory(): number;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class AudioProcessingFactory {
			public static class: java.lang.Class<org.otwebrtc.AudioProcessingFactory>;
			/**
			 * Constructs a new instance of the org.otwebrtc.AudioProcessingFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createNative(): number;
			});
			public constructor();
			public createNative(): number;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class AudioSource extends org.otwebrtc.MediaSource {
			public static class: java.lang.Class<org.otwebrtc.AudioSource>;
			public constructor(param0: number);
		}
	}
}

declare module org {
	export module otwebrtc {
		export class AudioTrack extends org.otwebrtc.MediaStreamTrack {
			public static class: java.lang.Class<org.otwebrtc.AudioTrack>;
			public constructor(param0: number);
			public setVolume(param0: number): void;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class BaseBitrateAdjuster extends org.otwebrtc.BitrateAdjuster {
			public static class: java.lang.Class<org.otwebrtc.BaseBitrateAdjuster>;
			public targetBitrateBps: number;
			public targetFps: number;
			public getAdjustedBitrateBps(): number;
			public setTargets(param0: number, param1: number): void;
			public reportEncodedFrame(param0: number): void;
			public getCodecConfigFramerate(): number;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class BitrateAdjuster {
			public static class: java.lang.Class<org.otwebrtc.BitrateAdjuster>;
			/**
			 * Constructs a new instance of the org.otwebrtc.BitrateAdjuster interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				setTargets(param0: number, param1: number): void;
				reportEncodedFrame(param0: number): void;
				getAdjustedBitrateBps(): number;
				getCodecConfigFramerate(): number;
			});
			public constructor();
			public getAdjustedBitrateBps(): number;
			public setTargets(param0: number, param1: number): void;
			public reportEncodedFrame(param0: number): void;
			public getCodecConfigFramerate(): number;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class BuiltinAudioDecoderFactoryFactory extends org.otwebrtc.AudioDecoderFactoryFactory {
			public static class: java.lang.Class<org.otwebrtc.BuiltinAudioDecoderFactoryFactory>;
			public createNativeAudioDecoderFactory(): number;
			public constructor();
		}
	}
}

declare module org {
	export module otwebrtc {
		export class BuiltinAudioEncoderFactoryFactory extends org.otwebrtc.AudioEncoderFactoryFactory {
			public static class: java.lang.Class<org.otwebrtc.BuiltinAudioEncoderFactoryFactory>;
			public createNativeAudioEncoderFactory(): number;
			public constructor();
		}
	}
}

declare module org {
	export module otwebrtc {
		export class CallSessionFileRotatingLogSink {
			public static class: java.lang.Class<org.otwebrtc.CallSessionFileRotatingLogSink>;
			public static getLogData(param0: string): native.Array<number>;
			public dispose(): void;
			public constructor(param0: string, param1: number, param2: org.otwebrtc.Logging.Severity);
		}
	}
}

declare module org {
	export module otwebrtc {
		export class CalledByNative {
			public static class: java.lang.Class<org.otwebrtc.CalledByNative>;
			/**
			 * Constructs a new instance of the org.otwebrtc.CalledByNative interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
			});
			public constructor();
			public value(): string;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class CalledByNativeUnchecked {
			public static class: java.lang.Class<org.otwebrtc.CalledByNativeUnchecked>;
			/**
			 * Constructs a new instance of the org.otwebrtc.CalledByNativeUnchecked interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
			});
			public constructor();
			public value(): string;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class Camera1Capturer extends org.otwebrtc.CameraCapturer {
			public static class: java.lang.Class<org.otwebrtc.Camera1Capturer>;
			public constructor(param0: string, param1: org.otwebrtc.CameraVideoCapturer.CameraEventsHandler, param2: org.otwebrtc.CameraEnumerator);
			public createCameraSession(param0: org.otwebrtc.CameraSession.CreateSessionCallback, param1: org.otwebrtc.CameraSession.Events, param2: globalAndroid.content.Context, param3: org.otwebrtc.SurfaceTextureHelper, param4: string, param5: number, param6: number, param7: number): void;
			public removeMediaRecorderFromCamera(param0: org.otwebrtc.CameraVideoCapturer.MediaRecorderHandler): void;
			public constructor(param0: string, param1: org.otwebrtc.CameraVideoCapturer.CameraEventsHandler, param2: boolean);
			public addMediaRecorderToCamera(param0: globalAndroid.media.MediaRecorder, param1: org.otwebrtc.CameraVideoCapturer.MediaRecorderHandler): void;
			public switchCamera(param0: org.otwebrtc.CameraVideoCapturer.CameraSwitchHandler): void;
			public switchCamera(param0: org.otwebrtc.CameraVideoCapturer.CameraSwitchHandler, param1: string): void;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class Camera1Enumerator extends org.otwebrtc.CameraEnumerator {
			public static class: java.lang.Class<org.otwebrtc.Camera1Enumerator>;
			public isBackFacing(param0: string): boolean;
			public getSupportedFormats(param0: string): java.util.List<org.otwebrtc.CameraEnumerationAndroid.CaptureFormat>;
			public constructor(param0: boolean);
			public createCapturer(param0: string, param1: org.otwebrtc.CameraVideoCapturer.CameraEventsHandler): org.otwebrtc.CameraVideoCapturer;
			public getDeviceNames(): native.Array<string>;
			public isFrontFacing(param0: string): boolean;
			public constructor();
		}
	}
}

declare module org {
	export module otwebrtc {
		export class Camera1Session extends org.otwebrtc.CameraSession {
			public static class: java.lang.Class<org.otwebrtc.Camera1Session>;
			public static createTextureBufferWithModifiedTransformMatrix(param0: org.otwebrtc.TextureBufferImpl, param1: boolean, param2: number): org.otwebrtc.VideoFrame.TextureBuffer;
			public static getDeviceOrientation(param0: globalAndroid.content.Context): number;
			public stop(): void;
			public static create(param0: org.otwebrtc.CameraSession.CreateSessionCallback, param1: org.otwebrtc.CameraSession.Events, param2: boolean, param3: globalAndroid.content.Context, param4: org.otwebrtc.SurfaceTextureHelper, param5: number, param6: number, param7: number, param8: number): void;
		}
		export module Camera1Session {
			export class SessionState {
				public static class: java.lang.Class<org.otwebrtc.Camera1Session.SessionState>;
				public static RUNNING: org.otwebrtc.Camera1Session.SessionState;
				public static STOPPED: org.otwebrtc.Camera1Session.SessionState;
				public static valueOf(param0: string): org.otwebrtc.Camera1Session.SessionState;
				public static values(): native.Array<org.otwebrtc.Camera1Session.SessionState>;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class Camera2Capturer extends org.otwebrtc.CameraCapturer {
			public static class: java.lang.Class<org.otwebrtc.Camera2Capturer>;
			public constructor(param0: string, param1: org.otwebrtc.CameraVideoCapturer.CameraEventsHandler, param2: org.otwebrtc.CameraEnumerator);
			public createCameraSession(param0: org.otwebrtc.CameraSession.CreateSessionCallback, param1: org.otwebrtc.CameraSession.Events, param2: globalAndroid.content.Context, param3: org.otwebrtc.SurfaceTextureHelper, param4: string, param5: number, param6: number, param7: number): void;
			public removeMediaRecorderFromCamera(param0: org.otwebrtc.CameraVideoCapturer.MediaRecorderHandler): void;
			public addMediaRecorderToCamera(param0: globalAndroid.media.MediaRecorder, param1: org.otwebrtc.CameraVideoCapturer.MediaRecorderHandler): void;
			public constructor(param0: globalAndroid.content.Context, param1: string, param2: org.otwebrtc.CameraVideoCapturer.CameraEventsHandler);
			public switchCamera(param0: org.otwebrtc.CameraVideoCapturer.CameraSwitchHandler): void;
			public switchCamera(param0: org.otwebrtc.CameraVideoCapturer.CameraSwitchHandler, param1: string): void;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class Camera2Enumerator extends org.otwebrtc.CameraEnumerator {
			public static class: java.lang.Class<org.otwebrtc.Camera2Enumerator>;
			public isBackFacing(param0: string): boolean;
			public getSupportedFormats(param0: string): java.util.List<org.otwebrtc.CameraEnumerationAndroid.CaptureFormat>;
			public createCapturer(param0: string, param1: org.otwebrtc.CameraVideoCapturer.CameraEventsHandler): org.otwebrtc.CameraVideoCapturer;
			public static isSupported(param0: globalAndroid.content.Context): boolean;
			public getDeviceNames(): native.Array<string>;
			public isFrontFacing(param0: string): boolean;
			public constructor(param0: globalAndroid.content.Context);
		}
	}
}

declare module org {
	export module otwebrtc {
		export class Camera2Session extends org.otwebrtc.CameraSession {
			public static class: java.lang.Class<org.otwebrtc.Camera2Session>;
			public static createTextureBufferWithModifiedTransformMatrix(param0: org.otwebrtc.TextureBufferImpl, param1: boolean, param2: number): org.otwebrtc.VideoFrame.TextureBuffer;
			public static getDeviceOrientation(param0: globalAndroid.content.Context): number;
			public static create(param0: org.otwebrtc.CameraSession.CreateSessionCallback, param1: org.otwebrtc.CameraSession.Events, param2: globalAndroid.content.Context, param3: globalAndroid.hardware.camera2.CameraManager, param4: org.otwebrtc.SurfaceTextureHelper, param5: string, param6: number, param7: number, param8: number): void;
			public stop(): void;
		}
		export module Camera2Session {
			export class CameraCaptureCallback {
				public static class: java.lang.Class<org.otwebrtc.Camera2Session.CameraCaptureCallback>;
				public onCaptureFailed(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.hardware.camera2.CaptureRequest, param2: globalAndroid.hardware.camera2.CaptureFailure): void;
			}
			export class CameraStateCallback {
				public static class: java.lang.Class<org.otwebrtc.Camera2Session.CameraStateCallback>;
				public onOpened(param0: globalAndroid.hardware.camera2.CameraDevice): void;
				public onClosed(param0: globalAndroid.hardware.camera2.CameraDevice): void;
				public onDisconnected(param0: globalAndroid.hardware.camera2.CameraDevice): void;
				public onError(param0: globalAndroid.hardware.camera2.CameraDevice, param1: number): void;
			}
			export class CaptureSessionCallback {
				public static class: java.lang.Class<org.otwebrtc.Camera2Session.CaptureSessionCallback>;
				public onConfigured(param0: globalAndroid.hardware.camera2.CameraCaptureSession): void;
				public onConfigureFailed(param0: globalAndroid.hardware.camera2.CameraCaptureSession): void;
			}
			export class SessionState {
				public static class: java.lang.Class<org.otwebrtc.Camera2Session.SessionState>;
				public static RUNNING: org.otwebrtc.Camera2Session.SessionState;
				public static STOPPED: org.otwebrtc.Camera2Session.SessionState;
				public static values(): native.Array<org.otwebrtc.Camera2Session.SessionState>;
				public static valueOf(param0: string): org.otwebrtc.Camera2Session.SessionState;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export abstract class CameraCapturer extends org.otwebrtc.CameraVideoCapturer {
			public static class: java.lang.Class<org.otwebrtc.CameraCapturer>;
			public getCameraName(): string;
			public constructor(param0: string, param1: org.otwebrtc.CameraVideoCapturer.CameraEventsHandler, param2: org.otwebrtc.CameraEnumerator);
			public createCameraSession(param0: org.otwebrtc.CameraSession.CreateSessionCallback, param1: org.otwebrtc.CameraSession.Events, param2: globalAndroid.content.Context, param3: org.otwebrtc.SurfaceTextureHelper, param4: string, param5: number, param6: number, param7: number): void;
			public switchCamera(param0: org.otwebrtc.CameraVideoCapturer.CameraSwitchHandler, param1: string): void;
			public isScreencast(): boolean;
			public initialize(param0: org.otwebrtc.SurfaceTextureHelper, param1: globalAndroid.content.Context, param2: org.otwebrtc.CapturerObserver): void;
			public stopCapture(): void;
			public removeMediaRecorderFromCamera(param0: org.otwebrtc.CameraVideoCapturer.MediaRecorderHandler): void;
			public startCapture(param0: number, param1: number, param2: number): void;
			public addMediaRecorderToCamera(param0: globalAndroid.media.MediaRecorder, param1: org.otwebrtc.CameraVideoCapturer.MediaRecorderHandler): void;
			public printStackTrace(): void;
			public switchCamera(param0: org.otwebrtc.CameraVideoCapturer.CameraSwitchHandler): void;
			public changeCaptureFormat(param0: number, param1: number, param2: number): void;
			public dispose(): void;
		}
		export module CameraCapturer {
			export class SwitchState {
				public static class: java.lang.Class<org.otwebrtc.CameraCapturer.SwitchState>;
				public static IDLE: org.otwebrtc.CameraCapturer.SwitchState;
				public static PENDING: org.otwebrtc.CameraCapturer.SwitchState;
				public static IN_PROGRESS: org.otwebrtc.CameraCapturer.SwitchState;
				public static values(): native.Array<org.otwebrtc.CameraCapturer.SwitchState>;
				public static valueOf(param0: string): org.otwebrtc.CameraCapturer.SwitchState;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class CameraEnumerationAndroid {
			public static class: java.lang.Class<org.otwebrtc.CameraEnumerationAndroid>;
			public static getClosestSupportedFramerateRange(param0: java.util.List<org.otwebrtc.CameraEnumerationAndroid.CaptureFormat.FramerateRange>, param1: number): org.otwebrtc.CameraEnumerationAndroid.CaptureFormat.FramerateRange;
			public static getClosestSupportedSize(param0: java.util.List<org.otwebrtc.Size>, param1: number, param2: number): org.otwebrtc.Size;
			public constructor();
		}
		export module CameraEnumerationAndroid {
			export class CaptureFormat {
				public static class: java.lang.Class<org.otwebrtc.CameraEnumerationAndroid.CaptureFormat>;
				public width: number;
				public height: number;
				public framerate: org.otwebrtc.CameraEnumerationAndroid.CaptureFormat.FramerateRange;
				public imageFormat: number;
				public constructor(param0: number, param1: number, param2: org.otwebrtc.CameraEnumerationAndroid.CaptureFormat.FramerateRange);
				public constructor(param0: number, param1: number, param2: number, param3: number);
				public static frameSize(param0: number, param1: number, param2: number): number;
				public hashCode(): number;
				public frameSize(): number;
				public equals(param0: any): boolean;
				public toString(): string;
			}
			export module CaptureFormat {
				export class FramerateRange {
					public static class: java.lang.Class<org.otwebrtc.CameraEnumerationAndroid.CaptureFormat.FramerateRange>;
					public min: number;
					public max: number;
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
					public constructor(param0: number, param1: number);
				}
			}
			export abstract class ClosestComparator<T>  extends java.util.Comparator<any> {
				public static class: java.lang.Class<org.otwebrtc.CameraEnumerationAndroid.ClosestComparator<any>>;
				public compare(param0: any, param1: any): number;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class CameraEnumerator {
			public static class: java.lang.Class<org.otwebrtc.CameraEnumerator>;
			/**
			 * Constructs a new instance of the org.otwebrtc.CameraEnumerator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getDeviceNames(): native.Array<string>;
				isFrontFacing(param0: string): boolean;
				isBackFacing(param0: string): boolean;
				getSupportedFormats(param0: string): java.util.List<org.otwebrtc.CameraEnumerationAndroid.CaptureFormat>;
				createCapturer(param0: string, param1: org.otwebrtc.CameraVideoCapturer.CameraEventsHandler): org.otwebrtc.CameraVideoCapturer;
			});
			public constructor();
			public isBackFacing(param0: string): boolean;
			public getSupportedFormats(param0: string): java.util.List<org.otwebrtc.CameraEnumerationAndroid.CaptureFormat>;
			public createCapturer(param0: string, param1: org.otwebrtc.CameraVideoCapturer.CameraEventsHandler): org.otwebrtc.CameraVideoCapturer;
			public getDeviceNames(): native.Array<string>;
			public isFrontFacing(param0: string): boolean;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class CameraSession {
			public static class: java.lang.Class<org.otwebrtc.CameraSession>;
			/**
			 * Constructs a new instance of the org.otwebrtc.CameraSession interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getDeviceOrientation(param0: globalAndroid.content.Context): number;
				createTextureBufferWithModifiedTransformMatrix(param0: org.otwebrtc.TextureBufferImpl, param1: boolean, param2: number): org.otwebrtc.VideoFrame.TextureBuffer;
				stop(): void;
			});
			public constructor();
			public static createTextureBufferWithModifiedTransformMatrix(param0: org.otwebrtc.TextureBufferImpl, param1: boolean, param2: number): org.otwebrtc.VideoFrame.TextureBuffer;
			public static getDeviceOrientation(param0: globalAndroid.content.Context): number;
			public stop(): void;
		}
		export module CameraSession {
			export class CreateSessionCallback {
				public static class: java.lang.Class<org.otwebrtc.CameraSession.CreateSessionCallback>;
				/**
				 * Constructs a new instance of the org.otwebrtc.CameraSession$CreateSessionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onDone(param0: org.otwebrtc.CameraSession): void;
					onFailure(param0: org.otwebrtc.CameraSession.FailureType, param1: string): void;
				});
				public constructor();
				public onFailure(param0: org.otwebrtc.CameraSession.FailureType, param1: string): void;
				public onDone(param0: org.otwebrtc.CameraSession): void;
			}
			export class Events {
				public static class: java.lang.Class<org.otwebrtc.CameraSession.Events>;
				/**
				 * Constructs a new instance of the org.otwebrtc.CameraSession$Events interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCameraOpening(): void;
					onCameraError(param0: org.otwebrtc.CameraSession, param1: string): void;
					onCameraDisconnected(param0: org.otwebrtc.CameraSession): void;
					onCameraClosed(param0: org.otwebrtc.CameraSession): void;
					onFrameCaptured(param0: org.otwebrtc.CameraSession, param1: org.otwebrtc.VideoFrame): void;
				});
				public constructor();
				public onCameraClosed(param0: org.otwebrtc.CameraSession): void;
				public onCameraError(param0: org.otwebrtc.CameraSession, param1: string): void;
				public onCameraDisconnected(param0: org.otwebrtc.CameraSession): void;
				public onFrameCaptured(param0: org.otwebrtc.CameraSession, param1: org.otwebrtc.VideoFrame): void;
				public onCameraOpening(): void;
			}
			export class FailureType {
				public static class: java.lang.Class<org.otwebrtc.CameraSession.FailureType>;
				public static ERROR: org.otwebrtc.CameraSession.FailureType;
				public static DISCONNECTED: org.otwebrtc.CameraSession.FailureType;
				public static valueOf(param0: string): org.otwebrtc.CameraSession.FailureType;
				public static values(): native.Array<org.otwebrtc.CameraSession.FailureType>;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class CameraVideoCapturer extends org.otwebrtc.VideoCapturer {
			public static class: java.lang.Class<org.otwebrtc.CameraVideoCapturer>;
			/**
			 * Constructs a new instance of the org.otwebrtc.CameraVideoCapturer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				switchCamera(param0: org.otwebrtc.CameraVideoCapturer.CameraSwitchHandler): void;
				switchCamera(param0: org.otwebrtc.CameraVideoCapturer.CameraSwitchHandler, param1: string): void;
				addMediaRecorderToCamera(param0: globalAndroid.media.MediaRecorder, param1: org.otwebrtc.CameraVideoCapturer.MediaRecorderHandler): void;
				removeMediaRecorderFromCamera(param0: org.otwebrtc.CameraVideoCapturer.MediaRecorderHandler): void;
				initialize(param0: org.otwebrtc.SurfaceTextureHelper, param1: globalAndroid.content.Context, param2: org.otwebrtc.CapturerObserver): void;
				startCapture(param0: number, param1: number, param2: number): void;
				stopCapture(): void;
				changeCaptureFormat(param0: number, param1: number, param2: number): void;
				dispose(): void;
				isScreencast(): boolean;
			});
			public constructor();
			public removeMediaRecorderFromCamera(param0: org.otwebrtc.CameraVideoCapturer.MediaRecorderHandler): void;
			public startCapture(param0: number, param1: number, param2: number): void;
			public addMediaRecorderToCamera(param0: globalAndroid.media.MediaRecorder, param1: org.otwebrtc.CameraVideoCapturer.MediaRecorderHandler): void;
			public switchCamera(param0: org.otwebrtc.CameraVideoCapturer.CameraSwitchHandler): void;
			public switchCamera(param0: org.otwebrtc.CameraVideoCapturer.CameraSwitchHandler, param1: string): void;
			public changeCaptureFormat(param0: number, param1: number, param2: number): void;
			public dispose(): void;
			public isScreencast(): boolean;
			public initialize(param0: org.otwebrtc.SurfaceTextureHelper, param1: globalAndroid.content.Context, param2: org.otwebrtc.CapturerObserver): void;
			public stopCapture(): void;
		}
		export module CameraVideoCapturer {
			export class CameraEventsHandler {
				public static class: java.lang.Class<org.otwebrtc.CameraVideoCapturer.CameraEventsHandler>;
				/**
				 * Constructs a new instance of the org.otwebrtc.CameraVideoCapturer$CameraEventsHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCameraError(param0: string): void;
					onCameraDisconnected(): void;
					onCameraFreezed(param0: string): void;
					onCameraOpening(param0: string): void;
					onFirstFrameAvailable(): void;
					onCameraClosed(): void;
				});
				public constructor();
				public onCameraError(param0: string): void;
				public onFirstFrameAvailable(): void;
				public onCameraOpening(param0: string): void;
				public onCameraFreezed(param0: string): void;
				public onCameraClosed(): void;
				public onCameraDisconnected(): void;
			}
			export class CameraStatistics {
				public static class: java.lang.Class<org.otwebrtc.CameraVideoCapturer.CameraStatistics>;
				public constructor(param0: org.otwebrtc.SurfaceTextureHelper, param1: org.otwebrtc.CameraVideoCapturer.CameraEventsHandler);
				public release(): void;
				public addFrame(): void;
			}
			export class CameraSwitchHandler {
				public static class: java.lang.Class<org.otwebrtc.CameraVideoCapturer.CameraSwitchHandler>;
				/**
				 * Constructs a new instance of the org.otwebrtc.CameraVideoCapturer$CameraSwitchHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCameraSwitchDone(param0: boolean): void;
					onCameraSwitchError(param0: string): void;
				});
				public constructor();
				public onCameraSwitchError(param0: string): void;
				public onCameraSwitchDone(param0: boolean): void;
			}
			export class MediaRecorderHandler {
				public static class: java.lang.Class<org.otwebrtc.CameraVideoCapturer.MediaRecorderHandler>;
				/**
				 * Constructs a new instance of the org.otwebrtc.CameraVideoCapturer$MediaRecorderHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onMediaRecorderSuccess(): void;
					onMediaRecorderError(param0: string): void;
				});
				public constructor();
				public onMediaRecorderSuccess(): void;
				public onMediaRecorderError(param0: string): void;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class CandidatePairChangeEvent {
			public static class: java.lang.Class<org.otwebrtc.CandidatePairChangeEvent>;
			public local: org.otwebrtc.IceCandidate;
			public remote: org.otwebrtc.IceCandidate;
			public lastDataReceivedMs: number;
			public reason: string;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class CapturerObserver {
			public static class: java.lang.Class<org.otwebrtc.CapturerObserver>;
			/**
			 * Constructs a new instance of the org.otwebrtc.CapturerObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onCapturerStarted(param0: boolean): void;
				onCapturerStopped(): void;
				onFrameCaptured(param0: org.otwebrtc.VideoFrame): void;
			});
			public constructor();
			public onFrameCaptured(param0: org.otwebrtc.VideoFrame): void;
			public onCapturerStopped(): void;
			public onCapturerStarted(param0: boolean): void;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class ContextUtils {
			public static class: java.lang.Class<org.otwebrtc.ContextUtils>;
			public static initialize(param0: globalAndroid.content.Context): void;
			public static getApplicationContext(): globalAndroid.content.Context;
			public constructor();
		}
	}
}

declare module org {
	export module otwebrtc {
		export class CryptoOptions {
			public static class: java.lang.Class<org.otwebrtc.CryptoOptions>;
			public getSrtp(): org.otwebrtc.CryptoOptions.Srtp;
			public getSFrame(): org.otwebrtc.CryptoOptions.SFrame;
			public static builder(): org.otwebrtc.CryptoOptions.Builder;
		}
		export module CryptoOptions {
			export class Builder {
				public static class: java.lang.Class<org.otwebrtc.CryptoOptions.Builder>;
				public setEnableGcmCryptoSuites(param0: boolean): org.otwebrtc.CryptoOptions.Builder;
				public setEnableAes128Sha1_32CryptoCipher(param0: boolean): org.otwebrtc.CryptoOptions.Builder;
				public setEnableEncryptedRtpHeaderExtensions(param0: boolean): org.otwebrtc.CryptoOptions.Builder;
				public setRequireFrameEncryption(param0: boolean): org.otwebrtc.CryptoOptions.Builder;
				public createCryptoOptions(): org.otwebrtc.CryptoOptions;
			}
			export class SFrame {
				public static class: java.lang.Class<org.otwebrtc.CryptoOptions.SFrame>;
				public getRequireFrameEncryption(): boolean;
			}
			export class Srtp {
				public static class: java.lang.Class<org.otwebrtc.CryptoOptions.Srtp>;
				public getEnableEncryptedRtpHeaderExtensions(): boolean;
				public getEnableAes128Sha1_32CryptoCipher(): boolean;
				public getEnableGcmCryptoSuites(): boolean;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class DataChannel {
			public static class: java.lang.Class<org.otwebrtc.DataChannel>;
			public unregisterObserver(): void;
			public id(): number;
			public send(param0: org.otwebrtc.DataChannel.Buffer): boolean;
			public constructor(param0: number);
			public bufferedAmount(): number;
			public dispose(): void;
			public label(): string;
			public registerObserver(param0: org.otwebrtc.DataChannel.Observer): void;
			public close(): void;
			public state(): org.otwebrtc.DataChannel.State;
		}
		export module DataChannel {
			export class Buffer {
				public static class: java.lang.Class<org.otwebrtc.DataChannel.Buffer>;
				public data: java.nio.ByteBuffer;
				public binary: boolean;
				public constructor(param0: java.nio.ByteBuffer, param1: boolean);
			}
			export class Init {
				public static class: java.lang.Class<org.otwebrtc.DataChannel.Init>;
				public ordered: boolean;
				public maxRetransmitTimeMs: number;
				public maxRetransmits: number;
				public protocol: string;
				public negotiated: boolean;
				public id: number;
				public constructor();
			}
			export class Observer {
				public static class: java.lang.Class<org.otwebrtc.DataChannel.Observer>;
				/**
				 * Constructs a new instance of the org.otwebrtc.DataChannel$Observer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onBufferedAmountChange(param0: number): void;
					onStateChange(): void;
					onMessage(param0: org.otwebrtc.DataChannel.Buffer): void;
				});
				public constructor();
				public onMessage(param0: org.otwebrtc.DataChannel.Buffer): void;
				public onStateChange(): void;
				public onBufferedAmountChange(param0: number): void;
			}
			export class State {
				public static class: java.lang.Class<org.otwebrtc.DataChannel.State>;
				public static CONNECTING: org.otwebrtc.DataChannel.State;
				public static OPEN: org.otwebrtc.DataChannel.State;
				public static CLOSING: org.otwebrtc.DataChannel.State;
				public static CLOSED: org.otwebrtc.DataChannel.State;
				public static values(): native.Array<org.otwebrtc.DataChannel.State>;
				public static valueOf(param0: string): org.otwebrtc.DataChannel.State;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class DefaultVideoDecoderFactory extends org.otwebrtc.VideoDecoderFactory {
			public static class: java.lang.Class<org.otwebrtc.DefaultVideoDecoderFactory>;
			public constructor(param0: org.otwebrtc.EglBase.Context);
			public createDecoder(param0: org.otwebrtc.VideoCodecInfo): org.otwebrtc.VideoDecoder;
			public getSupportedCodecs(): native.Array<org.otwebrtc.VideoCodecInfo>;
			public createDecoder(param0: string): org.otwebrtc.VideoDecoder;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class DefaultVideoEncoderFactory extends org.otwebrtc.VideoEncoderFactory {
			public static class: java.lang.Class<org.otwebrtc.DefaultVideoEncoderFactory>;
			public getImplementations(): native.Array<org.otwebrtc.VideoCodecInfo>;
			public constructor(param0: org.otwebrtc.EglBase.Context, param1: boolean, param2: boolean);
			public getSupportedCodecs(): native.Array<org.otwebrtc.VideoCodecInfo>;
			public getEncoderSelector(): org.otwebrtc.VideoEncoderFactory.VideoEncoderSelector;
			public createEncoder(param0: org.otwebrtc.VideoCodecInfo): org.otwebrtc.VideoEncoder;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class DtmfSender {
			public static class: java.lang.Class<org.otwebrtc.DtmfSender>;
			public canInsertDtmf(): boolean;
			public insertDtmf(param0: string, param1: number, param2: number): boolean;
			public tones(): string;
			public duration(): number;
			public interToneGap(): number;
			public constructor(param0: number);
			public dispose(): void;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class DynamicBitrateAdjuster extends org.otwebrtc.BaseBitrateAdjuster {
			public static class: java.lang.Class<org.otwebrtc.DynamicBitrateAdjuster>;
			public getAdjustedBitrateBps(): number;
			public setTargets(param0: number, param1: number): void;
			public reportEncodedFrame(param0: number): void;
			public getCodecConfigFramerate(): number;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class EglBase {
			public static class: java.lang.Class<org.otwebrtc.EglBase>;
			/**
			 * Constructs a new instance of the org.otwebrtc.EglBase interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				configBuilder(): org.otwebrtc.EglBase.ConfigBuilder;
				getOpenGlesVersionFromConfig(param0: native.Array<number>): number;
				create(param0: org.otwebrtc.EglBase.Context, param1: native.Array<number>): org.otwebrtc.EglBase;
				create(): org.otwebrtc.EglBase;
				create(param0: org.otwebrtc.EglBase.Context): org.otwebrtc.EglBase;
				createEgl10(param0: native.Array<number>): org.otwebrtc.EglBase10;
				createEgl10(param0: org.otwebrtc.EglBase10.Context, param1: native.Array<number>): org.otwebrtc.EglBase10;
				createEgl10(param0: javax.microedition.khronos.egl.EGLContext, param1: native.Array<number>): org.otwebrtc.EglBase10;
				createEgl14(param0: native.Array<number>): org.otwebrtc.EglBase14;
				createEgl14(param0: org.otwebrtc.EglBase14.Context, param1: native.Array<number>): org.otwebrtc.EglBase14;
				createEgl14(param0: globalAndroid.opengl.EGLContext, param1: native.Array<number>): org.otwebrtc.EglBase14;
				<clinit>(): void;
				createSurface(param0: globalAndroid.view.Surface): void;
				createSurface(param0: globalAndroid.graphics.SurfaceTexture): void;
				createDummyPbufferSurface(): void;
				createPbufferSurface(param0: number, param1: number): void;
				getEglBaseContext(): org.otwebrtc.EglBase.Context;
				hasSurface(): boolean;
				surfaceWidth(): number;
				surfaceHeight(): number;
				releaseSurface(): void;
				release(): void;
				makeCurrent(): void;
				detachCurrent(): void;
				swapBuffers(): void;
				swapBuffers(param0: number): void;
			});
			public constructor();
			public static CONFIG_RECORDABLE: native.Array<number>;
			public static EGL_OPENGL_ES2_BIT: number;
			public static EGL_RECORDABLE_ANDROID: number;
			public static EGL_OPENGL_ES3_BIT: number;
			public static lock: any;
			public static CONFIG_PLAIN: native.Array<number>;
			public static CONFIG_PIXEL_RGBA_BUFFER: native.Array<number>;
			public static CONFIG_RGBA: native.Array<number>;
			public static CONFIG_PIXEL_BUFFER: native.Array<number>;
			public static createEgl10(param0: native.Array<number>): org.otwebrtc.EglBase10;
			public static getOpenGlesVersionFromConfig(param0: native.Array<number>): number;
			public createSurface(param0: globalAndroid.view.Surface): void;
			public hasSurface(): boolean;
			public static configBuilder(): org.otwebrtc.EglBase.ConfigBuilder;
			public static createEgl14(param0: globalAndroid.opengl.EGLContext, param1: native.Array<number>): org.otwebrtc.EglBase14;
			public getEglBaseContext(): org.otwebrtc.EglBase.Context;
			public static createEgl14(param0: native.Array<number>): org.otwebrtc.EglBase14;
			public makeCurrent(): void;
			public static create(param0: org.otwebrtc.EglBase.Context, param1: native.Array<number>): org.otwebrtc.EglBase;
			public release(): void;
			public detachCurrent(): void;
			public swapBuffers(param0: number): void;
			public surfaceWidth(): number;
			public createPbufferSurface(param0: number, param1: number): void;
			public static createEgl14(param0: org.otwebrtc.EglBase14.Context, param1: native.Array<number>): org.otwebrtc.EglBase14;
			public static createEgl10(param0: org.otwebrtc.EglBase10.Context, param1: native.Array<number>): org.otwebrtc.EglBase10;
			public static create(): org.otwebrtc.EglBase;
			public createSurface(param0: globalAndroid.graphics.SurfaceTexture): void;
			public createDummyPbufferSurface(): void;
			public surfaceHeight(): number;
			public releaseSurface(): void;
			public static create(param0: org.otwebrtc.EglBase.Context): org.otwebrtc.EglBase;
			public swapBuffers(): void;
			public static createEgl10(param0: javax.microedition.khronos.egl.EGLContext, param1: native.Array<number>): org.otwebrtc.EglBase10;
		}
		export module EglBase {
			export class ConfigBuilder {
				public static class: java.lang.Class<org.otwebrtc.EglBase.ConfigBuilder>;
				public createConfigAttributes(): native.Array<number>;
				public setOpenGlesVersion(param0: number): org.otwebrtc.EglBase.ConfigBuilder;
				public setSupportsPixelBuffer(param0: boolean): org.otwebrtc.EglBase.ConfigBuilder;
				public setIsRecordable(param0: boolean): org.otwebrtc.EglBase.ConfigBuilder;
				public setHasAlphaChannel(param0: boolean): org.otwebrtc.EglBase.ConfigBuilder;
				public constructor();
			}
			export class Context {
				public static class: java.lang.Class<org.otwebrtc.EglBase.Context>;
				/**
				 * Constructs a new instance of the org.otwebrtc.EglBase$Context interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getNativeEglContext(): number;
				});
				public constructor();
				public static NO_CONTEXT: number;
				public getNativeEglContext(): number;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class EglBase10 extends org.otwebrtc.EglBase {
			public static class: java.lang.Class<org.otwebrtc.EglBase10>;
			/**
			 * Constructs a new instance of the org.otwebrtc.EglBase10 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				configBuilder(): org.otwebrtc.EglBase.ConfigBuilder;
				getOpenGlesVersionFromConfig(param0: native.Array<number>): number;
				create(param0: org.otwebrtc.EglBase.Context, param1: native.Array<number>): org.otwebrtc.EglBase;
				create(): org.otwebrtc.EglBase;
				create(param0: org.otwebrtc.EglBase.Context): org.otwebrtc.EglBase;
				createEgl10(param0: native.Array<number>): org.otwebrtc.EglBase10;
				createEgl10(param0: org.otwebrtc.EglBase10.Context, param1: native.Array<number>): org.otwebrtc.EglBase10;
				createEgl10(param0: javax.microedition.khronos.egl.EGLContext, param1: native.Array<number>): org.otwebrtc.EglBase10;
				createEgl14(param0: native.Array<number>): org.otwebrtc.EglBase14;
				createEgl14(param0: org.otwebrtc.EglBase14.Context, param1: native.Array<number>): org.otwebrtc.EglBase14;
				createEgl14(param0: globalAndroid.opengl.EGLContext, param1: native.Array<number>): org.otwebrtc.EglBase14;
				<clinit>(): void;
				createSurface(param0: globalAndroid.view.Surface): void;
				createSurface(param0: globalAndroid.graphics.SurfaceTexture): void;
				createDummyPbufferSurface(): void;
				createPbufferSurface(param0: number, param1: number): void;
				getEglBaseContext(): org.otwebrtc.EglBase.Context;
				hasSurface(): boolean;
				surfaceWidth(): number;
				surfaceHeight(): number;
				releaseSurface(): void;
				release(): void;
				makeCurrent(): void;
				detachCurrent(): void;
				swapBuffers(): void;
				swapBuffers(param0: number): void;
			});
			public constructor();
			public static CONFIG_RECORDABLE: native.Array<number>;
			public static EGL_OPENGL_ES2_BIT: number;
			public static EGL_RECORDABLE_ANDROID: number;
			public static EGL_OPENGL_ES3_BIT: number;
			public static lock: any;
			public static CONFIG_PLAIN: native.Array<number>;
			public static CONFIG_PIXEL_RGBA_BUFFER: native.Array<number>;
			public static CONFIG_RGBA: native.Array<number>;
			public static CONFIG_PIXEL_BUFFER: native.Array<number>;
			public static createEgl10(param0: native.Array<number>): org.otwebrtc.EglBase10;
			public static getOpenGlesVersionFromConfig(param0: native.Array<number>): number;
			public createSurface(param0: globalAndroid.view.Surface): void;
			public hasSurface(): boolean;
			public static configBuilder(): org.otwebrtc.EglBase.ConfigBuilder;
			public static createEgl14(param0: globalAndroid.opengl.EGLContext, param1: native.Array<number>): org.otwebrtc.EglBase14;
			public getEglBaseContext(): org.otwebrtc.EglBase.Context;
			public static createEgl14(param0: native.Array<number>): org.otwebrtc.EglBase14;
			public makeCurrent(): void;
			public static create(param0: org.otwebrtc.EglBase.Context, param1: native.Array<number>): org.otwebrtc.EglBase;
			public release(): void;
			public detachCurrent(): void;
			public swapBuffers(param0: number): void;
			public surfaceWidth(): number;
			public createPbufferSurface(param0: number, param1: number): void;
			public static createEgl14(param0: org.otwebrtc.EglBase14.Context, param1: native.Array<number>): org.otwebrtc.EglBase14;
			public static createEgl10(param0: org.otwebrtc.EglBase10.Context, param1: native.Array<number>): org.otwebrtc.EglBase10;
			public static create(): org.otwebrtc.EglBase;
			public createSurface(param0: globalAndroid.graphics.SurfaceTexture): void;
			public createDummyPbufferSurface(): void;
			public surfaceHeight(): number;
			public releaseSurface(): void;
			public static create(param0: org.otwebrtc.EglBase.Context): org.otwebrtc.EglBase;
			public swapBuffers(): void;
			public static createEgl10(param0: javax.microedition.khronos.egl.EGLContext, param1: native.Array<number>): org.otwebrtc.EglBase10;
		}
		export module EglBase10 {
			export class Context extends org.otwebrtc.EglBase.Context {
				public static class: java.lang.Class<org.otwebrtc.EglBase10.Context>;
				/**
				 * Constructs a new instance of the org.otwebrtc.EglBase10$Context interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getRawContext(): javax.microedition.khronos.egl.EGLContext;
					getNativeEglContext(): number;
				});
				public constructor();
				public static NO_CONTEXT: number;
				public getRawContext(): javax.microedition.khronos.egl.EGLContext;
				public getNativeEglContext(): number;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class EglBase10Impl extends org.otwebrtc.EglBase10 {
			public static class: java.lang.Class<org.otwebrtc.EglBase10Impl>;
			public static createEgl10(param0: native.Array<number>): org.otwebrtc.EglBase10;
			public static getOpenGlesVersionFromConfig(param0: native.Array<number>): number;
			public createSurface(param0: globalAndroid.view.Surface): void;
			public hasSurface(): boolean;
			public static configBuilder(): org.otwebrtc.EglBase.ConfigBuilder;
			public static createEgl14(param0: globalAndroid.opengl.EGLContext, param1: native.Array<number>): org.otwebrtc.EglBase14;
			public getEglBaseContext(): org.otwebrtc.EglBase.Context;
			public makeCurrent(): void;
			public static createEgl14(param0: native.Array<number>): org.otwebrtc.EglBase14;
			public static create(param0: org.otwebrtc.EglBase.Context, param1: native.Array<number>): org.otwebrtc.EglBase;
			public release(): void;
			public detachCurrent(): void;
			public constructor(param0: javax.microedition.khronos.egl.EGLContext, param1: native.Array<number>);
			public swapBuffers(param0: number): void;
			public surfaceWidth(): number;
			public createPbufferSurface(param0: number, param1: number): void;
			public static createEgl14(param0: org.otwebrtc.EglBase14.Context, param1: native.Array<number>): org.otwebrtc.EglBase14;
			public static createEgl10(param0: org.otwebrtc.EglBase10.Context, param1: native.Array<number>): org.otwebrtc.EglBase10;
			public static create(): org.otwebrtc.EglBase;
			public createSurface(param0: globalAndroid.graphics.SurfaceTexture): void;
			public createDummyPbufferSurface(): void;
			public surfaceHeight(): number;
			public releaseSurface(): void;
			public static create(param0: org.otwebrtc.EglBase.Context): org.otwebrtc.EglBase;
			public swapBuffers(): void;
			public static createEgl10(param0: javax.microedition.khronos.egl.EGLContext, param1: native.Array<number>): org.otwebrtc.EglBase10;
		}
		export module EglBase10Impl {
			export class Context extends org.otwebrtc.EglBase10.Context {
				public static class: java.lang.Class<org.otwebrtc.EglBase10Impl.Context>;
				public constructor(param0: javax.microedition.khronos.egl.EGLContext);
				public getRawContext(): javax.microedition.khronos.egl.EGLContext;
				public getNativeEglContext(): number;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class EglBase14 extends org.otwebrtc.EglBase {
			public static class: java.lang.Class<org.otwebrtc.EglBase14>;
			/**
			 * Constructs a new instance of the org.otwebrtc.EglBase14 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				configBuilder(): org.otwebrtc.EglBase.ConfigBuilder;
				getOpenGlesVersionFromConfig(param0: native.Array<number>): number;
				create(param0: org.otwebrtc.EglBase.Context, param1: native.Array<number>): org.otwebrtc.EglBase;
				create(): org.otwebrtc.EglBase;
				create(param0: org.otwebrtc.EglBase.Context): org.otwebrtc.EglBase;
				createEgl10(param0: native.Array<number>): org.otwebrtc.EglBase10;
				createEgl10(param0: org.otwebrtc.EglBase10.Context, param1: native.Array<number>): org.otwebrtc.EglBase10;
				createEgl10(param0: javax.microedition.khronos.egl.EGLContext, param1: native.Array<number>): org.otwebrtc.EglBase10;
				createEgl14(param0: native.Array<number>): org.otwebrtc.EglBase14;
				createEgl14(param0: org.otwebrtc.EglBase14.Context, param1: native.Array<number>): org.otwebrtc.EglBase14;
				createEgl14(param0: globalAndroid.opengl.EGLContext, param1: native.Array<number>): org.otwebrtc.EglBase14;
				<clinit>(): void;
				createSurface(param0: globalAndroid.view.Surface): void;
				createSurface(param0: globalAndroid.graphics.SurfaceTexture): void;
				createDummyPbufferSurface(): void;
				createPbufferSurface(param0: number, param1: number): void;
				getEglBaseContext(): org.otwebrtc.EglBase.Context;
				hasSurface(): boolean;
				surfaceWidth(): number;
				surfaceHeight(): number;
				releaseSurface(): void;
				release(): void;
				makeCurrent(): void;
				detachCurrent(): void;
				swapBuffers(): void;
				swapBuffers(param0: number): void;
			});
			public constructor();
			public static CONFIG_RECORDABLE: native.Array<number>;
			public static EGL_OPENGL_ES2_BIT: number;
			public static EGL_RECORDABLE_ANDROID: number;
			public static EGL_OPENGL_ES3_BIT: number;
			public static lock: any;
			public static CONFIG_PLAIN: native.Array<number>;
			public static CONFIG_PIXEL_RGBA_BUFFER: native.Array<number>;
			public static CONFIG_RGBA: native.Array<number>;
			public static CONFIG_PIXEL_BUFFER: native.Array<number>;
			public static createEgl10(param0: native.Array<number>): org.otwebrtc.EglBase10;
			public static getOpenGlesVersionFromConfig(param0: native.Array<number>): number;
			public createSurface(param0: globalAndroid.view.Surface): void;
			public hasSurface(): boolean;
			public static configBuilder(): org.otwebrtc.EglBase.ConfigBuilder;
			public static createEgl14(param0: globalAndroid.opengl.EGLContext, param1: native.Array<number>): org.otwebrtc.EglBase14;
			public getEglBaseContext(): org.otwebrtc.EglBase.Context;
			public static createEgl14(param0: native.Array<number>): org.otwebrtc.EglBase14;
			public makeCurrent(): void;
			public static create(param0: org.otwebrtc.EglBase.Context, param1: native.Array<number>): org.otwebrtc.EglBase;
			public release(): void;
			public detachCurrent(): void;
			public swapBuffers(param0: number): void;
			public surfaceWidth(): number;
			public createPbufferSurface(param0: number, param1: number): void;
			public static createEgl14(param0: org.otwebrtc.EglBase14.Context, param1: native.Array<number>): org.otwebrtc.EglBase14;
			public static createEgl10(param0: org.otwebrtc.EglBase10.Context, param1: native.Array<number>): org.otwebrtc.EglBase10;
			public static create(): org.otwebrtc.EglBase;
			public createSurface(param0: globalAndroid.graphics.SurfaceTexture): void;
			public createDummyPbufferSurface(): void;
			public surfaceHeight(): number;
			public releaseSurface(): void;
			public static create(param0: org.otwebrtc.EglBase.Context): org.otwebrtc.EglBase;
			public swapBuffers(): void;
			public static createEgl10(param0: javax.microedition.khronos.egl.EGLContext, param1: native.Array<number>): org.otwebrtc.EglBase10;
		}
		export module EglBase14 {
			export class Context extends org.otwebrtc.EglBase.Context {
				public static class: java.lang.Class<org.otwebrtc.EglBase14.Context>;
				/**
				 * Constructs a new instance of the org.otwebrtc.EglBase14$Context interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getRawContext(): globalAndroid.opengl.EGLContext;
					getNativeEglContext(): number;
				});
				public constructor();
				public static NO_CONTEXT: number;
				public getRawContext(): globalAndroid.opengl.EGLContext;
				public getNativeEglContext(): number;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class EglBase14Impl extends org.otwebrtc.EglBase14 {
			public static class: java.lang.Class<org.otwebrtc.EglBase14Impl>;
			public static isEGL14Supported(): boolean;
			public static createEgl10(param0: native.Array<number>): org.otwebrtc.EglBase10;
			public static getOpenGlesVersionFromConfig(param0: native.Array<number>): number;
			public createSurface(param0: globalAndroid.view.Surface): void;
			public constructor(param0: globalAndroid.opengl.EGLContext, param1: native.Array<number>);
			public hasSurface(): boolean;
			public static configBuilder(): org.otwebrtc.EglBase.ConfigBuilder;
			public static createEgl14(param0: globalAndroid.opengl.EGLContext, param1: native.Array<number>): org.otwebrtc.EglBase14;
			public getEglBaseContext(): org.otwebrtc.EglBase.Context;
			public makeCurrent(): void;
			public static createEgl14(param0: native.Array<number>): org.otwebrtc.EglBase14;
			public static create(param0: org.otwebrtc.EglBase.Context, param1: native.Array<number>): org.otwebrtc.EglBase;
			public release(): void;
			public detachCurrent(): void;
			public swapBuffers(param0: number): void;
			public surfaceWidth(): number;
			public createPbufferSurface(param0: number, param1: number): void;
			public getEglBaseContext(): org.otwebrtc.EglBase14Impl.Context;
			public static createEgl14(param0: org.otwebrtc.EglBase14.Context, param1: native.Array<number>): org.otwebrtc.EglBase14;
			public static createEgl10(param0: org.otwebrtc.EglBase10.Context, param1: native.Array<number>): org.otwebrtc.EglBase10;
			public static create(): org.otwebrtc.EglBase;
			public createSurface(param0: globalAndroid.graphics.SurfaceTexture): void;
			public createDummyPbufferSurface(): void;
			public surfaceHeight(): number;
			public releaseSurface(): void;
			public static create(param0: org.otwebrtc.EglBase.Context): org.otwebrtc.EglBase;
			public swapBuffers(): void;
			public static createEgl10(param0: javax.microedition.khronos.egl.EGLContext, param1: native.Array<number>): org.otwebrtc.EglBase10;
		}
		export module EglBase14Impl {
			export class Context extends org.otwebrtc.EglBase14.Context {
				public static class: java.lang.Class<org.otwebrtc.EglBase14Impl.Context>;
				public constructor(param0: globalAndroid.opengl.EGLContext);
				public getRawContext(): globalAndroid.opengl.EGLContext;
				public getNativeEglContext(): number;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class EglRenderer extends org.otwebrtc.VideoSink {
			public static class: java.lang.Class<org.otwebrtc.EglRenderer>;
			public name: string;
			public clearImage(): void;
			public clearImage(param0: number, param1: number, param2: number, param3: number): void;
			public setMirrorVertically(param0: boolean): void;
			public releaseEglSurface(param0: java.lang.Runnable): void;
			public pauseVideo(): void;
			public init(param0: org.otwebrtc.EglBase.Context, param1: native.Array<number>, param2: org.otwebrtc.RendererCommon.GlDrawer): void;
			public setMirror(param0: boolean): void;
			public onFrame(param0: org.otwebrtc.VideoFrame): void;
			public removeFrameListener(param0: org.otwebrtc.EglRenderer.FrameListener): void;
			public addFrameListener(param0: org.otwebrtc.EglRenderer.FrameListener, param1: number): void;
			public createEglSurface(param0: globalAndroid.graphics.SurfaceTexture): void;
			public printStackTrace(): void;
			public setFpsReduction(param0: number): void;
			public setErrorCallback(param0: org.otwebrtc.EglRenderer.ErrorCallback): void;
			public addFrameListener(param0: org.otwebrtc.EglRenderer.FrameListener, param1: number, param2: org.otwebrtc.RendererCommon.GlDrawer, param3: boolean): void;
			public createEglSurface(param0: globalAndroid.view.Surface): void;
			public setLayoutAspectRatio(param0: number): void;
			public disableFpsReduction(): void;
			public constructor(param0: string, param1: org.otwebrtc.VideoFrameDrawer);
			public addFrameListener(param0: org.otwebrtc.EglRenderer.FrameListener, param1: number, param2: org.otwebrtc.RendererCommon.GlDrawer): void;
			public constructor(param0: string);
			public init(param0: org.otwebrtc.EglBase.Context, param1: native.Array<number>, param2: org.otwebrtc.RendererCommon.GlDrawer, param3: boolean): void;
			public release(): void;
		}
		export module EglRenderer {
			export class EglSurfaceCreation {
				public static class: java.lang.Class<org.otwebrtc.EglRenderer.EglSurfaceCreation>;
				public setSurface(param0: any): void;
				public run(): void;
			}
			export class ErrorCallback {
				public static class: java.lang.Class<org.otwebrtc.EglRenderer.ErrorCallback>;
				/**
				 * Constructs a new instance of the org.otwebrtc.EglRenderer$ErrorCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onGlOutOfMemory(): void;
				});
				public constructor();
				public onGlOutOfMemory(): void;
			}
			export class FrameListener {
				public static class: java.lang.Class<org.otwebrtc.EglRenderer.FrameListener>;
				/**
				 * Constructs a new instance of the org.otwebrtc.EglRenderer$FrameListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onFrame(param0: globalAndroid.graphics.Bitmap): void;
				});
				public constructor();
				public onFrame(param0: globalAndroid.graphics.Bitmap): void;
			}
			export class FrameListenerAndParams {
				public static class: java.lang.Class<org.otwebrtc.EglRenderer.FrameListenerAndParams>;
				public listener: org.otwebrtc.EglRenderer.FrameListener;
				public scale: number;
				public drawer: org.otwebrtc.RendererCommon.GlDrawer;
				public applyFpsReduction: boolean;
				public constructor(param0: org.otwebrtc.EglRenderer.FrameListener, param1: number, param2: org.otwebrtc.RendererCommon.GlDrawer, param3: boolean);
			}
			export class HandlerWithExceptionCallback {
				public static class: java.lang.Class<org.otwebrtc.EglRenderer.HandlerWithExceptionCallback>;
				public dispatchMessage(param0: globalAndroid.os.Message): void;
				public constructor(param0: globalAndroid.os.Looper, param1: java.lang.Runnable);
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class Empty {
			public static class: java.lang.Class<org.otwebrtc.Empty>;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class EncodedImage extends org.otwebrtc.RefCounted {
			public static class: java.lang.Class<org.otwebrtc.EncodedImage>;
			public buffer: java.nio.ByteBuffer;
			public encodedWidth: number;
			public encodedHeight: number;
			public captureTimeMs: number;
			public captureTimeNs: number;
			public frameType: org.otwebrtc.EncodedImage.FrameType;
			public rotation: number;
			public completeFrame: boolean;
			public qp: java.lang.Integer;
			public static builder(): org.otwebrtc.EncodedImage.Builder;
			public retain(): void;
			public release(): void;
		}
		export module EncodedImage {
			export class Builder {
				public static class: java.lang.Class<org.otwebrtc.EncodedImage.Builder>;
				public setCaptureTimeNs(param0: number): org.otwebrtc.EncodedImage.Builder;
				public setEncodedHeight(param0: number): org.otwebrtc.EncodedImage.Builder;
				public setCaptureTimeMs(param0: number): org.otwebrtc.EncodedImage.Builder;
				public setQp(param0: java.lang.Integer): org.otwebrtc.EncodedImage.Builder;
				public setBuffer(param0: java.nio.ByteBuffer, param1: java.lang.Runnable): org.otwebrtc.EncodedImage.Builder;
				public setRotation(param0: number): org.otwebrtc.EncodedImage.Builder;
				public setFrameType(param0: org.otwebrtc.EncodedImage.FrameType): org.otwebrtc.EncodedImage.Builder;
				public createEncodedImage(): org.otwebrtc.EncodedImage;
				public setCompleteFrame(param0: boolean): org.otwebrtc.EncodedImage.Builder;
				public setEncodedWidth(param0: number): org.otwebrtc.EncodedImage.Builder;
			}
			export class FrameType {
				public static class: java.lang.Class<org.otwebrtc.EncodedImage.FrameType>;
				public static EmptyFrame: org.otwebrtc.EncodedImage.FrameType;
				public static VideoFrameKey: org.otwebrtc.EncodedImage.FrameType;
				public static VideoFrameDelta: org.otwebrtc.EncodedImage.FrameType;
				public getNative(): number;
				public static valueOf(param0: string): org.otwebrtc.EncodedImage.FrameType;
				public static values(): native.Array<org.otwebrtc.EncodedImage.FrameType>;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class FecControllerFactoryFactoryInterface {
			public static class: java.lang.Class<org.otwebrtc.FecControllerFactoryFactoryInterface>;
			/**
			 * Constructs a new instance of the org.otwebrtc.FecControllerFactoryFactoryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createNative(): number;
			});
			public constructor();
			public createNative(): number;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class FileVideoCapturer extends org.otwebrtc.VideoCapturer {
			public static class: java.lang.Class<org.otwebrtc.FileVideoCapturer>;
			public startCapture(param0: number, param1: number, param2: number): void;
			public tick(): void;
			public changeCaptureFormat(param0: number, param1: number, param2: number): void;
			public dispose(): void;
			public isScreencast(): boolean;
			public initialize(param0: org.otwebrtc.SurfaceTextureHelper, param1: globalAndroid.content.Context, param2: org.otwebrtc.CapturerObserver): void;
			public constructor(param0: string);
			public stopCapture(): void;
		}
		export module FileVideoCapturer {
			export class VideoReader {
				public static class: java.lang.Class<org.otwebrtc.FileVideoCapturer.VideoReader>;
				/**
				 * Constructs a new instance of the org.otwebrtc.FileVideoCapturer$VideoReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getNextFrame(): org.otwebrtc.VideoFrame;
					close(): void;
				});
				public constructor();
				public close(): void;
				public getNextFrame(): org.otwebrtc.VideoFrame;
			}
			export class VideoReaderY4M extends org.otwebrtc.FileVideoCapturer.VideoReader {
				public static class: java.lang.Class<org.otwebrtc.FileVideoCapturer.VideoReaderY4M>;
				public close(): void;
				public getNextFrame(): org.otwebrtc.VideoFrame;
				public constructor(param0: string);
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class FrameDecryptor {
			public static class: java.lang.Class<org.otwebrtc.FrameDecryptor>;
			/**
			 * Constructs a new instance of the org.otwebrtc.FrameDecryptor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getNativeFrameDecryptor(): number;
			});
			public constructor();
			public getNativeFrameDecryptor(): number;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class FrameEncryptor {
			public static class: java.lang.Class<org.otwebrtc.FrameEncryptor>;
			/**
			 * Constructs a new instance of the org.otwebrtc.FrameEncryptor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getNativeFrameEncryptor(): number;
			});
			public constructor();
			public getNativeFrameEncryptor(): number;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class FramerateBitrateAdjuster extends org.otwebrtc.BaseBitrateAdjuster {
			public static class: java.lang.Class<org.otwebrtc.FramerateBitrateAdjuster>;
			public getAdjustedBitrateBps(): number;
			public setTargets(param0: number, param1: number): void;
			public reportEncodedFrame(param0: number): void;
			public getCodecConfigFramerate(): number;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class GlGenericDrawer extends org.otwebrtc.RendererCommon.GlDrawer {
			public static class: java.lang.Class<org.otwebrtc.GlGenericDrawer>;
			public constructor(param0: string, param1: org.otwebrtc.GlGenericDrawer.ShaderCallbacks);
			public constructor(param0: string, param1: string, param2: org.otwebrtc.GlGenericDrawer.ShaderCallbacks);
			public drawYuv(param0: native.Array<number>, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
			public drawOes(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
			public drawRgb(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
			public release(): void;
		}
		export module GlGenericDrawer {
			export class ShaderCallbacks {
				public static class: java.lang.Class<org.otwebrtc.GlGenericDrawer.ShaderCallbacks>;
				/**
				 * Constructs a new instance of the org.otwebrtc.GlGenericDrawer$ShaderCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onNewShader(param0: org.otwebrtc.GlShader): void;
					onPrepareShader(param0: org.otwebrtc.GlShader, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number): void;
				});
				public constructor();
				public onNewShader(param0: org.otwebrtc.GlShader): void;
				public onPrepareShader(param0: org.otwebrtc.GlShader, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number): void;
			}
			export class ShaderType {
				public static class: java.lang.Class<org.otwebrtc.GlGenericDrawer.ShaderType>;
				public static OES: org.otwebrtc.GlGenericDrawer.ShaderType;
				public static RGB: org.otwebrtc.GlGenericDrawer.ShaderType;
				public static YUV: org.otwebrtc.GlGenericDrawer.ShaderType;
				public static values(): native.Array<org.otwebrtc.GlGenericDrawer.ShaderType>;
				public static valueOf(param0: string): org.otwebrtc.GlGenericDrawer.ShaderType;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class GlRectDrawer extends org.otwebrtc.GlGenericDrawer {
			public static class: java.lang.Class<org.otwebrtc.GlRectDrawer>;
			public constructor(param0: string, param1: org.otwebrtc.GlGenericDrawer.ShaderCallbacks);
			public constructor(param0: string, param1: string, param2: org.otwebrtc.GlGenericDrawer.ShaderCallbacks);
			public drawYuv(param0: native.Array<number>, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
			public constructor();
			public drawOes(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
			public drawRgb(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
			public release(): void;
		}
		export module GlRectDrawer {
			export class ShaderCallbacks extends org.otwebrtc.GlGenericDrawer.ShaderCallbacks {
				public static class: java.lang.Class<org.otwebrtc.GlRectDrawer.ShaderCallbacks>;
				public onNewShader(param0: org.otwebrtc.GlShader): void;
				public onPrepareShader(param0: org.otwebrtc.GlShader, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number): void;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class GlShader {
			public static class: java.lang.Class<org.otwebrtc.GlShader>;
			public constructor(param0: string, param1: string);
			public getUniformLocation(param0: string): number;
			public useProgram(): void;
			public setVertexAttribArray(param0: string, param1: number, param2: java.nio.FloatBuffer): void;
			public getAttribLocation(param0: string): number;
			public setVertexAttribArray(param0: string, param1: number, param2: number, param3: java.nio.FloatBuffer): void;
			public release(): void;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class GlTextureFrameBuffer {
			public static class: java.lang.Class<org.otwebrtc.GlTextureFrameBuffer>;
			public getTextureId(): number;
			public getHeight(): number;
			public getFrameBufferId(): number;
			public setSize(param0: number, param1: number): void;
			public constructor(param0: number);
			public getWidth(): number;
			public release(): void;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class GlUtil {
			public static class: java.lang.Class<org.otwebrtc.GlUtil>;
			public static createFloatBuffer(param0: native.Array<number>): java.nio.FloatBuffer;
			public static checkNoGLES2Error(param0: string): void;
			public static generateTexture(param0: number): number;
		}
		export module GlUtil {
			export class GlOutOfMemoryException {
				public static class: java.lang.Class<org.otwebrtc.GlUtil.GlOutOfMemoryException>;
				public constructor(param0: string);
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class H264Utils {
			public static class: java.lang.Class<org.otwebrtc.H264Utils>;
			public static H264_FMTP_PROFILE_LEVEL_ID: string;
			public static H264_FMTP_LEVEL_ASYMMETRY_ALLOWED: string;
			public static H264_FMTP_PACKETIZATION_MODE: string;
			public static H264_PROFILE_CONSTRAINED_BASELINE: string;
			public static H264_PROFILE_CONSTRAINED_HIGH: string;
			public static H264_LEVEL_3_1: string;
			public static H264_CONSTRAINED_HIGH_3_1: string;
			public static H264_CONSTRAINED_BASELINE_3_1: string;
			public static DEFAULT_H264_BASELINE_PROFILE_CODEC: org.otwebrtc.VideoCodecInfo;
			public static DEFAULT_H264_HIGH_PROFILE_CODEC: org.otwebrtc.VideoCodecInfo;
			public static getDefaultH264Params(param0: boolean): java.util.Map<string,string>;
			public static isSameH264Profile(param0: java.util.Map<string,string>, param1: java.util.Map<string,string>): boolean;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class HardwareVideoDecoderFactory extends org.otwebrtc.MediaCodecVideoDecoderFactory {
			public static class: java.lang.Class<org.otwebrtc.HardwareVideoDecoderFactory>;
			public constructor(param0: org.otwebrtc.EglBase.Context);
			public createDecoder(param0: org.otwebrtc.VideoCodecInfo): org.otwebrtc.VideoDecoder;
			public getSupportedCodecs(): native.Array<org.otwebrtc.VideoCodecInfo>;
			public constructor();
			public createDecoder(param0: string): org.otwebrtc.VideoDecoder;
			public constructor(param0: org.otwebrtc.EglBase.Context, param1: org.otwebrtc.Predicate<globalAndroid.media.MediaCodecInfo>);
		}
	}
}

declare module org {
	export module otwebrtc {
		export class HardwareVideoEncoder extends org.otwebrtc.VideoEncoder {
			public static class: java.lang.Class<org.otwebrtc.HardwareVideoEncoder>;
			public release(): org.otwebrtc.VideoCodecStatus;
			public setRateAllocation(param0: org.otwebrtc.VideoEncoder.BitrateAllocation, param1: number): org.otwebrtc.VideoCodecStatus;
			public encode(param0: org.otwebrtc.VideoFrame, param1: org.otwebrtc.VideoEncoder.EncodeInfo): org.otwebrtc.VideoCodecStatus;
			public getScalingSettings(): org.otwebrtc.VideoEncoder.ScalingSettings;
			public initEncode(param0: org.otwebrtc.VideoEncoder.Settings, param1: org.otwebrtc.VideoEncoder.Callback): org.otwebrtc.VideoCodecStatus;
			public fillInputBuffer(param0: java.nio.ByteBuffer, param1: org.otwebrtc.VideoFrame.Buffer): void;
			public getImplementationName(): string;
			public getResolutionBitrateLimits(): native.Array<org.otwebrtc.VideoEncoder.ResolutionBitrateLimits>;
			public deliverEncodedImage(): void;
			public createNativeVideoEncoder(): number;
			public isHardwareEncoder(): boolean;
			public constructor(param0: org.otwebrtc.MediaCodecWrapperFactory, param1: string, param2: org.otwebrtc.VideoCodecMimeType, param3: java.lang.Integer, param4: java.lang.Integer, param5: java.util.Map<string,string>, param6: number, param7: number, param8: org.otwebrtc.BitrateAdjuster, param9: org.otwebrtc.EglBase14.Context);
		}
		export module HardwareVideoEncoder {
			export class BusyCount {
				public static class: java.lang.Class<org.otwebrtc.HardwareVideoEncoder.BusyCount>;
				public increment(): void;
				public decrement(): void;
				public waitForZero(): void;
			}
			export abstract class YuvFormat {
				public static class: java.lang.Class<org.otwebrtc.HardwareVideoEncoder.YuvFormat>;
				public static I420: org.otwebrtc.HardwareVideoEncoder.YuvFormat;
				public static NV12: org.otwebrtc.HardwareVideoEncoder.YuvFormat;
				public static values(): native.Array<org.otwebrtc.HardwareVideoEncoder.YuvFormat>;
				public static valueOf(param0: string): org.otwebrtc.HardwareVideoEncoder.YuvFormat;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class HardwareVideoEncoderFactory extends org.otwebrtc.VideoEncoderFactory {
			public static class: java.lang.Class<org.otwebrtc.HardwareVideoEncoderFactory>;
			public getImplementations(): native.Array<org.otwebrtc.VideoCodecInfo>;
			public constructor(param0: org.otwebrtc.EglBase.Context, param1: boolean, param2: boolean);
			public constructor(param0: org.otwebrtc.EglBase.Context, param1: boolean, param2: boolean, param3: org.otwebrtc.Predicate<globalAndroid.media.MediaCodecInfo>);
			public getSupportedCodecs(): native.Array<org.otwebrtc.VideoCodecInfo>;
			public getEncoderSelector(): org.otwebrtc.VideoEncoderFactory.VideoEncoderSelector;
			public constructor(param0: boolean, param1: boolean);
			public createEncoder(param0: org.otwebrtc.VideoCodecInfo): org.otwebrtc.VideoEncoder;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class Histogram {
			public static class: java.lang.Class<org.otwebrtc.Histogram>;
			public static createEnumeration(param0: string, param1: number): org.otwebrtc.Histogram;
			public static createCounts(param0: string, param1: number, param2: number, param3: number): org.otwebrtc.Histogram;
			public addSample(param0: number): void;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class IceCandidate {
			public static class: java.lang.Class<org.otwebrtc.IceCandidate>;
			public sdpMid: string;
			public sdpMLineIndex: number;
			public sdp: string;
			public serverUrl: string;
			public adapterType: org.otwebrtc.PeerConnection.AdapterType;
			public constructor(param0: string, param1: number, param2: string);
			public equals(param0: any): boolean;
			public toString(): string;
			public hashCode(): number;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class JNILogging {
			public static class: java.lang.Class<org.otwebrtc.JNILogging>;
			public constructor(param0: org.otwebrtc.Loggable);
			public logToInjectable(param0: string, param1: java.lang.Integer, param2: string): void;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class JavaI420Buffer extends org.otwebrtc.VideoFrame.I420Buffer {
			public static class: java.lang.Class<org.otwebrtc.JavaI420Buffer>;
			public getStrideU(): number;
			public getHeight(): number;
			public getDataU(): java.nio.ByteBuffer;
			public cropAndScale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): org.otwebrtc.VideoFrame.Buffer;
			public static allocate(param0: number, param1: number): org.otwebrtc.JavaI420Buffer;
			public getStrideY(): number;
			public getWidth(): number;
			public getDataY(): java.nio.ByteBuffer;
			public static cropAndScaleI420(param0: org.otwebrtc.VideoFrame.I420Buffer, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): org.otwebrtc.VideoFrame.Buffer;
			public getStrideV(): number;
			public retain(): void;
			public static wrap(param0: number, param1: number, param2: java.nio.ByteBuffer, param3: number, param4: java.nio.ByteBuffer, param5: number, param6: java.nio.ByteBuffer, param7: number, param8: java.lang.Runnable): org.otwebrtc.JavaI420Buffer;
			public toI420(): org.otwebrtc.VideoFrame.I420Buffer;
			public getDataV(): java.nio.ByteBuffer;
			public release(): void;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class JniCommon {
			public static class: java.lang.Class<org.otwebrtc.JniCommon>;
			public static nativeReleaseRef(param0: number): void;
			public static nativeAddRef(param0: number): void;
			public constructor();
			public static nativeAllocateByteBuffer(param0: number): java.nio.ByteBuffer;
			public static nativeFreeByteBuffer(param0: java.nio.ByteBuffer): void;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class JniHelper {
			public static class: java.lang.Class<org.otwebrtc.JniHelper>;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class LibvpxVp8Decoder extends org.otwebrtc.WrappedNativeVideoDecoder {
			public static class: java.lang.Class<org.otwebrtc.LibvpxVp8Decoder>;
			public release(): org.otwebrtc.VideoCodecStatus;
			public decode(param0: org.otwebrtc.EncodedImage, param1: org.otwebrtc.VideoDecoder.DecodeInfo): org.otwebrtc.VideoCodecStatus;
			public getImplementationName(): string;
			public createNativeVideoDecoder(): number;
			public getPrefersLateDecoding(): boolean;
			public constructor();
			public initDecode(param0: org.otwebrtc.VideoDecoder.Settings, param1: org.otwebrtc.VideoDecoder.Callback): org.otwebrtc.VideoCodecStatus;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class LibvpxVp8Encoder extends org.otwebrtc.WrappedNativeVideoEncoder {
			public static class: java.lang.Class<org.otwebrtc.LibvpxVp8Encoder>;
			public release(): org.otwebrtc.VideoCodecStatus;
			public setRateAllocation(param0: org.otwebrtc.VideoEncoder.BitrateAllocation, param1: number): org.otwebrtc.VideoCodecStatus;
			public encode(param0: org.otwebrtc.VideoFrame, param1: org.otwebrtc.VideoEncoder.EncodeInfo): org.otwebrtc.VideoCodecStatus;
			public getScalingSettings(): org.otwebrtc.VideoEncoder.ScalingSettings;
			public initEncode(param0: org.otwebrtc.VideoEncoder.Settings, param1: org.otwebrtc.VideoEncoder.Callback): org.otwebrtc.VideoCodecStatus;
			public getResolutionBitrateLimits(): native.Array<org.otwebrtc.VideoEncoder.ResolutionBitrateLimits>;
			public getImplementationName(): string;
			public createNativeVideoEncoder(): number;
			public isHardwareEncoder(): boolean;
			public constructor();
		}
	}
}

declare module org {
	export module otwebrtc {
		export class LibvpxVp9Decoder extends org.otwebrtc.WrappedNativeVideoDecoder {
			public static class: java.lang.Class<org.otwebrtc.LibvpxVp9Decoder>;
			public release(): org.otwebrtc.VideoCodecStatus;
			public decode(param0: org.otwebrtc.EncodedImage, param1: org.otwebrtc.VideoDecoder.DecodeInfo): org.otwebrtc.VideoCodecStatus;
			public getImplementationName(): string;
			public createNativeVideoDecoder(): number;
			public getPrefersLateDecoding(): boolean;
			public constructor();
			public initDecode(param0: org.otwebrtc.VideoDecoder.Settings, param1: org.otwebrtc.VideoDecoder.Callback): org.otwebrtc.VideoCodecStatus;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class LibvpxVp9Encoder extends org.otwebrtc.WrappedNativeVideoEncoder {
			public static class: java.lang.Class<org.otwebrtc.LibvpxVp9Encoder>;
			public release(): org.otwebrtc.VideoCodecStatus;
			public setRateAllocation(param0: org.otwebrtc.VideoEncoder.BitrateAllocation, param1: number): org.otwebrtc.VideoCodecStatus;
			public encode(param0: org.otwebrtc.VideoFrame, param1: org.otwebrtc.VideoEncoder.EncodeInfo): org.otwebrtc.VideoCodecStatus;
			public getScalingSettings(): org.otwebrtc.VideoEncoder.ScalingSettings;
			public initEncode(param0: org.otwebrtc.VideoEncoder.Settings, param1: org.otwebrtc.VideoEncoder.Callback): org.otwebrtc.VideoCodecStatus;
			public getResolutionBitrateLimits(): native.Array<org.otwebrtc.VideoEncoder.ResolutionBitrateLimits>;
			public getImplementationName(): string;
			public createNativeVideoEncoder(): number;
			public isHardwareEncoder(): boolean;
			public constructor();
		}
	}
}

declare module org {
	export module otwebrtc {
		export class Loggable {
			public static class: java.lang.Class<org.otwebrtc.Loggable>;
			/**
			 * Constructs a new instance of the org.otwebrtc.Loggable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onLogMessage(param0: string, param1: org.otwebrtc.Logging.Severity, param2: string): void;
			});
			public constructor();
			public onLogMessage(param0: string, param1: org.otwebrtc.Logging.Severity, param2: string): void;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class Logging {
			public static class: java.lang.Class<org.otwebrtc.Logging>;
			public static enableLogTimeStamps(): void;
			public static v(param0: string, param1: string): void;
			public static w(param0: string, param1: string): void;
			public static log(param0: org.otwebrtc.Logging.Severity, param1: string, param2: string): void;
			public static enableLogThreads(): void;
			public static enableTracing(param0: string, param1: java.util.EnumSet<org.otwebrtc.Logging.TraceLevel>): void;
			public constructor();
			public static enableLogToDebugOutput(param0: org.otwebrtc.Logging.Severity): void;
			public static e(param0: string, param1: string, param2: java.lang.Throwable): void;
			public static e(param0: string, param1: string): void;
			public static w(param0: string, param1: string, param2: java.lang.Throwable): void;
			public static d(param0: string, param1: string): void;
		}
		export module Logging {
			export class Severity {
				public static class: java.lang.Class<org.otwebrtc.Logging.Severity>;
				public static LS_VERBOSE: org.otwebrtc.Logging.Severity;
				public static LS_INFO: org.otwebrtc.Logging.Severity;
				public static LS_WARNING: org.otwebrtc.Logging.Severity;
				public static LS_ERROR: org.otwebrtc.Logging.Severity;
				public static LS_NONE: org.otwebrtc.Logging.Severity;
				public static values(): native.Array<org.otwebrtc.Logging.Severity>;
				public static valueOf(param0: string): org.otwebrtc.Logging.Severity;
			}
			export class TraceLevel {
				public static class: java.lang.Class<org.otwebrtc.Logging.TraceLevel>;
				public static TRACE_NONE: org.otwebrtc.Logging.TraceLevel;
				public static TRACE_STATEINFO: org.otwebrtc.Logging.TraceLevel;
				public static TRACE_WARNING: org.otwebrtc.Logging.TraceLevel;
				public static TRACE_ERROR: org.otwebrtc.Logging.TraceLevel;
				public static TRACE_CRITICAL: org.otwebrtc.Logging.TraceLevel;
				public static TRACE_APICALL: org.otwebrtc.Logging.TraceLevel;
				public static TRACE_DEFAULT: org.otwebrtc.Logging.TraceLevel;
				public static TRACE_MODULECALL: org.otwebrtc.Logging.TraceLevel;
				public static TRACE_MEMORY: org.otwebrtc.Logging.TraceLevel;
				public static TRACE_TIMER: org.otwebrtc.Logging.TraceLevel;
				public static TRACE_STREAM: org.otwebrtc.Logging.TraceLevel;
				public static TRACE_DEBUG: org.otwebrtc.Logging.TraceLevel;
				public static TRACE_INFO: org.otwebrtc.Logging.TraceLevel;
				public static TRACE_TERSEINFO: org.otwebrtc.Logging.TraceLevel;
				public static TRACE_ALL: org.otwebrtc.Logging.TraceLevel;
				public level: number;
				public static values(): native.Array<org.otwebrtc.Logging.TraceLevel>;
				public static valueOf(param0: string): org.otwebrtc.Logging.TraceLevel;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class MediaCodecUtils {
			public static class: java.lang.Class<org.otwebrtc.MediaCodecUtils>;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class MediaCodecVideoDecoderFactory extends org.otwebrtc.VideoDecoderFactory {
			public static class: java.lang.Class<org.otwebrtc.MediaCodecVideoDecoderFactory>;
			public createDecoder(param0: org.otwebrtc.VideoCodecInfo): org.otwebrtc.VideoDecoder;
			public getSupportedCodecs(): native.Array<org.otwebrtc.VideoCodecInfo>;
			public createDecoder(param0: string): org.otwebrtc.VideoDecoder;
			public constructor(param0: org.otwebrtc.EglBase.Context, param1: org.otwebrtc.Predicate<globalAndroid.media.MediaCodecInfo>);
		}
	}
}

declare module org {
	export module otwebrtc {
		export class MediaCodecWrapper {
			public static class: java.lang.Class<org.otwebrtc.MediaCodecWrapper>;
			/**
			 * Constructs a new instance of the org.otwebrtc.MediaCodecWrapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				configure(param0: globalAndroid.media.MediaFormat, param1: globalAndroid.view.Surface, param2: globalAndroid.media.MediaCrypto, param3: number): void;
				start(): void;
				flush(): void;
				stop(): void;
				release(): void;
				dequeueInputBuffer(param0: number): number;
				queueInputBuffer(param0: number, param1: number, param2: number, param3: number, param4: number): void;
				dequeueOutputBuffer(param0: globalAndroid.media.MediaCodec.BufferInfo, param1: number): number;
				releaseOutputBuffer(param0: number, param1: boolean): void;
				getOutputFormat(): globalAndroid.media.MediaFormat;
				getInputBuffers(): native.Array<java.nio.ByteBuffer>;
				getOutputBuffers(): native.Array<java.nio.ByteBuffer>;
				createInputSurface(): globalAndroid.view.Surface;
				setParameters(param0: globalAndroid.os.Bundle): void;
			});
			public constructor();
			public flush(): void;
			public getInputBuffers(): native.Array<java.nio.ByteBuffer>;
			public dequeueOutputBuffer(param0: globalAndroid.media.MediaCodec.BufferInfo, param1: number): number;
			public configure(param0: globalAndroid.media.MediaFormat, param1: globalAndroid.view.Surface, param2: globalAndroid.media.MediaCrypto, param3: number): void;
			public dequeueInputBuffer(param0: number): number;
			public getOutputBuffers(): native.Array<java.nio.ByteBuffer>;
			public stop(): void;
			public releaseOutputBuffer(param0: number, param1: boolean): void;
			public setParameters(param0: globalAndroid.os.Bundle): void;
			public queueInputBuffer(param0: number, param1: number, param2: number, param3: number, param4: number): void;
			public createInputSurface(): globalAndroid.view.Surface;
			public start(): void;
			public release(): void;
			public getOutputFormat(): globalAndroid.media.MediaFormat;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class MediaCodecWrapperFactory {
			public static class: java.lang.Class<org.otwebrtc.MediaCodecWrapperFactory>;
			/**
			 * Constructs a new instance of the org.otwebrtc.MediaCodecWrapperFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createByCodecName(param0: string): org.otwebrtc.MediaCodecWrapper;
			});
			public constructor();
			public createByCodecName(param0: string): org.otwebrtc.MediaCodecWrapper;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class MediaCodecWrapperFactoryImpl extends org.otwebrtc.MediaCodecWrapperFactory {
			public static class: java.lang.Class<org.otwebrtc.MediaCodecWrapperFactoryImpl>;
			public createByCodecName(param0: string): org.otwebrtc.MediaCodecWrapper;
		}
		export module MediaCodecWrapperFactoryImpl {
			export class MediaCodecWrapperImpl extends org.otwebrtc.MediaCodecWrapper {
				public static class: java.lang.Class<org.otwebrtc.MediaCodecWrapperFactoryImpl.MediaCodecWrapperImpl>;
				public releaseOutputBuffer(param0: number, param1: boolean): void;
				public release(): void;
				public getOutputBuffers(): native.Array<java.nio.ByteBuffer>;
				public createInputSurface(): globalAndroid.view.Surface;
				public setParameters(param0: globalAndroid.os.Bundle): void;
				public constructor(param0: globalAndroid.media.MediaCodec);
				public queueInputBuffer(param0: number, param1: number, param2: number, param3: number, param4: number): void;
				public flush(): void;
				public configure(param0: globalAndroid.media.MediaFormat, param1: globalAndroid.view.Surface, param2: globalAndroid.media.MediaCrypto, param3: number): void;
				public stop(): void;
				public dequeueInputBuffer(param0: number): number;
				public getOutputFormat(): globalAndroid.media.MediaFormat;
				public start(): void;
				public dequeueOutputBuffer(param0: globalAndroid.media.MediaCodec.BufferInfo, param1: number): number;
				public getInputBuffers(): native.Array<java.nio.ByteBuffer>;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class MediaConstraints {
			public static class: java.lang.Class<org.otwebrtc.MediaConstraints>;
			public mandatory: java.util.List<org.otwebrtc.MediaConstraints.KeyValuePair>;
			public optional: java.util.List<org.otwebrtc.MediaConstraints.KeyValuePair>;
			public toString(): string;
			public constructor();
		}
		export module MediaConstraints {
			export class KeyValuePair {
				public static class: java.lang.Class<org.otwebrtc.MediaConstraints.KeyValuePair>;
				public hashCode(): number;
				public getValue(): string;
				public equals(param0: any): boolean;
				public toString(): string;
				public constructor(param0: string, param1: string);
				public getKey(): string;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class MediaSource {
			public static class: java.lang.Class<org.otwebrtc.MediaSource>;
			public constructor(param0: number);
			public dispose(): void;
			public getNativeMediaSource(): number;
			public state(): org.otwebrtc.MediaSource.State;
		}
		export module MediaSource {
			export class State {
				public static class: java.lang.Class<org.otwebrtc.MediaSource.State>;
				public static INITIALIZING: org.otwebrtc.MediaSource.State;
				public static LIVE: org.otwebrtc.MediaSource.State;
				public static ENDED: org.otwebrtc.MediaSource.State;
				public static MUTED: org.otwebrtc.MediaSource.State;
				public static values(): native.Array<org.otwebrtc.MediaSource.State>;
				public static valueOf(param0: string): org.otwebrtc.MediaSource.State;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class MediaStream {
			public static class: java.lang.Class<org.otwebrtc.MediaStream>;
			public audioTracks: java.util.List<org.otwebrtc.AudioTrack>;
			public videoTracks: java.util.List<org.otwebrtc.VideoTrack>;
			public preservedVideoTracks: java.util.List<org.otwebrtc.VideoTrack>;
			public getId(): string;
			public addPreservedTrack(param0: org.otwebrtc.VideoTrack): boolean;
			public toString(): string;
			public addTrack(param0: org.otwebrtc.AudioTrack): boolean;
			public removeTrack(param0: org.otwebrtc.AudioTrack): boolean;
			public addTrack(param0: org.otwebrtc.VideoTrack): boolean;
			public constructor(param0: number);
			public dispose(): void;
			public removeTrack(param0: org.otwebrtc.VideoTrack): boolean;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class MediaStreamTrack {
			public static class: java.lang.Class<org.otwebrtc.MediaStreamTrack>;
			public static AUDIO_TRACK_KIND: string;
			public static VIDEO_TRACK_KIND: string;
			public setEnabled(param0: boolean): boolean;
			public enabled(): boolean;
			public constructor(param0: number);
			public kind(): string;
			public dispose(): void;
			public state(): org.otwebrtc.MediaStreamTrack.State;
			public id(): string;
		}
		export module MediaStreamTrack {
			export class MediaType {
				public static class: java.lang.Class<org.otwebrtc.MediaStreamTrack.MediaType>;
				public static MEDIA_TYPE_AUDIO: org.otwebrtc.MediaStreamTrack.MediaType;
				public static MEDIA_TYPE_VIDEO: org.otwebrtc.MediaStreamTrack.MediaType;
				public static valueOf(param0: string): org.otwebrtc.MediaStreamTrack.MediaType;
				public static values(): native.Array<org.otwebrtc.MediaStreamTrack.MediaType>;
			}
			export class State {
				public static class: java.lang.Class<org.otwebrtc.MediaStreamTrack.State>;
				public static LIVE: org.otwebrtc.MediaStreamTrack.State;
				public static ENDED: org.otwebrtc.MediaStreamTrack.State;
				public static values(): native.Array<org.otwebrtc.MediaStreamTrack.State>;
				public static valueOf(param0: string): org.otwebrtc.MediaStreamTrack.State;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class MediaTransportFactoryFactory {
			public static class: java.lang.Class<org.otwebrtc.MediaTransportFactoryFactory>;
			/**
			 * Constructs a new instance of the org.otwebrtc.MediaTransportFactoryFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createNativeMediaTransportFactory(): number;
			});
			public constructor();
			public createNativeMediaTransportFactory(): number;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class Metrics {
			public static class: java.lang.Class<org.otwebrtc.Metrics>;
			public map: java.util.Map<string,org.otwebrtc.Metrics.HistogramInfo>;
			public static getAndReset(): org.otwebrtc.Metrics;
			public static enable(): void;
		}
		export module Metrics {
			export class HistogramInfo {
				public static class: java.lang.Class<org.otwebrtc.Metrics.HistogramInfo>;
				public min: number;
				public max: number;
				public bucketCount: number;
				public samples: java.util.Map<java.lang.Integer,java.lang.Integer>;
				public constructor(param0: number, param1: number, param2: number);
				public addSample(param0: number, param1: number): void;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class NV12Buffer extends org.otwebrtc.VideoFrame.Buffer {
			public static class: java.lang.Class<org.otwebrtc.NV12Buffer>;
			public getHeight(): number;
			public retain(): void;
			public cropAndScale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): org.otwebrtc.VideoFrame.Buffer;
			public getWidth(): number;
			public toI420(): org.otwebrtc.VideoFrame.I420Buffer;
			public constructor(param0: number, param1: number, param2: number, param3: number, param4: java.nio.ByteBuffer, param5: java.lang.Runnable);
			public release(): void;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class NV21Buffer extends org.otwebrtc.VideoFrame.Buffer {
			public static class: java.lang.Class<org.otwebrtc.NV21Buffer>;
			public constructor(param0: native.Array<number>, param1: number, param2: number, param3: java.lang.Runnable);
			public getHeight(): number;
			public retain(): void;
			public cropAndScale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): org.otwebrtc.VideoFrame.Buffer;
			public getWidth(): number;
			public toI420(): org.otwebrtc.VideoFrame.I420Buffer;
			public release(): void;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class NativeAndroidVideoTrackSource {
			public static class: java.lang.Class<org.otwebrtc.NativeAndroidVideoTrackSource>;
			public setState(param0: boolean): void;
			public adaptOutputFormat(param0: org.otwebrtc.VideoSource.AspectRatio, param1: java.lang.Integer, param2: org.otwebrtc.VideoSource.AspectRatio, param3: java.lang.Integer, param4: java.lang.Integer): void;
			public constructor(param0: number);
			public onFrameCaptured(param0: org.otwebrtc.VideoFrame): void;
			public setIsScreencast(param0: boolean): void;
			public adaptFrame(param0: org.otwebrtc.VideoFrame): org.otwebrtc.VideoProcessor.FrameAdaptationParameters;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class NativeCapturerObserver extends org.otwebrtc.CapturerObserver {
			public static class: java.lang.Class<org.otwebrtc.NativeCapturerObserver>;
			public constructor(param0: number);
			public onFrameCaptured(param0: org.otwebrtc.VideoFrame): void;
			public onCapturerStopped(): void;
			public onCapturerStarted(param0: boolean): void;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class NativeLibrary {
			public static class: java.lang.Class<org.otwebrtc.NativeLibrary>;
		}
		export module NativeLibrary {
			export class DefaultLoader extends org.otwebrtc.NativeLibraryLoader {
				public static class: java.lang.Class<org.otwebrtc.NativeLibrary.DefaultLoader>;
				public load(param0: string): boolean;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class NativeLibraryLoader {
			public static class: java.lang.Class<org.otwebrtc.NativeLibraryLoader>;
			/**
			 * Constructs a new instance of the org.otwebrtc.NativeLibraryLoader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				load(param0: string): boolean;
			});
			public constructor();
			public load(param0: string): boolean;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class NativePeerConnectionFactory {
			public static class: java.lang.Class<org.otwebrtc.NativePeerConnectionFactory>;
			/**
			 * Constructs a new instance of the org.otwebrtc.NativePeerConnectionFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createNativePeerConnection(): number;
			});
			public constructor();
			public createNativePeerConnection(): number;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class NetEqFactoryFactory {
			public static class: java.lang.Class<org.otwebrtc.NetEqFactoryFactory>;
			/**
			 * Constructs a new instance of the org.otwebrtc.NetEqFactoryFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createNativeNetEqFactory(): number;
			});
			public constructor();
			public createNativeNetEqFactory(): number;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class NetworkControllerFactoryFactory {
			public static class: java.lang.Class<org.otwebrtc.NetworkControllerFactoryFactory>;
			/**
			 * Constructs a new instance of the org.otwebrtc.NetworkControllerFactoryFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createNativeNetworkControllerFactory(): number;
			});
			public constructor();
			public createNativeNetworkControllerFactory(): number;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class NetworkMonitor {
			public static class: java.lang.Class<org.otwebrtc.NetworkMonitor>;
			public startMonitoring(): void;
			public stopMonitoring(): void;
			public static removeNetworkObserver(param0: org.otwebrtc.NetworkMonitor.NetworkObserver): void;
			public static addNetworkObserver(param0: org.otwebrtc.NetworkMonitor.NetworkObserver): void;
			public static init(param0: globalAndroid.content.Context): void;
			public static isOnline(): boolean;
			public startMonitoring(param0: globalAndroid.content.Context): void;
			public addObserver(param0: org.otwebrtc.NetworkMonitor.NetworkObserver): void;
			public static getInstance(): org.otwebrtc.NetworkMonitor;
			public removeObserver(param0: org.otwebrtc.NetworkMonitor.NetworkObserver): void;
		}
		export module NetworkMonitor {
			export class InstanceHolder {
				public static class: java.lang.Class<org.otwebrtc.NetworkMonitor.InstanceHolder>;
			}
			export class NetworkObserver {
				public static class: java.lang.Class<org.otwebrtc.NetworkMonitor.NetworkObserver>;
				/**
				 * Constructs a new instance of the org.otwebrtc.NetworkMonitor$NetworkObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onConnectionTypeChanged(param0: org.otwebrtc.NetworkMonitorAutoDetect.ConnectionType): void;
				});
				public constructor();
				public onConnectionTypeChanged(param0: org.otwebrtc.NetworkMonitorAutoDetect.ConnectionType): void;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class NetworkMonitorAutoDetect {
			public static class: java.lang.Class<org.otwebrtc.NetworkMonitorAutoDetect>;
			public getDefaultNetId(): number;
			public static getConnectionType(param0: org.otwebrtc.NetworkMonitorAutoDetect.NetworkState): org.otwebrtc.NetworkMonitorAutoDetect.ConnectionType;
			public constructor(param0: org.otwebrtc.NetworkMonitorAutoDetect.Observer, param1: globalAndroid.content.Context);
			public destroy(): void;
			public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			public supportNetworkCallback(): boolean;
			public getCurrentNetworkState(): org.otwebrtc.NetworkMonitorAutoDetect.NetworkState;
		}
		export module NetworkMonitorAutoDetect {
			export class ConnectionType {
				public static class: java.lang.Class<org.otwebrtc.NetworkMonitorAutoDetect.ConnectionType>;
				public static CONNECTION_UNKNOWN: org.otwebrtc.NetworkMonitorAutoDetect.ConnectionType;
				public static CONNECTION_ETHERNET: org.otwebrtc.NetworkMonitorAutoDetect.ConnectionType;
				public static CONNECTION_WIFI: org.otwebrtc.NetworkMonitorAutoDetect.ConnectionType;
				public static CONNECTION_5G: org.otwebrtc.NetworkMonitorAutoDetect.ConnectionType;
				public static CONNECTION_4G: org.otwebrtc.NetworkMonitorAutoDetect.ConnectionType;
				public static CONNECTION_3G: org.otwebrtc.NetworkMonitorAutoDetect.ConnectionType;
				public static CONNECTION_2G: org.otwebrtc.NetworkMonitorAutoDetect.ConnectionType;
				public static CONNECTION_UNKNOWN_CELLULAR: org.otwebrtc.NetworkMonitorAutoDetect.ConnectionType;
				public static CONNECTION_BLUETOOTH: org.otwebrtc.NetworkMonitorAutoDetect.ConnectionType;
				public static CONNECTION_VPN: org.otwebrtc.NetworkMonitorAutoDetect.ConnectionType;
				public static CONNECTION_NONE: org.otwebrtc.NetworkMonitorAutoDetect.ConnectionType;
				public static values(): native.Array<org.otwebrtc.NetworkMonitorAutoDetect.ConnectionType>;
				public static valueOf(param0: string): org.otwebrtc.NetworkMonitorAutoDetect.ConnectionType;
			}
			export class ConnectivityManagerDelegate {
				public static class: java.lang.Class<org.otwebrtc.NetworkMonitorAutoDetect.ConnectivityManagerDelegate>;
				public registerNetworkCallback(param0: globalAndroid.net.ConnectivityManager.NetworkCallback): void;
				public requestMobileNetwork(param0: globalAndroid.net.ConnectivityManager.NetworkCallback): void;
				public releaseCallback(param0: globalAndroid.net.ConnectivityManager.NetworkCallback): void;
				public supportNetworkCallback(): boolean;
			}
			export class IPAddress {
				public static class: java.lang.Class<org.otwebrtc.NetworkMonitorAutoDetect.IPAddress>;
				public address: native.Array<number>;
				public constructor(param0: native.Array<number>);
			}
			export class NetworkInformation {
				public static class: java.lang.Class<org.otwebrtc.NetworkMonitorAutoDetect.NetworkInformation>;
				public name: string;
				public type: org.otwebrtc.NetworkMonitorAutoDetect.ConnectionType;
				public underlyingTypeForVpn: org.otwebrtc.NetworkMonitorAutoDetect.ConnectionType;
				public handle: number;
				public ipAddresses: native.Array<org.otwebrtc.NetworkMonitorAutoDetect.IPAddress>;
				public constructor(param0: string, param1: org.otwebrtc.NetworkMonitorAutoDetect.ConnectionType, param2: org.otwebrtc.NetworkMonitorAutoDetect.ConnectionType, param3: number, param4: native.Array<org.otwebrtc.NetworkMonitorAutoDetect.IPAddress>);
			}
			export class NetworkState {
				public static class: java.lang.Class<org.otwebrtc.NetworkMonitorAutoDetect.NetworkState>;
				public isConnected(): boolean;
				public getNetworkSubType(): number;
				public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number);
				public getNetworkType(): number;
				public getUnderlyingNetworkTypeForVpn(): number;
				public getUnderlyingNetworkSubtypeForVpn(): number;
			}
			export class Observer {
				public static class: java.lang.Class<org.otwebrtc.NetworkMonitorAutoDetect.Observer>;
				/**
				 * Constructs a new instance of the org.otwebrtc.NetworkMonitorAutoDetect$Observer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onConnectionTypeChanged(param0: org.otwebrtc.NetworkMonitorAutoDetect.ConnectionType): void;
					onNetworkConnect(param0: org.otwebrtc.NetworkMonitorAutoDetect.NetworkInformation): void;
					onNetworkDisconnect(param0: number): void;
				});
				public constructor();
				public onNetworkDisconnect(param0: number): void;
				public onConnectionTypeChanged(param0: org.otwebrtc.NetworkMonitorAutoDetect.ConnectionType): void;
				public onNetworkConnect(param0: org.otwebrtc.NetworkMonitorAutoDetect.NetworkInformation): void;
			}
			export class SimpleNetworkCallback {
				public static class: java.lang.Class<org.otwebrtc.NetworkMonitorAutoDetect.SimpleNetworkCallback>;
				public onLost(param0: globalAndroid.net.Network): void;
				public onLosing(param0: globalAndroid.net.Network, param1: number): void;
				public onAvailable(param0: globalAndroid.net.Network): void;
				public onLinkPropertiesChanged(param0: globalAndroid.net.Network, param1: globalAndroid.net.LinkProperties): void;
				public onCapabilitiesChanged(param0: globalAndroid.net.Network, param1: globalAndroid.net.NetworkCapabilities): void;
			}
			export class WifiDirectManagerDelegate {
				public static class: java.lang.Class<org.otwebrtc.NetworkMonitorAutoDetect.WifiDirectManagerDelegate>;
				public release(): void;
				public getActiveNetworkList(): java.util.List<org.otwebrtc.NetworkMonitorAutoDetect.NetworkInformation>;
				public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			}
			export class WifiManagerDelegate {
				public static class: java.lang.Class<org.otwebrtc.NetworkMonitorAutoDetect.WifiManagerDelegate>;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class NetworkStatePredictorFactoryFactory {
			public static class: java.lang.Class<org.otwebrtc.NetworkStatePredictorFactoryFactory>;
			/**
			 * Constructs a new instance of the org.otwebrtc.NetworkStatePredictorFactoryFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createNativeNetworkStatePredictorFactory(): number;
			});
			public constructor();
			public createNativeNetworkStatePredictorFactory(): number;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class PeerConnection {
			public static class: java.lang.Class<org.otwebrtc.PeerConnection>;
			public createDataChannel(param0: string, param1: org.otwebrtc.DataChannel.Init): org.otwebrtc.DataChannel;
			public removeTrack(param0: org.otwebrtc.RtpSender): boolean;
			public getSenders(): java.util.List<org.otwebrtc.RtpSender>;
			public setBitrate(param0: java.lang.Integer, param1: java.lang.Integer, param2: java.lang.Integer): boolean;
			public getLocalDescription(): org.otwebrtc.SessionDescription;
			public setAudioRecording(param0: boolean): void;
			public createOffer(param0: org.otwebrtc.SdpObserver, param1: org.otwebrtc.MediaConstraints): void;
			public setLocalDescription(param0: org.otwebrtc.SdpObserver, param1: org.otwebrtc.SessionDescription): void;
			public setConfiguration(param0: org.otwebrtc.PeerConnection.RTCConfiguration): boolean;
			public createAnswer(param0: org.otwebrtc.SdpObserver, param1: org.otwebrtc.MediaConstraints): void;
			public createSender(param0: string, param1: string): org.otwebrtc.RtpSender;
			public getNativePeerConnection(): number;
			public addStream(param0: org.otwebrtc.MediaStream): boolean;
			public dispose(): void;
			public addTransceiver(param0: org.otwebrtc.MediaStreamTrack): org.otwebrtc.RtpTransceiver;
			public close(): void;
			public startRtcEventLog(param0: number, param1: number): boolean;
			public stopRtcEventLog(): void;
			public removeIceCandidates(param0: native.Array<org.otwebrtc.IceCandidate>): boolean;
			public getStats(param0: org.otwebrtc.StatsObserver, param1: org.otwebrtc.MediaStreamTrack): boolean;
			public getStats(param0: org.otwebrtc.RTCStatsCollectorCallback): void;
			public addIceCandidate(param0: org.otwebrtc.IceCandidate): boolean;
			public addTransceiver(param0: org.otwebrtc.MediaStreamTrack.MediaType): org.otwebrtc.RtpTransceiver;
			public static createNativePeerConnectionObserver(param0: org.otwebrtc.PeerConnection.Observer): number;
			public getReceivers(): java.util.List<org.otwebrtc.RtpReceiver>;
			public getRemoteDescription(): org.otwebrtc.SessionDescription;
			public setRemoteDescription(param0: org.otwebrtc.SdpObserver, param1: org.otwebrtc.SessionDescription): void;
			public setAudioPlayout(param0: boolean): void;
			public removeStream(param0: org.otwebrtc.MediaStream): void;
			public getTransceivers(): java.util.List<org.otwebrtc.RtpTransceiver>;
			public addTrack(param0: org.otwebrtc.MediaStreamTrack): org.otwebrtc.RtpSender;
			public signalingState(): org.otwebrtc.PeerConnection.SignalingState;
			public iceGatheringState(): org.otwebrtc.PeerConnection.IceGatheringState;
			public constructor(param0: org.otwebrtc.NativePeerConnectionFactory);
			public addTrack(param0: org.otwebrtc.MediaStreamTrack, param1: java.util.List<string>): org.otwebrtc.RtpSender;
			public connectionState(): org.otwebrtc.PeerConnection.PeerConnectionState;
			public addTransceiver(param0: org.otwebrtc.MediaStreamTrack.MediaType, param1: org.otwebrtc.RtpTransceiver.RtpTransceiverInit): org.otwebrtc.RtpTransceiver;
			public iceConnectionState(): org.otwebrtc.PeerConnection.IceConnectionState;
			public getCertificate(): org.otwebrtc.RtcCertificatePem;
			public addTransceiver(param0: org.otwebrtc.MediaStreamTrack, param1: org.otwebrtc.RtpTransceiver.RtpTransceiverInit): org.otwebrtc.RtpTransceiver;
		}
		export module PeerConnection {
			export class AdapterType {
				public static class: java.lang.Class<org.otwebrtc.PeerConnection.AdapterType>;
				public static UNKNOWN: org.otwebrtc.PeerConnection.AdapterType;
				public static ETHERNET: org.otwebrtc.PeerConnection.AdapterType;
				public static WIFI: org.otwebrtc.PeerConnection.AdapterType;
				public static CELLULAR: org.otwebrtc.PeerConnection.AdapterType;
				public static VPN: org.otwebrtc.PeerConnection.AdapterType;
				public static LOOPBACK: org.otwebrtc.PeerConnection.AdapterType;
				public static ADAPTER_TYPE_ANY: org.otwebrtc.PeerConnection.AdapterType;
				public static CELLULAR_2G: org.otwebrtc.PeerConnection.AdapterType;
				public static CELLULAR_3G: org.otwebrtc.PeerConnection.AdapterType;
				public static CELLULAR_4G: org.otwebrtc.PeerConnection.AdapterType;
				public static CELLULAR_5G: org.otwebrtc.PeerConnection.AdapterType;
				public bitMask: java.lang.Integer;
				public static values(): native.Array<org.otwebrtc.PeerConnection.AdapterType>;
				public static valueOf(param0: string): org.otwebrtc.PeerConnection.AdapterType;
			}
			export class BundlePolicy {
				public static class: java.lang.Class<org.otwebrtc.PeerConnection.BundlePolicy>;
				public static BALANCED: org.otwebrtc.PeerConnection.BundlePolicy;
				public static MAXBUNDLE: org.otwebrtc.PeerConnection.BundlePolicy;
				public static MAXCOMPAT: org.otwebrtc.PeerConnection.BundlePolicy;
				public static valueOf(param0: string): org.otwebrtc.PeerConnection.BundlePolicy;
				public static values(): native.Array<org.otwebrtc.PeerConnection.BundlePolicy>;
			}
			export class CandidateNetworkPolicy {
				public static class: java.lang.Class<org.otwebrtc.PeerConnection.CandidateNetworkPolicy>;
				public static ALL: org.otwebrtc.PeerConnection.CandidateNetworkPolicy;
				public static LOW_COST: org.otwebrtc.PeerConnection.CandidateNetworkPolicy;
				public static values(): native.Array<org.otwebrtc.PeerConnection.CandidateNetworkPolicy>;
				public static valueOf(param0: string): org.otwebrtc.PeerConnection.CandidateNetworkPolicy;
			}
			export class ContinualGatheringPolicy {
				public static class: java.lang.Class<org.otwebrtc.PeerConnection.ContinualGatheringPolicy>;
				public static GATHER_ONCE: org.otwebrtc.PeerConnection.ContinualGatheringPolicy;
				public static GATHER_CONTINUALLY: org.otwebrtc.PeerConnection.ContinualGatheringPolicy;
				public static valueOf(param0: string): org.otwebrtc.PeerConnection.ContinualGatheringPolicy;
				public static values(): native.Array<org.otwebrtc.PeerConnection.ContinualGatheringPolicy>;
			}
			export class IceConnectionState {
				public static class: java.lang.Class<org.otwebrtc.PeerConnection.IceConnectionState>;
				public static NEW: org.otwebrtc.PeerConnection.IceConnectionState;
				public static CHECKING: org.otwebrtc.PeerConnection.IceConnectionState;
				public static CONNECTED: org.otwebrtc.PeerConnection.IceConnectionState;
				public static COMPLETED: org.otwebrtc.PeerConnection.IceConnectionState;
				public static FAILED: org.otwebrtc.PeerConnection.IceConnectionState;
				public static DISCONNECTED: org.otwebrtc.PeerConnection.IceConnectionState;
				public static CLOSED: org.otwebrtc.PeerConnection.IceConnectionState;
				public static values(): native.Array<org.otwebrtc.PeerConnection.IceConnectionState>;
				public static valueOf(param0: string): org.otwebrtc.PeerConnection.IceConnectionState;
			}
			export class IceGatheringState {
				public static class: java.lang.Class<org.otwebrtc.PeerConnection.IceGatheringState>;
				public static NEW: org.otwebrtc.PeerConnection.IceGatheringState;
				public static GATHERING: org.otwebrtc.PeerConnection.IceGatheringState;
				public static COMPLETE: org.otwebrtc.PeerConnection.IceGatheringState;
				public static values(): native.Array<org.otwebrtc.PeerConnection.IceGatheringState>;
				public static valueOf(param0: string): org.otwebrtc.PeerConnection.IceGatheringState;
			}
			export class IceServer {
				public static class: java.lang.Class<org.otwebrtc.PeerConnection.IceServer>;
				public uri: string;
				public urls: java.util.List<string>;
				public username: string;
				public password: string;
				public tlsCertPolicy: org.otwebrtc.PeerConnection.TlsCertPolicy;
				public hostname: string;
				public tlsAlpnProtocols: java.util.List<string>;
				public tlsEllipticCurves: java.util.List<string>;
				public static builder(param0: java.util.List<string>): org.otwebrtc.PeerConnection.IceServer.Builder;
				public constructor(param0: string, param1: string, param2: string, param3: org.otwebrtc.PeerConnection.TlsCertPolicy);
				public constructor(param0: string, param1: string, param2: string, param3: org.otwebrtc.PeerConnection.TlsCertPolicy, param4: string);
				public hashCode(): number;
				public static builder(param0: string): org.otwebrtc.PeerConnection.IceServer.Builder;
				public constructor(param0: string, param1: string, param2: string);
				public equals(param0: any): boolean;
				public toString(): string;
				public constructor(param0: string);
			}
			export module IceServer {
				export class Builder {
					public static class: java.lang.Class<org.otwebrtc.PeerConnection.IceServer.Builder>;
					public setUsername(param0: string): org.otwebrtc.PeerConnection.IceServer.Builder;
					public setHostname(param0: string): org.otwebrtc.PeerConnection.IceServer.Builder;
					public setTlsEllipticCurves(param0: java.util.List<string>): org.otwebrtc.PeerConnection.IceServer.Builder;
					public setTlsCertPolicy(param0: org.otwebrtc.PeerConnection.TlsCertPolicy): org.otwebrtc.PeerConnection.IceServer.Builder;
					public setTlsAlpnProtocols(param0: java.util.List<string>): org.otwebrtc.PeerConnection.IceServer.Builder;
					public setPassword(param0: string): org.otwebrtc.PeerConnection.IceServer.Builder;
					public createIceServer(): org.otwebrtc.PeerConnection.IceServer;
				}
			}
			export class IceTransportsType {
				public static class: java.lang.Class<org.otwebrtc.PeerConnection.IceTransportsType>;
				public static NONE: org.otwebrtc.PeerConnection.IceTransportsType;
				public static RELAY: org.otwebrtc.PeerConnection.IceTransportsType;
				public static NOHOST: org.otwebrtc.PeerConnection.IceTransportsType;
				public static ALL: org.otwebrtc.PeerConnection.IceTransportsType;
				public static values(): native.Array<org.otwebrtc.PeerConnection.IceTransportsType>;
				public static valueOf(param0: string): org.otwebrtc.PeerConnection.IceTransportsType;
			}
			export class KeyType {
				public static class: java.lang.Class<org.otwebrtc.PeerConnection.KeyType>;
				public static RSA: org.otwebrtc.PeerConnection.KeyType;
				public static ECDSA: org.otwebrtc.PeerConnection.KeyType;
				public static values(): native.Array<org.otwebrtc.PeerConnection.KeyType>;
				public static valueOf(param0: string): org.otwebrtc.PeerConnection.KeyType;
			}
			export class Observer {
				public static class: java.lang.Class<org.otwebrtc.PeerConnection.Observer>;
				/**
				 * Constructs a new instance of the org.otwebrtc.PeerConnection$Observer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onSignalingChange(param0: org.otwebrtc.PeerConnection.SignalingState): void;
					onIceConnectionChange(param0: org.otwebrtc.PeerConnection.IceConnectionState): void;
					onStandardizedIceConnectionChange(param0: org.otwebrtc.PeerConnection.IceConnectionState): void;
					onConnectionChange(param0: org.otwebrtc.PeerConnection.PeerConnectionState): void;
					onIceConnectionReceivingChange(param0: boolean): void;
					onIceGatheringChange(param0: org.otwebrtc.PeerConnection.IceGatheringState): void;
					onIceCandidate(param0: org.otwebrtc.IceCandidate): void;
					onIceCandidatesRemoved(param0: native.Array<org.otwebrtc.IceCandidate>): void;
					onSelectedCandidatePairChanged(param0: org.otwebrtc.CandidatePairChangeEvent): void;
					onAddStream(param0: org.otwebrtc.MediaStream): void;
					onRemoveStream(param0: org.otwebrtc.MediaStream): void;
					onDataChannel(param0: org.otwebrtc.DataChannel): void;
					onRenegotiationNeeded(): void;
					onAddTrack(param0: org.otwebrtc.RtpReceiver, param1: native.Array<org.otwebrtc.MediaStream>): void;
					onTrack(param0: org.otwebrtc.RtpTransceiver): void;
				});
				public constructor();
				public onIceConnectionChange(param0: org.otwebrtc.PeerConnection.IceConnectionState): void;
				public onRemoveStream(param0: org.otwebrtc.MediaStream): void;
				public onSignalingChange(param0: org.otwebrtc.PeerConnection.SignalingState): void;
				public onSelectedCandidatePairChanged(param0: org.otwebrtc.CandidatePairChangeEvent): void;
				public onRenegotiationNeeded(): void;
				public onConnectionChange(param0: org.otwebrtc.PeerConnection.PeerConnectionState): void;
				public onDataChannel(param0: org.otwebrtc.DataChannel): void;
				public onIceGatheringChange(param0: org.otwebrtc.PeerConnection.IceGatheringState): void;
				public onIceCandidate(param0: org.otwebrtc.IceCandidate): void;
				public onTrack(param0: org.otwebrtc.RtpTransceiver): void;
				public onAddTrack(param0: org.otwebrtc.RtpReceiver, param1: native.Array<org.otwebrtc.MediaStream>): void;
				public onStandardizedIceConnectionChange(param0: org.otwebrtc.PeerConnection.IceConnectionState): void;
				public onIceCandidatesRemoved(param0: native.Array<org.otwebrtc.IceCandidate>): void;
				public onIceConnectionReceivingChange(param0: boolean): void;
				public onAddStream(param0: org.otwebrtc.MediaStream): void;
			}
			export class PeerConnectionState {
				public static class: java.lang.Class<org.otwebrtc.PeerConnection.PeerConnectionState>;
				public static NEW: org.otwebrtc.PeerConnection.PeerConnectionState;
				public static CONNECTING: org.otwebrtc.PeerConnection.PeerConnectionState;
				public static CONNECTED: org.otwebrtc.PeerConnection.PeerConnectionState;
				public static DISCONNECTED: org.otwebrtc.PeerConnection.PeerConnectionState;
				public static FAILED: org.otwebrtc.PeerConnection.PeerConnectionState;
				public static CLOSED: org.otwebrtc.PeerConnection.PeerConnectionState;
				public static values(): native.Array<org.otwebrtc.PeerConnection.PeerConnectionState>;
				public static valueOf(param0: string): org.otwebrtc.PeerConnection.PeerConnectionState;
			}
			export class PortPrunePolicy {
				public static class: java.lang.Class<org.otwebrtc.PeerConnection.PortPrunePolicy>;
				public static NO_PRUNE: org.otwebrtc.PeerConnection.PortPrunePolicy;
				public static PRUNE_BASED_ON_PRIORITY: org.otwebrtc.PeerConnection.PortPrunePolicy;
				public static KEEP_FIRST_READY: org.otwebrtc.PeerConnection.PortPrunePolicy;
				public static valueOf(param0: string): org.otwebrtc.PeerConnection.PortPrunePolicy;
				public static values(): native.Array<org.otwebrtc.PeerConnection.PortPrunePolicy>;
			}
			export class RTCConfiguration {
				public static class: java.lang.Class<org.otwebrtc.PeerConnection.RTCConfiguration>;
				public iceTransportsType: org.otwebrtc.PeerConnection.IceTransportsType;
				public iceServers: java.util.List<org.otwebrtc.PeerConnection.IceServer>;
				public bundlePolicy: org.otwebrtc.PeerConnection.BundlePolicy;
				public certificate: org.otwebrtc.RtcCertificatePem;
				public rtcpMuxPolicy: org.otwebrtc.PeerConnection.RtcpMuxPolicy;
				public tcpCandidatePolicy: org.otwebrtc.PeerConnection.TcpCandidatePolicy;
				public candidateNetworkPolicy: org.otwebrtc.PeerConnection.CandidateNetworkPolicy;
				public audioJitterBufferMaxPackets: number;
				public audioJitterBufferFastAccelerate: boolean;
				public iceConnectionReceivingTimeout: number;
				public iceBackupCandidatePairPingInterval: number;
				public keyType: org.otwebrtc.PeerConnection.KeyType;
				public continualGatheringPolicy: org.otwebrtc.PeerConnection.ContinualGatheringPolicy;
				public iceCandidatePoolSize: number;
				public pruneTurnPorts: boolean;
				public turnPortPrunePolicy: org.otwebrtc.PeerConnection.PortPrunePolicy;
				public presumeWritableWhenFullyRelayed: boolean;
				public surfaceIceCandidatesOnIceTransportTypeChanged: boolean;
				public iceCheckIntervalStrongConnectivityMs: java.lang.Integer;
				public iceCheckIntervalWeakConnectivityMs: java.lang.Integer;
				public iceCheckMinInterval: java.lang.Integer;
				public iceUnwritableTimeMs: java.lang.Integer;
				public iceUnwritableMinChecks: java.lang.Integer;
				public stunCandidateKeepaliveIntervalMs: java.lang.Integer;
				public disableIPv6OnWifi: boolean;
				public maxIPv6Networks: number;
				public disableIpv6: boolean;
				public enableDscp: boolean;
				public enableCpuOveruseDetection: boolean;
				public enableRtpDataChannel: boolean;
				public suspendBelowMinBitrate: boolean;
				public screencastMinBitrate: java.lang.Integer;
				public combinedAudioVideoBwe: java.lang.Boolean;
				public enableDtlsSrtp: java.lang.Boolean;
				public networkPreference: org.otwebrtc.PeerConnection.AdapterType;
				public sdpSemantics: org.otwebrtc.PeerConnection.SdpSemantics;
				public turnCustomizer: org.otwebrtc.TurnCustomizer;
				public activeResetSrtpParams: boolean;
				public allowCodecSwitching: java.lang.Boolean;
				public useMediaTransport: boolean;
				public useMediaTransportForDataChannels: boolean;
				public cryptoOptions: org.otwebrtc.CryptoOptions;
				public turnLoggingId: string;
				public constructor(param0: java.util.List<org.otwebrtc.PeerConnection.IceServer>);
			}
			export class RtcpMuxPolicy {
				public static class: java.lang.Class<org.otwebrtc.PeerConnection.RtcpMuxPolicy>;
				public static NEGOTIATE: org.otwebrtc.PeerConnection.RtcpMuxPolicy;
				public static REQUIRE: org.otwebrtc.PeerConnection.RtcpMuxPolicy;
				public static values(): native.Array<org.otwebrtc.PeerConnection.RtcpMuxPolicy>;
				public static valueOf(param0: string): org.otwebrtc.PeerConnection.RtcpMuxPolicy;
			}
			export class SdpSemantics {
				public static class: java.lang.Class<org.otwebrtc.PeerConnection.SdpSemantics>;
				public static PLAN_B: org.otwebrtc.PeerConnection.SdpSemantics;
				public static UNIFIED_PLAN: org.otwebrtc.PeerConnection.SdpSemantics;
				public static values(): native.Array<org.otwebrtc.PeerConnection.SdpSemantics>;
				public static valueOf(param0: string): org.otwebrtc.PeerConnection.SdpSemantics;
			}
			export class SignalingState {
				public static class: java.lang.Class<org.otwebrtc.PeerConnection.SignalingState>;
				public static STABLE: org.otwebrtc.PeerConnection.SignalingState;
				public static HAVE_LOCAL_OFFER: org.otwebrtc.PeerConnection.SignalingState;
				public static HAVE_LOCAL_PRANSWER: org.otwebrtc.PeerConnection.SignalingState;
				public static HAVE_REMOTE_OFFER: org.otwebrtc.PeerConnection.SignalingState;
				public static HAVE_REMOTE_PRANSWER: org.otwebrtc.PeerConnection.SignalingState;
				public static CLOSED: org.otwebrtc.PeerConnection.SignalingState;
				public static valueOf(param0: string): org.otwebrtc.PeerConnection.SignalingState;
				public static values(): native.Array<org.otwebrtc.PeerConnection.SignalingState>;
			}
			export class TcpCandidatePolicy {
				public static class: java.lang.Class<org.otwebrtc.PeerConnection.TcpCandidatePolicy>;
				public static ENABLED: org.otwebrtc.PeerConnection.TcpCandidatePolicy;
				public static DISABLED: org.otwebrtc.PeerConnection.TcpCandidatePolicy;
				public static valueOf(param0: string): org.otwebrtc.PeerConnection.TcpCandidatePolicy;
				public static values(): native.Array<org.otwebrtc.PeerConnection.TcpCandidatePolicy>;
			}
			export class TlsCertPolicy {
				public static class: java.lang.Class<org.otwebrtc.PeerConnection.TlsCertPolicy>;
				public static TLS_CERT_POLICY_SECURE: org.otwebrtc.PeerConnection.TlsCertPolicy;
				public static TLS_CERT_POLICY_INSECURE_NO_CHECK: org.otwebrtc.PeerConnection.TlsCertPolicy;
				public static values(): native.Array<org.otwebrtc.PeerConnection.TlsCertPolicy>;
				public static valueOf(param0: string): org.otwebrtc.PeerConnection.TlsCertPolicy;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class PeerConnectionDependencies {
			public static class: java.lang.Class<org.otwebrtc.PeerConnectionDependencies>;
			public static builder(param0: org.otwebrtc.PeerConnection.Observer): org.otwebrtc.PeerConnectionDependencies.Builder;
		}
		export module PeerConnectionDependencies {
			export class Builder {
				public static class: java.lang.Class<org.otwebrtc.PeerConnectionDependencies.Builder>;
				public createPeerConnectionDependencies(): org.otwebrtc.PeerConnectionDependencies;
				public setSSLCertificateVerifier(param0: org.otwebrtc.SSLCertificateVerifier): org.otwebrtc.PeerConnectionDependencies.Builder;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class PeerConnectionFactory {
			public static class: java.lang.Class<org.otwebrtc.PeerConnectionFactory>;
			public static TRIAL_ENABLED: string;
			public static VIDEO_FRAME_EMIT_TRIAL: string;
			public createAudioTrack(param0: string, param1: org.otwebrtc.AudioSource): org.otwebrtc.AudioTrack;
			public printInternalStackTraces(param0: boolean): void;
			public createLocalMediaStream(param0: string): org.otwebrtc.MediaStream;
			public createPeerConnection(param0: java.util.List<org.otwebrtc.PeerConnection.IceServer>, param1: org.otwebrtc.MediaConstraints, param2: org.otwebrtc.PeerConnection.Observer): org.otwebrtc.PeerConnection;
			public createVideoSource(param0: boolean, param1: boolean): org.otwebrtc.VideoSource;
			public static builder(): org.otwebrtc.PeerConnectionFactory.Builder;
			public static printStackTraces(): void;
			public createVideoTrack(param0: string, param1: org.otwebrtc.VideoSource): org.otwebrtc.VideoTrack;
			public static initializeFieldTrials(param0: string): void;
			public createPeerConnection(param0: org.otwebrtc.PeerConnection.RTCConfiguration, param1: org.otwebrtc.PeerConnectionDependencies): org.otwebrtc.PeerConnection;
			public dispose(): void;
			public static startInternalTracingCapture(param0: string): boolean;
			public createVideoSource(param0: boolean): org.otwebrtc.VideoSource;
			public createAudioSource(param0: org.otwebrtc.MediaConstraints): org.otwebrtc.AudioSource;
			public createPeerConnection(param0: org.otwebrtc.PeerConnection.RTCConfiguration, param1: org.otwebrtc.PeerConnection.Observer): org.otwebrtc.PeerConnection;
			public static stopInternalTracingCapture(): void;
			public getNativePeerConnectionFactory(): number;
			public static initialize(param0: org.otwebrtc.PeerConnectionFactory.InitializationOptions): void;
			public startAecDump(param0: number, param1: number): boolean;
			public createPeerConnection(param0: org.otwebrtc.PeerConnection.RTCConfiguration, param1: org.otwebrtc.MediaConstraints, param2: org.otwebrtc.PeerConnection.Observer): org.otwebrtc.PeerConnection;
			public getNativeOwnedFactoryAndThreads(): number;
			public stopAecDump(): void;
			public createPeerConnection(param0: java.util.List<org.otwebrtc.PeerConnection.IceServer>, param1: org.otwebrtc.PeerConnection.Observer): org.otwebrtc.PeerConnection;
			public static shutdownInternalTracer(): void;
			public static fieldTrialsFindFullName(param0: string): string;
		}
		export module PeerConnectionFactory {
			export class Builder {
				public static class: java.lang.Class<org.otwebrtc.PeerConnectionFactory.Builder>;
				public setFecControllerFactoryFactoryInterface(param0: org.otwebrtc.FecControllerFactoryFactoryInterface): org.otwebrtc.PeerConnectionFactory.Builder;
				public setNetworkStatePredictorFactoryFactory(param0: org.otwebrtc.NetworkStatePredictorFactoryFactory): org.otwebrtc.PeerConnectionFactory.Builder;
				public setNetEqFactoryFactory(param0: org.otwebrtc.NetEqFactoryFactory): org.otwebrtc.PeerConnectionFactory.Builder;
				public setAudioProcessingFactory(param0: org.otwebrtc.AudioProcessingFactory): org.otwebrtc.PeerConnectionFactory.Builder;
				public setAudioEncoderFactoryFactory(param0: org.otwebrtc.AudioEncoderFactoryFactory): org.otwebrtc.PeerConnectionFactory.Builder;
				public setVideoDecoderFactory(param0: org.otwebrtc.VideoDecoderFactory): org.otwebrtc.PeerConnectionFactory.Builder;
				public setMediaTransportFactoryFactory(param0: org.otwebrtc.MediaTransportFactoryFactory): org.otwebrtc.PeerConnectionFactory.Builder;
				public setAudioDeviceModule(param0: org.otwebrtc.audio.AudioDeviceModule): org.otwebrtc.PeerConnectionFactory.Builder;
				public setNetworkControllerFactoryFactory(param0: org.otwebrtc.NetworkControllerFactoryFactory): org.otwebrtc.PeerConnectionFactory.Builder;
				public setVideoEncoderFactory(param0: org.otwebrtc.VideoEncoderFactory): org.otwebrtc.PeerConnectionFactory.Builder;
				public createPeerConnectionFactory(): org.otwebrtc.PeerConnectionFactory;
				public setOptions(param0: org.otwebrtc.PeerConnectionFactory.Options): org.otwebrtc.PeerConnectionFactory.Builder;
				public setAudioDecoderFactoryFactory(param0: org.otwebrtc.AudioDecoderFactoryFactory): org.otwebrtc.PeerConnectionFactory.Builder;
			}
			export class InitializationOptions {
				public static class: java.lang.Class<org.otwebrtc.PeerConnectionFactory.InitializationOptions>;
				public static builder(param0: globalAndroid.content.Context): org.otwebrtc.PeerConnectionFactory.InitializationOptions.Builder;
			}
			export module InitializationOptions {
				export class Builder {
					public static class: java.lang.Class<org.otwebrtc.PeerConnectionFactory.InitializationOptions.Builder>;
					public setFieldTrials(param0: string): org.otwebrtc.PeerConnectionFactory.InitializationOptions.Builder;
					public createInitializationOptions(): org.otwebrtc.PeerConnectionFactory.InitializationOptions;
					public setNativeLibraryLoader(param0: org.otwebrtc.NativeLibraryLoader): org.otwebrtc.PeerConnectionFactory.InitializationOptions.Builder;
					public setInjectableLogger(param0: org.otwebrtc.Loggable, param1: org.otwebrtc.Logging.Severity): org.otwebrtc.PeerConnectionFactory.InitializationOptions.Builder;
					public setNativeLibraryName(param0: string): org.otwebrtc.PeerConnectionFactory.InitializationOptions.Builder;
					public setEnableInternalTracer(param0: boolean): org.otwebrtc.PeerConnectionFactory.InitializationOptions.Builder;
				}
			}
			export class Options {
				public static class: java.lang.Class<org.otwebrtc.PeerConnectionFactory.Options>;
				public networkIgnoreMask: number;
				public disableEncryption: boolean;
				public disableNetworkMonitor: boolean;
				public constructor();
			}
			export class ThreadInfo {
				public static class: java.lang.Class<org.otwebrtc.PeerConnectionFactory.ThreadInfo>;
				public static getCurrent(): org.otwebrtc.PeerConnectionFactory.ThreadInfo;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class PlatformSoftwareVideoDecoderFactory extends org.otwebrtc.MediaCodecVideoDecoderFactory {
			public static class: java.lang.Class<org.otwebrtc.PlatformSoftwareVideoDecoderFactory>;
			public constructor(param0: org.otwebrtc.EglBase.Context);
			public createDecoder(param0: org.otwebrtc.VideoCodecInfo): org.otwebrtc.VideoDecoder;
			public getSupportedCodecs(): native.Array<org.otwebrtc.VideoCodecInfo>;
			public createDecoder(param0: string): org.otwebrtc.VideoDecoder;
			public constructor(param0: org.otwebrtc.EglBase.Context, param1: org.otwebrtc.Predicate<globalAndroid.media.MediaCodecInfo>);
		}
	}
}

declare module org {
	export module otwebrtc {
		export class Predicate<T>  extends java.lang.Object {
			public static class: java.lang.Class<org.otwebrtc.Predicate<any>>;
			/**
			 * Constructs a new instance of the org.otwebrtc.Predicate<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				test(param0: T): boolean;
				or(param0: org.otwebrtc.Predicate<any>): org.otwebrtc.Predicate<T>;
				and(param0: org.otwebrtc.Predicate<any>): org.otwebrtc.Predicate<T>;
				negate(): org.otwebrtc.Predicate<T>;
			});
			public constructor();
			public or(param0: org.otwebrtc.Predicate<any>): org.otwebrtc.Predicate<T>;
			public negate(): org.otwebrtc.Predicate<T>;
			public test(param0: T): boolean;
			public and(param0: org.otwebrtc.Predicate<any>): org.otwebrtc.Predicate<T>;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class Priority {
			public static class: java.lang.Class<org.otwebrtc.Priority>;
			/**
			 * Constructs a new instance of the org.otwebrtc.Priority interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
			public static VERY_LOW: number;
			public static HIGH: number;
			public static LOW: number;
			public static MEDIUM: number;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class RTCStats {
			public static class: java.lang.Class<org.otwebrtc.RTCStats>;
			public getId(): string;
			public toString(): string;
			public constructor(param0: number, param1: string, param2: string, param3: java.util.Map<string,any>);
			public getMembers(): java.util.Map<string,any>;
			public getTimestampUs(): number;
			public getType(): string;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class RTCStatsCollectorCallback {
			public static class: java.lang.Class<org.otwebrtc.RTCStatsCollectorCallback>;
			/**
			 * Constructs a new instance of the org.otwebrtc.RTCStatsCollectorCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onStatsDelivered(param0: org.otwebrtc.RTCStatsReport): void;
			});
			public constructor();
			public onStatsDelivered(param0: org.otwebrtc.RTCStatsReport): void;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class RTCStatsReport {
			public static class: java.lang.Class<org.otwebrtc.RTCStatsReport>;
			public toString(): string;
			public constructor(param0: number, param1: java.util.Map<string,org.otwebrtc.RTCStats>);
			public getTimestampUs(): number;
			public getStatsMap(): java.util.Map<string,org.otwebrtc.RTCStats>;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class RefCountDelegate extends org.otwebrtc.RefCounted {
			public static class: java.lang.Class<org.otwebrtc.RefCountDelegate>;
			public constructor(param0: java.lang.Runnable);
			public retain(): void;
			public release(): void;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class RefCounted {
			public static class: java.lang.Class<org.otwebrtc.RefCounted>;
			/**
			 * Constructs a new instance of the org.otwebrtc.RefCounted interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				retain(): void;
				release(): void;
			});
			public constructor();
			public retain(): void;
			public release(): void;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class RendererCommon {
			public static class: java.lang.Class<org.otwebrtc.RendererCommon>;
			public static getDisplaySize(param0: org.otwebrtc.RendererCommon.ScalingType, param1: number, param2: number, param3: number): globalAndroid.graphics.Point;
			public static convertMatrixFromAndroidGraphicsMatrix(param0: globalAndroid.graphics.Matrix): native.Array<number>;
			public static getLayoutMatrix(param0: boolean, param1: number, param2: number): native.Array<number>;
			public static convertMatrixToAndroidGraphicsMatrix(param0: native.Array<number>): globalAndroid.graphics.Matrix;
			public static getDisplaySize(param0: number, param1: number, param2: number, param3: number): globalAndroid.graphics.Point;
			public constructor();
		}
		export module RendererCommon {
			export class GlDrawer {
				public static class: java.lang.Class<org.otwebrtc.RendererCommon.GlDrawer>;
				/**
				 * Constructs a new instance of the org.otwebrtc.RendererCommon$GlDrawer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					drawOes(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
					drawRgb(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
					drawYuv(param0: native.Array<number>, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
					release(): void;
				});
				public constructor();
				public drawYuv(param0: native.Array<number>, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
				public release(): void;
				public drawRgb(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
				public drawOes(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
			}
			export class RendererEvents {
				public static class: java.lang.Class<org.otwebrtc.RendererCommon.RendererEvents>;
				/**
				 * Constructs a new instance of the org.otwebrtc.RendererCommon$RendererEvents interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onFirstFrameRendered(): void;
					onFrameResolutionChanged(param0: number, param1: number, param2: number): void;
				});
				public constructor();
				public onFirstFrameRendered(): void;
				public onFrameResolutionChanged(param0: number, param1: number, param2: number): void;
			}
			export class ScalingType {
				public static class: java.lang.Class<org.otwebrtc.RendererCommon.ScalingType>;
				public static SCALE_ASPECT_FIT: org.otwebrtc.RendererCommon.ScalingType;
				public static SCALE_ASPECT_FILL: org.otwebrtc.RendererCommon.ScalingType;
				public static SCALE_ASPECT_BALANCED: org.otwebrtc.RendererCommon.ScalingType;
				public static values(): native.Array<org.otwebrtc.RendererCommon.ScalingType>;
				public static valueOf(param0: string): org.otwebrtc.RendererCommon.ScalingType;
			}
			export class VideoLayoutMeasure {
				public static class: java.lang.Class<org.otwebrtc.RendererCommon.VideoLayoutMeasure>;
				public setVisibleFraction(param0: number, param1: number): void;
				public setScalingType(param0: org.otwebrtc.RendererCommon.ScalingType): void;
				public measure(param0: number, param1: number, param2: number, param3: number): globalAndroid.graphics.Point;
				public setScalingType(param0: org.otwebrtc.RendererCommon.ScalingType, param1: org.otwebrtc.RendererCommon.ScalingType): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class RtcCertificatePem {
			public static class: java.lang.Class<org.otwebrtc.RtcCertificatePem>;
			public privateKey: string;
			public certificate: string;
			public constructor(param0: string, param1: string);
			public static generateCertificate(param0: org.otwebrtc.PeerConnection.KeyType): org.otwebrtc.RtcCertificatePem;
			public static generateCertificate(): org.otwebrtc.RtcCertificatePem;
			public static generateCertificate(param0: org.otwebrtc.PeerConnection.KeyType, param1: number): org.otwebrtc.RtcCertificatePem;
			public static generateCertificate(param0: number): org.otwebrtc.RtcCertificatePem;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class RtpParameters {
			public static class: java.lang.Class<org.otwebrtc.RtpParameters>;
			public transactionId: string;
			public degradationPreference: org.otwebrtc.RtpParameters.DegradationPreference;
			public encodings: java.util.List<org.otwebrtc.RtpParameters.Encoding>;
			public codecs: java.util.List<org.otwebrtc.RtpParameters.Codec>;
			public getRtcp(): org.otwebrtc.RtpParameters.Rtcp;
			public getHeaderExtensions(): java.util.List<org.otwebrtc.RtpParameters.HeaderExtension>;
		}
		export module RtpParameters {
			export class Codec {
				public static class: java.lang.Class<org.otwebrtc.RtpParameters.Codec>;
				public payloadType: number;
				public name: string;
				public clockRate: java.lang.Integer;
				public numChannels: java.lang.Integer;
				public parameters: java.util.Map<string,string>;
			}
			export class DegradationPreference {
				public static class: java.lang.Class<org.otwebrtc.RtpParameters.DegradationPreference>;
				public static DISABLED: org.otwebrtc.RtpParameters.DegradationPreference;
				public static MAINTAIN_FRAMERATE: org.otwebrtc.RtpParameters.DegradationPreference;
				public static MAINTAIN_RESOLUTION: org.otwebrtc.RtpParameters.DegradationPreference;
				public static BALANCED: org.otwebrtc.RtpParameters.DegradationPreference;
				public static values(): native.Array<org.otwebrtc.RtpParameters.DegradationPreference>;
				public static valueOf(param0: string): org.otwebrtc.RtpParameters.DegradationPreference;
			}
			export class Encoding {
				public static class: java.lang.Class<org.otwebrtc.RtpParameters.Encoding>;
				public rid: string;
				public active: boolean;
				public bitratePriority: number;
				public networkPriority: number;
				public maxBitrateBps: java.lang.Integer;
				public minBitrateBps: java.lang.Integer;
				public maxFramerate: java.lang.Integer;
				public numTemporalLayers: java.lang.Integer;
				public scaleResolutionDownBy: java.lang.Double;
				public ssrc: java.lang.Long;
				public constructor(param0: string, param1: boolean, param2: java.lang.Double);
			}
			export class HeaderExtension {
				public static class: java.lang.Class<org.otwebrtc.RtpParameters.HeaderExtension>;
				public getUri(): string;
				public getId(): number;
				public getEncrypted(): boolean;
			}
			export class Rtcp {
				public static class: java.lang.Class<org.otwebrtc.RtpParameters.Rtcp>;
				public getReducedSize(): boolean;
				public getCname(): string;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class RtpReceiver {
			public static class: java.lang.Class<org.otwebrtc.RtpReceiver>;
			public setFrameDecryptor(param0: org.otwebrtc.FrameDecryptor): void;
			public constructor(param0: number);
			public SetObserver(param0: org.otwebrtc.RtpReceiver.Observer): void;
			public dispose(): void;
			public getParameters(): org.otwebrtc.RtpParameters;
			public id(): string;
			public track(): org.otwebrtc.MediaStreamTrack;
		}
		export module RtpReceiver {
			export class Observer {
				public static class: java.lang.Class<org.otwebrtc.RtpReceiver.Observer>;
				/**
				 * Constructs a new instance of the org.otwebrtc.RtpReceiver$Observer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onFirstPacketReceived(param0: org.otwebrtc.MediaStreamTrack.MediaType): void;
				});
				public constructor();
				public onFirstPacketReceived(param0: org.otwebrtc.MediaStreamTrack.MediaType): void;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class RtpSender {
			public static class: java.lang.Class<org.otwebrtc.RtpSender>;
			public dtmf(): org.otwebrtc.DtmfSender;
			public constructor(param0: number);
			public getStreams(): java.util.List<string>;
			public setTrack(param0: org.otwebrtc.MediaStreamTrack, param1: boolean): boolean;
			public setStreams(param0: java.util.List<string>): void;
			public setParameters(param0: org.otwebrtc.RtpParameters): boolean;
			public dispose(): void;
			public setFrameEncryptor(param0: org.otwebrtc.FrameEncryptor): void;
			public getParameters(): org.otwebrtc.RtpParameters;
			public id(): string;
			public track(): org.otwebrtc.MediaStreamTrack;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class RtpTransceiver {
			public static class: java.lang.Class<org.otwebrtc.RtpTransceiver>;
			public getReceiver(): org.otwebrtc.RtpReceiver;
			public isStopped(): boolean;
			public getDirection(): org.otwebrtc.RtpTransceiver.RtpTransceiverDirection;
			public getSender(): org.otwebrtc.RtpSender;
			public getCurrentDirection(): org.otwebrtc.RtpTransceiver.RtpTransceiverDirection;
			public stop(): void;
			public constructor(param0: number);
			public setDirection(param0: org.otwebrtc.RtpTransceiver.RtpTransceiverDirection): void;
			public getMid(): string;
			public dispose(): void;
			public getMediaType(): org.otwebrtc.MediaStreamTrack.MediaType;
		}
		export module RtpTransceiver {
			export class RtpTransceiverDirection {
				public static class: java.lang.Class<org.otwebrtc.RtpTransceiver.RtpTransceiverDirection>;
				public static SEND_RECV: org.otwebrtc.RtpTransceiver.RtpTransceiverDirection;
				public static SEND_ONLY: org.otwebrtc.RtpTransceiver.RtpTransceiverDirection;
				public static RECV_ONLY: org.otwebrtc.RtpTransceiver.RtpTransceiverDirection;
				public static INACTIVE: org.otwebrtc.RtpTransceiver.RtpTransceiverDirection;
				public static values(): native.Array<org.otwebrtc.RtpTransceiver.RtpTransceiverDirection>;
				public static valueOf(param0: string): org.otwebrtc.RtpTransceiver.RtpTransceiverDirection;
			}
			export class RtpTransceiverInit {
				public static class: java.lang.Class<org.otwebrtc.RtpTransceiver.RtpTransceiverInit>;
				public constructor(param0: org.otwebrtc.RtpTransceiver.RtpTransceiverDirection, param1: java.util.List<string>);
				public constructor(param0: org.otwebrtc.RtpTransceiver.RtpTransceiverDirection);
				public constructor();
				public constructor(param0: org.otwebrtc.RtpTransceiver.RtpTransceiverDirection, param1: java.util.List<string>, param2: java.util.List<org.otwebrtc.RtpParameters.Encoding>);
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class SSLCertificateVerifier {
			public static class: java.lang.Class<org.otwebrtc.SSLCertificateVerifier>;
			/**
			 * Constructs a new instance of the org.otwebrtc.SSLCertificateVerifier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				verify(param0: native.Array<number>): boolean;
			});
			public constructor();
			public verify(param0: native.Array<number>): boolean;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class ScreenCapturerAndroid implements org.otwebrtc.VideoCapturer, org.otwebrtc.VideoSink {
			public static class: java.lang.Class<org.otwebrtc.ScreenCapturerAndroid>;
			public onFrame(param0: org.otwebrtc.VideoFrame): void;
			public getNumCapturedFrames(): number;
			public constructor(param0: globalAndroid.content.Intent, param1: globalAndroid.media.projection.MediaProjection.Callback);
			public startCapture(param0: number, param1: number, param2: number): void;
			public dispose(): void;
			public changeCaptureFormat(param0: number, param1: number, param2: number): void;
			public isScreencast(): boolean;
			public initialize(param0: org.otwebrtc.SurfaceTextureHelper, param1: globalAndroid.content.Context, param2: org.otwebrtc.CapturerObserver): void;
			public stopCapture(): void;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class SdpObserver {
			public static class: java.lang.Class<org.otwebrtc.SdpObserver>;
			/**
			 * Constructs a new instance of the org.otwebrtc.SdpObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onCreateSuccess(param0: org.otwebrtc.SessionDescription): void;
				onSetSuccess(): void;
				onCreateFailure(param0: string): void;
				onSetFailure(param0: string): void;
			});
			public constructor();
			public onCreateFailure(param0: string): void;
			public onSetFailure(param0: string): void;
			public onCreateSuccess(param0: org.otwebrtc.SessionDescription): void;
			public onSetSuccess(): void;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class SessionDescription {
			public static class: java.lang.Class<org.otwebrtc.SessionDescription>;
			public type: org.otwebrtc.SessionDescription.Type;
			public description: string;
			public constructor(param0: org.otwebrtc.SessionDescription.Type, param1: string);
		}
		export module SessionDescription {
			export class Type {
				public static class: java.lang.Class<org.otwebrtc.SessionDescription.Type>;
				public static OFFER: org.otwebrtc.SessionDescription.Type;
				public static PRANSWER: org.otwebrtc.SessionDescription.Type;
				public static ANSWER: org.otwebrtc.SessionDescription.Type;
				public static valueOf(param0: string): org.otwebrtc.SessionDescription.Type;
				public static fromCanonicalForm(param0: string): org.otwebrtc.SessionDescription.Type;
				public static values(): native.Array<org.otwebrtc.SessionDescription.Type>;
				public canonicalForm(): string;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class Size {
			public static class: java.lang.Class<org.otwebrtc.Size>;
			public width: number;
			public height: number;
			public equals(param0: any): boolean;
			public toString(): string;
			public constructor(param0: number, param1: number);
			public hashCode(): number;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class SoftwareVideoDecoderFactory extends org.otwebrtc.VideoDecoderFactory {
			public static class: java.lang.Class<org.otwebrtc.SoftwareVideoDecoderFactory>;
			public createDecoder(param0: org.otwebrtc.VideoCodecInfo): org.otwebrtc.VideoDecoder;
			public getSupportedCodecs(): native.Array<org.otwebrtc.VideoCodecInfo>;
			public constructor();
			public createDecoder(param0: string): org.otwebrtc.VideoDecoder;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class SoftwareVideoEncoderFactory extends org.otwebrtc.VideoEncoderFactory {
			public static class: java.lang.Class<org.otwebrtc.SoftwareVideoEncoderFactory>;
			public getImplementations(): native.Array<org.otwebrtc.VideoCodecInfo>;
			public getSupportedCodecs(): native.Array<org.otwebrtc.VideoCodecInfo>;
			public getEncoderSelector(): org.otwebrtc.VideoEncoderFactory.VideoEncoderSelector;
			public constructor();
			public createEncoder(param0: org.otwebrtc.VideoCodecInfo): org.otwebrtc.VideoEncoder;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class StatsObserver {
			public static class: java.lang.Class<org.otwebrtc.StatsObserver>;
			/**
			 * Constructs a new instance of the org.otwebrtc.StatsObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onComplete(param0: native.Array<org.otwebrtc.StatsReport>): void;
			});
			public constructor();
			public onComplete(param0: native.Array<org.otwebrtc.StatsReport>): void;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class StatsReport {
			public static class: java.lang.Class<org.otwebrtc.StatsReport>;
			public id: string;
			public type: string;
			public timestamp: number;
			public values: native.Array<org.otwebrtc.StatsReport.Value>;
			public constructor(param0: string, param1: string, param2: number, param3: native.Array<org.otwebrtc.StatsReport.Value>);
			public toString(): string;
		}
		export module StatsReport {
			export class Value {
				public static class: java.lang.Class<org.otwebrtc.StatsReport.Value>;
				public name: string;
				public value: string;
				public toString(): string;
				public constructor(param0: string, param1: string);
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class SurfaceEglRenderer extends org.otwebrtc.EglRenderer {
			public static class: java.lang.Class<org.otwebrtc.SurfaceEglRenderer>;
			public surfaceChanged(param0: globalAndroid.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
			public onFrame(param0: org.otwebrtc.VideoFrame): void;
			public surfaceDestroyed(param0: globalAndroid.view.SurfaceHolder): void;
			public init(param0: org.otwebrtc.EglBase.Context, param1: org.otwebrtc.RendererCommon.RendererEvents, param2: native.Array<number>, param3: org.otwebrtc.RendererCommon.GlDrawer): void;
			public setFpsReduction(param0: number): void;
			public pauseVideo(): void;
			public disableFpsReduction(): void;
			public constructor(param0: string, param1: org.otwebrtc.VideoFrameDrawer);
			public init(param0: org.otwebrtc.EglBase.Context, param1: native.Array<number>, param2: org.otwebrtc.RendererCommon.GlDrawer): void;
			public constructor(param0: string);
			public init(param0: org.otwebrtc.EglBase.Context, param1: native.Array<number>, param2: org.otwebrtc.RendererCommon.GlDrawer, param3: boolean): void;
			public surfaceCreated(param0: globalAndroid.view.SurfaceHolder): void;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class SurfaceTextureHelper {
			public static class: java.lang.Class<org.otwebrtc.SurfaceTextureHelper>;
			public static create(param0: string, param1: org.otwebrtc.EglBase.Context, param2: boolean, param3: org.otwebrtc.YuvConverter): org.otwebrtc.SurfaceTextureHelper;
			public getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
			public static create(param0: string, param1: org.otwebrtc.EglBase.Context): org.otwebrtc.SurfaceTextureHelper;
			public stopListening(): void;
			public setTextureSize(param0: number, param1: number): void;
			public isTextureInUse(): boolean;
			public textureToYuv(param0: org.otwebrtc.VideoFrame.TextureBuffer): org.otwebrtc.VideoFrame.I420Buffer;
			public setFrameRotation(param0: number): void;
			public startListening(param0: org.otwebrtc.VideoSink): void;
			public static create(param0: string, param1: org.otwebrtc.EglBase.Context, param2: boolean, param3: org.otwebrtc.YuvConverter, param4: org.otwebrtc.SurfaceTextureHelper.FrameRefMonitor): org.otwebrtc.SurfaceTextureHelper;
			public static create(param0: string, param1: org.otwebrtc.EglBase.Context, param2: boolean): org.otwebrtc.SurfaceTextureHelper;
			public dispose(): void;
			public getHandler(): globalAndroid.os.Handler;
		}
		export module SurfaceTextureHelper {
			export class FrameRefMonitor {
				public static class: java.lang.Class<org.otwebrtc.SurfaceTextureHelper.FrameRefMonitor>;
				/**
				 * Constructs a new instance of the org.otwebrtc.SurfaceTextureHelper$FrameRefMonitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onNewBuffer(param0: org.otwebrtc.VideoFrame.TextureBuffer): void;
					onRetainBuffer(param0: org.otwebrtc.VideoFrame.TextureBuffer): void;
					onReleaseBuffer(param0: org.otwebrtc.VideoFrame.TextureBuffer): void;
					onDestroyBuffer(param0: org.otwebrtc.VideoFrame.TextureBuffer): void;
				});
				public constructor();
				public onReleaseBuffer(param0: org.otwebrtc.VideoFrame.TextureBuffer): void;
				public onNewBuffer(param0: org.otwebrtc.VideoFrame.TextureBuffer): void;
				public onRetainBuffer(param0: org.otwebrtc.VideoFrame.TextureBuffer): void;
				public onDestroyBuffer(param0: org.otwebrtc.VideoFrame.TextureBuffer): void;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class SurfaceTextureHelper61 {
			public static class: java.lang.Class<org.otwebrtc.SurfaceTextureHelper61>;
			public getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
			public static create(param0: string, param1: org.otwebrtc.EglBase.Context): org.otwebrtc.SurfaceTextureHelper61;
			public startListening(param0: org.otwebrtc.SurfaceTextureHelper61.OnTextureFrameAvailableListener): void;
			public textureToYUV(param0: java.nio.ByteBuffer, param1: number, param2: number, param3: number, param4: number, param5: native.Array<number>): void;
			public stopListening(): void;
			public returnTextureFrame(): void;
			public dispose(): void;
			public isTextureInUse(): boolean;
			public getHandler(): globalAndroid.os.Handler;
		}
		export module SurfaceTextureHelper61 {
			export class OnTextureFrameAvailableListener {
				public static class: java.lang.Class<org.otwebrtc.SurfaceTextureHelper61.OnTextureFrameAvailableListener>;
				/**
				 * Constructs a new instance of the org.otwebrtc.SurfaceTextureHelper61$OnTextureFrameAvailableListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onTextureFrameAvailable(param0: number, param1: native.Array<number>, param2: number): void;
				});
				public constructor();
				public onTextureFrameAvailable(param0: number, param1: native.Array<number>, param2: number): void;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class SurfaceViewRenderer implements org.otwebrtc.VideoSink, org.otwebrtc.RendererCommon.RendererEvents {
			public static class: java.lang.Class<org.otwebrtc.SurfaceViewRenderer>;
			public surfaceChanged(param0: globalAndroid.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
			public clearImage(): void;
			public surfaceDestroyed(param0: globalAndroid.view.SurfaceHolder): void;
			public setScalingType(param0: org.otwebrtc.RendererCommon.ScalingType): void;
			public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			public pauseVideo(): void;
			public onMeasure(param0: number, param1: number): void;
			public setMirror(param0: boolean): void;
			public init(param0: org.otwebrtc.EglBase.Context, param1: org.otwebrtc.RendererCommon.RendererEvents): void;
			public setScalingType(param0: org.otwebrtc.RendererCommon.ScalingType, param1: org.otwebrtc.RendererCommon.ScalingType): void;
			public surfaceCreated(param0: globalAndroid.view.SurfaceHolder): void;
			public onFrame(param0: org.otwebrtc.VideoFrame): void;
			public removeFrameListener(param0: org.otwebrtc.EglRenderer.FrameListener): void;
			public setEnableHardwareScaler(param0: boolean): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public addFrameListener(param0: org.otwebrtc.EglRenderer.FrameListener, param1: number): void;
			public init(param0: org.otwebrtc.EglBase.Context, param1: org.otwebrtc.RendererCommon.RendererEvents, param2: native.Array<number>, param3: org.otwebrtc.RendererCommon.GlDrawer): void;
			public setFpsReduction(param0: number): void;
			public disableFpsReduction(): void;
			public addFrameListener(param0: org.otwebrtc.EglRenderer.FrameListener, param1: number, param2: org.otwebrtc.RendererCommon.GlDrawer): void;
			public onFirstFrameRendered(): void;
			public constructor(param0: globalAndroid.content.Context);
			public release(): void;
			public onFrameResolutionChanged(param0: number, param1: number, param2: number): void;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class TextureBufferImpl extends org.otwebrtc.VideoFrame.TextureBuffer {
			public static class: java.lang.Class<org.otwebrtc.TextureBufferImpl>;
			public constructor(param0: number, param1: number, param2: org.otwebrtc.VideoFrame.TextureBuffer.Type, param3: number, param4: globalAndroid.graphics.Matrix, param5: globalAndroid.os.Handler, param6: org.otwebrtc.YuvConverter, param7: java.lang.Runnable);
			public getTextureId(): number;
			public getTransformMatrix(): globalAndroid.graphics.Matrix;
			public getHeight(): number;
			public cropAndScale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): org.otwebrtc.VideoFrame.Buffer;
			public getWidth(): number;
			public getYuvConverter(): org.otwebrtc.YuvConverter;
			public getUnscaledWidth(): number;
			public retain(): void;
			public applyTransformMatrix(param0: globalAndroid.graphics.Matrix, param1: number, param2: number): org.otwebrtc.TextureBufferImpl;
			public getUnscaledHeight(): number;
			public toI420(): org.otwebrtc.VideoFrame.I420Buffer;
			public release(): void;
			public getToI420Handler(): globalAndroid.os.Handler;
			public getType(): org.otwebrtc.VideoFrame.TextureBuffer.Type;
		}
		export module TextureBufferImpl {
			export class RefCountMonitor {
				public static class: java.lang.Class<org.otwebrtc.TextureBufferImpl.RefCountMonitor>;
				/**
				 * Constructs a new instance of the org.otwebrtc.TextureBufferImpl$RefCountMonitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onRetain(param0: org.otwebrtc.TextureBufferImpl): void;
					onRelease(param0: org.otwebrtc.TextureBufferImpl): void;
					onDestroy(param0: org.otwebrtc.TextureBufferImpl): void;
				});
				public constructor();
				public onRetain(param0: org.otwebrtc.TextureBufferImpl): void;
				public onRelease(param0: org.otwebrtc.TextureBufferImpl): void;
				public onDestroy(param0: org.otwebrtc.TextureBufferImpl): void;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class ThreadUtils {
			public static class: java.lang.Class<org.otwebrtc.ThreadUtils>;
			public static joinUninterruptibly(param0: java.lang.Thread, param1: number): boolean;
			public static awaitUninterruptibly(param0: java.util.concurrent.CountDownLatch, param1: number): boolean;
			public static invokeAtFrontUninterruptibly(param0: globalAndroid.os.Handler, param1: java.lang.Runnable): void;
			public static joinUninterruptibly(param0: java.lang.Thread): void;
			public static awaitUninterruptibly(param0: java.util.concurrent.CountDownLatch): void;
			public constructor();
			public static checkIsOnMainThread(): void;
			public static executeUninterruptibly(param0: org.otwebrtc.ThreadUtils.BlockingOperation): void;
			public static invokeAtFrontUninterruptibly(param0: globalAndroid.os.Handler, param1: java.util.concurrent.Callable): any;
		}
		export module ThreadUtils {
			export class BlockingOperation {
				public static class: java.lang.Class<org.otwebrtc.ThreadUtils.BlockingOperation>;
				/**
				 * Constructs a new instance of the org.otwebrtc.ThreadUtils$BlockingOperation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					run(): void;
				});
				public constructor();
				public run(): void;
			}
			export class ThreadChecker {
				public static class: java.lang.Class<org.otwebrtc.ThreadUtils.ThreadChecker>;
				public checkIsOnValidThread(): void;
				public detachThread(): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class TimestampAligner {
			public static class: java.lang.Class<org.otwebrtc.TimestampAligner>;
			public translateTimestamp(param0: number): number;
			public static getRtcTimeNanos(): number;
			public dispose(): void;
			public constructor();
		}
	}
}

declare module org {
	export module otwebrtc {
		export class TurnCustomizer {
			public static class: java.lang.Class<org.otwebrtc.TurnCustomizer>;
			public constructor(param0: number);
			public dispose(): void;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class VideoCapturer {
			public static class: java.lang.Class<org.otwebrtc.VideoCapturer>;
			/**
			 * Constructs a new instance of the org.otwebrtc.VideoCapturer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				initialize(param0: org.otwebrtc.SurfaceTextureHelper, param1: globalAndroid.content.Context, param2: org.otwebrtc.CapturerObserver): void;
				startCapture(param0: number, param1: number, param2: number): void;
				stopCapture(): void;
				changeCaptureFormat(param0: number, param1: number, param2: number): void;
				dispose(): void;
				isScreencast(): boolean;
			});
			public constructor();
			public startCapture(param0: number, param1: number, param2: number): void;
			public changeCaptureFormat(param0: number, param1: number, param2: number): void;
			public dispose(): void;
			public isScreencast(): boolean;
			public initialize(param0: org.otwebrtc.SurfaceTextureHelper, param1: globalAndroid.content.Context, param2: org.otwebrtc.CapturerObserver): void;
			public stopCapture(): void;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class VideoCodecInfo {
			public static class: java.lang.Class<org.otwebrtc.VideoCodecInfo>;
			public static H264_FMTP_PROFILE_LEVEL_ID: string;
			public static H264_FMTP_LEVEL_ASYMMETRY_ALLOWED: string;
			public static H264_FMTP_PACKETIZATION_MODE: string;
			public static H264_PROFILE_CONSTRAINED_BASELINE: string;
			public static H264_PROFILE_CONSTRAINED_HIGH: string;
			public static H264_LEVEL_3_1: string;
			public static H264_CONSTRAINED_HIGH_3_1: string;
			public static H264_CONSTRAINED_BASELINE_3_1: string;
			public name: string;
			public params: java.util.Map<string,string>;
			public payload: number;
			public equals(param0: any): boolean;
			public constructor(param0: number, param1: string, param2: java.util.Map<string,string>);
			public constructor(param0: string, param1: java.util.Map<string,string>);
			public hashCode(): number;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class VideoCodecMimeType {
			public static class: java.lang.Class<org.otwebrtc.VideoCodecMimeType>;
			public static VP8: org.otwebrtc.VideoCodecMimeType;
			public static VP9: org.otwebrtc.VideoCodecMimeType;
			public static H264: org.otwebrtc.VideoCodecMimeType;
			public static valueOf(param0: string): org.otwebrtc.VideoCodecMimeType;
			public static values(): native.Array<org.otwebrtc.VideoCodecMimeType>;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class VideoCodecStatus {
			public static class: java.lang.Class<org.otwebrtc.VideoCodecStatus>;
			public static REQUEST_SLI: org.otwebrtc.VideoCodecStatus;
			public static NO_OUTPUT: org.otwebrtc.VideoCodecStatus;
			public static OK: org.otwebrtc.VideoCodecStatus;
			public static ERROR: org.otwebrtc.VideoCodecStatus;
			public static LEVEL_EXCEEDED: org.otwebrtc.VideoCodecStatus;
			public static MEMORY: org.otwebrtc.VideoCodecStatus;
			public static ERR_PARAMETER: org.otwebrtc.VideoCodecStatus;
			public static ERR_SIZE: org.otwebrtc.VideoCodecStatus;
			public static TIMEOUT: org.otwebrtc.VideoCodecStatus;
			public static UNINITIALIZED: org.otwebrtc.VideoCodecStatus;
			public static ERR_REQUEST_SLI: org.otwebrtc.VideoCodecStatus;
			public static FALLBACK_SOFTWARE: org.otwebrtc.VideoCodecStatus;
			public static TARGET_BITRATE_OVERSHOOT: org.otwebrtc.VideoCodecStatus;
			public getNumber(): number;
			public static values(): native.Array<org.otwebrtc.VideoCodecStatus>;
			public static valueOf(param0: string): org.otwebrtc.VideoCodecStatus;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class VideoCodecType {
			public static class: java.lang.Class<org.otwebrtc.VideoCodecType>;
			/**
			 * Constructs a new instance of the org.otwebrtc.VideoCodecType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
			public static VIDEO_CODEC_MULTIPLEX: number;
			public static VIDEO_CODEC_VP8: number;
			public static VIDEO_CODEC_AV1: number;
			public static VIDEO_CODEC_VP9: number;
			public static VIDEO_CODEC_GENERIC: number;
			public static VIDEO_CODEC_H264: number;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class VideoDecoder {
			public static class: java.lang.Class<org.otwebrtc.VideoDecoder>;
			/**
			 * Constructs a new instance of the org.otwebrtc.VideoDecoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createNativeVideoDecoder(): number;
				initDecode(param0: org.otwebrtc.VideoDecoder.Settings, param1: org.otwebrtc.VideoDecoder.Callback): org.otwebrtc.VideoCodecStatus;
				release(): org.otwebrtc.VideoCodecStatus;
				decode(param0: org.otwebrtc.EncodedImage, param1: org.otwebrtc.VideoDecoder.DecodeInfo): org.otwebrtc.VideoCodecStatus;
				getPrefersLateDecoding(): boolean;
				getImplementationName(): string;
			});
			public constructor();
			public release(): org.otwebrtc.VideoCodecStatus;
			public decode(param0: org.otwebrtc.EncodedImage, param1: org.otwebrtc.VideoDecoder.DecodeInfo): org.otwebrtc.VideoCodecStatus;
			public getImplementationName(): string;
			public createNativeVideoDecoder(): number;
			public getPrefersLateDecoding(): boolean;
			public initDecode(param0: org.otwebrtc.VideoDecoder.Settings, param1: org.otwebrtc.VideoDecoder.Callback): org.otwebrtc.VideoCodecStatus;
		}
		export module VideoDecoder {
			export class Callback {
				public static class: java.lang.Class<org.otwebrtc.VideoDecoder.Callback>;
				/**
				 * Constructs a new instance of the org.otwebrtc.VideoDecoder$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onDecodedFrame(param0: org.otwebrtc.VideoFrame, param1: java.lang.Integer, param2: java.lang.Integer): void;
				});
				public constructor();
				public onDecodedFrame(param0: org.otwebrtc.VideoFrame, param1: java.lang.Integer, param2: java.lang.Integer): void;
			}
			export class DecodeInfo {
				public static class: java.lang.Class<org.otwebrtc.VideoDecoder.DecodeInfo>;
				public isMissingFrames: boolean;
				public renderTimeMs: number;
				public constructor(param0: boolean, param1: number);
			}
			export class Settings {
				public static class: java.lang.Class<org.otwebrtc.VideoDecoder.Settings>;
				public numberOfCores: number;
				public width: number;
				public height: number;
				public constructor(param0: number, param1: number, param2: number);
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class VideoDecoderFactory {
			public static class: java.lang.Class<org.otwebrtc.VideoDecoderFactory>;
			/**
			 * Constructs a new instance of the org.otwebrtc.VideoDecoderFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createDecoder(param0: string): org.otwebrtc.VideoDecoder;
				createDecoder(param0: org.otwebrtc.VideoCodecInfo): org.otwebrtc.VideoDecoder;
				getSupportedCodecs(): native.Array<org.otwebrtc.VideoCodecInfo>;
			});
			public constructor();
			public createDecoder(param0: org.otwebrtc.VideoCodecInfo): org.otwebrtc.VideoDecoder;
			public getSupportedCodecs(): native.Array<org.otwebrtc.VideoCodecInfo>;
			public createDecoder(param0: string): org.otwebrtc.VideoDecoder;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class VideoDecoderFallback extends org.otwebrtc.WrappedNativeVideoDecoder {
			public static class: java.lang.Class<org.otwebrtc.VideoDecoderFallback>;
			public release(): org.otwebrtc.VideoCodecStatus;
			public decode(param0: org.otwebrtc.EncodedImage, param1: org.otwebrtc.VideoDecoder.DecodeInfo): org.otwebrtc.VideoCodecStatus;
			public getImplementationName(): string;
			public createNativeVideoDecoder(): number;
			public constructor(param0: org.otwebrtc.VideoDecoder, param1: org.otwebrtc.VideoDecoder);
			public getPrefersLateDecoding(): boolean;
			public constructor();
			public initDecode(param0: org.otwebrtc.VideoDecoder.Settings, param1: org.otwebrtc.VideoDecoder.Callback): org.otwebrtc.VideoCodecStatus;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class VideoDecoderWrapper {
			public static class: java.lang.Class<org.otwebrtc.VideoDecoderWrapper>;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class VideoEncoder {
			public static class: java.lang.Class<org.otwebrtc.VideoEncoder>;
			/**
			 * Constructs a new instance of the org.otwebrtc.VideoEncoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createNativeVideoEncoder(): number;
				isHardwareEncoder(): boolean;
				initEncode(param0: org.otwebrtc.VideoEncoder.Settings, param1: org.otwebrtc.VideoEncoder.Callback): org.otwebrtc.VideoCodecStatus;
				release(): org.otwebrtc.VideoCodecStatus;
				encode(param0: org.otwebrtc.VideoFrame, param1: org.otwebrtc.VideoEncoder.EncodeInfo): org.otwebrtc.VideoCodecStatus;
				setRateAllocation(param0: org.otwebrtc.VideoEncoder.BitrateAllocation, param1: number): org.otwebrtc.VideoCodecStatus;
				getScalingSettings(): org.otwebrtc.VideoEncoder.ScalingSettings;
				getResolutionBitrateLimits(): native.Array<org.otwebrtc.VideoEncoder.ResolutionBitrateLimits>;
				getImplementationName(): string;
			});
			public constructor();
			public release(): org.otwebrtc.VideoCodecStatus;
			public setRateAllocation(param0: org.otwebrtc.VideoEncoder.BitrateAllocation, param1: number): org.otwebrtc.VideoCodecStatus;
			public encode(param0: org.otwebrtc.VideoFrame, param1: org.otwebrtc.VideoEncoder.EncodeInfo): org.otwebrtc.VideoCodecStatus;
			public getScalingSettings(): org.otwebrtc.VideoEncoder.ScalingSettings;
			public initEncode(param0: org.otwebrtc.VideoEncoder.Settings, param1: org.otwebrtc.VideoEncoder.Callback): org.otwebrtc.VideoCodecStatus;
			public getResolutionBitrateLimits(): native.Array<org.otwebrtc.VideoEncoder.ResolutionBitrateLimits>;
			public getImplementationName(): string;
			public createNativeVideoEncoder(): number;
			public isHardwareEncoder(): boolean;
		}
		export module VideoEncoder {
			export class BitrateAllocation {
				public static class: java.lang.Class<org.otwebrtc.VideoEncoder.BitrateAllocation>;
				public bitratesBbs: native.Array<native.Array<number>>;
				public constructor(param0: native.Array<native.Array<number>>);
				public getSum(): number;
			}
			export class Callback {
				public static class: java.lang.Class<org.otwebrtc.VideoEncoder.Callback>;
				/**
				 * Constructs a new instance of the org.otwebrtc.VideoEncoder$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onEncodedFrame(param0: org.otwebrtc.EncodedImage, param1: org.otwebrtc.VideoEncoder.CodecSpecificInfo): void;
				});
				public constructor();
				public onEncodedFrame(param0: org.otwebrtc.EncodedImage, param1: org.otwebrtc.VideoEncoder.CodecSpecificInfo): void;
			}
			export class Capabilities {
				public static class: java.lang.Class<org.otwebrtc.VideoEncoder.Capabilities>;
				public lossNotification: boolean;
				public constructor(param0: boolean);
			}
			export class CodecSpecificInfo {
				public static class: java.lang.Class<org.otwebrtc.VideoEncoder.CodecSpecificInfo>;
				public constructor();
			}
			export class CodecSpecificInfoH264 extends org.otwebrtc.VideoEncoder.CodecSpecificInfo {
				public static class: java.lang.Class<org.otwebrtc.VideoEncoder.CodecSpecificInfoH264>;
				public constructor();
			}
			export class CodecSpecificInfoVP8 extends org.otwebrtc.VideoEncoder.CodecSpecificInfo {
				public static class: java.lang.Class<org.otwebrtc.VideoEncoder.CodecSpecificInfoVP8>;
				public constructor();
			}
			export class CodecSpecificInfoVP9 extends org.otwebrtc.VideoEncoder.CodecSpecificInfo {
				public static class: java.lang.Class<org.otwebrtc.VideoEncoder.CodecSpecificInfoVP9>;
				public constructor();
			}
			export class EncodeInfo {
				public static class: java.lang.Class<org.otwebrtc.VideoEncoder.EncodeInfo>;
				public frameTypes: native.Array<org.otwebrtc.EncodedImage.FrameType>;
				public constructor(param0: native.Array<org.otwebrtc.EncodedImage.FrameType>);
			}
			export class ResolutionBitrateLimits {
				public static class: java.lang.Class<org.otwebrtc.VideoEncoder.ResolutionBitrateLimits>;
				public frameSizePixels: number;
				public minStartBitrateBps: number;
				public minBitrateBps: number;
				public maxBitrateBps: number;
				public constructor(param0: number, param1: number, param2: number, param3: number);
				public getMinBitrateBps(): number;
				public getFrameSizePixels(): number;
				public getMinStartBitrateBps(): number;
				public getMaxBitrateBps(): number;
			}
			export class ScalingSettings {
				public static class: java.lang.Class<org.otwebrtc.VideoEncoder.ScalingSettings>;
				public static OFF: org.otwebrtc.VideoEncoder.ScalingSettings;
				public on: boolean;
				public low: java.lang.Integer;
				public high: java.lang.Integer;
				public constructor(param0: number, param1: number);
				public constructor(param0: boolean, param1: number, param2: number);
				public constructor(param0: boolean);
				public toString(): string;
			}
			export class Settings {
				public static class: java.lang.Class<org.otwebrtc.VideoEncoder.Settings>;
				public numberOfCores: number;
				public width: number;
				public height: number;
				public startBitrate: number;
				public maxFramerate: number;
				public numberOfSimulcastStreams: number;
				public automaticResizeOn: boolean;
				public capabilities: org.otwebrtc.VideoEncoder.Capabilities;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: boolean);
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: boolean, param7: org.otwebrtc.VideoEncoder.Capabilities);
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class VideoEncoderFactory {
			public static class: java.lang.Class<org.otwebrtc.VideoEncoderFactory>;
			/**
			 * Constructs a new instance of the org.otwebrtc.VideoEncoderFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createEncoder(param0: org.otwebrtc.VideoCodecInfo): org.otwebrtc.VideoEncoder;
				getSupportedCodecs(): native.Array<org.otwebrtc.VideoCodecInfo>;
				getImplementations(): native.Array<org.otwebrtc.VideoCodecInfo>;
				getEncoderSelector(): org.otwebrtc.VideoEncoderFactory.VideoEncoderSelector;
			});
			public constructor();
			public getImplementations(): native.Array<org.otwebrtc.VideoCodecInfo>;
			public getSupportedCodecs(): native.Array<org.otwebrtc.VideoCodecInfo>;
			public getEncoderSelector(): org.otwebrtc.VideoEncoderFactory.VideoEncoderSelector;
			public createEncoder(param0: org.otwebrtc.VideoCodecInfo): org.otwebrtc.VideoEncoder;
		}
		export module VideoEncoderFactory {
			export class VideoEncoderSelector {
				public static class: java.lang.Class<org.otwebrtc.VideoEncoderFactory.VideoEncoderSelector>;
				/**
				 * Constructs a new instance of the org.otwebrtc.VideoEncoderFactory$VideoEncoderSelector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCurrentEncoder(param0: org.otwebrtc.VideoCodecInfo): void;
					onAvailableBitrate(param0: number): org.otwebrtc.VideoCodecInfo;
					onEncoderBroken(): org.otwebrtc.VideoCodecInfo;
				});
				public constructor();
				public onAvailableBitrate(param0: number): org.otwebrtc.VideoCodecInfo;
				public onCurrentEncoder(param0: org.otwebrtc.VideoCodecInfo): void;
				public onEncoderBroken(): org.otwebrtc.VideoCodecInfo;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class VideoEncoderFallback extends org.otwebrtc.WrappedNativeVideoEncoder {
			public static class: java.lang.Class<org.otwebrtc.VideoEncoderFallback>;
			public release(): org.otwebrtc.VideoCodecStatus;
			public setRateAllocation(param0: org.otwebrtc.VideoEncoder.BitrateAllocation, param1: number): org.otwebrtc.VideoCodecStatus;
			public encode(param0: org.otwebrtc.VideoFrame, param1: org.otwebrtc.VideoEncoder.EncodeInfo): org.otwebrtc.VideoCodecStatus;
			public getScalingSettings(): org.otwebrtc.VideoEncoder.ScalingSettings;
			public initEncode(param0: org.otwebrtc.VideoEncoder.Settings, param1: org.otwebrtc.VideoEncoder.Callback): org.otwebrtc.VideoCodecStatus;
			public getResolutionBitrateLimits(): native.Array<org.otwebrtc.VideoEncoder.ResolutionBitrateLimits>;
			public getImplementationName(): string;
			public createNativeVideoEncoder(): number;
			public isHardwareEncoder(): boolean;
			public constructor();
			public constructor(param0: org.otwebrtc.VideoEncoder, param1: org.otwebrtc.VideoEncoder);
		}
	}
}

declare module org {
	export module otwebrtc {
		export class VideoEncoderWrapper {
			public static class: java.lang.Class<org.otwebrtc.VideoEncoderWrapper>;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class VideoFileRenderer extends org.otwebrtc.VideoSink {
			public static class: java.lang.Class<org.otwebrtc.VideoFileRenderer>;
			public onFrame(param0: org.otwebrtc.VideoFrame): void;
			public constructor(param0: string, param1: number, param2: number, param3: org.otwebrtc.EglBase.Context);
			public release(): void;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class VideoFrame extends org.otwebrtc.RefCounted {
			public static class: java.lang.Class<org.otwebrtc.VideoFrame>;
			public retain(): void;
			public getRotation(): number;
			public constructor(param0: org.otwebrtc.VideoFrame.Buffer, param1: number, param2: number);
			public getTimestampNs(): number;
			public getRotatedWidth(): number;
			public getRotatedHeight(): number;
			public getBuffer(): org.otwebrtc.VideoFrame.Buffer;
			public release(): void;
		}
		export module VideoFrame {
			export class Buffer extends org.otwebrtc.RefCounted {
				public static class: java.lang.Class<org.otwebrtc.VideoFrame.Buffer>;
				/**
				 * Constructs a new instance of the org.otwebrtc.VideoFrame$Buffer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getWidth(): number;
					getHeight(): number;
					toI420(): org.otwebrtc.VideoFrame.I420Buffer;
					retain(): void;
					release(): void;
					cropAndScale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): org.otwebrtc.VideoFrame.Buffer;
					retain(): void;
					release(): void;
				});
				public constructor();
				public getWidth(): number;
				public getHeight(): number;
				public release(): void;
				public toI420(): org.otwebrtc.VideoFrame.I420Buffer;
				public retain(): void;
				public cropAndScale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): org.otwebrtc.VideoFrame.Buffer;
			}
			export class I420Buffer extends org.otwebrtc.VideoFrame.Buffer {
				public static class: java.lang.Class<org.otwebrtc.VideoFrame.I420Buffer>;
				/**
				 * Constructs a new instance of the org.otwebrtc.VideoFrame$I420Buffer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getDataY(): java.nio.ByteBuffer;
					getDataU(): java.nio.ByteBuffer;
					getDataV(): java.nio.ByteBuffer;
					getStrideY(): number;
					getStrideU(): number;
					getStrideV(): number;
					getWidth(): number;
					getHeight(): number;
					toI420(): org.otwebrtc.VideoFrame.I420Buffer;
					retain(): void;
					release(): void;
					cropAndScale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): org.otwebrtc.VideoFrame.Buffer;
					retain(): void;
					release(): void;
				});
				public constructor();
				public getDataU(): java.nio.ByteBuffer;
				public getDataV(): java.nio.ByteBuffer;
				public getWidth(): number;
				public getHeight(): number;
				public release(): void;
				public getDataY(): java.nio.ByteBuffer;
				public getStrideV(): number;
				public getStrideY(): number;
				public toI420(): org.otwebrtc.VideoFrame.I420Buffer;
				public getStrideU(): number;
				public retain(): void;
				public cropAndScale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): org.otwebrtc.VideoFrame.Buffer;
			}
			export class TextureBuffer extends org.otwebrtc.VideoFrame.Buffer {
				public static class: java.lang.Class<org.otwebrtc.VideoFrame.TextureBuffer>;
				/**
				 * Constructs a new instance of the org.otwebrtc.VideoFrame$TextureBuffer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getType(): org.otwebrtc.VideoFrame.TextureBuffer.Type;
					getTextureId(): number;
					getTransformMatrix(): globalAndroid.graphics.Matrix;
					getWidth(): number;
					getHeight(): number;
					toI420(): org.otwebrtc.VideoFrame.I420Buffer;
					retain(): void;
					release(): void;
					cropAndScale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): org.otwebrtc.VideoFrame.Buffer;
					retain(): void;
					release(): void;
				});
				public constructor();
				public getTransformMatrix(): globalAndroid.graphics.Matrix;
				public getWidth(): number;
				public getHeight(): number;
				public release(): void;
				public getTextureId(): number;
				public toI420(): org.otwebrtc.VideoFrame.I420Buffer;
				public retain(): void;
				public cropAndScale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): org.otwebrtc.VideoFrame.Buffer;
				public getType(): org.otwebrtc.VideoFrame.TextureBuffer.Type;
			}
			export module TextureBuffer {
				export class Type {
					public static class: java.lang.Class<org.otwebrtc.VideoFrame.TextureBuffer.Type>;
					public static OES: org.otwebrtc.VideoFrame.TextureBuffer.Type;
					public static RGB: org.otwebrtc.VideoFrame.TextureBuffer.Type;
					public static values(): native.Array<org.otwebrtc.VideoFrame.TextureBuffer.Type>;
					public getGlTarget(): number;
					public static valueOf(param0: string): org.otwebrtc.VideoFrame.TextureBuffer.Type;
				}
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class VideoFrameDrawer {
			public static class: java.lang.Class<org.otwebrtc.VideoFrameDrawer>;
			public static TAG: string;
			public drawFrame(param0: org.otwebrtc.VideoFrame, param1: org.otwebrtc.RendererCommon.GlDrawer, param2: globalAndroid.graphics.Matrix, param3: number, param4: number, param5: number, param6: number): void;
			public prepareBufferForViewportSize(param0: org.otwebrtc.VideoFrame.Buffer, param1: number, param2: number): org.otwebrtc.VideoFrame.Buffer;
			public drawFrame(param0: org.otwebrtc.VideoFrame, param1: org.otwebrtc.RendererCommon.GlDrawer, param2: globalAndroid.graphics.Matrix): void;
			public drawFrame(param0: org.otwebrtc.VideoFrame, param1: org.otwebrtc.RendererCommon.GlDrawer): void;
			public constructor();
			public static drawTexture(param0: org.otwebrtc.RendererCommon.GlDrawer, param1: org.otwebrtc.VideoFrame.TextureBuffer, param2: globalAndroid.graphics.Matrix, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
			public release(): void;
		}
		export module VideoFrameDrawer {
			export class YuvUploader {
				public static class: java.lang.Class<org.otwebrtc.VideoFrameDrawer.YuvUploader>;
				public release(): void;
				public getYuvTextures(): native.Array<number>;
				public uploadFromBuffer(param0: org.otwebrtc.VideoFrame.I420Buffer): native.Array<number>;
				public uploadYuvData(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<java.nio.ByteBuffer>): native.Array<number>;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class VideoProcessor extends org.otwebrtc.CapturerObserver {
			public static class: java.lang.Class<org.otwebrtc.VideoProcessor>;
			/**
			 * Constructs a new instance of the org.otwebrtc.VideoProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				applyFrameAdaptationParameters(param0: org.otwebrtc.VideoFrame, param1: org.otwebrtc.VideoProcessor.FrameAdaptationParameters): org.otwebrtc.VideoFrame;
				onFrameCaptured(param0: org.otwebrtc.VideoFrame, param1: org.otwebrtc.VideoProcessor.FrameAdaptationParameters): void;
				setSink(param0: org.otwebrtc.VideoSink): void;
				onCapturerStarted(param0: boolean): void;
				onCapturerStopped(): void;
				onFrameCaptured(param0: org.otwebrtc.VideoFrame): void;
			});
			public constructor();
			public setSink(param0: org.otwebrtc.VideoSink): void;
			public onFrameCaptured(param0: org.otwebrtc.VideoFrame, param1: org.otwebrtc.VideoProcessor.FrameAdaptationParameters): void;
			public static applyFrameAdaptationParameters(param0: org.otwebrtc.VideoFrame, param1: org.otwebrtc.VideoProcessor.FrameAdaptationParameters): org.otwebrtc.VideoFrame;
			public onFrameCaptured(param0: org.otwebrtc.VideoFrame): void;
			public onCapturerStopped(): void;
			public onCapturerStarted(param0: boolean): void;
		}
		export module VideoProcessor {
			export class FrameAdaptationParameters {
				public static class: java.lang.Class<org.otwebrtc.VideoProcessor.FrameAdaptationParameters>;
				public cropX: number;
				public cropY: number;
				public cropWidth: number;
				public cropHeight: number;
				public scaleWidth: number;
				public scaleHeight: number;
				public timestampNs: number;
				public drop: boolean;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: boolean);
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class VideoSink {
			public static class: java.lang.Class<org.otwebrtc.VideoSink>;
			/**
			 * Constructs a new instance of the org.otwebrtc.VideoSink interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onFrame(param0: org.otwebrtc.VideoFrame): void;
			});
			public constructor();
			public onFrame(param0: org.otwebrtc.VideoFrame): void;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class VideoSource extends org.otwebrtc.MediaSource {
			public static class: java.lang.Class<org.otwebrtc.VideoSource>;
			public getCapturerObserver(): org.otwebrtc.CapturerObserver;
			public adaptOutputFormat(param0: org.otwebrtc.VideoSource.AspectRatio, param1: java.lang.Integer, param2: org.otwebrtc.VideoSource.AspectRatio, param3: java.lang.Integer, param4: java.lang.Integer): void;
			public adaptOutputFormat(param0: number, param1: number, param2: number): void;
			public setVideoProcessor(param0: org.otwebrtc.VideoProcessor): void;
			public constructor(param0: number);
			public setIsScreencast(param0: boolean): void;
			public dispose(): void;
			public adaptOutputFormat(param0: number, param1: number, param2: number, param3: number, param4: number): void;
		}
		export module VideoSource {
			export class AspectRatio {
				public static class: java.lang.Class<org.otwebrtc.VideoSource.AspectRatio>;
				public static UNDEFINED: org.otwebrtc.VideoSource.AspectRatio;
				public width: number;
				public height: number;
				public constructor(param0: number, param1: number);
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class VideoTrack extends org.otwebrtc.MediaStreamTrack {
			public static class: java.lang.Class<org.otwebrtc.VideoTrack>;
			public removeSink(param0: org.otwebrtc.VideoSink): void;
			public addSink(param0: org.otwebrtc.VideoSink): void;
			public constructor(param0: number);
			public dispose(): void;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class WebRtcClassLoader {
			public static class: java.lang.Class<org.otwebrtc.WebRtcClassLoader>;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class WrappedNativeI420Buffer extends org.otwebrtc.VideoFrame.I420Buffer {
			public static class: java.lang.Class<org.otwebrtc.WrappedNativeI420Buffer>;
			public getStrideV(): number;
			public getStrideU(): number;
			public getHeight(): number;
			public getDataU(): java.nio.ByteBuffer;
			public retain(): void;
			public cropAndScale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): org.otwebrtc.VideoFrame.Buffer;
			public getStrideY(): number;
			public getWidth(): number;
			public toI420(): org.otwebrtc.VideoFrame.I420Buffer;
			public getDataV(): java.nio.ByteBuffer;
			public getDataY(): java.nio.ByteBuffer;
			public release(): void;
		}
	}
}

declare module org {
	export module otwebrtc {
		export abstract class WrappedNativeVideoDecoder extends org.otwebrtc.VideoDecoder {
			public static class: java.lang.Class<org.otwebrtc.WrappedNativeVideoDecoder>;
			public release(): org.otwebrtc.VideoCodecStatus;
			public decode(param0: org.otwebrtc.EncodedImage, param1: org.otwebrtc.VideoDecoder.DecodeInfo): org.otwebrtc.VideoCodecStatus;
			public getImplementationName(): string;
			public createNativeVideoDecoder(): number;
			public getPrefersLateDecoding(): boolean;
			public constructor();
			public initDecode(param0: org.otwebrtc.VideoDecoder.Settings, param1: org.otwebrtc.VideoDecoder.Callback): org.otwebrtc.VideoCodecStatus;
		}
	}
}

declare module org {
	export module otwebrtc {
		export abstract class WrappedNativeVideoEncoder extends org.otwebrtc.VideoEncoder {
			public static class: java.lang.Class<org.otwebrtc.WrappedNativeVideoEncoder>;
			public release(): org.otwebrtc.VideoCodecStatus;
			public setRateAllocation(param0: org.otwebrtc.VideoEncoder.BitrateAllocation, param1: number): org.otwebrtc.VideoCodecStatus;
			public encode(param0: org.otwebrtc.VideoFrame, param1: org.otwebrtc.VideoEncoder.EncodeInfo): org.otwebrtc.VideoCodecStatus;
			public getScalingSettings(): org.otwebrtc.VideoEncoder.ScalingSettings;
			public initEncode(param0: org.otwebrtc.VideoEncoder.Settings, param1: org.otwebrtc.VideoEncoder.Callback): org.otwebrtc.VideoCodecStatus;
			public getImplementationName(): string;
			public getResolutionBitrateLimits(): native.Array<org.otwebrtc.VideoEncoder.ResolutionBitrateLimits>;
			public createNativeVideoEncoder(): number;
			public isHardwareEncoder(): boolean;
			public constructor();
		}
	}
}

declare module org {
	export module otwebrtc {
		export class YuvConverter {
			public static class: java.lang.Class<org.otwebrtc.YuvConverter>;
			public constructor();
			public constructor(param0: org.otwebrtc.VideoFrameDrawer);
			public convert(param0: org.otwebrtc.VideoFrame.TextureBuffer): org.otwebrtc.VideoFrame.I420Buffer;
			public release(): void;
		}
		export module YuvConverter {
			export class ShaderCallbacks extends org.otwebrtc.GlGenericDrawer.ShaderCallbacks {
				public static class: java.lang.Class<org.otwebrtc.YuvConverter.ShaderCallbacks>;
				public setPlaneU(): void;
				public onNewShader(param0: org.otwebrtc.GlShader): void;
				public onPrepareShader(param0: org.otwebrtc.GlShader, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number): void;
				public setPlaneY(): void;
				public setPlaneV(): void;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export class YuvConverter61 {
			public static class: java.lang.Class<org.otwebrtc.YuvConverter61>;
			public convert(param0: java.nio.ByteBuffer, param1: number, param2: number, param3: number, param4: number, param5: native.Array<number>): void;
			public constructor();
			public release(): void;
		}
	}
}

declare module org {
	export module otwebrtc {
		export class YuvHelper {
			public static class: java.lang.Class<org.otwebrtc.YuvHelper>;
			public static copyPlane(param0: java.nio.ByteBuffer, param1: number, param2: java.nio.ByteBuffer, param3: number, param4: number, param5: number): void;
			public static I420ToNV12(param0: java.nio.ByteBuffer, param1: number, param2: java.nio.ByteBuffer, param3: number, param4: java.nio.ByteBuffer, param5: number, param6: java.nio.ByteBuffer, param7: number, param8: number): void;
			public static ABGRToI420(param0: java.nio.ByteBuffer, param1: number, param2: java.nio.ByteBuffer, param3: number, param4: java.nio.ByteBuffer, param5: number, param6: java.nio.ByteBuffer, param7: number, param8: number, param9: number): void;
			public constructor();
			public static I420Copy(param0: java.nio.ByteBuffer, param1: number, param2: java.nio.ByteBuffer, param3: number, param4: java.nio.ByteBuffer, param5: number, param6: java.nio.ByteBuffer, param7: number, param8: java.nio.ByteBuffer, param9: number, param10: java.nio.ByteBuffer, param11: number, param12: number, param13: number): void;
			public static I420ToNV12(param0: java.nio.ByteBuffer, param1: number, param2: java.nio.ByteBuffer, param3: number, param4: java.nio.ByteBuffer, param5: number, param6: java.nio.ByteBuffer, param7: number, param8: java.nio.ByteBuffer, param9: number, param10: number, param11: number): void;
			public static I420Rotate(param0: java.nio.ByteBuffer, param1: number, param2: java.nio.ByteBuffer, param3: number, param4: java.nio.ByteBuffer, param5: number, param6: java.nio.ByteBuffer, param7: number, param8: java.nio.ByteBuffer, param9: number, param10: java.nio.ByteBuffer, param11: number, param12: number, param13: number, param14: number): void;
			public static I420Copy(param0: java.nio.ByteBuffer, param1: number, param2: java.nio.ByteBuffer, param3: number, param4: java.nio.ByteBuffer, param5: number, param6: java.nio.ByteBuffer, param7: number, param8: number): void;
			public static I420Rotate(param0: java.nio.ByteBuffer, param1: number, param2: java.nio.ByteBuffer, param3: number, param4: java.nio.ByteBuffer, param5: number, param6: java.nio.ByteBuffer, param7: number, param8: number, param9: number): void;
		}
	}
}

declare module org {
	export module otwebrtc {
		export module audio {
			export class AudioDeviceModule {
				public static class: java.lang.Class<org.otwebrtc.audio.AudioDeviceModule>;
				/**
				 * Constructs a new instance of the org.otwebrtc.audio.AudioDeviceModule interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getNativeAudioDeviceModulePointer(): number;
					release(): void;
					setSpeakerMute(param0: boolean): void;
					setMicrophoneMute(param0: boolean): void;
				});
				public constructor();
				public release(): void;
				public getNativeAudioDeviceModulePointer(): number;
				public setSpeakerMute(param0: boolean): void;
				public setMicrophoneMute(param0: boolean): void;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export module audio {
			export class JavaAudioDeviceModule extends org.otwebrtc.audio.AudioDeviceModule {
				public static class: java.lang.Class<org.otwebrtc.audio.JavaAudioDeviceModule>;
				public static builder(param0: globalAndroid.content.Context): org.otwebrtc.audio.JavaAudioDeviceModule.Builder;
				public static isBuiltInAcousticEchoCancelerSupported(): boolean;
				public release(): void;
				public getNativeAudioDeviceModulePointer(): number;
				public setSpeakerMute(param0: boolean): void;
				public setMicrophoneMute(param0: boolean): void;
				public setPreferredInputDevice(param0: globalAndroid.media.AudioDeviceInfo): void;
				public static isBuiltInNoiseSuppressorSupported(): boolean;
			}
			export module JavaAudioDeviceModule {
				export class AudioRecordErrorCallback {
					public static class: java.lang.Class<org.otwebrtc.audio.JavaAudioDeviceModule.AudioRecordErrorCallback>;
					/**
					 * Constructs a new instance of the org.otwebrtc.audio.JavaAudioDeviceModule$AudioRecordErrorCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onWebRtcAudioRecordInitError(param0: string): void;
						onWebRtcAudioRecordStartError(param0: org.otwebrtc.audio.JavaAudioDeviceModule.AudioRecordStartErrorCode, param1: string): void;
						onWebRtcAudioRecordError(param0: string): void;
					});
					public constructor();
					public onWebRtcAudioRecordError(param0: string): void;
					public onWebRtcAudioRecordInitError(param0: string): void;
					public onWebRtcAudioRecordStartError(param0: org.otwebrtc.audio.JavaAudioDeviceModule.AudioRecordStartErrorCode, param1: string): void;
				}
				export class AudioRecordStartErrorCode {
					public static class: java.lang.Class<org.otwebrtc.audio.JavaAudioDeviceModule.AudioRecordStartErrorCode>;
					public static AUDIO_RECORD_START_EXCEPTION: org.otwebrtc.audio.JavaAudioDeviceModule.AudioRecordStartErrorCode;
					public static AUDIO_RECORD_START_STATE_MISMATCH: org.otwebrtc.audio.JavaAudioDeviceModule.AudioRecordStartErrorCode;
					public static values(): native.Array<org.otwebrtc.audio.JavaAudioDeviceModule.AudioRecordStartErrorCode>;
					public static valueOf(param0: string): org.otwebrtc.audio.JavaAudioDeviceModule.AudioRecordStartErrorCode;
				}
				export class AudioRecordStateCallback {
					public static class: java.lang.Class<org.otwebrtc.audio.JavaAudioDeviceModule.AudioRecordStateCallback>;
					/**
					 * Constructs a new instance of the org.otwebrtc.audio.JavaAudioDeviceModule$AudioRecordStateCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onWebRtcAudioRecordStart(): void;
						onWebRtcAudioRecordStop(): void;
					});
					public constructor();
					public onWebRtcAudioRecordStop(): void;
					public onWebRtcAudioRecordStart(): void;
				}
				export class AudioSamples {
					public static class: java.lang.Class<org.otwebrtc.audio.JavaAudioDeviceModule.AudioSamples>;
					public getChannelCount(): number;
					public getData(): native.Array<number>;
					public getAudioFormat(): number;
					public getSampleRate(): number;
					public constructor(param0: number, param1: number, param2: number, param3: native.Array<number>);
				}
				export class AudioTrackErrorCallback {
					public static class: java.lang.Class<org.otwebrtc.audio.JavaAudioDeviceModule.AudioTrackErrorCallback>;
					/**
					 * Constructs a new instance of the org.otwebrtc.audio.JavaAudioDeviceModule$AudioTrackErrorCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onWebRtcAudioTrackInitError(param0: string): void;
						onWebRtcAudioTrackStartError(param0: org.otwebrtc.audio.JavaAudioDeviceModule.AudioTrackStartErrorCode, param1: string): void;
						onWebRtcAudioTrackError(param0: string): void;
					});
					public constructor();
					public onWebRtcAudioTrackStartError(param0: org.otwebrtc.audio.JavaAudioDeviceModule.AudioTrackStartErrorCode, param1: string): void;
					public onWebRtcAudioTrackInitError(param0: string): void;
					public onWebRtcAudioTrackError(param0: string): void;
				}
				export class AudioTrackStartErrorCode {
					public static class: java.lang.Class<org.otwebrtc.audio.JavaAudioDeviceModule.AudioTrackStartErrorCode>;
					public static AUDIO_TRACK_START_EXCEPTION: org.otwebrtc.audio.JavaAudioDeviceModule.AudioTrackStartErrorCode;
					public static AUDIO_TRACK_START_STATE_MISMATCH: org.otwebrtc.audio.JavaAudioDeviceModule.AudioTrackStartErrorCode;
					public static values(): native.Array<org.otwebrtc.audio.JavaAudioDeviceModule.AudioTrackStartErrorCode>;
					public static valueOf(param0: string): org.otwebrtc.audio.JavaAudioDeviceModule.AudioTrackStartErrorCode;
				}
				export class AudioTrackStateCallback {
					public static class: java.lang.Class<org.otwebrtc.audio.JavaAudioDeviceModule.AudioTrackStateCallback>;
					/**
					 * Constructs a new instance of the org.otwebrtc.audio.JavaAudioDeviceModule$AudioTrackStateCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onWebRtcAudioTrackStart(): void;
						onWebRtcAudioTrackStop(): void;
					});
					public constructor();
					public onWebRtcAudioTrackStop(): void;
					public onWebRtcAudioTrackStart(): void;
				}
				export class Builder {
					public static class: java.lang.Class<org.otwebrtc.audio.JavaAudioDeviceModule.Builder>;
					public setUseHardwareNoiseSuppressor(param0: boolean): org.otwebrtc.audio.JavaAudioDeviceModule.Builder;
					public setAudioSource(param0: number): org.otwebrtc.audio.JavaAudioDeviceModule.Builder;
					public setAudioRecordErrorCallback(param0: org.otwebrtc.audio.JavaAudioDeviceModule.AudioRecordErrorCallback): org.otwebrtc.audio.JavaAudioDeviceModule.Builder;
					public setAudioTrackStateCallback(param0: org.otwebrtc.audio.JavaAudioDeviceModule.AudioTrackStateCallback): org.otwebrtc.audio.JavaAudioDeviceModule.Builder;
					public setUseStereoOutput(param0: boolean): org.otwebrtc.audio.JavaAudioDeviceModule.Builder;
					public createAudioDeviceModule(): org.otwebrtc.audio.AudioDeviceModule;
					public setOutputSampleRate(param0: number): org.otwebrtc.audio.JavaAudioDeviceModule.Builder;
					public setSamplesReadyCallback(param0: org.otwebrtc.audio.JavaAudioDeviceModule.SamplesReadyCallback): org.otwebrtc.audio.JavaAudioDeviceModule.Builder;
					public setAudioRecordStateCallback(param0: org.otwebrtc.audio.JavaAudioDeviceModule.AudioRecordStateCallback): org.otwebrtc.audio.JavaAudioDeviceModule.Builder;
					public setUseStereoInput(param0: boolean): org.otwebrtc.audio.JavaAudioDeviceModule.Builder;
					public setUseHardwareAcousticEchoCanceler(param0: boolean): org.otwebrtc.audio.JavaAudioDeviceModule.Builder;
					public setInputSampleRate(param0: number): org.otwebrtc.audio.JavaAudioDeviceModule.Builder;
					public setAudioFormat(param0: number): org.otwebrtc.audio.JavaAudioDeviceModule.Builder;
					public setAudioTrackErrorCallback(param0: org.otwebrtc.audio.JavaAudioDeviceModule.AudioTrackErrorCallback): org.otwebrtc.audio.JavaAudioDeviceModule.Builder;
					public setSampleRate(param0: number): org.otwebrtc.audio.JavaAudioDeviceModule.Builder;
				}
				export class SamplesReadyCallback {
					public static class: java.lang.Class<org.otwebrtc.audio.JavaAudioDeviceModule.SamplesReadyCallback>;
					/**
					 * Constructs a new instance of the org.otwebrtc.audio.JavaAudioDeviceModule$SamplesReadyCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onWebRtcAudioRecordSamplesReady(param0: org.otwebrtc.audio.JavaAudioDeviceModule.AudioSamples): void;
					});
					public constructor();
					public onWebRtcAudioRecordSamplesReady(param0: org.otwebrtc.audio.JavaAudioDeviceModule.AudioSamples): void;
				}
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export module audio {
			export class VolumeLogger {
				public static class: java.lang.Class<org.otwebrtc.audio.VolumeLogger>;
				public stop(): void;
				public start(): void;
				public constructor(param0: globalAndroid.media.AudioManager);
			}
			export module VolumeLogger {
				export class LogVolumeTask {
					public static class: java.lang.Class<org.otwebrtc.audio.VolumeLogger.LogVolumeTask>;
					public run(): void;
				}
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export module audio {
			export class WebRtcAudioEffects {
				public static class: java.lang.Class<org.otwebrtc.audio.WebRtcAudioEffects>;
				public static isNoiseSuppressorSupported(): boolean;
				public enable(param0: number): void;
				public release(): void;
				public static isAcousticEchoCancelerSupported(): boolean;
				public setAEC(param0: boolean): boolean;
				public setNS(param0: boolean): boolean;
				public constructor();
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export module audio {
			export class WebRtcAudioManager {
				public static class: java.lang.Class<org.otwebrtc.audio.WebRtcAudioManager>;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export module audio {
			export class WebRtcAudioRecord {
				public static class: java.lang.Class<org.otwebrtc.audio.WebRtcAudioRecord>;
				public static DEFAULT_AUDIO_SOURCE: number;
				public static DEFAULT_AUDIO_FORMAT: number;
				public setNativeAudioRecord(param0: number): void;
				public setMicrophoneMute(param0: boolean): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.media.AudioManager, param2: number, param3: number, param4: org.otwebrtc.audio.JavaAudioDeviceModule.AudioRecordErrorCallback, param5: org.otwebrtc.audio.JavaAudioDeviceModule.AudioRecordStateCallback, param6: org.otwebrtc.audio.JavaAudioDeviceModule.SamplesReadyCallback, param7: boolean, param8: boolean);
			}
			export module WebRtcAudioRecord {
				export class AudioRecordThread {
					public static class: java.lang.Class<org.otwebrtc.audio.WebRtcAudioRecord.AudioRecordThread>;
					public constructor(param0: org.otwebrtc.audio.WebRtcAudioRecord, param1: string);
					public run(): void;
					public stopThread(): void;
				}
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export module audio {
			export class WebRtcAudioTrack {
				public static class: java.lang.Class<org.otwebrtc.audio.WebRtcAudioTrack>;
				public setSpeakerMute(param0: boolean): void;
				public setNativeAudioTrack(param0: number): void;
			}
			export module WebRtcAudioTrack {
				export class AudioTrackThread {
					public static class: java.lang.Class<org.otwebrtc.audio.WebRtcAudioTrack.AudioTrackThread>;
					public constructor(param0: org.otwebrtc.audio.WebRtcAudioTrack, param1: string);
					public run(): void;
					public stopThread(): void;
				}
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export module audio {
			export class WebRtcAudioUtils {
				public static class: java.lang.Class<org.otwebrtc.audio.WebRtcAudioUtils>;
				public static audioEncodingToString(param0: number): string;
				public static getThreadInfo(): string;
				public static runningOnEmulator(): boolean;
				public static audioSourceToString(param0: number): string;
				public static channelMaskToString(param0: number): string;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export module voiceengine {
			export class BuildInfo {
				public static class: java.lang.Class<org.otwebrtc.voiceengine.BuildInfo>;
				public static getDevice(): string;
				public static getBuildType(): string;
				public static getSdkVersion(): number;
				public static getAndroidBuildId(): string;
				public static getProduct(): string;
				public static getDeviceManufacturer(): string;
				public static getDeviceModel(): string;
				public constructor();
				public static getBrand(): string;
				public static getBuildRelease(): string;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export module voiceengine {
			export class WebRtcAudioEffects {
				public static class: java.lang.Class<org.otwebrtc.voiceengine.WebRtcAudioEffects>;
				public static canUseAcousticEchoCanceler(): boolean;
				public static isNoiseSuppressorSupported(): boolean;
				public static create(): org.otwebrtc.voiceengine.WebRtcAudioEffects;
				public static canUseNoiseSuppressor(): boolean;
				public enable(param0: number): void;
				public release(): void;
				public static isAcousticEchoCancelerSupported(): boolean;
				public static isAcousticEchoCancelerBlacklisted(): boolean;
				public static isNoiseSuppressorBlacklisted(): boolean;
				public setAEC(param0: boolean): boolean;
				public setNS(param0: boolean): boolean;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export module voiceengine {
			export class WebRtcAudioManager {
				public static class: java.lang.Class<org.otwebrtc.voiceengine.WebRtcAudioManager>;
				public static setStereoInput(param0: boolean): void;
				public static getStereoInput(): boolean;
				public isLowLatencyInputSupported(): boolean;
				public static setStereoOutput(param0: boolean): void;
				public static getStereoOutput(): boolean;
				public static setBlacklistDeviceForOpenSLESUsage(param0: boolean): void;
			}
			export module WebRtcAudioManager {
				export class VolumeLogger {
					public static class: java.lang.Class<org.otwebrtc.voiceengine.WebRtcAudioManager.VolumeLogger>;
					public constructor(param0: globalAndroid.media.AudioManager);
					public start(): void;
				}
				export module VolumeLogger {
					export class LogVolumeTask {
						public static class: java.lang.Class<org.otwebrtc.voiceengine.WebRtcAudioManager.VolumeLogger.LogVolumeTask>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export module voiceengine {
			export class WebRtcAudioRecord {
				public static class: java.lang.Class<org.otwebrtc.voiceengine.WebRtcAudioRecord>;
				public static setAudioSource(param0: number): void;
				public static setMicrophoneMute(param0: boolean): void;
				public static setOnAudioSamplesReady(param0: org.otwebrtc.voiceengine.WebRtcAudioRecord.WebRtcAudioRecordSamplesReadyCallback): void;
				public static setErrorCallback(param0: org.otwebrtc.voiceengine.WebRtcAudioRecord.WebRtcAudioRecordErrorCallback): void;
			}
			export module WebRtcAudioRecord {
				export class AudioRecordStartErrorCode {
					public static class: java.lang.Class<org.otwebrtc.voiceengine.WebRtcAudioRecord.AudioRecordStartErrorCode>;
					public static AUDIO_RECORD_START_EXCEPTION: org.otwebrtc.voiceengine.WebRtcAudioRecord.AudioRecordStartErrorCode;
					public static AUDIO_RECORD_START_STATE_MISMATCH: org.otwebrtc.voiceengine.WebRtcAudioRecord.AudioRecordStartErrorCode;
					public static values(): native.Array<org.otwebrtc.voiceengine.WebRtcAudioRecord.AudioRecordStartErrorCode>;
					public static valueOf(param0: string): org.otwebrtc.voiceengine.WebRtcAudioRecord.AudioRecordStartErrorCode;
				}
				export class AudioRecordThread {
					public static class: java.lang.Class<org.otwebrtc.voiceengine.WebRtcAudioRecord.AudioRecordThread>;
					public run(): void;
					public stopThread(): void;
					public constructor(param0: org.otwebrtc.voiceengine.WebRtcAudioRecord, param1: string);
				}
				export class AudioSamples {
					public static class: java.lang.Class<org.otwebrtc.voiceengine.WebRtcAudioRecord.AudioSamples>;
					public getChannelCount(): number;
					public getData(): native.Array<number>;
					public getAudioFormat(): number;
					public getSampleRate(): number;
				}
				export class WebRtcAudioRecordErrorCallback {
					public static class: java.lang.Class<org.otwebrtc.voiceengine.WebRtcAudioRecord.WebRtcAudioRecordErrorCallback>;
					/**
					 * Constructs a new instance of the org.otwebrtc.voiceengine.WebRtcAudioRecord$WebRtcAudioRecordErrorCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onWebRtcAudioRecordInitError(param0: string): void;
						onWebRtcAudioRecordStartError(param0: org.otwebrtc.voiceengine.WebRtcAudioRecord.AudioRecordStartErrorCode, param1: string): void;
						onWebRtcAudioRecordError(param0: string): void;
					});
					public constructor();
					public onWebRtcAudioRecordStartError(param0: org.otwebrtc.voiceengine.WebRtcAudioRecord.AudioRecordStartErrorCode, param1: string): void;
					public onWebRtcAudioRecordError(param0: string): void;
					public onWebRtcAudioRecordInitError(param0: string): void;
				}
				export class WebRtcAudioRecordSamplesReadyCallback {
					public static class: java.lang.Class<org.otwebrtc.voiceengine.WebRtcAudioRecord.WebRtcAudioRecordSamplesReadyCallback>;
					/**
					 * Constructs a new instance of the org.otwebrtc.voiceengine.WebRtcAudioRecord$WebRtcAudioRecordSamplesReadyCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onWebRtcAudioRecordSamplesReady(param0: org.otwebrtc.voiceengine.WebRtcAudioRecord.AudioSamples): void;
					});
					public constructor();
					public onWebRtcAudioRecordSamplesReady(param0: org.otwebrtc.voiceengine.WebRtcAudioRecord.AudioSamples): void;
				}
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export module voiceengine {
			export class WebRtcAudioTrack {
				public static class: java.lang.Class<org.otwebrtc.voiceengine.WebRtcAudioTrack>;
				public static setAudioTrackUsageAttribute(param0: number): void;
				public static setErrorCallback(param0: org.otwebrtc.voiceengine.WebRtcAudioTrack.ErrorCallback): void;
				public static setErrorCallback(param0: org.otwebrtc.voiceengine.WebRtcAudioTrack.WebRtcAudioTrackErrorCallback): void;
				public static setSpeakerMute(param0: boolean): void;
			}
			export module WebRtcAudioTrack {
				export class AudioTrackStartErrorCode {
					public static class: java.lang.Class<org.otwebrtc.voiceengine.WebRtcAudioTrack.AudioTrackStartErrorCode>;
					public static AUDIO_TRACK_START_EXCEPTION: org.otwebrtc.voiceengine.WebRtcAudioTrack.AudioTrackStartErrorCode;
					public static AUDIO_TRACK_START_STATE_MISMATCH: org.otwebrtc.voiceengine.WebRtcAudioTrack.AudioTrackStartErrorCode;
					public static values(): native.Array<org.otwebrtc.voiceengine.WebRtcAudioTrack.AudioTrackStartErrorCode>;
					public static valueOf(param0: string): org.otwebrtc.voiceengine.WebRtcAudioTrack.AudioTrackStartErrorCode;
				}
				export class AudioTrackThread {
					public static class: java.lang.Class<org.otwebrtc.voiceengine.WebRtcAudioTrack.AudioTrackThread>;
					public run(): void;
					public stopThread(): void;
					public constructor(param0: org.otwebrtc.voiceengine.WebRtcAudioTrack, param1: string);
				}
				export class ErrorCallback {
					public static class: java.lang.Class<org.otwebrtc.voiceengine.WebRtcAudioTrack.ErrorCallback>;
					/**
					 * Constructs a new instance of the org.otwebrtc.voiceengine.WebRtcAudioTrack$ErrorCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onWebRtcAudioTrackInitError(param0: string): void;
						onWebRtcAudioTrackStartError(param0: org.otwebrtc.voiceengine.WebRtcAudioTrack.AudioTrackStartErrorCode, param1: string): void;
						onWebRtcAudioTrackError(param0: string): void;
					});
					public constructor();
					public onWebRtcAudioTrackInitError(param0: string): void;
					public onWebRtcAudioTrackStartError(param0: org.otwebrtc.voiceengine.WebRtcAudioTrack.AudioTrackStartErrorCode, param1: string): void;
					public onWebRtcAudioTrackError(param0: string): void;
				}
				export class WebRtcAudioTrackErrorCallback {
					public static class: java.lang.Class<org.otwebrtc.voiceengine.WebRtcAudioTrack.WebRtcAudioTrackErrorCallback>;
					/**
					 * Constructs a new instance of the org.otwebrtc.voiceengine.WebRtcAudioTrack$WebRtcAudioTrackErrorCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onWebRtcAudioTrackInitError(param0: string): void;
						onWebRtcAudioTrackStartError(param0: string): void;
						onWebRtcAudioTrackError(param0: string): void;
					});
					public constructor();
					public onWebRtcAudioTrackStartError(param0: string): void;
					public onWebRtcAudioTrackInitError(param0: string): void;
					public onWebRtcAudioTrackError(param0: string): void;
				}
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export module voiceengine {
			export class WebRtcAudioUtils {
				public static class: java.lang.Class<org.otwebrtc.voiceengine.WebRtcAudioUtils>;
				public static getBlackListedModelsForAecUsage(): java.util.List<string>;
				public static deviceIsBlacklistedForOpenSLESUsage(): boolean;
				public static useWebRtcBasedNoiseSuppressor(): boolean;
				public static isAcousticEchoCancelerSupported(): boolean;
				public static setDefaultSampleRateHz(param0: number): void;
				public static getThreadInfo(): string;
				public static getDefaultSampleRateHz(): number;
				public static setWebRtcBasedAutomaticGainControl(param0: boolean): void;
				public static useWebRtcBasedAutomaticGainControl(): boolean;
				public constructor();
				public static isNoiseSuppressorSupported(): boolean;
				public static isAutomaticGainControlSupported(): boolean;
				public static runningOnEmulator(): boolean;
				public static setWebRtcBasedAcousticEchoCanceler(param0: boolean): void;
				public static setWebRtcBasedNoiseSuppressor(param0: boolean): void;
				public static useWebRtcBasedAcousticEchoCanceler(): boolean;
				public static isDefaultSampleRateOverridden(): boolean;
				public static getBlackListedModelsForNsUsage(): java.util.List<string>;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export module voiceengine61 {
			export class BuildInfo {
				public static class: java.lang.Class<org.otwebrtc.voiceengine61.BuildInfo>;
				public static getDevice(): string;
				public static getBuildType(): string;
				public static getSdkVersion(): number;
				public static getAndroidBuildId(): string;
				public static getProduct(): string;
				public static getDeviceManufacturer(): string;
				public static getDeviceModel(): string;
				public constructor();
				public static getBrand(): string;
				public static getBuildRelease(): string;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export module voiceengine61 {
			export class WebRtcAudioEffects {
				public static class: java.lang.Class<org.otwebrtc.voiceengine61.WebRtcAudioEffects>;
				public static canUseAcousticEchoCanceler(): boolean;
				public static isNoiseSuppressorSupported(): boolean;
				public static canUseNoiseSuppressor(): boolean;
				public enable(param0: number): void;
				public release(): void;
				public static isAcousticEchoCancelerSupported(): boolean;
				public static isAcousticEchoCancelerBlacklisted(): boolean;
				public static isNoiseSuppressorBlacklisted(): boolean;
				public static create(): org.otwebrtc.voiceengine61.WebRtcAudioEffects;
				public setAEC(param0: boolean): boolean;
				public setNS(param0: boolean): boolean;
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export module voiceengine61 {
			export class WebRtcAudioManager {
				public static class: java.lang.Class<org.otwebrtc.voiceengine61.WebRtcAudioManager>;
				public static setStereoInput(param0: boolean): void;
				public static getStereoInput(): boolean;
				public isLowLatencyInputSupported(): boolean;
				public static setStereoOutput(param0: boolean): void;
				public static getStereoOutput(): boolean;
				public static setBlacklistDeviceForOpenSLESUsage(param0: boolean): void;
			}
			export module WebRtcAudioManager {
				export class VolumeLogger {
					public static class: java.lang.Class<org.otwebrtc.voiceengine61.WebRtcAudioManager.VolumeLogger>;
					public constructor(param0: globalAndroid.media.AudioManager);
					public start(): void;
				}
				export module VolumeLogger {
					export class LogVolumeTask {
						public static class: java.lang.Class<org.otwebrtc.voiceengine61.WebRtcAudioManager.VolumeLogger.LogVolumeTask>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export module voiceengine61 {
			export class WebRtcAudioRecord {
				public static class: java.lang.Class<org.otwebrtc.voiceengine61.WebRtcAudioRecord>;
				public static setErrorCallback(param0: org.otwebrtc.voiceengine61.WebRtcAudioRecord.WebRtcAudioRecordErrorCallback): void;
				public static setMicrophoneMute(param0: boolean): void;
			}
			export module WebRtcAudioRecord {
				export class AudioRecordStartErrorCode {
					public static class: java.lang.Class<org.otwebrtc.voiceengine61.WebRtcAudioRecord.AudioRecordStartErrorCode>;
					public static AUDIO_RECORD_START_EXCEPTION: org.otwebrtc.voiceengine61.WebRtcAudioRecord.AudioRecordStartErrorCode;
					public static AUDIO_RECORD_START_STATE_MISMATCH: org.otwebrtc.voiceengine61.WebRtcAudioRecord.AudioRecordStartErrorCode;
					public static values(): native.Array<org.otwebrtc.voiceengine61.WebRtcAudioRecord.AudioRecordStartErrorCode>;
					public static valueOf(param0: string): org.otwebrtc.voiceengine61.WebRtcAudioRecord.AudioRecordStartErrorCode;
				}
				export class AudioRecordThread {
					public static class: java.lang.Class<org.otwebrtc.voiceengine61.WebRtcAudioRecord.AudioRecordThread>;
					public constructor(param0: org.otwebrtc.voiceengine61.WebRtcAudioRecord, param1: string);
					public run(): void;
					public stopThread(): void;
				}
				export class WebRtcAudioRecordErrorCallback {
					public static class: java.lang.Class<org.otwebrtc.voiceengine61.WebRtcAudioRecord.WebRtcAudioRecordErrorCallback>;
					/**
					 * Constructs a new instance of the org.otwebrtc.voiceengine61.WebRtcAudioRecord$WebRtcAudioRecordErrorCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onWebRtcAudioRecordInitError(param0: string): void;
						onWebRtcAudioRecordStartError(param0: org.otwebrtc.voiceengine61.WebRtcAudioRecord.AudioRecordStartErrorCode, param1: string): void;
						onWebRtcAudioRecordError(param0: string): void;
					});
					public constructor();
					public onWebRtcAudioRecordError(param0: string): void;
					public onWebRtcAudioRecordStartError(param0: org.otwebrtc.voiceengine61.WebRtcAudioRecord.AudioRecordStartErrorCode, param1: string): void;
					public onWebRtcAudioRecordInitError(param0: string): void;
				}
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export module voiceengine61 {
			export class WebRtcAudioTrack {
				public static class: java.lang.Class<org.otwebrtc.voiceengine61.WebRtcAudioTrack>;
				public static setErrorCallback(param0: org.otwebrtc.voiceengine61.WebRtcAudioTrack.WebRtcAudioTrackErrorCallback): void;
				public static setSpeakerMute(param0: boolean): void;
			}
			export module WebRtcAudioTrack {
				export class AudioTrackThread {
					public static class: java.lang.Class<org.otwebrtc.voiceengine61.WebRtcAudioTrack.AudioTrackThread>;
					public constructor(param0: org.otwebrtc.voiceengine61.WebRtcAudioTrack, param1: string);
					public joinThread(): void;
					public run(): void;
				}
				export class WebRtcAudioTrackErrorCallback {
					public static class: java.lang.Class<org.otwebrtc.voiceengine61.WebRtcAudioTrack.WebRtcAudioTrackErrorCallback>;
					/**
					 * Constructs a new instance of the org.otwebrtc.voiceengine61.WebRtcAudioTrack$WebRtcAudioTrackErrorCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onWebRtcAudioTrackInitError(param0: string): void;
						onWebRtcAudioTrackStartError(param0: string): void;
						onWebRtcAudioTrackError(param0: string): void;
					});
					public constructor();
					public onWebRtcAudioTrackStartError(param0: string): void;
					public onWebRtcAudioTrackInitError(param0: string): void;
					public onWebRtcAudioTrackError(param0: string): void;
				}
			}
		}
	}
}

declare module org {
	export module otwebrtc {
		export module voiceengine61 {
			export class WebRtcAudioUtils {
				public static class: java.lang.Class<org.otwebrtc.voiceengine61.WebRtcAudioUtils>;
				public static hasPermission(param0: globalAndroid.content.Context, param1: string): boolean;
				public static deviceIsBlacklistedForOpenSLESUsage(): boolean;
				public static useWebRtcBasedNoiseSuppressor(): boolean;
				public static isAcousticEchoCancelerSupported(): boolean;
				public static setDefaultSampleRateHz(param0: number): void;
				public static getThreadInfo(): string;
				public static useWebRtcBasedAutomaticGainControl(): boolean;
				public constructor();
				public static runningOnEmulator(): boolean;
				public static useWebRtcBasedAcousticEchoCanceler(): boolean;
				public static runningOnJellyBeanMR1OrHigher(): boolean;
				public static isDefaultSampleRateOverridden(): boolean;
				public static logDeviceInfo(param0: string): void;
				public static getBlackListedModelsForAecUsage(): java.util.List<string>;
				public static runningOnLollipopOrHigher(): boolean;
				public static runningOnJellyBeanMR2OrHigher(): boolean;
				public static getDefaultSampleRateHz(): number;
				public static runningOnNougatOrHigher(): boolean;
				public static setWebRtcBasedAutomaticGainControl(param0: boolean): void;
				public static isNoiseSuppressorSupported(): boolean;
				public static isAutomaticGainControlSupported(): boolean;
				public static setWebRtcBasedAcousticEchoCanceler(param0: boolean): void;
				public static runningOnMarshmallowOrHigher(): boolean;
				public static setWebRtcBasedNoiseSuppressor(param0: boolean): void;
				public static getBlackListedModelsForNsUsage(): java.util.List<string>;
			}
		}
	}
}

//Generics information:
//org.otwebrtc.CameraEnumerationAndroid.ClosestComparator:1
//org.otwebrtc.Predicate:1


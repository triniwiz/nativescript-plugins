declare module io {
  export module github {
    export module triniwiz {
      export module fancycamera {
        export class BuildConfig {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.BuildConfig>;
          public static DEBUG: boolean;
          public static LIBRARY_PACKAGE_NAME: string;
          public static BUILD_TYPE: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module github {
    export module triniwiz {
      export module fancycamera {
        export class Camera extends io.github.triniwiz.fancycamera.CameraBase {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.Camera>;
          public getDisplayRatio(): string;
          public cameraRecording(): boolean;
          public getAllowExifRotation(): boolean;
          public setMaxVideoFrameRate(param0: number): void;
          public getDisableHEVC(): boolean;
          public getAutoFocus(): boolean;
          public setAllowExifRotation(param0: boolean): void;
          public getQuality(): io.github.triniwiz.fancycamera.Quality;
          public isStarted(): boolean;
          public startPreview(): void;
          public getMaxAudioBitRate(): number;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          public getWhiteBalance(): io.github.triniwiz.fancycamera.WhiteBalance;
          public setAutoSquareCrop(param0: boolean): void;
          public setForceStopping(param0: boolean): void;
          public getSupportedRatios(): native.Array<string>;
          public isForceStopping(): boolean;
          public setRotation(param0: io.github.triniwiz.fancycamera.CameraOrientation): void;
          public getAutoSquareCrop(): boolean;
          public getAvailablePictureSizes(param0: string): native.Array<io.github.triniwiz.fancycamera.Size>;
          public setWhiteBalance(param0: io.github.triniwiz.fancycamera.WhiteBalance): void;
          public getPictureSize(): string;
          public getSaveToGallery(): boolean;
          public isRecording(): boolean;
          public startRecording(): void;
          public setDisableHEVC(param0: boolean): void;
          public setCamera(param0: globalAndroid.hardware.Camera): void;
          public setQuality(param0: io.github.triniwiz.fancycamera.Quality): void;
          public getNumberOfCameras(): number;
          public setZoom(param0: number): void;
          public release(): void;
          public getLock(): any;
          public setLock(param0: any): void;
          public setSaveToGallery(param0: boolean): void;
          public setAudioLevelsEnabled(param0: boolean): void;
          public orientationUpdated(): void;
          public getRotation(): io.github.triniwiz.fancycamera.CameraOrientation;
          public setPosition(param0: io.github.triniwiz.fancycamera.CameraPosition): void;
          public stop(): void;
          public isAudioLevelsEnabled(): boolean;
          public setMaxVideoBitrate(param0: number): void;
          public setRecording(param0: boolean): void;
          public getAmplitudeEMA(): number;
          public stopPreview(): void;
          public setStarted(param0: boolean): void;
          public setPictureSize(param0: string): void;
          public getPosition(): io.github.triniwiz.fancycamera.CameraPosition;
          public getFlashMode(): io.github.triniwiz.fancycamera.CameraFlashMode;
          public getMaxVideoBitrate(): number;
          public setFlashMode(param0: io.github.triniwiz.fancycamera.CameraFlashMode): void;
          public getCamera(): globalAndroid.hardware.Camera;
          public getDetectorType(): io.github.triniwiz.fancycamera.DetectorType;
          public takePhoto(): void;
          public getMaxVideoFrameRate(): number;
          public getPreviewSurface(): any;
          public getAmplitude(): number;
          public getZoom(): number;
          public setAutoFocus(param0: boolean): void;
          public setDisplayRatio(param0: string): void;
          public toggleCamera(): void;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
          public stopRecording(): void;
          public hasFlash(): boolean;
          public constructor(param0: globalAndroid.content.Context);
          public setDetectorType(param0: io.github.triniwiz.fancycamera.DetectorType): void;
          public setMaxAudioBitRate(param0: number): void;
          public getDb(): number;
        }
        export module Camera {
          export class WhenMappings {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.Camera.WhenMappings>;
          }
        }
      }
    }
  }
}

declare module io {
  export module github {
    export module triniwiz {
      export module fancycamera {
        export class Camera2 extends io.github.triniwiz.fancycamera.CameraBase {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.Camera2>;
          public getDisplayRatio(): string;
          public cameraRecording(): boolean;
          public getAllowExifRotation(): boolean;
          public setMaxVideoFrameRate(param0: number): void;
          public getDisableHEVC(): boolean;
          public getAutoFocus(): boolean;
          public setAllowExifRotation(param0: boolean): void;
          public getQuality(): io.github.triniwiz.fancycamera.Quality;
          public getMaxAudioBitRate(): number;
          public startPreview(): void;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          public getWhiteBalance(): io.github.triniwiz.fancycamera.WhiteBalance;
          public setAutoSquareCrop(param0: boolean): void;
          public getSupportedRatios(): native.Array<string>;
          public setRotation(param0: io.github.triniwiz.fancycamera.CameraOrientation): void;
          public getAutoSquareCrop(): boolean;
          public getAvailablePictureSizes(param0: string): native.Array<io.github.triniwiz.fancycamera.Size>;
          public setWhiteBalance(param0: io.github.triniwiz.fancycamera.WhiteBalance): void;
          public getPictureSize(): string;
          public getSaveToGallery(): boolean;
          public startRecording(): void;
          public setDisableHEVC(param0: boolean): void;
          public getNumberOfCameras(): number;
          public setQuality(param0: io.github.triniwiz.fancycamera.Quality): void;
          public setZoom(param0: number): void;
          public release(): void;
          public setSaveToGallery(param0: boolean): void;
          public setAudioLevelsEnabled(param0: boolean): void;
          public orientationUpdated(): void;
          public getRotation(): io.github.triniwiz.fancycamera.CameraOrientation;
          public setPosition(param0: io.github.triniwiz.fancycamera.CameraPosition): void;
          public setAmplitude(param0: number): void;
          public isAudioLevelsEnabled(): boolean;
          public stop(): void;
          public setMaxVideoBitrate(param0: number): void;
          public setAmplitudeEMA(param0: number): void;
          public getAmplitudeEMA(): number;
          public stopPreview(): void;
          public setPictureSize(param0: string): void;
          public getPosition(): io.github.triniwiz.fancycamera.CameraPosition;
          public setDb(param0: number): void;
          public getFlashMode(): io.github.triniwiz.fancycamera.CameraFlashMode;
          public getMaxVideoBitrate(): number;
          public setFlashMode(param0: io.github.triniwiz.fancycamera.CameraFlashMode): void;
          public getDetectorType(): io.github.triniwiz.fancycamera.DetectorType;
          public getMaxVideoFrameRate(): number;
          public takePhoto(): void;
          public getPreviewSurface(): any;
          public getAmplitude(): number;
          public getZoom(): number;
          public setAutoFocus(param0: boolean): void;
          public setDisplayRatio(param0: string): void;
          public toggleCamera(): void;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
          public stopRecording(): void;
          public hasFlash(): boolean;
          public constructor(param0: globalAndroid.content.Context);
          public setDetectorType(param0: io.github.triniwiz.fancycamera.DetectorType): void;
          public setMaxAudioBitRate(param0: number): void;
          public getDb(): number;
        }
        export module Camera2 {
          export class WhenMappings {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.Camera2.WhenMappings>;
          }
        }
      }
    }
  }
}

declare module io {
  export module github {
    export module triniwiz {
      export module fancycamera {
        export abstract class CameraBase {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraBase>;
          public static Companion: io.github.triniwiz.fancycamera.CameraBase.Companion;
          public setFaceDetectionOptions(param0: any): void;
          public setMTimerTask$fancycamera_release(param0: java.util.TimerTask): void;
          public getAllowExifRotation(): boolean;
          public setOnBarcodeScanningListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public setCurrentOrientation(param0: number): void;
          public finalize(): void;
          public setMaxVideoFrameRate(param0: number): void;
          public isObjectDetectionSupported$fancycamera_release(): boolean;
          public getAutoFocus(): boolean;
          public setAllowExifRotation(param0: boolean): void;
          public startPreview(): void;
          public isMLSupported$fancycamera_release(): boolean;
          public getDATETIME_FORMAT$fancycamera_release(): java.lang.ThreadLocal<java.text.SimpleDateFormat>;
          public setOverridePhotoWidth(param0: number): void;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          public isFaceDetectionSupported$fancycamera_release(): boolean;
          public setAutoSquareCrop(param0: boolean): void;
          public getSupportedRatios(): native.Array<string>;
          public setRotation(param0: io.github.triniwiz.fancycamera.CameraOrientation): void;
          public setOverridePhotoHeight(param0: number): void;
          public setOnTextRecognitionListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public getOnPoseDetectedListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
          public getSaveToGallery(): boolean;
          public setGettingAudioLevels$fancycamera_release(param0: boolean): void;
          public getImageLabelingOptions$fancycamera_release(): any;
          public setQuality(param0: io.github.triniwiz.fancycamera.Quality): void;
          public setListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.CameraEventListener): void;
          public hasCameraPermission(): boolean;
          public setSaveToGallery(param0: boolean): void;
          public setAudioLevelsEnabled(param0: boolean): void;
          public orientationUpdated(): void;
          public setOnTextRecognitionListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public getDATE_FORMAT$fancycamera_release(): java.lang.ThreadLocal<java.text.SimpleDateFormat>;
          public getAnalysisExecutor$fancycamera_release(): java.util.concurrent.ExecutorService;
          public getObjectDetectionOptions$fancycamera_release(): any;
          public setOnImageLabelingListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public setImageLabelingSupported$fancycamera_release(param0: boolean): void;
          public getOnSurfaceUpdateListener$fancycamera_release(): io.github.triniwiz.fancycamera.SurfaceUpdateListener;
          public getMDuration$fancycamera_release(): number;
          public getPosition(): io.github.triniwiz.fancycamera.CameraPosition;
          public setFaceDetectionSupported$fancycamera_release(param0: boolean): void;
          public setBarcodeScannerOptions$fancycamera_release(param0: any): void;
          public getMainHandler$fancycamera_release(): globalAndroid.os.Handler;
          public setAnalysisExecutor$fancycamera_release(param0: java.util.concurrent.ExecutorService): void;
          public startDurationTimer$fancycamera_release(): void;
          public stopDurationTimer$fancycamera_release(): void;
          public getDuration(): number;
          public requestAudioPermission(): void;
          public hasAudioPermission(): boolean;
          public getOnBarcodeScanningListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
          public getMaxVideoBitrate(): number;
          public setonSurfaceUpdateListener(param0: io.github.triniwiz.fancycamera.SurfaceUpdateListener): void;
          public isBarcodeScanningSupported$fancycamera_release(): boolean;
          public getFaceDetectionOptions$fancycamera_release(): any;
          public setFlashMode(param0: io.github.triniwiz.fancycamera.CameraFlashMode): void;
          public getMTimerTask$fancycamera_release(): java.util.TimerTask;
          public setRecorder$fancycamera_release(param0: globalAndroid.media.MediaRecorder): void;
          public getDetectorType(): io.github.triniwiz.fancycamera.DetectorType;
          public setTextRecognitionSupported$fancycamera_release(param0: boolean): void;
          public getMaxVideoFrameRate(): number;
          public takePhoto(): void;
          public stringSizeToSize$fancycamera_release(param0: string): io.github.triniwiz.fancycamera.Size;
          public getRecorder$fancycamera_release(): globalAndroid.media.MediaRecorder;
          public setAutoFocus(param0: boolean): void;
          public convertToExifDateTime$fancycamera_release(param0: number): string;
          public setOnFacesDetectedListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public setImageLabelingOptions(param0: any): void;
          public setOnPoseDetectedListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public initListener$fancycamera_release(param0: globalAndroid.media.MediaRecorder): void;
          public getVIDEO_RECORDER_PERMISSIONS_REQUEST$fancycamera_release(): number;
          public stopRecording(): void;
          public getVIDEO_RECORDER_PERMISSIONS$fancycamera_release(): native.Array<string>;
          public hasFlash(): boolean;
          public constructor(param0: globalAndroid.content.Context);
          public setDetectorType(param0: io.github.triniwiz.fancycamera.DetectorType): void;
          public setMaxAudioBitRate(param0: number): void;
          public getDb(): number;
          public setBarcodeScannerOptions(param0: any): void;
          public getBarcodeScannerOptions$fancycamera_release(): any;
          public cameraRecording(): boolean;
          public getDisplayRatio(): string;
          public isImageLabelingSupported$fancycamera_release(): boolean;
          public deInitListener$fancycamera_release(): void;
          public toggleFlash(): void;
          public getDisableHEVC(): boolean;
          public getQuality(): io.github.triniwiz.fancycamera.Quality;
          public requestCameraPermission(): void;
          public getMaxAudioBitRate(): number;
          public setOnObjectDetectedListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public getWhiteBalance(): io.github.triniwiz.fancycamera.WhiteBalance;
          public setObjectDetectionOptions$fancycamera_release(param0: any): void;
          public getTIME_FORMAT$fancycamera_release(): java.lang.ThreadLocal<java.text.SimpleDateFormat>;
          public hasStoragePermission(): boolean;
          public setMTimer$fancycamera_release(param0: java.util.Timer): void;
          public getListener$fancycamera_release(): io.github.triniwiz.fancycamera.CameraEventListener;
          public getAutoSquareCrop(): boolean;
          public getOverridePhotoWidth(): number;
          public getAvailablePictureSizes(param0: string): native.Array<io.github.triniwiz.fancycamera.Size>;
          public setWhiteBalance(param0: io.github.triniwiz.fancycamera.WhiteBalance): void;
          public getPictureSize(): string;
          public startRecording(): void;
          public setDisableHEVC(param0: boolean): void;
          public setOnSurfaceUpdateListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.SurfaceUpdateListener): void;
          public detectSupport$fancycamera_release(): void;
          public setObjectDetectionSupported$fancycamera_release(param0: boolean): void;
          public getNumberOfCameras(): number;
          public setZoom(param0: number): void;
          public requestPermission(): void;
          public release(): void;
          public getOnTextRecognitionListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
          public getRotation(): io.github.triniwiz.fancycamera.CameraOrientation;
          public isGettingAudioLevels$fancycamera_release(): boolean;
          public setPosition(param0: io.github.triniwiz.fancycamera.CameraPosition): void;
          public getOnFacesDetectedListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
          public getCamcorderProfile$fancycamera_release(param0: io.github.triniwiz.fancycamera.Quality): globalAndroid.media.CamcorderProfile;
          public setOnObjectDetectedListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public isAudioLevelsEnabled(): boolean;
          public stop(): void;
          public setPoseDetectionSupported$fancycamera_release(param0: boolean): void;
          public setMaxVideoBitrate(param0: number): void;
          public getOnImageLabelingListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
          public getAmplitudeEMA(): number;
          public setOnBarcodeScanningListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public stopPreview(): void;
          public getMTimer$fancycamera_release(): java.util.Timer;
          public getOnObjectDetectedListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
          public getOverridePhotoHeight(): number;
          public setObjectDetectionOptions(param0: any): void;
          public setPictureSize(param0: string): void;
          public setImageLabelingOptions$fancycamera_release(param0: any): void;
          public getFlashMode(): io.github.triniwiz.fancycamera.CameraFlashMode;
          public convertFromExifDateTime$fancycamera_release(param0: string): java.util.Date;
          public hasPermission(): boolean;
          public isPoseDetectionSupported$fancycamera_release(): boolean;
          public getPreviewSurface(): any;
          public getAmplitude(): number;
          public getZoom(): number;
          public setDisplayRatio(param0: string): void;
          public requestStoragePermission(): void;
          public toggleCamera(): void;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
          public setOnPoseDetectedListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public setMDuration$fancycamera_release(param0: number): void;
          public setOnImageLabelingListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public setBarcodeScanningSupported$fancycamera_release(param0: boolean): void;
          public setFaceDetectionOptions$fancycamera_release(param0: any): void;
          public getCurrentOrientation(): number;
          public isTextRecognitionSupported$fancycamera_release(): boolean;
          public setOnFacesDetectedListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
        }
        export module CameraBase {
          export class Companion {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraBase.Companion>;
            public getEMA_FILTER$fancycamera_release(): number;
          }
          export class WhenMappings {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraBase.WhenMappings>;
          }
        }
      }
    }
  }
}

declare module io {
  export module github {
    export module triniwiz {
      export module fancycamera {
        export class CameraEventListener {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraEventListener>;
          /**
           * Constructs a new instance of the io.github.triniwiz.fancycamera.CameraEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            onReady(): void;
            onCameraOpen(): void;
            onCameraClose(): void;
            onCameraPhoto(param0: java.io.File): void;
            onCameraVideo(param0: java.io.File): void;
            onCameraAnalysis(param0: io.github.triniwiz.fancycamera.ImageAnalysis): void;
            onCameraError(param0: string, param1: java.lang.Exception): void;
            onCameraVideoStart(): void;
          });
          public constructor();
          public onCameraOpen(): void;
          public onCameraClose(): void;
          public onCameraAnalysis(param0: io.github.triniwiz.fancycamera.ImageAnalysis): void;
          public onCameraVideo(param0: java.io.File): void;
          public onCameraVideoStart(): void;
          public onReady(): void;
          public onCameraError(param0: string, param1: java.lang.Exception): void;
          public onCameraPhoto(param0: java.io.File): void;
        }
      }
    }
  }
}

declare module io {
  export module github {
    export module triniwiz {
      export module fancycamera {
        export abstract class CameraEventListenerUI extends io.github.triniwiz.fancycamera.CameraEventListener {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraEventListenerUI>;
          public static Companion: io.github.triniwiz.fancycamera.CameraEventListenerUI.Companion;
          public onCameraOpenUI(): void;
          public onCameraClose(): void;
          public onCameraVideoUI(param0: java.io.File): void;
          public onCameraError(param0: string, param1: java.lang.Exception): void;
          public onCameraAnalysisUI(param0: io.github.triniwiz.fancycamera.ImageAnalysis): void;
          public onCameraErrorUI(param0: string, param1: java.lang.Exception): void;
          public onCameraPhoto(param0: java.io.File): void;
          public onCameraVideoStartUI(): void;
          public onReadyUI(): void;
          public onCameraOpen(): void;
          public onCameraAnalysis(param0: io.github.triniwiz.fancycamera.ImageAnalysis): void;
          public onCameraVideo(param0: java.io.File): void;
          public constructor();
          public onCameraVideoStart(): void;
          public onCameraCloseUI(): void;
          public onReady(): void;
          public onCameraPhotoUI(param0: java.io.File): void;
        }
        export module CameraEventListenerUI {
          export class Companion {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraEventListenerUI.Companion>;
          }
        }
      }
    }
  }
}

declare module io {
  export module github {
    export module triniwiz {
      export module fancycamera {
        export class CameraFlashMode {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraFlashMode>;
          public static Companion: io.github.triniwiz.fancycamera.CameraFlashMode.Companion;
          public static OFF: io.github.triniwiz.fancycamera.CameraFlashMode;
          public static ON: io.github.triniwiz.fancycamera.CameraFlashMode;
          public static AUTO: io.github.triniwiz.fancycamera.CameraFlashMode;
          public static RED_EYE: io.github.triniwiz.fancycamera.CameraFlashMode;
          public static TORCH: io.github.triniwiz.fancycamera.CameraFlashMode;
          public static valueOf(param0: string): io.github.triniwiz.fancycamera.CameraFlashMode;
          public getValue(): number;
          public static values(): native.Array<io.github.triniwiz.fancycamera.CameraFlashMode>;
        }
        export module CameraFlashMode {
          export class Companion {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraFlashMode.Companion>;
            public from(param0: number): io.github.triniwiz.fancycamera.CameraFlashMode;
          }
        }
      }
    }
  }
}

declare module io {
  export module github {
    export module triniwiz {
      export module fancycamera {
        export class CameraOrientation {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraOrientation>;
          public static Companion: io.github.triniwiz.fancycamera.CameraOrientation.Companion;
          public static UNKNOWN: io.github.triniwiz.fancycamera.CameraOrientation;
          public static PORTRAIT: io.github.triniwiz.fancycamera.CameraOrientation;
          public static PORTRAIT_UPSIDE_DOWN: io.github.triniwiz.fancycamera.CameraOrientation;
          public static LANDSCAPE_LEFT: io.github.triniwiz.fancycamera.CameraOrientation;
          public static LANDSCAPE_RIGHT: io.github.triniwiz.fancycamera.CameraOrientation;
          public static values(): native.Array<io.github.triniwiz.fancycamera.CameraOrientation>;
          public static valueOf(param0: string): io.github.triniwiz.fancycamera.CameraOrientation;
          public getValue(): number;
        }
        export module CameraOrientation {
          export class Companion {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraOrientation.Companion>;
            public from(param0: number): io.github.triniwiz.fancycamera.CameraOrientation;
          }
        }
      }
    }
  }
}

declare module io {
  export module github {
    export module triniwiz {
      export module fancycamera {
        export class CameraPosition {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraPosition>;
          public static Companion: io.github.triniwiz.fancycamera.CameraPosition.Companion;
          public static BACK: io.github.triniwiz.fancycamera.CameraPosition;
          public static FRONT: io.github.triniwiz.fancycamera.CameraPosition;
          public getValue(): number;
          public static valueOf(param0: string): io.github.triniwiz.fancycamera.CameraPosition;
          public static values(): native.Array<io.github.triniwiz.fancycamera.CameraPosition>;
        }
        export module CameraPosition {
          export class Companion {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraPosition.Companion>;
            public from(param0: number): io.github.triniwiz.fancycamera.CameraPosition;
          }
        }
      }
    }
  }
}

declare module io {
  export module github {
    export module triniwiz {
      export module fancycamera {
        export class DetectorType {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.DetectorType>;
          public static Barcode: io.github.triniwiz.fancycamera.DetectorType;
          public static DigitalInk: io.github.triniwiz.fancycamera.DetectorType;
          public static Face: io.github.triniwiz.fancycamera.DetectorType;
          public static Image: io.github.triniwiz.fancycamera.DetectorType;
          public static Object: io.github.triniwiz.fancycamera.DetectorType;
          public static Pose: io.github.triniwiz.fancycamera.DetectorType;
          public static Text: io.github.triniwiz.fancycamera.DetectorType;
          public static All: io.github.triniwiz.fancycamera.DetectorType;
          public static None: io.github.triniwiz.fancycamera.DetectorType;
          public toString(): string;
          public static values(): native.Array<io.github.triniwiz.fancycamera.DetectorType>;
          public static valueOf(param0: string): io.github.triniwiz.fancycamera.DetectorType;
        }
      }
    }
  }
}

declare module io {
  export module github {
    export module triniwiz {
      export module fancycamera {
        export class Event {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.Event>;
          public constructor(param0: io.github.triniwiz.fancycamera.EventType, param1: java.io.File, param2: string);
          public getMessage(): string;
          public getFile(): java.io.File;
          public getType(): io.github.triniwiz.fancycamera.EventType;
        }
      }
    }
  }
}

declare module io {
  export module github {
    export module triniwiz {
      export module fancycamera {
        export class EventType {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.EventType>;
          public static Photo: io.github.triniwiz.fancycamera.EventType;
          public static Video: io.github.triniwiz.fancycamera.EventType;
          public static values(): native.Array<io.github.triniwiz.fancycamera.EventType>;
          public static valueOf(param0: string): io.github.triniwiz.fancycamera.EventType;
        }
      }
    }
  }
}

declare module io {
  export module github {
    export module triniwiz {
      export module fancycamera {
        export class ExtensionsKt {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.ExtensionsKt>;
          public static afterMeasured(param0: globalAndroid.view.View, param1: kotlin.jvm.functions.Function1): void;
        }
      }
    }
  }
}

declare module io {
  export module github {
    export module triniwiz {
      export module fancycamera {
        export class FancyCamera {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.FancyCamera>;
          public static Companion: io.github.triniwiz.fancycamera.FancyCamera.Companion;
          public getGetSupportedRatios(): native.Array<string>;
          public getAllowExifRotation(): boolean;
          public getCameraOrientation(): io.github.triniwiz.fancycamera.CameraOrientation;
          public setMaxVideoFrameRate(param0: number): void;
          public toggleFlash(): void;
          public getDisableHEVC(): boolean;
          public getAutoFocus(): boolean;
          public setAllowExifRotation(param0: boolean): void;
          public getQuality(): io.github.triniwiz.fancycamera.Quality;
          public requestCameraPermission(): void;
          public getMaxAudioBitRate(): number;
          public startPreview(): void;
          public getWhiteBalance(): io.github.triniwiz.fancycamera.WhiteBalance;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          public setOverridePhotoWidth(param0: number): void;
          public hasStoragePermission(): boolean;
          public setAutoSquareCrop(param0: boolean): void;
          public setOverridePhotoHeight(param0: number): void;
          public getAutoSquareCrop(): boolean;
          public setOnTextRecognitionListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public getOverridePhotoWidth(): number;
          public getAvailablePictureSizes(param0: string): native.Array<io.github.triniwiz.fancycamera.Size>;
          public setWhiteBalance(param0: io.github.triniwiz.fancycamera.WhiteBalance): void;
          public getPictureSize(): string;
          public getSaveToGallery(): boolean;
          public startRecording(): void;
          public setDisableHEVC(param0: boolean): void;
          public getNumberOfCameras(): number;
          public setQuality(param0: io.github.triniwiz.fancycamera.Quality): void;
          public static getForceV1(): boolean;
          public setZoom(param0: number): void;
          public requestPermission(): void;
          public release(): void;
          public hasCameraPermission(): boolean;
          public setSaveToGallery(param0: boolean): void;
          public setAudioLevelsEnabled(param0: boolean): void;
          public setPosition(param0: io.github.triniwiz.fancycamera.CameraPosition): void;
          public setOnObjectDetectedListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public isAudioLevelsEnabled(): boolean;
          public stop(): void;
          public setMaxVideoBitrate(param0: number): void;
          public setOnImageLabelingListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public getRatio(): string;
          public setOnBarcodeScanningListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public stopPreview(): void;
          public getOverridePhotoHeight(): number;
          public setPictureSize(param0: string): void;
          public getPosition(): io.github.triniwiz.fancycamera.CameraPosition;
          public getFlashMode(): io.github.triniwiz.fancycamera.CameraFlashMode;
          public hasPermission(): boolean;
          public getDuration(): number;
          public requestAudioPermission(): void;
          public hasAudioPermission(): boolean;
          public getMaxVideoBitrate(): number;
          public setonSurfaceUpdateListener(param0: io.github.triniwiz.fancycamera.SurfaceUpdateListener): void;
          public setFlashMode(param0: io.github.triniwiz.fancycamera.CameraFlashMode): void;
          public getDetectorType(): io.github.triniwiz.fancycamera.DetectorType;
          public getMaxVideoFrameRate(): number;
          public takePhoto(): void;
          public getZoom(): number;
          public setAutoFocus(param0: boolean): void;
          public requestStoragePermission(): void;
          public setRatio(param0: string): void;
          public toggleCamera(): void;
          public stopRecording(): void;
          public setCameraOrientation(param0: io.github.triniwiz.fancycamera.CameraOrientation): void;
          public constructor(param0: globalAndroid.content.Context);
          public setOnPoseDetectedListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public setDetectorType(param0: io.github.triniwiz.fancycamera.DetectorType): void;
          public onPermissionHandler(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
          public setMaxAudioBitRate(param0: number): void;
          public getPreviewView(): any;
          public getHasFlash(): boolean;
          public getDb(): number;
          public setListener(param0: io.github.triniwiz.fancycamera.CameraEventListener): void;
          public setEnableAudioLevels(param0: boolean): void;
          public setOnFacesDetectedListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public static setForceV1(param0: boolean): void;
        }
        export module FancyCamera {
          export class Companion {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.FancyCamera.Companion>;
            public setForceV1(param0: boolean): void;
            public getForceV1(): boolean;
          }
        }
      }
    }
  }
}

declare module io {
  export module github {
    export module triniwiz {
      export module fancycamera {
        export class FancyCameraFileProvider {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.FancyCameraFileProvider>;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module github {
    export module triniwiz {
      export module fancycamera {
        export class ImageAnalysis {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.ImageAnalysis>;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module github {
    export module triniwiz {
      export module fancycamera {
        export class ImageAnalysisCallback {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.ImageAnalysisCallback>;
          /**
           * Constructs a new instance of the io.github.triniwiz.fancycamera.ImageAnalysisCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            onSuccess(param0: string): void;
            onError(param0: string, param1: java.lang.Exception): void;
          });
          public constructor();
          public onSuccess(param0: string): void;
          public onError(param0: string, param1: java.lang.Exception): void;
        }
      }
    }
  }
}

declare module io {
  export module github {
    export module triniwiz {
      export module fancycamera {
        export class Quality {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.Quality>;
          public static Companion: io.github.triniwiz.fancycamera.Quality.Companion;
          public static MAX_480P: io.github.triniwiz.fancycamera.Quality;
          public static MAX_720P: io.github.triniwiz.fancycamera.Quality;
          public static MAX_1080P: io.github.triniwiz.fancycamera.Quality;
          public static MAX_2160P: io.github.triniwiz.fancycamera.Quality;
          public static HIGHEST: io.github.triniwiz.fancycamera.Quality;
          public static LOWEST: io.github.triniwiz.fancycamera.Quality;
          public static QVGA: io.github.triniwiz.fancycamera.Quality;
          public getValue(): number;
          public static values(): native.Array<io.github.triniwiz.fancycamera.Quality>;
          public static valueOf(param0: string): io.github.triniwiz.fancycamera.Quality;
        }
        export module Quality {
          export class Companion {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.Quality.Companion>;
            public from(param0: number): io.github.triniwiz.fancycamera.Quality;
          }
        }
      }
    }
  }
}

declare module io {
  export module github {
    export module triniwiz {
      export module fancycamera {
        export class Size {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.Size>;
          public toString(): string;
          public getHeight(): number;
          public getWidth(): number;
          public constructor(param0: number, param1: number);
        }
      }
    }
  }
}

declare module io {
  export module github {
    export module triniwiz {
      export module fancycamera {
        export class SurfaceUpdateListener {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.SurfaceUpdateListener>;
          /**
           * Constructs a new instance of the io.github.triniwiz.fancycamera.SurfaceUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            onUpdate(): void;
          });
          public constructor();
          public onUpdate(): void;
        }
      }
    }
  }
}

declare module io {
  export module github {
    export module triniwiz {
      export module fancycamera {
        export class WhiteBalance {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.WhiteBalance>;
          public static Auto: io.github.triniwiz.fancycamera.WhiteBalance;
          public static Sunny: io.github.triniwiz.fancycamera.WhiteBalance;
          public static Cloudy: io.github.triniwiz.fancycamera.WhiteBalance;
          public static Shadow: io.github.triniwiz.fancycamera.WhiteBalance;
          public static Twilight: io.github.triniwiz.fancycamera.WhiteBalance;
          public static Fluorescent: io.github.triniwiz.fancycamera.WhiteBalance;
          public static Incandescent: io.github.triniwiz.fancycamera.WhiteBalance;
          public static WarmFluorescent: io.github.triniwiz.fancycamera.WhiteBalance;
          public static values(): native.Array<io.github.triniwiz.fancycamera.WhiteBalance>;
          public getValue$fancycamera_release(): string;
          public static valueOf(param0: string): io.github.triniwiz.fancycamera.WhiteBalance;
        }
      }
    }
  }
}

//Generics information:

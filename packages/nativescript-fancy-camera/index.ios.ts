import { CameraPosition, FancyCameraBase, positionProperty } from './common';
import { Device, path as nsPath } from '@nativescript/core';
import { layout } from '@nativescript/core/utils';

@NativeClass()
@ObjCClass(AVCaptureFileOutputRecordingDelegate, AVCapturePhotoCaptureDelegate)
class CameraDelegate extends NSObject implements AVCaptureFileOutputRecordingDelegate, AVCapturePhotoCaptureDelegate {
	_owner: WeakRef<FancyCamera>;
	static initWithOwner(owner: WeakRef<FancyCamera>) {
		const delegate = <CameraDelegate>CameraDelegate.new();
		delegate._owner = owner;
		return delegate;
	}

	captureOutputDidFinishRecordingToOutputFileAtURLFromConnectionsError(output: AVCaptureFileOutput, outputFileURL: NSURL, connections: NSArray<AVCaptureConnection> | AVCaptureConnection[], error: NSError): void {
		const owner = this._owner?.get?.();
		if (owner) {
			if (!error) {
			} else {
				if (owner.thumbnailCount) {
					owner._extractThumbnails();
				}
			}
		}
	}

	captureOutputDidStartRecordingToOutputFileAtURLFromConnections(output: AVCaptureFileOutput, fileURL: NSURL, connections: NSArray<AVCaptureConnection> | AVCaptureConnection[]): void {}

	captureOutputDidFinishProcessingPhotoError(output: AVCapturePhotoOutput, photo: AVCapturePhoto, error: NSError): void {}

	captureOutputDidFinishProcessingPhotoSampleBufferPreviewPhotoSampleBufferResolvedSettingsBracketSettingsError(output: AVCapturePhotoOutput, photoSampleBuffer: any, previewPhotoSampleBuffer: any, resolvedSettings: AVCaptureResolvedPhotoSettings, bracketSettings: AVCaptureBracketedStillImageSettings, error: NSError): void {}
}

export class FancyCamera extends FancyCameraBase {
	_session: AVCaptureSession;
	_movieOutput: AVCaptureMovieFileOutput;
	_stillImageOutput: AVCaptureStillImageOutput;
	_photoOutput: AVCapturePhotoOutput;
	_connection: AVCaptureConnection;
	_preview: AVCaptureVideoPreviewLayer;
	_container: UIView;
	_device: AVCaptureDevice;
	_delegate: CameraDelegate;
	_cameraQueue: any;
	_stoppingRecorder = false;
	_thumbnails: any[];
	get thumbnails() {
		return this._thumbnails;
	}
	constructor() {
		super();
		this._cameraQueue = dispatch_get_global_queue(qos_class_t.QOS_CLASS_DEFAULT, 0);
	}
	createNativeView(): Object {
		this._container = UIView.new();
		this._delegate = CameraDelegate.initWithOwner(new WeakRef(this));
		return this._container;
	}

	startRecordingVideo() {
		this._movieOutput?.startRecordingToOutputFileURLRecordingDelegate?.(this._outUrl, this._delegate);
	}

	stopRecordingVideo() {
		this._movieOutput?.stopRecording?.();
	}

	takePhoto() {
		if (this._connection) {
			if (parseInt(Device.osVersion, 10) >= 10) {
				const settings = AVCapturePhotoSettings.new();
				settings.highResolutionPhotoEnabled = true;
				if (this.isTorchAvailable && this.torch) {
					settings.flashMode = AVCaptureFlashMode.On;
				}
				this._photoOutput.capturePhotoWithSettingsDelegate(settings, this._delegate);
			} else {
				this._stillImageOutput.highResolutionStillImageOutputEnabled = true;
				if (this.isTorchAvailable && this.torch) {
					this._device.flashMode = AVCaptureFlashMode.On;
				}
				this._stillImageOutput.captureStillImageAsynchronouslyFromConnectionCompletionHandler(this._connection, (photo, error) => {});
			}
		}
	}

	public onLayout(left: number, top: number, right: number, bottom: number) {
		super.onLayout(left, top, right, bottom);
		if (this.nativeView?.layer?.sublayers?.[0]) {
			dispatch_async(dispatch_get_current_queue(), () => {
				this.nativeView.layer.sublayers[0].frame = this.nativeView.bounds;
			});
		}
	}

	public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
		const width = layout.getMeasureSpecSize(widthMeasureSpec);
		const height = layout.getMeasureSpecSize(heightMeasureSpec);
		this.setMeasuredDimension(width, height);
	}

	[positionProperty.setNative](value) {}

	private get _currentPosition() {
		switch (this.position) {
			case CameraPosition.Front:
				return AVCaptureDevicePosition.Front;
			default:
				return AVCaptureDevicePosition.Back;
		}
	}

	private _initCamera() {
		try {
			this._session = AVCaptureSession.new();
			let device;
			if (parseInt(Device.osVersion, 10) >= 10) {
				device = AVCaptureDeviceDiscoverySession.discoverySessionWithDeviceTypesMediaTypePosition([AVCaptureDeviceTypeBuiltInWideAngleCamera], AVMediaTypeVideo, this._currentPosition);
			} else {
				const devices = AVCaptureDevice.devicesWithMediaType(AVMediaTypeVideo);
				for (let i = 0; i < devices.count; i++) {
					if (devices[i].position === this._currentPosition) {
						device = devices[i];
						break;
					}
				}
			}

			const input: AVCaptureDeviceInput = AVCaptureDeviceInput.deviceInputWithDeviceError(device);
			const audioDevice: AVCaptureDevice = AVCaptureDevice.defaultDeviceWithMediaType(AVMediaTypeAudio);
			const audioInput: AVCaptureDeviceInput = AVCaptureDeviceInput.deviceInputWithDeviceError(audioDevice);

			this._movieOutput = AVCaptureMovieFileOutput.new();
			if (parseInt(Device.osVersion, 10) >= 10) {
				this._photoOutput = AVCapturePhotoOutput.new();
			} else {
				this._stillImageOutput = AVCaptureStillImageOutput.new();
			}

			this._connection = this._movieOutput.connectionWithMediaType(AVMediaTypeVideo);
			this._device = device;
			this._session.beginConfiguration();

			this._session.addInput(input);
			this._session.addInput(audioInput);
			this._session.addOutput(this._movieOutput);

			if (parseInt(Device.osVersion, 10) >= 10) {
				this._session.addOutput(this._photoOutput);
			} else {
				this._session.addOutput(this._stillImageOutput);
			}

			this._session.commitConfiguration();

			this._preview = AVCaptureVideoPreviewLayer.layerWithSession(this._session);

			if (!this._session.running) {
				this._session.startRunning();
			}

			this._preview.bounds = this._container.bounds;
			this._container.layer.addSublayer(this._preview);
		} catch (e) {}
	}

	_updatePhotoQuality() {
		/* if (this._swifty) {
       switch (this._pictureQuality) {
         case "3840x2160":
           this._swifty.videoQuality = VideoQuality.Resolution3840x2160;
           this._pictureQuality = "3840x2160";
           break;
         case "1920x1080":
           this._swifty.videoQuality = VideoQuality.Resolution1920x1080;
           this._pictureQuality = "1920x1080";
           break;
         case "1280x720":
           this._swifty.videoQuality = VideoQuality.Resolution1280x720;
           this._pictureQuality = "1280x720";
           break;
         case "640x480":
           this._swifty.videoQuality = VideoQuality.Resolution640x480;
           this._pictureQuality = "640x480";
           break;
         case "352x288":
           this._swifty.videoQuality = VideoQuality.Resolution352x288;
           this._pictureQuality = "352x288";
           break;
         case "Medium":
           this._swifty.videoQuality = VideoQuality.Medium;
           this._pictureQuality = "Medium";
           break;
         case "Low":
           this._swifty.videoQuality = VideoQuality.Low;
           this._pictureQuality = "Low";
           break;
         case "Photo":
           this._swifty.videoQuality = VideoQuality.Photo;
           this._pictureQuality = "Photo";
           break;
         default:
           this._swifty.videoQuality = VideoQuality.High;
           this._pictureQuality = "High";
           break;
       }
     } */
	}

	getAvailablePictureSizes(ratio?: string): string[] {
		return ['3840x2160', '1920x1080', '1280x720', '640x480', '352x288', 'Photo', 'High', 'Medium', 'Low'];
	}

	private _pictureQuality: string = 'High';

	set pictureSize(value: string) {
		this._pictureQuality = value;
		this._updatePhotoQuality();
	}

	get pictureSize(): string {
		return this._pictureQuality;
	}

	private requestStoragePermission(): Promise<any> {
		return new Promise((resolve, reject) => {
			let authStatus = PHPhotoLibrary.authorizationStatus();
			if (authStatus === PHAuthorizationStatus.NotDetermined) {
				PHPhotoLibrary.requestAuthorization((auth) => {
					if (auth === PHAuthorizationStatus.Authorized) {
						resolve(null);
					}
				});
			} else if (authStatus !== PHAuthorizationStatus.Authorized) {
				reject();
			}
		});
	}

	public static isAvailable() {
		return UIImagePickerController.isSourceTypeAvailable(UIImagePickerControllerSourceType.Camera);
	}

	get duration(): number {
		if (this._movieOutput?.recordedDuration) {
			return Math.floor(Math.round(CMTimeGetSeconds(this._movieOutput.recordedDuration)));
		} else {
			return 0;
		}
	}

	public get isTorchAvailable(): boolean {
		return this._device && this._device.hasTorch;
	}

	public stopRecording(): void {
		this._stoppingRecorder = true;
		this._session.stopRunning();
	}

	public stopPreview(): void {
		if (this._session.running) {
			this._session.stopRunning();
		}
	}

	public toggleCamera(): void {
		if (this.position === CameraPosition.Back) {
			this.position = 'front';
		} else {
			this.position = 'back';
		}
		this.stopPreview();
		this.startPreview();
	}

	public startPreview(): void {
		this._initCamera();
	}

	_extractThumbnails() {
		this._thumbnails = [];
		let asset = AVURLAsset.alloc().initWithURLOptions(this._file, null);
		let assetIG = AVAssetImageGenerator.alloc().initWithAsset(asset);
		assetIG.appliesPreferredTrackTransform = true;
		assetIG.apertureMode = AVAssetImageGeneratorApertureModeEncodedPixels;
		let it = parseInt((asset.duration.value / this.thumbnailCount).toString());

		for (let index = 0; index < this.thumbnailCount; index++) {
			let thumbnailImageRef = assetIG.copyCGImageAtTimeActualTimeError(CMTimeMake(it * index, asset.duration.timescale), null);

			if (!thumbnailImageRef) {
				console.log('Thumbnail Image Generation Error');
			}

			const image = UIImage.alloc().initWithCGImage(thumbnailImageRef);

			const outputFilePath = this._fileName.substr(0, this._fileName.lastIndexOf('.')) + '_thumb_' + index + '.png';

			const path = nsPath.join(this.folder.path, outputFilePath);
			const ok = UIImagePNGRepresentation(image).writeToFileAtomically(path, true);

			if (!ok) {
				console.log('Could not write thumbnail to file');
			} else {
				this.thumbnails.push(path);
			}
		}
	}
}

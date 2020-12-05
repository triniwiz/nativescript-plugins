import {
  AdvancedVideoViewBase,
  CameraPosition,
  Quality,
  saveToGalleryProperty,
  Orientation,
  outputOrientation,
  torchProperty,
} from './common';


import {fromObject, knownFolders, Utils, path as nsPath} from '@nativescript/core';

export enum NativeOrientation {
  Unknown,
  Portrait,
  PortraitUpsideDown,
  LandscapeLeft,
  LandscapeRight,
}

@NativeClass
@ObjCClass(AVCaptureFileOutputRecordingDelegate)
class AVCaptureFileOutputRecordingDelegateImpl extends NSObject
  implements AVCaptureFileOutputRecordingDelegate {
  private _owner: WeakRef<AdvancedVideoView>;
  private _interval;

  public static initWithOwner(
    owner: WeakRef<AdvancedVideoView>
  ): AVCaptureFileOutputRecordingDelegateImpl {
    let delegate = new AVCaptureFileOutputRecordingDelegateImpl();
    delegate._owner = owner;
    return delegate;
  }

  captureOutputDidFinishRecordingToOutputFileAtURLFromConnectionsError(
    captureOutput: AVCaptureFileOutput,
    outputFileURL: NSURL,
    connections: NSArray<any>,
    error: NSError
  ): void {
    const owner = this._owner.get();
    if (!error) {
      owner.notify({
        eventName: 'finished',
        object: fromObject({
          file: outputFileURL.absoluteString
        })
      });
    } else {
      owner.notify({
        eventName: 'error',
        object: fromObject({
          message: error.localizedDescription
        })
      });
    }

    owner.startPreview();
  }

  captureOutputDidStartRecordingToOutputFileAtURLFromConnections(
    captureOutput: AVCaptureFileOutput,
    fileURL: NSURL,
    connections: NSArray<any>
  ): void {
    const owner = this._owner.get();
    owner.notify({
      eventName: 'started',
      object: fromObject({})
    });
  }
}

export class AdvancedVideoView extends AdvancedVideoViewBase {
  nativeView: UIView;
  _output: AVCaptureMovieFileOutput;
  _file: NSURL;
  _connection: AVCaptureConnection;
  _device: AVCaptureDevice;
  private session: AVCaptureSession;
  public thumbnails: string[];
  _fileName: string;
  folder;

  private requestStoragePermission(): Promise<any> {
    return new Promise((resolve, reject) => {
      let authStatus = PHPhotoLibrary.authorizationStatus();
      if (authStatus === PHAuthorizationStatus.NotDetermined) {
        PHPhotoLibrary.requestAuthorization(auth => {
          if (auth === PHAuthorizationStatus.Authorized) {
            resolve();
          }
        });
      } else if (authStatus !== PHAuthorizationStatus.Authorized) {
        reject();
      }
    });
  }

  public static isAvailable() {
    return UIImagePickerController.isSourceTypeAvailable(
      UIImagePickerControllerSourceType.Camera
    );
  }

  public createNativeView() {
    return UIView.new();
  }

  public initNativeView() {
  }

  onLoaded() {
    super.onLoaded();
    this.startPreview();
  }

  onUnloaded() {
    this.stopPreview();
    super.onUnloaded();
  }

  get duration(): number {
    if (this._output && this._output.recordedDuration) {
      return Math.floor(
        Math.round(CMTimeGetSeconds(this._output.recordedDuration))
      );
    } else {
      return 0;
    }
  }

  [outputOrientation.getDefault](): Orientation {
    if (!this._connection) return Orientation.Unknown;
    return Orientation[NativeOrientation[this._connection.videoOrientation]];
  }

  [outputOrientation.setNative](orientation: Orientation) {
    this._setOutputOrientation(orientation);
  }

  [saveToGalleryProperty.getDefault]() {
    return false;
  }

  [saveToGalleryProperty.setNative](save: boolean) {
    return save;
  }

  [torchProperty.getDefault]() {
    return this._device && this._device.torchMode === AVCaptureTorchMode.On;
  }

  [torchProperty.setNative](torch) {
    if (!this.isTorchAvailable) return false;
    if (this._device.lockForConfiguration()) {
      if (torch) {
        this._device.setTorchModeOnWithLevelError(AVCaptureMaxAvailableTorchLevel);
      } else {
        this._device.torchMode = AVCaptureTorchMode.Off;
      }

      this._device.unlockForConfiguration();
    }
    return torch;
  }

  public get isTorchAvailable(): boolean {
    return this._device && this._device.hasTorch;
  }

  public toggleTorch() {
    if (!this.isTorchAvailable) return;
    this.torch = !this.torch;
  }

  private _setOutputOrientation(orientation: Orientation) {
    let nativeOrientation: number;
    switch (orientation) {
      case Orientation.LandscapeLeft:
        nativeOrientation = NativeOrientation.LandscapeLeft;
        break;
      case Orientation.LandscapeRight:
        nativeOrientation = NativeOrientation.LandscapeRight;
        break;
      case Orientation.Portrait:
        nativeOrientation = NativeOrientation.Portrait;
        break;
      case Orientation.PortraitUpsideDown:
        nativeOrientation = NativeOrientation.PortraitUpsideDown;
        break;
      default:
        nativeOrientation = NativeOrientation.Unknown;
        break;
    }

    if (
      this._connection &&
      this._connection.supportsVideoOrientation &&
      nativeOrientation !== NativeOrientation.Unknown
    ) {
      this._connection.videoOrientation = nativeOrientation;
    }
  }

  private openCamera(): void {
    try {

      this.session = new AVCaptureSession();
      let devices = AVCaptureDevice.devicesWithMediaType(AVMediaTypeVideo);
      let pos =
        this.cameraPosition === 'front'
          ? AVCaptureDevicePosition.Front
          : AVCaptureDevicePosition.Back;
      for (let i = 0; i < devices.count; i++) {
        if (devices[i].position === pos) {
          this._device = devices[i];
          break;
        }
      }

      let input: AVCaptureDeviceInput = AVCaptureDeviceInput
        .deviceInputWithDeviceError(this._device);
      let audioDevice: AVCaptureDevice = AVCaptureDevice.defaultDeviceWithMediaType(
        AVMediaTypeAudio
      );
      let audioInput: AVCaptureDeviceInput =
        AVCaptureDeviceInput
          .deviceInputWithDeviceError(audioDevice);

      this._output = AVCaptureMovieFileOutput.alloc().init();
      this._output.movieFragmentInterval = kCMTimeInvalid;
      this._connection = this._output.connectionWithMediaType(AVMediaTypeVideo);

      this._setOutputOrientation(this.outputOrientation);

      if (this._output.availableVideoCodecTypes.containsObject(AVVideoCodecTypeH264)) {
        const codec = {};
        codec[AVVideoCodecKey] = AVVideoCodecTypeH264;
        this._output.setOutputSettingsForConnection(<any>codec, this._connection);
      }
      let format = '.mp4'; // options && options.format === 'default' ? '.mov' : '.' + options.format;
      this._fileName = `VID_${+new Date()}${format}`;
      this.folder = knownFolders.temp().getFolder(Date.now().toString());
      let path = nsPath.join(this.folder.path, this._fileName);
      this._file = NSURL.fileURLWithPath(path);

      if (!input) {
        this.notify({
          eventName: 'error',
          object: fromObject({
            message: 'Error trying to open camera.'
          })
        });
      }

      if (!audioInput) {
        this.notify({
          eventName: 'error',
          object: fromObject({
            message: 'Error trying to open mic.'
          })
        });
      }

      // this._output.maxRecordedDuration =
      //   types.isNumber(options.duration) && options.duration > 0
      //     ? CMTimeMakeWithSeconds(options.duration, 1)
      //     : kCMTimePositiveInfinity;

      // if (options.size > 0) {
      //   this._output.maxRecordedFileSize = options.size * 1024 * 1024;
      // }

      this.session.beginConfiguration();

      switch (this.quality) {
        case Quality.MAX_720P:
          this.session.sessionPreset = AVCaptureSessionPreset1280x720;
          break;
        case Quality.MAX_1080P:
          this.session.sessionPreset = AVCaptureSessionPreset1920x1080;
          break;
        case Quality.MAX_2160P:
          this.session.sessionPreset = AVCaptureSessionPreset3840x2160;
          break;
        case Quality.HIGHEST:
          this.session.sessionPreset = AVCaptureSessionPresetHigh;
          break;
        case Quality.LOWEST:
          this.session.sessionPreset = AVCaptureSessionPresetLow;
          break;
        case Quality.QVGA:
          this.session.sessionPreset = AVCaptureSessionPreset352x288;
          break;
        default:
          this.session.sessionPreset = AVCaptureSessionPreset640x480;
          break;
      }

      this.session.addInput(input);

      this.session.addInput(audioInput);

      this.session.addOutput(this._output);

      this.session.commitConfiguration();

      let preview = AVCaptureVideoPreviewLayer.alloc().initWithSession(
        this.session
      );
      dispatch_async(dispatch_get_current_queue(), () => {
        preview.videoGravity = this.fill ? AVLayerVideoGravityResizeAspectFill : AVLayerVideoGravityResizeAspect;
      });
      if (!this.session.running) {
        this.session.startRunning();
      }

      dispatch_async(dispatch_get_current_queue(), () => {
        preview.frame = this.nativeView.bounds;
        this.nativeView.layer.addSublayer(preview);
      });
    } catch (ex) {
      this.notify({
        eventName: 'error',
        object: fromObject({
          message: ex.message
        })
      });
    }
  }

  _delegate: any;

  public startRecording(): void {
    this._delegate = AVCaptureFileOutputRecordingDelegateImpl.initWithOwner(
      new WeakRef(this)
    );
    this._output.startRecordingToOutputFileURLRecordingDelegate(
      this._file,
      this._delegate
    );
  }

  public stopRecording(): void {
    this.session.stopRunning();
    if (this.thumbnailCount && this.thumbnailCount > 0) {
      this.extractThumbnails();
    }
  }

  public stopPreview(): void {
    if (this.session.running) {
      this.session.stopRunning();
    }
  }

  public toggleCamera(): void {
    if (this.cameraPosition === CameraPosition.BACK) {
      this.cameraPosition = 'front';
    } else {
      this.cameraPosition = 'back';
    }
    this.stopPreview();
    this.startPreview();
  }

  public startPreview(): void {
    this.openCamera();
  }

  public onLayout(left: number, top: number, right: number, bottom: number) {
    if (this.nativeView.layer && this.nativeView.layer.sublayers && this.nativeView.layer.sublayers[0]) {
      dispatch_async(dispatch_get_current_queue(), () => {
        this.nativeView.layer.sublayers[0].frame = this.nativeView.bounds;
      });
    }
  }

  public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
    const width = Utils.layout.getMeasureSpecSize(widthMeasureSpec);
    const height = Utils.layout.getMeasureSpecSize(heightMeasureSpec);
    this.setMeasuredDimension(width, height);
  }

  private extractThumbnails() {
    this.thumbnails = [];
    let asset = AVURLAsset.alloc().initWithURLOptions(
      this._file,
      null
    );
    let assetIG = AVAssetImageGenerator.alloc().initWithAsset(asset);
    assetIG.appliesPreferredTrackTransform = true;
    assetIG.apertureMode = AVAssetImageGeneratorApertureModeEncodedPixels;
    let it = parseInt((asset.duration.value / this.thumbnailCount).toString());

    for (let index = 0; index < this.thumbnailCount; index++) {
      let thumbnailImageRef = assetIG.copyCGImageAtTimeActualTimeError(
        CMTimeMake(it * index, asset.duration.timescale),
        null
      );

      if (!thumbnailImageRef) {
        console.log("Thumbnail Image Generation Error");
      }

      let image = UIImage.alloc().initWithCGImage(thumbnailImageRef);


      let outputFilePath =
        this._fileName.substr(0, this._fileName.lastIndexOf(".")) +
        "_thumb_" +
        index +
        ".png";

      let path = nsPath.join(this.folder.path, outputFilePath);
      let ok = UIImagePNGRepresentation(image).writeToFileAtomically(
        path,
        true
      );

      if (!ok) {
        console.log("Could not write thumbnail to file");
      } else {
        this.thumbnails.push(path);
      }
    }
  }
}

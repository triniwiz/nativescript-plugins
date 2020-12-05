import {
  AdvancedVideoViewBase,
  CameraPosition,
  cameraPositionProperty,
  Orientation,
  outputOrientation,
  Quality,
  qualityProperty,
  saveToGalleryProperty,
  torchProperty
} from './common';
import {releaseNativeObject} from '@nativescript/core/utils/utils';
import {fromObject, Application, AndroidApplication} from '@nativescript/core';
import {VideoRecorder} from "../";

declare var co: any, androidx: any;
let MediaMetadataRetriever = android.media.MediaMetadataRetriever;

export enum NativeOrientation {
  Unknown,
  Portrait,
  PortraitUpsideDown,
  LandscapeLeft,
  LandscapeRight,
}

export class AdvancedVideoView extends AdvancedVideoViewBase {
  thumbnails: any[];

  get duration() {
    return this.nativeView && this.nativeView.getDuration()
      ? this.nativeView.getDuration()
      : 0;
  }

  public static requestPermissions(explanation = ''): Promise<any> {
    // @ts-ignore
    return VideoRecorder._requestPermissions(
      [
        android.Manifest.permission.CAMERA,
        android.Manifest.permission.RECORD_AUDIO
      ],
      explanation
    )
  }

  private durationInterval: any;

  public static isAvailable() {
    return Application.android.context.getPackageManager().hasSystemFeature(android.content.pm.PackageManager.FEATURE_CAMERA);
  }

  private _view;

  public createNativeView() {
    return new co.fitcom.fancycamera.FancyCamera(this._context);
  }

  private _handlePermission(args) {
    if (this.nativeView) {
      this.nativeView.onPermissionHandler(args.requestCode, args.permissions, args.grantResults);
    }
  }

  public initNativeView() {
    super.initNativeView();
    Application.android.on(AndroidApplication.activityRequestPermissionsEvent, this._handlePermission);
    const ref = new WeakRef<AdvancedVideoView>(this);
    let that = this;
    const listener = (co as any).fitcom.fancycamera.CameraEventListenerUI.extend(
      {
        onCameraOpenUI() {
        },
        onCameraCloseUI() {
        },
        onEventUI(event) {
          const owner = ref.get();
          if (owner) {
            const EventType = co.fitcom.fancycamera.EventType as any;
            if (event.getType() === EventType.from(1) && event.getMessage() === null && event.getFile() !== null) {
              if (owner.thumbnailCount && owner.thumbnailCount > 0) {
                that.extractThumbnails(event.getFile().getPath());
              }
              owner.notify({
                eventName: 'finished',
                object: fromObject({
                  file: event.getFile().getPath()
                })
              });
            } else if (event.getType() === EventType.from(1) && event.getMessage() === null && event.getFile() === null) {
              owner.notify({
                eventName: 'started',
                object: fromObject({})
              });
            } else {
              if (event.getMessage()) {
                owner.notify({
                  eventName: 'error',
                  object: fromObject({
                    message: event.getMessage()
                  })
                });
              }
            }
          }
        }
      }
    );
    this.nativeView.setListener(new listener());
    //this.setQuality(this.quality);
    //this.setCameraPosition(this.cameraPosition);
    //this.setCameraOrientation(this.outputOrientation);
    //  unknown
    // this.nativeView.setCameraOrientation(co.fitcom.fancycamera.FancyCamera.CameraOrientation.Companion.from(0));
  }

  disposeNativeView(): void {
    Application.android.off(AndroidApplication.activityRequestPermissionsEvent, this._handlePermission);
    super.disposeNativeView();
  }

  private setCameraPosition(position): void {
    switch (position) {
      case CameraPosition.FRONT:
        this.nativeView.setCameraPosition(co.fitcom.fancycamera.FancyCamera.CameraPosition.Companion.from(1));
        break;
      default:
        this.nativeView.setCameraPosition(co.fitcom.fancycamera.FancyCamera.CameraPosition.Companion.from(0));
        break;
    }
  }

  [cameraPositionProperty.getDefault]() {
    this.setCameraPosition('back');
    return 'back';
  }

  [cameraPositionProperty.setNative](position) {
    if (this.nativeView) {
      this.setCameraPosition(position);
    }
    return position;
  }

  private setCameraOrientation(orientation: Orientation): void {
    let nativeOrientation: number;
    switch (orientation) {
      case Orientation.LandscapeLeft:
        nativeOrientation = co.fitcom.fancycamera.FancyCamera.CameraOrientation.Companion.from(3);
        break;
      case Orientation.LandscapeRight:
        nativeOrientation = co.fitcom.fancycamera.FancyCamera.CameraOrientation.Companion.from(4);
        break;
      case Orientation.Portrait:
        nativeOrientation = co.fitcom.fancycamera.FancyCamera.CameraOrientation.Companion.from(1);
        break;
      case Orientation.PortraitUpsideDown:
        nativeOrientation = co.fitcom.fancycamera.FancyCamera.CameraOrientation.Companion.from(2);
        break;
      default:
        nativeOrientation = co.fitcom.fancycamera.FancyCamera.CameraOrientation.Companion.from(0);
        break;
    }

    if (this.nativeView && nativeOrientation) {
      this.nativeView.setCameraOrientation(nativeOrientation);
    }
  }

  [outputOrientation.getDefault](): Orientation {
    this.setCameraOrientation(Orientation.Unknown);
    return Orientation.Unknown;
  }

  [outputOrientation.setNative](orientation: Orientation) {
    if (this.nativeView) {
      this.setCameraOrientation(orientation);
    }
    return orientation;
  }

  [saveToGalleryProperty.getDefault]() {
    return false;
  }

  [saveToGalleryProperty.setNative](save: boolean) {
    return save;
  }

  private setQuality(quality) {
    let q;
    if (quality && quality.valueof === 'function') {
      q = quality.valueof();
    } else {
      q = quality;
    }
    switch (q) {
      case Quality.MAX_720P:
        this.nativeView.setQuality(
          co.fitcom.fancycamera.FancyCamera.Quality.Companion.from(1)
        );
        break;
      case Quality.MAX_1080P:
        this.nativeView.setQuality(
          co.fitcom.fancycamera.FancyCamera.Quality.Companion.from(2)
        );
        break;
      case Quality.MAX_2160P:
        this.nativeView.setQuality(
          co.fitcom.fancycamera.FancyCamera.Quality.Companion.from(3)
        );
        break;
      case Quality.HIGHEST:
        this.nativeView.setQuality(
          co.fitcom.fancycamera.FancyCamera.Quality.Companion.from(4)
        );
        break;
      case Quality.LOWEST:
        this.nativeView.setQuality(
          co.fitcom.fancycamera.FancyCamera.Quality.Companion.from(5)
        );
        break;
      case Quality.QVGA:
        this.nativeView.setQuality(
          co.fitcom.fancycamera.FancyCamera.Quality.Companion.from(6)
        );
        break;
      default:
        this.nativeView.setQuality(
          co.fitcom.fancycamera.FancyCamera.Quality.Companion.from(0)
        );
        break;
    }
  }


  [qualityProperty.setNative](quality) {
    if (!quality) return quality;
    this.setQuality(this.quality);
    return quality;
  }


  [torchProperty.getDefault]() {
    return false;
  }

  [torchProperty.setNative](torch) {
    if (!this.isTorchAvailable || !this.nativeView) return false;
    if (torch && !this.nativeView.flashEnabled) {
      this.nativeView.enableFlash();
    } else if (!torch && this.nativeView.flashEnabled) {
      this.nativeView.disableFlash();
    }
    return torch;
  }

  public get isTorchAvailable() {
    return this.nativeView && this.nativeView.hasFlash();
  }

  public toggleTorch() {
    if (!this.isTorchAvailable) return;
    this.torch = !this.torch;
  }

  public toggleCamera() {
    this.nativeView.toggleCamera();
  }

  public startRecording(): void {
    this.nativeView.startRecording();
  }

  public stopRecording(): void {
    this.nativeView.stopRecording();
  }

  public startPreview(): void {
    if (this.nativeView) {
      this.nativeView.start();
    }
  }

  public stopPreview(): void {
    if (this.nativeView) {
      this.nativeView.stop();
    }
  }

  extractThumbnails(file) {
    this.thumbnails = [];
    let mediaMetadataRetriever = new MediaMetadataRetriever();

    mediaMetadataRetriever.setDataSource(file);
    let METADATA_KEY_DURATION = mediaMetadataRetriever.extractMetadata(
      MediaMetadataRetriever.METADATA_KEY_DURATION
    );

    let max = parseInt(METADATA_KEY_DURATION.toString());

    let it = parseInt((max / this.thumbnailCount).toString());

    for (let index = 0; index < this.thumbnailCount; index++) {
      let bmpOriginal = mediaMetadataRetriever.getFrameAtTime(
        index * it * 1000,
        MediaMetadataRetriever.OPTION_CLOSEST
      );
      let byteCount = bmpOriginal.getWidth() * bmpOriginal.getHeight() * 4;
      let tmpByteBuffer = java.nio.ByteBuffer.allocate(byteCount);
      bmpOriginal.copyPixelsToBuffer(tmpByteBuffer);
      let quality = 100;

      let outputFilePath =
        file.substr(0, file.lastIndexOf('.')) +
        '_thumbnail_' +
        index +
        '.png';
      let outputFile = new java.io.File(outputFilePath);
      let outputStream = null;

      try {
        outputStream = new java.io.FileOutputStream(outputFile);
      } catch (e) {
        console.log(e);
      }
      let bmpScaledSize;
      try {
        bmpScaledSize = android.graphics.Bitmap.createScaledBitmap(
          bmpOriginal,
          bmpOriginal.getWidth(),
          bmpOriginal.getHeight(),
          false
        );
        bmpScaledSize.compress(
          android.graphics.Bitmap.CompressFormat.PNG,
          quality,
          outputStream
        );

        if (outputStream) {
          outputStream.close();
        }
        this.thumbnails.push(outputFilePath);
      } catch (e) {
        console.log(e);
      } finally {
        outputStream = null;
        if (bmpScaledSize) {
          releaseNativeObject(bmpScaledSize);
        }
        if (bmpOriginal) {
          releaseNativeObject(bmpOriginal);
        }
        releaseNativeObject(tmpByteBuffer);
      }
    }

    mediaMetadataRetriever.release();
  }
}

export const TNSCameraProvider = (co as any).fitcom.fancycamera.CameraProvider;
export const TNSCamera = (co as any).fitcom.fancycamera.FancyCamera;

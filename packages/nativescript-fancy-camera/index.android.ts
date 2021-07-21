import { FancyCameraBase, positionProperty } from './common';

export class FancyCamera extends FancyCameraBase {
	duration: number;
	thumbnails: string[];
	private _camera: io.github.triniwiz.fancycamera.FancyCamera;

	createNativeView(): Object {
		return new io.github.triniwiz.fancycamera.FancyCamera(this._context);
	}

	startRecordingVideo() {
		this._camera?.startRecording?.();
	}
	stopRecordingVideo() {
		this._camera?.stopRecording?.();
	}

	initNativeView() {
		super.initNativeView();
		this._camera.setListener(
			new io.github.triniwiz.fancycamera.CameraEventListener({
				onCameraAnalysis(param0: io.github.triniwiz.fancycamera.ImageAnalysis): void {},
				onCameraClose(): void {},
				onCameraError(param0: string, param1: java.lang.Exception): void {},
				onCameraOpen(): void {},
				onCameraPhoto(param0: java.io.File): void {},
				onCameraVideo(param0: java.io.File): void {},
				onCameraVideoStart(): void {},
				onReady(): void {},
			})
		);
	}

	get pictureSize(): string {
		return this._camera?.getPictureSize?.() ?? '0x0';
	}

	getAvailablePictureSizes(ratio: string): string[] {
		if (this._camera) {
			return this._camera.getAvailablePictureSizes(ratio) as any;
		}
		return [];
	}

	takePhoto() {
		this._camera?.takePhoto?.();
	}

	[positionProperty.setNative](value) {
		switch (value) {
			case 'front':
				this._camera?.setPosition(io.github.triniwiz.fancycamera.CameraPosition.FRONT);
				break;
			case 'back':
				this._camera?.setPosition(io.github.triniwiz.fancycamera.CameraPosition.BACK);
				break;
			default:
				break;
		}
	}

	public toggleCamera(): void {
		this._camera?.toggleCamera?.();
	}

	public startPreview(): void {
		this._camera?.startPreview();
	}

	public stopPreview(): void {
		this._camera?.stopPreview();
	}
}

import { fromObject, Observable, Utils, View } from '@nativescript/core';
import { TNSCameraCaptureFrameRate, TNSCameraCaptureResolution, TNSScaleStyle } from '../common';
import { TNSStream } from '../session';

@NativeClass()
@ObjCClass(OTPublisherKitDelegate)
class OTPublisherKitDelegateImpl extends NSObject implements OTPublisherKitDelegate {
	_owner: WeakRef<TNSPublisher>;
	static initWithOwner(owner: WeakRef<TNSPublisher>) {
		const delegate = <OTPublisherKitDelegateImpl>OTPublisherKitDelegateImpl.new();
		delegate._owner = owner;
		return delegate;
	}
	publisherDidFailWithError(publisher: OTPublisherKit, error: OTError): void {
		this._owner?.get?.().notify({
			eventName: 'error',
			object: fromObject({}),
			publisher: this._owner?.get?.(),
			error: {
				message: error.localizedDescription,
				native: error,
			},
		});
	}
	publisherMuteForced(publisher: OTPublisherKit, muteForcedInfo: OTMuteForcedInfo): void {
		this._owner?.get?.().notify({
			eventName: 'muteForced',
			object: fromObject({}),
			publisher: this._owner?.get?.(),
		});
	}
	publisherStreamCreated(publisher: OTPublisherKit, stream: OTStream): void {
		this._owner?.get?.().notify({
			eventName: 'streamCreated',
			object: fromObject({}),
			publisher: this._owner?.get?.(),
			stream: (<any>TNSStream).fromNativeObject(stream),
		});
	}
	publisherStreamDestroyed(publisher: OTPublisherKit, stream: OTStream): void {
		this._owner?.get?.().notify({
			eventName: 'streamDestroyed',
			object: fromObject({}),
			publisher: this._owner?.get?.(),
			stream: (<any>TNSStream).fromNativeObject(stream),
		});
	}
}

export class TNSPublisherView extends View {
	_native;
	constructor(view) {
		super();
		this._native = view;
	}
	createNativeView() {
		return this._native;
	}

	public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
		const nativeView = this.nativeView;
		if (nativeView) {
			const width = Utils.layout.getMeasureSpecSize(widthMeasureSpec);
			const height = Utils.layout.getMeasureSpecSize(heightMeasureSpec);
			this.setMeasuredDimension(width, height);
		}
	}
}

function toOTCameraCaptureResolution(resolution: TNSCameraCaptureResolution) {
	switch (resolution) {
		case TNSCameraCaptureResolution.Low:
			return OTCameraCaptureResolution.Low;
		case TNSCameraCaptureResolution.Medium:
			return OTCameraCaptureResolution.Medium;
		case TNSCameraCaptureResolution.High:
			return OTCameraCaptureResolution.High;
		default:
			return OTCameraCaptureResolution.Medium;
	}
}

function toOTCameraCaptureFrameRate(fps: TNSCameraCaptureFrameRate) {
	switch (fps) {
		case TNSCameraCaptureFrameRate.FPS30:
			return OTCameraCaptureFrameRate.Rate30FPS;
		case TNSCameraCaptureFrameRate.FPS15:
			return OTCameraCaptureFrameRate.Rate15FPS;
		case TNSCameraCaptureFrameRate.FPS7:
			return OTCameraCaptureFrameRate.Rate7FPS;
		case TNSCameraCaptureFrameRate.FPS1:
			return OTCameraCaptureFrameRate.Rate1FPS;
		default:
			return OTCameraCaptureFrameRate.Rate15FPS;
	}
}

export class TNSPublisher extends Observable {
	private _native: OTPublisher;
	private _view: any;
	private _delegate: OTPublisherKitDelegateImpl;
	static initPublisher(name: string = '', resolution: TNSCameraCaptureResolution = TNSCameraCaptureResolution.Medium, fps: TNSCameraCaptureFrameRate = TNSCameraCaptureFrameRate.FPS15): TNSPublisher {
		const publisher = new TNSPublisher();
		const delegate = OTPublisherKitDelegateImpl.initWithOwner(new WeakRef(publisher));
		publisher._native = OTPublisher.alloc().initWithDelegateNameCameraResolutionCameraFrameRate(delegate, name || '', toOTCameraCaptureResolution(resolution), toOTCameraCaptureFrameRate(fps));
		publisher._delegate = delegate;
		return publisher;
	}

	set scale(value: TNSScaleStyle) {
		switch (value) {
			case TNSScaleStyle.Fill:
				this.ios.viewScaleBehavior = OTVideoViewScaleBehavior.Fill;
				break;
			case TNSScaleStyle.Fit:
				this.ios.viewScaleBehavior = OTVideoViewScaleBehavior.Fit;
				break;
		}
	}

	set publishVideo(value: boolean) {
		this.ios.publishVideo = value;
	}

	get publishVideo() {
		return this.ios.publishVideo;
	}

	set publishAudio(value: boolean) {
		this.ios.publishAudio = value;
	}

	get publishAudio() {
		return this.ios.publishAudio;
	}

	cycleCamera() {
		switch (this.ios.cameraPosition) {
			case AVCaptureDevicePosition.Back:
				this.ios.cameraPosition = AVCaptureDevicePosition.Front;
				break;
			case AVCaptureDevicePosition.Front:
				this.ios.cameraPosition = AVCaptureDevicePosition.Back;
				break;
		}
	}

	get view() {
		if (!this._view) {
			this._view = new TNSPublisherView(this._native.view);
		}
		return this._view;
	}

	get ios() {
		return this._native;
	}
}

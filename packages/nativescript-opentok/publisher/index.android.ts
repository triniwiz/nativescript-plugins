import { Application, fromObject, Observable, View } from '@nativescript/core';
import { TNSCameraCaptureFrameRate, TNSCameraCaptureResolution, TNSScaleStyle } from '../common';
import { TNSStream } from '../session';

let TNSPublisherListener;
function ensureClass() {
	if (TNSPublisherListener) {
		return;
	}
	@NativeClass()
	@Interfaces([com.opentok.android.PublisherKit.PublisherListener, com.opentok.android.PublisherKit.MuteListener])
	class TNSPublisherListenerImpl extends java.lang.Object implements com.opentok.android.PublisherKit.PublisherListener, com.opentok.android.PublisherKit.MuteListener {
		_owner: WeakRef<TNSPublisher>;
		constructor(owner: WeakRef<TNSPublisher>) {
			super();
			this._owner = owner;
			return global.__native(this);
		}
		public onMuteForced(param0: com.opentok.android.PublisherKit, param1: com.opentok.android.MuteForcedInfo): void {
			this._owner?.get?.().notify({
				eventName: 'muteForced',
				object: fromObject({}),
				publisher: this._owner?.get?.(),
			});
		}
		public onStreamDestroyed(param0: com.opentok.android.PublisherKit, param1: com.opentok.android.Stream): void {
			this._owner?.get?.().notify({
				eventName: 'streamDestroyed',
				object: fromObject({}),
				publisher: this._owner?.get?.(),
				stream: (<any>TNSStream).fromNativeObject(param1),
			});
		}
		public onError(param0: com.opentok.android.PublisherKit, param1: com.opentok.android.OpentokError): void {
			this._owner?.get?.().notify({
				eventName: 'error',
				object: fromObject({}),
				publisher: this._owner?.get?.(),
				error: {
					message: param1.errorMessage,
					native: param1,
				},
			});
		}
		public onStreamCreated(param0: com.opentok.android.PublisherKit, param1: com.opentok.android.Stream): void {
			this._owner?.get?.().notify({
				eventName: 'streamCreated',
				object: fromObject({}),
				publisher: this._owner?.get?.(),
				stream: (<any>TNSStream).fromNativeObject(param1),
			});
		}
	}

	TNSPublisherListener = TNSPublisherListenerImpl;
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
}

function toCameraCaptureResolution(resolution: TNSCameraCaptureResolution) {
	switch (resolution) {
		case TNSCameraCaptureResolution.Low:
			return com.opentok.android.Publisher.CameraCaptureResolution.LOW;
		case TNSCameraCaptureResolution.Medium:
			return com.opentok.android.Publisher.CameraCaptureResolution.MEDIUM;
		case TNSCameraCaptureResolution.High:
			return com.opentok.android.Publisher.CameraCaptureResolution.HIGH;
		default:
			return com.opentok.android.Publisher.CameraCaptureResolution.MEDIUM;
	}
}

function toCameraCaptureFrameRate(fps: TNSCameraCaptureFrameRate) {
	switch (fps) {
		case TNSCameraCaptureFrameRate.FPS30:
			return com.opentok.android.Publisher.CameraCaptureFrameRate.FPS_30;
		case TNSCameraCaptureFrameRate.FPS15:
			return com.opentok.android.Publisher.CameraCaptureFrameRate.FPS_15;
		case com.opentok.android.Publisher.CameraCaptureFrameRate.FPS_7:
			return OTCameraCaptureFrameRate.Rate7FPS;
		case TNSCameraCaptureFrameRate.FPS1:
			return com.opentok.android.Publisher.CameraCaptureFrameRate.FPS_1;
		default:
			return com.opentok.android.Publisher.CameraCaptureFrameRate.FPS_15;
	}
}

export class TNSPublisher extends Observable {
	private _native: com.opentok.android.Publisher;
	private _view: any;
	private _listener;
	static initPublisher(name: string, resolution: TNSCameraCaptureResolution = TNSCameraCaptureResolution.Medium, fps: TNSCameraCaptureFrameRate = TNSCameraCaptureFrameRate.FPS15) {
		const publisher = new TNSPublisher();
		const builder = new com.opentok.android.Publisher.Builder(Application.android.foregroundActivity || Application.android.startActivity);
		builder.name(name || '');
		builder.resolution(toCameraCaptureResolution(resolution));
		builder.frameRate(toCameraCaptureFrameRate(fps));
		publisher._native = builder.build() as any;
		ensureClass();
		publisher._listener = new TNSPublisherListener(new WeakRef(publisher));
		publisher._native.setPublisherListener(publisher._listener);
		publisher._native.setMuteListener(publisher._listener);
		return publisher;
	}
	set scale(value: TNSScaleStyle) {
		switch (value) {
			case TNSScaleStyle.Fill:
				this.android.setStyle(com.opentok.android.BaseVideoRenderer.STYLE_VIDEO_SCALE, com.opentok.android.BaseVideoRenderer.STYLE_VIDEO_FILL);
				break;
			case TNSScaleStyle.Fit:
				this.android.setStyle(com.opentok.android.BaseVideoRenderer.STYLE_VIDEO_SCALE, com.opentok.android.BaseVideoRenderer.STYLE_VIDEO_FIT);
				break;
		}
	}

	set publishVideo(value: boolean) {
		this.android.setPublishVideo(value);
	}

	get publishVideo() {
		return this.android.getPublishVideo();
	}

	set publishAudio(value: boolean) {
		this.android.setPublishAudio(value);
	}

	get publishAudio() {
		return this.android.getPublishAudio();
	}

	cycleCamera() {
		this.android.cycleCamera();
	}

	get view() {
		if (!this._view) {
			this._view = new TNSPublisherView(this._native.getView());
		}
		return this._view;
	}

	get android() {
		return this._native;
	}
}

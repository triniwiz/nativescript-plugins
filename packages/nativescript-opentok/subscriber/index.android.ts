import { View, Application, Observable, fromObject } from '@nativescript/core';
import { TNSScaleStyle, TNSSubscriberVideoEventReason } from '../common';
import { TNSStream } from '../session';

function toTNSSubscriberVideoEventReason(reason: string): TNSSubscriberVideoEventReason {
	switch (reason) {
		case com.opentok.android.SubscriberKit.VIDEO_REASON_SUBSCRIBE_TO_VIDEO:
			return TNSSubscriberVideoEventReason.SubscriberPropertyChanged;
		case com.opentok.android.SubscriberKit.VIDEO_REASON_CODEC_NOT_SUPPORTED:
			return TNSSubscriberVideoEventReason.CodecNotSupported;
		case com.opentok.android.SubscriberKit.VIDEO_REASON_QUALITY:
			return TNSSubscriberVideoEventReason.QualityChanged;
		case com.opentok.android.SubscriberKit.VIDEO_REASON_PUBLISH_VIDEO:
			return TNSSubscriberVideoEventReason.PublisherPropertyChanged;
	}
}

let TNSSubscriberListener;
function ensureClass() {
	if (TNSSubscriberListener) {
		return;
	}
	@NativeClass()
	@Interfaces([com.opentok.android.SubscriberKit.SubscriberListener, com.opentok.android.SubscriberKit.VideoListener, com.opentok.android.SubscriberKit.StreamListener])
	export class TNSSubscriberListenerImpl extends java.lang.Object implements com.opentok.android.SubscriberKit.SubscriberListener, com.opentok.android.SubscriberKit.VideoListener, com.opentok.android.SubscriberKit.StreamListener {
		_owner: WeakRef<TNSSubscriber>;
		constructor(owner: WeakRef<TNSSubscriber>) {
			super();
			this._owner = owner;
			return global.__native(this);
		}
		public onAudioEnabled(param0: com.opentok.android.SubscriberKit): void {
			
		}
		public onAudioDisabled(param0: com.opentok.android.SubscriberKit): void {
			
		}
		public onReconnected(param0: com.opentok.android.SubscriberKit): void {
			this._owner?.get?.().notify({
				eventName: 'reconnected',
				object: fromObject({}),
				subscriber: this._owner?.get?.()
			});
		}
		public onVideoEnabled(param0: com.opentok.android.SubscriberKit, param1: string): void {
			this._owner?.get?.().notify({
				eventName: 'videoEnabled',
				object: fromObject({}),
				subscriber: this._owner?.get?.(),
				reason: toTNSSubscriberVideoEventReason(param1)
			});
		}

		public onVideoDisabled(param0: com.opentok.android.SubscriberKit, param1: string): void {
			this._owner?.get?.().notify({
				eventName: 'videoDisabled',
				object: fromObject({}),
				subscriber: this._owner?.get?.(),
				reason: toTNSSubscriberVideoEventReason(param1)
			});
		}

		public onVideoDisableWarning(param0: com.opentok.android.SubscriberKit): void {
			this._owner?.get?.().notify({
				eventName: 'videoDisableWarning',
				object: fromObject({}),
				subscriber: this._owner?.get?.()
			});
		}
		public onVideoDisableWarningLifted(param0: com.opentok.android.SubscriberKit): void {
			this._owner?.get?.().notify({
				eventName: 'videoDisableWarningLifted',
				object: fromObject({}),
				subscriber: this._owner?.get?.()
			});
		}
		public onVideoDataReceived(param0: com.opentok.android.SubscriberKit): void {
			this._owner?.get?.().notify({
				eventName: 'videoDataReceived',
				object: fromObject({}),
				subscriber: this._owner?.get?.()
			});
		}
		public onError(param0: com.opentok.android.SubscriberKit, param1: com.opentok.android.OpentokError): void {
			this._owner?.get?.().notify({
				eventName: 'error',
				object: fromObject({}),
				subscriber: this._owner?.get?.()
			});
		}
		public onConnected(param0: com.opentok.android.SubscriberKit): void {
			this._owner?.get?.().notify({
				eventName: 'connected',
				object: fromObject({}),
				subscriber: this._owner?.get?.()
			});
		}
		public onDisconnected(param0: com.opentok.android.SubscriberKit): void {
			this._owner?.get?.().notify({
				eventName: 'disconnected',
				object: fromObject({}),
				subscriber: this._owner?.get?.()
			});
		}
	}
	TNSSubscriberListener = TNSSubscriberListenerImpl;
}

export class TNSSubscriberView extends View {
	_native;
	constructor(view) {
		super();
		this._native = view;
	}
	createNativeView() {
		return this._native;
	}
}

export class TNSSubscriber extends Observable {
	private _native: com.opentok.android.Subscriber;
	private _view: any;
	private _listener;
	static initSubscriber(stream: TNSStream) {
		const subscriber = new TNSSubscriber();
		subscriber._native = new com.opentok.android.Subscriber.Builder(Application.android.foregroundActivity || Application.android.startActivity, stream.android).build();
		ensureClass();
		subscriber._listener = new TNSSubscriberListener(new WeakRef(subscriber));
		subscriber._native.setSubscriberListener(subscriber._listener);
		subscriber._native.setVideoListener(subscriber._listener);
		subscriber._native.setStreamListener(subscriber._listener);
		return subscriber;
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

	set subscribeToVideo(value: boolean) {
		this.android.setSubscribeToVideo(value);
	}

	get subscribeToVideo(): boolean {
		return this.android.getSubscribeToVideo();
	}

	set subscribeToAudio(value: boolean) {
		this.android.setSubscribeToAudio(value);
	}

	get subscribeToAudio() {
		return this.android.getSubscribeToAudio();
	}

	get view() {
		if (!this._view) {
			this._view = new TNSSubscriberView(this._native.getView());
		}
		return this._view;
	}

	get android() {
		return this._native;
	}
}

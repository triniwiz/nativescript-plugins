import { fromObject, Observable, Utils, View } from '@nativescript/core';
import { TNSScaleStyle, TNSSubscriberVideoEventReason } from '../common';
import { TNSStream } from '../session';

function toTNSSubscriberVideoEventReason(reason: OTSubscriberVideoEventReason): TNSSubscriberVideoEventReason {
	switch (reason) {
		case OTSubscriberVideoEventReason.SubscriberPropertyChanged:
			return TNSSubscriberVideoEventReason.SubscriberPropertyChanged;
		case OTSubscriberVideoEventReason.CodecNotSupported:
			return TNSSubscriberVideoEventReason.CodecNotSupported;
		case OTSubscriberVideoEventReason.QualityChanged:
			return TNSSubscriberVideoEventReason.QualityChanged;
		case OTSubscriberVideoEventReason.PublisherPropertyChanged:
			return TNSSubscriberVideoEventReason.PublisherPropertyChanged;
	}
}

@NativeClass()
@ObjCClass(OTSubscriberDelegate)
class OTSubscriberDelegateImpl extends NSObject implements OTSubscriberDelegate {
	_owner: WeakRef<TNSSubscriber>;
	static initWithOwner(owner: WeakRef<TNSSubscriber>): OTSubscriberDelegateImpl {
		const delegate = <OTSubscriberDelegateImpl>OTSubscriberDelegateImpl.new();
		delegate._owner = owner;
		return delegate;
	}
	subscriberVideoDataReceived(subscriber: OTSubscriber): void {
		this._owner?.get?.().notify({
			eventName: 'videoDataReceived',
			object: fromObject({}),
			subscriber: this._owner?.get?.(),
		});
	}
	subscriberDidConnectToStream(subscriber: OTSubscriberKit): void {
		this._owner?.get?.().notify({
			eventName: 'connected',
			object: fromObject({}),
			subscriber: this._owner?.get?.(),
		});
	}
	subscriberDidDisconnectFromStream(subscriber: OTSubscriberKit): void {
		this._owner?.get?.().notify({
			eventName: 'disconnected',
			object: fromObject({}),
			subscriber: this._owner?.get?.(),
		});
	}
	subscriberDidFailWithError(subscriber: OTSubscriberKit, error: OTError): void {
		this._owner?.get?.().notify({
			eventName: 'error',
			object: fromObject({}),
			subscriber: this._owner?.get?.(),
		});
	}
	subscriberDidReconnectToStream?(subscriber: OTSubscriberKit): void {
		this._owner?.get?.().notify({
			eventName: 'reconnected',
			object: fromObject({}),
			subscriber: this._owner?.get?.(),
		});
	}
	subscriberVideoDisableWarning?(subscriber: OTSubscriberKit): void {
		this._owner?.get?.().notify({
			eventName: 'videoDisableWarning',
			object: fromObject({}),
			subscriber: this._owner?.get?.(),
		});
	}
	subscriberVideoDisableWarningLifted?(subscriber: OTSubscriberKit): void {
		this._owner?.get?.().notify({
			eventName: 'videoDisableWarningLifted',
			object: fromObject({}),
			subscriber: this._owner?.get?.(),
		});
	}
	subscriberVideoDisabledReason(subscriber: OTSubscriberKit, reason: OTSubscriberVideoEventReason): void {
		this._owner?.get?.().notify({
			eventName: 'videoDisabled',
			object: fromObject({}),
			subscriber: this._owner?.get?.(),
			reason: toTNSSubscriberVideoEventReason(reason),
		});
	}
	subscriberVideoEnabledReason(subscriber: OTSubscriberKit, reason: OTSubscriberVideoEventReason): void {
		this._owner?.get?.().notify({
			eventName: 'videoEnabled',
			object: fromObject({}),
			subscriber: this._owner?.get?.(),
			reason: toTNSSubscriberVideoEventReason(reason),
		});
	}
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

	public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
		const nativeView = this.nativeView;
		if (nativeView) {
			const width = Utils.layout.getMeasureSpecSize(widthMeasureSpec);
			const height = Utils.layout.getMeasureSpecSize(heightMeasureSpec);
			this.setMeasuredDimension(width, height);
		}
	}
}

export class TNSSubscriber extends Observable {
	private _native: OTSubscriber;
	private _view: any;
	private _delegate: OTSubscriberDelegateImpl;
	static initSubscriber(stream: TNSStream): TNSSubscriber {
		const subscriber = new TNSSubscriber();
		const delegate = OTSubscriberDelegateImpl.initWithOwner(new WeakRef(subscriber));
		subscriber._native = OTSubscriber.alloc().initWithStreamDelegate(stream.ios, delegate);
		subscriber._delegate = delegate;
		return subscriber;
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

	set subscribeToVideo(value: boolean) {
		this.ios.subscribeToVideo = value;
	}

	get subscribeToVideo(): boolean {
		return this.ios.subscribeToVideo;
	}

	set subscribeToAudio(value: boolean) {
		this.ios.subscribeToAudio = value;
	}

	get subscribeToAudio() {
		return this.ios.subscribeToAudio;
	}

	get view() {
		if (!this._view) {
			this._view = new TNSSubscriberView(this._native.view);
		}
		return this._view;
	}

	get ios() {
		return this._native;
	}
}

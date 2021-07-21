import { Observable, View } from '@nativescript/core';

export declare class TNSPublisherView extends View {
	constructor(view);
}

export declare class TNSPublisher extends Observable {
	readonly view: TNSPublisherView;
	readonly android: any;
	readonly ios: any;
	static initPublisher(name?: string, resolution?: TNSCameraCaptureResolution, fps?: TNSCameraCaptureFrameRate): TNSPublisher;
	set scale(value: TNSScaleStyle);
	publishVideo: boolean;
	publishAudio: boolean;
	cycleCamera();
}

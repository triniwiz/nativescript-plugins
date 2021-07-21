import { Observable, View } from '@nativescript/core';
export declare class TNSSubscriberView extends View {
	constructor(view);
}

export declare class TNSSubscriber extends Observable {
	static initSubscriber(stream: TNSStream): TNSSubscriber;
	set scale(value: TNSScaleStyle);
	subscribeToVideo: boolean;
	subscribeToAudio: boolean;
	readonly view: TNSSubscriberView;
	readonly android: any;
	readonly ios: any;
}

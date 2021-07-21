export class TNSSessionICEConfig {}

export interface TNSSessionSettings {
	apiURL: string;
	connectionEventsSuppressed: boolean;
	iceConfig: TNSSessionICEConfig;
	ipWhitelist: boolean;
	proxyURL: string;
}

export enum TNSStreamVideoType {
	Camera = 'camera',
	Screen = 'screen',
	Custom = 'custom',
}

export enum TNSCameraCaptureFrameRate {
	FPS30 = 30,

	FPS15 = 15,

	FPS7 = 7,

	FPS1 = 1,
}

export enum TNSCameraCaptureResolution {
	Low = 'low',

	Medium = 'medium',

	High = 'high',
}

export enum TNSScaleStyle {
	Fit = 'fit',
	Fill = 'fill',
}

export enum TNSSubscriberVideoEventReason {
	PublisherPropertyChanged = 'publisherPropertyChanged',

	SubscriberPropertyChanged = 'SubscriberPropertyChanged',

	QualityChanged = 'qualityChanged',

	CodecNotSupported = 'codecNotSupported',
}

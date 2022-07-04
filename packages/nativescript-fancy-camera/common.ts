import { CSSType, Property, View } from '@nativescript/core';

export enum Quality {
	MAX_480P = '480p',
	MAX_720P = '720p',
	MAX_1080P = '1080p',
	MAX_2160P = '2160p',
	HIGHEST = 'highest',
	LOWEST = 'lowest',
	QVGA = 'qvga',
}

export enum CameraPosition {
	Front = 'front',
	Back = 'back',
}

@CSSType('FancyCamera')
export abstract class FancyCameraBase extends View {
	position: CameraPosition | 'front' | 'back';
	thumbnailCount: number;
	torch: boolean;
	fill: boolean;

	abstract takePhoto();

	abstract startRecordingVideo();

	abstract stopRecordingVideo();

	abstract getAvailablePictureSizes(ratio: string): string[];

	abstract pictureSize: string;

	abstract readonly duration: number;

	abstract readonly thumbnails: string[];
}

export const positionProperty = new Property<FancyCameraBase, CameraPosition>({
	name: 'position',
	defaultValue: CameraPosition.Back,
});

positionProperty.register(FancyCameraBase);

export const thumbnailCountProperty = new Property<FancyCameraBase, number>({
	name: 'thumbnailCount',
	defaultValue: 1,
});

thumbnailCountProperty.register(FancyCameraBase);

export const fillProperty = new Property<FancyCameraBase, boolean>({
	name: 'fill',
	defaultValue: false,
});

fillProperty.register(FancyCameraBase);

export const torchProperty = new Property<FancyCameraBase, boolean>({
	name: 'torch',
	defaultValue: false,
});

torchProperty.register(FancyCameraBase);

export const videoQualityProperty = new Property<FancyCameraBase, Quality>({
	name: 'videoQuality',
	defaultValue: Quality.MAX_480P,
});

videoQualityProperty.register(FancyCameraBase);

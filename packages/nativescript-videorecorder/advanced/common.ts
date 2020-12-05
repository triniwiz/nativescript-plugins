import {Property, View} from '@nativescript/core';

export enum CameraPosition {
  BACK = 'back',
  FRONT = 'front'
}

export enum Quality {
  MAX_480P = '480p',
  MAX_720P = '720p',
  MAX_1080P = '1080p',
  MAX_2160P = '2160p',
  HIGHEST = 'highest',
  LOWEST = 'lowest',
  QVGA = 'qvga'
}

export enum Orientation {
  Unknown = 'unknown',
  Portrait = 'portrait',
  PortraitUpsideDown = 'portraitUpsideDown',
  LandscapeLeft = 'landscapeLeft',
  LandscapeRight = 'landscapeRight',
}

export type CameraPositionType = 'back' | 'front';

export abstract class AdvancedVideoViewBase extends View {
  cameraPosition: CameraPositionType;
  saveToGallery: boolean;
  quality: Quality;
  thumbnailCount: number;
  fill: boolean;
  torch: boolean;
  outputOrientation: Orientation;

  abstract readonly duration: number;
  abstract readonly thumbnails: string[];

  public abstract startRecording(): void;

  public abstract stopRecording(): void;

  public abstract stopPreview(): void;

  public abstract toggleCamera(): void;

  public abstract toggleTorch(): void;

  public abstract startPreview(): void;

  public abstract get isTorchAvailable(): boolean;

  public static isAvailable(): boolean {
    return false;
  }

  public static requestPermissions(explanation?: string): Promise<any> {
    return Promise.resolve();
  }
}

export const outputOrientation = new Property<AdvancedVideoViewBase, string>({
  name: 'outputOrientation',
  defaultValue: Orientation.Unknown
});

export const fillProperty = new Property<AdvancedVideoViewBase, boolean>({
  name: 'fill',
  defaultValue: false
});

export const torchProperty = new Property<AdvancedVideoViewBase, boolean>({
  name: 'torch',
  defaultValue: false
});

export const thumbnailCountProperty = new Property<AdvancedVideoViewBase, number>({
  name: 'thumbnailCount',
  defaultValue: 1
});

export const qualityProperty = new Property<AdvancedVideoViewBase, any>({
  name: 'quality',
  defaultValue: Quality.MAX_480P
});

export const cameraPositionProperty = new Property<AdvancedVideoViewBase,
  CameraPositionType>({
  name: 'cameraPosition',
  defaultValue: CameraPosition.BACK
});

export const saveToGalleryProperty = new Property<AdvancedVideoViewBase,
  boolean>({
  name: 'saveToGallery',
  defaultValue: false
});

qualityProperty.register(AdvancedVideoViewBase);
cameraPositionProperty.register(AdvancedVideoViewBase);
saveToGalleryProperty.register(AdvancedVideoViewBase);
fillProperty.register(AdvancedVideoViewBase);
thumbnailCountProperty.register(AdvancedVideoViewBase);
outputOrientation.register(AdvancedVideoViewBase);
torchProperty.register(AdvancedVideoViewBase);

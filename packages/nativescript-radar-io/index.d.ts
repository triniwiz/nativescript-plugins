import {
  RadarIOChain,
  RadarIOEvent,
  RadarIOEventConfidence,
  RadarIOEventType,
  RadarIOEventVerification,
  RadarIOGeofence,
  RadarIOInsights,
  RadarIOInsightsConfidence,
  RadarIOInsightsLocation,
  RadarIOLocation,
  RadarIOPermissionStatus,
  RadarIOPlace,
  RadarIORegion,
  RadarIOResult,
  RadarIOTrackingOptions,
  RadarIOUser
} from './common';

export {
  RadarIOResult,
  RadarIOUser,
  RadarIOEvent,
  RadarIOLocation,
  RadarIOPlace,
  RadarIOEventConfidence,
  RadarIOEventType,
  RadarIOChain,
  RadarIOEventVerification,
  RadarIOGeofence,
  RadarIOInsights,
  RadarIOInsightsConfidence,
  RadarIOInsightsLocation,
  RadarIOPermissionStatus,
  RadarIORegion,
  RadarIOTrackingOptions
};


export declare class RadarIO {
  static isTracking(): boolean;

  static initialize(publishableKey: string): void;

  static setUserId(id: string): void;

  static setMetadata(meta: any): void;

  static setDescription(description: string): void;

  static setPlacesProvider(provider: string): void;

  static getPermissionsStatus(): Promise<RadarIOPermissionStatus>;

  static requestPermissions(background: boolean): Promise<{}>;

  static trackOnce(): Promise<RadarIOResult>;

  static getContext(options: { latitude?: number, longitude?: number }): Promise<RadarIOResult>;

  static stopTracking(): void;

  static startTracking(options?: RadarIOTrackingOptions): void;

  static on(event: string, callback: (event: any) => void): void;

  static off(event: string, callback?: (event: any) => void): void;

  static updateLocation(location: RadarIOLocation): Promise<RadarIOResult>;

  static acceptEvent(eventId: string, verifiedPlaceId?: string): void;

  static rejectEvent(eventId: string): void;
}

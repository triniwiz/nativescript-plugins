export enum RadarIOPermissionStatus {
  GRANTED = 'GRANTED',
  DENIED = 'DENIED',
  UNKNOWN = 'UNKNOWN'
}

export interface RadarIOTrackingOptions {
  priority?: 'responsiveness' | 'efficiency';
  sync?: 'possibleStateChanges' | 'all';
  replay?: 'stops' | 'none';
  desiredAccuracy?: 'high' | 'medium' |'low';
  desiredMovingUpdateInterval?: number;
  desiredStoppedUpdateInterval?: number;
  desiredSyncInterval?: number;
  movingGeofenceRadius?: number;
  showBlueBar?: boolean;
  offline?: 'replayOff' | 'replayStopped';
}

export interface RadarIOLocation {
  latitude: number,
  longitude: number,
  accuracy: number
}

export interface RadarIOChain {
  name: string;
  slug: string;
}

export enum RadarIOEventConfidence {
  none = 0,
  low = 1,
  medium = 2,
  high = 3
}

export type RadarIOEventType =
  | 'unknown'
  | 'user.entered_geofence'
  | 'user.entered_home'
  | 'user.entered_office'
  | 'user.entered_place'
  | 'user.entered_region_country'
  | 'user.entered_region_dma'
  | 'user.entered_region_state'
  | 'user.exited_geofence'
  | 'user.exited_home'
  | 'user.exited_office'
  | 'user.exited_place'
  | 'user.exited_region_country'
  | 'user.exited_region_dma'
  | 'user.exited_region_state'
  | 'user.nearby_place_chain'
  | 'user.started_traveling'
  | 'user.stopped_traveling';

export enum RadarIOEventVerification {
  accept = 1,
  unverify = 0,
  reject = -1
}

export interface RadarIOGeofence {
  _id: string;
  description: string;
  tag?: string;
  externalId?: string;
}

export interface RadarIOInsights {
  homeLocation?: RadarIOInsightsLocation;
  officeLocation?: RadarIOInsightsLocation;
  state?: {
    home: boolean;
    office: boolean;
    traveling: boolean;
  };
}


export enum RadarIOInsightsConfidence {
  none = 0,
  low = 1,
  medium = 2,
  high = 3
}

export interface RadarIOInsightsLocation {
  type: string;
  location: RadarIOInsightsLocation;
  confidence: RadarIOInsightsConfidence;
}


export interface RadarIOPlace {
  _id: string;
  name: string;
  categories: string[];
  chain?: RadarIOChain;
}


export interface RadarIOEvent {
  _id: string;
  live: boolean;
  type: RadarIOEventType;
  geofence?: RadarIOGeofence;
  place?: RadarIOPlace;
  alternatePlaces?: RadarIOPlace[];
  region?: RadarIORegion;
  confidence: RadarIOEventConfidence;
}

export interface RadarIORegion {
  _id: string;
  type: string;
  code: string;
  name: string;
}


export interface RadarIOUser {
  _id: string;
  userId?: string;
  deviceId?: string;
  description?: string;
  geofences?: RadarIOGeofence[];
  insights?: RadarIOInsights;
  place?: RadarIOPlace;
  country?: RadarIORegion;
  state?: RadarIORegion;
  dma?: RadarIORegion;
  postalCode?: RadarIORegion;
}

export interface RadarIOResult {
  status: string;
  location?: RadarIOLocation,
  events?: RadarIOEvent[],
  user?: RadarIOUser
}

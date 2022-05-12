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
import {Application, fromObject, Observable, Utils} from "@nativescript/core";
import {isNullOrUndefined, isObject} from "@nativescript/core/utils/types";

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

export class RadarIO {

  static events = new Observable();

  public static isTracking(): boolean {
    return io.radar.sdk.Radar.isTracking();
  }

  private static isSetup: boolean;

  public static initialize(publishableKey: string): void {
    io.radar.sdk.Radar.initialize(publishableKey);
    if (!this.isSetup) {
      com.github.triniwiz.radario.RadarIOPlugin.setListener(new com.github.triniwiz.radario.RadarIOPlugin.Listener({
        onClientLocation(location: string): void {
          RadarIO.events.notify({
            eventName: 'clientLocation',
            object: fromObject({}),
            ...JSON.parse(location)
          })
        },
        onLog(log: string): void {
          RadarIO.events.notify({
            eventName: 'log',
            object: fromObject({}),
            log
          })
        },
        onEvents(events: string) {
          RadarIO.events.notify({
            eventName: 'events',
            object: fromObject({}),
            ...JSON.parse(events)
          })
        },
        onLocation(location: string) {
          RadarIO.events.notify({
            eventName: 'location',
            object: fromObject({}),
            ...JSON.parse(location)
          })
        },
        onError(error: string) {
          RadarIO.events.notify({
            eventName: 'error',
            object: fromObject({}),
            ...JSON.parse(error)
          })
        }
      }));
      this.isSetup = true;
    }
  }

  public static setUserId(id: string) {
    io.radar.sdk.Radar.setUserId(id);
  }

  public static setMetadata(meta: any) {
    if (isNullOrUndefined(meta)) {
      return;
    }
    if (isObject(meta)) {
      const object = new org.json.JSONObject();
      const keys = Object.keys(meta);
      for (let key of keys) {
        object.put(key, meta[key]);
      }
      io.radar.sdk.Radar.setMetadata(object);
    }
  }

  public static setDescription(description: string) {
    io.radar.sdk.Radar.setDescription(description);
  }

  public static setPlacesProvider(provider: string) {
    if (provider === 'facebook') {
      io.radar.sdk.Radar.setPlacesProvider(io.radar.sdk.Radar.RadarPlacesProvider.FACEBOOK);
    } else {
      io.radar.sdk.Radar.setPlacesProvider(io.radar.sdk.Radar.RadarPlacesProvider.NONE);
    }
  }

  public static getPermissionsStatus(): Promise<RadarIOPermissionStatus> {
    return new Promise((resolve, reject) => {
      const granted = androidx.core.app.ActivityCompat.checkSelfPermission(Utils.ad.getApplicationContext(), android.Manifest.permission.ACCESS_FINE_LOCATION) === android.content.pm.PackageManager.PERMISSION_GRANTED;
      if (granted) {
        resolve(RadarIOPermissionStatus.GRANTED)
      } else {
        resolve(RadarIOPermissionStatus.DENIED);
      }
    });
  }

  public static requestPermissions(background: boolean) {
    return new Promise<void>((resolve, reject) => {
      const sdkVersion = android.os.Build.VERSION.SDK_INT;
      const requestCode = 1010;
      const ActivityCompat = androidx.core.app.ActivityCompat;
      const activity = Application.android.startActivity || Application.android.foregroundActivity;
      Application.android.on('activityRequestPermissions', function (args) {
        if (args.requestCode === requestCode) {
          const length = args.permissions.length;
          for (let i = 0; i < length; i++) {
            const permission = args.permissions[i];
            if (sdkVersion <= 28) {
              if (permission === android.Manifest.permission.ACCESS_FINE_LOCATION) {
                if (args.grantResults[i] === android.content.pm.PackageManager.PERMISSION_GRANTED) {
                  resolve();
                } else {
                  reject();
                }
              }
            } else {
              let granted = {
                0: false,
                1: false
              };

              if (permission === android.Manifest.permission.ACCESS_FINE_LOCATION) {
                granted['0'] = args.grantResults[i] === android.content.pm.PackageManager.PERMISSION_GRANTED;
              }

              if (permission === (android as any).Manifest.permission.ACCESS_BACKGROUND_LOCATION) {
                granted['1'] = args.grantResults[i] === android.content.pm.PackageManager.PERMISSION_GRANTED;
              }
              if (granted['0'] && granted['1']) {
                resolve();
              } else {
                reject();
              }
            }
          }
        }
      });
      if (sdkVersion <= 28) {
        ActivityCompat.requestPermissions(activity, [android.Manifest.permission.ACCESS_FINE_LOCATION], requestCode);
      } else {
        ActivityCompat.requestPermissions(activity, [android.Manifest.permission.ACCESS_FINE_LOCATION, (android as any).Manifest.permission.ACCESS_BACKGROUND_LOCATION], requestCode);
      }
    })
  }

  public static trackOnce(): Promise<RadarIOResult> {
    return new Promise((resolve, reject) => {
      io.radar.sdk.Radar.trackOnce(new io.radar.sdk.Radar.RadarCallback({
        onComplete(status: io.radar.sdk.Radar.RadarStatus, location: android.location.Location, events: any, user: io.radar.sdk.model.RadarUser) {
          if (status === io.radar.sdk.Radar.RadarStatus.SUCCESS) {
            const result: RadarIOResult = {
              status: RadarIO.getStatus(status),
              user: RadarIO.getUser(user),
              events: RadarIO.getEvents(events),
              location: RadarIO.getLocation(location)
            };
            resolve(result);
          } else {
            reject({
              status: RadarIO.getStatus(status)
            })
          }
        }
      }));
    });
  }

  public static stopTracking() {
    io.radar.sdk.Radar.stopTracking();
  }

  public static startTracking(options?: RadarIOTrackingOptions) {
    if (options) {
      const Radar = io.radar.sdk.Radar;
      const opts = new io.radar.sdk.RadarTrackingOptions.Builder();
      if (options.sync) {
        if (options.sync === 'all') {
          opts.sync(Radar.RadarTrackingSync.ALL);
        }

        if (options.sync === 'possibleStateChanges') {
          opts.sync(Radar.RadarTrackingSync.POSSIBLE_STATE_CHANGES);
        }
      }

      if (options.offline) {
        if (options.offline === 'replayOff') {
          opts.offline(Radar.RadarTrackingOffline.REPLAY_OFF);
        }

        if (options.offline === 'replayStopped') {
          opts.offline(Radar.RadarTrackingOffline.REPLAY_STOPPED);
        }
      }

      if (options.priority) {
        if (options.priority === 'efficiency') {
          opts.priority(Radar.RadarTrackingPriority.EFFICIENCY);
        }

        if (options.priority === 'responsiveness') {
          opts.priority(Radar.RadarTrackingPriority.RESPONSIVENESS);
        }
      }
      io.radar.sdk.Radar.startTracking(opts.build());
    } else {
      io.radar.sdk.Radar.startTracking();
    }
  }

  public static on(event: string, callback: (event) => void) {
    RadarIO.events.on(event, callback);
  }

  public static off(event: string, callback?: (event) => void) {
    RadarIO.events.off(event, callback);
  }

  static getStatus(status: any): string {
    switch (status) {
      case io.radar.sdk.Radar.RadarStatus.SUCCESS:
        return 'SUCCESS';
      case io.radar.sdk.Radar.RadarStatus.ERROR_NETWORK:
        return 'ERROR_NETWORK';
      case io.radar.sdk.Radar.RadarStatus.ERROR_PERMISSIONS:
        return 'ERROR_PERMISSIONS';
      case io.radar.sdk.Radar.RadarStatus.ERROR_PUBLISHABLE_KEY:
        return 'ERROR_PUBLISHABLE_KEY';
      case io.radar.sdk.Radar.RadarStatus.ERROR_RATE_LIMIT:
        return 'ERROR_RATE_LIMIT';
      case io.radar.sdk.Radar.RadarStatus.ERROR_SERVER:
        return 'ERROR_SERVER';
      case io.radar.sdk.Radar.RadarStatus.ERROR_UNAUTHORIZED:
        return 'ERROR_UNAUTHORIZED';
      case io.radar.sdk.Radar.RadarStatus.ERROR_LOCATION:
        return 'ERROR_LOCATION';
      default:
        return 'ERROR_UNKNOWN'
    }
  }

  static getType(type: any): RadarIOEventType {
    switch (type) {
      case io.radar.sdk.model.RadarEvent.RadarEventType.USER_ENTERED_GEOFENCE:
        return 'user.entered_geofence';
      case io.radar.sdk.model.RadarEvent.RadarEventType.USER_EXITED_GEOFENCE:
        return 'user.exited_geofence';
      case io.radar.sdk.model.RadarEvent.RadarEventType.USER_ENTERED_HOME:
        return 'user.entered_home';
      case io.radar.sdk.model.RadarEvent.RadarEventType.USER_EXITED_HOME:
        return 'user.exited_home';
      case io.radar.sdk.model.RadarEvent.RadarEventType.USER_ENTERED_OFFICE:
        return 'user.entered_office';
      case io.radar.sdk.model.RadarEvent.RadarEventType.USER_EXITED_OFFICE:
        return 'user.exited_office';
      case io.radar.sdk.model.RadarEvent.RadarEventType.USER_STARTED_TRAVELING:
        return 'user.started_traveling';
      case io.radar.sdk.model.RadarEvent.RadarEventType.USER_STOPPED_TRAVELING:
        return 'user.stopped_traveling';
      case io.radar.sdk.model.RadarEvent.RadarEventType.USER_ENTERED_PLACE:
        return 'user.entered_place';
      case io.radar.sdk.model.RadarEvent.RadarEventType.USER_EXITED_PLACE:
        return 'user.exited_place';
      case io.radar.sdk.model.RadarEvent.RadarEventType.USER_NEARBY_PLACE_CHAIN:
        return 'user.nearby_place_chain';
      case io.radar.sdk.model.RadarEvent.RadarEventType.USER_ENTERED_REGION_COUNTRY:
        return 'user.entered_region_country';
      case io.radar.sdk.model.RadarEvent.RadarEventType.USER_EXITED_REGION_COUNTRY:
        return 'user.exited_region_country';
      case io.radar.sdk.model.RadarEvent.RadarEventType.USER_ENTERED_REGION_STATE:
        return 'user.entered_region_state';
      case io.radar.sdk.model.RadarEvent.RadarEventType.USER_EXITED_REGION_STATE:
        return 'user.exited_region_state';
      case io.radar.sdk.model.RadarEvent.RadarEventType.USER_ENTERED_REGION_DMA:
        return 'user.entered_region_dma';
      case io.radar.sdk.model.RadarEvent.RadarEventType.USER_EXITED_REGION_DMA:
        return 'user.exited_region_dma';
      default:
        return null;
    }
  }

  static getConfidence(confidence: any): RadarIOEventConfidence {
    switch (confidence) {
      case io.radar.sdk.model.RadarEvent.RadarEventConfidence.HIGH:
        return RadarIOEventConfidence.high;
      case io.radar.sdk.model.RadarEvent.RadarEventConfidence.MEDIUM:
        return RadarIOEventConfidence.medium;
      case io.radar.sdk.model.RadarEvent.RadarEventConfidence.LOW:
        return RadarIOEventConfidence.low;
      default:
        return RadarIOEventConfidence.none;
    }
  }

  static getLocation(location: any): RadarIOLocation {
    if (location) {
      return {
        latitude: location.getLatitude(),
        longitude: location.getLongitude(),
        accuracy: location.getAccuracy()
      }
    }
    return undefined;
  }

  static getEvents(events: any): RadarIOEvent[] {
    if (events) {
      const count = events.length;
      const _events: RadarIOEvent[] = [];
      for (let a = 0; a < count; a++) {
        const _event = events[a];
        const event: RadarIOEvent = {
          _id: _event.getId(),
          type: RadarIO.getType(_event.getType()),
          live: _event.getLive(),
          confidence: RadarIO.getConfidence(_event.getConfidence())
        };
        const _alternativePlaces = _event.getAlternatePlaces();
        let alternativePlaces: RadarIOPlace[];
        if (_alternativePlaces) {
          alternativePlaces = [];
          const alternativePlacesCount = _alternativePlaces.length;
          for (let b = 0; b < alternativePlacesCount; b++) {
            const alternativePlace = _alternativePlaces[b];
            alternativePlaces.push({
              _id: alternativePlace.getId(),
              name: alternativePlace.getName(),
              categories: alternativePlace.getCategories() as any
            })
          }
          event.alternatePlaces = alternativePlaces;
        }

        const place = _event.getPlace();
        if (place) {
          event.place = {
            _id: place.getId(),
            name: place.getName(),
            categories: place.getCategories() as any
          }
        }

        const geofence = _event.getGeofence();
        if (geofence) {
          event.geofence = {
            _id: geofence.getId(),
            description: geofence.getDescription(),
            externalId: geofence.getExternalId(),
            tag: geofence.getTag()
          }
        }

        const region = _event.getRegion();
        if (region) {
          event.region = {
            _id: region.getId(),
            type: region.getType(),
            name: region.getName(),
            code: region.getCode()
          }
        }

      }
      return _events;
    }
    return undefined;
  }

  static getUser(user: any): RadarIOUser {
    if (user) {
      const _user: RadarIOUser = {
        _id: user.getId(),
        userId: user.getUserId(),
        description: user.getDescription(),
        deviceId: user.getDeviceId()
      };

      const country = user.getCountry();
      if (country) {
        _user.country = {
          _id: country.getId(),
          code: country.getCode(),
          name: country.getName(),
          type: country.getType()
        }
      }
      const dma = user.getDma();

      if (dma) {
        _user.dma = {
          _id: dma.getId(),
          code: dma.getCode(),
          name: dma.getName(),
          type: dma.getType()
        }
      }

      const state = user.getState();
      if (state) {
        _user.state = {
          _id: state.getId(),
          code: state.getCode(),
          name: state.getName(),
          type: state.getType()
        }
      }
      return _user;
    }
    return undefined;
  }

  public static updateLocation(location: RadarIOLocation): Promise<RadarIOResult> {
    return new Promise((resolve, reject) => {
      const nativeLocation = new android.location.Location('TNSRadarIO');
      nativeLocation.setLongitude(location.longitude);
      nativeLocation.setLatitude(location.longitude);
      nativeLocation.setAccuracy(location.accuracy);
      io.radar.sdk.Radar.updateLocation(nativeLocation, new io.radar.sdk.Radar.RadarCallback({
        onComplete(_status: io.radar.sdk.Radar.RadarStatus, location: android.location.Location, events: androidNative.Array<io.radar.sdk.model.RadarEvent>, user: io.radar.sdk.model.RadarUser): void {
          if (_status === io.radar.sdk.Radar.RadarStatus.SUCCESS) {
            const response: RadarIOResult = {
              status: RadarIO.getStatus(_status),
              location: RadarIO.getLocation(location),
              events: RadarIO.getEvents(events),
              user: RadarIO.getUser(user)
            };
            resolve(response);
          } else {
            reject({
              status: RadarIO.getStatus(_status)
            })
          }
        }
      }))
    });
  }

  public static acceptEvent(eventId: string, verifiedPlaceId?: string) {
    if (verifiedPlaceId) {
      io.radar.sdk.Radar.acceptEvent(eventId, verifiedPlaceId)
    } else {
      io.radar.sdk.Radar.acceptEvent(eventId)
    }
  }

  public static rejectEvent(eventId: string) {
    io.radar.sdk.Radar.rejectEvent(eventId);
  }
}

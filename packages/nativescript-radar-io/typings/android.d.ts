declare module io {
  export module radar {
    export module sdk {
      export class BuildConfig {
        public static class: java.lang.Class<io.radar.sdk.BuildConfig>;
        public static DEBUG: boolean;
        public static APPLICATION_ID: string;
        public static BUILD_TYPE: string;
        public static FLAVOR: string;
        public static VERSION_CODE: number;
        public static VERSION_NAME: string;
        public constructor();
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export class Radar {
        public static class: java.lang.Class<io.radar.sdk.Radar>;
        public static INSTANCE: io.radar.sdk.Radar;
        public getPublishableKey$sdk_release(): string;
        public static initialize(): void;
        public static setDescription(param0: string): void;
        public static acceptEvent(param0: string): void;
        public static getMetadata(): org.json.JSONObject;
        public static startTracking(): void;
        public static stopTracking(): void;
        public static startTracking(param0: io.radar.sdk.RadarTrackingOptions): void;
        public static isTracking(): boolean;
        public init$sdk_release(param0: globalAndroid.content.Context, param1: io.radar.sdk.internal.store.OptionsStore, param2: io.radar.sdk.internal.store.IdentityStore, param3: io.radar.sdk.state.StateManager, param4: io.radar.sdk.location.LocationManager, param5: io.radar.sdk.api.ApiClient): void;
        public static getPlacesProvider(): io.radar.sdk.Radar.RadarPlacesProvider;
        public static acceptEvent(param0: string, param1: string): void;
        public static trackOnce(param0: io.radar.sdk.Radar.RadarCallback): void;
        public setPublishableKey$sdk_release(param0: string): void;
        public retryFailedStop$sdk_release(param0: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
        public static getDescription(): string;
        public handleLocation$sdk_release(param0: globalAndroid.location.Location, param1: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
        public static setPlacesProvider(param0: io.radar.sdk.Radar.RadarPlacesProvider): void;
        public updateLocation(param0: globalAndroid.location.Location, param1: kotlin.jvm.functions.Function4<any,any,any,any,kotlin.Unit>): void;
        public static getUserId(): string;
        public track$sdk_release(param0: globalAndroid.location.Location, param1: io.radar.sdk.Radar.RadarCallback): void;
        public requestLocation$sdk_release(param0: boolean): void;
        public static updateLocation(param0: globalAndroid.location.Location, param1: io.radar.sdk.Radar.RadarCallback): void;
        public static setMetadata(param0: org.json.JSONObject): void;
        public trackOnce(param0: kotlin.jvm.functions.Function4<any,any,any,any,kotlin.Unit>): void;
        public static rejectEvent(param0: string): void;
        public static setUserId(param0: string): void;
        public static initialize(param0: string): void;
      }
      export module Radar {
        export class RadarCallback {
          public static class: java.lang.Class<io.radar.sdk.Radar.RadarCallback>;
          /**
           * Constructs a new instance of the io.radar.sdk.Radar$RadarCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            onComplete(param0: io.radar.sdk.Radar.RadarStatus, param1: globalAndroid.location.Location, param2: native.Array<io.radar.sdk.model.RadarEvent>, param3: io.radar.sdk.model.RadarUser): void;
          });
          public constructor();
          public onComplete(param0: io.radar.sdk.Radar.RadarStatus, param1: globalAndroid.location.Location, param2: native.Array<io.radar.sdk.model.RadarEvent>, param3: io.radar.sdk.model.RadarUser): void;
        }
        export module RadarCallback {
          export class DefaultImpls {
            public static class: java.lang.Class<io.radar.sdk.Radar.RadarCallback.DefaultImpls>;
          }
        }
        export class RadarPlacesProvider {
          public static class: java.lang.Class<io.radar.sdk.Radar.RadarPlacesProvider>;
          public static NONE: io.radar.sdk.Radar.RadarPlacesProvider;
          public static FACEBOOK: io.radar.sdk.Radar.RadarPlacesProvider;
          public static values(): native.Array<io.radar.sdk.Radar.RadarPlacesProvider>;
          public static valueOf(param0: string): io.radar.sdk.Radar.RadarPlacesProvider;
          public constructor(param0: string, param1: number);
        }
        export class RadarStatus {
          public static class: java.lang.Class<io.radar.sdk.Radar.RadarStatus>;
          public static SUCCESS: io.radar.sdk.Radar.RadarStatus;
          public static ERROR_PUBLISHABLE_KEY: io.radar.sdk.Radar.RadarStatus;
          public static ERROR_PERMISSIONS: io.radar.sdk.Radar.RadarStatus;
          public static ERROR_LOCATION: io.radar.sdk.Radar.RadarStatus;
          public static ERROR_NETWORK: io.radar.sdk.Radar.RadarStatus;
          public static ERROR_UNAUTHORIZED: io.radar.sdk.Radar.RadarStatus;
          public static ERROR_SERVER: io.radar.sdk.Radar.RadarStatus;
          public static ERROR_RATE_LIMIT: io.radar.sdk.Radar.RadarStatus;
          public static ERROR_UNKNOWN: io.radar.sdk.Radar.RadarStatus;
          public static UNKNOWN: io.radar.sdk.Radar.RadarStatus;
          public static valueOf(param0: string): io.radar.sdk.Radar.RadarStatus;
          public constructor(param0: string, param1: number);
          public static values(): native.Array<io.radar.sdk.Radar.RadarStatus>;
        }
        export class RadarTrackingOffline {
          public static class: java.lang.Class<io.radar.sdk.Radar.RadarTrackingOffline>;
          public static REPLAY_STOPPED: io.radar.sdk.Radar.RadarTrackingOffline;
          public static REPLAY_OFF: io.radar.sdk.Radar.RadarTrackingOffline;
          public static Companion: io.radar.sdk.Radar.RadarTrackingOffline.Companion;
          public static values(): native.Array<io.radar.sdk.Radar.RadarTrackingOffline>;
          public getMode$sdk_release(): number;
          public static valueOf(param0: string): io.radar.sdk.Radar.RadarTrackingOffline;
          public constructor(param0: number);
        }
        export module RadarTrackingOffline {
          export class Companion {
            public static class: java.lang.Class<io.radar.sdk.Radar.RadarTrackingOffline.Companion>;
            public fromInt(param0: number): io.radar.sdk.Radar.RadarTrackingOffline;
          }
        }
        export class RadarTrackingPriority {
          public static class: java.lang.Class<io.radar.sdk.Radar.RadarTrackingPriority>;
          public static RESPONSIVENESS: io.radar.sdk.Radar.RadarTrackingPriority;
          public static EFFICIENCY: io.radar.sdk.Radar.RadarTrackingPriority;
          public constructor(param0: string, param1: number);
          public static valueOf(param0: string): io.radar.sdk.Radar.RadarTrackingPriority;
          public static values(): native.Array<io.radar.sdk.Radar.RadarTrackingPriority>;
        }
        export class RadarTrackingSync {
          public static class: java.lang.Class<io.radar.sdk.Radar.RadarTrackingSync>;
          public static POSSIBLE_STATE_CHANGES: io.radar.sdk.Radar.RadarTrackingSync;
          public static ALL: io.radar.sdk.Radar.RadarTrackingSync;
          public static Companion: io.radar.sdk.Radar.RadarTrackingSync.Companion;
          public getMode$sdk_release(): number;
          public static valueOf(param0: string): io.radar.sdk.Radar.RadarTrackingSync;
          public static values(): native.Array<io.radar.sdk.Radar.RadarTrackingSync>;
          public constructor(param0: number);
        }
        export module RadarTrackingSync {
          export class Companion {
            public static class: java.lang.Class<io.radar.sdk.Radar.RadarTrackingSync.Companion>;
            public fromInt(param0: number): io.radar.sdk.Radar.RadarTrackingSync;
          }
        }
        export class UserOptions {
          public static class: java.lang.Class<io.radar.sdk.Radar.UserOptions>;
          public getMetadata(): org.json.JSONObject;
          public setDescription(param0: string): void;
          public setMetadata(param0: org.json.JSONObject): void;
          public constructor();
          public getUserId(): string;
          public setUserId(param0: string): void;
          public getDescription(): string;
        }
        export class WhenMappings {
          public static class: java.lang.Class<io.radar.sdk.Radar.WhenMappings>;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export abstract class RadarReceiver {
        public static class: java.lang.Class<io.radar.sdk.RadarReceiver>;
        public static ACTION_RECEIVED: string;
        public static EXTRA_PAYLOAD: string;
        public static EXTRA_LOCATION: string;
        public static EXTRA_STOPPED: string;
        public static EXTRA_ERROR_STATUS: string;
        public static Companion: io.radar.sdk.RadarReceiver.Companion;
        public onEventsReceived(param0: globalAndroid.content.Context, param1: native.Array<io.radar.sdk.model.RadarEvent>, param2: io.radar.sdk.model.RadarUser): void;
        public onClientLocationUpdated(param0: globalAndroid.content.Context, param1: globalAndroid.location.Location, param2: boolean): void;
        public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
        public onError(param0: globalAndroid.content.Context, param1: io.radar.sdk.Radar.RadarStatus): void;
        public onLocationUpdated(param0: globalAndroid.content.Context, param1: globalAndroid.location.Location, param2: io.radar.sdk.model.RadarUser): void;
        public constructor();
      }
      export module RadarReceiver {
        export class Companion {
          public static class: java.lang.Class<io.radar.sdk.RadarReceiver.Companion>;
          public createLocationIntent$sdk_release(param0: globalAndroid.location.Location, param1: boolean): globalAndroid.content.Intent;
          public createErrorIntent$sdk_release(param0: io.radar.sdk.Radar.RadarStatus): globalAndroid.content.Intent;
          public createIntent$sdk_release(param0: org.json.JSONObject, param1: globalAndroid.location.Location): globalAndroid.content.Intent;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export class RadarTrackingOptions {
        public static class: java.lang.Class<io.radar.sdk.RadarTrackingOptions>;
        public static Companion: io.radar.sdk.RadarTrackingOptions.Companion;
        public getOffline(): io.radar.sdk.Radar.RadarTrackingOffline;
        public getSync(): io.radar.sdk.Radar.RadarTrackingSync;
        public getPriority(): io.radar.sdk.Radar.RadarTrackingPriority;
      }
      export module RadarTrackingOptions {
        export class Builder {
          public static class: java.lang.Class<io.radar.sdk.RadarTrackingOptions.Builder>;
          public priority(param0: io.radar.sdk.Radar.RadarTrackingPriority): io.radar.sdk.RadarTrackingOptions.Builder;
          public build(): io.radar.sdk.RadarTrackingOptions;
          public constructor();
          public offline(param0: io.radar.sdk.Radar.RadarTrackingOffline): io.radar.sdk.RadarTrackingOptions.Builder;
          public sync(param0: io.radar.sdk.Radar.RadarTrackingSync): io.radar.sdk.RadarTrackingOptions.Builder;
        }
        export class Companion {
          public static class: java.lang.Class<io.radar.sdk.RadarTrackingOptions.Companion>;
          public getDEFAULT(): io.radar.sdk.RadarTrackingOptions;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export class Radar_MembersInjector extends io.radar.shadow.dagger.MembersInjector<io.radar.sdk.Radar> {
        public static class: java.lang.Class<io.radar.sdk.Radar_MembersInjector>;
        public constructor(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>, param1: io.radar.shadow.javax.inject.Provider<io.radar.sdk.internal.store.OptionsStore>, param2: io.radar.shadow.javax.inject.Provider<io.radar.sdk.internal.store.IdentityStore>, param3: io.radar.shadow.javax.inject.Provider<io.radar.sdk.state.StateManager>, param4: io.radar.shadow.javax.inject.Provider<io.radar.sdk.location.LocationManager>, param5: io.radar.shadow.javax.inject.Provider<io.radar.sdk.api.ApiClient>);
        public injectMembers(param0: io.radar.sdk.Radar): void;
        public injectMembers(param0: any): void;
        public static create(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>, param1: io.radar.shadow.javax.inject.Provider<io.radar.sdk.internal.store.OptionsStore>, param2: io.radar.shadow.javax.inject.Provider<io.radar.sdk.internal.store.IdentityStore>, param3: io.radar.shadow.javax.inject.Provider<io.radar.sdk.state.StateManager>, param4: io.radar.shadow.javax.inject.Provider<io.radar.sdk.location.LocationManager>, param5: io.radar.shadow.javax.inject.Provider<io.radar.sdk.api.ApiClient>): io.radar.shadow.dagger.MembersInjector<io.radar.sdk.Radar>;
        public static injectInit$sdk_release(param0: io.radar.sdk.Radar, param1: globalAndroid.content.Context, param2: io.radar.sdk.internal.store.OptionsStore, param3: io.radar.sdk.internal.store.IdentityStore, param4: io.radar.sdk.state.StateManager, param5: io.radar.sdk.location.LocationManager, param6: io.radar.sdk.api.ApiClient): void;
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module api {
        export class ApiClient {
          public static class: java.lang.Class<io.radar.sdk.api.ApiClient>;
          public verifyEvent$sdk_release(param0: string, param1: io.radar.sdk.model.RadarEvent.RadarEventVerification, param2: string): void;
          public retryFailedStop$sdk_release(param0: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
          public deliverResult$sdk_release(param0: io.radar.sdk.Radar.RadarStatus, param1: globalAndroid.location.Location, param2: native.Array<io.radar.sdk.model.RadarEvent>, param3: io.radar.sdk.model.RadarUser): void;
          public setSendNextState$sdk_release(param0: boolean): void;
          public getSendNextState$sdk_release(): boolean;
          public addCallback$sdk_release(param0: io.radar.sdk.Radar.RadarCallback): void;
          public broadcastError$sdk_release(param0: io.radar.sdk.Radar.RadarStatus): void;
          public constructor(param0: globalAndroid.content.Context, param1: io.radar.sdk.internal.store.IdentityStore, param2: io.radar.sdk.internal.store.OptionsStore, param3: io.radar.sdk.api.ApiStore, param4: io.radar.sdk.api.ApiService);
          public handleState$sdk_release(param0: io.radar.sdk.internal.RadarState, param1: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
          public broadcastSuccess$sdk_release(param0: org.json.JSONObject, param1: globalAndroid.location.Location): void;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module api {
        export class ApiClient_Factory extends io.radar.shadow.dagger.internal.Factory<io.radar.sdk.api.ApiClient> {
          public static class: java.lang.Class<io.radar.sdk.api.ApiClient_Factory>;
          public static create(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>, param1: io.radar.shadow.javax.inject.Provider<io.radar.sdk.internal.store.IdentityStore>, param2: io.radar.shadow.javax.inject.Provider<io.radar.sdk.internal.store.OptionsStore>, param3: io.radar.shadow.javax.inject.Provider<io.radar.sdk.api.ApiStore>, param4: io.radar.shadow.javax.inject.Provider<io.radar.sdk.api.ApiService>): io.radar.sdk.api.ApiClient_Factory;
          public get(): any;
          public get(): io.radar.sdk.api.ApiClient;
          public static newApiClient(param0: globalAndroid.content.Context, param1: io.radar.sdk.internal.store.IdentityStore, param2: io.radar.sdk.internal.store.OptionsStore, param3: io.radar.sdk.api.ApiStore, param4: io.radar.sdk.api.ApiService): io.radar.sdk.api.ApiClient;
          public constructor(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>, param1: io.radar.shadow.javax.inject.Provider<io.radar.sdk.internal.store.IdentityStore>, param2: io.radar.shadow.javax.inject.Provider<io.radar.sdk.internal.store.OptionsStore>, param3: io.radar.shadow.javax.inject.Provider<io.radar.sdk.api.ApiStore>, param4: io.radar.shadow.javax.inject.Provider<io.radar.sdk.api.ApiService>);
          public static provideInstance(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>, param1: io.radar.shadow.javax.inject.Provider<io.radar.sdk.internal.store.IdentityStore>, param2: io.radar.shadow.javax.inject.Provider<io.radar.sdk.internal.store.OptionsStore>, param3: io.radar.shadow.javax.inject.Provider<io.radar.sdk.api.ApiStore>, param4: io.radar.shadow.javax.inject.Provider<io.radar.sdk.api.ApiService>): io.radar.sdk.api.ApiClient;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module api {
        export class ApiService {
          public static class: java.lang.Class<io.radar.sdk.api.ApiService>;
          public fetchPlaces(param0: globalAndroid.location.Location, param1: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
          public verifyEvent(param0: string, param1: string, param2: io.radar.sdk.model.RadarEvent.RadarEventVerification, param3: string): void;
          public userUpsert(param0: string, param1: globalAndroid.location.Location, param2: boolean, param3: boolean, param4: boolean, param5: string, param6: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
          public constructor(param0: globalAndroid.content.Context, param1: io.radar.sdk.internal.store.IdentityStore, param2: io.radar.sdk.internal.store.OptionsStore, param3: io.radar.sdk.api.ApiStore, param4: io.radar.sdk.config.ConfigStore, param5: io.radar.sdk.util.IntegrationHelper, param6: io.radar.sdk.util.DeviceHelper);
        }
        export module ApiService {
          export class FacebookPlacesTask extends globalAndroid.os.AsyncTask<globalAndroid.location.Location,java.lang.Void,string> {
            public static class: java.lang.Class<io.radar.sdk.api.ApiService.FacebookPlacesTask>;
            public getPlaces(param0: globalAndroid.location.Location): java.net.HttpURLConnection;
            public onPostExecute(param0: string): void;
            public getFbAccessToken(): string;
            public constructor(param0: string, param1: kotlin.jvm.functions.Function1<any,kotlin.Unit>);
            public handleFacebookResponse(param0: java.net.HttpURLConnection): string;
            public getCallback(): kotlin.jvm.functions.Function1<string,kotlin.Unit>;
            public doInBackground(param0: native.Array<globalAndroid.location.Location>): string;
          }
          export class PutUserTask extends globalAndroid.os.AsyncTask<java.util.Map<string,any>,java.lang.Void,io.radar.sdk.api.RadarResponse> {
            public static class: java.lang.Class<io.radar.sdk.api.ApiService.PutUserTask>;
            public doInBackground(param0: native.Array<java.util.Map<string,any>>): io.radar.sdk.api.RadarResponse;
            public onPostExecute(param0: io.radar.sdk.api.RadarResponse): void;
            public handleResponse(param0: globalAndroid.location.Location, param1: java.net.HttpURLConnection): io.radar.sdk.api.RadarResponse;
            public constructor(param0: string, param1: globalAndroid.location.Location, param2: kotlin.jvm.functions.Function1<any,kotlin.Unit>);
            public putUser(param0: java.util.Map<string,any>): java.net.HttpURLConnection;
          }
          export class VerifyEventTask extends globalAndroid.os.AsyncTask<java.util.Map<string,any>,java.lang.Void,kotlin.Unit> {
            public static class: java.lang.Class<io.radar.sdk.api.ApiService.VerifyEventTask>;
            public getEventId(): string;
            public getPublishableKey(): string;
            public doInBackground(param0: native.Array<java.util.Map<string,any>>): void;
            public constructor(param0: string, param1: string);
            public putVerification(param0: java.util.Map<string,any>): void;
          }
          export class WhenMappings {
            public static class: java.lang.Class<io.radar.sdk.api.ApiService.WhenMappings>;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module api {
        export class ApiService_Factory extends io.radar.shadow.dagger.internal.Factory<io.radar.sdk.api.ApiService> {
          public static class: java.lang.Class<io.radar.sdk.api.ApiService_Factory>;
          public constructor(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>, param1: io.radar.shadow.javax.inject.Provider<io.radar.sdk.internal.store.IdentityStore>, param2: io.radar.shadow.javax.inject.Provider<io.radar.sdk.internal.store.OptionsStore>, param3: io.radar.shadow.javax.inject.Provider<io.radar.sdk.api.ApiStore>, param4: io.radar.shadow.javax.inject.Provider<io.radar.sdk.config.ConfigStore>, param5: io.radar.shadow.javax.inject.Provider<io.radar.sdk.util.IntegrationHelper>, param6: io.radar.shadow.javax.inject.Provider<io.radar.sdk.util.DeviceHelper>);
          public get(): any;
          public get(): io.radar.sdk.api.ApiService;
          public static provideInstance(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>, param1: io.radar.shadow.javax.inject.Provider<io.radar.sdk.internal.store.IdentityStore>, param2: io.radar.shadow.javax.inject.Provider<io.radar.sdk.internal.store.OptionsStore>, param3: io.radar.shadow.javax.inject.Provider<io.radar.sdk.api.ApiStore>, param4: io.radar.shadow.javax.inject.Provider<io.radar.sdk.config.ConfigStore>, param5: io.radar.shadow.javax.inject.Provider<io.radar.sdk.util.IntegrationHelper>, param6: io.radar.shadow.javax.inject.Provider<io.radar.sdk.util.DeviceHelper>): io.radar.sdk.api.ApiService;
          public static newApiService(param0: globalAndroid.content.Context, param1: io.radar.sdk.internal.store.IdentityStore, param2: io.radar.sdk.internal.store.OptionsStore, param3: io.radar.sdk.api.ApiStore, param4: io.radar.sdk.config.ConfigStore, param5: io.radar.sdk.util.IntegrationHelper, param6: io.radar.sdk.util.DeviceHelper): io.radar.sdk.api.ApiService;
          public static create(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>, param1: io.radar.shadow.javax.inject.Provider<io.radar.sdk.internal.store.IdentityStore>, param2: io.radar.shadow.javax.inject.Provider<io.radar.sdk.internal.store.OptionsStore>, param3: io.radar.shadow.javax.inject.Provider<io.radar.sdk.api.ApiStore>, param4: io.radar.shadow.javax.inject.Provider<io.radar.sdk.config.ConfigStore>, param5: io.radar.shadow.javax.inject.Provider<io.radar.sdk.util.IntegrationHelper>, param6: io.radar.shadow.javax.inject.Provider<io.radar.sdk.util.DeviceHelper>): io.radar.sdk.api.ApiService_Factory;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module api {
        export class ApiStore extends io.radar.sdk.internal.store.BaseStore {
          public static class: java.lang.Class<io.radar.sdk.api.ApiStore>;
          public setAtPlace$sdk_release(param0: boolean): void;
          public getKEY_FACEBOOK_HOST$sdk_release(): string;
          public setLastFailedStop$sdk_release(param0: globalAndroid.location.Location): void;
          public getKEY_PLACES_LIMIT_TIME$sdk_release(): string;
          public setPlacesLimitAt$sdk_release(param0: java.util.Date): void;
          public getKEY_AT_PLACE$sdk_release(): string;
          public getDEFAULT_FACEBOOK_HOST$sdk_release(): string;
          public getAtPlace$sdk_release(): boolean;
          public getKEY_RADAR_HOST$sdk_release(): string;
          public getKEY_LAST_FAILED_STOP$sdk_release(): string;
          public getAdId$sdk_release(): string;
          public setCanExit$sdk_release(param0: boolean): void;
          public getDEFAULT_RADAR_HOST$sdk_release(): string;
          public loadAdId$sdk_release(): void;
          public getPlacesLimitAt$sdk_release(): java.util.Date;
          public getLastSentAt$sdk_release(): java.util.Date;
          public getKEY_LAST_SENT_AT$sdk_release(): string;
          public setLastSentAt$sdk_release(param0: java.util.Date): void;
          public getKEY_CAN_EXIT$sdk_release(): string;
          public constructor(param0: globalAndroid.content.Context);
          public getLastFailedStop$sdk_release(): globalAndroid.location.Location;
          public getKEY_AD_ID$sdk_release(): string;
          public getRadarHost$sdk_release(): string;
          public getCanExit$sdk_release(): boolean;
          public getFacebookHost$sdk_release(): string;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module api {
        export class ApiStore_Factory extends io.radar.shadow.dagger.internal.Factory<io.radar.sdk.api.ApiStore> {
          public static class: java.lang.Class<io.radar.sdk.api.ApiStore_Factory>;
          public get(): any;
          public static newApiStore(param0: globalAndroid.content.Context): io.radar.sdk.api.ApiStore;
          public static provideInstance(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>): io.radar.sdk.api.ApiStore;
          public static create(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>): io.radar.sdk.api.ApiStore_Factory;
          public get(): io.radar.sdk.api.ApiStore;
          public constructor(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>);
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module api {
        export class Error extends io.radar.sdk.api.RadarResponse {
          public static class: java.lang.Class<io.radar.sdk.api.Error>;
          public constructor(param0: io.radar.sdk.Radar.RadarStatus);
          public equals(param0: any): boolean;
          public copy(param0: io.radar.sdk.Radar.RadarStatus): io.radar.sdk.api.Error;
          public toString(): string;
          public getStatus(): io.radar.sdk.Radar.RadarStatus;
          public component1(): io.radar.sdk.Radar.RadarStatus;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module api {
        export class LocationWorker {
          public static class: java.lang.Class<io.radar.sdk.api.LocationWorker>;
          public static Companion: io.radar.sdk.api.LocationWorker.Companion;
          public doWork(): androidx.work.ListenableWorker.Result;
          public constructor(param0: globalAndroid.content.Context, param1: androidx.work.WorkerParameters);
        }
        export module LocationWorker {
          export class Companion {
            public static class: java.lang.Class<io.radar.sdk.api.LocationWorker.Companion>;
            public scheduleWork$sdk_release(param0: globalAndroid.location.Location): void;
            public cancelWork$sdk_release(): void;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module api {
        export abstract class RadarResponse {
          public static class: java.lang.Class<io.radar.sdk.api.RadarResponse>;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module api {
        export class ReplayWorker {
          public static class: java.lang.Class<io.radar.sdk.api.ReplayWorker>;
          public static Companion: io.radar.sdk.api.ReplayWorker.Companion;
          public doWork(): androidx.work.ListenableWorker.Result;
          public constructor(param0: globalAndroid.content.Context, param1: androidx.work.WorkerParameters);
        }
        export module ReplayWorker {
          export class Companion {
            public static class: java.lang.Class<io.radar.sdk.api.ReplayWorker.Companion>;
            public cancelWork$sdk_release(): void;
            public scheduleWork$sdk_release(): void;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module api {
        export class Success extends io.radar.sdk.api.RadarResponse {
          public static class: java.lang.Class<io.radar.sdk.api.Success>;
          public getPayload(): org.json.JSONObject;
          public getUser(): io.radar.sdk.model.RadarUser;
          public constructor(param0: org.json.JSONObject, param1: globalAndroid.location.Location, param2: native.Array<io.radar.sdk.model.RadarEvent>, param3: io.radar.sdk.model.RadarUser);
          public component4(): io.radar.sdk.model.RadarUser;
          public equals(param0: any): boolean;
          public getEvents(): native.Array<io.radar.sdk.model.RadarEvent>;
          public toString(): string;
          public component2(): globalAndroid.location.Location;
          public component3(): native.Array<io.radar.sdk.model.RadarEvent>;
          public copy(param0: org.json.JSONObject, param1: globalAndroid.location.Location, param2: native.Array<io.radar.sdk.model.RadarEvent>, param3: io.radar.sdk.model.RadarUser): io.radar.sdk.api.Success;
          public component1(): org.json.JSONObject;
          public hashCode(): number;
          public getLocation(): globalAndroid.location.Location;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module config {
        export class ConfigStore extends io.radar.sdk.internal.store.BaseStore {
          public static class: java.lang.Class<io.radar.sdk.config.ConfigStore>;
          public static Companion: io.radar.sdk.config.ConfigStore.Companion;
          public constructor(param0: globalAndroid.content.Context);
          public getFacebookApiVersion$sdk_release(): string;
          public getFacebookPlacesFields$sdk_release(): string;
          public saveConfigJson$sdk_release(param0: org.json.JSONObject): void;
        }
        export module ConfigStore {
          export class Companion {
            public static class: java.lang.Class<io.radar.sdk.config.ConfigStore.Companion>;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module config {
        export class ConfigStore_Factory extends io.radar.shadow.dagger.internal.Factory<io.radar.sdk.config.ConfigStore> {
          public static class: java.lang.Class<io.radar.sdk.config.ConfigStore_Factory>;
          public static provideInstance(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>): io.radar.sdk.config.ConfigStore;
          public static create(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>): io.radar.sdk.config.ConfigStore_Factory;
          public get(): any;
          public constructor(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>);
          public static newConfigStore(param0: globalAndroid.content.Context): io.radar.sdk.config.ConfigStore;
          public get(): io.radar.sdk.config.ConfigStore;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module di {
        export class CoreModule {
          public static class: java.lang.Class<io.radar.sdk.di.CoreModule>;
          public context(): globalAndroid.content.Context;
          public constructor(param0: globalAndroid.content.Context);
          public deviceHelper(): io.radar.sdk.util.DeviceHelper;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module di {
        export class CoreModule_ContextFactory extends io.radar.shadow.dagger.internal.Factory<globalAndroid.content.Context> {
          public static class: java.lang.Class<io.radar.sdk.di.CoreModule_ContextFactory>;
          public static provideInstance(param0: io.radar.sdk.di.CoreModule): globalAndroid.content.Context;
          public get(): any;
          public static create(param0: io.radar.sdk.di.CoreModule): io.radar.sdk.di.CoreModule_ContextFactory;
          public get(): globalAndroid.content.Context;
          public constructor(param0: io.radar.sdk.di.CoreModule);
          public static proxyContext(param0: io.radar.sdk.di.CoreModule): globalAndroid.content.Context;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module di {
        export class CoreModule_DeviceHelperFactory extends io.radar.shadow.dagger.internal.Factory<io.radar.sdk.util.DeviceHelper> {
          public static class: java.lang.Class<io.radar.sdk.di.CoreModule_DeviceHelperFactory>;
          public get(): any;
          public static create(param0: io.radar.sdk.di.CoreModule): io.radar.sdk.di.CoreModule_DeviceHelperFactory;
          public get(): io.radar.sdk.util.DeviceHelper;
          public static proxyDeviceHelper(param0: io.radar.sdk.di.CoreModule): io.radar.sdk.util.DeviceHelper;
          public constructor(param0: io.radar.sdk.di.CoreModule);
          public static provideInstance(param0: io.radar.sdk.di.CoreModule): io.radar.sdk.util.DeviceHelper;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module di {
        export class DaggerRadarComponent extends io.radar.sdk.di.RadarComponent {
          public static class: java.lang.Class<io.radar.sdk.di.DaggerRadarComponent>;
          public inject(param0: io.radar.sdk.Radar): void;
          public static builder(): io.radar.sdk.di.DaggerRadarComponent.Builder;
        }
        export module DaggerRadarComponent {
          export class Builder {
            public static class: java.lang.Class<io.radar.sdk.di.DaggerRadarComponent.Builder>;
            /** @deprecated */
            public locationModule(param0: io.radar.sdk.di.LocationModule): io.radar.sdk.di.DaggerRadarComponent.Builder;
            public coreModule(param0: io.radar.sdk.di.CoreModule): io.radar.sdk.di.DaggerRadarComponent.Builder;
            public build(): io.radar.sdk.di.RadarComponent;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module di {
        export class LocationModule {
          public static class: java.lang.Class<io.radar.sdk.di.LocationModule>;
          public static INSTANCE: io.radar.sdk.di.LocationModule;
          public static locationClient(param0: globalAndroid.content.Context): com.google.android.gms.location.FusedLocationProviderClient;
          public static geofencingClient(param0: globalAndroid.content.Context): com.google.android.gms.location.GeofencingClient;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module di {
        export class LocationModule_GeofencingClientFactory extends io.radar.shadow.dagger.internal.Factory<com.google.android.gms.location.GeofencingClient> {
          public static class: java.lang.Class<io.radar.sdk.di.LocationModule_GeofencingClientFactory>;
          public get(): com.google.android.gms.location.GeofencingClient;
          public static provideInstance(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>): com.google.android.gms.location.GeofencingClient;
          public get(): any;
          public static proxyGeofencingClient(param0: globalAndroid.content.Context): com.google.android.gms.location.GeofencingClient;
          public constructor(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>);
          public static create(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>): io.radar.sdk.di.LocationModule_GeofencingClientFactory;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module di {
        export class LocationModule_LocationClientFactory extends io.radar.shadow.dagger.internal.Factory<com.google.android.gms.location.FusedLocationProviderClient> {
          public static class: java.lang.Class<io.radar.sdk.di.LocationModule_LocationClientFactory>;
          public get(): any;
          public static proxyLocationClient(param0: globalAndroid.content.Context): com.google.android.gms.location.FusedLocationProviderClient;
          public static create(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>): io.radar.sdk.di.LocationModule_LocationClientFactory;
          public get(): com.google.android.gms.location.FusedLocationProviderClient;
          public static provideInstance(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>): com.google.android.gms.location.FusedLocationProviderClient;
          public constructor(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>);
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module di {
        export class RadarComponent {
          public static class: java.lang.Class<io.radar.sdk.di.RadarComponent>;
          /**
           * Constructs a new instance of the io.radar.sdk.di.RadarComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            inject(param0: io.radar.sdk.Radar): void;
          });
          public constructor();
          public inject(param0: io.radar.sdk.Radar): void;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module internal {
        export class LocationReceiver {
          public static class: java.lang.Class<io.radar.sdk.internal.LocationReceiver>;
          public static ACTION_LOCATION: string;
          public static ACTION_GEOFENCE: string;
          public static Companion: io.radar.sdk.internal.LocationReceiver.Companion;
          public constructor();
          public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
        }
        export module LocationReceiver {
          export class Companion {
            public static class: java.lang.Class<io.radar.sdk.internal.LocationReceiver.Companion>;
            public getLocationPendingIntent$sdk_release(param0: globalAndroid.content.Context): globalAndroid.app.PendingIntent;
            public getGeofencePendingIntent$sdk_release(param0: globalAndroid.content.Context): globalAndroid.app.PendingIntent;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module internal {
        export class Moving extends io.radar.sdk.internal.RadarState {
          public static class: java.lang.Class<io.radar.sdk.internal.Moving>;
          public equals(param0: any): boolean;
          public toString(): string;
          public component1(): globalAndroid.location.Location;
          public constructor(param0: globalAndroid.location.Location);
          public copy(param0: globalAndroid.location.Location): io.radar.sdk.internal.Moving;
          public hashCode(): number;
          public getLocation(): globalAndroid.location.Location;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module internal {
        export class RadarInitProvider {
          public static class: java.lang.Class<io.radar.sdk.internal.RadarInitProvider>;
          public query(param0: globalAndroid.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): globalAndroid.database.Cursor;
          public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: native.Array<string>): number;
          public constructor();
          public onCreate(): boolean;
          public getType(param0: globalAndroid.net.Uri): string;
          public delete(param0: globalAndroid.net.Uri, param1: string, param2: native.Array<string>): number;
          public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
        }
        export module RadarInitProvider {
          export class RadarLifecycleCallbacks {
            public static class: java.lang.Class<io.radar.sdk.internal.RadarInitProvider.RadarLifecycleCallbacks>;
            public onActivityPaused(param0: globalAndroid.app.Activity): void;
            public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
            public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
            public constructor(param0: globalAndroid.content.Context);
            public onActivityStarted(param0: globalAndroid.app.Activity): void;
            public onActivityResumed(param0: globalAndroid.app.Activity): void;
            public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
            public onActivityStopped(param0: globalAndroid.app.Activity): void;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module internal {
        export class RadarLogger {
          public static class: java.lang.Class<io.radar.sdk.internal.RadarLogger>;
          public static INSTANCE: io.radar.sdk.internal.RadarLogger;
          public v(param0: string, param1: java.lang.Throwable): void;
          public e(param0: string, param1: java.lang.Throwable): void;
          public w(param0: string, param1: java.lang.Throwable): void;
          public d(param0: string, param1: java.lang.Throwable): void;
          public setDEBUG(param0: boolean): void;
          public i(param0: string, param1: java.lang.Throwable): void;
          public getDEBUG(): boolean;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module internal {
        export abstract class RadarState {
          public static class: java.lang.Class<io.radar.sdk.internal.RadarState>;
          public getLocation(): globalAndroid.location.Location;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module internal {
        export class Stopped extends io.radar.sdk.internal.RadarState {
          public static class: java.lang.Class<io.radar.sdk.internal.Stopped>;
          public equals(param0: any): boolean;
          public toString(): string;
          public constructor(param0: globalAndroid.location.Location, param1: boolean);
          public component1(): globalAndroid.location.Location;
          public hashCode(): number;
          public getLocation(): globalAndroid.location.Location;
          public component2(): boolean;
          public getJustStopped(): boolean;
          public copy(param0: globalAndroid.location.Location, param1: boolean): io.radar.sdk.internal.Stopped;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module internal {
        export module extensions {
          export class SharedPreferencesKt {
            public static class: java.lang.Class<io.radar.sdk.internal.extensions.SharedPreferencesKt>;
            public static putLocation(param0: globalAndroid.content.SharedPreferences.Editor, param1: string, param2: globalAndroid.location.Location): void;
            public static getLocation(param0: globalAndroid.content.SharedPreferences, param1: string): globalAndroid.location.Location;
            public static edit(param0: globalAndroid.content.SharedPreferences, param1: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module internal {
        export module store {
          export abstract class BaseStore {
            public static class: java.lang.Class<io.radar.sdk.internal.store.BaseStore>;
            public getSharedPreferences(): globalAndroid.content.SharedPreferences;
            public constructor(param0: globalAndroid.content.Context);
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module internal {
        export module store {
          export class IdentityStore extends io.radar.sdk.internal.store.BaseStore {
            public static class: java.lang.Class<io.radar.sdk.internal.store.IdentityStore>;
            public static KEY_PUBLISHABLE_KEY: string;
            public static KEY_USER_ID: string;
            public static KEY_USER_DESCRIPTION: string;
            public static KEY_USER_METADATA: string;
            public static KEY_RADAR_ID: string;
            public static Companion: io.radar.sdk.internal.store.IdentityStore.Companion;
            public setRadarId$sdk_release(param0: string): void;
            public getPublishableKey$sdk_release(): string;
            public constructor(param0: globalAndroid.content.Context);
            public setPublishableKey$sdk_release(param0: string): void;
            public setUserId$sdk_release(param0: string): void;
            public getUserId$sdk_release(): string;
            public setUserDescription$sdk_release(param0: string): void;
            public getUserMetadata$sdk_release(): string;
            public setUserMetadata$sdk_release(param0: string): void;
            public getRadarId$sdk_release(): string;
            public getUserDescription$sdk_release(): string;
          }
          export module IdentityStore {
            export class Companion {
              public static class: java.lang.Class<io.radar.sdk.internal.store.IdentityStore.Companion>;
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module internal {
        export module store {
          export class IdentityStore_Factory extends io.radar.shadow.dagger.internal.Factory<io.radar.sdk.internal.store.IdentityStore> {
            public static class: java.lang.Class<io.radar.sdk.internal.store.IdentityStore_Factory>;
            public get(): io.radar.sdk.internal.store.IdentityStore;
            public static provideInstance(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>): io.radar.sdk.internal.store.IdentityStore;
            public static create(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>): io.radar.sdk.internal.store.IdentityStore_Factory;
            public static newIdentityStore(param0: globalAndroid.content.Context): io.radar.sdk.internal.store.IdentityStore;
            public constructor(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>);
            public get(): any;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module internal {
        export module store {
          export class OptionsStore extends io.radar.sdk.internal.store.BaseStore {
            public static class: java.lang.Class<io.radar.sdk.internal.store.OptionsStore>;
            public static KEY_PLACES_PROVIDER: string;
            public static KEY_DEBUG_MODE: string;
            public static KEY_FOREGROUND_TRACKING: string;
            public static KEY_BACKGROUND_TRACKING: string;
            public static PROVIDER_FACEBOOK: string;
            public static PROVIDER_NONE: string;
            public static KEY_DWELL_DELAY: string;
            public static KEY_UPDATE_INTERVAL: string;
            public static KEY_SYNC_MODE: string;
            public static KEY_OFFLINE_MODE: string;
            public static Companion: io.radar.sdk.internal.store.OptionsStore.Companion;
            public constructor(param0: globalAndroid.content.Context);
            public setForegroundTracking$sdk_release(param0: boolean): void;
            public setDwellDelay$sdk_release(param0: number): void;
            public getForegroundTracking$sdk_release(): boolean;
            public setUpdateInterval$sdk_release(param0: number): void;
            public getPlacesProvider$sdk_release(): io.radar.sdk.Radar.RadarPlacesProvider;
            public setDebug$sdk_release(param0: boolean): void;
            public getDwellDelay$sdk_release(): number;
            public getUpdateInterval$sdk_release(): number;
            public getBackgroundTracking$sdk_release(): boolean;
            public getOfflineMode$sdk_release(): io.radar.sdk.Radar.RadarTrackingOffline;
            public getSyncMode$sdk_release(): io.radar.sdk.Radar.RadarTrackingSync;
            public getDebug$sdk_release(): boolean;
            public setOfflineMode$sdk_release(param0: io.radar.sdk.Radar.RadarTrackingOffline): void;
            public setPlacesProvider$sdk_release(param0: io.radar.sdk.Radar.RadarPlacesProvider): void;
            public setSyncMode$sdk_release(param0: io.radar.sdk.Radar.RadarTrackingSync): void;
            public setBackgroundTracking$sdk_release(param0: boolean): void;
          }
          export module OptionsStore {
            export class Companion {
              public static class: java.lang.Class<io.radar.sdk.internal.store.OptionsStore.Companion>;
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module internal {
        export module store {
          export class OptionsStore_Factory extends io.radar.shadow.dagger.internal.Factory<io.radar.sdk.internal.store.OptionsStore> {
            public static class: java.lang.Class<io.radar.sdk.internal.store.OptionsStore_Factory>;
            public static newOptionsStore(param0: globalAndroid.content.Context): io.radar.sdk.internal.store.OptionsStore;
            public static create(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>): io.radar.sdk.internal.store.OptionsStore_Factory;
            public static provideInstance(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>): io.radar.sdk.internal.store.OptionsStore;
            public get(): io.radar.sdk.internal.store.OptionsStore;
            public constructor(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>);
            public get(): any;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module location {
        export class LocationManager {
          public static class: java.lang.Class<io.radar.sdk.location.LocationManager>;
          public static GEOFENCE_EXIT_REQUEST_ID: string;
          public static GEOFENCE_DWELL_REQUEST_ID: string;
          public static RADIUS: number;
          public static INTERVAL_FAST: number;
          public static INTERVAL_MAX: number;
          public static INTERVAL_HEARTBEAT: number;
          public static INTERVAL_FAST_HEARTBEAT: number;
          public static INTERVAL_FAST_EFFICIENCY: number;
          public static INTERVAL_MIN_DEFAULT: number;
          public static DWELL_DELAY_MIN_DEFAULT: number;
          public static Companion: io.radar.sdk.location.LocationManager.Companion;
          public requestLocation$sdk_release(param0: boolean): void;
          public constructor(param0: globalAndroid.content.Context, param1: io.radar.sdk.internal.store.OptionsStore, param2: io.radar.sdk.location.LocationManagerStore, param3: com.google.android.gms.location.GeofencingClient, param4: com.google.android.gms.location.FusedLocationProviderClient);
          public getLocation$sdk_release(param0: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
          public handleState$sdk_release(param0: io.radar.sdk.internal.RadarState): void;
          public clearGeofencesForEfficiency$sdk_release(): void;
        }
        export module LocationManager {
          export class Companion {
            public static class: java.lang.Class<io.radar.sdk.location.LocationManager.Companion>;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module location {
        export class LocationManagerStore extends io.radar.sdk.internal.store.BaseStore {
          public static class: java.lang.Class<io.radar.sdk.location.LocationManagerStore>;
          public static KEY_STARTED: string;
          public static KEY_HEARTBEAT_STARTED: string;
          public static Companion: io.radar.sdk.location.LocationManagerStore.Companion;
          public constructor(param0: globalAndroid.content.Context);
          public getHasHeartbeatStarted$sdk_release(): boolean;
          public setHasHeartbeatStarted$sdk_release(param0: boolean): void;
          public getHasStarted$sdk_release(): boolean;
          public setHasStarted$sdk_release(param0: boolean): void;
        }
        export module LocationManagerStore {
          export class Companion {
            public static class: java.lang.Class<io.radar.sdk.location.LocationManagerStore.Companion>;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module location {
        export class LocationManagerStore_Factory extends io.radar.shadow.dagger.internal.Factory<io.radar.sdk.location.LocationManagerStore> {
          public static class: java.lang.Class<io.radar.sdk.location.LocationManagerStore_Factory>;
          public get(): any;
          public get(): io.radar.sdk.location.LocationManagerStore;
          public static newLocationManagerStore(param0: globalAndroid.content.Context): io.radar.sdk.location.LocationManagerStore;
          public constructor(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>);
          public static provideInstance(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>): io.radar.sdk.location.LocationManagerStore;
          public static create(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>): io.radar.sdk.location.LocationManagerStore_Factory;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module location {
        export class LocationManager_Factory extends io.radar.shadow.dagger.internal.Factory<io.radar.sdk.location.LocationManager> {
          public static class: java.lang.Class<io.radar.sdk.location.LocationManager_Factory>;
          public get(): io.radar.sdk.location.LocationManager;
          public static provideInstance(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>, param1: io.radar.shadow.javax.inject.Provider<io.radar.sdk.internal.store.OptionsStore>, param2: io.radar.shadow.javax.inject.Provider<io.radar.sdk.location.LocationManagerStore>, param3: io.radar.shadow.javax.inject.Provider<com.google.android.gms.location.GeofencingClient>, param4: io.radar.shadow.javax.inject.Provider<com.google.android.gms.location.FusedLocationProviderClient>): io.radar.sdk.location.LocationManager;
          public get(): any;
          public static create(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>, param1: io.radar.shadow.javax.inject.Provider<io.radar.sdk.internal.store.OptionsStore>, param2: io.radar.shadow.javax.inject.Provider<io.radar.sdk.location.LocationManagerStore>, param3: io.radar.shadow.javax.inject.Provider<com.google.android.gms.location.GeofencingClient>, param4: io.radar.shadow.javax.inject.Provider<com.google.android.gms.location.FusedLocationProviderClient>): io.radar.sdk.location.LocationManager_Factory;
          public static newLocationManager(param0: globalAndroid.content.Context, param1: io.radar.sdk.internal.store.OptionsStore, param2: io.radar.sdk.location.LocationManagerStore, param3: com.google.android.gms.location.GeofencingClient, param4: com.google.android.gms.location.FusedLocationProviderClient): io.radar.sdk.location.LocationManager;
          public constructor(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>, param1: io.radar.shadow.javax.inject.Provider<io.radar.sdk.internal.store.OptionsStore>, param2: io.radar.shadow.javax.inject.Provider<io.radar.sdk.location.LocationManagerStore>, param3: io.radar.shadow.javax.inject.Provider<com.google.android.gms.location.GeofencingClient>, param4: io.radar.shadow.javax.inject.Provider<com.google.android.gms.location.FusedLocationProviderClient>);
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module model {
        export class Coordinate {
          public static class: java.lang.Class<io.radar.sdk.model.Coordinate>;
          public getLatitude(): number;
          public getLongitude(): number;
          public constructor(param0: number, param1: number);
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module model {
        export class RadarChain {
          public static class: java.lang.Class<io.radar.sdk.model.RadarChain>;
          public static Companion: io.radar.sdk.model.RadarChain.Companion;
          public getMetadata(): org.json.JSONObject;
          public getSlug(): string;
          public getName(): string;
          public getExternalId(): string;
          public constructor(param0: string, param1: string, param2: string, param3: org.json.JSONObject);
        }
        export module RadarChain {
          export class Companion {
            public static class: java.lang.Class<io.radar.sdk.model.RadarChain.Companion>;
            public fromJson(param0: org.json.JSONObject): io.radar.sdk.model.RadarChain;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module model {
        export class RadarCircleGeometry extends io.radar.sdk.model.RadarGeofenceGeometry {
          public static class: java.lang.Class<io.radar.sdk.model.RadarCircleGeometry>;
          public getCenter(): io.radar.sdk.model.Coordinate;
          public constructor(param0: io.radar.sdk.model.Coordinate, param1: number);
          public getRadius(): number;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module model {
        export class RadarEvent {
          public static class: java.lang.Class<io.radar.sdk.model.RadarEvent>;
          public static Companion: io.radar.sdk.model.RadarEvent.Companion;
          public getId(): string;
          public getCreatedAt(): java.util.Date;
          public getPlace(): io.radar.sdk.model.RadarPlace;
          public getVerifiedPlace(): io.radar.sdk.model.RadarPlace;
          public getAlternatePlaces(): native.Array<io.radar.sdk.model.RadarPlace>;
          public getLive(): boolean;
          public getGeofence(): io.radar.sdk.model.RadarGeofence;
          public getActualCreatedAt(): java.util.Date;
          public getType(): io.radar.sdk.model.RadarEvent.RadarEventType;
          public getDuration(): number;
          public getRegion(): io.radar.sdk.model.RadarRegion;
          public constructor(param0: string, param1: java.util.Date, param2: java.util.Date, param3: boolean, param4: io.radar.sdk.model.RadarEvent.RadarEventType, param5: io.radar.sdk.model.RadarGeofence, param6: io.radar.sdk.model.RadarPlace, param7: io.radar.sdk.model.RadarRegion, param8: native.Array<io.radar.sdk.model.RadarPlace>, param9: io.radar.sdk.model.RadarPlace, param10: io.radar.sdk.model.RadarEvent.RadarEventVerification, param11: io.radar.sdk.model.RadarEvent.RadarEventConfidence, param12: number, param13: globalAndroid.location.Location);
          public getVerification(): io.radar.sdk.model.RadarEvent.RadarEventVerification;
          public getLocation(): globalAndroid.location.Location;
          public getConfidence(): io.radar.sdk.model.RadarEvent.RadarEventConfidence;
        }
        export module RadarEvent {
          export class Companion {
            public static class: java.lang.Class<io.radar.sdk.model.RadarEvent.Companion>;
            public eventsFromJSONArray$sdk_release(param0: org.json.JSONArray): native.Array<io.radar.sdk.model.RadarEvent>;
          }
          export class RadarEventConfidence {
            public static class: java.lang.Class<io.radar.sdk.model.RadarEvent.RadarEventConfidence>;
            public static NONE: io.radar.sdk.model.RadarEvent.RadarEventConfidence;
            public static LOW: io.radar.sdk.model.RadarEvent.RadarEventConfidence;
            public static MEDIUM: io.radar.sdk.model.RadarEvent.RadarEventConfidence;
            public static HIGH: io.radar.sdk.model.RadarEvent.RadarEventConfidence;
            public constructor(param0: string, param1: number);
            public static values(): native.Array<io.radar.sdk.model.RadarEvent.RadarEventConfidence>;
            public static valueOf(param0: string): io.radar.sdk.model.RadarEvent.RadarEventConfidence;
          }
          export class RadarEventType {
            public static class: java.lang.Class<io.radar.sdk.model.RadarEvent.RadarEventType>;
            public static UNKNOWN: io.radar.sdk.model.RadarEvent.RadarEventType;
            public static USER_ENTERED_GEOFENCE: io.radar.sdk.model.RadarEvent.RadarEventType;
            public static USER_EXITED_GEOFENCE: io.radar.sdk.model.RadarEvent.RadarEventType;
            public static USER_ENTERED_HOME: io.radar.sdk.model.RadarEvent.RadarEventType;
            public static USER_EXITED_HOME: io.radar.sdk.model.RadarEvent.RadarEventType;
            public static USER_ENTERED_OFFICE: io.radar.sdk.model.RadarEvent.RadarEventType;
            public static USER_EXITED_OFFICE: io.radar.sdk.model.RadarEvent.RadarEventType;
            public static USER_STARTED_TRAVELING: io.radar.sdk.model.RadarEvent.RadarEventType;
            public static USER_STOPPED_TRAVELING: io.radar.sdk.model.RadarEvent.RadarEventType;
            public static USER_ENTERED_PLACE: io.radar.sdk.model.RadarEvent.RadarEventType;
            public static USER_EXITED_PLACE: io.radar.sdk.model.RadarEvent.RadarEventType;
            public static USER_NEARBY_PLACE_CHAIN: io.radar.sdk.model.RadarEvent.RadarEventType;
            public static USER_ENTERED_REGION_COUNTRY: io.radar.sdk.model.RadarEvent.RadarEventType;
            public static USER_EXITED_REGION_COUNTRY: io.radar.sdk.model.RadarEvent.RadarEventType;
            public static USER_ENTERED_REGION_STATE: io.radar.sdk.model.RadarEvent.RadarEventType;
            public static USER_EXITED_REGION_STATE: io.radar.sdk.model.RadarEvent.RadarEventType;
            public static USER_ENTERED_REGION_DMA: io.radar.sdk.model.RadarEvent.RadarEventType;
            public static USER_EXITED_REGION_DMA: io.radar.sdk.model.RadarEvent.RadarEventType;
            public static valueOf(param0: string): io.radar.sdk.model.RadarEvent.RadarEventType;
            public static values(): native.Array<io.radar.sdk.model.RadarEvent.RadarEventType>;
            public constructor(param0: string, param1: number);
          }
          export class RadarEventVerification {
            public static class: java.lang.Class<io.radar.sdk.model.RadarEvent.RadarEventVerification>;
            public static ACCEPT: io.radar.sdk.model.RadarEvent.RadarEventVerification;
            public static UNVERIFY: io.radar.sdk.model.RadarEvent.RadarEventVerification;
            public static REJECT: io.radar.sdk.model.RadarEvent.RadarEventVerification;
            public constructor(param0: string, param1: number);
            public static valueOf(param0: string): io.radar.sdk.model.RadarEvent.RadarEventVerification;
            public static values(): native.Array<io.radar.sdk.model.RadarEvent.RadarEventVerification>;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module model {
        export class RadarGeofence {
          public static class: java.lang.Class<io.radar.sdk.model.RadarGeofence>;
          public static FIELD_ID: string;
          public static FIELD_DESCRIPTION: string;
          public static FIELD_TAG: string;
          public static FIELD_EXTERNAL_ID: string;
          public static FIELD_METADATA: string;
          public static FIELD_TYPE: string;
          public static FIELD_GEOMETRY_RADIUS: string;
          public static FIELD_GEOMETRY_CENTER: string;
          public static FIELD_GEOMETRY_POLYGON: string;
          public static FIELD_COORDINATES: string;
          public static TYPE_CIRCLE: string;
          public static TYPE_POLYGON: string;
          public static Companion: io.radar.sdk.model.RadarGeofence.Companion;
          public getMetadata(): org.json.JSONObject;
          public constructor(param0: string, param1: string, param2: string, param3: string, param4: org.json.JSONObject, param5: io.radar.sdk.model.RadarGeofenceGeometry);
          public getGeometry(): io.radar.sdk.model.RadarGeofenceGeometry;
          public getId(): string;
          public getExternalId(): string;
          public static fromJson(param0: org.json.JSONObject): io.radar.sdk.model.RadarGeofence;
          public getDescription(): string;
          public getTag(): string;
        }
        export module RadarGeofence {
          export class Companion {
            public static class: java.lang.Class<io.radar.sdk.model.RadarGeofence.Companion>;
            public fromJson(param0: org.json.JSONObject): io.radar.sdk.model.RadarGeofence;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module model {
        export abstract class RadarGeofenceGeometry {
          public static class: java.lang.Class<io.radar.sdk.model.RadarGeofenceGeometry>;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module model {
        export class RadarPlace {
          public static class: java.lang.Class<io.radar.sdk.model.RadarPlace>;
          public static FIELD_ID: string;
          public static FIELD_FACEBOOK_ID: string;
          public static FIELD_FACEBOOK_PLACE_ID: string;
          public static FIELD_NAME: string;
          public static FIELD_CATEGORIES: string;
          public static FIELD_CHAIN: string;
          public static FIELD_LOCATION: string;
          public static FIELD_COORDINATES: string;
          public static FIELD_GROUP: string;
          public static FIELD_METADATA: string;
          public static Companion: io.radar.sdk.model.RadarPlace.Companion;
          public getMetadata(): org.json.JSONObject;
          public getId(): string;
          public getName(): string;
          public getGroup(): string;
          public getChain(): io.radar.sdk.model.RadarChain;
          public constructor(param0: string, param1: string, param2: string, param3: string, param4: native.Array<string>, param5: io.radar.sdk.model.RadarChain, param6: io.radar.sdk.model.Coordinate, param7: string, param8: org.json.JSONObject);
          public isChain(param0: string): boolean;
          public hasCategory(param0: string): boolean;
          public getFacebookPlaceId(): string;
          public getCategories(): native.Array<string>;
          public getFacebookId(): string;
          public getLocation(): io.radar.sdk.model.Coordinate;
        }
        export module RadarPlace {
          export class Companion {
            public static class: java.lang.Class<io.radar.sdk.model.RadarPlace.Companion>;
            public fromJson(param0: org.json.JSONObject): io.radar.sdk.model.RadarPlace;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module model {
        export class RadarPolygonGeometry extends io.radar.sdk.model.RadarGeofenceGeometry {
          public static class: java.lang.Class<io.radar.sdk.model.RadarPolygonGeometry>;
          public constructor(param0: native.Array<io.radar.sdk.model.Coordinate>);
          public getCoordinates(): native.Array<io.radar.sdk.model.Coordinate>;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module model {
        export class RadarRegion {
          public static class: java.lang.Class<io.radar.sdk.model.RadarRegion>;
          public static Companion: io.radar.sdk.model.RadarRegion.Companion;
          public getId(): string;
          public getCode(): string;
          public constructor(param0: string, param1: string, param2: string, param3: string);
          public getName(): string;
          public getType(): string;
        }
        export module RadarRegion {
          export class Companion {
            public static class: java.lang.Class<io.radar.sdk.model.RadarRegion.Companion>;
            public fromJson(param0: org.json.JSONObject): io.radar.sdk.model.RadarRegion;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module model {
        export class RadarUser {
          public static class: java.lang.Class<io.radar.sdk.model.RadarUser>;
          public static FIELD_ID: string;
          public static FIELD_USER_ID: string;
          public static FIELD_DEVICE_ID: string;
          public static FIELD_DESCRIPTION: string;
          public static FIELD_METADATA: string;
          public static FIELD_LOCATION: string;
          public static FIELD_COORDINATES: string;
          public static FIELD_LOCATION_ACCURACY: string;
          public static FIELD_GEOFENCES: string;
          public static FIELD_PLACE: string;
          public static FIELD_INSIGHTS: string;
          public static FIELD_STOPPED: string;
          public static FIELD_FOREGROUND: string;
          public static Companion: io.radar.sdk.model.RadarUser.Companion;
          public getMetadata(): org.json.JSONObject;
          public getPostalCode(): io.radar.sdk.model.RadarRegion;
          public getId(): string;
          public getPlace(): io.radar.sdk.model.RadarPlace;
          public getStopped(): boolean;
          public getDma(): io.radar.sdk.model.RadarRegion;
          public getGeofences(): native.Array<io.radar.sdk.model.RadarGeofence>;
          public getForeground(): boolean;
          public getCountry(): io.radar.sdk.model.RadarRegion;
          public getState(): io.radar.sdk.model.RadarRegion;
          public getDeviceId(): string;
          public getNearbyPlaceChains(): native.Array<io.radar.sdk.model.RadarChain>;
          public constructor(param0: string, param1: string, param2: string, param3: string, param4: org.json.JSONObject, param5: globalAndroid.location.Location, param6: native.Array<io.radar.sdk.model.RadarGeofence>, param7: io.radar.sdk.model.RadarPlace, param8: io.radar.sdk.model.RadarUserInsights, param9: boolean, param10: boolean, param11: io.radar.sdk.model.RadarRegion, param12: io.radar.sdk.model.RadarRegion, param13: io.radar.sdk.model.RadarRegion, param14: io.radar.sdk.model.RadarRegion, param15: native.Array<io.radar.sdk.model.RadarChain>);
          public getInsights(): io.radar.sdk.model.RadarUserInsights;
          public getUserId(): string;
          public getDescription(): string;
          public getLocation(): globalAndroid.location.Location;
        }
        export module RadarUser {
          export class Companion {
            public static class: java.lang.Class<io.radar.sdk.model.RadarUser.Companion>;
            public fromJson$sdk_release(param0: org.json.JSONObject): io.radar.sdk.model.RadarUser;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module model {
        export class RadarUserInsights {
          public static class: java.lang.Class<io.radar.sdk.model.RadarUserInsights>;
          public static FIELD_LOCATIONS: string;
          public static FIELD_STATE: string;
          public static Companion: io.radar.sdk.model.RadarUserInsights.Companion;
          public getState(): io.radar.sdk.model.RadarUserInsightsState;
          public getHomeLocation(): io.radar.sdk.model.RadarUserInsightsLocation;
          public getOfficeLocation(): io.radar.sdk.model.RadarUserInsightsLocation;
        }
        export module RadarUserInsights {
          export class Companion {
            public static class: java.lang.Class<io.radar.sdk.model.RadarUserInsights.Companion>;
            public fromJson(param0: org.json.JSONObject): io.radar.sdk.model.RadarUserInsights;
          }
          export module Companion {
            export class WhenMappings {
              public static class: java.lang.Class<io.radar.sdk.model.RadarUserInsights.Companion.WhenMappings>;
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module model {
        export class RadarUserInsightsLocation {
          public static class: java.lang.Class<io.radar.sdk.model.RadarUserInsightsLocation>;
          public static Companion: io.radar.sdk.model.RadarUserInsightsLocation.Companion;
          public getPostalCode(): io.radar.sdk.model.RadarRegion;
          public getType(): io.radar.sdk.model.RadarUserInsightsLocation.RadarUserInsightsLocationType;
          public getCountry(): io.radar.sdk.model.RadarRegion;
          public getState(): io.radar.sdk.model.RadarRegion;
          public getUpdatedAt(): java.util.Date;
          public constructor(param0: io.radar.sdk.model.RadarUserInsightsLocation.RadarUserInsightsLocationType, param1: globalAndroid.location.Location, param2: io.radar.sdk.model.RadarUserInsightsLocation.RadarUserInsightsLocationConfidence, param3: java.util.Date, param4: io.radar.sdk.model.RadarRegion, param5: io.radar.sdk.model.RadarRegion, param6: io.radar.sdk.model.RadarRegion, param7: io.radar.sdk.model.RadarRegion);
          public getDma(): io.radar.sdk.model.RadarRegion;
          public getLocation(): globalAndroid.location.Location;
          public getConfidence(): io.radar.sdk.model.RadarUserInsightsLocation.RadarUserInsightsLocationConfidence;
        }
        export module RadarUserInsightsLocation {
          export class Companion {
            public static class: java.lang.Class<io.radar.sdk.model.RadarUserInsightsLocation.Companion>;
            public fromJson(param0: org.json.JSONObject): io.radar.sdk.model.RadarUserInsightsLocation;
          }
          export class RadarUserInsightsLocationConfidence {
            public static class: java.lang.Class<io.radar.sdk.model.RadarUserInsightsLocation.RadarUserInsightsLocationConfidence>;
            public static NONE: io.radar.sdk.model.RadarUserInsightsLocation.RadarUserInsightsLocationConfidence;
            public static LOW: io.radar.sdk.model.RadarUserInsightsLocation.RadarUserInsightsLocationConfidence;
            public static MEDIUM: io.radar.sdk.model.RadarUserInsightsLocation.RadarUserInsightsLocationConfidence;
            public static HIGH: io.radar.sdk.model.RadarUserInsightsLocation.RadarUserInsightsLocationConfidence;
            public static values(): native.Array<io.radar.sdk.model.RadarUserInsightsLocation.RadarUserInsightsLocationConfidence>;
            public constructor(param0: string, param1: number);
            public static valueOf(param0: string): io.radar.sdk.model.RadarUserInsightsLocation.RadarUserInsightsLocationConfidence;
          }
          export class RadarUserInsightsLocationType {
            public static class: java.lang.Class<io.radar.sdk.model.RadarUserInsightsLocation.RadarUserInsightsLocationType>;
            public static UNKNOWN: io.radar.sdk.model.RadarUserInsightsLocation.RadarUserInsightsLocationType;
            public static HOME: io.radar.sdk.model.RadarUserInsightsLocation.RadarUserInsightsLocationType;
            public static OFFICE: io.radar.sdk.model.RadarUserInsightsLocation.RadarUserInsightsLocationType;
            public constructor(param0: string, param1: number);
            public static values(): native.Array<io.radar.sdk.model.RadarUserInsightsLocation.RadarUserInsightsLocationType>;
            public static valueOf(param0: string): io.radar.sdk.model.RadarUserInsightsLocation.RadarUserInsightsLocationType;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module model {
        export class RadarUserInsightsState {
          public static class: java.lang.Class<io.radar.sdk.model.RadarUserInsightsState>;
          public static Companion: io.radar.sdk.model.RadarUserInsightsState.Companion;
          public constructor(param0: boolean, param1: boolean, param2: boolean);
          public getTraveling(): boolean;
          public getOffice(): boolean;
          public getHome(): boolean;
        }
        export module RadarUserInsightsState {
          export class Companion {
            public static class: java.lang.Class<io.radar.sdk.model.RadarUserInsightsState.Companion>;
            public fromJson(param0: org.json.JSONObject): io.radar.sdk.model.RadarUserInsightsState;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module state {
        export class StateManager {
          public static class: java.lang.Class<io.radar.sdk.state.StateManager>;
          public updateState$sdk_release(param0: globalAndroid.location.Location): io.radar.sdk.internal.RadarState;
          public updateState$sdk_release(param0: java.util.List<any>): io.radar.sdk.internal.RadarState;
          public constructor(param0: globalAndroid.content.Context, param1: io.radar.sdk.state.StateManagerStore);
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module state {
        export class StateManagerStore extends io.radar.sdk.internal.store.BaseStore {
          public static class: java.lang.Class<io.radar.sdk.state.StateManagerStore>;
          public static KEY_LAST_LOCATION_LAT: string;
          public static KEY_LAST_LOCATION_LONG: string;
          public static KEY_LAST_LOCATION_TIME: string;
          public static KEY_STATE_TYPE: string;
          public static KEY_STATE_JUST_STOPPED: string;
          public static KEY_STATE_LAT: string;
          public static KEY_STATE_LONG: string;
          public static KEY_STATE_TIME: string;
          public static KEY_STATE_ACC: string;
          public static STATE_TYPE_MOVE: string;
          public static STATE_TYPE_STOP: string;
          public static Companion: io.radar.sdk.state.StateManagerStore.Companion;
          public constructor(param0: globalAndroid.content.Context);
          public setLastMovingLocation$sdk_release(param0: globalAndroid.location.Location): void;
          public setCurrentState$sdk_release(param0: io.radar.sdk.internal.RadarState): void;
          public getCurrentState$sdk_release(): io.radar.sdk.internal.RadarState;
          public getLastMovingLocation$sdk_release(): globalAndroid.location.Location;
        }
        export module StateManagerStore {
          export class Companion {
            public static class: java.lang.Class<io.radar.sdk.state.StateManagerStore.Companion>;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module state {
        export class StateManagerStore_Factory extends io.radar.shadow.dagger.internal.Factory<io.radar.sdk.state.StateManagerStore> {
          public static class: java.lang.Class<io.radar.sdk.state.StateManagerStore_Factory>;
          public static provideInstance(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>): io.radar.sdk.state.StateManagerStore;
          public get(): any;
          public constructor(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>);
          public static create(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>): io.radar.sdk.state.StateManagerStore_Factory;
          public get(): io.radar.sdk.state.StateManagerStore;
          public static newStateManagerStore(param0: globalAndroid.content.Context): io.radar.sdk.state.StateManagerStore;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module state {
        export class StateManager_Factory extends io.radar.shadow.dagger.internal.Factory<io.radar.sdk.state.StateManager> {
          public static class: java.lang.Class<io.radar.sdk.state.StateManager_Factory>;
          public static newStateManager(param0: globalAndroid.content.Context, param1: io.radar.sdk.state.StateManagerStore): io.radar.sdk.state.StateManager;
          public static create(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>, param1: io.radar.shadow.javax.inject.Provider<io.radar.sdk.state.StateManagerStore>): io.radar.sdk.state.StateManager_Factory;
          public get(): any;
          public constructor(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>, param1: io.radar.shadow.javax.inject.Provider<io.radar.sdk.state.StateManagerStore>);
          public get(): io.radar.sdk.state.StateManager;
          public static provideInstance(param0: io.radar.shadow.javax.inject.Provider<globalAndroid.content.Context>, param1: io.radar.shadow.javax.inject.Provider<io.radar.sdk.state.StateManagerStore>): io.radar.sdk.state.StateManager;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module util {
        export class DeviceHelper {
          public static class: java.lang.Class<io.radar.sdk.util.DeviceHelper>;
          public static sdkVersion: string;
          public static INSTANCE: io.radar.sdk.util.DeviceHelper;
          public getDeviceId$sdk_release(param0: globalAndroid.content.Context): string;
          public getModel$sdk_release(): string;
          public isLocationOn$sdk_release(param0: globalAndroid.content.Context): boolean;
          public getMake$sdk_release(): string;
          public getOs$sdk_release(): string;
          public getCountry$sdk_release(): string;
          public getTimeZoneOffset$sdk_release(): number;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module util {
        export class IntegrationHelper {
          public static class: java.lang.Class<io.radar.sdk.util.IntegrationHelper>;
          public getUrbanAirshipSessionId(): string;
          public constructor();
          public getUrbanAirshipChannelId(): string;
          public getFacebookAccessToken(): string;
          public getUrbanAirshipNamedUserId(): string;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module util {
        export class IntegrationHelper_Factory extends io.radar.shadow.dagger.internal.Factory<io.radar.sdk.util.IntegrationHelper> {
          public static class: java.lang.Class<io.radar.sdk.util.IntegrationHelper_Factory>;
          public static create(): io.radar.sdk.util.IntegrationHelper_Factory;
          public get(): any;
          public constructor();
          public static newIntegrationHelper(): io.radar.sdk.util.IntegrationHelper;
          public get(): io.radar.sdk.util.IntegrationHelper;
          public static provideInstance(): io.radar.sdk.util.IntegrationHelper;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module sdk {
      export module util {
        export class PermissionsHelper {
          public static class: java.lang.Class<io.radar.sdk.util.PermissionsHelper>;
          public static INSTANCE: io.radar.sdk.util.PermissionsHelper;
          public check(param0: globalAndroid.content.Context): boolean;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export class Binds {
          public static class: java.lang.Class<io.radar.shadow.dagger.Binds>;
          /**
           * Constructs a new instance of the io.radar.shadow.dagger.Binds interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
          });
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export class BindsInstance {
          public static class: java.lang.Class<io.radar.shadow.dagger.BindsInstance>;
          /**
           * Constructs a new instance of the io.radar.shadow.dagger.BindsInstance interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
          });
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export class BindsOptionalOf {
          public static class: java.lang.Class<io.radar.shadow.dagger.BindsOptionalOf>;
          /**
           * Constructs a new instance of the io.radar.shadow.dagger.BindsOptionalOf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
          });
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export class Component {
          public static class: java.lang.Class<io.radar.shadow.dagger.Component>;
          /**
           * Constructs a new instance of the io.radar.shadow.dagger.Component interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            modules(): native.Array<java.lang.Class<any>>;
            dependencies(): native.Array<java.lang.Class<any>>;
          });
          public constructor();
          public modules(): native.Array<java.lang.Class<any>>;
          public dependencies(): native.Array<java.lang.Class<any>>;
        }
        export module Component {
          export class Builder {
            public static class: java.lang.Class<io.radar.shadow.dagger.Component.Builder>;
            /**
             * Constructs a new instance of the io.radar.shadow.dagger.Component$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
            });
            public constructor();
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export class Lazy<T>  extends java.lang.Object {
          public static class: java.lang.Class<io.radar.shadow.dagger.Lazy<any>>;
          /**
           * Constructs a new instance of the io.radar.shadow.dagger.Lazy<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            get(): T;
          });
          public constructor();
          public get(): T;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export class MapKey {
          public static class: java.lang.Class<io.radar.shadow.dagger.MapKey>;
          /**
           * Constructs a new instance of the io.radar.shadow.dagger.MapKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            unwrapValue(): boolean;
          });
          public constructor();
          public unwrapValue(): boolean;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export class MembersInjector<T>  extends java.lang.Object {
          public static class: java.lang.Class<io.radar.shadow.dagger.MembersInjector<any>>;
          /**
           * Constructs a new instance of the io.radar.shadow.dagger.MembersInjector<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            injectMembers(param0: T): void;
          });
          public constructor();
          public injectMembers(param0: T): void;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export class Module {
          public static class: java.lang.Class<io.radar.shadow.dagger.Module>;
          /**
           * Constructs a new instance of the io.radar.shadow.dagger.Module interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            includes(): native.Array<java.lang.Class<any>>;
            subcomponents(): native.Array<java.lang.Class<any>>;
          });
          public constructor();
          public includes(): native.Array<java.lang.Class<any>>;
          public subcomponents(): native.Array<java.lang.Class<any>>;
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export class Provides {
          public static class: java.lang.Class<io.radar.shadow.dagger.Provides>;
          /**
           * Constructs a new instance of the io.radar.shadow.dagger.Provides interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
          });
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export class Reusable {
          public static class: java.lang.Class<io.radar.shadow.dagger.Reusable>;
          /**
           * Constructs a new instance of the io.radar.shadow.dagger.Reusable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
          });
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export class Subcomponent {
          public static class: java.lang.Class<io.radar.shadow.dagger.Subcomponent>;
          /**
           * Constructs a new instance of the io.radar.shadow.dagger.Subcomponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            modules(): native.Array<java.lang.Class<any>>;
          });
          public constructor();
          public modules(): native.Array<java.lang.Class<any>>;
        }
        export module Subcomponent {
          export class Builder {
            public static class: java.lang.Class<io.radar.shadow.dagger.Subcomponent.Builder>;
            /**
             * Constructs a new instance of the io.radar.shadow.dagger.Subcomponent$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
            });
            public constructor();
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module internal {
          export class Beta {
            public static class: java.lang.Class<io.radar.shadow.dagger.internal.Beta>;
            /**
             * Constructs a new instance of the io.radar.shadow.dagger.internal.Beta interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
            });
            public constructor();
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module internal {
          export class DaggerCollections {
            public static class: java.lang.Class<io.radar.shadow.dagger.internal.DaggerCollections>;
            public static hasDuplicates(param0: java.util.List<any>): boolean;
            public static presizedList(param0: number): java.util.List;
            public static newLinkedHashMapWithExpectedSize(param0: number): java.util.LinkedHashMap;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module internal {
          export class DelegateFactory<T>  extends io.radar.shadow.dagger.internal.Factory<any> {
            public static class: java.lang.Class<io.radar.shadow.dagger.internal.DelegateFactory<any>>;
            public constructor();
            public setDelegatedProvider(param0: io.radar.shadow.javax.inject.Provider<any>): void;
            public get(): any;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module internal {
          export class DoubleCheck<T>  extends java.lang.Object {
            public static class: java.lang.Class<io.radar.shadow.dagger.internal.DoubleCheck<any>>;
            public get(): T;
            public static reentrantCheck(param0: any, param1: any): any;
            public static provider(param0: io.radar.shadow.javax.inject.Provider<any>): io.radar.shadow.javax.inject.Provider<any>;
            public static lazy(param0: io.radar.shadow.javax.inject.Provider<any>): io.radar.shadow.dagger.Lazy<any>;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module internal {
          export class Factory<T>  extends io.radar.shadow.javax.inject.Provider<any> {
            public static class: java.lang.Class<io.radar.shadow.dagger.internal.Factory<any>>;
            /**
             * Constructs a new instance of the io.radar.shadow.dagger.internal.Factory<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              get(): any;
            });
            public constructor();
            public get(): any;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module internal {
          export class GwtIncompatible {
            public static class: java.lang.Class<io.radar.shadow.dagger.internal.GwtIncompatible>;
            /**
             * Constructs a new instance of the io.radar.shadow.dagger.internal.GwtIncompatible interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
            });
            public constructor();
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module internal {
          export class InstanceFactory<T>  extends java.lang.Object {
            public static class: java.lang.Class<io.radar.shadow.dagger.internal.InstanceFactory<any>>;
            public static createNullable(param0: any): io.radar.shadow.dagger.internal.Factory<any>;
            public get(): T;
            public static create(param0: any): io.radar.shadow.dagger.internal.Factory<any>;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module internal {
          export class MapBuilder<K, V>  extends java.lang.Object {
            public static class: java.lang.Class<io.radar.shadow.dagger.internal.MapBuilder<any,any>>;
            public build(): java.util.Map<K,V>;
            public put(param0: K, param1: V): io.radar.shadow.dagger.internal.MapBuilder<K,V>;
            public putAll(param0: java.util.Map<K,V>): io.radar.shadow.dagger.internal.MapBuilder<K,V>;
            public static newMapBuilder(param0: number): io.radar.shadow.dagger.internal.MapBuilder<any,any>;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module internal {
          export class MapFactory<K, V>  extends io.radar.shadow.dagger.internal.Factory<java.util.Map<any,any>> {
            public static class: java.lang.Class<io.radar.shadow.dagger.internal.MapFactory<any,any>>;
            public get(): java.util.Map<any,any>;
            public static builder(param0: number): io.radar.shadow.dagger.internal.MapFactory.Builder<any,any>;
            public get(): any;
            public static emptyMapProvider(): io.radar.shadow.javax.inject.Provider<any>;
          }
          export module MapFactory {
            export class Builder<K, V>  extends java.lang.Object {
              public static class: java.lang.Class<io.radar.shadow.dagger.internal.MapFactory.Builder<any,any>>;
              public put(param0: K, param1: io.radar.shadow.javax.inject.Provider<V>): io.radar.shadow.dagger.internal.MapFactory.Builder<K,V>;
              public build(): io.radar.shadow.dagger.internal.MapFactory<K,V>;
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module internal {
          export class MapProviderFactory<K, V>  extends java.lang.Object {
            public static class: java.lang.Class<io.radar.shadow.dagger.internal.MapProviderFactory<any,any>>;
            public static builder(param0: number): io.radar.shadow.dagger.internal.MapProviderFactory.Builder<any,any>;
            public get(): java.util.Map<K,io.radar.shadow.javax.inject.Provider<V>>;
            public get(): any;
          }
          export module MapProviderFactory {
            export class Builder<K, V>  extends java.lang.Object {
              public static class: java.lang.Class<io.radar.shadow.dagger.internal.MapProviderFactory.Builder<any,any>>;
              public build(): io.radar.shadow.dagger.internal.MapProviderFactory<K,V>;
              public put(param0: K, param1: io.radar.shadow.javax.inject.Provider<V>): io.radar.shadow.dagger.internal.MapProviderFactory.Builder<K,V>;
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module internal {
          export class MembersInjectors {
            public static class: java.lang.Class<io.radar.shadow.dagger.internal.MembersInjectors>;
            public static noOp(): io.radar.shadow.dagger.MembersInjector<any>;
          }
          export module MembersInjectors {
            export class NoOpMembersInjector extends io.radar.shadow.dagger.MembersInjector<any> {
              public static class: java.lang.Class<io.radar.shadow.dagger.internal.MembersInjectors.NoOpMembersInjector>;
              public static INSTANCE: io.radar.shadow.dagger.internal.MembersInjectors.NoOpMembersInjector;
              public static values(): native.Array<io.radar.shadow.dagger.internal.MembersInjectors.NoOpMembersInjector>;
              public injectMembers(param0: any): void;
              public static valueOf(param0: string): io.radar.shadow.dagger.internal.MembersInjectors.NoOpMembersInjector;
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module internal {
          export class MemoizedSentinel {
            public static class: java.lang.Class<io.radar.shadow.dagger.internal.MemoizedSentinel>;
            public constructor();
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module internal {
          export class Preconditions {
            public static class: java.lang.Class<io.radar.shadow.dagger.internal.Preconditions>;
            public static checkNotNull(param0: any): any;
            public static checkNotNull(param0: any, param1: string): any;
            public static checkNotNull(param0: any, param1: string, param2: any): any;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module internal {
          export class ProviderOfLazy<T>  extends io.radar.shadow.javax.inject.Provider<io.radar.shadow.dagger.Lazy<any>> {
            public static class: java.lang.Class<io.radar.shadow.dagger.internal.ProviderOfLazy<any>>;
            public static create(param0: io.radar.shadow.javax.inject.Provider<any>): io.radar.shadow.javax.inject.Provider<any>;
            public get(): io.radar.shadow.dagger.Lazy<any>;
            public get(): any;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module internal {
          export class ReferenceReleasingProvider<T>  extends io.radar.shadow.javax.inject.Provider<any> {
            public static class: java.lang.Class<io.radar.shadow.dagger.internal.ReferenceReleasingProvider<any>>;
            public restoreStrongReference(): void;
            public releaseStrongReference(): void;
            public static create(param0: io.radar.shadow.javax.inject.Provider<any>, param1: io.radar.shadow.dagger.internal.ReferenceReleasingProviderManager): io.radar.shadow.dagger.internal.ReferenceReleasingProvider<any>;
            public get(): any;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module internal {
          export class ReferenceReleasingProviderManager extends io.radar.shadow.dagger.releasablereferences.ReleasableReferenceManager {
            public static class: java.lang.Class<io.radar.shadow.dagger.internal.ReferenceReleasingProviderManager>;
            public constructor(param0: java.lang.Class<any>);
            public scope(): java.lang.Class<any>;
            public releaseStrongReferences(): void;
            public restoreStrongReferences(): void;
            public addProvider(param0: io.radar.shadow.dagger.internal.ReferenceReleasingProvider<any>): void;
          }
          export module ReferenceReleasingProviderManager {
            export abstract class Operation {
              public static class: java.lang.Class<io.radar.shadow.dagger.internal.ReferenceReleasingProviderManager.Operation>;
              public static RELEASE: io.radar.shadow.dagger.internal.ReferenceReleasingProviderManager.Operation;
              public static RESTORE: io.radar.shadow.dagger.internal.ReferenceReleasingProviderManager.Operation;
              public static valueOf(param0: string): io.radar.shadow.dagger.internal.ReferenceReleasingProviderManager.Operation;
              public static values(): native.Array<io.radar.shadow.dagger.internal.ReferenceReleasingProviderManager.Operation>;
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module internal {
          export class SetBuilder<T>  extends java.lang.Object {
            public static class: java.lang.Class<io.radar.shadow.dagger.internal.SetBuilder<any>>;
            public build(): java.util.Set<T>;
            public add(param0: T): io.radar.shadow.dagger.internal.SetBuilder<T>;
            public addAll(param0: java.util.Collection<any>): io.radar.shadow.dagger.internal.SetBuilder<T>;
            public static newSetBuilder(param0: number): io.radar.shadow.dagger.internal.SetBuilder<any>;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module internal {
          export class SetFactory<T>  extends io.radar.shadow.dagger.internal.Factory<java.util.Set<any>> {
            public static class: java.lang.Class<io.radar.shadow.dagger.internal.SetFactory<any>>;
            public static empty(): io.radar.shadow.dagger.internal.Factory<any>;
            public get(): java.util.Set<any>;
            public static builder(param0: number, param1: number): io.radar.shadow.dagger.internal.SetFactory.Builder<any>;
            public get(): any;
          }
          export module SetFactory {
            export class Builder<T>  extends java.lang.Object {
              public static class: java.lang.Class<io.radar.shadow.dagger.internal.SetFactory.Builder<any>>;
              public addCollectionProvider(param0: io.radar.shadow.javax.inject.Provider<any>): io.radar.shadow.dagger.internal.SetFactory.Builder<T>;
              public build(): io.radar.shadow.dagger.internal.SetFactory<T>;
              public addProvider(param0: io.radar.shadow.javax.inject.Provider<any>): io.radar.shadow.dagger.internal.SetFactory.Builder<T>;
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module internal {
          export class SingleCheck<T>  extends io.radar.shadow.javax.inject.Provider<any> {
            public static class: java.lang.Class<io.radar.shadow.dagger.internal.SingleCheck<any>>;
            public static provider(param0: io.radar.shadow.javax.inject.Provider<any>): io.radar.shadow.javax.inject.Provider<any>;
            public get(): any;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module internal {
          export class TypedReleasableReferenceManagerDecorator<M>  extends io.radar.shadow.dagger.releasablereferences.TypedReleasableReferenceManager<any> {
            public static class: java.lang.Class<io.radar.shadow.dagger.internal.TypedReleasableReferenceManagerDecorator<any>>;
            public metadata(): any;
            public scope(): java.lang.Class<any>;
            public releaseStrongReferences(): void;
            public restoreStrongReferences(): void;
            public constructor(param0: io.radar.shadow.dagger.releasablereferences.ReleasableReferenceManager, param1: any);
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module multibindings {
          export class ClassKey {
            public static class: java.lang.Class<io.radar.shadow.dagger.multibindings.ClassKey>;
            /**
             * Constructs a new instance of the io.radar.shadow.dagger.multibindings.ClassKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              value(): java.lang.Class<any>;
            });
            public constructor();
            public value(): java.lang.Class<any>;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module multibindings {
          export class ElementsIntoSet {
            public static class: java.lang.Class<io.radar.shadow.dagger.multibindings.ElementsIntoSet>;
            /**
             * Constructs a new instance of the io.radar.shadow.dagger.multibindings.ElementsIntoSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
            });
            public constructor();
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module multibindings {
          export class IntKey {
            public static class: java.lang.Class<io.radar.shadow.dagger.multibindings.IntKey>;
            /**
             * Constructs a new instance of the io.radar.shadow.dagger.multibindings.IntKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              value(): number;
            });
            public constructor();
            public value(): number;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module multibindings {
          export class IntoMap {
            public static class: java.lang.Class<io.radar.shadow.dagger.multibindings.IntoMap>;
            /**
             * Constructs a new instance of the io.radar.shadow.dagger.multibindings.IntoMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
            });
            public constructor();
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module multibindings {
          export class IntoSet {
            public static class: java.lang.Class<io.radar.shadow.dagger.multibindings.IntoSet>;
            /**
             * Constructs a new instance of the io.radar.shadow.dagger.multibindings.IntoSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
            });
            public constructor();
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module multibindings {
          export class LongKey {
            public static class: java.lang.Class<io.radar.shadow.dagger.multibindings.LongKey>;
            /**
             * Constructs a new instance of the io.radar.shadow.dagger.multibindings.LongKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              value(): number;
            });
            public constructor();
            public value(): number;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module multibindings {
          export class Multibinds {
            public static class: java.lang.Class<io.radar.shadow.dagger.multibindings.Multibinds>;
            /**
             * Constructs a new instance of the io.radar.shadow.dagger.multibindings.Multibinds interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
            });
            public constructor();
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module multibindings {
          export class StringKey {
            public static class: java.lang.Class<io.radar.shadow.dagger.multibindings.StringKey>;
            /**
             * Constructs a new instance of the io.radar.shadow.dagger.multibindings.StringKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              value(): string;
            });
            public constructor();
            public value(): string;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module releasablereferences {
          export class CanReleaseReferences {
            public static class: java.lang.Class<io.radar.shadow.dagger.releasablereferences.CanReleaseReferences>;
            /**
             * Constructs a new instance of the io.radar.shadow.dagger.releasablereferences.CanReleaseReferences interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
            });
            public constructor();
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module releasablereferences {
          export class ForReleasableReferences {
            public static class: java.lang.Class<io.radar.shadow.dagger.releasablereferences.ForReleasableReferences>;
            /**
             * Constructs a new instance of the io.radar.shadow.dagger.releasablereferences.ForReleasableReferences interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              value(): java.lang.Class<any>;
            });
            public constructor();
            public value(): java.lang.Class<any>;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module releasablereferences {
          export class ReleasableReferenceManager {
            public static class: java.lang.Class<io.radar.shadow.dagger.releasablereferences.ReleasableReferenceManager>;
            /**
             * Constructs a new instance of the io.radar.shadow.dagger.releasablereferences.ReleasableReferenceManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              scope(): java.lang.Class<any>;
              releaseStrongReferences(): void;
              restoreStrongReferences(): void;
            });
            public constructor();
            public scope(): java.lang.Class<any>;
            public releaseStrongReferences(): void;
            public restoreStrongReferences(): void;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module dagger {
        export module releasablereferences {
          export class TypedReleasableReferenceManager<M>  extends io.radar.shadow.dagger.releasablereferences.ReleasableReferenceManager {
            public static class: java.lang.Class<io.radar.shadow.dagger.releasablereferences.TypedReleasableReferenceManager<any>>;
            /**
             * Constructs a new instance of the io.radar.shadow.dagger.releasablereferences.TypedReleasableReferenceManager<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              metadata(): any;
              scope(): java.lang.Class<any>;
              releaseStrongReferences(): void;
              restoreStrongReferences(): void;
            });
            public constructor();
            public metadata(): any;
            public scope(): java.lang.Class<any>;
            public releaseStrongReferences(): void;
            public restoreStrongReferences(): void;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module javax {
        export module inject {
          export class Inject {
            public static class: java.lang.Class<io.radar.shadow.javax.inject.Inject>;
            /**
             * Constructs a new instance of the io.radar.shadow.javax.inject.Inject interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
            });
            public constructor();
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module javax {
        export module inject {
          export class Named {
            public static class: java.lang.Class<io.radar.shadow.javax.inject.Named>;
            /**
             * Constructs a new instance of the io.radar.shadow.javax.inject.Named interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              value(): string;
            });
            public constructor();
            public value(): string;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module javax {
        export module inject {
          export class Provider<T>  extends java.lang.Object {
            public static class: java.lang.Class<io.radar.shadow.javax.inject.Provider<any>>;
            /**
             * Constructs a new instance of the io.radar.shadow.javax.inject.Provider<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              get(): T;
            });
            public constructor();
            public get(): T;
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module javax {
        export module inject {
          export class Qualifier {
            public static class: java.lang.Class<io.radar.shadow.javax.inject.Qualifier>;
            /**
             * Constructs a new instance of the io.radar.shadow.javax.inject.Qualifier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
            });
            public constructor();
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module javax {
        export module inject {
          export class Scope {
            public static class: java.lang.Class<io.radar.shadow.javax.inject.Scope>;
            /**
             * Constructs a new instance of the io.radar.shadow.javax.inject.Scope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
            });
            public constructor();
          }
        }
      }
    }
  }
}

declare module io {
  export module radar {
    export module shadow {
      export module javax {
        export module inject {
          export class Singleton {
            public static class: java.lang.Class<io.radar.shadow.javax.inject.Singleton>;
            /**
             * Constructs a new instance of the io.radar.shadow.javax.inject.Singleton interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
            });
            public constructor();
          }
        }
      }
    }
  }
}

//Generics information:
//io.radar.shadow.dagger.Lazy:1
//io.radar.shadow.dagger.MembersInjector:1
//io.radar.shadow.dagger.internal.DelegateFactory:1
//io.radar.shadow.dagger.internal.DoubleCheck:1
//io.radar.shadow.dagger.internal.Factory:1
//io.radar.shadow.dagger.internal.InstanceFactory:1
//io.radar.shadow.dagger.internal.MapBuilder:2
//io.radar.shadow.dagger.internal.MapFactory:2
//io.radar.shadow.dagger.internal.MapFactory.Builder:2
//io.radar.shadow.dagger.internal.MapProviderFactory:2
//io.radar.shadow.dagger.internal.MapProviderFactory.Builder:2
//io.radar.shadow.dagger.internal.ProviderOfLazy:1
//io.radar.shadow.dagger.internal.ReferenceReleasingProvider:1
//io.radar.shadow.dagger.internal.SetBuilder:1
//io.radar.shadow.dagger.internal.SetFactory:1
//io.radar.shadow.dagger.internal.SetFactory.Builder:1
//io.radar.shadow.dagger.internal.SingleCheck:1
//io.radar.shadow.dagger.internal.TypedReleasableReferenceManagerDecorator:1
//io.radar.shadow.dagger.releasablereferences.TypedReleasableReferenceManager:1
//io.radar.shadow.javax.inject.Provider:1

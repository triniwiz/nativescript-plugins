declare module com {
	export module klaviyo {
		export module analytics {
			export class BuildConfig {
				public static class: java.lang.Class<com.klaviyo.analytics.BuildConfig>;
				public static DEBUG: boolean = 0;
				public static LIBRARY_PACKAGE_NAME: string = "com.klaviyo.analytics";
				public static BUILD_TYPE: string = "release";
				public static KLAVIYO_API_REVISION: string = "2024-10-15";
				public static KLAVIYO_ASSET_SOURCE: string = "";
				public static KLAVIYO_CDN_URL: string = "https://static.klaviyo.com";
				public static KLAVIYO_SERVER_URL: string = "https://a.klaviyo.com";
				public constructor();
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export class Klaviyo {
				public static class: java.lang.Class<com.klaviyo.analytics.Klaviyo>;
				public static INSTANCE: com.klaviyo.analytics.Klaviyo;
				public handlePush(intent: globalAndroid.content.Intent): com.klaviyo.analytics.Klaviyo;
				public createEvent(metric: com.klaviyo.analytics.model.EventMetric, value: java.lang.Double): com.klaviyo.analytics.Klaviyo;
				public getEmail(): string;
				public setExternalId(externalId: string): com.klaviyo.analytics.Klaviyo;
				public createEvent(event: com.klaviyo.analytics.model.Event): com.klaviyo.analytics.Klaviyo;
				public setProfile(profile: com.klaviyo.analytics.model.Profile): com.klaviyo.analytics.Klaviyo;
				public setProfileAttribute(propertyKey: com.klaviyo.analytics.model.ProfileKey, value: java.io.Serializable): com.klaviyo.analytics.Klaviyo;
				public initialize(apiKey: string, applicationContext: globalAndroid.content.Context): com.klaviyo.analytics.Klaviyo;
				public getPhoneNumber(): string;
				public setPushToken(pushToken: string): com.klaviyo.analytics.Klaviyo;
				public setEmail(email: string): com.klaviyo.analytics.Klaviyo;
				public getPushToken(): string;
				public isKlaviyoIntent($this$isKlaviyoIntent: globalAndroid.content.Intent): boolean;
				public getExternalId(): string;
				public registerForLifecycleCallbacks(applicationContext: globalAndroid.content.Context): com.klaviyo.analytics.Klaviyo;
				public resetProfile(): com.klaviyo.analytics.Klaviyo;
				public setPhoneNumber(phoneNumber: string): com.klaviyo.analytics.Klaviyo;
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module model {
				export class API_KEY extends com.klaviyo.analytics.model.Keyword {
					public static class: java.lang.Class<com.klaviyo.analytics.model.API_KEY>;
					public static INSTANCE: com.klaviyo.analytics.model.API_KEY;
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module model {
				export abstract class BaseModel<Key, Self>  extends java.lang.Object {
					public static class: java.lang.Class<com.klaviyo.analytics.model.BaseModel<any,any>>;
					public copy(): Self;
					public toString(): string;
					public get(key: Key): java.io.Serializable;
					public set(key: string, value: java.io.Serializable): void;
					public toMap(): java.util.Map<string,java.io.Serializable>;
					public merge(k: Self): com.klaviyo.analytics.model.BaseModel<Key,Self>;
					public setProperty(param0: Key, param1: java.io.Serializable): Self;
					public setProperty(param0: string, param1: java.io.Serializable): Self;
					public set(key: Key, value: java.io.Serializable): void;
					public propertyCount(): number;
					public constructor(k: java.util.Map<Key,any>);
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module model {
				export class Event extends com.klaviyo.analytics.model.BaseModel<com.klaviyo.analytics.model.EventKey,com.klaviyo.analytics.model.Event> {
					public static class: java.lang.Class<com.klaviyo.analytics.model.Event>;
					public constructor(metric: string, properties: java.util.Map<com.klaviyo.analytics.model.EventKey,any>);
					public constructor(metric: com.klaviyo.analytics.model.EventMetric);
					public setProperty($this$setProperty_u24lambda_u241: com.klaviyo.analytics.model.EventKey, this_: java.io.Serializable): com.klaviyo.analytics.model.Event;
					public constructor(metric: com.klaviyo.analytics.model.EventMetric, properties: java.util.Map<com.klaviyo.analytics.model.EventKey,any>);
					public merge($this$merge_u24lambda_u242: com.klaviyo.analytics.model.Event): com.klaviyo.analytics.model.Event;
					public setProperty(param0: any, param1: java.io.Serializable): any;
					public constructor(metric: string);
					public merge(k: any): com.klaviyo.analytics.model.BaseModel<any,any>;
					public copy(): any;
					public copy(): com.klaviyo.analytics.model.Event;
					public constructor(k: java.util.Map<any,any>);
					public setProperty(key: string, value: java.io.Serializable): com.klaviyo.analytics.model.Event;
					public getMetric(): com.klaviyo.analytics.model.EventMetric;
					public getValue(): java.lang.Double;
					public setValue(value: java.lang.Double): void;
					public setValue($this$setValue_u24lambda_u240: java.lang.Double): com.klaviyo.analytics.model.Event;
					public setProperty(param0: string, param1: java.io.Serializable): any;
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module model {
				export abstract class EventKey extends com.klaviyo.analytics.model.Keyword {
					public static class: java.lang.Class<com.klaviyo.analytics.model.EventKey>;
				}
				export module EventKey {
					export class CUSTOM extends com.klaviyo.analytics.model.EventKey {
						public static class: java.lang.Class<com.klaviyo.analytics.model.EventKey.CUSTOM>;
						public constructor(propertyName: string);
					}
					export class EVENT_ID extends com.klaviyo.analytics.model.EventKey {
						public static class: java.lang.Class<com.klaviyo.analytics.model.EventKey.EVENT_ID>;
						public static INSTANCE: com.klaviyo.analytics.model.EventKey.EVENT_ID;
					}
					export class PUSH_TOKEN extends com.klaviyo.analytics.model.EventKey {
						public static class: java.lang.Class<com.klaviyo.analytics.model.EventKey.PUSH_TOKEN>;
						public static INSTANCE: com.klaviyo.analytics.model.EventKey.PUSH_TOKEN;
					}
					export class VALUE extends com.klaviyo.analytics.model.EventKey {
						public static class: java.lang.Class<com.klaviyo.analytics.model.EventKey.VALUE>;
						public static INSTANCE: com.klaviyo.analytics.model.EventKey.VALUE;
					}
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module model {
				export abstract class EventMetric extends com.klaviyo.analytics.model.Keyword {
					public static class: java.lang.Class<com.klaviyo.analytics.model.EventMetric>;
				}
				export module EventMetric {
					export class ADDED_TO_CART extends com.klaviyo.analytics.model.EventMetric {
						public static class: java.lang.Class<com.klaviyo.analytics.model.EventMetric.ADDED_TO_CART>;
						public static INSTANCE: com.klaviyo.analytics.model.EventMetric.ADDED_TO_CART;
					}
					export class CUSTOM extends com.klaviyo.analytics.model.EventMetric {
						public static class: java.lang.Class<com.klaviyo.analytics.model.EventMetric.CUSTOM>;
						public constructor(name: string);
					}
					export class OPENED_APP extends com.klaviyo.analytics.model.EventMetric {
						public static class: java.lang.Class<com.klaviyo.analytics.model.EventMetric.OPENED_APP>;
						public static INSTANCE: com.klaviyo.analytics.model.EventMetric.OPENED_APP;
					}
					export class OPENED_PUSH extends com.klaviyo.analytics.model.EventMetric {
						public static class: java.lang.Class<com.klaviyo.analytics.model.EventMetric.OPENED_PUSH>;
						public static INSTANCE: com.klaviyo.analytics.model.EventMetric.OPENED_PUSH;
					}
					export class STARTED_CHECKOUT extends com.klaviyo.analytics.model.EventMetric {
						public static class: java.lang.Class<com.klaviyo.analytics.model.EventMetric.STARTED_CHECKOUT>;
						public static INSTANCE: com.klaviyo.analytics.model.EventMetric.STARTED_CHECKOUT;
					}
					export class VIEWED_PRODUCT extends com.klaviyo.analytics.model.EventMetric {
						public static class: java.lang.Class<com.klaviyo.analytics.model.EventMetric.VIEWED_PRODUCT>;
						public static INSTANCE: com.klaviyo.analytics.model.EventMetric.VIEWED_PRODUCT;
					}
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module model {
				export class ImmutableProfile {
					public static class: java.lang.Class<com.klaviyo.analytics.model.ImmutableProfile>;
					/**
					 * Constructs a new instance of the com.klaviyo.analytics.model.ImmutableProfile interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getExternalId(): string;
						getEmail(): string;
						getPhoneNumber(): string;
						getAnonymousId(): string;
						get(param0: com.klaviyo.analytics.model.ProfileKey): java.io.Serializable;
						copy(): com.klaviyo.analytics.model.Profile;
					});
					public constructor();
					public getAnonymousId(): string;
					public getExternalId(): string;
					public getPhoneNumber(): string;
					public copy(): com.klaviyo.analytics.model.Profile;
					public getEmail(): string;
					public get(param0: com.klaviyo.analytics.model.ProfileKey): java.io.Serializable;
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module model {
				export abstract class Keyword {
					public static class: java.lang.Class<com.klaviyo.analytics.model.Keyword>;
					public toString(): string;
					public constructor(name: string);
					public getName(): string;
					public equals(other: any): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module model {
				export class PROFILE_ATTRIBUTES extends com.klaviyo.analytics.model.Keyword {
					public static class: java.lang.Class<com.klaviyo.analytics.model.PROFILE_ATTRIBUTES>;
					public static INSTANCE: com.klaviyo.analytics.model.PROFILE_ATTRIBUTES;
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module model {
				export class Profile extends com.klaviyo.analytics.model.BaseModel<com.klaviyo.analytics.model.ProfileKey,com.klaviyo.analytics.model.Profile> implements com.klaviyo.analytics.model.ImmutableProfile  {
					public static class: java.lang.Class<com.klaviyo.analytics.model.Profile>;
					public setExternalId($this$setExternalId_u24lambda_u240: string): com.klaviyo.analytics.model.Profile;
					public setPhoneNumber(value: string): void;
					public getAttributes(): com.klaviyo.analytics.model.Profile;
					public setExternalId(value: string): void;
					public setAnonymousId$analytics_release($this$setAnonymousId_u24lambda_u243: string): com.klaviyo.analytics.model.Profile;
					public constructor(externalId: string, email: string, phoneNumber: string, properties: java.util.Map<com.klaviyo.analytics.model.ProfileKey,any>);
					public merge($this$merge_u24lambda_u247: com.klaviyo.analytics.model.Profile): com.klaviyo.analytics.model.Profile;
					public setEmail($this$setEmail_u24lambda_u241: string): com.klaviyo.analytics.model.Profile;
					public setProperty($this$setProperty_u24lambda_u246: string, this_: java.io.Serializable): com.klaviyo.analytics.model.Profile;
					public copy(): any;
					public setProperty($this$setProperty_u24lambda_u245: com.klaviyo.analytics.model.ProfileKey, this_: java.io.Serializable): com.klaviyo.analytics.model.Profile;
					public merge($this$merge_u24lambda_u248: com.klaviyo.analytics.model.ImmutableProfile): com.klaviyo.analytics.model.Profile;
					public getEmail(): string;
					public get(param0: com.klaviyo.analytics.model.ProfileKey): java.io.Serializable;
					public getAnonymousId(): string;
					public setProperty(param0: any, param1: java.io.Serializable): any;
					public setPhoneNumber($this$setPhoneNumber_u24lambda_u242: string): com.klaviyo.analytics.model.Profile;
					public merge(k: any): com.klaviyo.analytics.model.BaseModel<any,any>;
					public get(key: any): java.io.Serializable;
					public getExternalId(): string;
					public setEmail(value: string): void;
					public setAnonymousId(value: string): void;
					public getPhoneNumber(): string;
					public constructor(properties: java.util.Map<com.klaviyo.analytics.model.ProfileKey,any>);
					public copy(): com.klaviyo.analytics.model.Profile;
					public setProperty(param0: string, param1: java.io.Serializable): any;
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module model {
				export abstract class ProfileKey extends com.klaviyo.analytics.model.Keyword {
					public static class: java.lang.Class<com.klaviyo.analytics.model.ProfileKey>;
				}
				export module ProfileKey {
					export class ADDRESS1 extends com.klaviyo.analytics.model.ProfileKey {
						public static class: java.lang.Class<com.klaviyo.analytics.model.ProfileKey.ADDRESS1>;
						public static INSTANCE: com.klaviyo.analytics.model.ProfileKey.ADDRESS1;
					}
					export class ADDRESS2 extends com.klaviyo.analytics.model.ProfileKey {
						public static class: java.lang.Class<com.klaviyo.analytics.model.ProfileKey.ADDRESS2>;
						public static INSTANCE: com.klaviyo.analytics.model.ProfileKey.ADDRESS2;
					}
					export class ANONYMOUS_ID extends com.klaviyo.analytics.model.ProfileKey {
						public static class: java.lang.Class<com.klaviyo.analytics.model.ProfileKey.ANONYMOUS_ID>;
						public static INSTANCE: com.klaviyo.analytics.model.ProfileKey.ANONYMOUS_ID;
					}
					export class CITY extends com.klaviyo.analytics.model.ProfileKey {
						public static class: java.lang.Class<com.klaviyo.analytics.model.ProfileKey.CITY>;
						public static INSTANCE: com.klaviyo.analytics.model.ProfileKey.CITY;
					}
					export class COUNTRY extends com.klaviyo.analytics.model.ProfileKey {
						public static class: java.lang.Class<com.klaviyo.analytics.model.ProfileKey.COUNTRY>;
						public static INSTANCE: com.klaviyo.analytics.model.ProfileKey.COUNTRY;
					}
					export class CUSTOM extends com.klaviyo.analytics.model.ProfileKey {
						public static class: java.lang.Class<com.klaviyo.analytics.model.ProfileKey.CUSTOM>;
						public constructor(propertyName: string);
					}
					export class EMAIL extends com.klaviyo.analytics.model.ProfileKey {
						public static class: java.lang.Class<com.klaviyo.analytics.model.ProfileKey.EMAIL>;
						public static INSTANCE: com.klaviyo.analytics.model.ProfileKey.EMAIL;
					}
					export class EXTERNAL_ID extends com.klaviyo.analytics.model.ProfileKey {
						public static class: java.lang.Class<com.klaviyo.analytics.model.ProfileKey.EXTERNAL_ID>;
						public static INSTANCE: com.klaviyo.analytics.model.ProfileKey.EXTERNAL_ID;
					}
					export class FIRST_NAME extends com.klaviyo.analytics.model.ProfileKey {
						public static class: java.lang.Class<com.klaviyo.analytics.model.ProfileKey.FIRST_NAME>;
						public static INSTANCE: com.klaviyo.analytics.model.ProfileKey.FIRST_NAME;
					}
					export class IMAGE extends com.klaviyo.analytics.model.ProfileKey {
						public static class: java.lang.Class<com.klaviyo.analytics.model.ProfileKey.IMAGE>;
						public static INSTANCE: com.klaviyo.analytics.model.ProfileKey.IMAGE;
					}
					export class LAST_NAME extends com.klaviyo.analytics.model.ProfileKey {
						public static class: java.lang.Class<com.klaviyo.analytics.model.ProfileKey.LAST_NAME>;
						public static INSTANCE: com.klaviyo.analytics.model.ProfileKey.LAST_NAME;
					}
					export class LATITUDE extends com.klaviyo.analytics.model.ProfileKey {
						public static class: java.lang.Class<com.klaviyo.analytics.model.ProfileKey.LATITUDE>;
						public static INSTANCE: com.klaviyo.analytics.model.ProfileKey.LATITUDE;
					}
					export class LONGITUDE extends com.klaviyo.analytics.model.ProfileKey {
						public static class: java.lang.Class<com.klaviyo.analytics.model.ProfileKey.LONGITUDE>;
						public static INSTANCE: com.klaviyo.analytics.model.ProfileKey.LONGITUDE;
					}
					export class ORGANIZATION extends com.klaviyo.analytics.model.ProfileKey {
						public static class: java.lang.Class<com.klaviyo.analytics.model.ProfileKey.ORGANIZATION>;
						public static INSTANCE: com.klaviyo.analytics.model.ProfileKey.ORGANIZATION;
					}
					export class PHONE_NUMBER extends com.klaviyo.analytics.model.ProfileKey {
						public static class: java.lang.Class<com.klaviyo.analytics.model.ProfileKey.PHONE_NUMBER>;
						public static INSTANCE: com.klaviyo.analytics.model.ProfileKey.PHONE_NUMBER;
					}
					export class PUSH_STATE extends com.klaviyo.analytics.model.ProfileKey {
						public static class: java.lang.Class<com.klaviyo.analytics.model.ProfileKey.PUSH_STATE>;
						public static INSTANCE: com.klaviyo.analytics.model.ProfileKey.PUSH_STATE;
					}
					export class PUSH_TOKEN extends com.klaviyo.analytics.model.ProfileKey {
						public static class: java.lang.Class<com.klaviyo.analytics.model.ProfileKey.PUSH_TOKEN>;
						public static INSTANCE: com.klaviyo.analytics.model.ProfileKey.PUSH_TOKEN;
					}
					export class REGION extends com.klaviyo.analytics.model.ProfileKey {
						public static class: java.lang.Class<com.klaviyo.analytics.model.ProfileKey.REGION>;
						public static INSTANCE: com.klaviyo.analytics.model.ProfileKey.REGION;
					}
					export class TIMEZONE extends com.klaviyo.analytics.model.ProfileKey {
						public static class: java.lang.Class<com.klaviyo.analytics.model.ProfileKey.TIMEZONE>;
						public static INSTANCE: com.klaviyo.analytics.model.ProfileKey.TIMEZONE;
					}
					export class TITLE extends com.klaviyo.analytics.model.ProfileKey {
						public static class: java.lang.Class<com.klaviyo.analytics.model.ProfileKey.TITLE>;
						public static INSTANCE: com.klaviyo.analytics.model.ProfileKey.TITLE;
					}
					export class ZIP extends com.klaviyo.analytics.model.ProfileKey {
						public static class: java.lang.Class<com.klaviyo.analytics.model.ProfileKey.ZIP>;
						public static INSTANCE: com.klaviyo.analytics.model.ProfileKey.ZIP;
					}
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module networking {
				export class ApiClient {
					public static class: java.lang.Class<com.klaviyo.analytics.networking.ApiClient>;
					/**
					 * Constructs a new instance of the com.klaviyo.analytics.networking.ApiClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						startService(): void;
						persistQueue(): void;
						restoreQueue(): void;
						flushQueue(): void;
						enqueueProfile(param0: com.klaviyo.analytics.model.Profile): void;
						enqueuePushToken(param0: string, param1: com.klaviyo.analytics.model.Profile): void;
						enqueueUnregisterPushToken(param0: string, param1: string, param2: com.klaviyo.analytics.model.Profile): void;
						enqueueEvent(param0: com.klaviyo.analytics.model.Event, param1: com.klaviyo.analytics.model.Profile): void;
						onApiRequest(param0: boolean, param1: any): void;
						offApiRequest(param0: any): void;
						enqueueAggregateEvent(param0: org.json.JSONObject): void;
					});
					public constructor();
					public enqueueAggregateEvent(param0: org.json.JSONObject): void;
					public enqueuePushToken(param0: string, param1: com.klaviyo.analytics.model.Profile): void;
					public offApiRequest(param0: any): void;
					public flushQueue(): void;
					public restoreQueue(): void;
					public enqueueEvent(param0: com.klaviyo.analytics.model.Event, param1: com.klaviyo.analytics.model.Profile): void;
					public persistQueue(): void;
					public onApiRequest(param0: boolean, param1: any): void;
					public enqueueProfile(param0: com.klaviyo.analytics.model.Profile): void;
					public startService(): void;
					public enqueueUnregisterPushToken(param0: string, param1: string, param2: com.klaviyo.analytics.model.Profile): void;
				}
				export module ApiClient {
					export class DefaultImpls {
						public static class: java.lang.Class<com.klaviyo.analytics.networking.ApiClient.DefaultImpls>;
					}
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module networking {
				export class KlaviyoApiClient extends com.klaviyo.analytics.networking.ApiClient {
					public static class: java.lang.Class<com.klaviyo.analytics.networking.KlaviyoApiClient>;
					public static INSTANCE: com.klaviyo.analytics.networking.KlaviyoApiClient;
					public static QUEUE_KEY: string = "klaviyo_api_request_queue";
					public enqueuePushToken(token: string, profile: com.klaviyo.analytics.model.Profile): void;
					public enqueueEvent(event: com.klaviyo.analytics.model.Event, profile: com.klaviyo.analytics.model.Profile): void;
					public enqueueRequest(request: androidNative.Array<com.klaviyo.analytics.networking.requests.KlaviyoApiRequest>): void;
					public offApiRequest(observer: any): void;
					public flushQueue(): void;
					public enqueueEvent(param0: com.klaviyo.analytics.model.Event, param1: com.klaviyo.analytics.model.Profile): void;
					public persistQueue(): void;
					public enqueueProfile(profile: com.klaviyo.analytics.model.Profile): void;
					public enqueueAggregateEvent(param0: org.json.JSONObject): void;
					public enqueuePushToken(param0: string, param1: com.klaviyo.analytics.model.Profile): void;
					public enqueueUnregisterPushToken(apiKey: string, token: string, profile: com.klaviyo.analytics.model.Profile): void;
					public offApiRequest(param0: any): void;
					public enqueueAggregateEvent(payload: org.json.JSONObject): void;
					public onApiRequest($i$f$forEach: boolean, $this$forEach$iv: any): void;
					public restoreQueue(): void;
					public onApiRequest(param0: boolean, param1: any): void;
					public enqueueProfile(param0: com.klaviyo.analytics.model.Profile): void;
					public startService(): void;
					public enqueueUnregisterPushToken(param0: string, param1: string, param2: com.klaviyo.analytics.model.Profile): void;
					public getQueueSize(): number;
				}
				export module KlaviyoApiClient {
					export class HandlerUtil {
						public static class: java.lang.Class<com.klaviyo.analytics.networking.KlaviyoApiClient.HandlerUtil>;
						public static INSTANCE: com.klaviyo.analytics.networking.KlaviyoApiClient.HandlerUtil;
						public getHandler(looper: globalAndroid.os.Looper): globalAndroid.os.Handler;
						public getHandlerThread(name: string): globalAndroid.os.HandlerThread;
					}
					export class NetworkRunnable {
						public static class: java.lang.Class<com.klaviyo.analytics.networking.KlaviyoApiClient.NetworkRunnable>;
						public constructor();
						public run(): void;
						public getForce(): boolean;
						public constructor(force: boolean);
					}
					export module NetworkRunnable {
						export class WhenMappings {
							public static class: java.lang.Class<com.klaviyo.analytics.networking.KlaviyoApiClient.NetworkRunnable.WhenMappings>;
						}
					}
					export class WhenMappings {
						public static class: java.lang.Class<com.klaviyo.analytics.networking.KlaviyoApiClient.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module networking {
				export module requests {
					export class AggregateEventApiRequest extends com.klaviyo.analytics.networking.requests.KlaviyoApiRequest {
						public static class: java.lang.Class<com.klaviyo.analytics.networking.requests.AggregateEventApiRequest>;
						public constructor();
						public getStartTime(): java.lang.Long;
						public getResponseCode(): java.lang.Integer;
						public getErrorBody(): com.klaviyo.analytics.networking.requests.KlaviyoErrorResponse;
						public getSuccessCodes(): any;
						public getUuid(): string;
						public getQueuedTime(): number;
						public getType(): string;
						public constructor(queuedTime: java.lang.Long, uuid: string);
						public getRequestBody(): string;
						public getEndTime(): java.lang.Long;
						public getResponseHeaders(): java.util.Map<string,java.util.List<string>>;
						public getQuery(): java.util.Map<string,string>;
						public getState(): string;
						public getResponseBody(): string;
						public getHeaders(): java.util.Map<string,string>;
						public setQuery(value: java.util.Map<string,string>): void;
						public constructor(urlPath: string, method: com.klaviyo.analytics.networking.requests.RequestMethod, queuedTime: java.lang.Long, uuid: string);
						public constructor(payload: org.json.JSONObject);
						public getAttempts(): number;
						public getHttpMethod(): string;
						public getUrl(): java.net.URL;
					}
					export module AggregateEventApiRequest {
						export class Companion {
							public static class: java.lang.Class<com.klaviyo.analytics.networking.requests.AggregateEventApiRequest.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module networking {
				export module requests {
					export class ApiRequest {
						public static class: java.lang.Class<com.klaviyo.analytics.networking.requests.ApiRequest>;
						/**
						 * Constructs a new instance of the com.klaviyo.analytics.networking.requests.ApiRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getUuid(): string;
							getType(): string;
							getState(): string;
							getQueuedTime(): number;
							getAttempts(): number;
							getStartTime(): java.lang.Long;
							getEndTime(): java.lang.Long;
							getUrl(): java.net.URL;
							getHttpMethod(): string;
							getHeaders(): java.util.Map<string,string>;
							getQuery(): java.util.Map<string,string>;
							getRequestBody(): string;
							getResponseCode(): java.lang.Integer;
							getResponseHeaders(): java.util.Map<string,java.util.List<string>>;
							getResponseBody(): string;
							getErrorBody(): com.klaviyo.analytics.networking.requests.KlaviyoErrorResponse;
						});
						public constructor();
						public getStartTime(): java.lang.Long;
						public getResponseCode(): java.lang.Integer;
						public getErrorBody(): com.klaviyo.analytics.networking.requests.KlaviyoErrorResponse;
						public getUuid(): string;
						public getQueuedTime(): number;
						public getType(): string;
						public getRequestBody(): string;
						public getEndTime(): java.lang.Long;
						public getResponseHeaders(): java.util.Map<string,java.util.List<string>>;
						public getQuery(): java.util.Map<string,string>;
						public getState(): string;
						public getResponseBody(): string;
						public getHeaders(): java.util.Map<string,string>;
						public getAttempts(): number;
						public getHttpMethod(): string;
						public getUrl(): java.net.URL;
					}
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module networking {
				export module requests {
					export class EventApiRequest extends com.klaviyo.analytics.networking.requests.KlaviyoApiRequest {
						public static class: java.lang.Class<com.klaviyo.analytics.networking.requests.EventApiRequest>;
						public static PATH: string = "client/events/";
						public static METRIC: string = "metric";
						public static NAME: string = "name";
						public static VALUE: string = "value";
						public static TIME: string = "time";
						public getStartTime(): java.lang.Long;
						public getResponseCode(): java.lang.Integer;
						public getErrorBody(): com.klaviyo.analytics.networking.requests.KlaviyoErrorResponse;
						public getSuccessCodes(): any;
						public getUuid(): string;
						public getBody(): org.json.JSONObject;
						public getType(): string;
						public constructor(queuedTime: java.lang.Long, uuid: string);
						public getRequestBody(): string;
						public getResponseHeaders(): java.util.Map<string,java.util.List<string>>;
						public getState(): string;
						public setQuery(value: java.util.Map<string,string>): void;
						public constructor(urlPath: string, method: com.klaviyo.analytics.networking.requests.RequestMethod, queuedTime: java.lang.Long, uuid: string);
						public setBody(value: org.json.JSONObject): void;
						public getHttpMethod(): string;
						public getUrl(): java.net.URL;
						public constructor();
						public getQueuedTime(): number;
						public constructor(event: com.klaviyo.analytics.model.Event, profile: com.klaviyo.analytics.model.Profile);
						public getEndTime(): java.lang.Long;
						public getQuery(): java.util.Map<string,string>;
						public getResponseBody(): string;
						public getHeaders(): java.util.Map<string,string>;
						public setType(value: string): void;
						public getAttempts(): number;
					}
					export module EventApiRequest {
						export class Companion {
							public static class: java.lang.Class<com.klaviyo.analytics.networking.requests.EventApiRequest.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module networking {
				export module requests {
					export class HttpUtil {
						public static class: java.lang.Class<com.klaviyo.analytics.networking.requests.HttpUtil>;
						public static INSTANCE: com.klaviyo.analytics.networking.requests.HttpUtil;
						public writeToConnection(out: string, writer: java.net.HttpURLConnection): void;
						public openConnection(url: java.net.URL): java.net.HttpURLConnection;
					}
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module networking {
				export module requests {
					export class JSONUtil {
						public static class: java.lang.Class<com.klaviyo.analytics.networking.requests.JSONUtil>;
						public static INSTANCE: com.klaviyo.analytics.networking.requests.JSONUtil;
						public getStringNullable($this$getStringNullable: org.json.JSONObject, key: string): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module networking {
				export module requests {
					export class KlaviyoApiRequest extends com.klaviyo.analytics.networking.requests.ApiRequest {
						public static class: java.lang.Class<com.klaviyo.analytics.networking.requests.KlaviyoApiRequest>;
						public static DATA: string = "data";
						public static TYPE: string = "type";
						public static ATTRIBUTES: string = "attributes";
						public static PROPERTIES: string = "properties";
						public static COMPANY_ID: string = "company_id";
						public static PROFILE: string = "profile";
						public static EVENT: string = "event";
						public static PUSH_TOKEN: string = "push-token";
						public static UNREGISTER_PUSH_TOKEN: string = "push-token-unregister";
						public static HEADER_CONTENT: string = "Content-Type";
						public static HEADER_USER_AGENT: string = "User-Agent";
						public static HEADER_ACCEPT: string = "Accept";
						public static HEADER_REVISION: string = "Revision";
						public static HEADER_KLAVIYO_MOBILE: string = "X-Klaviyo-Mobile";
						public static HEADER_KLAVIYO_ATTEMPT: string = "X-Klaviyo-Attempt-Count";
						public static HEADER_RETRY_AFTER: string = "Retry-After";
						public static TYPE_JSON: string = "application/json";
						public static HTTP_OK: number = 200;
						public static HTTP_ACCEPTED: number = 202;
						public static HTTP_MULT_CHOICE: number = 300;
						public static HTTP_RETRY: number = 429;
						public static HTTP_UNAVAILABLE: number = 503;
						public static HTTP_BAD_REQUEST: number = 400;
						public static TYPE_JSON_KEY: string = "request_type";
						public static PATH_JSON_KEY: string = "url_path";
						public static METHOD_JSON_KEY: string = "method";
						public static TIME_JSON_KEY: string = "time";
						public static UUID_JSON_KEY: string = "uuid";
						public static HEADERS_JSON_KEY: string = "headers";
						public static QUERY_JSON_KEY: string = "query";
						public static BODY_JSON_KEY: string = "body";
						public replaceAllWith($this$replaceAllWith_u24lambda_u244: java.util.Map<any,any>, this_: java.util.Map<any,any>): java.util.Map<any,any>;
						public getStartTime(): java.lang.Long;
						public getResponseCode(): java.lang.Integer;
						public getErrorBody(): com.klaviyo.analytics.networking.requests.KlaviyoErrorResponse;
						public equals(other: any): boolean;
						public getUuid(): string;
						public getSuccessCodes(): any;
						public setEndTime(value: java.lang.Long): void;
						public getBody(): org.json.JSONObject;
						public getType(): string;
						public getUrlPath(): string;
						public hashCode(): number;
						public getRequestBody(): string;
						public getResponseHeaders(): java.util.Map<string,java.util.List<string>>;
						public getState(): string;
						public computeRetryInterval(): number;
						public send(ex: any): com.klaviyo.analytics.networking.requests.KlaviyoApiRequest.Status;
						public setQuery(value: java.util.Map<string,string>): void;
						public constructor(urlPath: string, method: com.klaviyo.analytics.networking.requests.RequestMethod, queuedTime: java.lang.Long, uuid: string);
						public setStartTime(value: java.lang.Long): void;
						public setBody(value: org.json.JSONObject): void;
						public getStatus(): com.klaviyo.analytics.networking.requests.KlaviyoApiRequest.Status;
						public getHttpMethod(): string;
						public getUrl(): java.net.URL;
						public setResponseHeaders(value: java.util.Map<string,any>): void;
						public getQueuedTime(): number;
						public getMethod(): com.klaviyo.analytics.networking.requests.RequestMethod;
						public setResponseCode(value: java.lang.Integer): void;
						public toString(): string;
						public getEndTime(): java.lang.Long;
						public setResponseBody(value: string): void;
						public getQuery(): java.util.Map<string,string>;
						public toJson(): org.json.JSONObject;
						public getResponseBody(): string;
						public getHeaders(): java.util.Map<string,string>;
						public getAttempts(): number;
						public parseResponse(it: java.net.HttpURLConnection): com.klaviyo.analytics.networking.requests.KlaviyoApiRequest.Status;
					}
					export module KlaviyoApiRequest {
						export class Companion {
							public static class: java.lang.Class<com.klaviyo.analytics.networking.requests.KlaviyoApiRequest.Companion>;
							public filteredMapOf(value: androidNative.Array<any>, entry: boolean): java.util.Map<any,any>;
							public jsonMapOf(pairs: androidNative.Array<any>): org.json.JSONObject;
						}
						export class Status {
							public static class: java.lang.Class<com.klaviyo.analytics.networking.requests.KlaviyoApiRequest.Status>;
							public static Unsent: com.klaviyo.analytics.networking.requests.KlaviyoApiRequest.Status;
							public static Inflight: com.klaviyo.analytics.networking.requests.KlaviyoApiRequest.Status;
							public static PendingRetry: com.klaviyo.analytics.networking.requests.KlaviyoApiRequest.Status;
							public static Complete: com.klaviyo.analytics.networking.requests.KlaviyoApiRequest.Status;
							public static Failed: com.klaviyo.analytics.networking.requests.KlaviyoApiRequest.Status;
							public static values(): androidNative.Array<com.klaviyo.analytics.networking.requests.KlaviyoApiRequest.Status>;
							public static valueOf(value: string): com.klaviyo.analytics.networking.requests.KlaviyoApiRequest.Status;
							public static getEntries(): any;
						}
						export class WhenMappings {
							public static class: java.lang.Class<com.klaviyo.analytics.networking.requests.KlaviyoApiRequest.WhenMappings>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module networking {
				export module requests {
					export class KlaviyoApiRequestDecoder {
						public static class: java.lang.Class<com.klaviyo.analytics.networking.requests.KlaviyoApiRequestDecoder>;
						public static INSTANCE: com.klaviyo.analytics.networking.requests.KlaviyoApiRequestDecoder;
						public fromJson$analytics_release(k: org.json.JSONObject): com.klaviyo.analytics.networking.requests.KlaviyoApiRequest;
					}
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module networking {
				export module requests {
					export class KlaviyoError {
						public static class: java.lang.Class<com.klaviyo.analytics.networking.requests.KlaviyoError>;
						public component3(): string;
						public equals(other: any): boolean;
						public constructor();
						public component5(): com.klaviyo.analytics.networking.requests.KlaviyoErrorSource;
						public getSource(): com.klaviyo.analytics.networking.requests.KlaviyoErrorSource;
						public component1(): string;
						public hashCode(): number;
						public component2(): java.lang.Integer;
						public toString(): string;
						public getTitle(): string;
						public constructor(id: string, status: java.lang.Integer, title: string, detail: string, source: com.klaviyo.analytics.networking.requests.KlaviyoErrorSource);
						public component4(): string;
						public copy(id: string, status: java.lang.Integer, title: string, detail: string, source: com.klaviyo.analytics.networking.requests.KlaviyoErrorSource): com.klaviyo.analytics.networking.requests.KlaviyoError;
						public getId(): string;
						public getStatus(): java.lang.Integer;
						public getDetail(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module networking {
				export module requests {
					export class KlaviyoErrorResponse {
						public static class: java.lang.Class<com.klaviyo.analytics.networking.requests.KlaviyoErrorResponse>;
						public static ERRORS: string = "errors";
						public static ID: string = "id";
						public static STATUS: string = "status";
						public static TITLE: string = "title";
						public static DETAIL: string = "detail";
						public static SOURCE: string = "source";
						public static POINTER: string = "pointer";
						public static INVALID_INPUT_TITLE: string = "Invalid input.";
						public equals(other: any): boolean;
						public copy(errors: java.util.List<com.klaviyo.analytics.networking.requests.KlaviyoError>): com.klaviyo.analytics.networking.requests.KlaviyoErrorResponse;
						public hashCode(): number;
						public constructor(errors: java.util.List<com.klaviyo.analytics.networking.requests.KlaviyoError>);
						public component1(): java.util.List<com.klaviyo.analytics.networking.requests.KlaviyoError>;
						public toString(): string;
						public getErrors(): java.util.List<com.klaviyo.analytics.networking.requests.KlaviyoError>;
					}
					export module KlaviyoErrorResponse {
						export class Companion {
							public static class: java.lang.Class<com.klaviyo.analytics.networking.requests.KlaviyoErrorResponse.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module networking {
				export module requests {
					export class KlaviyoErrorResponseDecoder {
						public static class: java.lang.Class<com.klaviyo.analytics.networking.requests.KlaviyoErrorResponseDecoder>;
						public static INSTANCE: com.klaviyo.analytics.networking.requests.KlaviyoErrorResponseDecoder;
						public fromJson$analytics_release(value: org.json.JSONObject): com.klaviyo.analytics.networking.requests.KlaviyoErrorResponse;
					}
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module networking {
				export module requests {
					export class KlaviyoErrorSource {
						public static class: java.lang.Class<com.klaviyo.analytics.networking.requests.KlaviyoErrorSource>;
						public static EMAIL_PATH: string = "attributes/email";
						public static PHONE_NUMBER_PATH: string = "attributes/phone_number";
						public equals(other: any): boolean;
						public constructor();
						public copy(pointer: string): com.klaviyo.analytics.networking.requests.KlaviyoErrorSource;
						public component1(): string;
						public hashCode(): number;
						public getPointer(): string;
						public constructor(pointer: string);
						public toString(): string;
					}
					export module KlaviyoErrorSource {
						export class Companion {
							public static class: java.lang.Class<com.klaviyo.analytics.networking.requests.KlaviyoErrorSource.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module networking {
				export module requests {
					export class ProfileApiRequest extends com.klaviyo.analytics.networking.requests.KlaviyoApiRequest {
						public static class: java.lang.Class<com.klaviyo.analytics.networking.requests.ProfileApiRequest>;
						public constructor();
						public getStartTime(): java.lang.Long;
						public getResponseCode(): java.lang.Integer;
						public getErrorBody(): com.klaviyo.analytics.networking.requests.KlaviyoErrorResponse;
						public getSuccessCodes(): any;
						public getUuid(): string;
						public getQueuedTime(): number;
						public getType(): string;
						public constructor(queuedTime: java.lang.Long, uuid: string);
						public getRequestBody(): string;
						public getEndTime(): java.lang.Long;
						public getResponseHeaders(): java.util.Map<string,java.util.List<string>>;
						public getQuery(): java.util.Map<string,string>;
						public getState(): string;
						public getResponseBody(): string;
						public getHeaders(): java.util.Map<string,string>;
						public setType(value: string): void;
						public setQuery(value: java.util.Map<string,string>): void;
						public constructor(urlPath: string, method: com.klaviyo.analytics.networking.requests.RequestMethod, queuedTime: java.lang.Long, uuid: string);
						public constructor(profile: com.klaviyo.analytics.model.Profile);
						public getAttempts(): number;
						public getHttpMethod(): string;
						public getUrl(): java.net.URL;
					}
					export module ProfileApiRequest {
						export class Companion {
							public static class: java.lang.Class<com.klaviyo.analytics.networking.requests.ProfileApiRequest.Companion>;
							public formatBody(this_: com.klaviyo.analytics.model.Profile): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module networking {
				export module requests {
					export class PushTokenApiRequest extends com.klaviyo.analytics.networking.requests.KlaviyoApiRequest {
						public static class: java.lang.Class<com.klaviyo.analytics.networking.requests.PushTokenApiRequest>;
						public static PATH: string = "client/push-tokens";
						public static METADATA: string = "device_metadata";
						public static TOKEN: string = "token";
						public static PLATFORM: string = "platform";
						public static VENDOR: string = "vendor";
						public static VENDOR_FCM: string = "FCM";
						public static ENABLEMENT_STATUS: string = "enablement_status";
						public static NOTIFICATIONS_ENABLED: string = "AUTHORIZED";
						public static NOTIFICATIONS_DISABLED: string = "UNAUTHORIZED";
						public static BACKGROUND: string = "background";
						public static BG_AVAILABLE: string = "AVAILABLE";
						public static BG_UNAVAILABLE: string = "DENIED";
						public equals(other: any): boolean;
						public constructor();
						public getStartTime(): java.lang.Long;
						public getResponseCode(): java.lang.Integer;
						public getErrorBody(): com.klaviyo.analytics.networking.requests.KlaviyoErrorResponse;
						public getSuccessCodes(): any;
						public getUuid(): string;
						public getQueuedTime(): number;
						public getType(): string;
						public constructor(queuedTime: java.lang.Long, uuid: string);
						public hashCode(): number;
						public getRequestBody(): string;
						public getEndTime(): java.lang.Long;
						public getResponseHeaders(): java.util.Map<string,java.util.List<string>>;
						public getQuery(): java.util.Map<string,string>;
						public getState(): string;
						public getResponseBody(): string;
						public constructor(token: string, profile: com.klaviyo.analytics.model.Profile);
						public getHeaders(): java.util.Map<string,string>;
						public setQuery(value: java.util.Map<string,string>): void;
						public constructor(urlPath: string, method: com.klaviyo.analytics.networking.requests.RequestMethod, queuedTime: java.lang.Long, uuid: string);
						public getAttempts(): number;
						public getHttpMethod(): string;
						public getUrl(): java.net.URL;
					}
					export module PushTokenApiRequest {
						export class Companion {
							public static class: java.lang.Class<com.klaviyo.analytics.networking.requests.PushTokenApiRequest.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module networking {
				export module requests {
					export class RequestMethod {
						public static class: java.lang.Class<com.klaviyo.analytics.networking.requests.RequestMethod>;
						public static GET: com.klaviyo.analytics.networking.requests.RequestMethod;
						public static POST: com.klaviyo.analytics.networking.requests.RequestMethod;
						public static getEntries(): any;
						public static values(): androidNative.Array<com.klaviyo.analytics.networking.requests.RequestMethod>;
						public static valueOf(value: string): com.klaviyo.analytics.networking.requests.RequestMethod;
					}
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module networking {
				export module requests {
					export class UnregisterPushTokenApiRequest extends com.klaviyo.analytics.networking.requests.KlaviyoApiRequest {
						public static class: java.lang.Class<com.klaviyo.analytics.networking.requests.UnregisterPushTokenApiRequest>;
						public static PATH: string = "client/push-token-unregister";
						public static TOKEN: string = "token";
						public static PLATFORM: string = "platform";
						public static VENDOR: string = "vendor";
						public static VENDOR_FCM: string = "FCM";
						public equals(other: any): boolean;
						public getStartTime(): java.lang.Long;
						public getResponseCode(): java.lang.Integer;
						public getErrorBody(): com.klaviyo.analytics.networking.requests.KlaviyoErrorResponse;
						public getSuccessCodes(): any;
						public getUuid(): string;
						public getQueuedTime(): number;
						public getType(): string;
						public constructor(queuedTime: java.lang.Long, uuid: string);
						public hashCode(): number;
						public getRequestBody(): string;
						public getEndTime(): java.lang.Long;
						public getResponseHeaders(): java.util.Map<string,java.util.List<string>>;
						public getQuery(): java.util.Map<string,string>;
						public getState(): string;
						public getResponseBody(): string;
						public getHeaders(): java.util.Map<string,string>;
						public constructor(apiKey: string, token: string, profile: com.klaviyo.analytics.model.Profile);
						public setQuery(value: java.util.Map<string,string>): void;
						public constructor(urlPath: string, method: com.klaviyo.analytics.networking.requests.RequestMethod, queuedTime: java.lang.Long, uuid: string);
						public getAttempts(): number;
						public getHttpMethod(): string;
						public getUrl(): java.net.URL;
					}
					export module UnregisterPushTokenApiRequest {
						export class Companion {
							public static class: java.lang.Class<com.klaviyo.analytics.networking.requests.UnregisterPushTokenApiRequest.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module state {
				export class KlaviyoState extends com.klaviyo.analytics.state.State {
					public static class: java.lang.Class<com.klaviyo.analytics.state.KlaviyoState>;
					public setPhoneNumber(value: string): void;
					public setPushToken(param0: string): void;
					public setExternalId(value: string): void;
					public setPushState(value: string): void;
					public setEmail(value: string): void;
					public offStateChange(param0: any): void;
					public getApiKey(): string;
					public resetPhoneNumber$analytics_release(): void;
					public getAsProfile(param0: boolean): com.klaviyo.analytics.model.Profile;
					public getAsProfile(it: boolean): com.klaviyo.analytics.model.Profile;
					public constructor();
					public resetAttributes(): void;
					public getPushToken(): string;
					public setApiKey(param0: string): void;
					public getEmail(): string;
					public onStateChange(param0: any): void;
					public setAttribute(param0: com.klaviyo.analytics.model.ProfileKey, param1: java.io.Serializable): void;
					public getAnonymousId(): string;
					public reset(): void;
					public getPushState(): string;
					public offStateChange(observer: any): void;
					public setExternalId(param0: string): void;
					public setPhoneNumber(param0: string): void;
					public onStateChange(observer: any): void;
					public resetEmail$analytics_release(): void;
					public setPushState(param0: string): void;
					public setApiKey(value: string): void;
					public setAttribute(it: com.klaviyo.analytics.model.ProfileKey, value: java.io.Serializable): void;
					public getExternalId(): string;
					public setProfile(param0: com.klaviyo.analytics.model.Profile): void;
					public getPhoneNumber(): string;
					public setProfile(profile: com.klaviyo.analytics.model.Profile): void;
					public setPushToken(it: string): void;
					public setEmail(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module state {
				export class PersistentObservableProfile extends com.klaviyo.analytics.state.PersistentObservableProperty<com.klaviyo.analytics.model.ImmutableProfile> {
					public static class: java.lang.Class<com.klaviyo.analytics.state.PersistentObservableProfile>;
					public constructor(key: com.klaviyo.analytics.model.Keyword, fallback: any, onChanged: any);
					public constructor(key: com.klaviyo.analytics.model.Keyword, onChanged: any);
					public deserialize(param0: string): any;
					public deserialize(it: string): com.klaviyo.analytics.model.ImmutableProfile;
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module state {
				export abstract class PersistentObservableProperty<T>  extends any {
					public static class: java.lang.Class<com.klaviyo.analytics.state.PersistentObservableProperty<any>>;
					public validateChange(oldValue: any, newValue: any): boolean;
					public constructor(key: com.klaviyo.analytics.model.Keyword, fallback: any, onChanged: any);
					public setValue(this_: any, thisRef: any, property: any): void;
					public reset(): void;
					public deserialize(param0: string): any;
					public getValue(thisRef: any, property: any): any;
					public getKey(): com.klaviyo.analytics.model.Keyword;
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module state {
				export class PersistentObservableString extends com.klaviyo.analytics.state.PersistentObservableProperty<string> {
					public static class: java.lang.Class<com.klaviyo.analytics.state.PersistentObservableString>;
					public validateChange(oldValue: any, newValue: any): boolean;
					public constructor(key: com.klaviyo.analytics.model.Keyword, fallback: any, onChanged: any);
					public setValue(this_: any, thisRef: any, property: any): void;
					public validateChange(oldValue: string, newValue: string): boolean;
					public setValue(this_: any, thisRef: any, property: string): void;
					public deserialize(param0: string): any;
					public constructor(key: com.klaviyo.analytics.model.Keyword, onChanged: any, fallback: any);
					public deserialize(storedValue: string): string;
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module state {
				export class State {
					public static class: java.lang.Class<com.klaviyo.analytics.state.State>;
					/**
					 * Constructs a new instance of the com.klaviyo.analytics.state.State interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getApiKey(): string;
						setApiKey(param0: string): void;
						getExternalId(): string;
						setExternalId(param0: string): void;
						getEmail(): string;
						setEmail(param0: string): void;
						getPhoneNumber(): string;
						setPhoneNumber(param0: string): void;
						getAnonymousId(): string;
						getPushToken(): string;
						setPushToken(param0: string): void;
						getPushState(): string;
						setPushState(param0: string): void;
						onStateChange(param0: any): void;
						offStateChange(param0: any): void;
						getAsProfile(param0: boolean): com.klaviyo.analytics.model.Profile;
						setProfile(param0: com.klaviyo.analytics.model.Profile): void;
						setAttribute(param0: com.klaviyo.analytics.model.ProfileKey, param1: java.io.Serializable): void;
						reset(): void;
						resetAttributes(): void;
					});
					public constructor();
					public getAnonymousId(): string;
					public setPushToken(param0: string): void;
					public reset(): void;
					public setExternalId(param0: string): void;
					public setPhoneNumber(param0: string): void;
					public getPushState(): string;
					public setPushState(param0: string): void;
					public offStateChange(param0: any): void;
					public getApiKey(): string;
					public getAsProfile(param0: boolean): com.klaviyo.analytics.model.Profile;
					public getExternalId(): string;
					public setProfile(param0: com.klaviyo.analytics.model.Profile): void;
					public resetAttributes(): void;
					public getPhoneNumber(): string;
					public getPushToken(): string;
					public setApiKey(param0: string): void;
					public getEmail(): string;
					public setEmail(param0: string): void;
					public onStateChange(param0: any): void;
					public setAttribute(param0: com.klaviyo.analytics.model.ProfileKey, param1: java.io.Serializable): void;
				}
				export module State {
					export class DefaultImpls {
						public static class: java.lang.Class<com.klaviyo.analytics.state.State.DefaultImpls>;
					}
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module analytics {
			export module state {
				export class StateSideEffects {
					public static class: java.lang.Class<com.klaviyo.analytics.state.StateSideEffects>;
					public constructor();
					public detach(): void;
					public constructor(state: com.klaviyo.analytics.state.State, apiClient: com.klaviyo.analytics.networking.ApiClient, lifecycleMonitor: com.klaviyo.core.lifecycle.LifecycleMonitor);
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module core {
			export class BuildConfig {
				public static class: java.lang.Class<com.klaviyo.core.BuildConfig>;
				public static DEBUG: boolean = 0;
				public static LIBRARY_PACKAGE_NAME: string = "com.klaviyo.core";
				public static BUILD_TYPE: string = "release";
				public static KLAVIYO_API_REVISION: string = "2024-10-15";
				public static KLAVIYO_ASSET_SOURCE: string = "";
				public static KLAVIYO_CDN_URL: string = "https://static.klaviyo.com";
				public static KLAVIYO_SERVER_URL: string = "https://a.klaviyo.com";
				public constructor();
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module core {
			export class DeviceProperties {
				public static class: java.lang.Class<com.klaviyo.core.DeviceProperties>;
				public static INSTANCE: com.klaviyo.core.DeviceProperties;
				public getSdkName(): string;
				public getApplicationLabel(): string;
				public getOsVersion(): string;
				public getModel(): string;
				public getDeviceId(): string;
				public getAppVersionCode(): string;
				public getBackgroundDataEnabled(): boolean;
				public getEnvironment(): string;
				public getManufacturer(): string;
				public getAppVersion(): string;
				public getSdkVersion(): string;
				public getNotificationPermissionGranted(): boolean;
				public getPlatform(): string;
				public getApplicationId(): string;
				public getUserAgent(): string;
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module core {
			export class InvalidRegistration extends com.klaviyo.core.KlaviyoException {
				public static class: java.lang.Class<com.klaviyo.core.InvalidRegistration>;
				public constructor(message: string);
				public constructor(type: any);
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module core {
			export class KLog extends com.klaviyo.core.config.Log {
				public static class: java.lang.Class<com.klaviyo.core.KLog>;
				public static INSTANCE: com.klaviyo.core.KLog;
				public verbose(param0: string, param1: java.lang.Throwable): void;
				public warning(param0: string, param1: java.lang.Throwable): void;
				public getLogLevel(): com.klaviyo.core.config.Log.Level;
				public error(message: string, ex: java.lang.Throwable): void;
				public debug(param0: string, param1: java.lang.Throwable): void;
				public wtf(param0: string, param1: java.lang.Throwable): void;
				public warning(message: string, ex: java.lang.Throwable): void;
				public setLogLevel(value: com.klaviyo.core.config.Log.Level): void;
				public error(param0: string, param1: java.lang.Throwable): void;
				public verbose(message: string, ex: java.lang.Throwable): void;
				public debug(message: string, ex: java.lang.Throwable): void;
				public info(message: string, ex: java.lang.Throwable): void;
				public info(param0: string, param1: java.lang.Throwable): void;
				public wtf(message: string, ex: java.lang.Throwable): void;
				public log(msg: string, level: com.klaviyo.core.config.Log.Level, ex: java.lang.Throwable): void;
				public setLogLevel(param0: com.klaviyo.core.config.Log.Level): void;
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module core {
			export abstract class KlaviyoException {
				public static class: java.lang.Class<com.klaviyo.core.KlaviyoException>;
				public constructor(message: string);
				public getMessage(): string;
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module core {
			export module LogLevelKt {
				export class WhenMappings {
					public static class: java.lang.Class<com.klaviyo.core.LogLevelKt.WhenMappings>;
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module core {
			export class MissingConfig extends com.klaviyo.core.KlaviyoException {
				public static class: java.lang.Class<com.klaviyo.core.MissingConfig>;
				public constructor(message: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module core {
			export class MissingRegistration extends com.klaviyo.core.KlaviyoException {
				public static class: java.lang.Class<com.klaviyo.core.MissingRegistration>;
				public constructor(message: string);
				public constructor(type: any);
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module core {
			export class Registry {
				public static class: java.lang.Class<com.klaviyo.core.Registry>;
				public static INSTANCE: com.klaviyo.core.Registry;
				public getLog(): com.klaviyo.core.config.Log;
				public getRegistry(): java.util.Map<any,any>;
				public getConfig(): com.klaviyo.core.config.Config;
				public getNetworkMonitor(): com.klaviyo.core.networking.NetworkMonitor;
				public getLifecycleCallbacks(): globalAndroid.app.Application.ActivityLifecycleCallbacks;
				public getConfigBuilder(): com.klaviyo.core.config.Config.Builder;
				public getServices(): java.util.Map<any,any>;
				public getLifecycleMonitor(): com.klaviyo.core.lifecycle.LifecycleMonitor;
				public getDataStore(): com.klaviyo.core.model.DataStore;
				public getClock(): com.klaviyo.core.config.Clock;
				public getComponentCallbacks(): globalAndroid.content.ComponentCallbacks;
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module core {
			export module config {
				export class Clock {
					public static class: java.lang.Class<com.klaviyo.core.config.Clock>;
					/**
					 * Constructs a new instance of the com.klaviyo.core.config.Clock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						currentTimeMillis(): number;
						isoTime(param0: number): string;
						schedule(param0: number, param1: any): com.klaviyo.core.config.Clock.Cancellable;
					});
					public constructor();
					public schedule(param0: number, param1: any): com.klaviyo.core.config.Clock.Cancellable;
					public currentTimeMillis(): number;
					public isoTime(param0: number): string;
				}
				export module Clock {
					export class Cancellable {
						public static class: java.lang.Class<com.klaviyo.core.config.Clock.Cancellable>;
						/**
						 * Constructs a new instance of the com.klaviyo.core.config.Clock$Cancellable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							runNow(): void;
							cancel(): boolean;
						});
						public constructor();
						public runNow(): void;
						public cancel(): boolean;
					}
					export class DefaultImpls {
						public static class: java.lang.Class<com.klaviyo.core.config.Clock.DefaultImpls>;
					}
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module core {
			export module config {
				export class Config {
					public static class: java.lang.Class<com.klaviyo.core.config.Config>;
					/**
					 * Constructs a new instance of the com.klaviyo.core.config.Config interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isDebugBuild(): boolean;
						getBaseUrl(): string;
						getApiRevision(): string;
						getBaseCdnUrl(): string;
						getAssetSource(): string;
						getSdkName(): string;
						getSdkVersion(): string;
						getApiKey(): string;
						getApplicationContext(): globalAndroid.content.Context;
						getDebounceInterval(): number;
						getNetworkTimeout(): number;
						getNetworkFlushIntervals(): androidNative.Array<number>;
						getNetworkFlushDepth(): number;
						getNetworkMaxAttempts(): number;
						getNetworkMaxRetryInterval(): number;
						getNetworkJitterRange(): any;
						getManifestInt(param0: string, param1: number): number;
					});
					public constructor();
					public getBaseUrl(): string;
					public getApiRevision(): string;
					public getApplicationContext(): globalAndroid.content.Context;
					public getDebounceInterval(): number;
					public getNetworkMaxRetryInterval(): number;
					public isDebugBuild(): boolean;
					public getSdkName(): string;
					public getNetworkFlushIntervals(): androidNative.Array<number>;
					public getApiKey(): string;
					public getAssetSource(): string;
					public getNetworkJitterRange(): any;
					public getManifestInt(param0: string, param1: number): number;
					public getSdkVersion(): string;
					public getBaseCdnUrl(): string;
					public getNetworkMaxAttempts(): number;
					public getNetworkFlushDepth(): number;
					public getNetworkTimeout(): number;
				}
				export module Config {
					export class Builder {
						public static class: java.lang.Class<com.klaviyo.core.config.Config.Builder>;
						/**
						 * Constructs a new instance of the com.klaviyo.core.config.Config$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							apiKey(param0: string): com.klaviyo.core.config.Config.Builder;
							applicationContext(param0: globalAndroid.content.Context): com.klaviyo.core.config.Config.Builder;
							baseUrl(param0: string): com.klaviyo.core.config.Config.Builder;
							baseCdnUrl(param0: string): com.klaviyo.core.config.Config.Builder;
							assetSource(param0: string): com.klaviyo.core.config.Config.Builder;
							apiRevision(param0: string): com.klaviyo.core.config.Config.Builder;
							debounceInterval(param0: number): com.klaviyo.core.config.Config.Builder;
							networkTimeout(param0: number): com.klaviyo.core.config.Config.Builder;
							networkFlushInterval(param0: number, param1: com.klaviyo.core.networking.NetworkMonitor.NetworkType): com.klaviyo.core.config.Config.Builder;
							networkFlushDepth(param0: number): com.klaviyo.core.config.Config.Builder;
							networkMaxAttempts(param0: number): com.klaviyo.core.config.Config.Builder;
							networkMaxRetryInterval(param0: number): com.klaviyo.core.config.Config.Builder;
							build(): com.klaviyo.core.config.Config;
						});
						public constructor();
						public apiRevision(param0: string): com.klaviyo.core.config.Config.Builder;
						public baseCdnUrl(param0: string): com.klaviyo.core.config.Config.Builder;
						public networkMaxAttempts(param0: number): com.klaviyo.core.config.Config.Builder;
						public networkFlushInterval(param0: number, param1: com.klaviyo.core.networking.NetworkMonitor.NetworkType): com.klaviyo.core.config.Config.Builder;
						public baseUrl(param0: string): com.klaviyo.core.config.Config.Builder;
						public networkFlushDepth(param0: number): com.klaviyo.core.config.Config.Builder;
						public networkMaxRetryInterval(param0: number): com.klaviyo.core.config.Config.Builder;
						public applicationContext(param0: globalAndroid.content.Context): com.klaviyo.core.config.Config.Builder;
						public apiKey(param0: string): com.klaviyo.core.config.Config.Builder;
						public assetSource(param0: string): com.klaviyo.core.config.Config.Builder;
						public build(): com.klaviyo.core.config.Config;
						public networkTimeout(param0: number): com.klaviyo.core.config.Config.Builder;
						public debounceInterval(param0: number): com.klaviyo.core.config.Config.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module core {
			export module config {
				export class KlaviyoConfig extends com.klaviyo.core.config.Config {
					public static class: java.lang.Class<com.klaviyo.core.config.KlaviyoConfig>;
					public static INSTANCE: com.klaviyo.core.config.KlaviyoConfig;
					public getBaseUrl(): string;
					public getApiRevision(): string;
					public getApplicationContext(): globalAndroid.content.Context;
					public getDebounceInterval(): number;
					public getNetworkMaxRetryInterval(): number;
					public isDebugBuild(): boolean;
					public getSdkName(): string;
					public getNetworkFlushIntervals(): androidNative.Array<number>;
					public getApiKey(): string;
					public getManifestInt(key: string, defaultValue: number): number;
					public getAssetSource(): string;
					public getNetworkJitterRange(): any;
					public getManifestInt(param0: string, param1: number): number;
					public getSdkVersion(): string;
					public getBaseCdnUrl(): string;
					public getNetworkMaxAttempts(): number;
					public getNetworkFlushDepth(): number;
					public getNetworkTimeout(): number;
				}
				export module KlaviyoConfig {
					export class Builder extends com.klaviyo.core.config.Config.Builder {
						public static class: java.lang.Class<com.klaviyo.core.config.KlaviyoConfig.Builder>;
						public baseCdnUrl($this$baseCdnUrl_u24lambda_u244: string): com.klaviyo.core.config.Config.Builder;
						public networkFlushInterval(param0: number, param1: com.klaviyo.core.networking.NetworkMonitor.NetworkType): com.klaviyo.core.config.Config.Builder;
						public apiKey($this$apiKey_u24lambda_u240: string): com.klaviyo.core.config.KlaviyoConfig.Builder;
						public apiRevision($this$apiRevision_u24lambda_u243: string): com.klaviyo.core.config.Config.Builder;
						public baseUrl(param0: string): com.klaviyo.core.config.Config.Builder;
						public applicationContext($this$applicationContext_u24lambda_u241: globalAndroid.content.Context): com.klaviyo.core.config.KlaviyoConfig.Builder;
						public networkMaxAttempts($this$networkMaxAttempts_u24lambda_u2410: number): com.klaviyo.core.config.KlaviyoConfig.Builder;
						public networkFlushDepth(param0: number): com.klaviyo.core.config.Config.Builder;
						public networkMaxRetryInterval($this$networkMaxRetryInterval_u24lambda_u2411: number): com.klaviyo.core.config.KlaviyoConfig.Builder;
						public debounceInterval($this$debounceInterval_u24lambda_u246: number): com.klaviyo.core.config.KlaviyoConfig.Builder;
						public apiKey(param0: string): com.klaviyo.core.config.Config.Builder;
						public baseUrl($this$baseUrl_u24lambda_u242: string): com.klaviyo.core.config.Config.Builder;
						public assetSource($this$assetSource_u24lambda_u245: string): com.klaviyo.core.config.Config.Builder;
						public debounceInterval(param0: number): com.klaviyo.core.config.Config.Builder;
						public constructor();
						public apiRevision(param0: string): com.klaviyo.core.config.Config.Builder;
						public baseCdnUrl(param0: string): com.klaviyo.core.config.Config.Builder;
						public networkMaxAttempts(param0: number): com.klaviyo.core.config.Config.Builder;
						public networkFlushDepth($this$networkFlushDepth_u24lambda_u249: number): com.klaviyo.core.config.KlaviyoConfig.Builder;
						public networkTimeout($this$networkTimeout_u24lambda_u247: number): com.klaviyo.core.config.KlaviyoConfig.Builder;
						public networkMaxRetryInterval(param0: number): com.klaviyo.core.config.Config.Builder;
						public applicationContext(param0: globalAndroid.content.Context): com.klaviyo.core.config.Config.Builder;
						public build(): com.klaviyo.core.config.Config;
						public assetSource(param0: string): com.klaviyo.core.config.Config.Builder;
						public networkTimeout(param0: number): com.klaviyo.core.config.Config.Builder;
						public networkFlushInterval($this$networkFlushInterval_u24lambda_u248: number, this_: com.klaviyo.core.networking.NetworkMonitor.NetworkType): com.klaviyo.core.config.KlaviyoConfig.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module core {
			export module config {
				export class LifecycleException extends com.klaviyo.core.KlaviyoException {
					public static class: java.lang.Class<com.klaviyo.core.config.LifecycleException>;
					public constructor(message: string);
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module core {
			export module config {
				export class Log {
					public static class: java.lang.Class<com.klaviyo.core.config.Log>;
					/**
					 * Constructs a new instance of the com.klaviyo.core.config.Log interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getLogLevel(): com.klaviyo.core.config.Log.Level;
						setLogLevel(param0: com.klaviyo.core.config.Log.Level): void;
						verbose(param0: string, param1: java.lang.Throwable): void;
						debug(param0: string, param1: java.lang.Throwable): void;
						info(param0: string, param1: java.lang.Throwable): void;
						warning(param0: string, param1: java.lang.Throwable): void;
						error(param0: string, param1: java.lang.Throwable): void;
						wtf(param0: string, param1: java.lang.Throwable): void;
					});
					public constructor();
					public debug(param0: string, param1: java.lang.Throwable): void;
					public warning(param0: string, param1: java.lang.Throwable): void;
					public wtf(param0: string, param1: java.lang.Throwable): void;
					public error(param0: string, param1: java.lang.Throwable): void;
					public getLogLevel(): com.klaviyo.core.config.Log.Level;
					public setLogLevel(param0: com.klaviyo.core.config.Log.Level): void;
					public verbose(param0: string, param1: java.lang.Throwable): void;
					public info(param0: string, param1: java.lang.Throwable): void;
				}
				export module Log {
					export class DefaultImpls {
						public static class: java.lang.Class<com.klaviyo.core.config.Log.DefaultImpls>;
					}
					export class Level {
						public static class: java.lang.Class<com.klaviyo.core.config.Log.Level>;
						public static None: com.klaviyo.core.config.Log.Level;
						public static Verbose: com.klaviyo.core.config.Log.Level;
						public static Debug: com.klaviyo.core.config.Log.Level;
						public static Info: com.klaviyo.core.config.Log.Level;
						public static Warning: com.klaviyo.core.config.Log.Level;
						public static Error: com.klaviyo.core.config.Log.Level;
						public static Assert: com.klaviyo.core.config.Log.Level;
						public static getEntries(): any;
						public static valueOf(value: string): com.klaviyo.core.config.Log.Level;
						public static values(): androidNative.Array<com.klaviyo.core.config.Log.Level>;
					}
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module core {
			export module config {
				export class MissingAPIKey extends com.klaviyo.core.KlaviyoException {
					public static class: java.lang.Class<com.klaviyo.core.config.MissingAPIKey>;
					public constructor(message: string);
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module core {
			export module config {
				export class MissingContext extends com.klaviyo.core.KlaviyoException {
					public static class: java.lang.Class<com.klaviyo.core.config.MissingContext>;
					public constructor(message: string);
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module core {
			export module config {
				export class MissingPermission extends com.klaviyo.core.KlaviyoException {
					public static class: java.lang.Class<com.klaviyo.core.config.MissingPermission>;
					public constructor(permission: string);
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module core {
			export module config {
				export class SystemClock extends com.klaviyo.core.config.Clock {
					public static class: java.lang.Class<com.klaviyo.core.config.SystemClock>;
					public static INSTANCE: com.klaviyo.core.config.SystemClock;
					public isoTime(milliseconds: number): string;
					public schedule(param0: number, param1: any): com.klaviyo.core.config.Clock.Cancellable;
					public currentTimeMillis(): number;
					public schedule(timer: number, this_: any): com.klaviyo.core.config.Clock.Cancellable;
					public isoTime(param0: number): string;
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module core {
			export module lifecycle {
				export abstract class ActivityEvent {
					public static class: java.lang.Class<com.klaviyo.core.lifecycle.ActivityEvent>;
					public getBundle(): globalAndroid.os.Bundle;
					public getType(): string;
					public getActivity(): globalAndroid.app.Activity;
				}
				export module ActivityEvent {
					export class AllStopped extends com.klaviyo.core.lifecycle.ActivityEvent {
						public static class: java.lang.Class<com.klaviyo.core.lifecycle.ActivityEvent.AllStopped>;
						public constructor();
					}
					export class ConfigurationChanged extends com.klaviyo.core.lifecycle.ActivityEvent {
						public static class: java.lang.Class<com.klaviyo.core.lifecycle.ActivityEvent.ConfigurationChanged>;
						public getNewConfig(): globalAndroid.content.res.Configuration;
						public constructor(newConfig: globalAndroid.content.res.Configuration);
					}
					export class Created extends com.klaviyo.core.lifecycle.ActivityEvent {
						public static class: java.lang.Class<com.klaviyo.core.lifecycle.ActivityEvent.Created>;
						public constructor(activity: globalAndroid.app.Activity, bundle: globalAndroid.os.Bundle);
					}
					export class Paused extends com.klaviyo.core.lifecycle.ActivityEvent {
						public static class: java.lang.Class<com.klaviyo.core.lifecycle.ActivityEvent.Paused>;
						public constructor(activity: globalAndroid.app.Activity);
					}
					export class Resumed extends com.klaviyo.core.lifecycle.ActivityEvent {
						public static class: java.lang.Class<com.klaviyo.core.lifecycle.ActivityEvent.Resumed>;
						public constructor(activity: globalAndroid.app.Activity);
					}
					export class SaveInstanceState extends com.klaviyo.core.lifecycle.ActivityEvent {
						public static class: java.lang.Class<com.klaviyo.core.lifecycle.ActivityEvent.SaveInstanceState>;
						public constructor(activity: globalAndroid.app.Activity, bundle: globalAndroid.os.Bundle);
					}
					export class Started extends com.klaviyo.core.lifecycle.ActivityEvent {
						public static class: java.lang.Class<com.klaviyo.core.lifecycle.ActivityEvent.Started>;
						public constructor(activity: globalAndroid.app.Activity);
					}
					export class Stopped extends com.klaviyo.core.lifecycle.ActivityEvent {
						public static class: java.lang.Class<com.klaviyo.core.lifecycle.ActivityEvent.Stopped>;
						public constructor(activity: globalAndroid.app.Activity);
					}
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module core {
			export module lifecycle {
				export class KlaviyoLifecycleMonitor extends com.klaviyo.core.lifecycle.LifecycleMonitor {
					public static class: java.lang.Class<com.klaviyo.core.lifecycle.KlaviyoLifecycleMonitor>;
					public static INSTANCE: com.klaviyo.core.lifecycle.KlaviyoLifecycleMonitor;
					public getCurrentActivity(): globalAndroid.app.Activity;
					public onActivityEvent(observer: any): void;
					public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
					public setCurrentActivity(value: globalAndroid.app.Activity): void;
					public onActivitySaveInstanceState(activity: globalAndroid.app.Activity, bundle: globalAndroid.os.Bundle): void;
					public offActivityEvent(observer: any): void;
					public onActivityStopped(activity: globalAndroid.app.Activity): void;
					public offActivityEvent(param0: any): void;
					public onActivityStarted(activity: globalAndroid.app.Activity): void;
					public onLowMemory(): void;
					public onActivityEvent(param0: any): void;
					public onActivityResumed(activity: globalAndroid.app.Activity): void;
					public onActivityPaused(activity: globalAndroid.app.Activity): void;
					public onActivityCreated(activity: globalAndroid.app.Activity, bundle: globalAndroid.os.Bundle): void;
					public onActivityDestroyed(activity: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module core {
			export module lifecycle {
				export class LifecycleMonitor {
					public static class: java.lang.Class<com.klaviyo.core.lifecycle.LifecycleMonitor>;
					/**
					 * Constructs a new instance of the com.klaviyo.core.lifecycle.LifecycleMonitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getCurrentActivity(): globalAndroid.app.Activity;
						onActivityEvent(param0: any): void;
						offActivityEvent(param0: any): void;
					});
					public constructor();
					public getCurrentActivity(): globalAndroid.app.Activity;
					public onActivityEvent(param0: any): void;
					public offActivityEvent(param0: any): void;
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module core {
			export module model {
				export class DataStore {
					public static class: java.lang.Class<com.klaviyo.core.model.DataStore>;
					/**
					 * Constructs a new instance of the com.klaviyo.core.model.DataStore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						fetch(param0: string): string;
						store(param0: string, param1: string): void;
						clear(param0: string): void;
						onStoreChange(param0: any): void;
						offStoreChange(param0: any): void;
					});
					public constructor();
					public onStoreChange(param0: any): void;
					public fetch(param0: string): string;
					public clear(param0: string): void;
					public offStoreChange(param0: any): void;
					public store(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module core {
			export module model {
				export class SharedPreferencesDataStore extends com.klaviyo.core.model.DataStore {
					public static class: java.lang.Class<com.klaviyo.core.model.SharedPreferencesDataStore>;
					public static INSTANCE: com.klaviyo.core.model.SharedPreferencesDataStore;
					public static KLAVIYO_PREFS_NAME: string = "KlaviyoSDKPreferences";
					public onStoreChange(param0: any): void;
					public onStoreChange(observer: any): void;
					public fetch(param0: string): string;
					public clear(param0: string): void;
					public fetch(key: string): string;
					public offStoreChange(param0: any): void;
					public clear(it: string): void;
					public offStoreChange(observer: any): void;
					public store(param0: string, param1: string): void;
					public store(it: string, this_: string): void;
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module core {
			export module networking {
				export class KlaviyoNetworkMonitor extends com.klaviyo.core.networking.NetworkMonitor {
					public static class: java.lang.Class<com.klaviyo.core.networking.KlaviyoNetworkMonitor>;
					public static INSTANCE: com.klaviyo.core.networking.KlaviyoNetworkMonitor;
					public isNetworkConnected(): boolean;
					public getNetworkType(): com.klaviyo.core.networking.NetworkMonitor.NetworkType;
					public onNetworkChange(observer: any): void;
					public offNetworkChange(observer: any): void;
					public offNetworkChange(param0: any): void;
					public onNetworkChange(param0: any): void;
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module core {
			export module networking {
				export class NetworkMonitor {
					public static class: java.lang.Class<com.klaviyo.core.networking.NetworkMonitor>;
					/**
					 * Constructs a new instance of the com.klaviyo.core.networking.NetworkMonitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onNetworkChange(param0: any): void;
						offNetworkChange(param0: any): void;
						isNetworkConnected(): boolean;
						getNetworkType(): com.klaviyo.core.networking.NetworkMonitor.NetworkType;
					});
					public constructor();
					public isNetworkConnected(): boolean;
					public getNetworkType(): com.klaviyo.core.networking.NetworkMonitor.NetworkType;
					public offNetworkChange(param0: any): void;
					public onNetworkChange(param0: any): void;
				}
				export module NetworkMonitor {
					export class NetworkType {
						public static class: java.lang.Class<com.klaviyo.core.networking.NetworkMonitor.NetworkType>;
						public static Wifi: com.klaviyo.core.networking.NetworkMonitor.NetworkType;
						public static Cell: com.klaviyo.core.networking.NetworkMonitor.NetworkType;
						public static Offline: com.klaviyo.core.networking.NetworkMonitor.NetworkType;
						public static valueOf(value: string): com.klaviyo.core.networking.NetworkMonitor.NetworkType;
						public getPosition(): number;
						public static values(): androidNative.Array<com.klaviyo.core.networking.NetworkMonitor.NetworkType>;
						public static getEntries(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module core {
			export module utils {
				export class WeakReferenceDelegate<T>  extends any {
					public static class: java.lang.Class<com.klaviyo.core.utils.WeakReferenceDelegate<any>>;
					public constructor(initialValue: any);
					public constructor();
					public getValue(thisRef: any, property: any): any;
					public setValue(thisRef: any, property: any, value: any): void;
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module forms {
			export abstract class BridgeMessage {
				public static class: java.lang.Class<com.klaviyo.forms.BridgeMessage>;
			}
			export module BridgeMessage {
				export class Abort extends com.klaviyo.forms.BridgeMessage {
					public static class: java.lang.Class<com.klaviyo.forms.BridgeMessage.Abort>;
					public getReason(): string;
					public toString(): string;
					public component1(): string;
					public copy(reason: string): com.klaviyo.forms.BridgeMessage.Abort;
					public equals(other: any): boolean;
					public constructor(reason: string);
					public hashCode(): number;
				}
				export class AggregateEventTracked extends com.klaviyo.forms.BridgeMessage {
					public static class: java.lang.Class<com.klaviyo.forms.BridgeMessage.AggregateEventTracked>;
					public getPayload(): org.json.JSONObject;
					public toString(): string;
					public equals(other: any): boolean;
					public component1(): org.json.JSONObject;
					public constructor(payload: org.json.JSONObject);
					public hashCode(): number;
					public copy(payload: org.json.JSONObject): com.klaviyo.forms.BridgeMessage.AggregateEventTracked;
				}
				export class Close extends com.klaviyo.forms.BridgeMessage {
					public static class: java.lang.Class<com.klaviyo.forms.BridgeMessage.Close>;
					public getFormId(): string;
					public toString(): string;
					public constructor(formId: string);
					public component1(): string;
					public equals(other: any): boolean;
					public copy(formId: string): com.klaviyo.forms.BridgeMessage.Close;
					public hashCode(): number;
				}
				export class Companion {
					public static class: java.lang.Class<com.klaviyo.forms.BridgeMessage.Companion>;
					public decodeWebviewMessage(value: string): com.klaviyo.forms.BridgeMessage;
					public getHandShakeData$forms_release(): string;
				}
				export class DeepLink extends com.klaviyo.forms.BridgeMessage {
					public static class: java.lang.Class<com.klaviyo.forms.BridgeMessage.DeepLink>;
					public copy(route: string): com.klaviyo.forms.BridgeMessage.DeepLink;
					public toString(): string;
					public component1(): string;
					public equals(other: any): boolean;
					public getRoute(): string;
					public constructor(route: string);
					public hashCode(): number;
				}
				export class HandShook extends com.klaviyo.forms.BridgeMessage {
					public static class: java.lang.Class<com.klaviyo.forms.BridgeMessage.HandShook>;
					public static INSTANCE: com.klaviyo.forms.BridgeMessage.HandShook;
					public toString(): string;
					public equals(other: any): boolean;
					public hashCode(): number;
				}
				export class ProfileEvent extends com.klaviyo.forms.BridgeMessage {
					public static class: java.lang.Class<com.klaviyo.forms.BridgeMessage.ProfileEvent>;
					public copy(event: com.klaviyo.analytics.model.Event): com.klaviyo.forms.BridgeMessage.ProfileEvent;
					public toString(): string;
					public getEvent(): com.klaviyo.analytics.model.Event;
					public equals(other: any): boolean;
					public constructor(event: com.klaviyo.analytics.model.Event);
					public component1(): com.klaviyo.analytics.model.Event;
					public hashCode(): number;
				}
				export class Show extends com.klaviyo.forms.BridgeMessage {
					public static class: java.lang.Class<com.klaviyo.forms.BridgeMessage.Show>;
					public getFormId(): string;
					public toString(): string;
					public constructor(formId: string);
					public component1(): string;
					public equals(other: any): boolean;
					public copy(formId: string): com.klaviyo.forms.BridgeMessage.Show;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module forms {
			export class BuildConfig {
				public static class: java.lang.Class<com.klaviyo.forms.BuildConfig>;
				public static DEBUG: boolean = 0;
				public static LIBRARY_PACKAGE_NAME: string = "com.klaviyo.forms";
				public static BUILD_TYPE: string = "release";
				public static KLAVIYO_API_REVISION: string = "2024-10-15";
				public static KLAVIYO_ASSET_SOURCE: string = "";
				public static KLAVIYO_CDN_URL: string = "https://static.klaviyo.com";
				public static KLAVIYO_SERVER_URL: string = "https://a.klaviyo.com";
				public constructor();
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module forms {
			export class KlaviyoWebView {
				public static class: java.lang.Class<com.klaviyo.forms.KlaviyoWebView>;
				public loadTemplate(html: string, delegate: com.klaviyo.forms.KlaviyoWebViewDelegate): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public constructor(context: globalAndroid.content.Context);
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module forms {
			export class KlaviyoWebViewDelegate {
				public static class: java.lang.Class<com.klaviyo.forms.KlaviyoWebViewDelegate>;
				public getAllowedOrigin(): java.util.Set<string>;
				public onRenderProcessGone(it: globalAndroid.webkit.WebView, this_: globalAndroid.webkit.RenderProcessGoneDetail): boolean;
				public shouldOverrideUrlLoading($this$shouldOverrideUrlLoading_u24lambda_u246: globalAndroid.webkit.WebView, value: globalAndroid.webkit.WebResourceRequest): boolean;
				public onPostMessage(it: globalAndroid.webkit.WebView, this_: androidx.webkit.WebMessageCompat, view: globalAndroid.net.Uri, message: boolean, sourceOrigin: androidx.webkit.JavaScriptReplyProxy): void;
				public onReceivedHttpError(view: globalAndroid.webkit.WebView, request: globalAndroid.webkit.WebResourceRequest, errorResponse: globalAndroid.webkit.WebResourceResponse): void;
				public onPageFinished(expected: globalAndroid.webkit.WebView, this_: string): void;
				public postMessage(e: string): void;
				public initializeWebView(): com.klaviyo.forms.KlaviyoWebView;
				public getBridgeName(): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module pushFcm {
			export class KlaviyoNotification {
				public static class: java.lang.Class<com.klaviyo.pushFcm.KlaviyoNotification>;
				public static CHANNEL_ID_KEY: string = "channel_id";
				public static CHANNEL_NAME_KEY: string = "channel_name";
				public static CHANNEL_DESCRIPTION_KEY: string = "channel_description";
				public static CHANNEL_IMPORTANCE_KEY: string = "channel_importance";
				public static SMALL_ICON_KEY: string = "small_icon";
				public static TITLE_KEY: string = "title";
				public static BODY_KEY: string = "body";
				public static URL_KEY: string = "url";
				public static IMAGE_KEY: string = "image_url";
				public static CLICK_ACTION_KEY: string = "click_action";
				public static SOUND_KEY: string = "sound";
				public static COLOR_KEY: string = "color";
				public static NOTIFICATION_COUNT_KEY: string = "notification_count";
				public static NOTIFICATION_PRIORITY: string = "notification_priority";
				public static NOTIFICATION_TAG: string = "notification_tag";
				public static KEY_VALUE_PAIRS_KEY: string = "key_value_pairs";
				public constructor(message: com.google.firebase.messaging.RemoteMessage);
				public displayNotification(this_: globalAndroid.content.Context): boolean;
			}
			export module KlaviyoNotification {
				export class Companion {
					public static class: java.lang.Class<com.klaviyo.pushFcm.KlaviyoNotification.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module pushFcm {
			export class KlaviyoPushService {
				public static class: java.lang.Class<com.klaviyo.pushFcm.KlaviyoPushService>;
				public static METADATA_DEFAULT_ICON: string = "com.klaviyo.push.default_notification_icon";
				public static METADATA_DEFAULT_COLOR: string = "com.klaviyo.push.default_notification_color";
				public onKlaviyoNotificationMessageReceived(message: com.google.firebase.messaging.RemoteMessage): void;
				public onKlaviyoCustomDataMessageReceived(customData: java.util.Map<string,string>, message: com.google.firebase.messaging.RemoteMessage): void;
				public onNewToken(newToken: string): void;
				public onMessageReceived(message: com.google.firebase.messaging.RemoteMessage): void;
				public constructor();
			}
			export module KlaviyoPushService {
				export class Companion {
					public static class: java.lang.Class<com.klaviyo.pushFcm.KlaviyoPushService.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module pushFcm {
			export class KlaviyoRemoteMessage {
				public static class: java.lang.Class<com.klaviyo.pushFcm.KlaviyoRemoteMessage>;
				public static INSTANCE: com.klaviyo.pushFcm.KlaviyoRemoteMessage;
				public getNotificationPriority($this$notificationPriority: com.google.firebase.messaging.RemoteMessage): number;
				public getNotificationTag($this$notificationTag: com.google.firebase.messaging.RemoteMessage): string;
				public getKeyValuePairs(key: com.google.firebase.messaging.RemoteMessage): java.util.Map<string,string>;
				public getDeepLink(it: com.google.firebase.messaging.RemoteMessage): globalAndroid.net.Uri;
				public getClickAction(it: com.google.firebase.messaging.RemoteMessage): string;
				public getChannel_description($this$channel_description: com.google.firebase.messaging.RemoteMessage): string;
				public getBody($this$body: com.google.firebase.messaging.RemoteMessage): string;
				public getHasKlaviyoKeyValuePairs($this$hasKlaviyoKeyValuePairs: com.google.firebase.messaging.RemoteMessage): boolean;
				/** @deprecated */
				public getSmallIcon(this_: com.google.firebase.messaging.RemoteMessage): number;
				public getImageUrl($this$imageUrl: com.google.firebase.messaging.RemoteMessage): java.net.URL;
				public getSmallIcon(value: com.google.firebase.messaging.RemoteMessage, packageManager: globalAndroid.content.Context): number;
				public getChannel_id($this$channel_id: com.google.firebase.messaging.RemoteMessage): string;
				public getTitle($this$title: com.google.firebase.messaging.RemoteMessage): string;
				public getSound(it: com.google.firebase.messaging.RemoteMessage): globalAndroid.net.Uri;
				public getChannel_importance($this$channel_importance: com.google.firebase.messaging.RemoteMessage): number;
				public getNotificationCount($this$notificationCount: com.google.firebase.messaging.RemoteMessage): number;
				public appendKlaviyoExtras(it: globalAndroid.content.Intent, element$iv: com.google.firebase.messaging.RemoteMessage): globalAndroid.content.Intent;
				public getChannel_name($this$channel_name: com.google.firebase.messaging.RemoteMessage): string;
				public isKlaviyoMessage($this$isKlaviyoMessage: com.google.firebase.messaging.RemoteMessage): boolean;
				public getColor(value: com.google.firebase.messaging.RemoteMessage, it: globalAndroid.content.Context): java.lang.Integer;
				public isKlaviyoNotification(it: com.google.firebase.messaging.RemoteMessage): boolean;
			}
		}
	}
}

declare module com {
	export module klaviyo {
		export module push_fcm {
			export class BuildConfig {
				public static class: java.lang.Class<com.klaviyo.push_fcm.BuildConfig>;
				public static DEBUG: boolean = 0;
				public static LIBRARY_PACKAGE_NAME: string = "com.klaviyo.push_fcm";
				public static BUILD_TYPE: string = "release";
				public static KLAVIYO_API_REVISION: string = "2024-10-15";
				public static KLAVIYO_ASSET_SOURCE: string = "";
				public static KLAVIYO_CDN_URL: string = "https://static.klaviyo.com";
				public static KLAVIYO_SERVER_URL: string = "https://a.klaviyo.com";
				public constructor();
			}
		}
	}
}

//Generics information:
//com.klaviyo.analytics.model.BaseModel:2
//com.klaviyo.analytics.state.PersistentObservableProperty:1
//com.klaviyo.core.utils.WeakReferenceDelegate:1

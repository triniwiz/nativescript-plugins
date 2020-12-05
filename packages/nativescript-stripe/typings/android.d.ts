/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module stripe {
		export module android {
			export class AlipayAuthenticator {
				public static class: java.lang.Class<com.stripe.android.AlipayAuthenticator>;
				/**
				 * Constructs a new instance of the com.stripe.android.AlipayAuthenticator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onAuthenticationRequest(param0: string): java.util.Map<string,string>;
				});
				public constructor();
				public onAuthenticationRequest(param0: string): java.util.Map<string,string>;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class AnalyticsDataFactory {
				public static class: java.lang.Class<com.stripe.android.AnalyticsDataFactory>;
				public static FIELD_PRODUCT_USAGE: string;
				public static FIELD_ANALYTICS_UA: string;
				public static FIELD_APP_NAME: string;
				public static FIELD_APP_VERSION: string;
				public static FIELD_BINDINGS_VERSION: string;
				public static FIELD_DEVICE_TYPE: string;
				public static FIELD_EVENT: string;
				public static FIELD_ERROR_DATA: string;
				public static FIELD_INTENT_ID: string;
				public static FIELD_OS_NAME: string;
				public static FIELD_OS_RELEASE: string;
				public static FIELD_OS_VERSION: string;
				public static FIELD_PAYMENT_METHOD_ID: string;
				public static FIELD_PAYMENT_METHOD_TYPE: string;
				public static FIELD_PUBLISHABLE_KEY: string;
				public static FIELD_SOURCE_ID: string;
				public static FIELD_SOURCE_TYPE: string;
				public static FIELD_3DS2_UI_TYPE: string;
				public static FIELD_TOKEN_TYPE: string;
				public static ANALYTICS_UA: string;
				public static Companion: com.stripe.android.AnalyticsDataFactory.Companion;
				public constructor(param0: globalAndroid.content.Context, param1: string);
				public constructor(param0: globalAndroid.content.Context, param1: kotlin.jvm.functions.Function0<string>);
				public constructor(param0: globalAndroid.content.pm.PackageManager, param1: globalAndroid.content.pm.PackageInfo, param2: string, param3: kotlin.jvm.functions.Function0<string>);
				public createAppDataParams$stripe_release(): java.util.Map<string,any>;
			}
			export module AnalyticsDataFactory {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.AnalyticsDataFactory.Companion>;
					public getVALID_PARAM_FIELDS$stripe_release(): java.util.Set<string>;
				}
				export class ThreeDS2UiType {
					public static class: java.lang.Class<com.stripe.android.AnalyticsDataFactory.ThreeDS2UiType>;
					public static None: com.stripe.android.AnalyticsDataFactory.ThreeDS2UiType;
					public static Text: com.stripe.android.AnalyticsDataFactory.ThreeDS2UiType;
					public static SingleSelect: com.stripe.android.AnalyticsDataFactory.ThreeDS2UiType;
					public static MultiSelect: com.stripe.android.AnalyticsDataFactory.ThreeDS2UiType;
					public static Oob: com.stripe.android.AnalyticsDataFactory.ThreeDS2UiType;
					public static Html: com.stripe.android.AnalyticsDataFactory.ThreeDS2UiType;
					public static Companion: com.stripe.android.AnalyticsDataFactory.ThreeDS2UiType.Companion;
					public toString(): string;
					public static valueOf(param0: string): com.stripe.android.AnalyticsDataFactory.ThreeDS2UiType;
					public static values(): native.Array<com.stripe.android.AnalyticsDataFactory.ThreeDS2UiType>;
				}
				export module ThreeDS2UiType {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.AnalyticsDataFactory.ThreeDS2UiType.Companion>;
						public fromUiTypeCode(param0: string): com.stripe.android.AnalyticsDataFactory.ThreeDS2UiType;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class AnalyticsEvent {
				public static class: java.lang.Class<com.stripe.android.AnalyticsEvent>;
				public static TokenCreate: com.stripe.android.AnalyticsEvent;
				public static PaymentMethodCreate: com.stripe.android.AnalyticsEvent;
				public static CustomerRetrieve: com.stripe.android.AnalyticsEvent;
				public static CustomerRetrievePaymentMethods: com.stripe.android.AnalyticsEvent;
				public static CustomerAttachPaymentMethod: com.stripe.android.AnalyticsEvent;
				public static CustomerDetachPaymentMethod: com.stripe.android.AnalyticsEvent;
				public static CustomerDeleteSource: com.stripe.android.AnalyticsEvent;
				public static CustomerSetShippingInfo: com.stripe.android.AnalyticsEvent;
				public static CustomerAddSource: com.stripe.android.AnalyticsEvent;
				public static CustomerSetDefaultSource: com.stripe.android.AnalyticsEvent;
				public static IssuingRetrievePin: com.stripe.android.AnalyticsEvent;
				public static IssuingUpdatePin: com.stripe.android.AnalyticsEvent;
				public static SourceCreate: com.stripe.android.AnalyticsEvent;
				public static SourceRetrieve: com.stripe.android.AnalyticsEvent;
				public static PaymentIntentConfirm: com.stripe.android.AnalyticsEvent;
				public static PaymentIntentRetrieve: com.stripe.android.AnalyticsEvent;
				public static PaymentIntentCancelSource: com.stripe.android.AnalyticsEvent;
				public static SetupIntentConfirm: com.stripe.android.AnalyticsEvent;
				public static SetupIntentRetrieve: com.stripe.android.AnalyticsEvent;
				public static SetupIntentCancelSource: com.stripe.android.AnalyticsEvent;
				public static FileCreate: com.stripe.android.AnalyticsEvent;
				public static Auth3ds1Sdk: com.stripe.android.AnalyticsEvent;
				public static Auth3ds2Fingerprint: com.stripe.android.AnalyticsEvent;
				public static Auth3ds2Start: com.stripe.android.AnalyticsEvent;
				public static Auth3ds2Frictionless: com.stripe.android.AnalyticsEvent;
				public static Auth3ds2ChallengePresented: com.stripe.android.AnalyticsEvent;
				public static Auth3ds2ChallengeCanceled: com.stripe.android.AnalyticsEvent;
				public static Auth3ds2ChallengeCompleted: com.stripe.android.AnalyticsEvent;
				public static Auth3ds2ChallengeErrored: com.stripe.android.AnalyticsEvent;
				public static Auth3ds2ChallengeTimedOut: com.stripe.android.AnalyticsEvent;
				public static Auth3ds2Fallback: com.stripe.android.AnalyticsEvent;
				public static AuthRedirect: com.stripe.android.AnalyticsEvent;
				public static AuthError: com.stripe.android.AnalyticsEvent;
				public static AuthSourceStart: com.stripe.android.AnalyticsEvent;
				public static AuthSourceRedirect: com.stripe.android.AnalyticsEvent;
				public static AuthSourceResult: com.stripe.android.AnalyticsEvent;
				public static CardMetadataPublishableKeyAvailable: com.stripe.android.AnalyticsEvent;
				public static CardMetadataPublishableKeyUnavailable: com.stripe.android.AnalyticsEvent;
				public static CardMetadataLoadedTooSlow: com.stripe.android.AnalyticsEvent;
				public static CardMetadataLoadFailure: com.stripe.android.AnalyticsEvent;
				public static CardMetadataMissingRange: com.stripe.android.AnalyticsEvent;
				public static valueOf(param0: string): com.stripe.android.AnalyticsEvent;
				public toString(): string;
				public static values(): native.Array<com.stripe.android.AnalyticsEvent>;
				public getCode$stripe_release(): string;
			}
			export module AnalyticsEvent {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.AnalyticsEvent.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class AnalyticsRequest extends com.stripe.android.StripeRequest {
				public static class: java.lang.Class<com.stripe.android.AnalyticsRequest>;
				public static HOST: string;
				public static Companion: com.stripe.android.AnalyticsRequest.Companion;
				public component3$stripe_release(): com.stripe.android.AppInfo;
				public component2$stripe_release(): com.stripe.android.ApiRequest.Options;
				public getParams(): java.util.Map<string,any>;
				public toString(): string;
				public constructor();
				public getOptions$stripe_release(): com.stripe.android.ApiRequest.Options;
				public getAppInfo$stripe_release(): com.stripe.android.AppInfo;
				public getMethod(): com.stripe.android.StripeRequest.Method;
				public getBaseUrl(): string;
				public getMimeType(): com.stripe.android.StripeRequest.MimeType;
				public constructor(param0: java.util.Map<string,any>, param1: com.stripe.android.ApiRequest.Options, param2: com.stripe.android.AppInfo);
				public hashCode(): number;
				public component1(): java.util.Map<string,any>;
				public equals(param0: any): boolean;
				public getHeadersFactory(): com.stripe.android.RequestHeadersFactory;
				public copy(param0: java.util.Map<string,any>, param1: com.stripe.android.ApiRequest.Options, param2: com.stripe.android.AppInfo): com.stripe.android.AnalyticsRequest;
			}
			export module AnalyticsRequest {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.AnalyticsRequest.Companion>;
				}
				export class Factory {
					public static class: java.lang.Class<com.stripe.android.AnalyticsRequest.Factory>;
					public constructor();
					public constructor(param0: com.stripe.android.Logger);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class AnalyticsRequestExecutor {
				public static class: java.lang.Class<com.stripe.android.AnalyticsRequestExecutor>;
				/**
				 * Constructs a new instance of the com.stripe.android.AnalyticsRequestExecutor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					executeAsync(param0: com.stripe.android.AnalyticsRequest): void;
				});
				public constructor();
				public executeAsync(param0: com.stripe.android.AnalyticsRequest): void;
			}
			export module AnalyticsRequestExecutor {
				export class Default extends com.stripe.android.AnalyticsRequestExecutor {
					public static class: java.lang.Class<com.stripe.android.AnalyticsRequestExecutor.Default>;
					public execute$stripe_release(param0: com.stripe.android.AnalyticsRequest): number;
					public executeAsync(param0: com.stripe.android.AnalyticsRequest): void;
					public constructor();
					public constructor(param0: com.stripe.android.Logger, param1: kotlin.coroutines.CoroutineContext);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class ApiKeyValidator {
				public static class: java.lang.Class<com.stripe.android.ApiKeyValidator>;
				public static Companion: com.stripe.android.ApiKeyValidator.Companion;
				public requireValid(param0: string): string;
				public static get$stripe_release(): com.stripe.android.ApiKeyValidator;
				public constructor();
			}
			export module ApiKeyValidator {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.ApiKeyValidator.Companion>;
					public get$stripe_release(): com.stripe.android.ApiKeyValidator;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export abstract class ApiOperation<ResultType>  extends java.lang.Object {
				public static class: java.lang.Class<com.stripe.android.ApiOperation<any>>;
				public execute$stripe_release(): void;
				public getResult$stripe_release(param0: kotlin.coroutines.Continuation<any>): any;
				public constructor(param0: kotlin.coroutines.CoroutineContext, param1: com.stripe.android.ApiResultCallback<any>);
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class ApiRequest extends com.stripe.android.StripeRequest {
				public static class: java.lang.Class<com.stripe.android.ApiRequest>;
				public static API_HOST: string;
				public static HEADER_STRIPE_CLIENT_USER_AGENT: string;
				public static Companion: com.stripe.android.ApiRequest.Companion;
				public component1(): com.stripe.android.StripeRequest.Method;
				public component3(): java.util.Map<string,any>;
				public toString(): string;
				public getParams(): java.util.Map<string,any>;
				public component4$stripe_release(): com.stripe.android.ApiRequest.Options;
				public constructor();
				public constructor(param0: com.stripe.android.StripeRequest.Method, param1: string, param2: java.util.Map<string,any>, param3: com.stripe.android.ApiRequest.Options, param4: com.stripe.android.AppInfo, param5: kotlin.jvm.functions.Function1<any,string>, param6: string, param7: string);
				public getHeadersFactory(): com.stripe.android.RequestHeadersFactory.Api;
				public getOptions$stripe_release(): com.stripe.android.ApiRequest.Options;
				public getMethod(): com.stripe.android.StripeRequest.Method;
				public getBody(): string;
				public getMimeType(): com.stripe.android.StripeRequest.MimeType;
				public getBaseUrl(): string;
				public hashCode(): number;
				public component2(): string;
				public equals(param0: any): boolean;
				public getHeadersFactory(): com.stripe.android.RequestHeadersFactory;
				public copy(param0: com.stripe.android.StripeRequest.Method, param1: string, param2: java.util.Map<string,any>, param3: com.stripe.android.ApiRequest.Options, param4: com.stripe.android.AppInfo, param5: kotlin.jvm.functions.Function1<any,string>, param6: string, param7: string): com.stripe.android.ApiRequest;
			}
			export module ApiRequest {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.ApiRequest.Companion>;
				}
				export class Factory {
					public static class: java.lang.Class<com.stripe.android.ApiRequest.Factory>;
					public createGet(param0: string, param1: com.stripe.android.ApiRequest.Options, param2: java.util.Map<string,any>): com.stripe.android.ApiRequest;
					public createDelete(param0: string, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.ApiRequest;
					public constructor();
					public createPost(param0: string, param1: com.stripe.android.ApiRequest.Options, param2: java.util.Map<string,any>): com.stripe.android.ApiRequest;
					public constructor(param0: com.stripe.android.AppInfo, param1: string, param2: string);
				}
				export class Options {
					public static class: java.lang.Class<com.stripe.android.ApiRequest.Options>;
					public static UNDEFINED_PUBLISHABLE_KEY: string;
					public static Companion: com.stripe.android.ApiRequest.Options.Companion;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public getStripeAccount$stripe_release(): string;
					public component3$stripe_release(): string;
					public describeContents(): number;
					public getIdempotencyKey$stripe_release(): string;
					public getApiKey(): string;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): string;
					public component2$stripe_release(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public hashCode(): number;
					public copy(param0: string, param1: string, param2: string): com.stripe.android.ApiRequest.Options;
					public constructor(param0: string, param1: string, param2: string);
				}
				export module Options {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.ApiRequest.Options.Companion>;
					}
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.ApiRequest.Options.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class ApiRequestExecutor {
				public static class: java.lang.Class<com.stripe.android.ApiRequestExecutor>;
				/**
				 * Constructs a new instance of the com.stripe.android.ApiRequestExecutor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					execute(param0: com.stripe.android.ApiRequest): com.stripe.android.StripeResponse;
					execute(param0: com.stripe.android.FileUploadRequest): com.stripe.android.StripeResponse;
				});
				public constructor();
				public execute(param0: com.stripe.android.FileUploadRequest): com.stripe.android.StripeResponse;
				public execute(param0: com.stripe.android.ApiRequest): com.stripe.android.StripeResponse;
			}
			export module ApiRequestExecutor {
				export class Default extends com.stripe.android.ApiRequestExecutor {
					public static class: java.lang.Class<com.stripe.android.ApiRequestExecutor.Default>;
					public execute(param0: com.stripe.android.ApiRequest): com.stripe.android.StripeResponse;
					public constructor();
					public constructor(param0: com.stripe.android.Logger);
					public execute(param0: com.stripe.android.FileUploadRequest): com.stripe.android.StripeResponse;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class ApiResultCallback<ResultType>  extends java.lang.Object {
				public static class: java.lang.Class<com.stripe.android.ApiResultCallback<any>>;
				/**
				 * Constructs a new instance of the com.stripe.android.ApiResultCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onSuccess(param0: ResultType): void;
					onError(param0: java.lang.Exception): void;
				});
				public constructor();
				public onError(param0: java.lang.Exception): void;
				public onSuccess(param0: ResultType): void;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class ApiVersion {
				public static class: java.lang.Class<com.stripe.android.ApiVersion>;
				public static Companion: com.stripe.android.ApiVersion.Companion;
				public copy(param0: string): com.stripe.android.ApiVersion;
				public component1$stripe_release(): string;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public toString(): string;
				public constructor(param0: string);
				public getCode$stripe_release(): string;
			}
			export module ApiVersion {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.ApiVersion.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class AppInfo {
				public static class: java.lang.Class<com.stripe.android.AppInfo>;
				public static Companion: com.stripe.android.AppInfo.Companion;
				public static CREATOR: globalAndroid.os.Parcelable.Creator;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public copy(param0: string, param1: string, param2: string, param3: string): com.stripe.android.AppInfo;
				public static create(param0: string, param1: string, param2: string): com.stripe.android.AppInfo;
				public toString(): string;
				public static create(param0: string, param1: string): com.stripe.android.AppInfo;
				public constructor(param0: string, param1: string, param2: string, param3: string);
				public hashCode(): number;
				public equals(param0: any): boolean;
				public describeContents(): number;
				public static create(param0: string, param1: string, param2: string, param3: string): com.stripe.android.AppInfo;
				public static create(param0: string): com.stripe.android.AppInfo;
				public createClientHeaders$stripe_release(): java.util.Map<string,java.util.Map<string,string>>;
				public toUserAgent$stripe_release(): string;
			}
			export module AppInfo {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.AppInfo.Companion>;
					public create(param0: string, param1: string, param2: string, param3: string): com.stripe.android.AppInfo;
					public create(param0: string, param1: string): com.stripe.android.AppInfo;
					public create(param0: string): com.stripe.android.AppInfo;
					public create(param0: string, param1: string, param2: string): com.stripe.android.AppInfo;
				}
				export class Creator {
					public static class: java.lang.Class<com.stripe.android.AppInfo.Creator>;
					public constructor();
					public createFromParcel(param0: globalAndroid.os.Parcel): any;
					public newArray(param0: number): native.Array<any>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class BuildConfig {
				public static class: java.lang.Class<com.stripe.android.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static BUILD_TYPE: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class CardUtils {
				public static class: java.lang.Class<com.stripe.android.CardUtils>;
				public static INSTANCE: com.stripe.android.CardUtils;
				public isValidCardLength$stripe_release(param0: string): boolean;
				public isValidLuhnNumber$stripe_release(param0: string): boolean;
				/** @deprecated */
				public static getPossibleCardBrand(param0: string): com.stripe.android.model.CardBrand;
				/** @deprecated */
				public static isValidCardNumber(param0: string): boolean;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class ConnectionFactory {
				public static class: java.lang.Class<com.stripe.android.ConnectionFactory>;
				/**
				 * Constructs a new instance of the com.stripe.android.ConnectionFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					create(param0: com.stripe.android.StripeRequest): com.stripe.android.StripeConnection;
				});
				public constructor();
				public create(param0: com.stripe.android.StripeRequest): com.stripe.android.StripeConnection;
			}
			export module ConnectionFactory {
				export class Default extends com.stripe.android.ConnectionFactory {
					public static class: java.lang.Class<com.stripe.android.ConnectionFactory.Default>;
					public create(param0: com.stripe.android.StripeRequest): com.stripe.android.StripeConnection;
					public constructor();
				}
				export module Default {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.ConnectionFactory.Default.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class CustomerSession {
				public static class: java.lang.Class<com.stripe.android.CustomerSession>;
				public static Companion: com.stripe.android.CustomerSession.Companion;
				public setCustomer$stripe_release(param0: com.stripe.android.model.Customer): void;
				public getCachedCustomer(): com.stripe.android.model.Customer;
				public static getInstance(): com.stripe.android.CustomerSession;
				public setCustomerCacheTime$stripe_release(param0: number): void;
				public static initCustomerSession(param0: globalAndroid.content.Context, param1: com.stripe.android.EphemeralKeyProvider, param2: boolean): void;
				public static initCustomerSession(param0: globalAndroid.content.Context, param1: com.stripe.android.EphemeralKeyProvider): void;
				public attachPaymentMethod(param0: string, param1: com.stripe.android.CustomerSession.PaymentMethodRetrievalListener): void;
				public getCustomer$stripe_release(): com.stripe.android.model.Customer;
				public updateCurrentCustomer(param0: com.stripe.android.CustomerSession.CustomerRetrievalListener): void;
				public getCustomerCacheTime$stripe_release(): number;
				public setCustomerDefaultSource(param0: string, param1: string, param2: com.stripe.android.CustomerSession.CustomerRetrievalListener): void;
				public deleteCustomerSource(param0: string, param1: com.stripe.android.CustomerSession.SourceRetrievalListener): void;
				public getPaymentMethods(param0: com.stripe.android.model.PaymentMethod.Type, param1: java.lang.Integer, param2: com.stripe.android.CustomerSession.PaymentMethodsRetrievalListener): void;
				public getPaymentMethods(param0: com.stripe.android.model.PaymentMethod.Type, param1: java.lang.Integer, param2: string, param3: com.stripe.android.CustomerSession.PaymentMethodsRetrievalListener): void;
				public constructor(param0: globalAndroid.content.Context, param1: com.stripe.android.StripeRepository, param2: string, param3: string, param4: kotlin.coroutines.CoroutineContext, param5: com.stripe.android.OperationIdFactory, param6: kotlin.jvm.functions.Function0<java.lang.Long>, param7: com.stripe.android.EphemeralKeyManager.Factory);
				public static cancelCallbacks(): void;
				public getPaymentMethods(param0: com.stripe.android.model.PaymentMethod.Type, param1: com.stripe.android.CustomerSession.PaymentMethodsRetrievalListener): void;
				public addCustomerSource(param0: string, param1: string, param2: com.stripe.android.CustomerSession.SourceRetrievalListener): void;
				public getPaymentMethods(param0: com.stripe.android.model.PaymentMethod.Type, param1: java.lang.Integer, param2: string, param3: string, param4: com.stripe.android.CustomerSession.PaymentMethodsRetrievalListener): void;
				public static endCustomerSession(): void;
				public retrieveCurrentCustomer(param0: com.stripe.android.CustomerSession.CustomerRetrievalListener): void;
				public detachPaymentMethod(param0: string, param1: com.stripe.android.CustomerSession.PaymentMethodRetrievalListener): void;
				public setCustomerShippingInformation(param0: com.stripe.android.model.ShippingInformation, param1: com.stripe.android.CustomerSession.CustomerRetrievalListener): void;
			}
			export module CustomerSession {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.CustomerSession.Companion>;
					public endCustomerSession(): void;
					public cancelCallbacks(): void;
					public initCustomerSession(param0: globalAndroid.content.Context, param1: com.stripe.android.EphemeralKeyProvider): void;
					public initCustomerSession(param0: globalAndroid.content.Context, param1: com.stripe.android.EphemeralKeyProvider, param2: boolean): void;
					public getInstance(): com.stripe.android.CustomerSession;
					public getInstance$stripe_release(): com.stripe.android.CustomerSession;
					public setInstance$stripe_release(param0: com.stripe.android.CustomerSession): void;
				}
				export class CustomerRetrievalListener extends com.stripe.android.CustomerSession.RetrievalListener {
					public static class: java.lang.Class<com.stripe.android.CustomerSession.CustomerRetrievalListener>;
					/**
					 * Constructs a new instance of the com.stripe.android.CustomerSession$CustomerRetrievalListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCustomerRetrieved(param0: com.stripe.android.model.Customer): void;
						onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
					});
					public constructor();
					public onCustomerRetrieved(param0: com.stripe.android.model.Customer): void;
					public onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
				}
				export class PaymentMethodRetrievalListener extends com.stripe.android.CustomerSession.RetrievalListener {
					public static class: java.lang.Class<com.stripe.android.CustomerSession.PaymentMethodRetrievalListener>;
					/**
					 * Constructs a new instance of the com.stripe.android.CustomerSession$PaymentMethodRetrievalListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPaymentMethodRetrieved(param0: com.stripe.android.model.PaymentMethod): void;
						onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
					});
					public constructor();
					public onPaymentMethodRetrieved(param0: com.stripe.android.model.PaymentMethod): void;
					public onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
				}
				export class PaymentMethodsRetrievalListener extends com.stripe.android.CustomerSession.RetrievalListener {
					public static class: java.lang.Class<com.stripe.android.CustomerSession.PaymentMethodsRetrievalListener>;
					/**
					 * Constructs a new instance of the com.stripe.android.CustomerSession$PaymentMethodsRetrievalListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPaymentMethodsRetrieved(param0: java.util.List<com.stripe.android.model.PaymentMethod>): void;
						onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
					});
					public constructor();
					public onPaymentMethodsRetrieved(param0: java.util.List<com.stripe.android.model.PaymentMethod>): void;
					public onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
				}
				export class RetrievalListener {
					public static class: java.lang.Class<com.stripe.android.CustomerSession.RetrievalListener>;
					/**
					 * Constructs a new instance of the com.stripe.android.CustomerSession$RetrievalListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
					});
					public constructor();
					public onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
				}
				export class SourceRetrievalListener extends com.stripe.android.CustomerSession.RetrievalListener {
					public static class: java.lang.Class<com.stripe.android.CustomerSession.SourceRetrievalListener>;
					/**
					 * Constructs a new instance of the com.stripe.android.CustomerSession$SourceRetrievalListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSourceRetrieved(param0: com.stripe.android.model.Source): void;
						onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
					});
					public constructor();
					public onSourceRetrieved(param0: com.stripe.android.model.Source): void;
					public onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class CustomerSessionKt {
				public static class: java.lang.Class<com.stripe.android.CustomerSessionKt>;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class CustomerSessionOperationExecutor {
				public static class: java.lang.Class<com.stripe.android.CustomerSessionOperationExecutor>;
				public constructor(param0: com.stripe.android.StripeRepository, param1: string, param2: string, param3: java.util.Map<string,com.stripe.android.CustomerSession.RetrievalListener>, param4: kotlin.jvm.functions.Function1<any,kotlin.Unit>);
			}
			export module CustomerSessionOperationExecutor {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.CustomerSessionOperationExecutor.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class EphemeralKey extends com.stripe.android.model.StripeModel {
				public static class: java.lang.Class<com.stripe.android.EphemeralKey>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public copy(param0: string, param1: number, param2: number, param3: string, param4: boolean, param5: string, param6: string, param7: string): com.stripe.android.EphemeralKey;
				public component4$stripe_release(): string;
				public component8$stripe_release(): string;
				public constructor(param0: string, param1: number, param2: number, param3: string, param4: boolean, param5: string, param6: string, param7: string);
				public getObjectType$stripe_release(): string;
				public component6$stripe_release(): string;
				public component5$stripe_release(): boolean;
				public isLiveMode$stripe_release(): boolean;
				public component3$stripe_release(): number;
				public toString(): string;
				public getExpires$stripe_release(): number;
				public getId$stripe_release(): string;
				public component1$stripe_release(): string;
				public getSecret(): string;
				public component7(): string;
				public hashCode(): number;
				public getType$stripe_release(): string;
				public equals(param0: any): boolean;
				public describeContents(): number;
				public component2$stripe_release(): number;
				public getCreated$stripe_release(): number;
				public getObjectId$stripe_release(): string;
			}
			export module EphemeralKey {
				export class Creator {
					public static class: java.lang.Class<com.stripe.android.EphemeralKey.Creator>;
					public constructor();
					public createFromParcel(param0: globalAndroid.os.Parcel): any;
					public newArray(param0: number): native.Array<any>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class EphemeralKeyManager {
				public static class: java.lang.Class<com.stripe.android.EphemeralKeyManager>;
				public setEphemeralKey$stripe_release(param0: com.stripe.android.EphemeralKey): void;
				public constructor(param0: com.stripe.android.EphemeralKeyProvider, param1: com.stripe.android.EphemeralKeyManager.KeyManagerListener, param2: com.stripe.android.OperationIdFactory, param3: boolean, param4: kotlin.jvm.functions.Function0<java.lang.Long>, param5: number);
				public shouldRefreshKey$stripe_release(param0: com.stripe.android.EphemeralKey): boolean;
				public getEphemeralKey$stripe_release(): com.stripe.android.EphemeralKey;
			}
			export module EphemeralKeyManager {
				export class ClientKeyUpdateListener extends com.stripe.android.EphemeralKeyUpdateListener {
					public static class: java.lang.Class<com.stripe.android.EphemeralKeyManager.ClientKeyUpdateListener>;
					public onKeyUpdate(param0: string): void;
					public onKeyUpdateFailure(param0: number, param1: string): void;
					public constructor(param0: com.stripe.android.EphemeralKeyManager, param1: com.stripe.android.EphemeralOperation);
				}
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.EphemeralKeyManager.Companion>;
				}
				export class Factory extends com.stripe.android.Factory1<com.stripe.android.EphemeralKeyManager.KeyManagerListener,com.stripe.android.EphemeralKeyManager> {
					public static class: java.lang.Class<com.stripe.android.EphemeralKeyManager.Factory>;
					/**
					 * Constructs a new instance of the com.stripe.android.EphemeralKeyManager$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						create(param0: any): any;
					});
					public constructor();
					public create(param0: any): any;
				}
				export module Factory {
					export class Default extends com.stripe.android.EphemeralKeyManager.Factory {
						public static class: java.lang.Class<com.stripe.android.EphemeralKeyManager.Factory.Default>;
						public constructor(param0: com.stripe.android.EphemeralKeyProvider, param1: boolean, param2: com.stripe.android.OperationIdFactory, param3: kotlin.jvm.functions.Function0<java.lang.Long>);
						public create(param0: any): any;
					}
				}
				export class KeyManagerListener {
					public static class: java.lang.Class<com.stripe.android.EphemeralKeyManager.KeyManagerListener>;
					/**
					 * Constructs a new instance of the com.stripe.android.EphemeralKeyManager$KeyManagerListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onKeyUpdate(param0: com.stripe.android.EphemeralKey, param1: com.stripe.android.EphemeralOperation): void;
						onKeyError(param0: string, param1: number, param2: string): void;
					});
					public constructor();
					public onKeyError(param0: string, param1: number, param2: string): void;
					public onKeyUpdate(param0: com.stripe.android.EphemeralKey, param1: com.stripe.android.EphemeralOperation): void;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class EphemeralKeyProvider {
				public static class: java.lang.Class<com.stripe.android.EphemeralKeyProvider>;
				/**
				 * Constructs a new instance of the com.stripe.android.EphemeralKeyProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					createEphemeralKey(param0: string, param1: com.stripe.android.EphemeralKeyUpdateListener): void;
				});
				public constructor();
				public createEphemeralKey(param0: string, param1: com.stripe.android.EphemeralKeyUpdateListener): void;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class EphemeralKeyUpdateListener {
				public static class: java.lang.Class<com.stripe.android.EphemeralKeyUpdateListener>;
				/**
				 * Constructs a new instance of the com.stripe.android.EphemeralKeyUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onKeyUpdate(param0: string): void;
					onKeyUpdateFailure(param0: number, param1: string): void;
				});
				public constructor();
				public onKeyUpdate(param0: string): void;
				public onKeyUpdateFailure(param0: number, param1: string): void;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export abstract class EphemeralOperation {
				public static class: java.lang.Class<com.stripe.android.EphemeralOperation>;
				public getId$stripe_release(): string;
				public getProductUsage$stripe_release(): java.util.Set<string>;
			}
			export module EphemeralOperation {
				export abstract class Customer extends com.stripe.android.EphemeralOperation {
					public static class: java.lang.Class<com.stripe.android.EphemeralOperation.Customer>;
				}
				export module Customer {
					export class AddSource extends com.stripe.android.EphemeralOperation.Customer {
						public static class: java.lang.Class<com.stripe.android.EphemeralOperation.Customer.AddSource>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public describeContents(): number;
						public copy(param0: string, param1: string, param2: string, param3: java.util.Set<string>): com.stripe.android.EphemeralOperation.Customer.AddSource;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getSourceId(): string;
						public toString(): string;
						public constructor(param0: string, param1: string, param2: string, param3: java.util.Set<string>);
						public component2(): string;
						public getId$stripe_release(): string;
						public getSourceType(): string;
						public getProductUsage$stripe_release(): java.util.Set<string>;
						public component3$stripe_release(): string;
						public component4$stripe_release(): java.util.Set<string>;
					}
					export module AddSource {
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.EphemeralOperation.Customer.AddSource.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class AttachPaymentMethod extends com.stripe.android.EphemeralOperation.Customer {
						public static class: java.lang.Class<com.stripe.android.EphemeralOperation.Customer.AttachPaymentMethod>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public describeContents(): number;
						public getPaymentMethodId(): string;
						public component3$stripe_release(): java.util.Set<string>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public getId$stripe_release(): string;
						public getProductUsage$stripe_release(): java.util.Set<string>;
						public constructor(param0: string, param1: string, param2: java.util.Set<string>);
						public component2$stripe_release(): string;
						public copy(param0: string, param1: string, param2: java.util.Set<string>): com.stripe.android.EphemeralOperation.Customer.AttachPaymentMethod;
					}
					export module AttachPaymentMethod {
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.EphemeralOperation.Customer.AttachPaymentMethod.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class DeleteSource extends com.stripe.android.EphemeralOperation.Customer {
						public static class: java.lang.Class<com.stripe.android.EphemeralOperation.Customer.DeleteSource>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public describeContents(): number;
						public component3$stripe_release(): java.util.Set<string>;
						public copy(param0: string, param1: string, param2: java.util.Set<string>): com.stripe.android.EphemeralOperation.Customer.DeleteSource;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getSourceId(): string;
						public toString(): string;
						public getId$stripe_release(): string;
						public getProductUsage$stripe_release(): java.util.Set<string>;
						public constructor(param0: string, param1: string, param2: java.util.Set<string>);
						public component2$stripe_release(): string;
					}
					export module DeleteSource {
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.EphemeralOperation.Customer.DeleteSource.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class DetachPaymentMethod extends com.stripe.android.EphemeralOperation.Customer {
						public static class: java.lang.Class<com.stripe.android.EphemeralOperation.Customer.DetachPaymentMethod>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public describeContents(): number;
						public getPaymentMethodId(): string;
						public component3$stripe_release(): java.util.Set<string>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public copy(param0: string, param1: string, param2: java.util.Set<string>): com.stripe.android.EphemeralOperation.Customer.DetachPaymentMethod;
						public toString(): string;
						public getId$stripe_release(): string;
						public getProductUsage$stripe_release(): java.util.Set<string>;
						public constructor(param0: string, param1: string, param2: java.util.Set<string>);
						public component2$stripe_release(): string;
					}
					export module DetachPaymentMethod {
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.EphemeralOperation.Customer.DetachPaymentMethod.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class GetPaymentMethods extends com.stripe.android.EphemeralOperation.Customer {
						public static class: java.lang.Class<com.stripe.android.EphemeralOperation.Customer.GetPaymentMethods>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public getEndingBefore$stripe_release(): string;
						public component2$stripe_release(): java.lang.Integer;
						public describeContents(): number;
						public constructor(param0: com.stripe.android.model.PaymentMethod.Type, param1: java.lang.Integer, param2: string, param3: string, param4: string, param5: java.util.Set<string>);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public component1$stripe_release(): com.stripe.android.model.PaymentMethod.Type;
						public component4$stripe_release(): string;
						public toString(): string;
						public getStartingAfter$stripe_release(): string;
						public getType$stripe_release(): com.stripe.android.model.PaymentMethod.Type;
						public copy(param0: com.stripe.android.model.PaymentMethod.Type, param1: java.lang.Integer, param2: string, param3: string, param4: string, param5: java.util.Set<string>): com.stripe.android.EphemeralOperation.Customer.GetPaymentMethods;
						public component6$stripe_release(): java.util.Set<string>;
						public getId$stripe_release(): string;
						public getProductUsage$stripe_release(): java.util.Set<string>;
						public component3$stripe_release(): string;
						public getLimit$stripe_release(): java.lang.Integer;
						public component5$stripe_release(): string;
					}
					export module GetPaymentMethods {
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.EphemeralOperation.Customer.GetPaymentMethods.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class UpdateDefaultSource extends com.stripe.android.EphemeralOperation.Customer {
						public static class: java.lang.Class<com.stripe.android.EphemeralOperation.Customer.UpdateDefaultSource>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getSourceId(): string;
						public toString(): string;
						public constructor(param0: string, param1: string, param2: string, param3: java.util.Set<string>);
						public component2(): string;
						public getId$stripe_release(): string;
						public getSourceType(): string;
						public getProductUsage$stripe_release(): java.util.Set<string>;
						public component3$stripe_release(): string;
						public component4$stripe_release(): java.util.Set<string>;
						public copy(param0: string, param1: string, param2: string, param3: java.util.Set<string>): com.stripe.android.EphemeralOperation.Customer.UpdateDefaultSource;
					}
					export module UpdateDefaultSource {
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.EphemeralOperation.Customer.UpdateDefaultSource.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class UpdateShipping extends com.stripe.android.EphemeralOperation.Customer {
						public static class: java.lang.Class<com.stripe.android.EphemeralOperation.Customer.UpdateShipping>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public describeContents(): number;
						public constructor(param0: com.stripe.android.model.ShippingInformation, param1: string, param2: java.util.Set<string>);
						public component3$stripe_release(): java.util.Set<string>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public getShippingInformation(): com.stripe.android.model.ShippingInformation;
						public component1(): com.stripe.android.model.ShippingInformation;
						public getId$stripe_release(): string;
						public getProductUsage$stripe_release(): java.util.Set<string>;
						public component2$stripe_release(): string;
						public copy(param0: com.stripe.android.model.ShippingInformation, param1: string, param2: java.util.Set<string>): com.stripe.android.EphemeralOperation.Customer.UpdateShipping;
					}
					export module UpdateShipping {
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.EphemeralOperation.Customer.UpdateShipping.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
				export abstract class Issuing extends com.stripe.android.EphemeralOperation {
					public static class: java.lang.Class<com.stripe.android.EphemeralOperation.Issuing>;
					public getProductUsage$stripe_release(): java.util.Set<string>;
				}
				export module Issuing {
					export class RetrievePin extends com.stripe.android.EphemeralOperation.Issuing {
						public static class: java.lang.Class<com.stripe.android.EphemeralOperation.Issuing.RetrievePin>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public component3(): string;
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public component4$stripe_release(): string;
						public copy(param0: string, param1: string, param2: string, param3: string): com.stripe.android.EphemeralOperation.Issuing.RetrievePin;
						public toString(): string;
						public constructor(param0: string, param1: string, param2: string, param3: string);
						public component2(): string;
						public getCardId(): string;
						public getId$stripe_release(): string;
						public getVerificationId(): string;
						public getUserOneTimeCode(): string;
					}
					export module RetrievePin {
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.EphemeralOperation.Issuing.RetrievePin.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class UpdatePin extends com.stripe.android.EphemeralOperation.Issuing {
						public static class: java.lang.Class<com.stripe.android.EphemeralOperation.Issuing.UpdatePin>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public component3(): string;
						public describeContents(): number;
						public copy(param0: string, param1: string, param2: string, param3: string, param4: string): com.stripe.android.EphemeralOperation.Issuing.UpdatePin;
						public getNewPin(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public component4(): string;
						public component2(): string;
						public getCardId(): string;
						public getId$stripe_release(): string;
						public component5$stripe_release(): string;
						public getVerificationId(): string;
						public getUserOneTimeCode(): string;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string);
					}
					export module UpdatePin {
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.EphemeralOperation.Issuing.UpdatePin.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
				export class RetrieveKey extends com.stripe.android.EphemeralOperation {
					public static class: java.lang.Class<com.stripe.android.EphemeralOperation.RetrieveKey>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public equals(param0: any): boolean;
					public constructor(param0: string, param1: java.util.Set<string>);
					public toString(): string;
					public copy(param0: string, param1: java.util.Set<string>): com.stripe.android.EphemeralOperation.RetrieveKey;
					public describeContents(): number;
					public component2$stripe_release(): java.util.Set<string>;
					public component1$stripe_release(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getProductUsage$stripe_release(): java.util.Set<string>;
					public hashCode(): number;
					public getId$stripe_release(): string;
				}
				export module RetrieveKey {
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.EphemeralOperation.RetrieveKey.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class Factory0<ReturnType>  extends java.lang.Object {
				public static class: java.lang.Class<com.stripe.android.Factory0<any>>;
				/**
				 * Constructs a new instance of the com.stripe.android.Factory0<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					create(): ReturnType;
				});
				public constructor();
				public create(): ReturnType;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class Factory1<ArgType, ReturnType>  extends java.lang.Object {
				public static class: java.lang.Class<com.stripe.android.Factory1<any,any>>;
				/**
				 * Constructs a new instance of the com.stripe.android.Factory1<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					create(param0: ArgType): ReturnType;
				});
				public constructor();
				public create(param0: ArgType): ReturnType;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class FileUploadRequest extends com.stripe.android.StripeRequest {
				public static class: java.lang.Class<com.stripe.android.FileUploadRequest>;
				public static Companion: com.stripe.android.FileUploadRequest.Companion;
				public getMethod(): com.stripe.android.StripeRequest.Method;
				public writeBody$stripe_release(param0: java.io.OutputStream): void;
				public getBaseUrl(): string;
				public getMimeType(): com.stripe.android.StripeRequest.MimeType;
				public getContentType$stripe_release(): string;
				public getHeadersFactory(): com.stripe.android.RequestHeadersFactory;
				public getFileMetadata$stripe_release(): string;
				public getParams(): java.util.Map<string,any>;
				public constructor(param0: com.stripe.android.model.StripeFileParams, param1: com.stripe.android.ApiRequest.Options, param2: com.stripe.android.AppInfo, param3: kotlin.jvm.functions.Function1<any,string>, param4: string);
				public getPurposeContents$stripe_release(): string;
				public constructor();
			}
			export module FileUploadRequest {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.FileUploadRequest.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class FingerprintData extends com.stripe.android.model.StripeModel {
				public static class: java.lang.Class<com.stripe.android.FingerprintData>;
				public static KEY_TIMESTAMP: string;
				public static Companion: com.stripe.android.FingerprintData.Companion;
				public static CREATOR: globalAndroid.os.Parcelable.Creator;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public getParams(): java.util.Map<string,string>;
				public copy(param0: string, param1: string, param2: string, param3: number): com.stripe.android.FingerprintData;
				public getTimestamp$stripe_release(): number;
				public component4$stripe_release(): number;
				public toString(): string;
				public component2$stripe_release(): string;
				public isExpired(param0: number): boolean;
				public constructor(param0: string, param1: string, param2: string, param3: number);
				public component1$stripe_release(): string;
				public getSid$stripe_release(): string;
				public toJson(): org.json.JSONObject;
				public hashCode(): number;
				public getMuid$stripe_release(): string;
				public equals(param0: any): boolean;
				public describeContents(): number;
				public getGuid$stripe_release(): string;
				public component3$stripe_release(): string;
			}
			export module FingerprintData {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.FingerprintData.Companion>;
				}
				export class Creator {
					public static class: java.lang.Class<com.stripe.android.FingerprintData.Creator>;
					public constructor();
					public createFromParcel(param0: globalAndroid.os.Parcel): any;
					public newArray(param0: number): native.Array<any>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class FingerprintDataRepository {
				public static class: java.lang.Class<com.stripe.android.FingerprintDataRepository>;
				/**
				 * Constructs a new instance of the com.stripe.android.FingerprintDataRepository interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					refresh(): void;
					get(): com.stripe.android.FingerprintData;
					save(param0: com.stripe.android.FingerprintData): void;
				});
				public constructor();
				public refresh(): void;
				public save(param0: com.stripe.android.FingerprintData): void;
				public get(): com.stripe.android.FingerprintData;
			}
			export module FingerprintDataRepository {
				export class Default extends com.stripe.android.FingerprintDataRepository {
					public static class: java.lang.Class<com.stripe.android.FingerprintDataRepository.Default>;
					public refresh(): void;
					public constructor(param0: globalAndroid.content.Context);
					public save(param0: com.stripe.android.FingerprintData): void;
					public constructor(param0: com.stripe.android.FingerprintDataStore, param1: com.stripe.android.FingerprintRequestFactory, param2: com.stripe.android.FingerprintRequestExecutor, param3: kotlin.coroutines.CoroutineContext);
					public get(): com.stripe.android.FingerprintData;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class FingerprintDataStore {
				public static class: java.lang.Class<com.stripe.android.FingerprintDataStore>;
				/**
				 * Constructs a new instance of the com.stripe.android.FingerprintDataStore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					get(param0: kotlin.coroutines.Continuation<any>): any;
					save(param0: com.stripe.android.FingerprintData): void;
				});
				public constructor();
				public get(param0: kotlin.coroutines.Continuation<any>): any;
				public save(param0: com.stripe.android.FingerprintData): void;
			}
			export module FingerprintDataStore {
				export class Default extends com.stripe.android.FingerprintDataStore {
					public static class: java.lang.Class<com.stripe.android.FingerprintDataStore.Default>;
					public constructor(param0: globalAndroid.content.Context, param1: kotlinx.coroutines.CoroutineDispatcher);
					public save(param0: com.stripe.android.FingerprintData): void;
					public get(param0: kotlin.coroutines.Continuation<any>): any;
				}
				export module Default {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.FingerprintDataStore.Default.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class FingerprintParamsUtils {
				public static class: java.lang.Class<com.stripe.android.FingerprintParamsUtils>;
				public addFingerprintData$stripe_release(param0: java.util.Map<string,any>, param1: com.stripe.android.FingerprintData): java.util.Map<string,any>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class FingerprintRequest extends com.stripe.android.StripeRequest {
				public static class: java.lang.Class<com.stripe.android.FingerprintRequest>;
				public getMethod(): com.stripe.android.StripeRequest.Method;
				public getBody(): string;
				public getBaseUrl(): string;
				public getMimeType(): com.stripe.android.StripeRequest.MimeType;
				public getHeadersFactory(): com.stripe.android.RequestHeadersFactory;
				public getParams(): java.util.Map<string,any>;
				public constructor(param0: java.util.Map<string,any>, param1: string);
				public constructor();
			}
			export module FingerprintRequest {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.FingerprintRequest.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class FingerprintRequestExecutor {
				public static class: java.lang.Class<com.stripe.android.FingerprintRequestExecutor>;
				/**
				 * Constructs a new instance of the com.stripe.android.FingerprintRequestExecutor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					execute(param0: com.stripe.android.FingerprintRequest, param1: kotlin.coroutines.Continuation<any>): any;
				});
				public constructor();
				public execute(param0: com.stripe.android.FingerprintRequest, param1: kotlin.coroutines.Continuation<any>): any;
			}
			export module FingerprintRequestExecutor {
				export class Default extends com.stripe.android.FingerprintRequestExecutor {
					public static class: java.lang.Class<com.stripe.android.FingerprintRequestExecutor.Default>;
					public execute(param0: com.stripe.android.FingerprintRequest, param1: kotlin.coroutines.Continuation<any>): any;
					public constructor();
					public constructor(param0: com.stripe.android.ConnectionFactory, param1: kotlin.coroutines.CoroutineContext);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class FingerprintRequestFactory extends com.stripe.android.Factory1<com.stripe.android.FingerprintData,com.stripe.android.FingerprintRequest> {
				public static class: java.lang.Class<com.stripe.android.FingerprintRequestFactory>;
				public constructor(param0: com.stripe.android.FingerprintRequestParamsFactory);
				public constructor(param0: globalAndroid.content.Context);
				public create(param0: com.stripe.android.FingerprintData): com.stripe.android.FingerprintRequest;
				public create(param0: any): any;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class FingerprintRequestParamsFactory {
				public static class: java.lang.Class<com.stripe.android.FingerprintRequestParamsFactory>;
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.util.DisplayMetrics, param1: string, param2: string, param3: string);
			}
			export module FingerprintRequestParamsFactory {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.FingerprintRequestParamsFactory.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class GooglePayConfig {
				public static class: java.lang.Class<com.stripe.android.GooglePayConfig>;
				public constructor(param0: globalAndroid.content.Context, param1: string);
				public constructor(param0: globalAndroid.content.Context);
				public getTokenizationSpecification(): org.json.JSONObject;
				public constructor(param0: string, param1: string);
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class GooglePayJsonFactory {
				public static class: java.lang.Class<com.stripe.android.GooglePayJsonFactory>;
				public createPaymentDataRequest(param0: com.stripe.android.GooglePayJsonFactory.TransactionInfo, param1: com.stripe.android.GooglePayJsonFactory.BillingAddressParameters, param2: com.stripe.android.GooglePayJsonFactory.ShippingAddressParameters): org.json.JSONObject;
				public createIsReadyToPayRequest(param0: com.stripe.android.GooglePayJsonFactory.BillingAddressParameters, param1: java.lang.Boolean): org.json.JSONObject;
				public createIsReadyToPayRequest(param0: com.stripe.android.GooglePayJsonFactory.BillingAddressParameters): org.json.JSONObject;
				public createPaymentDataRequest(param0: com.stripe.android.GooglePayJsonFactory.TransactionInfo, param1: com.stripe.android.GooglePayJsonFactory.BillingAddressParameters, param2: com.stripe.android.GooglePayJsonFactory.ShippingAddressParameters, param3: boolean): org.json.JSONObject;
				public createPaymentDataRequest(param0: com.stripe.android.GooglePayJsonFactory.TransactionInfo, param1: com.stripe.android.GooglePayJsonFactory.BillingAddressParameters): org.json.JSONObject;
				public createPaymentDataRequest(param0: com.stripe.android.GooglePayJsonFactory.TransactionInfo): org.json.JSONObject;
				public constructor(param0: com.stripe.android.GooglePayConfig, param1: boolean);
				public createIsReadyToPayRequest(): org.json.JSONObject;
				public constructor(param0: globalAndroid.content.Context, param1: boolean);
				public createPaymentDataRequest(param0: com.stripe.android.GooglePayJsonFactory.TransactionInfo, param1: com.stripe.android.GooglePayJsonFactory.BillingAddressParameters, param2: com.stripe.android.GooglePayJsonFactory.ShippingAddressParameters, param3: boolean, param4: com.stripe.android.GooglePayJsonFactory.MerchantInfo): org.json.JSONObject;
			}
			export module GooglePayJsonFactory {
				export class BillingAddressParameters {
					public static class: java.lang.Class<com.stripe.android.GooglePayJsonFactory.BillingAddressParameters>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public isRequired$stripe_release(): boolean;
					public describeContents(): number;
					public component2$stripe_release(): com.stripe.android.GooglePayJsonFactory.BillingAddressParameters.Format;
					public copy(param0: boolean, param1: com.stripe.android.GooglePayJsonFactory.BillingAddressParameters.Format, param2: boolean): com.stripe.android.GooglePayJsonFactory.BillingAddressParameters;
					public getFormat$stripe_release(): com.stripe.android.GooglePayJsonFactory.BillingAddressParameters.Format;
					public component1$stripe_release(): boolean;
					public component3$stripe_release(): boolean;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: boolean);
					public isPhoneNumberRequired$stripe_release(): boolean;
					public constructor();
					public constructor(param0: boolean, param1: com.stripe.android.GooglePayJsonFactory.BillingAddressParameters.Format);
					public constructor(param0: boolean, param1: com.stripe.android.GooglePayJsonFactory.BillingAddressParameters.Format, param2: boolean);
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public hashCode(): number;
				}
				export module BillingAddressParameters {
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.GooglePayJsonFactory.BillingAddressParameters.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
					export class Format {
						public static class: java.lang.Class<com.stripe.android.GooglePayJsonFactory.BillingAddressParameters.Format>;
						public static Min: com.stripe.android.GooglePayJsonFactory.BillingAddressParameters.Format;
						public static Full: com.stripe.android.GooglePayJsonFactory.BillingAddressParameters.Format;
						public static values(): native.Array<com.stripe.android.GooglePayJsonFactory.BillingAddressParameters.Format>;
						public getCode$stripe_release(): string;
						public static valueOf(param0: string): com.stripe.android.GooglePayJsonFactory.BillingAddressParameters.Format;
					}
				}
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.GooglePayJsonFactory.Companion>;
				}
				export class MerchantInfo {
					public static class: java.lang.Class<com.stripe.android.GooglePayJsonFactory.MerchantInfo>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: string);
					public constructor();
					public getMerchantName$stripe_release(): string;
					public describeContents(): number;
					public copy(param0: string): com.stripe.android.GooglePayJsonFactory.MerchantInfo;
					public component1$stripe_release(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public hashCode(): number;
				}
				export module MerchantInfo {
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.GooglePayJsonFactory.MerchantInfo.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
				export class ShippingAddressParameters {
					public static class: java.lang.Class<com.stripe.android.GooglePayJsonFactory.ShippingAddressParameters>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public isRequired$stripe_release(): boolean;
					public constructor(param0: boolean, param1: java.util.Set<string>, param2: boolean);
					public copy(param0: boolean, param1: java.util.Set<string>, param2: boolean): com.stripe.android.GooglePayJsonFactory.ShippingAddressParameters;
					public describeContents(): number;
					public getPhoneNumberRequired$stripe_release(): boolean;
					public component1$stripe_release(): boolean;
					public component3$stripe_release(): boolean;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: boolean);
					public constructor();
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getNormalizedAllowedCountryCodes$stripe_release(): java.util.Set<string>;
					public hashCode(): number;
					public constructor(param0: boolean, param1: java.util.Set<string>);
				}
				export module ShippingAddressParameters {
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.GooglePayJsonFactory.ShippingAddressParameters.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
				export class TransactionInfo {
					public static class: java.lang.Class<com.stripe.android.GooglePayJsonFactory.TransactionInfo>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public getTransactionId$stripe_release(): string;
					public constructor(param0: string, param1: com.stripe.android.GooglePayJsonFactory.TransactionInfo.TotalPriceStatus, param2: string, param3: string);
					public component7$stripe_release(): com.stripe.android.GooglePayJsonFactory.TransactionInfo.CheckoutOption;
					public constructor(param0: string, param1: com.stripe.android.GooglePayJsonFactory.TransactionInfo.TotalPriceStatus, param2: string, param3: string, param4: java.lang.Integer);
					public constructor(param0: string, param1: com.stripe.android.GooglePayJsonFactory.TransactionInfo.TotalPriceStatus, param2: string);
					public component1$stripe_release(): string;
					public component6$stripe_release(): string;
					public getCheckoutOption$stripe_release(): com.stripe.android.GooglePayJsonFactory.TransactionInfo.CheckoutOption;
					public constructor(param0: string, param1: com.stripe.android.GooglePayJsonFactory.TransactionInfo.TotalPriceStatus, param2: string, param3: string, param4: java.lang.Integer, param5: string);
					public getTotalPrice$stripe_release(): java.lang.Integer;
					public getTotalPriceLabel$stripe_release(): string;
					public toString(): string;
					public component2$stripe_release(): com.stripe.android.GooglePayJsonFactory.TransactionInfo.TotalPriceStatus;
					public copy(param0: string, param1: com.stripe.android.GooglePayJsonFactory.TransactionInfo.TotalPriceStatus, param2: string, param3: string, param4: java.lang.Integer, param5: string, param6: com.stripe.android.GooglePayJsonFactory.TransactionInfo.CheckoutOption): com.stripe.android.GooglePayJsonFactory.TransactionInfo;
					public constructor(param0: string, param1: com.stripe.android.GooglePayJsonFactory.TransactionInfo.TotalPriceStatus);
					public hashCode(): number;
					public constructor(param0: string, param1: com.stripe.android.GooglePayJsonFactory.TransactionInfo.TotalPriceStatus, param2: string, param3: string, param4: java.lang.Integer, param5: string, param6: com.stripe.android.GooglePayJsonFactory.TransactionInfo.CheckoutOption);
					public getCountryCode$stripe_release(): string;
					public component3$stripe_release(): string;
					public describeContents(): number;
					public getTotalPriceStatus$stripe_release(): com.stripe.android.GooglePayJsonFactory.TransactionInfo.TotalPriceStatus;
					public equals(param0: any): boolean;
					public getCurrencyCode$stripe_release(): string;
					public component4$stripe_release(): string;
					public component5$stripe_release(): java.lang.Integer;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
				export module TransactionInfo {
					export class CheckoutOption {
						public static class: java.lang.Class<com.stripe.android.GooglePayJsonFactory.TransactionInfo.CheckoutOption>;
						public static Default: com.stripe.android.GooglePayJsonFactory.TransactionInfo.CheckoutOption;
						public static CompleteImmediatePurchase: com.stripe.android.GooglePayJsonFactory.TransactionInfo.CheckoutOption;
						public getCode$stripe_release(): string;
						public static values(): native.Array<com.stripe.android.GooglePayJsonFactory.TransactionInfo.CheckoutOption>;
						public static valueOf(param0: string): com.stripe.android.GooglePayJsonFactory.TransactionInfo.CheckoutOption;
					}
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.GooglePayJsonFactory.TransactionInfo.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
					export class TotalPriceStatus {
						public static class: java.lang.Class<com.stripe.android.GooglePayJsonFactory.TransactionInfo.TotalPriceStatus>;
						public static NotCurrentlyKnown: com.stripe.android.GooglePayJsonFactory.TransactionInfo.TotalPriceStatus;
						public static Estimated: com.stripe.android.GooglePayJsonFactory.TransactionInfo.TotalPriceStatus;
						public static Final: com.stripe.android.GooglePayJsonFactory.TransactionInfo.TotalPriceStatus;
						public static valueOf(param0: string): com.stripe.android.GooglePayJsonFactory.TransactionInfo.TotalPriceStatus;
						public getCode$stripe_release(): string;
						public static values(): native.Array<com.stripe.android.GooglePayJsonFactory.TransactionInfo.TotalPriceStatus>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class IssuingCardPinService {
				public static class: java.lang.Class<com.stripe.android.IssuingCardPinService>;
				public static Companion: com.stripe.android.IssuingCardPinService.Companion;
				public static create(param0: globalAndroid.content.Context, param1: string, param2: com.stripe.android.EphemeralKeyProvider): com.stripe.android.IssuingCardPinService;
				public retrievePin(param0: string, param1: string, param2: string, param3: com.stripe.android.IssuingCardPinService.IssuingCardPinRetrievalListener): void;
				public static create(param0: globalAndroid.content.Context, param1: com.stripe.android.EphemeralKeyProvider): com.stripe.android.IssuingCardPinService;
				public updatePin(param0: string, param1: string, param2: string, param3: string, param4: com.stripe.android.IssuingCardPinService.IssuingCardPinUpdateListener): void;
				public constructor(param0: com.stripe.android.EphemeralKeyProvider, param1: com.stripe.android.StripeRepository, param2: com.stripe.android.OperationIdFactory);
			}
			export module IssuingCardPinService {
				export class CardPinActionError {
					public static class: java.lang.Class<com.stripe.android.IssuingCardPinService.CardPinActionError>;
					public static UNKNOWN_ERROR: com.stripe.android.IssuingCardPinService.CardPinActionError;
					public static EPHEMERAL_KEY_ERROR: com.stripe.android.IssuingCardPinService.CardPinActionError;
					public static ONE_TIME_CODE_INCORRECT: com.stripe.android.IssuingCardPinService.CardPinActionError;
					public static ONE_TIME_CODE_EXPIRED: com.stripe.android.IssuingCardPinService.CardPinActionError;
					public static ONE_TIME_CODE_TOO_MANY_ATTEMPTS: com.stripe.android.IssuingCardPinService.CardPinActionError;
					public static ONE_TIME_CODE_ALREADY_REDEEMED: com.stripe.android.IssuingCardPinService.CardPinActionError;
					public static values(): native.Array<com.stripe.android.IssuingCardPinService.CardPinActionError>;
					public static valueOf(param0: string): com.stripe.android.IssuingCardPinService.CardPinActionError;
				}
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.IssuingCardPinService.Companion>;
					public create(param0: globalAndroid.content.Context, param1: com.stripe.android.EphemeralKeyProvider): com.stripe.android.IssuingCardPinService;
					public create(param0: globalAndroid.content.Context, param1: string, param2: com.stripe.android.EphemeralKeyProvider): com.stripe.android.IssuingCardPinService;
				}
				export class IssuingCardPinRetrievalListener extends com.stripe.android.IssuingCardPinService.Listener {
					public static class: java.lang.Class<com.stripe.android.IssuingCardPinService.IssuingCardPinRetrievalListener>;
					/**
					 * Constructs a new instance of the com.stripe.android.IssuingCardPinService$IssuingCardPinRetrievalListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onIssuingCardPinRetrieved(param0: string): void;
						onError(param0: com.stripe.android.IssuingCardPinService.CardPinActionError, param1: string, param2: java.lang.Throwable): void;
					});
					public constructor();
					public onError(param0: com.stripe.android.IssuingCardPinService.CardPinActionError, param1: string, param2: java.lang.Throwable): void;
					public onIssuingCardPinRetrieved(param0: string): void;
				}
				export class IssuingCardPinUpdateListener extends com.stripe.android.IssuingCardPinService.Listener {
					public static class: java.lang.Class<com.stripe.android.IssuingCardPinService.IssuingCardPinUpdateListener>;
					/**
					 * Constructs a new instance of the com.stripe.android.IssuingCardPinService$IssuingCardPinUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onIssuingCardPinUpdated(): void;
						onError(param0: com.stripe.android.IssuingCardPinService.CardPinActionError, param1: string, param2: java.lang.Throwable): void;
					});
					public constructor();
					public onError(param0: com.stripe.android.IssuingCardPinService.CardPinActionError, param1: string, param2: java.lang.Throwable): void;
					public onIssuingCardPinUpdated(): void;
				}
				export class Listener {
					public static class: java.lang.Class<com.stripe.android.IssuingCardPinService.Listener>;
					/**
					 * Constructs a new instance of the com.stripe.android.IssuingCardPinService$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onError(param0: com.stripe.android.IssuingCardPinService.CardPinActionError, param1: string, param2: java.lang.Throwable): void;
					});
					public constructor();
					public onError(param0: com.stripe.android.IssuingCardPinService.CardPinActionError, param1: string, param2: java.lang.Throwable): void;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class Logger {
				public static class: java.lang.Class<com.stripe.android.Logger>;
				/**
				 * Constructs a new instance of the com.stripe.android.Logger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					error(param0: string, param1: java.lang.Throwable): void;
					info(param0: string): void;
					debug(param0: string): void;
					<clinit>(): void;
				});
				public constructor();
				public static Companion: com.stripe.android.Logger.Companion;
				public error(param0: string, param1: java.lang.Throwable): void;
				public info(param0: string): void;
				public debug(param0: string): void;
			}
			export module Logger {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.Logger.Companion>;
					public getInstance$stripe_release(param0: boolean): com.stripe.android.Logger;
					public noop$stripe_release(): com.stripe.android.Logger;
					public real$stripe_release(): com.stripe.android.Logger;
				}
				export class DefaultImpls {
					public static class: java.lang.Class<com.stripe.android.Logger.DefaultImpls>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class ObjectBuilder<ObjectType>  extends java.lang.Object {
				public static class: java.lang.Class<com.stripe.android.ObjectBuilder<any>>;
				/**
				 * Constructs a new instance of the com.stripe.android.ObjectBuilder<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					build(): ObjectType;
				});
				public constructor();
				public build(): ObjectType;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class OperationIdFactory {
				public static class: java.lang.Class<com.stripe.android.OperationIdFactory>;
				/**
				 * Constructs a new instance of the com.stripe.android.OperationIdFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					create(): string;
					<clinit>(): void;
				});
				public constructor();
				public static Companion: com.stripe.android.OperationIdFactory.Companion;
				public create(): string;
			}
			export module OperationIdFactory {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.OperationIdFactory.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class PayWithGoogleUtils {
				public static class: java.lang.Class<com.stripe.android.PayWithGoogleUtils>;
				public static INSTANCE: com.stripe.android.PayWithGoogleUtils;
				public static getPriceString(param0: number, param1: java.util.Currency): string;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class PaymentAuthConfig {
				public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig>;
				public static Companion: com.stripe.android.PaymentAuthConfig.Companion;
				public getStripe3ds2Config$stripe_release(): com.stripe.android.PaymentAuthConfig.Stripe3ds2Config;
				public static init(param0: com.stripe.android.PaymentAuthConfig): void;
				public static get(): com.stripe.android.PaymentAuthConfig;
			}
			export module PaymentAuthConfig {
				export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.PaymentAuthConfig> {
					public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Builder>;
					public build(): com.stripe.android.PaymentAuthConfig;
					public constructor();
					public build(): any;
					public set3ds2Config(param0: com.stripe.android.PaymentAuthConfig.Stripe3ds2Config): com.stripe.android.PaymentAuthConfig.Builder;
				}
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Companion>;
					public get(): com.stripe.android.PaymentAuthConfig;
					public init(param0: com.stripe.android.PaymentAuthConfig): void;
				}
				export class Stripe3ds2ButtonCustomization {
					public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2ButtonCustomization>;
					public component1$stripe_release(): com.stripe.android.stripe3ds2.init.ui.ButtonCustomization;
					public equals(param0: any): boolean;
					public toString(): string;
					public getButtonCustomization$stripe_release(): com.stripe.android.stripe3ds2.init.ui.ButtonCustomization;
					public constructor(param0: com.stripe.android.stripe3ds2.init.ui.ButtonCustomization);
					public copy(param0: com.stripe.android.stripe3ds2.init.ui.ButtonCustomization): com.stripe.android.PaymentAuthConfig.Stripe3ds2ButtonCustomization;
					public hashCode(): number;
				}
				export module Stripe3ds2ButtonCustomization {
					export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.PaymentAuthConfig.Stripe3ds2ButtonCustomization> {
						public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2ButtonCustomization.Builder>;
						public constructor();
						public setCornerRadius(param0: number): com.stripe.android.PaymentAuthConfig.Stripe3ds2ButtonCustomization.Builder;
						public build(): com.stripe.android.PaymentAuthConfig.Stripe3ds2ButtonCustomization;
						public setTextFontName(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2ButtonCustomization.Builder;
						public setTextFontSize(param0: number): com.stripe.android.PaymentAuthConfig.Stripe3ds2ButtonCustomization.Builder;
						public setBackgroundColor(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2ButtonCustomization.Builder;
						public setTextColor(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2ButtonCustomization.Builder;
						public build(): any;
					}
				}
				export class Stripe3ds2Config {
					public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2Config>;
					public static DEFAULT_TIMEOUT: number;
					public static Companion: com.stripe.android.PaymentAuthConfig.Stripe3ds2Config.Companion;
					public equals(param0: any): boolean;
					public getUiCustomization$stripe_release(): com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization;
					public toString(): string;
					public component2$stripe_release(): com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization;
					public copy(param0: number, param1: com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization): com.stripe.android.PaymentAuthConfig.Stripe3ds2Config;
					public getTimeout$stripe_release(): number;
					public component1$stripe_release(): number;
					public constructor(param0: number, param1: com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization);
					public hashCode(): number;
				}
				export module Stripe3ds2Config {
					export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.PaymentAuthConfig.Stripe3ds2Config> {
						public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2Config.Builder>;
						public setUiCustomization(param0: com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization): com.stripe.android.PaymentAuthConfig.Stripe3ds2Config.Builder;
						public constructor();
						public build(): com.stripe.android.PaymentAuthConfig.Stripe3ds2Config;
						public setTimeout(param0: number): com.stripe.android.PaymentAuthConfig.Stripe3ds2Config.Builder;
						public build(): any;
					}
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2Config.Companion>;
					}
				}
				export class Stripe3ds2LabelCustomization {
					public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization>;
					public getLabelCustomization$stripe_release(): com.stripe.android.stripe3ds2.init.ui.LabelCustomization;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: com.stripe.android.stripe3ds2.init.ui.LabelCustomization);
					public copy(param0: com.stripe.android.stripe3ds2.init.ui.LabelCustomization): com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization;
					public hashCode(): number;
					public component1$stripe_release(): com.stripe.android.stripe3ds2.init.ui.LabelCustomization;
				}
				export module Stripe3ds2LabelCustomization {
					export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization> {
						public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization.Builder>;
						public constructor();
						public setHeadingTextFontName(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization.Builder;
						public setTextFontSize(param0: number): com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization.Builder;
						public build(): com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization;
						public setHeadingTextColor(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization.Builder;
						public setTextColor(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization.Builder;
						public setHeadingTextFontSize(param0: number): com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization.Builder;
						public setTextFontName(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization.Builder;
						public build(): any;
					}
				}
				export class Stripe3ds2TextBoxCustomization {
					public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization>;
					public equals(param0: any): boolean;
					public component1$stripe_release(): com.stripe.android.stripe3ds2.init.ui.TextBoxCustomization;
					public toString(): string;
					public constructor(param0: com.stripe.android.stripe3ds2.init.ui.TextBoxCustomization);
					public getTextBoxCustomization$stripe_release(): com.stripe.android.stripe3ds2.init.ui.TextBoxCustomization;
					public copy(param0: com.stripe.android.stripe3ds2.init.ui.TextBoxCustomization): com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization;
					public hashCode(): number;
				}
				export module Stripe3ds2TextBoxCustomization {
					export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization> {
						public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization.Builder>;
						public build(): com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization;
						public constructor();
						public setTextFontSize(param0: number): com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization.Builder;
						public setBorderWidth(param0: number): com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization.Builder;
						public setBorderColor(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization.Builder;
						public setTextFontName(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization.Builder;
						public setTextColor(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization.Builder;
						public setCornerRadius(param0: number): com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization.Builder;
						public build(): any;
					}
				}
				export class Stripe3ds2ToolbarCustomization {
					public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization>;
					public equals(param0: any): boolean;
					public getToolbarCustomization$stripe_release(): com.stripe.android.stripe3ds2.init.ui.ToolbarCustomization;
					public copy(param0: com.stripe.android.stripe3ds2.init.ui.ToolbarCustomization): com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization;
					public toString(): string;
					public component1$stripe_release(): com.stripe.android.stripe3ds2.init.ui.ToolbarCustomization;
					public constructor(param0: com.stripe.android.stripe3ds2.init.ui.ToolbarCustomization);
					public hashCode(): number;
				}
				export module Stripe3ds2ToolbarCustomization {
					export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization> {
						public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization.Builder>;
						public setTextColor(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization.Builder;
						public constructor();
						public setButtonText(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization.Builder;
						public setTextFontName(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization.Builder;
						public setStatusBarColor(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization.Builder;
						public setBackgroundColor(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization.Builder;
						public build(): com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization;
						public setHeaderText(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization.Builder;
						public setTextFontSize(param0: number): com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization.Builder;
						public build(): any;
					}
				}
				export class Stripe3ds2UiCustomization {
					public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization>;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): com.stripe.android.stripe3ds2.init.ui.StripeUiCustomization;
					public copy(param0: com.stripe.android.stripe3ds2.init.ui.StripeUiCustomization): com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization;
					public constructor(param0: com.stripe.android.stripe3ds2.init.ui.StripeUiCustomization);
					public hashCode(): number;
					public getUiCustomization(): com.stripe.android.stripe3ds2.init.ui.StripeUiCustomization;
				}
				export module Stripe3ds2UiCustomization {
					export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization> {
						public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.Builder>;
						public static Companion: com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.Builder.Companion;
						public setAccentColor(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.Builder;
						public constructor();
						public setButtonCustomization(param0: com.stripe.android.PaymentAuthConfig.Stripe3ds2ButtonCustomization, param1: com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.ButtonType): com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.Builder;
						public setTextBoxCustomization(param0: com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization): com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.Builder;
						public static createWithAppTheme(param0: globalAndroid.app.Activity): com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.Builder;
						public build(): com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization;
						public setToolbarCustomization(param0: com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization): com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.Builder;
						public setLabelCustomization(param0: com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization): com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.Builder;
						public build(): any;
					}
					export module Builder {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.Builder.Companion>;
							public createWithAppTheme(param0: globalAndroid.app.Activity): com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.Builder;
						}
						export class WhenMappings {
							public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.Builder.WhenMappings>;
						}
					}
					export class ButtonType {
						public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.ButtonType>;
						public static SUBMIT: com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.ButtonType;
						public static CONTINUE: com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.ButtonType;
						public static NEXT: com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.ButtonType;
						public static CANCEL: com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.ButtonType;
						public static RESEND: com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.ButtonType;
						public static SELECT: com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.ButtonType;
						public static values(): native.Array<com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.ButtonType>;
						public static valueOf(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.ButtonType;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class PaymentAuthWebViewStarter extends com.stripe.android.view.AuthActivityStarter<com.stripe.android.PaymentAuthWebViewStarter.Args> {
				public static class: java.lang.Class<com.stripe.android.PaymentAuthWebViewStarter>;
				public static EXTRA_ARGS: string;
				public static Companion: com.stripe.android.PaymentAuthWebViewStarter.Companion;
				public constructor(param0: com.stripe.android.view.AuthActivityStarter.Host, param1: number);
				public start(param0: any): void;
				public start(param0: com.stripe.android.PaymentAuthWebViewStarter.Args): void;
			}
			export module PaymentAuthWebViewStarter {
				export class Args {
					public static class: java.lang.Class<com.stripe.android.PaymentAuthWebViewStarter.Args>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public copy(param0: string, param1: string, param2: string, param3: boolean, param4: com.stripe.android.stripe3ds2.init.ui.StripeToolbarCustomization, param5: string, param6: boolean, param7: boolean): com.stripe.android.PaymentAuthWebViewStarter.Args;
					public constructor(param0: string, param1: string, param2: string, param3: boolean, param4: com.stripe.android.stripe3ds2.init.ui.StripeToolbarCustomization, param5: string, param6: boolean, param7: boolean);
					public component2(): string;
					public getEnableLogging(): boolean;
					public describeContents(): number;
					public component3(): string;
					public getToolbarCustomization(): com.stripe.android.stripe3ds2.init.ui.StripeToolbarCustomization;
					public getClientSecret(): string;
					public getStripeAccountId(): string;
					public getShouldCancelIntentOnUserNavigation(): boolean;
					public component7(): boolean;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): string;
					public getUrl(): string;
					public getShouldCancelSource(): boolean;
					public component4(): boolean;
					public component8(): boolean;
					public component6(): string;
					public getReturnUrl(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public hashCode(): number;
					public component5(): com.stripe.android.stripe3ds2.init.ui.StripeToolbarCustomization;
				}
				export module Args {
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.PaymentAuthWebViewStarter.Args.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.PaymentAuthWebViewStarter.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class PaymentConfiguration {
				public static class: java.lang.Class<com.stripe.android.PaymentConfiguration>;
				public static Companion: com.stripe.android.PaymentConfiguration.Companion;
				public static CREATOR: globalAndroid.os.Parcelable.Creator;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public static init(param0: globalAndroid.content.Context, param1: string): void;
				public getPublishableKey(): string;
				public component1(): string;
				public copy(param0: string, param1: string): com.stripe.android.PaymentConfiguration;
				public toString(): string;
				public hashCode(): number;
				public getStripeAccountId(): string;
				public component2(): string;
				public equals(param0: any): boolean;
				public describeContents(): number;
				public static getInstance(param0: globalAndroid.content.Context): com.stripe.android.PaymentConfiguration;
				public static init(param0: globalAndroid.content.Context, param1: string, param2: string): void;
				public constructor(param0: string, param1: string);
			}
			export module PaymentConfiguration {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.PaymentConfiguration.Companion>;
					public init(param0: globalAndroid.content.Context, param1: string, param2: string): void;
					public init(param0: globalAndroid.content.Context, param1: string): void;
					public getInstance(param0: globalAndroid.content.Context): com.stripe.android.PaymentConfiguration;
				}
				export class Creator {
					public static class: java.lang.Class<com.stripe.android.PaymentConfiguration.Creator>;
					public constructor();
					public createFromParcel(param0: globalAndroid.os.Parcel): any;
					public newArray(param0: number): native.Array<any>;
				}
				export class Store {
					public static class: java.lang.Class<com.stripe.android.PaymentConfiguration.Store>;
					public constructor(param0: globalAndroid.content.Context);
				}
				export module Store {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.PaymentConfiguration.Store.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class PaymentController {
				public static class: java.lang.Class<com.stripe.android.PaymentController>;
				/**
				 * Constructs a new instance of the com.stripe.android.PaymentController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					startConfirmAndAuth(param0: com.stripe.android.view.AuthActivityStarter.Host, param1: com.stripe.android.model.ConfirmStripeIntentParams, param2: com.stripe.android.ApiRequest.Options): void;
					startConfirm(param0: com.stripe.android.model.ConfirmStripeIntentParams, param1: com.stripe.android.ApiRequest.Options, param2: com.stripe.android.ApiResultCallback<any>): void;
					startAuth(param0: com.stripe.android.view.AuthActivityStarter.Host, param1: string, param2: com.stripe.android.ApiRequest.Options): void;
					startAuthenticateSource(param0: com.stripe.android.view.AuthActivityStarter.Host, param1: com.stripe.android.model.Source, param2: com.stripe.android.ApiRequest.Options): void;
					shouldHandlePaymentResult(param0: number, param1: globalAndroid.content.Intent): boolean;
					shouldHandleSetupResult(param0: number, param1: globalAndroid.content.Intent): boolean;
					shouldHandleSourceResult(param0: number, param1: globalAndroid.content.Intent): boolean;
					handlePaymentResult(param0: globalAndroid.content.Intent, param1: com.stripe.android.ApiResultCallback<any>): void;
					handleSetupResult(param0: globalAndroid.content.Intent, param1: com.stripe.android.ApiResultCallback<any>): void;
					handleSourceResult(param0: globalAndroid.content.Intent, param1: com.stripe.android.ApiResultCallback<any>): void;
					handleNextAction(param0: com.stripe.android.view.AuthActivityStarter.Host, param1: com.stripe.android.model.StripeIntent, param2: com.stripe.android.ApiRequest.Options): void;
					authenticateAlipay(param0: com.stripe.android.model.StripeIntent, param1: string, param2: com.stripe.android.AlipayAuthenticator, param3: com.stripe.android.ApiResultCallback<any>): void;
				});
				public constructor();
				public startConfirmAndAuth(param0: com.stripe.android.view.AuthActivityStarter.Host, param1: com.stripe.android.model.ConfirmStripeIntentParams, param2: com.stripe.android.ApiRequest.Options): void;
				public shouldHandlePaymentResult(param0: number, param1: globalAndroid.content.Intent): boolean;
				public handleSetupResult(param0: globalAndroid.content.Intent, param1: com.stripe.android.ApiResultCallback<any>): void;
				public authenticateAlipay(param0: com.stripe.android.model.StripeIntent, param1: string, param2: com.stripe.android.AlipayAuthenticator, param3: com.stripe.android.ApiResultCallback<any>): void;
				public handleNextAction(param0: com.stripe.android.view.AuthActivityStarter.Host, param1: com.stripe.android.model.StripeIntent, param2: com.stripe.android.ApiRequest.Options): void;
				public startConfirm(param0: com.stripe.android.model.ConfirmStripeIntentParams, param1: com.stripe.android.ApiRequest.Options, param2: com.stripe.android.ApiResultCallback<any>): void;
				public startAuthenticateSource(param0: com.stripe.android.view.AuthActivityStarter.Host, param1: com.stripe.android.model.Source, param2: com.stripe.android.ApiRequest.Options): void;
				public shouldHandleSourceResult(param0: number, param1: globalAndroid.content.Intent): boolean;
				public handlePaymentResult(param0: globalAndroid.content.Intent, param1: com.stripe.android.ApiResultCallback<any>): void;
				public handleSourceResult(param0: globalAndroid.content.Intent, param1: com.stripe.android.ApiResultCallback<any>): void;
				public shouldHandleSetupResult(param0: number, param1: globalAndroid.content.Intent): boolean;
				public startAuth(param0: com.stripe.android.view.AuthActivityStarter.Host, param1: string, param2: com.stripe.android.ApiRequest.Options): void;
			}
			export module PaymentController {
				export class Result {
					public static class: java.lang.Class<com.stripe.android.PaymentController.Result>;
					public static Companion: com.stripe.android.PaymentController.Result.Companion;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public getClientSecret$stripe_release(): string;
					public constructor(param0: string, param1: number, param2: com.stripe.android.exception.StripeException, param3: boolean, param4: string, param5: com.stripe.android.model.Source, param6: string);
					public component3$stripe_release(): com.stripe.android.exception.StripeException;
					public getShouldCancelSource$stripe_release(): boolean;
					public getSource$stripe_release(): com.stripe.android.model.Source;
					public describeContents(): number;
					public component1$stripe_release(): string;
					public getException$stripe_release(): com.stripe.android.exception.StripeException;
					public equals(param0: any): boolean;
					public component2$stripe_release(): number;
					public toString(): string;
					public copy(param0: string, param1: number, param2: com.stripe.android.exception.StripeException, param3: boolean, param4: string, param5: com.stripe.android.model.Source, param6: string): com.stripe.android.PaymentController.Result;
					public constructor();
					public getSourceId$stripe_release(): string;
					public getStripeAccountId$stripe_release(): string;
					public getFlowOutcome$stripe_release(): number;
					public component5$stripe_release(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public hashCode(): number;
					public component6$stripe_release(): com.stripe.android.model.Source;
					public component4$stripe_release(): boolean;
					public component7$stripe_release(): string;
				}
				export module Result {
					export class Companion extends kotlinx.android.parcel.Parceler<com.stripe.android.PaymentController.Result> {
						public static class: java.lang.Class<com.stripe.android.PaymentController.Result.Companion>;
						public newArray(param0: number): native.Array<com.stripe.android.PaymentController.Result>;
						public write(param0: com.stripe.android.PaymentController.Result, param1: globalAndroid.os.Parcel, param2: number): void;
						public create(param0: globalAndroid.os.Parcel): com.stripe.android.PaymentController.Result;
					}
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.PaymentController.Result.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class PaymentIntentResult extends com.stripe.android.StripeIntentResult<com.stripe.android.model.PaymentIntent> {
				public static class: java.lang.Class<com.stripe.android.PaymentIntentResult>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public getIntent(): any;
				public toString(): string;
				public getFailureMessage(): string;
				public component3(): string;
				public hashCode(): number;
				public getIntent(): com.stripe.android.model.PaymentIntent;
				public copy(param0: com.stripe.android.model.PaymentIntent, param1: number, param2: string): com.stripe.android.PaymentIntentResult;
				public equals(param0: any): boolean;
				public describeContents(): number;
				public constructor(param0: number);
				public component1(): com.stripe.android.model.PaymentIntent;
				public constructor(param0: com.stripe.android.model.PaymentIntent, param1: number, param2: string);
			}
			export module PaymentIntentResult {
				export class Creator {
					public static class: java.lang.Class<com.stripe.android.PaymentIntentResult.Creator>;
					public constructor();
					public createFromParcel(param0: globalAndroid.os.Parcel): any;
					public newArray(param0: number): native.Array<any>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class PaymentRelayStarter extends com.stripe.android.view.AuthActivityStarter<com.stripe.android.PaymentRelayStarter.Args> {
				public static class: java.lang.Class<com.stripe.android.PaymentRelayStarter>;
				/**
				 * Constructs a new instance of the com.stripe.android.PaymentRelayStarter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					<clinit>(): void;
					start(param0: any): void;
				});
				public constructor();
				public static Companion: com.stripe.android.PaymentRelayStarter.Companion;
				public start(param0: any): void;
			}
			export module PaymentRelayStarter {
				export class Args {
					public static class: java.lang.Class<com.stripe.android.PaymentRelayStarter.Args>;
					public static Companion: com.stripe.android.PaymentRelayStarter.Args.Companion;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public getSource(): com.stripe.android.model.Source;
					public component3(): com.stripe.android.exception.StripeException;
					public component1(): com.stripe.android.model.StripeIntent;
					public describeContents(): number;
					public getStripeAccountId(): string;
					public equals(param0: any): boolean;
					public getStripeIntent(): com.stripe.android.model.StripeIntent;
					public component2(): com.stripe.android.model.Source;
					public copy(param0: com.stripe.android.model.StripeIntent, param1: com.stripe.android.model.Source, param2: com.stripe.android.exception.StripeException, param3: string): com.stripe.android.PaymentRelayStarter.Args;
					public toString(): string;
					public getException(): com.stripe.android.exception.StripeException;
					public constructor();
					public constructor(param0: com.stripe.android.model.StripeIntent, param1: com.stripe.android.model.Source, param2: com.stripe.android.exception.StripeException, param3: string);
					public component4(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public hashCode(): number;
				}
				export module Args {
					export class Companion extends kotlinx.android.parcel.Parceler<com.stripe.android.PaymentRelayStarter.Args> {
						public static class: java.lang.Class<com.stripe.android.PaymentRelayStarter.Args.Companion>;
						public write(param0: com.stripe.android.PaymentRelayStarter.Args, param1: globalAndroid.os.Parcel, param2: number): void;
						public create(param0: globalAndroid.os.Parcel): com.stripe.android.PaymentRelayStarter.Args;
						public newArray(param0: number): native.Array<com.stripe.android.PaymentRelayStarter.Args>;
					}
					export module Companion {
						export class StripeIntentType {
							public static class: java.lang.Class<com.stripe.android.PaymentRelayStarter.Args.Companion.StripeIntentType>;
							public static None: com.stripe.android.PaymentRelayStarter.Args.Companion.StripeIntentType;
							public static PaymentIntent: com.stripe.android.PaymentRelayStarter.Args.Companion.StripeIntentType;
							public static SetupIntent: com.stripe.android.PaymentRelayStarter.Args.Companion.StripeIntentType;
							public static values(): native.Array<com.stripe.android.PaymentRelayStarter.Args.Companion.StripeIntentType>;
							public static valueOf(param0: string): com.stripe.android.PaymentRelayStarter.Args.Companion.StripeIntentType;
						}
						export class WhenMappings {
							public static class: java.lang.Class<com.stripe.android.PaymentRelayStarter.Args.Companion.WhenMappings>;
						}
					}
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.PaymentRelayStarter.Args.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.PaymentRelayStarter.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class PaymentSession {
				public static class: java.lang.Class<com.stripe.android.PaymentSession>;
				public static PRODUCT_TOKEN: string;
				public static EXTRA_PAYMENT_SESSION_DATA: string;
				public static Companion: com.stripe.android.PaymentSession.Companion;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.app.Application, param2: androidx.lifecycle.ViewModelStoreOwner, param3: androidx.lifecycle.LifecycleOwner, param4: androidx.savedstate.SavedStateRegistryOwner, param5: com.stripe.android.PaymentSessionConfig, param6: com.stripe.android.CustomerSession, param7: com.stripe.android.view.ActivityStarter<com.stripe.android.view.PaymentMethodsActivity,com.stripe.android.view.PaymentMethodsActivityStarter.Args>, param8: com.stripe.android.view.ActivityStarter<com.stripe.android.view.PaymentFlowActivity,com.stripe.android.view.PaymentFlowActivityStarter.Args>, param9: com.stripe.android.PaymentSessionData);
				public getViewModel$stripe_release(): com.stripe.android.PaymentSessionViewModel;
				public presentPaymentMethodSelection(param0: string): void;
				public constructor(param0: androidx.activity.ComponentActivity, param1: com.stripe.android.PaymentSessionConfig);
				public onCompleted(): void;
				public getListener$stripe_release(): com.stripe.android.PaymentSession.PaymentSessionListener;
				public setCartTotal(param0: number): void;
				public clearPaymentMethod(): void;
				public presentShippingFlow(): void;
				public constructor(param0: androidx.fragment.app.Fragment, param1: com.stripe.android.PaymentSessionConfig);
				public init(param0: com.stripe.android.PaymentSession.PaymentSessionListener): void;
				public handlePaymentData(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
				public setListener$stripe_release(param0: com.stripe.android.PaymentSession.PaymentSessionListener): void;
			}
			export module PaymentSession {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.PaymentSession.Companion>;
				}
				export class PaymentSessionListener {
					public static class: java.lang.Class<com.stripe.android.PaymentSession.PaymentSessionListener>;
					/**
					 * Constructs a new instance of the com.stripe.android.PaymentSession$PaymentSessionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCommunicatingStateChanged(param0: boolean): void;
						onError(param0: number, param1: string): void;
						onPaymentSessionDataChanged(param0: com.stripe.android.PaymentSessionData): void;
					});
					public constructor();
					public onError(param0: number, param1: string): void;
					public onPaymentSessionDataChanged(param0: com.stripe.android.PaymentSessionData): void;
					public onCommunicatingStateChanged(param0: boolean): void;
				}
				export class WhenMappings {
					public static class: java.lang.Class<com.stripe.android.PaymentSession.WhenMappings>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class PaymentSessionConfig {
				public static class: java.lang.Class<com.stripe.android.PaymentSessionConfig>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator;
				public component8(): java.util.List<com.stripe.android.model.PaymentMethod.Type>;
				public component4(): boolean;
				public component14$stripe_release(): com.stripe.android.PaymentSessionConfig.ShippingInformationValidator;
				public getPaymentMethodTypes(): java.util.List<com.stripe.android.model.PaymentMethod.Type>;
				public getAllowedShippingCountryCodes(): java.util.Set<string>;
				public getWindowFlags$stripe_release(): java.lang.Integer;
				public component5(): boolean;
				public component7(): number;
				public component13$stripe_release(): boolean;
				public getPrepopulatedShippingInfo(): com.stripe.android.model.ShippingInformation;
				public getShouldShowGooglePay(): boolean;
				public component15$stripe_release(): com.stripe.android.PaymentSessionConfig.ShippingMethodsFactory;
				public getShippingMethodsFactory$stripe_release(): com.stripe.android.PaymentSessionConfig.ShippingMethodsFactory;
				public constructor();
				public getAddPaymentMethodFooterLayoutId(): number;
				public component16$stripe_release(): java.lang.Integer;
				public hashCode(): number;
				public getCanDeletePaymentMethods(): boolean;
				public component9(): boolean;
				public component3(): com.stripe.android.model.ShippingInformation;
				public copy(param0: java.util.List<any>, param1: java.util.List<any>, param2: com.stripe.android.model.ShippingInformation, param3: boolean, param4: boolean, param5: number, param6: number, param7: java.util.List<any>, param8: boolean, param9: java.util.Set<string>, param10: com.stripe.android.view.BillingAddressFields, param11: boolean, param12: boolean, param13: com.stripe.android.PaymentSessionConfig.ShippingInformationValidator, param14: com.stripe.android.PaymentSessionConfig.ShippingMethodsFactory, param15: java.lang.Integer): com.stripe.android.PaymentSessionConfig;
				public equals(param0: any): boolean;
				public component6(): number;
				public getOptionalShippingInfoFields(): java.util.List<com.stripe.android.view.ShippingInfoWidget.CustomizableShippingField>;
				public component1(): java.util.List<com.stripe.android.view.ShippingInfoWidget.CustomizableShippingField>;
				public getHiddenShippingInfoFields(): java.util.List<com.stripe.android.view.ShippingInfoWidget.CustomizableShippingField>;
				public getShippingInformationValidator$stripe_release(): com.stripe.android.PaymentSessionConfig.ShippingInformationValidator;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public constructor(param0: java.util.List<any>, param1: java.util.List<any>, param2: com.stripe.android.model.ShippingInformation, param3: boolean, param4: boolean, param5: number, param6: number, param7: java.util.List<any>, param8: boolean, param9: java.util.Set<string>, param10: com.stripe.android.view.BillingAddressFields, param11: boolean, param12: boolean, param13: com.stripe.android.PaymentSessionConfig.ShippingInformationValidator, param14: com.stripe.android.PaymentSessionConfig.ShippingMethodsFactory, param15: java.lang.Integer);
				public getPaymentMethodsFooterLayoutId(): number;
				public toString(): string;
				public getShouldPrefetchCustomer$stripe_release(): boolean;
				public component11(): com.stripe.android.view.BillingAddressFields;
				public component2(): java.util.List<com.stripe.android.view.ShippingInfoWidget.CustomizableShippingField>;
				public component12(): boolean;
				public describeContents(): number;
				public isShippingInfoRequired(): boolean;
				public isShippingMethodRequired(): boolean;
				public component10(): java.util.Set<string>;
				public getBillingAddressFields(): com.stripe.android.view.BillingAddressFields;
			}
			export module PaymentSessionConfig {
				export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.PaymentSessionConfig> {
					public static class: java.lang.Class<com.stripe.android.PaymentSessionConfig.Builder>;
					public setPaymentMethodsFooter(param0: number): com.stripe.android.PaymentSessionConfig.Builder;
					public setShippingInfoRequired(param0: boolean): com.stripe.android.PaymentSessionConfig.Builder;
					public setCanDeletePaymentMethods(param0: boolean): com.stripe.android.PaymentSessionConfig.Builder;
					public setShippingInformationValidator(param0: com.stripe.android.PaymentSessionConfig.ShippingInformationValidator): com.stripe.android.PaymentSessionConfig.Builder;
					public build(): any;
					public setPrepopulatedShippingInfo(param0: com.stripe.android.model.ShippingInformation): com.stripe.android.PaymentSessionConfig.Builder;
					public setShouldShowGooglePay(param0: boolean): com.stripe.android.PaymentSessionConfig.Builder;
					public build(): com.stripe.android.PaymentSessionConfig;
					public setAllowedShippingCountryCodes(param0: java.util.Set<string>): com.stripe.android.PaymentSessionConfig.Builder;
					public setShippingMethodsRequired(param0: boolean): com.stripe.android.PaymentSessionConfig.Builder;
					public constructor();
					public setWindowFlags(param0: java.lang.Integer): com.stripe.android.PaymentSessionConfig.Builder;
					public setBillingAddressFields(param0: com.stripe.android.view.BillingAddressFields): com.stripe.android.PaymentSessionConfig.Builder;
					public setPaymentMethodTypes(param0: java.util.List<any>): com.stripe.android.PaymentSessionConfig.Builder;
					public setAddPaymentMethodFooter(param0: number): com.stripe.android.PaymentSessionConfig.Builder;
					public setHiddenShippingInfoFields(param0: native.Array<com.stripe.android.view.ShippingInfoWidget.CustomizableShippingField>): com.stripe.android.PaymentSessionConfig.Builder;
					public setShippingMethodsFactory(param0: com.stripe.android.PaymentSessionConfig.ShippingMethodsFactory): com.stripe.android.PaymentSessionConfig.Builder;
					public setShouldPrefetchCustomer(param0: boolean): com.stripe.android.PaymentSessionConfig.Builder;
					public setOptionalShippingInfoFields(param0: native.Array<com.stripe.android.view.ShippingInfoWidget.CustomizableShippingField>): com.stripe.android.PaymentSessionConfig.Builder;
				}
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.PaymentSessionConfig.Companion>;
				}
				export class Creator {
					public static class: java.lang.Class<com.stripe.android.PaymentSessionConfig.Creator>;
					public constructor();
					public createFromParcel(param0: globalAndroid.os.Parcel): any;
					public newArray(param0: number): native.Array<any>;
				}
				export class DefaultShippingInfoValidator extends com.stripe.android.PaymentSessionConfig.ShippingInformationValidator {
					public static class: java.lang.Class<com.stripe.android.PaymentSessionConfig.DefaultShippingInfoValidator>;
					public getErrorMessage(param0: com.stripe.android.model.ShippingInformation): string;
					public constructor();
					public isValid(param0: com.stripe.android.model.ShippingInformation): boolean;
				}
				export class ShippingInformationValidator {
					public static class: java.lang.Class<com.stripe.android.PaymentSessionConfig.ShippingInformationValidator>;
					/**
					 * Constructs a new instance of the com.stripe.android.PaymentSessionConfig$ShippingInformationValidator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isValid(param0: com.stripe.android.model.ShippingInformation): boolean;
						getErrorMessage(param0: com.stripe.android.model.ShippingInformation): string;
					});
					public constructor();
					public getErrorMessage(param0: com.stripe.android.model.ShippingInformation): string;
					public isValid(param0: com.stripe.android.model.ShippingInformation): boolean;
				}
				export class ShippingMethodsFactory {
					public static class: java.lang.Class<com.stripe.android.PaymentSessionConfig.ShippingMethodsFactory>;
					/**
					 * Constructs a new instance of the com.stripe.android.PaymentSessionConfig$ShippingMethodsFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						create(param0: com.stripe.android.model.ShippingInformation): java.util.List<com.stripe.android.model.ShippingMethod>;
					});
					public constructor();
					public create(param0: com.stripe.android.model.ShippingInformation): java.util.List<com.stripe.android.model.ShippingMethod>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class PaymentSessionData {
				public static class: java.lang.Class<com.stripe.android.PaymentSessionData>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public component4(): number;
				public getShippingInformation(): com.stripe.android.model.ShippingInformation;
				public getUseGooglePay(): boolean;
				public constructor(param0: com.stripe.android.PaymentSessionConfig);
				public toString(): string;
				public copy(param0: boolean, param1: boolean, param2: number, param3: number, param4: com.stripe.android.model.ShippingInformation, param5: com.stripe.android.model.ShippingMethod, param6: com.stripe.android.model.PaymentMethod, param7: boolean): com.stripe.android.PaymentSessionData;
				public getPaymentMethod(): com.stripe.android.model.PaymentMethod;
				public component6(): com.stripe.android.model.ShippingMethod;
				public getShippingMethod(): com.stripe.android.model.ShippingMethod;
				public component3(): number;
				public component5(): com.stripe.android.model.ShippingInformation;
				public isPaymentReadyToCharge(): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public describeContents(): number;
				public getCartTotal(): number;
				public component7(): com.stripe.android.model.PaymentMethod;
				public component8(): boolean;
				public constructor(param0: boolean, param1: boolean, param2: number, param3: number, param4: com.stripe.android.model.ShippingInformation, param5: com.stripe.android.model.ShippingMethod, param6: com.stripe.android.model.PaymentMethod, param7: boolean);
				public getShippingTotal(): number;
			}
			export module PaymentSessionData {
				export class Creator {
					public static class: java.lang.Class<com.stripe.android.PaymentSessionData.Creator>;
					public constructor();
					public createFromParcel(param0: globalAndroid.os.Parcel): any;
					public newArray(param0: number): native.Array<any>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class PaymentSessionPrefs {
				public static class: java.lang.Class<com.stripe.android.PaymentSessionPrefs>;
				/**
				 * Constructs a new instance of the com.stripe.android.PaymentSessionPrefs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getPaymentMethodId(param0: string): string;
					savePaymentMethodId(param0: string, param1: string): void;
					<clinit>(): void;
				});
				public constructor();
				public static Companion: com.stripe.android.PaymentSessionPrefs.Companion;
				public savePaymentMethodId(param0: string, param1: string): void;
				public getPaymentMethodId(param0: string): string;
			}
			export module PaymentSessionPrefs {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.PaymentSessionPrefs.Companion>;
				}
				export class Default extends com.stripe.android.PaymentSessionPrefs {
					public static class: java.lang.Class<com.stripe.android.PaymentSessionPrefs.Default>;
					public constructor(param0: globalAndroid.content.Context);
					public getPaymentMethodId(param0: string): string;
					public savePaymentMethodId(param0: string, param1: string): void;
					public getPrefs(): globalAndroid.content.SharedPreferences;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class PaymentSessionViewModel {
				public static class: java.lang.Class<com.stripe.android.PaymentSessionViewModel>;
				public static KEY_PAYMENT_SESSION_DATA: string;
				public static Companion: com.stripe.android.PaymentSessionViewModel.Companion;
				public constructor(param0: globalAndroid.app.Application, param1: androidx.lifecycle.SavedStateHandle, param2: com.stripe.android.PaymentSessionData, param3: com.stripe.android.CustomerSession, param4: com.stripe.android.PaymentSessionPrefs);
				public getPaymentSessionData(): com.stripe.android.PaymentSessionData;
				public getPaymentSessionDataLiveData(): androidx.lifecycle.LiveData<com.stripe.android.PaymentSessionData>;
				public clearPaymentMethod(): void;
				public setPaymentSessionData(param0: com.stripe.android.PaymentSessionData): void;
				public getNetworkState$stripe_release(): androidx.lifecycle.LiveData<com.stripe.android.PaymentSessionViewModel.NetworkState>;
			}
			export module PaymentSessionViewModel {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.PaymentSessionViewModel.Companion>;
				}
				export class Factory {
					public static class: java.lang.Class<com.stripe.android.PaymentSessionViewModel.Factory>;
					public create(param0: string, param1: java.lang.Class, param2: androidx.lifecycle.SavedStateHandle): androidx.lifecycle.ViewModel;
					public constructor(param0: globalAndroid.app.Application, param1: androidx.savedstate.SavedStateRegistryOwner, param2: com.stripe.android.PaymentSessionData, param3: com.stripe.android.CustomerSession);
				}
				export abstract class FetchCustomerResult {
					public static class: java.lang.Class<com.stripe.android.PaymentSessionViewModel.FetchCustomerResult>;
				}
				export module FetchCustomerResult {
					export class Error extends com.stripe.android.PaymentSessionViewModel.FetchCustomerResult {
						public static class: java.lang.Class<com.stripe.android.PaymentSessionViewModel.FetchCustomerResult.Error>;
						public getErrorMessage(): string;
						public getErrorCode(): number;
						public copy(param0: number, param1: string, param2: com.stripe.android.StripeError): com.stripe.android.PaymentSessionViewModel.FetchCustomerResult.Error;
						public component2(): string;
						public constructor(param0: number, param1: string, param2: com.stripe.android.StripeError);
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getStripeError(): com.stripe.android.StripeError;
						public component1(): number;
						public toString(): string;
						public component3(): com.stripe.android.StripeError;
					}
					export class Success extends com.stripe.android.PaymentSessionViewModel.FetchCustomerResult {
						public static class: java.lang.Class<com.stripe.android.PaymentSessionViewModel.FetchCustomerResult.Success>;
						public static INSTANCE: com.stripe.android.PaymentSessionViewModel.FetchCustomerResult.Success;
					}
				}
				export class NetworkState {
					public static class: java.lang.Class<com.stripe.android.PaymentSessionViewModel.NetworkState>;
					public static Active: com.stripe.android.PaymentSessionViewModel.NetworkState;
					public static Inactive: com.stripe.android.PaymentSessionViewModel.NetworkState;
					public static values(): native.Array<com.stripe.android.PaymentSessionViewModel.NetworkState>;
					public static valueOf(param0: string): com.stripe.android.PaymentSessionViewModel.NetworkState;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class QueryStringFactory {
				public static class: java.lang.Class<com.stripe.android.QueryStringFactory>;
				public create(param0: java.util.Map<string,any>): string;
				public constructor();
			}
			export module QueryStringFactory {
				export class Parameter {
					public static class: java.lang.Class<com.stripe.android.QueryStringFactory.Parameter>;
					public constructor(param0: string, param1: string);
					public equals(param0: any): boolean;
					public toString(): string;
					public copy(param0: string, param1: string): com.stripe.android.QueryStringFactory.Parameter;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export abstract class RequestHeadersFactory {
				public static class: java.lang.Class<com.stripe.android.RequestHeadersFactory>;
				public static Companion: com.stripe.android.RequestHeadersFactory.Companion;
				public getExtraHeaders(): java.util.Map<string,string>;
				public create(): java.util.Map<string,string>;
				public getUserAgent(): string;
			}
			export module RequestHeadersFactory {
				export class Api extends com.stripe.android.RequestHeadersFactory {
					public static class: java.lang.Class<com.stripe.android.RequestHeadersFactory.Api>;
					public getExtraHeaders(): java.util.Map<string,string>;
					public constructor(param0: com.stripe.android.ApiRequest.Options, param1: com.stripe.android.AppInfo, param2: java.util.Locale, param3: kotlin.jvm.functions.Function1<any,string>, param4: string, param5: string);
					public getUserAgent(): string;
				}
				export module Api {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.RequestHeadersFactory.Api.Companion>;
					}
				}
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.RequestHeadersFactory.Companion>;
					public getUserAgent$stripe_release(param0: string): string;
				}
				export class Default extends com.stripe.android.RequestHeadersFactory {
					public static class: java.lang.Class<com.stripe.android.RequestHeadersFactory.Default>;
					public constructor(param0: java.util.Map<string,string>, param1: string);
					public getExtraHeaders(): java.util.Map<string,string>;
					public constructor();
					public getUserAgent(): string;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class SetupIntentResult extends com.stripe.android.StripeIntentResult<com.stripe.android.model.SetupIntent> {
				public static class: java.lang.Class<com.stripe.android.SetupIntentResult>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public constructor(param0: com.stripe.android.model.SetupIntent, param1: number, param2: string);
				public copy(param0: com.stripe.android.model.SetupIntent, param1: number, param2: string): com.stripe.android.SetupIntentResult;
				public getIntent(): com.stripe.android.model.SetupIntent;
				public getIntent(): any;
				public component1(): com.stripe.android.model.SetupIntent;
				public toString(): string;
				public getFailureMessage(): string;
				public component3(): string;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public describeContents(): number;
				public constructor(param0: number);
			}
			export module SetupIntentResult {
				export class Creator {
					public static class: java.lang.Class<com.stripe.android.SetupIntentResult.Creator>;
					public constructor();
					public createFromParcel(param0: globalAndroid.os.Parcel): any;
					public newArray(param0: number): native.Array<any>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class Stripe {
				public static class: java.lang.Class<com.stripe.android.Stripe>;
				public static API_VERSION: string;
				public static VERSION: string;
				public static Companion: com.stripe.android.Stripe.Companion;
				public retrievePaymentIntent(param0: string, param1: string, param2: com.stripe.android.ApiResultCallback<any>): void;
				public createSourceSynchronous(param0: com.stripe.android.model.SourceParams): com.stripe.android.model.Source;
				public createPaymentMethodSynchronous(param0: com.stripe.android.model.PaymentMethodCreateParams): com.stripe.android.model.PaymentMethod;
				public createPersonTokenSynchronous(param0: com.stripe.android.model.PersonTokenParams, param1: string, param2: string): com.stripe.android.model.Token;
				public createCardToken(param0: com.stripe.android.model.CardParams, param1: string, param2: com.stripe.android.ApiResultCallback<any>): void;
				public authenticateSource(param0: globalAndroid.app.Activity, param1: com.stripe.android.model.Source, param2: string): void;
				public confirmAlipayPayment(param0: com.stripe.android.model.ConfirmPaymentIntentParams, param1: com.stripe.android.AlipayAuthenticator, param2: string, param3: com.stripe.android.ApiResultCallback<any>): void;
				public handleNextActionForPayment(param0: globalAndroid.app.Activity, param1: string): void;
				public createPiiTokenSynchronous(param0: string, param1: string): com.stripe.android.model.Token;
				public confirmPayment(param0: androidx.fragment.app.Fragment, param1: com.stripe.android.model.ConfirmPaymentIntentParams): void;
				public retrievePaymentIntentSynchronous(param0: string): com.stripe.android.model.PaymentIntent;
				public createCvcUpdateToken(param0: string, param1: string, param2: string, param3: com.stripe.android.ApiResultCallback<any>): void;
				public confirmSetupIntent(param0: globalAndroid.app.Activity, param1: com.stripe.android.model.ConfirmSetupIntentParams): void;
				public createPiiTokenSynchronous(param0: string): com.stripe.android.model.Token;
				public createSource(param0: com.stripe.android.model.SourceParams, param1: com.stripe.android.ApiResultCallback<any>): void;
				public createPaymentMethod(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string, param3: com.stripe.android.ApiResultCallback<any>): void;
				public createPersonTokenSynchronous(param0: com.stripe.android.model.PersonTokenParams, param1: string): com.stripe.android.model.Token;
				/** @deprecated */
				public authenticateSetup(param0: globalAndroid.app.Activity, param1: string): void;
				public createFile(param0: com.stripe.android.model.StripeFileParams, param1: string, param2: string, param3: com.stripe.android.ApiResultCallback<any>): void;
				public confirmPayment(param0: globalAndroid.app.Activity, param1: com.stripe.android.model.ConfirmPaymentIntentParams, param2: string): void;
				public retrieveSetupIntentSynchronous(param0: string): com.stripe.android.model.SetupIntent;
				public createCvcUpdateTokenSynchronous(param0: string): com.stripe.android.model.Token;
				public onPaymentResult(param0: number, param1: globalAndroid.content.Intent, param2: com.stripe.android.ApiResultCallback<any>): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: string);
				public confirmPayment(param0: globalAndroid.app.Activity, param1: com.stripe.android.model.ConfirmPaymentIntentParams): void;
				public constructor(param0: com.stripe.android.StripeRepository, param1: com.stripe.android.PaymentController, param2: string, param3: string, param4: kotlin.coroutines.CoroutineContext);
				public handleNextActionForPayment(param0: androidx.fragment.app.Fragment, param1: string, param2: string): void;
				public confirmSetupIntent(param0: androidx.fragment.app.Fragment, param1: com.stripe.android.model.ConfirmSetupIntentParams): void;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: boolean);
				public constructor(param0: globalAndroid.content.Context, param1: string);
				public createBankAccountToken(param0: com.stripe.android.model.BankAccountTokenParams, param1: com.stripe.android.ApiResultCallback<any>): void;
				public createCardToken(param0: com.stripe.android.model.CardParams, param1: string, param2: string, param3: com.stripe.android.ApiResultCallback<any>): void;
				public createPersonToken(param0: com.stripe.android.model.PersonTokenParams, param1: com.stripe.android.ApiResultCallback<any>): void;
				/** @deprecated */
				public confirmPaymentIntentSynchronous(param0: com.stripe.android.model.ConfirmPaymentIntentParams, param1: string): com.stripe.android.model.PaymentIntent;
				public confirmSetupIntent(param0: globalAndroid.app.Activity, param1: com.stripe.android.model.ConfirmSetupIntentParams, param2: string): void;
				public createPiiToken(param0: string, param1: string, param2: string, param3: com.stripe.android.ApiResultCallback<any>): void;
				public createFileSynchronous(param0: com.stripe.android.model.StripeFileParams, param1: string, param2: string): com.stripe.android.model.StripeFile;
				public handleNextActionForSetupIntent(param0: globalAndroid.app.Activity, param1: string): void;
				public createCvcUpdateToken(param0: string, param1: string, param2: com.stripe.android.ApiResultCallback<any>): void;
				public createSource(param0: com.stripe.android.model.SourceParams, param1: string, param2: string, param3: com.stripe.android.ApiResultCallback<any>): void;
				public createBankAccountToken(param0: com.stripe.android.model.BankAccountTokenParams, param1: string, param2: com.stripe.android.ApiResultCallback<any>): void;
				public constructor(param0: com.stripe.android.StripeRepository, param1: com.stripe.android.PaymentController, param2: string, param3: string);
				/** @deprecated */
				public authenticateSetup(param0: androidx.fragment.app.Fragment, param1: string): void;
				public authenticateSource(param0: androidx.fragment.app.Fragment, param1: com.stripe.android.model.Source): void;
				public createSourceSynchronous(param0: com.stripe.android.model.SourceParams, param1: string, param2: string): com.stripe.android.model.Source;
				/** @deprecated */
				public authenticatePayment(param0: androidx.fragment.app.Fragment, param1: string): void;
				public confirmSetupIntent(param0: androidx.fragment.app.Fragment, param1: com.stripe.android.model.ConfirmSetupIntentParams, param2: string): void;
				public retrieveSetupIntent(param0: string, param1: string, param2: com.stripe.android.ApiResultCallback<any>): void;
				public createPaymentMethod(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: com.stripe.android.ApiResultCallback<any>): void;
				public createAccountToken(param0: com.stripe.android.model.AccountParams, param1: string, param2: string, param3: com.stripe.android.ApiResultCallback<any>): void;
				public static setAdvancedFraudSignalsEnabled(param0: boolean): void;
				public createCvcUpdateTokenSynchronous(param0: string, param1: string): com.stripe.android.model.Token;
				public confirmAlipayPayment(param0: com.stripe.android.model.ConfirmPaymentIntentParams, param1: com.stripe.android.AlipayAuthenticator, param2: com.stripe.android.ApiResultCallback<any>): void;
				public createFile(param0: com.stripe.android.model.StripeFileParams, param1: com.stripe.android.ApiResultCallback<any>): void;
				public createAccountTokenSynchronous(param0: com.stripe.android.model.AccountParams, param1: string, param2: string): com.stripe.android.model.Token;
				public createPersonToken(param0: com.stripe.android.model.PersonTokenParams, param1: string, param2: com.stripe.android.ApiResultCallback<any>): void;
				public static getAppInfo(): com.stripe.android.AppInfo;
				public authenticateSource(param0: globalAndroid.app.Activity, param1: com.stripe.android.model.Source): void;
				public handleNextActionForPayment(param0: androidx.fragment.app.Fragment, param1: string): void;
				public createAccountTokenSynchronous(param0: com.stripe.android.model.AccountParams): com.stripe.android.model.Token;
				/** @deprecated */
				public confirmSetupIntentSynchronous(param0: com.stripe.android.model.ConfirmSetupIntentParams): com.stripe.android.model.SetupIntent;
				public onSetupResult(param0: number, param1: globalAndroid.content.Intent, param2: com.stripe.android.ApiResultCallback<any>): boolean;
				/** @deprecated */
				public confirmPaymentIntentSynchronous(param0: com.stripe.android.model.ConfirmPaymentIntentParams): com.stripe.android.model.PaymentIntent;
				public static setAppInfo(param0: com.stripe.android.AppInfo): void;
				public retrieveSetupIntentSynchronous(param0: string, param1: string): com.stripe.android.model.SetupIntent;
				public createFileSynchronous(param0: com.stripe.android.model.StripeFileParams, param1: string): com.stripe.android.model.StripeFile;
				public createBankAccountToken(param0: com.stripe.android.model.BankAccountTokenParams, param1: string, param2: string, param3: com.stripe.android.ApiResultCallback<any>): void;
				public handleNextActionForSetupIntent(param0: androidx.fragment.app.Fragment, param1: string, param2: string): void;
				public createCvcUpdateTokenSynchronous(param0: string, param1: string, param2: string): com.stripe.android.model.Token;
				/** @deprecated */
				public authenticatePayment(param0: globalAndroid.app.Activity, param1: string): void;
				public createPiiToken(param0: string, param1: string, param2: com.stripe.android.ApiResultCallback<any>): void;
				public createPaymentMethod(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: com.stripe.android.ApiResultCallback<any>): void;
				public confirmPayment(param0: androidx.fragment.app.Fragment, param1: com.stripe.android.model.ConfirmPaymentIntentParams, param2: string): void;
				public retrieveSourceSynchronous(param0: string, param1: string): com.stripe.android.model.Source;
				/** @deprecated */
				public createCardTokenSynchronous(param0: com.stripe.android.model.Card, param1: string): com.stripe.android.model.Token;
				public createFileSynchronous(param0: com.stripe.android.model.StripeFileParams): com.stripe.android.model.StripeFile;
				public createPaymentMethodSynchronous(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string): com.stripe.android.model.PaymentMethod;
				public createFile(param0: com.stripe.android.model.StripeFileParams, param1: string, param2: com.stripe.android.ApiResultCallback<any>): void;
				public isAuthenticateSourceResult(param0: number, param1: globalAndroid.content.Intent): boolean;
				/** @deprecated */
				public createCardTokenSynchronous(param0: com.stripe.android.model.Card): com.stripe.android.model.Token;
				public createBankAccountTokenSynchronous(param0: com.stripe.android.model.BankAccountTokenParams, param1: string): com.stripe.android.model.Token;
				public createAccountTokenSynchronous(param0: com.stripe.android.model.AccountParams, param1: string): com.stripe.android.model.Token;
				public retrievePaymentIntentSynchronous(param0: string, param1: string): com.stripe.android.model.PaymentIntent;
				public createAccountToken(param0: com.stripe.android.model.AccountParams, param1: com.stripe.android.ApiResultCallback<any>): void;
				public createCardTokenSynchronous(param0: com.stripe.android.model.CardParams, param1: string, param2: string): com.stripe.android.model.Token;
				public retrieveSource(param0: string, param1: string, param2: com.stripe.android.ApiResultCallback<any>): void;
				public handleNextActionForSetupIntent(param0: androidx.fragment.app.Fragment, param1: string): void;
				public createSource(param0: com.stripe.android.model.SourceParams, param1: string, param2: com.stripe.android.ApiResultCallback<any>): void;
				public authenticateSource(param0: androidx.fragment.app.Fragment, param1: com.stripe.android.model.Source, param2: string): void;
				public handleNextActionForPayment(param0: globalAndroid.app.Activity, param1: string, param2: string): void;
				public static getAdvancedFraudSignalsEnabled(): boolean;
				/** @deprecated */
				public createCardTokenSynchronous(param0: com.stripe.android.model.Card, param1: string, param2: string): com.stripe.android.model.Token;
				public createBankAccountTokenSynchronous(param0: com.stripe.android.model.BankAccountTokenParams, param1: string, param2: string): com.stripe.android.model.Token;
				/** @deprecated */
				public createCardToken(param0: com.stripe.android.model.Card, param1: string, param2: string, param3: com.stripe.android.ApiResultCallback<any>): void;
				public retrieveSource(param0: string, param1: string, param2: string, param3: com.stripe.android.ApiResultCallback<any>): void;
				public createCardToken(param0: com.stripe.android.model.CardParams, param1: com.stripe.android.ApiResultCallback<any>): void;
				public retrievePaymentIntent(param0: string, param1: com.stripe.android.ApiResultCallback<any>): void;
				/** @deprecated */
				public confirmSetupIntentSynchronous(param0: com.stripe.android.model.ConfirmSetupIntentParams, param1: string): com.stripe.android.model.SetupIntent;
				/** @deprecated */
				public createCardToken(param0: com.stripe.android.model.Card, param1: com.stripe.android.ApiResultCallback<any>): void;
				public createCardTokenSynchronous(param0: com.stripe.android.model.CardParams): com.stripe.android.model.Token;
				public createPiiToken(param0: string, param1: com.stripe.android.ApiResultCallback<any>): void;
				public retrieveSetupIntent(param0: string, param1: com.stripe.android.ApiResultCallback<any>): void;
				public createCvcUpdateToken(param0: string, param1: com.stripe.android.ApiResultCallback<any>): void;
				public createPersonTokenSynchronous(param0: com.stripe.android.model.PersonTokenParams): com.stripe.android.model.Token;
				public createPersonToken(param0: com.stripe.android.model.PersonTokenParams, param1: string, param2: string, param3: com.stripe.android.ApiResultCallback<any>): void;
				public createCardTokenSynchronous(param0: com.stripe.android.model.CardParams, param1: string): com.stripe.android.model.Token;
				public createBankAccountTokenSynchronous(param0: com.stripe.android.model.BankAccountTokenParams): com.stripe.android.model.Token;
				public retrieveSourceSynchronous(param0: string, param1: string, param2: string): com.stripe.android.model.Source;
				public handleNextActionForSetupIntent(param0: globalAndroid.app.Activity, param1: string, param2: string): void;
				public onAuthenticateSourceResult(param0: globalAndroid.content.Intent, param1: com.stripe.android.ApiResultCallback<any>): void;
				public createPaymentMethodSynchronous(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string): com.stripe.android.model.PaymentMethod;
				public createSourceSynchronous(param0: com.stripe.android.model.SourceParams, param1: string): com.stripe.android.model.Source;
				public createPiiTokenSynchronous(param0: string, param1: string, param2: string): com.stripe.android.model.Token;
				public createAccountToken(param0: com.stripe.android.model.AccountParams, param1: string, param2: com.stripe.android.ApiResultCallback<any>): void;
				/** @deprecated */
				public createCardToken(param0: com.stripe.android.model.Card, param1: string, param2: com.stripe.android.ApiResultCallback<any>): void;
			}
			export module Stripe {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.Stripe.Companion>;
					public getAppInfo(): com.stripe.android.AppInfo;
					public setAdvancedFraudSignalsEnabled(param0: boolean): void;
					public setAppInfo(param0: com.stripe.android.AppInfo): void;
					public getAdvancedFraudSignalsEnabled(): boolean;
				}
				export class CreatePaymentMethodTask extends com.stripe.android.ApiOperation<com.stripe.android.model.PaymentMethod> {
					public static class: java.lang.Class<com.stripe.android.Stripe.CreatePaymentMethodTask>;
					public getResult$stripe_release(param0: kotlin.coroutines.Continuation<any>): any;
					public constructor(param0: com.stripe.android.StripeRepository, param1: com.stripe.android.model.PaymentMethodCreateParams, param2: com.stripe.android.ApiRequest.Options, param3: kotlin.coroutines.CoroutineContext, param4: com.stripe.android.ApiResultCallback<any>);
					public constructor(param0: kotlin.coroutines.CoroutineContext, param1: com.stripe.android.ApiResultCallback<any>);
				}
				export class CreateSourceTask extends com.stripe.android.ApiOperation<com.stripe.android.model.Source> {
					public static class: java.lang.Class<com.stripe.android.Stripe.CreateSourceTask>;
					public getResult$stripe_release(param0: kotlin.coroutines.Continuation<any>): any;
					public constructor(param0: com.stripe.android.StripeRepository, param1: com.stripe.android.model.SourceParams, param2: com.stripe.android.ApiRequest.Options, param3: kotlin.coroutines.CoroutineContext, param4: com.stripe.android.ApiResultCallback<any>);
					public constructor(param0: kotlin.coroutines.CoroutineContext, param1: com.stripe.android.ApiResultCallback<any>);
				}
				export class CreateTokenTask extends com.stripe.android.ApiOperation<com.stripe.android.model.Token> {
					public static class: java.lang.Class<com.stripe.android.Stripe.CreateTokenTask>;
					public getResult$stripe_release(param0: kotlin.coroutines.Continuation<any>): any;
					public constructor(param0: com.stripe.android.StripeRepository, param1: com.stripe.android.model.TokenParams, param2: com.stripe.android.ApiRequest.Options, param3: kotlin.coroutines.CoroutineContext, param4: com.stripe.android.ApiResultCallback<any>);
					public constructor(param0: kotlin.coroutines.CoroutineContext, param1: com.stripe.android.ApiResultCallback<any>);
				}
				export class RetrievePaymentIntentTask extends com.stripe.android.ApiOperation<com.stripe.android.model.PaymentIntent> {
					public static class: java.lang.Class<com.stripe.android.Stripe.RetrievePaymentIntentTask>;
					public getResult$stripe_release(param0: kotlin.coroutines.Continuation<any>): any;
					public constructor(param0: com.stripe.android.StripeRepository, param1: string, param2: com.stripe.android.ApiRequest.Options, param3: kotlin.coroutines.CoroutineContext, param4: com.stripe.android.ApiResultCallback<any>);
					public constructor(param0: kotlin.coroutines.CoroutineContext, param1: com.stripe.android.ApiResultCallback<any>);
				}
				export class RetrieveSetupIntentTask extends com.stripe.android.ApiOperation<com.stripe.android.model.SetupIntent> {
					public static class: java.lang.Class<com.stripe.android.Stripe.RetrieveSetupIntentTask>;
					public getResult$stripe_release(param0: kotlin.coroutines.Continuation<any>): any;
					public constructor(param0: com.stripe.android.StripeRepository, param1: string, param2: com.stripe.android.ApiRequest.Options, param3: kotlin.coroutines.CoroutineContext, param4: com.stripe.android.ApiResultCallback<any>);
					public constructor(param0: kotlin.coroutines.CoroutineContext, param1: com.stripe.android.ApiResultCallback<any>);
				}
				export class RetrieveSourceTask extends com.stripe.android.ApiOperation<com.stripe.android.model.Source> {
					public static class: java.lang.Class<com.stripe.android.Stripe.RetrieveSourceTask>;
					public getResult$stripe_release(param0: kotlin.coroutines.Continuation<any>): any;
					public constructor(param0: com.stripe.android.StripeRepository, param1: string, param2: string, param3: com.stripe.android.ApiRequest.Options, param4: kotlin.coroutines.CoroutineContext, param5: com.stripe.android.ApiResultCallback<any>);
					public constructor(param0: kotlin.coroutines.CoroutineContext, param1: com.stripe.android.ApiResultCallback<any>);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class StripeApiRepository extends com.stripe.android.StripeRepository {
				public static class: java.lang.Class<com.stripe.android.StripeApiRepository>;
				public static Companion: com.stripe.android.StripeApiRepository.Companion;
				public detachPaymentMethod(param0: string, param1: java.util.Set<string>, param2: string, param3: com.stripe.android.ApiRequest.Options, param4: kotlin.coroutines.Continuation<any>): any;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.stripe.android.AppInfo, param3: com.stripe.android.Logger, param4: com.stripe.android.ApiRequestExecutor, param5: com.stripe.android.AnalyticsRequestExecutor, param6: com.stripe.android.FingerprintDataRepository, param7: com.stripe.android.AnalyticsDataFactory, param8: com.stripe.android.FingerprintParamsUtils);
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.stripe.android.AppInfo, param3: com.stripe.android.Logger, param4: com.stripe.android.ApiRequestExecutor);
				public constructor(param0: globalAndroid.content.Context, param1: string);
				public retrieveSource(param0: string, param1: string, param2: com.stripe.android.ApiRequest.Options, param3: com.stripe.android.ApiResultCallback<any>): void;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.stripe.android.AppInfo, param3: com.stripe.android.Logger, param4: com.stripe.android.ApiRequestExecutor, param5: com.stripe.android.AnalyticsRequestExecutor, param6: com.stripe.android.FingerprintDataRepository, param7: com.stripe.android.AnalyticsDataFactory, param8: com.stripe.android.FingerprintParamsUtils, param9: kotlin.coroutines.CoroutineContext, param10: string, param11: string);
				public retrieveObject(param0: string, param1: com.stripe.android.ApiRequest.Options): org.json.JSONObject;
				public cancelSetupIntentSource(param0: string, param1: string, param2: com.stripe.android.ApiRequest.Options): com.stripe.android.model.SetupIntent;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.stripe.android.AppInfo, param3: com.stripe.android.Logger, param4: com.stripe.android.ApiRequestExecutor, param5: com.stripe.android.AnalyticsRequestExecutor, param6: com.stripe.android.FingerprintDataRepository, param7: com.stripe.android.AnalyticsDataFactory);
				public getPaymentMethods(param0: com.stripe.android.model.ListPaymentMethodsParams, param1: string, param2: java.util.Set<string>, param3: com.stripe.android.ApiRequest.Options, param4: kotlin.coroutines.Continuation<any>): any;
				public setCustomerShippingInfo(param0: string, param1: string, param2: java.util.Set<string>, param3: com.stripe.android.model.ShippingInformation, param4: com.stripe.android.ApiRequest.Options, param5: kotlin.coroutines.Continuation<any>): any;
				public retrieveSetupIntent(param0: string, param1: com.stripe.android.ApiRequest.Options, param2: java.util.List<string>): com.stripe.android.model.SetupIntent;
				public attachPaymentMethod(param0: string, param1: string, param2: java.util.Set<string>, param3: string, param4: com.stripe.android.ApiRequest.Options, param5: kotlin.coroutines.Continuation<any>): any;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.stripe.android.AppInfo, param3: com.stripe.android.Logger, param4: com.stripe.android.ApiRequestExecutor, param5: com.stripe.android.AnalyticsRequestExecutor, param6: com.stripe.android.FingerprintDataRepository, param7: com.stripe.android.AnalyticsDataFactory, param8: com.stripe.android.FingerprintParamsUtils, param9: kotlin.coroutines.CoroutineContext, param10: string);
				public createPaymentMethod(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.model.PaymentMethod;
				public retrievePaymentIntent(param0: string, param1: com.stripe.android.ApiRequest.Options, param2: java.util.List<string>): com.stripe.android.model.PaymentIntent;
				public createFile(param0: com.stripe.android.model.StripeFileParams, param1: com.stripe.android.ApiRequest.Options, param2: kotlin.coroutines.Continuation<any>): any;
				public retrieveIssuingCardPin(param0: string, param1: string, param2: string, param3: string): string;
				public getCardMetadata(param0: com.stripe.android.cards.Bin, param1: com.stripe.android.ApiRequest.Options, param2: kotlin.coroutines.Continuation<any>): any;
				public makeApiRequest$stripe_release(param0: com.stripe.android.ApiRequest): com.stripe.android.StripeResponse;
				public createSource(param0: com.stripe.android.model.SourceParams, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.model.Source;
				public getFpxBankStatus(param0: com.stripe.android.ApiRequest.Options, param1: kotlin.coroutines.Continuation<any>): any;
				public start3ds2Auth(param0: com.stripe.android.model.Stripe3ds2AuthParams, param1: string, param2: com.stripe.android.ApiRequest.Options, param3: kotlin.coroutines.Continuation<any>): any;
				public confirmPaymentIntent(param0: com.stripe.android.model.ConfirmPaymentIntentParams, param1: com.stripe.android.ApiRequest.Options, param2: java.util.List<string>, param3: kotlin.coroutines.Continuation<any>): any;
				public cancelIntent(param0: com.stripe.android.model.StripeIntent, param1: string, param2: com.stripe.android.ApiRequest.Options, param3: com.stripe.android.ApiResultCallback<any>): void;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.stripe.android.AppInfo, param3: com.stripe.android.Logger, param4: com.stripe.android.ApiRequestExecutor, param5: com.stripe.android.AnalyticsRequestExecutor);
				public retrieveSource(param0: string, param1: string, param2: com.stripe.android.ApiRequest.Options): com.stripe.android.model.Source;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.stripe.android.AppInfo, param3: com.stripe.android.Logger);
				public retrieveIntent(param0: string, param1: com.stripe.android.ApiRequest.Options, param2: java.util.List<string>, param3: com.stripe.android.ApiResultCallback<any>): void;
				public confirmSetupIntent(param0: com.stripe.android.model.ConfirmSetupIntentParams, param1: com.stripe.android.ApiRequest.Options, param2: java.util.List<string>, param3: kotlin.coroutines.Continuation<any>): any;
				public setDefaultCustomerSource(param0: string, param1: string, param2: java.util.Set<string>, param3: string, param4: string, param5: com.stripe.android.ApiRequest.Options, param6: kotlin.coroutines.Continuation<any>): any;
				public addCustomerSource(param0: string, param1: string, param2: java.util.Set<string>, param3: string, param4: string, param5: com.stripe.android.ApiRequest.Options, param6: kotlin.coroutines.Continuation<any>): any;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.stripe.android.AppInfo, param3: com.stripe.android.Logger, param4: com.stripe.android.ApiRequestExecutor, param5: com.stripe.android.AnalyticsRequestExecutor, param6: com.stripe.android.FingerprintDataRepository);
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.stripe.android.AppInfo, param3: com.stripe.android.Logger, param4: com.stripe.android.ApiRequestExecutor, param5: com.stripe.android.AnalyticsRequestExecutor, param6: com.stripe.android.FingerprintDataRepository, param7: com.stripe.android.AnalyticsDataFactory, param8: com.stripe.android.FingerprintParamsUtils, param9: kotlin.coroutines.CoroutineContext);
				public createToken(param0: com.stripe.android.model.TokenParams, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.model.Token;
				public deleteCustomerSource(param0: string, param1: string, param2: java.util.Set<string>, param3: string, param4: com.stripe.android.ApiRequest.Options, param5: kotlin.coroutines.Continuation<any>): any;
				public complete3ds2Auth(param0: string, param1: com.stripe.android.ApiRequest.Options, param2: kotlin.coroutines.Continuation<any>): any;
				public getDetachPaymentMethodUrl$stripe_release(param0: string): string;
				public retrieveCustomer(param0: string, param1: java.util.Set<string>, param2: com.stripe.android.ApiRequest.Options, param3: kotlin.coroutines.Continuation<any>): any;
				public updateIssuingCardPin(param0: string, param1: string, param2: string, param3: string, param4: string): void;
				public makeFileUploadRequest$stripe_release(param0: com.stripe.android.FileUploadRequest): com.stripe.android.StripeResponse;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.stripe.android.AppInfo);
				public cancelPaymentIntentSource(param0: string, param1: string, param2: com.stripe.android.ApiRequest.Options): com.stripe.android.model.PaymentIntent;
				public fireAnalyticsRequest$stripe_release(param0: java.util.Map<string,any>, param1: string): void;
			}
			export module StripeApiRepository {
				export class CancelIntentTask extends com.stripe.android.ApiOperation<com.stripe.android.model.StripeIntent> {
					public static class: java.lang.Class<com.stripe.android.StripeApiRepository.CancelIntentTask>;
					public getResult$stripe_release(param0: kotlin.coroutines.Continuation<any>): any;
					public constructor(param0: com.stripe.android.StripeRepository, param1: com.stripe.android.model.StripeIntent, param2: string, param3: com.stripe.android.ApiRequest.Options, param4: com.stripe.android.ApiResultCallback<any>);
					public constructor(param0: kotlin.coroutines.CoroutineContext, param1: com.stripe.android.ApiResultCallback<any>);
				}
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.StripeApiRepository.Companion>;
				}
				export class RetrieveIntentTask extends com.stripe.android.ApiOperation<com.stripe.android.model.StripeIntent> {
					public static class: java.lang.Class<com.stripe.android.StripeApiRepository.RetrieveIntentTask>;
					public getResult$stripe_release(param0: kotlin.coroutines.Continuation<any>): any;
					public constructor(param0: kotlin.coroutines.CoroutineContext, param1: com.stripe.android.ApiResultCallback<any>);
					public constructor(param0: com.stripe.android.StripeRepository, param1: string, param2: com.stripe.android.ApiRequest.Options, param3: java.util.List<string>, param4: com.stripe.android.ApiResultCallback<any>);
				}
				export class RetrieveSourceTask extends com.stripe.android.ApiOperation<com.stripe.android.model.Source> {
					public static class: java.lang.Class<com.stripe.android.StripeApiRepository.RetrieveSourceTask>;
					public getResult$stripe_release(param0: kotlin.coroutines.Continuation<any>): any;
					public constructor(param0: com.stripe.android.StripeRepository, param1: string, param2: string, param3: com.stripe.android.ApiRequest.Options, param4: com.stripe.android.ApiResultCallback<any>);
					public constructor(param0: kotlin.coroutines.CoroutineContext, param1: com.stripe.android.ApiResultCallback<any>);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class StripeConnection {
				public static class: java.lang.Class<com.stripe.android.StripeConnection>;
				/**
				 * Constructs a new instance of the com.stripe.android.StripeConnection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getResponseCode(): number;
					getResponse(): com.stripe.android.StripeResponse;
				});
				public constructor();
				public getResponse(): com.stripe.android.StripeResponse;
				public getResponseCode(): number;
			}
			export module StripeConnection {
				export class Default extends com.stripe.android.StripeConnection {
					public static class: java.lang.Class<com.stripe.android.StripeConnection.Default>;
					public getResponseCode(): number;
					public close(): void;
					public getResponse(): com.stripe.android.StripeResponse;
					public constructor(param0: javax.net.ssl.HttpsURLConnection);
				}
				export module Default {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.StripeConnection.Default.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class StripeError extends com.stripe.android.model.StripeModel {
				public static class: java.lang.Class<com.stripe.android.StripeError>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public getType(): string;
				public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string);
				public getParam(): string;
				public component1(): string;
				public component6(): string;
				public component4(): string;
				public copy(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string): com.stripe.android.StripeError;
				public toString(): string;
				public constructor();
				public getCharge(): string;
				public getDeclineCode(): string;
				public component7(): string;
				public component3(): string;
				public hashCode(): number;
				public getDocUrl(): string;
				public component5(): string;
				public component2(): string;
				public equals(param0: any): boolean;
				public describeContents(): number;
				public getMessage(): string;
				public getCode(): string;
			}
			export module StripeError {
				export class Creator {
					public static class: java.lang.Class<com.stripe.android.StripeError.Creator>;
					public constructor();
					public createFromParcel(param0: globalAndroid.os.Parcel): any;
					public newArray(param0: number): native.Array<any>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class StripeErrorJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.StripeError> {
				public static class: java.lang.Class<com.stripe.android.StripeErrorJsonParser>;
				public static MALFORMED_RESPONSE_MESSAGE: string;
				public static Companion: com.stripe.android.StripeErrorJsonParser.Companion;
				public parse(param0: org.json.JSONObject): com.stripe.android.StripeError;
				public parse(param0: org.json.JSONObject): any;
				public constructor();
			}
			export module StripeErrorJsonParser {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.StripeErrorJsonParser.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export abstract class StripeIntentResult<T>  extends com.stripe.android.model.StripeModel {
				public static class: java.lang.Class<com.stripe.android.StripeIntentResult<any>>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: number);
				public getIntent(): any;
				public getOutcome(): number;
			}
			export module StripeIntentResult {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.StripeIntentResult.Companion>;
				}
				export class Outcome {
					public static class: java.lang.Class<com.stripe.android.StripeIntentResult.Outcome>;
					/**
					 * Constructs a new instance of the com.stripe.android.StripeIntentResult$Outcome interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						<clinit>(): void;
					});
					public constructor();
					public static UNKNOWN: number;
					public static TIMEDOUT: number;
					public static FAILED: number;
					public static Companion: com.stripe.android.StripeIntentResult.Outcome.Companion;
					public static SUCCEEDED: number;
					public static CANCELED: number;
				}
				export module Outcome {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.StripeIntentResult.Outcome.Companion>;
						public static UNKNOWN: number;
						public static SUCCEEDED: number;
						public static FAILED: number;
						public static CANCELED: number;
						public static TIMEDOUT: number;
					}
				}
				export class WhenMappings {
					public static class: java.lang.Class<com.stripe.android.StripeIntentResult.WhenMappings>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class StripeOperationIdFactory extends com.stripe.android.OperationIdFactory {
				public static class: java.lang.Class<com.stripe.android.StripeOperationIdFactory>;
				public create(): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class StripePaymentController extends com.stripe.android.PaymentController {
				public static class: java.lang.Class<com.stripe.android.StripePaymentController>;
				public static PAYMENT_REQUEST_CODE: number;
				public static SETUP_REQUEST_CODE: number;
				public static SOURCE_REQUEST_CODE: number;
				public static Companion: com.stripe.android.StripePaymentController.Companion;
				public shouldHandlePaymentResult(param0: number, param1: globalAndroid.content.Intent): boolean;
				public handleSetupResult(param0: globalAndroid.content.Intent, param1: com.stripe.android.ApiResultCallback<any>): void;
				public startConfirm(param0: com.stripe.android.model.ConfirmStripeIntentParams, param1: com.stripe.android.ApiRequest.Options, param2: com.stripe.android.ApiResultCallback<any>): void;
				public static create(param0: globalAndroid.content.Context, param1: string, param2: com.stripe.android.StripeRepository, param3: boolean): com.stripe.android.PaymentController;
				public handleSourceResult(param0: globalAndroid.content.Intent, param1: com.stripe.android.ApiResultCallback<any>): void;
				public shouldHandleSetupResult(param0: number, param1: globalAndroid.content.Intent): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.stripe.android.StripeRepository, param3: boolean, param4: com.stripe.android.stripe3ds2.transaction.MessageVersionRegistry, param5: com.stripe.android.PaymentAuthConfig, param6: com.stripe.android.stripe3ds2.service.StripeThreeDs2Service, param7: com.stripe.android.AnalyticsRequestExecutor, param8: com.stripe.android.AnalyticsDataFactory, param9: com.stripe.android.StripePaymentController.ChallengeProgressActivityStarter, param10: kotlin.coroutines.CoroutineContext, param11: globalAndroid.content.res.Resources);
				public startConfirmAndAuth(param0: com.stripe.android.view.AuthActivityStarter.Host, param1: com.stripe.android.model.ConfirmStripeIntentParams, param2: com.stripe.android.ApiRequest.Options): void;
				public static create(param0: globalAndroid.content.Context, param1: string, param2: com.stripe.android.StripeRepository): com.stripe.android.PaymentController;
				public authenticateAlipay(param0: com.stripe.android.model.StripeIntent, param1: string, param2: com.stripe.android.AlipayAuthenticator, param3: com.stripe.android.ApiResultCallback<any>): void;
				public handleNextAction(param0: com.stripe.android.view.AuthActivityStarter.Host, param1: com.stripe.android.model.StripeIntent, param2: com.stripe.android.ApiRequest.Options): void;
				public startAuthenticateSource(param0: com.stripe.android.view.AuthActivityStarter.Host, param1: com.stripe.android.model.Source, param2: com.stripe.android.ApiRequest.Options): void;
				public shouldHandleSourceResult(param0: number, param1: globalAndroid.content.Intent): boolean;
				public handlePaymentResult(param0: globalAndroid.content.Intent, param1: com.stripe.android.ApiResultCallback<any>): void;
				public startAuth(param0: com.stripe.android.view.AuthActivityStarter.Host, param1: string, param2: com.stripe.android.ApiRequest.Options): void;
			}
			export module StripePaymentController {
				export class AlipayAuthenticationTask extends com.stripe.android.ApiOperation<com.stripe.android.model.AlipayAuthResult> {
					public static class: java.lang.Class<com.stripe.android.StripePaymentController.AlipayAuthenticationTask>;
					public static Companion: com.stripe.android.StripePaymentController.AlipayAuthenticationTask.Companion;
					public getResult$stripe_release(param0: kotlin.coroutines.Continuation<any>): any;
					public constructor(param0: com.stripe.android.model.StripeIntent, param1: com.stripe.android.AlipayAuthenticator, param2: com.stripe.android.StripeRepository, param3: com.stripe.android.ApiRequest.Options, param4: com.stripe.android.ApiResultCallback<any>);
					public constructor(param0: kotlin.coroutines.CoroutineContext, param1: com.stripe.android.ApiResultCallback<any>);
				}
				export module AlipayAuthenticationTask {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.StripePaymentController.AlipayAuthenticationTask.Companion>;
					}
				}
				export class ChallengeProgressActivityStarter {
					public static class: java.lang.Class<com.stripe.android.StripePaymentController.ChallengeProgressActivityStarter>;
					/**
					 * Constructs a new instance of the com.stripe.android.StripePaymentController$ChallengeProgressActivityStarter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						start(param0: globalAndroid.content.Context, param1: string, param2: boolean, param3: com.stripe.android.stripe3ds2.init.ui.StripeUiCustomization): void;
					});
					public constructor();
					public start(param0: globalAndroid.content.Context, param1: string, param2: boolean, param3: com.stripe.android.stripe3ds2.init.ui.StripeUiCustomization): void;
				}
				export module ChallengeProgressActivityStarter {
					export class Default extends com.stripe.android.StripePaymentController.ChallengeProgressActivityStarter {
						public static class: java.lang.Class<com.stripe.android.StripePaymentController.ChallengeProgressActivityStarter.Default>;
						public constructor();
						public start(param0: globalAndroid.content.Context, param1: string, param2: boolean, param3: com.stripe.android.stripe3ds2.init.ui.StripeUiCustomization): void;
					}
				}
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.StripePaymentController.Companion>;
					public create(param0: globalAndroid.content.Context, param1: string, param2: com.stripe.android.StripeRepository): com.stripe.android.PaymentController;
					public create(param0: globalAndroid.content.Context, param1: string, param2: com.stripe.android.StripeRepository, param3: boolean): com.stripe.android.PaymentController;
					public getCHALLENGE_DELAY$stripe_release(): number;
				}
				export class ConfirmStripeIntentCallback extends com.stripe.android.ApiResultCallback<com.stripe.android.model.StripeIntent> {
					public static class: java.lang.Class<com.stripe.android.StripePaymentController.ConfirmStripeIntentCallback>;
					public constructor(param0: com.stripe.android.view.AuthActivityStarter.Host, param1: com.stripe.android.ApiRequest.Options, param2: com.stripe.android.PaymentController, param3: number);
					public onSuccess(param0: com.stripe.android.model.StripeIntent): void;
					public onError(param0: java.lang.Exception): void;
					public onSuccess(param0: any): void;
				}
				export class PaymentAuth3ds2ChallengeStatusReceiver {
					public static class: java.lang.Class<com.stripe.android.StripePaymentController.PaymentAuth3ds2ChallengeStatusReceiver>;
					public static Companion: com.stripe.android.StripePaymentController.PaymentAuth3ds2ChallengeStatusReceiver.Companion;
					public runtimeError(param0: com.stripe.android.stripe3ds2.transaction.RuntimeErrorEvent, param1: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
					public completed(param0: com.stripe.android.stripe3ds2.transaction.CompletionEvent, param1: string, param2: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
					public timedout(param0: string, param1: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
					public cancelled(param0: string, param1: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
					public protocolError(param0: com.stripe.android.stripe3ds2.transaction.ProtocolErrorEvent, param1: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
					public constructor(param0: com.stripe.android.StripeRepository, param1: com.stripe.android.model.StripeIntent, param2: string, param3: com.stripe.android.ApiRequest.Options, param4: com.stripe.android.AnalyticsRequestExecutor, param5: com.stripe.android.AnalyticsDataFactory, param6: com.stripe.android.stripe3ds2.transaction.Transaction, param7: com.stripe.android.AnalyticsRequest.Factory, param8: kotlin.coroutines.CoroutineContext);
				}
				export module PaymentAuth3ds2ChallengeStatusReceiver {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.StripePaymentController.PaymentAuth3ds2ChallengeStatusReceiver.Companion>;
						public create$stripe_release(param0: com.stripe.android.StripeRepository, param1: com.stripe.android.model.StripeIntent, param2: string, param3: com.stripe.android.ApiRequest.Options, param4: com.stripe.android.AnalyticsRequestExecutor, param5: com.stripe.android.AnalyticsDataFactory, param6: com.stripe.android.stripe3ds2.transaction.Transaction, param7: com.stripe.android.AnalyticsRequest.Factory, param8: kotlin.coroutines.CoroutineContext): com.stripe.android.StripePaymentController.PaymentAuth3ds2ChallengeStatusReceiver;
					}
				}
				export class Stripe3ds2AuthCallback extends com.stripe.android.ApiResultCallback<com.stripe.android.model.Stripe3ds2AuthResult> {
					public static class: java.lang.Class<com.stripe.android.StripePaymentController.Stripe3ds2AuthCallback>;
					public onSuccess(param0: com.stripe.android.model.Stripe3ds2AuthResult): void;
					public onError(param0: java.lang.Exception): void;
					public onSuccess(param0: any): void;
					public constructor(param0: com.stripe.android.view.AuthActivityStarter.Host, param1: com.stripe.android.StripeRepository, param2: com.stripe.android.stripe3ds2.transaction.Transaction, param3: number, param4: com.stripe.android.model.StripeIntent, param5: string, param6: com.stripe.android.ApiRequest.Options, param7: com.stripe.android.AnalyticsRequestExecutor, param8: com.stripe.android.AnalyticsDataFactory, param9: boolean, param10: com.stripe.android.PaymentRelayStarter, param11: kotlin.coroutines.CoroutineContext);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class StripeRepository {
				public static class: java.lang.Class<com.stripe.android.StripeRepository>;
				/**
				 * Constructs a new instance of the com.stripe.android.StripeRepository interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					confirmPaymentIntent(param0: com.stripe.android.model.ConfirmPaymentIntentParams, param1: com.stripe.android.ApiRequest.Options, param2: java.util.List<string>, param3: kotlin.coroutines.Continuation<any>): any;
					retrievePaymentIntent(param0: string, param1: com.stripe.android.ApiRequest.Options, param2: java.util.List<string>): com.stripe.android.model.PaymentIntent;
					cancelPaymentIntentSource(param0: string, param1: string, param2: com.stripe.android.ApiRequest.Options): com.stripe.android.model.PaymentIntent;
					confirmSetupIntent(param0: com.stripe.android.model.ConfirmSetupIntentParams, param1: com.stripe.android.ApiRequest.Options, param2: java.util.List<string>, param3: kotlin.coroutines.Continuation<any>): any;
					retrieveSetupIntent(param0: string, param1: com.stripe.android.ApiRequest.Options, param2: java.util.List<string>): com.stripe.android.model.SetupIntent;
					cancelSetupIntentSource(param0: string, param1: string, param2: com.stripe.android.ApiRequest.Options): com.stripe.android.model.SetupIntent;
					retrieveIntent(param0: string, param1: com.stripe.android.ApiRequest.Options, param2: java.util.List<string>, param3: com.stripe.android.ApiResultCallback<any>): void;
					cancelIntent(param0: com.stripe.android.model.StripeIntent, param1: string, param2: com.stripe.android.ApiRequest.Options, param3: com.stripe.android.ApiResultCallback<any>): void;
					createSource(param0: com.stripe.android.model.SourceParams, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.model.Source;
					retrieveSource(param0: string, param1: string, param2: com.stripe.android.ApiRequest.Options): com.stripe.android.model.Source;
					retrieveSource(param0: string, param1: string, param2: com.stripe.android.ApiRequest.Options, param3: com.stripe.android.ApiResultCallback<any>): void;
					createPaymentMethod(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.model.PaymentMethod;
					createToken(param0: com.stripe.android.model.TokenParams, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.model.Token;
					addCustomerSource(param0: string, param1: string, param2: java.util.Set<string>, param3: string, param4: string, param5: com.stripe.android.ApiRequest.Options, param6: kotlin.coroutines.Continuation<any>): any;
					deleteCustomerSource(param0: string, param1: string, param2: java.util.Set<string>, param3: string, param4: com.stripe.android.ApiRequest.Options, param5: kotlin.coroutines.Continuation<any>): any;
					attachPaymentMethod(param0: string, param1: string, param2: java.util.Set<string>, param3: string, param4: com.stripe.android.ApiRequest.Options, param5: kotlin.coroutines.Continuation<any>): any;
					detachPaymentMethod(param0: string, param1: java.util.Set<string>, param2: string, param3: com.stripe.android.ApiRequest.Options, param4: kotlin.coroutines.Continuation<any>): any;
					getPaymentMethods(param0: com.stripe.android.model.ListPaymentMethodsParams, param1: string, param2: java.util.Set<string>, param3: com.stripe.android.ApiRequest.Options, param4: kotlin.coroutines.Continuation<any>): any;
					setDefaultCustomerSource(param0: string, param1: string, param2: java.util.Set<string>, param3: string, param4: string, param5: com.stripe.android.ApiRequest.Options, param6: kotlin.coroutines.Continuation<any>): any;
					setCustomerShippingInfo(param0: string, param1: string, param2: java.util.Set<string>, param3: com.stripe.android.model.ShippingInformation, param4: com.stripe.android.ApiRequest.Options, param5: kotlin.coroutines.Continuation<any>): any;
					retrieveCustomer(param0: string, param1: java.util.Set<string>, param2: com.stripe.android.ApiRequest.Options, param3: kotlin.coroutines.Continuation<any>): any;
					retrieveIssuingCardPin(param0: string, param1: string, param2: string, param3: string): string;
					updateIssuingCardPin(param0: string, param1: string, param2: string, param3: string, param4: string): void;
					getFpxBankStatus(param0: com.stripe.android.ApiRequest.Options, param1: kotlin.coroutines.Continuation<any>): any;
					getCardMetadata(param0: com.stripe.android.cards.Bin, param1: com.stripe.android.ApiRequest.Options, param2: kotlin.coroutines.Continuation<any>): any;
					start3ds2Auth(param0: com.stripe.android.model.Stripe3ds2AuthParams, param1: string, param2: com.stripe.android.ApiRequest.Options, param3: kotlin.coroutines.Continuation<any>): any;
					complete3ds2Auth(param0: string, param1: com.stripe.android.ApiRequest.Options, param2: kotlin.coroutines.Continuation<any>): any;
					createFile(param0: com.stripe.android.model.StripeFileParams, param1: com.stripe.android.ApiRequest.Options, param2: kotlin.coroutines.Continuation<any>): any;
					retrieveObject(param0: string, param1: com.stripe.android.ApiRequest.Options): org.json.JSONObject;
				});
				public constructor();
				public detachPaymentMethod(param0: string, param1: java.util.Set<string>, param2: string, param3: com.stripe.android.ApiRequest.Options, param4: kotlin.coroutines.Continuation<any>): any;
				public retrieveSource(param0: string, param1: string, param2: com.stripe.android.ApiRequest.Options, param3: com.stripe.android.ApiResultCallback<any>): void;
				public retrieveObject(param0: string, param1: com.stripe.android.ApiRequest.Options): org.json.JSONObject;
				public cancelSetupIntentSource(param0: string, param1: string, param2: com.stripe.android.ApiRequest.Options): com.stripe.android.model.SetupIntent;
				public getPaymentMethods(param0: com.stripe.android.model.ListPaymentMethodsParams, param1: string, param2: java.util.Set<string>, param3: com.stripe.android.ApiRequest.Options, param4: kotlin.coroutines.Continuation<any>): any;
				public setCustomerShippingInfo(param0: string, param1: string, param2: java.util.Set<string>, param3: com.stripe.android.model.ShippingInformation, param4: com.stripe.android.ApiRequest.Options, param5: kotlin.coroutines.Continuation<any>): any;
				public retrieveSetupIntent(param0: string, param1: com.stripe.android.ApiRequest.Options, param2: java.util.List<string>): com.stripe.android.model.SetupIntent;
				public attachPaymentMethod(param0: string, param1: string, param2: java.util.Set<string>, param3: string, param4: com.stripe.android.ApiRequest.Options, param5: kotlin.coroutines.Continuation<any>): any;
				public createPaymentMethod(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.model.PaymentMethod;
				public retrievePaymentIntent(param0: string, param1: com.stripe.android.ApiRequest.Options, param2: java.util.List<string>): com.stripe.android.model.PaymentIntent;
				public createFile(param0: com.stripe.android.model.StripeFileParams, param1: com.stripe.android.ApiRequest.Options, param2: kotlin.coroutines.Continuation<any>): any;
				public retrieveIssuingCardPin(param0: string, param1: string, param2: string, param3: string): string;
				public getCardMetadata(param0: com.stripe.android.cards.Bin, param1: com.stripe.android.ApiRequest.Options, param2: kotlin.coroutines.Continuation<any>): any;
				public createSource(param0: com.stripe.android.model.SourceParams, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.model.Source;
				public getFpxBankStatus(param0: com.stripe.android.ApiRequest.Options, param1: kotlin.coroutines.Continuation<any>): any;
				public start3ds2Auth(param0: com.stripe.android.model.Stripe3ds2AuthParams, param1: string, param2: com.stripe.android.ApiRequest.Options, param3: kotlin.coroutines.Continuation<any>): any;
				public confirmPaymentIntent(param0: com.stripe.android.model.ConfirmPaymentIntentParams, param1: com.stripe.android.ApiRequest.Options, param2: java.util.List<string>, param3: kotlin.coroutines.Continuation<any>): any;
				public cancelIntent(param0: com.stripe.android.model.StripeIntent, param1: string, param2: com.stripe.android.ApiRequest.Options, param3: com.stripe.android.ApiResultCallback<any>): void;
				public retrieveSource(param0: string, param1: string, param2: com.stripe.android.ApiRequest.Options): com.stripe.android.model.Source;
				public retrieveIntent(param0: string, param1: com.stripe.android.ApiRequest.Options, param2: java.util.List<string>, param3: com.stripe.android.ApiResultCallback<any>): void;
				public confirmSetupIntent(param0: com.stripe.android.model.ConfirmSetupIntentParams, param1: com.stripe.android.ApiRequest.Options, param2: java.util.List<string>, param3: kotlin.coroutines.Continuation<any>): any;
				public setDefaultCustomerSource(param0: string, param1: string, param2: java.util.Set<string>, param3: string, param4: string, param5: com.stripe.android.ApiRequest.Options, param6: kotlin.coroutines.Continuation<any>): any;
				public addCustomerSource(param0: string, param1: string, param2: java.util.Set<string>, param3: string, param4: string, param5: com.stripe.android.ApiRequest.Options, param6: kotlin.coroutines.Continuation<any>): any;
				public createToken(param0: com.stripe.android.model.TokenParams, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.model.Token;
				public deleteCustomerSource(param0: string, param1: string, param2: java.util.Set<string>, param3: string, param4: com.stripe.android.ApiRequest.Options, param5: kotlin.coroutines.Continuation<any>): any;
				public complete3ds2Auth(param0: string, param1: com.stripe.android.ApiRequest.Options, param2: kotlin.coroutines.Continuation<any>): any;
				public retrieveCustomer(param0: string, param1: java.util.Set<string>, param2: com.stripe.android.ApiRequest.Options, param3: kotlin.coroutines.Continuation<any>): any;
				public updateIssuingCardPin(param0: string, param1: string, param2: string, param3: string, param4: string): void;
				public cancelPaymentIntentSource(param0: string, param1: string, param2: com.stripe.android.ApiRequest.Options): com.stripe.android.model.PaymentIntent;
			}
			export module StripeRepository {
				export class DefaultImpls {
					public static class: java.lang.Class<com.stripe.android.StripeRepository.DefaultImpls>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export abstract class StripeRequest {
				public static class: java.lang.Class<com.stripe.android.StripeRequest>;
				public static Companion: com.stripe.android.StripeRequest.Companion;
				public getCompactParams$stripe_release(): java.util.Map<string,any>;
				public getParams(): java.util.Map<string,any>;
				public constructor();
				public getUrl$stripe_release(): string;
				public getMethod(): com.stripe.android.StripeRequest.Method;
				public writeBody$stripe_release(param0: java.io.OutputStream): void;
				public getBody(): string;
				public getBaseUrl(): string;
				public getMimeType(): com.stripe.android.StripeRequest.MimeType;
				public getHeaders$stripe_release(): java.util.Map<string,string>;
				public getQuery(): string;
				public getContentType$stripe_release(): string;
				public getHeadersFactory(): com.stripe.android.RequestHeadersFactory;
			}
			export module StripeRequest {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.StripeRequest.Companion>;
					public getDEFAULT_SYSTEM_PROPERTY_SUPPLIER$stripe_release(): kotlin.jvm.functions.Function1<string,string>;
				}
				export class Method {
					public static class: java.lang.Class<com.stripe.android.StripeRequest.Method>;
					public static GET: com.stripe.android.StripeRequest.Method;
					public static POST: com.stripe.android.StripeRequest.Method;
					public static DELETE: com.stripe.android.StripeRequest.Method;
					public getCode(): string;
					public static values(): native.Array<com.stripe.android.StripeRequest.Method>;
					public static valueOf(param0: string): com.stripe.android.StripeRequest.Method;
				}
				export class MimeType {
					public static class: java.lang.Class<com.stripe.android.StripeRequest.MimeType>;
					public static Form: com.stripe.android.StripeRequest.MimeType;
					public static MultipartForm: com.stripe.android.StripeRequest.MimeType;
					public static Json: com.stripe.android.StripeRequest.MimeType;
					public toString(): string;
					public getCode(): string;
					public static valueOf(param0: string): com.stripe.android.StripeRequest.MimeType;
					public static values(): native.Array<com.stripe.android.StripeRequest.MimeType>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class StripeResponse {
				public static class: java.lang.Class<com.stripe.android.StripeResponse>;
				public getResponseJson$stripe_release(): org.json.JSONObject;
				public component3$stripe_release(): java.util.Map<string,java.util.List<string>>;
				public getBody$stripe_release(): string;
				public toString(): string;
				public component1$stripe_release(): number;
				public component2$stripe_release(): string;
				public isError$stripe_release(): boolean;
				public getRequestId$stripe_release(): string;
				public constructor(param0: number, param1: string, param2: java.util.Map<string,any>);
				public hashCode(): number;
				public equals(param0: any): boolean;
				public copy(param0: number, param1: string, param2: java.util.Map<string,any>): com.stripe.android.StripeResponse;
				public isOk$stripe_release(): boolean;
				public getHeaderValue$stripe_release(param0: string): java.util.List<string>;
				public getCode$stripe_release(): number;
				public getHeaders$stripe_release(): java.util.Map<string,java.util.List<string>>;
			}
			export module StripeResponse {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.StripeResponse.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class StripeTextUtils {
				public static class: java.lang.Class<com.stripe.android.StripeTextUtils>;
				public static INSTANCE: com.stripe.android.StripeTextUtils;
				/** @deprecated */
				public static removeSpacesAndHyphens(param0: string): string;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class Supplier<ReturnType>  extends java.lang.Object {
				public static class: java.lang.Class<com.stripe.android.Supplier<any>>;
				/**
				 * Constructs a new instance of the com.stripe.android.Supplier<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					get(): ReturnType;
				});
				public constructor();
				public get(): ReturnType;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module cards {
				export class Bin extends com.stripe.android.model.StripeModel {
					public static class: java.lang.Class<com.stripe.android.cards.Bin>;
					public static Companion: com.stripe.android.cards.Bin.Companion;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public equals(param0: any): boolean;
					public toString(): string;
					public getValue$stripe_release(): string;
					public copy(param0: string): com.stripe.android.cards.Bin;
					public constructor(param0: string);
					public describeContents(): number;
					public component1$stripe_release(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public hashCode(): number;
				}
				export module Bin {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.cards.Bin.Companion>;
						public create(param0: string): com.stripe.android.cards.Bin;
					}
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.cards.Bin.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module cards {
				export class CardAccountRangeRepository {
					public static class: java.lang.Class<com.stripe.android.cards.CardAccountRangeRepository>;
					/**
					 * Constructs a new instance of the com.stripe.android.cards.CardAccountRangeRepository interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getAccountRange(param0: com.stripe.android.cards.CardNumber.Unvalidated, param1: kotlin.coroutines.Continuation<any>): any;
						getLoading(): kotlinx.coroutines.flow.Flow<java.lang.Boolean>;
					});
					public constructor();
					public getAccountRange(param0: com.stripe.android.cards.CardNumber.Unvalidated, param1: kotlin.coroutines.Continuation<any>): any;
					public getLoading(): kotlinx.coroutines.flow.Flow<java.lang.Boolean>;
				}
				export module CardAccountRangeRepository {
					export class Factory {
						public static class: java.lang.Class<com.stripe.android.cards.CardAccountRangeRepository.Factory>;
						/**
						 * Constructs a new instance of the com.stripe.android.cards.CardAccountRangeRepository$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							create(): com.stripe.android.cards.CardAccountRangeRepository;
						});
						public constructor();
						public create(): com.stripe.android.cards.CardAccountRangeRepository;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module cards {
				export class CardAccountRangeSource {
					public static class: java.lang.Class<com.stripe.android.cards.CardAccountRangeSource>;
					/**
					 * Constructs a new instance of the com.stripe.android.cards.CardAccountRangeSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getAccountRange(param0: com.stripe.android.cards.CardNumber.Unvalidated, param1: kotlin.coroutines.Continuation<any>): any;
						getLoading(): kotlinx.coroutines.flow.Flow<java.lang.Boolean>;
					});
					public constructor();
					public getAccountRange(param0: com.stripe.android.cards.CardNumber.Unvalidated, param1: kotlin.coroutines.Continuation<any>): any;
					public getLoading(): kotlinx.coroutines.flow.Flow<java.lang.Boolean>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module cards {
				export class CardAccountRangeStore {
					public static class: java.lang.Class<com.stripe.android.cards.CardAccountRangeStore>;
					/**
					 * Constructs a new instance of the com.stripe.android.cards.CardAccountRangeStore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						get(param0: com.stripe.android.cards.Bin, param1: kotlin.coroutines.Continuation<any>): any;
						save(param0: com.stripe.android.cards.Bin, param1: java.util.List<com.stripe.android.model.AccountRange>): void;
						contains(param0: com.stripe.android.cards.Bin, param1: kotlin.coroutines.Continuation<any>): any;
					});
					public constructor();
					public get(param0: com.stripe.android.cards.Bin, param1: kotlin.coroutines.Continuation<any>): any;
					public save(param0: com.stripe.android.cards.Bin, param1: java.util.List<com.stripe.android.model.AccountRange>): void;
					public contains(param0: com.stripe.android.cards.Bin, param1: kotlin.coroutines.Continuation<any>): any;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module cards {
				export abstract class CardNumber {
					public static class: java.lang.Class<com.stripe.android.cards.CardNumber>;
					public static MIN_PAN_LENGTH: number;
					public static MAX_PAN_LENGTH: number;
					public static DEFAULT_PAN_LENGTH: number;
					public static Companion: com.stripe.android.cards.CardNumber.Companion;
				}
				export module CardNumber {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.cards.CardNumber.Companion>;
						public getSpacePositions$stripe_release(param0: number): java.util.Set<java.lang.Integer>;
					}
					export class Unvalidated extends com.stripe.android.cards.CardNumber {
						public static class: java.lang.Class<com.stripe.android.cards.CardNumber.Unvalidated>;
						public isMaxLength(): boolean;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getLength(): number;
						public getBin(): com.stripe.android.cards.Bin;
						public getNormalized(): string;
						public isValidLuhn(): boolean;
						public getFormatted(param0: number): string;
						public copy(param0: string): com.stripe.android.cards.CardNumber.Unvalidated;
						public toString(): string;
						public validate(param0: number): com.stripe.android.cards.CardNumber.Validated;
						public constructor(param0: string);
					}
					export module Unvalidated {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.cards.CardNumber.Unvalidated.Companion>;
						}
					}
					export class Validated extends com.stripe.android.cards.CardNumber {
						public static class: java.lang.Class<com.stripe.android.cards.CardNumber.Validated>;
						public copy(param0: string): com.stripe.android.cards.CardNumber.Validated;
						public getValue$stripe_release(): string;
						public component1$stripe_release(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module cards {
				export class CardWidgetViewModel {
					public static class: java.lang.Class<com.stripe.android.cards.CardWidgetViewModel>;
					public getAccountRange(param0: com.stripe.android.cards.CardNumber.Unvalidated): androidx.lifecycle.LiveData<com.stripe.android.model.AccountRange>;
					public constructor(param0: globalAndroid.app.Application, param1: com.stripe.android.cards.CardAccountRangeRepository.Factory);
					public constructor(param0: globalAndroid.app.Application);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module cards {
				export abstract class Cvc {
					public static class: java.lang.Class<com.stripe.android.cards.Cvc>;
				}
				export module Cvc {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.cards.Cvc.Companion>;
					}
					export class Unvalidated extends com.stripe.android.cards.Cvc {
						public static class: java.lang.Class<com.stripe.android.cards.Cvc.Unvalidated>;
						public validate(param0: number): com.stripe.android.cards.Cvc.Validated;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public copy(param0: string): com.stripe.android.cards.Cvc.Unvalidated;
						public getNormalized$stripe_release(): string;
						public toString(): string;
						public constructor(param0: string);
					}
					export class Validated extends com.stripe.android.cards.Cvc {
						public static class: java.lang.Class<com.stripe.android.cards.Cvc.Validated>;
						public copy(param0: string): com.stripe.android.cards.Cvc.Validated;
						public getValue$stripe_release(): string;
						public component1$stripe_release(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module cards {
				export class DefaultCardAccountRangeRepository extends com.stripe.android.cards.CardAccountRangeRepository {
					public static class: java.lang.Class<com.stripe.android.cards.DefaultCardAccountRangeRepository>;
					public constructor(param0: com.stripe.android.cards.CardAccountRangeSource, param1: com.stripe.android.cards.CardAccountRangeSource, param2: com.stripe.android.cards.CardAccountRangeSource, param3: com.stripe.android.cards.CardAccountRangeStore);
					public getAccountRange(param0: com.stripe.android.cards.CardNumber.Unvalidated, param1: kotlin.coroutines.Continuation<any>): any;
					public getLoading(): kotlinx.coroutines.flow.Flow<java.lang.Boolean>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module cards {
				export class DefaultCardAccountRangeRepositoryFactory extends com.stripe.android.cards.CardAccountRangeRepository.Factory {
					public static class: java.lang.Class<com.stripe.android.cards.DefaultCardAccountRangeRepositoryFactory>;
					public constructor(param0: globalAndroid.content.Context);
					public create(): com.stripe.android.cards.CardAccountRangeRepository;
					public constructor(param0: globalAndroid.content.Context, param1: com.stripe.android.AnalyticsRequestExecutor, param2: com.stripe.android.AnalyticsRequest.Factory);
				}
				export module DefaultCardAccountRangeRepositoryFactory {
					export class NullCardAccountRangeSource extends com.stripe.android.cards.CardAccountRangeSource {
						public static class: java.lang.Class<com.stripe.android.cards.DefaultCardAccountRangeRepositoryFactory.NullCardAccountRangeSource>;
						public constructor();
						public getLoading(): kotlinx.coroutines.flow.Flow<java.lang.Boolean>;
						public getAccountRange(param0: com.stripe.android.cards.CardNumber.Unvalidated, param1: kotlin.coroutines.Continuation<any>): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module cards {
				export class DefaultCardAccountRangeStore extends com.stripe.android.cards.CardAccountRangeStore {
					public static class: java.lang.Class<com.stripe.android.cards.DefaultCardAccountRangeStore>;
					public constructor(param0: globalAndroid.content.Context);
					public get(param0: com.stripe.android.cards.Bin, param1: kotlin.coroutines.Continuation<any>): any;
					public save(param0: com.stripe.android.cards.Bin, param1: java.util.List<com.stripe.android.model.AccountRange>): void;
					public createPrefKey$stripe_release(param0: com.stripe.android.cards.Bin): string;
					public contains(param0: com.stripe.android.cards.Bin, param1: kotlin.coroutines.Continuation<any>): any;
				}
				export module DefaultCardAccountRangeStore {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.cards.DefaultCardAccountRangeStore.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module cards {
				export class DefaultStaticCardAccountRanges extends com.stripe.android.cards.StaticCardAccountRanges {
					public static class: java.lang.Class<com.stripe.android.cards.DefaultStaticCardAccountRanges>;
					public static Companion: com.stripe.android.cards.DefaultStaticCardAccountRanges.Companion;
					public first(param0: com.stripe.android.cards.CardNumber.Unvalidated): com.stripe.android.model.AccountRange;
					public constructor();
					public filter(param0: com.stripe.android.cards.CardNumber.Unvalidated): java.util.List<com.stripe.android.model.AccountRange>;
				}
				export module DefaultStaticCardAccountRanges {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.cards.DefaultStaticCardAccountRanges.Companion>;
						public getACCOUNTS$stripe_release(): java.util.List<com.stripe.android.model.AccountRange>;
						public getDISCOVER_ACCOUNTS$stripe_release(): java.util.List<com.stripe.android.model.AccountRange>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module cards {
				export class InMemoryCardAccountRangeSource extends com.stripe.android.cards.CardAccountRangeSource {
					public static class: java.lang.Class<com.stripe.android.cards.InMemoryCardAccountRangeSource>;
					public getAccountRange(param0: com.stripe.android.cards.CardNumber.Unvalidated, param1: kotlin.coroutines.Continuation<any>): any;
					public constructor(param0: com.stripe.android.cards.CardAccountRangeStore);
					public getLoading(): kotlinx.coroutines.flow.Flow<java.lang.Boolean>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module cards {
				export class LegacyCardAccountRangeRepository extends com.stripe.android.cards.CardAccountRangeRepository {
					public static class: java.lang.Class<com.stripe.android.cards.LegacyCardAccountRangeRepository>;
					public getAccountRange(param0: com.stripe.android.cards.CardNumber.Unvalidated, param1: kotlin.coroutines.Continuation<any>): any;
					public constructor(param0: com.stripe.android.cards.CardAccountRangeSource);
					public getLoading(): kotlinx.coroutines.flow.Flow<java.lang.Boolean>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module cards {
				export class RemoteCardAccountRangeSource extends com.stripe.android.cards.CardAccountRangeSource {
					public static class: java.lang.Class<com.stripe.android.cards.RemoteCardAccountRangeSource>;
					public getAccountRange(param0: com.stripe.android.cards.CardNumber.Unvalidated, param1: kotlin.coroutines.Continuation<any>): any;
					public getLoading(): kotlinx.coroutines.flow.Flow<java.lang.Boolean>;
					public constructor(param0: com.stripe.android.StripeRepository, param1: com.stripe.android.ApiRequest.Options, param2: com.stripe.android.cards.CardAccountRangeStore, param3: com.stripe.android.AnalyticsRequestExecutor, param4: com.stripe.android.AnalyticsRequest.Factory, param5: com.stripe.android.AnalyticsDataFactory, param6: string);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module cards {
				export class StaticCardAccountRangeSource extends com.stripe.android.cards.CardAccountRangeSource {
					public static class: java.lang.Class<com.stripe.android.cards.StaticCardAccountRangeSource>;
					public constructor();
					public getAccountRange(param0: com.stripe.android.cards.CardNumber.Unvalidated, param1: kotlin.coroutines.Continuation<any>): any;
					public constructor(param0: com.stripe.android.cards.StaticCardAccountRanges);
					public getLoading(): kotlinx.coroutines.flow.Flow<java.lang.Boolean>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module cards {
				export class StaticCardAccountRanges {
					public static class: java.lang.Class<com.stripe.android.cards.StaticCardAccountRanges>;
					/**
					 * Constructs a new instance of the com.stripe.android.cards.StaticCardAccountRanges interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						first(param0: com.stripe.android.cards.CardNumber.Unvalidated): com.stripe.android.model.AccountRange;
						filter(param0: com.stripe.android.cards.CardNumber.Unvalidated): java.util.List<com.stripe.android.model.AccountRange>;
					});
					public constructor();
					public first(param0: com.stripe.android.cards.CardNumber.Unvalidated): com.stripe.android.model.AccountRange;
					public filter(param0: com.stripe.android.cards.CardNumber.Unvalidated): java.util.List<com.stripe.android.model.AccountRange>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module databinding {
				export class ActivityCheckoutBinding {
					public static class: java.lang.Class<com.stripe.android.databinding.ActivityCheckoutBinding>;
					public bottomSheet: globalAndroid.widget.FrameLayout;
					public buyButton: globalAndroid.widget.Button;
					public coordinator: androidx.coordinatorlayout.widget.CoordinatorLayout;
					public fragmentContainer: androidx.fragment.app.FragmentContainerView;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.stripe.android.databinding.ActivityCheckoutBinding;
					public static bind(param0: globalAndroid.view.View): com.stripe.android.databinding.ActivityCheckoutBinding;
					public getRoot(): androidx.coordinatorlayout.widget.CoordinatorLayout;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.stripe.android.databinding.ActivityCheckoutBinding;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module databinding {
				export class AddPaymentMethodActivityBinding {
					public static class: java.lang.Class<com.stripe.android.databinding.AddPaymentMethodActivityBinding>;
					public root: globalAndroid.widget.LinearLayout;
					public getRoot(): globalAndroid.widget.ScrollView;
					public static bind(param0: globalAndroid.view.View): com.stripe.android.databinding.AddPaymentMethodActivityBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.stripe.android.databinding.AddPaymentMethodActivityBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.stripe.android.databinding.AddPaymentMethodActivityBinding;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module databinding {
				export class AddPaymentMethodCardViewBinding {
					public static class: java.lang.Class<com.stripe.android.databinding.AddPaymentMethodCardViewBinding>;
					public addPaymentMethodCard: globalAndroid.widget.LinearLayout;
					public billingAddressWidget: com.stripe.android.view.ShippingInfoWidget;
					public cardMultilineWidget: com.stripe.android.view.CardMultilineWidget;
					public static bind(param0: globalAndroid.view.View): com.stripe.android.databinding.AddPaymentMethodCardViewBinding;
					public getRoot(): globalAndroid.widget.LinearLayout;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.stripe.android.databinding.AddPaymentMethodCardViewBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.stripe.android.databinding.AddPaymentMethodCardViewBinding;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module databinding {
				export class AddPaymentMethodRowBinding {
					public static class: java.lang.Class<com.stripe.android.databinding.AddPaymentMethodRowBinding>;
					public label: androidx.appcompat.widget.AppCompatTextView;
					public static bind(param0: globalAndroid.view.View): com.stripe.android.databinding.AddPaymentMethodRowBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.stripe.android.databinding.AddPaymentMethodRowBinding;
					public getRoot(): globalAndroid.widget.LinearLayout;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.stripe.android.databinding.AddPaymentMethodRowBinding;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module databinding {
				export class AddressWidgetBinding {
					public static class: java.lang.Class<com.stripe.android.databinding.AddressWidgetBinding>;
					public countryAutocompleteAaw: com.stripe.android.view.CountryAutoCompleteTextView;
					public etAddressLineOneAaw: com.stripe.android.view.StripeEditText;
					public etAddressLineTwoAaw: com.stripe.android.view.StripeEditText;
					public etCityAaw: com.stripe.android.view.StripeEditText;
					public etNameAaw: com.stripe.android.view.StripeEditText;
					public etPhoneNumberAaw: com.stripe.android.view.StripeEditText;
					public etPostalCodeAaw: com.stripe.android.view.StripeEditText;
					public etStateAaw: com.stripe.android.view.StripeEditText;
					public tlAddressLine1Aaw: com.google.android.material.textfield.TextInputLayout;
					public tlAddressLine2Aaw: com.google.android.material.textfield.TextInputLayout;
					public tlCityAaw: com.google.android.material.textfield.TextInputLayout;
					public tlNameAaw: com.google.android.material.textfield.TextInputLayout;
					public tlPhoneNumberAaw: com.google.android.material.textfield.TextInputLayout;
					public tlPostalCodeAaw: com.google.android.material.textfield.TextInputLayout;
					public tlStateAaw: com.google.android.material.textfield.TextInputLayout;
					public getRoot(): globalAndroid.view.View;
					public static bind(param0: globalAndroid.view.View): com.stripe.android.databinding.AddressWidgetBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup): com.stripe.android.databinding.AddressWidgetBinding;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module databinding {
				export class BecsDebitWidgetBinding {
					public static class: java.lang.Class<com.stripe.android.databinding.BecsDebitWidgetBinding>;
					public accountNumberEditText: com.stripe.android.view.BecsDebitAccountNumberEditText;
					public accountNumberTextInputLayout: com.google.android.material.textfield.TextInputLayout;
					public bsbEditText: com.stripe.android.view.BecsDebitBsbEditText;
					public bsbTextInputLayout: com.stripe.android.view.IconTextInputLayout;
					public emailEditText: com.stripe.android.view.EmailEditText;
					public emailTextInputLayout: com.google.android.material.textfield.TextInputLayout;
					public mandateAcceptanceTextView: com.stripe.android.view.BecsDebitMandateAcceptanceTextView;
					public nameEditText: com.stripe.android.view.StripeEditText;
					public nameTextInputLayout: com.google.android.material.textfield.TextInputLayout;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup): com.stripe.android.databinding.BecsDebitWidgetBinding;
					public getRoot(): globalAndroid.view.View;
					public static bind(param0: globalAndroid.view.View): com.stripe.android.databinding.BecsDebitWidgetBinding;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module databinding {
				export class CardBrandSpinnerDropdownBinding {
					public static class: java.lang.Class<com.stripe.android.databinding.CardBrandSpinnerDropdownBinding>;
					public textView: androidx.appcompat.widget.AppCompatTextView;
					public static bind(param0: globalAndroid.view.View): com.stripe.android.databinding.CardBrandSpinnerDropdownBinding;
					public getRoot(): androidx.appcompat.widget.AppCompatTextView;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.stripe.android.databinding.CardBrandSpinnerDropdownBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.stripe.android.databinding.CardBrandSpinnerDropdownBinding;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module databinding {
				export class CardBrandSpinnerMainBinding {
					public static class: java.lang.Class<com.stripe.android.databinding.CardBrandSpinnerMainBinding>;
					public image: androidx.appcompat.widget.AppCompatImageView;
					public getRoot(): androidx.appcompat.widget.AppCompatImageView;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.stripe.android.databinding.CardBrandSpinnerMainBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.stripe.android.databinding.CardBrandSpinnerMainBinding;
					public static bind(param0: globalAndroid.view.View): com.stripe.android.databinding.CardBrandSpinnerMainBinding;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module databinding {
				export class CardBrandViewBinding {
					public static class: java.lang.Class<com.stripe.android.databinding.CardBrandViewBinding>;
					public icon: globalAndroid.widget.ImageView;
					public progress: com.stripe.android.view.CardWidgetProgressView;
					public static bind(param0: globalAndroid.view.View): com.stripe.android.databinding.CardBrandViewBinding;
					public getRoot(): globalAndroid.view.View;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup): com.stripe.android.databinding.CardBrandViewBinding;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module databinding {
				export class CardInputWidgetBinding {
					public static class: java.lang.Class<com.stripe.android.databinding.CardInputWidgetBinding>;
					public cardBrandView: com.stripe.android.view.CardBrandView;
					public cardNumberEditText: com.stripe.android.view.CardNumberEditText;
					public cardNumberTextInputLayout: com.google.android.material.textfield.TextInputLayout;
					public container: globalAndroid.widget.FrameLayout;
					public cvcEditText: com.stripe.android.view.CvcEditText;
					public cvcTextInputLayout: com.google.android.material.textfield.TextInputLayout;
					public expiryDateEditText: com.stripe.android.view.ExpiryDateEditText;
					public expiryDateTextInputLayout: com.google.android.material.textfield.TextInputLayout;
					public postalCodeEditText: com.stripe.android.view.PostalCodeEditText;
					public postalCodeTextInputLayout: com.google.android.material.textfield.TextInputLayout;
					public static bind(param0: globalAndroid.view.View): com.stripe.android.databinding.CardInputWidgetBinding;
					public getRoot(): globalAndroid.view.View;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup): com.stripe.android.databinding.CardInputWidgetBinding;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module databinding {
				export class CardMultilineWidgetBinding {
					public static class: java.lang.Class<com.stripe.android.databinding.CardMultilineWidgetBinding>;
					public etCardNumber: com.stripe.android.view.CardNumberEditText;
					public etCvc: com.stripe.android.view.CvcEditText;
					public etExpiry: com.stripe.android.view.ExpiryDateEditText;
					public etPostalCode: com.stripe.android.view.PostalCodeEditText;
					public secondRowLayout: globalAndroid.widget.LinearLayout;
					public tlCardNumber: com.stripe.android.view.CardNumberTextInputLayout;
					public tlCvc: com.google.android.material.textfield.TextInputLayout;
					public tlExpiry: com.google.android.material.textfield.TextInputLayout;
					public tlPostalCode: com.google.android.material.textfield.TextInputLayout;
					public getRoot(): globalAndroid.view.View;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup): com.stripe.android.databinding.CardMultilineWidgetBinding;
					public static bind(param0: globalAndroid.view.View): com.stripe.android.databinding.CardMultilineWidgetBinding;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module databinding {
				export class CardWidgetProgressViewBinding {
					public static class: java.lang.Class<com.stripe.android.databinding.CardWidgetProgressViewBinding>;
					public cardLoading: globalAndroid.widget.ProgressBar;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup): com.stripe.android.databinding.CardWidgetProgressViewBinding;
					public getRoot(): globalAndroid.view.View;
					public static bind(param0: globalAndroid.view.View): com.stripe.android.databinding.CardWidgetProgressViewBinding;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module databinding {
				export class CountryAutocompleteViewBinding {
					public static class: java.lang.Class<com.stripe.android.databinding.CountryAutocompleteViewBinding>;
					public countryAutocomplete: globalAndroid.widget.AutoCompleteTextView;
					public countryTextInputLayout: com.google.android.material.textfield.TextInputLayout;
					public getRoot(): globalAndroid.view.View;
					public static bind(param0: globalAndroid.view.View): com.stripe.android.databinding.CountryAutocompleteViewBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup): com.stripe.android.databinding.CountryAutocompleteViewBinding;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module databinding {
				export class CountryTextViewBinding {
					public static class: java.lang.Class<com.stripe.android.databinding.CountryTextViewBinding>;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.stripe.android.databinding.CountryTextViewBinding;
					public static bind(param0: globalAndroid.view.View): com.stripe.android.databinding.CountryTextViewBinding;
					public getRoot(): globalAndroid.widget.TextView;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.stripe.android.databinding.CountryTextViewBinding;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module databinding {
				export class FpxBankItemBinding {
					public static class: java.lang.Class<com.stripe.android.databinding.FpxBankItemBinding>;
					public checkIcon: androidx.appcompat.widget.AppCompatImageView;
					public icon: androidx.appcompat.widget.AppCompatImageView;
					public name: androidx.appcompat.widget.AppCompatTextView;
					public getRoot(): globalAndroid.widget.LinearLayout;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.stripe.android.databinding.FpxBankItemBinding;
					public static bind(param0: globalAndroid.view.View): com.stripe.android.databinding.FpxBankItemBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.stripe.android.databinding.FpxBankItemBinding;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module databinding {
				export class FpxPaymentMethodBinding {
					public static class: java.lang.Class<com.stripe.android.databinding.FpxPaymentMethodBinding>;
					public fpxList: androidx.recyclerview.widget.RecyclerView;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.stripe.android.databinding.FpxPaymentMethodBinding;
					public getRoot(): globalAndroid.widget.LinearLayout;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.stripe.android.databinding.FpxPaymentMethodBinding;
					public static bind(param0: globalAndroid.view.View): com.stripe.android.databinding.FpxPaymentMethodBinding;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module databinding {
				export class FragmentPaymentsheetAddCardBinding {
					public static class: java.lang.Class<com.stripe.android.databinding.FragmentPaymentsheetAddCardBinding>;
					public cardMultilineWidget: com.stripe.android.view.CardMultilineWidget;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.stripe.android.databinding.FragmentPaymentsheetAddCardBinding;
					public getRoot(): globalAndroid.widget.LinearLayout;
					public static bind(param0: globalAndroid.view.View): com.stripe.android.databinding.FragmentPaymentsheetAddCardBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.stripe.android.databinding.FragmentPaymentsheetAddCardBinding;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module databinding {
				export class FragmentPaymentsheetPaymentMethodsListBinding {
					public static class: java.lang.Class<com.stripe.android.databinding.FragmentPaymentsheetPaymentMethodsListBinding>;
					public recycler: androidx.recyclerview.widget.RecyclerView;
					public static bind(param0: globalAndroid.view.View): com.stripe.android.databinding.FragmentPaymentsheetPaymentMethodsListBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.stripe.android.databinding.FragmentPaymentsheetPaymentMethodsListBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.stripe.android.databinding.FragmentPaymentsheetPaymentMethodsListBinding;
					public getRoot(): globalAndroid.widget.LinearLayout;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module databinding {
				export class GooglePayRowBinding {
					public static class: java.lang.Class<com.stripe.android.databinding.GooglePayRowBinding>;
					public checkIcon: androidx.appcompat.widget.AppCompatImageView;
					public label: androidx.appcompat.widget.AppCompatTextView;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.stripe.android.databinding.GooglePayRowBinding;
					public getRoot(): globalAndroid.widget.LinearLayout;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.stripe.android.databinding.GooglePayRowBinding;
					public static bind(param0: globalAndroid.view.View): com.stripe.android.databinding.GooglePayRowBinding;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module databinding {
				export class LayoutPaymentsheetAddCardItemBinding {
					public static class: java.lang.Class<com.stripe.android.databinding.LayoutPaymentsheetAddCardItemBinding>;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.stripe.android.databinding.LayoutPaymentsheetAddCardItemBinding;
					public static bind(param0: globalAndroid.view.View): com.stripe.android.databinding.LayoutPaymentsheetAddCardItemBinding;
					public getRoot(): globalAndroid.widget.LinearLayout;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.stripe.android.databinding.LayoutPaymentsheetAddCardItemBinding;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module databinding {
				export class LayoutPaymentsheetPaymentMethodItemBinding {
					public static class: java.lang.Class<com.stripe.android.databinding.LayoutPaymentsheetPaymentMethodItemBinding>;
					public brandIcon: globalAndroid.widget.ImageView;
					public cardNumber: globalAndroid.widget.TextView;
					public checkIcon: globalAndroid.widget.ImageView;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.stripe.android.databinding.LayoutPaymentsheetPaymentMethodItemBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.stripe.android.databinding.LayoutPaymentsheetPaymentMethodItemBinding;
					public getRoot(): androidx.constraintlayout.widget.ConstraintLayout;
					public static bind(param0: globalAndroid.view.View): com.stripe.android.databinding.LayoutPaymentsheetPaymentMethodItemBinding;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module databinding {
				export class MaskedCardRowBinding {
					public static class: java.lang.Class<com.stripe.android.databinding.MaskedCardRowBinding>;
					public maskedCardItem: com.stripe.android.view.MaskedCardView;
					public getRoot(): globalAndroid.widget.FrameLayout;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.stripe.android.databinding.MaskedCardRowBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.stripe.android.databinding.MaskedCardRowBinding;
					public static bind(param0: globalAndroid.view.View): com.stripe.android.databinding.MaskedCardRowBinding;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module databinding {
				export class MaskedCardViewBinding {
					public static class: java.lang.Class<com.stripe.android.databinding.MaskedCardViewBinding>;
					public brandIcon: androidx.appcompat.widget.AppCompatImageView;
					public checkIcon: androidx.appcompat.widget.AppCompatImageView;
					public details: androidx.appcompat.widget.AppCompatTextView;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup): com.stripe.android.databinding.MaskedCardViewBinding;
					public static bind(param0: globalAndroid.view.View): com.stripe.android.databinding.MaskedCardViewBinding;
					public getRoot(): globalAndroid.view.View;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module databinding {
				export class PaymentAuthWebViewActivityBinding {
					public static class: java.lang.Class<com.stripe.android.databinding.PaymentAuthWebViewActivityBinding>;
					public progressBar: globalAndroid.widget.ProgressBar;
					public toolbar: androidx.appcompat.widget.Toolbar;
					public webView: com.stripe.android.view.PaymentAuthWebView;
					public webViewContainer: globalAndroid.widget.FrameLayout;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.stripe.android.databinding.PaymentAuthWebViewActivityBinding;
					public static bind(param0: globalAndroid.view.View): com.stripe.android.databinding.PaymentAuthWebViewActivityBinding;
					public getRoot(): androidx.coordinatorlayout.widget.CoordinatorLayout;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.stripe.android.databinding.PaymentAuthWebViewActivityBinding;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module databinding {
				export class PaymentFlowActivityBinding {
					public static class: java.lang.Class<com.stripe.android.databinding.PaymentFlowActivityBinding>;
					public shippingFlowViewpager: com.stripe.android.view.PaymentFlowViewPager;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.stripe.android.databinding.PaymentFlowActivityBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.stripe.android.databinding.PaymentFlowActivityBinding;
					public getRoot(): globalAndroid.widget.FrameLayout;
					public static bind(param0: globalAndroid.view.View): com.stripe.android.databinding.PaymentFlowActivityBinding;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module databinding {
				export class PaymentMethodsActivityBinding {
					public static class: java.lang.Class<com.stripe.android.databinding.PaymentMethodsActivityBinding>;
					public coordinator: androidx.coordinatorlayout.widget.CoordinatorLayout;
					public footerContainer: globalAndroid.widget.FrameLayout;
					public progressBar: globalAndroid.widget.ProgressBar;
					public recycler: com.stripe.android.view.PaymentMethodsRecyclerView;
					public toolbar: androidx.appcompat.widget.Toolbar;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.stripe.android.databinding.PaymentMethodsActivityBinding;
					public getRoot(): androidx.coordinatorlayout.widget.CoordinatorLayout;
					public static bind(param0: globalAndroid.view.View): com.stripe.android.databinding.PaymentMethodsActivityBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.stripe.android.databinding.PaymentMethodsActivityBinding;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module databinding {
				export class ShippingInfoPageBinding {
					public static class: java.lang.Class<com.stripe.android.databinding.ShippingInfoPageBinding>;
					public shippingInfoWidget: com.stripe.android.view.ShippingInfoWidget;
					public getRoot(): globalAndroid.widget.ScrollView;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.stripe.android.databinding.ShippingInfoPageBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.stripe.android.databinding.ShippingInfoPageBinding;
					public static bind(param0: globalAndroid.view.View): com.stripe.android.databinding.ShippingInfoPageBinding;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module databinding {
				export class ShippingMethodPageBinding {
					public static class: java.lang.Class<com.stripe.android.databinding.ShippingMethodPageBinding>;
					public selectShippingMethodWidget: com.stripe.android.view.SelectShippingMethodWidget;
					public getRoot(): globalAndroid.widget.FrameLayout;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.stripe.android.databinding.ShippingMethodPageBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.stripe.android.databinding.ShippingMethodPageBinding;
					public static bind(param0: globalAndroid.view.View): com.stripe.android.databinding.ShippingMethodPageBinding;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module databinding {
				export class ShippingMethodViewBinding {
					public static class: java.lang.Class<com.stripe.android.databinding.ShippingMethodViewBinding>;
					public description: globalAndroid.widget.TextView;
					public name: globalAndroid.widget.TextView;
					public price: globalAndroid.widget.TextView;
					public selectedIcon: androidx.appcompat.widget.AppCompatImageView;
					public getRoot(): globalAndroid.view.View;
					public static bind(param0: globalAndroid.view.View): com.stripe.android.databinding.ShippingMethodViewBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup): com.stripe.android.databinding.ShippingMethodViewBinding;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module databinding {
				export class ShippingMethodWidgetBinding {
					public static class: java.lang.Class<com.stripe.android.databinding.ShippingMethodWidgetBinding>;
					public shippingMethods: androidx.recyclerview.widget.RecyclerView;
					public getRoot(): globalAndroid.view.View;
					public static bind(param0: globalAndroid.view.View): com.stripe.android.databinding.ShippingMethodWidgetBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup): com.stripe.android.databinding.ShippingMethodWidgetBinding;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module databinding {
				export class StripeActivityBinding {
					public static class: java.lang.Class<com.stripe.android.databinding.StripeActivityBinding>;
					public progressBar: globalAndroid.widget.ProgressBar;
					public toolbar: androidx.appcompat.widget.Toolbar;
					public viewStub: globalAndroid.view.ViewStub;
					public getRoot(): globalAndroid.widget.RelativeLayout;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.stripe.android.databinding.StripeActivityBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.stripe.android.databinding.StripeActivityBinding;
					public static bind(param0: globalAndroid.view.View): com.stripe.android.databinding.StripeActivityBinding;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module exception {
				export class APIConnectionException extends com.stripe.android.exception.StripeException {
					public static class: java.lang.Class<com.stripe.android.exception.APIConnectionException>;
					public static Companion: com.stripe.android.exception.APIConnectionException.Companion;
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: number, param3: java.lang.Throwable, param4: string);
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor();
				}
				export module APIConnectionException {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.exception.APIConnectionException.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module exception {
				export class APIException extends com.stripe.android.exception.StripeException {
					public static class: java.lang.Class<com.stripe.android.exception.APIException>;
					public static Companion: com.stripe.android.exception.APIException.Companion;
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: number, param3: string, param4: java.lang.Throwable);
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: number, param3: java.lang.Throwable, param4: string);
					public constructor();
					public constructor(param0: java.lang.Exception);
				}
				export module APIException {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.exception.APIException.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module exception {
				export class AuthenticationException extends com.stripe.android.exception.StripeException {
					public static class: java.lang.Class<com.stripe.android.exception.AuthenticationException>;
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: number, param3: java.lang.Throwable, param4: string);
					public constructor(param0: com.stripe.android.StripeError, param1: string);
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module exception {
				export class CardException extends com.stripe.android.exception.StripeException {
					public static class: java.lang.Class<com.stripe.android.exception.CardException>;
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: number, param3: java.lang.Throwable, param4: string);
					public getCode(): string;
					public constructor(param0: com.stripe.android.StripeError, param1: string);
					public getCharge(): string;
					public constructor();
					public getDeclineCode(): string;
					public getParam(): string;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module exception {
				export class InvalidRequestException extends com.stripe.android.exception.StripeException {
					public static class: java.lang.Class<com.stripe.android.exception.InvalidRequestException>;
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: number, param3: string, param4: java.lang.Throwable);
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: number, param3: java.lang.Throwable, param4: string);
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module exception {
				export class PermissionException extends com.stripe.android.exception.StripeException {
					public static class: java.lang.Class<com.stripe.android.exception.PermissionException>;
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: number, param3: java.lang.Throwable, param4: string);
					public constructor(param0: com.stripe.android.StripeError, param1: string);
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module exception {
				export class RateLimitException extends com.stripe.android.exception.StripeException {
					public static class: java.lang.Class<com.stripe.android.exception.RateLimitException>;
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: java.lang.Throwable);
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: number, param3: java.lang.Throwable, param4: string);
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module exception {
				export abstract class StripeException {
					public static class: java.lang.Class<com.stripe.android.exception.StripeException>;
					public equals(param0: any): boolean;
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: number, param3: java.lang.Throwable, param4: string);
					public toString(): string;
					public getStatusCode(): number;
					public getStripeError(): com.stripe.android.StripeError;
					public getRequestId(): string;
					public constructor();
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class AccountParams extends com.stripe.android.model.TokenParams {
					public static class: java.lang.Class<com.stripe.android.model.AccountParams>;
					public static Companion: com.stripe.android.model.AccountParams.Companion;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public constructor(param0: com.stripe.android.model.Token.Type, param1: java.util.Set<string>);
					public copy(param0: boolean, param1: com.stripe.android.model.AccountParams.BusinessTypeParams): com.stripe.android.model.AccountParams;
					public static create(param0: boolean, param1: com.stripe.android.model.AccountParams.BusinessTypeParams.Individual): com.stripe.android.model.AccountParams;
					public getTypeDataParams(): java.util.Map<string,any>;
					public describeContents(): number;
					public static create(param0: boolean, param1: com.stripe.android.model.AccountParams.BusinessType): com.stripe.android.model.AccountParams;
					public static create(param0: boolean, param1: com.stripe.android.model.AccountParams.BusinessTypeParams.Company): com.stripe.android.model.AccountParams;
					public toParamMap(): java.util.Map<string,any>;
					public equals(param0: any): boolean;
					public toString(): string;
					public static create(param0: boolean): com.stripe.android.model.AccountParams;
					public constructor(param0: boolean, param1: com.stripe.android.model.AccountParams.BusinessTypeParams);
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public hashCode(): number;
				}
				export module AccountParams {
					export class BusinessType {
						public static class: java.lang.Class<com.stripe.android.model.AccountParams.BusinessType>;
						public static Individual: com.stripe.android.model.AccountParams.BusinessType;
						public static Company: com.stripe.android.model.AccountParams.BusinessType;
						public static values(): native.Array<com.stripe.android.model.AccountParams.BusinessType>;
						public static valueOf(param0: string): com.stripe.android.model.AccountParams.BusinessType;
						public getCode(): string;
					}
					export abstract class BusinessTypeParams extends com.stripe.android.model.StripeParamsModel {
						public static class: java.lang.Class<com.stripe.android.model.AccountParams.BusinessTypeParams>;
						public getParamsList(): java.util.List<kotlin.Pair<string,any>>;
						public toParamMap(): java.util.Map<string,any>;
						public getType$stripe_release(): com.stripe.android.model.AccountParams.BusinessType;
					}
					export module BusinessTypeParams {
						export class Company extends com.stripe.android.model.AccountParams.BusinessTypeParams {
							public static class: java.lang.Class<com.stripe.android.model.AccountParams.BusinessTypeParams.Company>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator;
							public component13(): string;
							public component7(): string;
							public setAddressKanji(param0: com.stripe.android.model.AddressJapanParams): void;
							public component10(): string;
							public component1(): com.stripe.android.model.Address;
							public toParamMap(): java.util.Map<string,any>;
							public component4(): java.lang.Boolean;
							public setNameKana(param0: string): void;
							public component14(): com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Verification;
							public describeContents(): number;
							public getAddressKana(): com.stripe.android.model.AddressJapanParams;
							public getAddress(): com.stripe.android.model.Address;
							public setExecutivesProvided(param0: java.lang.Boolean): void;
							public component5(): java.lang.Boolean;
							public getAddressKanji(): com.stripe.android.model.AddressJapanParams;
							public setNameKanji(param0: string): void;
							public setVatId(param0: string): void;
							public setTaxId(param0: string): void;
							public component8(): string;
							public setVerification(param0: com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Verification): void;
							public setAddressKana(param0: com.stripe.android.model.AddressJapanParams): void;
							public setPhone(param0: string): void;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getPhone(): string;
							public getNameKanji(): string;
							public equals(param0: any): boolean;
							public getTaxIdRegistrar(): string;
							public hashCode(): number;
							public setOwnersProvided(param0: java.lang.Boolean): void;
							public copy(param0: com.stripe.android.model.Address, param1: com.stripe.android.model.AddressJapanParams, param2: com.stripe.android.model.AddressJapanParams, param3: java.lang.Boolean, param4: java.lang.Boolean, param5: string, param6: string, param7: string, param8: java.lang.Boolean, param9: string, param10: string, param11: string, param12: string, param13: com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Verification): com.stripe.android.model.AccountParams.BusinessTypeParams.Company;
							public toString(): string;
							public component9(): java.lang.Boolean;
							public constructor(param0: com.stripe.android.model.Address, param1: com.stripe.android.model.AddressJapanParams, param2: com.stripe.android.model.AddressJapanParams, param3: java.lang.Boolean, param4: java.lang.Boolean, param5: string, param6: string, param7: string, param8: java.lang.Boolean, param9: string, param10: string, param11: string, param12: string, param13: com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Verification);
							public component12(): string;
							public setAddress(param0: com.stripe.android.model.Address): void;
							public setTaxIdRegistrar(param0: string): void;
							public getDirectorsProvided(): java.lang.Boolean;
							public getExecutivesProvided(): java.lang.Boolean;
							public component6(): string;
							public setDirectorsProvided(param0: java.lang.Boolean): void;
							public constructor();
							public getNameKana(): string;
							public getOwnersProvided(): java.lang.Boolean;
							public getParamsList(): java.util.List<kotlin.Pair<string,any>>;
							public setName(param0: string): void;
							public component3(): com.stripe.android.model.AddressJapanParams;
							public getVatId(): string;
							public getName(): string;
							public getVerification(): com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Verification;
							public component2(): com.stripe.android.model.AddressJapanParams;
							public component11(): string;
							public getTaxId(): string;
						}
						export module Company {
							export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.AccountParams.BusinessTypeParams.Company> {
								public static class: java.lang.Class<com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Builder>;
								public setVatId(param0: string): com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Builder;
								public setDirectorsProvided(param0: java.lang.Boolean): com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Builder;
								public constructor();
								public setNameKanji(param0: string): com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Builder;
								public setVerification(param0: com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Verification): com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Builder;
								public build(): com.stripe.android.model.AccountParams.BusinessTypeParams.Company;
								public setTaxId(param0: string): com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Builder;
								public setExecutivesProvided(param0: java.lang.Boolean): com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Builder;
								public setPhone(param0: string): com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Builder;
								public setAddressKanji(param0: com.stripe.android.model.AddressJapanParams): com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Builder;
								public setNameKana(param0: string): com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Builder;
								public build(): any;
								public setOwnersProvided(param0: java.lang.Boolean): com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Builder;
								public setAddressKana(param0: com.stripe.android.model.AddressJapanParams): com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Builder;
								public setTaxIdRegistrar(param0: string): com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Builder;
								public setAddress(param0: com.stripe.android.model.Address): com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Builder;
								public setName(param0: string): com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Builder;
							}
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Companion>;
							}
							export class Creator {
								public static class: java.lang.Class<com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Creator>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): native.Array<any>;
								public constructor();
							}
							export class Document extends com.stripe.android.model.StripeParamsModel {
								public static class: java.lang.Class<com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Document>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator;
								public toString(): string;
								public describeContents(): number;
								public constructor(param0: string, param1: string);
								public copy(param0: string, param1: string): com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Document;
								public equals(param0: any): boolean;
								public toParamMap(): java.util.Map<string,any>;
								public constructor();
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public constructor(param0: string);
								public hashCode(): number;
							}
							export module Document {
								export class Companion {
									public static class: java.lang.Class<com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Document.Companion>;
								}
								export class Creator {
									public static class: java.lang.Class<com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Document.Creator>;
									public constructor();
									public createFromParcel(param0: globalAndroid.os.Parcel): any;
									public newArray(param0: number): native.Array<any>;
								}
							}
							export class Verification extends com.stripe.android.model.StripeParamsModel {
								public static class: java.lang.Class<com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Verification>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator;
								public copy(param0: com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Document): com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Verification;
								public toString(): string;
								public getDocument(): com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Document;
								public describeContents(): number;
								public equals(param0: any): boolean;
								public toParamMap(): java.util.Map<string,any>;
								public setDocument(param0: com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Document): void;
								public constructor(param0: com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Document);
								public constructor();
								public component1(): com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Document;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public hashCode(): number;
							}
							export module Verification {
								export class Companion {
									public static class: java.lang.Class<com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Verification.Companion>;
								}
								export class Creator {
									public static class: java.lang.Class<com.stripe.android.model.AccountParams.BusinessTypeParams.Company.Verification.Creator>;
									public constructor();
									public createFromParcel(param0: globalAndroid.os.Parcel): any;
									public newArray(param0: number): native.Array<any>;
								}
							}
						}
						export class Individual extends com.stripe.android.model.AccountParams.BusinessTypeParams {
							public static class: java.lang.Class<com.stripe.android.model.AccountParams.BusinessTypeParams.Individual>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator;
							public component13(): string;
							public component7(): string;
							public setAddressKanji(param0: com.stripe.android.model.AddressJapanParams): void;
							public component10(): string;
							public component16(): string;
							public component1(): com.stripe.android.model.Address;
							public setVerification(param0: com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Verification): void;
							public toParamMap(): java.util.Map<string,any>;
							public setFirstName(param0: string): void;
							public getFirstName(): string;
							public setMaidenName(param0: string): void;
							public setLastNameKana(param0: string): void;
							public describeContents(): number;
							public getAddressKana(): com.stripe.android.model.AddressJapanParams;
							public getAddress(): com.stripe.android.model.Address;
							public getLastNameKanji(): string;
							public setMetadata(param0: java.util.Map<string,string>): void;
							public getAddressKanji(): com.stripe.android.model.AddressJapanParams;
							public getFirstNameKanji(): string;
							public setGender(param0: string): void;
							public setSsnLast4(param0: string): void;
							public component9(): string;
							public setIdNumber(param0: string): void;
							public component15(): java.util.Map<string,string>;
							public getLastNameKana(): string;
							public setLastNameKanji(param0: string): void;
							public component8(): string;
							public setAddressKana(param0: com.stripe.android.model.AddressJapanParams): void;
							public setPhone(param0: string): void;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getDateOfBirth(): com.stripe.android.model.DateOfBirth;
							public getLastName(): string;
							public getPhone(): string;
							public component14(): string;
							public equals(param0: any): boolean;
							public setLastName(param0: string): void;
							public getGender(): string;
							public component18(): com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Verification;
							public hashCode(): number;
							public getVerification(): com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Verification;
							public setFirstNameKanji(param0: string): void;
							public toString(): string;
							public copy(param0: com.stripe.android.model.Address, param1: com.stripe.android.model.AddressJapanParams, param2: com.stripe.android.model.AddressJapanParams, param3: com.stripe.android.model.DateOfBirth, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string, param12: string, param13: string, param14: java.util.Map<string,string>, param15: string, param16: string, param17: com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Verification): com.stripe.android.model.AccountParams.BusinessTypeParams.Individual;
							public component12(): string;
							public setAddress(param0: com.stripe.android.model.Address): void;
							public setEmail(param0: string): void;
							public component17(): string;
							public component6(): string;
							public getFirstNameKana(): string;
							public constructor();
							public getMetadata(): java.util.Map<string,string>;
							public setDateOfBirth(param0: com.stripe.android.model.DateOfBirth): void;
							public getParamsList(): java.util.List<kotlin.Pair<string,any>>;
							public setFirstNameKana(param0: string): void;
							public component4(): com.stripe.android.model.DateOfBirth;
							public component5(): string;
							public getMaidenName(): string;
							public component3(): com.stripe.android.model.AddressJapanParams;
							public getIdNumber(): string;
							public getEmail(): string;
							public getSsnLast4(): string;
							public component2(): com.stripe.android.model.AddressJapanParams;
							public component11(): string;
							public constructor(param0: com.stripe.android.model.Address, param1: com.stripe.android.model.AddressJapanParams, param2: com.stripe.android.model.AddressJapanParams, param3: com.stripe.android.model.DateOfBirth, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string, param12: string, param13: string, param14: java.util.Map<string,string>, param15: string, param16: string, param17: com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Verification);
						}
						export module Individual {
							export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.AccountParams.BusinessTypeParams.Individual> {
								public static class: java.lang.Class<com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Builder>;
								public setVerification(param0: com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Verification): com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Builder;
								public setLastNameKanji(param0: string): com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Builder;
								public setMetadata(param0: java.util.Map<string,string>): com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Builder;
								public setDateOfBirth(param0: com.stripe.android.model.DateOfBirth): com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Builder;
								public setLastName(param0: string): com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Builder;
								public setPhone(param0: string): com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Builder;
								public constructor();
								public setFirstNameKana(param0: string): com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Builder;
								public setAddressKana(param0: com.stripe.android.model.AddressJapanParams): com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Builder;
								public setIdNumber(param0: string): com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Builder;
								public setMaidenName(param0: string): com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Builder;
								public build(): com.stripe.android.model.AccountParams.BusinessTypeParams.Individual;
								public setAddress(param0: com.stripe.android.model.Address): com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Builder;
								public setAddressKanji(param0: com.stripe.android.model.AddressJapanParams): com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Builder;
								public setLastNameKana(param0: string): com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Builder;
								public build(): any;
								public setFirstName(param0: string): com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Builder;
								public setEmail(param0: string): com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Builder;
								public setFirstNameKanji(param0: string): com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Builder;
								public setGender(param0: string): com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Builder;
								public setSsnLast4(param0: string): com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Builder;
							}
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Companion>;
							}
							export class Creator {
								public static class: java.lang.Class<com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Creator>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): native.Array<any>;
								public constructor();
							}
							export class Document extends com.stripe.android.model.StripeParamsModel {
								public static class: java.lang.Class<com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Document>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator;
								public copy(param0: string, param1: string): com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Document;
								public toString(): string;
								public describeContents(): number;
								public constructor(param0: string, param1: string);
								public equals(param0: any): boolean;
								public toParamMap(): java.util.Map<string,any>;
								public constructor();
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public constructor(param0: string);
								public hashCode(): number;
							}
							export module Document {
								export class Companion {
									public static class: java.lang.Class<com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Document.Companion>;
								}
								export class Creator {
									public static class: java.lang.Class<com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Document.Creator>;
									public constructor();
									public createFromParcel(param0: globalAndroid.os.Parcel): any;
									public newArray(param0: number): native.Array<any>;
								}
							}
							export class Verification extends com.stripe.android.model.StripeParamsModel {
								public static class: java.lang.Class<com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Verification>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator;
								public component1(): com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Document;
								public toString(): string;
								public getAdditionalDocument(): com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Document;
								public equals(param0: any): boolean;
								public toParamMap(): java.util.Map<string,any>;
								public getDocument(): com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Document;
								public setDocument(param0: com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Document): void;
								public constructor();
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public component2(): com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Document;
								public constructor(param0: com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Document, param1: com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Document);
								public constructor(param0: com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Document);
								public describeContents(): number;
								public setAdditionalDocument(param0: com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Document): void;
								public copy(param0: com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Document, param1: com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Document): com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Verification;
								public hashCode(): number;
							}
							export module Verification {
								export class Companion {
									public static class: java.lang.Class<com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Verification.Companion>;
								}
								export class Creator {
									public static class: java.lang.Class<com.stripe.android.model.AccountParams.BusinessTypeParams.Individual.Verification.Creator>;
									public constructor();
									public createFromParcel(param0: globalAndroid.os.Parcel): any;
									public newArray(param0: number): native.Array<any>;
								}
							}
						}
					}
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.AccountParams.Companion>;
						public create(param0: boolean, param1: com.stripe.android.model.AccountParams.BusinessTypeParams.Company): com.stripe.android.model.AccountParams;
						public create(param0: boolean, param1: com.stripe.android.model.AccountParams.BusinessTypeParams.Individual): com.stripe.android.model.AccountParams;
						public create(param0: boolean, param1: com.stripe.android.model.AccountParams.BusinessType): com.stripe.android.model.AccountParams;
						public create(param0: boolean): com.stripe.android.model.AccountParams;
					}
					export module Companion {
						export class WhenMappings {
							public static class: java.lang.Class<com.stripe.android.model.AccountParams.Companion.WhenMappings>;
						}
					}
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.AccountParams.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class AccountRange extends com.stripe.android.model.StripeModel {
					public static class: java.lang.Class<com.stripe.android.model.AccountRange>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public describeContents(): number;
					public getCountry(): string;
					public equals(param0: any): boolean;
					public component3(): com.stripe.android.model.AccountRange.BrandInfo;
					public toString(): string;
					public getPanLength(): number;
					public copy(param0: com.stripe.android.model.BinRange, param1: number, param2: com.stripe.android.model.AccountRange.BrandInfo, param3: string): com.stripe.android.model.AccountRange;
					public getBinRange(): com.stripe.android.model.BinRange;
					public getBrandInfo(): com.stripe.android.model.AccountRange.BrandInfo;
					public getBrand(): com.stripe.android.model.CardBrand;
					public component2(): number;
					public component4(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public hashCode(): number;
					public component1(): com.stripe.android.model.BinRange;
					public constructor(param0: com.stripe.android.model.BinRange, param1: number, param2: com.stripe.android.model.AccountRange.BrandInfo, param3: string);
				}
				export module AccountRange {
					export class BrandInfo {
						public static class: java.lang.Class<com.stripe.android.model.AccountRange.BrandInfo>;
						public static Visa: com.stripe.android.model.AccountRange.BrandInfo;
						public static Mastercard: com.stripe.android.model.AccountRange.BrandInfo;
						public static AmericanExpress: com.stripe.android.model.AccountRange.BrandInfo;
						public static JCB: com.stripe.android.model.AccountRange.BrandInfo;
						public static DinersClub: com.stripe.android.model.AccountRange.BrandInfo;
						public static Discover: com.stripe.android.model.AccountRange.BrandInfo;
						public static UnionPay: com.stripe.android.model.AccountRange.BrandInfo;
						public getBrandName(): string;
						public static valueOf(param0: string): com.stripe.android.model.AccountRange.BrandInfo;
						public static values(): native.Array<com.stripe.android.model.AccountRange.BrandInfo>;
						public getBrand(): com.stripe.android.model.CardBrand;
					}
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.AccountRange.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class Address implements com.stripe.android.model.StripeModel, com.stripe.android.model.StripeParamsModel {
					public static class: java.lang.Class<com.stripe.android.model.Address>;
					public static Companion: com.stripe.android.model.Address.Companion;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public component2(): string;
					public component5(): string;
					public copy(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string): com.stripe.android.model.Address;
					public describeContents(): number;
					public getLine1(): string;
					public component3(): string;
					public getCountry(): string;
					public getState(): string;
					public getCity(): string;
					public toParamMap(): java.util.Map<string,any>;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): string;
					public getLine2(): string;
					public constructor();
					public component6(): string;
					public component4(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getPostalCode(): string;
					public hashCode(): number;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string);
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.Address;
				}
				export module Address {
					export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.Address> {
						public static class: java.lang.Class<com.stripe.android.model.Address.Builder>;
						public setPostalCode(param0: string): com.stripe.android.model.Address.Builder;
						public setLine2(param0: string): com.stripe.android.model.Address.Builder;
						public constructor();
						public setState(param0: string): com.stripe.android.model.Address.Builder;
						public build(): com.stripe.android.model.Address;
						public setCountry(param0: string): com.stripe.android.model.Address.Builder;
						public setCity(param0: string): com.stripe.android.model.Address.Builder;
						public setLine1(param0: string): com.stripe.android.model.Address.Builder;
						public build(): any;
					}
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.Address.Companion>;
						public fromJson(param0: org.json.JSONObject): com.stripe.android.model.Address;
					}
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.Address.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class AddressJapanParams extends com.stripe.android.model.StripeParamsModel {
					public static class: java.lang.Class<com.stripe.android.model.AddressJapanParams>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public component2(): string;
					public component5(): string;
					public component7(): string;
					public copy(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string): com.stripe.android.model.AddressJapanParams;
					public describeContents(): number;
					public getLine1(): string;
					public component3(): string;
					public getCountry(): string;
					public getState(): string;
					public getCity(): string;
					public toParamMap(): java.util.Map<string,any>;
					public getTown(): string;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): string;
					public getLine2(): string;
					public constructor();
					public component6(): string;
					public component4(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getPostalCode(): string;
					public hashCode(): number;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string);
				}
				export module AddressJapanParams {
					export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.AddressJapanParams> {
						public static class: java.lang.Class<com.stripe.android.model.AddressJapanParams.Builder>;
						public setLine2(param0: string): com.stripe.android.model.AddressJapanParams.Builder;
						public setCity(param0: string): com.stripe.android.model.AddressJapanParams.Builder;
						public constructor();
						public setState(param0: string): com.stripe.android.model.AddressJapanParams.Builder;
						public setPostalCode(param0: string): com.stripe.android.model.AddressJapanParams.Builder;
						public setCountry(param0: string): com.stripe.android.model.AddressJapanParams.Builder;
						public build(): com.stripe.android.model.AddressJapanParams;
						public setLine1(param0: string): com.stripe.android.model.AddressJapanParams.Builder;
						public setTown(param0: string): com.stripe.android.model.AddressJapanParams.Builder;
						public build(): any;
					}
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.AddressJapanParams.Companion>;
					}
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.AddressJapanParams.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class AlipayAuthResult extends com.stripe.android.model.StripeModel {
					public static class: java.lang.Class<com.stripe.android.model.AlipayAuthResult>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): number;
					public describeContents(): number;
					public getOutcome(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public copy(param0: number): com.stripe.android.model.AlipayAuthResult;
					public hashCode(): number;
					public constructor(param0: number);
				}
				export module AlipayAuthResult {
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.AlipayAuthResult.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class BankAccount implements com.stripe.android.model.StripeModel, com.stripe.android.model.StripePaymentSource {
					public static class: java.lang.Class<com.stripe.android.model.BankAccount>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public getId(): string;
					public getFingerprint(): string;
					public component2(): string;
					public component5(): string;
					public getCountryCode(): string;
					public getCurrency(): string;
					public getRoutingNumber(): string;
					public toString(): string;
					public copy(param0: string, param1: string, param2: com.stripe.android.model.BankAccount.Type, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: com.stripe.android.model.BankAccount.Status): com.stripe.android.model.BankAccount;
					public component8(): string;
					public constructor();
					public component4(): string;
					public hashCode(): number;
					public component10(): com.stripe.android.model.BankAccount.Status;
					public component7(): string;
					public describeContents(): number;
					public getBankName(): string;
					public constructor(param0: string, param1: string, param2: com.stripe.android.model.BankAccount.Type, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: com.stripe.android.model.BankAccount.Status);
					public getAccountHolderType(): com.stripe.android.model.BankAccount.Type;
					public getLast4(): string;
					public equals(param0: any): boolean;
					public component1(): string;
					public component6(): string;
					public component9(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public component3(): com.stripe.android.model.BankAccount.Type;
					public getAccountHolderName(): string;
					public getStatus(): com.stripe.android.model.BankAccount.Status;
				}
				export module BankAccount {
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.BankAccount.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
					export class Status {
						public static class: java.lang.Class<com.stripe.android.model.BankAccount.Status>;
						public static New: com.stripe.android.model.BankAccount.Status;
						public static Validated: com.stripe.android.model.BankAccount.Status;
						public static Verified: com.stripe.android.model.BankAccount.Status;
						public static VerificationFailed: com.stripe.android.model.BankAccount.Status;
						public static Errored: com.stripe.android.model.BankAccount.Status;
						public static Companion: com.stripe.android.model.BankAccount.Status.Companion;
						public getCode$stripe_release(): string;
						public static values(): native.Array<com.stripe.android.model.BankAccount.Status>;
						public static valueOf(param0: string): com.stripe.android.model.BankAccount.Status;
					}
					export module Status {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.BankAccount.Status.Companion>;
							public fromCode$stripe_release(param0: string): com.stripe.android.model.BankAccount.Status;
						}
					}
					export class Type {
						public static class: java.lang.Class<com.stripe.android.model.BankAccount.Type>;
						public static Company: com.stripe.android.model.BankAccount.Type;
						public static Individual: com.stripe.android.model.BankAccount.Type;
						public static Companion: com.stripe.android.model.BankAccount.Type.Companion;
						public getCode$stripe_release(): string;
						public static values(): native.Array<com.stripe.android.model.BankAccount.Type>;
						public static valueOf(param0: string): com.stripe.android.model.BankAccount.Type;
					}
					export module Type {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.BankAccount.Type.Companion>;
							public fromCode$stripe_release(param0: string): com.stripe.android.model.BankAccount.Type;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class BankAccountTokenParams extends com.stripe.android.model.TokenParams {
					public static class: java.lang.Class<com.stripe.android.model.BankAccountTokenParams>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public constructor(param0: com.stripe.android.model.Token.Type, param1: java.util.Set<string>);
					public getTypeDataParams(): java.util.Map<string,any>;
					public describeContents(): number;
					public toParamMap(): java.util.Map<string,any>;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: string, param1: string, param2: string, param3: com.stripe.android.model.BankAccountTokenParams.Type);
					public constructor(param0: string, param1: string, param2: string, param3: com.stripe.android.model.BankAccountTokenParams.Type, param4: string, param5: string);
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public copy(param0: string, param1: string, param2: string, param3: com.stripe.android.model.BankAccountTokenParams.Type, param4: string, param5: string): com.stripe.android.model.BankAccountTokenParams;
					public hashCode(): number;
					public constructor(param0: string, param1: string, param2: string);
					public constructor(param0: string, param1: string, param2: string, param3: com.stripe.android.model.BankAccountTokenParams.Type, param4: string);
				}
				export module BankAccountTokenParams {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.BankAccountTokenParams.Companion>;
					}
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.BankAccountTokenParams.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
					export class Type {
						public static class: java.lang.Class<com.stripe.android.model.BankAccountTokenParams.Type>;
						public static Individual: com.stripe.android.model.BankAccountTokenParams.Type;
						public static Company: com.stripe.android.model.BankAccountTokenParams.Type;
						public static Companion: com.stripe.android.model.BankAccountTokenParams.Type.Companion;
						public getCode$stripe_release(): string;
						public static valueOf(param0: string): com.stripe.android.model.BankAccountTokenParams.Type;
						public static values(): native.Array<com.stripe.android.model.BankAccountTokenParams.Type>;
					}
					export module Type {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.BankAccountTokenParams.Type.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class BankAccountTokenParamsFixtures {
					public static class: java.lang.Class<com.stripe.android.model.BankAccountTokenParamsFixtures>;
					public static DEFAULT: com.stripe.android.model.BankAccountTokenParams;
					public static INSTANCE: com.stripe.android.model.BankAccountTokenParamsFixtures;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class BinRange extends com.stripe.android.model.StripeModel {
					public static class: java.lang.Class<com.stripe.android.model.BinRange>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public constructor(param0: string, param1: string);
					public equals(param0: any): boolean;
					public copy(param0: string, param1: string): com.stripe.android.model.BinRange;
					public getLow(): string;
					public toString(): string;
					public component1(): string;
					public component2(): string;
					public matches$stripe_release(param0: com.stripe.android.cards.CardNumber.Unvalidated): boolean;
					public describeContents(): number;
					public getHigh(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public hashCode(): number;
				}
				export module BinRange {
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.BinRange.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class Card extends com.stripe.android.model.TokenParams implements com.stripe.android.model.StripeModel, com.stripe.android.model.StripePaymentSource {
					public static class: java.lang.Class<com.stripe.android.model.Card>;
					public static Companion: com.stripe.android.model.Card.Companion;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public constructor(param0: com.stripe.android.model.Token.Type, param1: java.util.Set<string>);
					public component16(): com.stripe.android.model.CardFunding;
					/** @deprecated */
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.Card;
					public getId(): string;
					public getFingerprint(): string;
					public component2(): string;
					public component5(): string;
					public component25(): java.util.Map<string,string>;
					public getTypeDataParams(): java.util.Map<string,any>;
					public getAddressCity(): string;
					/** @deprecated */
					public static fromString(param0: string): com.stripe.android.model.Card;
					public getFunding(): com.stripe.android.model.CardFunding;
					public getCvcCheck(): string;
					/** @deprecated */
					public getMetadata(): java.util.Map<string,string>;
					public component15(): com.stripe.android.model.CardBrand;
					public component8(): string;
					public getAddressLine2(): string;
					public component22(): string;
					public component23$stripe_release(): java.util.Set<string>;
					public component12(): string;
					/** @deprecated */
					public static create(param0: string, param1: java.lang.Integer, param2: java.lang.Integer, param3: string): com.stripe.android.model.Card;
					public constructor(param0: string, param1: string, param2: java.lang.Integer, param3: java.lang.Integer, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string, param12: string, param13: string, param14: com.stripe.android.model.CardBrand, param15: com.stripe.android.model.CardFunding, param16: string, param17: string, param18: string, param19: string, param20: string, param21: string, param22: java.util.Set<string>, param23: com.stripe.android.model.TokenizationMethod, param24: java.util.Map<string,string>);
					public getAddressState(): string;
					public component24(): com.stripe.android.model.TokenizationMethod;
					public getExpMonth(): java.lang.Integer;
					public getAddressZipCheck(): string;
					public component1(): string;
					public getLoggingTokens$stripe_release(): java.util.Set<string>;
					/** @deprecated */
					public validateCVC(): boolean;
					public component9(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public component14(): string;
					/** @deprecated */
					public toPaymentMethodParamsCard(): com.stripe.android.model.PaymentMethodCreateParams.Card;
					public copy(param0: string, param1: string, param2: java.lang.Integer, param3: java.lang.Integer, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string, param12: string, param13: string, param14: com.stripe.android.model.CardBrand, param15: com.stripe.android.model.CardFunding, param16: string, param17: string, param18: string, param19: string, param20: string, param21: string, param22: java.util.Set<string>, param23: com.stripe.android.model.TokenizationMethod, param24: java.util.Map<string,string>): com.stripe.android.model.Card;
					/** @deprecated */
					public validateCard(): boolean;
					/** @deprecated */
					public toBuilder(): com.stripe.android.model.Card.Builder;
					public getCurrency(): string;
					/** @deprecated */
					public toPaymentMethodsParams(): com.stripe.android.model.PaymentMethodCreateParams;
					public component13(): string;
					public component19(): string;
					/** @deprecated */
					public validateCard$stripe_release(param0: java.util.Calendar): boolean;
					/** @deprecated */
					public validateExpYear$stripe_release(param0: java.util.Calendar): boolean;
					public getAddressCountry(): string;
					public toString(): string;
					/** @deprecated */
					public getCvc(): string;
					public getExpYear(): java.lang.Integer;
					public getBrand(): com.stripe.android.model.CardBrand;
					/** @deprecated */
					public validateExpiryDate$stripe_release(param0: java.util.Calendar): boolean;
					public hashCode(): number;
					public getCustomerId(): string;
					/** @deprecated */
					public validateNumber(): boolean;
					public getAddressLine1Check(): string;
					public component11(): string;
					public getAddressLine1(): string;
					public getTokenizationMethod(): com.stripe.android.model.TokenizationMethod;
					public component3(): java.lang.Integer;
					public component7(): string;
					public describeContents(): number;
					public getCountry(): string;
					public toParamMap(): java.util.Map<string,any>;
					public getLast4(): string;
					public component17(): string;
					public component21(): string;
					/** @deprecated */
					public getNumber(): string;
					public component10(): string;
					public equals(param0: any): boolean;
					/** @deprecated */
					public validateExpMonth(): boolean;
					public getAddressZip(): string;
					public getName(): string;
					public component4(): java.lang.Integer;
					public component6(): string;
					public component18(): string;
					/** @deprecated */
					public validateExpiryDate(): boolean;
					public component20(): string;
				}
				export module Card {
					export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.Card> {
						public static class: java.lang.Class<com.stripe.android.model.Card.Builder>;
						public addressLine2(param0: string): com.stripe.android.model.Card.Builder;
						public addressCountry(param0: string): com.stripe.android.model.Card.Builder;
						public funding(param0: com.stripe.android.model.CardFunding): com.stripe.android.model.Card.Builder;
						public getExpYear$stripe_release(): java.lang.Integer;
						public addressZip(param0: string): com.stripe.android.model.Card.Builder;
						public currency(param0: string): com.stripe.android.model.Card.Builder;
						public cvcCheck(param0: string): com.stripe.android.model.Card.Builder;
						public addressZipCheck(param0: string): com.stripe.android.model.Card.Builder;
						public brand(param0: com.stripe.android.model.CardBrand): com.stripe.android.model.Card.Builder;
						public customer(param0: string): com.stripe.android.model.Card.Builder;
						public loggingTokens(param0: java.util.Set<string>): com.stripe.android.model.Card.Builder;
						public build(): com.stripe.android.model.Card;
						public country(param0: string): com.stripe.android.model.Card.Builder;
						public addressCity(param0: string): com.stripe.android.model.Card.Builder;
						public constructor();
						public last4(param0: string): com.stripe.android.model.Card.Builder;
						public metadata(param0: java.util.Map<string,string>): com.stripe.android.model.Card.Builder;
						public fingerprint(param0: string): com.stripe.android.model.Card.Builder;
						public tokenizationMethod(param0: com.stripe.android.model.TokenizationMethod): com.stripe.android.model.Card.Builder;
						public getExpMonth$stripe_release(): java.lang.Integer;
						public name(param0: string): com.stripe.android.model.Card.Builder;
						public constructor(param0: string, param1: java.lang.Integer, param2: java.lang.Integer, param3: string);
						public addressLine1(param0: string): com.stripe.android.model.Card.Builder;
						public build(): any;
						public getNumber$stripe_release(): string;
						public getCvc$stripe_release(): string;
						public id(param0: string): com.stripe.android.model.Card.Builder;
						public addressLine1Check(param0: string): com.stripe.android.model.Card.Builder;
						public addressState(param0: string): com.stripe.android.model.Card.Builder;
					}
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.Card.Companion>;
						/** @deprecated */
						public fromJson(param0: org.json.JSONObject): com.stripe.android.model.Card;
						/** @deprecated */
						public fromString(param0: string): com.stripe.android.model.Card;
						/** @deprecated */
						public create(param0: string, param1: java.lang.Integer, param2: java.lang.Integer, param3: string): com.stripe.android.model.Card;
					}
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.Card.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class CardBrand {
					public static class: java.lang.Class<com.stripe.android.model.CardBrand>;
					public static AmericanExpress: com.stripe.android.model.CardBrand;
					public static Discover: com.stripe.android.model.CardBrand;
					public static JCB: com.stripe.android.model.CardBrand;
					public static DinersClub: com.stripe.android.model.CardBrand;
					public static Visa: com.stripe.android.model.CardBrand;
					public static MasterCard: com.stripe.android.model.CardBrand;
					public static UnionPay: com.stripe.android.model.CardBrand;
					public static Unknown: com.stripe.android.model.CardBrand;
					public static Companion: com.stripe.android.model.CardBrand.Companion;
					public getDisplayName(): string;
					/** @deprecated */
					public getDefaultSpacePositions(): java.util.Set<java.lang.Integer>;
					public getIcon(): number;
					/** @deprecated */
					public groupNumber(param0: string): native.Array<string>;
					public getErrorIcon(): number;
					/** @deprecated */
					public getDefaultMaxLength(): number;
					/** @deprecated */
					public getPattern(): java.util.regex.Pattern;
					public static valueOf(param0: string): com.stripe.android.model.CardBrand;
					public isValidCardNumberLength(param0: string): boolean;
					public static values(): native.Array<com.stripe.android.model.CardBrand>;
					public getCvcLength(): java.util.Set<java.lang.Integer>;
					public getMaxCvcLength(): number;
					public getCode(): string;
					public isMaxCvc(param0: string): boolean;
					/** @deprecated */
					public getMaxLengthWithSpacesForCardNumber(param0: string): number;
					/** @deprecated */
					public getSpacePositionsForCardNumber(param0: string): java.util.Set<java.lang.Integer>;
					/** @deprecated */
					public getMaxLengthForCardNumber(param0: string): number;
					public getCvcIcon(): number;
					/** @deprecated */
					public formatNumber(param0: string): string;
					/** @deprecated */
					public getDefaultMaxLengthWithSpaces(): number;
					public isValidCvc(param0: string): boolean;
				}
				export module CardBrand {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.CardBrand.Companion>;
						/** @deprecated */
						public fromCardNumber(param0: string): com.stripe.android.model.CardBrand;
						public fromCode(param0: string): com.stripe.android.model.CardBrand;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class CardFunding {
					public static class: java.lang.Class<com.stripe.android.model.CardFunding>;
					public static Credit: com.stripe.android.model.CardFunding;
					public static Debit: com.stripe.android.model.CardFunding;
					public static Prepaid: com.stripe.android.model.CardFunding;
					public static Unknown: com.stripe.android.model.CardFunding;
					public static Companion: com.stripe.android.model.CardFunding.Companion;
					public static valueOf(param0: string): com.stripe.android.model.CardFunding;
					public static values(): native.Array<com.stripe.android.model.CardFunding>;
					public getCode$stripe_release(): string;
				}
				export module CardFunding {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.CardFunding.Companion>;
						public fromCode$stripe_release(param0: string): com.stripe.android.model.CardFunding;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class CardMetadata extends com.stripe.android.model.StripeModel {
					public static class: java.lang.Class<com.stripe.android.model.CardMetadata>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public getBin(): com.stripe.android.cards.Bin;
					public component2(): java.util.List<com.stripe.android.model.AccountRange>;
					public equals(param0: any): boolean;
					public toString(): string;
					public copy(param0: com.stripe.android.cards.Bin, param1: java.util.List<com.stripe.android.model.AccountRange>): com.stripe.android.model.CardMetadata;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getAccountRanges(): java.util.List<com.stripe.android.model.AccountRange>;
					public hashCode(): number;
					public constructor(param0: com.stripe.android.cards.Bin, param1: java.util.List<com.stripe.android.model.AccountRange>);
					public component1(): com.stripe.android.cards.Bin;
				}
				export module CardMetadata {
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.CardMetadata.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class CardParams extends com.stripe.android.model.TokenParams {
					public static class: java.lang.Class<com.stripe.android.model.CardParams>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public constructor(param0: com.stripe.android.model.Token.Type, param1: java.util.Set<string>);
					public component3$stripe_release(): number;
					public constructor(param0: string, param1: number, param2: number, param3: string, param4: string, param5: com.stripe.android.model.Address, param6: string, param7: java.util.Map<string,string>);
					public getTypeDataParams(): java.util.Map<string,any>;
					public getCurrency(): string;
					public setExpYear$stripe_release(param0: number): void;
					public setExpMonth$stripe_release(param0: number): void;
					public getExpYear$stripe_release(): number;
					public constructor(param0: string, param1: number, param2: number, param3: string, param4: string);
					public toString(): string;
					public component8(): string;
					public getCvc$stripe_release(): string;
					public component2$stripe_release(): string;
					public copy(param0: java.util.Set<string>, param1: string, param2: number, param3: number, param4: string, param5: string, param6: com.stripe.android.model.Address, param7: string, param8: java.util.Map<string,string>): com.stripe.android.model.CardParams;
					public component5$stripe_release(): string;
					public hashCode(): number;
					public constructor(param0: string, param1: number, param2: number, param3: string, param4: string, param5: com.stripe.android.model.Address);
					public constructor(param0: string, param1: number, param2: number);
					public setAddress(param0: com.stripe.android.model.Address): void;
					public component9(): java.util.Map<string,string>;
					public describeContents(): number;
					public getExpMonth$stripe_release(): number;
					public setCurrency(param0: string): void;
					public toParamMap(): java.util.Map<string,any>;
					public setName(param0: string): void;
					public equals(param0: any): boolean;
					public constructor(param0: string, param1: number, param2: number, param3: string);
					public component4$stripe_release(): number;
					public setNumber$stripe_release(param0: string): void;
					public setCvc$stripe_release(param0: string): void;
					public getName(): string;
					public getMetadata(): java.util.Map<string,string>;
					public component6(): string;
					public getNumber$stripe_release(): string;
					public constructor(param0: string, param1: number, param2: number, param3: string, param4: string, param5: com.stripe.android.model.Address, param6: string);
					public component7(): com.stripe.android.model.Address;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public setMetadata(param0: java.util.Map<string,string>): void;
					public getAddress(): com.stripe.android.model.Address;
					public constructor(param0: java.util.Set<string>, param1: string, param2: number, param3: number, param4: string, param5: string, param6: com.stripe.android.model.Address, param7: string, param8: java.util.Map<string,string>);
				}
				export module CardParams {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.CardParams.Companion>;
					}
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.CardParams.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class Complete3ds2Result extends com.stripe.android.model.StripeModel {
					public static class: java.lang.Class<com.stripe.android.model.Complete3ds2Result>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public getResult(): boolean;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: boolean);
					public describeContents(): number;
					public copy(param0: boolean): com.stripe.android.model.Complete3ds2Result;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public component1(): boolean;
					public hashCode(): number;
				}
				export module Complete3ds2Result {
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.Complete3ds2Result.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class ConfirmPaymentIntentParams extends com.stripe.android.model.ConfirmStripeIntentParams {
					public static class: java.lang.Class<com.stripe.android.model.ConfirmPaymentIntentParams>;
					public static PARAM_SOURCE_DATA: string;
					public static Companion: com.stripe.android.model.ConfirmPaymentIntentParams.Companion;
					public static createWithPaymentMethodCreateParams(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string): com.stripe.android.model.ConfirmPaymentIntentParams;
					public static createWithSourceId(param0: string, param1: string, param2: string): com.stripe.android.model.ConfirmPaymentIntentParams;
					public component2(): string;
					public static createWithPaymentMethodId(param0: string, param1: string, param2: string, param3: java.lang.Boolean, param4: java.util.Map<string,any>): com.stripe.android.model.ConfirmPaymentIntentParams;
					public static createWithSourceParams(param0: com.stripe.android.model.SourceParams, param1: string, param2: string, param3: java.lang.Boolean, param4: java.util.Map<string,any>): com.stripe.android.model.ConfirmPaymentIntentParams;
					public setReceiptEmail(param0: string): void;
					public getPaymentMethodOptions(): com.stripe.android.model.PaymentMethodOptionsParams;
					public static createWithPaymentMethodId(param0: string, param1: string, param2: string, param3: java.lang.Boolean, param4: java.util.Map<string,any>, param5: com.stripe.android.model.PaymentMethodOptionsParams, param6: string, param7: com.stripe.android.model.MandateDataParams, param8: com.stripe.android.model.ConfirmPaymentIntentParams.SetupFutureUsage, param9: com.stripe.android.model.ConfirmPaymentIntentParams.Shipping): com.stripe.android.model.ConfirmPaymentIntentParams;
					public static createWithSourceParams(param0: com.stripe.android.model.SourceParams, param1: string, param2: string, param3: java.lang.Boolean, param4: java.util.Map<string,any>, param5: com.stripe.android.model.ConfirmPaymentIntentParams.Shipping): com.stripe.android.model.ConfirmPaymentIntentParams;
					public setMandateData(param0: com.stripe.android.model.MandateDataParams): void;
					public getMandateId(): string;
					public static createWithSourceParams(param0: com.stripe.android.model.SourceParams, param1: string, param2: string, param3: java.lang.Boolean): com.stripe.android.model.ConfirmPaymentIntentParams;
					public component14(): com.stripe.android.model.ConfirmPaymentIntentParams.Shipping;
					public static create(param0: string, param1: string, param2: java.util.Map<string,any>): com.stripe.android.model.ConfirmPaymentIntentParams;
					public static createWithSourceParams(param0: com.stripe.android.model.SourceParams, param1: string, param2: string): com.stripe.android.model.ConfirmPaymentIntentParams;
					public static createWithPaymentMethodCreateParams(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string, param3: java.lang.Boolean, param4: java.util.Map<string,any>, param5: string, param6: com.stripe.android.model.MandateDataParams, param7: com.stripe.android.model.ConfirmPaymentIntentParams.SetupFutureUsage): com.stripe.android.model.ConfirmPaymentIntentParams;
					public getPaymentMethodId(): string;
					public copy(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: com.stripe.android.model.SourceParams, param3: string, param4: java.util.Map<string,any>, param5: string, param6: string, param7: java.lang.Boolean, param8: boolean, param9: com.stripe.android.model.PaymentMethodOptionsParams, param10: string, param11: com.stripe.android.model.MandateDataParams, param12: com.stripe.android.model.ConfirmPaymentIntentParams.SetupFutureUsage, param13: com.stripe.android.model.ConfirmPaymentIntentParams.Shipping, param14: string): com.stripe.android.model.ConfirmPaymentIntentParams;
					public static createWithPaymentMethodCreateParams(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string, param3: java.lang.Boolean, param4: java.util.Map<string,any>): com.stripe.android.model.ConfirmPaymentIntentParams;
					public component5(): java.util.Map<string,any>;
					public getReceiptEmail(): string;
					public static createWithPaymentMethodId(param0: string, param1: string, param2: string): com.stripe.android.model.ConfirmPaymentIntentParams;
					public component15(): string;
					public static createWithPaymentMethodId(param0: string, param1: string, param2: string, param3: java.lang.Boolean, param4: java.util.Map<string,any>, param5: com.stripe.android.model.PaymentMethodOptionsParams): com.stripe.android.model.ConfirmPaymentIntentParams;
					public shouldSavePaymentMethod(): boolean;
					public static create(param0: string, param1: string): com.stripe.android.model.ConfirmPaymentIntentParams;
					public static create(param0: string, param1: string, param2: java.util.Map<string,any>, param3: com.stripe.android.model.ConfirmPaymentIntentParams.Shipping): com.stripe.android.model.ConfirmPaymentIntentParams;
					public component3(): com.stripe.android.model.SourceParams;
					public static createWithPaymentMethodCreateParams(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string, param3: java.lang.Boolean, param4: java.util.Map<string,any>, param5: string, param6: com.stripe.android.model.MandateDataParams): com.stripe.android.model.ConfirmPaymentIntentParams;
					public getSetupFutureUsage(): com.stripe.android.model.ConfirmPaymentIntentParams.SetupFutureUsage;
					public static createWithPaymentMethodCreateParams(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string, param3: java.lang.Boolean): com.stripe.android.model.ConfirmPaymentIntentParams;
					public getReturnUrl(): string;
					public setMandateId(param0: string): void;
					public static createWithPaymentMethodId(param0: string, param1: string, param2: string, param3: java.lang.Boolean, param4: java.util.Map<string,any>, param5: com.stripe.android.model.PaymentMethodOptionsParams, param6: string): com.stripe.android.model.ConfirmPaymentIntentParams;
					public shouldUseStripeSdk(): boolean;
					public static createWithSourceId(param0: string, param1: string, param2: string, param3: java.lang.Boolean): com.stripe.android.model.ConfirmPaymentIntentParams;
					public getSavePaymentMethod(): java.lang.Boolean;
					public component8(): java.lang.Boolean;
					public static createWithPaymentMethodId(param0: string, param1: string, param2: string, param3: java.lang.Boolean): com.stripe.android.model.ConfirmPaymentIntentParams;
					public static createWithPaymentMethodCreateParams(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string, param3: java.lang.Boolean, param4: java.util.Map<string,any>, param5: string, param6: com.stripe.android.model.MandateDataParams, param7: com.stripe.android.model.ConfirmPaymentIntentParams.SetupFutureUsage, param8: com.stripe.android.model.ConfirmPaymentIntentParams.Shipping): com.stripe.android.model.ConfirmPaymentIntentParams;
					public getMandateData(): com.stripe.android.model.MandateDataParams;
					public setSetupFutureUsage(param0: com.stripe.android.model.ConfirmPaymentIntentParams.SetupFutureUsage): void;
					public component1(): com.stripe.android.model.PaymentMethodCreateParams;
					public getSourceId(): string;
					public withShouldUseStripeSdk(param0: boolean): com.stripe.android.model.ConfirmPaymentIntentParams;
					public static createWithPaymentMethodCreateParams(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string, param3: java.lang.Boolean, param4: java.util.Map<string,any>, param5: string): com.stripe.android.model.ConfirmPaymentIntentParams;
					public static createWithPaymentMethodId(param0: string, param1: string, param2: string, param3: java.lang.Boolean, param4: java.util.Map<string,any>, param5: com.stripe.android.model.PaymentMethodOptionsParams, param6: string, param7: com.stripe.android.model.MandateDataParams): com.stripe.android.model.ConfirmPaymentIntentParams;
					public static createWithPaymentMethodCreateParams(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string): com.stripe.android.model.ConfirmPaymentIntentParams;
					public getClientSecret(): string;
					public toString(): string;
					public static createWithPaymentMethodId(param0: string, param1: string, param2: string, param3: java.lang.Boolean, param4: java.util.Map<string,any>, param5: com.stripe.android.model.PaymentMethodOptionsParams, param6: string, param7: com.stripe.android.model.MandateDataParams, param8: com.stripe.android.model.ConfirmPaymentIntentParams.SetupFutureUsage): com.stripe.android.model.ConfirmPaymentIntentParams;
					public static createAlipay(param0: string): com.stripe.android.model.ConfirmPaymentIntentParams;
					public getShipping(): com.stripe.android.model.ConfirmPaymentIntentParams.Shipping;
					public component4(): string;
					public hashCode(): number;
					public static createWithSourceId(param0: string, param1: string, param2: string, param3: java.lang.Boolean, param4: java.util.Map<string,any>, param5: com.stripe.android.model.ConfirmPaymentIntentParams.Shipping): com.stripe.android.model.ConfirmPaymentIntentParams;
					public setReturnUrl(param0: string): void;
					public component11(): string;
					public component13(): com.stripe.android.model.ConfirmPaymentIntentParams.SetupFutureUsage;
					public getSourceParams(): com.stripe.android.model.SourceParams;
					public setPaymentMethodOptions(param0: com.stripe.android.model.PaymentMethodOptionsParams): void;
					public constructor(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: com.stripe.android.model.SourceParams, param3: string, param4: java.util.Map<string,any>, param5: string, param6: string, param7: java.lang.Boolean, param8: boolean, param9: com.stripe.android.model.PaymentMethodOptionsParams, param10: string, param11: com.stripe.android.model.MandateDataParams, param12: com.stripe.android.model.ConfirmPaymentIntentParams.SetupFutureUsage, param13: com.stripe.android.model.ConfirmPaymentIntentParams.Shipping, param14: string);
					public component7(): string;
					public setShipping(param0: com.stripe.android.model.ConfirmPaymentIntentParams.Shipping): void;
					public toParamMap(): java.util.Map<string,any>;
					public setSavePaymentMethod(param0: java.lang.Boolean): void;
					public static create(param0: string): com.stripe.android.model.ConfirmPaymentIntentParams;
					public equals(param0: any): boolean;
					public static createWithPaymentMethodId(param0: string, param1: string): com.stripe.android.model.ConfirmPaymentIntentParams;
					public static createWithSourceId(param0: string, param1: string, param2: string, param3: java.lang.Boolean, param4: java.util.Map<string,any>): com.stripe.android.model.ConfirmPaymentIntentParams;
					public getPaymentMethodCreateParams(): com.stripe.android.model.PaymentMethodCreateParams;
					public getExtraParams(): java.util.Map<string,any>;
					public component6(): string;
					public component12(): com.stripe.android.model.MandateDataParams;
					public component10(): com.stripe.android.model.PaymentMethodOptionsParams;
					public withShouldUseStripeSdk(param0: boolean): com.stripe.android.model.ConfirmStripeIntentParams;
				}
				export module ConfirmPaymentIntentParams {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.ConfirmPaymentIntentParams.Companion>;
						public createWithPaymentMethodId(param0: string, param1: string, param2: string, param3: java.lang.Boolean): com.stripe.android.model.ConfirmPaymentIntentParams;
						public createWithPaymentMethodId(param0: string, param1: string, param2: string, param3: java.lang.Boolean, param4: java.util.Map<string,any>, param5: com.stripe.android.model.PaymentMethodOptionsParams): com.stripe.android.model.ConfirmPaymentIntentParams;
						public createWithPaymentMethodId(param0: string, param1: string, param2: string, param3: java.lang.Boolean, param4: java.util.Map<string,any>, param5: com.stripe.android.model.PaymentMethodOptionsParams, param6: string, param7: com.stripe.android.model.MandateDataParams, param8: com.stripe.android.model.ConfirmPaymentIntentParams.SetupFutureUsage): com.stripe.android.model.ConfirmPaymentIntentParams;
						public createWithSourceParams(param0: com.stripe.android.model.SourceParams, param1: string, param2: string, param3: java.lang.Boolean): com.stripe.android.model.ConfirmPaymentIntentParams;
						public createWithPaymentMethodId(param0: string, param1: string): com.stripe.android.model.ConfirmPaymentIntentParams;
						public create(param0: string, param1: string): com.stripe.android.model.ConfirmPaymentIntentParams;
						public createWithPaymentMethodId(param0: string, param1: string, param2: string, param3: java.lang.Boolean, param4: java.util.Map<string,any>): com.stripe.android.model.ConfirmPaymentIntentParams;
						public createWithSourceId(param0: string, param1: string, param2: string, param3: java.lang.Boolean): com.stripe.android.model.ConfirmPaymentIntentParams;
						public createWithSourceId(param0: string, param1: string, param2: string): com.stripe.android.model.ConfirmPaymentIntentParams;
						public create(param0: string, param1: string, param2: java.util.Map<string,any>, param3: com.stripe.android.model.ConfirmPaymentIntentParams.Shipping): com.stripe.android.model.ConfirmPaymentIntentParams;
						public createWithSourceId(param0: string, param1: string, param2: string, param3: java.lang.Boolean, param4: java.util.Map<string,any>): com.stripe.android.model.ConfirmPaymentIntentParams;
						public create(param0: string, param1: string, param2: java.util.Map<string,any>): com.stripe.android.model.ConfirmPaymentIntentParams;
						public createWithPaymentMethodId(param0: string, param1: string, param2: string): com.stripe.android.model.ConfirmPaymentIntentParams;
						public createWithPaymentMethodCreateParams(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string, param3: java.lang.Boolean): com.stripe.android.model.ConfirmPaymentIntentParams;
						public createWithPaymentMethodId(param0: string, param1: string, param2: string, param3: java.lang.Boolean, param4: java.util.Map<string,any>, param5: com.stripe.android.model.PaymentMethodOptionsParams, param6: string): com.stripe.android.model.ConfirmPaymentIntentParams;
						public createWithSourceParams(param0: com.stripe.android.model.SourceParams, param1: string, param2: string, param3: java.lang.Boolean, param4: java.util.Map<string,any>, param5: com.stripe.android.model.ConfirmPaymentIntentParams.Shipping): com.stripe.android.model.ConfirmPaymentIntentParams;
						public createWithSourceId(param0: string, param1: string, param2: string, param3: java.lang.Boolean, param4: java.util.Map<string,any>, param5: com.stripe.android.model.ConfirmPaymentIntentParams.Shipping): com.stripe.android.model.ConfirmPaymentIntentParams;
						public createWithPaymentMethodCreateParams(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string, param3: java.lang.Boolean, param4: java.util.Map<string,any>, param5: string, param6: com.stripe.android.model.MandateDataParams): com.stripe.android.model.ConfirmPaymentIntentParams;
						public createWithPaymentMethodCreateParams(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string): com.stripe.android.model.ConfirmPaymentIntentParams;
						public createWithPaymentMethodCreateParams(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string): com.stripe.android.model.ConfirmPaymentIntentParams;
						public createWithPaymentMethodCreateParams(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string, param3: java.lang.Boolean, param4: java.util.Map<string,any>, param5: string): com.stripe.android.model.ConfirmPaymentIntentParams;
						public createWithPaymentMethodId(param0: string, param1: string, param2: string, param3: java.lang.Boolean, param4: java.util.Map<string,any>, param5: com.stripe.android.model.PaymentMethodOptionsParams, param6: string, param7: com.stripe.android.model.MandateDataParams): com.stripe.android.model.ConfirmPaymentIntentParams;
						public createWithPaymentMethodCreateParams(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string, param3: java.lang.Boolean, param4: java.util.Map<string,any>, param5: string, param6: com.stripe.android.model.MandateDataParams, param7: com.stripe.android.model.ConfirmPaymentIntentParams.SetupFutureUsage): com.stripe.android.model.ConfirmPaymentIntentParams;
						public createWithSourceParams(param0: com.stripe.android.model.SourceParams, param1: string, param2: string): com.stripe.android.model.ConfirmPaymentIntentParams;
						public create(param0: string): com.stripe.android.model.ConfirmPaymentIntentParams;
						public createWithPaymentMethodCreateParams(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string, param3: java.lang.Boolean, param4: java.util.Map<string,any>): com.stripe.android.model.ConfirmPaymentIntentParams;
						public createWithPaymentMethodId(param0: string, param1: string, param2: string, param3: java.lang.Boolean, param4: java.util.Map<string,any>, param5: com.stripe.android.model.PaymentMethodOptionsParams, param6: string, param7: com.stripe.android.model.MandateDataParams, param8: com.stripe.android.model.ConfirmPaymentIntentParams.SetupFutureUsage, param9: com.stripe.android.model.ConfirmPaymentIntentParams.Shipping): com.stripe.android.model.ConfirmPaymentIntentParams;
						public createAlipay(param0: string): com.stripe.android.model.ConfirmPaymentIntentParams;
						public createWithSourceParams(param0: com.stripe.android.model.SourceParams, param1: string, param2: string, param3: java.lang.Boolean, param4: java.util.Map<string,any>): com.stripe.android.model.ConfirmPaymentIntentParams;
						public createWithPaymentMethodCreateParams(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string, param3: java.lang.Boolean, param4: java.util.Map<string,any>, param5: string, param6: com.stripe.android.model.MandateDataParams, param7: com.stripe.android.model.ConfirmPaymentIntentParams.SetupFutureUsage, param8: com.stripe.android.model.ConfirmPaymentIntentParams.Shipping): com.stripe.android.model.ConfirmPaymentIntentParams;
					}
					export class SetupFutureUsage {
						public static class: java.lang.Class<com.stripe.android.model.ConfirmPaymentIntentParams.SetupFutureUsage>;
						public static OnSession: com.stripe.android.model.ConfirmPaymentIntentParams.SetupFutureUsage;
						public static OffSession: com.stripe.android.model.ConfirmPaymentIntentParams.SetupFutureUsage;
						public getCode$stripe_release(): string;
						public static valueOf(param0: string): com.stripe.android.model.ConfirmPaymentIntentParams.SetupFutureUsage;
						public static values(): native.Array<com.stripe.android.model.ConfirmPaymentIntentParams.SetupFutureUsage>;
					}
					export class Shipping extends com.stripe.android.model.StripeParamsModel {
						public static class: java.lang.Class<com.stripe.android.model.ConfirmPaymentIntentParams.Shipping>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public describeContents(): number;
						public getCarrier$stripe_release(): string;
						public toParamMap(): java.util.Map<string,any>;
						public getAddress$stripe_release(): com.stripe.android.model.Address;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public component4$stripe_release(): string;
						public getName$stripe_release(): string;
						public getPhone$stripe_release(): string;
						public getTrackingNumber$stripe_release(): string;
						public toString(): string;
						public constructor(param0: com.stripe.android.model.Address, param1: string);
						public constructor(param0: com.stripe.android.model.Address, param1: string, param2: string, param3: string, param4: string);
						public component1$stripe_release(): com.stripe.android.model.Address;
						public constructor(param0: com.stripe.android.model.Address, param1: string, param2: string, param3: string);
						public component3$stripe_release(): string;
						public component2$stripe_release(): string;
						public constructor(param0: com.stripe.android.model.Address, param1: string, param2: string);
						public component5$stripe_release(): string;
						public copy(param0: com.stripe.android.model.Address, param1: string, param2: string, param3: string, param4: string): com.stripe.android.model.ConfirmPaymentIntentParams.Shipping;
					}
					export module Shipping {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.ConfirmPaymentIntentParams.Shipping.Companion>;
						}
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.ConfirmPaymentIntentParams.Shipping.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class ConfirmSetupIntentParams extends com.stripe.android.model.ConfirmStripeIntentParams {
					public static class: java.lang.Class<com.stripe.android.model.ConfirmSetupIntentParams>;
					public static Companion: com.stripe.android.model.ConfirmSetupIntentParams.Companion;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public component7(): com.stripe.android.model.MandateDataParams;
					public getMandateData(): com.stripe.android.model.MandateDataParams;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string, param3: string, param4: com.stripe.android.model.MandateDataParams): com.stripe.android.model.ConfirmSetupIntentParams;
					public copy(param0: string, param1: string, param2: com.stripe.android.model.PaymentMethodCreateParams, param3: string, param4: boolean, param5: string, param6: com.stripe.android.model.MandateDataParams): com.stripe.android.model.ConfirmSetupIntentParams;
					public static create(param0: string, param1: string, param2: string, param3: string, param4: com.stripe.android.model.MandateDataParams): com.stripe.android.model.ConfirmSetupIntentParams;
					public getClientSecret(): string;
					public setMandateData(param0: com.stripe.android.model.MandateDataParams): void;
					public getMandateId(): string;
					public toString(): string;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string): com.stripe.android.model.ConfirmSetupIntentParams;
					public withShouldUseStripeSdk(param0: boolean): com.stripe.android.model.ConfirmSetupIntentParams;
					public component2$stripe_release(): string;
					public static create(param0: string, param1: string, param2: string, param3: string): com.stripe.android.model.ConfirmSetupIntentParams;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string, param3: string): com.stripe.android.model.ConfirmSetupIntentParams;
					public component4(): string;
					public hashCode(): number;
					public component3$stripe_release(): com.stripe.android.model.PaymentMethodCreateParams;
					public setReturnUrl(param0: string): void;
					public constructor(param0: string, param1: string, param2: com.stripe.android.model.PaymentMethodCreateParams, param3: string, param4: boolean, param5: string, param6: com.stripe.android.model.MandateDataParams);
					public static createWithoutPaymentMethod(param0: string): com.stripe.android.model.ConfirmSetupIntentParams;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string): com.stripe.android.model.ConfirmSetupIntentParams;
					public describeContents(): number;
					public toParamMap(): java.util.Map<string,any>;
					public equals(param0: any): boolean;
					public component1(): string;
					public component6(): string;
					public getReturnUrl(): string;
					public setMandateId(param0: string): void;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public shouldUseStripeSdk(): boolean;
					public static createWithoutPaymentMethod(param0: string, param1: string): com.stripe.android.model.ConfirmSetupIntentParams;
					public static create(param0: string, param1: string, param2: string): com.stripe.android.model.ConfirmSetupIntentParams;
					public static create(param0: string, param1: string): com.stripe.android.model.ConfirmSetupIntentParams;
					public withShouldUseStripeSdk(param0: boolean): com.stripe.android.model.ConfirmStripeIntentParams;
				}
				export module ConfirmSetupIntentParams {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.ConfirmSetupIntentParams.Companion>;
						public create(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string, param3: string): com.stripe.android.model.ConfirmSetupIntentParams;
						public create(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string): com.stripe.android.model.ConfirmSetupIntentParams;
						public createWithoutPaymentMethod(param0: string, param1: string): com.stripe.android.model.ConfirmSetupIntentParams;
						public create(param0: string, param1: string, param2: string, param3: string, param4: com.stripe.android.model.MandateDataParams): com.stripe.android.model.ConfirmSetupIntentParams;
						public create(param0: string, param1: string): com.stripe.android.model.ConfirmSetupIntentParams;
						public create(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string): com.stripe.android.model.ConfirmSetupIntentParams;
						public create(param0: string, param1: string, param2: string, param3: string): com.stripe.android.model.ConfirmSetupIntentParams;
						public create(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string, param3: string, param4: com.stripe.android.model.MandateDataParams): com.stripe.android.model.ConfirmSetupIntentParams;
						public create(param0: string, param1: string, param2: string): com.stripe.android.model.ConfirmSetupIntentParams;
						public createWithoutPaymentMethod(param0: string): com.stripe.android.model.ConfirmSetupIntentParams;
					}
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.ConfirmSetupIntentParams.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class ConfirmStripeIntentParams extends com.stripe.android.model.StripeParamsModel {
					public static class: java.lang.Class<com.stripe.android.model.ConfirmStripeIntentParams>;
					/**
					 * Constructs a new instance of the com.stripe.android.model.ConfirmStripeIntentParams interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getClientSecret(): string;
						shouldUseStripeSdk(): boolean;
						withShouldUseStripeSdk(param0: boolean): com.stripe.android.model.ConfirmStripeIntentParams;
						<clinit>(): void;
						toParamMap(): java.util.Map<string,any>;
					});
					public constructor();
					public static PARAM_PAYMENT_METHOD_DATA: string;
					public static PARAM_PAYMENT_METHOD_ID: string;
					public static PARAM_USE_STRIPE_SDK: string;
					public static PARAM_MANDATE_ID: string;
					public static PARAM_MANDATE_DATA: string;
					public static PARAM_RETURN_URL: string;
					public static Companion: com.stripe.android.model.ConfirmStripeIntentParams.Companion;
					public static PARAM_CLIENT_SECRET: string;
					public shouldUseStripeSdk(): boolean;
					public toParamMap(): java.util.Map<string,any>;
					public getClientSecret(): string;
					public withShouldUseStripeSdk(param0: boolean): com.stripe.android.model.ConfirmStripeIntentParams;
				}
				export module ConfirmStripeIntentParams {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.ConfirmStripeIntentParams.Companion>;
						public static PARAM_CLIENT_SECRET: string;
						public static PARAM_RETURN_URL: string;
						public static PARAM_PAYMENT_METHOD_ID: string;
						public static PARAM_PAYMENT_METHOD_DATA: string;
						public static PARAM_USE_STRIPE_SDK: string;
						public static PARAM_MANDATE_ID: string;
						public static PARAM_MANDATE_DATA: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class Customer extends com.stripe.android.model.StripeModel {
					public static class: java.lang.Class<com.stripe.android.model.Customer>;
					public static Companion: com.stripe.android.model.Customer.Companion;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public getLiveMode(): boolean;
					public getId(): string;
					public component2(): string;
					public component10(): boolean;
					public getSourceById(param0: string): com.stripe.android.model.CustomerSource;
					public component5(): boolean;
					public component4(): java.util.List<com.stripe.android.model.CustomerSource>;
					public component6(): java.lang.Integer;
					public toString(): string;
					public getHasMore(): boolean;
					public getUrl(): string;
					public component8(): string;
					public hashCode(): number;
					public getEmail(): string;
					public copy(param0: string, param1: string, param2: com.stripe.android.model.ShippingInformation, param3: java.util.List<com.stripe.android.model.CustomerSource>, param4: boolean, param5: java.lang.Integer, param6: string, param7: string, param8: string, param9: boolean): com.stripe.android.model.Customer;
					public getTotalCount(): java.lang.Integer;
					public component7(): string;
					public describeContents(): number;
					public component3(): com.stripe.android.model.ShippingInformation;
					public equals(param0: any): boolean;
					public component1(): string;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.Customer;
					public constructor(param0: string, param1: string, param2: com.stripe.android.model.ShippingInformation, param3: java.util.List<com.stripe.android.model.CustomerSource>, param4: boolean, param5: java.lang.Integer, param6: string, param7: string, param8: string, param9: boolean);
					public getDefaultSource(): string;
					public getSources(): java.util.List<com.stripe.android.model.CustomerSource>;
					public component9(): string;
					public static fromString(param0: string): com.stripe.android.model.Customer;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getDescription(): string;
					public getShippingInformation(): com.stripe.android.model.ShippingInformation;
				}
				export module Customer {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.Customer.Companion>;
						public fromString(param0: string): com.stripe.android.model.Customer;
						public fromJson(param0: org.json.JSONObject): com.stripe.android.model.Customer;
					}
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.Customer.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class CustomerSource implements com.stripe.android.model.StripeModel, com.stripe.android.model.StripePaymentSource {
					public static class: java.lang.Class<com.stripe.android.model.CustomerSource>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public copy(param0: com.stripe.android.model.StripePaymentSource): com.stripe.android.model.CustomerSource;
					public equals(param0: any): boolean;
					public toString(): string;
					public getId(): string;
					public getSourceType(): string;
					public getTokenizationMethod(): com.stripe.android.model.TokenizationMethod;
					public constructor(param0: com.stripe.android.model.StripePaymentSource);
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public asCard(): com.stripe.android.model.Card;
					public hashCode(): number;
					public asSource(): com.stripe.android.model.Source;
				}
				export module CustomerSource {
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.CustomerSource.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class CvcTokenParams extends com.stripe.android.model.TokenParams {
					public static class: java.lang.Class<com.stripe.android.model.CvcTokenParams>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public constructor(param0: com.stripe.android.model.Token.Type, param1: java.util.Set<string>);
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: string);
					public getTypeDataParams(): java.util.Map<string,any>;
					public describeContents(): number;
					public copy(param0: string): com.stripe.android.model.CvcTokenParams;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public hashCode(): number;
					public toParamMap(): java.util.Map<string,any>;
				}
				export module CvcTokenParams {
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.CvcTokenParams.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class DateOfBirth extends com.stripe.android.model.StripeParamsModel {
					public static class: java.lang.Class<com.stripe.android.model.DateOfBirth>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public component3(): number;
					public copy(param0: number, param1: number, param2: number): com.stripe.android.model.DateOfBirth;
					public describeContents(): number;
					public toParamMap(): java.util.Map<string,any>;
					public equals(param0: any): boolean;
					public getYear(): number;
					public getMonth(): number;
					public toString(): string;
					public constructor(param0: number, param1: number, param2: number);
					public component1(): number;
					public component2(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getDay(): number;
					public hashCode(): number;
				}
				export module DateOfBirth {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.DateOfBirth.Companion>;
					}
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.DateOfBirth.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class FpxBankStatuses extends com.stripe.android.model.StripeModel {
					public static class: java.lang.Class<com.stripe.android.model.FpxBankStatuses>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public constructor(param0: java.util.Map<string,java.lang.Boolean>);
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor();
					public copy(param0: java.util.Map<string,java.lang.Boolean>): com.stripe.android.model.FpxBankStatuses;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public hashCode(): number;
					public size$stripe_release(): number;
				}
				export module FpxBankStatuses {
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.FpxBankStatuses.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class GooglePayResult {
					public static class: java.lang.Class<com.stripe.android.model.GooglePayResult>;
					public static Companion: com.stripe.android.model.GooglePayResult.Companion;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public constructor(param0: com.stripe.android.model.Token, param1: com.stripe.android.model.Address, param2: string, param3: string, param4: string, param5: com.stripe.android.model.ShippingInformation);
					public component5(): string;
					public component6(): com.stripe.android.model.ShippingInformation;
					public describeContents(): number;
					public component3(): string;
					public equals(param0: any): boolean;
					public toString(): string;
					public getName(): string;
					public constructor();
					public getPhoneNumber(): string;
					public component1(): com.stripe.android.model.Token;
					public component2(): com.stripe.android.model.Address;
					public component4(): string;
					public getToken(): com.stripe.android.model.Token;
					public copy(param0: com.stripe.android.model.Token, param1: com.stripe.android.model.Address, param2: string, param3: string, param4: string, param5: com.stripe.android.model.ShippingInformation): com.stripe.android.model.GooglePayResult;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.GooglePayResult;
					public hashCode(): number;
					public getAddress(): com.stripe.android.model.Address;
					public getEmail(): string;
					public getShippingInformation(): com.stripe.android.model.ShippingInformation;
				}
				export module GooglePayResult {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.GooglePayResult.Companion>;
						public fromJson(param0: org.json.JSONObject): com.stripe.android.model.GooglePayResult;
					}
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.GooglePayResult.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class HackerRankKt {
					public static class: java.lang.Class<com.stripe.android.model.HackerRankKt>;
					public static main(): void;
					public static evalationChange(param0: string): number;
					public static countingValleys(param0: number, param1: string): number;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class HikeState {
					public static class: java.lang.Class<com.stripe.android.model.HikeState>;
					public equals(param0: any): boolean;
					public toString(): string;
					public getValleysSeen(): number;
					public getElevation(): number;
					public isInValley(): boolean;
					public component1(): number;
					public component2(): number;
					public copy(param0: number, param1: number): com.stripe.android.model.HikeState;
					public hashCode(): number;
					public constructor(param0: number, param1: number);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class KlarnaSourceParams extends com.stripe.android.model.StripeParamsModel {
					public static class: java.lang.Class<com.stripe.android.model.KlarnaSourceParams>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public component5(): string;
					public constructor(param0: string, param1: java.util.List<com.stripe.android.model.KlarnaSourceParams.LineItem>, param2: java.util.Set<any>, param3: string, param4: string, param5: com.stripe.android.model.Address, param6: string, param7: string, param8: com.stripe.android.model.DateOfBirth, param9: com.stripe.android.model.KlarnaSourceParams.PaymentPageOptions);
					public component3(): java.util.Set<com.stripe.android.model.KlarnaSourceParams.CustomPaymentMethods>;
					public getLineItems(): java.util.List<com.stripe.android.model.KlarnaSourceParams.LineItem>;
					public toString(): string;
					public component8(): string;
					public constructor(param0: string, param1: java.util.List<com.stripe.android.model.KlarnaSourceParams.LineItem>, param2: java.util.Set<any>, param3: string, param4: string, param5: com.stripe.android.model.Address);
					public component4(): string;
					public getPurchaseCountry(): string;
					public hashCode(): number;
					public getBillingPhone(): string;
					public getBillingEmail(): string;
					public getBillingAddress(): com.stripe.android.model.Address;
					public constructor(param0: string, param1: java.util.List<com.stripe.android.model.KlarnaSourceParams.LineItem>, param2: java.util.Set<any>);
					public constructor(param0: string, param1: java.util.List<com.stripe.android.model.KlarnaSourceParams.LineItem>, param2: java.util.Set<any>, param3: string, param4: string, param5: com.stripe.android.model.Address, param6: string);
					public getBillingFirstName(): string;
					public component6(): com.stripe.android.model.Address;
					public constructor(param0: string, param1: java.util.List<com.stripe.android.model.KlarnaSourceParams.LineItem>, param2: java.util.Set<any>, param3: string, param4: string);
					public component7(): string;
					public describeContents(): number;
					public getBillingLastName(): string;
					public toParamMap(): java.util.Map<string,any>;
					public component10(): com.stripe.android.model.KlarnaSourceParams.PaymentPageOptions;
					public constructor(param0: string, param1: java.util.List<com.stripe.android.model.KlarnaSourceParams.LineItem>, param2: java.util.Set<any>, param3: string, param4: string, param5: com.stripe.android.model.Address, param6: string, param7: string);
					public equals(param0: any): boolean;
					public component9(): com.stripe.android.model.DateOfBirth;
					public component1(): string;
					public getCustomPaymentMethods(): java.util.Set<com.stripe.android.model.KlarnaSourceParams.CustomPaymentMethods>;
					public getPageOptions(): com.stripe.android.model.KlarnaSourceParams.PaymentPageOptions;
					public constructor(param0: string, param1: java.util.List<com.stripe.android.model.KlarnaSourceParams.LineItem>, param2: java.util.Set<any>, param3: string, param4: string, param5: com.stripe.android.model.Address, param6: string, param7: string, param8: com.stripe.android.model.DateOfBirth);
					public constructor(param0: string, param1: java.util.List<com.stripe.android.model.KlarnaSourceParams.LineItem>, param2: java.util.Set<any>, param3: string);
					public constructor(param0: string, param1: java.util.List<com.stripe.android.model.KlarnaSourceParams.LineItem>);
					public component2(): java.util.List<com.stripe.android.model.KlarnaSourceParams.LineItem>;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getBillingDob(): com.stripe.android.model.DateOfBirth;
					public copy(param0: string, param1: java.util.List<com.stripe.android.model.KlarnaSourceParams.LineItem>, param2: java.util.Set<any>, param3: string, param4: string, param5: com.stripe.android.model.Address, param6: string, param7: string, param8: com.stripe.android.model.DateOfBirth, param9: com.stripe.android.model.KlarnaSourceParams.PaymentPageOptions): com.stripe.android.model.KlarnaSourceParams;
				}
				export module KlarnaSourceParams {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.KlarnaSourceParams.Companion>;
					}
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.KlarnaSourceParams.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
					export class CustomPaymentMethods {
						public static class: java.lang.Class<com.stripe.android.model.KlarnaSourceParams.CustomPaymentMethods>;
						public static PayIn4: com.stripe.android.model.KlarnaSourceParams.CustomPaymentMethods;
						public static Installments: com.stripe.android.model.KlarnaSourceParams.CustomPaymentMethods;
						public static values(): native.Array<com.stripe.android.model.KlarnaSourceParams.CustomPaymentMethods>;
						public getCode$stripe_release(): string;
						public static valueOf(param0: string): com.stripe.android.model.KlarnaSourceParams.CustomPaymentMethods;
					}
					export class LineItem {
						public static class: java.lang.Class<com.stripe.android.model.KlarnaSourceParams.LineItem>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public describeContents(): number;
						public getItemDescription(): string;
						public copy(param0: com.stripe.android.model.KlarnaSourceParams.LineItem.Type, param1: string, param2: number, param3: java.lang.Integer): com.stripe.android.model.KlarnaSourceParams.LineItem;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: com.stripe.android.model.KlarnaSourceParams.LineItem.Type, param1: string, param2: number, param3: java.lang.Integer);
						public getQuantity(): java.lang.Integer;
						public getItemType(): com.stripe.android.model.KlarnaSourceParams.LineItem.Type;
						public getTotalAmount(): number;
						public toString(): string;
						public component2(): string;
						public constructor(param0: com.stripe.android.model.KlarnaSourceParams.LineItem.Type, param1: string, param2: number);
						public component4(): java.lang.Integer;
						public component1(): com.stripe.android.model.KlarnaSourceParams.LineItem.Type;
						public component3(): number;
					}
					export module LineItem {
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.KlarnaSourceParams.LineItem.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
						export class Type {
							public static class: java.lang.Class<com.stripe.android.model.KlarnaSourceParams.LineItem.Type>;
							public static Sku: com.stripe.android.model.KlarnaSourceParams.LineItem.Type;
							public static Tax: com.stripe.android.model.KlarnaSourceParams.LineItem.Type;
							public static Shipping: com.stripe.android.model.KlarnaSourceParams.LineItem.Type;
							public getCode$stripe_release(): string;
							public static valueOf(param0: string): com.stripe.android.model.KlarnaSourceParams.LineItem.Type;
							public static values(): native.Array<com.stripe.android.model.KlarnaSourceParams.LineItem.Type>;
						}
					}
					export class PaymentPageOptions extends com.stripe.android.model.StripeParamsModel {
						public static class: java.lang.Class<com.stripe.android.model.KlarnaSourceParams.PaymentPageOptions>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public getLogoUrl(): string;
						public component4(): com.stripe.android.model.KlarnaSourceParams.PaymentPageOptions.PurchaseType;
						public constructor();
						public component3(): string;
						public describeContents(): number;
						public toParamMap(): java.util.Map<string,any>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: string, param1: string, param2: string, param3: com.stripe.android.model.KlarnaSourceParams.PaymentPageOptions.PurchaseType);
						public getBackgroundImageUrl(): string;
						public toString(): string;
						public getPageTitle(): string;
						public getPurchaseType(): com.stripe.android.model.KlarnaSourceParams.PaymentPageOptions.PurchaseType;
						public copy(param0: string, param1: string, param2: string, param3: com.stripe.android.model.KlarnaSourceParams.PaymentPageOptions.PurchaseType): com.stripe.android.model.KlarnaSourceParams.PaymentPageOptions;
						public component2(): string;
					}
					export module PaymentPageOptions {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.KlarnaSourceParams.PaymentPageOptions.Companion>;
						}
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.KlarnaSourceParams.PaymentPageOptions.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
						export class PurchaseType {
							public static class: java.lang.Class<com.stripe.android.model.KlarnaSourceParams.PaymentPageOptions.PurchaseType>;
							public static Buy: com.stripe.android.model.KlarnaSourceParams.PaymentPageOptions.PurchaseType;
							public static Rent: com.stripe.android.model.KlarnaSourceParams.PaymentPageOptions.PurchaseType;
							public static Book: com.stripe.android.model.KlarnaSourceParams.PaymentPageOptions.PurchaseType;
							public static Subscribe: com.stripe.android.model.KlarnaSourceParams.PaymentPageOptions.PurchaseType;
							public static Download: com.stripe.android.model.KlarnaSourceParams.PaymentPageOptions.PurchaseType;
							public static Order: com.stripe.android.model.KlarnaSourceParams.PaymentPageOptions.PurchaseType;
							public static Continue: com.stripe.android.model.KlarnaSourceParams.PaymentPageOptions.PurchaseType;
							public getCode(): string;
							public static values(): native.Array<com.stripe.android.model.KlarnaSourceParams.PaymentPageOptions.PurchaseType>;
							public static valueOf(param0: string): com.stripe.android.model.KlarnaSourceParams.PaymentPageOptions.PurchaseType;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class ListPaymentMethodsParams extends com.stripe.android.model.StripeParamsModel {
					public static class: java.lang.Class<com.stripe.android.model.ListPaymentMethodsParams>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public copy(param0: string, param1: com.stripe.android.model.PaymentMethod.Type, param2: java.lang.Integer, param3: string, param4: string): com.stripe.android.model.ListPaymentMethodsParams;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: string, param1: com.stripe.android.model.PaymentMethod.Type, param2: java.lang.Integer, param3: string, param4: string);
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public hashCode(): number;
					public toParamMap(): java.util.Map<string,any>;
				}
				export module ListPaymentMethodsParams {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.ListPaymentMethodsParams.Companion>;
					}
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.ListPaymentMethodsParams.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class MandateDataParams extends com.stripe.android.model.StripeParamsModel {
					public static class: java.lang.Class<com.stripe.android.model.MandateDataParams>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public copy(param0: com.stripe.android.model.MandateDataParams.Type): com.stripe.android.model.MandateDataParams;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: com.stripe.android.model.MandateDataParams.Type);
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public hashCode(): number;
					public toParamMap(): java.util.Map<string,any>;
				}
				export module MandateDataParams {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.MandateDataParams.Companion>;
					}
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.MandateDataParams.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
					export abstract class Type extends com.stripe.android.model.StripeParamsModel {
						public static class: java.lang.Class<com.stripe.android.model.MandateDataParams.Type>;
						public getCode$stripe_release(): string;
						public toParamMap(): java.util.Map<string,any>;
					}
					export module Type {
						export class Online extends com.stripe.android.model.MandateDataParams.Type {
							public static class: java.lang.Class<com.stripe.android.model.MandateDataParams.Type.Online>;
							public static Companion: com.stripe.android.model.MandateDataParams.Type.Online.Companion;
							public static CREATOR: globalAndroid.os.Parcelable.Creator;
							public constructor();
							public copy(param0: string, param1: string, param2: boolean): com.stripe.android.model.MandateDataParams.Type.Online;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: string, param1: string, param2: boolean);
							public hashCode(): number;
							public constructor(param0: string, param1: string);
							public describeContents(): number;
							public toParamMap(): java.util.Map<string,any>;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export module Online {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.MandateDataParams.Type.Online.Companion>;
								public getDEFAULT$stripe_release(): com.stripe.android.model.MandateDataParams.Type.Online;
							}
							export class Creator {
								public static class: java.lang.Class<com.stripe.android.model.MandateDataParams.Type.Online.Creator>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): native.Array<any>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class ModelUtils {
					public static class: java.lang.Class<com.stripe.android.model.ModelUtils>;
					public static INSTANCE: com.stripe.android.model.ModelUtils;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class PaymentIntent extends com.stripe.android.model.StripeIntent {
					public static class: java.lang.Class<com.stripe.android.model.PaymentIntent>;
					public static Companion: com.stripe.android.model.PaymentIntent.Companion;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public getId(): string;
					public component17(): com.stripe.android.model.StripeIntent.Status;
					public component13(): java.util.Map<string,any>;
					public component14(): com.stripe.android.model.PaymentMethod;
					public getNextActionType(): com.stripe.android.model.StripeIntent.NextActionType;
					public component21(): com.stripe.android.model.StripeIntent.NextActionData;
					public constructor(param0: string, param1: java.util.List<string>, param2: java.lang.Long, param3: number, param4: com.stripe.android.model.PaymentIntent.CancellationReason, param5: com.stripe.android.model.PaymentIntent.CaptureMethod, param6: string, param7: com.stripe.android.model.PaymentIntent.ConfirmationMethod, param8: number, param9: string, param10: string, param11: boolean, param12: java.util.Map<string,any>, param13: com.stripe.android.model.PaymentMethod, param14: string, param15: string, param16: com.stripe.android.model.StripeIntent.Status, param17: com.stripe.android.model.StripeIntent.Usage, param18: com.stripe.android.model.PaymentIntent.Error, param19: com.stripe.android.model.PaymentIntent.Shipping, param20: com.stripe.android.model.StripeIntent.NextActionData);
					public getCanceledAt(): number;
					public getPaymentMethodId(): string;
					public getNextAction(): java.util.Map<string,any>;
					public component8(): com.stripe.android.model.PaymentIntent.ConfirmationMethod;
					public getShipping(): com.stripe.android.model.PaymentIntent.Shipping;
					public getCreated(): number;
					public getReceiptEmail(): string;
					public component15(): string;
					public getPaymentMethod(): com.stripe.android.model.PaymentMethod;
					public getNextActionData(): com.stripe.android.model.StripeIntent.NextActionData;
					public component20(): com.stripe.android.model.PaymentIntent.Shipping;
					public requiresAction(): boolean;
					public component1(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getDescription(): string;
					public component6(): com.stripe.android.model.PaymentIntent.CaptureMethod;
					public component16(): string;
					public requiresConfirmation(): boolean;
					public component2(): java.util.List<string>;
					public getCurrency(): string;
					public copy(param0: string, param1: java.util.List<string>, param2: java.lang.Long, param3: number, param4: com.stripe.android.model.PaymentIntent.CancellationReason, param5: com.stripe.android.model.PaymentIntent.CaptureMethod, param6: string, param7: com.stripe.android.model.PaymentIntent.ConfirmationMethod, param8: number, param9: string, param10: string, param11: boolean, param12: java.util.Map<string,any>, param13: com.stripe.android.model.PaymentMethod, param14: string, param15: string, param16: com.stripe.android.model.StripeIntent.Status, param17: com.stripe.android.model.StripeIntent.Usage, param18: com.stripe.android.model.PaymentIntent.Error, param19: com.stripe.android.model.PaymentIntent.Shipping, param20: com.stripe.android.model.StripeIntent.NextActionData): com.stripe.android.model.PaymentIntent;
					public getClientSecret(): string;
					public toString(): string;
					public isLiveMode(): boolean;
					public component3(): java.lang.Long;
					public component4(): number;
					public component5(): com.stripe.android.model.PaymentIntent.CancellationReason;
					public getPaymentMethodTypes(): java.util.List<string>;
					public component12(): boolean;
					public hashCode(): number;
					public getCancellationReason(): com.stripe.android.model.PaymentIntent.CancellationReason;
					public component11(): string;
					public getAmount(): java.lang.Long;
					public getLastPaymentError(): com.stripe.android.model.PaymentIntent.Error;
					public component7(): string;
					public describeContents(): number;
					public component9(): number;
					public getConfirmationMethod(): com.stripe.android.model.PaymentIntent.ConfirmationMethod;
					public component10(): string;
					public equals(param0: any): boolean;
					public getStatus(): com.stripe.android.model.StripeIntent.Status;
					public component19(): com.stripe.android.model.PaymentIntent.Error;
					public getCaptureMethod(): com.stripe.android.model.PaymentIntent.CaptureMethod;
				}
				export module PaymentIntent {
					export class CancellationReason {
						public static class: java.lang.Class<com.stripe.android.model.PaymentIntent.CancellationReason>;
						public static Duplicate: com.stripe.android.model.PaymentIntent.CancellationReason;
						public static Fraudulent: com.stripe.android.model.PaymentIntent.CancellationReason;
						public static RequestedByCustomer: com.stripe.android.model.PaymentIntent.CancellationReason;
						public static Abandoned: com.stripe.android.model.PaymentIntent.CancellationReason;
						public static FailedInvoice: com.stripe.android.model.PaymentIntent.CancellationReason;
						public static VoidInvoice: com.stripe.android.model.PaymentIntent.CancellationReason;
						public static Automatic: com.stripe.android.model.PaymentIntent.CancellationReason;
						public static Companion: com.stripe.android.model.PaymentIntent.CancellationReason.Companion;
						public static valueOf(param0: string): com.stripe.android.model.PaymentIntent.CancellationReason;
						public static values(): native.Array<com.stripe.android.model.PaymentIntent.CancellationReason>;
					}
					export module CancellationReason {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.PaymentIntent.CancellationReason.Companion>;
							public fromCode(param0: string): com.stripe.android.model.PaymentIntent.CancellationReason;
						}
					}
					export class CaptureMethod {
						public static class: java.lang.Class<com.stripe.android.model.PaymentIntent.CaptureMethod>;
						public static Automatic: com.stripe.android.model.PaymentIntent.CaptureMethod;
						public static Manual: com.stripe.android.model.PaymentIntent.CaptureMethod;
						public static Companion: com.stripe.android.model.PaymentIntent.CaptureMethod.Companion;
						public static valueOf(param0: string): com.stripe.android.model.PaymentIntent.CaptureMethod;
						public static values(): native.Array<com.stripe.android.model.PaymentIntent.CaptureMethod>;
					}
					export module CaptureMethod {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.PaymentIntent.CaptureMethod.Companion>;
							public fromCode(param0: string): com.stripe.android.model.PaymentIntent.CaptureMethod;
						}
					}
					export class ClientSecret {
						public static class: java.lang.Class<com.stripe.android.model.PaymentIntent.ClientSecret>;
						public copy(param0: string): com.stripe.android.model.PaymentIntent.ClientSecret;
						public getValue$stripe_release(): string;
						public component1$stripe_release(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getPaymentIntentId$stripe_release(): string;
						public toString(): string;
						public constructor(param0: string);
					}
					export module ClientSecret {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.PaymentIntent.ClientSecret.Companion>;
						}
					}
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.PaymentIntent.Companion>;
						public fromJson(param0: org.json.JSONObject): com.stripe.android.model.PaymentIntent;
					}
					export class ConfirmationMethod {
						public static class: java.lang.Class<com.stripe.android.model.PaymentIntent.ConfirmationMethod>;
						public static Automatic: com.stripe.android.model.PaymentIntent.ConfirmationMethod;
						public static Manual: com.stripe.android.model.PaymentIntent.ConfirmationMethod;
						public static Companion: com.stripe.android.model.PaymentIntent.ConfirmationMethod.Companion;
						public static values(): native.Array<com.stripe.android.model.PaymentIntent.ConfirmationMethod>;
						public static valueOf(param0: string): com.stripe.android.model.PaymentIntent.ConfirmationMethod;
					}
					export module ConfirmationMethod {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.PaymentIntent.ConfirmationMethod.Companion>;
							public fromCode(param0: string): com.stripe.android.model.PaymentIntent.ConfirmationMethod;
						}
					}
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.PaymentIntent.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
					export class Error extends com.stripe.android.model.StripeModel {
						public static class: java.lang.Class<com.stripe.android.model.PaymentIntent.Error>;
						public static CODE_AUTHENTICATION_ERROR: string;
						public static Companion: com.stripe.android.model.PaymentIntent.Error.Companion;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public getMessage(): string;
						public component3(): string;
						public component7(): com.stripe.android.model.PaymentMethod;
						public describeContents(): number;
						public component5(): string;
						public getDeclineCode(): string;
						public getParam(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getPaymentMethod(): com.stripe.android.model.PaymentMethod;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: com.stripe.android.model.PaymentMethod, param7: com.stripe.android.model.PaymentIntent.Error.Type);
						public getType(): com.stripe.android.model.PaymentIntent.Error.Type;
						public component8(): com.stripe.android.model.PaymentIntent.Error.Type;
						public copy(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: com.stripe.android.model.PaymentMethod, param7: com.stripe.android.model.PaymentIntent.Error.Type): com.stripe.android.model.PaymentIntent.Error;
						public toString(): string;
						public getDocUrl(): string;
						public component4(): string;
						public component2(): string;
						public getCharge(): string;
						public component6(): string;
						public getCode(): string;
					}
					export module Error {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.PaymentIntent.Error.Companion>;
						}
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.PaymentIntent.Error.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
						export class Type {
							public static class: java.lang.Class<com.stripe.android.model.PaymentIntent.Error.Type>;
							public static ApiConnectionError: com.stripe.android.model.PaymentIntent.Error.Type;
							public static ApiError: com.stripe.android.model.PaymentIntent.Error.Type;
							public static AuthenticationError: com.stripe.android.model.PaymentIntent.Error.Type;
							public static CardError: com.stripe.android.model.PaymentIntent.Error.Type;
							public static IdempotencyError: com.stripe.android.model.PaymentIntent.Error.Type;
							public static InvalidRequestError: com.stripe.android.model.PaymentIntent.Error.Type;
							public static RateLimitError: com.stripe.android.model.PaymentIntent.Error.Type;
							public static Companion: com.stripe.android.model.PaymentIntent.Error.Type.Companion;
							public getCode(): string;
							public static valueOf(param0: string): com.stripe.android.model.PaymentIntent.Error.Type;
							public static values(): native.Array<com.stripe.android.model.PaymentIntent.Error.Type>;
						}
						export module Type {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.PaymentIntent.Error.Type.Companion>;
								public fromCode(param0: string): com.stripe.android.model.PaymentIntent.Error.Type;
							}
						}
					}
					export class Shipping extends com.stripe.android.model.StripeModel {
						public static class: java.lang.Class<com.stripe.android.model.PaymentIntent.Shipping>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public component3(): string;
						public describeContents(): number;
						public component5(): string;
						public copy(param0: com.stripe.android.model.Address, param1: string, param2: string, param3: string, param4: string): com.stripe.android.model.PaymentIntent.Shipping;
						public getTrackingNumber(): string;
						public getPhone(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getCarrier(): string;
						public getName(): string;
						public toString(): string;
						public component4(): string;
						public component1(): com.stripe.android.model.Address;
						public constructor(param0: com.stripe.android.model.Address, param1: string, param2: string, param3: string, param4: string);
						public component2(): string;
						public getAddress(): com.stripe.android.model.Address;
					}
					export module Shipping {
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.PaymentIntent.Shipping.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class PaymentMethod extends com.stripe.android.model.StripeModel {
					public static class: java.lang.Class<com.stripe.android.model.PaymentMethod>;
					public id: string;
					public created: java.lang.Long;
					public liveMode: boolean;
					public type: com.stripe.android.model.PaymentMethod.Type;
					public billingDetails: com.stripe.android.model.PaymentMethod.BillingDetails;
					public customerId: string;
					public metadata: java.util.Map<string,string>;
					public card: com.stripe.android.model.PaymentMethod.Card;
					public cardPresent: com.stripe.android.model.PaymentMethod.CardPresent;
					public fpx: com.stripe.android.model.PaymentMethod.Fpx;
					public ideal: com.stripe.android.model.PaymentMethod.Ideal;
					public sepaDebit: com.stripe.android.model.PaymentMethod.SepaDebit;
					public auBecsDebit: com.stripe.android.model.PaymentMethod.AuBecsDebit;
					public bacsDebit: com.stripe.android.model.PaymentMethod.BacsDebit;
					public sofort: com.stripe.android.model.PaymentMethod.Sofort;
					public static Companion: com.stripe.android.model.PaymentMethod.Companion;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public component7(): java.util.Map<string,string>;
					public component14(): com.stripe.android.model.PaymentMethod.BacsDebit;
					public constructor(param0: string, param1: java.lang.Long, param2: boolean, param3: com.stripe.android.model.PaymentMethod.Type, param4: com.stripe.android.model.PaymentMethod.BillingDetails, param5: string, param6: java.util.Map<string,string>, param7: com.stripe.android.model.PaymentMethod.Card, param8: com.stripe.android.model.PaymentMethod.CardPresent, param9: com.stripe.android.model.PaymentMethod.Fpx, param10: com.stripe.android.model.PaymentMethod.Ideal, param11: com.stripe.android.model.PaymentMethod.SepaDebit, param12: com.stripe.android.model.PaymentMethod.AuBecsDebit, param13: com.stripe.android.model.PaymentMethod.BacsDebit, param14: com.stripe.android.model.PaymentMethod.Sofort);
					public component10(): com.stripe.android.model.PaymentMethod.Fpx;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod;
					public component4(): com.stripe.android.model.PaymentMethod.Type;
					public describeContents(): number;
					public component8(): com.stripe.android.model.PaymentMethod.Card;
					public component13(): com.stripe.android.model.PaymentMethod.AuBecsDebit;
					public component11(): com.stripe.android.model.PaymentMethod.Ideal;
					public component5(): com.stripe.android.model.PaymentMethod.BillingDetails;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): string;
					public component2(): java.lang.Long;
					public copy(param0: string, param1: java.lang.Long, param2: boolean, param3: com.stripe.android.model.PaymentMethod.Type, param4: com.stripe.android.model.PaymentMethod.BillingDetails, param5: string, param6: java.util.Map<string,string>, param7: com.stripe.android.model.PaymentMethod.Card, param8: com.stripe.android.model.PaymentMethod.CardPresent, param9: com.stripe.android.model.PaymentMethod.Fpx, param10: com.stripe.android.model.PaymentMethod.Ideal, param11: com.stripe.android.model.PaymentMethod.SepaDebit, param12: com.stripe.android.model.PaymentMethod.AuBecsDebit, param13: com.stripe.android.model.PaymentMethod.BacsDebit, param14: com.stripe.android.model.PaymentMethod.Sofort): com.stripe.android.model.PaymentMethod;
					public component15(): com.stripe.android.model.PaymentMethod.Sofort;
					public component6(): string;
					public component3(): boolean;
					public component12(): com.stripe.android.model.PaymentMethod.SepaDebit;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public component9(): com.stripe.android.model.PaymentMethod.CardPresent;
					public hashCode(): number;
				}
				export module PaymentMethod {
					export class AuBecsDebit extends com.stripe.android.model.StripeModel {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.AuBecsDebit>;
						public bsbNumber: string;
						public fingerprint: string;
						public last4: string;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public component3(): string;
						public describeContents(): number;
						public constructor(param0: string, param1: string, param2: string);
						public component2(): string;
						public copy(param0: string, param1: string, param2: string): com.stripe.android.model.PaymentMethod.AuBecsDebit;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
					export module AuBecsDebit {
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.AuBecsDebit.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class BacsDebit extends com.stripe.android.model.StripeModel {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.BacsDebit>;
						public fingerprint: string;
						public last4: string;
						public sortCode: string;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public component3(): string;
						public copy(param0: string, param1: string, param2: string): com.stripe.android.model.PaymentMethod.BacsDebit;
						public describeContents(): number;
						public constructor(param0: string, param1: string, param2: string);
						public component2(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
					export module BacsDebit {
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.BacsDebit.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class BillingDetails implements com.stripe.android.model.StripeModel, com.stripe.android.model.StripeParamsModel {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.BillingDetails>;
						public address: com.stripe.android.model.Address;
						public email: string;
						public name: string;
						public phone: string;
						public static PARAM_ADDRESS: string;
						public static PARAM_EMAIL: string;
						public static PARAM_NAME: string;
						public static PARAM_PHONE: string;
						public static Companion: com.stripe.android.model.PaymentMethod.BillingDetails.Companion;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public constructor();
						public component3(): string;
						public describeContents(): number;
						public toParamMap(): java.util.Map<string,any>;
						public constructor(param0: com.stripe.android.model.Address);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public copy(param0: com.stripe.android.model.Address, param1: string, param2: string, param3: string): com.stripe.android.model.PaymentMethod.BillingDetails;
						public toString(): string;
						public component4(): string;
						public constructor(param0: com.stripe.android.model.Address, param1: string);
						public component1(): com.stripe.android.model.Address;
						public constructor(param0: com.stripe.android.model.Address, param1: string, param2: string, param3: string);
						public component2(): string;
						public constructor(param0: com.stripe.android.model.Address, param1: string, param2: string);
						public toBuilder(): com.stripe.android.model.PaymentMethod.BillingDetails.Builder;
					}
					export module BillingDetails {
						export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.PaymentMethod.BillingDetails> {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.BillingDetails.Builder>;
							public constructor();
							public build(): com.stripe.android.model.PaymentMethod.BillingDetails;
							public setPhone(param0: string): com.stripe.android.model.PaymentMethod.BillingDetails.Builder;
							public build(): any;
							public setName(param0: string): com.stripe.android.model.PaymentMethod.BillingDetails.Builder;
							public setAddress(param0: com.stripe.android.model.Address): com.stripe.android.model.PaymentMethod.BillingDetails.Builder;
							public setEmail(param0: string): com.stripe.android.model.PaymentMethod.BillingDetails.Builder;
						}
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.BillingDetails.Companion>;
							public create(param0: com.stripe.android.model.ShippingInformation): com.stripe.android.model.PaymentMethod.BillingDetails;
						}
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.BillingDetails.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.PaymentMethod> {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Builder>;
						public setId(param0: string): com.stripe.android.model.PaymentMethod.Builder;
						public constructor();
						public setAuBecsDebit(param0: com.stripe.android.model.PaymentMethod.AuBecsDebit): com.stripe.android.model.PaymentMethod.Builder;
						public setSepaDebit(param0: com.stripe.android.model.PaymentMethod.SepaDebit): com.stripe.android.model.PaymentMethod.Builder;
						public setCardPresent(param0: com.stripe.android.model.PaymentMethod.CardPresent): com.stripe.android.model.PaymentMethod.Builder;
						public setType(param0: com.stripe.android.model.PaymentMethod.Type): com.stripe.android.model.PaymentMethod.Builder;
						public setIdeal(param0: com.stripe.android.model.PaymentMethod.Ideal): com.stripe.android.model.PaymentMethod.Builder;
						public build(): any;
						public setCreated(param0: java.lang.Long): com.stripe.android.model.PaymentMethod.Builder;
						public build(): com.stripe.android.model.PaymentMethod;
						public setMetadata(param0: java.util.Map<string,string>): com.stripe.android.model.PaymentMethod.Builder;
						public setFpx(param0: com.stripe.android.model.PaymentMethod.Fpx): com.stripe.android.model.PaymentMethod.Builder;
						public setCard(param0: com.stripe.android.model.PaymentMethod.Card): com.stripe.android.model.PaymentMethod.Builder;
						public setCustomerId(param0: string): com.stripe.android.model.PaymentMethod.Builder;
						public setLiveMode(param0: boolean): com.stripe.android.model.PaymentMethod.Builder;
						public setBillingDetails(param0: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethod.Builder;
						public setSofort(param0: com.stripe.android.model.PaymentMethod.Sofort): com.stripe.android.model.PaymentMethod.Builder;
						public setBacsDebit(param0: com.stripe.android.model.PaymentMethod.BacsDebit): com.stripe.android.model.PaymentMethod.Builder;
					}
					export class Card extends com.stripe.android.model.StripeModel {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Card>;
						public brand: com.stripe.android.model.CardBrand;
						public checks: com.stripe.android.model.PaymentMethod.Card.Checks;
						public country: string;
						public expiryMonth: java.lang.Integer;
						public expiryYear: java.lang.Integer;
						public funding: string;
						public last4: string;
						public threeDSecureUsage: com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage;
						public wallet: com.stripe.android.model.wallets.Wallet;
						public networks: com.stripe.android.model.PaymentMethod.Card.Networks;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public constructor();
						public component3(): string;
						public describeContents(): number;
						public component2(): com.stripe.android.model.PaymentMethod.Card.Checks;
						public component5(): java.lang.Integer;
						public component8(): com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage;
						public component1(): com.stripe.android.model.CardBrand;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component7(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public copy(param0: com.stripe.android.model.CardBrand, param1: com.stripe.android.model.PaymentMethod.Card.Checks, param2: string, param3: java.lang.Integer, param4: java.lang.Integer, param5: string, param6: string, param7: com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage, param8: com.stripe.android.model.wallets.Wallet, param9: com.stripe.android.model.PaymentMethod.Card.Networks): com.stripe.android.model.PaymentMethod.Card;
						public toString(): string;
						public component10$stripe_release(): com.stripe.android.model.PaymentMethod.Card.Networks;
						public constructor(param0: com.stripe.android.model.CardBrand, param1: com.stripe.android.model.PaymentMethod.Card.Checks, param2: string, param3: java.lang.Integer, param4: java.lang.Integer, param5: string, param6: string, param7: com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage, param8: com.stripe.android.model.wallets.Wallet, param9: com.stripe.android.model.PaymentMethod.Card.Networks);
						public component4(): java.lang.Integer;
						public component9(): com.stripe.android.model.wallets.Wallet;
						public component6(): string;
					}
					export module Card {
						export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.PaymentMethod.Card> {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Card.Builder>;
							public constructor();
							public setThreeDSecureUsage(param0: com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage): com.stripe.android.model.PaymentMethod.Card.Builder;
							public setLast4(param0: string): com.stripe.android.model.PaymentMethod.Card.Builder;
							public setExpiryMonth(param0: java.lang.Integer): com.stripe.android.model.PaymentMethod.Card.Builder;
							public setFunding(param0: string): com.stripe.android.model.PaymentMethod.Card.Builder;
							public setCountry(param0: string): com.stripe.android.model.PaymentMethod.Card.Builder;
							public setWallet(param0: com.stripe.android.model.wallets.Wallet): com.stripe.android.model.PaymentMethod.Card.Builder;
							public setBrand(param0: com.stripe.android.model.CardBrand): com.stripe.android.model.PaymentMethod.Card.Builder;
							public build(): com.stripe.android.model.PaymentMethod.Card;
							public setChecks(param0: com.stripe.android.model.PaymentMethod.Card.Checks): com.stripe.android.model.PaymentMethod.Card.Builder;
							public setExpiryYear(param0: java.lang.Integer): com.stripe.android.model.PaymentMethod.Card.Builder;
							public build(): any;
						}
						export class Checks extends com.stripe.android.model.StripeModel {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Card.Checks>;
							public addressLine1Check: string;
							public addressPostalCodeCheck: string;
							public cvcCheck: string;
							public static CREATOR: globalAndroid.os.Parcelable.Creator;
							public copy(param0: string, param1: string, param2: string): com.stripe.android.model.PaymentMethod.Card.Checks;
							public component2(): string;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public describeContents(): number;
							public constructor(param0: string, param1: string, param2: string);
							public toString(): string;
							public equals(param0: any): boolean;
							public component3(): string;
							public component1(): string;
						}
						export module Checks {
							export class Creator {
								public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Card.Checks.Creator>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): native.Array<any>;
								public constructor();
							}
						}
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Card.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
						export class Networks extends com.stripe.android.model.StripeModel {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Card.Networks>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator;
							public getPreferred(): string;
							public constructor();
							public constructor(param0: java.util.Set<string>, param1: boolean, param2: string);
							public hashCode(): number;
							public component2(): boolean;
							public toString(): string;
							public component3(): string;
							public getSelectionMandatory(): boolean;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public describeContents(): number;
							public component1(): java.util.Set<string>;
							public getAvailable(): java.util.Set<string>;
							public equals(param0: any): boolean;
							public copy(param0: java.util.Set<string>, param1: boolean, param2: string): com.stripe.android.model.PaymentMethod.Card.Networks;
						}
						export module Networks {
							export class Creator {
								public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Card.Networks.Creator>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): native.Array<any>;
								public constructor();
							}
						}
						export class ThreeDSecureUsage extends com.stripe.android.model.StripeModel {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage>;
							public isSupported: boolean;
							public static CREATOR: globalAndroid.os.Parcelable.Creator;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public component1(): boolean;
							public hashCode(): number;
							public describeContents(): number;
							public constructor(param0: boolean);
							public copy(param0: boolean): com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export module ThreeDSecureUsage {
							export class Creator {
								public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage.Creator>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): native.Array<any>;
								public constructor();
							}
						}
					}
					export class CardPresent extends com.stripe.android.model.StripeModel {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.CardPresent>;
						public static Companion: com.stripe.android.model.PaymentMethod.CardPresent.Companion;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public constructor();
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: boolean);
						public copy(param0: boolean): com.stripe.android.model.PaymentMethod.CardPresent;
						public toString(): string;
					}
					export module CardPresent {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.CardPresent.Companion>;
							public getEMPTY$stripe_release(): com.stripe.android.model.PaymentMethod.CardPresent;
						}
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.CardPresent.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Companion>;
						public fromJson(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod;
					}
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
					export class Fpx extends com.stripe.android.model.StripeModel {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Fpx>;
						public bank: string;
						public accountHolderType: string;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public describeContents(): number;
						public component2(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public copy(param0: string, param1: string): com.stripe.android.model.PaymentMethod.Fpx;
						public constructor(param0: string, param1: string);
						public toString(): string;
					}
					export module Fpx {
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Fpx.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class Ideal extends com.stripe.android.model.StripeModel {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Ideal>;
						public bank: string;
						public bankIdentifierCode: string;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public describeContents(): number;
						public component2(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: string, param1: string);
						public copy(param0: string, param1: string): com.stripe.android.model.PaymentMethod.Ideal;
						public toString(): string;
					}
					export module Ideal {
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Ideal.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class SepaDebit extends com.stripe.android.model.StripeModel {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.SepaDebit>;
						public bankCode: string;
						public branchCode: string;
						public country: string;
						public fingerprint: string;
						public last4: string;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public component4(): string;
						public component3(): string;
						public describeContents(): number;
						public component5(): string;
						public component2(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public copy(param0: string, param1: string, param2: string, param3: string, param4: string): com.stripe.android.model.PaymentMethod.SepaDebit;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string);
						public toString(): string;
					}
					export module SepaDebit {
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.SepaDebit.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class Sofort extends com.stripe.android.model.StripeModel {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Sofort>;
						public country: string;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public copy(param0: string): com.stripe.android.model.PaymentMethod.Sofort;
						public toString(): string;
						public constructor(param0: string);
					}
					export module Sofort {
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Sofort.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class Type extends globalAndroid.os.Parcelable {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Type>;
						public static Card: com.stripe.android.model.PaymentMethod.Type;
						public static CardPresent: com.stripe.android.model.PaymentMethod.Type;
						public static Fpx: com.stripe.android.model.PaymentMethod.Type;
						public static Ideal: com.stripe.android.model.PaymentMethod.Type;
						public static SepaDebit: com.stripe.android.model.PaymentMethod.Type;
						public static AuBecsDebit: com.stripe.android.model.PaymentMethod.Type;
						public static BacsDebit: com.stripe.android.model.PaymentMethod.Type;
						public static Sofort: com.stripe.android.model.PaymentMethod.Type;
						public static P24: com.stripe.android.model.PaymentMethod.Type;
						public static Bancontact: com.stripe.android.model.PaymentMethod.Type;
						public static Giropay: com.stripe.android.model.PaymentMethod.Type;
						public static Eps: com.stripe.android.model.PaymentMethod.Type;
						public static Oxxo: com.stripe.android.model.PaymentMethod.Type;
						public static Alipay: com.stripe.android.model.PaymentMethod.Type;
						public static GrabPay: com.stripe.android.model.PaymentMethod.Type;
						public static PayPal: com.stripe.android.model.PaymentMethod.Type;
						public static Afterpay: com.stripe.android.model.PaymentMethod.Type;
						public code: string;
						public isReusable: boolean;
						public static Companion: com.stripe.android.model.PaymentMethod.Type.Companion;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public static values(): native.Array<com.stripe.android.model.PaymentMethod.Type>;
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public static valueOf(param0: string): com.stripe.android.model.PaymentMethod.Type;
						public toString(): string;
					}
					export module Type {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Type.Companion>;
						}
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Type.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class PaymentMethodCreateParams extends com.stripe.android.model.StripeParamsModel {
					public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams>;
					public static Companion: com.stripe.android.model.PaymentMethodCreateParams.Companion;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.Fpx): com.stripe.android.model.PaymentMethodCreateParams;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.Ideal, param1: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.AuBecsDebit, param1: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.BacsDebit, param1: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
					public constructor(param0: com.stripe.android.model.PaymentMethodCreateParams.Type, param1: com.stripe.android.model.PaymentMethodCreateParams.Card, param2: com.stripe.android.model.PaymentMethodCreateParams.Ideal, param3: com.stripe.android.model.PaymentMethodCreateParams.Fpx, param4: com.stripe.android.model.PaymentMethodCreateParams.SepaDebit, param5: com.stripe.android.model.PaymentMethodCreateParams.AuBecsDebit, param6: com.stripe.android.model.PaymentMethodCreateParams.BacsDebit, param7: com.stripe.android.model.PaymentMethodCreateParams.Sofort, param8: com.stripe.android.model.PaymentMethod.BillingDetails, param9: java.util.Map<string,string>, param10: java.util.Set<string>);
					public static createCard(param0: com.stripe.android.model.CardParams): com.stripe.android.model.PaymentMethodCreateParams;
					public static createFromGooglePay(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethodCreateParams;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.Ideal, param1: com.stripe.android.model.PaymentMethod.BillingDetails, param2: java.util.Map<string,string>): com.stripe.android.model.PaymentMethodCreateParams;
					public copy(param0: com.stripe.android.model.PaymentMethodCreateParams.Type, param1: com.stripe.android.model.PaymentMethodCreateParams.Card, param2: com.stripe.android.model.PaymentMethodCreateParams.Ideal, param3: com.stripe.android.model.PaymentMethodCreateParams.Fpx, param4: com.stripe.android.model.PaymentMethodCreateParams.SepaDebit, param5: com.stripe.android.model.PaymentMethodCreateParams.AuBecsDebit, param6: com.stripe.android.model.PaymentMethodCreateParams.BacsDebit, param7: com.stripe.android.model.PaymentMethodCreateParams.Sofort, param8: com.stripe.android.model.PaymentMethod.BillingDetails, param9: java.util.Map<string,string>, param10: java.util.Set<string>): com.stripe.android.model.PaymentMethodCreateParams;
					public getTypeCode(): string;
					public toString(): string;
					public static createEps(param0: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.SepaDebit): com.stripe.android.model.PaymentMethodCreateParams;
					public hashCode(): number;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.AuBecsDebit, param1: com.stripe.android.model.PaymentMethod.BillingDetails, param2: java.util.Map<string,string>): com.stripe.android.model.PaymentMethodCreateParams;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.BacsDebit, param1: com.stripe.android.model.PaymentMethod.BillingDetails, param2: java.util.Map<string,string>): com.stripe.android.model.PaymentMethodCreateParams;
					public static createBancontact(param0: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
					public getType$stripe_release(): com.stripe.android.model.PaymentMethodCreateParams.Type;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.Card, param1: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
					public static createGrabPay(param0: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.SepaDebit, param1: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
					public describeContents(): number;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.Card): com.stripe.android.model.PaymentMethodCreateParams;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.Sofort): com.stripe.android.model.PaymentMethodCreateParams;
					public static createEps(param0: com.stripe.android.model.PaymentMethod.BillingDetails, param1: java.util.Map<string,string>): com.stripe.android.model.PaymentMethodCreateParams;
					public static createBancontact(param0: com.stripe.android.model.PaymentMethod.BillingDetails, param1: java.util.Map<string,string>): com.stripe.android.model.PaymentMethodCreateParams;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.Ideal): com.stripe.android.model.PaymentMethodCreateParams;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.Card, param1: com.stripe.android.model.PaymentMethod.BillingDetails, param2: java.util.Map<string,string>): com.stripe.android.model.PaymentMethodCreateParams;
					public static createP24(param0: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
					public static createGrabPay(param0: com.stripe.android.model.PaymentMethod.BillingDetails, param1: java.util.Map<string,string>): com.stripe.android.model.PaymentMethodCreateParams;
					public toParamMap(): java.util.Map<string,any>;
					public component1$stripe_release(): com.stripe.android.model.PaymentMethodCreateParams.Type;
					public equals(param0: any): boolean;
					public static createP24(param0: com.stripe.android.model.PaymentMethod.BillingDetails, param1: java.util.Map<string,string>): com.stripe.android.model.PaymentMethodCreateParams;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.SepaDebit, param1: com.stripe.android.model.PaymentMethod.BillingDetails, param2: java.util.Map<string,string>): com.stripe.android.model.PaymentMethodCreateParams;
					public static createGiropay(param0: com.stripe.android.model.PaymentMethod.BillingDetails, param1: java.util.Map<string,string>): com.stripe.android.model.PaymentMethodCreateParams;
					public static createGiropay(param0: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.Fpx, param1: com.stripe.android.model.PaymentMethod.BillingDetails, param2: java.util.Map<string,string>): com.stripe.android.model.PaymentMethodCreateParams;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.Sofort, param1: com.stripe.android.model.PaymentMethod.BillingDetails, param2: java.util.Map<string,string>): com.stripe.android.model.PaymentMethodCreateParams;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.Sofort, param1: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.Fpx, param1: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
				}
				export module PaymentMethodCreateParams {
					export class AuBecsDebit extends com.stripe.android.model.StripeParamsModel {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.AuBecsDebit>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public getAccountNumber(): string;
						public copy(param0: string, param1: string): com.stripe.android.model.PaymentMethodCreateParams.AuBecsDebit;
						public describeContents(): number;
						public toParamMap(): java.util.Map<string,any>;
						public setAccountNumber(param0: string): void;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getBsbNumber(): string;
						public toString(): string;
						public component2(): string;
						public constructor(param0: string, param1: string);
						public setBsbNumber(param0: string): void;
					}
					export module AuBecsDebit {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.AuBecsDebit.Companion>;
						}
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.AuBecsDebit.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class BacsDebit extends com.stripe.android.model.StripeParamsModel {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.BacsDebit>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public getAccountNumber(): string;
						public describeContents(): number;
						public toParamMap(): java.util.Map<string,any>;
						public setAccountNumber(param0: string): void;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public setSortCode(param0: string): void;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public copy(param0: string, param1: string): com.stripe.android.model.PaymentMethodCreateParams.BacsDebit;
						public toString(): string;
						public component2(): string;
						public constructor(param0: string, param1: string);
						public getSortCode(): string;
					}
					export module BacsDebit {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.BacsDebit.Companion>;
						}
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.BacsDebit.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class Card extends com.stripe.android.model.StripeParamsModel {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Card>;
						public static Companion: com.stripe.android.model.PaymentMethodCreateParams.Card.Companion;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public constructor(param0: string, param1: java.lang.Integer, param2: java.lang.Integer, param3: string, param4: string, param5: java.util.Set<string>);
						public constructor();
						public describeContents(): number;
						public component6$stripe_release(): java.util.Set<string>;
						public toParamMap(): java.util.Map<string,any>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public copy(param0: string, param1: java.lang.Integer, param2: java.lang.Integer, param3: string, param4: string, param5: java.util.Set<string>): com.stripe.android.model.PaymentMethodCreateParams.Card;
						public getAttribution$stripe_release(): java.util.Set<string>;
						public toString(): string;
						public static create(param0: string): com.stripe.android.model.PaymentMethodCreateParams.Card;
					}
					export module Card {
						export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.PaymentMethodCreateParams.Card> {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Card.Builder>;
							public constructor();
							public build(): com.stripe.android.model.PaymentMethodCreateParams.Card;
							public setExpiryMonth(param0: java.lang.Integer): com.stripe.android.model.PaymentMethodCreateParams.Card.Builder;
							public build(): any;
							public setCvc(param0: string): com.stripe.android.model.PaymentMethodCreateParams.Card.Builder;
							public setNumber(param0: string): com.stripe.android.model.PaymentMethodCreateParams.Card.Builder;
							public setExpiryYear(param0: java.lang.Integer): com.stripe.android.model.PaymentMethodCreateParams.Card.Builder;
						}
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Card.Companion>;
							public create(param0: string): com.stripe.android.model.PaymentMethodCreateParams.Card;
						}
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Card.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Companion>;
						public createGrabPay(param0: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
						public createEps(param0: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
						public create(param0: com.stripe.android.model.PaymentMethodCreateParams.Card, param1: com.stripe.android.model.PaymentMethod.BillingDetails, param2: java.util.Map<string,string>): com.stripe.android.model.PaymentMethodCreateParams;
						public createFromGooglePay(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethodCreateParams;
						public createGiropay(param0: com.stripe.android.model.PaymentMethod.BillingDetails, param1: java.util.Map<string,string>): com.stripe.android.model.PaymentMethodCreateParams;
						public create(param0: com.stripe.android.model.PaymentMethodCreateParams.Ideal, param1: com.stripe.android.model.PaymentMethod.BillingDetails, param2: java.util.Map<string,string>): com.stripe.android.model.PaymentMethodCreateParams;
						public create(param0: com.stripe.android.model.PaymentMethodCreateParams.SepaDebit): com.stripe.android.model.PaymentMethodCreateParams;
						public createAlipay(): com.stripe.android.model.PaymentMethodCreateParams;
						public createP24(param0: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
						public createAfterpay$stripe_release(): com.stripe.android.model.PaymentMethodCreateParams;
						public createOxxo(param0: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
						public create(param0: com.stripe.android.model.PaymentMethodCreateParams.SepaDebit, param1: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
						public createP24(param0: com.stripe.android.model.PaymentMethod.BillingDetails, param1: java.util.Map<string,string>): com.stripe.android.model.PaymentMethodCreateParams;
						public create(param0: com.stripe.android.model.PaymentMethodCreateParams.Ideal): com.stripe.android.model.PaymentMethodCreateParams;
						public create(param0: com.stripe.android.model.PaymentMethodCreateParams.Fpx, param1: com.stripe.android.model.PaymentMethod.BillingDetails, param2: java.util.Map<string,string>): com.stripe.android.model.PaymentMethodCreateParams;
						public create(param0: com.stripe.android.model.PaymentMethodCreateParams.SepaDebit, param1: com.stripe.android.model.PaymentMethod.BillingDetails, param2: java.util.Map<string,string>): com.stripe.android.model.PaymentMethodCreateParams;
						public createEps(param0: com.stripe.android.model.PaymentMethod.BillingDetails, param1: java.util.Map<string,string>): com.stripe.android.model.PaymentMethodCreateParams;
						public create(param0: com.stripe.android.model.PaymentMethodCreateParams.AuBecsDebit, param1: com.stripe.android.model.PaymentMethod.BillingDetails, param2: java.util.Map<string,string>): com.stripe.android.model.PaymentMethodCreateParams;
						public createPayPal(): com.stripe.android.model.PaymentMethodCreateParams;
						public create(param0: com.stripe.android.model.PaymentMethodCreateParams.Card): com.stripe.android.model.PaymentMethodCreateParams;
						public create(param0: com.stripe.android.model.PaymentMethodCreateParams.AuBecsDebit, param1: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
						public createBancontact(param0: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
						public create(param0: com.stripe.android.model.PaymentMethodCreateParams.BacsDebit, param1: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
						public create(param0: com.stripe.android.model.PaymentMethodCreateParams.Sofort): com.stripe.android.model.PaymentMethodCreateParams;
						public createAfterpay$stripe_release(param0: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
						public createCard(param0: com.stripe.android.model.CardParams): com.stripe.android.model.PaymentMethodCreateParams;
						public createGrabPay(param0: com.stripe.android.model.PaymentMethod.BillingDetails, param1: java.util.Map<string,string>): com.stripe.android.model.PaymentMethodCreateParams;
						public createBancontact(param0: com.stripe.android.model.PaymentMethod.BillingDetails, param1: java.util.Map<string,string>): com.stripe.android.model.PaymentMethodCreateParams;
						public create(param0: com.stripe.android.model.PaymentMethodCreateParams.Card, param1: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
						public create(param0: com.stripe.android.model.PaymentMethodCreateParams.Sofort, param1: com.stripe.android.model.PaymentMethod.BillingDetails, param2: java.util.Map<string,string>): com.stripe.android.model.PaymentMethodCreateParams;
						public create(param0: com.stripe.android.model.PaymentMethodCreateParams.Sofort, param1: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
						public create(param0: com.stripe.android.model.PaymentMethodCreateParams.Fpx, param1: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
						public create(param0: com.stripe.android.model.PaymentMethodCreateParams.Ideal, param1: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
						public create(param0: com.stripe.android.model.PaymentMethodCreateParams.BacsDebit, param1: com.stripe.android.model.PaymentMethod.BillingDetails, param2: java.util.Map<string,string>): com.stripe.android.model.PaymentMethodCreateParams;
						public create(param0: com.stripe.android.model.PaymentMethodCreateParams.Fpx): com.stripe.android.model.PaymentMethodCreateParams;
						public createGiropay(param0: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
					}
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
					export class Fpx extends com.stripe.android.model.StripeParamsModel {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Fpx>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public copy(param0: string): com.stripe.android.model.PaymentMethodCreateParams.Fpx;
						public describeContents(): number;
						public toParamMap(): java.util.Map<string,any>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public constructor(param0: string);
					}
					export module Fpx {
						export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.PaymentMethodCreateParams.Fpx> {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Fpx.Builder>;
							public constructor();
							public setBank$stripe_release(param0: string): void;
							public getBank$stripe_release(): string;
							public build(): any;
							public setBank(param0: string): com.stripe.android.model.PaymentMethodCreateParams.Fpx.Builder;
							public build(): com.stripe.android.model.PaymentMethodCreateParams.Fpx;
						}
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Fpx.Companion>;
						}
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Fpx.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class Ideal extends com.stripe.android.model.StripeParamsModel {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Ideal>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public describeContents(): number;
						public toParamMap(): java.util.Map<string,any>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public copy(param0: string): com.stripe.android.model.PaymentMethodCreateParams.Ideal;
						public toString(): string;
						public constructor(param0: string);
					}
					export module Ideal {
						export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.PaymentMethodCreateParams.Ideal> {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Ideal.Builder>;
							public constructor();
							public setBank$stripe_release(param0: string): void;
							public getBank$stripe_release(): string;
							public build(): any;
							public build(): com.stripe.android.model.PaymentMethodCreateParams.Ideal;
							public setBank(param0: string): com.stripe.android.model.PaymentMethodCreateParams.Ideal.Builder;
						}
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Ideal.Companion>;
						}
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Ideal.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class SepaDebit extends com.stripe.android.model.StripeParamsModel {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.SepaDebit>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public describeContents(): number;
						public toParamMap(): java.util.Map<string,any>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public copy(param0: string): com.stripe.android.model.PaymentMethodCreateParams.SepaDebit;
						public toString(): string;
						public constructor(param0: string);
					}
					export module SepaDebit {
						export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.PaymentMethodCreateParams.SepaDebit> {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.SepaDebit.Builder>;
							public constructor();
							public setIban(param0: string): com.stripe.android.model.PaymentMethodCreateParams.SepaDebit.Builder;
							public build(): any;
							public build(): com.stripe.android.model.PaymentMethodCreateParams.SepaDebit;
						}
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.SepaDebit.Companion>;
						}
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.SepaDebit.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class Sofort extends com.stripe.android.model.StripeParamsModel {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Sofort>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public describeContents(): number;
						public toParamMap(): java.util.Map<string,any>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component1$stripe_release(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getCountry$stripe_release(): string;
						public setCountry$stripe_release(param0: string): void;
						public toString(): string;
						public constructor(param0: string);
						public copy(param0: string): com.stripe.android.model.PaymentMethodCreateParams.Sofort;
					}
					export module Sofort {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Sofort.Companion>;
						}
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Sofort.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class Type {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Type>;
						public static Card: com.stripe.android.model.PaymentMethodCreateParams.Type;
						public static Ideal: com.stripe.android.model.PaymentMethodCreateParams.Type;
						public static Fpx: com.stripe.android.model.PaymentMethodCreateParams.Type;
						public static SepaDebit: com.stripe.android.model.PaymentMethodCreateParams.Type;
						public static AuBecsDebit: com.stripe.android.model.PaymentMethodCreateParams.Type;
						public static BacsDebit: com.stripe.android.model.PaymentMethodCreateParams.Type;
						public static Sofort: com.stripe.android.model.PaymentMethodCreateParams.Type;
						public static P24: com.stripe.android.model.PaymentMethodCreateParams.Type;
						public static Bancontact: com.stripe.android.model.PaymentMethodCreateParams.Type;
						public static Giropay: com.stripe.android.model.PaymentMethodCreateParams.Type;
						public static Eps: com.stripe.android.model.PaymentMethodCreateParams.Type;
						public static Oxxo: com.stripe.android.model.PaymentMethodCreateParams.Type;
						public static Alipay: com.stripe.android.model.PaymentMethodCreateParams.Type;
						public static GrabPay: com.stripe.android.model.PaymentMethodCreateParams.Type;
						public static PayPal: com.stripe.android.model.PaymentMethodCreateParams.Type;
						public static Afterpay: com.stripe.android.model.PaymentMethodCreateParams.Type;
						public getCode$stripe_release(): string;
						public static valueOf(param0: string): com.stripe.android.model.PaymentMethodCreateParams.Type;
						public static values(): native.Array<com.stripe.android.model.PaymentMethodCreateParams.Type>;
						public getHasMandate(): boolean;
					}
					export class WhenMappings {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export abstract class PaymentMethodOptionsParams extends com.stripe.android.model.StripeParamsModel {
					public static class: java.lang.Class<com.stripe.android.model.PaymentMethodOptionsParams>;
					public createTypeParams$stripe_release(): java.util.List<kotlin.Pair<string,any>>;
					public toParamMap(): java.util.Map<string,any>;
					public getType(): com.stripe.android.model.PaymentMethod.Type;
				}
				export module PaymentMethodOptionsParams {
					export class Card extends com.stripe.android.model.PaymentMethodOptionsParams {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethodOptionsParams.Card>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public copy(param0: string, param1: string): com.stripe.android.model.PaymentMethodOptionsParams.Card;
						public constructor();
						public describeContents(): number;
						public toParamMap(): java.util.Map<string,any>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getNetwork(): string;
						public toString(): string;
						public component2(): string;
						public setCvc(param0: string): void;
						public setNetwork(param0: string): void;
						public createTypeParams$stripe_release(): java.util.List<kotlin.Pair<string,any>>;
						public constructor(param0: string, param1: string);
						public getCvc(): string;
					}
					export module Card {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethodOptionsParams.Card.Companion>;
						}
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethodOptionsParams.Card.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class PersonTokenParams extends com.stripe.android.model.TokenParams {
					public static class: java.lang.Class<com.stripe.android.model.PersonTokenParams>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public constructor(param0: com.stripe.android.model.Token.Type, param1: java.util.Set<string>);
					public component5(): string;
					public getTypeDataParams(): java.util.Map<string,any>;
					public getFirstNameKana(): string;
					public getLastNameKana(): string;
					public component8(): string;
					public constructor();
					public getDateOfBirth(): com.stripe.android.model.DateOfBirth;
					public component12(): string;
					public getPhone(): string;
					public constructor(param0: com.stripe.android.model.Address, param1: com.stripe.android.model.AddressJapanParams, param2: com.stripe.android.model.AddressJapanParams, param3: com.stripe.android.model.DateOfBirth, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string, param12: string, param13: string, param14: java.util.Map<string,string>, param15: string, param16: com.stripe.android.model.PersonTokenParams.Relationship, param17: string, param18: com.stripe.android.model.PersonTokenParams.Verification);
					public getEmail(): string;
					public getVerification(): com.stripe.android.model.PersonTokenParams.Verification;
					public getMaidenName(): string;
					public getRelationship(): com.stripe.android.model.PersonTokenParams.Relationship;
					public getLastName(): string;
					public component2(): com.stripe.android.model.AddressJapanParams;
					public getMetadata(): java.util.Map<string,string>;
					public component3(): com.stripe.android.model.AddressJapanParams;
					public component9(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getAddress(): com.stripe.android.model.Address;
					public component14(): string;
					public component16(): string;
					public component17(): com.stripe.android.model.PersonTokenParams.Relationship;
					public getAddressKana(): com.stripe.android.model.AddressJapanParams;
					public component13(): string;
					public getAddressKanji(): com.stripe.android.model.AddressJapanParams;
					public toString(): string;
					public getFirstName(): string;
					public getGender(): string;
					public hashCode(): number;
					public component11(): string;
					public component7(): string;
					public describeContents(): number;
					public component1(): com.stripe.android.model.Address;
					public component4(): com.stripe.android.model.DateOfBirth;
					public toParamMap(): java.util.Map<string,any>;
					public getLastNameKanji(): string;
					public getSsnLast4(): string;
					public component10(): string;
					public equals(param0: any): boolean;
					public component15(): java.util.Map<string,string>;
					public component19(): com.stripe.android.model.PersonTokenParams.Verification;
					public getFirstNameKanji(): string;
					public copy(param0: com.stripe.android.model.Address, param1: com.stripe.android.model.AddressJapanParams, param2: com.stripe.android.model.AddressJapanParams, param3: com.stripe.android.model.DateOfBirth, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string, param12: string, param13: string, param14: java.util.Map<string,string>, param15: string, param16: com.stripe.android.model.PersonTokenParams.Relationship, param17: string, param18: com.stripe.android.model.PersonTokenParams.Verification): com.stripe.android.model.PersonTokenParams;
					public component6(): string;
					public getIdNumber(): string;
					public component18(): string;
				}
				export module PersonTokenParams {
					export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.PersonTokenParams> {
						public static class: java.lang.Class<com.stripe.android.model.PersonTokenParams.Builder>;
						public setIdNumber(param0: string): com.stripe.android.model.PersonTokenParams.Builder;
						public setLastName(param0: string): com.stripe.android.model.PersonTokenParams.Builder;
						public constructor();
						public setFirstName(param0: string): com.stripe.android.model.PersonTokenParams.Builder;
						public setFirstNameKanji(param0: string): com.stripe.android.model.PersonTokenParams.Builder;
						public setAddressKanji(param0: com.stripe.android.model.AddressJapanParams): com.stripe.android.model.PersonTokenParams.Builder;
						public setSsnLast4(param0: string): com.stripe.android.model.PersonTokenParams.Builder;
						public setFirstNameKana(param0: string): com.stripe.android.model.PersonTokenParams.Builder;
						public setPhone(param0: string): com.stripe.android.model.PersonTokenParams.Builder;
						public setRelationship(param0: com.stripe.android.model.PersonTokenParams.Relationship): com.stripe.android.model.PersonTokenParams.Builder;
						public setEmail(param0: string): com.stripe.android.model.PersonTokenParams.Builder;
						public setLastNameKanji(param0: string): com.stripe.android.model.PersonTokenParams.Builder;
						public setAddress(param0: com.stripe.android.model.Address): com.stripe.android.model.PersonTokenParams.Builder;
						public setDateOfBirth(param0: com.stripe.android.model.DateOfBirth): com.stripe.android.model.PersonTokenParams.Builder;
						public build(): any;
						public setAddressKana(param0: com.stripe.android.model.AddressJapanParams): com.stripe.android.model.PersonTokenParams.Builder;
						public setVerification(param0: com.stripe.android.model.PersonTokenParams.Verification): com.stripe.android.model.PersonTokenParams.Builder;
						public setMaidenName(param0: string): com.stripe.android.model.PersonTokenParams.Builder;
						public setGender(param0: string): com.stripe.android.model.PersonTokenParams.Builder;
						public setMetadata(param0: java.util.Map<string,string>): com.stripe.android.model.PersonTokenParams.Builder;
						public setLastNameKana(param0: string): com.stripe.android.model.PersonTokenParams.Builder;
						public build(): com.stripe.android.model.PersonTokenParams;
					}
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.PersonTokenParams.Companion>;
					}
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.PersonTokenParams.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
					export class Document extends com.stripe.android.model.StripeParamsModel {
						public static class: java.lang.Class<com.stripe.android.model.PersonTokenParams.Document>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public constructor();
						public describeContents(): number;
						public copy(param0: string, param1: string): com.stripe.android.model.PersonTokenParams.Document;
						public getFront(): string;
						public toParamMap(): java.util.Map<string,any>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getBack(): string;
						public toString(): string;
						public component2(): string;
						public constructor(param0: string, param1: string);
						public constructor(param0: string);
					}
					export module Document {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.PersonTokenParams.Document.Companion>;
						}
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.PersonTokenParams.Document.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class Relationship extends com.stripe.android.model.StripeParamsModel {
						public static class: java.lang.Class<com.stripe.android.model.PersonTokenParams.Relationship>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public constructor();
						public describeContents(): number;
						public toParamMap(): java.util.Map<string,any>;
						public getExecutive(): java.lang.Boolean;
						public component5(): java.lang.Boolean;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public component3(): java.lang.Boolean;
						public component1(): java.lang.Boolean;
						public toString(): string;
						public getTitle(): string;
						public getRepresentative(): java.lang.Boolean;
						public getPercentOwnership(): java.lang.Integer;
						public constructor(param0: java.lang.Boolean, param1: java.lang.Boolean, param2: java.lang.Boolean, param3: java.lang.Integer, param4: java.lang.Boolean, param5: string);
						public copy(param0: java.lang.Boolean, param1: java.lang.Boolean, param2: java.lang.Boolean, param3: java.lang.Integer, param4: java.lang.Boolean, param5: string): com.stripe.android.model.PersonTokenParams.Relationship;
						public component4(): java.lang.Integer;
						public getOwner(): java.lang.Boolean;
						public component6(): string;
						public component2(): java.lang.Boolean;
						public getDirector(): java.lang.Boolean;
					}
					export module Relationship {
						export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.PersonTokenParams.Relationship> {
							public static class: java.lang.Class<com.stripe.android.model.PersonTokenParams.Relationship.Builder>;
							public constructor();
							public setPercentOwnership(param0: java.lang.Integer): com.stripe.android.model.PersonTokenParams.Relationship.Builder;
							public setExecutive(param0: java.lang.Boolean): com.stripe.android.model.PersonTokenParams.Relationship.Builder;
							public setDirector(param0: java.lang.Boolean): com.stripe.android.model.PersonTokenParams.Relationship.Builder;
							public setRepresentative(param0: java.lang.Boolean): com.stripe.android.model.PersonTokenParams.Relationship.Builder;
							public build(): any;
							public setOwner(param0: java.lang.Boolean): com.stripe.android.model.PersonTokenParams.Relationship.Builder;
							public setTitle(param0: string): com.stripe.android.model.PersonTokenParams.Relationship.Builder;
							public build(): com.stripe.android.model.PersonTokenParams.Relationship;
						}
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.PersonTokenParams.Relationship.Companion>;
						}
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.PersonTokenParams.Relationship.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class Verification extends com.stripe.android.model.StripeParamsModel {
						public static class: java.lang.Class<com.stripe.android.model.PersonTokenParams.Verification>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public constructor();
						public describeContents(): number;
						public copy(param0: com.stripe.android.model.PersonTokenParams.Document, param1: com.stripe.android.model.PersonTokenParams.Document): com.stripe.android.model.PersonTokenParams.Verification;
						public getAdditionalDocument(): com.stripe.android.model.PersonTokenParams.Document;
						public constructor(param0: com.stripe.android.model.PersonTokenParams.Document, param1: com.stripe.android.model.PersonTokenParams.Document);
						public toParamMap(): java.util.Map<string,any>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public component2(): com.stripe.android.model.PersonTokenParams.Document;
						public constructor(param0: com.stripe.android.model.PersonTokenParams.Document);
						public toString(): string;
						public getDocument(): com.stripe.android.model.PersonTokenParams.Document;
						public component1(): com.stripe.android.model.PersonTokenParams.Document;
					}
					export module Verification {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.PersonTokenParams.Verification.Companion>;
						}
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.PersonTokenParams.Verification.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class PiiTokenParams extends com.stripe.android.model.TokenParams {
					public static class: java.lang.Class<com.stripe.android.model.PiiTokenParams>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public constructor(param0: com.stripe.android.model.Token.Type, param1: java.util.Set<string>);
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: string);
					public copy(param0: string): com.stripe.android.model.PiiTokenParams;
					public getTypeDataParams(): java.util.Map<string,any>;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public hashCode(): number;
					public toParamMap(): java.util.Map<string,any>;
				}
				export module PiiTokenParams {
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.PiiTokenParams.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class SetupIntent extends com.stripe.android.model.StripeIntent {
					public static class: java.lang.Class<com.stripe.android.model.SetupIntent>;
					public static Companion: com.stripe.android.model.SetupIntent.Companion;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public component10(): com.stripe.android.model.StripeIntent.Status;
					public getId(): string;
					public getUsage(): com.stripe.android.model.StripeIntent.Usage;
					public requiresConfirmation(): boolean;
					public component5(): string;
					public component3(): number;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.SetupIntent;
					public component11(): com.stripe.android.model.StripeIntent.Usage;
					public component6(): boolean;
					public getClientSecret(): string;
					public constructor(param0: string, param1: com.stripe.android.model.SetupIntent.CancellationReason, param2: number, param3: string, param4: string, param5: boolean, param6: com.stripe.android.model.PaymentMethod, param7: string, param8: java.util.List<string>, param9: com.stripe.android.model.StripeIntent.Status, param10: com.stripe.android.model.StripeIntent.Usage, param11: com.stripe.android.model.SetupIntent.Error, param12: com.stripe.android.model.StripeIntent.NextActionData);
					public getNextActionType(): com.stripe.android.model.StripeIntent.NextActionType;
					public toString(): string;
					public getCancellationReason(): com.stripe.android.model.SetupIntent.CancellationReason;
					public isLiveMode(): boolean;
					public component8(): string;
					public copy(param0: string, param1: com.stripe.android.model.SetupIntent.CancellationReason, param2: number, param3: string, param4: string, param5: boolean, param6: com.stripe.android.model.PaymentMethod, param7: string, param8: java.util.List<string>, param9: com.stripe.android.model.StripeIntent.Status, param10: com.stripe.android.model.StripeIntent.Usage, param11: com.stripe.android.model.SetupIntent.Error, param12: com.stripe.android.model.StripeIntent.NextActionData): com.stripe.android.model.SetupIntent;
					public getPaymentMethodTypes(): java.util.List<string>;
					public component4(): string;
					public hashCode(): number;
					public getPaymentMethodId(): string;
					public component2(): com.stripe.android.model.SetupIntent.CancellationReason;
					public component9(): java.util.List<string>;
					public getCreated(): number;
					public describeContents(): number;
					public getLastSetupError(): com.stripe.android.model.SetupIntent.Error;
					public getPaymentMethod(): com.stripe.android.model.PaymentMethod;
					public getNextActionData(): com.stripe.android.model.StripeIntent.NextActionData;
					public component12(): com.stripe.android.model.SetupIntent.Error;
					public equals(param0: any): boolean;
					public requiresAction(): boolean;
					public getStatus(): com.stripe.android.model.StripeIntent.Status;
					public component1(): string;
					public component7(): com.stripe.android.model.PaymentMethod;
					public component13(): com.stripe.android.model.StripeIntent.NextActionData;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getDescription(): string;
				}
				export module SetupIntent {
					export class CancellationReason {
						public static class: java.lang.Class<com.stripe.android.model.SetupIntent.CancellationReason>;
						public static Duplicate: com.stripe.android.model.SetupIntent.CancellationReason;
						public static RequestedByCustomer: com.stripe.android.model.SetupIntent.CancellationReason;
						public static Abandoned: com.stripe.android.model.SetupIntent.CancellationReason;
						public static Companion: com.stripe.android.model.SetupIntent.CancellationReason.Companion;
						public static values(): native.Array<com.stripe.android.model.SetupIntent.CancellationReason>;
						public static valueOf(param0: string): com.stripe.android.model.SetupIntent.CancellationReason;
					}
					export module CancellationReason {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.SetupIntent.CancellationReason.Companion>;
							public fromCode$stripe_release(param0: string): com.stripe.android.model.SetupIntent.CancellationReason;
						}
					}
					export class ClientSecret {
						public static class: java.lang.Class<com.stripe.android.model.SetupIntent.ClientSecret>;
						public getSetupIntentId$stripe_release(): string;
						public copy(param0: string): com.stripe.android.model.SetupIntent.ClientSecret;
						public getValue$stripe_release(): string;
						public component1$stripe_release(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public constructor(param0: string);
					}
					export module ClientSecret {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.SetupIntent.ClientSecret.Companion>;
						}
					}
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.SetupIntent.Companion>;
						public fromJson(param0: org.json.JSONObject): com.stripe.android.model.SetupIntent;
					}
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.SetupIntent.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
					export class Error extends com.stripe.android.model.StripeModel {
						public static class: java.lang.Class<com.stripe.android.model.SetupIntent.Error>;
						public static CODE_AUTHENTICATION_ERROR: string;
						public static Companion: com.stripe.android.model.SetupIntent.Error.Companion;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public component7(): com.stripe.android.model.SetupIntent.Error.Type;
						public getMessage(): string;
						public component3(): string;
						public describeContents(): number;
						public component5(): string;
						public getDeclineCode(): string;
						public getParam(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getPaymentMethod(): com.stripe.android.model.PaymentMethod;
						public copy(param0: string, param1: string, param2: string, param3: string, param4: string, param5: com.stripe.android.model.PaymentMethod, param6: com.stripe.android.model.SetupIntent.Error.Type): com.stripe.android.model.SetupIntent.Error;
						public toString(): string;
						public getDocUrl(): string;
						public component4(): string;
						public getType(): com.stripe.android.model.SetupIntent.Error.Type;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: com.stripe.android.model.PaymentMethod, param6: com.stripe.android.model.SetupIntent.Error.Type);
						public component2(): string;
						public getCode(): string;
						public component6(): com.stripe.android.model.PaymentMethod;
					}
					export module Error {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.SetupIntent.Error.Companion>;
						}
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.SetupIntent.Error.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
						export class Type {
							public static class: java.lang.Class<com.stripe.android.model.SetupIntent.Error.Type>;
							public static ApiConnectionError: com.stripe.android.model.SetupIntent.Error.Type;
							public static ApiError: com.stripe.android.model.SetupIntent.Error.Type;
							public static AuthenticationError: com.stripe.android.model.SetupIntent.Error.Type;
							public static CardError: com.stripe.android.model.SetupIntent.Error.Type;
							public static IdempotencyError: com.stripe.android.model.SetupIntent.Error.Type;
							public static InvalidRequestError: com.stripe.android.model.SetupIntent.Error.Type;
							public static RateLimitError: com.stripe.android.model.SetupIntent.Error.Type;
							public static Companion: com.stripe.android.model.SetupIntent.Error.Type.Companion;
							public getCode(): string;
							public static valueOf(param0: string): com.stripe.android.model.SetupIntent.Error.Type;
							public static values(): native.Array<com.stripe.android.model.SetupIntent.Error.Type>;
						}
						export module Type {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.SetupIntent.Error.Type.Companion>;
								public fromCode$stripe_release(param0: string): com.stripe.android.model.SetupIntent.Error.Type;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class ShippingInformation implements com.stripe.android.model.StripeModel, com.stripe.android.model.StripeParamsModel {
					public static class: java.lang.Class<com.stripe.android.model.ShippingInformation>;
					public static Companion: com.stripe.android.model.ShippingInformation.Companion;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public component2(): string;
					public copy(param0: com.stripe.android.model.Address, param1: string, param2: string): com.stripe.android.model.ShippingInformation;
					public constructor(param0: com.stripe.android.model.Address, param1: string, param2: string);
					public describeContents(): number;
					public component3(): string;
					public component1(): com.stripe.android.model.Address;
					public toParamMap(): java.util.Map<string,any>;
					public equals(param0: any): boolean;
					public toString(): string;
					public getName(): string;
					public constructor();
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getPhone(): string;
					public hashCode(): number;
					public getAddress(): com.stripe.android.model.Address;
				}
				export module ShippingInformation {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.ShippingInformation.Companion>;
					}
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.ShippingInformation.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class ShippingMethod extends com.stripe.android.model.StripeModel {
					public static class: java.lang.Class<com.stripe.android.model.ShippingMethod>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public getLabel(): string;
					public component2(): string;
					public component5(): string;
					public copy(param0: string, param1: string, param2: number, param3: java.util.Currency, param4: string): com.stripe.android.model.ShippingMethod;
					public component3(): number;
					public describeContents(): number;
					public component4(): java.util.Currency;
					public getIdentifier(): string;
					public constructor(param0: string, param1: string, param2: number, param3: java.util.Currency, param4: string);
					public equals(param0: any): boolean;
					public getAmount(): number;
					public toString(): string;
					public component1(): string;
					public constructor(param0: string, param1: string, param2: number, param3: string, param4: string);
					public constructor(param0: string, param1: string, param2: number, param3: java.util.Currency);
					public constructor(param0: string, param1: string, param2: number, param3: string);
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getDetail(): string;
					public hashCode(): number;
					public getCurrency(): java.util.Currency;
				}
				export module ShippingMethod {
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.ShippingMethod.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class Source implements com.stripe.android.model.StripeModel, com.stripe.android.model.StripePaymentSource {
					public static class: java.lang.Class<com.stripe.android.model.Source>;
					public static EURO: string;
					public static USD: string;
					public static Companion: com.stripe.android.model.Source.Companion;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public getId(): string;
					public getStatus(): com.stripe.android.model.Source.Status;
					public getFlow(): com.stripe.android.model.Source.Flow;
					public component2(): java.lang.Long;
					public component22(): string;
					public getCodeVerification(): com.stripe.android.model.Source.CodeVerification;
					public component18(): com.stripe.android.model.Source.Usage;
					public component13(): com.stripe.android.model.Source.Status;
					public component3(): string;
					public static asSourceType(param0: string): string;
					public getTypeRaw(): string;
					public component1(): string;
					public component14(): java.util.Map<string,any>;
					public getCreated(): java.lang.Long;
					/** @deprecated */
					public getMetaData(): java.util.Map<string,string>;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public component8(): java.lang.Boolean;
					public component16(): string;
					public getWeChat(): com.stripe.android.model.WeChat;
					public constructor(param0: string, param1: java.lang.Long, param2: string, param3: com.stripe.android.model.Source.CodeVerification, param4: java.lang.Long, param5: string, param6: com.stripe.android.model.Source.Flow, param7: java.lang.Boolean, param8: java.util.Map<string,string>, param9: com.stripe.android.model.Source.Owner, param10: com.stripe.android.model.Source.Receiver, param11: com.stripe.android.model.Source.Redirect, param12: com.stripe.android.model.Source.Status, param13: java.util.Map<string,any>, param14: com.stripe.android.model.SourceTypeModel, param15: string, param16: string, param17: com.stripe.android.model.Source.Usage, param18: com.stripe.android.model.WeChat, param19: com.stripe.android.model.Source.Klarna, param20: com.stripe.android.model.SourceOrder, param21: string);
					public getCurrency(): string;
					public getRedirect(): com.stripe.android.model.Source.Redirect;
					public getSourceTypeModel(): com.stripe.android.model.SourceTypeModel;
					public getUsage(): com.stripe.android.model.Source.Usage;
					public getClientSecret(): string;
					public component21(): com.stripe.android.model.SourceOrder;
					public component10(): com.stripe.android.model.Source.Owner;
					public component15(): com.stripe.android.model.SourceTypeModel;
					public toString(): string;
					public getOwner(): com.stripe.android.model.Source.Owner;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.Source;
					public getSourceOrder(): com.stripe.android.model.SourceOrder;
					public getType(): string;
					public hashCode(): number;
					public copy(param0: string, param1: java.lang.Long, param2: string, param3: com.stripe.android.model.Source.CodeVerification, param4: java.lang.Long, param5: string, param6: com.stripe.android.model.Source.Flow, param7: java.lang.Boolean, param8: java.util.Map<string,string>, param9: com.stripe.android.model.Source.Owner, param10: com.stripe.android.model.Source.Receiver, param11: com.stripe.android.model.Source.Redirect, param12: com.stripe.android.model.Source.Status, param13: java.util.Map<string,any>, param14: com.stripe.android.model.SourceTypeModel, param15: string, param16: string, param17: com.stripe.android.model.Source.Usage, param18: com.stripe.android.model.WeChat, param19: com.stripe.android.model.Source.Klarna, param20: com.stripe.android.model.SourceOrder, param21: string): com.stripe.android.model.Source;
					public component9(): java.util.Map<string,string>;
					public getAmount(): java.lang.Long;
					public component5(): java.lang.Long;
					public describeContents(): number;
					public getSourceTypeData(): java.util.Map<string,any>;
					public component11(): com.stripe.android.model.Source.Receiver;
					public getReceiver(): com.stripe.android.model.Source.Receiver;
					public component4(): com.stripe.android.model.Source.CodeVerification;
					public component17(): string;
					public equals(param0: any): boolean;
					public component6(): string;
					public component12(): com.stripe.android.model.Source.Redirect;
					public getStatementDescriptor(): string;
					public isLiveMode(): java.lang.Boolean;
					public component7(): com.stripe.android.model.Source.Flow;
					public getKlarna(): com.stripe.android.model.Source.Klarna;
				}
				export module Source {
					export class CodeVerification extends com.stripe.android.model.StripeModel {
						public static class: java.lang.Class<com.stripe.android.model.Source.CodeVerification>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public describeContents(): number;
						public getStatus(): com.stripe.android.model.Source.CodeVerification.Status;
						public component2(): com.stripe.android.model.Source.CodeVerification.Status;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public copy(param0: number, param1: com.stripe.android.model.Source.CodeVerification.Status): com.stripe.android.model.Source.CodeVerification;
						public getAttemptsRemaining(): number;
						public component1(): number;
						public constructor(param0: number, param1: com.stripe.android.model.Source.CodeVerification.Status);
						public toString(): string;
					}
					export module CodeVerification {
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.Source.CodeVerification.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
						export class Status {
							public static class: java.lang.Class<com.stripe.android.model.Source.CodeVerification.Status>;
							public static Pending: com.stripe.android.model.Source.CodeVerification.Status;
							public static Succeeded: com.stripe.android.model.Source.CodeVerification.Status;
							public static Failed: com.stripe.android.model.Source.CodeVerification.Status;
							public static Companion: com.stripe.android.model.Source.CodeVerification.Status.Companion;
							public static values(): native.Array<com.stripe.android.model.Source.CodeVerification.Status>;
							public static valueOf(param0: string): com.stripe.android.model.Source.CodeVerification.Status;
						}
						export module Status {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.Source.CodeVerification.Status.Companion>;
								public fromCode(param0: string): com.stripe.android.model.Source.CodeVerification.Status;
							}
						}
					}
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.Source.Companion>;
						public fromJson(param0: org.json.JSONObject): com.stripe.android.model.Source;
						public asSourceType(param0: string): string;
					}
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.Source.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
					export class Flow {
						public static class: java.lang.Class<com.stripe.android.model.Source.Flow>;
						public static Redirect: com.stripe.android.model.Source.Flow;
						public static Receiver: com.stripe.android.model.Source.Flow;
						public static CodeVerification: com.stripe.android.model.Source.Flow;
						public static None: com.stripe.android.model.Source.Flow;
						public static Companion: com.stripe.android.model.Source.Flow.Companion;
						public getCode$stripe_release(): string;
						public static values(): native.Array<com.stripe.android.model.Source.Flow>;
						public static valueOf(param0: string): com.stripe.android.model.Source.Flow;
					}
					export module Flow {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.Source.Flow.Companion>;
							public fromCode(param0: string): com.stripe.android.model.Source.Flow;
						}
					}
					export class Klarna extends com.stripe.android.model.StripeModel {
						public static class: java.lang.Class<com.stripe.android.model.Source.Klarna>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public component18(): java.util.Set<string>;
						public component5(): string;
						public component15(): string;
						public getCustomPaymentMethods(): java.util.Set<string>;
						public getPayLaterRedirectUrl(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getPayNowAssetUrlsDescriptive(): string;
						public getPayOverTimeName(): string;
						public component11(): string;
						public component9(): string;
						public component4(): string;
						public component14(): string;
						public component17(): java.util.Set<string>;
						public getPayNowAssetUrlsStandard(): string;
						public getFirstName(): string;
						public getPayLaterAssetUrlsDescriptive(): string;
						public component10(): string;
						public copy(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string, param12: string, param13: string, param14: string, param15: string, param16: java.util.Set<string>, param17: java.util.Set<string>): com.stripe.android.model.Source.Klarna;
						public component8(): string;
						public getClientToken(): string;
						public component3(): string;
						public component13(): string;
						public describeContents(): number;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string, param12: string, param13: string, param14: string, param15: string, param16: java.util.Set<string>, param17: java.util.Set<string>);
						public component7(): string;
						public getPayNowRedirectUrl(): string;
						public getPayLaterAssetUrlsStandard(): string;
						public toString(): string;
						public getPayOverTimeAssetUrlsDescriptive(): string;
						public getPayNowName(): string;
						public getPayLaterName(): string;
						public getPaymentMethodCategories(): java.util.Set<string>;
						public component12(): string;
						public getPayOverTimeRedirectUrl(): string;
						public component2(): string;
						public getLastName(): string;
						public getPurchaseCountry(): string;
						public component16(): string;
						public getPayOverTimeAssetUrlsStandard(): string;
						public component6(): string;
					}
					export module Klarna {
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.Source.Klarna.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class Owner extends com.stripe.android.model.StripeModel {
						public static class: java.lang.Class<com.stripe.android.model.Source.Owner>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public component3(): string;
						public describeContents(): number;
						public getEmail(): string;
						public getPhone(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component7(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getName(): string;
						public constructor(param0: com.stripe.android.model.Address, param1: string, param2: string, param3: string, param4: com.stripe.android.model.Address, param5: string, param6: string, param7: string);
						public component5(): com.stripe.android.model.Address;
						public toString(): string;
						public copy(param0: com.stripe.android.model.Address, param1: string, param2: string, param3: string, param4: com.stripe.android.model.Address, param5: string, param6: string, param7: string): com.stripe.android.model.Source.Owner;
						public component4(): string;
						public component1(): com.stripe.android.model.Address;
						public getVerifiedName(): string;
						public getVerifiedPhone(): string;
						public component2(): string;
						public getVerifiedAddress(): com.stripe.android.model.Address;
						public getVerifiedEmail(): string;
						public getAddress(): com.stripe.android.model.Address;
						public component6(): string;
						public component8(): string;
					}
					export module Owner {
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.Source.Owner.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class Receiver extends com.stripe.android.model.StripeModel {
						public static class: java.lang.Class<com.stripe.android.model.Source.Receiver>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getAddress(): string;
						public component4(): number;
						public toString(): string;
						public getAmountReturned(): number;
						public component2(): number;
						public getAmountReceived(): number;
						public getAmountCharged(): number;
						public constructor(param0: string, param1: number, param2: number, param3: number);
						public copy(param0: string, param1: number, param2: number, param3: number): com.stripe.android.model.Source.Receiver;
						public component3(): number;
					}
					export module Receiver {
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.Source.Receiver.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class Redirect extends com.stripe.android.model.StripeModel {
						public static class: java.lang.Class<com.stripe.android.model.Source.Redirect>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public component3(): string;
						public copy(param0: string, param1: com.stripe.android.model.Source.Redirect.Status, param2: string): com.stripe.android.model.Source.Redirect;
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getUrl(): string;
						public getReturnUrl(): string;
						public toString(): string;
						public component2(): com.stripe.android.model.Source.Redirect.Status;
						public constructor(param0: string, param1: com.stripe.android.model.Source.Redirect.Status, param2: string);
						public getStatus(): com.stripe.android.model.Source.Redirect.Status;
					}
					export module Redirect {
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.Source.Redirect.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
						export class Status {
							public static class: java.lang.Class<com.stripe.android.model.Source.Redirect.Status>;
							public static Pending: com.stripe.android.model.Source.Redirect.Status;
							public static Succeeded: com.stripe.android.model.Source.Redirect.Status;
							public static NotRequired: com.stripe.android.model.Source.Redirect.Status;
							public static Failed: com.stripe.android.model.Source.Redirect.Status;
							public static Companion: com.stripe.android.model.Source.Redirect.Status.Companion;
							public static valueOf(param0: string): com.stripe.android.model.Source.Redirect.Status;
							public toString(): string;
							public static values(): native.Array<com.stripe.android.model.Source.Redirect.Status>;
						}
						export module Status {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.Source.Redirect.Status.Companion>;
								public fromCode(param0: string): com.stripe.android.model.Source.Redirect.Status;
							}
						}
					}
					export class SourceType {
						public static class: java.lang.Class<com.stripe.android.model.Source.SourceType>;
						/**
						 * Constructs a new instance of the com.stripe.android.model.Source$SourceType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							<clinit>(): void;
						});
						public constructor();
						public static IDEAL: string;
						public static P24: string;
						public static ALIPAY: string;
						public static THREE_D_SECURE: string;
						public static SOFORT: string;
						public static UNKNOWN: string;
						public static GIROPAY: string;
						public static BANCONTACT: string;
						public static SEPA_DEBIT: string;
						public static MULTIBANCO: string;
						public static Companion: com.stripe.android.model.Source.SourceType.Companion;
						public static WECHAT: string;
						public static EPS: string;
						public static KLARNA: string;
						public static CARD: string;
					}
					export module SourceType {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.Source.SourceType.Companion>;
							public static ALIPAY: string;
							public static CARD: string;
							public static THREE_D_SECURE: string;
							public static GIROPAY: string;
							public static SEPA_DEBIT: string;
							public static IDEAL: string;
							public static SOFORT: string;
							public static BANCONTACT: string;
							public static P24: string;
							public static EPS: string;
							public static MULTIBANCO: string;
							public static WECHAT: string;
							public static KLARNA: string;
							public static UNKNOWN: string;
						}
					}
					export class Status {
						public static class: java.lang.Class<com.stripe.android.model.Source.Status>;
						public static Canceled: com.stripe.android.model.Source.Status;
						public static Chargeable: com.stripe.android.model.Source.Status;
						public static Consumed: com.stripe.android.model.Source.Status;
						public static Failed: com.stripe.android.model.Source.Status;
						public static Pending: com.stripe.android.model.Source.Status;
						public static Companion: com.stripe.android.model.Source.Status.Companion;
						public static valueOf(param0: string): com.stripe.android.model.Source.Status;
						public toString(): string;
						public static values(): native.Array<com.stripe.android.model.Source.Status>;
					}
					export module Status {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.Source.Status.Companion>;
							public fromCode(param0: string): com.stripe.android.model.Source.Status;
						}
					}
					export class Usage {
						public static class: java.lang.Class<com.stripe.android.model.Source.Usage>;
						public static Reusable: com.stripe.android.model.Source.Usage;
						public static SingleUse: com.stripe.android.model.Source.Usage;
						public static Companion: com.stripe.android.model.Source.Usage.Companion;
						public static valueOf(param0: string): com.stripe.android.model.Source.Usage;
						public getCode$stripe_release(): string;
						public static values(): native.Array<com.stripe.android.model.Source.Usage>;
					}
					export module Usage {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.Source.Usage.Companion>;
							public fromCode(param0: string): com.stripe.android.model.Source.Usage;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class SourceOrder extends com.stripe.android.model.StripeModel {
					public static class: java.lang.Class<com.stripe.android.model.SourceOrder>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public component2(): string;
					public getCurrency(): string;
					public describeContents(): number;
					public component3(): string;
					public getItems(): java.util.List<com.stripe.android.model.SourceOrder.Item>;
					public getShipping(): com.stripe.android.model.SourceOrder.Shipping;
					public component1(): java.lang.Integer;
					public getAmount(): java.lang.Integer;
					public component5(): com.stripe.android.model.SourceOrder.Shipping;
					public constructor(param0: java.lang.Integer, param1: string, param2: string, param3: java.util.List<com.stripe.android.model.SourceOrder.Item>, param4: com.stripe.android.model.SourceOrder.Shipping);
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor();
					public copy(param0: java.lang.Integer, param1: string, param2: string, param3: java.util.List<com.stripe.android.model.SourceOrder.Item>, param4: com.stripe.android.model.SourceOrder.Shipping): com.stripe.android.model.SourceOrder;
					public component4(): java.util.List<com.stripe.android.model.SourceOrder.Item>;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public hashCode(): number;
					public getEmail(): string;
				}
				export module SourceOrder {
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.SourceOrder.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
					export class Item extends com.stripe.android.model.StripeModel {
						public static class: java.lang.Class<com.stripe.android.model.SourceOrder.Item>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public copy(param0: com.stripe.android.model.SourceOrder.Item.Type, param1: java.lang.Integer, param2: string, param3: string, param4: java.lang.Integer): com.stripe.android.model.SourceOrder.Item;
						public component3(): string;
						public describeContents(): number;
						public component5(): java.lang.Integer;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getAmount(): java.lang.Integer;
						public component2(): java.lang.Integer;
						public getQuantity(): java.lang.Integer;
						public toString(): string;
						public component4(): string;
						public getType(): com.stripe.android.model.SourceOrder.Item.Type;
						public constructor(param0: com.stripe.android.model.SourceOrder.Item.Type, param1: java.lang.Integer, param2: string, param3: string, param4: java.lang.Integer);
						public getDescription(): string;
						public component1(): com.stripe.android.model.SourceOrder.Item.Type;
						public getCurrency(): string;
					}
					export module Item {
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.SourceOrder.Item.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
						export class Type {
							public static class: java.lang.Class<com.stripe.android.model.SourceOrder.Item.Type>;
							public static Sku: com.stripe.android.model.SourceOrder.Item.Type;
							public static Tax: com.stripe.android.model.SourceOrder.Item.Type;
							public static Shipping: com.stripe.android.model.SourceOrder.Item.Type;
							public static Companion: com.stripe.android.model.SourceOrder.Item.Type.Companion;
							public static values(): native.Array<com.stripe.android.model.SourceOrder.Item.Type>;
							public static valueOf(param0: string): com.stripe.android.model.SourceOrder.Item.Type;
						}
						export module Type {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.SourceOrder.Item.Type.Companion>;
							}
						}
					}
					export class Shipping extends com.stripe.android.model.StripeModel {
						public static class: java.lang.Class<com.stripe.android.model.SourceOrder.Shipping>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public constructor();
						public component3(): string;
						public describeContents(): number;
						public component5(): string;
						public getTrackingNumber(): string;
						public getPhone(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public copy(param0: com.stripe.android.model.Address, param1: string, param2: string, param3: string, param4: string): com.stripe.android.model.SourceOrder.Shipping;
						public getCarrier(): string;
						public getName(): string;
						public toString(): string;
						public component4(): string;
						public component1(): com.stripe.android.model.Address;
						public constructor(param0: com.stripe.android.model.Address, param1: string, param2: string, param3: string, param4: string);
						public component2(): string;
						public getAddress(): com.stripe.android.model.Address;
					}
					export module Shipping {
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.SourceOrder.Shipping.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class SourceOrderParams extends com.stripe.android.model.StripeParamsModel {
					public static class: java.lang.Class<com.stripe.android.model.SourceOrderParams>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public getShipping(): com.stripe.android.model.SourceOrderParams.Shipping;
					public getItems(): java.util.List<com.stripe.android.model.SourceOrderParams.Item>;
					public describeContents(): number;
					public toParamMap(): java.util.Map<string,any>;
					public constructor(param0: java.util.List<com.stripe.android.model.SourceOrderParams.Item>, param1: com.stripe.android.model.SourceOrderParams.Shipping);
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor();
					public constructor(param0: java.util.List<com.stripe.android.model.SourceOrderParams.Item>);
					public copy(param0: java.util.List<com.stripe.android.model.SourceOrderParams.Item>, param1: com.stripe.android.model.SourceOrderParams.Shipping): com.stripe.android.model.SourceOrderParams;
					public component1(): java.util.List<com.stripe.android.model.SourceOrderParams.Item>;
					public component2(): com.stripe.android.model.SourceOrderParams.Shipping;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public hashCode(): number;
				}
				export module SourceOrderParams {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.SourceOrderParams.Companion>;
					}
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.SourceOrderParams.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
					export class Item extends com.stripe.android.model.StripeParamsModel {
						public static class: java.lang.Class<com.stripe.android.model.SourceOrderParams.Item>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public constructor();
						public component3(): string;
						public describeContents(): number;
						public component5(): string;
						public toParamMap(): java.util.Map<string,any>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getAmount(): java.lang.Integer;
						public component2(): java.lang.Integer;
						public getQuantity(): java.lang.Integer;
						public component1(): com.stripe.android.model.SourceOrderParams.Item.Type;
						public getParent(): string;
						public toString(): string;
						public component4(): string;
						public copy(param0: com.stripe.android.model.SourceOrderParams.Item.Type, param1: java.lang.Integer, param2: string, param3: string, param4: string, param5: java.lang.Integer): com.stripe.android.model.SourceOrderParams.Item;
						public getType(): com.stripe.android.model.SourceOrderParams.Item.Type;
						public constructor(param0: com.stripe.android.model.SourceOrderParams.Item.Type, param1: java.lang.Integer, param2: string, param3: string, param4: string, param5: java.lang.Integer);
						public getDescription(): string;
						public component6(): java.lang.Integer;
						public getCurrency(): string;
					}
					export module Item {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.SourceOrderParams.Item.Companion>;
						}
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.SourceOrderParams.Item.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
						export class Type {
							public static class: java.lang.Class<com.stripe.android.model.SourceOrderParams.Item.Type>;
							public static Sku: com.stripe.android.model.SourceOrderParams.Item.Type;
							public static Tax: com.stripe.android.model.SourceOrderParams.Item.Type;
							public static Shipping: com.stripe.android.model.SourceOrderParams.Item.Type;
							public getCode$stripe_release(): string;
							public static values(): native.Array<com.stripe.android.model.SourceOrderParams.Item.Type>;
							public static valueOf(param0: string): com.stripe.android.model.SourceOrderParams.Item.Type;
						}
					}
					export class Shipping extends com.stripe.android.model.StripeParamsModel {
						public static class: java.lang.Class<com.stripe.android.model.SourceOrderParams.Shipping>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public component3(): string;
						public describeContents(): number;
						public component5(): string;
						public toParamMap(): java.util.Map<string,any>;
						public getTrackingNumber(): string;
						public getPhone(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getCarrier(): string;
						public getName(): string;
						public toString(): string;
						public component4(): string;
						public component1(): com.stripe.android.model.Address;
						public constructor(param0: com.stripe.android.model.Address, param1: string, param2: string, param3: string, param4: string);
						public component2(): string;
						public getAddress(): com.stripe.android.model.Address;
						public copy(param0: com.stripe.android.model.Address, param1: string, param2: string, param3: string, param4: string): com.stripe.android.model.SourceOrderParams.Shipping;
					}
					export module Shipping {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.SourceOrderParams.Shipping.Companion>;
						}
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.SourceOrderParams.Shipping.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class SourceParams extends com.stripe.android.model.StripeParamsModel {
					public static class: java.lang.Class<com.stripe.android.model.SourceParams>;
					public static Companion: com.stripe.android.model.SourceParams.Companion;
					public setToken(param0: string): com.stripe.android.model.SourceParams;
					public static createSepaDebitParams(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string): com.stripe.android.model.SourceParams;
					public static createMasterpassParams(param0: string, param1: string): com.stripe.android.model.SourceParams;
					public static createSourceFromTokenParams(param0: string): com.stripe.android.model.SourceParams;
					public setOwner(param0: com.stripe.android.model.SourceParams.OwnerParams): com.stripe.android.model.SourceParams;
					public static createBancontactParams(param0: number, param1: string, param2: string, param3: string, param4: string): com.stripe.android.model.SourceParams;
					public getCurrency(): string;
					public static createVisaCheckoutParams(param0: string): com.stripe.android.model.SourceParams;
					public static createKlarna(param0: string, param1: string, param2: com.stripe.android.model.KlarnaSourceParams): com.stripe.android.model.SourceParams;
					/** @deprecated */
					public static createCardParams(param0: com.stripe.android.model.Card): com.stripe.android.model.SourceParams;
					public getUsage(): com.stripe.android.model.Source.Usage;
					public static createEPSParams(param0: number, param1: string, param2: string, param3: string): com.stripe.android.model.SourceParams;
					public static createSofortParams(param0: number, param1: string, param2: string, param3: string): com.stripe.android.model.SourceParams;
					public setUsage(param0: com.stripe.android.model.Source.Usage): com.stripe.android.model.SourceParams;
					public setMetaData(param0: java.util.Map<string,string>): com.stripe.android.model.SourceParams;
					public static createIdealParams(param0: number, param1: string, param2: string, param3: string, param4: string): com.stripe.android.model.SourceParams;
					public getAttribution$stripe_release(): java.util.Set<string>;
					public setCurrency(param0: string): com.stripe.android.model.SourceParams;
					public static createSepaDebitParams(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string): com.stripe.android.model.SourceParams;
					public getType(): string;
					public hashCode(): number;
					public static createGiropayParams(param0: number, param1: string, param2: string, param3: string): com.stripe.android.model.SourceParams;
					public static createMultibancoParams(param0: number, param1: string, param2: string): com.stripe.android.model.SourceParams;
					public setAmount(param0: java.lang.Long): com.stripe.android.model.SourceParams;
					public getApiParameterMap(): java.util.Map<string,any>;
					public setExtraParams(param0: java.util.Map<string,any>): com.stripe.android.model.SourceParams;
					public getAmount(): java.lang.Long;
					public getMetaData(): java.util.Map<string,string>;
					public static createAlipayReusableParams(param0: string, param1: string, param2: string, param3: string): com.stripe.android.model.SourceParams;
					public static createThreeDSecureParams(param0: number, param1: string, param2: string, param3: string): com.stripe.android.model.SourceParams;
					public getTypeRaw(): string;
					public toParamMap(): java.util.Map<string,any>;
					public setApiParameterMap(param0: java.util.Map<string,any>): com.stripe.android.model.SourceParams;
					public equals(param0: any): boolean;
					public static createRetrieveSourceParams(param0: string): java.util.Map<string,string>;
					public static createWeChatPayParams(param0: number, param1: string, param2: string, param3: string): com.stripe.android.model.SourceParams;
					public getOwner(): com.stripe.android.model.SourceParams.OwnerParams;
					public static createAlipaySingleUseParams(param0: number, param1: string, param2: string, param3: string, param4: string): com.stripe.android.model.SourceParams;
					public setReturnUrl(param0: string): com.stripe.android.model.SourceParams;
					public static createP24Params(param0: number, param1: string, param2: string, param3: string, param4: string): com.stripe.android.model.SourceParams;
					public static createCustomParams(param0: string): com.stripe.android.model.SourceParams;
					public static createCardParamsFromGooglePay(param0: org.json.JSONObject): com.stripe.android.model.SourceParams;
					public getReturnUrl(): string;
					public static createCardParams(param0: com.stripe.android.model.CardParams): com.stripe.android.model.SourceParams;
				}
				export module SourceParams {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.SourceParams.Companion>;
						public createWeChatPayParams(param0: number, param1: string, param2: string, param3: string): com.stripe.android.model.SourceParams;
						public createAlipaySingleUseParams(param0: number, param1: string, param2: string, param3: string, param4: string): com.stripe.android.model.SourceParams;
						public createVisaCheckoutParams(param0: string): com.stripe.android.model.SourceParams;
						public createGiropayParams(param0: number, param1: string, param2: string, param3: string): com.stripe.android.model.SourceParams;
						public createSepaDebitParams(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string): com.stripe.android.model.SourceParams;
						public createKlarna(param0: string, param1: string, param2: com.stripe.android.model.KlarnaSourceParams): com.stripe.android.model.SourceParams;
						public createSourceFromTokenParams(param0: string): com.stripe.android.model.SourceParams;
						public createAlipayReusableParams(param0: string, param1: string, param2: string, param3: string): com.stripe.android.model.SourceParams;
						public createCardParamsFromGooglePay(param0: org.json.JSONObject): com.stripe.android.model.SourceParams;
						public createCardParams(param0: com.stripe.android.model.CardParams): com.stripe.android.model.SourceParams;
						public createSofortParams(param0: number, param1: string, param2: string, param3: string): com.stripe.android.model.SourceParams;
						public createBancontactParams(param0: number, param1: string, param2: string, param3: string, param4: string): com.stripe.android.model.SourceParams;
						public createIdealParams(param0: number, param1: string, param2: string, param3: string, param4: string): com.stripe.android.model.SourceParams;
						public createMasterpassParams(param0: string, param1: string): com.stripe.android.model.SourceParams;
						public createSepaDebitParams(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string): com.stripe.android.model.SourceParams;
						/** @deprecated */
						public createCardParams(param0: com.stripe.android.model.Card): com.stripe.android.model.SourceParams;
						public createThreeDSecureParams(param0: number, param1: string, param2: string, param3: string): com.stripe.android.model.SourceParams;
						public createEPSParams(param0: number, param1: string, param2: string, param3: string): com.stripe.android.model.SourceParams;
						public createMultibancoParams(param0: number, param1: string, param2: string): com.stripe.android.model.SourceParams;
						public createRetrieveSourceParams(param0: string): java.util.Map<string,string>;
						public createP24Params(param0: number, param1: string, param2: string, param3: string, param4: string): com.stripe.android.model.SourceParams;
						public createCustomParams(param0: string): com.stripe.android.model.SourceParams;
					}
					export module Companion {
						export class WhenMappings {
							public static class: java.lang.Class<com.stripe.android.model.SourceParams.Companion.WhenMappings>;
						}
					}
					export class OwnerParams extends com.stripe.android.model.StripeParamsModel {
						public static class: java.lang.Class<com.stripe.android.model.SourceParams.OwnerParams>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public constructor();
						public describeContents(): number;
						public toParamMap(): java.util.Map<string,any>;
						public getAddress$stripe_release(): com.stripe.android.model.Address;
						public constructor(param0: com.stripe.android.model.Address);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public component4$stripe_release(): string;
						public setAddress$stripe_release(param0: com.stripe.android.model.Address): void;
						public setPhone$stripe_release(param0: string): void;
						public getName$stripe_release(): string;
						public getPhone$stripe_release(): string;
						public toString(): string;
						public constructor(param0: com.stripe.android.model.Address, param1: string);
						public setEmail$stripe_release(param0: string): void;
						public copy(param0: com.stripe.android.model.Address, param1: string, param2: string, param3: string): com.stripe.android.model.SourceParams.OwnerParams;
						public component1$stripe_release(): com.stripe.android.model.Address;
						public constructor(param0: com.stripe.android.model.Address, param1: string, param2: string, param3: string);
						public component3$stripe_release(): string;
						public component2$stripe_release(): string;
						public constructor(param0: com.stripe.android.model.Address, param1: string, param2: string);
						public setName$stripe_release(param0: string): void;
						public getEmail$stripe_release(): string;
					}
					export module OwnerParams {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.SourceParams.OwnerParams.Companion>;
						}
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.SourceParams.OwnerParams.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class WeChatParams extends com.stripe.android.model.StripeParamsModel {
						public static class: java.lang.Class<com.stripe.android.model.SourceParams.WeChatParams>;
						public static Companion: com.stripe.android.model.SourceParams.WeChatParams.Companion;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public constructor();
						public describeContents(): number;
						public copy(param0: string, param1: string): com.stripe.android.model.SourceParams.WeChatParams;
						public toParamMap(): java.util.Map<string,any>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: string, param1: string);
						public toString(): string;
					}
					export module WeChatParams {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.SourceParams.WeChatParams.Companion>;
						}
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.SourceParams.WeChatParams.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export abstract class SourceTypeModel extends com.stripe.android.model.StripeModel {
					public static class: java.lang.Class<com.stripe.android.model.SourceTypeModel>;
					public equals(param0: any): boolean;
					public hashCode(): number;
				}
				export module SourceTypeModel {
					export class Card extends com.stripe.android.model.SourceTypeModel {
						public static class: java.lang.Class<com.stripe.android.model.SourceTypeModel.Card>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public component5(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public component11(): com.stripe.android.model.SourceTypeModel.Card.ThreeDSecureStatus;
						public getExpiryYear(): java.lang.Integer;
						public getFunding(): com.stripe.android.model.CardFunding;
						public component7(): java.lang.Integer;
						public component4(): string;
						public copy(param0: string, param1: string, param2: com.stripe.android.model.CardBrand, param3: string, param4: string, param5: string, param6: java.lang.Integer, param7: java.lang.Integer, param8: com.stripe.android.model.CardFunding, param9: string, param10: com.stripe.android.model.SourceTypeModel.Card.ThreeDSecureStatus, param11: com.stripe.android.model.TokenizationMethod): com.stripe.android.model.SourceTypeModel.Card;
						public getExpiryMonth(): java.lang.Integer;
						public component12(): com.stripe.android.model.TokenizationMethod;
						public component10(): string;
						public getAddressLine1Check(): string;
						public getBrand(): com.stripe.android.model.CardBrand;
						public getTokenizationMethod(): com.stripe.android.model.TokenizationMethod;
						public getAddressZipCheck(): string;
						public component3(): com.stripe.android.model.CardBrand;
						public getDynamicLast4(): string;
						public describeContents(): number;
						public toString(): string;
						public getCountry(): string;
						public getLast4(): string;
						public component8(): java.lang.Integer;
						public getThreeDSecureStatus(): com.stripe.android.model.SourceTypeModel.Card.ThreeDSecureStatus;
						public component9(): com.stripe.android.model.CardFunding;
						public component2(): string;
						public constructor(param0: string, param1: string, param2: com.stripe.android.model.CardBrand, param3: string, param4: string, param5: string, param6: java.lang.Integer, param7: java.lang.Integer, param8: com.stripe.android.model.CardFunding, param9: string, param10: com.stripe.android.model.SourceTypeModel.Card.ThreeDSecureStatus, param11: com.stripe.android.model.TokenizationMethod);
						public component6(): string;
						public getCvcCheck(): string;
					}
					export module Card {
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.SourceTypeModel.Card.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
						export class ThreeDSecureStatus {
							public static class: java.lang.Class<com.stripe.android.model.SourceTypeModel.Card.ThreeDSecureStatus>;
							public static Required: com.stripe.android.model.SourceTypeModel.Card.ThreeDSecureStatus;
							public static Optional: com.stripe.android.model.SourceTypeModel.Card.ThreeDSecureStatus;
							public static NotSupported: com.stripe.android.model.SourceTypeModel.Card.ThreeDSecureStatus;
							public static Recommended: com.stripe.android.model.SourceTypeModel.Card.ThreeDSecureStatus;
							public static Unknown: com.stripe.android.model.SourceTypeModel.Card.ThreeDSecureStatus;
							public static Companion: com.stripe.android.model.SourceTypeModel.Card.ThreeDSecureStatus.Companion;
							public static values(): native.Array<com.stripe.android.model.SourceTypeModel.Card.ThreeDSecureStatus>;
							public toString(): string;
							public static valueOf(param0: string): com.stripe.android.model.SourceTypeModel.Card.ThreeDSecureStatus;
						}
						export module ThreeDSecureStatus {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.SourceTypeModel.Card.ThreeDSecureStatus.Companion>;
								public fromCode(param0: string): com.stripe.android.model.SourceTypeModel.Card.ThreeDSecureStatus;
							}
						}
					}
					export class SepaDebit extends com.stripe.android.model.SourceTypeModel {
						public static class: java.lang.Class<com.stripe.android.model.SourceTypeModel.SepaDebit>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public getBranchCode(): string;
						public component3(): string;
						public describeContents(): number;
						public component5(): string;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string);
						public copy(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string): com.stripe.android.model.SourceTypeModel.SepaDebit;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getBankCode(): string;
						public component1(): string;
						public component7(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public component4(): string;
						public getCountry(): string;
						public getFingerPrint(): string;
						public getLast4(): string;
						public component2(): string;
						public getMandateReference(): string;
						public component6(): string;
						public getMandateUrl(): string;
					}
					export module SepaDebit {
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.SourceTypeModel.SepaDebit.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class Stripe3ds2AuthParams extends com.stripe.android.model.StripeParamsModel {
					public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthParams>;
					public static FIELD_APP: string;
					public static FIELD_SOURCE: string;
					public static FIELD_FALLBACK_RETURN_URL: string;
					public static Companion: com.stripe.android.model.Stripe3ds2AuthParams.Companion;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public equals(param0: any): boolean;
					public copy(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: number, param8: string): com.stripe.android.model.Stripe3ds2AuthParams;
					public toString(): string;
					public describeContents(): number;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: number, param8: string);
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public hashCode(): number;
					public toParamMap(): java.util.Map<string,any>;
				}
				export module Stripe3ds2AuthParams {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthParams.Companion>;
					}
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthParams.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class Stripe3ds2AuthResult extends com.stripe.android.model.StripeModel {
					public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthResult>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public getId(): string;
					public constructor(param0: string, param1: string, param2: com.stripe.android.model.Stripe3ds2AuthResult.Ares, param3: java.lang.Long, param4: string, param5: string, param6: boolean, param7: com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error, param8: string);
					public component8(): com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error;
					public component5(): string;
					public getSource(): string;
					public getError(): com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error;
					public describeContents(): number;
					public component4(): java.lang.Long;
					public getState(): string;
					public component3(): com.stripe.android.model.Stripe3ds2AuthResult.Ares;
					public equals(param0: any): boolean;
					public getFallbackRedirectUrl(): string;
					public toString(): string;
					public component1(): string;
					public getCreated(): java.lang.Long;
					public component6(): string;
					public component9(): string;
					public copy(param0: string, param1: string, param2: com.stripe.android.model.Stripe3ds2AuthResult.Ares, param3: java.lang.Long, param4: string, param5: string, param6: boolean, param7: com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error, param8: string): com.stripe.android.model.Stripe3ds2AuthResult;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getAres(): com.stripe.android.model.Stripe3ds2AuthResult.Ares;
					public hashCode(): number;
				}
				export module Stripe3ds2AuthResult {
					export class Ares extends com.stripe.android.model.StripeModel {
						public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthResult.Ares>;
						public static VALUE_CHALLENGE: string;
						public static Companion: com.stripe.android.model.Stripe3ds2AuthResult.Ares.Companion;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public copy(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: java.util.List<com.stripe.android.model.Stripe3ds2AuthResult.MessageExtension>, param8: string, param9: string, param10: string, param11: string): com.stripe.android.model.Stripe3ds2AuthResult.Ares;
						public describeContents(): number;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: java.util.List<com.stripe.android.model.Stripe3ds2AuthResult.MessageExtension>, param8: string, param9: string, param10: string, param11: string);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component1$stripe_release(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public component4$stripe_release(): string;
						public getAcsSignedContent$stripe_release(): string;
						public toString(): string;
						public isChallenge(): boolean;
						public component3$stripe_release(): string;
						public getAcsTransId$stripe_release(): string;
						public getThreeDSServerTransId$stripe_release(): string;
					}
					export module Ares {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthResult.Ares.Companion>;
						}
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthResult.Ares.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthResult.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
					export class MessageExtension extends com.stripe.android.model.StripeModel {
						public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthResult.MessageExtension>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public component3(): string;
						public describeContents(): number;
						public constructor(param0: string, param1: boolean, param2: string, param3: java.util.Map<string,string>);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getData(): java.util.Map<string,string>;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public copy(param0: string, param1: boolean, param2: string, param3: java.util.Map<string,string>): com.stripe.android.model.Stripe3ds2AuthResult.MessageExtension;
						public getName(): string;
						public toString(): string;
						public component4(): java.util.Map<string,string>;
						public getId(): string;
					}
					export module MessageExtension {
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthResult.MessageExtension.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class ThreeDS2Error extends com.stripe.android.model.StripeModel {
						public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public getErrorDetail(): string;
						public component5(): string;
						public getErrorDescription(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getErrorCode(): string;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public component11(): string;
						public component9(): string;
						public getMessageVersion(): string;
						public component4(): string;
						public getErrorMessageType(): string;
						public getThreeDSServerTransId(): string;
						public component10(): string;
						public getAcsTransId(): string;
						public component8(): string;
						public component3(): string;
						public describeContents(): number;
						public copy(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string): com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error;
						public getSdkTransId(): string;
						public component7(): string;
						public toString(): string;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string);
						public component2(): string;
						public component6(): string;
						public getDsTransId(): string;
						public getErrorComponent(): string;
						public getMessageType(): string;
					}
					export module ThreeDS2Error {
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class Stripe3ds2Fingerprint {
					public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2Fingerprint>;
					public component2(): string;
					public getSource(): string;
					public getDirectoryServerName(): string;
					public constructor(param0: string, param1: string, param2: string, param3: com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServerEncryption);
					public constructor(param0: com.stripe.android.model.StripeIntent.NextActionData.SdkData.Use3DS2);
					public component3(): string;
					public component4(): com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServerEncryption;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): string;
					public getDirectoryServerEncryption(): com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServerEncryption;
					public copy(param0: string, param1: string, param2: string, param3: com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServerEncryption): com.stripe.android.model.Stripe3ds2Fingerprint;
					public getServerTransactionId(): string;
					public hashCode(): number;
				}
				export module Stripe3ds2Fingerprint {
					export class DirectoryServerEncryption {
						public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServerEncryption>;
						public constructor(param0: string, param1: string, param2: java.util.List<string>, param3: string);
						public getRootCerts(): java.util.List<java.security.cert.X509Certificate>;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getDirectoryServerId(): string;
						public copy(param0: string, param1: java.security.PublicKey, param2: java.util.List<any>, param3: string): com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServerEncryption;
						public toString(): string;
						public component2(): java.security.PublicKey;
						public component4(): string;
						public getDirectoryServerPublicKey(): java.security.PublicKey;
						public component3(): java.util.List<java.security.cert.X509Certificate>;
						public getKeyId(): string;
						public constructor(param0: string, param1: java.security.PublicKey, param2: java.util.List<any>, param3: string);
					}
					export module DirectoryServerEncryption {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServerEncryption.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class StripeFile extends com.stripe.android.model.StripeModel {
					public static class: java.lang.Class<com.stripe.android.model.StripeFile>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public getTitle(): string;
					public component5(): java.lang.Integer;
					public copy(param0: string, param1: java.lang.Long, param2: string, param3: com.stripe.android.model.StripeFilePurpose, param4: java.lang.Integer, param5: string, param6: string, param7: string): com.stripe.android.model.StripeFile;
					public getId(): string;
					public component7(): string;
					public describeContents(): number;
					public component3(): string;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): string;
					public component2(): java.lang.Long;
					public getCreated(): java.lang.Long;
					public getUrl(): string;
					public component8(): string;
					public constructor();
					public component4(): com.stripe.android.model.StripeFilePurpose;
					public getFilename(): string;
					public component6(): string;
					public constructor(param0: string, param1: java.lang.Long, param2: string, param3: com.stripe.android.model.StripeFilePurpose, param4: java.lang.Integer, param5: string, param6: string, param7: string);
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getPurpose(): com.stripe.android.model.StripeFilePurpose;
					public getType(): string;
					public hashCode(): number;
					public getSize(): java.lang.Integer;
				}
				export module StripeFile {
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.StripeFile.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class StripeFileParams {
					public static class: java.lang.Class<com.stripe.android.model.StripeFileParams>;
					public equals(param0: any): boolean;
					public component2$stripe_release(): com.stripe.android.model.StripeFilePurpose;
					public toString(): string;
					public component1$stripe_release(): java.io.File;
					public copy(param0: java.io.File, param1: com.stripe.android.model.StripeFilePurpose): com.stripe.android.model.StripeFileParams;
					public getPurpose$stripe_release(): com.stripe.android.model.StripeFilePurpose;
					public getFile$stripe_release(): java.io.File;
					public constructor(param0: java.io.File, param1: com.stripe.android.model.StripeFilePurpose);
					public hashCode(): number;
				}
				export module StripeFileParams {
					export class FileLink {
						public static class: java.lang.Class<com.stripe.android.model.StripeFileParams.FileLink>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public constructor(param0: boolean, param1: java.lang.Long);
						public constructor();
						public describeContents(): number;
						public constructor(param0: boolean, param1: java.lang.Long, param2: java.util.Map<string,string>);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: boolean);
						public copy(param0: boolean, param1: java.lang.Long, param2: java.util.Map<string,string>): com.stripe.android.model.StripeFileParams.FileLink;
						public toString(): string;
					}
					export module FileLink {
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.model.StripeFileParams.FileLink.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class StripeFilePurpose {
					public static class: java.lang.Class<com.stripe.android.model.StripeFilePurpose>;
					public static BusinessIcon: com.stripe.android.model.StripeFilePurpose;
					public static BusinessLogo: com.stripe.android.model.StripeFilePurpose;
					public static CustomerSignature: com.stripe.android.model.StripeFilePurpose;
					public static DisputeEvidence: com.stripe.android.model.StripeFilePurpose;
					public static IdentityDocument: com.stripe.android.model.StripeFilePurpose;
					public static PciDocument: com.stripe.android.model.StripeFilePurpose;
					public static TaxDocumentUserUpload: com.stripe.android.model.StripeFilePurpose;
					public static Companion: com.stripe.android.model.StripeFilePurpose.Companion;
					public static values(): native.Array<com.stripe.android.model.StripeFilePurpose>;
					public static valueOf(param0: string): com.stripe.android.model.StripeFilePurpose;
					public getCode$stripe_release(): string;
				}
				export module StripeFilePurpose {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.StripeFilePurpose.Companion>;
						public fromCode(param0: string): com.stripe.android.model.StripeFilePurpose;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class StripeIntent extends com.stripe.android.model.StripeModel {
					public static class: java.lang.Class<com.stripe.android.model.StripeIntent>;
					/**
					 * Constructs a new instance of the com.stripe.android.model.StripeIntent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getId(): string;
						getCreated(): number;
						getDescription(): string;
						isLiveMode(): boolean;
						getPaymentMethod(): com.stripe.android.model.PaymentMethod;
						getPaymentMethodId(): string;
						getPaymentMethodTypes(): java.util.List<string>;
						getNextActionType(): com.stripe.android.model.StripeIntent.NextActionType;
						getClientSecret(): string;
						getStatus(): com.stripe.android.model.StripeIntent.Status;
						getNextActionData(): com.stripe.android.model.StripeIntent.NextActionData;
						requiresAction(): boolean;
						requiresConfirmation(): boolean;
						hashCode(): number;
						equals(param0: any): boolean;
					});
					public constructor();
					public getId(): string;
					public requiresConfirmation(): boolean;
					public getCreated(): number;
					public getClientSecret(): string;
					public getPaymentMethod(): com.stripe.android.model.PaymentMethod;
					public getNextActionData(): com.stripe.android.model.StripeIntent.NextActionData;
					public equals(param0: any): boolean;
					public getNextActionType(): com.stripe.android.model.StripeIntent.NextActionType;
					public getStatus(): com.stripe.android.model.StripeIntent.Status;
					public requiresAction(): boolean;
					public isLiveMode(): boolean;
					public getPaymentMethodTypes(): java.util.List<string>;
					public getDescription(): string;
					public hashCode(): number;
					public getPaymentMethodId(): string;
				}
				export module StripeIntent {
					export abstract class NextActionData extends com.stripe.android.model.StripeModel {
						public static class: java.lang.Class<com.stripe.android.model.StripeIntent.NextActionData>;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
					export module NextActionData {
						export class AlipayRedirect extends com.stripe.android.model.StripeIntent.NextActionData {
							public static class: java.lang.Class<com.stripe.android.model.StripeIntent.NextActionData.AlipayRedirect>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator;
							public component2(): string;
							public hashCode(): number;
							public toString(): string;
							public constructor(param0: string, param1: string, param2: globalAndroid.net.Uri, param3: string);
							public component1(): string;
							public component3(): globalAndroid.net.Uri;
							public getData(): string;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getAuthCompleteUrl(): string;
							public describeContents(): number;
							public getReturnUrl(): string;
							public constructor(param0: string, param1: string, param2: string);
							public component4(): string;
							public getWebViewUrl(): globalAndroid.net.Uri;
							public equals(param0: any): boolean;
							public copy(param0: string, param1: string, param2: globalAndroid.net.Uri, param3: string): com.stripe.android.model.StripeIntent.NextActionData.AlipayRedirect;
						}
						export module AlipayRedirect {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.StripeIntent.NextActionData.AlipayRedirect.Companion>;
							}
							export class Creator {
								public static class: java.lang.Class<com.stripe.android.model.StripeIntent.NextActionData.AlipayRedirect.Creator>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): native.Array<any>;
								public constructor();
							}
						}
						export class DisplayOxxoDetails extends com.stripe.android.model.StripeIntent.NextActionData {
							public static class: java.lang.Class<com.stripe.android.model.StripeIntent.NextActionData.DisplayOxxoDetails>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator;
							public getHostedVoucherUrl(): string;
							public constructor();
							public component2(): string;
							public hashCode(): number;
							public toString(): string;
							public component3(): string;
							public component1(): number;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getExpiresAfter(): number;
							public getNumber(): string;
							public constructor(param0: number, param1: string, param2: string);
							public describeContents(): number;
							public equals(param0: any): boolean;
							public copy(param0: number, param1: string, param2: string): com.stripe.android.model.StripeIntent.NextActionData.DisplayOxxoDetails;
						}
						export module DisplayOxxoDetails {
							export class Creator {
								public static class: java.lang.Class<com.stripe.android.model.StripeIntent.NextActionData.DisplayOxxoDetails.Creator>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): native.Array<any>;
								public constructor();
							}
						}
						export class RedirectToUrl extends com.stripe.android.model.StripeIntent.NextActionData {
							public static class: java.lang.Class<com.stripe.android.model.StripeIntent.NextActionData.RedirectToUrl>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator;
							public component2(): string;
							public getUrl(): globalAndroid.net.Uri;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: globalAndroid.net.Uri, param1: string);
							public describeContents(): number;
							public getReturnUrl(): string;
							public component1(): globalAndroid.net.Uri;
							public toString(): string;
							public equals(param0: any): boolean;
							public copy(param0: globalAndroid.net.Uri, param1: string): com.stripe.android.model.StripeIntent.NextActionData.RedirectToUrl;
						}
						export module RedirectToUrl {
							export class Creator {
								public static class: java.lang.Class<com.stripe.android.model.StripeIntent.NextActionData.RedirectToUrl.Creator>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): native.Array<any>;
								public constructor();
							}
						}
						export abstract class SdkData extends com.stripe.android.model.StripeIntent.NextActionData {
							public static class: java.lang.Class<com.stripe.android.model.StripeIntent.NextActionData.SdkData>;
							public hashCode(): number;
							public equals(param0: any): boolean;
						}
						export module SdkData {
							export class Use3DS1 extends com.stripe.android.model.StripeIntent.NextActionData.SdkData {
								public static class: java.lang.Class<com.stripe.android.model.StripeIntent.NextActionData.SdkData.Use3DS1>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator;
								public component1(): string;
								public toString(): string;
								public describeContents(): number;
								public equals(param0: any): boolean;
								public getUrl(): string;
								public copy(param0: string): com.stripe.android.model.StripeIntent.NextActionData.SdkData.Use3DS1;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public constructor(param0: string);
								public hashCode(): number;
							}
							export module Use3DS1 {
								export class Creator {
									public static class: java.lang.Class<com.stripe.android.model.StripeIntent.NextActionData.SdkData.Use3DS1.Creator>;
									public constructor();
									public createFromParcel(param0: globalAndroid.os.Parcel): any;
									public newArray(param0: number): native.Array<any>;
								}
							}
							export class Use3DS2 extends com.stripe.android.model.StripeIntent.NextActionData.SdkData {
								public static class: java.lang.Class<com.stripe.android.model.StripeIntent.NextActionData.SdkData.Use3DS2>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator;
								public toString(): string;
								public equals(param0: any): boolean;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public getServerEncryption(): com.stripe.android.model.StripeIntent.NextActionData.SdkData.Use3DS2.DirectoryServerEncryption;
								public component2(): string;
								public component1(): string;
								public describeContents(): number;
								public constructor(param0: string, param1: string, param2: string, param3: com.stripe.android.model.StripeIntent.NextActionData.SdkData.Use3DS2.DirectoryServerEncryption);
								public getServerName(): string;
								public component4(): com.stripe.android.model.StripeIntent.NextActionData.SdkData.Use3DS2.DirectoryServerEncryption;
								public copy(param0: string, param1: string, param2: string, param3: com.stripe.android.model.StripeIntent.NextActionData.SdkData.Use3DS2.DirectoryServerEncryption): com.stripe.android.model.StripeIntent.NextActionData.SdkData.Use3DS2;
								public getTransactionId(): string;
								public component3(): string;
								public hashCode(): number;
								public getSource(): string;
							}
							export module Use3DS2 {
								export class Creator {
									public static class: java.lang.Class<com.stripe.android.model.StripeIntent.NextActionData.SdkData.Use3DS2.Creator>;
									public constructor();
									public createFromParcel(param0: globalAndroid.os.Parcel): any;
									public newArray(param0: number): native.Array<any>;
								}
								export class DirectoryServerEncryption {
									public static class: java.lang.Class<com.stripe.android.model.StripeIntent.NextActionData.SdkData.Use3DS2.DirectoryServerEncryption>;
									public static CREATOR: globalAndroid.os.Parcelable.Creator;
									public component2(): string;
									public component3(): java.util.List<string>;
									public hashCode(): number;
									public getDirectoryServerId(): string;
									public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
									public constructor(param0: string, param1: string, param2: java.util.List<string>, param3: string);
									public equals(param0: any): boolean;
									public copy(param0: string, param1: string, param2: java.util.List<string>, param3: string): com.stripe.android.model.StripeIntent.NextActionData.SdkData.Use3DS2.DirectoryServerEncryption;
									public toString(): string;
									public component1(): string;
									public getRootCertsData(): java.util.List<string>;
									public describeContents(): number;
									public getKeyId(): string;
									public getDsCertificateData(): string;
									public component4(): string;
								}
								export module DirectoryServerEncryption {
									export class Creator {
										public static class: java.lang.Class<com.stripe.android.model.StripeIntent.NextActionData.SdkData.Use3DS2.DirectoryServerEncryption.Creator>;
										public constructor();
										public newArray(param0: number): native.Array<any>;
										public createFromParcel(param0: globalAndroid.os.Parcel): any;
									}
								}
							}
						}
					}
					export class NextActionType {
						public static class: java.lang.Class<com.stripe.android.model.StripeIntent.NextActionType>;
						public static RedirectToUrl: com.stripe.android.model.StripeIntent.NextActionType;
						public static UseStripeSdk: com.stripe.android.model.StripeIntent.NextActionType;
						public static DisplayOxxoDetails: com.stripe.android.model.StripeIntent.NextActionType;
						public static AlipayRedirect: com.stripe.android.model.StripeIntent.NextActionType;
						public static Companion: com.stripe.android.model.StripeIntent.NextActionType.Companion;
						public static values(): native.Array<com.stripe.android.model.StripeIntent.NextActionType>;
						public static valueOf(param0: string): com.stripe.android.model.StripeIntent.NextActionType;
						public getCode(): string;
						public toString(): string;
					}
					export module NextActionType {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.StripeIntent.NextActionType.Companion>;
							public fromCode$stripe_release(param0: string): com.stripe.android.model.StripeIntent.NextActionType;
						}
					}
					export class Status {
						public static class: java.lang.Class<com.stripe.android.model.StripeIntent.Status>;
						public static Canceled: com.stripe.android.model.StripeIntent.Status;
						public static Processing: com.stripe.android.model.StripeIntent.Status;
						public static RequiresAction: com.stripe.android.model.StripeIntent.Status;
						public static RequiresConfirmation: com.stripe.android.model.StripeIntent.Status;
						public static RequiresPaymentMethod: com.stripe.android.model.StripeIntent.Status;
						public static Succeeded: com.stripe.android.model.StripeIntent.Status;
						public static RequiresCapture: com.stripe.android.model.StripeIntent.Status;
						public static Companion: com.stripe.android.model.StripeIntent.Status.Companion;
						public static valueOf(param0: string): com.stripe.android.model.StripeIntent.Status;
						public static values(): native.Array<com.stripe.android.model.StripeIntent.Status>;
						public getCode(): string;
						public toString(): string;
					}
					export module Status {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.StripeIntent.Status.Companion>;
							public fromCode$stripe_release(param0: string): com.stripe.android.model.StripeIntent.Status;
						}
					}
					export class Usage {
						public static class: java.lang.Class<com.stripe.android.model.StripeIntent.Usage>;
						public static OnSession: com.stripe.android.model.StripeIntent.Usage;
						public static OffSession: com.stripe.android.model.StripeIntent.Usage;
						public static OneTime: com.stripe.android.model.StripeIntent.Usage;
						public static Companion: com.stripe.android.model.StripeIntent.Usage.Companion;
						public static valueOf(param0: string): com.stripe.android.model.StripeIntent.Usage;
						public static values(): native.Array<com.stripe.android.model.StripeIntent.Usage>;
						public getCode(): string;
						public toString(): string;
					}
					export module Usage {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.StripeIntent.Usage.Companion>;
							public fromCode$stripe_release(param0: string): com.stripe.android.model.StripeIntent.Usage;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class StripeJsonUtils {
					public static class: java.lang.Class<com.stripe.android.model.StripeJsonUtils>;
					public static INSTANCE: com.stripe.android.model.StripeJsonUtils;
					public static optString(param0: org.json.JSONObject, param1: string): string;
					public static optCurrency$stripe_release(param0: org.json.JSONObject, param1: string): string;
					public mapToJsonObject$stripe_release(param0: java.util.Map<string,any>): org.json.JSONObject;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class StripeModel {
					public static class: java.lang.Class<com.stripe.android.model.StripeModel>;
					/**
					 * Constructs a new instance of the com.stripe.android.model.StripeModel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						hashCode(): number;
						equals(param0: any): boolean;
					});
					public constructor();
					public equals(param0: any): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class StripeParamsModel {
					public static class: java.lang.Class<com.stripe.android.model.StripeParamsModel>;
					/**
					 * Constructs a new instance of the com.stripe.android.model.StripeParamsModel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						toParamMap(): java.util.Map<string,any>;
					});
					public constructor();
					public toParamMap(): java.util.Map<string,any>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class StripePaymentSource {
					public static class: java.lang.Class<com.stripe.android.model.StripePaymentSource>;
					/**
					 * Constructs a new instance of the com.stripe.android.model.StripePaymentSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getId(): string;
					});
					public constructor();
					public getId(): string;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class Token implements com.stripe.android.model.StripeModel, com.stripe.android.model.StripePaymentSource {
					public static class: java.lang.Class<com.stripe.android.model.Token>;
					public static Companion: com.stripe.android.model.Token.Companion;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public getId(): string;
					public describeContents(): number;
					public getUsed(): boolean;
					public component5(): boolean;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.Token;
					public component2(): com.stripe.android.model.Token.Type;
					public getCard(): com.stripe.android.model.Card;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): string;
					public component7(): com.stripe.android.model.Card;
					public copy(param0: string, param1: com.stripe.android.model.Token.Type, param2: java.util.Date, param3: boolean, param4: boolean, param5: com.stripe.android.model.BankAccount, param6: com.stripe.android.model.Card): com.stripe.android.model.Token;
					public component4(): boolean;
					public constructor(param0: string, param1: com.stripe.android.model.Token.Type, param2: java.util.Date, param3: boolean, param4: boolean, param5: com.stripe.android.model.BankAccount, param6: com.stripe.android.model.Card);
					public component6(): com.stripe.android.model.BankAccount;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getBankAccount(): com.stripe.android.model.BankAccount;
					public hashCode(): number;
					public getCreated(): java.util.Date;
					public getLivemode(): boolean;
					public component3(): java.util.Date;
					public getType(): com.stripe.android.model.Token.Type;
				}
				export module Token {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.Token.Companion>;
						public fromJson(param0: org.json.JSONObject): com.stripe.android.model.Token;
					}
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.Token.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
					export class Type {
						public static class: java.lang.Class<com.stripe.android.model.Token.Type>;
						public static Card: com.stripe.android.model.Token.Type;
						public static BankAccount: com.stripe.android.model.Token.Type;
						public static Pii: com.stripe.android.model.Token.Type;
						public static Account: com.stripe.android.model.Token.Type;
						public static CvcUpdate: com.stripe.android.model.Token.Type;
						public static Person: com.stripe.android.model.Token.Type;
						public static Companion: com.stripe.android.model.Token.Type.Companion;
						public static valueOf(param0: string): com.stripe.android.model.Token.Type;
						public getCode$stripe_release(): string;
						public static values(): native.Array<com.stripe.android.model.Token.Type>;
					}
					export module Type {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.Token.Type.Companion>;
							public fromCode(param0: string): com.stripe.android.model.Token.Type;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export abstract class TokenParams extends com.stripe.android.model.StripeParamsModel {
					public static class: java.lang.Class<com.stripe.android.model.TokenParams>;
					public constructor(param0: com.stripe.android.model.Token.Type, param1: java.util.Set<string>);
					public getTokenType$stripe_release(): com.stripe.android.model.Token.Type;
					public getTypeDataParams(): java.util.Map<string,any>;
					public getAttribution$stripe_release(): java.util.Set<string>;
					public toParamMap(): java.util.Map<string,any>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class TokenizationMethod {
					public static class: java.lang.Class<com.stripe.android.model.TokenizationMethod>;
					public static ApplePay: com.stripe.android.model.TokenizationMethod;
					public static GooglePay: com.stripe.android.model.TokenizationMethod;
					public static Masterpass: com.stripe.android.model.TokenizationMethod;
					public static VisaCheckout: com.stripe.android.model.TokenizationMethod;
					public static Companion: com.stripe.android.model.TokenizationMethod.Companion;
					public static values(): native.Array<com.stripe.android.model.TokenizationMethod>;
					public static valueOf(param0: string): com.stripe.android.model.TokenizationMethod;
				}
				export module TokenizationMethod {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.TokenizationMethod.Companion>;
						public fromCode$stripe_release(param0: string): com.stripe.android.model.TokenizationMethod;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class WeChat extends com.stripe.android.model.StripeModel {
					public static class: java.lang.Class<com.stripe.android.model.WeChat>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public copy(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string): com.stripe.android.model.WeChat;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string);
					public component2(): string;
					public component5(): string;
					public toString(): string;
					public component8(): string;
					public getSign(): string;
					public component4(): string;
					public hashCode(): number;
					public getAppId(): string;
					public getNonce(): string;
					public component7(): string;
					public describeContents(): number;
					public getTimestamp(): string;
					public getQrCodeUrl(): string;
					public component3(): string;
					public getPackageValue(): string;
					public getPrepayId(): string;
					public equals(param0: any): boolean;
					public component1(): string;
					public component6(): string;
					public getStatementDescriptor(): string;
					public component9(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getPartnerId(): string;
				}
				export module WeChat {
					export class Creator {
						public static class: java.lang.Class<com.stripe.android.model.WeChat.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module parsers {
					export class AccountRangeJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.AccountRange> {
						public static class: java.lang.Class<com.stripe.android.model.parsers.AccountRangeJsonParser>;
						public static FIELD_ACCOUNT_RANGE_HIGH: string;
						public static FIELD_ACCOUNT_RANGE_LOW: string;
						public static FIELD_PAN_LENGTH: string;
						public static FIELD_BRAND: string;
						public static FIELD_COUNTRY: string;
						public constructor();
						public parse(param0: org.json.JSONObject): com.stripe.android.model.AccountRange;
						public serialize(param0: com.stripe.android.model.AccountRange): org.json.JSONObject;
						public parse(param0: org.json.JSONObject): any;
					}
					export module AccountRangeJsonParser {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.parsers.AccountRangeJsonParser.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module parsers {
					export class AddressJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.Address> {
						public static class: java.lang.Class<com.stripe.android.model.parsers.AddressJsonParser>;
						public constructor();
						public parse(param0: org.json.JSONObject): any;
						public parse(param0: org.json.JSONObject): com.stripe.android.model.Address;
					}
					export module AddressJsonParser {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.parsers.AddressJsonParser.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module parsers {
					export class BankAccountJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.BankAccount> {
						public static class: java.lang.Class<com.stripe.android.model.parsers.BankAccountJsonParser>;
						public constructor();
						public parse(param0: org.json.JSONObject): any;
						public parse(param0: org.json.JSONObject): com.stripe.android.model.BankAccount;
					}
					export module BankAccountJsonParser {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.parsers.BankAccountJsonParser.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module parsers {
					export class CardJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.Card> {
						public static class: java.lang.Class<com.stripe.android.model.parsers.CardJsonParser>;
						public static VALUE_CARD: string;
						public static Companion: com.stripe.android.model.parsers.CardJsonParser.Companion;
						public parse(param0: org.json.JSONObject): com.stripe.android.model.Card;
						public constructor();
						public parse(param0: org.json.JSONObject): any;
					}
					export module CardJsonParser {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.parsers.CardJsonParser.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module parsers {
					export class CardMetadataJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.CardMetadata> {
						public static class: java.lang.Class<com.stripe.android.model.parsers.CardMetadataJsonParser>;
						public constructor(param0: com.stripe.android.cards.Bin);
						public parse(param0: org.json.JSONObject): any;
						public parse(param0: org.json.JSONObject): com.stripe.android.model.CardMetadata;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module parsers {
					export class CustomerJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.Customer> {
						public static class: java.lang.Class<com.stripe.android.model.parsers.CustomerJsonParser>;
						public constructor();
						public parse(param0: org.json.JSONObject): com.stripe.android.model.Customer;
						public parse(param0: org.json.JSONObject): any;
					}
					export module CustomerJsonParser {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.parsers.CustomerJsonParser.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module parsers {
					export class CustomerSourceJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.CustomerSource> {
						public static class: java.lang.Class<com.stripe.android.model.parsers.CustomerSourceJsonParser>;
						public constructor();
						public parse(param0: org.json.JSONObject): any;
						public parse(param0: org.json.JSONObject): com.stripe.android.model.CustomerSource;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module parsers {
					export class EphemeralKeyJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.EphemeralKey> {
						public static class: java.lang.Class<com.stripe.android.model.parsers.EphemeralKeyJsonParser>;
						public constructor();
						public parse(param0: org.json.JSONObject): any;
						public parse(param0: org.json.JSONObject): com.stripe.android.EphemeralKey;
					}
					export module EphemeralKeyJsonParser {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.parsers.EphemeralKeyJsonParser.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module parsers {
					export class FingerprintDataJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.FingerprintData> {
						public static class: java.lang.Class<com.stripe.android.model.parsers.FingerprintDataJsonParser>;
						public parse(param0: org.json.JSONObject): any;
						public parse(param0: org.json.JSONObject): com.stripe.android.FingerprintData;
						public constructor(param0: kotlin.jvm.functions.Function0<java.lang.Long>);
					}
					export module FingerprintDataJsonParser {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.parsers.FingerprintDataJsonParser.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module parsers {
					export class FpxBankStatusesJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.FpxBankStatuses> {
						public static class: java.lang.Class<com.stripe.android.model.parsers.FpxBankStatusesJsonParser>;
						public constructor();
						public parse(param0: org.json.JSONObject): any;
						public parse(param0: org.json.JSONObject): com.stripe.android.model.FpxBankStatuses;
					}
					export module FpxBankStatusesJsonParser {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.parsers.FpxBankStatusesJsonParser.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module parsers {
					export class ModelJsonParser<ModelType>  extends java.lang.Object {
						public static class: java.lang.Class<com.stripe.android.model.parsers.ModelJsonParser<any>>;
						/**
						 * Constructs a new instance of the com.stripe.android.model.parsers.ModelJsonParser<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							parse(param0: org.json.JSONObject): ModelType;
							<clinit>(): void;
						});
						public constructor();
						public static Companion: com.stripe.android.model.parsers.ModelJsonParser.Companion;
						public parse(param0: org.json.JSONObject): ModelType;
					}
					export module ModelJsonParser {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.parsers.ModelJsonParser.Companion>;
							public jsonArrayToList$stripe_release(param0: org.json.JSONArray): java.util.List<string>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module parsers {
					export class NextActionDataParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.StripeIntent.NextActionData> {
						public static class: java.lang.Class<com.stripe.android.model.parsers.NextActionDataParser>;
						public constructor();
						public parse(param0: org.json.JSONObject): any;
						public parse(param0: org.json.JSONObject): com.stripe.android.model.StripeIntent.NextActionData;
					}
					export module NextActionDataParser {
						export class AlipayRedirectParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.StripeIntent.NextActionData.AlipayRedirect> {
							public static class: java.lang.Class<com.stripe.android.model.parsers.NextActionDataParser.AlipayRedirectParser>;
							public static FIELD_NATIVE_DATA: string;
							public static FIELD_RETURN_URL: string;
							public static FIELD_URL: string;
							public constructor();
							public parse(param0: org.json.JSONObject): com.stripe.android.model.StripeIntent.NextActionData.AlipayRedirect;
							public parse(param0: org.json.JSONObject): any;
						}
						export module AlipayRedirectParser {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.parsers.NextActionDataParser.AlipayRedirectParser.Companion>;
							}
						}
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.parsers.NextActionDataParser.Companion>;
						}
						export class DisplayOxxoDetailsJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.StripeIntent.NextActionData.DisplayOxxoDetails> {
							public static class: java.lang.Class<com.stripe.android.model.parsers.NextActionDataParser.DisplayOxxoDetailsJsonParser>;
							public parse(param0: org.json.JSONObject): com.stripe.android.model.StripeIntent.NextActionData.DisplayOxxoDetails;
							public constructor();
							public parse(param0: org.json.JSONObject): any;
						}
						export module DisplayOxxoDetailsJsonParser {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.parsers.NextActionDataParser.DisplayOxxoDetailsJsonParser.Companion>;
							}
						}
						export class RedirectToUrlParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.StripeIntent.NextActionData.RedirectToUrl> {
							public static class: java.lang.Class<com.stripe.android.model.parsers.NextActionDataParser.RedirectToUrlParser>;
							public static FIELD_URL: string;
							public static FIELD_RETURN_URL: string;
							public parse(param0: org.json.JSONObject): com.stripe.android.model.StripeIntent.NextActionData.RedirectToUrl;
							public constructor();
							public parse(param0: org.json.JSONObject): any;
						}
						export module RedirectToUrlParser {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.parsers.NextActionDataParser.RedirectToUrlParser.Companion>;
							}
						}
						export class SdkDataJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.StripeIntent.NextActionData.SdkData> {
							public static class: java.lang.Class<com.stripe.android.model.parsers.NextActionDataParser.SdkDataJsonParser>;
							public constructor();
							public parse(param0: org.json.JSONObject): com.stripe.android.model.StripeIntent.NextActionData.SdkData;
							public parse(param0: org.json.JSONObject): any;
						}
						export module SdkDataJsonParser {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.parsers.NextActionDataParser.SdkDataJsonParser.Companion>;
							}
						}
						export class WhenMappings {
							public static class: java.lang.Class<com.stripe.android.model.parsers.NextActionDataParser.WhenMappings>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module parsers {
					export class PaymentIntentJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.PaymentIntent> {
						public static class: java.lang.Class<com.stripe.android.model.parsers.PaymentIntentJsonParser>;
						public constructor();
						public parse(param0: org.json.JSONObject): com.stripe.android.model.PaymentIntent;
						public parse(param0: org.json.JSONObject): any;
					}
					export module PaymentIntentJsonParser {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.parsers.PaymentIntentJsonParser.Companion>;
						}
						export class ErrorJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.PaymentIntent.Error> {
							public static class: java.lang.Class<com.stripe.android.model.parsers.PaymentIntentJsonParser.ErrorJsonParser>;
							public constructor();
							public parse(param0: org.json.JSONObject): com.stripe.android.model.PaymentIntent.Error;
							public parse(param0: org.json.JSONObject): any;
						}
						export module ErrorJsonParser {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.parsers.PaymentIntentJsonParser.ErrorJsonParser.Companion>;
							}
						}
						export class ShippingJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.PaymentIntent.Shipping> {
							public static class: java.lang.Class<com.stripe.android.model.parsers.PaymentIntentJsonParser.ShippingJsonParser>;
							public constructor();
							public parse(param0: org.json.JSONObject): com.stripe.android.model.PaymentIntent.Shipping;
							public parse(param0: org.json.JSONObject): any;
						}
						export module ShippingJsonParser {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.parsers.PaymentIntentJsonParser.ShippingJsonParser.Companion>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module parsers {
					export class PaymentMethodJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.PaymentMethod> {
						public static class: java.lang.Class<com.stripe.android.model.parsers.PaymentMethodJsonParser>;
						public constructor();
						public parse(param0: org.json.JSONObject): any;
						public parse(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod;
					}
					export module PaymentMethodJsonParser {
						export class AuBecsDebitJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.PaymentMethod.AuBecsDebit> {
							public static class: java.lang.Class<com.stripe.android.model.parsers.PaymentMethodJsonParser.AuBecsDebitJsonParser>;
							public constructor();
							public parse(param0: org.json.JSONObject): any;
							public parse(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod.AuBecsDebit;
						}
						export module AuBecsDebitJsonParser {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.parsers.PaymentMethodJsonParser.AuBecsDebitJsonParser.Companion>;
							}
						}
						export class BacsDebitJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.PaymentMethod.BacsDebit> {
							public static class: java.lang.Class<com.stripe.android.model.parsers.PaymentMethodJsonParser.BacsDebitJsonParser>;
							public constructor();
							public parse(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod.BacsDebit;
							public parse(param0: org.json.JSONObject): any;
						}
						export module BacsDebitJsonParser {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.parsers.PaymentMethodJsonParser.BacsDebitJsonParser.Companion>;
							}
						}
						export class BillingDetails extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.PaymentMethod.BillingDetails> {
							public static class: java.lang.Class<com.stripe.android.model.parsers.PaymentMethodJsonParser.BillingDetails>;
							public constructor();
							public parse(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod.BillingDetails;
							public parse(param0: org.json.JSONObject): any;
						}
						export module BillingDetails {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.parsers.PaymentMethodJsonParser.BillingDetails.Companion>;
							}
						}
						export class CardJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.PaymentMethod.Card> {
							public static class: java.lang.Class<com.stripe.android.model.parsers.PaymentMethodJsonParser.CardJsonParser>;
							public constructor();
							public parse(param0: org.json.JSONObject): any;
							public parse(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod.Card;
						}
						export module CardJsonParser {
							export class ChecksJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.PaymentMethod.Card.Checks> {
								public static class: java.lang.Class<com.stripe.android.model.parsers.PaymentMethodJsonParser.CardJsonParser.ChecksJsonParser>;
								public parse(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod.Card.Checks;
								public parse(param0: org.json.JSONObject): any;
								public constructor();
							}
							export module ChecksJsonParser {
								export class Companion {
									public static class: java.lang.Class<com.stripe.android.model.parsers.PaymentMethodJsonParser.CardJsonParser.ChecksJsonParser.Companion>;
								}
							}
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.parsers.PaymentMethodJsonParser.CardJsonParser.Companion>;
							}
							export class NetworksJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.PaymentMethod.Card.Networks> {
								public static class: java.lang.Class<com.stripe.android.model.parsers.PaymentMethodJsonParser.CardJsonParser.NetworksJsonParser>;
								public parse(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod.Card.Networks;
								public parse(param0: org.json.JSONObject): any;
								public constructor();
							}
							export module NetworksJsonParser {
								export class Companion {
									public static class: java.lang.Class<com.stripe.android.model.parsers.PaymentMethodJsonParser.CardJsonParser.NetworksJsonParser.Companion>;
								}
							}
							export class ThreeDSecureUsageJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage> {
								public static class: java.lang.Class<com.stripe.android.model.parsers.PaymentMethodJsonParser.CardJsonParser.ThreeDSecureUsageJsonParser>;
								public parse(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage;
								public parse(param0: org.json.JSONObject): any;
								public constructor();
							}
							export module ThreeDSecureUsageJsonParser {
								export class Companion {
									public static class: java.lang.Class<com.stripe.android.model.parsers.PaymentMethodJsonParser.CardJsonParser.ThreeDSecureUsageJsonParser.Companion>;
								}
							}
						}
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.parsers.PaymentMethodJsonParser.Companion>;
						}
						export class FpxJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.PaymentMethod.Fpx> {
							public static class: java.lang.Class<com.stripe.android.model.parsers.PaymentMethodJsonParser.FpxJsonParser>;
							public constructor();
							public parse(param0: org.json.JSONObject): any;
							public parse(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod.Fpx;
						}
						export module FpxJsonParser {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.parsers.PaymentMethodJsonParser.FpxJsonParser.Companion>;
							}
						}
						export class IdealJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.PaymentMethod.Ideal> {
							public static class: java.lang.Class<com.stripe.android.model.parsers.PaymentMethodJsonParser.IdealJsonParser>;
							public constructor();
							public parse(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod.Ideal;
							public parse(param0: org.json.JSONObject): any;
						}
						export module IdealJsonParser {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.parsers.PaymentMethodJsonParser.IdealJsonParser.Companion>;
							}
						}
						export class SepaDebitJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.PaymentMethod.SepaDebit> {
							public static class: java.lang.Class<com.stripe.android.model.parsers.PaymentMethodJsonParser.SepaDebitJsonParser>;
							public constructor();
							public parse(param0: org.json.JSONObject): any;
							public parse(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod.SepaDebit;
						}
						export module SepaDebitJsonParser {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.parsers.PaymentMethodJsonParser.SepaDebitJsonParser.Companion>;
							}
						}
						export class SofortJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.PaymentMethod.Sofort> {
							public static class: java.lang.Class<com.stripe.android.model.parsers.PaymentMethodJsonParser.SofortJsonParser>;
							public constructor();
							public parse(param0: org.json.JSONObject): any;
							public parse(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod.Sofort;
						}
						export module SofortJsonParser {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.parsers.PaymentMethodJsonParser.SofortJsonParser.Companion>;
							}
						}
						export class WhenMappings {
							public static class: java.lang.Class<com.stripe.android.model.parsers.PaymentMethodJsonParser.WhenMappings>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module parsers {
					export class SetupIntentJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.SetupIntent> {
						public static class: java.lang.Class<com.stripe.android.model.parsers.SetupIntentJsonParser>;
						public constructor();
						public parse(param0: org.json.JSONObject): com.stripe.android.model.SetupIntent;
						public parse(param0: org.json.JSONObject): any;
					}
					export module SetupIntentJsonParser {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.parsers.SetupIntentJsonParser.Companion>;
						}
						export class ErrorJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.SetupIntent.Error> {
							public static class: java.lang.Class<com.stripe.android.model.parsers.SetupIntentJsonParser.ErrorJsonParser>;
							public constructor();
							public parse(param0: org.json.JSONObject): any;
							public parse(param0: org.json.JSONObject): com.stripe.android.model.SetupIntent.Error;
						}
						export module ErrorJsonParser {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.parsers.SetupIntentJsonParser.ErrorJsonParser.Companion>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module parsers {
					export class ShippingInformationJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.ShippingInformation> {
						public static class: java.lang.Class<com.stripe.android.model.parsers.ShippingInformationJsonParser>;
						public constructor();
						public parse(param0: org.json.JSONObject): com.stripe.android.model.ShippingInformation;
						public parse(param0: org.json.JSONObject): any;
					}
					export module ShippingInformationJsonParser {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.parsers.ShippingInformationJsonParser.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module parsers {
					export class SourceCardDataJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.SourceTypeModel.Card> {
						public static class: java.lang.Class<com.stripe.android.model.parsers.SourceCardDataJsonParser>;
						public static Companion: com.stripe.android.model.parsers.SourceCardDataJsonParser.Companion;
						public constructor();
						public parse(param0: org.json.JSONObject): com.stripe.android.model.SourceTypeModel.Card;
						public parse(param0: org.json.JSONObject): any;
					}
					export module SourceCardDataJsonParser {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.parsers.SourceCardDataJsonParser.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module parsers {
					export class SourceJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.Source> {
						public static class: java.lang.Class<com.stripe.android.model.parsers.SourceJsonParser>;
						public parse(param0: org.json.JSONObject): com.stripe.android.model.Source;
						public constructor();
						public static asSourceType(param0: string): string;
						public parse(param0: org.json.JSONObject): any;
					}
					export module SourceJsonParser {
						export class CodeVerificationJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.Source.CodeVerification> {
							public static class: java.lang.Class<com.stripe.android.model.parsers.SourceJsonParser.CodeVerificationJsonParser>;
							public constructor();
							public parse(param0: org.json.JSONObject): com.stripe.android.model.Source.CodeVerification;
							public parse(param0: org.json.JSONObject): any;
						}
						export module CodeVerificationJsonParser {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.parsers.SourceJsonParser.CodeVerificationJsonParser.Companion>;
							}
						}
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.parsers.SourceJsonParser.Companion>;
							public asSourceType(param0: string): string;
						}
						export class KlarnaJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.Source.Klarna> {
							public static class: java.lang.Class<com.stripe.android.model.parsers.SourceJsonParser.KlarnaJsonParser>;
							public constructor();
							public parse(param0: org.json.JSONObject): any;
							public parse(param0: org.json.JSONObject): com.stripe.android.model.Source.Klarna;
						}
						export module KlarnaJsonParser {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.parsers.SourceJsonParser.KlarnaJsonParser.Companion>;
							}
						}
						export class OwnerJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.Source.Owner> {
							public static class: java.lang.Class<com.stripe.android.model.parsers.SourceJsonParser.OwnerJsonParser>;
							public constructor();
							public parse(param0: org.json.JSONObject): com.stripe.android.model.Source.Owner;
							public parse(param0: org.json.JSONObject): any;
						}
						export module OwnerJsonParser {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.parsers.SourceJsonParser.OwnerJsonParser.Companion>;
							}
						}
						export class ReceiverJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.Source.Receiver> {
							public static class: java.lang.Class<com.stripe.android.model.parsers.SourceJsonParser.ReceiverJsonParser>;
							public constructor();
							public parse(param0: org.json.JSONObject): any;
							public parse(param0: org.json.JSONObject): com.stripe.android.model.Source.Receiver;
						}
						export module ReceiverJsonParser {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.parsers.SourceJsonParser.ReceiverJsonParser.Companion>;
							}
						}
						export class RedirectJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.Source.Redirect> {
							public static class: java.lang.Class<com.stripe.android.model.parsers.SourceJsonParser.RedirectJsonParser>;
							public static Companion: com.stripe.android.model.parsers.SourceJsonParser.RedirectJsonParser.Companion;
							public constructor();
							public parse(param0: org.json.JSONObject): com.stripe.android.model.Source.Redirect;
							public parse(param0: org.json.JSONObject): any;
						}
						export module RedirectJsonParser {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.parsers.SourceJsonParser.RedirectJsonParser.Companion>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module parsers {
					export class SourceOrderJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.SourceOrder> {
						public static class: java.lang.Class<com.stripe.android.model.parsers.SourceOrderJsonParser>;
						public constructor();
						public parse(param0: org.json.JSONObject): any;
						public parse(param0: org.json.JSONObject): com.stripe.android.model.SourceOrder;
					}
					export module SourceOrderJsonParser {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.parsers.SourceOrderJsonParser.Companion>;
						}
						export class ItemJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.SourceOrder.Item> {
							public static class: java.lang.Class<com.stripe.android.model.parsers.SourceOrderJsonParser.ItemJsonParser>;
							public constructor();
							public parse(param0: org.json.JSONObject): com.stripe.android.model.SourceOrder.Item;
							public parse(param0: org.json.JSONObject): any;
						}
						export module ItemJsonParser {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.parsers.SourceOrderJsonParser.ItemJsonParser.Companion>;
							}
						}
						export class ShippingJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.SourceOrder.Shipping> {
							public static class: java.lang.Class<com.stripe.android.model.parsers.SourceOrderJsonParser.ShippingJsonParser>;
							public constructor();
							public parse(param0: org.json.JSONObject): com.stripe.android.model.SourceOrder.Shipping;
							public parse(param0: org.json.JSONObject): any;
						}
						export module ShippingJsonParser {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.parsers.SourceOrderJsonParser.ShippingJsonParser.Companion>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module parsers {
					export class SourceOwnerJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.Source.Owner> {
						public static class: java.lang.Class<com.stripe.android.model.parsers.SourceOwnerJsonParser>;
						public constructor();
						public parse(param0: org.json.JSONObject): any;
						public parse(param0: org.json.JSONObject): com.stripe.android.model.Source.Owner;
					}
					export module SourceOwnerJsonParser {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.parsers.SourceOwnerJsonParser.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module parsers {
					export class SourceSepaDebitDataJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.SourceTypeModel.SepaDebit> {
						public static class: java.lang.Class<com.stripe.android.model.parsers.SourceSepaDebitDataJsonParser>;
						public parse(param0: org.json.JSONObject): com.stripe.android.model.SourceTypeModel.SepaDebit;
						public constructor();
						public parse(param0: org.json.JSONObject): any;
					}
					export module SourceSepaDebitDataJsonParser {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.parsers.SourceSepaDebitDataJsonParser.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module parsers {
					export class Stripe3ds2AuthResultJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.Stripe3ds2AuthResult> {
						public static class: java.lang.Class<com.stripe.android.model.parsers.Stripe3ds2AuthResultJsonParser>;
						public parse(param0: org.json.JSONObject): com.stripe.android.model.Stripe3ds2AuthResult;
						public constructor();
						public parse(param0: org.json.JSONObject): any;
					}
					export module Stripe3ds2AuthResultJsonParser {
						export class AresJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.Stripe3ds2AuthResult.Ares> {
							public static class: java.lang.Class<com.stripe.android.model.parsers.Stripe3ds2AuthResultJsonParser.AresJsonParser>;
							public constructor();
							public parse(param0: org.json.JSONObject): any;
							public parse(param0: org.json.JSONObject): com.stripe.android.model.Stripe3ds2AuthResult.Ares;
						}
						export module AresJsonParser {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.parsers.Stripe3ds2AuthResultJsonParser.AresJsonParser.Companion>;
							}
						}
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.parsers.Stripe3ds2AuthResultJsonParser.Companion>;
						}
						export class MessageExtensionJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.Stripe3ds2AuthResult.MessageExtension> {
							public static class: java.lang.Class<com.stripe.android.model.parsers.Stripe3ds2AuthResultJsonParser.MessageExtensionJsonParser>;
							public constructor();
							public parse(param0: org.json.JSONObject): com.stripe.android.model.Stripe3ds2AuthResult.MessageExtension;
							public parse(param0: org.json.JSONObject): any;
							public parse(param0: org.json.JSONArray): java.util.List<com.stripe.android.model.Stripe3ds2AuthResult.MessageExtension>;
						}
						export module MessageExtensionJsonParser {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.parsers.Stripe3ds2AuthResultJsonParser.MessageExtensionJsonParser.Companion>;
							}
						}
						export class ThreeDS2ErrorJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error> {
							public static class: java.lang.Class<com.stripe.android.model.parsers.Stripe3ds2AuthResultJsonParser.ThreeDS2ErrorJsonParser>;
							public constructor();
							public parse(param0: org.json.JSONObject): any;
							public parse(param0: org.json.JSONObject): com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error;
						}
						export module ThreeDS2ErrorJsonParser {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.parsers.Stripe3ds2AuthResultJsonParser.ThreeDS2ErrorJsonParser.Companion>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module parsers {
					export class StripeFileJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.StripeFile> {
						public static class: java.lang.Class<com.stripe.android.model.parsers.StripeFileJsonParser>;
						public constructor();
						public parse(param0: org.json.JSONObject): any;
						public parse(param0: org.json.JSONObject): com.stripe.android.model.StripeFile;
					}
					export module StripeFileJsonParser {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.parsers.StripeFileJsonParser.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module parsers {
					export class TokenJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.Token> {
						public static class: java.lang.Class<com.stripe.android.model.parsers.TokenJsonParser>;
						public constructor();
						public parse(param0: org.json.JSONObject): com.stripe.android.model.Token;
						public parse(param0: org.json.JSONObject): any;
					}
					export module TokenJsonParser {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.parsers.TokenJsonParser.Companion>;
						}
						export class WhenMappings {
							public static class: java.lang.Class<com.stripe.android.model.parsers.TokenJsonParser.WhenMappings>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module parsers {
					export class WalletJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.wallets.Wallet> {
						public static class: java.lang.Class<com.stripe.android.model.parsers.WalletJsonParser>;
						public constructor();
						public parse(param0: org.json.JSONObject): com.stripe.android.model.wallets.Wallet;
						public parse(param0: org.json.JSONObject): any;
					}
					export module WalletJsonParser {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.parsers.WalletJsonParser.Companion>;
						}
						export class WhenMappings {
							public static class: java.lang.Class<com.stripe.android.model.parsers.WalletJsonParser.WhenMappings>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module parsers {
					export class WeChatJsonParser extends com.stripe.android.model.parsers.ModelJsonParser<com.stripe.android.model.WeChat> {
						public static class: java.lang.Class<com.stripe.android.model.parsers.WeChatJsonParser>;
						public parse(param0: org.json.JSONObject): com.stripe.android.model.WeChat;
						public constructor();
						public parse(param0: org.json.JSONObject): any;
					}
					export module WeChatJsonParser {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.parsers.WeChatJsonParser.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module wallets {
					export abstract class Wallet extends com.stripe.android.model.StripeModel {
						public static class: java.lang.Class<com.stripe.android.model.wallets.Wallet>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getWalletType$stripe_release(): com.stripe.android.model.wallets.Wallet.Type;
					}
					export module Wallet {
						export class AmexExpressCheckoutWallet extends com.stripe.android.model.wallets.Wallet {
							public static class: java.lang.Class<com.stripe.android.model.wallets.Wallet.AmexExpressCheckoutWallet>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: string);
							public describeContents(): number;
							public copy(param0: string): com.stripe.android.model.wallets.Wallet.AmexExpressCheckoutWallet;
							public toString(): string;
							public equals(param0: any): boolean;
							public getDynamicLast4(): string;
							public component1(): string;
						}
						export module AmexExpressCheckoutWallet {
							export class Creator {
								public static class: java.lang.Class<com.stripe.android.model.wallets.Wallet.AmexExpressCheckoutWallet.Creator>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): native.Array<any>;
								public constructor();
							}
						}
						export class ApplePayWallet extends com.stripe.android.model.wallets.Wallet {
							public static class: java.lang.Class<com.stripe.android.model.wallets.Wallet.ApplePayWallet>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: string);
							public describeContents(): number;
							public copy(param0: string): com.stripe.android.model.wallets.Wallet.ApplePayWallet;
							public toString(): string;
							public equals(param0: any): boolean;
							public getDynamicLast4(): string;
							public component1(): string;
						}
						export module ApplePayWallet {
							export class Creator {
								public static class: java.lang.Class<com.stripe.android.model.wallets.Wallet.ApplePayWallet.Creator>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): native.Array<any>;
								public constructor();
							}
						}
						export class GooglePayWallet extends com.stripe.android.model.wallets.Wallet {
							public static class: java.lang.Class<com.stripe.android.model.wallets.Wallet.GooglePayWallet>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: string);
							public copy(param0: string): com.stripe.android.model.wallets.Wallet.GooglePayWallet;
							public describeContents(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public getDynamicLast4(): string;
							public component1(): string;
						}
						export module GooglePayWallet {
							export class Creator {
								public static class: java.lang.Class<com.stripe.android.model.wallets.Wallet.GooglePayWallet.Creator>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): native.Array<any>;
								public constructor();
							}
						}
						export class MasterpassWallet extends com.stripe.android.model.wallets.Wallet {
							public static class: java.lang.Class<com.stripe.android.model.wallets.Wallet.MasterpassWallet>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator;
							public component2(): string;
							public getBillingAddress(): com.stripe.android.model.Address;
							public component4(): com.stripe.android.model.Address;
							public hashCode(): number;
							public getShippingAddress(): com.stripe.android.model.Address;
							public constructor(param0: com.stripe.android.model.Address, param1: string, param2: string, param3: com.stripe.android.model.Address);
							public component1(): com.stripe.android.model.Address;
							public toString(): string;
							public component3(): string;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public copy(param0: com.stripe.android.model.Address, param1: string, param2: string, param3: com.stripe.android.model.Address): com.stripe.android.model.wallets.Wallet.MasterpassWallet;
							public getEmail(): string;
							public getName(): string;
							public describeContents(): number;
							public equals(param0: any): boolean;
						}
						export module MasterpassWallet {
							export class Creator {
								public static class: java.lang.Class<com.stripe.android.model.wallets.Wallet.MasterpassWallet.Creator>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): native.Array<any>;
								public constructor();
							}
						}
						export class SamsungPayWallet extends com.stripe.android.model.wallets.Wallet {
							public static class: java.lang.Class<com.stripe.android.model.wallets.Wallet.SamsungPayWallet>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: string);
							public describeContents(): number;
							public copy(param0: string): com.stripe.android.model.wallets.Wallet.SamsungPayWallet;
							public toString(): string;
							public equals(param0: any): boolean;
							public getDynamicLast4(): string;
							public component1(): string;
						}
						export module SamsungPayWallet {
							export class Creator {
								public static class: java.lang.Class<com.stripe.android.model.wallets.Wallet.SamsungPayWallet.Creator>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): native.Array<any>;
								public constructor();
							}
						}
						export class Type {
							public static class: java.lang.Class<com.stripe.android.model.wallets.Wallet.Type>;
							public static AmexExpressCheckout: com.stripe.android.model.wallets.Wallet.Type;
							public static ApplePay: com.stripe.android.model.wallets.Wallet.Type;
							public static GooglePay: com.stripe.android.model.wallets.Wallet.Type;
							public static Masterpass: com.stripe.android.model.wallets.Wallet.Type;
							public static SamsungPay: com.stripe.android.model.wallets.Wallet.Type;
							public static VisaCheckout: com.stripe.android.model.wallets.Wallet.Type;
							public static Companion: com.stripe.android.model.wallets.Wallet.Type.Companion;
							public getCode(): string;
							public static valueOf(param0: string): com.stripe.android.model.wallets.Wallet.Type;
							public static values(): native.Array<com.stripe.android.model.wallets.Wallet.Type>;
						}
						export module Type {
							export class Companion {
								public static class: java.lang.Class<com.stripe.android.model.wallets.Wallet.Type.Companion>;
								public fromCode$stripe_release(param0: string): com.stripe.android.model.wallets.Wallet.Type;
							}
						}
						export class VisaCheckoutWallet extends com.stripe.android.model.wallets.Wallet {
							public static class: java.lang.Class<com.stripe.android.model.wallets.Wallet.VisaCheckoutWallet>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator;
							public component2(): string;
							public getBillingAddress(): com.stripe.android.model.Address;
							public component4(): com.stripe.android.model.Address;
							public hashCode(): number;
							public getShippingAddress(): com.stripe.android.model.Address;
							public component1(): com.stripe.android.model.Address;
							public toString(): string;
							public component5(): string;
							public getDynamicLast4(): string;
							public component3(): string;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: com.stripe.android.model.Address, param1: string, param2: string, param3: com.stripe.android.model.Address, param4: string);
							public copy(param0: com.stripe.android.model.Address, param1: string, param2: string, param3: com.stripe.android.model.Address, param4: string): com.stripe.android.model.wallets.Wallet.VisaCheckoutWallet;
							public getEmail(): string;
							public getName(): string;
							public describeContents(): number;
							public equals(param0: any): boolean;
						}
						export module VisaCheckoutWallet {
							export class Creator {
								public static class: java.lang.Class<com.stripe.android.model.wallets.Wallet.VisaCheckoutWallet.Creator>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): native.Array<any>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module paymentsheet {
				export class PaymentSheet {
					public static class: java.lang.Class<com.stripe.android.paymentsheet.PaymentSheet>;
					public getEphemeralKey(): string;
					public confirm(param0: androidx.activity.ComponentActivity, param1: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
					public getCustomerId(): string;
					public constructor(param0: string, param1: string, param2: string);
					public getClientSecret(): string;
				}
				export module PaymentSheet {
					export abstract class CompletionStatus {
						public static class: java.lang.Class<com.stripe.android.paymentsheet.PaymentSheet.CompletionStatus>;
					}
					export module CompletionStatus {
						export class Cancelled extends com.stripe.android.paymentsheet.PaymentSheet.CompletionStatus {
							public static class: java.lang.Class<com.stripe.android.paymentsheet.PaymentSheet.CompletionStatus.Cancelled>;
							public static INSTANCE: com.stripe.android.paymentsheet.PaymentSheet.CompletionStatus.Cancelled;
						}
						export class Failed extends com.stripe.android.paymentsheet.PaymentSheet.CompletionStatus {
							public static class: java.lang.Class<com.stripe.android.paymentsheet.PaymentSheet.CompletionStatus.Failed>;
							public getError(): java.lang.Throwable;
							public hashCode(): number;
							public constructor(param0: java.lang.Throwable);
							public toString(): string;
							public copy(param0: java.lang.Throwable): com.stripe.android.paymentsheet.PaymentSheet.CompletionStatus.Failed;
							public equals(param0: any): boolean;
							public component1(): java.lang.Throwable;
						}
						export class Succeeded extends com.stripe.android.paymentsheet.PaymentSheet.CompletionStatus {
							public static class: java.lang.Class<com.stripe.android.paymentsheet.PaymentSheet.CompletionStatus.Succeeded>;
							public static INSTANCE: com.stripe.android.paymentsheet.PaymentSheet.CompletionStatus.Succeeded;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module paymentsheet {
				export class PaymentSheetActivity {
					public static class: java.lang.Class<com.stripe.android.paymentsheet.PaymentSheetActivity>;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public onBackPressed(): void;
					public constructor();
					public finish(): void;
				}
				export module PaymentSheetActivity {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.paymentsheet.PaymentSheetActivity.Companion>;
					}
					export class WhenMappings {
						public static class: java.lang.Class<com.stripe.android.paymentsheet.PaymentSheetActivity.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module paymentsheet {
				export class PaymentSheetActivityStarter extends com.stripe.android.view.ActivityStarter<com.stripe.android.paymentsheet.PaymentSheetActivity,com.stripe.android.paymentsheet.PaymentSheetActivityStarter.Args> {
					public static class: java.lang.Class<com.stripe.android.paymentsheet.PaymentSheetActivityStarter>;
					public static REQUEST_CODE: number;
					public static Companion: com.stripe.android.paymentsheet.PaymentSheetActivityStarter.Companion;
					public constructor(param0: androidx.fragment.app.Fragment, param1: java.lang.Class<any>, param2: number);
					public constructor(param0: globalAndroid.app.Activity, param1: java.lang.Class<any>, param2: number);
					public constructor(param0: globalAndroid.app.Activity, param1: androidx.fragment.app.Fragment, param2: java.lang.Class<any>, param3: number);
					public constructor(param0: globalAndroid.app.Activity);
				}
				export module PaymentSheetActivityStarter {
					export class Args extends com.stripe.android.view.ActivityStarter.Args {
						public static class: java.lang.Class<com.stripe.android.paymentsheet.PaymentSheetActivityStarter.Args>;
						public static Companion: com.stripe.android.paymentsheet.PaymentSheetActivityStarter.Args.Companion;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public component3(): string;
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getCustomerId(): string;
						public toString(): string;
						public getEphemeralKey(): string;
						public copy(param0: string, param1: string, param2: string): com.stripe.android.paymentsheet.PaymentSheetActivityStarter.Args;
						public constructor(param0: string, param1: string, param2: string);
						public component2(): string;
						public getClientSecret(): string;
					}
					export module Args {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.paymentsheet.PaymentSheetActivityStarter.Args.Companion>;
							public fromIntent$stripe_release(param0: globalAndroid.content.Intent): com.stripe.android.paymentsheet.PaymentSheetActivityStarter.Args;
						}
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.paymentsheet.PaymentSheetActivityStarter.Args.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.paymentsheet.PaymentSheetActivityStarter.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module paymentsheet {
				export class PaymentSheetAddCardFragment {
					public static class: java.lang.Class<com.stripe.android.paymentsheet.PaymentSheetAddCardFragment>;
					public constructor();
					public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module paymentsheet {
				export class PaymentSheetPaymentMethodsAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<androidx.recyclerview.widget.RecyclerView.ViewHolder> {
					public static class: java.lang.Class<com.stripe.android.paymentsheet.PaymentSheetPaymentMethodsAdapter>;
					public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
					public getItemCount(): number;
					public constructor(param0: java.util.List<com.stripe.android.model.PaymentMethod>, param1: com.stripe.android.paymentsheet.model.PaymentSelection, param2: kotlin.jvm.functions.Function1<any,kotlin.Unit>, param3: globalAndroid.view.View.OnClickListener);
					public getItemViewType(param0: number): number;
					public getAddCardClickListener(): globalAndroid.view.View.OnClickListener;
					public getPaymentMethodSelectedListener(): kotlin.jvm.functions.Function1<com.stripe.android.paymentsheet.model.PaymentSelection,kotlin.Unit>;
					public getItemId(param0: number): number;
					public onBindViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number): void;
					public getPaymentMethods(): java.util.List<com.stripe.android.model.PaymentMethod>;
				}
				export module PaymentSheetPaymentMethodsAdapter {
					export class AddCardViewHolder {
						public static class: java.lang.Class<com.stripe.android.paymentsheet.PaymentSheetPaymentMethodsAdapter.AddCardViewHolder>;
						public constructor(param0: globalAndroid.view.ViewGroup);
					}
					export class CardViewHolder {
						public static class: java.lang.Class<com.stripe.android.paymentsheet.PaymentSheetPaymentMethodsAdapter.CardViewHolder>;
						public constructor(param0: com.stripe.android.databinding.LayoutPaymentsheetPaymentMethodItemBinding);
						public constructor(param0: globalAndroid.view.ViewGroup);
						public setPaymentMethod(param0: com.stripe.android.model.PaymentMethod): void;
						public setSelected(param0: boolean): void;
					}
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.paymentsheet.PaymentSheetPaymentMethodsAdapter.Companion>;
					}
					export class ViewType {
						public static class: java.lang.Class<com.stripe.android.paymentsheet.PaymentSheetPaymentMethodsAdapter.ViewType>;
						public static Card: com.stripe.android.paymentsheet.PaymentSheetPaymentMethodsAdapter.ViewType;
						public static AddCard: com.stripe.android.paymentsheet.PaymentSheetPaymentMethodsAdapter.ViewType;
						public static GooglePay: com.stripe.android.paymentsheet.PaymentSheetPaymentMethodsAdapter.ViewType;
						public static valueOf(param0: string): com.stripe.android.paymentsheet.PaymentSheetPaymentMethodsAdapter.ViewType;
						public static values(): native.Array<com.stripe.android.paymentsheet.PaymentSheetPaymentMethodsAdapter.ViewType>;
					}
					export class WhenMappings {
						public static class: java.lang.Class<com.stripe.android.paymentsheet.PaymentSheetPaymentMethodsAdapter.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module paymentsheet {
				export class PaymentSheetPaymentMethodsListFragment {
					public static class: java.lang.Class<com.stripe.android.paymentsheet.PaymentSheetPaymentMethodsListFragment>;
					public constructor();
					public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
				}
				export module PaymentSheetPaymentMethodsListFragment {
					export class VM {
						public static class: java.lang.Class<com.stripe.android.paymentsheet.PaymentSheetPaymentMethodsListFragment.VM>;
						public setSelectedPaymentMethod$stripe_release(param0: com.stripe.android.paymentsheet.model.PaymentSelection): void;
						public constructor();
						public getSelectedPaymentMethod$stripe_release(): com.stripe.android.paymentsheet.model.PaymentSelection;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module paymentsheet {
				export class PaymentSheetViewModel {
					public static class: java.lang.Class<com.stripe.android.paymentsheet.PaymentSheetViewModel>;
					public updatePaymentMethods(param0: globalAndroid.content.Intent): void;
					public updateSelection(param0: com.stripe.android.paymentsheet.model.PaymentSelection): void;
					public setPaymentMethods$stripe_release(param0: java.util.List<com.stripe.android.model.PaymentMethod>): void;
					public constructor(param0: globalAndroid.app.Application, param1: string, param2: string, param3: com.stripe.android.StripeRepository, param4: kotlin.coroutines.CoroutineContext);
					public getTransition$stripe_release(): androidx.lifecycle.LiveData<com.stripe.android.paymentsheet.PaymentSheetViewModel.TransitionTarget>;
					public getPaymentMethods$stripe_release(): androidx.lifecycle.LiveData<java.util.List<com.stripe.android.model.PaymentMethod>>;
					public getError$stripe_release(): androidx.lifecycle.LiveData<java.lang.Throwable>;
					public onError(param0: java.lang.Throwable): void;
					public getSelection$stripe_release(): androidx.lifecycle.LiveData<com.stripe.android.paymentsheet.model.PaymentSelection>;
					public transitionTo(param0: com.stripe.android.paymentsheet.PaymentSheetViewModel.TransitionTarget): void;
				}
				export module PaymentSheetViewModel {
					export class Factory {
						public static class: java.lang.Class<com.stripe.android.paymentsheet.PaymentSheetViewModel.Factory>;
						public create(param0: java.lang.Class): androidx.lifecycle.ViewModel;
						public constructor(param0: globalAndroid.app.Application);
					}
					export class TransitionTarget {
						public static class: java.lang.Class<com.stripe.android.paymentsheet.PaymentSheetViewModel.TransitionTarget>;
						public static AddCard: com.stripe.android.paymentsheet.PaymentSheetViewModel.TransitionTarget;
						public static values(): native.Array<com.stripe.android.paymentsheet.PaymentSheetViewModel.TransitionTarget>;
						public static valueOf(param0: string): com.stripe.android.paymentsheet.PaymentSheetViewModel.TransitionTarget;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module paymentsheet {
				export module model {
					export abstract class PaymentSelection {
						public static class: java.lang.Class<com.stripe.android.paymentsheet.model.PaymentSelection>;
					}
					export module PaymentSelection {
						export class GooglePay extends com.stripe.android.paymentsheet.model.PaymentSelection {
							public static class: java.lang.Class<com.stripe.android.paymentsheet.model.PaymentSelection.GooglePay>;
							public static INSTANCE: com.stripe.android.paymentsheet.model.PaymentSelection.GooglePay;
						}
						export class New extends com.stripe.android.paymentsheet.model.PaymentSelection {
							public static class: java.lang.Class<com.stripe.android.paymentsheet.model.PaymentSelection.New>;
							public component1(): com.stripe.android.model.PaymentMethodCreateParams;
							public hashCode(): number;
							public copy(param0: com.stripe.android.model.PaymentMethodCreateParams): com.stripe.android.paymentsheet.model.PaymentSelection.New;
							public getPaymentMethodCreateParams(): com.stripe.android.model.PaymentMethodCreateParams;
							public toString(): string;
							public equals(param0: any): boolean;
							public constructor(param0: com.stripe.android.model.PaymentMethodCreateParams);
						}
						export class Saved extends com.stripe.android.paymentsheet.model.PaymentSelection {
							public static class: java.lang.Class<com.stripe.android.paymentsheet.model.PaymentSelection.Saved>;
							public hashCode(): number;
							public constructor(param0: string);
							public copy(param0: string): com.stripe.android.paymentsheet.model.PaymentSelection.Saved;
							public toString(): string;
							public getPaymentMethodId(): string;
							public equals(param0: any): boolean;
							public component1(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module utils {
				export class ClassUtils {
					public static class: java.lang.Class<com.stripe.android.utils.ClassUtils>;
					public static INSTANCE: com.stripe.android.utils.ClassUtils;
					public static findField(param0: java.lang.Class<any>, param1: java.util.Collection<string>): java.lang.reflect.Field;
					public static getInternalObject(param0: java.lang.Class<any>, param1: java.util.Set<string>, param2: any): any;
					public static findMethod(param0: java.lang.Class<any>, param1: java.util.Collection<string>): java.lang.reflect.Method;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module utils {
				export class ContextUtils {
					public static class: java.lang.Class<com.stripe.android.utils.ContextUtils>;
					public static INSTANCE: com.stripe.android.utils.ContextUtils;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module utils {
				export abstract class Either<A, B>  extends java.lang.Object {
					public static class: java.lang.Class<com.stripe.android.utils.Either<any,any>>;
				}
				export module Either {
					export class Left<A, B>  extends com.stripe.android.utils.Either<any,any> {
						public static class: java.lang.Class<com.stripe.android.utils.Either.Left<any,any>>;
						public copy(param0: any): com.stripe.android.utils.Either.Left<any,any>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public component1(): any;
						public constructor(param0: any);
						public toString(): string;
						public getLeft(): any;
					}
					export class Right<A, B>  extends com.stripe.android.utils.Either<any,any> {
						public static class: java.lang.Class<com.stripe.android.utils.Either.Right<any,any>>;
						public copy(param0: any): com.stripe.android.utils.Either.Right<any,any>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public component1(): any;
						public constructor(param0: any);
						public getRight(): any;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module utils {
				export class StripeUrlUtils {
					public static class: java.lang.Class<com.stripe.android.utils.StripeUrlUtils>;
					public static INSTANCE: com.stripe.android.utils.StripeUrlUtils;
					public isStripeUrl$stripe_release(param0: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export abstract class ActivityStarter<TargetActivityType, ArgsType>  extends java.lang.Object {
					public static class: java.lang.Class<com.stripe.android.view.ActivityStarter<any,any>>;
					public startForResult(param0: ArgsType): void;
					public constructor(param0: androidx.fragment.app.Fragment, param1: java.lang.Class<TargetActivityType>, param2: number);
					public constructor(param0: globalAndroid.app.Activity, param1: androidx.fragment.app.Fragment, param2: java.lang.Class<TargetActivityType>, param3: number);
					public constructor(param0: globalAndroid.app.Activity, param1: java.lang.Class<TargetActivityType>, param2: number);
				}
				export module ActivityStarter {
					export class Args {
						public static class: java.lang.Class<com.stripe.android.view.ActivityStarter.Args>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.ActivityStarter$Args interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							<clinit>(): void;
						});
						public constructor();
						public static Companion: com.stripe.android.view.ActivityStarter.Args.Companion;
						public static EXTRA: string;
					}
					export module Args {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.view.ActivityStarter.Args.Companion>;
							public static EXTRA: string;
						}
					}
					export class Result {
						public static class: java.lang.Class<com.stripe.android.view.ActivityStarter.Result>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.ActivityStarter$Result interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							toBundle(): globalAndroid.os.Bundle;
							<clinit>(): void;
						});
						public constructor();
						public static EXTRA: string;
						public static Companion: com.stripe.android.view.ActivityStarter.Result.Companion;
						public toBundle(): globalAndroid.os.Bundle;
					}
					export module Result {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.view.ActivityStarter.Result.Companion>;
							public static EXTRA: string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class AddPaymentMethodActivity extends com.stripe.android.view.StripeActivity {
					public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodActivity>;
					public static PRODUCT_TOKEN: string;
					public static Companion: com.stripe.android.view.AddPaymentMethodActivity.Companion;
					public onActionSave(): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor();
					public createPaymentMethod$stripe_release(param0: com.stripe.android.view.AddPaymentMethodViewModel, param1: com.stripe.android.model.PaymentMethodCreateParams): void;
					public onProgressBarVisibilityChanged(param0: boolean): void;
					public onResume(): void;
				}
				export module AddPaymentMethodActivity {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodActivity.Companion>;
					}
					export class WhenMappings {
						public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodActivity.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class AddPaymentMethodActivityStarter extends com.stripe.android.view.ActivityStarter<com.stripe.android.view.AddPaymentMethodActivity,com.stripe.android.view.AddPaymentMethodActivityStarter.Args> {
					public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodActivityStarter>;
					public static REQUEST_CODE: number;
					public static Companion: com.stripe.android.view.AddPaymentMethodActivityStarter.Companion;
					public constructor(param0: androidx.fragment.app.Fragment, param1: java.lang.Class<any>, param2: number);
					public constructor(param0: androidx.fragment.app.Fragment);
					public constructor(param0: globalAndroid.app.Activity, param1: java.lang.Class<any>, param2: number);
					public constructor(param0: globalAndroid.app.Activity, param1: androidx.fragment.app.Fragment, param2: java.lang.Class<any>, param3: number);
					public constructor(param0: globalAndroid.app.Activity);
				}
				export module AddPaymentMethodActivityStarter {
					export class Args extends com.stripe.android.view.ActivityStarter.Args {
						public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodActivityStarter.Args>;
						public static Companion: com.stripe.android.view.AddPaymentMethodActivityStarter.Args.Companion;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public component5$stripe_release(): com.stripe.android.PaymentConfiguration;
						public component2$stripe_release(): boolean;
						public describeContents(): number;
						public getBillingAddressFields$stripe_release(): com.stripe.android.view.BillingAddressFields;
						public component7$stripe_release(): java.lang.Integer;
						public getPaymentMethodType$stripe_release(): com.stripe.android.model.PaymentMethod.Type;
						public component1$stripe_release(): com.stripe.android.view.BillingAddressFields;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public isPaymentSessionActive$stripe_release(): boolean;
						public getWindowFlags$stripe_release(): java.lang.Integer;
						public toString(): string;
						public getShouldAttachToCustomer$stripe_release(): boolean;
						public component3$stripe_release(): boolean;
						public getAddPaymentMethodFooterLayoutId$stripe_release(): number;
						public getPaymentConfiguration$stripe_release(): com.stripe.android.PaymentConfiguration;
						public component4$stripe_release(): com.stripe.android.model.PaymentMethod.Type;
						public copy(param0: com.stripe.android.view.BillingAddressFields, param1: boolean, param2: boolean, param3: com.stripe.android.model.PaymentMethod.Type, param4: com.stripe.android.PaymentConfiguration, param5: number, param6: java.lang.Integer): com.stripe.android.view.AddPaymentMethodActivityStarter.Args;
						public component6$stripe_release(): number;
						public constructor(param0: com.stripe.android.view.BillingAddressFields, param1: boolean, param2: boolean, param3: com.stripe.android.model.PaymentMethod.Type, param4: com.stripe.android.PaymentConfiguration, param5: number, param6: java.lang.Integer);
					}
					export module Args {
						export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.view.AddPaymentMethodActivityStarter.Args> {
							public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodActivityStarter.Args.Builder>;
							public setPaymentMethodType(param0: com.stripe.android.model.PaymentMethod.Type): com.stripe.android.view.AddPaymentMethodActivityStarter.Args.Builder;
							public constructor();
							public setShouldAttachToCustomer(param0: boolean): com.stripe.android.view.AddPaymentMethodActivityStarter.Args.Builder;
							public setWindowFlags(param0: java.lang.Integer): com.stripe.android.view.AddPaymentMethodActivityStarter.Args.Builder;
							public build(): any;
							public build(): com.stripe.android.view.AddPaymentMethodActivityStarter.Args;
							public setBillingAddressFields(param0: com.stripe.android.view.BillingAddressFields): com.stripe.android.view.AddPaymentMethodActivityStarter.Args.Builder;
							public setAddPaymentMethodFooter(param0: number): com.stripe.android.view.AddPaymentMethodActivityStarter.Args.Builder;
						}
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodActivityStarter.Args.Companion>;
						}
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodActivityStarter.Args.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodActivityStarter.Companion>;
					}
					export abstract class Result extends com.stripe.android.view.ActivityStarter.Result {
						public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodActivityStarter.Result>;
						public static Companion: com.stripe.android.view.AddPaymentMethodActivityStarter.Result.Companion;
						public static fromIntent(param0: globalAndroid.content.Intent): com.stripe.android.view.AddPaymentMethodActivityStarter.Result;
						public toBundle(): globalAndroid.os.Bundle;
					}
					export module Result {
						export class Canceled extends com.stripe.android.view.AddPaymentMethodActivityStarter.Result {
							public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodActivityStarter.Result.Canceled>;
							public static INSTANCE: com.stripe.android.view.AddPaymentMethodActivityStarter.Result.Canceled;
							public static CREATOR: globalAndroid.os.Parcelable.Creator;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public describeContents(): number;
							public toBundle(): globalAndroid.os.Bundle;
						}
						export module Canceled {
							export class Creator {
								public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodActivityStarter.Result.Canceled.Creator>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): native.Array<any>;
								public constructor();
							}
						}
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodActivityStarter.Result.Companion>;
							public fromIntent(param0: globalAndroid.content.Intent): com.stripe.android.view.AddPaymentMethodActivityStarter.Result;
						}
						export class Failure extends com.stripe.android.view.AddPaymentMethodActivityStarter.Result {
							public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodActivityStarter.Result.Failure>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator;
							public getException(): java.lang.Throwable;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: java.lang.Throwable);
							public describeContents(): number;
							public toString(): string;
							public toBundle(): globalAndroid.os.Bundle;
							public copy(param0: java.lang.Throwable): com.stripe.android.view.AddPaymentMethodActivityStarter.Result.Failure;
							public equals(param0: any): boolean;
							public component1(): java.lang.Throwable;
						}
						export module Failure {
							export class Creator {
								public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodActivityStarter.Result.Failure.Creator>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): native.Array<any>;
								public constructor();
							}
						}
						export class Success extends com.stripe.android.view.AddPaymentMethodActivityStarter.Result {
							public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodActivityStarter.Result.Success>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: com.stripe.android.model.PaymentMethod);
							public hashCode(): number;
							public describeContents(): number;
							public getPaymentMethod(): com.stripe.android.model.PaymentMethod;
							public copy(param0: com.stripe.android.model.PaymentMethod): com.stripe.android.view.AddPaymentMethodActivityStarter.Result.Success;
							public component1(): com.stripe.android.model.PaymentMethod;
							public toString(): string;
							public toBundle(): globalAndroid.os.Bundle;
							public equals(param0: any): boolean;
						}
						export module Success {
							export class Creator {
								public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodActivityStarter.Result.Success.Creator>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): native.Array<any>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class AddPaymentMethodCardView extends com.stripe.android.view.AddPaymentMethodView {
					public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodCardView>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public setCommunicatingProgress(param0: boolean): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: com.stripe.android.view.BillingAddressFields);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getCreateParams(): com.stripe.android.model.PaymentMethodCreateParams;
				}
				export module AddPaymentMethodCardView {
					export class OnEditorActionListenerImpl {
						public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodCardView.OnEditorActionListenerImpl>;
						public constructor(param0: com.stripe.android.view.AddPaymentMethodActivity, param1: com.stripe.android.view.AddPaymentMethodCardView, param2: com.stripe.android.view.KeyboardController);
						public onEditorAction(param0: globalAndroid.widget.TextView, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
					}
					export class WhenMappings {
						public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodCardView.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class AddPaymentMethodFpxView extends com.stripe.android.view.AddPaymentMethodView {
					public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodFpxView>;
					public static Companion: com.stripe.android.view.AddPaymentMethodFpxView.Companion;
					public constructor(param0: androidx.fragment.app.FragmentActivity, param1: globalAndroid.util.AttributeSet, param2: number);
					public constructor(param0: androidx.fragment.app.FragmentActivity, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: androidx.fragment.app.FragmentActivity);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getCreateParams(): com.stripe.android.model.PaymentMethodCreateParams;
				}
				export module AddPaymentMethodFpxView {
					export class Adapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.stripe.android.view.AddPaymentMethodFpxView.Adapter.ViewHolder> {
						public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodFpxView.Adapter>;
						public getSelectedBank$stripe_release(): com.stripe.android.view.FpxBank;
						public constructor(param0: com.stripe.android.view.ThemeConfig, param1: kotlin.jvm.functions.Function1<any,kotlin.Unit>);
						public updateStatuses$stripe_release(param0: com.stripe.android.model.FpxBankStatuses): void;
						public getSelectedPosition(): number;
						public getItemId(param0: number): number;
						public getItemCount(): number;
						public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.stripe.android.view.AddPaymentMethodFpxView.Adapter.ViewHolder;
						public setSelectedPosition(param0: number): void;
						public onBindViewHolder(param0: com.stripe.android.view.AddPaymentMethodFpxView.Adapter.ViewHolder, param1: number): void;
						public updateSelected$stripe_release(param0: number): void;
					}
					export module Adapter {
						export class ViewHolder {
							public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodFpxView.Adapter.ViewHolder>;
							public constructor(param0: com.stripe.android.databinding.FpxBankItemBinding, param1: com.stripe.android.view.ThemeConfig);
							public update$stripe_release(param0: com.stripe.android.view.FpxBank, param1: boolean): void;
							public setSelected$stripe_release(param0: boolean): void;
						}
					}
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodFpxView.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class AddPaymentMethodRowView {
					public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodRowView>;
					public static Companion: com.stripe.android.view.AddPaymentMethodRowView.Companion;
					public onAttachedToWindow(): void;
				}
				export module AddPaymentMethodRowView {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodRowView.Companion>;
						public createFpx$stripe_release(param0: globalAndroid.app.Activity, param1: com.stripe.android.view.PaymentMethodsActivityStarter.Args): com.stripe.android.view.AddPaymentMethodRowView;
						public createCard$stripe_release(param0: globalAndroid.app.Activity, param1: com.stripe.android.view.PaymentMethodsActivityStarter.Args): com.stripe.android.view.AddPaymentMethodRowView;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export abstract class AddPaymentMethodView {
					public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodView>;
					public setCommunicatingProgress(param0: boolean): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getCreateParams(): com.stripe.android.model.PaymentMethodCreateParams;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class AddPaymentMethodViewModel {
					public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodViewModel>;
					public constructor(param0: com.stripe.android.Stripe, param1: com.stripe.android.view.AddPaymentMethodActivityStarter.Args, param2: com.stripe.android.view.i18n.ErrorMessageTranslator);
					public createPaymentMethod$stripe_release(param0: com.stripe.android.model.PaymentMethodCreateParams): androidx.lifecycle.LiveData<kotlin.Result<com.stripe.android.model.PaymentMethod>>;
					public updatedPaymentMethodCreateParams$stripe_release(param0: com.stripe.android.model.PaymentMethodCreateParams): com.stripe.android.model.PaymentMethodCreateParams;
				}
				export module AddPaymentMethodViewModel {
					export class Factory {
						public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodViewModel.Factory>;
						public create(param0: java.lang.Class): androidx.lifecycle.ViewModel;
						public constructor(param0: com.stripe.android.Stripe, param1: com.stripe.android.view.AddPaymentMethodActivityStarter.Args);
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class AlertDisplayer {
					public static class: java.lang.Class<com.stripe.android.view.AlertDisplayer>;
					/**
					 * Constructs a new instance of the com.stripe.android.view.AlertDisplayer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						show(param0: string): void;
					});
					public constructor();
					public show(param0: string): void;
				}
				export module AlertDisplayer {
					export class DefaultAlertDisplayer extends com.stripe.android.view.AlertDisplayer {
						public static class: java.lang.Class<com.stripe.android.view.AlertDisplayer.DefaultAlertDisplayer>;
						public constructor(param0: globalAndroid.app.Activity);
						public show(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class AuthActivityStarter<ArgsType>  extends java.lang.Object {
					public static class: java.lang.Class<com.stripe.android.view.AuthActivityStarter<any>>;
					/**
					 * Constructs a new instance of the com.stripe.android.view.AuthActivityStarter<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						start(param0: ArgsType): void;
					});
					public constructor();
					public start(param0: ArgsType): void;
				}
				export module AuthActivityStarter {
					export class Host {
						public static class: java.lang.Class<com.stripe.android.view.AuthActivityStarter.Host>;
						public static Companion: com.stripe.android.view.AuthActivityStarter.Host.Companion;
						public getFragment$stripe_release(): androidx.fragment.app.Fragment;
						public startActivityForResult$stripe_release(param0: java.lang.Class<any>, param1: globalAndroid.os.Bundle, param2: number): void;
						public getActivity$stripe_release(): globalAndroid.app.Activity;
					}
					export module Host {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.view.AuthActivityStarter.Host.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class BackUpFieldDeleteListener extends com.stripe.android.view.StripeEditText.DeleteEmptyListener {
					public static class: java.lang.Class<com.stripe.android.view.BackUpFieldDeleteListener>;
					public onDeleteEmpty(): void;
					public constructor(param0: com.stripe.android.view.StripeEditText);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class BecsDebitAccountNumberEditText extends com.stripe.android.view.StripeEditText {
					public static class: java.lang.Class<com.stripe.android.view.BecsDebitAccountNumberEditText>;
					public static DEFAULT_MIN_LENGTH: number;
					public static Companion: com.stripe.android.view.BecsDebitAccountNumberEditText.Companion;
					public setMinLength(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: kotlin.coroutines.CoroutineContext);
					public getMinLength(): number;
					public getAccountNumber(): string;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
				export module BecsDebitAccountNumberEditText {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.view.BecsDebitAccountNumberEditText.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class BecsDebitBanks {
					public static class: java.lang.Class<com.stripe.android.view.BecsDebitBanks>;
					public getBanks$stripe_release(): java.util.List<com.stripe.android.view.BecsDebitBanks.Bank>;
					public constructor(param0: globalAndroid.content.Context, param1: boolean);
					public byPrefix(param0: string): com.stripe.android.view.BecsDebitBanks.Bank;
					public constructor(param0: java.util.List<com.stripe.android.view.BecsDebitBanks.Bank>, param1: boolean);
				}
				export module BecsDebitBanks {
					export class Bank {
						public static class: java.lang.Class<com.stripe.android.view.BecsDebitBanks.Bank>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public getCode$stripe_release(): string;
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component1$stripe_release(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getName$stripe_release(): string;
						public toString(): string;
						public copy(param0: string, param1: string, param2: string): com.stripe.android.view.BecsDebitBanks.Bank;
						public constructor(param0: string, param1: string, param2: string);
						public getPrefix$stripe_release(): string;
						public component3$stripe_release(): string;
						public component2$stripe_release(): string;
					}
					export module Bank {
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.view.BecsDebitBanks.Bank.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.view.BecsDebitBanks.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class BecsDebitBsbEditText extends com.stripe.android.view.StripeEditText {
					public static class: java.lang.Class<com.stripe.android.view.BecsDebitBsbEditText>;
					public getBsb$stripe_release(): string;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: kotlin.coroutines.CoroutineContext);
					public setOnCompletedCallback(param0: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
					public getOnBankChangedCallback(): kotlin.jvm.functions.Function1<com.stripe.android.view.BecsDebitBanks.Bank,kotlin.Unit>;
					public getOnCompletedCallback(): kotlin.jvm.functions.Function0<kotlin.Unit>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setOnBankChangedCallback(param0: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
				}
				export module BecsDebitBsbEditText {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.view.BecsDebitBsbEditText.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class BecsDebitMandateAcceptanceTextFactory {
					public static class: java.lang.Class<com.stripe.android.view.BecsDebitMandateAcceptanceTextFactory>;
					public constructor(param0: globalAndroid.content.Context);
					public create(param0: string): string;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class BecsDebitMandateAcceptanceTextView {
					public static class: java.lang.Class<com.stripe.android.view.BecsDebitMandateAcceptanceTextView>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public getCompanyName(): string;
					public isValid$stripe_release(): boolean;
					public setCompanyName(param0: string): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class BecsDebitWidget {
					public static class: java.lang.Class<com.stripe.android.view.BecsDebitWidget>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public getParams(): com.stripe.android.model.PaymentMethodCreateParams;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: string);
					public setValidParamsCallback(param0: com.stripe.android.view.BecsDebitWidget.ValidParamsCallback): void;
					public getViewBinding$stripe_release(): com.stripe.android.databinding.BecsDebitWidgetBinding;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getValidParamsCallback(): com.stripe.android.view.BecsDebitWidget.ValidParamsCallback;
				}
				export module BecsDebitWidget {
					export class ValidParamsCallback {
						public static class: java.lang.Class<com.stripe.android.view.BecsDebitWidget.ValidParamsCallback>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.BecsDebitWidget$ValidParamsCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onInputChanged(param0: boolean): void;
						});
						public constructor();
						public onInputChanged(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class BillingAddressFields {
					public static class: java.lang.Class<com.stripe.android.view.BillingAddressFields>;
					public static None: com.stripe.android.view.BillingAddressFields;
					public static PostalCode: com.stripe.android.view.BillingAddressFields;
					public static Full: com.stripe.android.view.BillingAddressFields;
					public static valueOf(param0: string): com.stripe.android.view.BillingAddressFields;
					public static values(): native.Array<com.stripe.android.view.BillingAddressFields>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class CardBrandSpinner {
					public static class: java.lang.Class<com.stripe.android.view.CardBrandSpinner>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public getCardBrand(): com.stripe.android.model.CardBrand;
					public setTintColor(param0: number): void;
					public onFinishInflate(): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
				export module CardBrandSpinner {
					export class Adapter extends globalAndroid.widget.ArrayAdapter<com.stripe.android.model.CardBrand> {
						public static class: java.lang.Class<com.stripe.android.view.CardBrandSpinner.Adapter>;
						public constructor(param0: globalAndroid.content.Context);
						public getTintColor$stripe_release(): number;
						public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
						public setTintColor$stripe_release(param0: number): void;
						public getDropDownView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class CardBrandView {
					public static class: java.lang.Class<com.stripe.android.view.CardBrandView>;
					public setTintColorInt$stripe_release(param0: number): void;
					public isLoading(): boolean;
					public setShouldShowCvc(param0: boolean): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public setBrand(param0: com.stripe.android.model.CardBrand): void;
					public getBrand(): com.stripe.android.model.CardBrand;
					public onWindowFocusChanged(param0: boolean): void;
					public setShouldShowErrorIcon(param0: boolean): void;
					public getTintColorInt$stripe_release(): number;
					public setLoading(param0: boolean): void;
					public getShouldShowErrorIcon(): boolean;
					public getShouldShowCvc(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class CardDisplayTextFactory {
					public static class: java.lang.Class<com.stripe.android.view.CardDisplayTextFactory>;
					public constructor(param0: globalAndroid.content.res.Resources, param1: com.stripe.android.view.ThemeConfig);
					public constructor(param0: globalAndroid.content.Context);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class CardInputListener {
					public static class: java.lang.Class<com.stripe.android.view.CardInputListener>;
					/**
					 * Constructs a new instance of the com.stripe.android.view.CardInputListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onFocusChange(param0: com.stripe.android.view.CardInputListener.FocusField): void;
						onCardComplete(): void;
						onExpirationComplete(): void;
						onCvcComplete(): void;
					});
					public constructor();
					public onCvcComplete(): void;
					public onExpirationComplete(): void;
					public onCardComplete(): void;
					public onFocusChange(param0: com.stripe.android.view.CardInputListener.FocusField): void;
				}
				export module CardInputListener {
					export class FocusField {
						public static class: java.lang.Class<com.stripe.android.view.CardInputListener.FocusField>;
						public static CardNumber: com.stripe.android.view.CardInputListener.FocusField;
						public static ExpiryDate: com.stripe.android.view.CardInputListener.FocusField;
						public static Cvc: com.stripe.android.view.CardInputListener.FocusField;
						public static PostalCode: com.stripe.android.view.CardInputListener.FocusField;
						public static values(): native.Array<com.stripe.android.view.CardInputListener.FocusField>;
						public static valueOf(param0: string): com.stripe.android.view.CardInputListener.FocusField;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class CardInputWidget implements com.stripe.android.view.CardWidget {
					public static class: java.lang.Class<com.stripe.android.view.CardInputWidget>;
					public static LOGGING_TOKEN: string;
					public static Companion: com.stripe.android.view.CardInputWidget.Companion;
					public getLayoutWidthCalculator$stripe_release(): com.stripe.android.view.CardInputWidget.LayoutWidthCalculator;
					public getPostalCodeEditText$stripe_release(): com.stripe.android.view.PostalCodeEditText;
					public getPostalCodeRequired(): boolean;
					public setUsZipCodeRequired(param0: boolean): void;
					public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					/** @deprecated */
					public getCard(): com.stripe.android.model.Card;
					public setPostalCodeRequired(param0: boolean): void;
					public setCardInputListener(param0: com.stripe.android.view.CardInputListener): void;
					public setShowingFullCard$stripe_release(param0: boolean): void;
					public isEnabled(): boolean;
					public getExpiryDateEditText$stripe_release(): com.stripe.android.view.ExpiryDateEditText;
					public getFrameWidthSupplier$stripe_release(): kotlin.jvm.functions.Function0<java.lang.Integer>;
					public getUsZipCodeRequired(): boolean;
					public setEnabled(param0: boolean): void;
					public setCardNumber(param0: string): void;
					public getPostalCodeEnabled(): boolean;
					public getPlacement$stripe_release(): com.stripe.android.view.CardInputWidgetPlacement;
					public setExpiryDate(param0: number, param1: number): void;
					public updateSpaceSizes$stripe_release(param0: boolean, param1: number, param2: number): void;
					public setPostalCodeTextWatcher(param0: globalAndroid.text.TextWatcher): void;
					public isShowingFullCard$stripe_release(): boolean;
					public setCardNumberTextWatcher(param0: globalAndroid.text.TextWatcher): void;
					public setExpiryDateTextWatcher(param0: globalAndroid.text.TextWatcher): void;
					public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					public onSaveInstanceState(): globalAndroid.os.Parcelable;
					public getShouldShowErrorIcon$stripe_release(): boolean;
					public getPaymentMethodCard(): com.stripe.android.model.PaymentMethodCreateParams.Card;
					public setCardHint(param0: string): void;
					public setLayoutWidthCalculator$stripe_release(param0: com.stripe.android.view.CardInputWidget.LayoutWidthCalculator): void;
					public getCardParams(): com.stripe.android.model.CardParams;
					public getRequiredFields$stripe_release(): java.util.List<com.stripe.android.view.StripeEditText>;
					public getCvcEditText$stripe_release(): com.stripe.android.view.CvcEditText;
					public setCvcNumberTextWatcher(param0: globalAndroid.text.TextWatcher): void;
					public setPostalCodeEnabled(param0: boolean): void;
					public clear(): void;
					public setCvcCode(param0: string): void;
					public onFinishInflate(): void;
					public setCardValidCallback(param0: com.stripe.android.view.CardValidCallback): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public constructor(param0: globalAndroid.content.Context);
					public getPaymentMethodCreateParams(): com.stripe.android.model.PaymentMethodCreateParams;
					public createHiddenCardText$stripe_release(param0: number): string;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public getPostalCodeTextInputLayout$stripe_release(): com.google.android.material.textfield.TextInputLayout;
					public getCardBrandView$stripe_release(): com.stripe.android.view.CardBrandView;
					/** @deprecated */
					public getCardBuilder(): com.stripe.android.model.Card.Builder;
					public setFrameWidthSupplier$stripe_release(param0: kotlin.jvm.functions.Function0<java.lang.Integer>): void;
					public getCardNumberEditText$stripe_release(): com.stripe.android.view.CardNumberEditText;
				}
				export module CardInputWidget {
					export abstract class AnimationEndListener {
						public static class: java.lang.Class<com.stripe.android.view.CardInputWidget.AnimationEndListener>;
						public constructor();
						public onAnimationRepeat(param0: globalAndroid.view.animation.Animation): void;
						public onAnimationStart(param0: globalAndroid.view.animation.Animation): void;
					}
					export abstract class CardFieldAnimation {
						public static class: java.lang.Class<com.stripe.android.view.CardInputWidget.CardFieldAnimation>;
						public constructor();
					}
					export module CardFieldAnimation {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.view.CardInputWidget.CardFieldAnimation.Companion>;
						}
					}
					export class CardNumberSlideEndAnimation extends com.stripe.android.view.CardInputWidget.CardFieldAnimation {
						public static class: java.lang.Class<com.stripe.android.view.CardInputWidget.CardNumberSlideEndAnimation>;
						public constructor();
						public constructor(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.View);
						public applyTransformation(param0: number, param1: globalAndroid.view.animation.Transformation): void;
					}
					export class CardNumberSlideStartAnimation extends com.stripe.android.view.CardInputWidget.CardFieldAnimation {
						public static class: java.lang.Class<com.stripe.android.view.CardInputWidget.CardNumberSlideStartAnimation>;
						public constructor();
						public constructor(param0: globalAndroid.view.View);
						public applyTransformation(param0: number, param1: globalAndroid.view.animation.Transformation): void;
					}
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.view.CardInputWidget.Companion>;
						public shouldIconShowBrand$stripe_release(param0: com.stripe.android.model.CardBrand, param1: boolean, param2: string): boolean;
					}
					export class CvcSlideEndAnimation extends com.stripe.android.view.CardInputWidget.CardFieldAnimation {
						public static class: java.lang.Class<com.stripe.android.view.CardInputWidget.CvcSlideEndAnimation>;
						public constructor();
						public constructor(param0: globalAndroid.view.View, param1: number, param2: number, param3: number);
						public applyTransformation(param0: number, param1: globalAndroid.view.animation.Transformation): void;
					}
					export class CvcSlideStartAnimation extends com.stripe.android.view.CardInputWidget.CardFieldAnimation {
						public static class: java.lang.Class<com.stripe.android.view.CardInputWidget.CvcSlideStartAnimation>;
						public constructor();
						public constructor(param0: globalAndroid.view.View, param1: number, param2: number, param3: number);
						public applyTransformation(param0: number, param1: globalAndroid.view.animation.Transformation): void;
					}
					export class DefaultLayoutWidthCalculator extends com.stripe.android.view.CardInputWidget.LayoutWidthCalculator {
						public static class: java.lang.Class<com.stripe.android.view.CardInputWidget.DefaultLayoutWidthCalculator>;
						public constructor();
						public calculate(param0: string, param1: globalAndroid.text.TextPaint): number;
					}
					export class ExpiryDateSlideEndAnimation extends com.stripe.android.view.CardInputWidget.CardFieldAnimation {
						public static class: java.lang.Class<com.stripe.android.view.CardInputWidget.ExpiryDateSlideEndAnimation>;
						public constructor();
						public applyTransformation(param0: number, param1: globalAndroid.view.animation.Transformation): void;
						public constructor(param0: globalAndroid.view.View, param1: number, param2: number);
					}
					export class ExpiryDateSlideStartAnimation extends com.stripe.android.view.CardInputWidget.CardFieldAnimation {
						public static class: java.lang.Class<com.stripe.android.view.CardInputWidget.ExpiryDateSlideStartAnimation>;
						public constructor();
						public applyTransformation(param0: number, param1: globalAndroid.view.animation.Transformation): void;
						public constructor(param0: globalAndroid.view.View, param1: number, param2: number);
					}
					export class Field {
						public static class: java.lang.Class<com.stripe.android.view.CardInputWidget.Field>;
						public static Number: com.stripe.android.view.CardInputWidget.Field;
						public static Expiry: com.stripe.android.view.CardInputWidget.Field;
						public static Cvc: com.stripe.android.view.CardInputWidget.Field;
						public static PostalCode: com.stripe.android.view.CardInputWidget.Field;
						public static values(): native.Array<com.stripe.android.view.CardInputWidget.Field>;
						public static valueOf(param0: string): com.stripe.android.view.CardInputWidget.Field;
					}
					export class LayoutWidthCalculator {
						public static class: java.lang.Class<com.stripe.android.view.CardInputWidget.LayoutWidthCalculator>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.CardInputWidget$LayoutWidthCalculator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							calculate(param0: string, param1: globalAndroid.text.TextPaint): number;
						});
						public constructor();
						public calculate(param0: string, param1: globalAndroid.text.TextPaint): number;
					}
					export class PostalCodeSlideEndAnimation extends com.stripe.android.view.CardInputWidget.CardFieldAnimation {
						public static class: java.lang.Class<com.stripe.android.view.CardInputWidget.PostalCodeSlideEndAnimation>;
						public constructor();
						public constructor(param0: globalAndroid.view.View, param1: number, param2: number, param3: number);
						public applyTransformation(param0: number, param1: globalAndroid.view.animation.Transformation): void;
					}
					export class PostalCodeSlideStartAnimation extends com.stripe.android.view.CardInputWidget.CardFieldAnimation {
						public static class: java.lang.Class<com.stripe.android.view.CardInputWidget.PostalCodeSlideStartAnimation>;
						public constructor();
						public constructor(param0: globalAndroid.view.View, param1: number, param2: number, param3: number);
						public applyTransformation(param0: number, param1: globalAndroid.view.animation.Transformation): void;
					}
					export class WhenMappings {
						public static class: java.lang.Class<com.stripe.android.view.CardInputWidget.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class CardInputWidgetPlacement {
					public static class: java.lang.Class<com.stripe.android.view.CardInputWidgetPlacement>;
					public setCvcStartPosition$stripe_release(param0: number): void;
					public getPeekCardWidth$stripe_release(): number;
					public component3$stripe_release(): number;
					public component15$stripe_release(): number;
					public getCvcPostalCodeSeparation$stripe_release(): number;
					public component2$stripe_release(): number;
					public setTotalLengthInPixels$stripe_release(param0: number): void;
					public constructor();
					public setCvcWidth$stripe_release(param0: number): void;
					public getPostalCodeWidth$stripe_release(): number;
					public component16$stripe_release(): number;
					public setCardDateSeparation$stripe_release(param0: number): void;
					public getCardWidth$stripe_release(): number;
					public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number, param14: number, param15: number);
					public component13$stripe_release(): number;
					public setCvcEndTouchBufferLimit$stripe_release(param0: number): void;
					public component1$stripe_release(): number;
					public component9$stripe_release(): number;
					public getCardTouchBufferLimit$stripe_release(): number;
					public component8$stripe_release(): number;
					public setCardWidth$stripe_release(param0: number): void;
					public setCvcPostalCodeSeparation$stripe_release(param0: number): void;
					public getFocusField$stripe_release(param0: number, param1: number, param2: boolean, param3: boolean): com.stripe.android.view.CardInputWidget.Field;
					public component14$stripe_release(): number;
					public component7$stripe_release(): number;
					public component11$stripe_release(): number;
					public getHiddenCardWidth$stripe_release(): number;
					public setHiddenCardWidth$stripe_release(param0: number): void;
					public component6$stripe_release(): number;
					public toString(): string;
					public component12$stripe_release(): number;
					public getTotalLengthInPixels$stripe_release(): number;
					public hashCode(): number;
					public getCvcStartPosition$stripe_release(): number;
					public setDateEndTouchBufferLimit$stripe_release(param0: number): void;
					public getDateStartPosition$stripe_release(): number;
					public getPostalCodeStartPosition$stripe_release(): number;
					public setPeekCardWidth$stripe_release(param0: number): void;
					public setCardTouchBufferLimit$stripe_release(param0: number): void;
					public setDateWidth$stripe_release(param0: number): void;
					public setPostalCodeWidth$stripe_release(param0: number): void;
					public copy(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number, param14: number, param15: number): com.stripe.android.view.CardInputWidgetPlacement;
					public setDateCvcSeparation$stripe_release(param0: number): void;
					public getCvcWidth$stripe_release(): number;
					public component5$stripe_release(): number;
					public equals(param0: any): boolean;
					public getDateCvcSeparation$stripe_release(): number;
					public component4$stripe_release(): number;
					public setDateStartPosition$stripe_release(param0: number): void;
					public getDateEndTouchBufferLimit$stripe_release(): number;
					public setPostalCodeStartPosition$stripe_release(param0: number): void;
					public component10$stripe_release(): number;
					public getDateWidth$stripe_release(): number;
					public getCvcEndTouchBufferLimit$stripe_release(): number;
					public getCardDateSeparation$stripe_release(): number;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class CardMultilineWidget implements com.stripe.android.view.CardWidget {
					public static class: java.lang.Class<com.stripe.android.view.CardMultilineWidget>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: boolean);
					public getPostalCodeEditText$stripe_release(): com.stripe.android.view.PostalCodeEditText;
					public getPostalCodeRequired(): boolean;
					public getShouldShowErrorIcon$stripe_release(): boolean;
					public getPaymentMethodCard(): com.stripe.android.model.PaymentMethodCreateParams.Card;
					public setCardHint(param0: string): void;
					public setCvcLabel(param0: string): void;
					public getCardParams(): com.stripe.android.model.CardParams;
					public setUsZipCodeRequired(param0: boolean): void;
					public getCvcEditText$stripe_release(): com.stripe.android.view.CvcEditText;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setCvcNumberTextWatcher(param0: globalAndroid.text.TextWatcher): void;
					public setPostalCodeRequired(param0: boolean): void;
					/** @deprecated */
					public getCard(): com.stripe.android.model.Card;
					public getPaymentMethodBillingDetailsBuilder(): com.stripe.android.model.PaymentMethod.BillingDetails.Builder;
					public clear(): void;
					public setCardInputListener(param0: com.stripe.android.view.CardInputListener): void;
					public setShouldShowPostalCode(param0: boolean): void;
					public setCvcCode(param0: string): void;
					public onFinishInflate(): void;
					public isEnabled(): boolean;
					public getExpiryDateEditText$stripe_release(): com.stripe.android.view.ExpiryDateEditText;
					public setCardValidCallback(param0: com.stripe.android.view.CardValidCallback): void;
					public getUsZipCodeRequired(): boolean;
					public setEnabled(param0: boolean): void;
					public setCardNumber(param0: string): void;
					public getPaymentMethodBillingDetails(): com.stripe.android.model.PaymentMethod.BillingDetails;
					public setExpiryDate(param0: number, param1: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setPostalCodeTextWatcher(param0: globalAndroid.text.TextWatcher): void;
					public constructor(param0: globalAndroid.content.Context);
					public validateCardNumber(): boolean;
					public setCardNumberTextWatcher(param0: globalAndroid.text.TextWatcher): void;
					public getPostalInputLayout$stripe_release(): com.google.android.material.textfield.TextInputLayout;
					public setExpiryDateTextWatcher(param0: globalAndroid.text.TextWatcher): void;
					public getPaymentMethodCreateParams(): com.stripe.android.model.PaymentMethodCreateParams;
					public onWindowFocusChanged(param0: boolean): void;
					/** @deprecated */
					public getCardBuilder(): com.stripe.android.model.Card.Builder;
					public validateAllFields(): boolean;
					public getCardNumberEditText$stripe_release(): com.stripe.android.view.CardNumberEditText;
				}
				export module CardMultilineWidget {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.view.CardMultilineWidget.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class CardNumberEditText extends com.stripe.android.view.StripeEditText {
					public static class: java.lang.Class<com.stripe.android.view.CardNumberEditText>;
					public onDetachedFromWindow(): void;
					public isLoadingCallback$stripe_release(): kotlin.jvm.functions.Function1<java.lang.Boolean,kotlin.Unit>;
					public setWorkContext$stripe_release(param0: kotlin.coroutines.CoroutineContext): void;
					public getPanLength$stripe_release(): number;
					public setCompletionCallback$stripe_release(param0: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
					public getValidatedCardNumber$stripe_release(): com.stripe.android.cards.CardNumber.Validated;
					public getAccountRangeRepositoryJob$stripe_release(): kotlinx.coroutines.Job;
					public getAccessibilityText(): string;
					/** @deprecated */
					public getLengthMax(): number;
					public setBrandChangeCallback$stripe_release(param0: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: kotlin.coroutines.CoroutineContext, param4: com.stripe.android.cards.CardAccountRangeRepository, param5: com.stripe.android.cards.StaticCardAccountRanges, param6: com.stripe.android.AnalyticsRequestExecutor, param7: com.stripe.android.AnalyticsRequest.Factory, param8: com.stripe.android.AnalyticsDataFactory, param9: kotlin.jvm.functions.Function0<string>);
					public setAccountRangeRepositoryJob$stripe_release(param0: kotlinx.coroutines.Job): void;
					public getCompletionCallback$stripe_release(): kotlin.jvm.functions.Function0<kotlin.Unit>;
					public getCardBrand(): com.stripe.android.model.CardBrand;
					public getBrandChangeCallback$stripe_release(): kotlin.jvm.functions.Function1<com.stripe.android.model.CardBrand,kotlin.Unit>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: kotlin.coroutines.CoroutineContext);
					public getWorkContext$stripe_release(): kotlin.coroutines.CoroutineContext;
					public setLoadingCallback$stripe_release(param0: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
					public setCardBrand$stripe_release(param0: com.stripe.android.model.CardBrand): void;
					public isCardNumberValid(): boolean;
					/** @deprecated */
					public getCardNumber(): string;
				}
				export module CardNumberEditText {
					export class CardNumberTextWatcher extends com.stripe.android.view.StripeTextWatcher {
						public static class: java.lang.Class<com.stripe.android.view.CardNumberEditText.CardNumberTextWatcher>;
						public afterTextChanged(param0: globalAndroid.text.Editable): void;
						public constructor();
						public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
						public constructor(param0: com.stripe.android.view.CardNumberEditText);
						public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
					}
					export module CardNumberTextWatcher {
						export class WhenMappings {
							public static class: java.lang.Class<com.stripe.android.view.CardNumberEditText.CardNumberTextWatcher.WhenMappings>;
						}
					}
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.view.CardNumberEditText.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class CardNumberTextInputLayout extends com.stripe.android.view.IconTextInputLayout {
					public static class: java.lang.Class<com.stripe.android.view.CardNumberTextInputLayout>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public setLoading$stripe_release(param0: boolean): void;
					public isLoading$stripe_release(): boolean;
					public onAttachedToWindow(): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class CardValidCallback {
					public static class: java.lang.Class<com.stripe.android.view.CardValidCallback>;
					/**
					 * Constructs a new instance of the com.stripe.android.view.CardValidCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onInputChanged(param0: boolean, param1: java.util.Set<any>): void;
					});
					public constructor();
					public onInputChanged(param0: boolean, param1: java.util.Set<any>): void;
				}
				export module CardValidCallback {
					export class Fields {
						public static class: java.lang.Class<com.stripe.android.view.CardValidCallback.Fields>;
						public static Number: com.stripe.android.view.CardValidCallback.Fields;
						public static Expiry: com.stripe.android.view.CardValidCallback.Fields;
						public static Cvc: com.stripe.android.view.CardValidCallback.Fields;
						public static values(): native.Array<com.stripe.android.view.CardValidCallback.Fields>;
						public static valueOf(param0: string): com.stripe.android.view.CardValidCallback.Fields;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class CardWidget {
					public static class: java.lang.Class<com.stripe.android.view.CardWidget>;
					/**
					 * Constructs a new instance of the com.stripe.android.view.CardWidget interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getCard(): com.stripe.android.model.Card;
						getCardParams(): com.stripe.android.model.CardParams;
						getCardBuilder(): com.stripe.android.model.Card.Builder;
						getPaymentMethodCard(): com.stripe.android.model.PaymentMethodCreateParams.Card;
						getPaymentMethodCreateParams(): com.stripe.android.model.PaymentMethodCreateParams;
						setCardValidCallback(param0: com.stripe.android.view.CardValidCallback): void;
						setCardInputListener(param0: com.stripe.android.view.CardInputListener): void;
						setCardNumberTextWatcher(param0: globalAndroid.text.TextWatcher): void;
						setExpiryDateTextWatcher(param0: globalAndroid.text.TextWatcher): void;
						setCvcNumberTextWatcher(param0: globalAndroid.text.TextWatcher): void;
						setPostalCodeTextWatcher(param0: globalAndroid.text.TextWatcher): void;
						setCardHint(param0: string): void;
						clear(): void;
						setCardNumber(param0: string): void;
						setExpiryDate(param0: number, param1: number): void;
						setCvcCode(param0: string): void;
						<clinit>(): void;
					});
					public constructor();
					public static Companion: com.stripe.android.view.CardWidget.Companion;
					public static DEFAULT_POSTAL_CODE_REQUIRED: boolean;
					public static DEFAULT_US_ZIP_CODE_REQUIRED: boolean;
					public static DEFAULT_POSTAL_CODE_ENABLED: boolean;
					public getPaymentMethodCard(): com.stripe.android.model.PaymentMethodCreateParams.Card;
					public setCardHint(param0: string): void;
					public setCardNumber(param0: string): void;
					public getCardParams(): com.stripe.android.model.CardParams;
					public setExpiryDate(param0: number, param1: number): void;
					public setPostalCodeTextWatcher(param0: globalAndroid.text.TextWatcher): void;
					public setCvcNumberTextWatcher(param0: globalAndroid.text.TextWatcher): void;
					/** @deprecated */
					public getCard(): com.stripe.android.model.Card;
					public setCardNumberTextWatcher(param0: globalAndroid.text.TextWatcher): void;
					public setExpiryDateTextWatcher(param0: globalAndroid.text.TextWatcher): void;
					public getPaymentMethodCreateParams(): com.stripe.android.model.PaymentMethodCreateParams;
					public setCardInputListener(param0: com.stripe.android.view.CardInputListener): void;
					public clear(): void;
					public setCvcCode(param0: string): void;
					/** @deprecated */
					public getCardBuilder(): com.stripe.android.model.Card.Builder;
					public setCardValidCallback(param0: com.stripe.android.view.CardValidCallback): void;
				}
				export module CardWidget {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.view.CardWidget.Companion>;
						public static DEFAULT_POSTAL_CODE_ENABLED: boolean;
						public static DEFAULT_POSTAL_CODE_REQUIRED: boolean;
						public static DEFAULT_US_ZIP_CODE_REQUIRED: boolean;
					}
					export class DefaultImpls {
						public static class: java.lang.Class<com.stripe.android.view.CardWidget.DefaultImpls>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class CardWidgetProgressView {
					public static class: java.lang.Class<com.stripe.android.view.CardWidgetProgressView>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public show(): void;
					public hide(): void;
					public onAttachedToWindow(): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class Country {
					public static class: java.lang.Class<com.stripe.android.view.Country>;
					public constructor(param0: string, param1: string);
					public equals(param0: any): boolean;
					public toString(): string;
					public copy(param0: string, param1: string): com.stripe.android.view.Country;
					public getCode(): string;
					public component1(): string;
					public component2(): string;
					public getName(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class CountryAdapter extends globalAndroid.widget.ArrayAdapter<com.stripe.android.view.Country> {
					public static class: java.lang.Class<com.stripe.android.view.CountryAdapter>;
					public getFilter(): globalAndroid.widget.Filter;
					public getUnfilteredCountries$stripe_release(): java.util.List<com.stripe.android.view.Country>;
					public constructor(param0: globalAndroid.content.Context, param1: java.util.List<com.stripe.android.view.Country>);
					public getCount(): number;
					public getItem(param0: number): com.stripe.android.view.Country;
					public setUnfilteredCountries$stripe_release(param0: java.util.List<com.stripe.android.view.Country>): void;
					public updateUnfilteredCountries$stripe_release(param0: java.util.Set<string>): boolean;
					public getItemId(param0: number): number;
					public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				}
				export module CountryAdapter {
					export class CountryFilter {
						public static class: java.lang.Class<com.stripe.android.view.CountryAdapter.CountryFilter>;
						public performFiltering(param0: string): globalAndroid.widget.Filter.FilterResults;
						public publishResults(param0: string, param1: globalAndroid.widget.Filter.FilterResults): void;
						public getUnfilteredCountries(): java.util.List<com.stripe.android.view.Country>;
						public constructor(param0: java.util.List<com.stripe.android.view.Country>, param1: com.stripe.android.view.CountryAdapter, param2: globalAndroid.app.Activity);
						public setUnfilteredCountries(param0: java.util.List<com.stripe.android.view.Country>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class CountryAutoCompleteTextView {
					public static class: java.lang.Class<com.stripe.android.view.CountryAutoCompleteTextView>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public setSelectedCountry(param0: com.stripe.android.view.Country): void;
					public setCountryChangeCallback$stripe_release(param0: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
					public setCountrySelected$stripe_release(param0: string): void;
					public validateCountry$stripe_release(): void;
					public setAllowedCountryCodes$stripe_release(param0: java.util.Set<string>): void;
					public updateUiForCountryEntered$stripe_release(param0: string): void;
					public getCountryChangeCallback$stripe_release(): kotlin.jvm.functions.Function1<com.stripe.android.view.Country,kotlin.Unit>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getCountryAutocomplete$stripe_release(): globalAndroid.widget.AutoCompleteTextView;
					public getSelectedCountry(): com.stripe.android.view.Country;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class CountryUtils {
					public static class: java.lang.Class<com.stripe.android.view.CountryUtils>;
					public static INSTANCE: com.stripe.android.view.CountryUtils;
					public getNO_POSTAL_CODE_COUNTRIES$stripe_release(): java.util.Set<string>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class CvcEditText extends com.stripe.android.view.StripeEditText {
					public static class: java.lang.Class<com.stripe.android.view.CvcEditText>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public getCompletionCallback$stripe_release(): kotlin.jvm.functions.Function0<kotlin.Unit>;
					public getCvc$stripe_release(): com.stripe.android.cards.Cvc.Validated;
					public setCompletionCallback$stripe_release(param0: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: kotlin.coroutines.CoroutineContext);
					/** @deprecated */
					public getCvcValue(): string;
					public getAccessibilityText(): string;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class DateUtils {
					public static class: java.lang.Class<com.stripe.android.view.DateUtils>;
					public static INSTANCE: com.stripe.android.view.DateUtils;
					public static isExpiryDataValid(param0: number, param1: number): boolean;
					public static createDateStringFromIntegerInput(param0: number, param1: number): string;
					public static convertTwoDigitYearToFour(param0: number): number;
					public static convertTwoDigitYearToFour(param0: number, param1: java.util.Calendar): number;
					public static isValidMonth(param0: string): boolean;
					public static isExpiryDataValid(param0: number, param1: number, param2: java.util.Calendar): boolean;
					public static separateDateStringParts(param0: string): native.Array<string>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class DeletePaymentMethodDialogFactory {
					public static class: java.lang.Class<com.stripe.android.view.DeletePaymentMethodDialogFactory>;
					public constructor(param0: globalAndroid.content.Context, param1: com.stripe.android.view.PaymentMethodsAdapter, param2: com.stripe.android.view.CardDisplayTextFactory, param3: any, param4: java.util.Set<string>, param5: kotlin.jvm.functions.Function1<any,kotlin.Unit>);
				}
				export module DeletePaymentMethodDialogFactory {
					export class PaymentMethodDeleteListener extends com.stripe.android.CustomerSession.PaymentMethodRetrievalListener {
						public static class: java.lang.Class<com.stripe.android.view.DeletePaymentMethodDialogFactory.PaymentMethodDeleteListener>;
						public constructor();
						public onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
						public onPaymentMethodRetrieved(param0: com.stripe.android.model.PaymentMethod): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class EmailEditText extends com.stripe.android.view.StripeEditText {
					public static class: java.lang.Class<com.stripe.android.view.EmailEditText>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: kotlin.coroutines.CoroutineContext);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getEmail(): string;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class ErrorListener extends com.stripe.android.view.StripeEditText.ErrorMessageListener {
					public static class: java.lang.Class<com.stripe.android.view.ErrorListener>;
					public constructor(param0: com.google.android.material.textfield.TextInputLayout);
					public displayErrorMessage(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class ExpiryDateEditText extends com.stripe.android.view.StripeEditText {
					public static class: java.lang.Class<com.stripe.android.view.ExpiryDateEditText>;
					public isDateValid(): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public getCompletionCallback$stripe_release(): kotlin.jvm.functions.Function0<kotlin.Unit>;
					public getValidDateFields(): kotlin.Pair<java.lang.Integer,java.lang.Integer>;
					public setCompletionCallback$stripe_release(param0: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: kotlin.coroutines.CoroutineContext);
					public getAccessibilityText(): string;
					public updateSelectionIndex$stripe_release(param0: number, param1: number, param2: number, param3: number): number;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
				export module ExpiryDateEditText {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.view.ExpiryDateEditText.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class FpxBank {
					public static class: java.lang.Class<com.stripe.android.view.FpxBank>;
					public static Maybank2U: com.stripe.android.view.FpxBank;
					public static Cimb: com.stripe.android.view.FpxBank;
					public static PublicBank: com.stripe.android.view.FpxBank;
					public static Rhb: com.stripe.android.view.FpxBank;
					public static HongLeongBank: com.stripe.android.view.FpxBank;
					public static AmBank: com.stripe.android.view.FpxBank;
					public static AffinBank: com.stripe.android.view.FpxBank;
					public static AllianceBankBusiness: com.stripe.android.view.FpxBank;
					public static BankIslam: com.stripe.android.view.FpxBank;
					public static BankMuamalat: com.stripe.android.view.FpxBank;
					public static BankRakyat: com.stripe.android.view.FpxBank;
					public static Bsn: com.stripe.android.view.FpxBank;
					public static Hsbc: com.stripe.android.view.FpxBank;
					public static Kfh: com.stripe.android.view.FpxBank;
					public static Maybank2E: com.stripe.android.view.FpxBank;
					public static Ocbc: com.stripe.android.view.FpxBank;
					public static StandardChartered: com.stripe.android.view.FpxBank;
					public static UobBank: com.stripe.android.view.FpxBank;
					public static Companion: com.stripe.android.view.FpxBank.Companion;
					public getDisplayName(): string;
					public getId(): string;
					public getCode(): string;
					public static values(): native.Array<com.stripe.android.view.FpxBank>;
					public static get(param0: string): com.stripe.android.view.FpxBank;
					public static valueOf(param0: string): com.stripe.android.view.FpxBank;
					public getBrandIconResId(): number;
				}
				export module FpxBank {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.view.FpxBank.Companion>;
						public get(param0: string): com.stripe.android.view.FpxBank;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class FpxViewModel {
					public static class: java.lang.Class<com.stripe.android.view.FpxViewModel>;
					public setSelectedPosition$stripe_release(param0: java.lang.Integer): void;
					public constructor(param0: globalAndroid.app.Application, param1: string, param2: com.stripe.android.StripeRepository);
					public getSelectedPosition$stripe_release(): java.lang.Integer;
				}
				export module FpxViewModel {
					export class Factory {
						public static class: java.lang.Class<com.stripe.android.view.FpxViewModel.Factory>;
						public create(param0: java.lang.Class): androidx.lifecycle.ViewModel;
						public constructor(param0: globalAndroid.app.Application);
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class IconTextInputLayout {
					public static class: java.lang.Class<com.stripe.android.view.IconTextInputLayout>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public hasObtainedCollapsingTextHelper$stripe_release(): boolean;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
				export module IconTextInputLayout {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.view.IconTextInputLayout.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class KeyboardController {
					public static class: java.lang.Class<com.stripe.android.view.KeyboardController>;
					public constructor(param0: globalAndroid.app.Activity);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class MaskedCardView {
					public static class: java.lang.Class<com.stripe.android.view.MaskedCardView>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public setSelected(param0: boolean): void;
					public getCardBrand(): com.stripe.android.model.CardBrand;
					public setPaymentMethod(param0: com.stripe.android.model.PaymentMethod): void;
					public getViewBinding$stripe_release(): com.stripe.android.databinding.MaskedCardViewBinding;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getLast4(): string;
				}
				export module MaskedCardView {
					export class WhenMappings {
						public static class: java.lang.Class<com.stripe.android.view.MaskedCardView.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentAuthWebView {
					public static class: java.lang.Class<com.stripe.android.view.PaymentAuthWebView>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public destroy(): void;
					public init(param0: globalAndroid.app.Activity, param1: com.stripe.android.Logger, param2: globalAndroid.widget.ProgressBar, param3: string, param4: string): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
				export module PaymentAuthWebView {
					export class PaymentAuthWebViewClient {
						public static class: java.lang.Class<com.stripe.android.view.PaymentAuthWebView.PaymentAuthWebViewClient>;
						public static PARAM_PAYMENT_CLIENT_SECRET: string;
						public static PARAM_SETUP_CLIENT_SECRET: string;
						public static BLANK_PAGE: string;
						public static Companion: com.stripe.android.view.PaymentAuthWebView.PaymentAuthWebViewClient.Companion;
						public getHasLoadedBlank$stripe_release(): boolean;
						public constructor(param0: globalAndroid.app.Activity, param1: globalAndroid.content.pm.PackageManager, param2: com.stripe.android.Logger, param3: globalAndroid.widget.ProgressBar, param4: string, param5: string);
						public shouldOverrideUrlLoading(param0: globalAndroid.webkit.WebView, param1: globalAndroid.webkit.WebResourceRequest): boolean;
						public setHasLoadedBlank$stripe_release(param0: boolean): void;
						public onPageFinished(param0: globalAndroid.webkit.WebView, param1: string): void;
						public shouldOverrideUrlLoading(param0: globalAndroid.webkit.WebView, param1: string): boolean;
						public getCompletionUrlParam(): string;
					}
					export module PaymentAuthWebViewClient {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.view.PaymentAuthWebView.PaymentAuthWebViewClient.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentAuthWebViewActivity {
					public static class: java.lang.Class<com.stripe.android.view.PaymentAuthWebViewActivity>;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
					public onBackPressed(): void;
					public constructor();
					public onDestroy(): void;
					public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentAuthWebViewActivityViewModel {
					public static class: java.lang.Class<com.stripe.android.view.PaymentAuthWebViewActivityViewModel>;
					public getButtonText$stripe_release(): string;
					public getToolbarTitle$stripe_release(): com.stripe.android.view.PaymentAuthWebViewActivityViewModel.ToolbarTitleData;
					public getToolbarBackgroundColor$stripe_release(): string;
					public constructor(param0: com.stripe.android.PaymentAuthWebViewStarter.Args);
				}
				export module PaymentAuthWebViewActivityViewModel {
					export class Factory {
						public static class: java.lang.Class<com.stripe.android.view.PaymentAuthWebViewActivityViewModel.Factory>;
						public create(param0: java.lang.Class): androidx.lifecycle.ViewModel;
						public constructor(param0: com.stripe.android.PaymentAuthWebViewStarter.Args);
					}
					export class ToolbarTitleData {
						public static class: java.lang.Class<com.stripe.android.view.PaymentAuthWebViewActivityViewModel.ToolbarTitleData>;
						public getToolbarCustomization$stripe_release(): com.stripe.android.stripe3ds2.init.ui.StripeToolbarCustomization;
						public constructor(param0: string, param1: com.stripe.android.stripe3ds2.init.ui.StripeToolbarCustomization);
						public getText$stripe_release(): string;
						public copy(param0: string, param1: com.stripe.android.stripe3ds2.init.ui.StripeToolbarCustomization): com.stripe.android.view.PaymentAuthWebViewActivityViewModel.ToolbarTitleData;
						public component1$stripe_release(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public component2$stripe_release(): com.stripe.android.stripe3ds2.init.ui.StripeToolbarCustomization;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentFlowActivity extends com.stripe.android.view.StripeActivity {
					public static class: java.lang.Class<com.stripe.android.view.PaymentFlowActivity>;
					public static PRODUCT_TOKEN: string;
					public static Companion: com.stripe.android.view.PaymentFlowActivity.Companion;
					public onActionSave(): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public onBackPressed(): void;
					public constructor();
				}
				export module PaymentFlowActivity {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.view.PaymentFlowActivity.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentFlowActivityStarter extends com.stripe.android.view.ActivityStarter<com.stripe.android.view.PaymentFlowActivity,com.stripe.android.view.PaymentFlowActivityStarter.Args> {
					public static class: java.lang.Class<com.stripe.android.view.PaymentFlowActivityStarter>;
					public static REQUEST_CODE: number;
					public static Companion: com.stripe.android.view.PaymentFlowActivityStarter.Companion;
					public constructor(param0: androidx.fragment.app.Fragment, param1: com.stripe.android.PaymentSessionConfig);
					public constructor(param0: androidx.fragment.app.Fragment, param1: java.lang.Class<any>, param2: number);
					public constructor(param0: globalAndroid.app.Activity, param1: java.lang.Class<any>, param2: number);
					public constructor(param0: globalAndroid.app.Activity, param1: androidx.fragment.app.Fragment, param2: java.lang.Class<any>, param3: number);
					public constructor(param0: globalAndroid.app.Activity, param1: com.stripe.android.PaymentSessionConfig);
				}
				export module PaymentFlowActivityStarter {
					export class Args extends com.stripe.android.view.ActivityStarter.Args {
						public static class: java.lang.Class<com.stripe.android.view.PaymentFlowActivityStarter.Args>;
						public static Companion: com.stripe.android.view.PaymentFlowActivityStarter.Args.Companion;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public describeContents(): number;
						public copy(param0: com.stripe.android.PaymentSessionConfig, param1: com.stripe.android.PaymentSessionData, param2: boolean, param3: java.lang.Integer): com.stripe.android.view.PaymentFlowActivityStarter.Args;
						public getPaymentSessionConfig$stripe_release(): com.stripe.android.PaymentSessionConfig;
						public component2$stripe_release(): com.stripe.android.PaymentSessionData;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public isPaymentSessionActive$stripe_release(): boolean;
						public getWindowFlags$stripe_release(): java.lang.Integer;
						public toString(): string;
						public component4$stripe_release(): java.lang.Integer;
						public component3$stripe_release(): boolean;
						public static create(param0: globalAndroid.content.Intent): com.stripe.android.view.PaymentFlowActivityStarter.Args;
						public constructor(param0: com.stripe.android.PaymentSessionConfig, param1: com.stripe.android.PaymentSessionData, param2: boolean, param3: java.lang.Integer);
						public component1$stripe_release(): com.stripe.android.PaymentSessionConfig;
						public getPaymentSessionData$stripe_release(): com.stripe.android.PaymentSessionData;
					}
					export module Args {
						export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.view.PaymentFlowActivityStarter.Args> {
							public static class: java.lang.Class<com.stripe.android.view.PaymentFlowActivityStarter.Args.Builder>;
							public constructor();
							public setWindowFlags(param0: java.lang.Integer): com.stripe.android.view.PaymentFlowActivityStarter.Args.Builder;
							public build(): com.stripe.android.view.PaymentFlowActivityStarter.Args;
							public build(): any;
							public setPaymentSessionData(param0: com.stripe.android.PaymentSessionData): com.stripe.android.view.PaymentFlowActivityStarter.Args.Builder;
							public setPaymentSessionConfig(param0: com.stripe.android.PaymentSessionConfig): com.stripe.android.view.PaymentFlowActivityStarter.Args.Builder;
							public setIsPaymentSessionActive(param0: boolean): com.stripe.android.view.PaymentFlowActivityStarter.Args.Builder;
						}
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.view.PaymentFlowActivityStarter.Args.Companion>;
							public create(param0: globalAndroid.content.Intent): com.stripe.android.view.PaymentFlowActivityStarter.Args;
						}
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.view.PaymentFlowActivityStarter.Args.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.view.PaymentFlowActivityStarter.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentFlowPage {
					public static class: java.lang.Class<com.stripe.android.view.PaymentFlowPage>;
					public static ShippingInfo: com.stripe.android.view.PaymentFlowPage;
					public static ShippingMethod: com.stripe.android.view.PaymentFlowPage;
					public static valueOf(param0: string): com.stripe.android.view.PaymentFlowPage;
					public static values(): native.Array<com.stripe.android.view.PaymentFlowPage>;
					public getTitleResId(): number;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentFlowPagerAdapter {
					public static class: java.lang.Class<com.stripe.android.view.PaymentFlowPagerAdapter>;
					public isShippingInfoSubmitted$stripe_release(): boolean;
					public getCount(): number;
					public getShippingInformation$stripe_release(): com.stripe.android.model.ShippingInformation;
					public destroyItem(param0: globalAndroid.view.ViewGroup, param1: number, param2: any): void;
					public getPageTitle(param0: number): string;
					public isViewFromObject(param0: globalAndroid.view.View, param1: any): boolean;
					public getShippingMethods$stripe_release(): java.util.List<com.stripe.android.model.ShippingMethod>;
					public getPageAt$stripe_release(param0: number): com.stripe.android.view.PaymentFlowPage;
					public constructor(param0: globalAndroid.content.Context, param1: com.stripe.android.PaymentSessionConfig, param2: java.util.Set<string>, param3: kotlin.jvm.functions.Function1<any,kotlin.Unit>);
					public getItemPosition(param0: any): number;
					public getSelectedShippingMethod$stripe_release(): com.stripe.android.model.ShippingMethod;
					public setSelectedShippingMethod$stripe_release(param0: com.stripe.android.model.ShippingMethod): void;
					public setShippingMethods$stripe_release(param0: java.util.List<com.stripe.android.model.ShippingMethod>): void;
					public setShippingInformation$stripe_release(param0: com.stripe.android.model.ShippingInformation): void;
					public instantiateItem(param0: globalAndroid.view.ViewGroup, param1: number): any;
					public setShippingInfoSubmitted$stripe_release(param0: boolean): void;
				}
				export module PaymentFlowPagerAdapter {
					export abstract class PaymentFlowViewHolder {
						public static class: java.lang.Class<com.stripe.android.view.PaymentFlowPagerAdapter.PaymentFlowViewHolder>;
					}
					export module PaymentFlowViewHolder {
						export class ShippingInformationViewHolder extends com.stripe.android.view.PaymentFlowPagerAdapter.PaymentFlowViewHolder {
							public static class: java.lang.Class<com.stripe.android.view.PaymentFlowPagerAdapter.PaymentFlowViewHolder.ShippingInformationViewHolder>;
							public constructor(param0: com.stripe.android.databinding.ShippingInfoPageBinding);
							public constructor(param0: globalAndroid.view.ViewGroup);
							public bind(param0: com.stripe.android.PaymentSessionConfig, param1: com.stripe.android.model.ShippingInformation, param2: java.util.Set<string>): void;
						}
						export class ShippingMethodViewHolder extends com.stripe.android.view.PaymentFlowPagerAdapter.PaymentFlowViewHolder {
							public static class: java.lang.Class<com.stripe.android.view.PaymentFlowPagerAdapter.PaymentFlowViewHolder.ShippingMethodViewHolder>;
							public constructor(param0: com.stripe.android.databinding.ShippingMethodPageBinding);
							public bind(param0: java.util.List<com.stripe.android.model.ShippingMethod>, param1: com.stripe.android.model.ShippingMethod, param2: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
							public constructor(param0: globalAndroid.view.ViewGroup);
						}
					}
					export class WhenMappings {
						public static class: java.lang.Class<com.stripe.android.view.PaymentFlowPagerAdapter.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentFlowViewModel {
					public static class: java.lang.Class<com.stripe.android.view.PaymentFlowViewModel>;
					public static Companion: com.stripe.android.view.PaymentFlowViewModel.Companion;
					public setCurrentPage$stripe_release(param0: number): void;
					public isShippingInfoSubmitted$stripe_release(): boolean;
					public constructor(param0: com.stripe.android.CustomerSession, param1: com.stripe.android.PaymentSessionData, param2: kotlin.coroutines.CoroutineContext);
					public getPaymentSessionData$stripe_release(): com.stripe.android.PaymentSessionData;
					public setPaymentSessionData$stripe_release(param0: com.stripe.android.PaymentSessionData): void;
					public getShippingMethods$stripe_release(): java.util.List<com.stripe.android.model.ShippingMethod>;
					public getSelectedShippingMethod$stripe_release(): com.stripe.android.model.ShippingMethod;
					public setSelectedShippingMethod$stripe_release(param0: com.stripe.android.model.ShippingMethod): void;
					public getSubmittedShippingInfo$stripe_release(): com.stripe.android.model.ShippingInformation;
					public setShippingMethods$stripe_release(param0: java.util.List<com.stripe.android.model.ShippingMethod>): void;
					public setSubmittedShippingInfo$stripe_release(param0: com.stripe.android.model.ShippingInformation): void;
					public getCurrentPage$stripe_release(): number;
					public setShippingInfoSubmitted$stripe_release(param0: boolean): void;
				}
				export module PaymentFlowViewModel {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.view.PaymentFlowViewModel.Companion>;
						public getPRODUCT_USAGE(): java.util.Set<string>;
					}
					export class Factory {
						public static class: java.lang.Class<com.stripe.android.view.PaymentFlowViewModel.Factory>;
						public constructor(param0: com.stripe.android.CustomerSession, param1: com.stripe.android.PaymentSessionData);
						public create(param0: java.lang.Class): androidx.lifecycle.ViewModel;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentFlowViewPager {
					public static class: java.lang.Class<com.stripe.android.view.PaymentFlowViewPager>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: boolean);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentMethodSwipeCallback {
					public static class: java.lang.Class<com.stripe.android.view.PaymentMethodSwipeCallback>;
					public static Companion: com.stripe.android.view.PaymentMethodSwipeCallback.Companion;
					public onMove(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder, param2: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
					public onChildDraw(param0: globalAndroid.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: androidx.recyclerview.widget.RecyclerView.ViewHolder, param3: number, param4: number, param5: number, param6: boolean): void;
					public getSwipeDirs(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder): number;
					public constructor(param0: globalAndroid.content.Context, param1: com.stripe.android.view.PaymentMethodsAdapter, param2: com.stripe.android.view.PaymentMethodSwipeCallback.Listener);
					public onSwiped(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number): void;
					public getSwipeThreshold(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): number;
				}
				export module PaymentMethodSwipeCallback {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.view.PaymentMethodSwipeCallback.Companion>;
						public calculateTransitionColor$stripe_release(param0: number, param1: number, param2: number): number;
					}
					export class Listener {
						public static class: java.lang.Class<com.stripe.android.view.PaymentMethodSwipeCallback.Listener>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.PaymentMethodSwipeCallback$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSwiped(param0: com.stripe.android.model.PaymentMethod): void;
						});
						public constructor();
						public onSwiped(param0: com.stripe.android.model.PaymentMethod): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentMethodsActivity {
					public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsActivity>;
					public static PRODUCT_TOKEN: string;
					public static Companion: com.stripe.android.view.PaymentMethodsActivity.Companion;
					public onSupportNavigateUp(): boolean;
					public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public onBackPressed(): void;
					public constructor();
					public onDestroy(): void;
					public getViewBinding$stripe_release(): com.stripe.android.databinding.PaymentMethodsActivityBinding;
				}
				export module PaymentMethodsActivity {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsActivity.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentMethodsActivityStarter extends com.stripe.android.view.ActivityStarter<com.stripe.android.view.PaymentMethodsActivity,com.stripe.android.view.PaymentMethodsActivityStarter.Args> {
					public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsActivityStarter>;
					public static REQUEST_CODE: number;
					public static Companion: com.stripe.android.view.PaymentMethodsActivityStarter.Companion;
					public constructor(param0: androidx.fragment.app.Fragment, param1: java.lang.Class<any>, param2: number);
					public constructor(param0: androidx.fragment.app.Fragment);
					public constructor(param0: globalAndroid.app.Activity, param1: java.lang.Class<any>, param2: number);
					public constructor(param0: globalAndroid.app.Activity, param1: androidx.fragment.app.Fragment, param2: java.lang.Class<any>, param3: number);
					public constructor(param0: globalAndroid.app.Activity);
				}
				export module PaymentMethodsActivityStarter {
					export class Args extends com.stripe.android.view.ActivityStarter.Args {
						public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsActivityStarter.Args>;
						public static Companion: com.stripe.android.view.PaymentMethodsActivityStarter.Args.Companion;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public getUseGooglePay$stripe_release(): boolean;
						public copy(param0: string, param1: number, param2: number, param3: boolean, param4: java.util.List<any>, param5: com.stripe.android.PaymentConfiguration, param6: java.lang.Integer, param7: com.stripe.android.view.BillingAddressFields, param8: boolean, param9: boolean, param10: boolean): com.stripe.android.view.PaymentMethodsActivityStarter.Args;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component1$stripe_release(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getPaymentMethodTypes$stripe_release(): java.util.List<com.stripe.android.model.PaymentMethod.Type>;
						public component2(): number;
						public component8$stripe_release(): com.stripe.android.view.BillingAddressFields;
						public getAddPaymentMethodFooterLayoutId(): number;
						public component11$stripe_release(): boolean;
						public getInitialPaymentMethodId$stripe_release(): string;
						public component9$stripe_release(): boolean;
						public getCanDeletePaymentMethods$stripe_release(): boolean;
						public describeContents(): number;
						public getBillingAddressFields$stripe_release(): com.stripe.android.view.BillingAddressFields;
						public component7$stripe_release(): java.lang.Integer;
						public component6$stripe_release(): com.stripe.android.PaymentConfiguration;
						public component10$stripe_release(): boolean;
						public isPaymentSessionActive$stripe_release(): boolean;
						public getShouldShowGooglePay$stripe_release(): boolean;
						public getWindowFlags$stripe_release(): java.lang.Integer;
						public component4$stripe_release(): boolean;
						public toString(): string;
						public constructor(param0: string, param1: number, param2: number, param3: boolean, param4: java.util.List<any>, param5: com.stripe.android.PaymentConfiguration, param6: java.lang.Integer, param7: com.stripe.android.view.BillingAddressFields, param8: boolean, param9: boolean, param10: boolean);
						public component5$stripe_release(): java.util.List<com.stripe.android.model.PaymentMethod.Type>;
						public getPaymentConfiguration$stripe_release(): com.stripe.android.PaymentConfiguration;
						public getPaymentMethodsFooterLayoutId(): number;
						public component3(): number;
					}
					export module Args {
						export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.view.PaymentMethodsActivityStarter.Args> {
							public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsActivityStarter.Args.Builder>;
							public constructor();
							public setAddPaymentMethodFooter(param0: number): com.stripe.android.view.PaymentMethodsActivityStarter.Args.Builder;
							public setBillingAddressFields(param0: com.stripe.android.view.BillingAddressFields): com.stripe.android.view.PaymentMethodsActivityStarter.Args.Builder;
							public build(): any;
							public setWindowFlags(param0: java.lang.Integer): com.stripe.android.view.PaymentMethodsActivityStarter.Args.Builder;
							public setIsPaymentSessionActive(param0: boolean): com.stripe.android.view.PaymentMethodsActivityStarter.Args.Builder;
							public setPaymentConfiguration(param0: com.stripe.android.PaymentConfiguration): com.stripe.android.view.PaymentMethodsActivityStarter.Args.Builder;
							public setCanDeletePaymentMethods(param0: boolean): com.stripe.android.view.PaymentMethodsActivityStarter.Args.Builder;
							public setShouldShowGooglePay(param0: boolean): com.stripe.android.view.PaymentMethodsActivityStarter.Args.Builder;
							public setUseGooglePay$stripe_release(param0: boolean): com.stripe.android.view.PaymentMethodsActivityStarter.Args.Builder;
							public setPaymentMethodTypes(param0: java.util.List<any>): com.stripe.android.view.PaymentMethodsActivityStarter.Args.Builder;
							public build(): com.stripe.android.view.PaymentMethodsActivityStarter.Args;
							public setPaymentMethodsFooter(param0: number): com.stripe.android.view.PaymentMethodsActivityStarter.Args.Builder;
							public setInitialPaymentMethodId(param0: string): com.stripe.android.view.PaymentMethodsActivityStarter.Args.Builder;
						}
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsActivityStarter.Args.Companion>;
						}
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsActivityStarter.Args.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsActivityStarter.Companion>;
					}
					export class Result extends com.stripe.android.view.ActivityStarter.Result {
						public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsActivityStarter.Result>;
						public paymentMethod: com.stripe.android.model.PaymentMethod;
						public static Companion: com.stripe.android.view.PaymentMethodsActivityStarter.Result.Companion;
						public static CREATOR: globalAndroid.os.Parcelable.Creator;
						public constructor();
						public describeContents(): number;
						public component2(): boolean;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toBundle(): globalAndroid.os.Bundle;
						public toString(): string;
						public component1(): com.stripe.android.model.PaymentMethod;
						public copy(param0: com.stripe.android.model.PaymentMethod, param1: boolean): com.stripe.android.view.PaymentMethodsActivityStarter.Result;
						public constructor(param0: com.stripe.android.model.PaymentMethod, param1: boolean);
						public static fromIntent(param0: globalAndroid.content.Intent): com.stripe.android.view.PaymentMethodsActivityStarter.Result;
						public getUseGooglePay(): boolean;
					}
					export module Result {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsActivityStarter.Result.Companion>;
							public fromIntent(param0: globalAndroid.content.Intent): com.stripe.android.view.PaymentMethodsActivityStarter.Result;
						}
						export class Creator {
							public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsActivityStarter.Result.Creator>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentMethodsAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<androidx.recyclerview.widget.RecyclerView.ViewHolder> {
					public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsAdapter>;
					public static Companion: com.stripe.android.view.PaymentMethodsAdapter.Companion;
					public getSelectedPaymentMethodId$stripe_release(): string;
					public getPosition$stripe_release(param0: com.stripe.android.model.PaymentMethod): java.lang.Integer;
					public constructor(param0: com.stripe.android.view.PaymentMethodsActivityStarter.Args, param1: java.util.List<any>, param2: string, param3: boolean, param4: boolean, param5: boolean, param6: kotlin.coroutines.CoroutineContext);
					public onBindViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number): void;
					public getListener$stripe_release(): com.stripe.android.view.PaymentMethodsAdapter.Listener;
					public setSelectedPaymentMethodId$stripe_release(param0: string): void;
					public getSelectedPaymentMethod$stripe_release(): com.stripe.android.model.PaymentMethod;
					public getPaymentMethods$stripe_release(): java.util.List<com.stripe.android.model.PaymentMethod>;
					public getItemCount(): number;
					public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
					public setListener$stripe_release(param0: com.stripe.android.view.PaymentMethodsAdapter.Listener): void;
					public getItemViewType(param0: number): number;
					public getItemId(param0: number): number;
				}
				export module PaymentMethodsAdapter {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsAdapter.Companion>;
						public getGOOGLE_PAY_ITEM_ID$stripe_release(): number;
					}
					export class Listener {
						public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsAdapter.Listener>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.PaymentMethodsAdapter$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onPaymentMethodClick(param0: com.stripe.android.model.PaymentMethod): void;
							onGooglePayClick(): void;
							onDeletePaymentMethodAction(param0: com.stripe.android.model.PaymentMethod): void;
						});
						public constructor();
						public onPaymentMethodClick(param0: com.stripe.android.model.PaymentMethod): void;
						public onGooglePayClick(): void;
						public onDeletePaymentMethodAction(param0: com.stripe.android.model.PaymentMethod): void;
					}
					export abstract class ViewHolder {
						public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsAdapter.ViewHolder>;
					}
					export module ViewHolder {
						export class AddCardPaymentMethodViewHolder {
							public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsAdapter.ViewHolder.AddCardPaymentMethodViewHolder>;
							public constructor(param0: globalAndroid.view.View);
						}
						export class AddFpxPaymentMethodViewHolder {
							public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsAdapter.ViewHolder.AddFpxPaymentMethodViewHolder>;
							public constructor(param0: globalAndroid.view.View);
						}
						export class GooglePayViewHolder {
							public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsAdapter.ViewHolder.GooglePayViewHolder>;
							public bind(param0: boolean): void;
							public constructor(param0: com.stripe.android.databinding.GooglePayRowBinding);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.ViewGroup);
						}
						export class PaymentMethodViewHolder extends com.stripe.android.view.PaymentMethodsAdapter.ViewHolder {
							public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsAdapter.ViewHolder.PaymentMethodViewHolder>;
							public constructor(param0: globalAndroid.view.ViewGroup);
							public constructor(param0: com.stripe.android.databinding.MaskedCardRowBinding);
							public setSelected(param0: boolean): void;
							public setPaymentMethod(param0: com.stripe.android.model.PaymentMethod): void;
						}
					}
					export class ViewType {
						public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsAdapter.ViewType>;
						public static Card: com.stripe.android.view.PaymentMethodsAdapter.ViewType;
						public static AddCard: com.stripe.android.view.PaymentMethodsAdapter.ViewType;
						public static AddFpx: com.stripe.android.view.PaymentMethodsAdapter.ViewType;
						public static GooglePay: com.stripe.android.view.PaymentMethodsAdapter.ViewType;
						public static valueOf(param0: string): com.stripe.android.view.PaymentMethodsAdapter.ViewType;
						public static values(): native.Array<com.stripe.android.view.PaymentMethodsAdapter.ViewType>;
					}
					export class WhenMappings {
						public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsAdapter.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentMethodsRecyclerView {
					public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsRecyclerView>;
					public getPaymentMethodSelectedCallback$stripe_release(): kotlin.jvm.functions.Function1<com.stripe.android.model.PaymentMethod,kotlin.Unit>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public setPaymentMethodSelectedCallback$stripe_release(param0: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
					public getTappedPaymentMethod$stripe_release(): com.stripe.android.model.PaymentMethod;
					public setTappedPaymentMethod$stripe_release(param0: com.stripe.android.model.PaymentMethod): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentMethodsViewModel {
					public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsViewModel>;
					public getSelectedPaymentMethodId$stripe_release(): string;
					public getProgressData$stripe_release(): androidx.lifecycle.MutableLiveData<java.lang.Boolean>;
					public setSelectedPaymentMethodId$stripe_release(param0: string): void;
					public constructor(param0: globalAndroid.app.Application, param1: any, param2: string, param3: boolean);
					public getSnackbarData$stripe_release(): androidx.lifecycle.MutableLiveData<string>;
					public onPaymentMethodAdded$stripe_release(param0: com.stripe.android.model.PaymentMethod): void;
					public onPaymentMethodRemoved$stripe_release(param0: com.stripe.android.model.PaymentMethod): void;
					public getProductUsage$stripe_release(): java.util.Set<string>;
				}
				export module PaymentMethodsViewModel {
					export class Factory {
						public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsViewModel.Factory>;
						public create(param0: java.lang.Class): androidx.lifecycle.ViewModel;
						public constructor(param0: globalAndroid.app.Application, param1: any, param2: string, param3: boolean);
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentRelayActivity {
					public static class: java.lang.Class<com.stripe.android.view.PaymentRelayActivity>;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentUtils {
					public static class: java.lang.Class<com.stripe.android.view.PaymentUtils>;
					public static INSTANCE: com.stripe.android.view.PaymentUtils;
					public static formatPriceStringUsingFree(param0: number, param1: java.util.Currency, param2: string): string;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PostalCodeEditText extends com.stripe.android.view.StripeEditText {
					public static class: java.lang.Class<com.stripe.android.view.PostalCodeEditText>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public setConfig$stripe_release(param0: com.stripe.android.view.PostalCodeEditText.Config): void;
					public getConfig$stripe_release(): com.stripe.android.view.PostalCodeEditText.Config;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: kotlin.coroutines.CoroutineContext);
					public getPostalCode$stripe_release(): string;
					public onFinishInflate(): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
				export module PostalCodeEditText {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.view.PostalCodeEditText.Companion>;
					}
					export class Config {
						public static class: java.lang.Class<com.stripe.android.view.PostalCodeEditText.Config>;
						public static Global: com.stripe.android.view.PostalCodeEditText.Config;
						public static US: com.stripe.android.view.PostalCodeEditText.Config;
						public static values(): native.Array<com.stripe.android.view.PostalCodeEditText.Config>;
						public static valueOf(param0: string): com.stripe.android.view.PostalCodeEditText.Config;
					}
					export class WhenMappings {
						public static class: java.lang.Class<com.stripe.android.view.PostalCodeEditText.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PostalCodeValidator {
					public static class: java.lang.Class<com.stripe.android.view.PostalCodeValidator>;
					public constructor();
					public isValid(param0: string, param1: string, param2: java.util.List<any>, param3: java.util.List<any>): boolean;
				}
				export module PostalCodeValidator {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.view.PostalCodeValidator.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class SelectShippingMethodWidget {
					public static class: java.lang.Class<com.stripe.android.view.SelectShippingMethodWidget>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public setSelectedShippingMethod(param0: com.stripe.android.model.ShippingMethod): void;
					public setShippingMethods(param0: java.util.List<com.stripe.android.model.ShippingMethod>): void;
					public setShippingMethodSelectedCallback(param0: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getSelectedShippingMethod(): com.stripe.android.model.ShippingMethod;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class ShippingInfoWidget {
					public static class: java.lang.Class<com.stripe.android.view.ShippingInfoWidget>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public setHiddenFields(param0: java.util.List<any>): void;
					public setOptionalFields(param0: java.util.List<any>): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public populateShippingInfo(param0: com.stripe.android.model.ShippingInformation): void;
					public getOptionalFields(): java.util.List<com.stripe.android.view.ShippingInfoWidget.CustomizableShippingField>;
					public validateAllFields(): boolean;
					public getHiddenFields(): java.util.List<com.stripe.android.view.ShippingInfoWidget.CustomizableShippingField>;
					public getShippingInformation(): com.stripe.android.model.ShippingInformation;
					public setAllowedCountryCodes(param0: java.util.Set<string>): void;
				}
				export module ShippingInfoWidget {
					export class CustomizableShippingField {
						public static class: java.lang.Class<com.stripe.android.view.ShippingInfoWidget.CustomizableShippingField>;
						public static Line1: com.stripe.android.view.ShippingInfoWidget.CustomizableShippingField;
						public static Line2: com.stripe.android.view.ShippingInfoWidget.CustomizableShippingField;
						public static City: com.stripe.android.view.ShippingInfoWidget.CustomizableShippingField;
						public static PostalCode: com.stripe.android.view.ShippingInfoWidget.CustomizableShippingField;
						public static State: com.stripe.android.view.ShippingInfoWidget.CustomizableShippingField;
						public static Phone: com.stripe.android.view.ShippingInfoWidget.CustomizableShippingField;
						public static valueOf(param0: string): com.stripe.android.view.ShippingInfoWidget.CustomizableShippingField;
						public static values(): native.Array<com.stripe.android.view.ShippingInfoWidget.CustomizableShippingField>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class ShippingMethodAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.stripe.android.view.ShippingMethodAdapter.ShippingMethodViewHolder> {
					public static class: java.lang.Class<com.stripe.android.view.ShippingMethodAdapter>;
					public setSelected$stripe_release(param0: com.stripe.android.model.ShippingMethod): void;
					public setSelectedIndex$stripe_release(param0: number): void;
					public getShippingMethods$stripe_release(): java.util.List<com.stripe.android.model.ShippingMethod>;
					public getSelectedShippingMethod(): com.stripe.android.model.ShippingMethod;
					public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.stripe.android.view.ShippingMethodAdapter.ShippingMethodViewHolder;
					public setShippingMethods$stripe_release(param0: java.util.List<com.stripe.android.model.ShippingMethod>): void;
					public onBindViewHolder(param0: com.stripe.android.view.ShippingMethodAdapter.ShippingMethodViewHolder, param1: number): void;
					public getOnShippingMethodSelectedCallback$stripe_release(): kotlin.jvm.functions.Function1<com.stripe.android.model.ShippingMethod,kotlin.Unit>;
					public constructor();
					public getItemCount(): number;
					public getSelectedIndex$stripe_release(): number;
					public getItemId(param0: number): number;
					public setOnShippingMethodSelectedCallback$stripe_release(param0: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
				}
				export module ShippingMethodAdapter {
					export class ShippingMethodViewHolder {
						public static class: java.lang.Class<com.stripe.android.view.ShippingMethodAdapter.ShippingMethodViewHolder>;
						public setShippingMethod(param0: com.stripe.android.model.ShippingMethod): void;
						public setSelected(param0: boolean): void;
						public getShippingMethodView$stripe_release(): com.stripe.android.view.ShippingMethodView;
						public constructor(param0: com.stripe.android.view.ShippingMethodView);
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class ShippingMethodView {
					public static class: java.lang.Class<com.stripe.android.view.ShippingMethodView>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public setSelected(param0: boolean): void;
					public setShippingMethod(param0: com.stripe.android.model.ShippingMethod): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class Stripe3ds2CompletionActivity {
					public static class: java.lang.Class<com.stripe.android.view.Stripe3ds2CompletionActivity>;
					public static EXTRA_CLIENT_SECRET: string;
					public static EXTRA_STRIPE_ACCOUNT: string;
					public static Companion: com.stripe.android.view.Stripe3ds2CompletionActivity.Companion;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor();
				}
				export module Stripe3ds2CompletionActivity {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.view.Stripe3ds2CompletionActivity.Companion>;
					}
					export class WhenMappings {
						public static class: java.lang.Class<com.stripe.android.view.Stripe3ds2CompletionActivity.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export abstract class StripeActivity {
					public static class: java.lang.Class<com.stripe.android.view.StripeActivity>;
					public onActionSave(): void;
					public isProgressBarVisible(): boolean;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public getViewStub$stripe_release(): globalAndroid.view.ViewStub;
					public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
					public onPrepareOptionsMenu(param0: globalAndroid.view.Menu): boolean;
					public constructor();
					public onProgressBarVisibilityChanged(param0: boolean): void;
					public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
					public getProgressBar$stripe_release(): globalAndroid.widget.ProgressBar;
					public setProgressBarVisible(param0: boolean): void;
					public showError(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class StripeColorUtils {
					public static class: java.lang.Class<com.stripe.android.view.StripeColorUtils>;
					public static Companion: com.stripe.android.view.StripeColorUtils.Companion;
					public constructor(param0: globalAndroid.content.Context);
					public getColorControlNormal(): number;
					public getTextColorSecondary(): number;
					public getColorAccent(): number;
					public getTextColorPrimary(): number;
					public getTintedIconWithAttribute(param0: globalAndroid.content.res.Resources.Theme, param1: number, param2: number): globalAndroid.graphics.drawable.Drawable;
				}
				export module StripeColorUtils {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.view.StripeColorUtils.Companion>;
						public isColorTransparent(param0: number): boolean;
						public isColorDark(param0: number): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class StripeEditText {
					public static class: java.lang.Class<com.stripe.android.view.StripeEditText>;
					public setHintDelayed(param0: number, param1: number): void;
					public getCachedColorStateList(): globalAndroid.content.res.ColorStateList;
					public getJob$stripe_release(): kotlinx.coroutines.CompletableJob;
					public getAccessibilityText(): string;
					public setLastKeyDelete(param0: boolean): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getShouldShowError(): boolean;
					public setErrorMessage(param0: string): void;
					public setShouldShowError(param0: boolean): void;
					public setHintDelayed(param0: string, param1: number): void;
					public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
					public setDeleteEmptyListener(param0: com.stripe.android.view.StripeEditText.DeleteEmptyListener): void;
					public onDetachedFromWindow(): void;
					public getErrorMessage$stripe_release(): string;
					public setErrorMessageListener(param0: com.stripe.android.view.StripeEditText.ErrorMessageListener): void;
					public getDefaultErrorColorInt(): number;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setAfterTextChangedListener(param0: com.stripe.android.view.StripeEditText.AfterTextChangedListener): void;
					public onCreateInputConnection(param0: globalAndroid.view.inputmethod.EditorInfo): globalAndroid.view.inputmethod.InputConnection;
					public setErrorMessage$stripe_release(param0: string): void;
					public constructor(param0: globalAndroid.content.Context);
					public setErrorColor(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: kotlin.coroutines.CoroutineContext);
					public getFieldText$stripe_release(): string;
					public isLastKeyDelete(): boolean;
				}
				export module StripeEditText {
					export class AfterTextChangedListener {
						public static class: java.lang.Class<com.stripe.android.view.StripeEditText.AfterTextChangedListener>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.StripeEditText$AfterTextChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onTextChanged(param0: string): void;
						});
						public constructor();
						public onTextChanged(param0: string): void;
					}
					export class DeleteEmptyListener {
						public static class: java.lang.Class<com.stripe.android.view.StripeEditText.DeleteEmptyListener>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.StripeEditText$DeleteEmptyListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onDeleteEmpty(): void;
						});
						public constructor();
						public onDeleteEmpty(): void;
					}
					export class ErrorMessageListener {
						public static class: java.lang.Class<com.stripe.android.view.StripeEditText.ErrorMessageListener>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.StripeEditText$ErrorMessageListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							displayErrorMessage(param0: string): void;
						});
						public constructor();
						public displayErrorMessage(param0: string): void;
					}
					export class SoftDeleteInputConnection {
						public static class: java.lang.Class<com.stripe.android.view.StripeEditText.SoftDeleteInputConnection>;
						public deleteSurroundingText(param0: number, param1: number): boolean;
						public constructor(param0: globalAndroid.view.inputmethod.InputConnection, param1: boolean, param2: com.stripe.android.view.StripeEditText.DeleteEmptyListener);
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export abstract class StripeTextWatcher {
					public static class: java.lang.Class<com.stripe.android.view.StripeTextWatcher>;
					public afterTextChanged(param0: globalAndroid.text.Editable): void;
					public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
					public constructor();
					public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class SwipeToDeleteCallbackListener extends com.stripe.android.view.PaymentMethodSwipeCallback.Listener {
					public static class: java.lang.Class<com.stripe.android.view.SwipeToDeleteCallbackListener>;
					public onSwiped(param0: com.stripe.android.model.PaymentMethod): void;
					public constructor(param0: com.stripe.android.view.DeletePaymentMethodDialogFactory);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class ThemeConfig {
					public static class: java.lang.Class<com.stripe.android.view.ThemeConfig>;
					public constructor(param0: globalAndroid.content.Context);
					public getTextColor$stripe_release(param0: boolean): number;
					public getTextAlphaColor$stripe_release(param0: boolean): number;
					public getTintColor$stripe_release(param0: boolean): number;
					public getTextColorValues$stripe_release(): native.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class ViewWidthAnimator {
					public static class: java.lang.Class<com.stripe.android.view.ViewWidthAnimator>;
					public animate(param0: number, param1: number, param2: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
					public constructor(param0: globalAndroid.view.View, param1: number);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export module i18n {
					export class ErrorMessageTranslator {
						public static class: java.lang.Class<com.stripe.android.view.i18n.ErrorMessageTranslator>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.i18n.ErrorMessageTranslator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							translate(param0: number, param1: string, param2: com.stripe.android.StripeError): string;
						});
						public constructor();
						public translate(param0: number, param1: string, param2: com.stripe.android.StripeError): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export module i18n {
					export class TranslatorManager {
						public static class: java.lang.Class<com.stripe.android.view.i18n.TranslatorManager>;
						public static INSTANCE: com.stripe.android.view.i18n.TranslatorManager;
						public getErrorMessageTranslator(): com.stripe.android.view.i18n.ErrorMessageTranslator;
						public setErrorMessageTranslator(param0: com.stripe.android.view.i18n.ErrorMessageTranslator): void;
					}
					export module TranslatorManager {
						export class Default extends com.stripe.android.view.i18n.ErrorMessageTranslator {
							public static class: java.lang.Class<com.stripe.android.view.i18n.TranslatorManager.Default>;
							public constructor();
							public translate(param0: number, param1: string, param2: com.stripe.android.StripeError): string;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//com.stripe.android.ApiOperation:1
//com.stripe.android.ApiResultCallback:1
//com.stripe.android.Factory0:1
//com.stripe.android.Factory1:2
//com.stripe.android.ObjectBuilder:1
//com.stripe.android.StripeIntentResult:1
//com.stripe.android.Supplier:1
//com.stripe.android.model.parsers.ModelJsonParser:1
//com.stripe.android.utils.Either:2
//com.stripe.android.utils.Either.Left:2
//com.stripe.android.utils.Either.Right:2
//com.stripe.android.view.ActivityStarter:2
//com.stripe.android.view.AuthActivityStarter:1


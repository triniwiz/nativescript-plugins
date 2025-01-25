declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module AndroidKt {
						export class WhenMappings {
							public static class: java.lang.Class<io.github.jan.supabase.auth.AndroidKt.WhenMappings>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export class Auth extends java.lang.Object {
						public static class: java.lang.Class<io.github.jan.supabase.auth.Auth>;
						/**
						 * Constructs a new instance of the io.github.jan.supabase.auth.Auth interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getSessionStatus(): kotlinx.coroutines.flow.StateFlow<io.github.jan.supabase.auth.status.SessionStatus>;
							isAutoRefreshRunning(): boolean;
							getSessionManager(): io.github.jan.supabase.auth.SessionManager;
							getAdmin(): io.github.jan.supabase.auth.admin.AdminApi;
							getMfa(): io.github.jan.supabase.auth.mfa.MfaApi;
							getCodeVerifierCache(): io.github.jan.supabase.auth.CodeVerifierCache;
							signUpWith(param0: io.github.jan.supabase.auth.providers.AuthProvider<any,any>, param1: string, param2: any, param3: any): any;
							signInWith(param0: io.github.jan.supabase.auth.providers.AuthProvider<any,any>, param1: string, param2: any, param3: any): any;
							signInAnonymously(param0: kotlinx.serialization.json.JsonObject, param1: string, param2: any): any;
							linkIdentity(param0: io.github.jan.supabase.auth.providers.OAuthProvider, param1: string, param2: any, param3: any): any;
							unlinkIdentity(param0: string, param1: boolean, param2: any): any;
							retrieveSSOUrl(param0: string, param1: any, param2: any): any;
							updateUser(param0: boolean, param1: string, param2: any, param3: any): any;
							resendEmail(param0: io.github.jan.supabase.auth.OtpType.Email, param1: string, param2: string, param3: any): any;
							resendPhone(param0: io.github.jan.supabase.auth.OtpType.Phone, param1: string, param2: string, param3: any): any;
							resetPasswordForEmail(param0: string, param1: string, param2: string, param3: any): any;
							reauthenticate(param0: any): any;
							verifyEmailOtp(param0: io.github.jan.supabase.auth.OtpType.Email, param1: string, param2: string, param3: string, param4: any): any;
							verifyEmailOtp(param0: io.github.jan.supabase.auth.OtpType.Email, param1: string, param2: string, param3: any): any;
							verifyPhoneOtp(param0: io.github.jan.supabase.auth.OtpType.Phone, param1: string, param2: string, param3: string, param4: any): any;
							retrieveUser(param0: string, param1: any): any;
							retrieveUserForCurrentSession(param0: boolean, param1: any): any;
							signOut(param0: io.github.jan.supabase.auth.SignOutScope, param1: any): any;
							importSession(param0: io.github.jan.supabase.auth.user.UserSession, param1: boolean, param2: io.github.jan.supabase.auth.status.SessionSource, param3: any): any;
							importAuthToken(param0: string, param1: string, param2: boolean, param3: boolean, param4: any): any;
							loadFromStorage(param0: boolean, param1: any): any;
							refreshSession(param0: string, param1: any): any;
							refreshCurrentSession(param0: any): any;
							clearSession(param0: any): any;
							exchangeCodeForSession(param0: string, param1: boolean, param2: any): any;
							startAutoRefreshForCurrentSession(param0: any): any;
							getOAuthUrl(param0: io.github.jan.supabase.auth.providers.OAuthProvider, param1: string, param2: string, param3: any): string;
							stopAutoRefreshForCurrentSession(): void;
							currentAccessTokenOrNull(): string;
							currentSessionOrNull(): io.github.jan.supabase.auth.user.UserSession;
							currentUserOrNull(): io.github.jan.supabase.auth.user.UserInfo;
							currentIdentitiesOrNull(): java.util.List<io.github.jan.supabase.auth.user.Identity>;
							awaitInitialization(param0: any): any;
							"<clinit>"(): void;
						});
						public constructor();
						public static API_VERSION: number = 1;
						public refreshCurrentSession(param0: any): any;
						public signInAnonymously(param0: kotlinx.serialization.json.JsonObject, param1: string, param2: any): any;
						public verifyEmailOtp(param0: io.github.jan.supabase.auth.OtpType.Email, param1: string, param2: string, param3: any): any;
						public loadFromStorage(param0: boolean, param1: any): any;
						public stopAutoRefreshForCurrentSession(): void;
						public currentIdentitiesOrNull(): java.util.List<io.github.jan.supabase.auth.user.Identity>;
						public importAuthToken(param0: string, param1: string, param2: boolean, param3: boolean, param4: any): any;
						public exchangeCodeForSession(param0: string, param1: boolean, param2: any): any;
						public updateUser(param0: boolean, param1: string, param2: any, param3: any): any;
						public awaitInitialization(param0: any): any;
						public currentSessionOrNull(): io.github.jan.supabase.auth.user.UserSession;
						public getAdmin(): io.github.jan.supabase.auth.admin.AdminApi;
						public signUpWith(param0: io.github.jan.supabase.auth.providers.AuthProvider<any,any>, param1: string, param2: any, param3: any): any;
						public getSessionStatus(): kotlinx.coroutines.flow.StateFlow<io.github.jan.supabase.auth.status.SessionStatus>;
						public resendEmail(param0: io.github.jan.supabase.auth.OtpType.Email, param1: string, param2: string, param3: any): any;
						public verifyPhoneOtp(param0: io.github.jan.supabase.auth.OtpType.Phone, param1: string, param2: string, param3: string, param4: any): any;
						public getOAuthUrl(param0: io.github.jan.supabase.auth.providers.OAuthProvider, param1: string, param2: string, param3: any): string;
						public currentAccessTokenOrNull(): string;
						public reauthenticate(param0: any): any;
						public verifyEmailOtp(param0: io.github.jan.supabase.auth.OtpType.Email, param1: string, param2: string, param3: string, param4: any): any;
						public linkIdentity(param0: io.github.jan.supabase.auth.providers.OAuthProvider, param1: string, param2: any, param3: any): any;
						public retrieveSSOUrl(param0: string, param1: any, param2: any): any;
						public refreshSession(param0: string, param1: any): any;
						public resetPasswordForEmail(param0: string, param1: string, param2: string, param3: any): any;
						public isAutoRefreshRunning(): boolean;
						public unlinkIdentity(param0: string, param1: boolean, param2: any): any;
						public retrieveUserForCurrentSession(param0: boolean, param1: any): any;
						public signOut(param0: io.github.jan.supabase.auth.SignOutScope, param1: any): any;
						public getCodeVerifierCache(): io.github.jan.supabase.auth.CodeVerifierCache;
						public getMfa(): io.github.jan.supabase.auth.mfa.MfaApi;
						public clearSession(param0: any): any;
						public startAutoRefreshForCurrentSession(param0: any): any;
						public importSession(param0: io.github.jan.supabase.auth.user.UserSession, param1: boolean, param2: io.github.jan.supabase.auth.status.SessionSource, param3: any): any;
						public getSessionManager(): io.github.jan.supabase.auth.SessionManager;
						public signInWith(param0: io.github.jan.supabase.auth.providers.AuthProvider<any,any>, param1: string, param2: any, param3: any): any;
						public retrieveUser(param0: string, param1: any): any;
						public resendPhone(param0: io.github.jan.supabase.auth.OtpType.Phone, param1: string, param2: string, param3: any): any;
						public currentUserOrNull(): io.github.jan.supabase.auth.user.UserInfo;
					}
					export module Auth {
						export class Companion extends io.github.jan.supabase.plugins.SupabasePluginProvider<io.github.jan.supabase.auth.AuthConfig,io.github.jan.supabase.auth.Auth> {
							public static class: java.lang.Class<io.github.jan.supabase.auth.Auth.Companion>;
							public static API_VERSION: number = 1;
							public getKey(): string;
							public setLogLevel(level: io.github.jan.supabase.logging.LogLevel): void;
							public create(supabaseClient: io.github.jan.supabase.SupabaseClient, config: io.github.jan.supabase.auth.AuthConfig): io.github.jan.supabase.auth.Auth;
							public createConfig(init: any): io.github.jan.supabase.auth.AuthConfig;
							public getLogger(): io.github.jan.supabase.logging.SupabaseLogger;
							public setup(builder: io.github.jan.supabase.SupabaseClientBuilder, config: io.github.jan.supabase.auth.AuthConfig): void;
						}
						export class DefaultImpls {
							public static class: java.lang.Class<io.github.jan.supabase.auth.Auth.DefaultImpls>;
							public static resolveUrl($this: io.github.jan.supabase.auth.Auth, path: string): string;
							public static importAuthToken($this: io.github.jan.supabase.auth.Auth, accessToken: string, refreshToken: string, retrieveUser: boolean, autoRefresh: boolean, autoRefresh: any): any;
							public static currentUserOrNull($this: io.github.jan.supabase.auth.Auth): io.github.jan.supabase.auth.user.UserInfo;
							public static currentSessionOrNull(status: io.github.jan.supabase.auth.Auth): io.github.jan.supabase.auth.user.UserSession;
							public static currentAccessTokenOrNull($this: io.github.jan.supabase.auth.Auth): string;
							public static init($this: io.github.jan.supabase.auth.Auth): void;
							public static currentIdentitiesOrNull($this: io.github.jan.supabase.auth.Auth): java.util.List<io.github.jan.supabase.auth.user.Identity>;
							public static close($this: io.github.jan.supabase.auth.Auth, $completion: any): any;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export class AuthConfig extends io.github.jan.supabase.auth.AuthConfigDefaults {
						public static class: java.lang.Class<io.github.jan.supabase.auth.AuthConfig>;
						public setDefaultExternalAuthAction(value: io.github.jan.supabase.auth.ExternalAuthAction): void;
						public constructor();
						public getDefaultExternalAuthAction(): io.github.jan.supabase.auth.ExternalAuthAction;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export class AuthConfigDefaults {
						public static class: java.lang.Class<io.github.jan.supabase.auth.AuthConfigDefaults>;
						public setAutoSaveToStorage(value: boolean): void;
						public getScheme(): string;
						public setAutoLoadFromStorage(value: boolean): void;
						public setHost(value: string): void;
						public getAlwaysAutoRefresh(): boolean;
						public getHost(): string;
						public setAlwaysAutoRefresh(value: boolean): void;
						public getFlowType(): io.github.jan.supabase.auth.FlowType;
						public getCoroutineDispatcher(): kotlinx.coroutines.CoroutineDispatcher;
						public getDefaultRedirectUrl(): string;
						public setSerializer(value: io.github.jan.supabase.SupabaseSerializer): void;
						public getAutoSaveToStorage(): boolean;
						public setCoroutineDispatcher(value: kotlinx.coroutines.CoroutineDispatcher): void;
						public constructor();
						public setEnableLifecycleCallbacks(value: boolean): void;
						public getSerializer(): io.github.jan.supabase.SupabaseSerializer;
						public getEnableLifecycleCallbacks(): boolean;
						public "getRetryDelay-UwyO8pc"(): number;
						public "setRetryDelay-LRDsOJo"(value: number): void;
						public setDefaultRedirectUrl(value: string): void;
						public setSessionManager(value: io.github.jan.supabase.auth.SessionManager): void;
						public getCodeVerifierCache(): io.github.jan.supabase.auth.CodeVerifierCache;
						public getAutoLoadFromStorage(): boolean;
						public setCodeVerifierCache(value: io.github.jan.supabase.auth.CodeVerifierCache): void;
						public getSessionManager(): io.github.jan.supabase.auth.SessionManager;
						public setFlowType(value: io.github.jan.supabase.auth.FlowType): void;
						public setScheme(value: string): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export class AuthImpl extends io.github.jan.supabase.auth.Auth {
						public static class: java.lang.Class<io.github.jan.supabase.auth.AuthImpl>;
						public unlinkIdentity(this_: string, this_: boolean, this_: any): any;
						public linkIdentity(this_: io.github.jan.supabase.auth.providers.OAuthProvider, this_: string, provider: any, provider: any): any;
						public refreshCurrentSession(param0: any): any;
						public awaitInitialization($completion: any): any;
						public getSupabaseClient(): io.github.jan.supabase.SupabaseClient;
						public signInAnonymously(param0: kotlinx.serialization.json.JsonObject, param1: string, param2: any): any;
						public signInWith(provider: io.github.jan.supabase.auth.providers.AuthProvider<any,any>, redirectUrl: string, config: any, $completion: any): any;
						public getApiVersion(): number;
						public verifyPhoneOtp(type: io.github.jan.supabase.auth.OtpType.Phone, phone: string, token: string, captchaToken: string, $completion: any): any;
						public exchangeCodeForSession(param0: string, param1: boolean, param2: any): any;
						public retrieveUser(jwt: string, response: any): any;
						public getSessionStatus(): kotlinx.coroutines.flow.StateFlow<io.github.jan.supabase.auth.status.SessionStatus>;
						public startAutoRefreshForCurrentSession($completion: any): any;
						public verifyPhoneOtp(param0: io.github.jan.supabase.auth.OtpType.Phone, param1: string, param2: string, param3: string, param4: any): any;
						public getPluginKey(): string;
						public currentAccessTokenOrNull(): string;
						public reauthenticate(param0: any): any;
						public linkIdentity(param0: io.github.jan.supabase.auth.providers.OAuthProvider, param1: string, param2: any, param3: any): any;
						public retrieveSSOUrl(param0: string, param1: any, param2: any): any;
						public resendPhone(type: io.github.jan.supabase.auth.OtpType.Phone, phone: string, captchaToken: string, $completion: any): any;
						public verifyEmailOtp(type: io.github.jan.supabase.auth.OtpType.Email, email: string, token: string, captchaToken: string, $completion: any): any;
						public parseErrorResponse(this_: io.ktor.client.statement.HttpResponse, this_: any): any;
						public getSerializer(): io.github.jan.supabase.SupabaseSerializer;
						public importAuthToken(accessToken: string, refreshToken: string, retrieveUser: boolean, autoRefresh: boolean, $completion: any): any;
						public refreshSession(param0: string, param1: any): any;
						public exchangeCodeForSession(this_: string, this_: boolean, this_: any): any;
						public getApi$auth_kt_release(): io.github.jan.supabase.auth.AuthenticatedSupabaseApi;
						public verifyEmailOtp(type: io.github.jan.supabase.auth.OtpType.Email, tokenHash: string, captchaToken: string, $completion: any): any;
						//public getOAuthUrl(it: io.github.jan.supabase.auth.providers.OAuthProvider, key: string, value: string, $i$a$-buildString-AuthImpl$getOAuthUrl$2: any): string;
						public isAutoRefreshRunning(): boolean;
						public refreshSession(this_: string, this_: any): any;
						public retrieveUserForCurrentSession(param0: boolean, param1: any): any;
						public clearSession(param0: any): any;
						public startAutoRefreshForCurrentSession(param0: any): any;
						public importSession(param0: io.github.jan.supabase.auth.user.UserSession, param1: boolean, param2: io.github.jan.supabase.auth.status.SessionSource, param3: any): any;
						public signOut(this_: io.github.jan.supabase.auth.SignOutScope, this_: any): any;
						public getSessionManager(): io.github.jan.supabase.auth.SessionManager;
						public signInAnonymously(this_: kotlinx.serialization.json.JsonObject, this_: string, this_: any): any;
						public currentUserOrNull(): io.github.jan.supabase.auth.user.UserInfo;
						public getConfig(): io.github.jan.supabase.auth.AuthConfig;
						public refreshCurrentSession(this_: any): any;
						public verifyEmailOtp(param0: io.github.jan.supabase.auth.OtpType.Email, param1: string, param2: string, param3: any): any;
						public getAuthScope$auth_kt_release(): kotlinx.coroutines.CoroutineScope;
						public loadFromStorage(param0: boolean, param1: any): any;
						public stopAutoRefreshForCurrentSession(): void;
						public currentIdentitiesOrNull(): java.util.List<io.github.jan.supabase.auth.user.Identity>;
						public retrieveSSOUrl(this_: string, this_: any, this_: any): any;
						public importAuthToken(param0: string, param1: string, param2: boolean, param3: boolean, param4: any): any;
						public updateUser(param0: boolean, param1: string, param2: any, param3: any): any;
						public awaitInitialization(param0: any): any;
						public init(): void;
						public currentSessionOrNull(): io.github.jan.supabase.auth.user.UserSession;
						public getAdmin(): io.github.jan.supabase.auth.admin.AdminApi;
						public signUpWith(param0: io.github.jan.supabase.auth.providers.AuthProvider<any,any>, param1: string, param2: any, param3: any): any;
						public resendEmail(type: io.github.jan.supabase.auth.OtpType.Email, email: string, captchaToken: string, $completion: any): any;
						public resendEmail(param0: io.github.jan.supabase.auth.OtpType.Email, param1: string, param2: string, param3: any): any;
						public clearSession(this_: any): any;
						public getOAuthUrl(param0: io.github.jan.supabase.auth.providers.OAuthProvider, param1: string, param2: string, param3: any): string;
						//public resetPasswordForEmail($i$a$-let-AuthImpl$resetPasswordForEmail$body$1$1: string, p0: string, $i$a$-let-AuthImpl$resetPasswordForEmail$body$1$2: string, p0: any): any;
						public verifyEmailOtp(param0: io.github.jan.supabase.auth.OtpType.Email, param1: string, param2: string, param3: string, param4: any): any;
						public importSession(this_: io.github.jan.supabase.auth.user.UserSession, this_: boolean, this_: io.github.jan.supabase.auth.status.SessionSource, this_: any): any;
						public resolveUrl(path: string): string;
						public constructor(supabaseClient: io.github.jan.supabase.SupabaseClient, config: io.github.jan.supabase.auth.AuthConfig);
						public getSessionJob(): kotlinx.coroutines.Job;
						public signUpWith(provider: io.github.jan.supabase.auth.providers.AuthProvider<any,any>, redirectUrl: string, config: any, $completion: any): any;
						public resetPasswordForEmail(param0: string, param1: string, param2: string, param3: any): any;
						public setSessionJob(value: kotlinx.coroutines.Job): void;
						public unlinkIdentity(param0: string, param1: boolean, param2: any): any;
						public signOut(param0: io.github.jan.supabase.auth.SignOutScope, param1: any): any;
						public retrieveUserForCurrentSession(this_: boolean, this_: any): any;
						public getCodeVerifierCache(): io.github.jan.supabase.auth.CodeVerifierCache;
						public close($completion: any): any;
						public getMfa(): io.github.jan.supabase.auth.mfa.MfaApi;
						public reauthenticate($this$iv: any): any;
						public loadFromStorage(this_: boolean, autoRefresh: any): any;
						public resetLoadingState(): void;
						public updateUser(this_: boolean, this_: string, this_: any, this_: any): any;
						public signInWith(param0: io.github.jan.supabase.auth.providers.AuthProvider<any,any>, param1: string, param2: any, param3: any): any;
						public retrieveUser(param0: string, param1: any): any;
						public resendPhone(param0: io.github.jan.supabase.auth.OtpType.Phone, param1: string, param2: string, param3: any): any;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export class AuthenticatedSupabaseApi {
						public static class: java.lang.Class<io.github.jan.supabase.auth.AuthenticatedSupabaseApi>;
						public rawRequest(this_: string, this_: any, url: any): any;
						public prepareRequest(url: string, builder: any, $completion: any): any;
						public constructor(resolveUrl: any, parseErrorResponse: any, defaultRequest: any, supabaseClient: io.github.jan.supabase.SupabaseClient, jwtToken: string);
						public rawRequest(builder: any, $completion: any): any;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export class CodeVerifierCache {
						public static class: java.lang.Class<io.github.jan.supabase.auth.CodeVerifierCache>;
						/**
						 * Constructs a new instance of the io.github.jan.supabase.auth.CodeVerifierCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							saveCodeVerifier(param0: string, param1: any): any;
							loadCodeVerifier(param0: any): any;
							deleteCodeVerifier(param0: any): any;
						});
						public constructor();
						public saveCodeVerifier(param0: string, param1: any): any;
						public loadCodeVerifier(param0: any): any;
						public deleteCodeVerifier(param0: any): any;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export class ExternalAuthAction {
						public static class: java.lang.Class<io.github.jan.supabase.auth.ExternalAuthAction>;
						/**
						 * Constructs a new instance of the io.github.jan.supabase.auth.ExternalAuthAction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							"<clinit>"(): void;
						});
						public constructor();
					}
					export module ExternalAuthAction {
						export class Companion {
							public static class: java.lang.Class<io.github.jan.supabase.auth.ExternalAuthAction.Companion>;
							public getDEFAULT(): io.github.jan.supabase.auth.ExternalAuthAction;
						}
						export class CustomTabs extends io.github.jan.supabase.auth.ExternalAuthAction {
							public static class: java.lang.Class<io.github.jan.supabase.auth.ExternalAuthAction.CustomTabs>;
							public constructor();
							public constructor(intentBuilder: any);
							public copy(intentBuilder: any): io.github.jan.supabase.auth.ExternalAuthAction.CustomTabs;
							public hashCode(): number;
							public component1(): any;
							public equals(other: any): boolean;
							public toString(): string;
							public getIntentBuilder(): any;
						}
						export class ExternalBrowser extends io.github.jan.supabase.auth.ExternalAuthAction {
							public static class: java.lang.Class<io.github.jan.supabase.auth.ExternalAuthAction.ExternalBrowser>;
							public static INSTANCE: io.github.jan.supabase.auth.ExternalAuthAction.ExternalBrowser;
							public hashCode(): number;
							public equals(other: any): boolean;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export class FlowType {
						public static class: java.lang.Class<io.github.jan.supabase.auth.FlowType>;
						public static IMPLICIT: io.github.jan.supabase.auth.FlowType;
						public static PKCE: io.github.jan.supabase.auth.FlowType;
						public static valueOf(value: string): io.github.jan.supabase.auth.FlowType;
						public static values(): androidNative.Array<io.github.jan.supabase.auth.FlowType>;
						public static getEntries(): any;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export class GoTrueErrorResponse {
						public static class: java.lang.Class<io.github.jan.supabase.auth.GoTrueErrorResponse>;
						public getWeakPassword(): io.github.jan.supabase.auth.GoTrueErrorResponse.WeakPassword;
						public constructor(error: string, description: string, weakPassword: io.github.jan.supabase.auth.GoTrueErrorResponse.WeakPassword);
						public equals(other: any): boolean;
						public copy(error: string, description: string, weakPassword: io.github.jan.supabase.auth.GoTrueErrorResponse.WeakPassword): io.github.jan.supabase.auth.GoTrueErrorResponse;
						public component2(): string;
						public component1(): string;
						public hashCode(): number;
						public getError(): string;
						public getDescription(): string;
						public component3(): io.github.jan.supabase.auth.GoTrueErrorResponse.WeakPassword;
						public toString(): string;
					}
					export module GoTrueErrorResponse {
						export class Companion extends kotlinx.serialization.KSerializer<io.github.jan.supabase.auth.GoTrueErrorResponse> {
							public static class: java.lang.Class<io.github.jan.supabase.auth.GoTrueErrorResponse.Companion>;
							public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.auth.GoTrueErrorResponse>;
							public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.auth.GoTrueErrorResponse): void;
							public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
							public deserialize($this$decodeFromJsonElement$iv: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.auth.GoTrueErrorResponse;
						}
						export class WeakPassword {
							public static class: java.lang.Class<io.github.jan.supabase.auth.GoTrueErrorResponse.WeakPassword>;
							public component1(): java.util.List<string>;
							public copy(reasons: java.util.List<string>): io.github.jan.supabase.auth.GoTrueErrorResponse.WeakPassword;
							public hashCode(): number;
							public equals(other: any): boolean;
							public getReasons(): java.util.List<string>;
							public toString(): string;
							public constructor(reasons: java.util.List<string>);
						}
					
						export module WeakPassword {
								export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.auth.GoTrueErrorResponse.WeakPassword> {
									public static class: java.lang.Class<io.github.jan.supabase.auth.GoTrueErrorResponse.WeakPassword.serializer>;
									public static INSTANCE: io.github.jan.supabase.auth.GoTrueErrorResponse.WeakPassword.serializer;
									public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
									public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.auth.GoTrueErrorResponse.WeakPassword;
									public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.auth.GoTrueErrorResponse.WeakPassword): void;
									public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
									public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
								}
							}
							export class Companion {
								public static class: java.lang.Class<io.github.jan.supabase.auth.GoTrueErrorResponse.WeakPassword.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.auth.GoTrueErrorResponse.WeakPassword>;
							}
						
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export class MemoryCodeVerifierCache extends io.github.jan.supabase.auth.CodeVerifierCache {
						public static class: java.lang.Class<io.github.jan.supabase.auth.MemoryCodeVerifierCache>;
						public saveCodeVerifier(codeVerifier: string, $completion: any): any;
						public constructor();
						public saveCodeVerifier(param0: string, param1: any): any;
						public loadCodeVerifier($completion: any): any;
						public deleteCodeVerifier($completion: any): any;
						public loadCodeVerifier(param0: any): any;
						public constructor(codeVerifier: string);
						public deleteCodeVerifier(param0: any): any;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export class MemorySessionManager extends io.github.jan.supabase.auth.SessionManager {
						public static class: java.lang.Class<io.github.jan.supabase.auth.MemorySessionManager>;
						public constructor();
						public saveSession(param0: io.github.jan.supabase.auth.user.UserSession, param1: any): any;
						public loadSession($completion: any): any;
						public deleteSession(param0: any): any;
						public constructor(session: io.github.jan.supabase.auth.user.UserSession);
						public saveSession(session: io.github.jan.supabase.auth.user.UserSession, $completion: any): any;
						public deleteSession($completion: any): any;
						public loadSession(param0: any): any;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export class OtpType {
						public static class: java.lang.Class<io.github.jan.supabase.auth.OtpType>;
						/**
						 * Constructs a new instance of the io.github.jan.supabase.auth.OtpType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getType(): string;
						});
						public constructor();
						public getType(): string;
					}
					export module OtpType {
						export class Email extends io.github.jan.supabase.auth.OtpType {
							public static class: java.lang.Class<io.github.jan.supabase.auth.OtpType.Email>;
							public static MAGIC_LINK: io.github.jan.supabase.auth.OtpType.Email;
							public static SIGNUP: io.github.jan.supabase.auth.OtpType.Email;
							public static INVITE: io.github.jan.supabase.auth.OtpType.Email;
							public static RECOVERY: io.github.jan.supabase.auth.OtpType.Email;
							public static EMAIL_CHANGE: io.github.jan.supabase.auth.OtpType.Email;
							public static EMAIL: io.github.jan.supabase.auth.OtpType.Email;
							public static getEntries(): any;
							public static valueOf(value: string): io.github.jan.supabase.auth.OtpType.Email;
							public getType(): string;
							public static values(): androidNative.Array<io.github.jan.supabase.auth.OtpType.Email>;
						}
						export class Phone extends io.github.jan.supabase.auth.OtpType {
							public static class: java.lang.Class<io.github.jan.supabase.auth.OtpType.Phone>;
							public static SMS: io.github.jan.supabase.auth.OtpType.Phone;
							public static PHONE_CHANGE: io.github.jan.supabase.auth.OtpType.Phone;
							public static values(): androidNative.Array<io.github.jan.supabase.auth.OtpType.Phone>;
							public static getEntries(): any;
							public static valueOf(value: string): io.github.jan.supabase.auth.OtpType.Phone;
							public getType(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export class PKCEConstants {
						public static class: java.lang.Class<io.github.jan.supabase.auth.PKCEConstants>;
						public static INSTANCE: io.github.jan.supabase.auth.PKCEConstants;
						public static VERIFIER_LENGTH: number = 64;
						public static CHALLENGE_METHOD: string = "s256";
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export class PostgrestFilterDSL {
						public static class: java.lang.Class<io.github.jan.supabase.auth.PostgrestFilterDSL>;
						/**
						 * Constructs a new instance of the io.github.jan.supabase.auth.PostgrestFilterDSL interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export class SessionManager {
						public static class: java.lang.Class<io.github.jan.supabase.auth.SessionManager>;
						/**
						 * Constructs a new instance of the io.github.jan.supabase.auth.SessionManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							saveSession(param0: io.github.jan.supabase.auth.user.UserSession, param1: any): any;
							loadSession(param0: any): any;
							deleteSession(param0: any): any;
						});
						public constructor();
						public saveSession(param0: io.github.jan.supabase.auth.user.UserSession, param1: any): any;
						public deleteSession(param0: any): any;
						public loadSession(param0: any): any;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export class SettingsCodeVerifierCache extends io.github.jan.supabase.auth.CodeVerifierCache {
						public static class: java.lang.Class<io.github.jan.supabase.auth.SettingsCodeVerifierCache>;
						public static SETTINGS_KEY: string = "supabase_code_verifier";
						public saveCodeVerifier(codeVerifier: string, $completion: any): any;
						public constructor();
						public saveCodeVerifier(param0: string, param1: any): any;
						public loadCodeVerifier($completion: any): any;
						public deleteCodeVerifier($completion: any): any;
						public loadCodeVerifier(param0: any): any;
						public constructor(settings: com.russhwolf.settings.Settings, key: string);
						public deleteCodeVerifier(param0: any): any;
					}
					export module SettingsCodeVerifierCache {
						export class Companion {
							public static class: java.lang.Class<io.github.jan.supabase.auth.SettingsCodeVerifierCache.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export class SettingsSessionManager extends io.github.jan.supabase.auth.SessionManager {
						public static class: java.lang.Class<io.github.jan.supabase.auth.SettingsSessionManager>;
						public static SETTINGS_KEY: string = "session";
						public constructor();
						public saveSession(param0: io.github.jan.supabase.auth.user.UserSession, param1: any): any;
						public loadSession(this_: any): any;
						public deleteSession(param0: any): any;
						public constructor(settings: com.russhwolf.settings.Settings, key: string, json: kotlinx.serialization.json.Json);
						public saveSession($this$encodeToString$iv: io.github.jan.supabase.auth.user.UserSession, this_: any): any;
						public deleteSession($completion: any): any;
						public loadSession(param0: any): any;
					}
					export module SettingsSessionManager {
						export class Companion {
							public static class: java.lang.Class<io.github.jan.supabase.auth.SettingsSessionManager.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export class SignOutScope {
						public static class: java.lang.Class<io.github.jan.supabase.auth.SignOutScope>;
						public static GLOBAL: io.github.jan.supabase.auth.SignOutScope;
						public static LOCAL: io.github.jan.supabase.auth.SignOutScope;
						public static OTHERS: io.github.jan.supabase.auth.SignOutScope;
						public static valueOf(value: string): io.github.jan.supabase.auth.SignOutScope;
						public static values(): androidNative.Array<io.github.jan.supabase.auth.SignOutScope>;
						public static getEntries(): any;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export class SupabaseInitializer extends androidx.startup.Initializer<globalAndroid.content.Context> {
						public static class: java.lang.Class<io.github.jan.supabase.auth.SupabaseInitializer>;
						public dependencies(): java.util.List<java.lang.Class<any>>;
						public constructor();
						public create(it: globalAndroid.content.Context): globalAndroid.content.Context;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module admin {
						export class AdminApi {
							public static class: java.lang.Class<io.github.jan.supabase.auth.admin.AdminApi>;
							/**
							 * Constructs a new instance of the io.github.jan.supabase.auth.admin.AdminApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								createUserWithEmail(param0: any, param1: any): any;
								createUserWithPhone(param0: any, param1: any): any;
								signOut(param0: string, param1: io.github.jan.supabase.auth.SignOutScope, param2: any): any;
								logout(param0: string, param1: io.github.jan.supabase.auth.SignOutScope, param2: any): any;
								retrieveUsers(param0: java.lang.Integer, param1: java.lang.Integer, param2: any): any;
								retrieveUserById(param0: string, param1: any): any;
								deleteUser(param0: string, param1: any): any;
								inviteUserByEmail(param0: string, param1: string, param2: kotlinx.serialization.json.JsonObject, param3: any): any;
								updateUserById(param0: string, param1: any, param2: any): any;
								retrieveFactors(param0: string, param1: any): any;
								deleteFactor(param0: string, param1: string, param2: any): any;
							});
							public constructor();
							public deleteUser(param0: string, param1: any): any;
							public createUserWithEmail(param0: any, param1: any): any;
							public retrieveFactors(param0: string, param1: any): any;
							public createUserWithPhone(param0: any, param1: any): any;
							public signOut(param0: string, param1: io.github.jan.supabase.auth.SignOutScope, param2: any): any;
							public retrieveUsers(param0: java.lang.Integer, param1: java.lang.Integer, param2: any): any;
							public updateUserById(param0: string, param1: any, param2: any): any;
							public inviteUserByEmail(param0: string, param1: string, param2: kotlinx.serialization.json.JsonObject, param3: any): any;
							public logout(param0: string, param1: io.github.jan.supabase.auth.SignOutScope, param2: any): any;
							public deleteFactor(param0: string, param1: string, param2: any): any;
							public retrieveUserById(param0: string, param1: any): any;
						}
						export module AdminApi {
							export class DefaultImpls {
								public static class: java.lang.Class<io.github.jan.supabase.auth.admin.AdminApi.DefaultImpls>;
								public static logout($this: io.github.jan.supabase.auth.admin.AdminApi, jwt: string, scope: io.github.jan.supabase.auth.SignOutScope, $completion: any): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module admin {
						export class AdminApiImpl extends io.github.jan.supabase.auth.admin.AdminApi {
							public static class: java.lang.Class<io.github.jan.supabase.auth.admin.AdminApiImpl>;
							public retrieveFactors(uid: string, $this$iv: any): any;
							public signOut(this_$iv: string, url$iv: io.github.jan.supabase.auth.SignOutScope, this_: any): any;
							public createUserWithEmail(this_: any, builder: any): any;
							public retrieveUserById(uid: string, $this$iv: any): any;
							public retrieveUsers(page: java.lang.Integer, perPage: java.lang.Integer, this_$iv: any): any;
							public constructor(gotrue: io.github.jan.supabase.auth.Auth);
							public createUserWithEmail(param0: any, param1: any): any;
							public createUserWithPhone(param0: any, param1: any): any;
							public signOut(param0: string, param1: io.github.jan.supabase.auth.SignOutScope, param2: any): any;
							public retrieveUsers(param0: java.lang.Integer, param1: java.lang.Integer, param2: any): any;
							public logout(param0: string, param1: io.github.jan.supabase.auth.SignOutScope, param2: any): any;
							public getApi(): io.github.jan.supabase.auth.AuthenticatedSupabaseApi;
							public retrieveUserById(param0: string, param1: any): any;
							//public inviteUserByEmail(it: string, $i$a$-buildJsonObject-AdminApiImpl$inviteUserByEmail$body$1: string, $this$inviteUserByEmail_u24lambda_u246: kotlinx.serialization.json.JsonObject, $i$f$buildJsonObject: any): any;
							public updateUserById(this_: string, uid: any, uid: any): any;
							public updateUserById(param0: string, param1: any, param2: any): any;
							public deleteFactor($this$iv: string, url$iv: string, this_: any): any;
							public logout(jwt: string, scope: io.github.jan.supabase.auth.SignOutScope, $completion: any): any;
							public getGotrue(): io.github.jan.supabase.auth.Auth;
							public deleteUser(param0: string, param1: any): any;
							public retrieveFactors(param0: string, param1: any): any;
							public inviteUserByEmail(param0: string, param1: string, param2: kotlinx.serialization.json.JsonObject, param3: any): any;
							public deleteUser($this$iv: string, url$iv: any): any;
							public deleteFactor(param0: string, param1: string, param2: any): any;
							public createUserWithPhone(this_: any, builder: any): any;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module admin {
						export abstract class AdminUserBuilder {
							public static class: java.lang.Class<io.github.jan.supabase.auth.admin.AdminUserBuilder>;
							public appMetadata(builder$iv: any): void;
							public getAutoConfirm(): boolean;
							public setAppMetadata(value: kotlinx.serialization.json.JsonObject): void;
							public setAutoConfirm(value: boolean): void;
							public setPassword(value: string): void;
							public getPassword(): string;
							public userMetadata(builder$iv: any): void;
							public getAppMetadata(): kotlinx.serialization.json.JsonObject;
							public getUserMetadata(): kotlinx.serialization.json.JsonObject;
							public setUserMetadata(value: kotlinx.serialization.json.JsonObject): void;
						}
						export module AdminUserBuilder {
							export class Companion extends kotlinx.serialization.KSerializer<io.github.jan.supabase.auth.admin.AdminUserBuilder> {
								public static class: java.lang.Class<io.github.jan.supabase.auth.admin.AdminUserBuilder.Companion>;
							//public serialize($i$a$-require-AdminUserBuilder$Companion$serialize$2: kotlinx.serialization.encoding.Encoder, $i$a$-require-AdminUserBuilder$Companion$serialize$3: io.github.jan.supabase.auth.admin.AdminUserBuilder): void;
								public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.auth.admin.AdminUserBuilder;
								public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.auth.admin.AdminUserBuilder>;
								public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
							}
							export class Email extends io.github.jan.supabase.auth.admin.AdminUserBuilder {
								public static class: java.lang.Class<io.github.jan.supabase.auth.admin.AdminUserBuilder.Email>;
								public component1(): string;
								public getEmail(): string;
								public toString(): string;
								public constructor();
								public setEmail(value: string): void;
								public copy(email: string): io.github.jan.supabase.auth.admin.AdminUserBuilder.Email;
								public hashCode(): number;
								public equals(other: any): boolean;
								public constructor(email: string);
							}
							export class Phone extends io.github.jan.supabase.auth.admin.AdminUserBuilder {
								public static class: java.lang.Class<io.github.jan.supabase.auth.admin.AdminUserBuilder.Phone>;
								public component1(): string;
								public toString(): string;
								public getPhone(): string;
								public setPhone(value: string): void;
								public constructor();
								public constructor(phone: string);
								public hashCode(): number;
								public equals(other: any): boolean;
								public copy(phone: string): io.github.jan.supabase.auth.admin.AdminUserBuilder.Phone;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module admin {
						export class AdminUserUpdateBuilder {
							public static class: java.lang.Class<io.github.jan.supabase.auth.admin.AdminUserUpdateBuilder>;
							public component7(): string;
							public getBanDuration(): string;
							public setBanDuration(value: string): void;
							public hashCode(): number;
							public setPassword(value: string): void;
							public setAppMetadata(value: kotlinx.serialization.json.JsonObject): void;
							public constructor(email: string, password: string, appMetadata: kotlinx.serialization.json.JsonObject, userMetadata: kotlinx.serialization.json.JsonObject, emailConfirm: java.lang.Boolean, phoneConfirm: java.lang.Boolean, phone: string, banDuration: string, role: string);
							public setRole(value: string): void;
							public toString(): string;
							public setEmail(value: string): void;
							public component1(): string;
							public setPhoneConfirm(value: java.lang.Boolean): void;
							public getPhoneConfirm(): java.lang.Boolean;
							public component6(): java.lang.Boolean;
							public equals(other: any): boolean;
							public component5(): java.lang.Boolean;
							public setUserMetadata(value: kotlinx.serialization.json.JsonObject): void;
							public constructor();
							public component2(): string;
							public component9(): string;
							public getEmailConfirm(): java.lang.Boolean;
							public getPassword(): string;
							public setPhone(value: string): void;
							public getAppMetadata(): kotlinx.serialization.json.JsonObject;
							public component8(): string;
							public setEmailConfirm(value: java.lang.Boolean): void;
							public getPhone(): string;
							public getEmail(): string;
							public component3(): kotlinx.serialization.json.JsonObject;
							public component4(): kotlinx.serialization.json.JsonObject;
							public getRole(): string;
							public getUserMetadata(): kotlinx.serialization.json.JsonObject;
							public copy(email: string, password: string, appMetadata: kotlinx.serialization.json.JsonObject, userMetadata: kotlinx.serialization.json.JsonObject, emailConfirm: java.lang.Boolean, phoneConfirm: java.lang.Boolean, phone: string, banDuration: string, role: string): io.github.jan.supabase.auth.admin.AdminUserUpdateBuilder;
						}
						
						export module AdminUserUpdateBuilder {
								export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.auth.admin.AdminUserUpdateBuilder> {
									public static class: java.lang.Class<io.github.jan.supabase.auth.admin.AdminUserUpdateBuilder.serializer>;
									public static INSTANCE: io.github.jan.supabase.auth.admin.AdminUserUpdateBuilder.serializer;
									public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
									public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.auth.admin.AdminUserUpdateBuilder;
									public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.auth.admin.AdminUserUpdateBuilder): void;
									public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
									public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
								}
							}
							export class Companion {
								public static class: java.lang.Class<io.github.jan.supabase.auth.admin.AdminUserUpdateBuilder.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.auth.admin.AdminUserUpdateBuilder>;
							}
						
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module admin {
						export class LinkType<C>  extends java.lang.Object {
							public static class: java.lang.Class<io.github.jan.supabase.auth.admin.LinkType<any>>;
							/**
							 * Constructs a new instance of the io.github.jan.supabase.auth.admin.LinkType<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getType(): string;
								createConfig(param0: any): C;
							});
							public constructor();
							public getType(): string;
							public createConfig(param0: any): C;
						}
						export module LinkType {
							export class Config {
								public static class: java.lang.Class<io.github.jan.supabase.auth.admin.LinkType.Config>;
								public getEmail(): string;
								public constructor();
								public setEmail(value: string): void;
							}
							
							export module Config {
									export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.auth.admin.LinkType.Config> {
										public static class: java.lang.Class<io.github.jan.supabase.auth.admin.LinkType.Config.serializer>;
										public static INSTANCE: io.github.jan.supabase.auth.admin.LinkType.Config.serializer;
										public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
										public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
										public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
										public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.auth.admin.LinkType.Config;
										public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.auth.admin.LinkType.Config): void;
									}
								}
								export class Companion {
									public static class: java.lang.Class<io.github.jan.supabase.auth.admin.LinkType.Config.Companion>;
									public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.auth.admin.LinkType.Config>;
								}
							
							export class EmailChangeCurrent extends io.github.jan.supabase.auth.admin.LinkType<io.github.jan.supabase.auth.admin.LinkType.EmailChangeCurrent.Config> {
								public static class: java.lang.Class<io.github.jan.supabase.auth.admin.LinkType.EmailChangeCurrent>;
								public static INSTANCE: io.github.jan.supabase.auth.admin.LinkType.EmailChangeCurrent;
								public createConfig(config: any): io.github.jan.supabase.auth.admin.LinkType.EmailChangeCurrent.Config;
								public toString(): string;
								public createConfig(param0: any): any;
								public hashCode(): number;
								public getType(): string;
								public equals(other: any): boolean;
							}
							export module EmailChangeCurrent {
								export class Config extends io.github.jan.supabase.auth.admin.LinkType.Config {
									public static class: java.lang.Class<io.github.jan.supabase.auth.admin.LinkType.EmailChangeCurrent.Config>;
									public constructor();
									public hashCode(): number;
									public copy(newEmail: string): io.github.jan.supabase.auth.admin.LinkType.EmailChangeCurrent.Config;
									public equals(other: any): boolean;
									public getNewEmail(): string;
									public setNewEmail(value: string): void;
									public constructor(newEmail: string);
									public toString(): string;
									public component1(): string;
								}
								
								export module Config {
										export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.auth.admin.LinkType.EmailChangeCurrent.Config> {
											public static class: java.lang.Class<io.github.jan.supabase.auth.admin.LinkType.EmailChangeCurrent.Config.serializer>;
											public static INSTANCE: io.github.jan.supabase.auth.admin.LinkType.EmailChangeCurrent.Config.serializer;
											public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.auth.admin.LinkType.EmailChangeCurrent.Config;
											public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
											public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
											public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
											public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.auth.admin.LinkType.EmailChangeCurrent.Config): void;
										}
									}
									export class Companion {
										public static class: java.lang.Class<io.github.jan.supabase.auth.admin.LinkType.EmailChangeCurrent.Config.Companion>;
										public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.auth.admin.LinkType.EmailChangeCurrent.Config>;
									}
								
							}
							export class EmailChangeNew extends io.github.jan.supabase.auth.admin.LinkType<io.github.jan.supabase.auth.admin.LinkType.EmailChangeCurrent.Config> {
								public static class: java.lang.Class<io.github.jan.supabase.auth.admin.LinkType.EmailChangeNew>;
								public static INSTANCE: io.github.jan.supabase.auth.admin.LinkType.EmailChangeNew;
								public createConfig(config: any): io.github.jan.supabase.auth.admin.LinkType.EmailChangeCurrent.Config;
								public toString(): string;
								public createConfig(param0: any): any;
								public hashCode(): number;
								public getType(): string;
								public equals(other: any): boolean;
							}
							export class Invite extends io.github.jan.supabase.auth.admin.LinkType<io.github.jan.supabase.auth.admin.LinkType.Config> {
								public static class: java.lang.Class<io.github.jan.supabase.auth.admin.LinkType.Invite>;
								public static INSTANCE: io.github.jan.supabase.auth.admin.LinkType.Invite;
								public toString(): string;
								public createConfig(config: any): io.github.jan.supabase.auth.admin.LinkType.Config;
								public createConfig(param0: any): any;
								public hashCode(): number;
								public getType(): string;
								public equals(other: any): boolean;
							}
							export class MagicLink extends io.github.jan.supabase.auth.admin.LinkType<io.github.jan.supabase.auth.admin.LinkType.Config> {
								public static class: java.lang.Class<io.github.jan.supabase.auth.admin.LinkType.MagicLink>;
								public static INSTANCE: io.github.jan.supabase.auth.admin.LinkType.MagicLink;
								public toString(): string;
								public createConfig(config: any): io.github.jan.supabase.auth.admin.LinkType.Config;
								public createConfig(param0: any): any;
								public hashCode(): number;
								public getType(): string;
								public equals(other: any): boolean;
							}
							export class RecoveryLink extends io.github.jan.supabase.auth.admin.LinkType<io.github.jan.supabase.auth.admin.LinkType.Config> {
								public static class: java.lang.Class<io.github.jan.supabase.auth.admin.LinkType.RecoveryLink>;
								public static INSTANCE: io.github.jan.supabase.auth.admin.LinkType.RecoveryLink;
								public toString(): string;
								public createConfig(config: any): io.github.jan.supabase.auth.admin.LinkType.Config;
								public createConfig(param0: any): any;
								public hashCode(): number;
								public getType(): string;
								public equals(other: any): boolean;
							}
							export class Signup extends io.github.jan.supabase.auth.admin.LinkType<io.github.jan.supabase.auth.admin.LinkType.Signup.Config> {
								public static class: java.lang.Class<io.github.jan.supabase.auth.admin.LinkType.Signup>;
								public static INSTANCE: io.github.jan.supabase.auth.admin.LinkType.Signup;
								public createConfig(config: any): io.github.jan.supabase.auth.admin.LinkType.Signup.Config;
								public toString(): string;
								public createConfig(param0: any): any;
								public hashCode(): number;
								public getType(): string;
								public equals(other: any): boolean;
							}
							export module Signup {
								export class Config extends io.github.jan.supabase.auth.admin.LinkType.Config {
									public static class: java.lang.Class<io.github.jan.supabase.auth.admin.LinkType.Signup.Config>;
									public constructor();
									public hashCode(): number;
									public equals(other: any): boolean;
									public getPassword(): string;
									public getData(): kotlinx.serialization.json.JsonObject;
									public setPassword(value: string): void;
									public toString(): string;
									public copy(password: string, data: kotlinx.serialization.json.JsonObject): io.github.jan.supabase.auth.admin.LinkType.Signup.Config;
									public constructor(password: string, data: kotlinx.serialization.json.JsonObject);
									public component1(): string;
									public setData(value: kotlinx.serialization.json.JsonObject): void;
									public component2(): kotlinx.serialization.json.JsonObject;
								}
									
								export module Config {
										export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.auth.admin.LinkType.Signup.Config> {
											public static class: java.lang.Class<io.github.jan.supabase.auth.admin.LinkType.Signup.Config.serializer>;
											public static INSTANCE: io.github.jan.supabase.auth.admin.LinkType.Signup.Config.serializer;
											public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.auth.admin.LinkType.Signup.Config): void;
											public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.auth.admin.LinkType.Signup.Config;
											public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
											public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
											public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
										}
									}
									export class Companion {
										public static class: java.lang.Class<io.github.jan.supabase.auth.admin.LinkType.Signup.Config.Companion>;
										public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.auth.admin.LinkType.Signup.Config>;
									}
								
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module exception {
						export class AuthErrorCode {
							public static class: java.lang.Class<io.github.jan.supabase.auth.exception.AuthErrorCode>;
							public static UnexpectedFailure: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static ValidationFailed: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static BadJson: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static EmailExists: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static PhoneExists: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static BadJwt: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static NotAdmin: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static NoAuthorization: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static UserNotFound: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static SessionNotFound: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static SessionExpired: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static RefreshTokenNotFound: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static RefreshTokenAlreadyUsed: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static FlowStateNotFound: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static FlowStateExpired: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static SignupDisabled: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static UserBanned: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static ProviderEmailNeedsVerification: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static InviteNotFound: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static BadOauthState: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static BadOauthCallback: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static OauthProviderNotSupported: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static UnexpectedAudience: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static SingleIdentityNotDeletable: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static EmailConflictIdentityNotDeletable: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static IdentityAlreadyExists: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static EmailProviderDisabled: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static PhoneProviderDisabled: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static TooManyEnrolledMfaFactors: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static MfaFactorNameConflict: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static MfaFactorNotFound: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static MfaIpAddressMismatch: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static MfaChallengeExpired: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static MfaVerificationFailed: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static MfaVerificationRejected: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static InsufficientAal: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static CaptchaFailed: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static SamlProviderDisabled: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static ManualLinkingDisabled: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static SmsSendFailed: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static EmailNotConfirmed: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static PhoneNotConfirmed: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static ReauthNonceMissing: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static SamlRelayStateNotFound: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static SamlRelayStateExpired: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static SamlIdpNotFound: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static SamlAssertionNoUserId: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static SamlAssertionNoEmail: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static UserAlreadyExists: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static SsoProviderNotFound: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static SamlMetadataFetchFailed: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static SamlIdpAlreadyExists: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static SsoDomainAlreadyExists: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static SamlEntityIdMismatch: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static Conflict: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static ProviderDisabled: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static UserSsoManaged: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static ReauthenticationNeeded: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static SamePassword: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static ReauthenticationNotValid: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static OtpExpired: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static OtpDisabled: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static IdentityNotFound: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static WeakPassword: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static OverRequestRateLimit: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static OverEmailSendRateLimit: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static OverSmsSendRateLimit: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static BadCodeVerifier: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static InvalidCredentials: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static EmailAddressNotAuthorized: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static AnonymousProviderDisabled: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static HookTimeout: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static HookTimeoutAfterRetry: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static HookPayloadOverSizeLimit: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static HookPayloadInvalidContentType: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static RequestTimeout: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static MfaPhoneEnrollDisabled: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static MfaPhoneVerifyDisabled: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static MfaTotpEnrollDisabled: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static MfaTotpVerifyDisabled: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static MfaWebAuthnEnrollDisabled: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static MfaWebAuthnVerifyDisabled: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static MfaVerifiedFactorExists: io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static valueOf(value: string): io.github.jan.supabase.auth.exception.AuthErrorCode;
							public static values(): androidNative.Array<io.github.jan.supabase.auth.exception.AuthErrorCode>;
							public getValue(): string;
							public static getEntries(): any;
						}
						export module AuthErrorCode {
							export class Companion {
								public static class: java.lang.Class<io.github.jan.supabase.auth.exception.AuthErrorCode.Companion>;
								public fromValue(it: string): io.github.jan.supabase.auth.exception.AuthErrorCode;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module exception {
						export class AuthRestException {
							public static class: java.lang.Class<io.github.jan.supabase.auth.exception.AuthRestException>;
							public constructor(errorCode: string, message: string, statusCode: number);
							public getErrorCode(): io.github.jan.supabase.auth.exception.AuthErrorCode;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module exception {
						export class AuthSessionMissingException extends io.github.jan.supabase.auth.exception.AuthRestException {
							public static class: java.lang.Class<io.github.jan.supabase.auth.exception.AuthSessionMissingException>;
							public static CODE: string = "session_not_found";
							public constructor(statusCode: number);
							public constructor(errorCode: string, message: string, statusCode: number);
						}
						export module AuthSessionMissingException {
							export class Companion {
								public static class: java.lang.Class<io.github.jan.supabase.auth.exception.AuthSessionMissingException.Companion>;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module exception {
						export class AuthWeakPasswordException extends io.github.jan.supabase.auth.exception.AuthRestException {
							public static class: java.lang.Class<io.github.jan.supabase.auth.exception.AuthWeakPasswordException>;
							public static CODE: string = "weak_password";
							public constructor(description: string, statusCode: number, reasons: java.util.List<string>);
							public getReasons(): java.util.List<string>;
							public constructor(errorCode: string, message: string, statusCode: number);
						}
						export module AuthWeakPasswordException {
							export class Companion {
								public static class: java.lang.Class<io.github.jan.supabase.auth.exception.AuthWeakPasswordException.Companion>;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module mfa {
						export class AuthenticatorAssuranceLevel {
							public static class: java.lang.Class<io.github.jan.supabase.auth.mfa.AuthenticatorAssuranceLevel>;
							public static AAL1: io.github.jan.supabase.auth.mfa.AuthenticatorAssuranceLevel;
							public static AAL2: io.github.jan.supabase.auth.mfa.AuthenticatorAssuranceLevel;
							public static valueOf(value: string): io.github.jan.supabase.auth.mfa.AuthenticatorAssuranceLevel;
							public static getEntries(): any;
							public static values(): androidNative.Array<io.github.jan.supabase.auth.mfa.AuthenticatorAssuranceLevel>;
						}
						export module AuthenticatorAssuranceLevel {
							export class Companion {
								public static class: java.lang.Class<io.github.jan.supabase.auth.mfa.AuthenticatorAssuranceLevel.Companion>;
								public from(value: string): io.github.jan.supabase.auth.mfa.AuthenticatorAssuranceLevel;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module mfa {
						export abstract class FactorType<Config, Response>  extends java.lang.Object {
							public static class: java.lang.Class<io.github.jan.supabase.auth.mfa.FactorType<any,any>>;
							public decodeResponse(param0: kotlinx.serialization.json.JsonObject, param1: any): any;
							public encodeConfig(param0: any, param1: any): any;
							public getValue(): string;
						}
						export module FactorType {
							export class Phone extends io.github.jan.supabase.auth.mfa.FactorType<io.github.jan.supabase.auth.mfa.FactorType.Phone.Config,io.github.jan.supabase.auth.mfa.FactorType.Phone.Response> {
								public static class: java.lang.Class<io.github.jan.supabase.auth.mfa.FactorType.Phone>;
								public static INSTANCE: io.github.jan.supabase.auth.mfa.FactorType.Phone;
								public encodeConfig($this$encodeToJsonElement$iv: any, value$iv: any): any;
								public toString(): string;
								public decodeResponse(json: kotlinx.serialization.json.JsonObject, $completion: any): any;
								public hashCode(): number;
								public equals(other: any): boolean;
							}
							export module Phone {
								export class Config {
									public static class: java.lang.Class<io.github.jan.supabase.auth.mfa.FactorType.Phone.Config>;
									public copy(phone: string): io.github.jan.supabase.auth.mfa.FactorType.Phone.Config;
									public hashCode(): number;
									public constructor();
									public equals(other: any): boolean;
									public toString(): string;
									public getPhone(): string;
									public constructor(phone: string);
									public component1(): string;
									public setPhone(value: string): void;
								}
								
								export module Config {
										export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.auth.mfa.FactorType.Phone.Config> {
											public static class: java.lang.Class<io.github.jan.supabase.auth.mfa.FactorType.Phone.Config.serializer>;
											public static INSTANCE: io.github.jan.supabase.auth.mfa.FactorType.Phone.Config.serializer;
											public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
											public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.auth.mfa.FactorType.Phone.Config;
											public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
											public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
											public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.auth.mfa.FactorType.Phone.Config): void;
										}
									}
									export class Companion {
										public static class: java.lang.Class<io.github.jan.supabase.auth.mfa.FactorType.Phone.Config.Companion>;
										public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.auth.mfa.FactorType.Phone.Config>;
									}
								
								export class Response {
									public static class: java.lang.Class<io.github.jan.supabase.auth.mfa.FactorType.Phone.Response>;
									public hashCode(): number;
									public equals(other: any): boolean;
									public copy(phone: string): io.github.jan.supabase.auth.mfa.FactorType.Phone.Response;
									public toString(): string;
									public getPhone(): string;
									public constructor(phone: string);
									public component1(): string;
								}
								
								export module Response {
										export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.auth.mfa.FactorType.Phone.Response> {
											public static class: java.lang.Class<io.github.jan.supabase.auth.mfa.FactorType.Phone.Response.serializer>;
											public static INSTANCE: io.github.jan.supabase.auth.mfa.FactorType.Phone.Response.serializer;
											public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.auth.mfa.FactorType.Phone.Response;
											public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
											public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
											public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
											public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.auth.mfa.FactorType.Phone.Response): void;
										}
									}
									export class Companion {
										public static class: java.lang.Class<io.github.jan.supabase.auth.mfa.FactorType.Phone.Response.Companion>;
										public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.auth.mfa.FactorType.Phone.Response>;
									}
								
							}
							export class TOTP extends io.github.jan.supabase.auth.mfa.FactorType<io.github.jan.supabase.auth.mfa.FactorType.TOTP.Config,io.github.jan.supabase.auth.mfa.FactorType.TOTP.Response> {
								public static class: java.lang.Class<io.github.jan.supabase.auth.mfa.FactorType.TOTP>;
								public static INSTANCE: io.github.jan.supabase.auth.mfa.FactorType.TOTP;
								public encodeConfig($this$encodeToJsonElement$iv: any, value$iv: any): any;
								public toString(): string;
								public decodeResponse($this$decodeFromJsonElement$iv: kotlinx.serialization.json.JsonObject, json$iv: any): any;
								public hashCode(): number;
								public equals(other: any): boolean;
							}
							export module TOTP {
								export class Config {
									public static class: java.lang.Class<io.github.jan.supabase.auth.mfa.FactorType.TOTP.Config>;
									public getIssuer(): string;
									public hashCode(): number;
									public constructor();
									public equals(other: any): boolean;
									public constructor(issuer: string);
									public setIssuer(value: string): void;
									public copy(issuer: string): io.github.jan.supabase.auth.mfa.FactorType.TOTP.Config;
									public toString(): string;
									public component1(): string;
								}
								
								export module Config {
										export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.auth.mfa.FactorType.TOTP.Config> {
											public static class: java.lang.Class<io.github.jan.supabase.auth.mfa.FactorType.TOTP.Config.serializer>;
											public static INSTANCE: io.github.jan.supabase.auth.mfa.FactorType.TOTP.Config.serializer;
											public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.auth.mfa.FactorType.TOTP.Config;
											public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
											public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
											public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
											public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.auth.mfa.FactorType.TOTP.Config): void;
										}
									}
									export class Companion {
										public static class: java.lang.Class<io.github.jan.supabase.auth.mfa.FactorType.TOTP.Config.Companion>;
										public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.auth.mfa.FactorType.TOTP.Config>;
									}
								
								export class Response {
									public static class: java.lang.Class<io.github.jan.supabase.auth.mfa.FactorType.TOTP.Response>;
									public component2(): string;
									public hashCode(): number;
									public equals(other: any): boolean;
									public getUri(): string;
									public getSecret(): string;
									public copy(secret: string, qrCode: string, uri: string): io.github.jan.supabase.auth.mfa.FactorType.TOTP.Response;
									public toString(): string;
									public constructor(secret: string, qrCode: string, uri: string);
									public getQrCode(): string;
									public component3(): string;
									public component1(): string;
								}
								
								export module Response {
										export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.auth.mfa.FactorType.TOTP.Response> {
											public static class: java.lang.Class<io.github.jan.supabase.auth.mfa.FactorType.TOTP.Response.serializer>;
											public static INSTANCE: io.github.jan.supabase.auth.mfa.FactorType.TOTP.Response.serializer;
											public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.auth.mfa.FactorType.TOTP.Response): void;
											public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.auth.mfa.FactorType.TOTP.Response;
											public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
											public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
											public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
										}
									}
									export class Companion {
										public static class: java.lang.Class<io.github.jan.supabase.auth.mfa.FactorType.TOTP.Response.Companion>;
										public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.auth.mfa.FactorType.TOTP.Response>;
									}
								
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module mfa {
						export class MfaApi {
							public static class: java.lang.Class<io.github.jan.supabase.auth.mfa.MfaApi>;
							/**
							 * Constructs a new instance of the io.github.jan.supabase.auth.mfa.MfaApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getStatus(): io.github.jan.supabase.auth.mfa.MfaStatus;
								getStatusFlow(): kotlinx.coroutines.flow.Flow<io.github.jan.supabase.auth.mfa.MfaStatus>;
								getVerifiedFactors(): java.util.List<io.github.jan.supabase.auth.user.UserMfaFactor>;
								enroll(param0: io.github.jan.supabase.auth.mfa.FactorType<any,any>, param1: string, param2: any, param3: any): any;
								unenroll(param0: string, param1: any): any;
								createChallenge(param0: string, param1: io.github.jan.supabase.auth.providers.builtin.Phone.Channel, param2: any): any;
								createChallengeAndVerify(param0: string, param1: string, param2: io.github.jan.supabase.auth.providers.builtin.Phone.Channel, param3: boolean, param4: any): any;
								verifyChallenge(param0: string, param1: string, param2: string, param3: boolean, param4: any): any;
								retrieveFactorsForCurrentUser(param0: any): any;
								getAuthenticatorAssuranceLevel(): io.github.jan.supabase.auth.mfa.MfaLevel;
							});
							public constructor();
							public getStatusFlow(): kotlinx.coroutines.flow.Flow<io.github.jan.supabase.auth.mfa.MfaStatus>;
							public enroll(param0: io.github.jan.supabase.auth.mfa.FactorType<any,any>, param1: string, param2: any, param3: any): any;
							public verifyChallenge(param0: string, param1: string, param2: string, param3: boolean, param4: any): any;
							public retrieveFactorsForCurrentUser(param0: any): any;
							public createChallengeAndVerify(param0: string, param1: string, param2: io.github.jan.supabase.auth.providers.builtin.Phone.Channel, param3: boolean, param4: any): any;
							public unenroll(param0: string, param1: any): any;
							public getStatus(): io.github.jan.supabase.auth.mfa.MfaStatus;
							public getVerifiedFactors(): java.util.List<io.github.jan.supabase.auth.user.UserMfaFactor>;
							public createChallenge(param0: string, param1: io.github.jan.supabase.auth.providers.builtin.Phone.Channel, param2: any): any;
							public getAuthenticatorAssuranceLevel(): io.github.jan.supabase.auth.mfa.MfaLevel;
						}
						export module MfaApi {
							export class DefaultImpls {
								public static class: java.lang.Class<io.github.jan.supabase.auth.mfa.MfaApi.DefaultImpls>;
								public static createChallengeAndVerify($this: io.github.jan.supabase.auth.mfa.MfaApi, $this: string, $this: string, factorId: io.github.jan.supabase.auth.providers.builtin.Phone.Channel, factorId: boolean, factorId: any): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module mfa {
						export class MfaApiImpl extends io.github.jan.supabase.auth.mfa.MfaApi {
							public static class: java.lang.Class<io.github.jan.supabase.auth.mfa.MfaApiImpl>;
							public getStatusFlow(): kotlinx.coroutines.flow.Flow<io.github.jan.supabase.auth.mfa.MfaStatus>;
							public enroll(param0: io.github.jan.supabase.auth.mfa.FactorType<any,any>, param1: string, param2: any, param3: any): any;
							public verifyChallenge(param0: string, param1: string, param2: string, param3: boolean, param4: any): any;
							public retrieveFactorsForCurrentUser(param0: any): any;
							public getAuth(): io.github.jan.supabase.auth.AuthImpl;
							public getStatus(): io.github.jan.supabase.auth.mfa.MfaStatus;
							public constructor($i$f$unsafeTransform: io.github.jan.supabase.auth.AuthImpl);
							public enroll(factorType: io.github.jan.supabase.auth.mfa.FactorType<any,any>, factorType: string, factorType: any, factorType: any): any;
							public createChallengeAndVerify(param0: string, param1: string, param2: io.github.jan.supabase.auth.providers.builtin.Phone.Channel, param3: boolean, param4: any): any;
							public unenroll($this$iv: string, url$iv: any): any;
							public unenroll(param0: string, param1: any): any;
							public retrieveFactorsForCurrentUser($completion: any): any;
							public createChallengeAndVerify(factorId: string, code: string, channel: io.github.jan.supabase.auth.providers.builtin.Phone.Channel, saveSession: boolean, $completion: any): any;
							public getApi(): io.github.jan.supabase.auth.AuthenticatedSupabaseApi;
							public getVerifiedFactors(): java.util.List<io.github.jan.supabase.auth.user.UserMfaFactor>;
							public getAuthenticatorAssuranceLevel(): io.github.jan.supabase.auth.mfa.MfaLevel;
							public createChallenge(param0: string, param1: io.github.jan.supabase.auth.providers.builtin.Phone.Channel, param2: any): any;
							public verifyChallenge(this_: string, this_: string, this_: string, this_: boolean, this_: any): any;
							public createChallenge(factorId: string, channel: io.github.jan.supabase.auth.providers.builtin.Phone.Channel, result: any): any;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module mfa {
						export class MfaChallenge {
							public static class: java.lang.Class<io.github.jan.supabase.auth.mfa.MfaChallenge>;
							public component2(): string;
							public copy(id: string, factorType: string): io.github.jan.supabase.auth.mfa.MfaChallenge;
							public hashCode(): number;
							public getId(): string;
							public equals(other: any): boolean;
							public toString(): string;
							public getFactorType(): string;
							public getExpiresAt(): kotlinx.datetime.Instant;
							public constructor(id: string, factorType: string);
							public component1(): string;
						}
					
						export module MfaChallenge {
								export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.auth.mfa.MfaChallenge> {
									public static class: java.lang.Class<io.github.jan.supabase.auth.mfa.MfaChallenge.serializer>;
									public static INSTANCE: io.github.jan.supabase.auth.mfa.MfaChallenge.serializer;
									public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
									public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.auth.mfa.MfaChallenge;
									public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
									public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
									public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.auth.mfa.MfaChallenge): void;
								}
							}
							export class Companion {
								public static class: java.lang.Class<io.github.jan.supabase.auth.mfa.MfaChallenge.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.auth.mfa.MfaChallenge>;
							}
						
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module mfa {
						export class MfaFactor<T>  extends java.lang.Object {
							public static class: java.lang.Class<io.github.jan.supabase.auth.mfa.MfaFactor<any>>;
							public component2(): string;
							public copy(id: string, type: string, data: T): io.github.jan.supabase.auth.mfa.MfaFactor<T>;
							public hashCode(): number;
							public getId(): string;
							public equals(other: any): boolean;
							public component3(): T;
							public constructor(id: string, type: string, data: T);
							public getData(): T;
							public toString(): string;
							public getType(): string;
							public component1(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module mfa {
						export class MfaLevel {
							public static class: java.lang.Class<io.github.jan.supabase.auth.mfa.MfaLevel>;
							public component1(): io.github.jan.supabase.auth.mfa.AuthenticatorAssuranceLevel;
							public component2(): io.github.jan.supabase.auth.mfa.AuthenticatorAssuranceLevel;
							public hashCode(): number;
							public copy(current: io.github.jan.supabase.auth.mfa.AuthenticatorAssuranceLevel, next: io.github.jan.supabase.auth.mfa.AuthenticatorAssuranceLevel): io.github.jan.supabase.auth.mfa.MfaLevel;
							public equals(other: any): boolean;
							public getCurrent(): io.github.jan.supabase.auth.mfa.AuthenticatorAssuranceLevel;
							public getNext(): io.github.jan.supabase.auth.mfa.AuthenticatorAssuranceLevel;
							public toString(): string;
							public constructor(current: io.github.jan.supabase.auth.mfa.AuthenticatorAssuranceLevel, next: io.github.jan.supabase.auth.mfa.AuthenticatorAssuranceLevel);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module mfa {
						export class MfaStatus {
							public static class: java.lang.Class<io.github.jan.supabase.auth.mfa.MfaStatus>;
							public getEnabled(): boolean;
							public component1(): boolean;
							public hashCode(): number;
							public getActive(): boolean;
							public component2(): boolean;
							public equals(other: any): boolean;
							public toString(): string;
							public constructor(enabled: boolean, active: boolean);
							public copy(enabled: boolean, active: boolean): io.github.jan.supabase.auth.mfa.MfaStatus;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export class Apple extends io.github.jan.supabase.auth.providers.IDTokenProvider {
							public static class: java.lang.Class<io.github.jan.supabase.auth.providers.Apple>;
							public static INSTANCE: io.github.jan.supabase.auth.providers.Apple;
							public signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public hashCode(): number;
							public getName(): string;
							public equals(other: any): boolean;
							public login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export class AuthProvider<C, R>  extends java.lang.Object {
							public static class: java.lang.Class<io.github.jan.supabase.auth.providers.AuthProvider<any,any>>;
							/**
							 * Constructs a new instance of the io.github.jan.supabase.auth.providers.AuthProvider<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
								signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							});
							public constructor();
							public signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
						}
						export module AuthProvider {
							export class DefaultImpls {
								public static class: java.lang.Class<io.github.jan.supabase.auth.providers.AuthProvider.DefaultImpls>;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export class Azure extends io.github.jan.supabase.auth.providers.IDTokenProvider {
							public static class: java.lang.Class<io.github.jan.supabase.auth.providers.Azure>;
							public static INSTANCE: io.github.jan.supabase.auth.providers.Azure;
							public signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public hashCode(): number;
							public getName(): string;
							public equals(other: any): boolean;
							public login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export class Bitbucket extends io.github.jan.supabase.auth.providers.OAuthProvider {
							public static class: java.lang.Class<io.github.jan.supabase.auth.providers.Bitbucket>;
							public static INSTANCE: io.github.jan.supabase.auth.providers.Bitbucket;
							public signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public hashCode(): number;
							public getName(): string;
							public equals(other: any): boolean;
							public login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export class Discord extends io.github.jan.supabase.auth.providers.OAuthProvider {
							public static class: java.lang.Class<io.github.jan.supabase.auth.providers.Discord>;
							public static INSTANCE: io.github.jan.supabase.auth.providers.Discord;
							public signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public hashCode(): number;
							public getName(): string;
							public equals(other: any): boolean;
							public login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export class ExternalAuthConfig extends io.github.jan.supabase.auth.providers.ExternalAuthConfigDefaults {
							public static class: java.lang.Class<io.github.jan.supabase.auth.providers.ExternalAuthConfig>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export class ExternalAuthConfigDefaults {
							public static class: java.lang.Class<io.github.jan.supabase.auth.providers.ExternalAuthConfigDefaults>;
							public constructor();
							public setAutomaticallyOpenUrl(value: boolean): void;
							public getAutomaticallyOpenUrl(): boolean;
							public getQueryParams(): java.util.Map<string,string>;
							public getScopes(): java.util.List<string>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export class Facebook extends io.github.jan.supabase.auth.providers.IDTokenProvider {
							public static class: java.lang.Class<io.github.jan.supabase.auth.providers.Facebook>;
							public static INSTANCE: io.github.jan.supabase.auth.providers.Facebook;
							public signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public hashCode(): number;
							public getName(): string;
							public equals(other: any): boolean;
							public login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export class Figma extends io.github.jan.supabase.auth.providers.OAuthProvider {
							public static class: java.lang.Class<io.github.jan.supabase.auth.providers.Figma>;
							public static INSTANCE: io.github.jan.supabase.auth.providers.Figma;
							public signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public hashCode(): number;
							public getName(): string;
							public equals(other: any): boolean;
							public login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export class Fly extends io.github.jan.supabase.auth.providers.OAuthProvider {
							public static class: java.lang.Class<io.github.jan.supabase.auth.providers.Fly>;
							public static INSTANCE: io.github.jan.supabase.auth.providers.Fly;
							public signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public hashCode(): number;
							public getName(): string;
							public equals(other: any): boolean;
							public login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export class Github extends io.github.jan.supabase.auth.providers.OAuthProvider {
							public static class: java.lang.Class<io.github.jan.supabase.auth.providers.Github>;
							public static INSTANCE: io.github.jan.supabase.auth.providers.Github;
							public signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public hashCode(): number;
							public getName(): string;
							public equals(other: any): boolean;
							public login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export class Gitlab extends io.github.jan.supabase.auth.providers.OAuthProvider {
							public static class: java.lang.Class<io.github.jan.supabase.auth.providers.Gitlab>;
							public static INSTANCE: io.github.jan.supabase.auth.providers.Gitlab;
							public signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public hashCode(): number;
							public getName(): string;
							public equals(other: any): boolean;
							public login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export class Google extends io.github.jan.supabase.auth.providers.IDTokenProvider {
							public static class: java.lang.Class<io.github.jan.supabase.auth.providers.Google>;
							public static INSTANCE: io.github.jan.supabase.auth.providers.Google;
							public signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public hashCode(): number;
							public getName(): string;
							public equals(other: any): boolean;
							public login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export abstract class IDTokenProvider extends io.github.jan.supabase.auth.providers.OAuthProvider {
							public static class: java.lang.Class<io.github.jan.supabase.auth.providers.IDTokenProvider>;
							public signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
						}
						export module IDTokenProvider {
							export class Companion extends kotlinx.serialization.KSerializer<io.github.jan.supabase.auth.providers.IDTokenProvider> {
								public static class: java.lang.Class<io.github.jan.supabase.auth.providers.IDTokenProvider.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.auth.providers.IDTokenProvider>;
								public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
								public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.auth.providers.IDTokenProvider): void;
								public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.auth.providers.IDTokenProvider;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export class Kakao extends io.github.jan.supabase.auth.providers.IDTokenProvider {
							public static class: java.lang.Class<io.github.jan.supabase.auth.providers.Kakao>;
							public static INSTANCE: io.github.jan.supabase.auth.providers.Kakao;
							public signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public hashCode(): number;
							public getName(): string;
							public equals(other: any): boolean;
							public login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export class Keycloak extends io.github.jan.supabase.auth.providers.OAuthProvider {
							public static class: java.lang.Class<io.github.jan.supabase.auth.providers.Keycloak>;
							public static INSTANCE: io.github.jan.supabase.auth.providers.Keycloak;
							public signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public hashCode(): number;
							public getName(): string;
							public equals(other: any): boolean;
							public login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export class LinkedIn extends io.github.jan.supabase.auth.providers.OAuthProvider {
							public static class: java.lang.Class<io.github.jan.supabase.auth.providers.LinkedIn>;
							public static INSTANCE: io.github.jan.supabase.auth.providers.LinkedIn;
							public signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public hashCode(): number;
							public getName(): string;
							public equals(other: any): boolean;
							public login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export class LinkedInOIDC extends io.github.jan.supabase.auth.providers.OAuthProvider {
							public static class: java.lang.Class<io.github.jan.supabase.auth.providers.LinkedInOIDC>;
							public static INSTANCE: io.github.jan.supabase.auth.providers.LinkedInOIDC;
							public signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public hashCode(): number;
							public getName(): string;
							public equals(other: any): boolean;
							public login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export class Notion extends io.github.jan.supabase.auth.providers.OAuthProvider {
							public static class: java.lang.Class<io.github.jan.supabase.auth.providers.Notion>;
							public static INSTANCE: io.github.jan.supabase.auth.providers.Notion;
							public signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public hashCode(): number;
							public getName(): string;
							public equals(other: any): boolean;
							public login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export abstract class OAuthProvider extends io.github.jan.supabase.auth.providers.AuthProvider<io.github.jan.supabase.auth.providers.ExternalAuthConfig,any> {
							public static class: java.lang.Class<io.github.jan.supabase.auth.providers.OAuthProvider>;
							public constructor();
							public signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public getName(): string;
							public login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public signUp(supabaseClient: io.github.jan.supabase.SupabaseClient, onSuccess: any, redirectUrl: string, config: any, $completion: any): any;
							public login(supabaseClient: io.github.jan.supabase.SupabaseClient, onSuccess: any, redirectUrl: string, config: any, $completion: any): any;
						}
						export module OAuthProvider {
							export class Companion {
								public static class: java.lang.Class<io.github.jan.supabase.auth.providers.OAuthProvider.Companion>;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export class Slack extends io.github.jan.supabase.auth.providers.OAuthProvider {
							public static class: java.lang.Class<io.github.jan.supabase.auth.providers.Slack>;
							public static INSTANCE: io.github.jan.supabase.auth.providers.Slack;
							public signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public hashCode(): number;
							public getName(): string;
							public equals(other: any): boolean;
							public login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export class SlackOIDC extends io.github.jan.supabase.auth.providers.OAuthProvider {
							public static class: java.lang.Class<io.github.jan.supabase.auth.providers.SlackOIDC>;
							public static INSTANCE: io.github.jan.supabase.auth.providers.SlackOIDC;
							public signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public hashCode(): number;
							public getName(): string;
							public equals(other: any): boolean;
							public login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export class Spotify extends io.github.jan.supabase.auth.providers.OAuthProvider {
							public static class: java.lang.Class<io.github.jan.supabase.auth.providers.Spotify>;
							public static INSTANCE: io.github.jan.supabase.auth.providers.Spotify;
							public signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public hashCode(): number;
							public getName(): string;
							public equals(other: any): boolean;
							public login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export class Twitch extends io.github.jan.supabase.auth.providers.OAuthProvider {
							public static class: java.lang.Class<io.github.jan.supabase.auth.providers.Twitch>;
							public static INSTANCE: io.github.jan.supabase.auth.providers.Twitch;
							public signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public hashCode(): number;
							public getName(): string;
							public equals(other: any): boolean;
							public login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export class Twitter extends io.github.jan.supabase.auth.providers.OAuthProvider {
							public static class: java.lang.Class<io.github.jan.supabase.auth.providers.Twitter>;
							public static INSTANCE: io.github.jan.supabase.auth.providers.Twitter;
							public signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public hashCode(): number;
							public getName(): string;
							public equals(other: any): boolean;
							public login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export class WorkOS extends io.github.jan.supabase.auth.providers.OAuthProvider {
							public static class: java.lang.Class<io.github.jan.supabase.auth.providers.WorkOS>;
							public static INSTANCE: io.github.jan.supabase.auth.providers.WorkOS;
							public signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public hashCode(): number;
							public getName(): string;
							public equals(other: any): boolean;
							public login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export class Zoom extends io.github.jan.supabase.auth.providers.OAuthProvider {
							public static class: java.lang.Class<io.github.jan.supabase.auth.providers.Zoom>;
							public static INSTANCE: io.github.jan.supabase.auth.providers.Zoom;
							public signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public hashCode(): number;
							public getName(): string;
							public equals(other: any): boolean;
							public login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export module builtin {
							export class CaptchaTokenSerializer extends kotlinx.serialization.KSerializer<string> {
								public static class: java.lang.Class<io.github.jan.supabase.auth.providers.builtin.CaptchaTokenSerializer>;
								public static INSTANCE: io.github.jan.supabase.auth.providers.builtin.CaptchaTokenSerializer;
								public deserialize(decoder: kotlinx.serialization.encoding.Decoder): string;
								public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
								public serialize($this$serialize_u24lambda_u241: kotlinx.serialization.encoding.Encoder, $i$f$buildJsonObject: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export module builtin {
							export class DefaultAuthProvider<C, R>  extends io.github.jan.supabase.auth.providers.AuthProvider<any,any> {
								public static class: java.lang.Class<io.github.jan.supabase.auth.providers.builtin.DefaultAuthProvider<any,any>>;
								/**
								 * Constructs a new instance of the io.github.jan.supabase.auth.providers.builtin.DefaultAuthProvider<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getGrantType(): string;
									login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
									signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
									decodeResult(param0: kotlinx.serialization.json.JsonObject): any;
									encodeCredentials(param0: any): kotlinx.serialization.json.JsonObject;
									login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
									signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
								});
								public constructor();
								public encodeCredentials(param0: any): kotlinx.serialization.json.JsonObject;
								public signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
								public login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
								public getGrantType(): string;
								public decodeResult(param0: kotlinx.serialization.json.JsonObject): any;
							}
							export module DefaultAuthProvider {
								export abstract class Config {
									public static class: java.lang.Class<io.github.jan.supabase.auth.providers.builtin.DefaultAuthProvider.Config>;
									public setCaptchaToken(value: string): void;
									public getData(): kotlinx.serialization.json.JsonObject;
									public getCaptchaToken(): string;
									public setData(value: kotlinx.serialization.json.JsonObject): void;
								}
								export module Config {
									export class Companion {
										public static class: java.lang.Class<io.github.jan.supabase.auth.providers.builtin.DefaultAuthProvider.Config.Companion>;
										public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.auth.providers.builtin.DefaultAuthProvider.Config>;
									}
								}
								export class DefaultImpls {
									public static class: java.lang.Class<io.github.jan.supabase.auth.providers.builtin.DefaultAuthProvider.DefaultImpls>;
									public static login($this: io.github.jan.supabase.auth.providers.builtin.DefaultAuthProvider<any,any>, $this: io.github.jan.supabase.SupabaseClient, supabaseClient: any, supabaseClient: string, onSuccess: any, onSuccess: any): any;
									public static signUp($this: io.github.jan.supabase.auth.providers.builtin.DefaultAuthProvider<any,any>, $this: io.github.jan.supabase.SupabaseClient, $this: any, $this: string, $this: any, $this: any): any;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export module builtin {
							export class Email extends io.github.jan.supabase.auth.providers.builtin.DefaultAuthProvider<io.github.jan.supabase.auth.providers.builtin.Email.Config,io.github.jan.supabase.auth.user.UserInfo> {
								public static class: java.lang.Class<io.github.jan.supabase.auth.providers.builtin.Email>;
								public static INSTANCE: io.github.jan.supabase.auth.providers.builtin.Email;
								public toString(): string;
								public decodeResult($this$decodeFromJsonElement$iv: kotlinx.serialization.json.JsonObject): io.github.jan.supabase.auth.user.UserInfo;
								public login(supabaseClient: io.github.jan.supabase.SupabaseClient, onSuccess: any, redirectUrl: string, config: any, $completion: any): any;
								public signUp(supabaseClient: io.github.jan.supabase.SupabaseClient, onSuccess: any, redirectUrl: string, config: any, $completion: any): any;
								public encodeCredentials(param0: any): kotlinx.serialization.json.JsonObject;
								public signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
								public login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
								public getGrantType(): string;
								public encodeCredentials($this$encodeToJsonElement$iv: any): kotlinx.serialization.json.JsonObject;
								public hashCode(): number;
								public equals(other: any): boolean;
								public decodeResult(param0: kotlinx.serialization.json.JsonObject): any;
							}
							export module Email {
								export class Config extends io.github.jan.supabase.auth.providers.builtin.DefaultAuthProvider.Config {
									public static class: java.lang.Class<io.github.jan.supabase.auth.providers.builtin.Email.Config>;
									public component2(): string;
									public hashCode(): number;
									public constructor();
									public copy(email: string, password: string): io.github.jan.supabase.auth.providers.builtin.Email.Config;
									public equals(other: any): boolean;
									public setEmail(value: string): void;
									public getPassword(): string;
									public constructor(email: string, password: string);
									public getEmail(): string;
									public setPassword(value: string): void;
									public toString(): string;
									public component1(): string;
								}
								
								export module Config {
										export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.auth.providers.builtin.Email.Config> {
											public static class: java.lang.Class<io.github.jan.supabase.auth.providers.builtin.Email.Config.serializer>;
											public static INSTANCE: io.github.jan.supabase.auth.providers.builtin.Email.Config.serializer;
											public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.auth.providers.builtin.Email.Config;
											public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
											public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
											public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
											public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.auth.providers.builtin.Email.Config): void;
										}
									}
									export class Companion {
										public static class: java.lang.Class<io.github.jan.supabase.auth.providers.builtin.Email.Config.Companion>;
										public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.auth.providers.builtin.Email.Config>;
									}
								
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export module builtin {
							export class IDToken extends io.github.jan.supabase.auth.providers.builtin.DefaultAuthProvider<io.github.jan.supabase.auth.providers.builtin.IDToken.Config,io.github.jan.supabase.auth.user.UserInfo> {
								public static class: java.lang.Class<io.github.jan.supabase.auth.providers.builtin.IDToken>;
								public static INSTANCE: io.github.jan.supabase.auth.providers.builtin.IDToken;
								public toString(): string;
								public decodeResult($this$decodeFromJsonElement$iv: kotlinx.serialization.json.JsonObject): io.github.jan.supabase.auth.user.UserInfo;
								public login(supabaseClient: io.github.jan.supabase.SupabaseClient, onSuccess: any, redirectUrl: string, config: any, $completion: any): any;
								public signUp(supabaseClient: io.github.jan.supabase.SupabaseClient, onSuccess: any, redirectUrl: string, config: any, $completion: any): any;
								public encodeCredentials(param0: any): kotlinx.serialization.json.JsonObject;
								public signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
								public login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
								public getGrantType(): string;
								public encodeCredentials($this$encodeToJsonElement$iv: any): kotlinx.serialization.json.JsonObject;
								public hashCode(): number;
								public equals(other: any): boolean;
								public decodeResult(param0: kotlinx.serialization.json.JsonObject): any;
							}
							export module IDToken {
								export class Config extends io.github.jan.supabase.auth.providers.builtin.DefaultAuthProvider.Config {
									public static class: java.lang.Class<io.github.jan.supabase.auth.providers.builtin.IDToken.Config>;
									public setNonce(value: string): void;
									public hashCode(): number;
									public constructor();
									public getProvider(): io.github.jan.supabase.auth.providers.IDTokenProvider;
									public toString(): string;
									public getAccessToken(): string;
									public component3(): string;
									public component1(): string;
									public component2(): io.github.jan.supabase.auth.providers.IDTokenProvider;
									public setIdToken(value: string): void;
									public equals(other: any): boolean;
									public copy(idToken: string, provider: io.github.jan.supabase.auth.providers.IDTokenProvider, accessToken: string, nonce: string): io.github.jan.supabase.auth.providers.builtin.IDToken.Config;
									public setProvider(value: io.github.jan.supabase.auth.providers.IDTokenProvider): void;
									public constructor(idToken: string, provider: io.github.jan.supabase.auth.providers.IDTokenProvider, accessToken: string, nonce: string);
									public setAccessToken(value: string): void;
									public component4(): string;
									public getIdToken(): string;
									public getNonce(): string;
								}
									
								export module Config {
										export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.auth.providers.builtin.IDToken.Config> {
											public static class: java.lang.Class<io.github.jan.supabase.auth.providers.builtin.IDToken.Config.serializer>;
											public static INSTANCE: io.github.jan.supabase.auth.providers.builtin.IDToken.Config.serializer;
											public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.auth.providers.builtin.IDToken.Config): void;
											public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
											public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
											public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
											public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.auth.providers.builtin.IDToken.Config;
										}
									}
									export class Companion {
										public static class: java.lang.Class<io.github.jan.supabase.auth.providers.builtin.IDToken.Config.Companion>;
										public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.auth.providers.builtin.IDToken.Config>;
									}
								
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export module builtin {
							export class OTP extends io.github.jan.supabase.auth.providers.AuthProvider<io.github.jan.supabase.auth.providers.builtin.OTP.Config,any> {
								public static class: java.lang.Class<io.github.jan.supabase.auth.providers.builtin.OTP>;
								public static INSTANCE: io.github.jan.supabase.auth.providers.builtin.OTP;
								public login(supabaseClient: io.github.jan.supabase.SupabaseClient, supabaseClient: any, supabaseClient: string, supabaseClient: any, supabaseClient: any): any;
								public toString(): string;
								public signUp(supabaseClient: io.github.jan.supabase.SupabaseClient, onSuccess: any, redirectUrl: string, config: any, $completion: any): any;
								public signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
								public login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
								public hashCode(): number;
								public equals(other: any): boolean;
							}
							export module OTP {
								export class Config {
									public static class: java.lang.Class<io.github.jan.supabase.auth.providers.builtin.OTP.Config>;
									public setCaptchaToken(value: string): void;
									public setEmail(value: string): void;
									public getData(): kotlinx.serialization.json.JsonObject;
									public getEmail(): string;
									public getSerializer(): io.github.jan.supabase.SupabaseSerializer;
									public getPhone(): string;
									public setCreateUser(value: boolean): void;
									public getCaptchaToken(): string;
									public getCreateUser(): boolean;
									public constructor(serializer: io.github.jan.supabase.SupabaseSerializer, email: string, phone: string, data: kotlinx.serialization.json.JsonObject, createUser: boolean, captchaToken: string);
									public setPhone(value: string): void;
									public setData(value: kotlinx.serialization.json.JsonObject): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export module builtin {
							export class Phone extends io.github.jan.supabase.auth.providers.builtin.DefaultAuthProvider<io.github.jan.supabase.auth.providers.builtin.Phone.Config,io.github.jan.supabase.auth.user.UserInfo> {
								public static class: java.lang.Class<io.github.jan.supabase.auth.providers.builtin.Phone>;
								public static INSTANCE: io.github.jan.supabase.auth.providers.builtin.Phone;
								public toString(): string;
								public decodeResult($this$decodeFromJsonElement$iv: kotlinx.serialization.json.JsonObject): io.github.jan.supabase.auth.user.UserInfo;
								public login(supabaseClient: io.github.jan.supabase.SupabaseClient, onSuccess: any, redirectUrl: string, config: any, $completion: any): any;
								public signUp(supabaseClient: io.github.jan.supabase.SupabaseClient, onSuccess: any, redirectUrl: string, config: any, $completion: any): any;
								public encodeCredentials(param0: any): kotlinx.serialization.json.JsonObject;
								public signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
								public login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
								public getGrantType(): string;
								public encodeCredentials($this$encodeToJsonElement$iv: any): kotlinx.serialization.json.JsonObject;
								public hashCode(): number;
								public equals(other: any): boolean;
								public decodeResult(param0: kotlinx.serialization.json.JsonObject): any;
							}
							export module Phone {
								export class Channel {
									public static class: java.lang.Class<io.github.jan.supabase.auth.providers.builtin.Phone.Channel>;
									public static SMS: io.github.jan.supabase.auth.providers.builtin.Phone.Channel;
									public static WHATSAPP: io.github.jan.supabase.auth.providers.builtin.Phone.Channel;
									public static getEntries(): any;
									public getValue(): string;
									public static valueOf(value: string): io.github.jan.supabase.auth.providers.builtin.Phone.Channel;
									public static values(): androidNative.Array<io.github.jan.supabase.auth.providers.builtin.Phone.Channel>;
								}
								export module Channel {
									export class Companion extends kotlinx.serialization.KSerializer<io.github.jan.supabase.auth.providers.builtin.Phone.Channel> {
										public static class: java.lang.Class<io.github.jan.supabase.auth.providers.builtin.Phone.Channel.Companion>;
										public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
										public deserialize(it: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.auth.providers.builtin.Phone.Channel;
										public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.auth.providers.builtin.Phone.Channel>;
										public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.auth.providers.builtin.Phone.Channel): void;
									}
								}
								export class Config extends io.github.jan.supabase.auth.providers.builtin.DefaultAuthProvider.Config {
									public static class: java.lang.Class<io.github.jan.supabase.auth.providers.builtin.Phone.Config>;
									public component2(): string;
									public hashCode(): number;
									public constructor();
									public setPassword(value: string): void;
									public toString(): string;
									public copy(phone: string, password: string, channel: io.github.jan.supabase.auth.providers.builtin.Phone.Channel): io.github.jan.supabase.auth.providers.builtin.Phone.Config;
									public constructor(phone: string, password: string, channel: io.github.jan.supabase.auth.providers.builtin.Phone.Channel);
									public component1(): string;
									public getChannel(): io.github.jan.supabase.auth.providers.builtin.Phone.Channel;
									public setChannel(value: io.github.jan.supabase.auth.providers.builtin.Phone.Channel): void;
									public equals(other: any): boolean;
									public getPassword(): string;
									public getPhone(): string;
									public setPhone(value: string): void;
									public component3(): io.github.jan.supabase.auth.providers.builtin.Phone.Channel;
								}
									
								export module Config {
										export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.auth.providers.builtin.Phone.Config> {
											public static class: java.lang.Class<io.github.jan.supabase.auth.providers.builtin.Phone.Config.serializer>;
											public static INSTANCE: io.github.jan.supabase.auth.providers.builtin.Phone.Config.serializer;
											public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
											public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.auth.providers.builtin.Phone.Config;
											public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
											public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
											public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.auth.providers.builtin.Phone.Config): void;
										}
									}
									export class Companion {
										public static class: java.lang.Class<io.github.jan.supabase.auth.providers.builtin.Phone.Config.Companion>;
										public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.auth.providers.builtin.Phone.Config>;
									}
								
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module providers {
						export module builtin {
							export class SSO extends io.github.jan.supabase.auth.providers.AuthProvider<io.github.jan.supabase.auth.providers.builtin.SSO.Config,any> {
								public static class: java.lang.Class<io.github.jan.supabase.auth.providers.builtin.SSO>;
								public static INSTANCE: io.github.jan.supabase.auth.providers.builtin.SSO;
								public toString(): string;
								public login(supabaseClient: io.github.jan.supabase.SupabaseClient, onSuccess: any, redirectUrl: string, config: any, $completion: any): any;
								public signUp(onSuccess: io.github.jan.supabase.SupabaseClient, redirectUrl: any, config: string, $completion: any, $continuation: any): any;
								public signUp(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
								public login(param0: io.github.jan.supabase.SupabaseClient, param1: any, param2: string, param3: any, param4: any): any;
								public hashCode(): number;
								public equals(other: any): boolean;
							}
							export module SSO {
								export class Config {
									public static class: java.lang.Class<io.github.jan.supabase.auth.providers.builtin.SSO.Config>;
									public getDomain(): string;
									public component2(): string;
									public hashCode(): number;
									public constructor();
									public setDomain(value: string): void;
									public constructor(providerId: string, captchaToken: string, domain: string);
									public toString(): string;
									public component3(): string;
									public component1(): string;
									public setCaptchaToken(value: string): void;
									public getProviderId(): string;
									public equals(other: any): boolean;
									public copy(providerId: string, captchaToken: string, domain: string): io.github.jan.supabase.auth.providers.builtin.SSO.Config;
									public setProviderId(value: string): void;
									public getCaptchaToken(): string;
								}
								export class Result {
									public static class: java.lang.Class<io.github.jan.supabase.auth.providers.builtin.SSO.Result>;
									public hashCode(): number;
									public equals(other: any): boolean;
									public copy(url: string): io.github.jan.supabase.auth.providers.builtin.SSO.Result;
									public toString(): string;
									public getUrl(): string;
									public constructor(url: string);
									public component1(): string;
								}
									
								export module Result {
										export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.auth.providers.builtin.SSO.Result> {
											public static class: java.lang.Class<io.github.jan.supabase.auth.providers.builtin.SSO.Result.serializer>;
											public static INSTANCE: io.github.jan.supabase.auth.providers.builtin.SSO.Result.serializer;
											public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
											public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.auth.providers.builtin.SSO.Result): void;
											public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
											public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
											public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.auth.providers.builtin.SSO.Result;
										}
									}
									export class Companion {
										public static class: java.lang.Class<io.github.jan.supabase.auth.providers.builtin.SSO.Result.Companion>;
										public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.auth.providers.builtin.SSO.Result>;
									}
								
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module status {
						export class RefreshFailureCause {
							public static class: java.lang.Class<io.github.jan.supabase.auth.status.RefreshFailureCause>;
							/**
							 * Constructs a new instance of the io.github.jan.supabase.auth.status.RefreshFailureCause interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export module RefreshFailureCause {
							export class InternalServerError extends io.github.jan.supabase.auth.status.RefreshFailureCause {
								public static class: java.lang.Class<io.github.jan.supabase.auth.status.RefreshFailureCause.InternalServerError>;
								public copy(exception: io.github.jan.supabase.exceptions.RestException): io.github.jan.supabase.auth.status.RefreshFailureCause.InternalServerError;
								public toString(): string;
								public constructor(exception: io.github.jan.supabase.exceptions.RestException);
								public getException(): io.github.jan.supabase.exceptions.RestException;
								public component1(): io.github.jan.supabase.exceptions.RestException;
								public hashCode(): number;
								public equals(other: any): boolean;
							}
							export class NetworkError extends io.github.jan.supabase.auth.status.RefreshFailureCause {
								public static class: java.lang.Class<io.github.jan.supabase.auth.status.RefreshFailureCause.NetworkError>;
								public constructor(exception: java.lang.Throwable);
								public toString(): string;
								public getException(): java.lang.Throwable;
								public copy(exception: java.lang.Throwable): io.github.jan.supabase.auth.status.RefreshFailureCause.NetworkError;
								public component1(): java.lang.Throwable;
								public hashCode(): number;
								public equals(other: any): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module status {
						export class SessionSource {
							public static class: java.lang.Class<io.github.jan.supabase.auth.status.SessionSource>;
							/**
							 * Constructs a new instance of the io.github.jan.supabase.auth.status.SessionSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export module SessionSource {
							export class AnonymousSignIn extends io.github.jan.supabase.auth.status.SessionSource {
								public static class: java.lang.Class<io.github.jan.supabase.auth.status.SessionSource.AnonymousSignIn>;
								public static INSTANCE: io.github.jan.supabase.auth.status.SessionSource.AnonymousSignIn;
								public toString(): string;
								public hashCode(): number;
								public equals(other: any): boolean;
							}
							export class External extends io.github.jan.supabase.auth.status.SessionSource {
								public static class: java.lang.Class<io.github.jan.supabase.auth.status.SessionSource.External>;
								public static INSTANCE: io.github.jan.supabase.auth.status.SessionSource.External;
								public toString(): string;
								public hashCode(): number;
								public equals(other: any): boolean;
							}
							export class Refresh extends io.github.jan.supabase.auth.status.SessionSource {
								public static class: java.lang.Class<io.github.jan.supabase.auth.status.SessionSource.Refresh>;
								public component1(): io.github.jan.supabase.auth.user.UserSession;
								public toString(): string;
								public getOldSession(): io.github.jan.supabase.auth.user.UserSession;
								public constructor(oldSession: io.github.jan.supabase.auth.user.UserSession);
								public copy(oldSession: io.github.jan.supabase.auth.user.UserSession): io.github.jan.supabase.auth.status.SessionSource.Refresh;
								public hashCode(): number;
								public equals(other: any): boolean;
							}
							export class SignIn extends io.github.jan.supabase.auth.status.SessionSource {
								public static class: java.lang.Class<io.github.jan.supabase.auth.status.SessionSource.SignIn>;
								public toString(): string;
								public copy(provider: io.github.jan.supabase.auth.providers.AuthProvider<any,any>): io.github.jan.supabase.auth.status.SessionSource.SignIn;
								public constructor(provider: io.github.jan.supabase.auth.providers.AuthProvider<any,any>);
								public component1(): io.github.jan.supabase.auth.providers.AuthProvider<any,any>;
								public hashCode(): number;
								public equals(other: any): boolean;
								public getProvider(): io.github.jan.supabase.auth.providers.AuthProvider<any,any>;
							}
							export class SignUp extends io.github.jan.supabase.auth.status.SessionSource {
								public static class: java.lang.Class<io.github.jan.supabase.auth.status.SessionSource.SignUp>;
								public toString(): string;
								public copy(provider: io.github.jan.supabase.auth.providers.AuthProvider<any,any>): io.github.jan.supabase.auth.status.SessionSource.SignUp;
								public constructor(provider: io.github.jan.supabase.auth.providers.AuthProvider<any,any>);
								public component1(): io.github.jan.supabase.auth.providers.AuthProvider<any,any>;
								public hashCode(): number;
								public equals(other: any): boolean;
								public getProvider(): io.github.jan.supabase.auth.providers.AuthProvider<any,any>;
							}
							export class Storage extends io.github.jan.supabase.auth.status.SessionSource {
								public static class: java.lang.Class<io.github.jan.supabase.auth.status.SessionSource.Storage>;
								public static INSTANCE: io.github.jan.supabase.auth.status.SessionSource.Storage;
								public toString(): string;
								public hashCode(): number;
								public equals(other: any): boolean;
							}
							export class Unknown extends io.github.jan.supabase.auth.status.SessionSource {
								public static class: java.lang.Class<io.github.jan.supabase.auth.status.SessionSource.Unknown>;
								public static INSTANCE: io.github.jan.supabase.auth.status.SessionSource.Unknown;
								public toString(): string;
								public hashCode(): number;
								public equals(other: any): boolean;
							}
							export class UserChanged extends io.github.jan.supabase.auth.status.SessionSource {
								public static class: java.lang.Class<io.github.jan.supabase.auth.status.SessionSource.UserChanged>;
								public component1(): io.github.jan.supabase.auth.user.UserSession;
								public toString(): string;
								public getOldSession(): io.github.jan.supabase.auth.user.UserSession;
								public constructor(oldSession: io.github.jan.supabase.auth.user.UserSession);
								public copy(oldSession: io.github.jan.supabase.auth.user.UserSession): io.github.jan.supabase.auth.status.SessionSource.UserChanged;
								public hashCode(): number;
								public equals(other: any): boolean;
							}
							export class UserIdentitiesChanged extends io.github.jan.supabase.auth.status.SessionSource {
								public static class: java.lang.Class<io.github.jan.supabase.auth.status.SessionSource.UserIdentitiesChanged>;
								public component1(): io.github.jan.supabase.auth.user.UserSession;
								public toString(): string;
								public getOldSession(): io.github.jan.supabase.auth.user.UserSession;
								public constructor(oldSession: io.github.jan.supabase.auth.user.UserSession);
								public copy(oldSession: io.github.jan.supabase.auth.user.UserSession): io.github.jan.supabase.auth.status.SessionSource.UserIdentitiesChanged;
								public hashCode(): number;
								public equals(other: any): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module status {
						export class SessionStatus {
							public static class: java.lang.Class<io.github.jan.supabase.auth.status.SessionStatus>;
							/**
							 * Constructs a new instance of the io.github.jan.supabase.auth.status.SessionStatus interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export module SessionStatus {
							export class Authenticated extends io.github.jan.supabase.auth.status.SessionStatus {
								public static class: java.lang.Class<io.github.jan.supabase.auth.status.SessionStatus.Authenticated>;
								public component1(): io.github.jan.supabase.auth.user.UserSession;
								public toString(): string;
								public isNew(): boolean;
								public constructor(session: io.github.jan.supabase.auth.user.UserSession, source: io.github.jan.supabase.auth.status.SessionSource);
								public getSource(): io.github.jan.supabase.auth.status.SessionSource;
								public copy(session: io.github.jan.supabase.auth.user.UserSession, source: io.github.jan.supabase.auth.status.SessionSource): io.github.jan.supabase.auth.status.SessionStatus.Authenticated;
								public component2(): io.github.jan.supabase.auth.status.SessionSource;
								public getSession(): io.github.jan.supabase.auth.user.UserSession;
								public hashCode(): number;
								public equals(other: any): boolean;
							}
							export class Initializing extends io.github.jan.supabase.auth.status.SessionStatus {
								public static class: java.lang.Class<io.github.jan.supabase.auth.status.SessionStatus.Initializing>;
								public static INSTANCE: io.github.jan.supabase.auth.status.SessionStatus.Initializing;
								public toString(): string;
								public hashCode(): number;
								public equals(other: any): boolean;
							}
							export class NotAuthenticated extends io.github.jan.supabase.auth.status.SessionStatus {
								public static class: java.lang.Class<io.github.jan.supabase.auth.status.SessionStatus.NotAuthenticated>;
								public isSignOut(): boolean;
								public toString(): string;
								public copy(isSignOut: boolean): io.github.jan.supabase.auth.status.SessionStatus.NotAuthenticated;
								public constructor(isSignOut: boolean);
								public component1(): boolean;
								public hashCode(): number;
								public equals(other: any): boolean;
							}
							export class RefreshFailure extends io.github.jan.supabase.auth.status.SessionStatus {
								public static class: java.lang.Class<io.github.jan.supabase.auth.status.SessionStatus.RefreshFailure>;
								public toString(): string;
								public getCause(): io.github.jan.supabase.auth.status.RefreshFailureCause;
								public component1(): io.github.jan.supabase.auth.status.RefreshFailureCause;
								public copy(cause: io.github.jan.supabase.auth.status.RefreshFailureCause): io.github.jan.supabase.auth.status.SessionStatus.RefreshFailure;
								public constructor(cause: io.github.jan.supabase.auth.status.RefreshFailureCause);
								public hashCode(): number;
								public equals(other: any): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module user {
						export class Identity {
							public static class: java.lang.Class<io.github.jan.supabase.auth.user.Identity>;
							public component7(): string;
							public getCreatedAt(): string;
							public hashCode(): number;
							public getId(): string;
							public getProvider(): string;
							public getLastSignInAt(): string;
							public getUserId(): string;
							public toString(): string;
							public component5(): string;
							public component3(): string;
							public component1(): string;
							public getIdentityData(): kotlinx.serialization.json.JsonObject;
							public component8(): string;
							public getUpdatedAt(): string;
							public copy(id: string, identityData: kotlinx.serialization.json.JsonObject, identityId: string, lastSignInAt: string, updatedAt: string, createdAt: string, provider: string, userId: string): io.github.jan.supabase.auth.user.Identity;
							public equals(other: any): boolean;
							public component4(): string;
							public getIdentityId(): string;
							public component2(): kotlinx.serialization.json.JsonObject;
							public component6(): string;
							public constructor(id: string, identityData: kotlinx.serialization.json.JsonObject, identityId: string, lastSignInAt: string, updatedAt: string, createdAt: string, provider: string, userId: string);
						}
						
						export module Identity {
								export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.auth.user.Identity> {
									public static class: java.lang.Class<io.github.jan.supabase.auth.user.Identity.serializer>;
									public static INSTANCE: io.github.jan.supabase.auth.user.Identity.serializer;
									public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.auth.user.Identity): void;
									public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
									public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.auth.user.Identity;
									public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
									public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
								}
							}
							export class Companion {
								public static class: java.lang.Class<io.github.jan.supabase.auth.user.Identity.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.auth.user.Identity>;
							}
						
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module user {
						export class UserInfo {
							public static class: java.lang.Class<io.github.jan.supabase.auth.user.UserInfo>;
							public component13(): string;
							public component23(): string;
							public getIdentities(): java.util.List<io.github.jan.supabase.auth.user.Identity>;
							public copy(appMetadata: kotlinx.serialization.json.JsonObject, aud: string, confirmationSentAt: kotlinx.datetime.Instant, confirmedAt: kotlinx.datetime.Instant, createdAt: kotlinx.datetime.Instant, email: string, emailConfirmedAt: kotlinx.datetime.Instant, factors: java.util.List<io.github.jan.supabase.auth.user.UserMfaFactor>, id: string, identities: java.util.List<io.github.jan.supabase.auth.user.Identity>, lastSignInAt: kotlinx.datetime.Instant, phone: string, role: string, updatedAt: kotlinx.datetime.Instant, userMetadata: kotlinx.serialization.json.JsonObject, phoneChangeSentAt: kotlinx.datetime.Instant, newPhone: string, emailChangeSentAt: kotlinx.datetime.Instant, newEmail: string, invitedAt: kotlinx.datetime.Instant, recoverySentAt: kotlinx.datetime.Instant, phoneConfirmedAt: kotlinx.datetime.Instant, actionLink: string): io.github.jan.supabase.auth.user.UserInfo;
							public getNewPhone(): string;
							public component7(): kotlinx.datetime.Instant;
							public component14(): kotlinx.datetime.Instant;
							public equals(other: any): boolean;
							public component8(): java.util.List<io.github.jan.supabase.auth.user.UserMfaFactor>;
							public getLastSignInAt(): kotlinx.datetime.Instant;
							public component9(): string;
							public component3(): kotlinx.datetime.Instant;
							public getActionLink(): string;
							public component21(): kotlinx.datetime.Instant;
							public component5(): kotlinx.datetime.Instant;
							public getPhone(): string;
							public getRole(): string;
							public getInvitedAt(): kotlinx.datetime.Instant;
							public component1(): kotlinx.serialization.json.JsonObject;
							public constructor(appMetadata: kotlinx.serialization.json.JsonObject, aud: string, confirmationSentAt: kotlinx.datetime.Instant, confirmedAt: kotlinx.datetime.Instant, createdAt: kotlinx.datetime.Instant, email: string, emailConfirmedAt: kotlinx.datetime.Instant, factors: java.util.List<io.github.jan.supabase.auth.user.UserMfaFactor>, id: string, identities: java.util.List<io.github.jan.supabase.auth.user.Identity>, lastSignInAt: kotlinx.datetime.Instant, phone: string, role: string, updatedAt: kotlinx.datetime.Instant, userMetadata: kotlinx.serialization.json.JsonObject, phoneChangeSentAt: kotlinx.datetime.Instant, newPhone: string, emailChangeSentAt: kotlinx.datetime.Instant, newEmail: string, invitedAt: kotlinx.datetime.Instant, recoverySentAt: kotlinx.datetime.Instant, phoneConfirmedAt: kotlinx.datetime.Instant, actionLink: string);
							public getRecoverySentAt(): kotlinx.datetime.Instant;
							public component11(): kotlinx.datetime.Instant;
							public hashCode(): number;
							public getId(): string;
							public getConfirmationSentAt(): kotlinx.datetime.Instant;
							public getCreatedAt(): kotlinx.datetime.Instant;
							public toString(): string;
							public getEmailChangeSentAt(): kotlinx.datetime.Instant;
							public getConfirmedAt(): kotlinx.datetime.Instant;
							public getPhoneChangeSentAt(): kotlinx.datetime.Instant;
							public component12(): string;
							public getNewEmail(): string;
							public getPhoneConfirmedAt(): kotlinx.datetime.Instant;
							public component17(): string;
							public component6(): string;
							public getFactors(): java.util.List<io.github.jan.supabase.auth.user.UserMfaFactor>;
							public component20(): kotlinx.datetime.Instant;
							public component15(): kotlinx.serialization.json.JsonObject;
							public component2(): string;
							public component18(): kotlinx.datetime.Instant;
							public component10(): java.util.List<io.github.jan.supabase.auth.user.Identity>;
							public component4(): kotlinx.datetime.Instant;
							public getAud(): string;
							public getAppMetadata(): kotlinx.serialization.json.JsonObject;
							public getEmailConfirmedAt(): kotlinx.datetime.Instant;
							public component19(): string;
							public getEmail(): string;
							public component22(): kotlinx.datetime.Instant;
							public component16(): kotlinx.datetime.Instant;
							public getUpdatedAt(): kotlinx.datetime.Instant;
							public getUserMetadata(): kotlinx.serialization.json.JsonObject;
						}
							
						export module UserInfo {
								export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.auth.user.UserInfo> {
									public static class: java.lang.Class<io.github.jan.supabase.auth.user.UserInfo.serializer>;
									public static INSTANCE: io.github.jan.supabase.auth.user.UserInfo.serializer;
									public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.auth.user.UserInfo): void;
									public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
									public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.auth.user.UserInfo;
									public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
									public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
								}
							}
							export class Companion {
								public static class: java.lang.Class<io.github.jan.supabase.auth.user.UserInfo.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.auth.user.UserInfo>;
							}
						
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module user {
						export class UserMfaFactor {
							public static class: java.lang.Class<io.github.jan.supabase.auth.user.UserMfaFactor>;
							public hashCode(): number;
							public getId(): string;
							public getCreatedAt(): kotlinx.datetime.Instant;
							public getFriendlyName(): string;
							public component3(): kotlinx.datetime.Instant;
							public toString(): string;
							public component5(): string;
							public component1(): string;
							public isVerified(): boolean;
							public copy(id: string, createdAt: kotlinx.datetime.Instant, updatedAt: kotlinx.datetime.Instant, status: string, friendlyName: string, factorType: string): io.github.jan.supabase.auth.user.UserMfaFactor;
							public equals(other: any): boolean;
							public component2(): kotlinx.datetime.Instant;
							public constructor(id: string, createdAt: kotlinx.datetime.Instant, updatedAt: kotlinx.datetime.Instant, status: string, friendlyName: string, factorType: string);
							public getFactorType(): string;
							public component6(): string;
							public getUpdatedAt(): kotlinx.datetime.Instant;
						}
						
						export module UserMfaFactor {
								export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.auth.user.UserMfaFactor> {
									public static class: java.lang.Class<io.github.jan.supabase.auth.user.UserMfaFactor.serializer>;
									public static INSTANCE: io.github.jan.supabase.auth.user.UserMfaFactor.serializer;
									public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
									public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.auth.user.UserMfaFactor;
									public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.auth.user.UserMfaFactor): void;
									public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
									public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
								}
							}
							export class Companion {
								public static class: java.lang.Class<io.github.jan.supabase.auth.user.UserMfaFactor.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.auth.user.UserMfaFactor>;
							}
						
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module user {
						export class UserSession {
							public static class: java.lang.Class<io.github.jan.supabase.auth.user.UserSession>;
							public component2(): string;
							public hashCode(): number;
							public getExpiresIn(): number;
							public component5(): number;
							public component9(): kotlinx.datetime.Instant;
							public toString(): string;
							public getProviderToken(): string;
							public getUser(): io.github.jan.supabase.auth.user.UserInfo;
							public getExpiresAt(): kotlinx.datetime.Instant;
							public getRefreshToken(): string;
							public component3(): string;
							public component1(): string;
							public component8(): string;
							public equals(other: any): boolean;
							public constructor(accessToken: string, refreshToken: string, providerRefreshToken: string, providerToken: string, expiresIn: number, tokenType: string, user: io.github.jan.supabase.auth.user.UserInfo, type: string, expiresAt: kotlinx.datetime.Instant);
							public getProviderRefreshToken(): string;
							public getTokenType(): string;
							public component7(): io.github.jan.supabase.auth.user.UserInfo;
							public copy(accessToken: string, refreshToken: string, providerRefreshToken: string, providerToken: string, expiresIn: number, tokenType: string, user: io.github.jan.supabase.auth.user.UserInfo, type: string, expiresAt: kotlinx.datetime.Instant): io.github.jan.supabase.auth.user.UserSession;
							public getAccessToken(): string;
							public component4(): string;
							public component6(): string;
							public getType(): string;
						}
							
						export module UserSession {
								export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.auth.user.UserSession> {
									public static class: java.lang.Class<io.github.jan.supabase.auth.user.UserSession.serializer>;
									public static INSTANCE: io.github.jan.supabase.auth.user.UserSession.serializer;
									public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.auth.user.UserSession;
									public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
									public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.auth.user.UserSession): void;
									public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
									public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
								}
							}
							export class Companion {
								public static class: java.lang.Class<io.github.jan.supabase.auth.user.UserSession.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.auth.user.UserSession>;
							}
						
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module auth {
					export module user {
						export class UserUpdateBuilder {
							public static class: java.lang.Class<io.github.jan.supabase.auth.user.UserUpdateBuilder>;
							public hashCode(): number;
							public getSerializer(): io.github.jan.supabase.SupabaseSerializer;
							public setPassword(value: string): void;
							public getData(): kotlinx.serialization.json.JsonObject;
							public toString(): string;
							public setEmail(value: string): void;
							public component3(): string;
							public data(builder$iv: any): void;
							public component1(): string;
							public constructor(email: string, password: string, phone: string, nonce: string, data: kotlinx.serialization.json.JsonObject, serializer: io.github.jan.supabase.SupabaseSerializer);
							public setNonce(value: string): void;
							public equals(other: any): boolean;
							public copy(email: string, password: string, phone: string, nonce: string, data: kotlinx.serialization.json.JsonObject, serializer: io.github.jan.supabase.SupabaseSerializer): io.github.jan.supabase.auth.user.UserUpdateBuilder;
							public setData(value: kotlinx.serialization.json.JsonObject): void;
							public setSerializer(value: io.github.jan.supabase.SupabaseSerializer): void;
							public constructor();
							public component2(): string;
							public component6$auth_kt_release(): io.github.jan.supabase.SupabaseSerializer;
							public getPassword(): string;
							public setPhone(value: string): void;
							public component5(): kotlinx.serialization.json.JsonObject;
							public getPhone(): string;
							public getEmail(): string;
							public getNonce(): string;
							public component4(): string;
						}
						
						export module UserUpdateBuilder {
								export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.auth.user.UserUpdateBuilder> {
									public static class: java.lang.Class<io.github.jan.supabase.auth.user.UserUpdateBuilder.serializer>;
									public static INSTANCE: io.github.jan.supabase.auth.user.UserUpdateBuilder.serializer;
									public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.auth.user.UserUpdateBuilder): void;
									public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.auth.user.UserUpdateBuilder;
									public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
									public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
									public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
								}
							}
							export class Companion {
								public static class: java.lang.Class<io.github.jan.supabase.auth.user.UserUpdateBuilder.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.auth.user.UserUpdateBuilder>;
							}
						
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module functions {
					export class EdgeFunction {
						public static class: java.lang.Class<io.github.jan.supabase.functions.EdgeFunction>;
						public invoke(this_$iv$iv: any, $i$f$invoke: any): any;
						public getHeaders(): io.ktor.http.Headers;
						public constructor(functionName: string, headers: io.ktor.http.Headers, supabaseClient: io.github.jan.supabase.SupabaseClient);
						public getSupabaseClient(): io.github.jan.supabase.SupabaseClient;
						public getFunctionName(): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module functions {
					export class FunctionRegion {
						public static class: java.lang.Class<io.github.jan.supabase.functions.FunctionRegion>;
						public static ANY: io.github.jan.supabase.functions.FunctionRegion;
						public static AP_NORTHEAST_1: io.github.jan.supabase.functions.FunctionRegion;
						public static AP_NORTHEAST_2: io.github.jan.supabase.functions.FunctionRegion;
						public static AP_SOUTH_1: io.github.jan.supabase.functions.FunctionRegion;
						public static AP_SOUTHEAST_1: io.github.jan.supabase.functions.FunctionRegion;
						public static AP_SOUTHEAST_2: io.github.jan.supabase.functions.FunctionRegion;
						public static CA_CENTRAL_1: io.github.jan.supabase.functions.FunctionRegion;
						public static EU_CENTRAL_1: io.github.jan.supabase.functions.FunctionRegion;
						public static EU_WEST_1: io.github.jan.supabase.functions.FunctionRegion;
						public static EU_WEST_2: io.github.jan.supabase.functions.FunctionRegion;
						public static EU_WEST_3: io.github.jan.supabase.functions.FunctionRegion;
						public static SA_EAST_1: io.github.jan.supabase.functions.FunctionRegion;
						public static US_EAST_1: io.github.jan.supabase.functions.FunctionRegion;
						public static US_WEST_1: io.github.jan.supabase.functions.FunctionRegion;
						public static US_WEST_2: io.github.jan.supabase.functions.FunctionRegion;
						public static values(): androidNative.Array<io.github.jan.supabase.functions.FunctionRegion>;
						public static valueOf(value: string): io.github.jan.supabase.functions.FunctionRegion;
						public static getEntries(): any;
						public getValue(): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module functions {
					export class Functions extends java.lang.Object {
						public static class: java.lang.Class<io.github.jan.supabase.functions.Functions>;
						public static API_VERSION: number = 1;
						public buildEdgeFunction($this$buildEdgeFunction_u24lambda_u243: string, $i$f$build: io.github.jan.supabase.functions.FunctionRegion, this_$iv: io.ktor.http.Headers): io.github.jan.supabase.functions.EdgeFunction;
						public getSupabaseClient(): io.github.jan.supabase.SupabaseClient;
						public getSerializer(): io.github.jan.supabase.SupabaseSerializer;
						public getApi(): io.github.jan.supabase.auth.AuthenticatedSupabaseApi;
						public getApiVersion(): number;
						public invoke(this_$iv$iv: string, $i$f$invoke: io.github.jan.supabase.functions.FunctionRegion, region$iv: io.ktor.http.Headers, $i$f$invoke: any): any;
						public constructor(config: io.github.jan.supabase.functions.Functions.Config, supabaseClient: io.github.jan.supabase.SupabaseClient);
						public close($completion: any): any;
						public init(): void;
						public invoke(this_$iv: string, $i$f$invoke: io.github.jan.supabase.functions.FunctionRegion, this_: any, function_: any): any;
						public getPluginKey(): string;
						public getConfig(): io.github.jan.supabase.functions.Functions.Config;
						public parseErrorResponse(response: io.ktor.client.statement.HttpResponse, response: any): any;
						public resolveUrl(path: string): string;
					}
					export module Functions {
						export class Companion extends io.github.jan.supabase.plugins.SupabasePluginProvider<io.github.jan.supabase.functions.Functions.Config,io.github.jan.supabase.functions.Functions> {
							public static class: java.lang.Class<io.github.jan.supabase.functions.Functions.Companion>;
							public createConfig(init: any): io.github.jan.supabase.functions.Functions.Config;
							public getKey(): string;
							public setLogLevel(level: io.github.jan.supabase.logging.LogLevel): void;
							public setup(builder: io.github.jan.supabase.SupabaseClientBuilder, config: io.github.jan.supabase.functions.Functions.Config): void;
							public create(supabaseClient: io.github.jan.supabase.SupabaseClient, config: io.github.jan.supabase.functions.Functions.Config): io.github.jan.supabase.functions.Functions;
							public getLogger(): io.github.jan.supabase.logging.KermitSupabaseLogger;
						}
						export class Config {
							public static class: java.lang.Class<io.github.jan.supabase.functions.Functions.Config>;
							public constructor();
							public setDefaultRegion(value: io.github.jan.supabase.functions.FunctionRegion): void;
							public getDefaultRegion(): io.github.jan.supabase.functions.FunctionRegion;
							public getSerializer(): io.github.jan.supabase.SupabaseSerializer;
							public setSerializer(value: io.github.jan.supabase.SupabaseSerializer): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module postgrest {
					export class Postgrest extends java.lang.Object {
						public static class: java.lang.Class<io.github.jan.supabase.postgrest.Postgrest>;
						/**
						 * Constructs a new instance of the io.github.jan.supabase.postgrest.Postgrest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							from(param0: string): io.github.jan.supabase.postgrest.query.PostgrestQueryBuilder;
							from(param0: string, param1: string): io.github.jan.supabase.postgrest.query.PostgrestQueryBuilder;
							get(param0: string, param1: string): io.github.jan.supabase.postgrest.query.PostgrestQueryBuilder;
							get(param0: string): io.github.jan.supabase.postgrest.query.PostgrestQueryBuilder;
							rpc(param0: string, param1: any, param2: any): any;
							rpc(param0: string, param1: kotlinx.serialization.json.JsonObject, param2: any, param3: any): any;
							"<clinit>"(): void;
						});
						public constructor();
						public static API_VERSION: number = 1;
						public from(param0: string, param1: string): io.github.jan.supabase.postgrest.query.PostgrestQueryBuilder;
						public rpc(param0: string, param1: kotlinx.serialization.json.JsonObject, param2: any, param3: any): any;
						public rpc(param0: string, param1: any, param2: any): any;
						public from(param0: string): io.github.jan.supabase.postgrest.query.PostgrestQueryBuilder;
						public get(param0: string): io.github.jan.supabase.postgrest.query.PostgrestQueryBuilder;
						public get(param0: string, param1: string): io.github.jan.supabase.postgrest.query.PostgrestQueryBuilder;
					}
					export module Postgrest {
						export class Companion extends io.github.jan.supabase.plugins.SupabasePluginProvider<io.github.jan.supabase.postgrest.Postgrest.Config,io.github.jan.supabase.postgrest.Postgrest> {
							public static class: java.lang.Class<io.github.jan.supabase.postgrest.Postgrest.Companion>;
							public static API_VERSION: number = 1;
							public getKey(): string;
							public setLogLevel(level: io.github.jan.supabase.logging.LogLevel): void;
							public createConfig(init: any): io.github.jan.supabase.postgrest.Postgrest.Config;
							public setup(builder: io.github.jan.supabase.SupabaseClientBuilder, config: io.github.jan.supabase.postgrest.Postgrest.Config): void;
							public getLogger(): io.github.jan.supabase.logging.SupabaseLogger;
							public create(supabaseClient: io.github.jan.supabase.SupabaseClient, config: io.github.jan.supabase.postgrest.Postgrest.Config): io.github.jan.supabase.postgrest.Postgrest;
						}
						export class Config {
							public static class: java.lang.Class<io.github.jan.supabase.postgrest.Postgrest.Config>;
							public constructor();
							public copy(defaultSchema: string, propertyConversionMethod: io.github.jan.supabase.postgrest.PropertyConversionMethod): io.github.jan.supabase.postgrest.Postgrest.Config;
							public hashCode(): number;
							public constructor(defaultSchema: string, propertyConversionMethod: io.github.jan.supabase.postgrest.PropertyConversionMethod);
							public getSerializer(): io.github.jan.supabase.SupabaseSerializer;
							public getPropertyConversionMethod(): io.github.jan.supabase.postgrest.PropertyConversionMethod;
							public getDefaultSchema(): string;
							public setPropertyConversionMethod(value: io.github.jan.supabase.postgrest.PropertyConversionMethod): void;
							public component2(): io.github.jan.supabase.postgrest.PropertyConversionMethod;
							public toString(): string;
							public component1(): string;
							public setDefaultSchema(value: string): void;
							public equals(other: any): boolean;
							public setSerializer(value: io.github.jan.supabase.SupabaseSerializer): void;
						}
						export class DefaultImpls {
							public static class: java.lang.Class<io.github.jan.supabase.postgrest.Postgrest.DefaultImpls>;
							public static resolveUrl($this: io.github.jan.supabase.postgrest.Postgrest, path: string): string;
							public static get($this: io.github.jan.supabase.postgrest.Postgrest, schema: string, table: string): io.github.jan.supabase.postgrest.query.PostgrestQueryBuilder;
							public static close($this: io.github.jan.supabase.postgrest.Postgrest, $completion: any): any;
							public static get($this: io.github.jan.supabase.postgrest.Postgrest, table: string): io.github.jan.supabase.postgrest.query.PostgrestQueryBuilder;
							public static init($this: io.github.jan.supabase.postgrest.Postgrest): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module postgrest {
					export class PostgrestDsl {
						public static class: java.lang.Class<io.github.jan.supabase.postgrest.PostgrestDsl>;
						/**
						 * Constructs a new instance of the io.github.jan.supabase.postgrest.PostgrestDsl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
	export module github {
		export module jan {
			export module supabase {
				export module postgrest {
					export class PostgrestErrorResponse {
						public static class: java.lang.Class<io.github.jan.supabase.postgrest.PostgrestErrorResponse>;
						public getMessage(): string;
						public component3(): string;
						public equals(other: any): boolean;
						public copy(message: string, hint: string, details: string, code: string): io.github.jan.supabase.postgrest.PostgrestErrorResponse;
						public component1(): string;
						public hashCode(): number;
						public toString(): string;
						public component4(): string;
						public constructor(message: string, hint: string, details: string, code: string);
						public getDetails(): string;
						public getHint(): string;
						public component2(): string;
						public getCode(): string;
					}
						
					export module PostgrestErrorResponse {
							export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.postgrest.PostgrestErrorResponse> {
								public static class: java.lang.Class<io.github.jan.supabase.postgrest.PostgrestErrorResponse.serializer>;
								public static INSTANCE: io.github.jan.supabase.postgrest.PostgrestErrorResponse.serializer;
								public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.postgrest.PostgrestErrorResponse): void;
								public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.postgrest.PostgrestErrorResponse;
								public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
								public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
								public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
							}
						}
						export class Companion {
							public static class: java.lang.Class<io.github.jan.supabase.postgrest.PostgrestErrorResponse.Companion>;
							public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.postgrest.PostgrestErrorResponse>;
						}
					
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module postgrest {
					export class PostgrestImpl extends io.github.jan.supabase.postgrest.Postgrest {
						public static class: java.lang.Class<io.github.jan.supabase.postgrest.PostgrestImpl>;
						public setSerializer(value: io.github.jan.supabase.SupabaseSerializer): void;
						public rpc(param0: string, param1: kotlinx.serialization.json.JsonObject, param2: any, param3: any): any;
						public from(table: string): io.github.jan.supabase.postgrest.query.PostgrestQueryBuilder;
						public getSupabaseClient(): io.github.jan.supabase.SupabaseClient;
						public getSerializer(): io.github.jan.supabase.SupabaseSerializer;
						public getApi(): io.github.jan.supabase.auth.AuthenticatedSupabaseApi;
						public get(param0: string): io.github.jan.supabase.postgrest.query.PostgrestQueryBuilder;
						public rpc(function_: string, request: any, $completion: any): any;
						public rpc(function_: string, parameters: kotlinx.serialization.json.JsonObject, request: any, $completion: any): any;
						public get(table: string): io.github.jan.supabase.postgrest.query.PostgrestQueryBuilder;
						public getApiVersion(): number;
						public from(param0: string, param1: string): io.github.jan.supabase.postgrest.query.PostgrestQueryBuilder;
						public rpc(param0: string, param1: any, param2: any): any;
						public close($completion: any): any;
						public init(): void;
						public from(param0: string): io.github.jan.supabase.postgrest.query.PostgrestQueryBuilder;
						public getPluginKey(): string;
						public constructor(supabaseClient: io.github.jan.supabase.SupabaseClient, config: io.github.jan.supabase.postgrest.Postgrest.Config);
						public parseErrorResponse(response: io.ktor.client.statement.HttpResponse, response: any): any;
						public getConfig(): io.github.jan.supabase.postgrest.Postgrest.Config;
						public get(schema: string, table: string): io.github.jan.supabase.postgrest.query.PostgrestQueryBuilder;
						public from(schema: string, table: string): io.github.jan.supabase.postgrest.query.PostgrestQueryBuilder;
						public resolveUrl(path: string): string;
						public get(param0: string, param1: string): io.github.jan.supabase.postgrest.query.PostgrestQueryBuilder;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module postgrest {
					export class PropertyConversionMethod {
						public static class: java.lang.Class<io.github.jan.supabase.postgrest.PropertyConversionMethod>;
						/**
						 * Constructs a new instance of the io.github.jan.supabase.postgrest.PropertyConversionMethod interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							invoke(param0: any): string;
							"<clinit>"(): void;
						});
						public constructor();
						public invoke(param0: any): string;
					}
					export module PropertyConversionMethod {
						export class Companion {
							public static class: java.lang.Class<io.github.jan.supabase.postgrest.PropertyConversionMethod.Companion>;
							public getSERIAL_NAME(): io.github.jan.supabase.postgrest.PropertyConversionMethod;
							public getCAMEL_CASE_TO_SNAKE_CASE(): io.github.jan.supabase.postgrest.PropertyConversionMethod;
							public getNONE(): io.github.jan.supabase.postgrest.PropertyConversionMethod;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module postgrest {
					export class RpcMethod {
						public static class: java.lang.Class<io.github.jan.supabase.postgrest.RpcMethod>;
						public static HEAD: io.github.jan.supabase.postgrest.RpcMethod;
						public static POST: io.github.jan.supabase.postgrest.RpcMethod;
						public static GET: io.github.jan.supabase.postgrest.RpcMethod;
						public getHttpMethod(): io.ktor.http.HttpMethod;
						public static getEntries(): any;
						public static values(): androidNative.Array<io.github.jan.supabase.postgrest.RpcMethod>;
						public static valueOf(value: string): io.github.jan.supabase.postgrest.RpcMethod;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module postgrest {
					export module executor {
						export class RequestExecutor {
							public static class: java.lang.Class<io.github.jan.supabase.postgrest.executor.RequestExecutor>;
							/**
							 * Constructs a new instance of the io.github.jan.supabase.postgrest.executor.RequestExecutor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								execute(param0: io.github.jan.supabase.postgrest.Postgrest, param1: string, param2: io.github.jan.supabase.postgrest.request.PostgrestRequest, param3: any): any;
							});
							public constructor();
							public execute(param0: io.github.jan.supabase.postgrest.Postgrest, param1: string, param2: io.github.jan.supabase.postgrest.request.PostgrestRequest, param3: any): any;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module postgrest {
					export module executor {
						export class RestRequestExecutor extends io.github.jan.supabase.postgrest.executor.RequestExecutor {
							public static class: java.lang.Class<io.github.jan.supabase.postgrest.executor.RestRequestExecutor>;
							public static INSTANCE: io.github.jan.supabase.postgrest.executor.RestRequestExecutor;
							public hashCode(): number;
							public execute(postgrest: io.github.jan.supabase.postgrest.Postgrest, path: string, request: io.github.jan.supabase.postgrest.request.PostgrestRequest, authenticatedSupabaseApi: any): any;
							public equals(other: any): boolean;
							public toString(): string;
							public execute(param0: io.github.jan.supabase.postgrest.Postgrest, param1: string, param2: io.github.jan.supabase.postgrest.request.PostgrestRequest, param3: any): any;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module postgrest {
					export module query {
						export class Columns {
							public static class: java.lang.Class<io.github.jan.supabase.postgrest.query.Columns>;
							public static "equals-impl"(arg0: string, other: any): boolean;
							public static "equals-impl0"(p1: string, p2: string): boolean;
							public hashCode(): number;
							public static "hashCode-impl"(arg0: string): number;
							public equals(other: any): boolean;
							public static "toString-impl"(arg0: string): string;
							public static "constructor-impl"(value: string): string;
							public getValue(): string;
							public toString(): string;
						}
						export module Columns {
							export class Companion {
								public static class: java.lang.Class<io.github.jan.supabase.postgrest.query.Columns.Companion>;
								public "getALL-U9NzzuM"(): string;
								public "list-Y7uY_Gg"(columns: java.util.List<string>): string;
								public "raw-Y7uY_Gg"(value: string): string;
								public "list-Y7uY_Gg"(columns: androidNative.Array<string>): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module postgrest {
					export module query {
						export class Count {
							public static class: java.lang.Class<io.github.jan.supabase.postgrest.query.Count>;
							public static EXACT: io.github.jan.supabase.postgrest.query.Count;
							public static PLANNED: io.github.jan.supabase.postgrest.query.Count;
							public static ESTIMATED: io.github.jan.supabase.postgrest.query.Count;
							public static values(): androidNative.Array<io.github.jan.supabase.postgrest.query.Count>;
							public getIdentifier(): string;
							public static getEntries(): any;
							public static valueOf(value: string): io.github.jan.supabase.postgrest.query.Count;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module postgrest {
					export module query {
						export class Order {
							public static class: java.lang.Class<io.github.jan.supabase.postgrest.query.Order>;
							public static ASCENDING: io.github.jan.supabase.postgrest.query.Order;
							public static DESCENDING: io.github.jan.supabase.postgrest.query.Order;
							public static values(): androidNative.Array<io.github.jan.supabase.postgrest.query.Order>;
							public getValue(): string;
							public static valueOf(value: string): io.github.jan.supabase.postgrest.query.Order;
							public static getEntries(): any;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module postgrest {
					export module query {
						export class PostgrestQueryBuilder {
							public static class: java.lang.Class<io.github.jan.supabase.postgrest.query.PostgrestQueryBuilder>;
							public static HEADER_PREFER: string = "Prefer";
							public constructor(postgrest: io.github.jan.supabase.postgrest.Postgrest, table: string, schema: string);
							public getPostgrest(): io.github.jan.supabase.postgrest.Postgrest;
							//public "select-Ao2T0zE"($this$select_Ao2T0zE_u24lambda_u240: string, $i$f$select-Ao2T0zE: any, requestBuilder: any): any;
							public getSchema(): string;
							public getTable(): string;
							public update(update$iv: any, propertyConversionMethod$iv: any, serializer$iv: any): any;
							public delete(requestBuilder: any, deleteRequest: any): any;
						}
						export module PostgrestQueryBuilder {
							export class Companion {
								public static class: java.lang.Class<io.github.jan.supabase.postgrest.query.PostgrestQueryBuilder.Companion>;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module postgrest {
					export module query {
						export class PostgrestRequestBuilder {
							public static class: java.lang.Class<io.github.jan.supabase.postgrest.query.PostgrestRequestBuilder>;
							public constructor(propertyConversionMethod: io.github.jan.supabase.postgrest.PropertyConversionMethod);
							public getCount(): io.github.jan.supabase.postgrest.query.Count;
							public "select-fYsiLaM"(columns: string): void;
							public geojson(): void;
							public explain($this$explain_u24lambda_u240: boolean, options: boolean, forMediatype: boolean, this_: boolean, analyze: boolean, verbose: string): void;
							public getPropertyConversionMethod(): io.github.jan.supabase.postgrest.PropertyConversionMethod;
							public count(count: io.github.jan.supabase.postgrest.query.Count): void;
							public single(): void;
							public getParams(): java.util.Map<string,java.util.List<string>>;
							public limit(this_: number, count: string): void;
							public order(orderEntry: string, existingOrder: io.github.jan.supabase.postgrest.query.Order, newOrder: boolean, this_: string): void;
							public range(keyLimit: number, this_: number, from: string): void;
							public getReturning(): io.github.jan.supabase.postgrest.query.Returning;
							public range(range: any, referencedTable: string): void;
							public filter(filter: any): void;
							public getHeaders(): io.ktor.http.HeadersBuilder;
							public csv(): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module postgrest {
					export module query {
						export class PostgrestUpdate {
							public static class: java.lang.Class<io.github.jan.supabase.postgrest.query.PostgrestUpdate>;
							public setTo($this$setTo: any, value: string): void;
							public set(column: string, value: java.lang.Boolean): void;
							public set(column: string, value: java.lang.Double): void;
							public getSerializer(): io.github.jan.supabase.SupabaseSerializer;
							public setTo($this$setTo: any, value: java.lang.Double): void;
							public toJson(): kotlinx.serialization.json.JsonObject;
							public getPropertyConversionMethod(): io.github.jan.supabase.postgrest.PropertyConversionMethod;
							public setTo($this$setTo: any, value: java.lang.Long): void;
							public set(column: string, value: java.lang.Float): void;
							public setTo($this$setTo: any, value: java.lang.Boolean): void;
							public constructor(propertyConversionMethod: io.github.jan.supabase.postgrest.PropertyConversionMethod, serializer: io.github.jan.supabase.SupabaseSerializer);
							public getMap(): java.util.Map<string,kotlinx.serialization.json.JsonElement>;
							public set(column: string, value: java.lang.Long): void;
							public setTo($this$setTo: any, value: java.lang.Integer): void;
							public setTo($this$setTo: any, value: java.lang.Float): void;
							public set(column: string, value: string): void;
							public set(column: string, value: java.lang.Integer): void;
							public setToNull(column: string): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module postgrest {
					export module query {
						export abstract class Returning {
							public static class: java.lang.Class<io.github.jan.supabase.postgrest.query.Returning>;
							public getIdentifier(): string;
						}
						export module Returning {
							export class Minimal extends io.github.jan.supabase.postgrest.query.Returning {
								public static class: java.lang.Class<io.github.jan.supabase.postgrest.query.Returning.Minimal>;
								public static INSTANCE: io.github.jan.supabase.postgrest.query.Returning.Minimal;
								public toString(): string;
								public hashCode(): number;
								public equals(other: any): boolean;
							}
							export class Representation extends io.github.jan.supabase.postgrest.query.Returning {
								public static class: java.lang.Class<io.github.jan.supabase.postgrest.query.Returning.Representation>;
								public toString(): string;
								public "getColumns-U9NzzuM"(): string;
								public "component1-U9NzzuM"(): string;
								public "copy-fYsiLaM"(columns: string): io.github.jan.supabase.postgrest.query.Returning.Representation;
								public hashCode(): number;
								public equals(other: any): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module postgrest {
					export module query {
						export module filter {
							export class FilterOperation {
								public static class: java.lang.Class<io.github.jan.supabase.postgrest.query.filter.FilterOperation>;
								public component1(): string;
								public toString(): string;
								public constructor(column: string, operator: io.github.jan.supabase.postgrest.query.filter.FilterOperator, value: any);
								public getOperator(): io.github.jan.supabase.postgrest.query.filter.FilterOperator;
								public getValue(): any;
								public getColumn(): string;
								public component2(): io.github.jan.supabase.postgrest.query.filter.FilterOperator;
								public hashCode(): number;
								public equals(other: any): boolean;
								public component3(): any;
								public copy(column: string, operator: io.github.jan.supabase.postgrest.query.filter.FilterOperator, value: any): io.github.jan.supabase.postgrest.query.filter.FilterOperation;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module postgrest {
					export module query {
						export module filter {
							export class FilterOperator {
								public static class: java.lang.Class<io.github.jan.supabase.postgrest.query.filter.FilterOperator>;
								public static EQ: io.github.jan.supabase.postgrest.query.filter.FilterOperator;
								public static NEQ: io.github.jan.supabase.postgrest.query.filter.FilterOperator;
								public static GT: io.github.jan.supabase.postgrest.query.filter.FilterOperator;
								public static GTE: io.github.jan.supabase.postgrest.query.filter.FilterOperator;
								public static LT: io.github.jan.supabase.postgrest.query.filter.FilterOperator;
								public static LTE: io.github.jan.supabase.postgrest.query.filter.FilterOperator;
								public static LIKE: io.github.jan.supabase.postgrest.query.filter.FilterOperator;
								public static MATCH: io.github.jan.supabase.postgrest.query.filter.FilterOperator;
								public static ILIKE: io.github.jan.supabase.postgrest.query.filter.FilterOperator;
								public static IMATCH: io.github.jan.supabase.postgrest.query.filter.FilterOperator;
								public static IS: io.github.jan.supabase.postgrest.query.filter.FilterOperator;
								public static IN: io.github.jan.supabase.postgrest.query.filter.FilterOperator;
								public static CS: io.github.jan.supabase.postgrest.query.filter.FilterOperator;
								public static CD: io.github.jan.supabase.postgrest.query.filter.FilterOperator;
								public static SL: io.github.jan.supabase.postgrest.query.filter.FilterOperator;
								public static SR: io.github.jan.supabase.postgrest.query.filter.FilterOperator;
								public static NXL: io.github.jan.supabase.postgrest.query.filter.FilterOperator;
								public static NXR: io.github.jan.supabase.postgrest.query.filter.FilterOperator;
								public static ADJ: io.github.jan.supabase.postgrest.query.filter.FilterOperator;
								public static OV: io.github.jan.supabase.postgrest.query.filter.FilterOperator;
								public static FTS: io.github.jan.supabase.postgrest.query.filter.FilterOperator;
								public static PLFTS: io.github.jan.supabase.postgrest.query.filter.FilterOperator;
								public static PHFTS: io.github.jan.supabase.postgrest.query.filter.FilterOperator;
								public static WFTS: io.github.jan.supabase.postgrest.query.filter.FilterOperator;
								public static values(): androidNative.Array<io.github.jan.supabase.postgrest.query.filter.FilterOperator>;
								public getIdentifier(): string;
								public static getEntries(): any;
								public static valueOf(value: string): io.github.jan.supabase.postgrest.query.filter.FilterOperator;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module postgrest {
					export module query {
						export module filter {
							export class PostgrestFilterBuilder {
								public static class: java.lang.Class<io.github.jan.supabase.postgrest.query.filter.PostgrestFilterBuilder>;
								public rangeGt(column: string, range: any): void;
								public lt($this$lt: any, value: any): void;
								public gte($this$gte: any, value: any): void;
								public rangeLt($this$rangeLt: any, range: any): void;
								public rangeLte(column: string, range: any): void;
								public filterNot(operation: io.github.jan.supabase.postgrest.query.filter.FilterOperation): void;
								public filter(this_: string, column: io.github.jan.supabase.postgrest.query.filter.FilterOperator, operator: any): void;
								public isIn(column: string, values: java.util.List<any>): void;
								public likeAny(this_: string, column: java.util.List<string>): void;
								public rangeGte($this$rangeGte: any, range: any): void;
								public rangeGt($this$rangeGt: any, range: any): void;
								public nxl(column: string, range: any): void;
								public filterNot(this_: string, column: io.github.jan.supabase.postgrest.query.filter.FilterOperator, operator: any): void;
								public adjacent(column: string, range: any): void;
								public constructor(propertyConversionMethod: io.github.jan.supabase.postgrest.PropertyConversionMethod, _params: java.util.Map<string,java.util.List<string>>, isInLogicalExpression: boolean);
								public overlaps(column: string, values: java.util.List<any>): void;
								public eq(column: string, value: any): void;
								public contained(column: string, values: java.util.List<any>): void;
								public like(column: string, pattern: string): void;
								public ilike(column: string, pattern: string): void;
								public sl(column: string, range: any): void;
								public lte($this$lte: any, value: any): void;
								public eq($this$eq: any, value: any): void;
								public likeAll(this_: string, column: java.util.List<string>): void;
								public rangeLt(column: string, range: any): void;
								public gt($this$gt: any, value: any): void;
								public ilikeAny(this_: string, column: java.util.List<string>): void;
								public exact(column: string, value: java.lang.Boolean): void;
								public ilike($this$ilike: any, pattern: string): void;
								public nxr(column: string, range: any): void;
								public contains($this$contains: any, values: java.util.List<any>): void;
								public isIn($this$isIn: any, list: java.util.List<any>): void;
								public gte(column: string, value: any): void;
								public or($this$or_u24lambda_u240: boolean, $i$f$formatJoiningFilter: string, params$iv: any): void;
								public lte(column: string, value: any): void;
								public sr(column: string, range: any): void;
								public rangeLte($this$rangeLte: any, range: any): void;
								public and($this$and_u24lambda_u241: boolean, $i$f$formatJoiningFilter: string, params$iv: any): void;
								public textSearch(this_: string, column: string, query: io.github.jan.supabase.postgrest.query.filter.TextSearchType, textSearchType: string): io.github.jan.supabase.postgrest.query.filter.PostgrestFilterBuilder;
								public like($this$like: any, pattern: string): void;
								public imatch(column: string, pattern: string): void;
								public match($this$match: any, pattern: string): void;
								public getParams(): java.util.Map<string,java.util.List<string>>;
								public ov(column: string, values: java.util.List<any>): void;
								public cs(column: string, values: java.util.List<any>): void;
								public cd(column: string, values: java.util.List<any>): void;
								public imatch($this$imatch: any, pattern: string): void;
								public lt(column: string, value: any): void;
								public contains(column: string, values: java.util.List<any>): void;
								public isInLogicalExpression(): boolean;
								public gt(column: string, value: any): void;
								public isExact($this$isExact: any, value: java.lang.Boolean): void;
								public neq(column: string, value: any): void;
								public neq($this$neq: any, value: any): void;
								public overlaps($this$overlaps: any, values: java.util.List<any>): void;
								public filter(operation: io.github.jan.supabase.postgrest.query.filter.FilterOperation): void;
								public ilikeAll(this_: string, column: java.util.List<string>): void;
								public contained($this$contained: any, values: java.util.List<any>): void;
								public rangeGte(column: string, range: any): void;
								public getPropertyConversionMethod(): io.github.jan.supabase.postgrest.PropertyConversionMethod;
								public get_params(): java.util.Map<string,java.util.List<string>>;
								public adjacent($this$adjacent: any, range: any): void;
								public match(column: string, pattern: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module postgrest {
					export module query {
						export module filter {
							export class TextSearchType {
								public static class: java.lang.Class<io.github.jan.supabase.postgrest.query.filter.TextSearchType>;
								public static NONE: io.github.jan.supabase.postgrest.query.filter.TextSearchType;
								public static PLAINTO: io.github.jan.supabase.postgrest.query.filter.TextSearchType;
								public static PHRASETO: io.github.jan.supabase.postgrest.query.filter.TextSearchType;
								public static WEBSEARCH: io.github.jan.supabase.postgrest.query.filter.TextSearchType;
								public static valueOf(value: string): io.github.jan.supabase.postgrest.query.filter.TextSearchType;
								public getIdentifier(): string;
								public static values(): androidNative.Array<io.github.jan.supabase.postgrest.query.filter.TextSearchType>;
								public static getEntries(): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module postgrest {
					export module query {
						export module request {
							export class InsertRequestBuilder extends io.github.jan.supabase.postgrest.query.PostgrestRequestBuilder {
								public static class: java.lang.Class<io.github.jan.supabase.postgrest.query.request.InsertRequestBuilder>;
								public constructor(propertyConversionMethod: io.github.jan.supabase.postgrest.PropertyConversionMethod);
								public setDefaultToNull(value: boolean): void;
								public getDefaultToNull(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module postgrest {
					export module query {
						export module request {
							export class RpcRequestBuilder extends io.github.jan.supabase.postgrest.query.PostgrestRequestBuilder {
								public static class: java.lang.Class<io.github.jan.supabase.postgrest.query.request.RpcRequestBuilder>;
								public setMethod(value: io.github.jan.supabase.postgrest.RpcMethod): void;
								public constructor(defaultSchema: string, propertyConversionMethod: io.github.jan.supabase.postgrest.PropertyConversionMethod);
								public getSchema(): string;
								public constructor(propertyConversionMethod: io.github.jan.supabase.postgrest.PropertyConversionMethod);
								public setSchema(value: string): void;
								public getMethod(): io.github.jan.supabase.postgrest.RpcMethod;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module postgrest {
					export module query {
						export module request {
							export class SelectRequestBuilder extends io.github.jan.supabase.postgrest.query.PostgrestRequestBuilder {
								public static class: java.lang.Class<io.github.jan.supabase.postgrest.query.request.SelectRequestBuilder>;
								public getHead(): boolean;
								public constructor(propertyConversionMethod: io.github.jan.supabase.postgrest.PropertyConversionMethod);
								public setHead(value: boolean): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module postgrest {
					export module query {
						export module request {
							export class UpsertRequestBuilder extends io.github.jan.supabase.postgrest.query.request.InsertRequestBuilder {
								public static class: java.lang.Class<io.github.jan.supabase.postgrest.query.request.UpsertRequestBuilder>;
								public constructor(propertyConversionMethod: io.github.jan.supabase.postgrest.PropertyConversionMethod);
								public getOnConflict(): string;
								public getIgnoreDuplicates(): boolean;
								public setOnConflict(value: string): void;
								public setIgnoreDuplicates(value: boolean): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module postgrest {
					export module request {
						export class DeleteRequest extends io.github.jan.supabase.postgrest.request.PostgrestRequest {
							public static class: java.lang.Class<io.github.jan.supabase.postgrest.request.DeleteRequest>;
							public getHeaders(): io.ktor.http.Headers;
							public getMethod(): io.ktor.http.HttpMethod;
							public constructor($this$prefer_u24lambda_u240: io.github.jan.supabase.postgrest.query.Returning, this_: io.github.jan.supabase.postgrest.query.Count, returning: java.util.Map<string,string>, count: string, urlParams: io.ktor.http.Headers);
							public getReturning(): io.github.jan.supabase.postgrest.query.Returning;
							public getPrefer(): java.util.List<string>;
							public getSchema(): string;
							public getUrlParams(): java.util.Map<string,string>;
							public getBody(): kotlinx.serialization.json.JsonElement;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module postgrest {
					export module request {
						export class InsertRequest extends io.github.jan.supabase.postgrest.request.PostgrestRequest {
							public static class: java.lang.Class<io.github.jan.supabase.postgrest.request.InsertRequest>;
							public copy(upsert: boolean, returning: io.github.jan.supabase.postgrest.query.Returning, count: io.github.jan.supabase.postgrest.query.Count, ignoreDuplicates: boolean, defaultToNull: boolean, body: kotlinx.serialization.json.JsonArray, urlParams: java.util.Map<string,string>, schema: string, headers: io.ktor.http.Headers): io.github.jan.supabase.postgrest.request.InsertRequest;
							public component2(): io.github.jan.supabase.postgrest.query.Returning;
							public component7(): java.util.Map<string,string>;
							public hashCode(): number;
							public constructor($this$prefer_u24lambda_u240: boolean, this_: io.github.jan.supabase.postgrest.query.Returning, upsert: io.github.jan.supabase.postgrest.query.Count, returning: boolean, count: boolean, ignoreDuplicates: kotlinx.serialization.json.JsonArray, defaultToNull: java.util.Map<string,string>, body: string, urlParams: io.ktor.http.Headers);
							public component9(): io.ktor.http.Headers;
							public getSchema(): string;
							public toString(): string;
							public getBody(): kotlinx.serialization.json.JsonElement;
							public getBody(): kotlinx.serialization.json.JsonArray;
							public getHeaders(): io.ktor.http.Headers;
							public component8(): string;
							public getMethod(): io.ktor.http.HttpMethod;
							public component6(): kotlinx.serialization.json.JsonArray;
							public equals(other: any): boolean;
							public getReturning(): io.github.jan.supabase.postgrest.query.Returning;
							public getPrefer(): java.util.List<string>;
							public getUrlParams(): java.util.Map<string,string>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module postgrest {
					export module request {
						export class PostgrestRequest {
							public static class: java.lang.Class<io.github.jan.supabase.postgrest.request.PostgrestRequest>;
							/**
							 * Constructs a new instance of the io.github.jan.supabase.postgrest.request.PostgrestRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getBody(): kotlinx.serialization.json.JsonElement;
								getMethod(): io.ktor.http.HttpMethod;
								getUrlParams(): java.util.Map<string,string>;
								getHeaders(): io.ktor.http.Headers;
								getReturning(): io.github.jan.supabase.postgrest.query.Returning;
								getPrefer(): java.util.List<string>;
								getSchema(): string;
							});
							public constructor();
							public getHeaders(): io.ktor.http.Headers;
							public getMethod(): io.ktor.http.HttpMethod;
							public getReturning(): io.github.jan.supabase.postgrest.query.Returning;
							public getPrefer(): java.util.List<string>;
							public getSchema(): string;
							public getUrlParams(): java.util.Map<string,string>;
							public getBody(): kotlinx.serialization.json.JsonElement;
						}
						export module PostgrestRequest {
							export class DefaultImpls {
								public static class: java.lang.Class<io.github.jan.supabase.postgrest.request.PostgrestRequest.DefaultImpls>;
								public static getBody($this: io.github.jan.supabase.postgrest.request.PostgrestRequest): kotlinx.serialization.json.JsonElement;
								public static getReturning($this: io.github.jan.supabase.postgrest.request.PostgrestRequest): io.github.jan.supabase.postgrest.query.Returning;
								public static getHeaders($this: io.github.jan.supabase.postgrest.request.PostgrestRequest): io.ktor.http.Headers;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module postgrest {
					export module request {
						export class RpcRequest extends io.github.jan.supabase.postgrest.request.PostgrestRequest {
							public static class: java.lang.Class<io.github.jan.supabase.postgrest.request.RpcRequest>;
							public getHeaders(): io.ktor.http.Headers;
							public getMethod(): io.ktor.http.HttpMethod;
							public getCount(): io.github.jan.supabase.postgrest.query.Count;
							public getPrefer(): java.util.List<string>;
							public getReturning(): io.github.jan.supabase.postgrest.query.Returning;
							public getSchema(): string;
							public getUrlParams(): java.util.Map<string,string>;
							public getBody(): kotlinx.serialization.json.JsonElement;
							public constructor(method: io.ktor.http.HttpMethod, count: io.github.jan.supabase.postgrest.query.Count, urlParams: java.util.Map<string,string>, body: kotlinx.serialization.json.JsonElement, schema: string, headers: io.ktor.http.Headers);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module postgrest {
					export module request {
						export class SelectRequest extends io.github.jan.supabase.postgrest.request.PostgrestRequest {
							public static class: java.lang.Class<io.github.jan.supabase.postgrest.request.SelectRequest>;
							public getHeaders(): io.ktor.http.Headers;
							public getMethod(): io.ktor.http.HttpMethod;
							public constructor(head: boolean, count: io.github.jan.supabase.postgrest.query.Count, urlParams: java.util.Map<string,string>, schema: string, headers: io.ktor.http.Headers);
							public getCount(): io.github.jan.supabase.postgrest.query.Count;
							public getPrefer(): java.util.List<string>;
							public getReturning(): io.github.jan.supabase.postgrest.query.Returning;
							public getSchema(): string;
							public getUrlParams(): java.util.Map<string,string>;
							public getBody(): kotlinx.serialization.json.JsonElement;
							public getHead(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module postgrest {
					export module request {
						export class UpdateRequest extends io.github.jan.supabase.postgrest.request.PostgrestRequest {
							public static class: java.lang.Class<io.github.jan.supabase.postgrest.request.UpdateRequest>;
							public getHeaders(): io.ktor.http.Headers;
							public getMethod(): io.ktor.http.HttpMethod;
							public getReturning(): io.github.jan.supabase.postgrest.query.Returning;
							public getPrefer(): java.util.List<string>;
							public getSchema(): string;
							public getUrlParams(): java.util.Map<string,string>;
							public getBody(): kotlinx.serialization.json.JsonElement;
							public constructor($this$prefer_u24lambda_u240: io.github.jan.supabase.postgrest.query.Returning, this_: io.github.jan.supabase.postgrest.query.Count, returning: java.util.Map<string,string>, count: kotlinx.serialization.json.JsonElement, urlParams: string, body: io.ktor.http.Headers);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module postgrest {
					export module result {
						export class PostgrestResult {
							public static class: java.lang.Class<io.github.jan.supabase.postgrest.result.PostgrestResult>;
							public getHeaders(): io.ktor.http.Headers;
							public component2(): io.ktor.http.Headers;
							public getData(): string;
							public rangeOrNull(): any;
							public getPostgrest(): io.github.jan.supabase.postgrest.Postgrest;
							public constructor(data: string, headers: io.ktor.http.Headers, postgrest: io.github.jan.supabase.postgrest.Postgrest);
							public countOrNull(): java.lang.Long;
							public component1(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export class BroadcastJoinConfig {
						public static class: java.lang.Class<io.github.jan.supabase.realtime.BroadcastJoinConfig>;
						public constructor(acknowledgeBroadcasts: boolean, receiveOwnBroadcasts: boolean);
						public equals(other: any): boolean;
						public setAcknowledgeBroadcasts(value: boolean): void;
						public getAcknowledgeBroadcasts(): boolean;
						public component2(): boolean;
						public copy(acknowledgeBroadcasts: boolean, receiveOwnBroadcasts: boolean): io.github.jan.supabase.realtime.BroadcastJoinConfig;
						public hashCode(): number;
						public component1(): boolean;
						public setReceiveOwnBroadcasts(value: boolean): void;
						public getReceiveOwnBroadcasts(): boolean;
						public toString(): string;
					}
						
					export module BroadcastJoinConfig {
							export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.realtime.BroadcastJoinConfig> {
								public static class: java.lang.Class<io.github.jan.supabase.realtime.BroadcastJoinConfig.serializer>;
								public static INSTANCE: io.github.jan.supabase.realtime.BroadcastJoinConfig.serializer;
								public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
								public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
								public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
								public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.realtime.BroadcastJoinConfig): void;
								public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.realtime.BroadcastJoinConfig;
							}
						}
						export class Companion {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.BroadcastJoinConfig.Companion>;
							public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.realtime.BroadcastJoinConfig>;
						}
					
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export class CallbackManager {
						public static class: java.lang.Class<io.github.jan.supabase.realtime.CallbackManager>;
						/**
						 * Constructs a new instance of the io.github.jan.supabase.realtime.CallbackManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							triggerPostgresChange(param0: java.util.List<java.lang.Long>, param1: io.github.jan.supabase.realtime.PostgresAction): void;
							triggerBroadcast(param0: string, param1: kotlinx.serialization.json.JsonObject): void;
							triggerPresenceDiff(param0: java.util.Map<string,io.github.jan.supabase.realtime.Presence>, param1: java.util.Map<string,io.github.jan.supabase.realtime.Presence>): void;
							addBroadcastCallback(param0: string, param1: any): number;
							addPostgresCallback(param0: io.github.jan.supabase.realtime.PostgresJoinConfig, param1: any): number;
							addPresenceCallback(param0: any): number;
							removeCallbackById(param0: number): void;
							setServerChanges(param0: java.util.List<io.github.jan.supabase.realtime.PostgresJoinConfig>): void;
						});
						public constructor();
						public triggerPresenceDiff(param0: java.util.Map<string,io.github.jan.supabase.realtime.Presence>, param1: java.util.Map<string,io.github.jan.supabase.realtime.Presence>): void;
						public setServerChanges(param0: java.util.List<io.github.jan.supabase.realtime.PostgresJoinConfig>): void;
						public addBroadcastCallback(param0: string, param1: any): number;
						public triggerBroadcast(param0: string, param1: kotlinx.serialization.json.JsonObject): void;
						public addPostgresCallback(param0: io.github.jan.supabase.realtime.PostgresJoinConfig, param1: any): number;
						public triggerPostgresChange(param0: java.util.List<java.lang.Long>, param1: io.github.jan.supabase.realtime.PostgresAction): void;
						public addPresenceCallback(param0: any): number;
						public removeCallbackById(param0: number): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export class CallbackManagerImpl extends io.github.jan.supabase.realtime.CallbackManager {
						public static class: java.lang.Class<io.github.jan.supabase.realtime.CallbackManagerImpl>;
						public triggerPresenceDiff(param0: java.util.Map<string,io.github.jan.supabase.realtime.Presence>, param1: java.util.Map<string,io.github.jan.supabase.realtime.Presence>): void;
						public constructor();
						public setServerChanges(param0: java.util.List<io.github.jan.supabase.realtime.PostgresJoinConfig>): void;
						public setServerChanges(changes: java.util.List<io.github.jan.supabase.realtime.PostgresJoinConfig>): void;
						public addPresenceCallback(param0: any): number;
						public getServerChanges(): java.util.List<io.github.jan.supabase.realtime.PostgresJoinConfig>;
						public removeCallbackById(param0: number): void;
						public addBroadcastCallback(this_: string, event: any): number;
						public triggerPostgresChange(it: java.util.List<java.lang.Long>, element$iv$iv: io.github.jan.supabase.realtime.PostgresAction): void;
						public addBroadcastCallback(param0: string, param1: any): number;
						public triggerBroadcast(param0: string, param1: kotlinx.serialization.json.JsonObject): void;
						public addPostgresCallback(param0: io.github.jan.supabase.realtime.PostgresJoinConfig, param1: any): number;
						public addPostgresCallback(this_: io.github.jan.supabase.realtime.PostgresJoinConfig, filter: any): number;
						public constructor(serializer: io.github.jan.supabase.SupabaseSerializer);
						public removeCallbackById(it: number): void;
						public triggerPostgresChange(param0: java.util.List<java.lang.Long>, param1: io.github.jan.supabase.realtime.PostgresAction): void;
						public triggerBroadcast($i$f$filterIsInstanceTo: string, $this$filterIsInstanceTo$iv$iv: kotlinx.serialization.json.JsonObject): void;
						public triggerPresenceDiff($i$f$filterIsInstanceTo: java.util.Map<string,io.github.jan.supabase.realtime.Presence>, $this$filterIsInstanceTo$iv$iv: java.util.Map<string,io.github.jan.supabase.realtime.Presence>): void;
						public addPresenceCallback(this_: any): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export class Column {
						public static class: java.lang.Class<io.github.jan.supabase.realtime.Column>;
						public constructor(name: string, type: string);
						public equals(other: any): boolean;
						public component2(): string;
						public getType(): string;
						public copy(name: string, type: string): io.github.jan.supabase.realtime.Column;
						public component1(): string;
						public hashCode(): number;
						public getName(): string;
						public toString(): string;
					}
					
					export module Column {
							export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.realtime.Column> {
								public static class: java.lang.Class<io.github.jan.supabase.realtime.Column.serializer>;
								public static INSTANCE: io.github.jan.supabase.realtime.Column.serializer;
								public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.realtime.Column): void;
								public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
								public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
								public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
								public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.realtime.Column;
							}
						}
						export class Companion {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.Column.Companion>;
							public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.realtime.Column>;
						}
					
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export class HasOldRecord {
						public static class: java.lang.Class<io.github.jan.supabase.realtime.HasOldRecord>;
						/**
						 * Constructs a new instance of the io.github.jan.supabase.realtime.HasOldRecord interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getOldRecord(): kotlinx.serialization.json.JsonObject;
						});
						public constructor();
						public getOldRecord(): kotlinx.serialization.json.JsonObject;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export class HasRecord {
						public static class: java.lang.Class<io.github.jan.supabase.realtime.HasRecord>;
						/**
						 * Constructs a new instance of the io.github.jan.supabase.realtime.HasRecord interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getRecord(): kotlinx.serialization.json.JsonObject;
						});
						public constructor();
						public getRecord(): kotlinx.serialization.json.JsonObject;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export class PostgresAction {
						public static class: java.lang.Class<io.github.jan.supabase.realtime.PostgresAction>;
						/**
						 * Constructs a new instance of the io.github.jan.supabase.realtime.PostgresAction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getColumns(): java.util.List<io.github.jan.supabase.realtime.Column>;
							getCommitTimestamp(): kotlinx.datetime.Instant;
						});
						public constructor();
						public getCommitTimestamp(): kotlinx.datetime.Instant;
						public getColumns(): java.util.List<io.github.jan.supabase.realtime.Column>;
					}
					export module PostgresAction {
						export class Delete implements io.github.jan.supabase.realtime.PostgresAction, io.github.jan.supabase.realtime.HasOldRecord {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.PostgresAction.Delete>;
							public constructor(oldRecord: kotlinx.serialization.json.JsonObject, columns: java.util.List<io.github.jan.supabase.realtime.Column>, commitTimestamp: kotlinx.datetime.Instant, serializer: io.github.jan.supabase.SupabaseSerializer);
							public component2(): java.util.List<io.github.jan.supabase.realtime.Column>;
							public hashCode(): number;
							public getSerializer(): io.github.jan.supabase.SupabaseSerializer;
							public component3(): kotlinx.datetime.Instant;
							public toString(): string;
							public copy(oldRecord: kotlinx.serialization.json.JsonObject, columns: java.util.List<io.github.jan.supabase.realtime.Column>, commitTimestamp: kotlinx.datetime.Instant, serializer: io.github.jan.supabase.SupabaseSerializer): io.github.jan.supabase.realtime.PostgresAction.Delete;
							public component4(): io.github.jan.supabase.SupabaseSerializer;
							public equals(other: any): boolean;
							public component1(): kotlinx.serialization.json.JsonObject;
							public getCommitTimestamp(): kotlinx.datetime.Instant;
							public getOldRecord(): kotlinx.serialization.json.JsonObject;
							public getColumns(): java.util.List<io.github.jan.supabase.realtime.Column>;
						}
						export class Insert implements io.github.jan.supabase.realtime.PostgresAction, io.github.jan.supabase.realtime.HasRecord {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.PostgresAction.Insert>;
							public component2(): java.util.List<io.github.jan.supabase.realtime.Column>;
							public hashCode(): number;
							public getSerializer(): io.github.jan.supabase.SupabaseSerializer;
							public component3(): kotlinx.datetime.Instant;
							public toString(): string;
							public component4(): io.github.jan.supabase.SupabaseSerializer;
							public getRecord(): kotlinx.serialization.json.JsonObject;
							public equals(other: any): boolean;
							public constructor(record: kotlinx.serialization.json.JsonObject, columns: java.util.List<io.github.jan.supabase.realtime.Column>, commitTimestamp: kotlinx.datetime.Instant, serializer: io.github.jan.supabase.SupabaseSerializer);
							public copy(record: kotlinx.serialization.json.JsonObject, columns: java.util.List<io.github.jan.supabase.realtime.Column>, commitTimestamp: kotlinx.datetime.Instant, serializer: io.github.jan.supabase.SupabaseSerializer): io.github.jan.supabase.realtime.PostgresAction.Insert;
							public component1(): kotlinx.serialization.json.JsonObject;
							public getCommitTimestamp(): kotlinx.datetime.Instant;
							public getColumns(): java.util.List<io.github.jan.supabase.realtime.Column>;
						}
						export class Select implements io.github.jan.supabase.realtime.PostgresAction, io.github.jan.supabase.realtime.HasRecord {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.PostgresAction.Select>;
							public component2(): java.util.List<io.github.jan.supabase.realtime.Column>;
							public hashCode(): number;
							public getSerializer(): io.github.jan.supabase.SupabaseSerializer;
							public component3(): kotlinx.datetime.Instant;
							public toString(): string;
							public copy(record: kotlinx.serialization.json.JsonObject, columns: java.util.List<io.github.jan.supabase.realtime.Column>, commitTimestamp: kotlinx.datetime.Instant, serializer: io.github.jan.supabase.SupabaseSerializer): io.github.jan.supabase.realtime.PostgresAction.Select;
							public component4(): io.github.jan.supabase.SupabaseSerializer;
							public getRecord(): kotlinx.serialization.json.JsonObject;
							public equals(other: any): boolean;
							public constructor(record: kotlinx.serialization.json.JsonObject, columns: java.util.List<io.github.jan.supabase.realtime.Column>, commitTimestamp: kotlinx.datetime.Instant, serializer: io.github.jan.supabase.SupabaseSerializer);
							public component1(): kotlinx.serialization.json.JsonObject;
							public getCommitTimestamp(): kotlinx.datetime.Instant;
							public getColumns(): java.util.List<io.github.jan.supabase.realtime.Column>;
						}
						export class Update implements io.github.jan.supabase.realtime.PostgresAction, io.github.jan.supabase.realtime.HasRecord, io.github.jan.supabase.realtime.HasOldRecord {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.PostgresAction.Update>;
							public hashCode(): number;
							public getSerializer(): io.github.jan.supabase.SupabaseSerializer;
							public component4(): kotlinx.datetime.Instant;
							public toString(): string;
							public component5(): io.github.jan.supabase.SupabaseSerializer;
							public getRecord(): kotlinx.serialization.json.JsonObject;
							public equals(other: any): boolean;
							public component3(): java.util.List<io.github.jan.supabase.realtime.Column>;
							public component1(): kotlinx.serialization.json.JsonObject;
							public getCommitTimestamp(): kotlinx.datetime.Instant;
							public getOldRecord(): kotlinx.serialization.json.JsonObject;
							public component2(): kotlinx.serialization.json.JsonObject;
							public getColumns(): java.util.List<io.github.jan.supabase.realtime.Column>;
							public constructor(record: kotlinx.serialization.json.JsonObject, oldRecord: kotlinx.serialization.json.JsonObject, columns: java.util.List<io.github.jan.supabase.realtime.Column>, commitTimestamp: kotlinx.datetime.Instant, serializer: io.github.jan.supabase.SupabaseSerializer);
							public copy(record: kotlinx.serialization.json.JsonObject, oldRecord: kotlinx.serialization.json.JsonObject, columns: java.util.List<io.github.jan.supabase.realtime.Column>, commitTimestamp: kotlinx.datetime.Instant, serializer: io.github.jan.supabase.SupabaseSerializer): io.github.jan.supabase.realtime.PostgresAction.Update;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export class PostgresChangeFilter {
						public static class: java.lang.Class<io.github.jan.supabase.realtime.PostgresChangeFilter>;
						public setTable(value: string): void;
						public constructor(event: string, schema: string);
						public filter(column: string, operator: io.github.jan.supabase.postgrest.query.filter.FilterOperator, value: any): void;
						public getFilter(): string;
						public buildConfig(): io.github.jan.supabase.realtime.PostgresJoinConfig;
						public getTable(): string;
						public filter(this_: io.github.jan.supabase.postgrest.query.filter.FilterOperation): void;
					}
					export module PostgresChangeFilter {
						export class WhenMappings {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.PostgresChangeFilter.WhenMappings>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export class PostgresJoinConfig {
						public static class: java.lang.Class<io.github.jan.supabase.realtime.PostgresJoinConfig>;
						public equals(other: any): boolean;
						public component3(): string;
						public constructor(schema: string, table: string, filter: string, event: string, id: number);
						public getTable(): string;
						public getEvent(): string;
						public hashCode(): number;
						public component1(): string;
						public toString(): string;
						public getId(): number;
						public component4(): string;
						public getFilter(): string;
						public copy(schema: string, table: string, filter: string, event: string, id: number): io.github.jan.supabase.realtime.PostgresJoinConfig;
						public component2(): string;
						public getSchema(): string;
						public component5(): number;
					}
					
					export module PostgresJoinConfig {
							export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.realtime.PostgresJoinConfig> {
								public static class: java.lang.Class<io.github.jan.supabase.realtime.PostgresJoinConfig.serializer>;
								public static INSTANCE: io.github.jan.supabase.realtime.PostgresJoinConfig.serializer;
								public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.realtime.PostgresJoinConfig;
								public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.realtime.PostgresJoinConfig): void;
								public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
								public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
								public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
							}
						}
						export class Companion {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.PostgresJoinConfig.Companion>;
							public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.realtime.PostgresJoinConfig>;
						}
					
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export class Presence {
						public static class: java.lang.Class<io.github.jan.supabase.realtime.Presence>;
						public equals(other: any): boolean;
						public getPresenceRef(): string;
						public getState(): kotlinx.serialization.json.JsonObject;
						public component1(): string;
						public hashCode(): number;
						public copy(presenceRef: string, state: kotlinx.serialization.json.JsonObject): io.github.jan.supabase.realtime.Presence;
						public component2(): kotlinx.serialization.json.JsonObject;
						public toString(): string;
						public constructor(presenceRef: string, state: kotlinx.serialization.json.JsonObject);
					}
					export module Presence {
						export class Companion extends kotlinx.serialization.KSerializer<io.github.jan.supabase.realtime.Presence> {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.Presence.Companion>;
							public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
							public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.realtime.Presence>;
							public deserialize($this$deserialize_u24lambda_u240: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.realtime.Presence;
							public serialize($this$serialize_u24lambda_u241: kotlinx.serialization.encoding.Encoder, $i$f$buildJsonObject: io.github.jan.supabase.realtime.Presence): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export class PresenceAction {
						public static class: java.lang.Class<io.github.jan.supabase.realtime.PresenceAction>;
						/**
						 * Constructs a new instance of the io.github.jan.supabase.realtime.PresenceAction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getJoins(): java.util.Map<string,io.github.jan.supabase.realtime.Presence>;
							getLeaves(): java.util.Map<string,io.github.jan.supabase.realtime.Presence>;
						});
						public constructor();
						public getJoins(): java.util.Map<string,io.github.jan.supabase.realtime.Presence>;
						public getLeaves(): java.util.Map<string,io.github.jan.supabase.realtime.Presence>;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export class PresenceActionImpl extends io.github.jan.supabase.realtime.PresenceAction {
						public static class: java.lang.Class<io.github.jan.supabase.realtime.PresenceActionImpl>;
						public getJoins(): java.util.Map<string,io.github.jan.supabase.realtime.Presence>;
						public getSerializer(): io.github.jan.supabase.SupabaseSerializer;
						public getLeaves(): java.util.Map<string,io.github.jan.supabase.realtime.Presence>;
						public constructor(serializer: io.github.jan.supabase.SupabaseSerializer, joins: java.util.Map<string,io.github.jan.supabase.realtime.Presence>, leaves: java.util.Map<string,io.github.jan.supabase.realtime.Presence>);
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export class PresenceJoinConfig {
						public static class: java.lang.Class<io.github.jan.supabase.realtime.PresenceJoinConfig>;
						public equals(other: any): boolean;
						public constructor(key: string);
						public component1(): string;
						public hashCode(): number;
						public setKey(value: string): void;
						public copy(key: string): io.github.jan.supabase.realtime.PresenceJoinConfig;
						public getKey(): string;
						public toString(): string;
					}
					
					export module PresenceJoinConfig {
							export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.realtime.PresenceJoinConfig> {
								public static class: java.lang.Class<io.github.jan.supabase.realtime.PresenceJoinConfig.serializer>;
								public static INSTANCE: io.github.jan.supabase.realtime.PresenceJoinConfig.serializer;
								public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.realtime.PresenceJoinConfig;
								public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
								public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
								public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
								public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.realtime.PresenceJoinConfig): void;
							}
						}
						export class Companion {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.PresenceJoinConfig.Companion>;
							public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.realtime.PresenceJoinConfig>;
						}
					
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export class PrimaryKey<Data>  extends java.lang.Object {
						public static class: java.lang.Class<io.github.jan.supabase.realtime.PrimaryKey<any>>;
						public equals(other: any): boolean;
						public copy(columnName: string, producer: any): io.github.jan.supabase.realtime.PrimaryKey<Data>;
						public component2(): any;
						public component1(): string;
						public hashCode(): number;
						public constructor(columnName: string, producer: any);
						public getProducer(): any;
						public toString(): string;
						public getColumnName(): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export class Realtime extends java.lang.Object {
						public static class: java.lang.Class<io.github.jan.supabase.realtime.Realtime>;
						/**
						 * Constructs a new instance of the io.github.jan.supabase.realtime.Realtime interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getStatus(): kotlinx.coroutines.flow.StateFlow<io.github.jan.supabase.realtime.Realtime.Status>;
							getSubscriptions(): java.util.Map<string,io.github.jan.supabase.realtime.RealtimeChannel>;
							connect(param0: any): any;
							disconnect(): void;
							addChannel(param0: io.github.jan.supabase.realtime.Realtime, param1: io.github.jan.supabase.realtime.RealtimeChannel): void;
							removeChannel(param0: io.github.jan.supabase.realtime.RealtimeChannel, param1: any): any;
							removeAllChannels(param0: any): any;
							block(param0: any): any;
							send(param0: io.github.jan.supabase.realtime.RealtimeMessage, param1: any): any;
							"<clinit>"(): void;
						});
						public constructor();
						public static API_VERSION: number = 1;
						public disconnect(): void;
						public removeChannel(param0: io.github.jan.supabase.realtime.RealtimeChannel, param1: any): any;
						public block(param0: any): any;
						public addChannel(param0: io.github.jan.supabase.realtime.Realtime, param1: io.github.jan.supabase.realtime.RealtimeChannel): void;
						public connect(param0: any): any;
						public send(param0: io.github.jan.supabase.realtime.RealtimeMessage, param1: any): any;
						public getSubscriptions(): java.util.Map<string,io.github.jan.supabase.realtime.RealtimeChannel>;
						public getStatus(): kotlinx.coroutines.flow.StateFlow<io.github.jan.supabase.realtime.Realtime.Status>;
						public removeAllChannels(param0: any): any;
					}
					export module Realtime {
						export class Companion extends io.github.jan.supabase.plugins.SupabasePluginProvider<io.github.jan.supabase.realtime.Realtime.Config,io.github.jan.supabase.realtime.Realtime> {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.Realtime.Companion>;
							public static API_VERSION: number = 1;
							public getKey(): string;
							public setLogLevel(level: io.github.jan.supabase.logging.LogLevel): void;
							public createConfig(init: any): io.github.jan.supabase.realtime.Realtime.Config;
							public getLogger(): io.github.jan.supabase.logging.SupabaseLogger;
							public setup(builder: io.github.jan.supabase.SupabaseClientBuilder, config: io.github.jan.supabase.realtime.Realtime.Config): void;
							public create(supabaseClient: io.github.jan.supabase.SupabaseClient, config: io.github.jan.supabase.realtime.Realtime.Config): io.github.jan.supabase.realtime.Realtime;
						}
						export class Config {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.Realtime.Config>;
							public setDisconnectOnSessionLoss(value: boolean): void;
							public "component4-UwyO8pc"(): number;
							public getConnectOnSubscribe(): boolean;
							public component5(): boolean;
							public hashCode(): number;
							public getSerializer(): io.github.jan.supabase.SupabaseSerializer;
							public component6(): boolean;
							public toString(): string;
							public "setHeartbeatInterval-LRDsOJo"(value: number): void;
							public component8(): boolean;
							public getWebsocketConfig(): any;
							public getDisconnectOnSessionLoss(): boolean;
							public setConnectOnSubscribe(value: boolean): void;
							public component1(): any;
							public equals(other: any): boolean;
							public setSecure(value: java.lang.Boolean): void;
							public "component3-UwyO8pc"(): number;
							public "getHeartbeatInterval-UwyO8pc"(): number;
							public setDisconnectOnNoSubscriptions(value: boolean): void;
							public setSerializer(value: io.github.jan.supabase.SupabaseSerializer): void;
							public "setReconnectDelay-LRDsOJo"(value: number): void;
							public "copy-yR0oWTA"(websocketConfig: any, secure: java.lang.Boolean, heartbeatInterval: number, reconnectDelay: number, disconnectOnSessionLoss: boolean, connectOnSubscribe: boolean, websocketFactory: io.github.jan.supabase.realtime.websocket.RealtimeWebsocketFactory, disconnectOnNoSubscriptions: boolean): io.github.jan.supabase.realtime.Realtime.Config;
							public "getReconnectDelay-UwyO8pc"(): number;
							public component2(): java.lang.Boolean;
							public getDisconnectOnNoSubscriptions(): boolean;
							public getWebsocketFactory(): io.github.jan.supabase.realtime.websocket.RealtimeWebsocketFactory;
							public component7(): io.github.jan.supabase.realtime.websocket.RealtimeWebsocketFactory;
							public setWebsocketFactory(value: io.github.jan.supabase.realtime.websocket.RealtimeWebsocketFactory): void;
							public getSecure(): java.lang.Boolean;
							public setWebsocketConfig(value: any): void;
						}
						export class DefaultImpls {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.Realtime.DefaultImpls>;
							public static init($this: io.github.jan.supabase.realtime.Realtime): void;
							public static resolveUrl($this: io.github.jan.supabase.realtime.Realtime, path: string): string;
							public static close($this: io.github.jan.supabase.realtime.Realtime, $completion: any): any;
						}
						export class Status {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.Realtime.Status>;
							public static DISCONNECTED: io.github.jan.supabase.realtime.Realtime.Status;
							public static CONNECTING: io.github.jan.supabase.realtime.Realtime.Status;
							public static CONNECTED: io.github.jan.supabase.realtime.Realtime.Status;
							public static getEntries(): any;
							public static valueOf(value: string): io.github.jan.supabase.realtime.Realtime.Status;
							public static values(): androidNative.Array<io.github.jan.supabase.realtime.Realtime.Status>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export class RealtimeCallback<T>  extends java.lang.Object {
						public static class: java.lang.Class<io.github.jan.supabase.realtime.RealtimeCallback<any>>;
						/**
						 * Constructs a new instance of the io.github.jan.supabase.realtime.RealtimeCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getCallback(): any;
							getId(): number;
						});
						public constructor();
						public getCallback(): any;
						public getId(): number;
					}
					export module RealtimeCallback {
						export class BroadcastCallback extends io.github.jan.supabase.realtime.RealtimeCallback<kotlinx.serialization.json.JsonObject> {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.RealtimeCallback.BroadcastCallback>;
							public getCallback(): any;
							public getEvent(): string;
							public getId(): number;
							public getCallback(): any;
							public constructor(callback: any, event: string, id: number);
						}
						export class PostgresCallback extends io.github.jan.supabase.realtime.RealtimeCallback<io.github.jan.supabase.realtime.PostgresAction> {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.RealtimeCallback.PostgresCallback>;
							public constructor(callback: any, filter: io.github.jan.supabase.realtime.PostgresJoinConfig, id: number);
							public getCallback(): any;
							public getId(): number;
							public getCallback(): any;
							public getFilter(): io.github.jan.supabase.realtime.PostgresJoinConfig;
						}
						export class PresenceCallback extends io.github.jan.supabase.realtime.RealtimeCallback<io.github.jan.supabase.realtime.PresenceAction> {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.RealtimeCallback.PresenceCallback>;
							public getCallback(): any;
							public constructor(callback: any, id: number);
							public getId(): number;
							public getCallback(): any;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export class RealtimeChannel {
						public static class: java.lang.Class<io.github.jan.supabase.realtime.RealtimeChannel>;
						/**
						 * Constructs a new instance of the io.github.jan.supabase.realtime.RealtimeChannel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getStatus(): kotlinx.coroutines.flow.StateFlow<io.github.jan.supabase.realtime.RealtimeChannel.Status>;
							getTopic(): string;
							getSupabaseClient(): io.github.jan.supabase.SupabaseClient;
							getRealtime(): io.github.jan.supabase.realtime.Realtime;
							getCallbackManager(): io.github.jan.supabase.realtime.CallbackManager;
							subscribe(param0: boolean, param1: any): any;
							updateAuth(param0: string, param1: any): any;
							unsubscribe(param0: any): any;
							broadcast(param0: string, param1: kotlinx.serialization.json.JsonObject, param2: any): any;
							track(param0: kotlinx.serialization.json.JsonObject, param1: any): any;
							untrack(param0: any): any;
							postgresChangeFlowInternal(param0: io.github.jan.supabase.realtime.RealtimeChannel, param1: any, param2: string, param3: any): kotlinx.coroutines.flow.Flow;
							broadcastFlowInternal(param0: io.github.jan.supabase.realtime.RealtimeChannel, param1: any, param2: string): kotlinx.coroutines.flow.Flow;
							presenceChangeFlow(): kotlinx.coroutines.flow.Flow<io.github.jan.supabase.realtime.PresenceAction>;
							addPostgresChange(param0: io.github.jan.supabase.realtime.RealtimeChannel, param1: io.github.jan.supabase.realtime.PostgresJoinConfig): void;
							removePostgresChange(param0: io.github.jan.supabase.realtime.RealtimeChannel, param1: io.github.jan.supabase.realtime.PostgresJoinConfig): void;
							updateStatus(param0: io.github.jan.supabase.realtime.RealtimeChannel.Status): void;
							"<clinit>"(): void;
						});
						public constructor();
						public static CHANNEL_EVENT_PRESENCE_DIFF: string = "presence_diff";
						public static CHANNEL_EVENT_ACCESS_TOKEN: string = "access_token";
						public static CHANNEL_EVENT_JOIN: string = "phx_join";
						public static CHANNEL_EVENT_CLOSE: string = "phx_close";
						public static CHANNEL_EVENT_PRESENCE_STATE: string = "presence_state";
						public static CHANNEL_EVENT_LEAVE: string = "phx_leave";
						public static CHANNEL_EVENT_REPLY: string = "phx_reply";
						public static CHANNEL_EVENT_BROADCAST: string = "broadcast";
						public static CHANNEL_EVENT_PRESENCE: string = "presence";
						public static CHANNEL_EVENT_POSTGRES_CHANGES: string = "postgres_changes";
						public static CHANNEL_EVENT_SYSTEM: string = "system";
						public static CHANNEL_EVENT_ERROR: string = "phx_error";
						public broadcastFlowInternal(param0: io.github.jan.supabase.realtime.RealtimeChannel, param1: any, param2: string): kotlinx.coroutines.flow.Flow;
						public getCallbackManager(): io.github.jan.supabase.realtime.CallbackManager;
						public removePostgresChange(param0: io.github.jan.supabase.realtime.RealtimeChannel, param1: io.github.jan.supabase.realtime.PostgresJoinConfig): void;
						public getSupabaseClient(): io.github.jan.supabase.SupabaseClient;
						public getRealtime(): io.github.jan.supabase.realtime.Realtime;
						public updateStatus(param0: io.github.jan.supabase.realtime.RealtimeChannel.Status): void;
						public updateAuth(param0: string, param1: any): any;
						public broadcast(param0: string, param1: kotlinx.serialization.json.JsonObject, param2: any): any;
						public subscribe(param0: boolean, param1: any): any;
						public untrack(param0: any): any;
						public addPostgresChange(param0: io.github.jan.supabase.realtime.RealtimeChannel, param1: io.github.jan.supabase.realtime.PostgresJoinConfig): void;
						public getTopic(): string;
						public track(param0: kotlinx.serialization.json.JsonObject, param1: any): any;
						public presenceChangeFlow(): kotlinx.coroutines.flow.Flow<io.github.jan.supabase.realtime.PresenceAction>;
						public getStatus(): kotlinx.coroutines.flow.StateFlow<io.github.jan.supabase.realtime.RealtimeChannel.Status>;
						public unsubscribe(param0: any): any;
						public postgresChangeFlowInternal(param0: io.github.jan.supabase.realtime.RealtimeChannel, param1: any, param2: string, param3: any): kotlinx.coroutines.flow.Flow;
					}
					export module RealtimeChannel {
						export class Companion {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.RealtimeChannel.Companion>;
							public static CHANNEL_EVENT_JOIN: string = "phx_join";
							public static CHANNEL_EVENT_LEAVE: string = "phx_leave";
							public static CHANNEL_EVENT_CLOSE: string = "phx_close";
							public static CHANNEL_EVENT_ERROR: string = "phx_error";
							public static CHANNEL_EVENT_REPLY: string = "phx_reply";
							public static CHANNEL_EVENT_SYSTEM: string = "system";
							public static CHANNEL_EVENT_BROADCAST: string = "broadcast";
							public static CHANNEL_EVENT_ACCESS_TOKEN: string = "access_token";
							public static CHANNEL_EVENT_PRESENCE: string = "presence";
							public static CHANNEL_EVENT_PRESENCE_DIFF: string = "presence_diff";
							public static CHANNEL_EVENT_PRESENCE_STATE: string = "presence_state";
							public static CHANNEL_EVENT_POSTGRES_CHANGES: string = "postgres_changes";
						}
						export class DefaultImpls {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.RealtimeChannel.DefaultImpls>;
						}
						export class Status {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.RealtimeChannel.Status>;
							public static UNSUBSCRIBED: io.github.jan.supabase.realtime.RealtimeChannel.Status;
							public static SUBSCRIBING: io.github.jan.supabase.realtime.RealtimeChannel.Status;
							public static SUBSCRIBED: io.github.jan.supabase.realtime.RealtimeChannel.Status;
							public static UNSUBSCRIBING: io.github.jan.supabase.realtime.RealtimeChannel.Status;
							public static values(): androidNative.Array<io.github.jan.supabase.realtime.RealtimeChannel.Status>;
							public static getEntries(): any;
							public static valueOf(value: string): io.github.jan.supabase.realtime.RealtimeChannel.Status;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export class RealtimeChannelBuilder {
						public static class: java.lang.Class<io.github.jan.supabase.realtime.RealtimeChannelBuilder>;
						public constructor(topic: string, realtimeImpl: io.github.jan.supabase.realtime.RealtimeImpl);
						public build(): io.github.jan.supabase.realtime.RealtimeChannel;
						public isPrivate(): boolean;
						public presence(block: any): void;
						public setPrivate(value: boolean): void;
						public broadcast(block: any): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export class RealtimeChannelImpl extends io.github.jan.supabase.realtime.RealtimeChannel {
						public static class: java.lang.Class<io.github.jan.supabase.realtime.RealtimeChannelImpl>;
						public getCallbackManager(): io.github.jan.supabase.realtime.CallbackManager;
						public track($this$track_u24lambda_u2413: kotlinx.serialization.json.JsonObject, $i$f$buildJsonObject: any): any;
						public getSupabaseClient(): io.github.jan.supabase.SupabaseClient;
						public removePostgresChange($this$removePostgresChange: io.github.jan.supabase.realtime.RealtimeChannel, data: io.github.jan.supabase.realtime.PostgresJoinConfig): void;
						public getRealtime(): io.github.jan.supabase.realtime.Realtime;
						public updateStatus(param0: io.github.jan.supabase.realtime.RealtimeChannel.Status): void;
						public broadcast(param0: string, param1: kotlinx.serialization.json.JsonObject, param2: any): any;
						public subscribe(param0: boolean, param1: any): any;
						public untrack(param0: any): any;
						public addPostgresChange(param0: io.github.jan.supabase.realtime.RealtimeChannel, param1: io.github.jan.supabase.realtime.PostgresJoinConfig): void;
						public broadcast(this_: string, this_: kotlinx.serialization.json.JsonObject, this_: any): any;
						public track(param0: kotlinx.serialization.json.JsonObject, param1: any): any;
						public updateAuth($i$f$log: string, this_$iv$iv: any): any;
						public getStatus(): kotlinx.coroutines.flow.StateFlow<io.github.jan.supabase.realtime.RealtimeChannel.Status>;
						public onMessage($i$f$log: io.github.jan.supabase.realtime.RealtimeMessage, this_$iv$iv: any): any;
						public constructor(realtimeImpl: io.github.jan.supabase.realtime.RealtimeImpl, topic: string, broadcastJoinConfig: io.github.jan.supabase.realtime.BroadcastJoinConfig, presenceJoinConfig: io.github.jan.supabase.realtime.PresenceJoinConfig, isPrivate: boolean);
						public getCallbackManager(): io.github.jan.supabase.realtime.CallbackManagerImpl;
						public broadcastFlowInternal(param0: io.github.jan.supabase.realtime.RealtimeChannel, param1: any, param2: string): kotlinx.coroutines.flow.Flow;
						public removePostgresChange(param0: io.github.jan.supabase.realtime.RealtimeChannel, param1: io.github.jan.supabase.realtime.PostgresJoinConfig): void;
						public updateAuth(param0: string, param1: any): any;
						public updateStatus(status: io.github.jan.supabase.realtime.RealtimeChannel.Status): void;
						public broadcastFlowInternal($this$broadcastFlowInternal: io.github.jan.supabase.realtime.RealtimeChannel, type: any, event: string): kotlinx.coroutines.flow.Flow;
						public subscribe(this_: boolean, this_: any): any;
						public addPostgresChange($this$addPostgresChange: io.github.jan.supabase.realtime.RealtimeChannel, data: io.github.jan.supabase.realtime.PostgresJoinConfig): void;
						public postgresChangeFlowInternal(postgrestBuilder: io.github.jan.supabase.realtime.RealtimeChannel, config: any, this_: string, $this$postgresChangeFlowInternal: any): kotlinx.coroutines.flow.Flow;
						public untrack($this$untrack_u24lambda_u2414: any): any;
						public getTopic(): string;
						public presenceChangeFlow(): kotlinx.coroutines.flow.Flow<io.github.jan.supabase.realtime.PresenceAction>;
						public unsubscribe(param0: any): any;
						public unsubscribe($i$f$log: any): any;
						public postgresChangeFlowInternal(param0: io.github.jan.supabase.realtime.RealtimeChannel, param1: any, param2: string, param3: any): kotlinx.coroutines.flow.Flow;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export class RealtimeImpl extends io.github.jan.supabase.realtime.Realtime {
						public static class: java.lang.Class<io.github.jan.supabase.realtime.RealtimeImpl>;
						public block(param0: any): any;
						public getSupabaseClient(): io.github.jan.supabase.SupabaseClient;
						public connect(param0: any): any;
						public getSubscriptions(): java.util.Map<string,io.github.jan.supabase.realtime.RealtimeChannel>;
						public parseErrorResponse(response: io.ktor.client.statement.HttpResponse, $completion: any): any;
						public getRef(): number;
						public addChannel($this$addChannel: io.github.jan.supabase.realtime.Realtime, channel: io.github.jan.supabase.realtime.RealtimeChannel): void;
						public setHeartbeatJob(value: kotlinx.coroutines.Job): void;
						public getApiVersion(): number;
						public setMessageJob(value: kotlinx.coroutines.Job): void;
						public block($completion: any): any;
						public disconnect(): void;
						public removeChannel(param0: io.github.jan.supabase.realtime.RealtimeChannel, param1: any): any;
						public init(): void;
						public send(param0: io.github.jan.supabase.realtime.RealtimeMessage, param1: any): any;
						public getPluginKey(): string;
						public resolveUrl(path: string): string;
						public setSerializer(value: io.github.jan.supabase.SupabaseSerializer): void;
						public connect(this_: boolean, this_: any): any;
						public getSerializer(): io.github.jan.supabase.SupabaseSerializer;
						public getConfig(): io.github.jan.supabase.realtime.Realtime.Config;
						public broadcastUrl(): string;
						public nextIncrementId(): number;
						public removeChannel(this_: io.github.jan.supabase.realtime.RealtimeChannel, this_: any): any;
						public getHeartbeatJob(): kotlinx.coroutines.Job;
						public connect($completion: any): any;
						public removeAllChannels(this_: any): any;
						public close($completion: any): any;
						public addChannel(param0: io.github.jan.supabase.realtime.Realtime, param1: io.github.jan.supabase.realtime.RealtimeChannel): void;
						public getMessageJob(): kotlinx.coroutines.Job;
						public setRef(value: number): void;
						public send(message: io.github.jan.supabase.realtime.RealtimeMessage, $completion: any): any;
						public setHeartbeatRef(value: number): void;
						public constructor(supabaseClient: io.github.jan.supabase.SupabaseClient, config: io.github.jan.supabase.realtime.Realtime.Config);
						public getStatus(): kotlinx.coroutines.flow.StateFlow<io.github.jan.supabase.realtime.Realtime.Status>;
						public getHeartbeatRef(): number;
						public removeAllChannels(param0: any): any;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export class RealtimeJoinConfig {
						public static class: java.lang.Class<io.github.jan.supabase.realtime.RealtimeJoinConfig>;
						public component4(): boolean;
						public equals(other: any): boolean;
						public isPrivate(): boolean;
						public hashCode(): number;
						public component3(): java.util.List<io.github.jan.supabase.realtime.PostgresJoinConfig>;
						public getPresence(): io.github.jan.supabase.realtime.PresenceJoinConfig;
						public toString(): string;
						public constructor(broadcast: io.github.jan.supabase.realtime.BroadcastJoinConfig, presence: io.github.jan.supabase.realtime.PresenceJoinConfig, postgresChanges: java.util.List<io.github.jan.supabase.realtime.PostgresJoinConfig>, isPrivate: boolean);
						public getPostgresChanges(): java.util.List<io.github.jan.supabase.realtime.PostgresJoinConfig>;
						public component2(): io.github.jan.supabase.realtime.PresenceJoinConfig;
						public getBroadcast(): io.github.jan.supabase.realtime.BroadcastJoinConfig;
						public component1(): io.github.jan.supabase.realtime.BroadcastJoinConfig;
						public setPrivate(value: boolean): void;
						public copy(broadcast: io.github.jan.supabase.realtime.BroadcastJoinConfig, presence: io.github.jan.supabase.realtime.PresenceJoinConfig, postgresChanges: java.util.List<io.github.jan.supabase.realtime.PostgresJoinConfig>, isPrivate: boolean): io.github.jan.supabase.realtime.RealtimeJoinConfig;
					}
						
					export module RealtimeJoinConfig {
							export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.realtime.RealtimeJoinConfig> {
								public static class: java.lang.Class<io.github.jan.supabase.realtime.RealtimeJoinConfig.serializer>;
								public static INSTANCE: io.github.jan.supabase.realtime.RealtimeJoinConfig.serializer;
								public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.realtime.RealtimeJoinConfig): void;
								public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
								public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
								public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
								public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.realtime.RealtimeJoinConfig;
							}
						}
						export class Companion {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.RealtimeJoinConfig.Companion>;
							public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.realtime.RealtimeJoinConfig>;
						}
					
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export class RealtimeJoinPayload {
						public static class: java.lang.Class<io.github.jan.supabase.realtime.RealtimeJoinPayload>;
						public copy(config: io.github.jan.supabase.realtime.RealtimeJoinConfig): io.github.jan.supabase.realtime.RealtimeJoinPayload;
						public equals(other: any): boolean;
						public hashCode(): number;
						public getConfig(): io.github.jan.supabase.realtime.RealtimeJoinConfig;
						public component1(): io.github.jan.supabase.realtime.RealtimeJoinConfig;
						public constructor(config: io.github.jan.supabase.realtime.RealtimeJoinConfig);
						public toString(): string;
					}
					
					export module RealtimeJoinPayload {
							export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.realtime.RealtimeJoinPayload> {
								public static class: java.lang.Class<io.github.jan.supabase.realtime.RealtimeJoinPayload.serializer>;
								public static INSTANCE: io.github.jan.supabase.realtime.RealtimeJoinPayload.serializer;
								public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
								public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
								public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
								public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.realtime.RealtimeJoinPayload): void;
								public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.realtime.RealtimeJoinPayload;
							}
						}
						export class Companion {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.RealtimeJoinPayload.Companion>;
							public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.realtime.RealtimeJoinPayload>;
						}
					
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export class RealtimeMessage {
						public static class: java.lang.Class<io.github.jan.supabase.realtime.RealtimeMessage>;
						public getRef(): string;
						public equals(other: any): boolean;
						public getPayload(): kotlinx.serialization.json.JsonObject;
						public getEvent(): string;
						public component1(): string;
						public hashCode(): number;
						public constructor(topic: string, event: string, payload: kotlinx.serialization.json.JsonObject, ref: string);
						public toString(): string;
						public component4(): string;
						public getTopic(): string;
						public component2(): string;
						public copy(topic: string, event: string, payload: kotlinx.serialization.json.JsonObject, ref: string): io.github.jan.supabase.realtime.RealtimeMessage;
						public component3(): kotlinx.serialization.json.JsonObject;
					}
					
					export module RealtimeMessage {
							export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.realtime.RealtimeMessage> {
								public static class: java.lang.Class<io.github.jan.supabase.realtime.RealtimeMessage.serializer>;
								public static INSTANCE: io.github.jan.supabase.realtime.RealtimeMessage.serializer;
								public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
								public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.realtime.RealtimeMessage): void;
								public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
								public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
								public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.realtime.RealtimeMessage;
							}
						}
						export class Companion {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.RealtimeMessage.Companion>;
							public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.realtime.RealtimeMessage>;
						}
					
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export module annotations {
						export class ChannelDsl {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.annotations.ChannelDsl>;
							/**
							 * Constructs a new instance of the io.github.jan.supabase.realtime.annotations.ChannelDsl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export module data {
						export class BroadcastApiBody {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.data.BroadcastApiBody>;
							public component1(): java.util.List<io.github.jan.supabase.realtime.data.BroadcastApiMessage>;
							public hashCode(): number;
							public equals(other: any): boolean;
							public getMessages(): java.util.List<io.github.jan.supabase.realtime.data.BroadcastApiMessage>;
							public constructor(messages: java.util.List<io.github.jan.supabase.realtime.data.BroadcastApiMessage>);
							public toString(): string;
							public copy(messages: java.util.List<io.github.jan.supabase.realtime.data.BroadcastApiMessage>): io.github.jan.supabase.realtime.data.BroadcastApiBody;
						}
							
						export module BroadcastApiBody {
								export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.realtime.data.BroadcastApiBody> {
									public static class: java.lang.Class<io.github.jan.supabase.realtime.data.BroadcastApiBody.serializer>;
									public static INSTANCE: io.github.jan.supabase.realtime.data.BroadcastApiBody.serializer;
									public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
									public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.realtime.data.BroadcastApiBody): void;
									public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
									public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
									public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.realtime.data.BroadcastApiBody;
								}
							}
							export class Companion {
								public static class: java.lang.Class<io.github.jan.supabase.realtime.data.BroadcastApiBody.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.realtime.data.BroadcastApiBody>;
							}
						
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export module data {
						export class BroadcastApiMessage {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.data.BroadcastApiMessage>;
							public getTopic(): string;
							public component2(): string;
							public hashCode(): number;
							public toString(): string;
							public component1(): string;
							public getEvent(): string;
							public isPrivate(): boolean;
							public getPayload(): kotlinx.serialization.json.JsonObject;
							public component3(): kotlinx.serialization.json.JsonObject;
							public copy(topic: string, event: string, payload: kotlinx.serialization.json.JsonObject, isPrivate: boolean): io.github.jan.supabase.realtime.data.BroadcastApiMessage;
							public equals(other: any): boolean;
							public constructor(topic: string, event: string, payload: kotlinx.serialization.json.JsonObject, isPrivate: boolean);
							public component4(): boolean;
						}
							
						export module BroadcastApiMessage {
								export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.realtime.data.BroadcastApiMessage> {
									public static class: java.lang.Class<io.github.jan.supabase.realtime.data.BroadcastApiMessage.serializer>;
									public static INSTANCE: io.github.jan.supabase.realtime.data.BroadcastApiMessage.serializer;
									public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
									public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.realtime.data.BroadcastApiMessage): void;
									public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.realtime.data.BroadcastApiMessage;
									public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
									public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
								}
							}
							export class Companion {
								public static class: java.lang.Class<io.github.jan.supabase.realtime.data.BroadcastApiMessage.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.realtime.data.BroadcastApiMessage>;
							}
						
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export module data {
						export class PostgresActionData {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.data.PostgresActionData>;
							public hashCode(): number;
							public component4(): kotlinx.datetime.Instant;
							public toString(): string;
							public getRecord(): kotlinx.serialization.json.JsonObject;
							public equals(other: any): boolean;
							public component3(): java.util.List<io.github.jan.supabase.realtime.Column>;
							public component1(): kotlinx.serialization.json.JsonObject;
							public copy(record: kotlinx.serialization.json.JsonObject, oldRecord: kotlinx.serialization.json.JsonObject, columns: java.util.List<io.github.jan.supabase.realtime.Column>, commitTimestamp: kotlinx.datetime.Instant): io.github.jan.supabase.realtime.data.PostgresActionData;
							public getCommitTimestamp(): kotlinx.datetime.Instant;
							public constructor(record: kotlinx.serialization.json.JsonObject, oldRecord: kotlinx.serialization.json.JsonObject, columns: java.util.List<io.github.jan.supabase.realtime.Column>, commitTimestamp: kotlinx.datetime.Instant);
							public getOldRecord(): kotlinx.serialization.json.JsonObject;
							public component2(): kotlinx.serialization.json.JsonObject;
							public getColumns(): java.util.List<io.github.jan.supabase.realtime.Column>;
						}
						
						export module PostgresActionData {
								export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.realtime.data.PostgresActionData> {
									public static class: java.lang.Class<io.github.jan.supabase.realtime.data.PostgresActionData.serializer>;
									public static INSTANCE: io.github.jan.supabase.realtime.data.PostgresActionData.serializer;
									public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
									public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.realtime.data.PostgresActionData;
									public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.realtime.data.PostgresActionData): void;
									public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
									public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
								}
							}
							export class Companion {
								public static class: java.lang.Class<io.github.jan.supabase.realtime.data.PostgresActionData.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.realtime.data.PostgresActionData>;
							}
						
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export module event {
						export class RBroadcastEvent extends io.github.jan.supabase.realtime.event.RealtimeEvent {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.event.RBroadcastEvent>;
							public static INSTANCE: io.github.jan.supabase.realtime.event.RBroadcastEvent;
							public hashCode(): number;
							public equals(other: any): boolean;
							public appliesTo(param0: io.github.jan.supabase.realtime.RealtimeMessage): boolean;
							public handle(param0: io.github.jan.supabase.realtime.RealtimeChannel, param1: io.github.jan.supabase.realtime.RealtimeMessage, param2: any): any;
							public toString(): string;
							public handle(this_: io.github.jan.supabase.realtime.RealtimeChannel, channel: io.github.jan.supabase.realtime.RealtimeMessage, message: any): any;
							public appliesTo(message: io.github.jan.supabase.realtime.RealtimeMessage): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export module event {
						export class RCloseEvent extends io.github.jan.supabase.realtime.event.RealtimeEvent {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.event.RCloseEvent>;
							public static INSTANCE: io.github.jan.supabase.realtime.event.RCloseEvent;
							public hashCode(): number;
							public equals(other: any): boolean;
							public appliesTo(param0: io.github.jan.supabase.realtime.RealtimeMessage): boolean;
							public handle(param0: io.github.jan.supabase.realtime.RealtimeChannel, param1: io.github.jan.supabase.realtime.RealtimeMessage, param2: any): any;
							public handle(message: io.github.jan.supabase.realtime.RealtimeChannel, message: io.github.jan.supabase.realtime.RealtimeMessage, $this$d_u24default$iv: any): any;
							public toString(): string;
							public appliesTo(message: io.github.jan.supabase.realtime.RealtimeMessage): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export module event {
						export class RErrorEvent extends io.github.jan.supabase.realtime.event.RealtimeEvent {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.event.RErrorEvent>;
							public static INSTANCE: io.github.jan.supabase.realtime.event.RErrorEvent;
							public hashCode(): number;
							public handle($i$f$log: io.github.jan.supabase.realtime.RealtimeChannel, this_$iv$iv: io.github.jan.supabase.realtime.RealtimeMessage, level$iv$iv: any): any;
							public equals(other: any): boolean;
							public appliesTo(param0: io.github.jan.supabase.realtime.RealtimeMessage): boolean;
							public handle(param0: io.github.jan.supabase.realtime.RealtimeChannel, param1: io.github.jan.supabase.realtime.RealtimeMessage, param2: any): any;
							public toString(): string;
							public appliesTo(message: io.github.jan.supabase.realtime.RealtimeMessage): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export module event {
						export class RPostgresChangesEvent extends io.github.jan.supabase.realtime.event.RealtimeEvent {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.event.RPostgresChangesEvent>;
							public static INSTANCE: io.github.jan.supabase.realtime.event.RPostgresChangesEvent;
							//public handle(it: io.github.jan.supabase.realtime.RealtimeChannel, $i$a$-let-CollectionsKt___CollectionsKt$mapNotNullTo$1$1$iv$iv: io.github.jan.supabase.realtime.RealtimeMessage, it$iv$iv: any): any;
							public hashCode(): number;
							public equals(other: any): boolean;
							public appliesTo(param0: io.github.jan.supabase.realtime.RealtimeMessage): boolean;
							public handle(param0: io.github.jan.supabase.realtime.RealtimeChannel, param1: io.github.jan.supabase.realtime.RealtimeMessage, param2: any): any;
							public toString(): string;
							public appliesTo(message: io.github.jan.supabase.realtime.RealtimeMessage): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export module event {
						export class RPostgresServerChangesEvent extends io.github.jan.supabase.realtime.event.RealtimeEvent {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.event.RPostgresServerChangesEvent>;
							public static INSTANCE: io.github.jan.supabase.realtime.event.RPostgresServerChangesEvent;
							public hashCode(): number;
							public equals(other: any): boolean;
							public appliesTo(param0: io.github.jan.supabase.realtime.RealtimeMessage): boolean;
							public handle(param0: io.github.jan.supabase.realtime.RealtimeChannel, param1: io.github.jan.supabase.realtime.RealtimeMessage, param2: any): any;
							//public handle($this$decodeFromJsonElement$iv: io.github.jan.supabase.realtime.RealtimeChannel, $i$a$-let-RPostgresServerChangesEvent$handle$serverPostgresChanges$1: io.github.jan.supabase.realtime.RealtimeMessage, it: any): any;
							public toString(): string;
							public appliesTo(message: io.github.jan.supabase.realtime.RealtimeMessage): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export module event {
						export class RPresenceDiffEvent extends io.github.jan.supabase.realtime.event.RealtimeEvent {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.event.RPresenceDiffEvent>;
							public static INSTANCE: io.github.jan.supabase.realtime.event.RPresenceDiffEvent;
							public handle($this$decodeFromJsonElement$iv$iv: io.github.jan.supabase.realtime.RealtimeChannel, $i$f$decodeIfNotEmptyOrDefault: io.github.jan.supabase.realtime.RealtimeMessage, $this$decodeIfNotEmptyOrDefault$iv: any): any;
							public hashCode(): number;
							public equals(other: any): boolean;
							public appliesTo(param0: io.github.jan.supabase.realtime.RealtimeMessage): boolean;
							public handle(param0: io.github.jan.supabase.realtime.RealtimeChannel, param1: io.github.jan.supabase.realtime.RealtimeMessage, param2: any): any;
							public toString(): string;
							public appliesTo(message: io.github.jan.supabase.realtime.RealtimeMessage): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export module event {
						export class RPresenceStateEvent extends io.github.jan.supabase.realtime.event.RealtimeEvent {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.event.RPresenceStateEvent>;
							public static INSTANCE: io.github.jan.supabase.realtime.event.RPresenceStateEvent;
							public handle($this$decodeFromJsonElement$iv$iv: io.github.jan.supabase.realtime.RealtimeChannel, $i$f$decodeIfNotEmptyOrDefault: io.github.jan.supabase.realtime.RealtimeMessage, $this$decodeIfNotEmptyOrDefault$iv: any): any;
							public hashCode(): number;
							public equals(other: any): boolean;
							public appliesTo(param0: io.github.jan.supabase.realtime.RealtimeMessage): boolean;
							public handle(param0: io.github.jan.supabase.realtime.RealtimeChannel, param1: io.github.jan.supabase.realtime.RealtimeMessage, param2: any): any;
							public toString(): string;
							public appliesTo(message: io.github.jan.supabase.realtime.RealtimeMessage): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export module event {
						export class RSystemEvent extends io.github.jan.supabase.realtime.event.RealtimeEvent {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.event.RSystemEvent>;
							public static INSTANCE: io.github.jan.supabase.realtime.event.RSystemEvent;
							public hashCode(): number;
							public handle($i$f$log: io.github.jan.supabase.realtime.RealtimeChannel, this_$iv$iv: io.github.jan.supabase.realtime.RealtimeMessage, level$iv$iv: any): any;
							public equals(other: any): boolean;
							public appliesTo(param0: io.github.jan.supabase.realtime.RealtimeMessage): boolean;
							public handle(param0: io.github.jan.supabase.realtime.RealtimeChannel, param1: io.github.jan.supabase.realtime.RealtimeMessage, param2: any): any;
							public toString(): string;
							public appliesTo(message: io.github.jan.supabase.realtime.RealtimeMessage): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export module event {
						export class RSystemReplyEvent extends io.github.jan.supabase.realtime.event.RealtimeEvent {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.event.RSystemReplyEvent>;
							public static INSTANCE: io.github.jan.supabase.realtime.event.RSystemReplyEvent;
							public hashCode(): number;
							public handle($i$f$log: io.github.jan.supabase.realtime.RealtimeChannel, this_$iv$iv: io.github.jan.supabase.realtime.RealtimeMessage, level$iv$iv: any): any;
							public equals(other: any): boolean;
							public appliesTo(param0: io.github.jan.supabase.realtime.RealtimeMessage): boolean;
							public handle(param0: io.github.jan.supabase.realtime.RealtimeChannel, param1: io.github.jan.supabase.realtime.RealtimeMessage, param2: any): any;
							public toString(): string;
							public appliesTo(message: io.github.jan.supabase.realtime.RealtimeMessage): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export module event {
						export class RTokenExpiredEvent extends io.github.jan.supabase.realtime.event.RealtimeEvent {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.event.RTokenExpiredEvent>;
							public static INSTANCE: io.github.jan.supabase.realtime.event.RTokenExpiredEvent;
							public hashCode(): number;
							public handle($i$f$log: io.github.jan.supabase.realtime.RealtimeChannel, this_$iv$iv: io.github.jan.supabase.realtime.RealtimeMessage, level$iv$iv: any): any;
							public equals(other: any): boolean;
							public appliesTo(param0: io.github.jan.supabase.realtime.RealtimeMessage): boolean;
							public handle(param0: io.github.jan.supabase.realtime.RealtimeChannel, param1: io.github.jan.supabase.realtime.RealtimeMessage, param2: any): any;
							public toString(): string;
							public appliesTo(message: io.github.jan.supabase.realtime.RealtimeMessage): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export module event {
						export class RealtimeEvent {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.event.RealtimeEvent>;
							/**
							 * Constructs a new instance of the io.github.jan.supabase.realtime.event.RealtimeEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								handle(param0: io.github.jan.supabase.realtime.RealtimeChannel, param1: io.github.jan.supabase.realtime.RealtimeMessage, param2: any): any;
								appliesTo(param0: io.github.jan.supabase.realtime.RealtimeMessage): boolean;
								"<clinit>"(): void;
							});
							public constructor();
							public appliesTo(param0: io.github.jan.supabase.realtime.RealtimeMessage): boolean;
							public handle(param0: io.github.jan.supabase.realtime.RealtimeChannel, param1: io.github.jan.supabase.realtime.RealtimeMessage, param2: any): any;
						}
						export module RealtimeEvent {
							export class Companion {
								public static class: java.lang.Class<io.github.jan.supabase.realtime.event.RealtimeEvent.Companion>;
								public resolveEvent(it: io.github.jan.supabase.realtime.RealtimeMessage): io.github.jan.supabase.realtime.event.RealtimeEvent;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export module websocket {
						export class KtorRealtimeWebsocket extends io.github.jan.supabase.realtime.websocket.RealtimeWebsocket {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.websocket.KtorRealtimeWebsocket>;
							public constructor(ws: io.ktor.client.plugins.websocket.DefaultClientWebSocketSession);
							public receive($i$f$typeOfOrNull: any): any;
							public blockUntilDisconnect($completion: any): any;
							public disconnect(): void;
							public blockUntilDisconnect(param0: any): any;
							public send($i$f$typeOfOrNull: io.github.jan.supabase.realtime.RealtimeMessage, $i$f$typeInfo: any): any;
							public receive(param0: any): any;
							public getHasIncomingMessages(): boolean;
							public send(param0: io.github.jan.supabase.realtime.RealtimeMessage, param1: any): any;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export module websocket {
						export class KtorRealtimeWebsocketFactory extends io.github.jan.supabase.realtime.websocket.RealtimeWebsocketFactory {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.websocket.KtorRealtimeWebsocketFactory>;
							public create(param0: string, param1: any): any;
							public constructor(httpClient: io.ktor.client.HttpClient);
							public create(url: string, ws: any): any;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export module websocket {
						export class RealtimeWebsocket {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.websocket.RealtimeWebsocket>;
							/**
							 * Constructs a new instance of the io.github.jan.supabase.realtime.websocket.RealtimeWebsocket interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getHasIncomingMessages(): boolean;
								receive(param0: any): any;
								send(param0: io.github.jan.supabase.realtime.RealtimeMessage, param1: any): any;
								blockUntilDisconnect(param0: any): any;
								disconnect(): void;
							});
							public constructor();
							public disconnect(): void;
							public blockUntilDisconnect(param0: any): any;
							public receive(param0: any): any;
							public getHasIncomingMessages(): boolean;
							public send(param0: io.github.jan.supabase.realtime.RealtimeMessage, param1: any): any;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module realtime {
					export module websocket {
						export class RealtimeWebsocketFactory {
							public static class: java.lang.Class<io.github.jan.supabase.realtime.websocket.RealtimeWebsocketFactory>;
							/**
							 * Constructs a new instance of the io.github.jan.supabase.realtime.websocket.RealtimeWebsocketFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								create(param0: string, param1: any): any;
							});
							public constructor();
							public create(param0: string, param1: any): any;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export class Bucket {
						public static class: java.lang.Class<io.github.jan.supabase.storage.Bucket>;
						public getAllowedMimeTypes(): java.util.List<string>;
						public component3(): string;
						public equals(other: any): boolean;
						public copy(createdAt: kotlinx.datetime.Instant, id: string, name: string, owner: string, updatedAt: kotlinx.datetime.Instant, public_: boolean, allowedMimeTypes: java.util.List<string>, fileSizeLimit: java.lang.Long): io.github.jan.supabase.storage.Bucket;
						public component6(): boolean;
						public getOwner(): string;
						public component7(): java.util.List<string>;
						public hashCode(): number;
						public constructor(createdAt: kotlinx.datetime.Instant, id: string, name: string, owner: string, updatedAt: kotlinx.datetime.Instant, public_: boolean, allowedMimeTypes: java.util.List<string>, fileSizeLimit: java.lang.Long);
						public component5(): kotlinx.datetime.Instant;
						public getCreatedAt(): kotlinx.datetime.Instant;
						public getName(): string;
						public toString(): string;
						public component4(): string;
						public component1(): kotlinx.datetime.Instant;
						public component2(): string;
						public getPublic(): boolean;
						public getFileSizeLimit(): java.lang.Long;
						public getId(): string;
						public getUpdatedAt(): kotlinx.datetime.Instant;
						public component8(): java.lang.Long;
					}

					export module Bucket {
							export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.storage.Bucket> {
								public static class: java.lang.Class<io.github.jan.supabase.storage.Bucket.serializer>;
								public static INSTANCE: io.github.jan.supabase.storage.Bucket.serializer;
								public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.storage.Bucket): void;
								public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.storage.Bucket;
								public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
								public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
								public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
							}
						}
						export class Companion {
							public static class: java.lang.Class<io.github.jan.supabase.storage.Bucket.Companion>;
							public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.storage.Bucket>;
						}
					
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export class BucketApi {
						public static class: java.lang.Class<io.github.jan.supabase.storage.BucketApi>;
						/**
						 * Constructs a new instance of the io.github.jan.supabase.storage.BucketApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getBucketId(): string;
							getSupabaseClient(): io.github.jan.supabase.SupabaseClient;
							getResumable(): io.github.jan.supabase.storage.resumable.ResumableClient;
							upload(param0: string, param1: androidNative.Array<number>, param2: any, param3: any): any;
							upload(param0: string, param1: io.github.jan.supabase.storage.UploadData, param2: any, param3: any): any;
							uploadToSignedUrl(param0: string, param1: string, param2: androidNative.Array<number>, param3: any, param4: any): any;
							uploadToSignedUrl(param0: string, param1: string, param2: io.github.jan.supabase.storage.UploadData, param3: any, param4: any): any;
							update(param0: string, param1: androidNative.Array<number>, param2: any, param3: any): any;
							update(param0: string, param1: io.github.jan.supabase.storage.UploadData, param2: any, param3: any): any;
							delete(param0: java.util.Collection<string>, param1: any): any;
							delete(param0: androidNative.Array<string>, param1: any): any;
							move(param0: string, param1: string, param2: string, param3: any): any;
							copy(param0: string, param1: string, param2: string, param3: any): any;
							createSignedUploadUrl(param0: string, param1: boolean, param2: any): any;
							"createSignedUrl-dWUq8MI"(param0: string, param1: number, param2: any, param3: any): any;
							"createSignedUrls-KLykuaI"(param0: number, param1: java.util.Collection<string>, param2: any): any;
							"createSignedUrls-KLykuaI"(param0: number, param1: androidNative.Array<string>, param2: any): any;
							downloadAuthenticated(param0: string, param1: any, param2: any): any;
							downloadAuthenticated(param0: string, param1: io.ktor.utils.io.ByteWriteChannel, param2: any, param3: any): any;
							downloadPublic(param0: string, param1: any, param2: any): any;
							downloadPublic(param0: string, param1: io.ktor.utils.io.ByteWriteChannel, param2: any, param3: any): any;
							list(param0: string, param1: any, param2: any): any;
							changePublicStatusTo(param0: boolean, param1: any): any;
							publicUrl(param0: string): string;
							authenticatedUrl(param0: string): string;
							authenticatedRenderUrl(param0: string, param1: any): string;
							publicRenderUrl(param0: string, param1: any): string;
							"<clinit>"(): void;
						});
						public constructor();
						public static UPSERT_HEADER: string = "x-upsert";
						public uploadToSignedUrl(param0: string, param1: string, param2: io.github.jan.supabase.storage.UploadData, param3: any, param4: any): any;
						public "createSignedUrl-dWUq8MI"(param0: string, param1: number, param2: any, param3: any): any;
						public getSupabaseClient(): io.github.jan.supabase.SupabaseClient;
						public update(param0: string, param1: io.github.jan.supabase.storage.UploadData, param2: any, param3: any): any;
						public downloadAuthenticated(param0: string, param1: any, param2: any): any;
						public copy(param0: string, param1: string, param2: string, param3: any): any;
						public getResumable(): io.github.jan.supabase.storage.resumable.ResumableClient;
						public publicRenderUrl(param0: string, param1: any): string;
						public delete(param0: java.util.Collection<string>, param1: any): any;
						public "createSignedUrls-KLykuaI"(param0: number, param1: androidNative.Array<string>, param2: any): any;
						public uploadToSignedUrl(param0: string, param1: string, param2: androidNative.Array<number>, param3: any, param4: any): any;
						public upload(param0: string, param1: io.github.jan.supabase.storage.UploadData, param2: any, param3: any): any;
						public publicUrl(param0: string): string;
						public authenticatedUrl(param0: string): string;
						public authenticatedRenderUrl(param0: string, param1: any): string;
						public getBucketId(): string;
						public "createSignedUrls-KLykuaI"(param0: number, param1: java.util.Collection<string>, param2: any): any;
						public update(param0: string, param1: androidNative.Array<number>, param2: any, param3: any): any;
						public changePublicStatusTo(param0: boolean, param1: any): any;
						public downloadAuthenticated(param0: string, param1: io.ktor.utils.io.ByteWriteChannel, param2: any, param3: any): any;
						public downloadPublic(param0: string, param1: io.ktor.utils.io.ByteWriteChannel, param2: any, param3: any): any;
						public move(param0: string, param1: string, param2: string, param3: any): any;
						public createSignedUploadUrl(param0: string, param1: boolean, param2: any): any;
						public upload(param0: string, param1: androidNative.Array<number>, param2: any, param3: any): any;
						public delete(param0: androidNative.Array<string>, param1: any): any;
						public downloadPublic(param0: string, param1: any, param2: any): any;
						public list(param0: string, param1: any, param2: any): any;
					}
					export module BucketApi {
						export class Companion {
							public static class: java.lang.Class<io.github.jan.supabase.storage.BucketApi.Companion>;
							public static UPSERT_HEADER: string = "x-upsert";
						}
						export class DefaultImpls {
							public static class: java.lang.Class<io.github.jan.supabase.storage.BucketApi.DefaultImpls>;
							//public static upload($i$a$-require-BucketApi$upload$3: io.github.jan.supabase.storage.BucketApi, $this: string, path: androidNative.Array<number>, data: any, options: any): any;
							//public static update($i$a$-require-BucketApi$update$3: io.github.jan.supabase.storage.BucketApi, $this: string, path: androidNative.Array<number>, data: any, options: any): any;
							//public static uploadToSignedUrl($i$a$-require-BucketApi$uploadToSignedUrl$3: io.github.jan.supabase.storage.BucketApi, $this: string, path: string, token: androidNative.Array<number>, data: any, options: any): any;
							public static "createSignedUrls-KLykuaI"($this: io.github.jan.supabase.storage.BucketApi, expiresIn: number, paths: androidNative.Array<string>, $completion: any): any;
							public static delete($this: io.github.jan.supabase.storage.BucketApi, paths: androidNative.Array<string>, $completion: any): any;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export class BucketApiImpl extends io.github.jan.supabase.storage.BucketApi {
						public static class: java.lang.Class<io.github.jan.supabase.storage.BucketApiImpl>;
						public delete(paths: androidNative.Array<string>, $completion: any): any;
						public getSupabaseClient(): io.github.jan.supabase.SupabaseClient;
						public downloadAuthenticated(param0: string, param1: any, param2: any): any;
						public copy(param0: string, param1: string, param2: string, param3: any): any;
						public "createSignedUrl-dWUq8MI"(this_: string, this_: number, this_: any, this_: any): any;
						public downloadAuthenticated(path: string, channel: io.ktor.utils.io.ByteWriteChannel, options: any, $completion: any): any;
						public list(prefix: string, filter: any, $this$iv: any): any;
						public upload(param0: string, param1: io.github.jan.supabase.storage.UploadData, param2: any, param3: any): any;
						public authenticatedUrl(param0: string): string;
						public delete($this$delete_u24lambda_u242: java.util.Collection<string>, $i$f$buildJsonObject: any): any;
						public getStorage(): io.github.jan.supabase.storage.StorageImpl;
						public getBucketId(): string;
						public update(param0: string, param1: androidNative.Array<number>, param2: any, param3: any): any;
						public update(path: string, data: io.github.jan.supabase.storage.UploadData, options: any, $completion: any): any;
						public prepareDownloadRequest$storage_kt_release(url: io.ktor.client.request.HttpRequestBuilder, this_: string, $this$prepareDownloadRequest: boolean, path: io.github.jan.supabase.storage.DownloadOptionBuilder): void;
						public upload(path: string, data: io.github.jan.supabase.storage.UploadData, options: any, $completion: any): any;
						public uploadOrUpdate$storage_kt_release(this_: io.ktor.http.HttpMethod, method: string, method: io.github.jan.supabase.storage.UploadData, url: any, url: any): any;
						public downloadPublic(param0: string, param1: io.ktor.utils.io.ByteWriteChannel, param2: any, param3: any): any;
						public downloadPublic(path: string, options: any, $completion: any): any;
						public move(param0: string, param1: string, param2: string, param3: any): any;
						public uploadToSignedUrl(path: string, token: string, data: io.github.jan.supabase.storage.UploadData, options: any, $completion: any): any;
						public createSignedUploadUrl(this_: string, this_: boolean, this_: any): any;
						public delete(param0: androidNative.Array<string>, param1: any): any;
						public downloadPublic(param0: string, param1: any, param2: any): any;
						public changePublicStatusTo(public_: boolean, $completion: any): any;
						public upload(path: string, data: androidNative.Array<number>, options: any, $completion: any): any;
						public downloadPublic(path: string, channel: io.ktor.utils.io.ByteWriteChannel, options: any, $completion: any): any;
						public list(param0: string, param1: any, param2: any): any;
						public constructor(bucketId: string, storage: io.github.jan.supabase.storage.StorageImpl, resumableCache: io.github.jan.supabase.storage.resumable.ResumableCache);
						public publicUrl(path: string): string;
						public uploadToSignedUrl(param0: string, param1: string, param2: io.github.jan.supabase.storage.UploadData, param3: any, param4: any): any;
						public uploadToSignedUrl(path: string, token: string, data: androidNative.Array<number>, options: any, $completion: any): any;
						public "createSignedUrl-dWUq8MI"(param0: string, param1: number, param2: any, param3: any): any;
						public update(param0: string, param1: io.github.jan.supabase.storage.UploadData, param2: any, param3: any): any;
						public getResumable(): io.github.jan.supabase.storage.resumable.ResumableClientImpl;
						public publicRenderUrl(this_: string, path: any): string;
						public getResumable(): io.github.jan.supabase.storage.resumable.ResumableClient;
						//public move(it: string, $i$a$-buildJsonObject-BucketApiImpl$move$2: string, $this$move_u24lambda_u244: string, $i$f$buildJsonObject: any): any;
						public publicRenderUrl(param0: string, param1: any): string;
						public delete(param0: java.util.Collection<string>, param1: any): any;
						public "createSignedUrls-KLykuaI"(param0: number, param1: androidNative.Array<string>, param2: any): any;
						public uploadToSignedUrl(param0: string, param1: string, param2: androidNative.Array<number>, param3: any, param4: any): any;
						public downloadAuthenticated(path: string, options: any, $completion: any): any;
						public publicUrl(param0: string): string;
						public authenticatedUrl(path: string): string;
						public authenticatedRenderUrl(param0: string, param1: any): string;
						public channelDownloadRequest$storage_kt_release(this_: string, path: io.ktor.utils.io.ByteWriteChannel, path: boolean, channel: any, channel: any): any;
						public update(path: string, data: androidNative.Array<number>, options: any, $completion: any): any;
						public "createSignedUrls-KLykuaI"(param0: number, param1: java.util.Collection<string>, param2: any): any;
						public changePublicStatusTo(param0: boolean, param1: any): any;
						//public copy(it: string, $i$a$-buildJsonObject-BucketApiImpl$copy$2: string, $this$copy_u24lambda_u246: string, $i$f$buildJsonObject: any): any;
						public downloadAuthenticated(param0: string, param1: io.ktor.utils.io.ByteWriteChannel, param2: any, param3: any): any;
						public "createSignedUrls-KLykuaI"(expiresIn: number, paths: androidNative.Array<string>, $completion: any): any;
						public "createSignedUrls-KLykuaI"(this_: number, this_: java.util.Collection<string>, this_: any): any;
						public createSignedUploadUrl(param0: string, param1: boolean, param2: any): any;
						public upload(param0: string, param1: androidNative.Array<number>, param2: any, param3: any): any;
						public authenticatedRenderUrl(this_: string, path: any): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export class BucketBuilder {
						public static class: java.lang.Class<io.github.jan.supabase.storage.BucketBuilder>;
						public setAllowedMimeTypes$storage_kt_release(value: java.util.List<string>): void;
						public constructor();
						public getPublic(): java.lang.Boolean;
						public allowedMimeTypes(mimeTypes: androidNative.Array<string>): void;
						public "getBytes-ueSVNNQ"($this$bytes: number): string;
						public allowedMimeTypes(mimeTypes: java.util.List<string>): void;
						public allowedMimeTypes(it: androidNative.Array<io.ktor.http.ContentType>): void;
						public "getFileSizeLimit-cccgrl4"(): string;
						public getAllowedMimeTypes$storage_kt_release(): java.util.List<string>;
						public "setFileSizeLimit-saRlmmQ"(value: string): void;
						public setPublic(value: java.lang.Boolean): void;
						public "getMegabytes-ueSVNNQ"($this$megabytes: number): string;
						public allowedMimeTypesContentType(it: java.util.List<io.ktor.http.ContentType>): void;
						public "getKilobytes-ueSVNNQ"($this$kilobytes: number): string;
						public "getGigabytes-ueSVNNQ"($this$gigabytes: number): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export class BucketListFilter {
						public static class: java.lang.Class<io.github.jan.supabase.storage.BucketListFilter>;
						public getLimit(): java.lang.Integer;
						public sortBy(column: string, order: string): void;
						public constructor();
						public getOffset(): java.lang.Integer;
						public getSearch(): string;
						public setOffset(value: java.lang.Integer): void;
						public setSearch(value: string): void;
						public setLimit(value: java.lang.Integer): void;
						public build(): kotlinx.serialization.json.JsonObject;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export class DownloadOptionBuilder {
						public static class: java.lang.Class<io.github.jan.supabase.storage.DownloadOptionBuilder>;
						public constructor(transform: any, httpRequestOverrides: java.util.List<any>);
						//public getHttpRequestOverrides$storage_kt_release(): java.util.List<any>>;
						public constructor();
						public transform(transform: any): void;
						// public setTransform$storage_kt_release(value: any): void;
						public httpOverride(override: any): void;
						// public getTransform$storage_kt_release(): any<io.github.jan.supabase.storage.ImageTransformation,any>;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export class DownloadStatus {
						public static class: java.lang.Class<io.github.jan.supabase.storage.DownloadStatus>;
						/**
						 * Constructs a new instance of the io.github.jan.supabase.storage.DownloadStatus interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
					export module DownloadStatus {
						export class ByteData extends io.github.jan.supabase.storage.DownloadStatus {
							public static class: java.lang.Class<io.github.jan.supabase.storage.DownloadStatus.ByteData>;
							public getData(): androidNative.Array<number>;
							public hashCode(): number;
							public static "equals-impl"(arg0: androidNative.Array<number>, other: any): boolean;
							public equals(other: any): boolean;
							public static "hashCode-impl"(arg0: androidNative.Array<number>): number;
							public static "equals-impl0"(p1: androidNative.Array<number>, p2: androidNative.Array<number>): boolean;
							public toString(): string;
							public static "constructor-impl"(data: androidNative.Array<number>): androidNative.Array<number>;
							public static "toString-impl"(arg0: androidNative.Array<number>): string;
						}
						export class Progress extends io.github.jan.supabase.storage.DownloadStatus {
							public static class: java.lang.Class<io.github.jan.supabase.storage.DownloadStatus.Progress>;
							public copy(totalBytesReceived: number, contentLength: number): io.github.jan.supabase.storage.DownloadStatus.Progress;
							public component1(): number;
							public hashCode(): number;
							public component2(): number;
							public equals(other: any): boolean;
							public constructor(totalBytesReceived: number, contentLength: number);
							public toString(): string;
							public getContentLength(): number;
							public getTotalBytesReceived(): number;
						}
						export class Success extends io.github.jan.supabase.storage.DownloadStatus {
							public static class: java.lang.Class<io.github.jan.supabase.storage.DownloadStatus.Success>;
							public static INSTANCE: io.github.jan.supabase.storage.DownloadStatus.Success;
							public hashCode(): number;
							public equals(other: any): boolean;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export class FileObject {
						public static class: java.lang.Class<io.github.jan.supabase.storage.FileObject>;
						public equals(other: any): boolean;
						public component1(): string;
						public hashCode(): number;
						public component5(): kotlinx.datetime.Instant;
						public component6(): kotlinx.serialization.json.JsonObject;
						public constructor(name: string, id: string, updatedAt: kotlinx.datetime.Instant, createdAt: kotlinx.datetime.Instant, lastAccessedAt: kotlinx.datetime.Instant, metadata: kotlinx.serialization.json.JsonObject);
						public getName(): string;
						public getCreatedAt(): kotlinx.datetime.Instant;
						public toString(): string;
						public component3(): kotlinx.datetime.Instant;
						public component2(): string;
						public getLastAccessedAt(): kotlinx.datetime.Instant;
						public getMetadata(): kotlinx.serialization.json.JsonObject;
						public getId(): string;
						public component4(): kotlinx.datetime.Instant;
						public copy(name: string, id: string, updatedAt: kotlinx.datetime.Instant, createdAt: kotlinx.datetime.Instant, lastAccessedAt: kotlinx.datetime.Instant, metadata: kotlinx.serialization.json.JsonObject): io.github.jan.supabase.storage.FileObject;
						public getUpdatedAt(): kotlinx.datetime.Instant;
					}
						
					export module FileObject {
							export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.storage.FileObject> {
								public static class: java.lang.Class<io.github.jan.supabase.storage.FileObject.serializer>;
								public static INSTANCE: io.github.jan.supabase.storage.FileObject.serializer;
								public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.storage.FileObject): void;
								public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
								public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
								public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.storage.FileObject;
								public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
							}
						}
						export class Companion {
							public static class: java.lang.Class<io.github.jan.supabase.storage.FileObject.Companion>;
							public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.storage.FileObject>;
						}
					
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export class FileSizeLimit {
						public static class: java.lang.Class<io.github.jan.supabase.storage.FileSizeLimit>;
						public static "toString-impl"(arg0: string): string;
						public static "hashCode-impl"(arg0: string): number;
						public equals(other: any): boolean;
						public static "constructor-impl"(value: string): string;
						public static "equals-impl"(arg0: string, other: any): boolean;
						public static "equals-impl0"(p1: string, p2: string): boolean;
						public hashCode(): number;
						public getValue(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export class FileUploadResponse {
						public static class: java.lang.Class<io.github.jan.supabase.storage.FileUploadResponse>;
						public copy(id: string, path: string, key: string): io.github.jan.supabase.storage.FileUploadResponse;
						public constructor(id: string, path: string, key: string);
						public component3(): string;
						public equals(other: any): boolean;
						public component2(): string;
						public component1(): string;
						public hashCode(): number;
						public getId(): string;
						public getPath(): string;
						public getKey(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export class ImageTransformation {
						public static class: java.lang.Class<io.github.jan.supabase.storage.ImageTransformation>;
						public size(width: number, height: number): void;
						public constructor();
						public setWidth(value: java.lang.Integer): void;
						public getResize(): io.github.jan.supabase.storage.ImageTransformation.Resize;
						public queryString$storage_kt_release(): string;
						public setQuality(this_: java.lang.Integer): void;
						public fill(): void;
						public getHeight(): java.lang.Integer;
						public contain(): void;
						public getWidth(): java.lang.Integer;
						public getQuality(): java.lang.Integer;
						public setResize(value: io.github.jan.supabase.storage.ImageTransformation.Resize): void;
						public cover(): void;
						public getFormat(): string;
						public setFormat(value: string): void;
						public setHeight(value: java.lang.Integer): void;
					}
					export module ImageTransformation {
						export class Companion {
							public static class: java.lang.Class<io.github.jan.supabase.storage.ImageTransformation.Companion>;
							public getVALID_QUALITY_RANGE(): any;
						}
						export class Resize {
							public static class: java.lang.Class<io.github.jan.supabase.storage.ImageTransformation.Resize>;
							public static COVER: io.github.jan.supabase.storage.ImageTransformation.Resize;
							public static CONTAIN: io.github.jan.supabase.storage.ImageTransformation.Resize;
							public static FILL: io.github.jan.supabase.storage.ImageTransformation.Resize;
							public static values(): androidNative.Array<io.github.jan.supabase.storage.ImageTransformation.Resize>;
							public static getEntries(): any;
							public static valueOf(value: string): io.github.jan.supabase.storage.ImageTransformation.Resize;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export class SignedUrl {
						public static class: java.lang.Class<io.github.jan.supabase.storage.SignedUrl>;
						public constructor(error: string, signedURL: string, path: string);
						public getSignedURL(): string;
						public component3(): string;
						public equals(other: any): boolean;
						public component2(): string;
						public copy(error: string, signedURL: string, path: string): io.github.jan.supabase.storage.SignedUrl;
						public component1(): string;
						public hashCode(): number;
						public getError(): string;
						public getPath(): string;
						public toString(): string;
					}
					
					export module SignedUrl {
							export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.storage.SignedUrl> {
								public static class: java.lang.Class<io.github.jan.supabase.storage.SignedUrl.serializer>;
								public static INSTANCE: io.github.jan.supabase.storage.SignedUrl.serializer;
								public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
								public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
								public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
								public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.storage.SignedUrl;
								public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.storage.SignedUrl): void;
							}
						}
						export class Companion {
							public static class: java.lang.Class<io.github.jan.supabase.storage.SignedUrl.Companion>;
							public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.storage.SignedUrl>;
						}
					
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export class Storage extends java.lang.Object {
						public static class: java.lang.Class<io.github.jan.supabase.storage.Storage>;
						/**
						 * Constructs a new instance of the io.github.jan.supabase.storage.Storage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							createBucket(param0: string, param1: any, param2: any): any;
							updateBucket(param0: string, param1: any, param2: any): any;
							retrieveBuckets(param0: any): any;
							retrieveBucketById(param0: string, param1: any): any;
							emptyBucket(param0: string, param1: any): any;
							deleteBucket(param0: string, param1: any): any;
							get(param0: string): io.github.jan.supabase.storage.BucketApi;
							from(param0: string): io.github.jan.supabase.storage.BucketApi;
							"<clinit>"(): void;
						});
						public constructor();
						public static API_VERSION: number = 1;
						public static DEFAULT_CHUNK_SIZE: number = 6291456;
						public retrieveBuckets(param0: any): any;
						public emptyBucket(param0: string, param1: any): any;
						public createBucket(param0: string, param1: any, param2: any): any;
						public retrieveBucketById(param0: string, param1: any): any;
						public get(param0: string): io.github.jan.supabase.storage.BucketApi;
						public from(param0: string): io.github.jan.supabase.storage.BucketApi;
						public updateBucket(param0: string, param1: any, param2: any): any;
						public deleteBucket(param0: string, param1: any): any;
					}
					export module Storage {
						export class Companion extends io.github.jan.supabase.plugins.SupabasePluginProvider<io.github.jan.supabase.storage.Storage.Config,io.github.jan.supabase.storage.Storage> {
							public static class: java.lang.Class<io.github.jan.supabase.storage.Storage.Companion>;
							public static API_VERSION: number = 1;
							public static DEFAULT_CHUNK_SIZE: number = 6291456;
							public setup(builder: io.github.jan.supabase.SupabaseClientBuilder, config: io.github.jan.supabase.storage.Storage.Config): void;
							public getKey(): string;
							public setLogLevel(level: io.github.jan.supabase.logging.LogLevel): void;
							public createConfig(init: any): io.github.jan.supabase.storage.Storage.Config;
							public getLogger(): io.github.jan.supabase.logging.SupabaseLogger;
							public create(supabaseClient: io.github.jan.supabase.SupabaseClient, config: io.github.jan.supabase.storage.Storage.Config): io.github.jan.supabase.storage.Storage;
						}
						export class Config {
							public static class: java.lang.Class<io.github.jan.supabase.storage.Storage.Config>;
							public hashCode(): number;
							public getSerializer(): io.github.jan.supabase.SupabaseSerializer;
							public toString(): string;
							public resumable(this_: any): void;
							public setResumable(value: io.github.jan.supabase.storage.Storage.Config.Resumable): void;
							public "setTransferTimeout-LRDsOJo"(value: number): void;
							public "copy-KLykuaI"(transferTimeout: number, resumable: io.github.jan.supabase.storage.Storage.Config.Resumable, serializer: io.github.jan.supabase.SupabaseSerializer): io.github.jan.supabase.storage.Storage.Config;
							public equals(other: any): boolean;
							public "component1-UwyO8pc"(): number;
							public component3(): io.github.jan.supabase.SupabaseSerializer;
							public getResumable(): io.github.jan.supabase.storage.Storage.Config.Resumable;
							public setSerializer(value: io.github.jan.supabase.SupabaseSerializer): void;
							public "getTransferTimeout-UwyO8pc"(): number;
							public component2$storage_kt_release(): io.github.jan.supabase.storage.Storage.Config.Resumable;
						}
						export module Config {
							export class Resumable {
								public static class: java.lang.Class<io.github.jan.supabase.storage.Storage.Config.Resumable>;
								public toString(): string;
								public component3(): boolean;
								public setOnlyUpdateStateAfterChunk(value: boolean): void;
								public getDefaultChunkSize(): number;
								public setDefaultChunkSize($i$f$log: number): void;
								public component1(): io.github.jan.supabase.storage.resumable.ResumableCache;
								public getOnlyUpdateStateAfterChunk(): boolean;
								public equals(other: any): boolean;
								public setCache(value: io.github.jan.supabase.storage.resumable.ResumableCache): void;
								public "setRetryTimeout-LRDsOJo"(value: number): void;
								public "component2-UwyO8pc"(): number;
								public getCache(): io.github.jan.supabase.storage.resumable.ResumableCache;
								public "getRetryTimeout-UwyO8pc"(): number;
								public "copy-8Mi8wO0"(cache: io.github.jan.supabase.storage.resumable.ResumableCache, retryTimeout: number, onlyUpdateStateAfterChunk: boolean): io.github.jan.supabase.storage.Storage.Config.Resumable;
								public hashCode(): number;
							}
						}
						export class DefaultImpls {
							public static class: java.lang.Class<io.github.jan.supabase.storage.Storage.DefaultImpls>;
							public static close($this: io.github.jan.supabase.storage.Storage, $completion: any): any;
							public static resolveUrl($this: io.github.jan.supabase.storage.Storage, path: string): string;
							public static from($this: io.github.jan.supabase.storage.Storage, bucketId: string): io.github.jan.supabase.storage.BucketApi;
							public static init($this: io.github.jan.supabase.storage.Storage): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export class StorageErrorResponse {
						public static class: java.lang.Class<io.github.jan.supabase.storage.StorageErrorResponse>;
						public getStatusCode(): number;
						public getMessage(): string;
						public component3(): string;
						public equals(other: any): boolean;
						public component2(): string;
						public copy(statusCode: number, error: string, message: string): io.github.jan.supabase.storage.StorageErrorResponse;
						public hashCode(): number;
						public getError(): string;
						public component1(): number;
						public toString(): string;
						public constructor(statusCode: number, error: string, message: string);
					}
				
					export module StorageErrorResponse {
							export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.storage.StorageErrorResponse> {
								public static class: java.lang.Class<io.github.jan.supabase.storage.StorageErrorResponse.serializer>;
								public static INSTANCE: io.github.jan.supabase.storage.StorageErrorResponse.serializer;
								public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
								public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
								public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
								public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.storage.StorageErrorResponse;
								public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.storage.StorageErrorResponse): void;
							}
						}
						export class Companion {
							public static class: java.lang.Class<io.github.jan.supabase.storage.StorageErrorResponse.Companion>;
							public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.storage.StorageErrorResponse>;
						}
					
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export class StorageImpl extends io.github.jan.supabase.storage.Storage {
						public static class: java.lang.Class<io.github.jan.supabase.storage.StorageImpl>;
						public constructor(supabaseClient: io.github.jan.supabase.SupabaseClient, config: io.github.jan.supabase.storage.Storage.Config);
						public getSupabaseClient(): io.github.jan.supabase.SupabaseClient;
						public emptyBucket($this$iv: string, url$iv: any): any;
						public getConfig(): io.github.jan.supabase.storage.Storage.Config;
						public getApiVersion(): number;
						public createBucket(type: string, item$iv$iv: any, $i$f$mapTo: any): any;
						public deleteBucket(param0: string, param1: any): any;
						//public updateBucket(it: string, $i$a$-map-StorageImpl$updateBucket$body$1$2$1: any, type: any): any;
						public init(): void;
						public get(answer$iv: string): io.github.jan.supabase.storage.BucketApi;
						public emptyBucket(param0: string, param1: any): any;
						public getPluginKey(): string;
						public retrieveBucketById(bucketId: string, $this$iv: any): any;
						public retrieveBuckets($this$iv: any): any;
						public resolveUrl(path: string): string;
						public getApi$storage_kt_release(): io.github.jan.supabase.auth.AuthenticatedSupabaseApi;
						public getSerializer(): io.github.jan.supabase.SupabaseSerializer;
						public deleteBucket($this$iv: string, url$iv: any): any;
						public createBucket(param0: string, param1: any, param2: any): any;
						public from(param0: string): io.github.jan.supabase.storage.BucketApi;
						public close($completion: any): any;
						public retrieveBuckets(param0: any): any;
						public from(bucketId: string): io.github.jan.supabase.storage.BucketApi;
						public retrieveBucketById(param0: string, param1: any): any;
						public parseErrorResponse(response: io.ktor.client.statement.HttpResponse, response: any): any;
						public get(param0: string): io.github.jan.supabase.storage.BucketApi;
						public updateBucket(param0: string, param1: any, param2: any): any;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export class StorageItem {
						public static class: java.lang.Class<io.github.jan.supabase.storage.StorageItem>;
						public component3(): boolean;
						public equals(other: any): boolean;
						public getAuthenticated(): boolean;
						public component2(): string;
						public component1(): string;
						public copy(path: string, bucketId: string, authenticated: boolean): io.github.jan.supabase.storage.StorageItem;
						public hashCode(): number;
						public getPath(): string;
						public getBucketId(): string;
						public constructor(path: string, bucketId: string, authenticated: boolean);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export class SupabaseInitializer extends androidx.startup.Initializer<globalAndroid.content.Context> {
						public static class: java.lang.Class<io.github.jan.supabase.storage.SupabaseInitializer>;
						public dependencies(): java.util.List<java.lang.Class<any>>;
						public constructor();
						public create(it: globalAndroid.content.Context): globalAndroid.content.Context;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export class UploadData {
						public static class: java.lang.Class<io.github.jan.supabase.storage.UploadData>;
						public component1(): io.ktor.utils.io.ByteReadChannel;
						public component2(): number;
						public equals(other: any): boolean;
						public getSize(): number;
						public hashCode(): number;
						public getStream(): io.ktor.utils.io.ByteReadChannel;
						public copy(stream: io.ktor.utils.io.ByteReadChannel, size: number): io.github.jan.supabase.storage.UploadData;
						public toString(): string;
						public constructor(stream: io.ktor.utils.io.ByteReadChannel, size: number);
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export class UploadOptionBuilder {
						public static class: java.lang.Class<io.github.jan.supabase.storage.UploadOptionBuilder>;
						//public getHttpRequestOverrides$storage_kt_release(): java.util.List<any<io.ktor.client.request.HttpRequestBuilder,any>>;
						public getUpsert(): boolean;
						public getSerializer(): io.github.jan.supabase.SupabaseSerializer;
						public constructor(serializer: io.github.jan.supabase.SupabaseSerializer, upsert: boolean, contentType: io.ktor.http.ContentType, httpRequestOverrides: java.util.List<any>);
						public httpOverride(override: any): void;
						public setUpsert(value: boolean): void;
						public setContentType(value: io.ktor.http.ContentType): void;
						public getContentType(): io.ktor.http.ContentType;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export class UploadSignedUrl {
						public static class: java.lang.Class<io.github.jan.supabase.storage.UploadSignedUrl>;
						public component3(): string;
						public equals(other: any): boolean;
						public component2(): string;
						public constructor(url: string, path: string, token: string);
						public component1(): string;
						public hashCode(): number;
						public getUrl(): string;
						public getPath(): string;
						public getToken(): string;
						public toString(): string;
						public copy(url: string, path: string, token: string): io.github.jan.supabase.storage.UploadSignedUrl;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export class UploadStatus {
						public static class: java.lang.Class<io.github.jan.supabase.storage.UploadStatus>;
						/**
						 * Constructs a new instance of the io.github.jan.supabase.storage.UploadStatus interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
					export module UploadStatus {
						export class Progress extends io.github.jan.supabase.storage.UploadStatus {
							public static class: java.lang.Class<io.github.jan.supabase.storage.UploadStatus.Progress>;
							public constructor(totalBytesSend: number, contentLength: number);
							public component1(): number;
							public hashCode(): number;
							public component2(): number;
							public equals(other: any): boolean;
							public copy(totalBytesSend: number, contentLength: number): io.github.jan.supabase.storage.UploadStatus.Progress;
							public toString(): string;
							public getContentLength(): number;
							public getTotalBytesSend(): number;
						}
						export class Success extends io.github.jan.supabase.storage.UploadStatus {
							public static class: java.lang.Class<io.github.jan.supabase.storage.UploadStatus.Success>;
							public getResponse(): io.github.jan.supabase.storage.FileUploadResponse;
							public static "toString-impl"(arg0: io.github.jan.supabase.storage.FileUploadResponse): string;
							public hashCode(): number;
							public static "equals-impl"(arg0: io.github.jan.supabase.storage.FileUploadResponse, other: any): boolean;
							public equals(other: any): boolean;
							public static "equals-impl0"(p1: io.github.jan.supabase.storage.FileUploadResponse, p2: io.github.jan.supabase.storage.FileUploadResponse): boolean;
							public toString(): string;
							public static "constructor-impl"(response: io.github.jan.supabase.storage.FileUploadResponse): io.github.jan.supabase.storage.FileUploadResponse;
							public static "hashCode-impl"(arg0: io.github.jan.supabase.storage.FileUploadResponse): number;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export module resumable {
						export class Fingerprint {
							public static class: java.lang.Class<io.github.jan.supabase.storage.resumable.Fingerprint>;
							public static FINGERPRINT_PARTS: number = 2;
							public static FINGERPRINT_SEPARATOR: string = "::";
							public static "equals-impl"(arg0: string, other: any): boolean;
							public static "equals-impl0"(p1: string, p2: string): boolean;
							public hashCode(): number;
							public static "getSize-impl"(arg0: string): number;
							public static "hashCode-impl"(arg0: string): number;
							public equals(other: any): boolean;
							public static "toString-impl"(arg0: string): string;
							public getValue(): string;
							public static "getSource-impl"(arg0: string): string;
							public toString(): string;
						}
						export module Fingerprint {
							export class Companion {
								public static class: java.lang.Class<io.github.jan.supabase.storage.resumable.Fingerprint.Companion>;
								public "invoke-dc9EZ54"(source: string, size: number): string;
								public "invoke-3xapfgk"(parts: string): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export module resumable {
						export class MemoryResumableCache extends io.github.jan.supabase.storage.resumable.ResumableCache {
							public static class: java.lang.Class<io.github.jan.supabase.storage.resumable.MemoryResumableCache>;
							public constructor(map: java.util.Map<string,string>);
							public constructor();
							public "remove-iiNwMIM"(param0: string, param1: any): any;
							//public "get-iiNwMIM"(this_$iv: string, $i$a$-let-MemoryResumableCache$get$2: any): any;
							public clear($completion: any): any;
							public "set-zb63x2Q"(param0: string, param1: io.github.jan.supabase.storage.resumable.ResumableCacheEntry, param2: any): any;
							public clear(param0: any): any;
							public "remove-iiNwMIM"(fingerprint: string, $completion: any): any;
							public entries(param0: any): any;
							public entries(key: any): any;
							public "set-zb63x2Q"($this$encodeToString$iv: string, this_: io.github.jan.supabase.storage.resumable.ResumableCacheEntry, fingerprint: any): any;
							public "get-iiNwMIM"(param0: string, param1: any): any;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export module resumable {
						export class ResumableCache {
							public static class: java.lang.Class<io.github.jan.supabase.storage.resumable.ResumableCache>;
							/**
							 * Constructs a new instance of the io.github.jan.supabase.storage.resumable.ResumableCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								"set-zb63x2Q"(param0: string, param1: io.github.jan.supabase.storage.resumable.ResumableCacheEntry, param2: any): any;
								"get-iiNwMIM"(param0: string, param1: any): any;
								"remove-iiNwMIM"(param0: string, param1: any): any;
								clear(param0: any): any;
								entries(param0: any): any;
							});
							public constructor();
							public "remove-iiNwMIM"(param0: string, param1: any): any;
							public "set-zb63x2Q"(param0: string, param1: io.github.jan.supabase.storage.resumable.ResumableCacheEntry, param2: any): any;
							public clear(param0: any): any;
							public entries(param0: any): any;
							public "get-iiNwMIM"(param0: string, param1: any): any;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export module resumable {
						export class ResumableCacheEntry {
							public static class: java.lang.Class<io.github.jan.supabase.storage.resumable.ResumableCacheEntry>;
							public component2(): string;
							public component5(): boolean;
							public hashCode(): number;
							public component4(): kotlinx.datetime.Instant;
							public toString(): string;
							public getExpiresAt(): kotlinx.datetime.Instant;
							public getBucketId(): string;
							public component3(): string;
							public component1(): string;
							public getPath(): string;
							public getUrl(): string;
							public copy(url: string, path: string, bucketId: string, expiresAt: kotlinx.datetime.Instant, upsert: boolean, contentType: string): io.github.jan.supabase.storage.resumable.ResumableCacheEntry;
							public equals(other: any): boolean;
							public getContentType(): string;
							public getUpsert(): boolean;
							public component6(): string;
							public constructor(url: string, path: string, bucketId: string, expiresAt: kotlinx.datetime.Instant, upsert: boolean, contentType: string);
						}
							
						export module ResumableCacheEntry {
								export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.github.jan.supabase.storage.resumable.ResumableCacheEntry> {
									public static class: java.lang.Class<io.github.jan.supabase.storage.resumable.ResumableCacheEntry.serializer>;
									public static INSTANCE: io.github.jan.supabase.storage.resumable.ResumableCacheEntry.serializer;
									public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: io.github.jan.supabase.storage.resumable.ResumableCacheEntry): void;
									public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
									public deserialize(decoder: kotlinx.serialization.encoding.Decoder): io.github.jan.supabase.storage.resumable.ResumableCacheEntry;
									public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
									public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
								}
							}
							export class Companion {
								public static class: java.lang.Class<io.github.jan.supabase.storage.resumable.ResumableCacheEntry.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<io.github.jan.supabase.storage.resumable.ResumableCacheEntry>;
							}
						
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export module resumable {
						export class ResumableClient {
							public static class: java.lang.Class<io.github.jan.supabase.storage.resumable.ResumableClient>;
							/**
							 * Constructs a new instance of the io.github.jan.supabase.storage.resumable.ResumableClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								createOrContinueUpload(param0: any, param1: string, param2: number, param3: string, param4: any, param5: any): any;
								createOrContinueUpload(param0: androidNative.Array<number>, param1: string, param2: string, param3: any, param4: any): any;
								continuePreviousUploads(param0: any, param1: any): any;
								"<clinit>"(): void;
							});
							public constructor();
							public static TUS_VERSION: string = "1.0.0";
							public createOrContinueUpload(param0: any, param1: string, param2: number, param3: string, param4: any, param5: any): any;
							public createOrContinueUpload(param0: androidNative.Array<number>, param1: string, param2: string, param3: any, param4: any): any;
							public continuePreviousUploads(param0: any, param1: any): any;
						}
						export module ResumableClient {
							export class Companion {
								public static class: java.lang.Class<io.github.jan.supabase.storage.resumable.ResumableClient.Companion>;
								public static TUS_VERSION: string = "1.0.0";
							}
							export class DefaultImpls {
								public static class: java.lang.Class<io.github.jan.supabase.storage.resumable.ResumableClient.DefaultImpls>;
								public static createOrContinueUpload($this: io.github.jan.supabase.storage.resumable.ResumableClient, data: androidNative.Array<number>, source: string, path: string, options: any, $completion: any): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export module resumable {
						export class ResumableClientImpl extends io.github.jan.supabase.storage.resumable.ResumableClient {
							public static class: java.lang.Class<io.github.jan.supabase.storage.resumable.ResumableClientImpl>;
							public createOrContinueUpload(param0: any, param1: string, param2: number, param3: string, param4: any, param5: any): any;
							public createOrContinueUpload(param0: androidNative.Array<number>, param1: string, param2: string, param3: any, param4: any): any;
							public createOrContinueUpload(this_: any, this_: string, this_: number, this_: string, channel: any, channel: any): any;
							public continuePreviousUploads(param0: any, param1: any): any;
							public constructor(storageApi: io.github.jan.supabase.storage.BucketApi, cache: io.github.jan.supabase.storage.resumable.ResumableCache);
							public createOrContinueUpload(data: androidNative.Array<number>, source: string, path: string, options: any, $completion: any): any;
							public continuePreviousUploads(this_: any, this_: any): any;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export module resumable {
						export class ResumableUpload {
							public static class: java.lang.Class<io.github.jan.supabase.storage.resumable.ResumableUpload>;
							/**
							 * Constructs a new instance of the io.github.jan.supabase.storage.resumable.ResumableUpload interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getStateFlow(): kotlinx.coroutines.flow.StateFlow<io.github.jan.supabase.storage.resumable.ResumableUploadState>;
								"getFingerprint-h-pxtCA"(): string;
								pause(param0: any): any;
								cancel(param0: any): any;
								startOrResumeUploading(param0: any): any;
							});
							public constructor();
							public startOrResumeUploading(param0: any): any;
							public "getFingerprint-h-pxtCA"(): string;
							public pause(param0: any): any;
							public getStateFlow(): kotlinx.coroutines.flow.StateFlow<io.github.jan.supabase.storage.resumable.ResumableUploadState>;
							public cancel(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export module resumable {
						export class ResumableUploadImpl extends io.github.jan.supabase.storage.resumable.ResumableUpload {
							public static class: java.lang.Class<io.github.jan.supabase.storage.resumable.ResumableUploadImpl>;
							public startOrResumeUploading(param0: any): any;
							public "getFingerprint-h-pxtCA"(): string;
							public pause($completion: any): any;
							public pause(param0: any): any;
							public cancel($completion: any): any;
							public startOrResumeUploading(this_: any): any;
							public getStateFlow(): kotlinx.coroutines.flow.StateFlow<io.github.jan.supabase.storage.resumable.ResumableUploadState>;
							public cancel(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export module resumable {
						export class ResumableUploadState {
							public static class: java.lang.Class<io.github.jan.supabase.storage.resumable.ResumableUploadState>;
							public "getFingerprint-h-pxtCA"(): string;
							public component3(): io.github.jan.supabase.storage.UploadStatus;
							public hashCode(): number;
							public getProgress(): number;
							public toString(): string;
							public "component1-h-pxtCA"(): string;
							public getBucketId(): string;
							public getStatus(): io.github.jan.supabase.storage.UploadStatus;
							public getPath(): string;
							public "copy-8R7v4q0"(fingerprint: string, cacheEntry: io.github.jan.supabase.storage.resumable.ResumableCacheEntry, status: io.github.jan.supabase.storage.UploadStatus, paused: boolean): io.github.jan.supabase.storage.resumable.ResumableUploadState;
							public isDone(): boolean;
							public equals(other: any): boolean;
							public getPaused(): boolean;
							public component4(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export module resumable {
						export class SettingsResumableCache extends io.github.jan.supabase.storage.resumable.ResumableCache {
							public static class: java.lang.Class<io.github.jan.supabase.storage.resumable.SettingsResumableCache>;
							public constructor();
							public constructor(settings: com.russhwolf.settings.Settings);
							public clear(this_: any): any;
							public "remove-iiNwMIM"(param0: string, param1: any): any;
							public "set-zb63x2Q"(param0: string, param1: io.github.jan.supabase.storage.resumable.ResumableCacheEntry, param2: any): any;
							public clear(param0: any): any;
							public "remove-iiNwMIM"(fingerprint: string, $completion: any): any;
							public entries(this_: any): any;
							public entries(param0: any): any;
							public "get-iiNwMIM"(fingerprint: string, it: any): any;
							public "set-zb63x2Q"($this$encodeToString$iv: string, this_: io.github.jan.supabase.storage.resumable.ResumableCacheEntry, fingerprint: any): any;
							public "get-iiNwMIM"(param0: string, param1: any): any;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module jan {
			export module supabase {
				export module storage {
					export module resumable {
						export class StreamContent {
							public static class: java.lang.Class<io.github.jan.supabase.storage.resumable.StreamContent>;
							public writeTo(channel: io.ktor.utils.io.ByteWriteChannel, $completion: any): any;
							public getContentType(): io.ktor.http.ContentType;
							public constructor(size: number, copyTo: any);
							public getContentLength(): java.lang.Long;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//io.github.jan.supabase.auth.admin.LinkType:1
//io.github.jan.supabase.auth.mfa.FactorType:2
//io.github.jan.supabase.auth.mfa.MfaFactor:1
//io.github.jan.supabase.auth.providers.AuthProvider:2
//io.github.jan.supabase.auth.providers.builtin.DefaultAuthProvider:2
//io.github.jan.supabase.realtime.PrimaryKey:1
//io.github.jan.supabase.realtime.RealtimeCallback:1


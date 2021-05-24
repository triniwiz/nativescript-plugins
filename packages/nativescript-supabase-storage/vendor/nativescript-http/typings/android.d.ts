/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module klippa {
		export module NativeScriptHTTP {
			export class Async {
				public static class: java.lang.Class<com.klippa.NativeScriptHTTP.Async>;
				public constructor();
			}
			export module Async {
				export class CompleteCallback {
					public static class: java.lang.Class<com.klippa.NativeScriptHTTP.Async.CompleteCallback>;
					/**
					 * Constructs a new instance of the com.klippa.NativeScriptHTTP.Async$CompleteCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onComplete(param0: any, param1: any): void;
						onError(param0: string, param1: any): void;
					});
					public constructor();
					public onComplete(param0: any, param1: any): void;
					public onError(param0: string, param1: any): void;
				}
				export class Http {
					public static class: java.lang.Class<com.klippa.NativeScriptHTTP.Async.Http>;
					public static SetConcurrencyLimits(param0: number, param1: number): void;
					public static ClearCookies(): void;
					public static MakeRequest(param0: com.klippa.NativeScriptHTTP.Async.Http.RequestOptions, param1: com.klippa.NativeScriptHTTP.Async.CompleteCallback, param2: any): void;
					public constructor();
					public static InitClient(): void;
					public static GetWebSocketConnection(param0: com.klippa.NativeScriptHTTP.Async.Http.RequestOptions, param1: okhttp3.WebSocketListener): okhttp3.WebSocket;
					public static PinCertificate(param0: string, param1: native.Array<string>): void;
					public static SetImageParseMethod(param0: com.klippa.NativeScriptHTTP.Async.Http.ImageParseMethod): void;
					public static RemoveCertificatePins(): void;
				}
				export module Http {
					export class HttpRequestTask {
						public static class: java.lang.Class<com.klippa.NativeScriptHTTP.Async.Http.HttpRequestTask>;
						public constructor(param0: com.klippa.NativeScriptHTTP.Async.CompleteCallback, param1: any);
						public parseResponse(param0: okhttp3.Response, param1: native.Array<com.klippa.NativeScriptHTTP.Async.Http.RequestOptions>): com.klippa.NativeScriptHTTP.Async.Http.RequestResult;
						public buildClient(param0: native.Array<com.klippa.NativeScriptHTTP.Async.Http.RequestOptions>): okhttp3.OkHttpClient;
						public buildRequest(param0: native.Array<com.klippa.NativeScriptHTTP.Async.Http.RequestOptions>): okhttp3.Request;
						public onPostExecute(param0: com.klippa.NativeScriptHTTP.Async.Http.RequestResult): void;
					}
					export class ImageParseMethod {
						public static class: java.lang.Class<com.klippa.NativeScriptHTTP.Async.Http.ImageParseMethod>;
						public static NEVER: com.klippa.NativeScriptHTTP.Async.Http.ImageParseMethod;
						public static CONTENTTYPE: com.klippa.NativeScriptHTTP.Async.Http.ImageParseMethod;
						public static ALWAYS: com.klippa.NativeScriptHTTP.Async.Http.ImageParseMethod;
						public static values(): native.Array<com.klippa.NativeScriptHTTP.Async.Http.ImageParseMethod>;
						public static valueOf(param0: string): com.klippa.NativeScriptHTTP.Async.Http.ImageParseMethod;
					}
					export class KeyValuePair {
						public static class: java.lang.Class<com.klippa.NativeScriptHTTP.Async.Http.KeyValuePair>;
						public key: string;
						public value: string;
						public constructor(param0: string, param1: string);
					}
					export class RequestOptions {
						public static class: java.lang.Class<com.klippa.NativeScriptHTTP.Async.Http.RequestOptions>;
						public url: string;
						public method: string;
						public headers: java.util.ArrayList<com.klippa.NativeScriptHTTP.Async.Http.KeyValuePair>;
						public content: okhttp3.RequestBody;
						public timeout: number;
						public screenWidth: number;
						public screenHeight: number;
						public dontFollowRedirects: boolean;
						public forceImageParsing: boolean;
						public constructor();
						public addHeaders(param0: okhttp3.Request.Builder): void;
					}
					export class RequestResult {
						public static class: java.lang.Class<com.klippa.NativeScriptHTTP.Async.Http.RequestResult>;
						public raw: java.io.ByteArrayOutputStream;
						public headers: java.util.ArrayList<com.klippa.NativeScriptHTTP.Async.Http.KeyValuePair>;
						public statusCode: number;
						public responseAsString: string;
						public responseAsImage: globalAndroid.graphics.Bitmap;
						public error: java.lang.Exception;
						public url: string;
						public statusText: string;
						public getHeaders(param0: okhttp3.Response): void;
						public constructor();
						public readResponseStream(param0: okhttp3.Response, param1: java.util.Stack<java.io.Closeable>, param2: com.klippa.NativeScriptHTTP.Async.Http.RequestOptions): void;
					}
					export module RequestResult {
						export class ByteArrayOutputStream2 {
							public static class: java.lang.Class<com.klippa.NativeScriptHTTP.Async.Http.RequestResult.ByteArrayOutputStream2>;
							public constructor();
							public buf(): native.Array<number>;
							public constructor(param0: number);
						}
					}
				}
				export class PriorityThreadFactory {
					public static class: java.lang.Class<com.klippa.NativeScriptHTTP.Async.PriorityThreadFactory>;
					public newThread(param0: java.lang.Runnable): java.lang.Thread;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module klippa {
		export module NativeScriptHTTP {
			export class CookieCache extends java.lang.Iterable<okhttp3.Cookie> {
				public static class: java.lang.Class<com.klippa.NativeScriptHTTP.CookieCache>;
				/**
				 * Constructs a new instance of the com.klippa.NativeScriptHTTP.CookieCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					addAll(param0: java.util.Collection<okhttp3.Cookie>): void;
					clear(): void;
				});
				public constructor();
				public addAll(param0: java.util.Collection<okhttp3.Cookie>): void;
				public clear(): void;
			}
		}
	}
}

declare module com {
	export module klippa {
		export module NativeScriptHTTP {
			export class IdentifiableCookie {
				public static class: java.lang.Class<com.klippa.NativeScriptHTTP.IdentifiableCookie>;
				public hashCode(): number;
				public equals(param0: any): boolean;
			}
		}
	}
}

declare module com {
	export module klippa {
		export module NativeScriptHTTP {
			export class MemoryCookieJar extends okhttp3.CookieJar {
				public static class: java.lang.Class<com.klippa.NativeScriptHTTP.MemoryCookieJar>;
				public loadForRequest(param0: okhttp3.HttpUrl): java.util.List<okhttp3.Cookie>;
				public saveFromResponse(param0: okhttp3.HttpUrl, param1: java.util.List<okhttp3.Cookie>): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module klippa {
		export module NativeScriptHTTP {
			export class SetCookieCache extends com.klippa.NativeScriptHTTP.CookieCache {
				public static class: java.lang.Class<com.klippa.NativeScriptHTTP.SetCookieCache>;
				public addAll(param0: java.util.Collection<okhttp3.Cookie>): void;
				public clear(): void;
				public iterator(): java.util.Iterator<okhttp3.Cookie>;
				public constructor();
			}
			export module SetCookieCache {
				export class SetCookieCacheIterator extends java.util.Iterator<okhttp3.Cookie> {
					public static class: java.lang.Class<com.klippa.NativeScriptHTTP.SetCookieCache.SetCookieCacheIterator>;
					public next(): okhttp3.Cookie;
					public constructor(param0: com.klippa.NativeScriptHTTP.SetCookieCache);
					public hasNext(): boolean;
					public remove(): void;
				}
			}
		}
	}
}


declare module okhttp3 {
	export class Address {
		public static class: java.lang.Class<okhttp3.Address>;
		public proxy(): java.net.Proxy;
		public equals(param0: any): boolean;
		public constructor(param0: string, param1: number, param2: okhttp3.Dns, param3: javax.net.SocketFactory, param4: javax.net.ssl.SSLSocketFactory, param5: javax.net.ssl.HostnameVerifier, param6: okhttp3.CertificatePinner, param7: okhttp3.Authenticator, param8: java.net.Proxy, param9: java.util.List<okhttp3.Protocol>, param10: java.util.List<okhttp3.ConnectionSpec>, param11: java.net.ProxySelector);
		public proxySelector(): java.net.ProxySelector;
		public sslSocketFactory(): javax.net.ssl.SSLSocketFactory;
		public url(): okhttp3.HttpUrl;
		public certificatePinner(): okhttp3.CertificatePinner;
		public toString(): string;
		public protocols(): java.util.List<okhttp3.Protocol>;
		public socketFactory(): javax.net.SocketFactory;
		public dns(): okhttp3.Dns;
		public proxyAuthenticator(): okhttp3.Authenticator;
		public hostnameVerifier(): javax.net.ssl.HostnameVerifier;
		public hashCode(): number;
		public connectionSpecs(): java.util.List<okhttp3.ConnectionSpec>;
	}
}

declare module okhttp3 {
	export class Authenticator {
		public static class: java.lang.Class<okhttp3.Authenticator>;
		/**
		 * Constructs a new instance of the okhttp3.Authenticator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			authenticate(param0: okhttp3.Route, param1: okhttp3.Response): okhttp3.Request;
			<clinit>(): void;
		});
		public constructor();
		public static NONE: okhttp3.Authenticator;
		public authenticate(param0: okhttp3.Route, param1: okhttp3.Response): okhttp3.Request;
	}
}

declare module okhttp3 {
	export class Cache {
		public static class: java.lang.Class<okhttp3.Cache>;
		public close(): void;
		public directory(): java.io.File;
		public constructor(param0: java.io.File, param1: number);
		public static key(param0: okhttp3.HttpUrl): string;
		public writeAbortCount(): number;
		public evictAll(): void;
		public delete(): void;
		public isClosed(): boolean;
		public networkCount(): number;
		public requestCount(): number;
		public flush(): void;
		public initialize(): void;
		public size(): number;
		public writeSuccessCount(): number;
		public hitCount(): number;
		public urls(): java.util.Iterator<string>;
		public maxSize(): number;
	}
	export module Cache {
		export class CacheRequestImpl extends okhttp3.internal.cache.CacheRequest {
			public static class: java.lang.Class<okhttp3.Cache.CacheRequestImpl>;
			public body(): okio.Sink;
			public abort(): void;
		}
		export class CacheResponseBody extends okhttp3.ResponseBody {
			public static class: java.lang.Class<okhttp3.Cache.CacheResponseBody>;
			public contentLength(): number;
			public source(): okio.BufferedSource;
			public contentType(): okhttp3.MediaType;
		}
		export class Entry {
			public static class: java.lang.Class<okhttp3.Cache.Entry>;
			public matches(param0: okhttp3.Request, param1: okhttp3.Response): boolean;
			public response(param0: okhttp3.internal.cache.DiskLruCache.Snapshot): okhttp3.Response;
			public writeTo(param0: okhttp3.internal.cache.DiskLruCache.Editor): void;
		}
	}
}

declare module okhttp3 {
	export class CacheControl {
		public static class: java.lang.Class<okhttp3.CacheControl>;
		public static FORCE_NETWORK: okhttp3.CacheControl;
		public static FORCE_CACHE: okhttp3.CacheControl;
		public maxStaleSeconds(): number;
		public mustRevalidate(): boolean;
		public static parse(param0: okhttp3.Headers): okhttp3.CacheControl;
		public toString(): string;
		public minFreshSeconds(): number;
		public onlyIfCached(): boolean;
		public noCache(): boolean;
		public noTransform(): boolean;
		public isPrivate(): boolean;
		public immutable(): boolean;
		public sMaxAgeSeconds(): number;
		public noStore(): boolean;
		public maxAgeSeconds(): number;
		public isPublic(): boolean;
	}
	export module CacheControl {
		export class Builder {
			public static class: java.lang.Class<okhttp3.CacheControl.Builder>;
			public noCache(): okhttp3.CacheControl.Builder;
			public maxStale(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.CacheControl.Builder;
			public immutable(): okhttp3.CacheControl.Builder;
			public onlyIfCached(): okhttp3.CacheControl.Builder;
			public minFresh(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.CacheControl.Builder;
			public maxAge(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.CacheControl.Builder;
			public constructor();
			public build(): okhttp3.CacheControl;
			public noStore(): okhttp3.CacheControl.Builder;
			public noTransform(): okhttp3.CacheControl.Builder;
		}
	}
}

declare module okhttp3 {
	export class Call {
		public static class: java.lang.Class<okhttp3.Call>;
		/**
		 * Constructs a new instance of the okhttp3.Call interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			request(): okhttp3.Request;
			execute(): okhttp3.Response;
			enqueue(param0: okhttp3.Callback): void;
			cancel(): void;
			isExecuted(): boolean;
			isCanceled(): boolean;
			timeout(): okio.Timeout;
			clone(): okhttp3.Call;
		});
		public constructor();
		public isExecuted(): boolean;
		public clone(): okhttp3.Call;
		public request(): okhttp3.Request;
		public execute(): okhttp3.Response;
		public isCanceled(): boolean;
		public enqueue(param0: okhttp3.Callback): void;
		public cancel(): void;
		public timeout(): okio.Timeout;
	}
	export module Call {
		export class Factory {
			public static class: java.lang.Class<okhttp3.Call.Factory>;
			/**
			 * Constructs a new instance of the okhttp3.Call$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				newCall(param0: okhttp3.Request): okhttp3.Call;
			});
			public constructor();
			public newCall(param0: okhttp3.Request): okhttp3.Call;
		}
	}
}

declare module okhttp3 {
	export class Callback {
		public static class: java.lang.Class<okhttp3.Callback>;
		/**
		 * Constructs a new instance of the okhttp3.Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			onFailure(param0: okhttp3.Call, param1: java.io.IOException): void;
			onResponse(param0: okhttp3.Call, param1: okhttp3.Response): void;
		});
		public constructor();
		public onResponse(param0: okhttp3.Call, param1: okhttp3.Response): void;
		public onFailure(param0: okhttp3.Call, param1: java.io.IOException): void;
	}
}

declare module okhttp3 {
	export class CertificatePinner {
		public static class: java.lang.Class<okhttp3.CertificatePinner>;
		public static DEFAULT: okhttp3.CertificatePinner;
		public equals(param0: any): boolean;
		public static pin(param0: java.security.cert.Certificate): string;
		public hashCode(): number;
		/** @deprecated */
		public check(param0: string, param1: native.Array<java.security.cert.Certificate>): void;
		public check(param0: string, param1: java.util.List<java.security.cert.Certificate>): void;
	}
	export module CertificatePinner {
		export class Builder {
			public static class: java.lang.Class<okhttp3.CertificatePinner.Builder>;
			public build(): okhttp3.CertificatePinner;
			public add(param0: string, param1: native.Array<string>): okhttp3.CertificatePinner.Builder;
			public constructor();
		}
		export class Pin {
			public static class: java.lang.Class<okhttp3.CertificatePinner.Pin>;
			public equals(param0: any): boolean;
			public toString(): string;
			public hashCode(): number;
		}
	}
}

declare module okhttp3 {
	export class Challenge {
		public static class: java.lang.Class<okhttp3.Challenge>;
		public authParams(): java.util.Map<string,string>;
		public charset(): java.nio.charset.Charset;
		public equals(param0: any): boolean;
		public scheme(): string;
		public hashCode(): number;
		public toString(): string;
		public constructor(param0: string, param1: java.util.Map<string,string>);
		public withCharset(param0: java.nio.charset.Charset): okhttp3.Challenge;
		public constructor(param0: string, param1: string);
		public realm(): string;
	}
}

declare module okhttp3 {
	export class CipherSuite {
		public static class: java.lang.Class<okhttp3.CipherSuite>;
		public static TLS_RSA_WITH_NULL_MD5: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_EXPORT_WITH_RC4_40_MD5: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_RC4_128_MD5: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_EXPORT_WITH_DES40_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_EXPORT_WITH_DES40_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_EXPORT_WITH_DES40_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DH_anon_EXPORT_WITH_RC4_40_MD5: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_RC4_128_MD5: okhttp3.CipherSuite;
		public static TLS_DH_anon_EXPORT_WITH_DES40_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_DES_CBC_MD5: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_3DES_EDE_CBC_MD5: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_RC4_128_MD5: okhttp3.CipherSuite;
		public static TLS_KRB5_EXPORT_WITH_DES_CBC_40_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_EXPORT_WITH_RC4_40_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_EXPORT_WITH_DES_CBC_40_MD5: okhttp3.CipherSuite;
		public static TLS_KRB5_EXPORT_WITH_RC4_40_MD5: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_NULL_SHA256: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_256_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_CAMELLIA_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_256_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_256_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_256_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_CAMELLIA_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_PSK_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_PSK_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_PSK_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_PSK_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_SEED_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_EMPTY_RENEGOTIATION_INFO_SCSV: okhttp3.CipherSuite;
		public static TLS_FALLBACK_SCSV: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_anon_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_anon_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_anon_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_anon_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_anon_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_256_CBC_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_CHACHA20_POLY1305_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_PSK_WITH_CHACHA20_POLY1305_SHA256: okhttp3.CipherSuite;
		public static TLS_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_CHACHA20_POLY1305_SHA256: okhttp3.CipherSuite;
		public static TLS_AES_128_CCM_SHA256: okhttp3.CipherSuite;
		public static TLS_AES_256_CCM_8_SHA256: okhttp3.CipherSuite;
		public javaName(): string;
		public static forJavaName(param0: string): okhttp3.CipherSuite;
		public toString(): string;
	}
}

declare module okhttp3 {
	export class Connection {
		public static class: java.lang.Class<okhttp3.Connection>;
		/**
		 * Constructs a new instance of the okhttp3.Connection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			route(): okhttp3.Route;
			socket(): java.net.Socket;
			handshake(): okhttp3.Handshake;
			protocol(): okhttp3.Protocol;
		});
		public constructor();
		public route(): okhttp3.Route;
		public protocol(): okhttp3.Protocol;
		public handshake(): okhttp3.Handshake;
		public socket(): java.net.Socket;
	}
}

declare module okhttp3 {
	export class ConnectionPool {
		public static class: java.lang.Class<okhttp3.ConnectionPool>;
		public constructor();
		public connectionCount(): number;
		public evictAll(): void;
		public idleConnectionCount(): number;
		public constructor(param0: number, param1: number, param2: java.util.concurrent.TimeUnit);
	}
}

declare module okhttp3 {
	export class ConnectionSpec {
		public static class: java.lang.Class<okhttp3.ConnectionSpec>;
		public static RESTRICTED_TLS: okhttp3.ConnectionSpec;
		public static MODERN_TLS: okhttp3.ConnectionSpec;
		public static COMPATIBLE_TLS: okhttp3.ConnectionSpec;
		public static CLEARTEXT: okhttp3.ConnectionSpec;
		public cipherSuites(): java.util.List<okhttp3.CipherSuite>;
		public equals(param0: any): boolean;
		public tlsVersions(): java.util.List<okhttp3.TlsVersion>;
		public supportsTlsExtensions(): boolean;
		public hashCode(): number;
		public isCompatible(param0: javax.net.ssl.SSLSocket): boolean;
		public isTls(): boolean;
		public toString(): string;
	}
	export module ConnectionSpec {
		export class Builder {
			public static class: java.lang.Class<okhttp3.ConnectionSpec.Builder>;
			public tlsVersions(param0: native.Array<string>): okhttp3.ConnectionSpec.Builder;
			public cipherSuites(param0: native.Array<string>): okhttp3.ConnectionSpec.Builder;
			public build(): okhttp3.ConnectionSpec;
			public constructor(param0: okhttp3.ConnectionSpec);
			public cipherSuites(param0: native.Array<okhttp3.CipherSuite>): okhttp3.ConnectionSpec.Builder;
			public supportsTlsExtensions(param0: boolean): okhttp3.ConnectionSpec.Builder;
			public allEnabledCipherSuites(): okhttp3.ConnectionSpec.Builder;
			public tlsVersions(param0: native.Array<okhttp3.TlsVersion>): okhttp3.ConnectionSpec.Builder;
			public allEnabledTlsVersions(): okhttp3.ConnectionSpec.Builder;
		}
	}
}

declare module okhttp3 {
	export class Cookie {
		public static class: java.lang.Class<okhttp3.Cookie>;
		public domain(): string;
		public equals(param0: any): boolean;
		public matches(param0: okhttp3.HttpUrl): boolean;
		public static parseAll(param0: okhttp3.HttpUrl, param1: okhttp3.Headers): java.util.List<okhttp3.Cookie>;
		public toString(): string;
		public persistent(): boolean;
		public httpOnly(): boolean;
		public static parse(param0: okhttp3.HttpUrl, param1: string): okhttp3.Cookie;
		public hostOnly(): boolean;
		public expiresAt(): number;
		public hashCode(): number;
		public name(): string;
		public path(): string;
		public secure(): boolean;
		public value(): string;
	}
	export module Cookie {
		export class Builder {
			public static class: java.lang.Class<okhttp3.Cookie.Builder>;
			public domain(param0: string): okhttp3.Cookie.Builder;
			public hostOnlyDomain(param0: string): okhttp3.Cookie.Builder;
			public value(param0: string): okhttp3.Cookie.Builder;
			public httpOnly(): okhttp3.Cookie.Builder;
			public secure(): okhttp3.Cookie.Builder;
			public expiresAt(param0: number): okhttp3.Cookie.Builder;
			public build(): okhttp3.Cookie;
			public name(param0: string): okhttp3.Cookie.Builder;
			public constructor();
			public path(param0: string): okhttp3.Cookie.Builder;
		}
	}
}

declare module okhttp3 {
	export class CookieJar {
		public static class: java.lang.Class<okhttp3.CookieJar>;
		/**
		 * Constructs a new instance of the okhttp3.CookieJar interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			saveFromResponse(param0: okhttp3.HttpUrl, param1: java.util.List<okhttp3.Cookie>): void;
			loadForRequest(param0: okhttp3.HttpUrl): java.util.List<okhttp3.Cookie>;
			<clinit>(): void;
		});
		public constructor();
		public static NO_COOKIES: okhttp3.CookieJar;
		public loadForRequest(param0: okhttp3.HttpUrl): java.util.List<okhttp3.Cookie>;
		public saveFromResponse(param0: okhttp3.HttpUrl, param1: java.util.List<okhttp3.Cookie>): void;
	}
}

declare module okhttp3 {
	export class Credentials {
		public static class: java.lang.Class<okhttp3.Credentials>;
		public static basic(param0: string, param1: string, param2: java.nio.charset.Charset): string;
		public static basic(param0: string, param1: string): string;
	}
}

declare module okhttp3 {
	export class Dispatcher {
		public static class: java.lang.Class<okhttp3.Dispatcher>;
		public constructor();
		public setMaxRequestsPerHost(param0: number): void;
		public constructor(param0: java.util.concurrent.ExecutorService);
		public queuedCallsCount(): number;
		public runningCallsCount(): number;
		public runningCalls(): java.util.List<okhttp3.Call>;
		public cancelAll(): void;
		public queuedCalls(): java.util.List<okhttp3.Call>;
		public setMaxRequests(param0: number): void;
		public getMaxRequestsPerHost(): number;
		public executorService(): java.util.concurrent.ExecutorService;
		public setIdleCallback(param0: java.lang.Runnable): void;
		public getMaxRequests(): number;
	}
}

declare module okhttp3 {
	export class Dns {
		public static class: java.lang.Class<okhttp3.Dns>;
		/**
		 * Constructs a new instance of the okhttp3.Dns interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			lookup(param0: string): java.util.List<java.net.InetAddress>;
			<clinit>(): void;
		});
		public constructor();
		public static SYSTEM: okhttp3.Dns;
		public lookup(param0: string): java.util.List<java.net.InetAddress>;
	}
}

declare module okhttp3 {
	export abstract class EventListener {
		public static class: java.lang.Class<okhttp3.EventListener>;
		public static NONE: okhttp3.EventListener;
		public constructor();
		public connectFailed(param0: okhttp3.Call, param1: java.net.InetSocketAddress, param2: java.net.Proxy, param3: okhttp3.Protocol, param4: java.io.IOException): void;
		public callStart(param0: okhttp3.Call): void;
		public connectionReleased(param0: okhttp3.Call, param1: okhttp3.Connection): void;
		public dnsEnd(param0: okhttp3.Call, param1: string, param2: java.util.List<java.net.InetAddress>): void;
		public responseBodyEnd(param0: okhttp3.Call, param1: number): void;
		public callEnd(param0: okhttp3.Call): void;
		public secureConnectStart(param0: okhttp3.Call): void;
		public responseHeadersEnd(param0: okhttp3.Call, param1: okhttp3.Response): void;
		public secureConnectEnd(param0: okhttp3.Call, param1: okhttp3.Handshake): void;
		public dnsStart(param0: okhttp3.Call, param1: string): void;
		public connectionAcquired(param0: okhttp3.Call, param1: okhttp3.Connection): void;
		public connectEnd(param0: okhttp3.Call, param1: java.net.InetSocketAddress, param2: java.net.Proxy, param3: okhttp3.Protocol): void;
		public requestHeadersEnd(param0: okhttp3.Call, param1: okhttp3.Request): void;
		public responseBodyStart(param0: okhttp3.Call): void;
		public connectStart(param0: okhttp3.Call, param1: java.net.InetSocketAddress, param2: java.net.Proxy): void;
		public requestBodyEnd(param0: okhttp3.Call, param1: number): void;
		public callFailed(param0: okhttp3.Call, param1: java.io.IOException): void;
		public requestHeadersStart(param0: okhttp3.Call): void;
		public requestBodyStart(param0: okhttp3.Call): void;
		public responseHeadersStart(param0: okhttp3.Call): void;
	}
	export module EventListener {
		export class Factory {
			public static class: java.lang.Class<okhttp3.EventListener.Factory>;
			/**
			 * Constructs a new instance of the okhttp3.EventListener$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				create(param0: okhttp3.Call): okhttp3.EventListener;
			});
			public constructor();
			public create(param0: okhttp3.Call): okhttp3.EventListener;
		}
	}
}

declare module okhttp3 {
	export class FormBody extends okhttp3.RequestBody {
		public static class: java.lang.Class<okhttp3.FormBody>;
		public value(param0: number): string;
		public encodedValue(param0: number): string;
		public name(param0: number): string;
		public size(): number;
		public encodedName(param0: number): string;
		public contentType(): okhttp3.MediaType;
		public writeTo(param0: okio.BufferedSink): void;
		public contentLength(): number;
	}
	export module FormBody {
		export class Builder {
			public static class: java.lang.Class<okhttp3.FormBody.Builder>;
			public constructor(param0: java.nio.charset.Charset);
			public addEncoded(param0: string, param1: string): okhttp3.FormBody.Builder;
			public constructor();
			public add(param0: string, param1: string): okhttp3.FormBody.Builder;
			public build(): okhttp3.FormBody;
		}
	}
}

declare module okhttp3 {
	export class Handshake {
		public static class: java.lang.Class<okhttp3.Handshake>;
		public equals(param0: any): boolean;
		public static get(param0: javax.net.ssl.SSLSession): okhttp3.Handshake;
		public static get(param0: okhttp3.TlsVersion, param1: okhttp3.CipherSuite, param2: java.util.List<java.security.cert.Certificate>, param3: java.util.List<java.security.cert.Certificate>): okhttp3.Handshake;
		public hashCode(): number;
		public localCertificates(): java.util.List<java.security.cert.Certificate>;
		public localPrincipal(): java.security.Principal;
		public tlsVersion(): okhttp3.TlsVersion;
		public peerCertificates(): java.util.List<java.security.cert.Certificate>;
		public peerPrincipal(): java.security.Principal;
		public cipherSuite(): okhttp3.CipherSuite;
	}
}

declare module okhttp3 {
	export class Headers {
		public static class: java.lang.Class<okhttp3.Headers>;
		public value(param0: number): string;
		public equals(param0: any): boolean;
		public newBuilder(): okhttp3.Headers.Builder;
		public toString(): string;
		public get(param0: string): string;
		public values(param0: string): java.util.List<string>;
		public names(): java.util.Set<string>;
		public static of(param0: java.util.Map<string,string>): okhttp3.Headers;
		public name(param0: number): string;
		public size(): number;
		public hashCode(): number;
		public toMultimap(): java.util.Map<string,java.util.List<string>>;
		public getDate(param0: string): java.util.Date;
		public byteCount(): number;
		public static of(param0: native.Array<string>): okhttp3.Headers;
	}
	export module Headers {
		export class Builder {
			public static class: java.lang.Class<okhttp3.Headers.Builder>;
			public get(param0: string): string;
			public build(): okhttp3.Headers;
			public add(param0: string, param1: string): okhttp3.Headers.Builder;
			public removeAll(param0: string): okhttp3.Headers.Builder;
			public set(param0: string, param1: string): okhttp3.Headers.Builder;
			public set(param0: string, param1: java.util.Date): okhttp3.Headers.Builder;
			public constructor();
			public addAll(param0: okhttp3.Headers): okhttp3.Headers.Builder;
			public add(param0: string): okhttp3.Headers.Builder;
			public addUnsafeNonAscii(param0: string, param1: string): okhttp3.Headers.Builder;
			public add(param0: string, param1: java.util.Date): okhttp3.Headers.Builder;
		}
	}
}

declare module okhttp3 {
	export class HttpUrl {
		public static class: java.lang.Class<okhttp3.HttpUrl>;
		public static get(param0: java.net.URI): okhttp3.HttpUrl;
		public equals(param0: any): boolean;
		public topPrivateDomain(): string;
		public queryParameterName(param0: number): string;
		public static defaultPort(param0: string): number;
		public scheme(): string;
		public queryParameterNames(): java.util.Set<string>;
		public encodedPassword(): string;
		public queryParameter(param0: string): string;
		public query(): string;
		public password(): string;
		public hashCode(): number;
		public static get(param0: string): okhttp3.HttpUrl;
		public resolve(param0: string): okhttp3.HttpUrl;
		public pathSize(): number;
		public isHttps(): boolean;
		public encodedPathSegments(): java.util.List<string>;
		public newBuilder(): okhttp3.HttpUrl.Builder;
		public port(): number;
		public encodedQuery(): string;
		public encodedPath(): string;
		public encodedFragment(): string;
		public redact(): string;
		public fragment(): string;
		public toString(): string;
		public uri(): java.net.URI;
		public queryParameterValue(param0: number): string;
		public encodedUsername(): string;
		public queryParameterValues(param0: string): java.util.List<string>;
		public newBuilder(param0: string): okhttp3.HttpUrl.Builder;
		public host(): string;
		public static get(param0: java.net.URL): okhttp3.HttpUrl;
		public pathSegments(): java.util.List<string>;
		public static parse(param0: string): okhttp3.HttpUrl;
		public url(): java.net.URL;
		public querySize(): number;
		public username(): string;
	}
	export module HttpUrl {
		export class Builder {
			public static class: java.lang.Class<okhttp3.HttpUrl.Builder>;
			public addPathSegment(param0: string): okhttp3.HttpUrl.Builder;
			public addEncodedPathSegment(param0: string): okhttp3.HttpUrl.Builder;
			public setEncodedQueryParameter(param0: string, param1: string): okhttp3.HttpUrl.Builder;
			public setQueryParameter(param0: string, param1: string): okhttp3.HttpUrl.Builder;
			public encodedFragment(param0: string): okhttp3.HttpUrl.Builder;
			public username(param0: string): okhttp3.HttpUrl.Builder;
			public addPathSegments(param0: string): okhttp3.HttpUrl.Builder;
			public encodedPath(param0: string): okhttp3.HttpUrl.Builder;
			public encodedPassword(param0: string): okhttp3.HttpUrl.Builder;
			public addEncodedPathSegments(param0: string): okhttp3.HttpUrl.Builder;
			public encodedQuery(param0: string): okhttp3.HttpUrl.Builder;
			public host(param0: string): okhttp3.HttpUrl.Builder;
			public removeAllEncodedQueryParameters(param0: string): okhttp3.HttpUrl.Builder;
			public setEncodedPathSegment(param0: number, param1: string): okhttp3.HttpUrl.Builder;
			public constructor();
			public encodedUsername(param0: string): okhttp3.HttpUrl.Builder;
			public password(param0: string): okhttp3.HttpUrl.Builder;
			public port(param0: number): okhttp3.HttpUrl.Builder;
			public toString(): string;
			public addQueryParameter(param0: string, param1: string): okhttp3.HttpUrl.Builder;
			public addEncodedQueryParameter(param0: string, param1: string): okhttp3.HttpUrl.Builder;
			public query(param0: string): okhttp3.HttpUrl.Builder;
			public setPathSegment(param0: number, param1: string): okhttp3.HttpUrl.Builder;
			public removeAllQueryParameters(param0: string): okhttp3.HttpUrl.Builder;
			public scheme(param0: string): okhttp3.HttpUrl.Builder;
			public removePathSegment(param0: number): okhttp3.HttpUrl.Builder;
			public fragment(param0: string): okhttp3.HttpUrl.Builder;
			public build(): okhttp3.HttpUrl;
		}
	}
}

declare module okhttp3 {
	export class Interceptor {
		public static class: java.lang.Class<okhttp3.Interceptor>;
		/**
		 * Constructs a new instance of the okhttp3.Interceptor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
		});
		public constructor();
		public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
	}
	export module Interceptor {
		export class Chain {
			public static class: java.lang.Class<okhttp3.Interceptor.Chain>;
			/**
			 * Constructs a new instance of the okhttp3.Interceptor$Chain interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				request(): okhttp3.Request;
				proceed(param0: okhttp3.Request): okhttp3.Response;
				connection(): okhttp3.Connection;
				call(): okhttp3.Call;
				connectTimeoutMillis(): number;
				withConnectTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
				readTimeoutMillis(): number;
				withReadTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
				writeTimeoutMillis(): number;
				withWriteTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
			});
			public constructor();
			public request(): okhttp3.Request;
			public withConnectTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
			public call(): okhttp3.Call;
			public withWriteTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
			public readTimeoutMillis(): number;
			public withReadTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
			public proceed(param0: okhttp3.Request): okhttp3.Response;
			public connection(): okhttp3.Connection;
			public connectTimeoutMillis(): number;
			public writeTimeoutMillis(): number;
		}
	}
}

declare module okhttp3 {
	export class MediaType {
		public static class: java.lang.Class<okhttp3.MediaType>;
		public type(): string;
		public charset(): java.nio.charset.Charset;
		public equals(param0: any): boolean;
		public subtype(): string;
		public static get(param0: string): okhttp3.MediaType;
		public charset(param0: java.nio.charset.Charset): java.nio.charset.Charset;
		public hashCode(): number;
		public static parse(param0: string): okhttp3.MediaType;
		public toString(): string;
	}
}

declare module okhttp3 {
	export class MultipartBody extends okhttp3.RequestBody {
		public static class: java.lang.Class<okhttp3.MultipartBody>;
		public static MIXED: okhttp3.MediaType;
		public static ALTERNATIVE: okhttp3.MediaType;
		public static DIGEST: okhttp3.MediaType;
		public static PARALLEL: okhttp3.MediaType;
		public static FORM: okhttp3.MediaType;
		public boundary(): string;
		public size(): number;
		public parts(): java.util.List<okhttp3.MultipartBody.Part>;
		public type(): okhttp3.MediaType;
		public contentType(): okhttp3.MediaType;
		public writeTo(param0: okio.BufferedSink): void;
		public part(param0: number): okhttp3.MultipartBody.Part;
		public contentLength(): number;
	}
	export module MultipartBody {
		export class Builder {
			public static class: java.lang.Class<okhttp3.MultipartBody.Builder>;
			public setType(param0: okhttp3.MediaType): okhttp3.MultipartBody.Builder;
			public addPart(param0: okhttp3.MultipartBody.Part): okhttp3.MultipartBody.Builder;
			public build(): okhttp3.MultipartBody;
			public addPart(param0: okhttp3.Headers, param1: okhttp3.RequestBody): okhttp3.MultipartBody.Builder;
			public addPart(param0: okhttp3.RequestBody): okhttp3.MultipartBody.Builder;
			public constructor();
			public addFormDataPart(param0: string, param1: string): okhttp3.MultipartBody.Builder;
			public addFormDataPart(param0: string, param1: string, param2: okhttp3.RequestBody): okhttp3.MultipartBody.Builder;
			public constructor(param0: string);
		}
		export class Part {
			public static class: java.lang.Class<okhttp3.MultipartBody.Part>;
			public headers(): okhttp3.Headers;
			public static create(param0: okhttp3.Headers, param1: okhttp3.RequestBody): okhttp3.MultipartBody.Part;
			public static createFormData(param0: string, param1: string, param2: okhttp3.RequestBody): okhttp3.MultipartBody.Part;
			public static create(param0: okhttp3.RequestBody): okhttp3.MultipartBody.Part;
			public static createFormData(param0: string, param1: string): okhttp3.MultipartBody.Part;
			public body(): okhttp3.RequestBody;
		}
	}
}

declare module okhttp3 {
	export class OkHttpClient implements okhttp3.Call.Factory, okhttp3.WebSocket.Factory {
		public static class: java.lang.Class<okhttp3.OkHttpClient>;
		public proxy(): java.net.Proxy;
		public sslSocketFactory(): javax.net.ssl.SSLSocketFactory;
		public connectionPool(): okhttp3.ConnectionPool;
		public cache(): okhttp3.Cache;
		public certificatePinner(): okhttp3.CertificatePinner;
		public dispatcher(): okhttp3.Dispatcher;
		public protocols(): java.util.List<okhttp3.Protocol>;
		public dns(): okhttp3.Dns;
		public proxyAuthenticator(): okhttp3.Authenticator;
		public callTimeoutMillis(): number;
		public hostnameVerifier(): javax.net.ssl.HostnameVerifier;
		public connectTimeoutMillis(): number;
		public pingIntervalMillis(): number;
		public cookieJar(): okhttp3.CookieJar;
		public connectionSpecs(): java.util.List<okhttp3.ConnectionSpec>;
		public newBuilder(): okhttp3.OkHttpClient.Builder;
		public constructor();
		public proxySelector(): java.net.ProxySelector;
		public readTimeoutMillis(): number;
		public authenticator(): okhttp3.Authenticator;
		public followRedirects(): boolean;
		public interceptors(): java.util.List<okhttp3.Interceptor>;
		public writeTimeoutMillis(): number;
		public newWebSocket(param0: okhttp3.Request, param1: okhttp3.WebSocketListener): okhttp3.WebSocket;
		public followSslRedirects(): boolean;
		public socketFactory(): javax.net.SocketFactory;
		public retryOnConnectionFailure(): boolean;
		public networkInterceptors(): java.util.List<okhttp3.Interceptor>;
		public eventListenerFactory(): okhttp3.EventListener.Factory;
		public newCall(param0: okhttp3.Request): okhttp3.Call;
	}
	export module OkHttpClient {
		export class Builder {
			public static class: java.lang.Class<okhttp3.OkHttpClient.Builder>;
			public protocols(param0: java.util.List<okhttp3.Protocol>): okhttp3.OkHttpClient.Builder;
			public addInterceptor(param0: okhttp3.Interceptor): okhttp3.OkHttpClient.Builder;
			public connectionPool(param0: okhttp3.ConnectionPool): okhttp3.OkHttpClient.Builder;
			public interceptors(): java.util.List<okhttp3.Interceptor>;
			public readTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public callTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public dns(param0: okhttp3.Dns): okhttp3.OkHttpClient.Builder;
			public writeTimeout(param0: java.time.Duration): okhttp3.OkHttpClient.Builder;
			public readTimeout(param0: java.time.Duration): okhttp3.OkHttpClient.Builder;
			public pingInterval(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public eventListenerFactory(param0: okhttp3.EventListener.Factory): okhttp3.OkHttpClient.Builder;
			public connectionSpecs(param0: java.util.List<okhttp3.ConnectionSpec>): okhttp3.OkHttpClient.Builder;
			public build(): okhttp3.OkHttpClient;
			public eventListener(param0: okhttp3.EventListener): okhttp3.OkHttpClient.Builder;
			public proxyAuthenticator(param0: okhttp3.Authenticator): okhttp3.OkHttpClient.Builder;
			public followRedirects(param0: boolean): okhttp3.OkHttpClient.Builder;
			public networkInterceptors(): java.util.List<okhttp3.Interceptor>;
			public cache(param0: okhttp3.Cache): okhttp3.OkHttpClient.Builder;
			public sslSocketFactory(param0: javax.net.ssl.SSLSocketFactory, param1: javax.net.ssl.X509TrustManager): okhttp3.OkHttpClient.Builder;
			public callTimeout(param0: java.time.Duration): okhttp3.OkHttpClient.Builder;
			public cookieJar(param0: okhttp3.CookieJar): okhttp3.OkHttpClient.Builder;
			public connectTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public pingInterval(param0: java.time.Duration): okhttp3.OkHttpClient.Builder;
			public followSslRedirects(param0: boolean): okhttp3.OkHttpClient.Builder;
			public constructor();
			public connectTimeout(param0: java.time.Duration): okhttp3.OkHttpClient.Builder;
			public dispatcher(param0: okhttp3.Dispatcher): okhttp3.OkHttpClient.Builder;
			public proxySelector(param0: java.net.ProxySelector): okhttp3.OkHttpClient.Builder;
			public socketFactory(param0: javax.net.SocketFactory): okhttp3.OkHttpClient.Builder;
			public retryOnConnectionFailure(param0: boolean): okhttp3.OkHttpClient.Builder;
			public writeTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public addNetworkInterceptor(param0: okhttp3.Interceptor): okhttp3.OkHttpClient.Builder;
			public hostnameVerifier(param0: javax.net.ssl.HostnameVerifier): okhttp3.OkHttpClient.Builder;
			public authenticator(param0: okhttp3.Authenticator): okhttp3.OkHttpClient.Builder;
			public proxy(param0: java.net.Proxy): okhttp3.OkHttpClient.Builder;
			/** @deprecated */
			public sslSocketFactory(param0: javax.net.ssl.SSLSocketFactory): okhttp3.OkHttpClient.Builder;
			public certificatePinner(param0: okhttp3.CertificatePinner): okhttp3.OkHttpClient.Builder;
		}
	}
}

declare module okhttp3 {
	export class Protocol {
		public static class: java.lang.Class<okhttp3.Protocol>;
		public static HTTP_1_0: okhttp3.Protocol;
		public static HTTP_1_1: okhttp3.Protocol;
		public static SPDY_3: okhttp3.Protocol;
		public static HTTP_2: okhttp3.Protocol;
		public static H2_PRIOR_KNOWLEDGE: okhttp3.Protocol;
		public static QUIC: okhttp3.Protocol;
		public static valueOf(param0: string): okhttp3.Protocol;
		public static get(param0: string): okhttp3.Protocol;
		public static values(): native.Array<okhttp3.Protocol>;
		public toString(): string;
	}
}

declare module okhttp3 {
	export class RealCall extends okhttp3.Call {
		public static class: java.lang.Class<okhttp3.RealCall>;
		public clone(): okhttp3.RealCall;
		public isExecuted(): boolean;
		public clone(): okhttp3.Call;
		public request(): okhttp3.Request;
		public execute(): okhttp3.Response;
		public isCanceled(): boolean;
		public enqueue(param0: okhttp3.Callback): void;
		public cancel(): void;
		public timeout(): okio.Timeout;
	}
	export module RealCall {
		export class AsyncCall extends okhttp3.internal.NamedRunnable {
			public static class: java.lang.Class<okhttp3.RealCall.AsyncCall>;
			public execute(): void;
		}
	}
}

declare module okhttp3 {
	export class Request {
		public static class: java.lang.Class<okhttp3.Request>;
		public header(param0: string): string;
		public headers(): okhttp3.Headers;
		public tag(): any;
		public newBuilder(): okhttp3.Request.Builder;
		public headers(param0: string): java.util.List<string>;
		public url(): okhttp3.HttpUrl;
		public tag(param0: java.lang.Class): any;
		public cacheControl(): okhttp3.CacheControl;
		public method(): string;
		public toString(): string;
		public body(): okhttp3.RequestBody;
		public isHttps(): boolean;
	}
	export module Request {
		export class Builder {
			public static class: java.lang.Class<okhttp3.Request.Builder>;
			public tag(param0: java.lang.Class, param1: any): okhttp3.Request.Builder;
			public url(param0: okhttp3.HttpUrl): okhttp3.Request.Builder;
			public tag(param0: any): okhttp3.Request.Builder;
			public url(param0: java.net.URL): okhttp3.Request.Builder;
			public header(param0: string, param1: string): okhttp3.Request.Builder;
			public headers(param0: okhttp3.Headers): okhttp3.Request.Builder;
			public put(param0: okhttp3.RequestBody): okhttp3.Request.Builder;
			public delete(): okhttp3.Request.Builder;
			public get(): okhttp3.Request.Builder;
			public constructor();
			public addHeader(param0: string, param1: string): okhttp3.Request.Builder;
			public post(param0: okhttp3.RequestBody): okhttp3.Request.Builder;
			public delete(param0: okhttp3.RequestBody): okhttp3.Request.Builder;
			public patch(param0: okhttp3.RequestBody): okhttp3.Request.Builder;
			public build(): okhttp3.Request;
			public method(param0: string, param1: okhttp3.RequestBody): okhttp3.Request.Builder;
			public url(param0: string): okhttp3.Request.Builder;
			public removeHeader(param0: string): okhttp3.Request.Builder;
			public cacheControl(param0: okhttp3.CacheControl): okhttp3.Request.Builder;
			public head(): okhttp3.Request.Builder;
		}
	}
}

declare module okhttp3 {
	export abstract class RequestBody {
		public static class: java.lang.Class<okhttp3.RequestBody>;
		public constructor();
		public static create(param0: okhttp3.MediaType, param1: okio.ByteString): okhttp3.RequestBody;
		public static create(param0: okhttp3.MediaType, param1: java.io.File): okhttp3.RequestBody;
		public static create(param0: okhttp3.MediaType, param1: string): okhttp3.RequestBody;
		public contentType(): okhttp3.MediaType;
		public writeTo(param0: okio.BufferedSink): void;
		public static create(param0: okhttp3.MediaType, param1: native.Array<number>): okhttp3.RequestBody;
		public contentLength(): number;
		public static create(param0: okhttp3.MediaType, param1: native.Array<number>, param2: number, param3: number): okhttp3.RequestBody;
	}
}

declare module okhttp3 {
	export class Response {
		public static class: java.lang.Class<okhttp3.Response>;
		public headers(): okhttp3.Headers;
		public priorResponse(): okhttp3.Response;
		public close(): void;
		public cacheResponse(): okhttp3.Response;
		public sentRequestAtMillis(): number;
		public cacheControl(): okhttp3.CacheControl;
		public toString(): string;
		public handshake(): okhttp3.Handshake;
		public peekBody(param0: number): okhttp3.ResponseBody;
		public isSuccessful(): boolean;
		public header(param0: string): string;
		public header(param0: string, param1: string): string;
		public body(): okhttp3.ResponseBody;
		public networkResponse(): okhttp3.Response;
		public headers(param0: string): java.util.List<string>;
		public newBuilder(): okhttp3.Response.Builder;
		public request(): okhttp3.Request;
		public code(): number;
		public protocol(): okhttp3.Protocol;
		public message(): string;
		public challenges(): java.util.List<okhttp3.Challenge>;
		public receivedResponseAtMillis(): number;
		public isRedirect(): boolean;
	}
	export module Response {
		export class Builder {
			public static class: java.lang.Class<okhttp3.Response.Builder>;
			public cacheResponse(param0: okhttp3.Response): okhttp3.Response.Builder;
			public body(param0: okhttp3.ResponseBody): okhttp3.Response.Builder;
			public message(param0: string): okhttp3.Response.Builder;
			public request(param0: okhttp3.Request): okhttp3.Response.Builder;
			public header(param0: string, param1: string): okhttp3.Response.Builder;
			public headers(param0: okhttp3.Headers): okhttp3.Response.Builder;
			public sentRequestAtMillis(param0: number): okhttp3.Response.Builder;
			public priorResponse(param0: okhttp3.Response): okhttp3.Response.Builder;
			public networkResponse(param0: okhttp3.Response): okhttp3.Response.Builder;
			public constructor();
			public removeHeader(param0: string): okhttp3.Response.Builder;
			public handshake(param0: okhttp3.Handshake): okhttp3.Response.Builder;
			public addHeader(param0: string, param1: string): okhttp3.Response.Builder;
			public code(param0: number): okhttp3.Response.Builder;
			public build(): okhttp3.Response;
			public protocol(param0: okhttp3.Protocol): okhttp3.Response.Builder;
			public receivedResponseAtMillis(param0: number): okhttp3.Response.Builder;
		}
	}
}

declare module okhttp3 {
	export abstract class ResponseBody {
		public static class: java.lang.Class<okhttp3.ResponseBody>;
		public constructor();
		public byteStream(): java.io.InputStream;
		public bytes(): native.Array<number>;
		public static create(param0: okhttp3.MediaType, param1: native.Array<number>): okhttp3.ResponseBody;
		public static create(param0: okhttp3.MediaType, param1: number, param2: okio.BufferedSource): okhttp3.ResponseBody;
		public close(): void;
		public source(): okio.BufferedSource;
		public static create(param0: okhttp3.MediaType, param1: okio.ByteString): okhttp3.ResponseBody;
		public static create(param0: okhttp3.MediaType, param1: string): okhttp3.ResponseBody;
		public charStream(): java.io.Reader;
		public contentType(): okhttp3.MediaType;
		public string(): string;
		public contentLength(): number;
	}
	export module ResponseBody {
		export class BomAwareReader {
			public static class: java.lang.Class<okhttp3.ResponseBody.BomAwareReader>;
			public read(param0: native.Array<string>, param1: number, param2: number): number;
			public close(): void;
		}
	}
}

declare module okhttp3 {
	export class Route {
		public static class: java.lang.Class<okhttp3.Route>;
		public proxy(): java.net.Proxy;
		public constructor(param0: okhttp3.Address, param1: java.net.Proxy, param2: java.net.InetSocketAddress);
		public equals(param0: any): boolean;
		public address(): okhttp3.Address;
		public hashCode(): number;
		public toString(): string;
		public requiresTunnel(): boolean;
		public socketAddress(): java.net.InetSocketAddress;
	}
}

declare module okhttp3 {
	export class TlsVersion {
		public static class: java.lang.Class<okhttp3.TlsVersion>;
		public static TLS_1_3: okhttp3.TlsVersion;
		public static TLS_1_2: okhttp3.TlsVersion;
		public static TLS_1_1: okhttp3.TlsVersion;
		public static TLS_1_0: okhttp3.TlsVersion;
		public static SSL_3_0: okhttp3.TlsVersion;
		public javaName(): string;
		public static values(): native.Array<okhttp3.TlsVersion>;
		public static valueOf(param0: string): okhttp3.TlsVersion;
		public static forJavaName(param0: string): okhttp3.TlsVersion;
	}
}

declare module okhttp3 {
	export class WebSocket {
		public static class: java.lang.Class<okhttp3.WebSocket>;
		/**
		 * Constructs a new instance of the okhttp3.WebSocket interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			request(): okhttp3.Request;
			queueSize(): number;
			send(param0: string): boolean;
			send(param0: okio.ByteString): boolean;
			close(param0: number, param1: string): boolean;
			cancel(): void;
		});
		public constructor();
		public send(param0: string): boolean;
		public send(param0: okio.ByteString): boolean;
		public close(param0: number, param1: string): boolean;
		public request(): okhttp3.Request;
		public queueSize(): number;
		public cancel(): void;
	}
	export module WebSocket {
		export class Factory {
			public static class: java.lang.Class<okhttp3.WebSocket.Factory>;
			/**
			 * Constructs a new instance of the okhttp3.WebSocket$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				newWebSocket(param0: okhttp3.Request, param1: okhttp3.WebSocketListener): okhttp3.WebSocket;
			});
			public constructor();
			public newWebSocket(param0: okhttp3.Request, param1: okhttp3.WebSocketListener): okhttp3.WebSocket;
		}
	}
}

declare module okhttp3 {
	export abstract class WebSocketListener {
		public static class: java.lang.Class<okhttp3.WebSocketListener>;
		public constructor();
		public onClosed(param0: okhttp3.WebSocket, param1: number, param2: string): void;
		public onMessage(param0: okhttp3.WebSocket, param1: okio.ByteString): void;
		public onFailure(param0: okhttp3.WebSocket, param1: java.lang.Throwable, param2: okhttp3.Response): void;
		public onOpen(param0: okhttp3.WebSocket, param1: okhttp3.Response): void;
		public onClosing(param0: okhttp3.WebSocket, param1: number, param2: string): void;
		public onMessage(param0: okhttp3.WebSocket, param1: string): void;
	}
}

declare module okhttp3 {
	export module internal {
		export abstract class Internal {
			public static class: java.lang.Class<okhttp3.internal.Internal>;
			public static instance: okhttp3.internal.Internal;
			public code(param0: okhttp3.Response.Builder): number;
			public addLenient(param0: okhttp3.Headers.Builder, param1: string): void;
			public connectionBecameIdle(param0: okhttp3.ConnectionPool, param1: okhttp3.internal.connection.RealConnection): boolean;
			public setCache(param0: okhttp3.OkHttpClient.Builder, param1: okhttp3.internal.cache.InternalCache): void;
			public equalsNonHost(param0: okhttp3.Address, param1: okhttp3.Address): boolean;
			public isInvalidHttpUrlHost(param0: java.lang.IllegalArgumentException): boolean;
			public newWebSocketCall(param0: okhttp3.OkHttpClient, param1: okhttp3.Request): okhttp3.Call;
			public constructor();
			public apply(param0: okhttp3.ConnectionSpec, param1: javax.net.ssl.SSLSocket, param2: boolean): void;
			public put(param0: okhttp3.ConnectionPool, param1: okhttp3.internal.connection.RealConnection): void;
			public routeDatabase(param0: okhttp3.ConnectionPool): okhttp3.internal.connection.RouteDatabase;
			public static initializeInstanceForTests(): void;
			public addLenient(param0: okhttp3.Headers.Builder, param1: string, param2: string): void;
			public deduplicate(param0: okhttp3.ConnectionPool, param1: okhttp3.Address, param2: okhttp3.internal.connection.StreamAllocation): java.net.Socket;
			public timeoutExit(param0: okhttp3.Call, param1: java.io.IOException): java.io.IOException;
			public get(param0: okhttp3.ConnectionPool, param1: okhttp3.Address, param2: okhttp3.internal.connection.StreamAllocation, param3: okhttp3.Route): okhttp3.internal.connection.RealConnection;
			public streamAllocation(param0: okhttp3.Call): okhttp3.internal.connection.StreamAllocation;
		}
	}
}

declare module okhttp3 {
	export module internal {
		export abstract class NamedRunnable {
			public static class: java.lang.Class<okhttp3.internal.NamedRunnable>;
			public name: string;
			public execute(): void;
			public constructor(param0: string, param1: native.Array<any>);
			public run(): void;
		}
	}
}

declare module okhttp3 {
	export module internal {
		export class Util {
			public static class: java.lang.Class<okhttp3.internal.Util>;
			public static EMPTY_BYTE_ARRAY: native.Array<number>;
			public static EMPTY_STRING_ARRAY: native.Array<string>;
			public static EMPTY_RESPONSE: okhttp3.ResponseBody;
			public static EMPTY_REQUEST: okhttp3.RequestBody;
			public static UTF_8: java.nio.charset.Charset;
			public static ISO_8859_1: java.nio.charset.Charset;
			public static UTC: java.util.TimeZone;
			public static NATURAL_ORDER: java.util.Comparator<string>;
			public static checkOffsetAndCount(param0: number, param1: number, param2: number): void;
			public static verifyAsIpAddress(param0: string): boolean;
			public static equal(param0: any, param1: any): boolean;
			public static bomAwareCharset(param0: okio.BufferedSource, param1: java.nio.charset.Charset): java.nio.charset.Charset;
			public static platformTrustManager(): javax.net.ssl.X509TrustManager;
			public static immutableMap(param0: java.util.Map): java.util.Map;
			public static indexOf(param0: java.util.Comparator<string>, param1: native.Array<string>, param2: string): number;
			public static format(param0: string, param1: native.Array<any>): string;
			public static decodeHexDigit(param0: string): number;
			public static indexOfControlOrNonAscii(param0: string): number;
			public static immutableList(param0: native.Array<any>): java.util.List;
			public static delimiterOffset(param0: string, param1: number, param2: number, param3: string): number;
			public static closeQuietly(param0: java.io.Closeable): void;
			public static hostHeader(param0: okhttp3.HttpUrl, param1: boolean): string;
			public static trimSubstring(param0: string, param1: number, param2: number): string;
			public static closeQuietly(param0: java.net.Socket): void;
			public static assertionError(param0: string, param1: java.lang.Exception): java.lang.AssertionError;
			public static skipTrailingAsciiWhitespace(param0: string, param1: number, param2: number): number;
			public static checkDuration(param0: string, param1: number, param2: java.util.concurrent.TimeUnit): number;
			public static intersect(param0: java.util.Comparator<any>, param1: native.Array<string>, param2: native.Array<string>): native.Array<string>;
			public static canonicalizeHost(param0: string): string;
			public static toHeaders(param0: java.util.List<okhttp3.internal.http2.Header>): okhttp3.Headers;
			public static concat(param0: native.Array<string>, param1: string): native.Array<string>;
			public static addSuppressedIfPossible(param0: java.lang.Throwable, param1: java.lang.Throwable): void;
			public static nonEmptyIntersection(param0: java.util.Comparator<string>, param1: native.Array<string>, param2: native.Array<string>): boolean;
			public static closeQuietly(param0: java.net.ServerSocket): void;
			public static discard(param0: okio.Source, param1: number, param2: java.util.concurrent.TimeUnit): boolean;
			public static threadFactory(param0: string, param1: boolean): java.util.concurrent.ThreadFactory;
			public static skipLeadingAsciiWhitespace(param0: string, param1: number, param2: number): number;
			public static isAndroidGetsocknameError(param0: java.lang.AssertionError): boolean;
			public static skipAll(param0: okio.Source, param1: number, param2: java.util.concurrent.TimeUnit): boolean;
			public static immutableList(param0: java.util.List): java.util.List;
		}
	}
}

declare module okhttp3 {
	export module internal {
		export class Version {
			public static class: java.lang.Class<okhttp3.internal.Version>;
			public static userAgent(): string;
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module annotations {
			export class EverythingIsNonNull {
				public static class: java.lang.Class<okhttp3.internal.annotations.EverythingIsNonNull>;
				/**
				 * Constructs a new instance of the okhttp3.internal.annotations.EverythingIsNonNull interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache {
			export class CacheInterceptor extends okhttp3.Interceptor {
				public static class: java.lang.Class<okhttp3.internal.cache.CacheInterceptor>;
				public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
				public constructor(param0: okhttp3.internal.cache.InternalCache);
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache {
			export class CacheRequest {
				public static class: java.lang.Class<okhttp3.internal.cache.CacheRequest>;
				/**
				 * Constructs a new instance of the okhttp3.internal.cache.CacheRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					body(): okio.Sink;
					abort(): void;
				});
				public constructor();
				public abort(): void;
				public body(): okio.Sink;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache {
			export class CacheStrategy {
				public static class: java.lang.Class<okhttp3.internal.cache.CacheStrategy>;
				public networkRequest: okhttp3.Request;
				public cacheResponse: okhttp3.Response;
				public static isCacheable(param0: okhttp3.Response, param1: okhttp3.Request): boolean;
			}
			export module CacheStrategy {
				export class Factory {
					public static class: java.lang.Class<okhttp3.internal.cache.CacheStrategy.Factory>;
					public constructor(param0: number, param1: okhttp3.Request, param2: okhttp3.Response);
					public get(): okhttp3.internal.cache.CacheStrategy;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache {
			export class DiskLruCache {
				public static class: java.lang.Class<okhttp3.internal.cache.DiskLruCache>;
				public remove(param0: string): boolean;
				public close(): void;
				public snapshots(): java.util.Iterator<okhttp3.internal.cache.DiskLruCache.Snapshot>;
				public isClosed(): boolean;
				public getDirectory(): java.io.File;
				public static create(param0: okhttp3.internal.io.FileSystem, param1: java.io.File, param2: number, param3: number, param4: number): okhttp3.internal.cache.DiskLruCache;
				public get(param0: string): okhttp3.internal.cache.DiskLruCache.Snapshot;
				public size(): number;
				public flush(): void;
				public setMaxSize(param0: number): void;
				public edit(param0: string): okhttp3.internal.cache.DiskLruCache.Editor;
				public initialize(): void;
				public delete(): void;
				public getMaxSize(): number;
				public evictAll(): void;
			}
			export module DiskLruCache {
				export class Editor {
					public static class: java.lang.Class<okhttp3.internal.cache.DiskLruCache.Editor>;
					public newSource(param0: number): okio.Source;
					public commit(): void;
					public newSink(param0: number): okio.Sink;
					public abortUnlessCommitted(): void;
					public abort(): void;
				}
				export class Entry {
					public static class: java.lang.Class<okhttp3.internal.cache.DiskLruCache.Entry>;
				}
				export class Snapshot {
					public static class: java.lang.Class<okhttp3.internal.cache.DiskLruCache.Snapshot>;
					public close(): void;
					public key(): string;
					public getLength(param0: number): number;
					public edit(): okhttp3.internal.cache.DiskLruCache.Editor;
					public getSource(param0: number): okio.Source;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache {
			export class FaultHidingSink {
				public static class: java.lang.Class<okhttp3.internal.cache.FaultHidingSink>;
				public close(): void;
				public write(param0: okio.Buffer, param1: number): void;
				public flush(): void;
				public onException(param0: java.io.IOException): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache {
			export class InternalCache {
				public static class: java.lang.Class<okhttp3.internal.cache.InternalCache>;
				/**
				 * Constructs a new instance of the okhttp3.internal.cache.InternalCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					get(param0: okhttp3.Request): okhttp3.Response;
					put(param0: okhttp3.Response): okhttp3.internal.cache.CacheRequest;
					remove(param0: okhttp3.Request): void;
					update(param0: okhttp3.Response, param1: okhttp3.Response): void;
					trackConditionalCacheHit(): void;
					trackResponse(param0: okhttp3.internal.cache.CacheStrategy): void;
				});
				public constructor();
				public put(param0: okhttp3.Response): okhttp3.internal.cache.CacheRequest;
				public get(param0: okhttp3.Request): okhttp3.Response;
				public remove(param0: okhttp3.Request): void;
				public update(param0: okhttp3.Response, param1: okhttp3.Response): void;
				public trackConditionalCacheHit(): void;
				public trackResponse(param0: okhttp3.internal.cache.CacheStrategy): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache2 {
			export class FileOperator {
				public static class: java.lang.Class<okhttp3.internal.cache2.FileOperator>;
				public write(param0: number, param1: okio.Buffer, param2: number): void;
				public read(param0: number, param1: okio.Buffer, param2: number): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache2 {
			export class Relay {
				public static class: java.lang.Class<okhttp3.internal.cache2.Relay>;
				public newSource(): okio.Source;
				public metadata(): okio.ByteString;
				public static edit(param0: java.io.File, param1: okio.Source, param2: okio.ByteString, param3: number): okhttp3.internal.cache2.Relay;
				public static read(param0: java.io.File): okhttp3.internal.cache2.Relay;
			}
			export module Relay {
				export class RelaySource {
					public static class: java.lang.Class<okhttp3.internal.cache2.Relay.RelaySource>;
					public close(): void;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class ConnectInterceptor extends okhttp3.Interceptor {
				public static class: java.lang.Class<okhttp3.internal.connection.ConnectInterceptor>;
				public client: okhttp3.OkHttpClient;
				public constructor(param0: okhttp3.OkHttpClient);
				public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class ConnectionSpecSelector {
				public static class: java.lang.Class<okhttp3.internal.connection.ConnectionSpecSelector>;
				public constructor(param0: java.util.List<okhttp3.ConnectionSpec>);
				public configureSecureSocket(param0: javax.net.ssl.SSLSocket): okhttp3.ConnectionSpec;
				public connectionFailed(param0: java.io.IOException): boolean;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class RealConnection extends okhttp3.internal.http2.Http2Connection.Listener implements okhttp3.Connection {
				public static class: java.lang.Class<okhttp3.internal.connection.RealConnection>;
				public noNewStreams: boolean;
				public successCount: number;
				public allocationLimit: number;
				public allocations: java.util.List<java.lang.ref.Reference<okhttp3.internal.connection.StreamAllocation>>;
				public idleAtNanos: number;
				public onSettings(param0: okhttp3.internal.http2.Http2Connection): void;
				public connect(param0: number, param1: number, param2: number, param3: number, param4: boolean, param5: okhttp3.Call, param6: okhttp3.EventListener): void;
				public isEligible(param0: okhttp3.Address, param1: okhttp3.Route): boolean;
				public protocol(): okhttp3.Protocol;
				public route(): okhttp3.Route;
				public toString(): string;
				public socket(): java.net.Socket;
				public onStream(param0: okhttp3.internal.http2.Http2Stream): void;
				public constructor();
				public constructor(param0: okhttp3.ConnectionPool, param1: okhttp3.Route);
				public isHealthy(param0: boolean): boolean;
				public supportsUrl(param0: okhttp3.HttpUrl): boolean;
				public newWebSocketStreams(param0: okhttp3.internal.connection.StreamAllocation): okhttp3.internal.ws.RealWebSocket.Streams;
				public cancel(): void;
				public isMultiplexed(): boolean;
				public static testConnection(param0: okhttp3.ConnectionPool, param1: okhttp3.Route, param2: java.net.Socket, param3: number): okhttp3.internal.connection.RealConnection;
				public handshake(): okhttp3.Handshake;
				public newCodec(param0: okhttp3.OkHttpClient, param1: okhttp3.Interceptor.Chain, param2: okhttp3.internal.connection.StreamAllocation): okhttp3.internal.http.HttpCodec;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class RouteDatabase {
				public static class: java.lang.Class<okhttp3.internal.connection.RouteDatabase>;
				public shouldPostpone(param0: okhttp3.Route): boolean;
				public connected(param0: okhttp3.Route): void;
				public failed(param0: okhttp3.Route): void;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class RouteException {
				public static class: java.lang.Class<okhttp3.internal.connection.RouteException>;
				public getLastConnectException(): java.io.IOException;
				public constructor(param0: java.io.IOException);
				public addConnectException(param0: java.io.IOException): void;
				public getFirstConnectException(): java.io.IOException;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class RouteSelector {
				public static class: java.lang.Class<okhttp3.internal.connection.RouteSelector>;
				public next(): okhttp3.internal.connection.RouteSelector.Selection;
				public constructor(param0: okhttp3.Address, param1: okhttp3.internal.connection.RouteDatabase, param2: okhttp3.Call, param3: okhttp3.EventListener);
				public hasNext(): boolean;
				public connectFailed(param0: okhttp3.Route, param1: java.io.IOException): void;
			}
			export module RouteSelector {
				export class Selection {
					public static class: java.lang.Class<okhttp3.internal.connection.RouteSelector.Selection>;
					public getAll(): java.util.List<okhttp3.Route>;
					public next(): okhttp3.Route;
					public hasNext(): boolean;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class StreamAllocation {
				public static class: java.lang.Class<okhttp3.internal.connection.StreamAllocation>;
				public address: okhttp3.Address;
				public call: okhttp3.Call;
				public eventListener: okhttp3.EventListener;
				public streamFinished(param0: boolean, param1: okhttp3.internal.http.HttpCodec, param2: number, param3: java.io.IOException): void;
				public release(): void;
				public codec(): okhttp3.internal.http.HttpCodec;
				public route(): okhttp3.Route;
				public toString(): string;
				public newStream(param0: okhttp3.OkHttpClient, param1: okhttp3.Interceptor.Chain, param2: boolean): okhttp3.internal.http.HttpCodec;
				public releaseAndAcquire(param0: okhttp3.internal.connection.RealConnection): java.net.Socket;
				public noNewStreams(): void;
				public acquire(param0: okhttp3.internal.connection.RealConnection, param1: boolean): void;
				public cancel(): void;
				public connection(): okhttp3.internal.connection.RealConnection;
				public hasMoreRoutes(): boolean;
				public constructor(param0: okhttp3.ConnectionPool, param1: okhttp3.Address, param2: okhttp3.Call, param3: okhttp3.EventListener, param4: any);
				public streamFailed(param0: java.io.IOException): void;
			}
			export module StreamAllocation {
				export class StreamAllocationReference extends java.lang.ref.WeakReference<okhttp3.internal.connection.StreamAllocation> {
					public static class: java.lang.Class<okhttp3.internal.connection.StreamAllocation.StreamAllocationReference>;
					public callStackTrace: any;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class BridgeInterceptor extends okhttp3.Interceptor {
				public static class: java.lang.Class<okhttp3.internal.http.BridgeInterceptor>;
				public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
				public constructor(param0: okhttp3.CookieJar);
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class CallServerInterceptor extends okhttp3.Interceptor {
				public static class: java.lang.Class<okhttp3.internal.http.CallServerInterceptor>;
				public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
				public constructor(param0: boolean);
			}
			export module CallServerInterceptor {
				export class CountingSink {
					public static class: java.lang.Class<okhttp3.internal.http.CallServerInterceptor.CountingSink>;
					public write(param0: okio.Buffer, param1: number): void;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class HttpCodec {
				public static class: java.lang.Class<okhttp3.internal.http.HttpCodec>;
				/**
				 * Constructs a new instance of the okhttp3.internal.http.HttpCodec interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					createRequestBody(param0: okhttp3.Request, param1: number): okio.Sink;
					writeRequestHeaders(param0: okhttp3.Request): void;
					flushRequest(): void;
					finishRequest(): void;
					readResponseHeaders(param0: boolean): okhttp3.Response.Builder;
					openResponseBody(param0: okhttp3.Response): okhttp3.ResponseBody;
					cancel(): void;
				});
				public constructor();
				public static DISCARD_STREAM_TIMEOUT_MILLIS: number;
				public finishRequest(): void;
				public openResponseBody(param0: okhttp3.Response): okhttp3.ResponseBody;
				public readResponseHeaders(param0: boolean): okhttp3.Response.Builder;
				public cancel(): void;
				public flushRequest(): void;
				public createRequestBody(param0: okhttp3.Request, param1: number): okio.Sink;
				public writeRequestHeaders(param0: okhttp3.Request): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class HttpDate {
				public static class: java.lang.Class<okhttp3.internal.http.HttpDate>;
				public static MAX_DATE: number;
				public static parse(param0: string): java.util.Date;
				public static format(param0: java.util.Date): string;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class HttpHeaders {
				public static class: java.lang.Class<okhttp3.internal.http.HttpHeaders>;
				public static varyHeaders(param0: okhttp3.Headers, param1: okhttp3.Headers): okhttp3.Headers;
				public static hasBody(param0: okhttp3.Response): boolean;
				public static receiveHeaders(param0: okhttp3.CookieJar, param1: okhttp3.HttpUrl, param2: okhttp3.Headers): void;
				public static varyHeaders(param0: okhttp3.Response): okhttp3.Headers;
				public static varyMatches(param0: okhttp3.Response, param1: okhttp3.Headers, param2: okhttp3.Request): boolean;
				public static skipWhitespace(param0: string, param1: number): number;
				public static hasVaryAll(param0: okhttp3.Headers): boolean;
				public static contentLength(param0: okhttp3.Response): number;
				public static hasVaryAll(param0: okhttp3.Response): boolean;
				public static skipUntil(param0: string, param1: number, param2: string): number;
				public static varyFields(param0: okhttp3.Headers): java.util.Set<string>;
				public static contentLength(param0: okhttp3.Headers): number;
				public static parseChallenges(param0: okhttp3.Headers, param1: string): java.util.List<okhttp3.Challenge>;
				public static parseSeconds(param0: string, param1: number): number;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class HttpMethod {
				public static class: java.lang.Class<okhttp3.internal.http.HttpMethod>;
				public static invalidatesCache(param0: string): boolean;
				public static requiresRequestBody(param0: string): boolean;
				public static permitsRequestBody(param0: string): boolean;
				public static redirectsWithBody(param0: string): boolean;
				public static redirectsToGet(param0: string): boolean;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class RealInterceptorChain extends okhttp3.Interceptor.Chain {
				public static class: java.lang.Class<okhttp3.internal.http.RealInterceptorChain>;
				public request(): okhttp3.Request;
				public httpStream(): okhttp3.internal.http.HttpCodec;
				public connectTimeoutMillis(): number;
				public constructor(param0: java.util.List<okhttp3.Interceptor>, param1: okhttp3.internal.connection.StreamAllocation, param2: okhttp3.internal.http.HttpCodec, param3: okhttp3.internal.connection.RealConnection, param4: number, param5: okhttp3.Request, param6: okhttp3.Call, param7: okhttp3.EventListener, param8: number, param9: number, param10: number);
				public proceed(param0: okhttp3.Request, param1: okhttp3.internal.connection.StreamAllocation, param2: okhttp3.internal.http.HttpCodec, param3: okhttp3.internal.connection.RealConnection): okhttp3.Response;
				public withWriteTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
				public connection(): okhttp3.Connection;
				public writeTimeoutMillis(): number;
				public readTimeoutMillis(): number;
				public call(): okhttp3.Call;
				public withConnectTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
				public proceed(param0: okhttp3.Request): okhttp3.Response;
				public eventListener(): okhttp3.EventListener;
				public withReadTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
				public streamAllocation(): okhttp3.internal.connection.StreamAllocation;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class RealResponseBody extends okhttp3.ResponseBody {
				public static class: java.lang.Class<okhttp3.internal.http.RealResponseBody>;
				public contentLength(): number;
				public constructor(param0: string, param1: number, param2: okio.BufferedSource);
				public source(): okio.BufferedSource;
				public contentType(): okhttp3.MediaType;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class RequestLine {
				public static class: java.lang.Class<okhttp3.internal.http.RequestLine>;
				public static requestPath(param0: okhttp3.HttpUrl): string;
				public static get(param0: okhttp3.Request, param1: java.net.Proxy.Type): string;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class RetryAndFollowUpInterceptor extends okhttp3.Interceptor {
				public static class: java.lang.Class<okhttp3.internal.http.RetryAndFollowUpInterceptor>;
				public isCanceled(): boolean;
				public setCallStackTrace(param0: any): void;
				public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
				public constructor(param0: okhttp3.OkHttpClient, param1: boolean);
				public cancel(): void;
				public streamAllocation(): okhttp3.internal.connection.StreamAllocation;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class StatusLine {
				public static class: java.lang.Class<okhttp3.internal.http.StatusLine>;
				public static HTTP_TEMP_REDIRECT: number;
				public static HTTP_PERM_REDIRECT: number;
				public static HTTP_CONTINUE: number;
				public protocol: okhttp3.Protocol;
				public code: number;
				public message: string;
				public constructor(param0: okhttp3.Protocol, param1: number, param2: string);
				public static parse(param0: string): okhttp3.internal.http.StatusLine;
				public toString(): string;
				public static get(param0: okhttp3.Response): okhttp3.internal.http.StatusLine;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class UnrepeatableRequestBody {
				public static class: java.lang.Class<okhttp3.internal.http.UnrepeatableRequestBody>;
				/**
				 * Constructs a new instance of the okhttp3.internal.http.UnrepeatableRequestBody interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http1 {
			export class Http1Codec extends okhttp3.internal.http.HttpCodec {
				public static class: java.lang.Class<okhttp3.internal.http1.Http1Codec>;
				public finishRequest(): void;
				public newFixedLengthSink(param0: number): okio.Sink;
				public newChunkedSink(): okio.Sink;
				public constructor(param0: okhttp3.OkHttpClient, param1: okhttp3.internal.connection.StreamAllocation, param2: okio.BufferedSource, param3: okio.BufferedSink);
				public isClosed(): boolean;
				public readResponseHeaders(param0: boolean): okhttp3.Response.Builder;
				public writeRequestHeaders(param0: okhttp3.Request): void;
				public writeRequest(param0: okhttp3.Headers, param1: string): void;
				public openResponseBody(param0: okhttp3.Response): okhttp3.ResponseBody;
				public newUnknownLengthSource(): okio.Source;
				public readHeaders(): okhttp3.Headers;
				public newChunkedSource(param0: okhttp3.HttpUrl): okio.Source;
				public cancel(): void;
				public flushRequest(): void;
				public createRequestBody(param0: okhttp3.Request, param1: number): okio.Sink;
				public newFixedLengthSource(param0: number): okio.Source;
			}
			export module Http1Codec {
				export abstract class AbstractSource {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1Codec.AbstractSource>;
					public closed: boolean;
					public bytesRead: number;
					public endOfInput(param0: boolean, param1: java.io.IOException): void;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
				}
				export class ChunkedSink {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1Codec.ChunkedSink>;
					public close(): void;
					public flush(): void;
					public write(param0: okio.Buffer, param1: number): void;
					public timeout(): okio.Timeout;
				}
				export class ChunkedSource extends okhttp3.internal.http1.Http1Codec.AbstractSource {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1Codec.ChunkedSource>;
					public close(): void;
					public read(param0: okio.Buffer, param1: number): number;
				}
				export class FixedLengthSink {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1Codec.FixedLengthSink>;
					public close(): void;
					public flush(): void;
					public write(param0: okio.Buffer, param1: number): void;
					public timeout(): okio.Timeout;
				}
				export class FixedLengthSource extends okhttp3.internal.http1.Http1Codec.AbstractSource {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1Codec.FixedLengthSource>;
					public close(): void;
					public read(param0: okio.Buffer, param1: number): number;
				}
				export class UnknownLengthSource extends okhttp3.internal.http1.Http1Codec.AbstractSource {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1Codec.UnknownLengthSource>;
					public close(): void;
					public read(param0: okio.Buffer, param1: number): number;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class ConnectionShutdownException {
				public static class: java.lang.Class<okhttp3.internal.http2.ConnectionShutdownException>;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class ErrorCode {
				public static class: java.lang.Class<okhttp3.internal.http2.ErrorCode>;
				public static NO_ERROR: okhttp3.internal.http2.ErrorCode;
				public static PROTOCOL_ERROR: okhttp3.internal.http2.ErrorCode;
				public static INTERNAL_ERROR: okhttp3.internal.http2.ErrorCode;
				public static FLOW_CONTROL_ERROR: okhttp3.internal.http2.ErrorCode;
				public static REFUSED_STREAM: okhttp3.internal.http2.ErrorCode;
				public static CANCEL: okhttp3.internal.http2.ErrorCode;
				public static COMPRESSION_ERROR: okhttp3.internal.http2.ErrorCode;
				public static CONNECT_ERROR: okhttp3.internal.http2.ErrorCode;
				public static ENHANCE_YOUR_CALM: okhttp3.internal.http2.ErrorCode;
				public static INADEQUATE_SECURITY: okhttp3.internal.http2.ErrorCode;
				public static HTTP_1_1_REQUIRED: okhttp3.internal.http2.ErrorCode;
				public httpCode: number;
				public static valueOf(param0: string): okhttp3.internal.http2.ErrorCode;
				public static fromHttp2(param0: number): okhttp3.internal.http2.ErrorCode;
				public static values(): native.Array<okhttp3.internal.http2.ErrorCode>;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Header {
				public static class: java.lang.Class<okhttp3.internal.http2.Header>;
				public static PSEUDO_PREFIX: okio.ByteString;
				public static RESPONSE_STATUS_UTF8: string;
				public static TARGET_METHOD_UTF8: string;
				public static TARGET_PATH_UTF8: string;
				public static TARGET_SCHEME_UTF8: string;
				public static TARGET_AUTHORITY_UTF8: string;
				public static RESPONSE_STATUS: okio.ByteString;
				public static TARGET_METHOD: okio.ByteString;
				public static TARGET_PATH: okio.ByteString;
				public static TARGET_SCHEME: okio.ByteString;
				public static TARGET_AUTHORITY: okio.ByteString;
				public name: okio.ByteString;
				public value: okio.ByteString;
				public constructor(param0: okio.ByteString, param1: okio.ByteString);
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: okio.ByteString, param1: string);
				public toString(): string;
				public constructor(param0: string, param1: string);
			}
			export module Header {
				export class Listener {
					public static class: java.lang.Class<okhttp3.internal.http2.Header.Listener>;
					/**
					 * Constructs a new instance of the okhttp3.internal.http2.Header$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onHeaders(param0: okhttp3.Headers): void;
					});
					public constructor();
					public onHeaders(param0: okhttp3.Headers): void;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Hpack {
				public static class: java.lang.Class<okhttp3.internal.http2.Hpack>;
			}
			export module Hpack {
				export class Reader {
					public static class: java.lang.Class<okhttp3.internal.http2.Hpack.Reader>;
					public getAndResetHeaderList(): java.util.List<okhttp3.internal.http2.Header>;
				}
				export class Writer {
					public static class: java.lang.Class<okhttp3.internal.http2.Hpack.Writer>;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2 {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2>;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2Codec extends okhttp3.internal.http.HttpCodec {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2Codec>;
				public finishRequest(): void;
				public static readHttp2HeadersList(param0: okhttp3.Headers, param1: okhttp3.Protocol): okhttp3.Response.Builder;
				public openResponseBody(param0: okhttp3.Response): okhttp3.ResponseBody;
				public readResponseHeaders(param0: boolean): okhttp3.Response.Builder;
				public cancel(): void;
				public constructor(param0: okhttp3.OkHttpClient, param1: okhttp3.Interceptor.Chain, param2: okhttp3.internal.connection.StreamAllocation, param3: okhttp3.internal.http2.Http2Connection);
				public flushRequest(): void;
				public createRequestBody(param0: okhttp3.Request, param1: number): okio.Sink;
				public writeRequestHeaders(param0: okhttp3.Request): void;
				public static http2HeadersList(param0: okhttp3.Request): java.util.List<okhttp3.internal.http2.Header>;
			}
			export module Http2Codec {
				export class StreamFinishingSource {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Codec.StreamFinishingSource>;
					public close(): void;
					public read(param0: okio.Buffer, param1: number): number;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2Connection {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection>;
				public maxConcurrentStreams(): number;
				public pushStream(param0: number, param1: java.util.List<okhttp3.internal.http2.Header>, param2: boolean): okhttp3.internal.http2.Http2Stream;
				public writeData(param0: number, param1: boolean, param2: okio.Buffer, param3: number): void;
				public close(): void;
				public start(): void;
				public newStream(param0: java.util.List<okhttp3.internal.http2.Header>, param1: boolean): okhttp3.internal.http2.Http2Stream;
				public openStreamCount(): number;
				public shutdown(param0: okhttp3.internal.http2.ErrorCode): void;
				public setSettings(param0: okhttp3.internal.http2.Settings): void;
				public isHealthy(param0: number): boolean;
				public getProtocol(): okhttp3.Protocol;
				public flush(): void;
			}
			export module Http2Connection {
				export class Builder {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.Builder>;
					public constructor(param0: boolean);
					public listener(param0: okhttp3.internal.http2.Http2Connection.Listener): okhttp3.internal.http2.Http2Connection.Builder;
					public pingIntervalMillis(param0: number): okhttp3.internal.http2.Http2Connection.Builder;
					public build(): okhttp3.internal.http2.Http2Connection;
					public socket(param0: java.net.Socket, param1: string, param2: okio.BufferedSource, param3: okio.BufferedSink): okhttp3.internal.http2.Http2Connection.Builder;
					public socket(param0: java.net.Socket): okhttp3.internal.http2.Http2Connection.Builder;
					public pushObserver(param0: okhttp3.internal.http2.PushObserver): okhttp3.internal.http2.Http2Connection.Builder;
				}
				export class IntervalPingRunnable extends okhttp3.internal.NamedRunnable {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.IntervalPingRunnable>;
					public execute(): void;
				}
				export abstract class Listener {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.Listener>;
					public static REFUSE_INCOMING_STREAMS: okhttp3.internal.http2.Http2Connection.Listener;
					public onStream(param0: okhttp3.internal.http2.Http2Stream): void;
					public constructor();
					public onSettings(param0: okhttp3.internal.http2.Http2Connection): void;
				}
				export class PingRunnable extends okhttp3.internal.NamedRunnable {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.PingRunnable>;
					public execute(): void;
				}
				export class ReaderRunnable extends okhttp3.internal.NamedRunnable implements okhttp3.internal.http2.Http2Reader.Handler {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.ReaderRunnable>;
					public settings(param0: boolean, param1: okhttp3.internal.http2.Settings): void;
					public alternateService(param0: number, param1: string, param2: okio.ByteString, param3: string, param4: number, param5: number): void;
					public ackSettings(): void;
					public data(param0: boolean, param1: number, param2: okio.BufferedSource, param3: number): void;
					public headers(param0: boolean, param1: number, param2: number, param3: java.util.List<okhttp3.internal.http2.Header>): void;
					public priority(param0: number, param1: number, param2: number, param3: boolean): void;
					public execute(): void;
					public pushPromise(param0: number, param1: number, param2: java.util.List<okhttp3.internal.http2.Header>): void;
					public rstStream(param0: number, param1: okhttp3.internal.http2.ErrorCode): void;
					public goAway(param0: number, param1: okhttp3.internal.http2.ErrorCode, param2: okio.ByteString): void;
					public windowUpdate(param0: number, param1: number): void;
					public ping(param0: boolean, param1: number, param2: number): void;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2Reader {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2Reader>;
				public close(): void;
				public nextFrame(param0: boolean, param1: okhttp3.internal.http2.Http2Reader.Handler): boolean;
				public readConnectionPreface(param0: okhttp3.internal.http2.Http2Reader.Handler): void;
			}
			export module Http2Reader {
				export class ContinuationSource {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Reader.ContinuationSource>;
					public close(): void;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
				}
				export class Handler {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Reader.Handler>;
					/**
					 * Constructs a new instance of the okhttp3.internal.http2.Http2Reader$Handler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						data(param0: boolean, param1: number, param2: okio.BufferedSource, param3: number): void;
						headers(param0: boolean, param1: number, param2: number, param3: java.util.List<okhttp3.internal.http2.Header>): void;
						rstStream(param0: number, param1: okhttp3.internal.http2.ErrorCode): void;
						settings(param0: boolean, param1: okhttp3.internal.http2.Settings): void;
						ackSettings(): void;
						ping(param0: boolean, param1: number, param2: number): void;
						goAway(param0: number, param1: okhttp3.internal.http2.ErrorCode, param2: okio.ByteString): void;
						windowUpdate(param0: number, param1: number): void;
						priority(param0: number, param1: number, param2: number, param3: boolean): void;
						pushPromise(param0: number, param1: number, param2: java.util.List<okhttp3.internal.http2.Header>): void;
						alternateService(param0: number, param1: string, param2: okio.ByteString, param3: string, param4: number, param5: number): void;
					});
					public constructor();
					public settings(param0: boolean, param1: okhttp3.internal.http2.Settings): void;
					public alternateService(param0: number, param1: string, param2: okio.ByteString, param3: string, param4: number, param5: number): void;
					public ackSettings(): void;
					public data(param0: boolean, param1: number, param2: okio.BufferedSource, param3: number): void;
					public headers(param0: boolean, param1: number, param2: number, param3: java.util.List<okhttp3.internal.http2.Header>): void;
					public priority(param0: number, param1: number, param2: number, param3: boolean): void;
					public pushPromise(param0: number, param1: number, param2: java.util.List<okhttp3.internal.http2.Header>): void;
					public rstStream(param0: number, param1: okhttp3.internal.http2.ErrorCode): void;
					public goAway(param0: number, param1: okhttp3.internal.http2.ErrorCode, param2: okio.ByteString): void;
					public windowUpdate(param0: number, param1: number): void;
					public ping(param0: boolean, param1: number, param2: number): void;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2Stream {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2Stream>;
				public getSource(): okio.Source;
				public close(param0: okhttp3.internal.http2.ErrorCode): void;
				public closeLater(param0: okhttp3.internal.http2.ErrorCode): void;
				public writeTimeout(): okio.Timeout;
				public getId(): number;
				public writeHeaders(param0: java.util.List<okhttp3.internal.http2.Header>, param1: boolean): void;
				public getErrorCode(): okhttp3.internal.http2.ErrorCode;
				public takeHeaders(): okhttp3.Headers;
				public getConnection(): okhttp3.internal.http2.Http2Connection;
				public isOpen(): boolean;
				public readTimeout(): okio.Timeout;
				public getSink(): okio.Sink;
				public isLocallyInitiated(): boolean;
				public setHeadersListener(param0: okhttp3.internal.http2.Header.Listener): void;
			}
			export module Http2Stream {
				export class FramingSink {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Stream.FramingSink>;
					public close(): void;
					public flush(): void;
					public write(param0: okio.Buffer, param1: number): void;
					public timeout(): okio.Timeout;
				}
				export class FramingSource {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Stream.FramingSource>;
					public close(): void;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
				}
				export class StreamTimeout {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Stream.StreamTimeout>;
					public timedOut(): void;
					public newTimeoutException(param0: java.io.IOException): java.io.IOException;
					public exitAndThrowIfTimedOut(): void;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2Writer {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2Writer>;
				public headers(param0: number, param1: java.util.List<okhttp3.internal.http2.Header>): void;
				public close(): void;
				public synStream(param0: boolean, param1: number, param2: number, param3: java.util.List<okhttp3.internal.http2.Header>): void;
				public settings(param0: okhttp3.internal.http2.Settings): void;
				public ping(param0: boolean, param1: number, param2: number): void;
				public windowUpdate(param0: number, param1: number): void;
				public frameHeader(param0: number, param1: number, param2: number, param3: number): void;
				public maxDataLength(): number;
				public goAway(param0: number, param1: okhttp3.internal.http2.ErrorCode, param2: native.Array<number>): void;
				public flush(): void;
				public connectionPreface(): void;
				public pushPromise(param0: number, param1: number, param2: java.util.List<okhttp3.internal.http2.Header>): void;
				public data(param0: boolean, param1: number, param2: okio.Buffer, param3: number): void;
				public rstStream(param0: number, param1: okhttp3.internal.http2.ErrorCode): void;
				public synReply(param0: boolean, param1: number, param2: java.util.List<okhttp3.internal.http2.Header>): void;
				public applyAndAckSettings(param0: okhttp3.internal.http2.Settings): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Huffman {
				public static class: java.lang.Class<okhttp3.internal.http2.Huffman>;
				public static get(): okhttp3.internal.http2.Huffman;
			}
			export module Huffman {
				export class Node {
					public static class: java.lang.Class<okhttp3.internal.http2.Huffman.Node>;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class PushObserver {
				public static class: java.lang.Class<okhttp3.internal.http2.PushObserver>;
				/**
				 * Constructs a new instance of the okhttp3.internal.http2.PushObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onRequest(param0: number, param1: java.util.List<okhttp3.internal.http2.Header>): boolean;
					onHeaders(param0: number, param1: java.util.List<okhttp3.internal.http2.Header>, param2: boolean): boolean;
					onData(param0: number, param1: okio.BufferedSource, param2: number, param3: boolean): boolean;
					onReset(param0: number, param1: okhttp3.internal.http2.ErrorCode): void;
					<clinit>(): void;
				});
				public constructor();
				public static CANCEL: okhttp3.internal.http2.PushObserver;
				public onRequest(param0: number, param1: java.util.List<okhttp3.internal.http2.Header>): boolean;
				public onHeaders(param0: number, param1: java.util.List<okhttp3.internal.http2.Header>, param2: boolean): boolean;
				public onData(param0: number, param1: okio.BufferedSource, param2: number, param3: boolean): boolean;
				public onReset(param0: number, param1: okhttp3.internal.http2.ErrorCode): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Settings {
				public static class: java.lang.Class<okhttp3.internal.http2.Settings>;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class StreamResetException {
				public static class: java.lang.Class<okhttp3.internal.http2.StreamResetException>;
				public errorCode: okhttp3.internal.http2.ErrorCode;
				public constructor(param0: okhttp3.internal.http2.ErrorCode);
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module io {
			export class FileSystem {
				public static class: java.lang.Class<okhttp3.internal.io.FileSystem>;
				/**
				 * Constructs a new instance of the okhttp3.internal.io.FileSystem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					source(param0: java.io.File): okio.Source;
					sink(param0: java.io.File): okio.Sink;
					appendingSink(param0: java.io.File): okio.Sink;
					delete(param0: java.io.File): void;
					exists(param0: java.io.File): boolean;
					size(param0: java.io.File): number;
					rename(param0: java.io.File, param1: java.io.File): void;
					deleteContents(param0: java.io.File): void;
					<clinit>(): void;
				});
				public constructor();
				public static SYSTEM: okhttp3.internal.io.FileSystem;
				public source(param0: java.io.File): okio.Source;
				public size(param0: java.io.File): number;
				public deleteContents(param0: java.io.File): void;
				public appendingSink(param0: java.io.File): okio.Sink;
				public sink(param0: java.io.File): okio.Sink;
				public exists(param0: java.io.File): boolean;
				public rename(param0: java.io.File, param1: java.io.File): void;
				public delete(param0: java.io.File): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class Android10Platform extends okhttp3.internal.platform.AndroidPlatform {
				public static class: java.lang.Class<okhttp3.internal.platform.Android10Platform>;
				public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
				public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<okhttp3.Protocol>): void;
				public static buildIfSupported(): okhttp3.internal.platform.Platform;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class AndroidPlatform extends okhttp3.internal.platform.Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.AndroidPlatform>;
				public connectSocket(param0: java.net.Socket, param1: java.net.InetSocketAddress, param2: number): void;
				public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<okhttp3.Protocol>): void;
				public log(param0: number, param1: string, param2: java.lang.Throwable): void;
				public logCloseableLeak(param0: string, param1: any): void;
				public buildTrustRootIndex(param0: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.TrustRootIndex;
				public isCleartextTrafficPermitted(param0: string): boolean;
				public buildCertificateChainCleaner(param0: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.CertificateChainCleaner;
				public buildCertificateChainCleaner(param0: javax.net.ssl.SSLSocketFactory): okhttp3.internal.tls.CertificateChainCleaner;
				public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
				public trustManager(param0: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
				public getStackTraceForCloseable(param0: string): any;
				public static buildIfSupported(): okhttp3.internal.platform.Platform;
				public getSSLContext(): javax.net.ssl.SSLContext;
			}
			export module AndroidPlatform {
				export class AndroidCertificateChainCleaner extends okhttp3.internal.tls.CertificateChainCleaner {
					public static class: java.lang.Class<okhttp3.internal.platform.AndroidPlatform.AndroidCertificateChainCleaner>;
					public equals(param0: any): boolean;
					public clean(param0: java.util.List<java.security.cert.Certificate>, param1: string): java.util.List<java.security.cert.Certificate>;
					public hashCode(): number;
				}
				export class AndroidTrustRootIndex extends okhttp3.internal.tls.TrustRootIndex {
					public static class: java.lang.Class<okhttp3.internal.platform.AndroidPlatform.AndroidTrustRootIndex>;
					public equals(param0: any): boolean;
					public findByIssuerAndSignature(param0: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
					public hashCode(): number;
				}
				export class CloseGuard {
					public static class: java.lang.Class<okhttp3.internal.platform.AndroidPlatform.CloseGuard>;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class ConscryptPlatform extends okhttp3.internal.platform.Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.ConscryptPlatform>;
				public static buildIfSupported(): okhttp3.internal.platform.ConscryptPlatform;
				public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
				public trustManager(param0: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
				public configureSslSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
				public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<okhttp3.Protocol>): void;
				public getSSLContext(): javax.net.ssl.SSLContext;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class Jdk9Platform extends okhttp3.internal.platform.Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.Jdk9Platform>;
				public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
				public trustManager(param0: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
				public static buildIfSupported(): okhttp3.internal.platform.Jdk9Platform;
				public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<okhttp3.Protocol>): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class JdkWithJettyBootPlatform extends okhttp3.internal.platform.Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.JdkWithJettyBootPlatform>;
				public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
				public afterHandshake(param0: javax.net.ssl.SSLSocket): void;
				public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<okhttp3.Protocol>): void;
				public static buildIfSupported(): okhttp3.internal.platform.Platform;
			}
			export module JdkWithJettyBootPlatform {
				export class JettyNegoProvider {
					public static class: java.lang.Class<okhttp3.internal.platform.JdkWithJettyBootPlatform.JettyNegoProvider>;
					public invoke(param0: any, param1: java.lang.reflect.Method, param2: native.Array<any>): any;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class OptionalMethod<T>  extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.platform.OptionalMethod<any>>;
				public invokeOptional(param0: T, param1: native.Array<any>): any;
				public invokeOptionalWithoutCheckedException(param0: T, param1: native.Array<any>): any;
				public isSupported(param0: T): boolean;
				public invoke(param0: T, param1: native.Array<any>): any;
				public invokeWithoutCheckedException(param0: T, param1: native.Array<any>): any;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.Platform>;
				public static INFO: number;
				public static WARN: number;
				public getPrefix(): string;
				public connectSocket(param0: java.net.Socket, param1: java.net.InetSocketAddress, param2: number): void;
				public configureSslSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
				public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<okhttp3.Protocol>): void;
				public static isConscryptPreferred(): boolean;
				public log(param0: number, param1: string, param2: java.lang.Throwable): void;
				public logCloseableLeak(param0: string, param1: any): void;
				public buildTrustRootIndex(param0: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.TrustRootIndex;
				public toString(): string;
				public isCleartextTrafficPermitted(param0: string): boolean;
				public constructor();
				public buildCertificateChainCleaner(param0: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.CertificateChainCleaner;
				public buildCertificateChainCleaner(param0: javax.net.ssl.SSLSocketFactory): okhttp3.internal.tls.CertificateChainCleaner;
				public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
				public trustManager(param0: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
				public afterHandshake(param0: javax.net.ssl.SSLSocket): void;
				public static get(): okhttp3.internal.platform.Platform;
				public getStackTraceForCloseable(param0: string): any;
				public static alpnProtocolNames(param0: java.util.List<okhttp3.Protocol>): java.util.List<string>;
				public getSSLContext(): javax.net.ssl.SSLContext;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module proxy {
			export class NullProxySelector {
				public static class: java.lang.Class<okhttp3.internal.proxy.NullProxySelector>;
				public select(param0: java.net.URI): java.util.List<java.net.Proxy>;
				public connectFailed(param0: java.net.URI, param1: java.net.SocketAddress, param2: java.io.IOException): void;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module publicsuffix {
			export class PublicSuffixDatabase {
				public static class: java.lang.Class<okhttp3.internal.publicsuffix.PublicSuffixDatabase>;
				public static PUBLIC_SUFFIX_RESOURCE: string;
				public static get(): okhttp3.internal.publicsuffix.PublicSuffixDatabase;
				public getEffectiveTldPlusOne(param0: string): string;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export class BasicCertificateChainCleaner extends okhttp3.internal.tls.CertificateChainCleaner {
				public static class: java.lang.Class<okhttp3.internal.tls.BasicCertificateChainCleaner>;
				public clean(param0: java.util.List<java.security.cert.Certificate>, param1: string): java.util.List<java.security.cert.Certificate>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: okhttp3.internal.tls.TrustRootIndex);
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export class BasicTrustRootIndex extends okhttp3.internal.tls.TrustRootIndex {
				public static class: java.lang.Class<okhttp3.internal.tls.BasicTrustRootIndex>;
				public constructor(param0: native.Array<java.security.cert.X509Certificate>);
				public hashCode(): number;
				public equals(param0: any): boolean;
				public findByIssuerAndSignature(param0: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export abstract class CertificateChainCleaner {
				public static class: java.lang.Class<okhttp3.internal.tls.CertificateChainCleaner>;
				public static get(param0: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.CertificateChainCleaner;
				public clean(param0: java.util.List<java.security.cert.Certificate>, param1: string): java.util.List<java.security.cert.Certificate>;
				public static get(param0: native.Array<java.security.cert.X509Certificate>): okhttp3.internal.tls.CertificateChainCleaner;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export class DistinguishedNameParser {
				public static class: java.lang.Class<okhttp3.internal.tls.DistinguishedNameParser>;
				public findMostSpecific(param0: string): string;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export class OkHostnameVerifier {
				public static class: java.lang.Class<okhttp3.internal.tls.OkHostnameVerifier>;
				public static INSTANCE: okhttp3.internal.tls.OkHostnameVerifier;
				public verify(param0: string, param1: javax.net.ssl.SSLSession): boolean;
				public verifyHostname(param0: string, param1: string): boolean;
				public static allSubjectAltNames(param0: java.security.cert.X509Certificate): java.util.List<string>;
				public verify(param0: string, param1: java.security.cert.X509Certificate): boolean;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export class TrustRootIndex {
				public static class: java.lang.Class<okhttp3.internal.tls.TrustRootIndex>;
				/**
				 * Constructs a new instance of the okhttp3.internal.tls.TrustRootIndex interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					findByIssuerAndSignature(param0: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
				});
				public constructor();
				public findByIssuerAndSignature(param0: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module ws {
			export class RealWebSocket implements okhttp3.WebSocket, okhttp3.internal.ws.WebSocketReader.FrameCallback {
				public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket>;
				public constructor(param0: okhttp3.Request, param1: okhttp3.WebSocketListener, param2: java.util.Random, param3: number);
				public request(): okhttp3.Request;
				public send(param0: string): boolean;
				public onReadPong(param0: okio.ByteString): void;
				public onReadPing(param0: okio.ByteString): void;
				public initReaderAndWriter(param0: string, param1: okhttp3.internal.ws.RealWebSocket.Streams): void;
				public queueSize(): number;
				public close(param0: number, param1: string): boolean;
				public loopReader(): void;
				public send(param0: okio.ByteString): boolean;
				public onReadMessage(param0: okio.ByteString): void;
				public failWebSocket(param0: java.lang.Exception, param1: okhttp3.Response): void;
				public cancel(): void;
				public connect(param0: okhttp3.OkHttpClient): void;
				public onReadClose(param0: number, param1: string): void;
				public onReadMessage(param0: string): void;
			}
			export module RealWebSocket {
				export class CancelRunnable {
					public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.CancelRunnable>;
					public run(): void;
				}
				export class Close {
					public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.Close>;
				}
				export class Message {
					public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.Message>;
				}
				export class PingRunnable {
					public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.PingRunnable>;
					public run(): void;
				}
				export abstract class Streams {
					public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.Streams>;
					public client: boolean;
					public source: okio.BufferedSource;
					public sink: okio.BufferedSink;
					public constructor(param0: boolean, param1: okio.BufferedSource, param2: okio.BufferedSink);
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module ws {
			export class WebSocketProtocol {
				public static class: java.lang.Class<okhttp3.internal.ws.WebSocketProtocol>;
				public static acceptHeader(param0: string): string;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module ws {
			export class WebSocketReader {
				public static class: java.lang.Class<okhttp3.internal.ws.WebSocketReader>;
			}
			export module WebSocketReader {
				export class FrameCallback {
					public static class: java.lang.Class<okhttp3.internal.ws.WebSocketReader.FrameCallback>;
					/**
					 * Constructs a new instance of the okhttp3.internal.ws.WebSocketReader$FrameCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onReadMessage(param0: string): void;
						onReadMessage(param0: okio.ByteString): void;
						onReadPing(param0: okio.ByteString): void;
						onReadPong(param0: okio.ByteString): void;
						onReadClose(param0: number, param1: string): void;
					});
					public constructor();
					public onReadClose(param0: number, param1: string): void;
					public onReadMessage(param0: string): void;
					public onReadMessage(param0: okio.ByteString): void;
					public onReadPing(param0: okio.ByteString): void;
					public onReadPong(param0: okio.ByteString): void;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module ws {
			export class WebSocketWriter {
				public static class: java.lang.Class<okhttp3.internal.ws.WebSocketWriter>;
			}
			export module WebSocketWriter {
				export class FrameSink {
					public static class: java.lang.Class<okhttp3.internal.ws.WebSocketWriter.FrameSink>;
					public close(): void;
					public flush(): void;
					public write(param0: okio.Buffer, param1: number): void;
					public timeout(): okio.Timeout;
				}
			}
		}
	}
}

declare module org {
	export module nativescript {
		export module nativescript_okhttp_threaded {
			export class BuildConfig {
				public static class: java.lang.Class<org.nativescript.nativescript_okhttp_threaded.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
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

declare module okio {
	export class ByteString extends java.lang.Object {
		public static class: java.lang.Class<okio.ByteString>;
		public static EMPTY: okio.ByteString;
		public static Companion: okio.ByteString.Companion;
		public static of(param0: native.Array<number>): okio.ByteString;
		public base64(): string;
		public equals(param0: any): boolean;
		public static encodeString(param0: string, param1: java.nio.charset.Charset): okio.ByteString;
		public base64Url(): string;
		public getHashCode$okio(): number;
		public asByteBuffer(): java.nio.ByteBuffer;
		public setHashCode$okio(param0: number): void;
		public lastIndexOf(param0: okio.ByteString, param1: number): number;
		/** @deprecated */
		public deprecated_getByte(param0: number): number;
		public compareTo(param0: okio.ByteString): number;
		public constructor(param0: native.Array<number>);
		public indexOf(param0: native.Array<number>): number;
		public startsWith(param0: native.Array<number>): boolean;
		public toString(): string;
		public string(param0: java.nio.charset.Charset): string;
		public md5(): okio.ByteString;
		public static encodeUtf8(param0: string): okio.ByteString;
		public startsWith(param0: okio.ByteString): boolean;
		public endsWith(param0: okio.ByteString): boolean;
		public endsWith(param0: native.Array<number>): boolean;
		public toAsciiLowercase(): okio.ByteString;
		public sha1(): okio.ByteString;
		public internalArray$okio(): native.Array<number>;
		public write(param0: java.io.OutputStream): void;
		public lastIndexOf(param0: native.Array<number>, param1: number): number;
		public substring(param0: number, param1: number): okio.ByteString;
		public indexOf(param0: okio.ByteString, param1: number): number;
		/** @deprecated */
		public deprecated_size(): number;
		public substring(param0: number): okio.ByteString;
		public substring(): okio.ByteString;
		public hmacSha512(param0: okio.ByteString): okio.ByteString;
		public hmacSha1(param0: okio.ByteString): okio.ByteString;
		public setUtf8$okio(param0: string): void;
		public static read(param0: java.io.InputStream, param1: number): okio.ByteString;
		public sha512(): okio.ByteString;
		public size(): number;
		public lastIndexOf(param0: native.Array<number>): number;
		public hex(): string;
		public hashCode(): number;
		public toAsciiUppercase(): okio.ByteString;
		public getSize$okio(): number;
		public indexOf(param0: native.Array<number>, param1: number): number;
		public static decodeBase64(param0: string): okio.ByteString;
		public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
		public lastIndexOf(param0: okio.ByteString): number;
		public digest$okio(param0: string): okio.ByteString;
		public internalGet$okio(param0: number): number;
		public static decodeHex(param0: string): okio.ByteString;
		public getUtf8$okio(): string;
		public sha256(): okio.ByteString;
		public getByte(param0: number): number;
		public static of(param0: java.nio.ByteBuffer): okio.ByteString;
		public hmac$okio(param0: string, param1: okio.ByteString): okio.ByteString;
		public write$okio(param0: okio.Buffer, param1: number, param2: number): void;
		public rangeEquals(param0: number, param1: native.Array<number>, param2: number, param3: number): boolean;
		public static of(param0: native.Array<number>, param1: number, param2: number): okio.ByteString;
		public utf8(): string;
		public getData$okio(): native.Array<number>;
		public toByteArray(): native.Array<number>;
		public hmacSha256(param0: okio.ByteString): okio.ByteString;
		public indexOf(param0: okio.ByteString): number;
	}
	export module ByteString {
		export class Companion {
			public static class: java.lang.Class<okio.ByteString.Companion>;
			/** @deprecated */
			public deprecated_of(param0: java.nio.ByteBuffer): okio.ByteString;
			/** @deprecated */
			public deprecated_decodeHex(param0: string): okio.ByteString;
			/** @deprecated */
			public deprecated_encodeString(param0: string, param1: java.nio.charset.Charset): okio.ByteString;
			/** @deprecated */
			public deprecated_decodeBase64(param0: string): okio.ByteString;
			public encodeString(param0: string, param1: java.nio.charset.Charset): okio.ByteString;
			public decodeBase64(param0: string): okio.ByteString;
			public encodeUtf8(param0: string): okio.ByteString;
			/** @deprecated */
			public deprecated_encodeUtf8(param0: string): okio.ByteString;
			public of(param0: java.nio.ByteBuffer): okio.ByteString;
			public read(param0: java.io.InputStream, param1: number): okio.ByteString;
			public of(param0: native.Array<number>, param1: number, param2: number): okio.ByteString;
			public decodeHex(param0: string): okio.ByteString;
			/** @deprecated */
			public deprecated_read(param0: java.io.InputStream, param1: number): okio.ByteString;
			public of(param0: native.Array<number>): okio.ByteString;
			/** @deprecated */
			public deprecated_of(param0: native.Array<number>, param1: number, param2: number): okio.ByteString;
		}
	}
}

//Generics information:


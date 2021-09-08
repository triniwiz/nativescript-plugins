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
			lambda$static$0(param0: okhttp3.Route, param1: okhttp3.Response): okhttp3.Request;
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
		public static TLS_AES_128_CCM_8_SHA256: okhttp3.CipherSuite;
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
			public allEnabledCipherSuites(): okhttp3.ConnectionSpec.Builder;
			public tlsVersions(param0: native.Array<okhttp3.TlsVersion>): okhttp3.ConnectionSpec.Builder;
			public allEnabledTlsVersions(): okhttp3.ConnectionSpec.Builder;
			/** @deprecated */
			public supportsTlsExtensions(param0: boolean): okhttp3.ConnectionSpec.Builder;
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
			lambda$static$0(param0: string): java.util.List;
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
		public responseFailed(param0: okhttp3.Call, param1: java.io.IOException): void;
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
		public requestFailed(param0: okhttp3.Call, param1: java.io.IOException): void;
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
		public toString(): string;
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
		public getInstant(param0: string): java.time.Instant;
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
			public set(param0: string, param1: java.time.Instant): okhttp3.Headers.Builder;
			public set(param0: string, param1: string): okhttp3.Headers.Builder;
			public constructor();
			public addAll(param0: okhttp3.Headers): okhttp3.Headers.Builder;
			public add(param0: string, param1: string): okhttp3.Headers.Builder;
			public removeAll(param0: string): okhttp3.Headers.Builder;
			public add(param0: string, param1: java.time.Instant): okhttp3.Headers.Builder;
			public set(param0: string, param1: java.util.Date): okhttp3.Headers.Builder;
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
		public isOneShot(): boolean;
		public static create(param0: okhttp3.MediaType, param1: string): okhttp3.RequestBody;
		public contentType(): okhttp3.MediaType;
		public writeTo(param0: okio.BufferedSink): void;
		public static create(param0: okhttp3.MediaType, param1: native.Array<number>): okhttp3.RequestBody;
		public contentLength(): number;
		public isDuplex(): boolean;
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
		public trailers(): okhttp3.Headers;
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
			public initExchange(param0: okhttp3.Response.Builder, param1: okhttp3.internal.connection.Exchange): void;
			public static initializeInstanceForTests(): void;
			public addLenient(param0: okhttp3.Headers.Builder, param1: string, param2: string): void;
			public realConnectionPool(param0: okhttp3.ConnectionPool): okhttp3.internal.connection.RealConnectionPool;
			public equalsNonHost(param0: okhttp3.Address, param1: okhttp3.Address): boolean;
			public exchange(param0: okhttp3.Response): okhttp3.internal.connection.Exchange;
			public newWebSocketCall(param0: okhttp3.OkHttpClient, param1: okhttp3.Request): okhttp3.Call;
			public constructor();
			public apply(param0: okhttp3.ConnectionSpec, param1: javax.net.ssl.SSLSocket, param2: boolean): void;
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
			public static EMPTY_HEADERS: okhttp3.Headers;
			public static EMPTY_RESPONSE: okhttp3.ResponseBody;
			public static EMPTY_REQUEST: okhttp3.RequestBody;
			public static UTC: java.util.TimeZone;
			public static NATURAL_ORDER: java.util.Comparator<string>;
			public static checkOffsetAndCount(param0: number, param1: number, param2: number): void;
			public static verifyAsIpAddress(param0: string): boolean;
			public static bomAwareCharset(param0: okio.BufferedSource, param1: java.nio.charset.Charset): java.nio.charset.Charset;
			public static platformTrustManager(): javax.net.ssl.X509TrustManager;
			public static immutableMap(param0: java.util.Map): java.util.Map;
			public static indexOf(param0: java.util.Comparator<string>, param1: native.Array<string>, param2: string): number;
			public static format(param0: string, param1: native.Array<any>): string;
			public static decodeHexDigit(param0: string): number;
			public static indexOfControlOrNonAscii(param0: string): number;
			public static toHeaderBlock(param0: okhttp3.Headers): java.util.List<okhttp3.internal.http2.Header>;
			public static immutableList(param0: native.Array<any>): java.util.List;
			public static delimiterOffset(param0: string, param1: number, param2: number, param3: string): number;
			public static closeQuietly(param0: java.io.Closeable): void;
			public static hostHeader(param0: okhttp3.HttpUrl, param1: boolean): string;
			public static trimSubstring(param0: string, param1: number, param2: number): string;
			public static closeQuietly(param0: java.net.Socket): void;
			public static skipTrailingAsciiWhitespace(param0: string, param1: number, param2: number): number;
			public static checkDuration(param0: string, param1: number, param2: java.util.concurrent.TimeUnit): number;
			public static intersect(param0: java.util.Comparator<any>, param1: native.Array<string>, param2: native.Array<string>): native.Array<string>;
			public static sameConnection(param0: okhttp3.HttpUrl, param1: okhttp3.HttpUrl): boolean;
			public static canonicalizeHost(param0: string): string;
			public static toHeaders(param0: java.util.List<okhttp3.internal.http2.Header>): okhttp3.Headers;
			public static getSystemProperty(param0: string, param1: string): string;
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
			export class FaultHidingSink extends okio.ForwardingSink {
				public static class: java.lang.Class<okhttp3.internal.cache.FaultHidingSink>;
				public close(): void;
				public timeout(): okio.Timeout;
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
				export class RelaySource extends okio.Source {
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
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class Exchange {
				public static class: java.lang.Class<okhttp3.internal.connection.Exchange>;
				public finishRequest(): void;
				public trailers(): okhttp3.Headers;
				public timeoutEarlyExit(): void;
				public readResponseHeaders(param0: boolean): okhttp3.Response.Builder;
				public newWebSocketStreams(): okhttp3.internal.ws.RealWebSocket.Streams;
				public writeRequestHeaders(param0: okhttp3.Request): void;
				public responseHeadersStart(): void;
				public noRequestBody(): void;
				public detachWithViolence(): void;
				public openResponseBody(param0: okhttp3.Response): okhttp3.ResponseBody;
				public isDuplex(): boolean;
				public constructor(param0: okhttp3.internal.connection.Transmitter, param1: okhttp3.Call, param2: okhttp3.EventListener, param3: okhttp3.internal.connection.ExchangeFinder, param4: okhttp3.internal.http.ExchangeCodec);
				public responseHeadersEnd(param0: okhttp3.Response): void;
				public webSocketUpgradeFailed(): void;
				public createRequestBody(param0: okhttp3.Request, param1: boolean): okio.Sink;
				public cancel(): void;
				public flushRequest(): void;
				public connection(): okhttp3.internal.connection.RealConnection;
				public noNewExchangesOnConnection(): void;
			}
			export module Exchange {
				export class RequestBodySink extends okio.ForwardingSink {
					public static class: java.lang.Class<okhttp3.internal.connection.Exchange.RequestBodySink>;
					public close(): void;
					public flush(): void;
					public write(param0: okio.Buffer, param1: number): void;
					public timeout(): okio.Timeout;
				}
				export class ResponseBodySource extends okio.ForwardingSource {
					public static class: java.lang.Class<okhttp3.internal.connection.Exchange.ResponseBodySource>;
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
			export class ExchangeFinder {
				public static class: java.lang.Class<okhttp3.internal.connection.ExchangeFinder>;
				public find(param0: okhttp3.OkHttpClient, param1: okhttp3.Interceptor.Chain, param2: boolean): okhttp3.internal.http.ExchangeCodec;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class RealConnection extends okhttp3.internal.http2.Http2Connection.Listener implements okhttp3.Connection {
				public static class: java.lang.Class<okhttp3.internal.connection.RealConnection>;
				public connectionPool: okhttp3.internal.connection.RealConnectionPool;
				public constructor(param0: okhttp3.internal.connection.RealConnectionPool, param1: okhttp3.Route);
				public onSettings(param0: okhttp3.internal.http2.Http2Connection): void;
				public connect(param0: number, param1: number, param2: number, param3: number, param4: boolean, param5: okhttp3.Call, param6: okhttp3.EventListener): void;
				public protocol(): okhttp3.Protocol;
				public route(): okhttp3.Route;
				public noNewExchanges(): void;
				public toString(): string;
				public socket(): java.net.Socket;
				public onStream(param0: okhttp3.internal.http2.Http2Stream): void;
				public constructor();
				public isHealthy(param0: boolean): boolean;
				public supportsUrl(param0: okhttp3.HttpUrl): boolean;
				public cancel(): void;
				public isMultiplexed(): boolean;
				public handshake(): okhttp3.Handshake;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class RealConnectionPool {
				public static class: java.lang.Class<okhttp3.internal.connection.RealConnectionPool>;
				public constructor(param0: number, param1: number, param2: java.util.concurrent.TimeUnit);
				public connectionCount(): number;
				public evictAll(): void;
				public idleConnectionCount(): number;
				public connectFailed(param0: okhttp3.Route, param1: java.io.IOException): void;
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
				public hasNext(): boolean;
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
			export class Transmitter {
				public static class: java.lang.Class<okhttp3.internal.connection.Transmitter>;
				public connection: okhttp3.internal.connection.RealConnection;
				public timeout(): okio.Timeout;
				public timeoutEnter(): void;
				public isCanceled(): boolean;
				public timeoutEarlyExit(): void;
				public callStart(): void;
				public exchangeDoneDueToException(): void;
				public noMoreExchanges(param0: java.io.IOException): java.io.IOException;
				public cancel(): void;
				public canRetry(): boolean;
				public prepareToConnect(param0: okhttp3.Request): void;
				public constructor(param0: okhttp3.OkHttpClient, param1: okhttp3.Call);
				public hasExchange(): boolean;
			}
			export module Transmitter {
				export class TransmitterReference extends java.lang.ref.WeakReference<okhttp3.internal.connection.Transmitter> {
					public static class: java.lang.Class<okhttp3.internal.connection.Transmitter.TransmitterReference>;
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
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class ExchangeCodec {
				public static class: java.lang.Class<okhttp3.internal.http.ExchangeCodec>;
				/**
				 * Constructs a new instance of the okhttp3.internal.http.ExchangeCodec interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					connection(): okhttp3.internal.connection.RealConnection;
					createRequestBody(param0: okhttp3.Request, param1: number): okio.Sink;
					writeRequestHeaders(param0: okhttp3.Request): void;
					flushRequest(): void;
					finishRequest(): void;
					readResponseHeaders(param0: boolean): okhttp3.Response.Builder;
					reportedContentLength(param0: okhttp3.Response): number;
					openResponseBodySource(param0: okhttp3.Response): okio.Source;
					trailers(): okhttp3.Headers;
					cancel(): void;
				});
				public constructor();
				public static DISCARD_STREAM_TIMEOUT_MILLIS: number;
				public finishRequest(): void;
				public trailers(): okhttp3.Headers;
				public reportedContentLength(param0: okhttp3.Response): number;
				public openResponseBodySource(param0: okhttp3.Response): okio.Source;
				public readResponseHeaders(param0: boolean): okhttp3.Response.Builder;
				public cancel(): void;
				public flushRequest(): void;
				public connection(): okhttp3.internal.connection.RealConnection;
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
				public exchange(): okhttp3.internal.connection.Exchange;
				public request(): okhttp3.Request;
				public transmitter(): okhttp3.internal.connection.Transmitter;
				public connectTimeoutMillis(): number;
				public proceed(param0: okhttp3.Request, param1: okhttp3.internal.connection.Transmitter, param2: okhttp3.internal.connection.Exchange): okhttp3.Response;
				public withWriteTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
				public constructor(param0: java.util.List<okhttp3.Interceptor>, param1: okhttp3.internal.connection.Transmitter, param2: okhttp3.internal.connection.Exchange, param3: number, param4: okhttp3.Request, param5: okhttp3.Call, param6: number, param7: number, param8: number);
				public connection(): okhttp3.Connection;
				public writeTimeoutMillis(): number;
				public readTimeoutMillis(): number;
				public call(): okhttp3.Call;
				public withConnectTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
				public proceed(param0: okhttp3.Request): okhttp3.Response;
				public withReadTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
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
				public constructor(param0: okhttp3.OkHttpClient);
				public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
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
		export module http1 {
			export class Http1ExchangeCodec extends okhttp3.internal.http.ExchangeCodec {
				public static class: java.lang.Class<okhttp3.internal.http1.Http1ExchangeCodec>;
				public finishRequest(): void;
				public trailers(): okhttp3.Headers;
				public openResponseBodySource(param0: okhttp3.Response): okio.Source;
				public isClosed(): boolean;
				public readResponseHeaders(param0: boolean): okhttp3.Response.Builder;
				public skipConnectBody(param0: okhttp3.Response): void;
				public writeRequestHeaders(param0: okhttp3.Request): void;
				public writeRequest(param0: okhttp3.Headers, param1: string): void;
				public reportedContentLength(param0: okhttp3.Response): number;
				public cancel(): void;
				public flushRequest(): void;
				public constructor(param0: okhttp3.OkHttpClient, param1: okhttp3.internal.connection.RealConnection, param2: okio.BufferedSource, param3: okio.BufferedSink);
				public connection(): okhttp3.internal.connection.RealConnection;
				public createRequestBody(param0: okhttp3.Request, param1: number): okio.Sink;
			}
			export module Http1ExchangeCodec {
				export abstract class AbstractSource extends okio.Source {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1ExchangeCodec.AbstractSource>;
					public closed: boolean;
					public close(): void;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
				}
				export class ChunkedSink extends okio.Sink {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1ExchangeCodec.ChunkedSink>;
					public close(): void;
					public flush(): void;
					public write(param0: okio.Buffer, param1: number): void;
					public timeout(): okio.Timeout;
				}
				export class ChunkedSource extends okhttp3.internal.http1.Http1ExchangeCodec.AbstractSource {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1ExchangeCodec.ChunkedSource>;
					public close(): void;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
				}
				export class FixedLengthSource extends okhttp3.internal.http1.Http1ExchangeCodec.AbstractSource {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1ExchangeCodec.FixedLengthSource>;
					public close(): void;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
				}
				export class KnownLengthSink extends okio.Sink {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1ExchangeCodec.KnownLengthSink>;
					public close(): void;
					public flush(): void;
					public write(param0: okio.Buffer, param1: number): void;
					public timeout(): okio.Timeout;
				}
				export class UnknownLengthSource extends okhttp3.internal.http1.Http1ExchangeCodec.AbstractSource {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1ExchangeCodec.UnknownLengthSource>;
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
			export class Http2ExchangeCodec extends okhttp3.internal.http.ExchangeCodec {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2ExchangeCodec>;
				public finishRequest(): void;
				public static readHttp2HeadersList(param0: okhttp3.Headers, param1: okhttp3.Protocol): okhttp3.Response.Builder;
				public trailers(): okhttp3.Headers;
				public openResponseBodySource(param0: okhttp3.Response): okio.Source;
				public readResponseHeaders(param0: boolean): okhttp3.Response.Builder;
				public writeRequestHeaders(param0: okhttp3.Request): void;
				public static http2HeadersList(param0: okhttp3.Request): java.util.List<okhttp3.internal.http2.Header>;
				public constructor(param0: okhttp3.OkHttpClient, param1: okhttp3.internal.connection.RealConnection, param2: okhttp3.Interceptor.Chain, param3: okhttp3.internal.http2.Http2Connection);
				public reportedContentLength(param0: okhttp3.Response): number;
				public cancel(): void;
				public flushRequest(): void;
				public connection(): okhttp3.internal.connection.RealConnection;
				public createRequestBody(param0: okhttp3.Request, param1: number): okio.Sink;
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
				export class ContinuationSource extends okio.Source {
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
				public closeLater(param0: okhttp3.internal.http2.ErrorCode): void;
				public enqueueTrailers(param0: okhttp3.Headers): void;
				public trailers(): okhttp3.Headers;
				public writeTimeout(): okio.Timeout;
				public writeHeaders(param0: java.util.List<okhttp3.internal.http2.Header>, param1: boolean, param2: boolean): void;
				public getId(): number;
				public getErrorCode(): okhttp3.internal.http2.ErrorCode;
				public takeHeaders(): okhttp3.Headers;
				public close(param0: okhttp3.internal.http2.ErrorCode, param1: java.io.IOException): void;
				public getConnection(): okhttp3.internal.http2.Http2Connection;
				public isOpen(): boolean;
				public readTimeout(): okio.Timeout;
				public getSink(): okio.Sink;
				public isLocallyInitiated(): boolean;
			}
			export module Http2Stream {
				export class FramingSink extends okio.Sink {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Stream.FramingSink>;
					public close(): void;
					public flush(): void;
					public write(param0: okio.Buffer, param1: number): void;
					public timeout(): okio.Timeout;
				}
				export class FramingSource extends okio.Source {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Stream.FramingSource>;
					public close(): void;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
				}
				export class StreamTimeout extends okio.AsyncTimeout {
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
				public close(): void;
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
				public headers(param0: boolean, param1: number, param2: java.util.List<okhttp3.internal.http2.Header>): void;
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
				export class CloseGuard {
					public static class: java.lang.Class<okhttp3.internal.platform.AndroidPlatform.CloseGuard>;
				}
				export class CustomTrustRootIndex extends okhttp3.internal.tls.TrustRootIndex {
					public static class: java.lang.Class<okhttp3.internal.platform.AndroidPlatform.CustomTrustRootIndex>;
					public equals(param0: any): boolean;
					public findByIssuerAndSignature(param0: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
					public hashCode(): number;
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
			export class Jdk8WithJettyBootPlatform extends okhttp3.internal.platform.Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.Jdk8WithJettyBootPlatform>;
				public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
				public afterHandshake(param0: javax.net.ssl.SSLSocket): void;
				public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<okhttp3.Protocol>): void;
				public static buildIfSupported(): okhttp3.internal.platform.Platform;
			}
			export module Jdk8WithJettyBootPlatform {
				export class AlpnProvider {
					public static class: java.lang.Class<okhttp3.internal.platform.Jdk8WithJettyBootPlatform.AlpnProvider>;
					public invoke(param0: any, param1: java.lang.reflect.Method, param2: native.Array<any>): any;
				}
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
				public static isAndroid(): boolean;
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
				export class FrameSink extends okio.Sink {
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


declare module okio {
	export class AsyncTimeout extends okio.Timeout {
		public static class: java.lang.Class<okio.AsyncTimeout>;
		public constructor();
		public enter(): void;
		public sink(param0: okio.Sink): okio.Sink;
		public timedOut(): void;
		public newTimeoutException(param0: java.io.IOException): java.io.IOException;
		public source(param0: okio.Source): okio.Source;
		public exit(): boolean;
	}
	export module AsyncTimeout {
		export class Watchdog {
			public static class: java.lang.Class<okio.AsyncTimeout.Watchdog>;
			public run(): void;
		}
	}
}

declare module okio {
	export class Base64 {
		public static class: java.lang.Class<okio.Base64>;
		public static encodeUrl(param0: native.Array<number>): string;
		public static decode(param0: string): native.Array<number>;
		public static encode(param0: native.Array<number>): string;
	}
}

declare module okio {
	export class Buffer implements okio.BufferedSource, okio.BufferedSink {
		public static class: java.lang.Class<okio.Buffer>;
		public readIntLe(): number;
		public writeUtf8(param0: string): okio.Buffer;
		public writeDecimalLong(param0: number): okio.Buffer;
		public readFrom(param0: java.io.InputStream, param1: number): okio.Buffer;
		public writeUtf8(param0: string, param1: number, param2: number): okio.Buffer;
		public readUtf8(param0: number): string;
		public copyTo(param0: java.io.OutputStream): okio.Buffer;
		public writeUtf8CodePoint(param0: number): okio.BufferedSink;
		public writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
		public indexOf(param0: number): number;
		public readByte(): number;
		public emitCompleteSegments(): okio.BufferedSink;
		public readLong(): number;
		public read(param0: okio.Buffer, param1: number): number;
		public writeIntLe(param0: number): okio.BufferedSink;
		public copyTo(param0: okio.Buffer, param1: number, param2: number): okio.Buffer;
		public indexOfElement(param0: okio.ByteString): number;
		public write(param0: native.Array<number>, param1: number, param2: number): okio.BufferedSink;
		public write(param0: java.nio.ByteBuffer): number;
		public readAll(param0: okio.Sink): number;
		public readByteArray(param0: number): native.Array<number>;
		public sha1(): okio.ByteString;
		public write(param0: okio.ByteString): okio.BufferedSink;
		public select(param0: okio.Options): number;
		public readFrom(param0: java.io.InputStream): okio.Buffer;
		public writeTo(param0: java.io.OutputStream): okio.Buffer;
		public outputStream(): java.io.OutputStream;
		public clear(): void;
		public require(param0: number): void;
		public request(param0: number): boolean;
		public indexOf(param0: okio.ByteString, param1: number): number;
		public readString(param0: java.nio.charset.Charset): string;
		public writeLongLe(param0: number): okio.Buffer;
		public writeLong(param0: number): okio.BufferedSink;
		public writeString(param0: string, param1: java.nio.charset.Charset): okio.Buffer;
		public writeByte(param0: number): okio.BufferedSink;
		public readUtf8LineStrict(): string;
		public writeUtf8CodePoint(param0: number): okio.Buffer;
		public writeInt(param0: number): okio.BufferedSink;
		public hmacSha512(param0: okio.ByteString): okio.ByteString;
		public getBuffer(): okio.Buffer;
		public write(param0: native.Array<number>): okio.BufferedSink;
		public sha512(): okio.ByteString;
		public writeShort(param0: number): okio.BufferedSink;
		public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
		public skip(param0: number): void;
		public getByte(param0: number): number;
		public readInt(): number;
		public read(param0: native.Array<number>, param1: number, param2: number): number;
		public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.Buffer;
		public copyTo(param0: java.io.OutputStream, param1: number, param2: number): okio.Buffer;
		public writeTo(param0: java.io.OutputStream, param1: number): okio.Buffer;
		public writeAll(param0: okio.Source): number;
		public readFully(param0: native.Array<number>): void;
		public timeout(): okio.Timeout;
		public equals(param0: any): boolean;
		public close(): void;
		public writeDecimalLong(param0: number): okio.BufferedSink;
		public inputStream(): java.io.InputStream;
		public readUtf8LineStrict(param0: number): string;
		public write(param0: okio.ByteString): okio.Buffer;
		public writeHexadecimalUnsignedLong(param0: number): okio.Buffer;
		public writeShortLe(param0: number): okio.BufferedSink;
		public writeUtf8(param0: string): okio.BufferedSink;
		public readUtf8CodePoint(): number;
		public writeShortLe(param0: number): okio.Buffer;
		public readAndWriteUnsafe(): okio.Buffer.UnsafeCursor;
		public snapshot(param0: number): okio.ByteString;
		public writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
		public readHexadecimalUnsignedLong(): number;
		public emit(): okio.BufferedSink;
		public writeInt(param0: number): okio.Buffer;
		public constructor();
		public readUnsafe(param0: okio.Buffer.UnsafeCursor): okio.Buffer.UnsafeCursor;
		public readUtf8(): string;
		/** @deprecated */
		public buffer(): okio.Buffer;
		public write(param0: okio.Buffer, param1: number): void;
		public readByteString(param0: number): okio.ByteString;
		public writeShort(param0: number): okio.Buffer;
		public readUnsafe(): okio.Buffer.UnsafeCursor;
		public completeSegmentByteCount(): number;
		public toString(): string;
		public read(param0: native.Array<number>): number;
		public md5(): okio.ByteString;
		public flush(): void;
		public writeString(param0: string, param1: java.nio.charset.Charset): okio.BufferedSink;
		public writeLongLe(param0: number): okio.BufferedSink;
		public readAndWriteUnsafe(param0: okio.Buffer.UnsafeCursor): okio.Buffer.UnsafeCursor;
		public readShort(): number;
		public peek(): okio.BufferedSource;
		public readShortLe(): number;
		public readUtf8Line(): string;
		public write(param0: native.Array<number>, param1: number, param2: number): okio.Buffer;
		public readByteString(): okio.ByteString;
		public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.BufferedSink;
		public writeIntLe(param0: number): okio.Buffer;
		public hmacSha1(param0: okio.ByteString): okio.ByteString;
		public size(): number;
		public hashCode(): number;
		public indexOf(param0: number, param1: number, param2: number): number;
		public readString(param0: number, param1: java.nio.charset.Charset): string;
		public readLongLe(): number;
		public readFully(param0: okio.Buffer, param1: number): void;
		public snapshot(): okio.ByteString;
		public read(param0: java.nio.ByteBuffer): number;
		public write(param0: native.Array<number>): okio.Buffer;
		public clone(): okio.Buffer;
		public emitCompleteSegments(): okio.Buffer;
		public readDecimalLong(): number;
		public sha256(): okio.ByteString;
		public writeByte(param0: number): okio.Buffer;
		public rangeEquals(param0: number, param1: okio.ByteString): boolean;
		public isOpen(): boolean;
		public readByteArray(): native.Array<number>;
		public writeLong(param0: number): okio.Buffer;
		public indexOfElement(param0: okio.ByteString, param1: number): number;
		public exhausted(): boolean;
		public write(param0: okio.Source, param1: number): okio.BufferedSink;
		public buffer(): okio.Buffer;
		public hmacSha256(param0: okio.ByteString): okio.ByteString;
		public indexOf(param0: number, param1: number): number;
		public indexOf(param0: okio.ByteString): number;
	}
	export module Buffer {
		export class UnsafeCursor {
			public static class: java.lang.Class<okio.Buffer.UnsafeCursor>;
			public buffer: okio.Buffer;
			public readWrite: boolean;
			public offset: number;
			public data: native.Array<number>;
			public start: number;
			public end: number;
			public next(): number;
			public seek(param0: number): number;
			public resizeBuffer(param0: number): number;
			public constructor();
			public expandBuffer(param0: number): number;
			public close(): void;
		}
	}
}

declare module okio {
	export class BufferedSink extends okio.Sink {
		public static class: java.lang.Class<okio.BufferedSink>;
		/**
		 * Constructs a new instance of the okio.BufferedSink interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			buffer(): okio.Buffer;
			write(param0: okio.ByteString): okio.BufferedSink;
			write(param0: native.Array<number>): okio.BufferedSink;
			write(param0: native.Array<number>, param1: number, param2: number): okio.BufferedSink;
			writeAll(param0: okio.Source): number;
			write(param0: okio.Source, param1: number): okio.BufferedSink;
			writeUtf8(param0: string): okio.BufferedSink;
			writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
			writeUtf8CodePoint(param0: number): okio.BufferedSink;
			writeString(param0: string, param1: java.nio.charset.Charset): okio.BufferedSink;
			writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.BufferedSink;
			writeByte(param0: number): okio.BufferedSink;
			writeShort(param0: number): okio.BufferedSink;
			writeShortLe(param0: number): okio.BufferedSink;
			writeInt(param0: number): okio.BufferedSink;
			writeIntLe(param0: number): okio.BufferedSink;
			writeLong(param0: number): okio.BufferedSink;
			writeLongLe(param0: number): okio.BufferedSink;
			writeDecimalLong(param0: number): okio.BufferedSink;
			writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
			flush(): void;
			emit(): okio.BufferedSink;
			emitCompleteSegments(): okio.BufferedSink;
			outputStream(): java.io.OutputStream;
			write(param0: okio.Buffer, param1: number): void;
			flush(): void;
			timeout(): okio.Timeout;
			close(): void;
		});
		public constructor();
		public writeDecimalLong(param0: number): okio.BufferedSink;
		public close(): void;
		public writeByte(param0: number): okio.BufferedSink;
		public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.BufferedSink;
		public writeShortLe(param0: number): okio.BufferedSink;
		public writeInt(param0: number): okio.BufferedSink;
		public writeUtf8CodePoint(param0: number): okio.BufferedSink;
		public writeUtf8(param0: string): okio.BufferedSink;
		public write(param0: native.Array<number>): okio.BufferedSink;
		public writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
		public writeShort(param0: number): okio.BufferedSink;
		public writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
		public emitCompleteSegments(): okio.BufferedSink;
		public emit(): okio.BufferedSink;
		public writeIntLe(param0: number): okio.BufferedSink;
		public write(param0: okio.Buffer, param1: number): void;
		public write(param0: native.Array<number>, param1: number, param2: number): okio.BufferedSink;
		public flush(): void;
		public write(param0: okio.ByteString): okio.BufferedSink;
		public writeString(param0: string, param1: java.nio.charset.Charset): okio.BufferedSink;
		public writeLongLe(param0: number): okio.BufferedSink;
		public write(param0: okio.Source, param1: number): okio.BufferedSink;
		public buffer(): okio.Buffer;
		public outputStream(): java.io.OutputStream;
		public writeAll(param0: okio.Source): number;
		public writeLong(param0: number): okio.BufferedSink;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class BufferedSource extends okio.Source {
		public static class: java.lang.Class<okio.BufferedSource>;
		/**
		 * Constructs a new instance of the okio.BufferedSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			buffer(): okio.Buffer;
			getBuffer(): okio.Buffer;
			exhausted(): boolean;
			require(param0: number): void;
			request(param0: number): boolean;
			readByte(): number;
			readShort(): number;
			readShortLe(): number;
			readInt(): number;
			readIntLe(): number;
			readLong(): number;
			readLongLe(): number;
			readDecimalLong(): number;
			readHexadecimalUnsignedLong(): number;
			skip(param0: number): void;
			readByteString(): okio.ByteString;
			readByteString(param0: number): okio.ByteString;
			select(param0: okio.Options): number;
			readByteArray(): native.Array<number>;
			readByteArray(param0: number): native.Array<number>;
			read(param0: native.Array<number>): number;
			readFully(param0: native.Array<number>): void;
			read(param0: native.Array<number>, param1: number, param2: number): number;
			readFully(param0: okio.Buffer, param1: number): void;
			readAll(param0: okio.Sink): number;
			readUtf8(): string;
			readUtf8(param0: number): string;
			readUtf8Line(): string;
			readUtf8LineStrict(): string;
			readUtf8LineStrict(param0: number): string;
			readUtf8CodePoint(): number;
			readString(param0: java.nio.charset.Charset): string;
			readString(param0: number, param1: java.nio.charset.Charset): string;
			indexOf(param0: number): number;
			indexOf(param0: number, param1: number): number;
			indexOf(param0: number, param1: number, param2: number): number;
			indexOf(param0: okio.ByteString): number;
			indexOf(param0: okio.ByteString, param1: number): number;
			indexOfElement(param0: okio.ByteString): number;
			indexOfElement(param0: okio.ByteString, param1: number): number;
			rangeEquals(param0: number, param1: okio.ByteString): boolean;
			rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
			peek(): okio.BufferedSource;
			inputStream(): java.io.InputStream;
			read(param0: okio.Buffer, param1: number): number;
			timeout(): okio.Timeout;
			close(): void;
		});
		public constructor();
		public close(): void;
		public inputStream(): java.io.InputStream;
		public readIntLe(): number;
		public readByteString(): okio.ByteString;
		public readUtf8LineStrict(): string;
		public readUtf8LineStrict(param0: number): string;
		public readUtf8(param0: number): string;
		public getBuffer(): okio.Buffer;
		public readUtf8CodePoint(): number;
		public indexOf(param0: number): number;
		public readByte(): number;
		public readHexadecimalUnsignedLong(): number;
		public indexOf(param0: number, param1: number, param2: number): number;
		public readString(param0: number, param1: java.nio.charset.Charset): string;
		public readLongLe(): number;
		public readFully(param0: okio.Buffer, param1: number): void;
		public readLong(): number;
		public read(param0: okio.Buffer, param1: number): number;
		public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
		public readUtf8(): string;
		/** @deprecated */
		public buffer(): okio.Buffer;
		public readByteString(param0: number): okio.ByteString;
		public indexOfElement(param0: okio.ByteString): number;
		public skip(param0: number): void;
		public readDecimalLong(): number;
		public read(param0: native.Array<number>): number;
		public readAll(param0: okio.Sink): number;
		public readInt(): number;
		public readByteArray(param0: number): native.Array<number>;
		public rangeEquals(param0: number, param1: okio.ByteString): boolean;
		public read(param0: native.Array<number>, param1: number, param2: number): number;
		public readByteArray(): native.Array<number>;
		public indexOfElement(param0: okio.ByteString, param1: number): number;
		public select(param0: okio.Options): number;
		public exhausted(): boolean;
		public readShort(): number;
		public require(param0: number): void;
		public request(param0: number): boolean;
		public indexOf(param0: okio.ByteString, param1: number): number;
		public peek(): okio.BufferedSource;
		public readString(param0: java.nio.charset.Charset): string;
		public readShortLe(): number;
		public indexOf(param0: number, param1: number): number;
		public readFully(param0: native.Array<number>): void;
		public readUtf8Line(): string;
		public indexOf(param0: okio.ByteString): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class ByteString extends java.lang.Object {
		public static class: java.lang.Class<okio.ByteString>;
		public static EMPTY: okio.ByteString;
		public static of(param0: native.Array<number>): okio.ByteString;
		public base64(): string;
		public static encodeString(param0: string, param1: java.nio.charset.Charset): okio.ByteString;
		public substring(param0: number): okio.ByteString;
		public equals(param0: any): boolean;
		public hmacSha512(param0: okio.ByteString): okio.ByteString;
		public base64Url(): string;
		public hmacSha1(param0: okio.ByteString): okio.ByteString;
		public static read(param0: java.io.InputStream, param1: number): okio.ByteString;
		public asByteBuffer(): java.nio.ByteBuffer;
		public sha512(): okio.ByteString;
		public size(): number;
		public lastIndexOf(param0: native.Array<number>): number;
		public hex(): string;
		public hashCode(): number;
		public toAsciiUppercase(): okio.ByteString;
		public indexOf(param0: native.Array<number>, param1: number): number;
		public static decodeBase64(param0: string): okio.ByteString;
		public lastIndexOf(param0: okio.ByteString, param1: number): number;
		public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
		public lastIndexOf(param0: okio.ByteString): number;
		public static decodeHex(param0: string): okio.ByteString;
		public compareTo(param0: okio.ByteString): number;
		public indexOf(param0: native.Array<number>): number;
		public startsWith(param0: native.Array<number>): boolean;
		public sha256(): okio.ByteString;
		public getByte(param0: number): number;
		public toString(): string;
		public static encodeUtf8(param0: string): okio.ByteString;
		public string(param0: java.nio.charset.Charset): string;
		public md5(): okio.ByteString;
		public startsWith(param0: okio.ByteString): boolean;
		public endsWith(param0: okio.ByteString): boolean;
		public endsWith(param0: native.Array<number>): boolean;
		public toAsciiLowercase(): okio.ByteString;
		public static of(param0: java.nio.ByteBuffer): okio.ByteString;
		public sha1(): okio.ByteString;
		public write(param0: java.io.OutputStream): void;
		public lastIndexOf(param0: native.Array<number>, param1: number): number;
		public static of(param0: native.Array<number>, param1: number, param2: number): okio.ByteString;
		public rangeEquals(param0: number, param1: native.Array<number>, param2: number, param3: number): boolean;
		public utf8(): string;
		public substring(param0: number, param1: number): okio.ByteString;
		public indexOf(param0: okio.ByteString, param1: number): number;
		public toByteArray(): native.Array<number>;
		public hmacSha256(param0: okio.ByteString): okio.ByteString;
		public indexOf(param0: okio.ByteString): number;
	}
}

declare module okio {
	export class DeflaterSink extends okio.Sink {
		public static class: java.lang.Class<okio.DeflaterSink>;
		public close(): void;
		public write(param0: okio.Buffer, param1: number): void;
		public constructor(param0: okio.Sink, param1: java.util.zip.Deflater);
		public toString(): string;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export abstract class ForwardingSink extends okio.Sink {
		public static class: java.lang.Class<okio.ForwardingSink>;
		public delegate(): okio.Sink;
		public close(): void;
		public constructor(param0: okio.Sink);
		public write(param0: okio.Buffer, param1: number): void;
		public toString(): string;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export abstract class ForwardingSource extends okio.Source {
		public static class: java.lang.Class<okio.ForwardingSource>;
		public close(): void;
		public constructor(param0: okio.Source);
		public delegate(): okio.Source;
		public toString(): string;
		public read(param0: okio.Buffer, param1: number): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class ForwardingTimeout extends okio.Timeout {
		public static class: java.lang.Class<okio.ForwardingTimeout>;
		public constructor();
		public throwIfReached(): void;
		public setDelegate(param0: okio.Timeout): okio.ForwardingTimeout;
		public clearDeadline(): okio.Timeout;
		public hasDeadline(): boolean;
		public delegate(): okio.Timeout;
		public timeout(param0: number, param1: java.util.concurrent.TimeUnit): okio.Timeout;
		public timeoutNanos(): number;
		public deadlineNanoTime(): number;
		public deadlineNanoTime(param0: number): okio.Timeout;
		public constructor(param0: okio.Timeout);
		public clearTimeout(): okio.Timeout;
	}
}

declare module okio {
	export class GzipSink extends okio.Sink {
		public static class: java.lang.Class<okio.GzipSink>;
		public deflater(): java.util.zip.Deflater;
		public close(): void;
		public constructor(param0: okio.Sink);
		public write(param0: okio.Buffer, param1: number): void;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class GzipSource extends okio.Source {
		public static class: java.lang.Class<okio.GzipSource>;
		public close(): void;
		public constructor(param0: okio.Source);
		public read(param0: okio.Buffer, param1: number): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class HashingSink extends okio.ForwardingSink {
		public static class: java.lang.Class<okio.HashingSink>;
		public close(): void;
		public static hmacSha256(param0: okio.Sink, param1: okio.ByteString): okio.HashingSink;
		public write(param0: okio.Buffer, param1: number): void;
		public static sha512(param0: okio.Sink): okio.HashingSink;
		public static hmacSha1(param0: okio.Sink, param1: okio.ByteString): okio.HashingSink;
		public static md5(param0: okio.Sink): okio.HashingSink;
		public static sha1(param0: okio.Sink): okio.HashingSink;
		public static hmacSha512(param0: okio.Sink, param1: okio.ByteString): okio.HashingSink;
		public hash(): okio.ByteString;
		public static sha256(param0: okio.Sink): okio.HashingSink;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class HashingSource extends okio.ForwardingSource {
		public static class: java.lang.Class<okio.HashingSource>;
		public close(): void;
		public static hmacSha256(param0: okio.Source, param1: okio.ByteString): okio.HashingSource;
		public static sha1(param0: okio.Source): okio.HashingSource;
		public static md5(param0: okio.Source): okio.HashingSource;
		public static sha256(param0: okio.Source): okio.HashingSource;
		public static hmacSha1(param0: okio.Source, param1: okio.ByteString): okio.HashingSource;
		public hash(): okio.ByteString;
		public read(param0: okio.Buffer, param1: number): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class InflaterSource extends okio.Source {
		public static class: java.lang.Class<okio.InflaterSource>;
		public close(): void;
		public refill(): boolean;
		public constructor(param0: okio.Source, param1: java.util.zip.Inflater);
		public read(param0: okio.Buffer, param1: number): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class Okio {
		public static class: java.lang.Class<okio.Okio>;
		public static buffer(param0: okio.Source): okio.BufferedSource;
		public static source(param0: java.io.InputStream): okio.Source;
		public static appendingSink(param0: java.io.File): okio.Sink;
		public static sink(param0: java.io.OutputStream): okio.Sink;
		public static source(param0: java.io.File): okio.Source;
		public static sink(param0: java.io.File): okio.Sink;
		public static blackhole(): okio.Sink;
		public static source(param0: java.net.Socket): okio.Source;
		public static sink(param0: java.nio.file.Path, param1: native.Array<java.nio.file.OpenOption>): okio.Sink;
		public static buffer(param0: okio.Sink): okio.BufferedSink;
		public static sink(param0: java.net.Socket): okio.Sink;
		public static source(param0: java.nio.file.Path, param1: native.Array<java.nio.file.OpenOption>): okio.Source;
	}
}

declare module okio {
	export class Options extends java.util.AbstractList<okio.ByteString> implements java.util.RandomAccess  {
		public static class: java.lang.Class<okio.Options>;
		public size(): number;
		public static of(param0: native.Array<okio.ByteString>): okio.Options;
		public get(param0: number): okio.ByteString;
	}
}

declare module okio {
	export class PeekSource extends okio.Source {
		public static class: java.lang.Class<okio.PeekSource>;
		public close(): void;
		public read(param0: okio.Buffer, param1: number): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class Pipe {
		public static class: java.lang.Class<okio.Pipe>;
		public sink(): okio.Sink;
		public constructor(param0: number);
		public fold(param0: okio.Sink): void;
		public source(): okio.Source;
	}
	export module Pipe {
		export class PipeSink extends okio.Sink {
			public static class: java.lang.Class<okio.Pipe.PipeSink>;
			public write(param0: okio.Buffer, param1: number): void;
			public flush(): void;
			public timeout(): okio.Timeout;
			public close(): void;
		}
		export class PipeSource extends okio.Source {
			public static class: java.lang.Class<okio.Pipe.PipeSource>;
			public timeout(): okio.Timeout;
			public read(param0: okio.Buffer, param1: number): number;
			public close(): void;
		}
	}
}

declare module okio {
	export class PushableTimeout extends okio.Timeout {
		public static class: java.lang.Class<okio.PushableTimeout>;
	}
}

declare module okio {
	export class RealBufferedSink extends okio.BufferedSink {
		public static class: java.lang.Class<okio.RealBufferedSink>;
		public sink: okio.Sink;
		public writeDecimalLong(param0: number): okio.BufferedSink;
		public close(): void;
		public writeByte(param0: number): okio.BufferedSink;
		public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.BufferedSink;
		public writeShortLe(param0: number): okio.BufferedSink;
		public writeInt(param0: number): okio.BufferedSink;
		public writeUtf8CodePoint(param0: number): okio.BufferedSink;
		public writeUtf8(param0: string): okio.BufferedSink;
		public write(param0: native.Array<number>): okio.BufferedSink;
		public writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
		public writeShort(param0: number): okio.BufferedSink;
		public writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
		public emitCompleteSegments(): okio.BufferedSink;
		public emit(): okio.BufferedSink;
		public writeIntLe(param0: number): okio.BufferedSink;
		public write(param0: okio.Buffer, param1: number): void;
		public write(param0: native.Array<number>, param1: number, param2: number): okio.BufferedSink;
		public write(param0: java.nio.ByteBuffer): number;
		public toString(): string;
		public flush(): void;
		public isOpen(): boolean;
		public write(param0: okio.ByteString): okio.BufferedSink;
		public writeString(param0: string, param1: java.nio.charset.Charset): okio.BufferedSink;
		public writeLongLe(param0: number): okio.BufferedSink;
		public write(param0: okio.Source, param1: number): okio.BufferedSink;
		public buffer(): okio.Buffer;
		public outputStream(): java.io.OutputStream;
		public writeAll(param0: okio.Source): number;
		public writeLong(param0: number): okio.BufferedSink;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class RealBufferedSource extends okio.BufferedSource {
		public static class: java.lang.Class<okio.RealBufferedSource>;
		public source: okio.Source;
		public close(): void;
		public inputStream(): java.io.InputStream;
		public readIntLe(): number;
		public readUtf8LineStrict(param0: number): string;
		public readUtf8(param0: number): string;
		public readUtf8CodePoint(): number;
		public indexOf(param0: number): number;
		public readByte(): number;
		public readHexadecimalUnsignedLong(): number;
		public read(param0: okio.Buffer, param1: number): number;
		public readLong(): number;
		public readUtf8(): string;
		/** @deprecated */
		public buffer(): okio.Buffer;
		public readByteString(param0: number): okio.ByteString;
		public indexOfElement(param0: okio.ByteString): number;
		public toString(): string;
		public read(param0: native.Array<number>): number;
		public readAll(param0: okio.Sink): number;
		public readByteArray(param0: number): native.Array<number>;
		public select(param0: okio.Options): number;
		public readShort(): number;
		public require(param0: number): void;
		public request(param0: number): boolean;
		public indexOf(param0: okio.ByteString, param1: number): number;
		public peek(): okio.BufferedSource;
		public readString(param0: java.nio.charset.Charset): string;
		public readShortLe(): number;
		public readUtf8Line(): string;
		public readByteString(): okio.ByteString;
		public readUtf8LineStrict(): string;
		public getBuffer(): okio.Buffer;
		public indexOf(param0: number, param1: number, param2: number): number;
		public readString(param0: number, param1: java.nio.charset.Charset): string;
		public readLongLe(): number;
		public readFully(param0: okio.Buffer, param1: number): void;
		public read(param0: java.nio.ByteBuffer): number;
		public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
		public skip(param0: number): void;
		public readDecimalLong(): number;
		public readInt(): number;
		public rangeEquals(param0: number, param1: okio.ByteString): boolean;
		public isOpen(): boolean;
		public read(param0: native.Array<number>, param1: number, param2: number): number;
		public readByteArray(): native.Array<number>;
		public indexOfElement(param0: okio.ByteString, param1: number): number;
		public exhausted(): boolean;
		public buffer(): okio.Buffer;
		public indexOf(param0: number, param1: number): number;
		public readFully(param0: native.Array<number>): void;
		public indexOf(param0: okio.ByteString): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class Segment {
		public static class: java.lang.Class<okio.Segment>;
		public push(param0: okio.Segment): okio.Segment;
		public writeTo(param0: okio.Segment, param1: number): void;
		public compact(): void;
		public pop(): okio.Segment;
		public split(param0: number): okio.Segment;
	}
}

declare module okio {
	export class SegmentPool {
		public static class: java.lang.Class<okio.SegmentPool>;
	}
}

declare module okio {
	export class SegmentedByteString extends okio.ByteString {
		public static class: java.lang.Class<okio.SegmentedByteString>;
		public base64(): string;
		public substring(param0: number): okio.ByteString;
		public equals(param0: any): boolean;
		public base64Url(): string;
		public hmacSha1(param0: okio.ByteString): okio.ByteString;
		public asByteBuffer(): java.nio.ByteBuffer;
		public size(): number;
		public lastIndexOf(param0: native.Array<number>): number;
		public hex(): string;
		public hashCode(): number;
		public toAsciiUppercase(): okio.ByteString;
		public indexOf(param0: native.Array<number>, param1: number): number;
		public lastIndexOf(param0: okio.ByteString, param1: number): number;
		public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
		public lastIndexOf(param0: okio.ByteString): number;
		public indexOf(param0: native.Array<number>): number;
		public sha256(): okio.ByteString;
		public getByte(param0: number): number;
		public toString(): string;
		public string(param0: java.nio.charset.Charset): string;
		public md5(): okio.ByteString;
		public toAsciiLowercase(): okio.ByteString;
		public sha1(): okio.ByteString;
		public write(param0: java.io.OutputStream): void;
		public lastIndexOf(param0: native.Array<number>, param1: number): number;
		public rangeEquals(param0: number, param1: native.Array<number>, param2: number, param3: number): boolean;
		public utf8(): string;
		public substring(param0: number, param1: number): okio.ByteString;
		public indexOf(param0: okio.ByteString, param1: number): number;
		public toByteArray(): native.Array<number>;
		public hmacSha256(param0: okio.ByteString): okio.ByteString;
		public indexOf(param0: okio.ByteString): number;
	}
}

declare module okio {
	export class Sink {
		public static class: java.lang.Class<okio.Sink>;
		/**
		 * Constructs a new instance of the okio.Sink interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			write(param0: okio.Buffer, param1: number): void;
			flush(): void;
			timeout(): okio.Timeout;
			close(): void;
		});
		public constructor();
		public close(): void;
		public write(param0: okio.Buffer, param1: number): void;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class Source {
		public static class: java.lang.Class<okio.Source>;
		/**
		 * Constructs a new instance of the okio.Source interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			read(param0: okio.Buffer, param1: number): number;
			timeout(): okio.Timeout;
			close(): void;
		});
		public constructor();
		public close(): void;
		public read(param0: okio.Buffer, param1: number): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class Timeout {
		public static class: java.lang.Class<okio.Timeout>;
		public static NONE: okio.Timeout;
		public constructor();
		public throwIfReached(): void;
		public deadline(param0: number, param1: java.util.concurrent.TimeUnit): okio.Timeout;
		public clearDeadline(): okio.Timeout;
		public hasDeadline(): boolean;
		public timeout(param0: number, param1: java.util.concurrent.TimeUnit): okio.Timeout;
		public timeoutNanos(): number;
		public waitUntilNotified(param0: any): void;
		public deadlineNanoTime(): number;
		public deadlineNanoTime(param0: number): okio.Timeout;
		public clearTimeout(): okio.Timeout;
	}
}

declare module okio {
	export class Utf8 {
		public static class: java.lang.Class<okio.Utf8>;
		public static size(param0: string, param1: number, param2: number): number;
		public static size(param0: string): number;
	}
}

declare module okio {
	export class Util {
		public static class: java.lang.Class<okio.Util>;
		public static UTF_8: java.nio.charset.Charset;
		public static reverseBytesShort(param0: number): number;
		public static reverseBytesLong(param0: number): number;
		public static checkOffsetAndCount(param0: number, param1: number, param2: number): void;
		public static reverseBytesInt(param0: number): number;
		public static sneakyRethrow(param0: java.lang.Throwable): void;
		public static arrayRangeEquals(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: number): boolean;
	}
}


//Generics information:


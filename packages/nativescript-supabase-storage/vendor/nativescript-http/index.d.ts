import { ImageSource, HttpRequestOptions, HttpResponse } from "@nativescript/core";

/**
 * Downloads the content from the specified URL as a string.
 * @param url The URL to request from.
 */
export declare function getString(url: string): Promise<string>;

/**
 * Downloads the content from the specified URL as a string.
 * @param options An object that specifies various request options.
 */
export declare function getString(options: HttpRequestOptions): Promise<string>;

/**
 * Downloads the content from the specified URL as a string and returns its JSON.parse representation.
 * @param url The URL to request from.
 */
export declare function getJSON<T>(url: string): Promise<T>;

/**
 * Downloads the content from the specified URL as a string and returns its JSON.parse representation.
 * @param options An object that specifies various request options.
 */
export declare function getJSON<T>(options: HttpRequestOptions): Promise<T>;

/**
 * Downloads the content from the specified URL and attempts to decode it as an image.
 * @param url The URL to request from.
 */
export declare function getImage(url: string): Promise<ImageSource>;

/**
 * Downloads the content from the specified URL and attempts to decode it as an image.
 * @param options An object that specifies various request options.
 */
export declare function getImage(options: HttpRequestOptions): Promise<ImageSource>;

/**
 * Downloads the content from the specified URL and attempts to save it as file.
 * @param url The URL to request from.
 * @param destinationFilePath Optional. The downloaded file path.
 */
export declare function getFile(url: string, destinationFilePath?: string): Promise<File>;

/**
 * Downloads the content from the specified URL and attempts to save it as file.
 * @param options An object that specifies various request options.
 * @param destinationFilePath Optional. The downloaded file path.
 */
export declare function getFile(options: HttpRequestOptions, destinationFilePath?: string): Promise<File>;

/**
 * Downloads the content from the specified URL as binary and returns an ArrayBuffer.
 * @param url The URL to request from.
 */
export declare function getBinary(url: string): Promise<ArrayBuffer>;

/**
 * Downloads the content from the specified URL as binary and returns an ArrayBuffer.
 * @param options An object that specifies various request options.
 */
export declare function getBinary(options: HttpRequestOptions): Promise<ArrayBuffer>;

/**
 * Makes a generic http request using the provided options and returns a HttpResponse Object.
 * @param options An object that specifies various request options.
 */
export declare function request(options: HttpRequestOptions): Promise<HttpResponse>;
export declare type HTTPFormDataEntryValue = HTTPFormDataEntry | FormDataEntryValue | ArrayBuffer | Blob | File | string | any;
export declare class HTTPFormDataEntry {
    data: any;
    name?: string;
    type?: string;
    constructor(data: any, name?: string, type?: string);
}
export declare class HTTPFormData implements FormData {
    private values;
    append(name: string, value: HTTPFormDataEntryValue): void;
    delete(name: string): void;
    get(name: string): HTTPFormDataEntryValue | null;
    getAll(name: string): HTTPFormDataEntryValue[];
    has(name: string): boolean;
    set(name: string, value: HTTPFormDataEntryValue): void;
    forEach(callbackfn: (value: HTTPFormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any): void;
}

export declare function addHeader(headers: Headers, key: string, value: string): void;

export declare enum ImageParseMethod {
    NEVER = 0,
    CONTENTTYPE = 1,
    ALWAYS = 2
}

/**
 * Sets the image parse method. (Only has affect on Android)
 * Image parsing already decodes the raw result into an bitmap object for you on Android in the background thread.
 * @param imageParseMethod The new image parse method.
 */
export declare function setImageParseMethod(imageParseMethod: ImageParseMethod): void;

/**
 * Sets the concurrency limit.
 * @param maxRequests how many requests the http client should do at the same time (Only has affect on Android, iOS allows no control over this).
 * @param maxRequestsPerHost How many requests the http client should do at the same time for the same host. WebSocket connections to hosts do not count against this limit.
 */
export declare function setConcurrencyLimits(maxRequests: number, maxRequestsPerHost: number): void;

/**
 * Clear the cookies in the cookie jar.
 */
export declare function clearCookies(): void;

/**
 * Set a global user agent.
 * @param userAgent The new user agent. Set to null to use the default again.
 */
export declare function setUserAgent(userAgent?: string): void;

/**
 * Add a new certificate to pin.
 *
 * Warning: Certificate Pinning is Dangerous!
 * Pinning certificates limits your server team’s abilities to update their TLS certificates.
 * By pinning certificates, you take on additional operational complexity and limit your ability to migrate between certificate authorities.
 * Do not use certificate pinning without the blessing of your server’s TLS administrator!
 *
 * Note about self-signed certificates:
 * Can not be used to pin self-signed certificate if such certificate is not accepted by javax.net.ssl.TrustManager.
 *
 * @param pattern Pinning is per-hostname and/or per-wildcard pattern. To pin both publicobject.com and www.publicobject.com you must configure both hostnames. Or you may use patterns to match sets of related domain names. The following forms are permitted:
 *                Full domain name: you may pin an exact domain name like www.publicobject.com. It won’t match additional prefixes (us-west.www.publicobject.com) or suffixes (publicobject.com).
 *                Any number of subdomains: Use two asterisks to like **.publicobject.com to match any number of prefixes (us-west.www.publicobject.com, www.publicobject.com) including no prefix at all (publicobject.com). For most applications this is the best way to configure certificate pinning.
 *                Exactly one subdomain: Use a single asterisk like *.publicobject.com to match exactly one prefix (www.publicobject.com, api.publicobject.com). Be careful with this approach as no pinning will be enforced if additional prefixes are present, or if no prefixes are present.
 *                Note that any other form is unsupported. You may not use asterisks in any position other than the leftmost label.
 *                If multiple patterns match a hostname, any match is sufficient. For example, suppose pin A applies to *.publicobject.com and pin B applies to api.publicobject.com. Handshakes for api.publicobject.com are valid if either A’s or B’s certificate is in the chain.
 *                Note: for iOS, *.publicobject.com also behaves as **.publicobject.com due to limitation in TrustKit.
 *                Note 2: for Android, if you use the older version of OkHttp, the **. prefix does not work.
 *                Note 3: for iOS, you need to have at least 2 hashes, because Trustkit requires you to have a backup certificate.
 * @param hashes SHA-256 hashes. Each pin is a hash of a certificate's Subject Public Key Info, base64-encoded. Don't prefix with `sha256/`.
 */
export declare function certificatePinningAdd(pattern: string, hashes: Array<string>): void;

/**
 * Clear all the certificate pins that were added by certificatePinningAdd().
 */
export declare function certificatePinningClear(): void;

export declare const Http: {
    getFile: typeof getFile;
    getImage: typeof getImage;
    getJSON: typeof getJSON;
    getString: typeof getString;
    request: (options: HttpRequestOptions) => Promise<HttpResponse>;
};

export { ImageCache } from './image-cache';

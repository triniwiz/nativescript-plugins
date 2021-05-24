import { ImageSource, HttpRequestOptions, HttpResponse, Headers } from '@nativescript/core';
import { ImageParseMethod } from "./http.common";
export { HTTPFormData, HTTPFormDataEntry, ImageParseMethod } from "./http.common";
export declare enum HttpResponseEncoding {
    UTF8 = 0,
    GBK = 1
}
export declare function buildJavaOptions(options: HttpRequestOptions): com.klippa.NativeScriptHTTP.Async.Http.RequestOptions;
export declare function request(options: HttpRequestOptions): Promise<HttpResponse>;
export declare function getString(arg: any): Promise<string>;
export declare function getJSON<T>(arg: any): Promise<T>;
export declare function getImage(arg: any): Promise<ImageSource>;
export declare function getFile(arg: any, destinationFilePath?: string): Promise<any>;
export declare function getBinary(arg: any): Promise<ArrayBuffer>;
export declare function addHeader(headers: Headers, key: string, value: string): void;
export declare function setImageParseMethod(imageParseMethod: ImageParseMethod): void;
export declare function setConcurrencyLimits(maxRequests: number, maxRequestsPerHost: number): void;
export declare function clearCookies(): void;
export declare function setUserAgent(userAgent?: string): void;
export declare function certificatePinningAdd(pattern: string, hashes: Array<string>): void;
export declare function certificatePinningClear(): void;
export declare const Http: {
    getFile: typeof getFile;
    getImage: typeof getImage;
    getJSON: typeof getJSON;
    getString: typeof getString;
    request: typeof request;
};
export { ImageCache } from './image-cache';

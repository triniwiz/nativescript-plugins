import { ImageSource, HttpRequestOptions, HttpResponse, File } from "@nativescript/core";
export declare function getString(url: string): Promise<string>;
export declare function getString(options: HttpRequestOptions): Promise<string>;
export declare function getJSON<T>(url: string): Promise<T>;
export declare function getJSON<T>(options: HttpRequestOptions): Promise<T>;
export declare function getImage(url: string): Promise<ImageSource>;
export declare function getImage(options: HttpRequestOptions): Promise<ImageSource>;
export declare function getFile(url: string, destinationFilePath?: string): Promise<File>;
export declare function getFile(options: HttpRequestOptions, destinationFilePath?: string): Promise<File>;
export declare function getBinary(url: string): Promise<ArrayBuffer>;
export declare function getBinary(options: HttpRequestOptions): Promise<ArrayBuffer>;
export declare function request(options: HttpRequestOptions): Promise<HttpResponse>;
export declare function getFilenameFromUrl(url: string): string;
export declare class HTTPFormDataEntry {
    data: any;
    name?: string;
    type?: string;
    constructor(data: any, name?: string, type?: string);
}
export declare type HTTPFormDataEntryValue = HTTPFormDataEntry | FormDataEntryValue | ArrayBuffer | Blob | File | string | any;
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
export declare enum ImageParseMethod {
    NEVER = 0,
    CONTENTTYPE = 1,
    ALWAYS = 2
}
export declare function completeSelfCheck(options: HttpRequestOptions): Promise<HttpResponse>;

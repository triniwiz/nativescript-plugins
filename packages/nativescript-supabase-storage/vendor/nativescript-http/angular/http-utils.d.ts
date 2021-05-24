import { NSFileSystem } from "@nativescript/angular";
import { Observable } from "rxjs";
export declare type httpResponseFactory<T> = (url: string, body: any, status: number) => T;
export declare type httpErrorFactory = (url: string, body: any, status: number) => any;
export declare function isLocalRequest(url: string): boolean;
export declare function getAbsolutePath(url: string, nsFileSystem: NSFileSystem): string;
export declare function processLocalFileRequest<T>(url: string, nsFileSystem: NSFileSystem, successResponse: httpResponseFactory<T>, errorResponse: httpErrorFactory): Observable<T>;

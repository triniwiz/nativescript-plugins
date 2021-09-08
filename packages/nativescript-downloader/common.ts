import {Observable} from '@nativescript/core';

export abstract class DownloaderBase extends Observable {
  downloads: Map<String, any>;
  downloadsData: Map<String, any>;
  /**
   * Native android instance
   */
  android: any;

  /**
   * Native ios instance of [AFURLSessionManager](http://cocoadocs.org/docsets/AFNetworking/3.1.0/Classes/AFURLSessionManager.html)
   */
  ios: any;

  constructor() {
    super();
  }

  public abstract createDownload(options: DownloadOptions): string;

  public abstract start(
    id: string,
    progress?: Function
  ): Promise<DownloadEventData>;

  public abstract resume(id: string): void;

  public abstract pause(id: string): void;

  public abstract cancel(id: string): void;

  public abstract getStatus(id: string): StatusCode;

  public abstract getPath(id: string): string;
}

export function generateId(): string {
  if (global.isIOS) {
    return NSUUID.UUID().UUIDString
  }
  if (global.isAndroid) {
    return java.util.UUID.randomUUID().toString();
  }
  return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export interface DownloadEventError {
  status: string;
  message: string;
  native: any;
}

export interface DownloadEventData {
  status: string;
  path: string;
  message?: string;
}

export interface ProgressEventData {
  value: number;
  currentSize: number;
  totalSize: number;
  speed: number;
}

export enum StatusCode {
  PENDING = 'pending',
  PAUSED = 'paused',
  DOWNLOADING = 'downloading',
  COMPLETED = 'completed',
  ERROR = 'error'
}

export interface DownloadOptions {
  url: string;
  query?: Object | string;
  headers?: Object;
  path?: string;
  fileName?: string;
}


export interface DownloadsData {
  status?: StatusCode;
  resolve?: Function;
  reject?: Function;
  callback?: Function;
  request?: any;
  path?: string;
}

import {
  S3AuthOptions,
  S3Base,
  S3DownloadOptions,
  S3UploadOptions
} from './common';

export {
  UploadEventData,
  DownloadEventData,
  S3AuthOptions,
  StatusCode,
  S3EventError,
  ProgressEventData,
  S3DownloadOptions,
  S3UploadOptions
} from './common';

export declare class S3 extends S3Base {
  constructor();

  public static init(options: S3AuthOptions): void;

  public createUpload(options: S3UploadOptions): number;

  public createDownload(options: S3DownloadOptions): number;

  public pause(id: number): void;

  public resume(id: number): void;

  public cancel(id: number): void;
}

import {
  DownloaderBase,
  DownloadEventData,
  DownloadOptions,
  StatusCode
} from './common';

export {
  DownloadEventData,
  DownloadOptions,
  StatusCode,
  DownloadEventError,
  ProgressEventData
} from './common';
export const PROGRESS_EVENT = 'progress';
export const STATUS_EVENT = 'status';

export declare class Downloader extends DownloaderBase {

  static setTimeout(timeout: number): void;

  createDownload(options: DownloadOptions): string;

  getStatus(id: string): StatusCode;

  start(id: string, progress?: Function): Promise<DownloadEventData>;

  resume(id: string): void;

  cancel(id: string): void;

  pause(id: string): void;

  getPath(id: string): string;
}

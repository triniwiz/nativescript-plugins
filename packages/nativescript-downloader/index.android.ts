import {
  DownloaderBase,
  DownloadOptions,
  StatusCode,
  ProgressEventData,
  DownloadEventData,
  generateId,
  DownloadEventError,
  DownloadsData
} from './common';
import {Utils, path as nsPath} from "@nativescript/core";

export {DownloadsData, DownloadOptions, ProgressEventData, DownloadEventData, DownloadEventError};

declare const com, co;

export class Downloader extends DownloaderBase {
  private fetch;
  downloadsData: Map<String, DownloadsData>;
  private manager;
  private worker: Worker;
  downloadRequests: Map<any, any>;
  taskIds: Map<string, string>;

  constructor() {
    super();
    this.downloads = new Map();
    this.downloadsData = new Map();
    this.downloadRequests = new Map();
    this.taskIds = new Map();
  }

  public static init() {
    co.fitcom.fancydownloader.Manager.init(Utils.ad.getApplicationContext());
  }

  public static setTimeout(timeout: number) {
    const manager = co.fitcom.fancydownloader.Manager.getInstance() as any;
    manager.setTimeout(timeout);
  }

  public createDownload(options: DownloadOptions): string {
    if (options && !options.url) throw new Error('Url missing');
    const taskId = generateId();

    if (!this.manager) {
      this.manager = co.fitcom.fancydownloader.Manager.getInstance();
    }
    let url;
    let query;
    if (options.query) {
      if (typeof options.query === 'object') {
        const keysArray = Object.keys(options.query);
        query = '';
        for (let key of keysArray) {
          query += key + '=' + options.query[key] + '&';
        }
      } else if (typeof options.query === 'string') {
        query = options.query;
      }
      url = encodeURI(options.url + query);
    } else {
      url = options.url;
    }

    const request = new co.fitcom.fancydownloader.Request(url);
    let path = '';
    if (options.path) {
      request.setFilePath(options.path);
    }
    if (options.fileName) {
      request.setFileName(options.fileName);
    }
    if (options.headers) {
      const keysArray = Object.keys(options.headers);
      const headers = new java.util.HashMap();
      for (let key of keysArray) {
        headers.put(key, options.headers[key]);
      }
      request.setHeaders(headers);
    }

    const task = this.manager.create(request);
    path = nsPath.join(request.getFilePath(), request.getFileName());
    this.taskIds.set(task, taskId);
    this.downloads.set(taskId, task);
    this.downloadRequests.set(taskId, request);
    this.downloadsData.set(taskId, {
      status: StatusCode.PENDING
    });
    return taskId;
  }

  public getStatus(id: string): StatusCode {
    if (id && this.downloads.has(id)) {
      const data = this.downloadsData.get(id);
      return data.status;
    }
    return StatusCode.PENDING;
  }

  public start(id: string, progress?: Function): Promise<DownloadEventData> {
    const ref = new WeakRef(this) as WeakRef<Downloader>;
    return new Promise((resolve, reject) => {
      if (id) {
        const data = this.downloadsData.get(id);
        this.downloadsData.set(
          id,
          Object.assign({}, data, {
            reject: reject,
            resolve: resolve,
            callback: progress
          })
        );

        if (this.downloads.has(id)) {
          const request = this.downloadRequests.get(id);
          const downloadId = this.downloads.get(id);
          if (request) {
            const listener = (co as any).fitcom.fancydownloader.DownloadListenerUI.extend(
              {
                onUIProgress(
                  task: string,
                  currentBytes: number,
                  totalBytes: number,
                  speed: number
                ) {
                  const current = Math.floor(
                    Math.round(currentBytes / totalBytes * 100)
                  );

                  const owner = ref.get();
                  const _id = owner.taskIds.get(task);
                  if (owner.downloads.has(_id)) {
                    const data = owner.downloadsData.get(_id);
                    const callback = data.callback;
                    if (data.status !== StatusCode.DOWNLOADING) {
                      owner.downloadsData.set(
                        _id,
                        Object.assign({}, data, {
                          status: StatusCode.DOWNLOADING
                        })
                      );
                    }
                    if (callback && typeof callback === 'function') {
                      callback(<ProgressEventData>{
                        value: current,
                        speed: speed,
                        currentSize: currentBytes,
                        totalSize: totalBytes
                      });
                    }
                  }
                },

                onUIComplete(task: string) {
                  const owner = ref.get();
                  const _id = owner.taskIds.get(task);
                  if (owner.downloads.has(_id)) {
                    const data = owner.downloadsData.get(_id);
                    const resolve = data.resolve;
                    const _request = owner.downloadRequests.get(_id);
                    if (resolve) {
                      resolve(<DownloadEventData>{
                        status: StatusCode.COMPLETED,
                        path: nsPath.join(
                          _request.getFilePath(),
                          _request.getFileName()
                        )
                      });
                    }
                  }
                },

                onUIError(task: string, error: java.lang.Exception) {
                  const owner = ref.get();
                  const _id = owner.taskIds.get(task);
                  if (owner.downloads.has(_id)) {
                    const data = owner.downloadsData.get(_id);
                    const reject = data.reject;
                    const message = error.getLocalizedMessage();
                    if (reject) {
                      if (
                        message.toLowerCase().indexOf('socket closed') === -1
                      ) {
                        reject(<DownloadEventError>{
                          status: StatusCode.ERROR,
                          message: error.getLocalizedMessage()
                        });
                      }
                    }
                  }
                }
              }
            );
            request.setListener(new listener());
          }
          this.manager.start(downloadId);
        }
      }
    });
  }

  public resume(id: string) {
    if (id) {
      if (this.downloads.has(id)) {
        const downloadId = this.downloads.get(id);
        this.manager.resume(downloadId);
      }
    }
  }

  public cancel(id: string) {
    if (id) {
      if (this.downloads.has(id)) {
        const downloadId = this.downloads.get(id);
        this.manager.cancel(downloadId);
        this.downloads.delete(id);
        this.downloadsData.delete(id);
      }
    }
  }

  public pause(id: string) {
    if (id) {
      if (this.downloads.has(id)) {
        const downloadId = this.downloads.get(id);
        const data = this.downloadsData.get(id);
        this.manager.pause(downloadId);
        setTimeout(() => {
          this.downloadsData.set(
            id,
            Object.assign({}, data, {
              status: StatusCode.PAUSED
            })
          );
        }, 100);
      }
    }
  }

  public getPath(id: string): string {
    if (id && this.downloadsData.has(id)) {
      const download = this.downloadsData.get(id);
      return download.path;
    }
    return null;
  }
}

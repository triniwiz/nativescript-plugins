import { DownloaderBase, DownloadOptions, StatusCode, ProgressEventData, DownloadEventData, generateId, DownloadEventError, DownloadsData } from './common';
import { Utils, path as nsPath, knownFolders } from '@nativescript/core';

export { DownloadsData, DownloadOptions, ProgressEventData, DownloadEventData, DownloadEventError };

export class Downloader extends DownloaderBase {
	static _downloads: Map<string, number>;
	static _downloadsData: Map<string, DownloadsData>;
	static _downloadRequests: Map<number, string>;
	static _fetch: com.tonyodev.fetch2.Fetch;
	static _okHttpClient: okhttp3.OkHttpClient;
	static _timeout = 60;
	constructor() {
		super();
		if (!Downloader._fetch) {
			Downloader._setFetcher();
		}
	}

	private static _setFetcher() {
		if (!this._downloadRequests) {
			Downloader._downloadRequests = new Map();
		}

		if (!this._downloads) {
			Downloader._downloads = new Map();
		}

		if (!this._downloadsData) {
			Downloader._downloadsData = new Map();
		}

		Downloader._okHttpClient = new okhttp3.OkHttpClient.Builder().readTimeout(Downloader._timeout, java.util.concurrent.TimeUnit.SECONDS).writeTimeout(Downloader._timeout, java.util.concurrent.TimeUnit.SECONDS).build();
		const config = new com.tonyodev.fetch2.FetchConfiguration.Builder(Utils.android.getApplicationContext());
		config.setHttpDownloader(new com.tonyodev.fetch2okhttp.OkHttpDownloader(Downloader._okHttpClient));
		config.setDownloadConcurrentLimit(10);
		config.enableAutoStart(false);
		Downloader._fetch = com.tonyodev.fetch2.Fetch.Impl.getInstance(config.build());

		Downloader._fetch.addListener(
			new com.tonyodev.fetch2.FetchListener({
				onAdded(param0: com.tonyodev.fetch2.Download) {},
				onQueued(param0: com.tonyodev.fetch2.Download, param1: boolean) {},
				onWaitingNetwork(param0: com.tonyodev.fetch2.Download) {},
				onCompleted(param0: com.tonyodev.fetch2.Download) {
					const request = param0.getRequest();
					const id = Downloader._downloadRequests.get(request.getId());
					if (Downloader._downloads.has(id)) {
						const data = Downloader._downloadsData.get(id);
						const resolve = data.resolve;

						Downloader._downloadsData.set(
							id,
							Object.assign({}, data, {
								status: StatusCode.COMPLETED,
							})
						);
						if (resolve) {
							resolve(<DownloadEventData>{
								status: StatusCode.COMPLETED,
								path: request.getFileUri()?.toString(),
							});
						}
					}
				},
				onError(param0: com.tonyodev.fetch2.Download, error: com.tonyodev.fetch2.Error, param2: java.lang.Throwable) {
					const id = Downloader._downloadRequests.get(param0.getRequest().getId());
					if (Downloader._downloads.has(id)) {
						const data = Downloader._downloadsData.get(id);

						Downloader._downloadsData.set(
							id,
							Object.assign({}, data, {
								status: StatusCode.ERROR,
							})
						);

						const reject = data.reject;
						if (reject) {
							reject(<DownloadEventError>{
								status: StatusCode.ERROR,
								message: error.getHttpResponse?.().getErrorResponse?.(),
								native: error,
							});
						}
					}
				},
				onDownloadBlockUpdated(param0: com.tonyodev.fetch2.Download, param1: com.tonyodev.fetch2core.DownloadBlock, param2: number) {},
				onStarted(param0: com.tonyodev.fetch2.Download, param1: java.util.List<any>, param2: number) {},
				onProgress(param0: com.tonyodev.fetch2.Download, param1: number, param2: number) {
					const id = Downloader._downloadRequests.get(param0.getRequest().getId());
					if (Downloader._downloads.has(id)) {
						const data = Downloader._downloadsData.get(id);
						const callback = data.callback;
						if (data.status !== StatusCode.DOWNLOADING) {
							Downloader._downloadsData.set(
								id,
								Object.assign({}, data, {
									status: StatusCode.DOWNLOADING,
								})
							);
						}
						if (callback && typeof callback === 'function') {
							const progress = param0.getProgress();
							callback(<ProgressEventData>{
								value: progress,
								speed: param2,
								currentSize: param0.getDownloaded(),
								totalSize: param0.getTotal(),
							});
						}
					}
				},
				onPaused(param0: com.tonyodev.fetch2.Download) {
					const requestId = Downloader._downloadRequests.get(param0.getRequest().getId());
					if (Downloader._downloads.has(requestId)) {
						const data = Downloader._downloadsData.get(requestId);
						Downloader._downloadsData.set(
							requestId,
							Object.assign({}, data, {
								status: StatusCode.PAUSED,
							})
						);
					}
				},
				onResumed(param0: com.tonyodev.fetch2.Download) {},
				onCancelled(param0: com.tonyodev.fetch2.Download) {},
				onRemoved(param0: com.tonyodev.fetch2.Download) {},
				onDeleted(param0: com.tonyodev.fetch2.Download) {},
			})
		);
	}

	public static setTimeout(timeout: number) {
		Downloader._timeout = timeout;
		Downloader._setFetcher();
	}

	public createDownload(options: DownloadOptions): string {
		if (options && !options.url) throw new Error('Url missing');
		const taskId = generateId();

		let url;
		let query;
		if (options.query) {
			if (typeof options.query === 'object') {
				const keysArray = Object.keys(options.query);
				query = '';
				for (const key of keysArray) {
					query += key + '=' + options.query[key] + '&';
				}
			} else if (typeof options.query === 'string') {
				query = options.query;
			}
			url = encodeURI(options.url + query);
		} else {
			url = options.url;
		}

		let path = '';
		if (options.path && options.fileName) {
			path = nsPath.join(options.path, options.fileName);
		} else if (!options.path && options.fileName) {
			path = nsPath.join(knownFolders.temp().path, options.fileName);
		} else if (options.path && !options.fileName) {
			path = nsPath.join(options.path, `${generateId()}`);
		} else {
			path = nsPath.join(knownFolders.temp().path, `${generateId()}`);
		}

		const request = new com.tonyodev.fetch2.Request(url, path);
		request.setNetworkType(com.tonyodev.fetch2.NetworkType.ALL);
		request.setDownloadOnEnqueue(false);

		if (options.headers) {
			const keysArray = Object.keys(options.headers);
			for (const key of keysArray) {
				request.addHeader(key, options.headers[key]);
			}
		}

		Downloader._fetch.enqueue(request, null, null);
		const requestId = request.getId();
		Downloader._downloads.set(taskId, requestId);
		Downloader._downloadRequests.set(requestId, taskId);
		Downloader._downloadsData.set(taskId, {
			status: StatusCode.PENDING,
		});
		return taskId;
	}

	public getStatus(id: string): StatusCode {
		if (id && Downloader._downloads.has(id)) {
			const data = Downloader._downloadsData.get(id);
			return data.status;
		}
		return StatusCode.PENDING;
	}

	public start(id: string, progress?: Function): Promise<DownloadEventData> {
		return new Promise((resolve, reject) => {
			if (id) {
				const data = Downloader._downloadsData.get(id);
				Downloader._downloadsData.set(
					id,
					Object.assign({}, data, {
						reject: reject,
						resolve: resolve,
						callback: progress,
					})
				);

				if (Downloader._downloads.has(id)) {
					const requestId = Downloader._downloads.get(id);
					if (requestId) {
						Downloader._fetch.resume(requestId);
					}
				}
			}
		});
	}

	public resume(id: string) {
		if (id) {
			if (Downloader._downloads.has(id)) {
				const requestId = Downloader._downloads.get(id);
				Downloader._fetch.resume(requestId);
			}
		}
	}

	public cancel(id: string) {
		if (id) {
			if (Downloader._downloads.has(id)) {
				const requestId = Downloader._downloads.get(id);
				Downloader._fetch.cancel(requestId);
				Downloader._downloads.delete(id);
				Downloader._downloadsData.delete(id);
				Downloader._downloadRequests.delete(requestId);
			}
		}
	}

	public pause(id: string) {
		if (id) {
			if (Downloader._downloads.has(id)) {
				const requestId = Downloader._downloads.get(id);
				Downloader._fetch.pause(requestId);
			}
		}
	}

	public getPath(id: string): string {
		if (id && Downloader._downloadsData.has(id)) {
			const download = Downloader._downloadsData.get(id);
			return download.path;
		}
		return null;
	}
}

import { DownloaderBase, DownloadOptions, DownloadEventData, StatusCode, ProgressEventData, generateId } from './common';

export class Downloader extends DownloaderBase {
	constructor() {
		super();
		this.downloadsData = new Map();
	}

	public static setTimeout(timeout: number) {
		NSCDownloader.timeOut = timeout;
	}

	public createDownload(options: DownloadOptions): string {
		if (options && !options.url) throw new Error('Url missing');
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

		const ref = new WeakRef(this);

		const id = NSCDownloader.createDownload(
			url,
			options.path ?? null,
			options.fileName ?? null,
			options.headers ?? (null as any),
			(id, current, speed, currentBytes, totalBytes) => {
				const owner = ref.deref();
				if (owner.downloadsData.has(id)) {
					const data = owner.downloadsData.get(id);
					const callback = data.callback;
					if (callback && typeof callback === 'function') {
						callback(<ProgressEventData>{
							value: current,
							speed: speed,
							currentSize: currentBytes,
							totalSize: totalBytes,
						});
					}
				}
			},
			(id, path, error) => {
				const owner = ref.deref();
				if (error) {
					if (owner.downloadsData.has(id)) {
						const data = owner.downloadsData.get(id);
						const reject = data.reject;

						owner.downloadsData.set(
							id,
							Object.assign({}, data, {
								status: StatusCode.ERROR,
							})
						);

						reject({
							status: StatusCode.ERROR,
							message: error,
						});
					}
				} else {
					if (owner.downloadsData.has(id)) {
						const data = owner.downloadsData.get(id);
						const resolve = data.resolve;

						owner.downloadsData.set(
							id,
							Object.assign({}, data, {
								status: StatusCode.COMPLETED,
							})
						);

						resolve(<DownloadEventData>{
							status: StatusCode.COMPLETED,
							message: null,
							path,
						});
					}
				}
			}
		);
		this.downloadsData.set(id, {});

		return id;
	}

	public start(id: string, progress?: Function): Promise<DownloadEventData> {
		return new Promise((resolve, reject) => {
			if (id && NSCDownloader.has(id)) {
				const data = this.downloadsData.get(id);
				this.downloadsData.set(
					id,
					Object.assign({}, data, {
						reject: reject,
						resolve: resolve,
						callback: progress,
					})
				);

				NSCDownloader.start(id);
			} else {
				reject({ message: 'Download ID not found.' });
			}
		});
	}

	public getStatus(id: string): StatusCode {
		switch (NSCDownloader.getStatus(id)) {
			case 0:
				return StatusCode.PENDING;
			case 1:
				return StatusCode.PAUSED;
			case 2:
				return StatusCode.DOWNLOADING;
			case 3:
				return StatusCode.COMPLETED;
			case 4:
				return StatusCode.ERROR;
			default:
				return StatusCode.PENDING;
		}
	}

	public pause(id: string) {
		NSCDownloader.pause(id);
	}

	public resume(id: string): void {
		NSCDownloader.resume(id);
	}

	public cancel(id: string): void {
		NSCDownloader.cancel(id);
	}

	public getPath(id: string): string {
		return NSCDownloader.getPath(id);
	}
}

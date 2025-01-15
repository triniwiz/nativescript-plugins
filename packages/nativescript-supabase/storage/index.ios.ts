import { dataDeserialize } from '@nativescript/core/utils';
import type { SupabaseClient } from '../index';
import { FileOptions, SearchOptions, TransformOptions } from '.';
type Client = SupabaseClient & { native: NSCSupabaseClient };

class FileUploadResponse {
	native_: NSCSupabseStorageFileUploadResponse;

	static fromNative(value: NSCSupabseStorageFileUploadResponse): FileUploadResponse {
		if (!value) return null;
		const ret = new FileUploadResponse();
		ret.native_ = value;
		return ret;
	}

	get native() {
		return this.native_;
	}

	get fullPath(): string {
		return this.native.fullPath;
	}

	get id(): string {
		return this.native.id;
	}

	get path(): string {
		return this.native.path;
	}
}

class SignedURLUploadResponse {
	native_: NSCSupabseStorageSignedURLUploadResponse;
	static fromNative(value: NSCSupabseStorageSignedURLUploadResponse): SignedURLUploadResponse {
		if (!value) return null;
		const ret = new SignedURLUploadResponse();
		ret.native_ = value;
		return ret;
	}

	get native() {
		return this.native_;
	}

	get fullPath(): string {
		return this.native.fullPath;
	}

	get path(): string {
		return this.native.path;
	}
}

class SignedUploadURL {
	native_: NSCSupabseStorageSignedUploadURL;

	public static fromNative(value: NSCSupabseStorageSignedUploadURL): SignedUploadURL {
		if (!value) return null;
		const ret = new SignedUploadURL();
		ret.native_ = value;
		return ret;
	}

	get native() {
		return this.native_;
	}

	get path(): string {
		return this.native.path;
	}

	get signedURL(): string {
		return this.native.signedURL;
	}

	get token(): string {
		return this.native.token;
	}
}

class FileObject {
	native_: NSCSupabseStorageFileObject;

	static fromNative(value: NSCSupabseStorageFileObject): FileObject {
		if (!value) return null;
		const ret = new FileObject();
		ret.native_ = value;
		return ret;
	}

	get native() {
		return this.native_;
	}

	get bucketId(): string {
		return this.native.bucketId;
	}

	get buckets(): StorageBucket {
		return StorageBucket.fromNative(this.native.buckets);
	}

	get createdAt(): Date {
		return this.native.createdAt;
	}

	get id(): string {
		return this.native.id;
	}

	get lastAccessedAt(): Date {
		return this.native.lastAccessedAt;
	}

	get metadata(): Record<string, any> {
		return dataDeserialize(this.native.metadata);
	}

	get name(): string {
		return this.native.name;
	}

	get owner(): string {
		return this.native.owner;
	}

	get updatedAt(): Date {
		return this.native.updatedAt;
	}
}

function parseTransformOptions(options?: TransformOptions) {
	if (!options) {
		return null;
	}
	const ret = NSCSupabseStorageTransformOptions.new();
	if ('format' in options) {
		ret.format = options.format;
	}
	if ('height' in options) {
		ret.height = options.height;
	}
	if ('quality' in options) {
		ret.quality = options.quality;
	}
	if ('resize' in options) {
		ret.resize = options.resize;
	}
	if ('width' in options) {
		ret.width = options.width;
	}
	return ret;
}

function parseDownload(download: string | boolean | null | undefined): string | null {
	switch (typeof download) {
		case 'string':
			return download;
		case 'boolean':
			return download ? '' : null;
		default:
			return null;
	}
}

function parseSearch(options?: SearchOptions) {
	if (!options) {
		return null;
	}
	const ret = NSCSupabseStorageSearchOptions.new();
	if ('limit' in options) {
		ret.limit = options.limit;
	}
	if ('offset' in options) {
		ret.offset = options.offset;
	}
	if ('search' in options) {
		ret.search = options.search;
	}
	if ('sortBy' in options) {
		if ('column' in options.sortBy || 'order' in options.sortBy) {
			ret.sortBy = NSCSupabseStorageSortBy.new();
			ret.sortBy.column = options.sortBy.column;
			ret.sortBy.order = options.sortBy.order;
		}
	}
	return ret;
}

function parseFileOptions(options?: FileOptions) {
	if (!options) {
		return null;
	}
	const ret = NSCSupabseStorageFileOptions.new();
	if ('cacheControl' in options) {
		ret.cacheControl = options.cacheControl;
	}
	if ('contentType' in options) {
		ret.contentType = options.contentType;
	}
	if ('duplex' in options) {
		ret.duplex = options.duplex;
	}
	if ('headers' in options) {
		ret.headers = options.headers as never;
	}
	if ('metadata' in options) {
		ret.metadata = options.metadata as never;
	}
	if ('upsert' in options) {
		ret.upsert = options.upsert;
	}
	return ret;
}

export class StorageBucket {
	native_: NSCSupabseStorageBucket;

	static fromNative(value: NSCSupabseStorageBucket): StorageBucket {
		if (!value) return null;
		const ret = new StorageBucket();
		ret.native_ = value;
		return ret;
	}

	get native() {
		return this.native_;
	}

	get allowedMimeTypes(): string[] {
		return dataDeserialize(this.native.allowedMimeTypes);
	}

	get createdAt(): Date {
		return this.native.createdAt;
	}

	get id(): string {
		return this.native.id;
	}

	get isPublic(): boolean {
		return this.native.isPublic;
	}

	get name(): string {
		return this.native.name;
	}

	get owner(): string {
		return this.native.owner;
	}

	get updatedAt(): Date {
		return this.native.updatedAt;
	}
}

export class StorageFileApi {
	native_: NSCSupabseStorageFileApi;
	static fromNative(value: NSCSupabseStorageFileApi): StorageFileApi {
		if (!value) return null;
		const ret = new StorageFileApi();
		ret.native_ = value;
		return ret;
	}

	get native() {
		return this.native_;
	}

	copy(fromPath: string, toPath: string) {
		return new Promise<string>((resolve, reject) => {
			this.native.copy(fromPath, toPath, (path, error) => {
				if (error) {
					reject(error);
				} else {
					resolve(path);
				}
			});
		});
	}

	createSignedUploadUrl(path: string) {
		return new Promise<SignedUploadURL>((resolve, reject) => {
			this.native.createSignedUploadUrl(path, (url, error) => {
				if (error) {
					reject(error);
				} else {
					resolve(SignedUploadURL.fromNative(url));
				}
			});
		});
	}

	createSignedUrl(path: string, expiresIn: number, options?: { download?: string | boolean; transform: TransformOptions }) {
		return new Promise<string>((resolve, reject) => {
			this.native.createSignedUrl(path, expiresIn, parseDownload(options?.download), parseTransformOptions(options?.transform), (url, error) => {
				if (error) {
					reject(error);
				} else {
					resolve(url);
				}
			});
		});
	}

	createSignedUrls(
		paths: string[],
		expiresIn: number,
		options?: {
			download: string | boolean;
		}
	) {
		return new Promise<string[]>((resolve, reject) => {
			this.native.createSignedUrls(paths, expiresIn, parseDownload(options?.download), (urls, error) => {
				if (error) {
					reject(error);
				} else {
					resolve(dataDeserialize(urls));
				}
			});
		});
	}

	download(path: string, options?: TransformOptions) {
		return new Promise<ArrayBuffer>((resolve, reject) => {
			this.native.download(path, parseTransformOptions(options), (data, error) => {
				if (error) {
					reject(error);
				} else {
					resolve(interop.bufferFromData(data));
				}
			});
		});
	}

	getPublicUrlError(path: string, options?: { transform: TransformOptions; download?: string | boolean }) {
		try {
			return this.native.getPublicUrlError(path, parseDownload(options?.download ?? null), parseTransformOptions(options?.transform ?? null));
		} catch (error) {
			throw new Error(error.message);
		}
	}

	list(path?: string, options?: SearchOptions) {
		return new Promise<FileObject[]>((resolve, reject) => {
			this.native.list(path ?? null, parseSearch(options), (files, error) => {
				if (error) {
					reject(error);
				} else {
					const count = files.count;
					const ret = new Array<FileObject>(count);
					for (let i = 0; i < count; i++) {
						ret[i] = FileObject.fromNative(files.objectAtIndex(i));
					}
					resolve(ret);
				}
			});
		});
	}

	move(fromPath: string, toPath: string) {
		return new Promise<void>((resolve, reject) => {
			this.native.move(fromPath, toPath, (error) => {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
		});
	}

	remove(paths: string[]) {
		return new Promise<StorageFileObject[]>((resolve, reject) => {
			this.native.remove(paths, (files, error) => {
				if (error) {
					reject(error);
				} else {
					const count = files.count;
					const ret = new Array<StorageFileObject>(count);
					for (let i = 0; i < count; i++) {
						ret[i] = StorageFileObject.fromNative(files.objectAtIndex(i));
					}
					resolve(ret);
				}
			});
		});
	}

	update(path: string, data: ArrayBuffer | string, options: FileOptions) {
		return new Promise<FileUploadResponse>((resolve, reject) => {
			if (typeof data === 'string') {
				this.native.updateFile(path, NSURL.URLWithString('file://' + data), parseFileOptions(options), (response, error) => {
					if (error) {
						reject(error);
					} else {
						resolve(FileUploadResponse.fromNative(response));
					}
				});
			} else {
				this.native.updateData(path, NSData.dataWithData(data as never), parseFileOptions(options), (response, error) => {
					if (error) {
						reject(error);
					} else {
						resolve(FileUploadResponse.fromNative(response));
					}
				});
			}
		});
	}

	upload(path: string, data: ArrayBuffer | string, options: FileOptions) {
		return new Promise<FileUploadResponse>((resolve, reject) => {
			if (typeof data === 'string') {
				this.native.uploadFile(path, NSURL.URLWithString('file://' + data), parseFileOptions(options), (response, error) => {
					if (error) {
						reject(error);
					} else {
						resolve(FileUploadResponse.fromNative(response));
					}
				});
			} else {
				this.native.updateData(path, NSData.dataWithData(data as never), parseFileOptions(options), (response, error) => {
					if (error) {
						reject(error);
					} else {
						resolve(FileUploadResponse.fromNative(response));
					}
				});
			}
		});
	}

	uploadToSignedUrlData(path: string, token: string, data: ArrayBuffer, options: FileOptions) {
		return new Promise<SignedURLUploadResponse>((resolve, reject) => {
			this.native.uploadToSignedUrlData(path, token, NSData.dataWithData(data as never), options, (response, error) => {
				if (error) {
					reject(error);
				} else {
					resolve(SignedURLUploadResponse.fromNative(response));
				}
			});
		});
	}
}

export class StorageFileObject {
	native_: NSCSupabseStorageFileObject;
	static fromNative(value: NSCSupabseStorageFileObject): StorageFileObject {
		if (!value) return null;
		const ret = new StorageFileObject();
		ret.native_ = value;
		return ret;
	}

	get native() {
		return this.native_;
	}
	get bucketId(): string {
		return this.native.bucketId;
	}

	get buckets(): StorageBucket {
		return StorageBucket.fromNative(this.native.buckets);
	}

	get createdAt(): Date {
		return this.native.createdAt;
	}

	get id(): string {
		return this.native.id;
	}

	get lastAccessedAt(): Date {
		return this.native.lastAccessedAt;
	}

	get metadata() {
		return dataDeserialize(this.native.metadata);
	}

	get name(): string {
		return this.native.name;
	}

	get owner(): string {
		return this.native.owner;
	}

	get updatedAt(): Date {
		return this.native.updatedAt;
	}
}

export class SupabaseStorageClient {
	client: Client;
	constructor(client: Client) {
		this.client = client;
	}

	get native() {
		return this.client.native.storage;
	}
	createBucket(id: string, options?: BucketOptions) {
		return new Promise<void>((resolve, reject) => {
			let opt: NSCSupabseStorageBucketOptions | null = null;
			if (options) {
				opt = NSCSupabseStorageBucketOptions.new();
				if ('allowedMimeTypes' in opt) {
					opt.allowedMimeTypes = options.allowedMimeTypes as never;
				}
				if ('isPublic' in options) {
					opt.public_ = options.isPublic;
				}

				if ('fileSizeLimit' in options) {
					opt.fileSizeLimit = `${options.fileSizeLimit}`;
				}
			}

			this.native.createBucket(id, opt, (error) => {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
		});
	}

	getBucket(id: string) {
		return new Promise((reject, resolve) => {
			this.native.getBucket(id, (bucket, error) => {
				if (error) {
					reject(error);
				} else {
					resolve(StorageBucket.fromNative(bucket));
				}
			});
		});
	}

	listBuckets(id: string) {
		return new Promise((resolve, reject) => {
			this.native.listBuckets(id, (buckets, error) => {
				if (error) {
					reject(error);
				} else {
					const count = buckets.count;
					const ret = new Array<StorageBucket>(count);
					for (let i = 0; i < count; i++) {
						ret[i] = StorageBucket.fromNative(buckets.objectAtIndex(i));
					}
					resolve(ret);
				}
			});
		});
	}

	updateBucket(id: string, options?: BucketOptions) {
		return new Promise<void>((resolve, reject) => {
			let opt: NSCSupabseStorageBucketOptions | null = null;
			if (options) {
				opt = NSCSupabseStorageBucketOptions.new();
				if ('allowedMimeTypes' in opt) {
					opt.allowedMimeTypes = options.allowedMimeTypes as never;
				}
				if ('isPublic' in options) {
					opt.public_ = options.isPublic;
				}

				if ('fileSizeLimit' in options) {
					opt.fileSizeLimit = `${options.fileSizeLimit}`;
				}
			}

			this.native.updateBucket(id, opt, (error) => {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
		});
	}

	deleteBucket(id: string) {
		return new Promise<void>((resolve, reject) => {
			this.native.deleteBucket(id, (error) => {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
		});
	}

	emptyBucket(id: string) {
		return new Promise<void>((resolve, reject) => {
			this.native.emptyBucket(id, (error) => {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
		});
	}

	from(id: string): StorageFileApi {
		return StorageFileApi.fromNative(this.native.from(id));
	}
}

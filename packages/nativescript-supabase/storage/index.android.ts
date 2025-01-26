import { Utils } from '@nativescript/core';
import type { SupabaseClient } from '../index';
import { BucketOptions, FileOptions, SearchOptions, TransformOptions } from '.';
import { dataDeserialize, serialize } from '../utils';
declare const kotlin: any;
type Client = SupabaseClient & { native: io.github.triniwiz.supabase.SupabaseClient };

class FileUploadResponse {
	native_: io.github.jan.supabase.storage.FileUploadResponse;

	static fromNative(value: io.github.jan.supabase.storage.FileUploadResponse): FileUploadResponse {
		if (!value) return null;
		const ret = new FileUploadResponse();
		ret.native_ = value;
		return ret;
	}

	get native() {
		return this.native_;
	}

	get fullPath(): string {
		return this.native.getKey();
	}

	get id(): string {
		return this.native.getId();
	}

	get path(): string {
		return this.native.getPath();
	}
}

class SignedURLUploadResponse {
	native_: io.github.jan.supabase.storage.FileUploadResponse;
	static fromNative(value: io.github.jan.supabase.storage.FileUploadResponse): SignedURLUploadResponse {
		if (!value) return null;
		const ret = new SignedURLUploadResponse();
		ret.native_ = value;
		return ret;
	}

	get native() {
		return this.native_;
	}

	get fullPath(): string {
		return this.native.getKey();
	}

	get path(): string {
		return this.native.getPath();
	}
}

class SignedUploadURL {
	native_: io.github.jan.supabase.storage.UploadSignedUrl;

	public static fromNative(value: io.github.jan.supabase.storage.UploadSignedUrl): SignedUploadURL {
		if (!value) return null;
		const ret = new SignedUploadURL();
		ret.native_ = value;
		return ret;
	}

	get native() {
		return this.native_;
	}

	get path(): string {
		return this.native.getPath();
	}

	get signedURL(): string {
		return this.native.getUrl();
	}

	get token(): string {
		return this.native.getToken();
	}
}

class FileObject {
	native_: io.github.jan.supabase.storage.FileObject;

	static fromNative(value: io.github.jan.supabase.storage.FileObject): FileObject {
		if (!value) return null;
		const ret = new FileObject();
		ret.native_ = value;
		return ret;
	}

	get native() {
		return this.native_;
	}

	get bucketId(): string {
		return this.native.getId();
	}

	get createdAt(): Date {
		const date = this.native.getCreatedAt();
		if (!date) return null;
		return new Date(date.toEpochMilliseconds());
	}

	get id(): string {
		return this.native.getId();
	}

	get lastAccessedAt(): Date {
		const date = this.native.getLastAccessedAt();
		if (!date) return null;
		return new Date(date.toEpochMilliseconds());
	}

	get metadata(): Record<string, any> {
		return dataDeserialize(this.native.getMetadata(), true);
	}

	get name(): string {
		return this.native.getName();
	}

	get owner(): string {
		return '';
	}

	get updatedAt(): Date {
		const date = this.native.getUpdatedAt();
		if (!date) return null;
		return new Date(date.toEpochMilliseconds());
	}

	toJSON() {
		return {
			bucketId: this.bucketId,
			createdAt: this.createdAt,
			id: this.id,
			lastAccessedAt: this.lastAccessedAt,
			metadata: this.metadata,
			name: this.name,
			owner: this.owner,
			updatedAt: this.updatedAt,
		};
	}
}

function parseTransformOptions(options?: TransformOptions) {
	const ret = new io.github.triniwiz.supabase.SupabseStorage.FileApi.TransformOptions();
	if (options) {
		if ('format' in options) {
			ret.setFormat(options.format);
		}
		if ('height' in options) {
			ret.setHeight(java.lang.Integer.valueOf(options.height));
		}
		if ('quality' in options) {
			ret.setQuality(java.lang.Integer.valueOf(options.quality));
		}
		if ('resize' in options) {
			ret.setResize(options.resize);
		}
		if ('width' in options) {
			ret.setWidth(java.lang.Integer.valueOf(options.width));
		}
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
	const ret = new io.github.triniwiz.supabase.SupabseStorage.FileApi.SearchOptions();
	if ('limit' in options) {
		ret.setLimit(java.lang.Integer.valueOf(options.limit));
	}
	if ('offset' in options) {
		ret.setOffset(java.lang.Integer.valueOf(options.offset));
	}
	if ('search' in options) {
		ret.setSearch(options.search);
	}
	if ('sortBy' in options) {
		if ('column' in options.sortBy || 'order' in options.sortBy) {
			const sort = new io.github.triniwiz.supabase.SupabseStorage.FileApi.SortBy();
			sort.setColumn(options.sortBy.column);
			sort.setOrder(options.sortBy.order);
			ret.setSortBy(sort);
		}
	}
	return ret;
}

function parseFileOptions(options?: FileOptions) {
	if (!options) {
		return null;
	}
	const ret = new io.github.triniwiz.supabase.SupabseStorage.FileApi.FileOptions();
	if ('cacheControl' in options) {
		ret.setCacheControl(options.cacheControl);
	}
	if ('contentType' in options) {
		ret.setContentType(options.contentType);
	}
	if ('duplex' in options) {
		ret.setDuplex(options.duplex);
	}
	if ('headers' in options) {
		let headers: java.util.HashMap<string, string> = null;
		const params = Object.keys(options.headers);
		if (params.length > 0) {
			headers = new java.util.HashMap(params.length);
			for (const key in options.headers) {
				headers.put(key, options.headers[key]);
			}
		}
		if (headers) {
			ret.setHeaders(headers);
		}
	}
	if ('metadata' in options) {
		const metadata = serialize(options.metadata);
		if (metadata) {
			ret.setMetadata(metadata);
		}
	}
	if ('upsert' in options) {
		ret.setUpsert(!!options.upsert);
	}
	return ret;
}

export class StorageBucket {
	native_: io.github.jan.supabase.storage.Bucket;

	static fromNative(value: io.github.jan.supabase.storage.Bucket): StorageBucket {
		if (!value) return null;
		const ret = new StorageBucket();
		ret.native_ = value;
		return ret;
	}

	get native() {
		return this.native_;
	}

	get allowedMimeTypes(): string[] {
		return Utils.dataDeserialize(this.native.getAllowedMimeTypes());
	}

	get createdAt(): Date {
		return new Date(this.native.getCreatedAt().toEpochMilliseconds());
	}

	get id(): string {
		return this.native.getId();
	}

	get isPublic(): boolean {
		return this.native.getPublic();
	}

	get name(): string {
		return this.native.getName();
	}

	get owner(): string {
		return this.native.getOwner();
	}

	get updatedAt(): Date {
		const date = this.native.getUpdatedAt();
		if (!date) {
			return null;
		}
		return new Date(date.toEpochMilliseconds());
	}

	toJSON() {
		return {
			allowedMimeTypes: this.allowedMimeTypes,
			createdAt: this.createdAt,
			id: this.id,
			isPublic: this.isPublic,
			name: this.name,
			owner: this.owner,
			updatedAt: this.updatedAt,
		};
	}
}

export class StorageFileApi {
	native_: io.github.triniwiz.supabase.SupabseStorage.FileApi;
	static fromNative(value: io.github.triniwiz.supabase.SupabseStorage.FileApi): StorageFileApi {
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
			this.native.copy(
				fromPath,
				toPath,
				new kotlin.jvm.functions.Function2({
					invoke(path, error) {
						if (error) {
							reject(error);
						} else {
							resolve(path);
						}
					},
				})
			);
		});
	}

	createSignedUploadUrl(path: string) {
		return new Promise<SignedUploadURL>((resolve, reject) => {
			this.native.createSignedUploadUrl(
				path,
				new kotlin.jvm.functions.Function2({
					invoke(response, error) {
						if (error) {
							reject(error);
						} else {
							resolve(SignedUploadURL.fromNative(response));
						}
					},
				})
			);
		});
	}

	createSignedUrl(path: string, expiresIn: number, options?: { download?: string | boolean; transform: TransformOptions }) {
		return new Promise<string>((resolve, reject) => {
			this.native.createSignedUrl(
				path,
				expiresIn,
				parseDownload(options?.download),
				parseTransformOptions(options?.transform),
				new kotlin.jvm.functions.Function2({
					invoke(url, error) {
						if (error) {
							reject(error);
						} else {
							resolve(url);
						}
					},
				})
			);
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
			this.native.createSignedUrls(
				paths,
				expiresIn,
				parseDownload(options?.download),
				new kotlin.jvm.functions.Function2({
					invoke(urls, error) {
						if (error) {
							reject(error);
						} else {
							resolve(dataDeserialize(urls));
						}
					},
				})
			);
		});
	}

	download(path: string, options?: TransformOptions) {
		return new Promise<ArrayBuffer>((resolve, reject) => {
			this.native.download(
				path,
				parseTransformOptions(options),
				new kotlin.jvm.functions.Function2({
					invoke(data, error) {
						if (error) {
							reject(error);
						} else {
							resolve((<any>ArrayBuffer).from(data));
						}
					},
				})
			);
		});
	}

	getPublicUrl(path: string, options?: { transform: TransformOptions; download?: string | boolean }) {
		try {
			return this.native.getPublicUrl(path, parseDownload(options?.download ?? null), parseTransformOptions(options?.transform ?? null));
		} catch (error) {
			throw new Error(error.message);
		}
	}

	list(path?: string, options?: SearchOptions) {
		return new Promise<FileObject[]>((resolve, reject) => {
			this.native.list(
				path ?? null,
				parseSearch(options),
				new kotlin.jvm.functions.Function2({
					invoke(files, error) {
						if (error) {
							reject(error);
						} else {
							const count = files.size();
							const ret = new Array<FileObject>(count);
							for (let i = 0; i < count; i++) {
								ret[i] = FileObject.fromNative(files.get(i));
							}
							resolve(ret);
						}
					},
				})
			);
		});
	}

	move(fromPath: string, toPath: string) {
		return new Promise<{ data; error }>((resolve, reject) => {
			this.native.move(
				fromPath,
				toPath,
				new kotlin.jvm.functions.Function2({
					invoke(path, error) {
						if (error) {
							reject(error);
						} else {
							resolve({
								data: {
									message: 'Successfully moved',
								},
								error: null,
							});
						}
					},
				})
			);
		});
	}

	remove(paths: string[]) {
		return new Promise<FileObject[]>((resolve, reject) => {
			this.native.remove(
				paths,
				new kotlin.jvm.functions.Function2({
					invoke(files, error) {
						if (error) {
							reject(error);
						} else {
							const count = files.size();
							const ret = new Array<FileObject>(count);
							for (let i = 0; i < count; i++) {
								ret[i] = FileObject.fromNative(files.get(i));
							}
							resolve(ret);
						}
					},
				})
			);
		});
	}

	update(path: string, data: ArrayBuffer | string, options: FileOptions) {
		return new Promise<FileUploadResponse>((resolve, reject) => {
			if (typeof data === 'string') {
				this.native.update(
					path,
					new java.io.File(data),
					parseFileOptions(options),
					new kotlin.jvm.functions.Function2({
						invoke(response, error) {
							if (error) {
								reject(error);
							} else {
								resolve(FileUploadResponse.fromNative(response));
							}
						},
					})
				);
			} else {
				this.native.update(
					path,
					data as never,
					parseFileOptions(options),
					new kotlin.jvm.functions.Function2({
						invoke(response, error) {
							if (error) {
								reject(error);
							} else {
								resolve(FileUploadResponse.fromNative(response));
							}
						},
					})
				);
			}
		});
	}

	upload(path: string, data: ArrayBuffer | string, options: FileOptions) {
		return new Promise<FileUploadResponse>((resolve, reject) => {
			if (typeof data === 'string') {
				this.native.upload(
					path,
					new java.io.File(data),
					parseFileOptions(options),
					new kotlin.jvm.functions.Function2({
						invoke(response, error) {
							if (error) {
								reject(error);
							} else {
								resolve(FileUploadResponse.fromNative(response));
							}
						},
					})
				);
			} else {
				this.native.upload(
					path,
					data as never,
					parseFileOptions(options),
					new kotlin.jvm.functions.Function2({
						invoke(response, error) {
							if (error) {
								reject(error);
							} else {
								resolve(FileUploadResponse.fromNative(response));
							}
						},
					})
				);
			}
		});
	}

	uploadToSignedUrl(path: string, token: string, data: ArrayBuffer | string, options?: FileOptions) {
		return new Promise<SignedURLUploadResponse>((resolve, reject) => {
			if (typeof data === 'string') {
				this.native.uploadToSignedUrl(
					path,
					token,
					new java.io.File(data) as never,
					parseFileOptions(options),
					new kotlin.jvm.functions.Function2({
						invoke(response, error) {
							if (error) {
								reject(error);
							} else {
								resolve(SignedURLUploadResponse.fromNative(response));
							}
						},
					})
				);
			} else {
				this.native.uploadToSignedUrl(
					path,
					token,
					data as never,
					parseFileOptions(options),
					new kotlin.jvm.functions.Function2({
						invoke(response, error) {
							if (error) {
								reject(error);
							} else {
								resolve(SignedURLUploadResponse.fromNative(response));
							}
						},
					})
				);
			}
		});
	}
}

export class SupabaseStorageClient {
	client: Client;
	constructor(client: Client) {
		this.client = client;
	}

	get native() {
		return this.client.native.getStorage();
	}
	createBucket(id: string, options?: BucketOptions) {
		return new Promise<void>((resolve, reject) => {
			let opt: io.github.triniwiz.supabase.SupabseStorage.BucketOptions | null = null;
			if (options) {
				opt = new io.github.triniwiz.supabase.SupabseStorage.BucketOptions();
				if ('allowedMimeTypes' in opt) {
					opt.setAllowedMimeTypes(options.allowedMimeTypes);
				}
				if ('isPublic' in options) {
					opt.setPublic(options.isPublic);
				}

				if ('fileSizeLimit' in options) {
					opt.setFileSizeLimit(`${options.fileSizeLimit}`);
				}
			}

			this.native.createBucket(
				id,
				opt,
				new kotlin.jvm.functions.Function1({
					invoke(error) {
						if (error) {
							reject(error);
						} else {
							resolve();
						}
					},
				})
			);
		});
	}

	getBucket(id: string) {
		return new Promise((resolve, reject) => {
			this.native.getBucket(
				id,
				new kotlin.jvm.functions.Function2({
					invoke(bucket, error) {
						if (error) {
							reject(error);
						} else {
							resolve(StorageBucket.fromNative(bucket));
						}
					},
				})
			);
		});
	}

	listBuckets(id: string) {
		return new Promise((resolve, reject) => {
			this.native.listBuckets(
				id,
				new kotlin.jvm.functions.Function2({
					invoke(buckets, error) {
						if (error) {
							reject(error);
						} else {
							const count = buckets.size();
							const ret = new Array<StorageBucket>(count);
							for (let i = 0; i < count; i++) {
								ret[i] = StorageBucket.fromNative(buckets.get(i));
							}
							resolve(ret);
						}
					},
				})
			);
		});
	}

	updateBucket(id: string, options?: BucketOptions) {
		return new Promise<void>((resolve, reject) => {
			let opt: io.github.triniwiz.supabase.SupabseStorage.BucketOptions | null = null;
			if (options) {
				opt = new io.github.triniwiz.supabase.SupabseStorage.BucketOptions();
				if ('allowedMimeTypes' in opt) {
					opt.setAllowedMimeTypes(options.allowedMimeTypes);
				}
				if ('isPublic' in options) {
					opt.setPublic(options.isPublic);
				}

				if ('fileSizeLimit' in options) {
					opt.setFileSizeLimit(`${options.fileSizeLimit}`);
				}
			}

			this.native.updateBucket(
				id,
				opt,
				new kotlin.jvm.functions.Function1({
					invoke(error) {
						if (error) {
							reject(error);
						} else {
							resolve();
						}
					},
				})
			);
		});
	}

	deleteBucket(id: string) {
		return new Promise<void>((resolve, reject) => {
			this.native.deleteBucket(
				id,
				new kotlin.jvm.functions.Function1({
					invoke(error) {
						if (error) {
							reject(error);
						} else {
							resolve();
						}
					},
				})
			);
		});
	}

	emptyBucket(id: string) {
		return new Promise<void>((resolve, reject) => {
			this.native.emptyBucket(
				id,
				new kotlin.jvm.functions.Function1({
					invoke(error) {
						if (error) {
							reject(error);
						} else {
							resolve();
						}
					},
				})
			);
		});
	}

	from(id: string): StorageFileApi {
		return StorageFileApi.fromNative(this.native.from(id));
	}
}

import { SupabaseClient } from '../index';

export interface BucketOptions {
	allowedMimeTypes?: string[];
	isPublic?: boolean;
	fileSizeLimit?: number | string;
}

export interface TransformOptions {
	format?: string;

	height?: number;

	quality?: number;

	resize?: string;

	width?: number;
}

export interface FileOptions {
	cacheControl?: string;

	contentType?: string;

	duplex?: string;

	headers?: Record<string, string>;

	metadata?: Record<string, any>;

	upsert?: boolean;
}

export interface SearchOptions {
	limit?: number;

	offset?: number;

	search?: string;

	sortBy?: {
		column?: string;
		order?: string;
	};
}

export class FileUploadResponse {
	readonly fullPath: string;

	readonly id: string;

	readonly path: string;
}

export class SignedURLUploadResponse {
	readonly fullPath: string;

	readonly path: string;
}

export class SignedUploadURL {
	readonly path: string;

	readonly signedURL: string;

	readonly token: string;
}

export class FileObject {
	readonly bucketId: string;

	readonly buckets: StorageBucket;

	readonly createdAt: Date;

	readonly id: string;

	readonly lastAccessedAt: Date;

	readonly metadata: Record<string, any>;

	readonly name: string;

	readonly owner: string;

	readonly updatedAt: Date;
}

export class StorageBucket {
	readonly allowedMimeTypes: string[];

	readonly createdAt: Date;

	readonly id: string;

	readonly isPublic: boolean;

	readonly name: string;

	readonly owner: string;

	readonly updatedAt: Date;
}

export class StorageFileApi {
	copy(fromPath: string, toPath: string): Promise<string>;

	createSignedUploadUrl(path: string): Promise<SignedUploadURL>;

	createSignedUrl(path: string, expiresIn: number, options?: { download?: string | boolean; transform: TransformOptions }): Promise<string>;

	createSignedUrls(
		paths: string[],
		expiresIn: number,
		options?: {
			download: string | boolean;
		}
	): Promise<string[]>;

	download(path: string, options?: TransformOptions): Promise<ArrayBuffer>;

	getPublicUrlError(path: string, options?: { transform: TransformOptions; download?: string | boolean }): string;

	list(path?: string, options?: SearchOptions): Promise<FileObject[]>;

	move(fromPath: string, toPath: string): Promise<void>;

	remove(paths: string[]): Promise<StorageFileObject[]>;

	update(path: string, data: ArrayBuffer | string, options?: FileOptions): Promise<FileUploadResponse>;

	upload(path: string, data: ArrayBuffer | string, options?: FileOptions): Promise<FileUploadResponse>;

	uploadToSignedUrlData(path: string, token: string, data: ArrayBuffer, options?: FileOptions): Promise<SignedURLUploadResponse>;
}

export class StorageFileObject {
	readonly bucketId: string;

	readonly buckets: StorageBucket;

	readonly createdAt: Date;

	readonly id: string;

	readonly lastAccessedAt: Date;

	readonly metadata: Record<string, any>;

	readonly name: string;

	readonly owner: string;

	readonly updatedAt: Date;
}

export class SupabaseStorageClient {
	constructor(client: SupabaseClient);
	createBucket(id: string, options?: BucketOptions): Promise<void>;

	getBucket(id: string): Promise<StorageBucket>;

	listBuckets(id: string): Promise<StorageBucket[]>;

	updateBucket(id: string, options?: BucketOptions): Promise<void>;

	deleteBucket(id: string): Promise<void>;

	emptyBucket(id: string): Promise<void>;

	from(id: string): StorageFileApi;
}

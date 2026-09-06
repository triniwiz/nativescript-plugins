import { ImageCacheItBase } from './common';

declare class ImageCacheItError extends Error {
	static fromNative(native: any, message?: string);
	readonly native;
}

export declare class ImageCacheIt extends ImageCacheItBase {
	
	public static getItem(src: string, headers: Map<string, string>): Promise<string>;

	public static getItem(src: string): Promise<string>;

	/** iOS only - the Android cache exposes clear() but no per-item removal. */
	public static deleteItem(src: string): Promise<any>;

	/** Whether `src` is in the cache. */
	public static hasItem(src: string): Promise<boolean>;

	public static clear(): Promise<any>;

	public static enableAutoMM(): void;

	public static disableAutoMM(): void;

	public static maxDiskCacheSize: number;

	public static maxMemoryCacheSize: number;

	public static maxDiskCacheAge: number;

	on(eventNames: string, callback: (data: any) => void, thisArg?: any);

	on(event: 'loadStart', callback: (args: any) => void, thisArg?: any);

	on(event: 'progress', callback: (args: any) => void, thisArg?: any);

	on(event: 'error', callback: (args: any) => void, thisArg?: any);

	on(event: 'loadEnd', callback: (args: any) => void, thisArg?: any);
}

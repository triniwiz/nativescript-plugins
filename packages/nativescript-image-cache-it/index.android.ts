import { Color, ImageAsset, Background, ImageSource, path as nsPath, knownFolders, Application } from '@nativescript/core';
import { isNumber, isString, isNullOrUndefined } from '@nativescript/core/utils/types';
import * as common from './common';
import { filterProperty, ImageCacheItBase, overlayColorProperty } from './common';

declare let jp, com, androidx;

interface ImageLoadedListener {
	new (owner: any): org.nativescript.widgets.image.Worker.OnImageLoadedListener;
}

let ImageLoadedListener: ImageLoadedListener;

function initializeImageLoadedListener() {
	if (ImageLoadedListener) {
		return;
	}

	@Interfaces([org.nativescript.widgets.image.Worker.OnImageLoadedListener])
	class ImageLoadedListenerImpl extends java.lang.Object implements org.nativescript.widgets.image.Worker.OnImageLoadedListener {
		constructor(public owner: any) {
			super();

			return global.__native(this);
		}

		onImageLoaded(success: boolean): void {
			const owner = this.owner;
			if (owner) {
				owner.isLoading = false;
			}
		}
	}

	ImageLoadedListener = ImageLoadedListenerImpl;
}

export class ImageCacheItError extends Error {
	_native: java.lang.Exception;
	static fromNative(native: java.lang.Exception, message: string = undefined) {
		const error = new ImageCacheItError(message);
		error._native = native;
		return error;
	}

	_message: string;
	get message() {
		if (!this._message) {
			this._message = this.native?.getMessage?.();
		}
		return this._message;
	}

	get native() {
		return this._native;
	}

	intoNative() {
		if (!this._native) {
			return new java.lang.Exception(this.message);
		}
		return this._native;
	}
}

export class ImageCacheIt extends ImageCacheItBase {
	private emptyBackground;

	constructor() {
		super();
		this.emptyBackground = new Background();
	}

	public createNativeView() {
		const nativeView = new com.github.triniwiz.imagecacheit.ImageView(this._context, null);

		initializeImageLoadedListener();

		const listener = new ImageLoadedListener(this);
		nativeView.setImageLoadedListener(listener);
		(<any>nativeView).listener = listener;

		const ref = new WeakRef<ImageCacheIt>(this);
		nativeView.setProgressListener(
			new com.github.triniwiz.imagecacheit.ProgressListener({
				onProgress(loaded, total, progress, url) {
					const owner = ref.get();
					if (owner) {
						owner._emitProgressEvent(loaded, total, progress, url);
					}
				},
			})
		);
		nativeView.setEventsListener(
			new com.github.triniwiz.imagecacheit.EventsListener({
				onLoadStart() {
					const owner = ref.get();
					if (owner) {
						owner._emitLoadStartEvent(owner.src);
					}
				},
				onLoadError(message) {
					const owner = ref.get();
					if (owner) {
						owner._emitErrorEvent(message, owner.src);
					}
				},
				onLoadedEnd(image) {
					const owner = ref.get();
					if (owner) {
						owner._emitLoadEndEvent(owner.src, image);
					}
				},
			})
		);
		return nativeView;
	}

	// nativeView: com.github.triniwiz.imagecacheit.ImageView;

	public static get maxDiskCacheSize() {
		return com.github.triniwiz.imagecacheit.MyAppGlideModule.getMaxDiskCacheSize();
	}

	public static set maxDiskCacheSize(size: number) {
		com.github.triniwiz.imagecacheit.MyAppGlideModule.setMaxDiskCacheSize(size);
	}

	public static set maxMemoryCacheSize(size: number) {
		com.github.triniwiz.imagecacheit.MyAppGlideModule.setMaxMemoryCacheSize(size);
	}

	public static get maxMemoryCacheSize(): number {
		return com.github.triniwiz.imagecacheit.MyAppGlideModule.getMaxMemoryCacheSize();
	}

	public static get maxDiskCacheAge(): number {
		return com.github.triniwiz.imagecacheit.MyAppGlideModule.getMaxDiskCacheAge();
	}

	public static set maxDiskCacheAge(age: number) {
		com.github.triniwiz.imagecacheit.MyAppGlideModule.setMaxDiskCacheAge(age);
	}

	private _handleSource(source) {
		if (isNullOrUndefined(source)) {
			return null;
		}

		if (isString(source) && source.startsWith('~/')) {
			source = nsPath.join(knownFolders.currentApp().path, source.replace('~/', ''));
		} else if (source instanceof ImageSource || source instanceof ImageAsset) {
			source = source.android;
		}

		return source;
	}

	public initNativeView() {
		const jsonProps = {
			priority: this.priority,
		};
		const color = this._getOverlayColor(this.overlayColor);
		if (color !== null) {
			jsonProps['overlayColor'] = color;
		}
		if (this.headers) {
			jsonProps['headers'] = Object.fromEntries(this.headers);
		}
		if (this.filter) {
			jsonProps['filter'] = this.filter;
		}
		if (this.stretch) {
			jsonProps['stretch'] = this.stretch;
		}
		let keepAspectRatio = this._calculateKeepAspectRatio();
		let src = this.src;
		if (src instanceof ImageAsset) {
			keepAspectRatio = !!this.src.options.keepAspectRatio;
			src = src.nativeImage;
		} else if (src instanceof ImageSource) {
			src = src.android;
		}
		this.nativeView.batch(JSON.stringify(jsonProps), src, 0, 0, keepAspectRatio, false, true, this._handleSource(this.errorHolder), this._handleSource(this.placeHolder), this._handleSource(this.fallback));
	}

	private _calculateKeepAspectRatio(): boolean {
		return this.stretch !== 'fill';
	}

	public disposeNativeView(): void {
		super.disposeNativeView();
	}

	public resetNativeView(): void {
		super.resetNativeView();
		this.nativeViewProtected.setImageMatrix(new android.graphics.Matrix());
	}

	[filterProperty.setNative](filter: any) {
		if (this.nativeView) {
			this.nativeView.setFilter(filter);
		}
	}

	private _getOverlayColor(overlay) {
		if (overlay instanceof Color) {
			overlay.android;
		} else if (typeof overlay === 'string') {
			return new Color(overlay).android;
		}
		return null;
	}

	private _setOverlayColor(overlay: Color | string) {
		if (!this.nativeViewProtected) {
			return;
		}
		const color = this._getOverlayColor(overlay);
		if (color !== null) {
			this.nativeViewProtected.setOverlayColor(color);
		}
	}

	[overlayColorProperty.setNative](overlay: Color | string) {
		this._setOverlayColor(overlay);
	}

	private static isNumber(value: any) {
		return typeof value === 'number';
	}

	private static getResourceId(context: any, res: string = '') {
		if (!context) return java.lang.Integer.valueOf(0);
		if (isString(res) && res.startsWith('res://')) {
			const packageName = context.getPackageName();
			try {
				const className = java.lang.Class.forName(`${packageName}.R$drawable`);
				return java.lang.Integer.valueOf(parseInt(String(className.getDeclaredField(res.replace('res://', '')).get(null))));
			} catch (e) {
				return java.lang.Integer.valueOf(0);
			}
		}
		return java.lang.Integer.valueOf(0);
	}

	private static _setFallback(context: any, fallback: any, nativeView?: any) {
		if (nativeView) {
			if (isString(fallback) && fallback.startsWith('res://')) {
				nativeView.setFallbackImage(fallback);
			} else {
				const holder = ImageCacheIt.getImage(context, fallback);
				nativeView.setFallbackImage(holder);
			}
		}
	}

	[common.fallbackProperty.setNative](fallback: any) {
		ImageCacheIt._setFallback(this._context, fallback, this.nativeView);
	}

	private static _setPlaceHolder(context: any, placeHolder: any, nativeView?: any) {
		if (nativeView) {
			if (isString(placeHolder) && placeHolder.startsWith('res://')) {
				nativeView.setPlaceHolder(placeHolder);
			} else {
				const holder = ImageCacheIt.getImage(context, placeHolder);
				nativeView.setPlaceHolder(holder);
			}
		}
	}

	[common.placeHolderProperty.setNative](placeHolder: any) {
		ImageCacheIt._setPlaceHolder(this._context, placeHolder, this.nativeView);
	}

	private static _setErrorHolder(context: any, errorHolder: any, nativeView?: any) {
		if (nativeView) {
			if (isString(errorHolder) && errorHolder.startsWith('res://')) {
				nativeView.setErrorHolder(errorHolder);
			} else {
				const holder = ImageCacheIt.getImage(context, errorHolder);
				nativeView.setErrorHolder(holder);
			}
		}
	}

	[common.errorHolderProperty.setNative](errorHolder: any) {
		ImageCacheIt._setErrorHolder(this._context, errorHolder, this.nativeView);
	}

	[common.srcProperty.getDefault](): any {
		return undefined;
	}

	private static _setSrc(context: any, src: any, nativeView?: any, base?: ImageCacheIt) {
		if (nativeView) {
			const decodeWidth = base?.decodeWidth ?? 0;
      const decodeHeight = base?.decodeHeight  ?? 0;
      const keepAspectRatio = base._calculateKeepAspectRatio();
			if (isNullOrUndefined(src)) {
				nativeView.setSource(null, decodeWidth, decodeHeight, keepAspectRatio, false, true);
			} else {
				const image = ImageCacheIt.getImage(context, src);
				if (isString(image)) {
					nativeView.setSource(android.net.Uri.parse(image), decodeWidth, decodeHeight, keepAspectRatio, false, true);
				} else if (isNumber(image) || image instanceof java.lang.Integer) {
					nativeView.setSource(image, decodeWidth, decodeHeight, keepAspectRatio, false, true);
				} else if (image instanceof java.io.File) {
					nativeView.setSource(image, decodeWidth, decodeHeight, keepAspectRatio, false, true);
				} else {
					nativeView.setSource(image, decodeWidth, decodeHeight, keepAspectRatio, false, true);
				}
			}
		}
	}

	[common.srcProperty.setNative](src: any) {
		ImageCacheIt._setSrc(this._context, src, this.nativeView, this);
	}

	[common.priorityProperty.getDefault](): common.Priority {
		return common.Priority.Normal;
	}

	[common.priorityProperty.setNative](value: any) {
		if (!this.nativeView) return;
		switch (value) {
			case common.Priority.High:
				this.nativeView.setPriority(com.github.triniwiz.imagecacheit.ImageView.Priority.High);
				break;
			case common.Priority.Low:
				this.nativeView.setPriority(com.github.triniwiz.imagecacheit.ImageView.Priority.Low);
				break;
			default:
				this.nativeView.setPriority(com.github.triniwiz.imagecacheit.ImageView.Priority.Normal);
				break;
		}
	}

	[common.tintColorProperty.getDefault](): Color | string {
		return undefined;
	}

	[common.tintColorProperty.setNative](value: any) {
		if (!value) {
			this.nativeView.clearColorFilter();
		} else {
			this.nativeView.setColorFilter(value.android);
		}
	}

	[common.headersProperty.getDefault](): Map<string, string> {
		return new Map<string, string>();
	}

	private _setHeaders(value) {
		if (this.nativeView) {
			const headers = new java.util.HashMap<string, string>();
			if (value) {
				value.forEach((value, key) => {
					headers.put(key, value);
				});
			}
			this.nativeView.setHeaders(headers);
		}
	}

	[common.headersProperty.setNative](value: Map<string, string>) {
		this._setHeaders(value);
	}

	public static getImage(context: any, src: any): any {
		let nativeImage: any = null;
		if (isNullOrUndefined(src)) {
			return null;
		}

		if (isString(src)) {
			if (src.substr(0, 1) === '/') {
				nativeImage = new java.io.File(src);
			} else if (src.startsWith('~/')) {
				nativeImage = new java.io.File(nsPath.join(knownFolders.currentApp().path, src.replace('~/', '')));
			} else if (src.startsWith('http')) {
				nativeImage = src;
			} else if (src.startsWith('res://')) {
				nativeImage = this.getResourceId(context, src);
			}
		} else if (src instanceof ImageSource || src instanceof ImageAsset) {
			nativeImage = src.android;
		} else {
			nativeImage = src;
		}
		return nativeImage;
	}

	private static _setFilter(filter: string, nativeView?: any) {
		if (nativeView) {
			nativeView.setFilter(filter);
		}
	}

	[common.filterProperty.setNative](filter: string) {
		ImageCacheIt._setFilter(filter, this.nativeView);
	}

	[common.stretchProperty.getDefault](): 'aspectFit' {
		return 'aspectFit';
	}

	private _setStretch(value) {
		if (this.nativeView) {
			switch (value) {
				case 'aspectFit':
					this.nativeView.setScaleType(android.widget.ImageView.ScaleType.FIT_CENTER);
					break;
				case 'aspectFill':
					this.nativeView.setScaleType(android.widget.ImageView.ScaleType.CENTER_CROP);
					break;
				case 'fill':
					this.nativeView.setScaleType(android.widget.ImageView.ScaleType.FIT_XY);
					break;
				case 'none':
				default:
					this.nativeView.setScaleType(android.widget.ImageView.ScaleType.MATRIX);
					break;
			}
		}
	}

	[common.stretchProperty.setNative](value: 'none' | 'aspectFill' | 'aspectFit' | 'fill') {
		this._setStretch(value);
	}
	private static lastActivity: WeakRef<any>;
	private static _init() {
		// use start activity for manager
		const activity = Application.android.startActivity;
		if (!activity) {
			return;
		}
		const lastActivity = this.lastActivity?.get();
		if (lastActivity === activity) {
			return;
		}
		this.lastActivity = new WeakRef(activity);
		com.github.triniwiz.imagecacheit.ImageCache.init(activity);
	}
	public static getItem(src: string, headers: Map<string, string> = undefined): Promise<any> {
		this._init();

		return new Promise<any>((resolve, reject) => {
			if (headers) {
				const map = new java.util.HashMap<string, string>();
				headers.forEach((value, key) => {
					map.put(key, value);
				});
				com.github.triniwiz.imagecacheit.ImageCache.getItemWithHeaders(
					src,
					map,
					new com.github.triniwiz.imagecacheit.ImageCache.Callback({
						onSuccess(value) {
							resolve(value);
						},
						onError(error) {
							reject(ImageCacheItError.fromNative(error));
						},
					})
				);
			} else {
				com.github.triniwiz.imagecacheit.ImageCache.getItem(
					src,
					null,
					new com.github.triniwiz.imagecacheit.ImageCache.Callback({
						onSuccess(value) {
							resolve(value);
						},
						onError(error) {
							reject(ImageCacheItError.fromNative(error));
						},
					})
				);
			}
		});
	}

	public static deleteItem(src: string): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			// TODO
			resolve(undefined);
		});
	}

	public static hasItem(src: string): Promise<any> {
		this._init();
		return new Promise<any>((resolve, reject) => {
			com.github.triniwiz.imagecacheit.ImageCache.hasItem(
				src,
				new com.github.triniwiz.imagecacheit.ImageCache.Callback({
					onSuccess(value) {
						resolve(undefined);
					},
					onError(error) {
						reject(ImageCacheItError.fromNative(error));
					},
				})
			);
		});
	}

	public static clear() {
		this._init();
		return new Promise<any>((resolve, reject) => {
			com.github.triniwiz.imagecacheit.ImageCache.clear();
			resolve(undefined);
		});
	}

	public static enableAutoMM() {
		(com as any).github.triniwiz.imagecacheit.ImageView.enableAutoMM(Application.android.nativeApp);
	}

	public static disableAutoMM() {
		(com as any).github.triniwiz.imagecacheit.ImageView.disableAutoMM(Application.android.nativeApp);
	}
}

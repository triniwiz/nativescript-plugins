import { fallbackProperty, filterProperty, headersProperty, ImageCacheItBase, imageSourceProperty, loadModeProperty, overlayColorProperty, Priority, priorityProperty, srcProperty, stretchProperty, tintColorProperty } from './common';
import { Color, knownFolders, path as fsPath, Length, ImageSource, Trace, Application, Screen, Utils } from '@nativescript/core';

export class ImageCacheItError extends Error {
	_native: NSError;
	static fromNative(native: NSError, message: string = undefined) {
		const error = new ImageCacheItError(message);
		error._native = native;
		return error;
	}

	get native() {
		return this._native;
	}

	_message: string;
	get message() {
		if (!this._message) {
			this._message = this.native?.localizedDescription;
		}
		return this._message;
	}

	intoNative() {
		if (!this._native) {
			const exception = NSException.exceptionWithNameReasonUserInfo(NSGenericException, this.message, null);
			const info = {};
			info['ExceptionName'] = exception.name;
			info['ExceptionReason'] = exception.reason;
			info['ExceptionCallStackReturnAddresses'] = exception.callStackReturnAddresses;
			info['ExceptionCallStackSymbols'] = exception.callStackSymbols;
			info['ExceptionUserInfo'] = exception.userInfo;
			const error = NSError.alloc().initWithDomainCodeUserInfo('NativeScript', 1000, info as any);
			return error;
		}
		return this._native;
	}
}

export class ImageCacheIt extends ImageCacheItBase {
	nativeViewProtected: NSCImageCacheItView;
	_imageSourceAffectsLayout = true;
	constructor() {
		super();
	}

	public static get maxDiskCacheSize() {
		return NSCImageCacheItView.maxDiskCacheSize;
	}

	public static set maxDiskCacheSize(size: number) {
		NSCImageCacheItView.maxDiskCacheSize = size;
	}

	public static set maxMemoryCacheSize(size: number) {
		NSCImageCacheItView.maxMemoryCacheSize = size;
	}

	public static get maxMemoryCacheSize(): number {
		return NSCImageCacheItView.maxMemoryCacheSize;
	}

	public static get maxDiskCacheAge(): number {
		return NSCImageCacheItView.maxDiskCacheAge;
	}

	public static set maxDiskCacheAge(age: number) {
		NSCImageCacheItView.maxDiskCacheAge = age;
	}

	public createNativeView() {
		return NSCImageCacheItView.new();
	}

	initNativeView(): void {
		super.initNativeView();
		const nativeView = this.nativeViewProtected;
		nativeView.loadStart = (src) => {
			this.notify({ eventName: ImageCacheItBase.onLoadStartEvent, object: this, src });
		};
		nativeView.onLoadEnd = (src, image) => {
			this.notify({ eventName: ImageCacheItBase.onLoadEndEvent, object: this, src, image });
		};
		nativeView.onError = (src, error) => {
			this.notify({ eventName: ImageCacheItBase.onErrorEvent, object: this, src, error });
		};
		nativeView.onProgress = (current, total, progress, src) => {
			this.notify({ eventName: ImageCacheItBase.onProgressEvent, object: this, current, total, progress, src });
		};
		this.nativeViewProtected.runLayout = () => {
			this.requestLayout();
		};
	}

	public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
		const width = Utils.layout.getMeasureSpecSize(widthMeasureSpec);
		const widthMode = Utils.layout.getMeasureSpecMode(widthMeasureSpec);
		const height = Utils.layout.getMeasureSpecSize(heightMeasureSpec);
		const heightMode = Utils.layout.getMeasureSpecMode(heightMeasureSpec);

		const nativeWidth = this.imageSource ? Utils.layout.toDevicePixels(this.imageSource.width) : 0;
		const nativeHeight = this.imageSource ? Utils.layout.toDevicePixels(this.imageSource.height) : 0;

		let measureWidth = Math.max(nativeWidth, this.effectiveMinWidth);
		let measureHeight = Math.max(nativeHeight, this.effectiveMinHeight);

		const finiteWidth: boolean = widthMode !== Utils.layout.UNSPECIFIED;
		const finiteHeight: boolean = heightMode !== Utils.layout.UNSPECIFIED;

		this._imageSourceAffectsLayout = widthMode !== Utils.layout.EXACTLY || heightMode !== Utils.layout.EXACTLY;

		if (nativeWidth !== 0 && nativeHeight !== 0 && (finiteWidth || finiteHeight)) {
			const scale = ImageCacheIt.computeScaleFactor(width, height, finiteWidth, finiteHeight, nativeWidth, nativeHeight, this.stretch);
			const resultW = Math.round(nativeWidth * scale.width);
			const resultH = Math.round(nativeHeight * scale.height);

			measureWidth = finiteWidth ? Math.min(resultW, width) : resultW;
			measureHeight = finiteHeight ? Math.min(resultH, height) : resultH;

			if (Trace.isEnabled()) {
				Trace.write('ImageCacheIt stretch: ' + this.stretch + ', nativeWidth: ' + nativeWidth + ', nativeHeight: ' + nativeHeight, Trace.categories.Layout);
			}
		}
		const widthAndState = ImageCacheIt.resolveSizeAndState(measureWidth, width, widthMode, 0);
		const heightAndState = ImageCacheIt.resolveSizeAndState(measureHeight, height, heightMode, 0);
		this.setMeasuredDimension(widthAndState, heightAndState);
	}

	private static computeScaleFactor(measureWidth: number, measureHeight: number, widthIsFinite: boolean, heightIsFinite: boolean, nativeWidth: number, nativeHeight: number, imageStretch: string): { width: number; height: number } {
		let scaleW = 1;
		let scaleH = 1;

		if ((imageStretch === 'aspectFill' || imageStretch === 'aspectFit' || imageStretch === 'fill') && (widthIsFinite || heightIsFinite)) {
			scaleW = nativeWidth > 0 ? measureWidth / nativeWidth : 0;
			scaleH = nativeHeight > 0 ? measureHeight / nativeHeight : 0;

			if (!widthIsFinite) {
				scaleW = scaleH;
			} else if (!heightIsFinite) {
				scaleH = scaleW;
			} else {
				// No infinite dimensions.
				switch (imageStretch) {
					case 'aspectFit':
						scaleH = scaleW < scaleH ? scaleW : scaleH;
						scaleW = scaleH;
						break;
					case 'aspectFill':
						scaleH = scaleW > scaleH ? scaleW : scaleH;
						scaleW = scaleH;
						break;
				}
			}
		}

		return { width: scaleW, height: scaleH };
	}

	[headersProperty.getDefault](): Map<string, string> {
		return new Map<string, string>();
	}

	[headersProperty.setNative](value: Map<string, string>) {
		if (this.nativeView && value) {
			this.nativeViewProtected.headers = value as never;
		}
	}

	getFileName(path: string): string {
		let fileName = typeof path === 'string' ? path.trim() : '';
		if (fileName.indexOf('~/') === 0) {
			fileName = fsPath.join(knownFolders.currentApp().path, fileName.replace('~/', ''));
		}

		return fileName;
	}

	[fallbackProperty.setNative](src: any) {
		if (src === undefined || src === null) {
		}
		if (src instanceof ImageSource) {
			this.nativeViewProtected.fallback = src.ios;
		} else if (src instanceof UIImage) {
			this.nativeViewProtected.fallback = src;
		} else if (typeof src === 'string') {
			this.nativeViewProtected.fallback = ImageSource.fromFileOrResourceSync(this.getFileName(src))?.ios ?? null;
		}
	}

	[srcProperty.setNative](src: any) {
		if (!this.nativeViewProtected) {
			return;
		}
		if (typeof src === 'string') {
			if (src.startsWith('~/')) {
				this.nativeViewProtected.src = this.getFileName(src);
			} else {
				this.nativeViewProtected.src = src;
			}
		}
	}

	[loadModeProperty.setNative](value) {
		if (!this.nativeViewProtected) {
			return;
		}
		switch (value) {
			case 'sync':
				this.nativeViewProtected.loadMode = NSCImageCacheItLoadMode.Sync;
				break;
			case 'async':
			default:
				this.nativeViewProtected.loadMode = NSCImageCacheItLoadMode.Async;
				break;
		}
	}

	[stretchProperty.getDefault](): 'aspectFit' {
		return 'aspectFit';
	}

	[stretchProperty.setNative](value) {
		switch (value) {
			case 'aspectFit':
				this.nativeViewProtected.stretch = NSCImageCacheItStretch.AspectFit;
				break;
			case 'aspectFill':
				this.nativeViewProtected.stretch = NSCImageCacheItStretch.AspectFill;
				break;
			case 'fill':
				this.nativeViewProtected.stretch = NSCImageCacheItStretch.Fill;
				break;
			case 'none':
			default:
				this.nativeViewProtected.stretch = NSCImageCacheItStretch.None;
				break;
		}
	}

	[filterProperty.setNative](filter: any) {
		this.nativeViewProtected.filter = filter;
	}

	[tintColorProperty.setNative](value: any) {
		if (typeof value === 'string') {
			this.nativeViewProtected.imageTint = new Color(value).ios;
		} else {
			this.nativeViewProtected.imageTint = value?.ios ?? null;
		}
	}

	[overlayColorProperty.setNative](value: any) {
		if (typeof value === 'string') {
			this.nativeViewProtected.overlayColor = new Color(value).ios;
		} else {
			this.nativeViewProtected.imageTint = value?.ios ?? null;
		}
	}

	[priorityProperty.setNative](value: any) {
		if (!this.nativeViewProtected) {
			return;
		}
		switch (value) {
			case Priority.High:
				this.nativeViewProtected.priority = NSCImageCacheItPriority.High;
				break;
			case Priority.Low:
				this.nativeViewProtected.priority = NSCImageCacheItPriority.Low;
				break;
			default:
				this.nativeViewProtected.priority = NSCImageCacheItPriority.Normal;
				break;
		}
	}

	[imageSourceProperty.setNative](value: any) {
		if (this.nativeViewProtected && value?.ios) {
			this.nativeViewProtected.setImageSource(value.ios);
		}
	}

	public static hasItem(src: string): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			NSCImageCacheItView.hasItem(src, (has) => {
				if (has) {
					resolve(undefined);
				} else {
					reject();
				}
			});
		});
	}

	public static deleteItem(src: string): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			NSCImageCacheItView.deleteItem(src, (error) => {
				if (error) {
					reject(ImageCacheItError.fromNative(error));
				} else {
					resolve(undefined);
				}
			});
		});
	}

	public static getItem(src: string, headers: Map<string, string>): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			NSCImageCacheItView.getItem(src, (headers as any) ?? {}, (error, data) => {
				if (error) {
					reject(ImageCacheItError.fromNative(error));
				} else {
					resolve(data);
				}
			});
		});
	}

	public static clear(): Promise<any> {
		return new Promise((resolve, reject) => {
			NSCImageCacheItView.clear(() => {
				resolve(undefined);
			});
		});
	}

	public static enableAutoMM() {
		ImageCacheIt.enableAutoMM();
	}

	public static disableAutoMM() {
		ImageCacheIt.disableAutoMM();
	}
}

import { ImageZoomBase, maxZoomScaleProperty, minZoomScaleProperty, resizeProperty, srcProperty, stretchProperty } from './common';
import { isNullOrUndefined, isNumber } from '@nativescript/core/utils/types';
import { knownFolders, Utils, path, ImageSource, ImageAsset } from '@nativescript/core';

export class ImageZoom extends ImageZoomBase {
	private manager: com.bumptech.glide.RequestManager;
	private builder: com.bumptech.glide.RequestBuilder<any>;

	constructor() {
		super();
	}

	public createNativeView() {
		return new com.github.chrisbanes.photoview.PhotoView(this._context);
	}

	[minZoomScaleProperty.setNative](scale: number) {
		if (this.nativeView && isNumber(scale)) {
			this.nativeView.setMinimumScale(scale);
			this.nativeView.setScaleLevels(Number(scale), Number(0.5833333333333334 * this.maxZoom), Number(this.maxZoom));
		}
	}

	[maxZoomScaleProperty.setNative](scale: number) {
		if (this.nativeView && isNumber(scale)) {
			this.nativeView.setScaleLevels(Number(this.minZoom), Number(0.5833333333333334 * scale), Number(scale));
		}
	}

	private _loadImageAsync(image): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			if (image instanceof ImageAsset) {
				image.getImageAsync((image, error) => {
					if (image) {
						resolve(image);
					} else {
						reject(error);
					}
				});
			} else if (image instanceof ImageSource) {
				this.builder.load(image.android);
			}
		});
	}

	public initNativeView() {
		this.nativeView.setScaleLevels(Number(this.minZoom), Number(0.5833333333333334 * this.maxZoom), Number(this.maxZoom));
		this.manager = com.bumptech.glide.Glide.with(this._context);

		if (this.src) {
			this.resetImage();
		}
	}

	private static getResourceId(res: string = '') {
		if (res.startsWith('res://')) {
			return Utils.ad.resources.getDrawableId(res.replace('res://', ''));
		}
		return 0;
	}

	// @ts-ignore
	set borderRadius(value: any) {
		this.style.borderRadius = value;
		this.setBorderAndRadius();
	}

	// @ts-ignore
	set borderWidth(value: any) {
		this.style.borderWidth = value;
		this.setBorderAndRadius();
	}

	// @ts-ignore
	set borderLeftWidth(value: any) {
		this.style.borderLeftWidth = value;
		this.setBorderAndRadius();
	}

	// @ts-ignore
	set borderRightWidth(value: any) {
		this.style.borderRightWidth = value;
		this.setBorderAndRadius();
	}

	// @ts-ignore
	set borderBottomWidth(value: any) {
		this.style.borderBottomWidth = value;
		this.setBorderAndRadius();
	}

	// @ts-ignore
	set borderTopWidth(value: any) {
		this.style.borderTopWidth = value;
		this.setBorderAndRadius();
	}

	// @ts-ignore
	set borderBottomLeftRadius(value: any) {
		this.style.borderBottomLeftRadius = value;
		this.setBorderAndRadius();
	}

	// @ts-ignore
	set borderBottomRightRadius(value: any) {
		this.style.borderBottomRightRadius = value;
		this.setBorderAndRadius();
	}

	// @ts-ignore
	set borderTopLeftRadius(value: any) {
		this.style.borderTopLeftRadius = value;
		this.setBorderAndRadius();
	}

	// @ts-ignore
	set borderTopRightRadius(value: any) {
		this.style.borderTopRightRadius = value;
		this.setBorderAndRadius();
	}

	[srcProperty.getDefault](): any {
		return undefined;
	}

	[srcProperty.setNative](src: any) {
		this.manager?.clear(this.nativeView);

		this.resetImage();

		this.builder?.into(this.nativeView);
	}

	// @ts-ignore
	[resizeProperty.setNative](resize: string) {
		if (!this.builder) {
			return resize;
		}
		if (resize && resize.split(',').length > 1 && this.stretch !== 'fill') {
			this.builder.override(parseInt(resize.split(',')[0], 10), parseInt(resize.split(',')[1], 10));
		}
		return resize;
	}

	private static getImage(src: any): any {
		let nativeImage;
		if (isNullOrUndefined(src)) {
			return src;
		}
		if (typeof src === 'string' && src.substr(0, 1) === '/') {
			nativeImage = new java.io.File(src);
		} else if (typeof src === 'string' && src.startsWith('~/')) {
			nativeImage = new java.io.File(path.join(knownFolders.currentApp().path, src.replace('~/', '')));
		} else if (typeof src === 'string' && src.startsWith('http')) {
			nativeImage = src;
		} else if (typeof src === 'string' && src.startsWith('res://')) {
			nativeImage = java.lang.Integer.valueOf(Utils.ad.resources.getDrawableId(src.replace('res://', '')));
		} else if (typeof src === 'object') {
			if (src instanceof ImageSource) {
				const tempFile = path.join(knownFolders.currentApp().path, `${Date.now()} + .png`);
				const saved = (<ImageSource>src).saveToFile(tempFile, 'png');
				if (saved) {
					nativeImage = new java.io.File(tempFile);
				}
			} else if (src instanceof ImageAsset) {
				return src.android;
			}
		}
		return nativeImage;
	}

	[stretchProperty.getDefault](): 'aspectFit' {
		return 'aspectFit';
	}

	// @ts-ignore
	[stretchProperty.setNative](value: 'none' | 'aspectFill' | 'aspectFit' | 'fill') {
		if (!this.builder) return value;
		this.resetImage(true);
		return value;
	}

	public clearItem() {}

	private setBorderAndRadius() {
		if (!this.builder) return;
		const RoundedCornersTransformation = jp.wasabeef.glide.transformations.RoundedCornersTransformation;
		const array = Array.create('com.bumptech.glide.load.Transformation', 4);
		array[0] = new RoundedCornersTransformation(Utils.layout.toDevicePixels(<any>this.style.borderTopLeftRadius), Utils.layout.toDevicePixels(<any>this.style.borderTopWidth), RoundedCornersTransformation.CornerType.TOP_LEFT);

		array[1] = new RoundedCornersTransformation(Utils.layout.toDevicePixels(<any>this.style.borderTopRightRadius), Utils.layout.toDevicePixels(<any>this.style.borderTopWidth), RoundedCornersTransformation.CornerType.TOP_RIGHT);

		array[2] = new RoundedCornersTransformation(Utils.layout.toDevicePixels(<any>this.style.borderBottomLeftRadius), Utils.layout.toDevicePixels(<any>this.style.borderBottomWidth), RoundedCornersTransformation.CornerType.BOTTOM_LEFT);
		array[3] = new RoundedCornersTransformation(Utils.layout.toDevicePixels(<any>this.style.borderBottomRightRadius), Utils.layout.toDevicePixels(<any>this.style.borderBottomWidth), RoundedCornersTransformation.CornerType.BOTTOM_RIGHT);

		this.builder.transform(array);
	}

	/**
	 * Helper method to call the Picasso resize method, which is necessary before centerCrop() and centerInside().
	 * Will use the `resize` value if provided, next is the `height` and `width` of the imageCacheIt instance
	 * last is the parent which is probably not reliable.
	 * Only used when aspectFit or aspectFill are set on the stretch property.
	 */
	private setAspectResize() {
		let newSize;
		if (this.resize && this.resize.split(',').length > 1) {
			newSize = {
				width: parseInt(this.resize.split(',')[0], 10),
				height: parseInt(this.resize.split(',')[1], 10),
			};
		} else if (this.width || this.height) {
			// use the images height/width (need to be set - more gurds if needed)
			newSize = {
				width: parseInt(this.width.toString(), 10),
				height: parseInt(this.height.toString(), 10),
			};
		} else {
			// use parent size (worth a shot I guess but probably not going to work here reliably)
			newSize = {
				width: this.parent.effectiveWidth,
				height: this.parent.effectiveHeight,
			};
		}

		this.builder.override(newSize.width, newSize.height);
	}

	private resetImage(reload = false) {
		this.builder = this.manager.load(ImageZoom.getImage(this.src));
		this.setBorderAndRadius();

		switch (this.stretch) {
			case 'aspectFit':
				this.setAspectResize();
				this.builder.centerInside();
				break;
			case 'aspectFill':
				this.setAspectResize();
				this.builder.centerCrop();
				break;
			case 'fill':
				this.builder.fitCenter();
				break;
			case 'none':
			default:
				break;
		}

		if (reload) {
			this.builder.into(this.nativeView);
		}
	}
}

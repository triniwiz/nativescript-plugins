import { ImageZoomBase, maxZoomScaleProperty, minZoomScaleProperty, srcProperty, stretchProperty, zoomScaleProperty } from './common';
import { ImageSource, knownFolders, Utils, path, CoreTypes } from '@nativescript/core';

export class ImageZoom extends ImageZoomBase {
	_image: any;
	private delegate: any;

	constructor() {
		super();
	}

	public createNativeView() {
		this._image = UIImageView.new();
		this._image.clipsToBounds = true;
		this._image.contentMode = UIViewContentMode.ScaleAspectFit;
		const nativeView = UIScrollView.new();
		nativeView.addSubview(this._image);
		nativeView.zoomScale = this.zoomScale;
		nativeView.minimumZoomScale = this.minZoom;
		nativeView.maximumZoomScale = this.maxZoom;
		return nativeView;
	}

	public disposeNativeView() {
		this.delegate = null;
	}

	public onLayout(left: number, top: number, right: number, bottom: number): void {
		super.onLayout(left, top, right, bottom);
		this._image.frame = this.nativeView.bounds;
	}

	public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
		const nativeView = this.nativeView;
		if (nativeView) {
			const width = Utils.layout.getMeasureSpecSize(widthMeasureSpec);
			const height = Utils.layout.getMeasureSpecSize(heightMeasureSpec);
			this.setMeasuredDimension(width, height);
		}
	}

	public initNativeView() {
		this.delegate = UIScrollViewDelegateImpl.initWithOwner(new WeakRef<ImageZoom>(this));
		this.nativeView.delegate = this.delegate;
	}

	[stretchProperty.setNative](value: 'none' | 'aspectFill' | 'aspectFit' | 'fill') {
		switch (value) {
			case 'aspectFit':
				this.nativeViewProtected.contentMode = UIViewContentMode.ScaleAspectFit;
				break;

			case 'aspectFill':
				this.nativeViewProtected.contentMode = UIViewContentMode.ScaleAspectFill;
				break;

			case 'fill':
				this.nativeViewProtected.contentMode = UIViewContentMode.ScaleToFill;
				break;

			case 'none':
			default:
				this.nativeViewProtected.contentMode = UIViewContentMode.TopLeft;
				break;
		}
	}

	[srcProperty.setNative](src: any) {
		if (typeof src === 'string' && src.startsWith('res://')) {
			this._image.image = UIImage.imageNamed(src.replace('res://', ''));
		} else if (typeof src === 'object') {
			this._image.image = src.ios;
		} else if (typeof src === 'string' && src.startsWith('http')) {
			ImageSource.fromUrl(src).then((source) => {
				this._image.image = source.ios;
			});
		} else if (typeof src === 'string' && src.startsWith('~')) {
			this._image.image = UIImage.imageWithContentsOfFile(path.join(knownFolders.currentApp().path, src.replace('~', '')));
		} else {
			this._image.image = UIImage.imageWithContentsOfFile(src);
		}
	}

	[stretchProperty.setNative](stretch: CoreTypes.ImageStretchType) {
		this._image.stretch = stretch;
	}

	// @ts-ignore
	[zoomScaleProperty.setNative](scale: number) {
		if (this.nativeView) {
			this.nativeView.zoomScale = scale;
		}
	}

	// @ts-ignore
	[minZoomScaleProperty.setNative](scale: number) {
		if (this.nativeView) {
			this.nativeView.minimumZoomScale = scale;
		}
	}

	// @ts-ignore
	[maxZoomScaleProperty.setNative](scale: number) {
		if (this.nativeView) {
			this.nativeView.maximumZoomScale = scale;
		}
	}
}

@NativeClass()
export class UIScrollViewDelegateImpl extends NSObject implements UIScrollViewDelegate {
	private owner: WeakRef<ImageZoom>;
	public static ObjCProtocols = [UIScrollViewDelegate];

	public static initWithOwner(owner: WeakRef<ImageZoom>): UIScrollViewDelegateImpl {
		const delegate = new UIScrollViewDelegateImpl();
		delegate.owner = owner;
		return delegate;
	}

	viewForZoomingInScrollView(scrollView: UIScrollView) {
		const owner = this.owner.get();
		if (!owner) {
			return null;
		}
		return owner._image;
	}
}

import { fallbackProperty, filterProperty, headersProperty, ImageCacheItBase, imageSourceProperty, overlayColorProperty, Priority, priorityProperty, srcProperty, stretchProperty, tintColorProperty } from './common';
import { Color, knownFolders, path as fsPath, Length, ImageSource, Trace, Application, Screen } from '@nativescript/core';
import { isNullOrUndefined } from '@nativescript/core/utils/types';
import { isDataURI, isFileOrResourcePath, isFontIconURI, layout, RESOURCE_PREFIX } from '@nativescript/core/utils/utils';

const main_queue = dispatch_get_current_queue();
let concurrentQueue;

interface CacheItem {
	headers: Map<string, string>;
	url: string;
}

interface CacheHeaders {
	[header: string]: CacheItem;
}

export class ImageCacheIt extends ImageCacheItBase {
	nativeViewProtected: SDAnimatedImageView;
	private ctx;
	private static cacheHeaders: CacheHeaders = {};
	private static hasModifier: boolean = false;
	private uuid: string;
	private _imageSourceAffectsLayout: boolean = true;
	private filterQueue;

	constructor() {
		super();
	}

	public static get maxDiskCacheSize() {
		return SDImageCache.sharedImageCache.config.maxDiskSize;
	}

	public static set maxDiskCacheSize(size: number) {
		SDImageCache.sharedImageCache.config.maxDiskSize = size;
	}

	public static set maxMemoryCacheSize(size: number) {
		SDImageCache.sharedImageCache.config.maxMemoryCost = size;
	}

	public static get maxMemoryCacheSize(): number {
		return SDImageCache.sharedImageCache.config.maxMemoryCost;
	}

	public static get maxDiskCacheAge(): number {
		return SDImageCache.sharedImageCache.config.maxDiskAge;
	}

	public static set maxDiskCacheAge(age: number) {
		SDImageCache.sharedImageCache.config.maxDiskAge = age;
	}

	public createNativeView() {
		this.uuid = NSUUID.UUID().UUIDString;
		this.filterQueue = ImageCacheItUtils.createConcurrentQueue('TNSImageOptimizeQueue');
		if (!ImageCacheIt.hasModifier) {
			SDWebImageDownloader.sharedDownloader.requestModifier = SDWebImageDownloaderRequestModifier.requestModifierWithBlock(
				(request: NSURLRequest): NSURLRequest => {
					if (request && request.URL && (request as any).URL.uuid && ImageCacheIt.cacheHeaders[(request as any).URL.uuid]) {
						const cachedHeader = ImageCacheIt.cacheHeaders[(request as any).URL.uuid];
						if (cachedHeader.url === request.URL.absoluteString) {
							const newRequest = request.mutableCopy() as NSMutableURLRequest;
							if (cachedHeader.headers) {
								cachedHeader.headers.forEach((value, key) => {
									newRequest.addValueForHTTPHeaderField(value, key);
								});
							}
							return newRequest.copy();
						}
					}
					return request;
				}
			);
			ImageCacheIt.hasModifier = true;
		}
		const nativeView = SDAnimatedImageView.new();
		nativeView.contentMode = UIViewContentMode.ScaleAspectFit;
		nativeView.userInteractionEnabled = true;
		nativeView.clipsToBounds = true;
		let metalDevice = MTLCreateSystemDefaultDevice() || null;
		if (metalDevice) {
			this.ctx = CIContext.contextWithMTLDevice(metalDevice);
		} else {
			// EAGLRenderingAPI.kEAGLRenderingAPIOpenGLES3
			let context = EAGLContext.alloc().initWithAPI(3);
			if (!context) {
				context = EAGLContext.alloc().initWithAPI(2);
			}
			if (context) {
				this.ctx = CIContext.contextWithEAGLContext(context);
			} else {
				this.ctx = new CIContext(null);
			}
		}
		return nativeView;
	}

	public initNativeView() {
		super.initNativeView();
		this._setNativeClipToBounds();
	}

	_setNativeClipToBounds() {
		// Always set clipsToBounds for images
		this.nativeView.clipsToBounds = true;
	}

	public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
		const width = layout.getMeasureSpecSize(widthMeasureSpec);
		const widthMode = layout.getMeasureSpecMode(widthMeasureSpec);
		const height = layout.getMeasureSpecSize(heightMeasureSpec);
		const heightMode = layout.getMeasureSpecMode(heightMeasureSpec);

		const nativeWidth = this.imageSource ? layout.toDevicePixels(this.imageSource.width) : 0;
		const nativeHeight = this.imageSource ? layout.toDevicePixels(this.imageSource.height) : 0;

		let measureWidth = Math.max(nativeWidth, this.effectiveMinWidth);
		let measureHeight = Math.max(nativeHeight, this.effectiveMinHeight);

		const finiteWidth: boolean = widthMode !== layout.UNSPECIFIED;
		const finiteHeight: boolean = heightMode !== layout.UNSPECIFIED;

		this._imageSourceAffectsLayout = widthMode !== layout.EXACTLY || heightMode !== layout.EXACTLY;

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

	private _priority = 0;

	[headersProperty.getDefault](): Map<string, string> {
		return new Map<string, string>();
	}

	[headersProperty.setNative](value: Map<string, string>) {
		if (this.uuid) {
			const data = ImageCacheIt.cacheHeaders[this.uuid] || { url: undefined, headers: undefined };
			data.headers = value;
			ImageCacheIt.cacheHeaders[this.uuid] = data;
		}
	}

	private _loadStarted: boolean = false;

	private _handlePlaceholder(src: any): UIImage | null {
		let placeHolder = null;
		if (typeof src === 'string') {
			try {
				if (isFileOrResourcePath(src)) {
					if (src.indexOf(RESOURCE_PREFIX) === 0) {
						const resPath = src.substr(RESOURCE_PREFIX.length);
						placeHolder = ImageSource.fromResourceSync(resPath);
					} else {
						placeHolder = ImageSource.fromFileSync(src);
					}
				} else if (isDataURI(src)) {
					const base64Data = src.split(',')[1];
					if (base64Data !== undefined) {
						placeHolder = ImageSource.fromBase64Sync(base64Data);
					}
				} else if (isFontIconURI(src)) {
					const fontIconCode = src.split('//')[1];
					if (fontIconCode !== undefined) {
						// support sync mode only
						const font = this.style.fontInternal;
						const color = this.style.color;
						placeHolder = ImageSource.fromFontIconCodeSync(fontIconCode, font, color);
					}
				}
				placeHolder = placeHolder && placeHolder.ios;
			} catch (err) {
				this.isLoading = false;
				if (Trace.isEnabled()) {
					if (typeof err === 'object' && err.message) {
						err = err.message;
					}
					Trace.write(err, Trace.categories.Debug);
				}
			}
		} else if (src instanceof UIImage) {
			placeHolder = src;
		} else if (src instanceof ImageSource) {
			placeHolder = src.ios;
		}
		return placeHolder;
	}

	private async _loadImage(src: any) {
		this._loadStarted = true;
		this._emitLoadStartEvent(src);
		this.progress = 0;
		const ref = new WeakRef(this);
		if (this.nativeView && (<any>this.nativeView).sd_cancelCurrentImageLoad) {
			(<any>this.nativeView).sd_cancelCurrentImageLoad();
		}
		// AvoidAutoSetImage | RetryFailed | ScaleDownLargeImages | LowPriority || HighPriority
		const options = 1024 | 1 | 2048 | this._priority;
		this.isLoading = true;
		const context = {};
		const placeHolder = this._handlePlaceholder(this.placeHolder);
		const url = NSURL.URLWithString(src);
		if (!url) {
			this._handleFallbackImage();
			return;
		}
		// store arbitrary value to track on NSURL
		(<any>url).uuid = this.uuid;
		(<any>this.nativeView).sd_setImageWithURLPlaceholderImageOptionsContextProgressCompleted(
			url,
			placeHolder,
			options,
			context,
			(p1: number, p2: number, p3: NSURL) => {
				const owner = ref.get();
				if (owner) {
					let progress = 0;
					if (p2 !== 0) {
						progress = p1 / p2;
					} else {
						progress = 1;
					}
					progress = Math.max(Math.min(progress, 1), 0) * 100;
					dispatch_async(main_queue, () => {
						if (!owner._loadStarted) {
							owner._emitLoadStartEvent(p3?.absoluteString ? p3.absoluteString : (url?.absoluteString ? url.absoluteString : src));
							owner._loadStarted = true;
						}
						owner.progress = progress;
						owner._emitProgressEvent(p1, p2, progress, p3.absoluteString);
					});
				}
			},
			(p1: UIImage, p2: NSError, p3: any, p4: NSURL) => {
				const owner = ref.get();
				if (owner) {
					owner.isLoading = false;
					if (p2) {
						owner._emitErrorEvent(p2.localizedDescription, p4?.absoluteString ? p4.absoluteString : (url?.absoluteString ? url.absoluteString : src));
						owner._emitLoadEndEvent(p4?.absoluteString ? p4.absoluteString : (url?.absoluteString ? url.absoluteString : src));
						if (owner.errorHolder) {
							const errorHolder = this._handlePlaceholder(this.errorHolder);
							owner.imageSource = new ImageSource(errorHolder);
							owner.nativeView.image = errorHolder;
							owner.setTintColor(owner.style.tintColor);
							// Fade ?
							// this.nativeView.alpha = 0;
							// UIView.animateWithDurationAnimations(1, ()=>{
							//     this.nativeView.alpha = 1;
							// })
						}
					} else if (p3 !== SDImageCacheType.Memory && owner.transition) {
						switch (owner.transition) {
							case 'fade':
								owner.nativeView.alpha = 0;
								UIView.animateWithDurationAnimations(1, () => {
									owner.nativeView.alpha = 1;
									owner._emitLoadEndEvent(p4 && p4.absoluteString ? p4.absoluteString : (url && url.absoluteString ? url.absoluteString : src));
								});
								break;
							default:
								break;
						}
					}

					if (p1) {
						const source = new ImageSource();
						source.ios = p1;
						this._createImageSourceFromSrc(source);
					}
				}
			}
		);
	}

	getFileName(path: string): string {
		let fileName = typeof path === 'string' ? path.trim() : '';
		if (fileName.indexOf('~/') === 0) {
			fileName = fsPath.join(knownFolders.currentApp().path, fileName.replace('~/', ''));
		}

		return fileName;
	}

	private static _getMagicBytes(bytes: Uint8Array) {
		let signature = '';
		for (let i = 0; i < bytes.length; i++) {
			signature += bytes[i].toString(16);
		}
		switch (signature) {
			case '89504E47':
				return 'image/png';
			case '47494638':
				return 'image/gif';
			case '25504446':
				return 'application/pdf';
			case 'FFD8FFDB':
			case 'FFD8FFE0':
			case 'FFD8FFE1':
				return 'image/jpeg';
			case '504B0304':
				return 'application/zip';
			default:
				return 'application/octet-stream';
		}
	}

	private async _handleFallbackImage() {
		this.nativeViewProtected.image = this._handlePlaceholder(this.fallback);
	}

	[fallbackProperty.setNative](src: any) {}

	[srcProperty.setNative](src: any) {
		if (typeof src === 'string' && src.startsWith('http')) {
			const data = ImageCacheIt.cacheHeaders[this.uuid] || { url: undefined, headers: undefined };
			data['url'] = src;
			ImageCacheIt.cacheHeaders[this.uuid] = data;
			this._loadImage(src);
		} else {
			if (isNullOrUndefined(src)) {
				this._handleFallbackImage();
				return;
			}
			const sync = this.loadMode === 'sync';
			try {
				if (isFileOrResourcePath(src)) {
					if (src.indexOf(RESOURCE_PREFIX) === 0) {
						const resPath = src.substr(RESOURCE_PREFIX.length);
						const loadResImage = () => {
							const url = NSBundle.mainBundle.URLForResourceWithExtension(resPath, 'gif');
							let image;
							if (url) {
								const data = NSData.dataWithContentsOfURL(url);
								if (data) {
									image = SDAnimatedImage.alloc().initWithData(data);
								}
							}
							if (!image) {
								image = UIImage.imageNamed(resPath);
							}
							return image;
						};

						const setResImage = (image) => {
							let source;
							if (image instanceof SDAnimatedImage) {
								source = new ImageSource();
								source.ios = image;
							} else {
								source = new ImageSource(image);
							}
							this._createImageSourceFromSrc(source);
						};
						if (sync) {
							setResImage(loadResImage());
						} else {
							dispatch_async(this.filterQueue, () => {
								const image = loadResImage();
								dispatch_async(main_queue, () => {
									setResImage(image);
								});
							});
						}
					} else {
						const getImage = () => {
							const data = NSData.dataWithContentsOfURL(NSURL.fileURLWithPath(this.getFileName(src)));
							if (!data) {
								return [null, ''];
							}
							const buffer = interop.bufferFromData(data);
							const array = new Uint8Array(buffer);
							const type = ImageCacheIt._getMagicBytes(array.subarray(0, 4));
							return [data, type];
						};

						const setImage = (data) => {
							if (!data[0]) {
								this._handleFallbackImage();
								return;
							}
							if (data[1].indexOf('gif') > -1) {
								const source = new ImageSource();
								source.ios = SDAnimatedImage.alloc().initWithData(data[0]);
								this._createImageSourceFromSrc(source);
							} else {
								this._createImageSourceFromSrc(new ImageSource(UIImage.alloc().initWithData(data[0])));
							}
						};

						if (sync) {
							setImage(getImage());
						} else {
							dispatch_async(this.filterQueue, () => {
								const data: any = getImage();
								dispatch_async(main_queue, () => {
									setImage(data);
								});
							});
						}
					}
				} else {
					this._createImageSourceFromSrc(src);
				}
			} catch (e) {}
		}
	}

	private setAspect(value: string) {
		switch (value) {
			case 'aspectFit':
				this.nativeView.contentMode = UIViewContentMode.ScaleAspectFit;
				break;
			case 'aspectFill':
				this.nativeView.contentMode = UIViewContentMode.ScaleAspectFill;
				break;
			case 'fill':
				this.nativeView.contentMode = UIViewContentMode.ScaleToFill;
				break;
			case 'none':
			default:
				this.nativeView.contentMode = UIViewContentMode.TopLeft;
				break;
		}
	}

	[stretchProperty.getDefault](): 'aspectFit' {
		return 'aspectFit';
	}

	[stretchProperty.setNative](value: 'none' | 'aspectFill' | 'aspectFit' | 'fill') {
		this.setAspect(value);
	}

	[filterProperty.setNative](filter: any) {
		this.filter = filter;
		if (this.nativeViewProtected.image) {
			this._setNativeImage(this.nativeViewProtected.image);
		}
	}

	private _templateImageWasCreated: boolean;

	[tintColorProperty.setNative](value: any) {
		this.setTintColor(value);
	}

	private static _getFilterByName(value: string, image: UIImage) {
		let filter: CIFilter;
		if (!ImageCacheIt.ciFilterMap[value]) {
			ImageCacheIt.ciFilterMap[value] = CIFilter.filterWithName(value);
		}

		filter = ImageCacheIt.ciFilterMap[value];
		filter.setDefaults();
		if (image && image.CIImage) {
			filter.setValueForKey(image.CIImage, kCIInputImageKey);
			filter.setValueForKey(NSNull, kCIImageColorSpace);
		} else {
			if (image && image.CGImage) {
				filter.setValueForKey(CIImage.imageWithCGImage(image.CGImage), kCIInputImageKey);
			}
		}
		return filter;
	}

	private setTintColor(value: Color | string) {
		if (typeof value === 'string') {
			value = new Color(value);
		}
		if (value && this.nativeViewProtected.image && !this._templateImageWasCreated) {
			this.nativeViewProtected.image = this.nativeViewProtected.image.imageWithRenderingMode(UIImageRenderingMode.AlwaysTemplate);
			this._templateImageWasCreated = true;
		} else if (!value && this.nativeViewProtected.image && this._templateImageWasCreated) {
			this._templateImageWasCreated = false;
			this.nativeViewProtected.image = this.nativeViewProtected.image.imageWithRenderingMode(UIImageRenderingMode.Automatic);
		}
		this.nativeViewProtected.tintColor = value ? value.ios : null;
	}

	private _setOverlayColor(value: Color | string, image: UIImage) {
		if (!image) {
			return image;
		}
		if (typeof value === 'string') {
			value = new Color(value);
		}
		if (value) {
			/* const rect = CGRectMake(0, 0, this.imageSource.width, this.imageSource.height);
       UIGraphicsBeginImageContextWithOptions(rect.size, false, 0);
       const context = UIGraphicsGetCurrentContext();

       image.drawAtPoint(CGPointZero);

       const maskImage = image.CGImage;
       CGContextClipToMask(context, rect, maskImage);

       CGContextSetRGBFillColor(context, value.r / 255, value.g / 255, value.b / 255, value.a / 255);
       CGContextFillRect(context, rect);

       const overlayedImg = UIGraphicsGetImageFromCurrentImageContext();
       UIGraphicsEndImageContext();
       return overlayedImg;

       */
			return ImageCacheItUtils.createImageOverlayColors(image, this.imageSource.width, this.imageSource.height, value.r / 255, value.g / 255, value.b / 255, value.a / 255);
		}
		return image;
	}

	[overlayColorProperty.setNative](value: any) {
		if (this.imageSource) {
			this._setNativeImage(this.imageSource.ios);
		}
	}

	[priorityProperty.setNative](value: any) {
		switch (value) {
			case Priority.High:
				this._priority = 128;
				break;
			case Priority.Low:
				this._priority = 2;
				break;
			default:
				this._priority = 0;
				break;
		}
	}

	public _setNativeImage(nativeImage: UIImage) {
		const setImage = (image?) => {
			this.nativeViewProtected.image = image || nativeImage;
			this._templateImageWasCreated = false;
			this.isLoading = false;
			this.setTintColor(this.style.tintColor);
			if (this._imageSourceAffectsLayout) {
				this.requestLayout();
			}
		};

		let overlayColor = this.overlayColor;
		if (typeof overlayColor === 'string') {
			overlayColor = new Color(overlayColor);
		}

		if (overlayColor instanceof Color) {
			overlayColor = `rgba(${overlayColor.r},${overlayColor.g},${overlayColor.b},${overlayColor.a / 255})`;
		} else {
			overlayColor = null;
		}
		if (this.filter) {
			const options = {
				filter: this.filter,
				overlayColor: overlayColor,
			};
			if (!overlayColor) {
				delete options.overlayColor;
			}
			ImageCacheItUtils.applyProcessing(this.ctx, nativeImage, <any>options, (image) => {
				setImage(image);
			}, null);
			/*dispatch_async(this.filterQueue, () => {
          nativeImage = this._setOverlayColor(this.overlayColor, nativeImage);
          nativeImage = this._setupFilter(nativeImage);
          dispatch_async(main_queue, () => {
              setImage();
          });
      });*/
		} else {
			if (NSThread.isMainThread) {
				if (this.overlayColor) {
					ImageCacheItUtils.applyProcessing(
						this.ctx,
						nativeImage,
						<any>{
							overlayColor: overlayColor,
						},
						(image) => {
							setImage(image);
						}, null
					);
					/* dispatch_async(this.filterQueue, () => {
               nativeImage = this._setOverlayColor(this.overlayColor, nativeImage);
               dispatch_async(main_queue, () => {
                   setImage();
               });
           });*/
				} else {
					setImage();
				}
			} else {
				if (this.overlayColor) {
					ImageCacheItUtils.applyProcessing(
						this.ctx,
						nativeImage,
						<any>{
							overlayColor: overlayColor,
						},
						(image) => {
							setImage(image);
						}, null
					);
				} else {
					dispatch_async(main_queue, () => {
						setImage();
					});
				}
				// nativeImage = this._setOverlayColor(this.overlayColor, nativeImage);
				/*dispatch_async(main_queue, () => {
            setImage();
        });*/
			}
		}
	}

	[imageSourceProperty.setNative](value: any) {
		this._setNativeImage(value ? value.ios : null);
	}

	private static ciFilterMap = {};

	private _setupFilter(image) {
		if (isNullOrUndefined(image)) {
			return image;
		}
		const getValue = (value: string) => {
			return value.substring(value.indexOf('(') + 1, value.indexOf(')'));
		};
		const createFilterWithName = (value: string) => {
			return ImageCacheIt._getFilterByName(value, image);
		};

		if (this.filter) {
			if (image) {
				const filters = this.filter ? this.filter.split(' ') : [];
				filters.forEach((filter: any) => {
					let value = getValue(filter) as any;
					if (filter.indexOf('blur') > -1) {
						let width = -1;
						if (value.indexOf('%') > -1) {
							value = Length.parse(value);
							width = image.size.width * value;
						} else if (value.indexOf('px')) {
							width = parseInt(value.replace('px', ''), 10);
						} else if (value.indexOf('dip')) {
							width = parseInt(value.replace('dip', ''), 10) * Screen.mainScreen.scale;
						} else if (typeof value === 'number') {
							width = value;
						}

						if (width > 25) {
							width = 25;
						}

						if (width > -1) {
							const blurFilter = createFilterWithName('CIGaussianBlur');
							blurFilter.setValueForKey(width, kCIInputRadiusKey);
							const blurredImg = blurFilter.valueForKey(kCIOutputImageKey);
							if (blurredImg && blurredImg.extent) {
								const cgiImage = this.ctx.createCGImageFromRect(blurredImg, blurredImg.extent);
								image = UIImage.imageWithCGImage(cgiImage);
							}
						}
					} else if (filter.indexOf('contrast') > -1) {
						if (value.indexOf('%')) {
							const contrast = parseFloat(value.replace('%', '')) / 100;
							const contrastFilter = createFilterWithName('CIColorControls');
							contrastFilter.setValueForKey(contrast, kCIInputContrastKey);
							const contrastImg: CIImage = contrastFilter.valueForKey(kCIOutputImageKey);
							if (contrastImg && contrastImg.extent) {
								const cgiImage = this.ctx.createCGImageFromRect(contrastImg, contrastImg.extent);
								image = UIImage.imageWithCGImage(cgiImage);
							}
						}
					} else if (filter.indexOf('brightness') > -1) {
						if (value.indexOf('%')) {
							let brightness = parseFloat(value.replace('%', '')) / 100;
							/* if (brightness >= 0 && brightness < 1) {
                   brightness = -1 + brightness;
               }*/

							const brightnessFilter = createFilterWithName('CIColorControls');
							brightnessFilter.setValueForKey(brightness, kCIInputContrastKey);
							const contrastImg = brightnessFilter.valueForKey(kCIOutputImageKey);
							if (contrastImg && contrastImg.extent) {
								const cgiImage = this.ctx.createCGImageFromRect(contrastImg, contrastImg.extent);
								image = UIImage.imageWithCGImage(cgiImage);
							}
						}
					} else if (filter.indexOf('grayscale') > -1 || filter.indexOf('greyscale') > -1) {
						let grayscale: number;
						if (value.indexOf('%') > -1) {
							grayscale = parseFloat(value.replace('%', '')) / 100;
						} else if (value.indexOf('.') > -1) {
							grayscale = parseFloat(value);
						} else {
							grayscale = parseInt(value, 10);
						}

						if (grayscale > 1) {
							grayscale = 1;
						}

						grayscale = 1 - grayscale;

						const grayscaleFilter = createFilterWithName('CIColorControls');
						grayscaleFilter.setValueForKey(grayscale, kCIInputSaturationKey);
						const grayscaleImg = grayscaleFilter.valueForKey(kCIOutputImageKey);
						if (grayscaleImg && grayscaleImg.extent) {
							const cgiImage = this.ctx.createCGImageFromRect(grayscaleImg, grayscaleImg.extent);
							image = UIImage.imageWithCGImage(cgiImage);
						}
					} else if (filter.indexOf('invert') > -1) {
						// TODO handle value
						const invertFilter = createFilterWithName('CIColorInvert');
						const invertImg = invertFilter.valueForKey(kCIOutputImageKey);
						if (invertImg && invertImg.extent) {
							const cgiImage = this.ctx.createCGImageFromRect(invertImg, invertImg.extent);
							image = UIImage.imageWithCGImage(cgiImage);
						}
					} else if (filter.indexOf('sepia') > -1) {
						const sepia = parseFloat(value.replace('%', '')) / 100;
						const sepiaFilter = createFilterWithName('CISepiaTone');
						sepiaFilter.setValueForKey(sepia, kCIInputIntensityKey);
						const sepiaImg = sepiaFilter.valueForKey(kCIOutputImageKey);
						if (sepiaImg && sepiaImg.extent) {
							const cgiImage = this.ctx.createCGImageFromRect(sepiaImg, sepiaImg.extent);
							image = UIImage.imageWithCGImage(cgiImage);
						}
					} else if (filter.indexOf('opacity') > -1) {
						let alpha: number;
						if (value.indexOf('%') > -1) {
							alpha = parseInt(value.replace('%', ''), 10) / 100;
						} else if (value.indexOf('.') > -1) {
							alpha = parseFloat(value);
						} else {
							alpha = parseInt(value, 10);
						}
						UIGraphicsBeginImageContextWithOptions(image.size, false, image.scale);
						image.drawAtPointBlendModeAlpha(CGPointZero, 0, alpha);
						image = UIGraphicsGetImageFromCurrentImageContext();
						UIGraphicsEndImageContext();
					} else if (filter.indexOf('hue') > -1) {
						const hueFilter = createFilterWithName('CIHueAdjust');
						let hue = 0;
						if (value.indexOf('deg') > -1) {
							hue = parseInt(value.replace('deg', ''), 10);
						} else if (value.indexOf('turn') > -1) {
							hue = parseInt(value.replace('turn', ''), 10) * 360;
						}
						hueFilter.setValueForKey(hue, kCIInputAngleKey);

						const hueImg = hueFilter.valueForKey(kCIOutputImageKey);
						if (hueImg && hueImg.extent) {
							const cgiImage = this.ctx.createCGImageFromRect(hueImg, hueImg.extent);
							image = UIImage.imageWithCGImage(cgiImage);
						}
					} else if (filter.indexOf('saturate') > -1) {
						const saturateFilter = createFilterWithName('CIColorControls');
						let saturate: number;
						if (value.indexOf('%') > -1) {
							saturate = parseInt(value.replace('%', ''), 10) / 100;
						} else if (value.indexOf('.') > -1) {
							saturate = parseFloat(value);
						} else {
							saturate = parseInt(value, 10);
						}
						saturateFilter.setValueForKey(saturate, kCIInputSaturationKey);
						const saturateImg = saturateFilter.valueForKey(kCIOutputImageKey);
						if (saturateImg && saturateImg.extent) {
							const cgiImage = this.ctx.createCGImageFromRect(saturateImg, saturateImg.extent);
							image = UIImage.imageWithCGImage(cgiImage);
						}
					}
				});
			}
			return image;
		} else {
			return image;
		}
	}

	public static hasItem(src: string): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			const manager = SDWebImageManager.sharedManager;
			if (manager) {
				const key = manager.cacheKeyForURL(NSURL.URLWithString(src));
				manager.imageCache.containsImageForKeyCacheTypeCompletion(key, 3 /* All */, (type) => {
					if (type > 0) {
						resolve(undefined);
					} else {
						reject();
					}
				});
			} else {
				reject();
			}
		});
	}

	public static deleteItem(src: string): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			const manager = SDWebImageManager.sharedManager;
			if (manager) {
				const key = manager.cacheKeyForURL(NSURL.URLWithString(src));
				(<SDImageCache>manager.imageCache).removeImageForKeyFromDiskWithCompletion(key, true, () => {
					resolve(undefined);
				});
			} else {
				reject();
			}
		});
	}

	public static getItem(src: string): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			const manager = SDWebImageManager.sharedManager;
			if (manager) {
				if (src && src.indexOf('http') > -1) {
					const nativeSrc = NSURL.URLWithString(src);
					manager.loadImageWithURLOptionsProgressCompleted(
						nativeSrc,
						SDWebImageOptions.ScaleDownLargeImages,
						(receivedSize: number, expectedSize: number, path: NSURL) => {},
						(image, data, error, type, finished, completedUrl) => {
							if (image === null && error !== null && data === null) {
								reject(error.localizedDescription);
							} else if (finished && completedUrl != null) {
								if (type === SDImageCacheType.Disk) {
									const key = manager.cacheKeyForURL(completedUrl);
									const source = (<SDImageCache>manager.imageCache).cachePathForKey(key);
									resolve(source);
								} else {
									const sharedCache = SDImageCache.sharedImageCache;
									sharedCache.storeImageForKeyCompletion(image, completedUrl.absoluteString, () => {
										const key = manager.cacheKeyForURL(completedUrl);
										const source = (<SDImageCache>manager.imageCache).cachePathForKey(key);
										resolve(source);
									});
								}
							}
						}
					);
				}
			} else {
				reject();
			}
		});
	}

	public static clear(): Promise<any> {
		return new Promise((resolve, reject) => {
			const manager = SDWebImageManager.sharedManager;
			if (manager) {
				(<SDImageCache>manager.imageCache).clearMemory();
				(<SDImageCache>manager.imageCache).clearDiskOnCompletion(() => {
					resolve(undefined);
				});
			}
		});
	}

	private static autoMMCallback;

	public static enableAutoMM() {
		ImageCacheIt.autoMMCallback = (args) => {
			const manager = SDWebImageManager.sharedManager;
			if (manager) {
				(<SDImageCache>manager.imageCache).clearMemory();
			}
		};
		Application.on(Application.lowMemoryEvent as any, ImageCacheIt.autoMMCallback);
	}

	public static disableAutoMM() {
		if (ImageCacheIt.autoMMCallback) {
			Application.off(Application.lowMemoryEvent as any, ImageCacheIt.autoMMCallback);
		}
	}
}

import {
  filterProperty,
  headersProperty,
  ImageCacheItBase,
  Priority, priorityProperty,
  resizeProperty,
  srcProperty,
  stretchProperty, tintColorProperty
} from './common';

import {
  ImageSource,
  knownFolders,
  Utils,
  path as TNSPath,
  Application,
  Screen,
  PercentLength, ViewHelper, Trace
} from '@nativescript/core';
import {isNullOrUndefined, isObject, isString} from "@nativescript/core/utils/types";
import {Length} from "@nativescript/core/ui/styling/style-properties";

declare var SDWebImageManager, SDWebImageOptions, SDImageCacheType, SDImageCache, ImageCacheItUtils;
const main_queue = dispatch_get_current_queue();
let concurrentQueue;
const getFilterQueue = () => {
  if (!concurrentQueue) {
    concurrentQueue = ImageCacheItUtils.createConcurrentQueue('TNSImageOptimizeQueue');
  }
  return concurrentQueue;
}

export class ImageCacheIt extends ImageCacheItBase {
  nativeView: SDAnimatedImageView;
  private ctx;
  private static cacheHeaders: Map<string, { headers: Map<string, string>, url: string }> = new Map<string, { headers: Map<string, string>, url: string }>();
  private static hasModifier: boolean = false;
  private uuid: string;
  private _observer: any;
  private _imageSourceAffectsLayout: boolean = true;
  progress: number = 0;

  constructor() {
    super();
  }

  createNativeView() {
    this.uuid = NSUUID.UUID().UUIDString;
    if (!ImageCacheIt.hasModifier) {
      SDWebImageDownloader.sharedDownloader.requestModifier = SDWebImageDownloaderRequestModifier.requestModifierWithBlock((request: NSURLRequest): NSURLRequest => {
        if (request && request.URL && (request as any).URL.uuid && ImageCacheIt.cacheHeaders.has((request as any).URL.uuid)) {
          const cachedHeader = ImageCacheIt.cacheHeaders.get((request as any).URL.uuid);
          if (cachedHeader.url === request.URL.absoluteString) {
            const newRequest = request.mutableCopy() as NSMutableURLRequest;
            if (cachedHeader.headers) {
              cachedHeader.headers.forEach(((value, key) => {
                newRequest.addValueForHTTPHeaderField(value, key);
              }));
            }
            return newRequest.copy();
          }
        }
        return request;
      });
      ImageCacheIt.hasModifier = true;
    }
    const nativeView = SDAnimatedImageView.new();
    nativeView.contentMode = UIViewContentMode.ScaleAspectFit;
    nativeView.userInteractionEnabled = true;
    let metalDevice = MTLCreateSystemDefaultDevice() || null;
    if (metalDevice) {
      this.ctx = CIContext.contextWithMTLDevice(metalDevice);
    } else {
      // EAGLRenderingAPI.kEAGLRenderingAPIOpenGLES3
      let context = EAGLContext.alloc().initWithAPI(3);
      if (!context) {
        // EAGLRenderingAPI.kEAGLRenderingAPIOpenGLES3
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
    this._loadImage(this.src);
  }

  _setNativeClipToBounds() {
    // Always set clipsToBounds for images
    this.nativeViewProtected.clipsToBounds = true;
  }

  isLoading: boolean;

  public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {

    const width = Utils.layout.getMeasureSpecSize(widthMeasureSpec);
    const widthMode = Utils.layout.getMeasureSpecMode(widthMeasureSpec);
    const height = Utils.layout.getMeasureSpecSize(heightMeasureSpec);
    const heightMode = Utils.layout.getMeasureSpecMode(heightMeasureSpec);

    const nativeWidth = Utils.layout.toDevicePixels(this.nativeView?.image?.size.width) ?? 0;
    const nativeHeight = Utils.layout.toDevicePixels(this.nativeView?.image?.size.height) ?? 0;

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

    return {width: scaleW, height: scaleH};
  }

  private _priority = 0;

  [headersProperty.getDefault](): Map<string, string> {
    return new Map<string, string>();
  }

  [headersProperty.setNative](value: Map<string, string>) {
    const data = ImageCacheIt.cacheHeaders.get(this.uuid) || {url: undefined, headers: undefined};
    data['headers'] = value;
    ImageCacheIt.cacheHeaders.set(this.uuid, data);
  }

  private _loadStarted: boolean = false;

  private _loadImage(src: any) {
    this._loadStarted = false;
    this._templateImageWasCreated = false;
    this.progress = 0;
    if (this.nativeView && (<any>this.nativeView).sd_cancelCurrentImageLoad) {
      (<any>this.nativeView).sd_cancelCurrentImageLoad();
    }
    // TODO handle extension-less files
    const handleFileGif = (file) => {
      dispatch_async(getFilterQueue(), () => {
        const data = NSData.dataWithContentsOfURL(NSURL.fileURLWithPath(file));
        const image = SDAnimatedImage.new().initWithData(data);
        dispatch_async(main_queue, () => {
          this._setupFilter(image);
          this.setTintColor(this.style.tintColor);
          this._emitLoadEndEvent(src);
          this.progress = 100;
        });
      });
    };
    const handleResImage = (name) => {
      dispatch_async(getFilterQueue(), () => {
        // try loading gif type 1st
        let image;
        const url = NSBundle.mainBundle.URLForResourceWithExtension(name, 'gif');
        if (url) {
          const data = NSData.dataWithContentsOfURL(url);
          if (data) {
            image = SDAnimatedImage.alloc().initWithData(data);
          }
        }
        if (!image) {
          image = UIImage.imageNamed(name);
        }
        dispatch_async(main_queue, () => {
          this._setupFilter(image);
          this.setTintColor(this.style.tintColor);
          this._emitLoadEndEvent(src);
          this.progress = 100;
        });
      });
    };
    if (!isNullOrUndefined(src)) {
      const ref = new WeakRef<ImageCacheIt>(this);
      if (isString(src) && src.startsWith('http')) {
        // AvoidAutoSetImage | RetryFailed | ScaleDownLargeImages | LowPriority || HighPriority
        const options = 1024 | 1 | 2048 | this._priority;
        this.isLoading = true;
        const context = {};
        let placeHolder = null;
        if (typeof this.placeHolder === 'string') {
          const source = ImageSource.fromFileOrResourceSync(this.placeHolder);
          placeHolder = source ? source.ios : null;
        } else if (this.placeHolder instanceof UIImage) {
          placeHolder = this.placeHolder;
        } else if (this.placeHolder instanceof ImageSource) {
          placeHolder = this.placeHolder.ios;
        }
        let url = NSURL.URLWithString(src) as any;
        url.uuid = this.uuid;
        (<any>this.nativeView).sd_setImageWithURLPlaceholderImageOptionsContextProgressCompleted(
          url,
          placeHolder,
          options,
          context,
          (p1: number, p2: number, p3: NSURL) => {
            const owner = ref.get();
            if (owner) {
              dispatch_async(main_queue, () => {
                if (!owner._loadStarted) {
                  owner._emitLoadStartEvent(p3.absoluteString);
                  owner._loadStarted = true;
                }
                let progress = 0;
                if (p2 !== 0) {
                  progress = p1 / p2;
                } else {
                  progress = 1;
                }
                progress = Math.max(Math.min(progress, 1), 0) * 100;
                owner.progress = progress;
                owner._emitProgressEvent(p1, p2, progress, p3.absoluteString);
              });
            }
          }, (p1: UIImage, p2: NSError, p3: any, p4: NSURL) => {
            const owner = ref.get();
            if (owner) {
              owner._templateImageWasCreated = true;
              owner.isLoading = false;
              if (owner.filter) {
                // this.nativeView.image = placeholder;
              }
              if (p2) {
                owner._emitErrorEvent(p2.localizedDescription, p4.absoluteString);
                owner._emitLoadEndEvent(p4.absoluteString);
                if (owner.errorHolder) {
                  let errorHolder = null;
                  if (typeof this.errorHolder === 'string') {
                    const source = ImageSource.fromFileOrResourceSync(this.errorHolder);
                    errorHolder = source ? source.ios : null;
                  } else if (this.errorHolder instanceof UIImage) {
                    errorHolder = this.errorHolder;
                  } else if (this.errorHolder instanceof ImageSource) {
                    errorHolder = this.errorHolder.ios;
                  }
                  owner.nativeView.image = errorHolder;
                  owner.setAspect(owner.stretch);
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
                    });
                    break;
                  default:
                    break;
                }
              }

              if (p1) {
                if (owner.filter) {
                  dispatch_async(getFilterQueue(), () => {
                    owner._setupFilter(p1);
                  });
                } else {
                  dispatch_async(main_queue, () => {
                    owner._setupFilter(p1);
                  });
                }
              }
            }
          }
        );
      } else if (
        typeof src === 'string' &&
        (src.startsWith('/') || src.startsWith('file'))
      ) {
        this._emitLoadStartEvent(src);
        if (src.indexOf('.gif') > -1) {
          handleFileGif(src);
        } else {
          const source = ImageSource.fromFileOrResourceSync(src);
          this._setupFilter(source ? source.ios : null);
          this.setTintColor(this.style.tintColor);
          this._emitLoadEndEvent(src);
          this.progress = 100;
        }
      } else if (
        typeof src === 'string' &&
        src.startsWith('~')
      ) {
        this._emitLoadStartEvent(src);
        const path = knownFolders.currentApp().path;
        const file = TNSPath.join(path, src.replace('~', ''));
        if (src.indexOf('.gif') > -1) {
          handleFileGif(file);
        } else {
          const source = ImageSource.fromFileOrResourceSync(file);
          this._setupFilter(source ? source.ios : null);
          this.setTintColor(this.style.tintColor);
          this._emitLoadEndEvent(src);
          this.progress = 100;
        }
      } else if (typeof src === 'string' && src.startsWith('res://')) {
        this._emitLoadStartEvent(src);
        handleResImage(src.replace('res://', ''));
      } else if (isObject(src) && src.ios) {
        this._emitLoadStartEvent(src);
        this._setupFilter(src.ios);
        this.setTintColor(this.style.tintColor);
        this._emitLoadEndEvent(src);
        this.progress = 100;
      } else if (isObject(src) && src instanceof UIImage) {
        this._emitLoadStartEvent(null);
        this._setupFilter(src);
        this.setTintColor(this.style.tintColor);
        this._emitLoadEndEvent(null);
        this.progress = 100;
      }
    } else {
      if (this.fallback) {
        this._loadImage(this.fallback);
      }
    }

  }

  [srcProperty.getDefault](): any {
    return undefined;
  }

  [srcProperty.setNative](src: any) {
    const data = ImageCacheIt.cacheHeaders.get(this.uuid) || {url: undefined, headers: undefined};
    data['url'] = src;
    ImageCacheIt.cacheHeaders.set(this.uuid, data);
    this._loadImage(src);
  }

  [resizeProperty.setNative](resize: string) {
    if (!this.nativeView) return resize;
    if (
      this.resize &&
      this.resize.split(',').length > 1
    ) {
      this.nativeView.frame.size.width = parseInt(this.resize.split(' ')[0]);
      this.nativeView.frame.size.height = parseInt(this.resize.split(' ')[1]);
    }
    return resize;
  }

  private setAspect(value: string) {
    if (!this.nativeView) return value;
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
    return value;
  }

  [stretchProperty.getDefault](): 'aspectFit' {
    return 'aspectFit';
  }

  [stretchProperty.setNative](
    value: 'none' | 'aspectFill' | 'aspectFit' | 'fill'
  ) {
    this.setAspect(value);
  }


  [filterProperty.setNative](filter: any) {
    this.filter = filter;
    this._setupFilter(this.nativeView.image);
  }

  private _templateImageWasCreated: boolean;

  [tintColorProperty.setNative](value: any) {
    this.setTintColor(value);
  }

  private setTintColor(value) {
    if (value && this.nativeViewProtected.image && !this._templateImageWasCreated) {
      //   this.nativeViewProtected.image = this.nativeViewProtected.image.imageWithRenderingMode(UIImageRenderingMode.AlwaysTemplate);
      this._templateImageWasCreated = true;
    } else if (!value && this.nativeViewProtected.image && this._templateImageWasCreated) {
      this._templateImageWasCreated = false;
      // this.nativeViewProtected.image = this.nativeViewProtected.image.imageWithRenderingMode(UIImageRenderingMode.Automatic);
    }
    // this.nativeViewProtected.tintColor = value ? value.ios : null;
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

  private static ciFilterMap = {};

  private _setupFilter(image) {
    const getValue = (value: string) => {
      return value.substring(value.indexOf('(') + 1, value.indexOf(')'));
    };
    const createFilterWithName = (value: string) => {
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
    };
    const handleImage = (image) => {
      const setImage = () => {
        this._emitLoadEndEvent(null, image);
        this.setAspect(this.stretch);
        this.nativeView.image = image;
        this.setTintColor(this.style.tintColor);
        if (this._imageSourceAffectsLayout) {
          this.requestLayout();
        }
      }
      if (!NSThread.isMainThread) {
        dispatch_async(main_queue, () => {
          setImage();
        });
      } else {
        setImage();
      }
    }
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
            let grayscale = 0;
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
            let alpha = 1.0;
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
            let saturate = 1.0;
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
      handleImage(image);
    } else {
      handleImage(image);
    }
  }

  public static hasItem(src: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const manager = SDWebImageManager.sharedManager;
      if (manager) {
        const key = manager.cacheKeyForURL(NSURL.URLWithString(src));
        manager.imageCache.containsImageForKeyCacheTypeCompletion(key, 3 /* All */, (type) => {
          if (type > 0) {
            resolve();
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
        manager.imageCache.removeImageForKeyFromDiskWithCompletion(key, true, () => {
          resolve();
        });
      } else {
        reject();
      }
    });
  }

  public static clear(): Promise<any> {
    return new Promise((resolve, reject) => {
      const manager = SDWebImageManager.sharedManager;
      if (manager) {
        manager.imageCache.clearMemory();
        manager.imageCache.clearDiskOnCompletion(() => {
          resolve();
        });
      }
    });
  }

  private static autoMMCallback;

  public static enableAutoMM() {
    ImageCacheIt.autoMMCallback = (args) => {
      const manager = SDWebImageManager.sharedManager;
      if (manager) {
        manager.imageCache.clearMemory();
      }
    };
    Application.on(Application.lowMemoryEvent as any, ImageCacheIt.autoMMCallback);
  }

  public static disableAutoMM() {
    if (ImageCacheIt.autoMMCallback) {
      Application.off(Application.lowMemoryEvent as any, ImageCacheIt.autoMMCallback);
    }
  }

  public static getItem(src: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const manager = SDWebImageManager.sharedManager;
      if (manager) {
        if (src && src.indexOf('http') > -1) {
          const nativeSrc = NSURL.URLWithString(src);
          manager.loadImageWithURLOptionsProgressCompleted(nativeSrc, SDWebImageOptions.scaleDownLargeImages, (receivedSize: number, expectedSize: number, path: NSURL) => {
          }, (image, data, error, type, finished, completedUrl) => {
            if (image === null && error !== null && data === null) {
              reject(error.localizedDescription);
            } else if (finished && completedUrl != null) {
              if (type === SDImageCacheType.disk) {
                const key = manager.cacheKeyForURL(completedUrl);
                const source = manager.imageCache.cachePathForKey(key);
                resolve(source);
              } else {
                const sharedCache = SDImageCache.sharedImageCache;
                sharedCache.storeImageForKeyCompletion(image, completedUrl.absoluteString, () => {
                  const key = manager.cacheKeyForURL(completedUrl);
                  const source = manager.imageCache.cachePathForKey(key);
                  resolve(source);
                });
              }
            }
          });
        }
      } else {
        reject();
      }
    });
  }
}

import {
  ImageZoomBase,
  maxZoomScaleProperty,
  minZoomScaleProperty,
  resizeProperty,
  srcProperty,
  stretchProperty
} from './common';
import {isNullOrUndefined, isNumber} from "@nativescript/core/utils/types";
import {knownFolders, Utils, path, ImageSource} from "@nativescript/core";


declare const com, jp;

export class ImageZoom extends ImageZoomBase {
  picasso;
  private builder;

  constructor() {
    super();
  }

  public createNativeView() {
    this.picasso = (com as any).squareup.picasso.provider.PicassoProvider.get();
    return new com.github.chrisbanes.photoview.PhotoView(this._context);
  }

  [minZoomScaleProperty.setNative](scale: number) {
    if (this.nativeView && isNumber(scale)) {
      this.nativeView.setMinimumScale(scale);
      this.nativeView.setScaleLevels(
        Number(scale),
        Number(0.5833333333333334 * this.maxZoom),
        Number(this.maxZoom)
      );
    }
  }

  [maxZoomScaleProperty.setNative](scale: number) {
    if (this.nativeView && isNumber(scale)) {
      this.nativeView.setScaleLevels(
        Number(this.minZoom),
        Number(0.5833333333333334 * scale),
        Number(scale)
      );
    }
  }

  public initNativeView() {
    this.nativeView.setScaleLevels(
      Number(this.minZoom),
      Number(0.5833333333333334 * this.maxZoom),
      Number(this.maxZoom)
    );
    if (this.src) {
      const image = ImageZoom.getImage(this.src);
      this.builder = this.picasso.load(image);
    }
    if (this.stretch) {
      this.resetImage();
    }
    if (this.builder) {
      if (
        this.resize && this.resize.split(',').length > 1 &&
        this.stretch !== 'fill'
      ) {
        this.builder.resize(
          parseInt(this.resize.split(',')[0], 10),
          parseInt(this.resize.split(',')[1], 10)
        );
      }
      this.builder.into(this.nativeView);
    }
  }

  private static getResourceId(res: string = '') {
    if (res.startsWith('res://')) {
      return Utils.ad.resources.getDrawableId(res.replace('res://', ''));
    }
    return 0;
  }

  set borderRadius(value: any) {
    this.style.borderRadius = value;
    this.setBorderAndRadius();
  }

  set borderWidth(value: any) {
    this.style.borderWidth = value;
    this.setBorderAndRadius();
  }

  set borderLeftWidth(value: any) {
    this.style.borderLeftWidth = value;
    this.setBorderAndRadius();
  }

  set borderRightWidth(value: any) {
    this.style.borderRightWidth = value;
    this.setBorderAndRadius();
  }

  set borderBottomWidth(value: any) {
    this.style.borderBottomWidth = value;
    this.setBorderAndRadius();
  }

  set borderTopWidth(value: any) {
    this.style.borderTopWidth = value;
    this.setBorderAndRadius();
  }

  set borderBottomLeftRadius(value: any) {
    this.style.borderBottomLeftRadius = value;
    this.setBorderAndRadius();
  }

  set borderBottomRightRadius(value: any) {
    this.style.borderBottomRightRadius = value;
    this.setBorderAndRadius();
  }

  set borderTopLeftRadius(value: any) {
    this.style.borderTopLeftRadius = value;
    this.setBorderAndRadius();
  }

  set borderTopRightRadius(value: any) {
    this.style.borderTopRightRadius = value;
    this.setBorderAndRadius();
  }

  [srcProperty.getDefault](): any {
    return undefined;
  }

  [srcProperty.setNative](src: any) {
    if (!this.builder) {
      const image = ImageZoom.getImage(src);
      this.builder = this.picasso.load(image);
    }
    if (this.stretch) {
      this.resetImage();
    }
    this.setBorderAndRadius();
    this.builder.into(this.nativeView);
    return src;
  }

  [resizeProperty.setNative](resize: string) {
    if (!this.builder) {
      return resize;
    }
    if (
      resize && resize.split(',').length > 1 &&
      this.stretch !== 'fill'
    ) {
      this.builder.resize(
        parseInt(resize.split(',')[0], 10),
        parseInt(resize.split(',')[1], 10)
      );
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
      nativeImage = new java.io.File(
        path.join(knownFolders.currentApp().path, src.replace('~/', ''))
      );
    } else if (typeof src === 'string' && src.startsWith('http')) {
      nativeImage = src;
    } else if (typeof src === 'string' && src.startsWith('res://')) {
      nativeImage = Utils.ad.resources.getDrawableId(src.replace('res://', ''));
    } else if (typeof src === 'object') {
      const tempFile = path.join(
        knownFolders.currentApp().path,
        `${Date.now()} + .png`
      );
      const saved = (<ImageSource>src).saveToFile(tempFile, 'png');
      if (saved) {
        nativeImage = new java.io.File(tempFile);
      }
    }
    return nativeImage;
  }

  [stretchProperty.getDefault](): 'aspectFit' {
    return 'aspectFit';
  }

  [stretchProperty.setNative](
    value: 'none' | 'aspectFill' | 'aspectFit' | 'fill'
  ) {
    if (!this.builder) return value;
    this.resetImage(true);
    return value;
  }

  public clearItem() {
  }

  private setBorderAndRadius() {
    if (!this.builder) return;

    const RoundedCornersTransformation =
      jp.wasabeef.picasso.transformations.RoundedCornersTransformation;
    this.builder = this.builder
      .transform(
        new RoundedCornersTransformation(
          Utils.layout.toDevicePixels(<any>this.style.borderTopLeftRadius),
          Utils.layout.toDevicePixels(<any>this.style.borderTopWidth),
          RoundedCornersTransformation.CornerType.TOP_LEFT
        )
      )
      .transform(
        new RoundedCornersTransformation(
          Utils.layout.toDevicePixels(<any>this.style.borderTopRightRadius),
          Utils.layout.toDevicePixels(<any>this.style.borderTopWidth),
          RoundedCornersTransformation.CornerType.TOP_RIGHT
        )
      )
      .transform(
        new RoundedCornersTransformation(
          Utils.layout.toDevicePixels(<any>this.style.borderBottomLeftRadius),
          Utils.layout.toDevicePixels(<any>this.style.borderBottomWidth),
          RoundedCornersTransformation.CornerType.BOTTOM_LEFT
        )
      )
      .transform(
        new RoundedCornersTransformation(
          Utils.layout.toDevicePixels(<any>this.style.borderBottomRightRadius),
          Utils.layout.toDevicePixels(<any>this.style.borderBottomWidth),
          RoundedCornersTransformation.CornerType.BOTTOM_RIGHT
        )
      );
  }

  /**
   * Helper method to call the Picasso resize method, which is necessary before centerCrop() and centerInside().
   * Will use the `resize` value if provided, next is the `height` and `width` of the imageCacheIt instance
   * last is the parent which is probably not reliable.
   * Only used when aspectFit or aspectFill are set on the stretch property.
   */
  private setAspectResize() {
    let newSize;
    if (
      this.resize &&
      this.resize.split(',').length > 1
    ) {
      newSize = {
        width: parseInt(this.resize.split(',')[0], 10),
        height: parseInt(this.resize.split(',')[1], 10)
      };
    } else if (this.width || this.height) {
      // use the images height/width (need to be set - more gurds if needed)
      newSize = {
        width: parseInt(this.width.toString(), 10),
        height: parseInt(this.height.toString(), 10)
      };
    } else {
      // use parent size (worth a shot I guess but probably not going to work here reliably)
      newSize = {
        width: this.parent.effectiveWidth,
        height: this.parent.effectiveHeight
      };
    }

    this.builder.resize(newSize.width, newSize.height);
  }

  private resetImage(reload = false) {
    if (!this.builder) return;
    switch (this.stretch) {
      case 'aspectFit':
        this.builder = this.picasso.load(ImageZoom.getImage(this.src));
        this.setBorderAndRadius();
        this.setAspectResize();
        this.builder.centerInside();
        if (reload) {
          this.builder.into(this.nativeView);
        }
        break;
      case 'aspectFill':
        this.builder = this.picasso.load(ImageZoom.getImage(this.src));
        this.setBorderAndRadius();
        this.setAspectResize();
        this.builder.centerCrop();
        if (reload) {
          this.builder.into(this.nativeView);
        }
        break;
      case 'fill':
        this.builder = this.picasso.load(ImageZoom.getImage(this.src));
        this.setBorderAndRadius();
        this.builder.fit();
        if (reload) {
          this.builder.into(this.nativeView);
        }
        break;
      case 'none':
      default:
        this.builder = this.picasso.load(ImageZoom.getImage(this.src));
        this.setBorderAndRadius();
        if (reload) {
          this.builder.into(this.nativeView);
        }
        break;
    }
  }
}

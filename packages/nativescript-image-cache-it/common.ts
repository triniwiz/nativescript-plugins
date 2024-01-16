import {
  booleanConverter,
  CssProperty,
  CSSType,
  InheritedCssProperty,
  Property,
  Style,
  View,
  Color,
  ImageAsset, ImageSource, isIOS, Trace, CoreTypes, Utils
} from '@nativescript/core';

export enum Transition {
  Fade = 'fade',
  None = 'none'
}

export enum Priority {
  Low,
  Normal,
  High
}

export const progressProperty = new Property<ImageCacheItBase, number>({
  name: 'progress',
  defaultValue: 0
});

export const loadModeProperty = new Property<ImageCacheItBase, 'sync' | 'async'>({
  name: 'loadMode',
  defaultValue: 'async',
});

export const imageSourceProperty = new Property<ImageCacheItBase, ImageSource>({
  name: 'imageSource',
});

export const srcProperty = new Property<ImageCacheItBase, any>({
  name: 'src',
});
export const placeHolderProperty = new Property<ImageCacheItBase, any>({
  name: 'placeHolder'
});
export const errorHolderProperty = new Property<ImageCacheItBase, string>({
  name: 'errorHolder'
});
export const stretchProperty = new Property<ImageCacheItBase, CoreTypes.ImageStretchType>({
  name: 'stretch',
  affectsLayout: isIOS,
});
export const filterProperty = new CssProperty<Style, string>({
  name: 'filter',
  cssName: 'filter'
});

export const transitionProperty = new Property<ImageCacheItBase, Transition>({
  name: 'transition',
  defaultValue: Transition.None
});

export const fallbackProperty = new Property<ImageCacheItBase, any>({
  name: 'fallback',
});

export const priorityProperty = new Property<ImageCacheItBase, Priority>({
  name: 'priority',
  defaultValue: Priority.Normal
});

export const tintColorProperty = new InheritedCssProperty<Style, Color | string>({
  name: 'tintColor',
  cssName: 'tint-color',
  equalityComparer: Color.equals, valueConverter: (value) => new Color(value)
});

export const overlayColorProperty = new CssProperty<Style, Color | string>({
  name: 'overLayColor',
  cssName: 'overlay-color',
  equalityComparer: Color.equals, valueConverter: (value) => new Color(value)
});


export const headersProperty = new Property<ImageCacheItBase, Map<string, string>>({
  name: 'headers'
});

export const isLoadingProperty = new Property<ImageCacheItBase, boolean>({
  name: 'isLoading',
  defaultValue: false,
  valueConverter: booleanConverter,
});

export const decodeWidthProperty = new Property<ImageCacheItBase, number>({
  name: 'decodeWidth'
});


export const decodeHeightProperty = new Property<ImageCacheItBase, number>({
  name: 'decodeHeight',
});

export * from '@nativescript/core/ui/core/view';

@CSSType('ImageCacheIt')
export class ImageCacheItBase extends View {
  public imageSource: ImageSource;
  public src: any;
  public placeHolder: any;
  public errorHolder: any;
  public stretch: CoreTypes.ImageStretchType;
  public filter: string;
  public transition: Transition;
  public fallback: any;
  public priority: Priority;
  public loadMode: 'async' | 'sync';
  public isLoading: boolean;
  public progress: number;
  public overlayColor: string | Color;
  public decodeWidth: number;
  public decodeHeight: number;

  get tintColor(): Color | string {
    return this.style.tintColor;
  }

  set tintColor(value: Color | string) {
    if (typeof value === 'string') {
      this.style.tintColor = new Color(value);
    } else {
      this.style.tintColor = value;
    }
  }

  public headers: Map<string, string>;
  public static onLoadStartEvent = 'loadStart';
  public static onProgressEvent = 'progress';
  public static onErrorEvent = 'error';
  public static onLoadEndEvent = 'loadEnd';

  _emitLoadStartEvent(url?: string) {
    this.notify({
      eventName: ImageCacheItBase.onLoadStartEvent,
      object: this,
      url
    });
  }

  _emitProgressEvent(loaded: number, total: number, progress: number, url: string) {
    this.notify({
      eventName: ImageCacheItBase.onProgressEvent,
      object: this,
      loaded,
      total,
      progress,
      url
    });
  }

  _emitErrorEvent(message: string, url: string) {
    this.notify({
      eventName: ImageCacheItBase.onErrorEvent,
      object: this,
      message,
      url
    });
  }

  _emitLoadEndEvent(url?: string, image?: any) {
    this.notify({
      eventName: ImageCacheItBase.onLoadEndEvent,
      object: this,
      image,
      url
    });
  }


  /**
   * @internal
   */
  public _createImageSourceFromSrc(value: string | ImageSource | ImageAsset): void {
    const originalValue = value;
    const sync = this.loadMode === 'sync';
    if (typeof value === 'string' || value instanceof String) {
      value = value.trim();
      this.imageSource = null;
      this['_url'] = value;

      this.isLoading = true;

      const imageLoaded = (source: ImageSource) => {
        if (this.src !== originalValue) {
          return;
        }
        this._setImageSource(source);
      };

      if (Utils.isFontIconURI(value)) {
        const fontIconCode = value.split('//')[1];
        if (fontIconCode !== undefined) {
          // support sync mode only
          const font = this.style.fontInternal;
          const color = this.style.color;
          imageLoaded(ImageSource.fromFontIconCodeSync(fontIconCode, font, color));
        }
      } else if (Utils.isDataURI(value)) {
        const base64Data = value.split(',')[1];
        if (base64Data !== undefined) {
          if (sync) {
            imageLoaded(ImageSource.fromBase64Sync(base64Data));
          } else {
            ImageSource.fromBase64(base64Data).then(imageLoaded);
          }
        }
      } else if (Utils.isFileOrResourcePath(value)) {
        if (value.indexOf(Utils.RESOURCE_PREFIX) === 0) {
          const resPath = value.substring(Utils.RESOURCE_PREFIX.length);
          if (sync) {
            imageLoaded(ImageSource.fromResourceSync(resPath));
          } else {
            this.imageSource = null;
            ImageSource.fromResource(resPath).then(imageLoaded);
          }
        } else {
          if (sync) {
            imageLoaded(ImageSource.fromFileSync(value));
          } else {
            this.imageSource = null;
            ImageSource.fromFile(value).then(imageLoaded);
          }
        }
      } else {
        this.imageSource = null;
        ImageSource.fromUrl(value).then(
          (r) => {
            if (this['_url'] === value) {
              this._setImageSource(r, <string>value);
            }
          },
          (err) => {
            // catch: Response content may not be converted to an Image
            this.isLoading = false;
            if (Trace.isEnabled()) {
              if (typeof err === 'object' && err.message) {
                err = err.message;
              }
              Trace.write(err, Trace.categories.Debug);
            }
          }
        );
      }
    } else if (value instanceof ImageSource) {
      // Support binding the imageSource trough the src property
      this._setImageSource(value);
    } else if (value instanceof ImageAsset) {
      ImageSource.fromAsset(value).then((result) => {
        this._setImageSource(result);
      });
    } else {
      this._setImageSource(new ImageSource(value));
    }
  }

  private _setImageSource(source: ImageSource, url?: string) {
    this.imageSource = source;
    this.isLoading = false;
    this._emitLoadEndEvent(url || this.src);
  }
}

progressProperty.register(ImageCacheItBase);
isLoadingProperty.register(ImageCacheItBase);
loadModeProperty.register(ImageCacheItBase);
imageSourceProperty.register(ImageCacheItBase);
srcProperty.register(ImageCacheItBase);
placeHolderProperty.register(ImageCacheItBase);
errorHolderProperty.register(ImageCacheItBase);
stretchProperty.register(ImageCacheItBase);
filterProperty.register(Style);
transitionProperty.register(ImageCacheItBase);
fallbackProperty.register(ImageCacheItBase);
priorityProperty.register(ImageCacheItBase);
tintColorProperty.register(Style);
headersProperty.register(ImageCacheItBase);
overlayColorProperty.register(Style);
decodeWidthProperty.register(ImageCacheItBase);
decodeHeightProperty.register(ImageCacheItBase);

declare module '@nativescript/core/ui/styling/style' {
  interface Style {
    filter: string;
    overLayColor: string | Color
  }
}

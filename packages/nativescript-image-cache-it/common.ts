import {CssProperty, InheritedCssProperty, Property, Style, View, Color, CSSType} from '@nativescript/core';

export type Stretch = 'none' | 'fill' | 'aspectFill' | 'aspectFit';

export enum Transition {
  Fade = 'fade',
  None = 'none'
}

export enum Priority {
  Low,
  Normal,
  High
}

export const srcProperty = new Property<ImageCacheItBase, any>({
  name: 'src'
});
export const placeHolderProperty = new Property<ImageCacheItBase, any>({
  name: 'placeHolder'
});
export const errorHolderProperty = new Property<ImageCacheItBase, string>({
  name: 'errorHolder'
});
export const resizeProperty = new Property<ImageCacheItBase, string>({
  name: 'resize'
});
export const stretchProperty = new Property<ImageCacheItBase, Stretch>({
  name: 'stretch',
  affectsLayout: global.isIOS,
});
export const decodedWidthProperty = new Property<ImageCacheItBase, number>({
  name: 'decodedWidth'
});
export const decodedHeightProperty = new Property<ImageCacheItBase, number>({
  name: 'decodedHeight'
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

export const headersProperty = new Property<ImageCacheItBase, Map<string, string>>({
  name: 'headers'
});

@CSSType('ImageCacheIt')
export class ImageCacheItBase extends View {
  public src: any;
  public placeHolder: any;
  public errorHolder: any;
  public resize: string;
  public stretch: Stretch;
  public decodedHeight: number;
  public decodedWidth: number;
  public filter: string;
  public transition: Transition;
  public fallback: any;
  public priority: Priority;

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
      object: this
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
      eventName: ImageCacheItBase.onLoadStartEvent,
      object: this,
      message
    });
  }

  _emitLoadEndEvent(url?: string, image?: any) {
    this.notify({
      eventName: ImageCacheItBase.onLoadEndEvent,
      object: this,
      image
    });
  }
}

ImageCacheItBase.prototype.recycleNativeView = 'auto';
srcProperty.register(ImageCacheItBase);
placeHolderProperty.register(ImageCacheItBase);
errorHolderProperty.register(ImageCacheItBase);
resizeProperty.register(ImageCacheItBase);
stretchProperty.register(ImageCacheItBase);
decodedHeightProperty.register(ImageCacheItBase);
decodedWidthProperty.register(ImageCacheItBase);
filterProperty.register(Style);
transitionProperty.register(ImageCacheItBase);
fallbackProperty.register(ImageCacheItBase);
priorityProperty.register(ImageCacheItBase);
tintColorProperty.register(Style);
headersProperty.register(ImageCacheItBase);

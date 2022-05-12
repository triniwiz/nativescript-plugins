import {
  Color,
  Device,
  CoreTypes,
  Frame,
  Length,
  Screen,
  Utils
} from '@nativescript/core';
import {ToastDuration, ToastPosition, ToastyOptions} from './common';

export {ToastDuration, ToastPosition, ToastyOptions} from './common'

export class Toasty {
  private _text: string;
  private _duration: ToastDuration | number;
  private _position: ToastPosition | number;
  private _textColor: Color | string;
  private _backgroundColor: Color | string;
  private _iOSOpts: ToastyOptions['ios'];
  private _toastStyle;
  private _x: CoreTypes.LengthType;
  private _y: CoreTypes.LengthType;
  private _tapToDismiss: boolean;
  private _anchorView: any;

  constructor(opts?: ToastyOptions) {
    this._toastStyle = ToastStyle.new();

    // set the default constructor args for private members
    this._text = opts?.text;
    this._duration = opts?.duration ?? 2;
    this._position = opts?.position ?? 2;
    this._textColor = opts?.textColor ?? 'white';
    this._backgroundColor = opts?.backgroundColor || 'black';
    this._iOSOpts = opts?.ios ?? {};
    this._x = opts?.xAxisOffset;
    this._y = opts?.yAxisOffset;
    this._tapToDismiss = opts?.tapToDismiss ?? false;
    this._anchorView = opts?.anchorView;

    // set the defaults for the toasty, if passed in constructor those values are used
    this.setToastDuration(this._duration)
      .setToastPosition(this._position)
      .setTextColor(this._textColor)
      .setBackgroundColor(this._backgroundColor);

    // check ios configuration
    // if displaying shadow also check if user wants to change default shadow color
    if (this._iOSOpts.displayShadow) {
      this._toastStyle.displayShadow = this._iOSOpts.displayShadow;
      if (this._iOSOpts.shadowColor) {
        if (typeof this._iOSOpts.shadowColor === 'string') {
          this._toastStyle.shadowColor = new Color(
            this._iOSOpts.shadowColor
          ).ios;
        } else {
          this._toastStyle.shadowColor =
            (this._iOSOpts?.shadowColor as any)?.ios ?? new Color('black').ios;
        }
      }
    }

    if (this._iOSOpts.cornerRadius || this._iOSOpts.cornerRadius === 0) {
      this._toastStyle.cornerRadius = this._iOSOpts.cornerRadius;
    }

    if (this._iOSOpts.messageNumberOfLines) {
      this._toastStyle.messageNumberOfLines = this._iOSOpts.messageNumberOfLines;
    }

    ToastManager.shared.isTapToDismissEnabled = this._tapToDismiss;

    ToastManager.shared.style = this._toastStyle;

    return this;
  }

  get position() {
    return this._position;
  }

  set position(value: ToastPosition | number) {
    if (value) {
      this._position = value;
      this.setToastPosition(value);
    }
  }

  get duration() {
    return this._duration;
  }

  set duration(value: ToastDuration | number) {
    if (value) {
      this._duration = value;
      this.setToastDuration(value);
    }
  }

  get textColor() {
    return this._textColor;
  }

  set textColor(value: Color | string) {
    if (value) {
      this._textColor = value;
      this.setTextColor(value);
    }
  }

  get backgroundColor() {
    return this._backgroundColor;
  }

  set backgroundColor(value: Color | string) {
    if (value) {
      this._backgroundColor = value;
      this.setBackgroundColor(value);
    }
  }

  set xAxisOffset(value: CoreTypes.LengthType | number) {
    this._x = value;
    this._updateToastPosition();
  }

  set yAxisOffset(value: CoreTypes.LengthType | number) {
    this._y = value;
    this._updateToastPosition();
  }

  get xAxisOffset(): CoreTypes.LengthType | number {
    return this._x;
  }

  get yAxisOffset(): CoreTypes.LengthType | number {
    return this._y;
  }

  private static isLength(value) {
    return (
      value &&
      !Utils.isNullOrUndefined(value.unit) &&
      !Utils.isNullOrUndefined(value.value)
    );
  }

  private get yPixels(): number | undefined {
    let y;
    if (typeof this._y === 'number') {
      y = this._y;
    }

    if (Toasty.isLength(this._y)) {
      if ((this._y as any).unit === 'px') {
        y = (this._y as any).value / Screen.mainScreen.scale;
      }
      if ((this._y as any).unit === 'dip') {
        y = (this._y as any).value;
      }
    }

    if (typeof this._y === 'string') {
      if (this._y.includes('px')) {
        y = parseInt(this._y.replace('px', ''), 0) / Screen.mainScreen.scale;
      }
      if (this._y.includes('dip')) {
        y = parseInt(this._y.replace('dip', ''), 0);
      }
    }

    return y;
  }

  private get xPixels(): number | undefined {
    let x;
    if (typeof this._x === 'number') {
      x = this._x;
    }

    if (Toasty.isLength(this._x)) {
      if ((this._x as any).unit === 'px') {
        x = (this._x as any).value / Screen.mainScreen.scale;
      }
      if ((this._x as any).unit === 'dip') {
        x = (this._x as any).value;
      }
    }

    if (typeof this._x === 'string') {
      if (this._x.includes('px')) {
        x = parseInt(this._x.replace('px', ''), 0) / Screen.mainScreen.scale;
      }
      if (this._x.includes('dip')) {
        x = parseInt(this._x.replace('dip', ''), 0);
      }
    }

    return x;
  }

  // Reverse value
  private getOffset(offset) {
    let symbol: string;
    switch (this._position) {
      case ToastPosition.TOP_LEFT:
      case ToastPosition.BOTTOM_LEFT:
      case ToastPosition.CENTER_LEFT:
        symbol = '-';
        break;
      case ToastPosition.TOP_RIGHT:
      case ToastPosition.BOTTOM_RIGHT:
      case ToastPosition.CENTER_RIGHT:
        symbol = '+';
        break;
      default:
        const value = `${offset}`;
        if (value.includes('-')) {
          symbol = '';
        } else {
          symbol = '-';
        }
        break;
    }
    const result = Number(`${symbol}${offset}`);
    return Number.isNaN(result) ? undefined : result;
  }

  show() {
    if (!this._text) {
      throw new Error('Text is not set');
    } else {
      this._getView()?.makeToastWithOffset(
        this._text,
        CGPointMake(
          this.getOffset(this.xPixels) ?? 0,
          this.getOffset(this.yPixels) ?? 0
        )
      );
    }
  }

  get width() {
    return 0; // this._getView()?.toastViewForMessage()
  }

  get height() {
    return 0;
  }

  cancel() {
    this._getView()?.hideAllToastsWithIncludeActivityClearQueue(true, true);
  }

  setTextColor(value: Color | string) {
    if (value) {
      this._textColor = value;
      // set the text color
      if (typeof value === 'string') {
        this._toastStyle.messageColor = new Color(value).ios;
      } else {
        this._toastStyle.messageColor = value.ios;
      }

      // setting the shared style so the colors apply properly
      ToastManager.shared.style = this._toastStyle;
    }

    return this;
  }

  setBackgroundColor(value: Color | string) {
    if (value) {
      this._backgroundColor = value;
      // set the text color
      if (typeof value === 'string') {
        this._toastStyle.backgroundColor = new Color(value).ios;
      } else {
        this._toastStyle.backgroundColor = value.ios;
      }

      // setting the shared style so the colors apply properly
      ToastManager.shared.style = this._toastStyle;
    }

    return this;
  }

  private _updateToastPosition() {
    switch (this._position) {
      case ToastPosition.TOP:
        ToastManager.shared.position = 0;
        break;
      case ToastPosition.TOP_LEFT:
        ToastManager.shared.position = 3;
        break;
      case ToastPosition.TOP_RIGHT:
        ToastManager.shared.position = 4;
        break;
      case ToastPosition.CENTER:
        ToastManager.shared.position = 1;
        break;
      case ToastPosition.CENTER_LEFT:
        ToastManager.shared.position = 5;
        break;
      case ToastPosition.CENTER_RIGHT:
        ToastManager.shared.position = 6;
        break;
      case ToastPosition.BOTTOM:
        ToastManager.shared.position = 2;
        break;
      case ToastPosition.BOTTOM_LEFT:
        ToastManager.shared.position = 7;
        break;
      case ToastPosition.BOTTOM_RIGHT:
        ToastManager.shared.position = 8;
        break;
      default:
        break;
    }
  }

  setToastPosition(value: ToastPosition | number) {
    this._position = value;
    this._updateToastPosition();
    return this;
  }

  setToastDuration(value: ToastDuration | number) {
    switch (value) {
      case ToastDuration.SHORT:
        ToastManager.shared.duration = 2.0;
        break;
      case ToastDuration.LONG:
        ToastManager.shared.duration = 4.0;
        break;
      default:
        ToastManager.shared.duration = 2.0;
        break;
    }
    return this;
  }

  private _getView(): any {
    if (!Frame.topmost()) {
      const root = this.topViewController;
      if (!root) {
        throw new Error('There is no topmost');
      }
      return root.view.window;
    } else {
      // if the user provided an iOSOpts.anchorView then we're going to use it as the anchor when making the toast
      if (this._iOSOpts && this._anchorView) {
        return this._anchorView;
      } else {
        // if no anchorView requested we'll use the viewController view (might look into using the .window of the main VC later)
        let viewController = Frame.topmost().viewController as UIViewController;
        if (viewController.presentedViewController) {
          // on iPad, we don't want to show the toast in the modal, but on iPhone we do
          if (Device.deviceType !== CoreTypes.DeviceType.Tablet) {
            while (viewController.presentedViewController) {
              viewController = viewController.presentedViewController;
            }
          }
        }
        return viewController.view;
      }
    }
  }

  private static get rootViewController(): UIViewController | undefined {
    const keyWindow = UIApplication.sharedApplication.keyWindow;
    return keyWindow != null ? keyWindow.rootViewController : undefined;
  }

  private get topViewController(): UIViewController | undefined {
    const root = Toasty.rootViewController;
    if (root == null) {
      return undefined;
    }
    return this.findTopViewController(root);
  }

  private findTopViewController(
    root: UIViewController
  ): UIViewController | undefined {
    const presented = root.presentedViewController;
    if (presented != null) {
      return this.findTopViewController(presented);
    }
    if (root instanceof UISplitViewController) {
      const last = root.viewControllers.lastObject;
      if (last == null) {
        return root;
      }
      return this.findTopViewController(last);
    } else if (root instanceof UINavigationController) {
      const top = root.topViewController;
      if (top == null) {
        return root;
      }
      return this.findTopViewController(top);
    } else if (root instanceof UITabBarController) {
      const selected = root.selectedViewController;
      if (selected == null) {
        return root;
      }
      return this.findTopViewController(selected);
    } else {
      return root;
    }
  }
}

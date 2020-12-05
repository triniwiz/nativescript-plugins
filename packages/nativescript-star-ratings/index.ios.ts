import {
  StarRatingBase,
  maxProperty,
  valueProperty,
  emptyBorderColorProperty,
  filledBorderColorProperty,
  emptyColorProperty,
  filledColorProperty,
  fillModeProperty,
  FillMode
} from './common';
import {Color} from '@nativescript/core';

export {FillMode};

export class StarRating extends StarRatingBase {
  nativeViewProtected: CosmosView;

  createNativeView() {
    const nativeView = CosmosView.new();
    nativeView.settings = CosmosSettings.new();
    nativeView.settings.emptyBorderColor = new Color('blue').ios;
    nativeView.settings.emptyColor = new Color('white').ios;
    nativeView.settings.filledBorderColor = new Color('blue').ios;
    nativeView.settings.filledColor = new Color('blue').ios;
    nativeView.rating = 0;
    nativeView.settings.minTouchRating = 0;
    return nativeView;
  }

  initNativeView() {
    super.initNativeView();
    this._handleEmptyBorderColor(this.emptyBorderColor);
    this._handleEmptyColor(this.emptyColor);
    this._handleFilledBorderColor(this.filledBorderColor);
    this._handleFilledColor(this.filledColor);
    this._handleMax(this.max);
    this._handleValue(this.value);
    this._handleFillMode(this.fillMode);
  }

  public onLoaded() {
    super.onLoaded();
    this.nativeView.didFinishTouchingCosmos = ((value) => {
      this.value = value;
    });
  }

  public onUnloaded() {
    this.nativeView.didFinishTouchingCosmos = null;
    super.onUnloaded();
  }

  private static _getColor(value, defaultColor: string) {
    let color = new Color(defaultColor).ios;
    if (value instanceof Color) {
      color = new Color('blue').ios;
    }
    if (typeof value === 'string') {
      color = new Color(value).ios;
    }
    return color;
  }

  private _handleEmptyBorderColor(value) {
    if (this.nativeView) {
      this.nativeView.settings.emptyBorderColor = StarRating._getColor(value, 'blue');
    }
  }

  set emptyBorderColor(color: Color | string) {
    this._handleEmptyBorderColor(color);
    this.style.emptyBorderColor = color;
  }

  get emptyBorderColor(): Color | string {
    return this.style.emptyBorderColor;
  }

  set filledBorderColor(color: Color | string) {
    this._handleFilledBorderColor(color);
    this.style.filledBorderColor = color;
  }

  get filledBorderColor(): Color | string {
    return this.style.filledBorderColor;
  }

  private _handleFilledBorderColor(value) {
    if (this.nativeView) {
      this.nativeView.settings.filledBorderColor = StarRating._getColor(value, 'blue');
    }
  }

  set emptyColor(color: Color | string) {
    this._handleEmptyColor(color);
    this.style.emptyColor = color;
  }

  get emptyColor(): Color | string {
    return this.style.emptyColor;
  }

  private _handleEmptyColor(value) {
    if (this.nativeView) {
      this.nativeView.settings.emptyColor = StarRating._getColor(value, 'white');
    }
  }

  set filledColor(color: Color | string) {
    this._handleFilledColor(color);
    this.style.filledColor = color;
  }

  get filledColor(): Color | string {
    return this.style.filledColor;
  }

  private _handleFilledColor(value) {
    if (this.nativeView) {
      this.nativeView.settings.filledColor = StarRating._getColor(value, 'blue');
    }
  }

  private _handleFillMode(value) {
    if (this.nativeView) {
      switch (value) {
        case FillMode.HALF:
          this.nativeView.settings.fillMode = StarFillMode.Half;
          break;
        case FillMode.PRECISE:
          this.nativeView.settings.fillMode = StarFillMode.Precise;
          break;
        default:
          this.nativeView.settings.fillMode = StarFillMode.Full;
          break;
      }
    }
  }

  [fillModeProperty.setNative](value: FillMode) {
    this._handleFillMode(value);
  }

  private _handleValue(value) {
    if (this.nativeView) {
      this.nativeView.rating = value;
    }
  }

  [valueProperty.setNative](value: number) {
    this._handleValue(value);
  }

  private _handleMax(max) {
    if (this.nativeView) {
      this.nativeView.settings.totalStars = max;
      this.nativeView.update();
      this.width = this.nativeView.intrinsicContentSize.width;
      this.height = this.nativeView.intrinsicContentSize.height;
    }
  }

  [maxProperty.setNative](max: number) {
    this._handleMax(max)
  }
}

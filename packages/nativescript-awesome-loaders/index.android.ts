import {AwesomeLoadersBase, indicatorProperty, indicatorColorProperty} from "./common";
import {Color} from '@nativescript/core';

declare var com: any;

export class AwesomeLoaders extends AwesomeLoadersBase {
  private _android; /* com.wang.avi.AVLoadingIndicatorView */

  // @ts-ignore
  get android() /* com.wang.avi.AVLoadingIndicatorView */ {
    return this._android;
  }

  public createNativeView() {
    this._android = new com.wang.avi.AVLoadingIndicatorView(this._context);
    this._handleIndicator(this.indicator);
    return this._android;
  }

  [indicatorProperty.setNative](indicator: string) {
    this._handleIndicator(indicator);
  }

  private _handleIndicator(indicator) {
    switch (indicator) {
      case 'BallPulse':
        this._android.setIndicator(new com.wang.avi.indicator.BallPulseIndicator());
        break;
      case 'BallGridPulse':
        this._android.setIndicator(new com.wang.avi.indicator.BallGridPulseIndicator());
        break;
      case 'BallClipRotate':
        this._android.setIndicator(new com.wang.avi.indicator.BallClipRotateIndicator());
        break;
      case 'BallClipRotatePulse':
        this._android.setIndicator(new com.wang.avi.indicator.BallClipRotatePulseIndicator());
        break;
      case 'SquareSpin':
        this._android.setIndicator(new com.wang.avi.indicator.SquareSpinIndicator());
        break;
      case 'BallClipRotateMultiple':
        this._android.setIndicator(new com.wang.avi.indicator.BallClipRotateMultipleIndicator());
        break;
      case 'BallPulseRise':
        this._android.setIndicator(new com.wang.avi.indicator.BallPulseRiseIndicator());
        break;
      case 'BallRotate':
        this._android.setIndicator(new com.wang.avi.indicator.BallRotateIndicator());
        break;
      case 'CubeTransition':
        this._android.setIndicator(new com.wang.avi.indicator.CubeTransitionIndicator());
        break;
      case 'BallZigZag':
        this._android.setIndicator(new com.wang.avi.indicator.BallZigZagIndicator());
        break;
      case 'BallZigZagDeflect':
        this._android.setIndicator(new com.wang.avi.indicator.BallZigZagDeflectIndicator());
        break;
      case 'BallTrianglePath':
        this._android.setIndicator(new com.wang.avi.indicator.BallTrianglePathIndicator());
        break;
      case 'BallScale':
        this._android.setIndicator(new com.wang.avi.indicator.BallScaleIndicator());
        break;
      case 'LineScale':
        this._android.setIndicator(new com.wang.avi.indicator.LineScaleIndicator());
        break;
      case 'LineScaleParty':
        this._android.setIndicator(new com.wang.avi.indicator.LineScalePartyIndicator());
        break;
      case 'BallScaleMultiple':
        this._android.setIndicator(new com.wang.avi.indicator.BallScaleMultipleIndicator());
        break;
      case 'BallPulseSync':
        this._android.setIndicator(new com.wang.avi.indicator.BallPulseSyncIndicator());
        break;
      case 'BallBeat':
        this._android.setIndicator(new com.wang.avi.indicator.BallBeatIndicator());
        break;
      case 'LineScalePulseOut':
        this._android.setIndicator(new com.wang.avi.indicator.LineScalePulseOutIndicator());
        break;
      case 'LineScalePulseOutRapid':
        this._android.setIndicator(new com.wang.avi.indicator.LineScalePulseOutRapidIndicator());
        break;
      case 'BallScaleRipple':
        this._android.setIndicator(new com.wang.avi.indicator.BallScaleRippleIndicator());
        break;
      case 'BallScaleRippleMultiple':
        this._android.setIndicator(new com.wang.avi.indicator.BallScaleRippleMultipleIndicator());
        break;
      case 'BallSpinFadeLoader':
        this._android.setIndicator(new com.wang.avi.indicator.BallSpinFadeLoaderIndicator());
        break;
      case 'LineSpinFadeLoader':
        this._android.setIndicator(new com.wang.avi.indicator.LineSpinFadeLoaderIndicator());
        break;
      case 'TriangleSkewSpin':
        this._android.setIndicator(new com.wang.avi.indicator.TriangleSkewSpinIndicator());
        break;
      case 'Pacman':
        this._android.setIndicator(new com.wang.avi.indicator.PacmanIndicator());
        break;
      case 'BallGridBeat':
        this._android.setIndicator(new com.wang.avi.indicator.BallGridBeatIndicator());
        break;
      case 'SemiCircleSpin':
        this._android.setIndicator(new com.wang.avi.indicator.SemiCircleSpinIndicator());
        break;
      default:
        this._android.setIndicator(new com.wang.avi.indicator.BallPulseIndicator());
        break;
    }
  }

  [indicatorColorProperty.setNative](color: Color) {
    if (color) {
      this.nativeView.setColor(color.android);
    }
  }

  public disposeNativeView() {
    this._android = undefined;
  }
}

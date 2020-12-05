import {AwesomeLoadersBase, indicatorProperty, indicatorColorProperty} from "./common";
import {Color, Screen} from '@nativescript/core';
import {layout} from "@nativescript/core/utils";


export class AwesomeLoaders extends AwesomeLoadersBase {
  private _ios: NVActivityIndicatorView; /* NVActivityIndicatorView */

  get ios() /* NVActivityIndicatorView */ {
    return this._ios;
  }

  public createNativeView() {
    this._ios = NVActivityIndicatorView.alloc().initWithFrameType(CGRectZero, NVActivityIndicatorType.BallPulse);
    this._handleIndicator(this.indicator);
    return this._ios;
  }


  public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
    const nativeView = this._ios;
    if (nativeView) {
      const width = layout.getMeasureSpecSize(widthMeasureSpec);
      const height = layout.getMeasureSpecSize(heightMeasureSpec);
      this.setMeasuredDimension(width, height);
      this.nativeView.frame = CGRectMake(0, 0, width / Screen.mainScreen.scale, height / Screen.mainScreen.scale);
      this._ios.startAnimating();
    }
  }

  [indicatorProperty.setNative](indicator: string) {
    this._handleIndicator(indicator);
  }

  private _handleIndicator(indicator) {
    switch (indicator) {
      case 'BallPulse':
        this._ios.type = NVActivityIndicatorType.BallPulse;
        break;
      case 'BallGridPulse':
        this._ios.type = NVActivityIndicatorType.BallGridPulse;
        break;
      case 'BallClipRotate':
        this._ios.type = NVActivityIndicatorType.BallClipRotate;
        break;
      case 'BallClipRotatePulse':
        this._ios.type = NVActivityIndicatorType.BallClipRotatePulse;
        break;
      case 'SquareSpin':
        this._ios.type = NVActivityIndicatorType.SquareSpin;
        break;
      case 'BallClipRotateMultiple':
        this._ios.type = NVActivityIndicatorType.BallClipRotateMultiple;
        break;
      case 'BallPulseRise':
        this._ios.type = NVActivityIndicatorType.BallPulseRise;
        break;
      case 'BallRotate':
        this._ios.type = NVActivityIndicatorType.BallRotate;
        break;
      case 'CubeTransition':
        this._ios.type = NVActivityIndicatorType.CubeTransition;
        break;
      case 'BallZigZag':
        this._ios.type = NVActivityIndicatorType.BallZigZag;
        break;
      case 'BallZigZagDeflect':
        this._ios.type = NVActivityIndicatorType.BallZigZagDeflect;
        break;
      case 'BallTrianglePath':
        this._ios.type = NVActivityIndicatorType.BallTrianglePath;
        break;
      case 'BallScale':
        this._ios.type = NVActivityIndicatorType.BallScale;
        break;
      case 'LineScale':
        this._ios.type = NVActivityIndicatorType.LineScale;
        break;
      case 'LineScaleParty':
        this._ios.type = NVActivityIndicatorType.LineScaleParty;
        break;
      case 'BallScaleMultiple':
        this._ios.type = NVActivityIndicatorType.BallScaleMultiple;
        break;
      case 'BallPulseSync':
        this._ios.type = NVActivityIndicatorType.BallPulseSync;
        break;
      case 'BallBeat':
        this._ios.type = NVActivityIndicatorType.BallBeat;
        break;
      case 'LineScalePulseOut':
        this._ios.type = NVActivityIndicatorType.LineScalePulseOut;
        break;
      case 'LineScalePulseOutRapid':
        this._ios.type = NVActivityIndicatorType.LineScalePulseOutRapid;
        break;
      case 'BallScaleRipple':
        this._ios.type = NVActivityIndicatorType.BallScaleRipple;
        break;
      case 'BallScaleRippleMultiple':
        this._ios.type = NVActivityIndicatorType.BallScaleRippleMultiple;
        break;
      case 'BallSpinFadeLoader':
        this._ios.type = NVActivityIndicatorType.BallSpinFadeLoader;
        break;
      case 'LineSpinFadeLoader':
        this._ios.type = NVActivityIndicatorType.LineSpinFadeLoader;
        break;
      case 'TriangleSkewSpin':
        this._ios.type = NVActivityIndicatorType.TriangleSkewSpin;
        break;
      case 'Pacman':
        this._ios.type = NVActivityIndicatorType.Pacman;
        break;
      case 'BallGridBeat':
        this._ios.type = NVActivityIndicatorType.BallGridBeat;
        break;
      case 'SemiCircleSpin':
        this._ios.type = NVActivityIndicatorType.SemiCircleSpin;
        break;
      case 'BallRotateChase':
        this._ios.type = NVActivityIndicatorType.BallRotateChase;
        break;
      case 'Orbit':
        this._ios.type = NVActivityIndicatorType.Orbit;
        break;
      case 'AudioEqualizer':
        this._ios.type = NVActivityIndicatorType.AudioEqualizer;
        break;
      case 'CircleStrokeSpin':
        this._ios.type = NVActivityIndicatorType.CircleStrokeSpin;
        break;
      default:
        this._ios.type = NVActivityIndicatorType.BallPulse;
        break;
    }
    if (this._ios.animating) {
      this._ios.stopAnimating()
      this._ios.startAnimating()
    }
  }

  [indicatorColorProperty.setNative](color: Color) {
    if (color) {
      this._ios.color = color.ios;
    }
    if (this._ios.animating) {
      this._ios.stopAnimating();
      this._ios.startAnimating();
    }
  }

  public disposeNativeView() {
    this._ios = undefined;
  }
}

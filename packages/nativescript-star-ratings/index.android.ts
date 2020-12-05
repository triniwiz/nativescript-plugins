import {
  StarRatingBase,
  maxProperty,
  valueProperty,
  fillModeProperty,
  FillMode,
  indicatorProperty
} from './common';
import {Color} from '@nativescript/core';

export {FillMode};

export class StarRating extends StarRatingBase {
  nativeView: android.widget.LinearLayout;
  private _ratingBar;
  private _stars;
  private _filledColor = 'blue';
  private _emptyColor = 'white';

  public createNativeView() {
    this._ratingBar = new android.widget.RatingBar(this._context);
    this._ratingBar.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
      android.widget.LinearLayout.LayoutParams.WRAP_CONTENT,
      android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));

    this._stars = this._ratingBar.getProgressDrawable() as android.graphics.drawable.LayerDrawable;

    const nativeView = new android.widget.LinearLayout(this._context);
    nativeView.addView(this._ratingBar);
    return nativeView;
  }

  public initNativeView() {
    if (this._filledColor) {
      this.filledColor = this._filledColor;
    }
    if (this._emptyColor) {
      this.emptyColor = this._emptyColor;
    }
    const ref = new WeakRef(this);
    this._ratingBar.setOnRatingBarChangeListener(
      new android.widget.RatingBar.OnRatingBarChangeListener({
        onRatingChanged: function (
          ratingBar: android.widget.RatingBar,
          rating: number,
          fromUser: boolean
        ) {
          const owner = ref.get();
          if (fromUser) {
            valueProperty.nativeValueChange(owner, rating);
          }
        }
      })
    );
  }

  set emptyColor(color: string) {
    this._emptyColor = color;
    if (this._stars) {
      const emptyDrawable = this._stars.getDrawable(0);
      emptyDrawable.setColorFilter(
        new Color('white').android,
        android.graphics.PorterDuff.Mode.SRC_ATOP
      );
    }
  }

  set filledColor(color: string) {
    this._filledColor = color;
    if (this._stars) {
      const leftDrawable = this._stars.getDrawable(
        1
      ) as android.graphics.drawable.Drawable;
      const rightDrawable = this._stars.getDrawable(
        2
      ) as android.graphics.drawable.Drawable;

      if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.Q) {
        leftDrawable.setColorFilter(
          new android.graphics.BlendModeColorFilter(new Color(color).android, android.graphics.BlendMode.CLEAR)
        );
        rightDrawable.setColorFilter(
          new android.graphics.BlendModeColorFilter(new Color(color).android, android.graphics.BlendMode.CLEAR)
        );
      } else {
        leftDrawable.setColorFilter(
          new Color(color).android,
          android.graphics.PorterDuff.Mode.CLEAR
        );
        rightDrawable.setColorFilter(
          new Color(color).android,
          android.graphics.PorterDuff.Mode.SRC_ATOP
        );
      }

    }
  }

  [fillModeProperty.defaultValue]() {
    this._ratingBar.setStepSize(1);
  }

  [fillModeProperty.setNative](value: FillMode) {
    if (this._ratingBar) {
      switch (value) {
        case FillMode.HALF:
          this._ratingBar.setStepSize(0.5);
          break;
        case FillMode.PRECISE:
          this._ratingBar.setStepSize(0.1);
          break;
        default:
          this._ratingBar.setStepSize(1.0);
          break;
      }
    }
  }

  [indicatorProperty.setNative](isindicator: boolean) {
    if (this._ratingBar) {
      this._ratingBar.setIsIndicator(isindicator);
    }
  }

  public onLoaded() {
    super.onLoaded();
    if (this._ratingBar && this.value) {
      this._ratingBar.setRating(Number(this.value));
    }
  }

  public disposeNativeView() {
    if (!this._ratingBar) return;
    this._ratingBar.setOnRatingBarChangeListener(null);
  }

  [valueProperty.setNative](value: number) {
    if (this._ratingBar) {
      this._ratingBar.setRating(Number(this.value));
    }
  }

  [maxProperty.setNative](max: number) {
    if (this._ratingBar) {
      this._ratingBar.setMax(Number(max));
      this._ratingBar.setNumStars(Number(max));
    }
  }
}

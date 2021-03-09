import { StarRatingBase, maxProperty, valueProperty, fillModeProperty, FillMode, indicatorProperty, filledColorProperty } from './common';
import { Color } from '@nativescript/core';

export { FillMode };

export class StarRating extends StarRatingBase {
	emptyBorderColor: string | Color;
	filledBorderColor: string | Color;
	nativeView: android.widget.LinearLayout;
	private _ratingBar: android.widget.RatingBar;
	private _stars: android.graphics.drawable.LayerDrawable;
	private _filledColor = 'blue';
	private _emptyColor = 'white';

	public createNativeView() {
		this._ratingBar = new android.widget.RatingBar(this._context);
		this._ratingBar.setLayoutParams(new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
		this._stars = this._ratingBar.getProgressDrawable() as android.graphics.drawable.LayerDrawable;
		this._handleFilledColor(this._emptyColor);
		this._handleEmptyColor(this._filledColor);
		const nativeView = new android.widget.LinearLayout(this._context);
		nativeView.addView(this._ratingBar);
		return nativeView;
	}

	public initNativeView() {
		if (this.filledColor) {
			this._handleFilledColor(this.filledColor);
		}
		if (!this.emptyColor) {
			this._handleEmptyColor(this.emptyColor);
		}
		this._ratingBar.setRating(Number(this.value));
		this._ratingBar.setIsIndicator(Boolean(this.indicator));
		this._ratingBar.setMax(Number(this.max));
		const ref = new WeakRef(this);
		this._ratingBar.setOnRatingBarChangeListener(
			new android.widget.RatingBar.OnRatingBarChangeListener({
				onRatingChanged: function (ratingBar: android.widget.RatingBar, rating: number, fromUser: boolean) {
					const owner = ref.get();
					if (fromUser) {
						valueProperty.nativeValueChange(owner, rating);
					}
				},
			})
		);
	}

	set emptyColor(color: string | Color) {
		this.style.emptyColor = color;
		this._handleEmptyColor(color);
	}

	private _handleEmptyColor(color: string | Color) {
		if (typeof color === 'string') {
			color = new Color(color);
		}
		if (!(color instanceof Color)) {
			return;
		}
		const emptyDrawable = this._stars.getDrawable(0);
		if (android.os.Build.VERSION.SDK_INT >= 29) {
			emptyDrawable.setColorFilter(new android.graphics.BlendModeColorFilter(color.android, android.graphics.BlendMode.CLEAR));
		} else {
			emptyDrawable.setColorFilter(color.android, android.graphics.PorterDuff.Mode.SRC_ATOP);
		}
	}

	get emptyColor(): string | Color {
		return this.style.emptyColor;
	}

	set filledColor(color: string | Color) {
		this._handleFilledColor(color);
		this.style.filledColor = color;
	}

	private _handleFilledColor(color: string | Color) {
		if (typeof color === 'string') {
			color = new Color(color);
		}
		if (!(color instanceof Color)) {
			return;
		}
		if (this._stars) {
			const leftDrawable = this._stars.getDrawable(1) as android.graphics.drawable.Drawable;
			const rightDrawable = this._stars.getDrawable(2) as android.graphics.drawable.Drawable;

			if (android.os.Build.VERSION.SDK_INT >= 29) {
				leftDrawable.setColorFilter(new android.graphics.BlendModeColorFilter(color.android, android.graphics.BlendMode.CLEAR));
				rightDrawable.setColorFilter(new android.graphics.BlendModeColorFilter(color.android, android.graphics.BlendMode.CLEAR));
			} else {
				leftDrawable.setColorFilter(color.android, android.graphics.PorterDuff.Mode.CLEAR);
				rightDrawable.setColorFilter(color.android, android.graphics.PorterDuff.Mode.SRC_ATOP);
			}
		}
	}

	get filledColor(): string | Color {
		return this.style.filledColor;
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

	public disposeNativeView() {
		if (!this._ratingBar) return;
		this._ratingBar.setOnRatingBarChangeListener(null);
	}

	[valueProperty.setNative](value: number) {
		if (this._ratingBar) {
			this._ratingBar.setRating(Number(value));
		}
	}

	[maxProperty.setNative](max: number) {
		if (this._ratingBar) {
			this._ratingBar.setMax(Number(max));
			this._ratingBar.setNumStars(Number(max));
		}
	}
}

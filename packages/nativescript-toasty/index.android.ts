import { Application, Color, CoreTypes, Screen, Utils } from '@nativescript/core';
import { ToastDuration, ToastPosition, ToastyOptions } from './common';

export { ToastDuration, ToastPosition, ToastyOptions } from './common';

@NativeClass()
export class SnackbarCallback extends com.google.android.material.snackbar.BaseTransientBottomBar.BaseCallback<com.google.android.material.snackbar.Snackbar> {
	_owner: WeakRef<Toasty>;
	constructor(owner: WeakRef<Toasty>) {
		super();
		this._owner = owner;
		return global.__native(this);
	}

	onShown(snackbar: com.google.android.material.snackbar.Snackbar) {
		this._owner.get()?._androidOpts?.onShown?.();
	}
	onDismissed(snackbar: com.google.android.material.snackbar.Snackbar, event: number) {
		this._owner.get()?._androidOpts?.onHidden?.();
	}
}

function getMaterialR(rtype: string, field: string): number {
	return +java.lang.Class.forName('com.google.android.material.R$' + rtype)
		.getDeclaredField(field)
		.get(null);
}

export class Toasty {
	private _position: ToastPosition;
	private _duration: ToastDuration;
	private _text: string;
	private _backgroundColor;
	private _textColor;
	_androidOpts: {
		/**
		 *   Called when the toast is shown available on API 30+
		 */
		onShown?: () => void;
		/**
		 *   Called when the toast is hidden available on API 30+
		 */
		onHidden?: () => void;
	};
	private _toast: com.google.android.material.snackbar.Snackbar;
	private _toastView: android.widget.LinearLayout;
	private _toastTextView: android.widget.TextView;
	private _screenHeight: number;
	private _screenWidth: number;
	private _x: CoreTypes.LengthType | number;
	private _y: CoreTypes.LengthType | number;
	private _tapToDismiss: boolean;
	private _anchorView: any;
	private static _SNACKBAR_TEXT_ID: number;

	constructor(opts?: ToastyOptions) {
		this._screenHeight = Screen.mainScreen.heightPixels;
		this._screenWidth = Screen.mainScreen.widthPixels;
		this._text = opts?.text;
		this._duration = opts?.duration ?? ToastDuration.SHORT;
		this._position = opts?.position ?? ToastPosition.BOTTOM;
		this._textColor = opts?.textColor ?? 'white';
		this._backgroundColor = opts?.backgroundColor ?? 'black';
		this._androidOpts = opts?.android ?? {};
		this._x = opts?.xAxisOffset;
		this._y = opts?.yAxisOffset;
		this._tapToDismiss = opts?.tapToDismiss ?? false;
		this._anchorView = opts?.anchorView;
		const activity = Application.android.foregroundActivity || Application.android.startActivity;
		const rootView = activity?.findViewById?.(android.R.id.content);
		this._toast = com.google.android.material.snackbar.Snackbar.make(rootView, this._text, this.duration === ToastDuration.LONG ? 3000 : 2000);
		this._toastView = new android.widget.LinearLayout(activity);
		//this._toastView.setTranslationY(-50);
		this._toastTextView = new android.widget.TextView(activity);
		this._toastTextView.setText(this._text);

		const ref = new WeakRef<Toasty>(this);
		this._toastView.addView(this._toastTextView);
		// @ts-ignore
		this._toast.getView()?.addView(this._toastView);
		this._toastView?.setOnTouchListener(
			new android.view.View.OnTouchListener({
				onTouch(param0: android.view.View, param1: android.view.MotionEvent): boolean {
					if (ref.get()?._tapToDismiss) {
						ref.get()?._toast?.dismiss();
					}
					return false;
				},
			}),
		);
		this._toast.addCallback(new SnackbarCallback(new WeakRef<Toasty>(this)));
		const textView = this._toastTextView || (this._toast.getView().findViewById(this.SNACKBAR_TEXT_ID) as android.widget.TextView);
		if (textView) {
			textView.setTextAlignment(android.view.Gravity.CENTER_HORIZONTAL);
		}

		this._toast.getView().setPadding(10, 0, 10, 10);

		// set the values
		this.setToastDuration(this._duration).setToastPosition(this._position).setTextColor(this._textColor).setBackgroundColor(this._backgroundColor);

		return this;
	}

	get SNACKBAR_TEXT_ID() {
		if (!Toasty._SNACKBAR_TEXT_ID) {
			Toasty._SNACKBAR_TEXT_ID = getMaterialR('id', 'snackbar_text');
		}
		return Toasty._SNACKBAR_TEXT_ID;
	}

	get position() {
		return this._position;
	}

	set position(value: ToastPosition) {
		if (value) {
			this._position = value;
			this.setToastPosition(value);
		}
	}

	get duration() {
		return this._duration;
	}

	set duration(value: ToastDuration) {
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
		return value && !Utils.isNullOrUndefined(value.unit) && !Utils.isNullOrUndefined(value.value);
	}

	private get yPixels(): number | undefined {
		let y;
		if (typeof this._y === 'number') {
			y = this._y * Screen.mainScreen.scale;
		}

		if (Toasty.isLength(this._y)) {
			if ((this._y as any).unit === 'px') {
				y = (this._y as any).value;
			}
			if ((this._y as any).unit === 'dip') {
				y = (this._y as any).value * Screen.mainScreen.scale;
			}
		}

		if (typeof this._y === 'string') {
			if (this._y.includes('px')) {
				y = parseInt(this._y.replace('px', ''), 0);
			}
			if (this._y.includes('dip')) {
				y = parseInt(this._y.replace('dip', ''), 0) * Screen.mainScreen.scale;
			}
		}

		return y;
	}

	private get xPixels(): number | undefined {
		let x;
		if (typeof this._x === 'number') {
			x = this._x * Screen.mainScreen.scale;
		}

		if (Toasty.isLength(this._x)) {
			if ((this._x as any).unit === 'px') {
				x = (this._x as any).value;
			}
			if ((this._x as any).unit === 'dip') {
				x = (this._x as any).value * Screen.mainScreen.scale;
			}
		}

		if (typeof this._x === 'string') {
			if (this._x.includes('px')) {
				x = parseInt(this._x.replace('px', ''), 0);
			}
			if (this._x.includes('dip')) {
				x = parseInt(this._x.replace('dip', ''), 0) * Screen.mainScreen.scale;
			}
		}

		return x;
	}

	show() {
		if (!this._text) {
			throw new Error('Toasty Text is not set.');
		} else {
			this._toast?.show();
		}
	}

	private _measureToast() {
		const window = (Application.android.foregroundActivity || Application.android.startActivity)?.getWindow();
		const metrics = new android.util.DisplayMetrics();
		window?.getWindowManager().getDefaultDisplay().getMetrics(metrics);
		const MeasureSpec = android.view.View.MeasureSpec;
		const widthMeasureSpec = MeasureSpec.makeMeasureSpec(metrics.widthPixels, MeasureSpec.UNSPECIFIED);
		const heightMeasureSpec = MeasureSpec.makeMeasureSpec(metrics.heightPixels, MeasureSpec.UNSPECIFIED);
		this._toast?.getView()?.measure(widthMeasureSpec, heightMeasureSpec);
	}

	get width() {
		this._measureToast();
		return this._toast?.getView()?.getMeasuredWidth() / Screen.mainScreen.scale || 0;
	}

	get height() {
		this._measureToast();
		return this._toast?.getView()?.getMeasuredHeight() / Screen.mainScreen.scale || 0;
	}

	cancel() {
		this._toast?.dismiss();
	}

	setTextColor(value: Color | string) {
		if (value) {
			this._textColor = value;
			if (typeof value === 'string') {
				const nativeColor = new Color(value).android;
				this._toastTextView.setTextColor(nativeColor);
			} else {
				this._toastTextView.setTextColor(value.android);
			}
		}

		return this;
	}

	setBackgroundColor(value: Color | string) {
		if (value) {
			this._backgroundColor = value;
			const view = this._toastView;
			console.log(this._toastView);
			this._toast.getView().setBackgroundColor(new Color('transparent').android);
			if (typeof value === 'string') {
				const nativeColor = new Color(value).android;
				// Gets the actual oval background of the Toast then sets the colour filter
				view.setBackgroundColor(nativeColor);
				//view?.getBackground().setColorFilter(nativeColor, android.graphics.PorterDuff.Mode.SRC_IN);
			} else {
				view.setBackgroundColor(value.android);
				// view?.getBackground().setColorFilter(value.android, android.graphics.PorterDuff.Mode.SRC_IN);
			}
		}

		return this;
	}

	setToastDuration(value: ToastDuration) {
		switch (value) {
			case ToastDuration.SHORT:
				this._toast?.setDuration(2000);
				break;
			case ToastDuration.LONG:
				this._toast?.setDuration(3000);
				break;
			default:
				this._toast?.setDuration(2000);
				break;
		}

		return this;
	}

	setToastPosition(value: ToastPosition) {
		this._position = value;
		this._updateToastPosition();
		return this;
	}

	private _updateToastPosition() {
		const yOffset = this.yPixels ?? 0;
		const xOffset = this.xPixels ?? 0;
		const view = this._toast?.getView?.();
		const params = view?.getLayoutParams?.() as android.widget.FrameLayout.LayoutParams;
		switch (this._position) {
			case ToastPosition.TOP:
				params.gravity = android.view.Gravity.TOP;
				break;
			case ToastPosition.TOP_LEFT:
				params.gravity = android.view.Gravity.TOP | android.view.Gravity.LEFT;
				break;
			case ToastPosition.TOP_RIGHT:
				params.gravity = android.view.Gravity.TOP | android.view.Gravity.RIGHT;
				break;
			case ToastPosition.CENTER:
				params.gravity = android.view.Gravity.CENTER;
				break;
			case ToastPosition.CENTER_LEFT:
				params.gravity = android.view.Gravity.CENTER | android.view.Gravity.LEFT;
				break;
			case ToastPosition.CENTER_RIGHT:
				params.gravity = android.view.Gravity.CENTER | android.view.Gravity.RIGHT;
				break;
			case ToastPosition.BOTTOM:
				params.gravity = android.view.Gravity.BOTTOM;
				break;
			case ToastPosition.BOTTOM_LEFT:
				params.gravity = android.view.Gravity.BOTTOM | android.view.Gravity.LEFT;
				break;
			case ToastPosition.BOTTOM_RIGHT:
				params.gravity = android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT;
				break;
			default:
				break;
		}
		view.setX(xOffset);
		view.setY(yOffset);
	}
}

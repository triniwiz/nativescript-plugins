import { Application, Color, Screen } from '@nativescript/core';
import { ToolTipConfig } from './common';

function lazy<T>(action: () => T): () => T {
	let _value: T;

	return () => _value || (_value = action());
}

const ALIGN_ANCHOR = lazy(() => com.skydoves.balloon.ArrowPositionRules.ALIGN_ANCHOR);
const ORIENTATION_LEFT = lazy(() => com.skydoves.balloon.ArrowOrientation.LEFT);
const ORIENTATION_TOP = lazy(() => com.skydoves.balloon.ArrowOrientation.TOP);
const ORIENTATION_RIGHT = lazy(() => com.skydoves.balloon.ArrowOrientation.RIGHT);
const ORIENTATION_BOTTOM = lazy(() => com.skydoves.balloon.ArrowOrientation.BOTTOM);

export class ToolTip {
	private builder: com.skydoves.balloon.Balloon.Builder;
	private tip: com.skydoves.balloon.Balloon;
	private config: ToolTipConfig;
	private view: any;
	constructor(view: any, config: ToolTipConfig) {
		this.view = view;
		this.config = config;
		this.builder = new com.skydoves.balloon.Balloon.Builder(Application.android.foregroundActivity || Application.android.startActivity);
		this.builder.setArrowPositionRules(ALIGN_ANCHOR());
		this.builder.setText(config.text);
		this.builder.setDismissWhenTouchOutside(config?.dismissOnTapOutside ?? false);
		if (config.textColor) {
			this.builder.setTextColor(new Color(config.textColor).android);
		}

		if (config.backgroundColor) {
			this.builder.setBackgroundColor(new Color(config.backgroundColor).android);
		}

		if (config.width) {
			this.builder.setWidth(config.width * Screen.mainScreen.scale);
		}

		if (typeof config.padding === 'number') {
			this.builder.setPadding(config.padding);
		}
		if (typeof config.textSize === 'number') {
			this.builder.setTextSize(config.textSize);
		}
		if (typeof config.arrowSize === 'number') {
			this.builder.setArrowSize(config.arrowSize);
		}
		if (typeof config.radius === 'number') {
			this.builder.setCornerRadius(config.radius);
		}
		if (typeof config.duration === 'number') {
			this.builder.setAutoDismissDuration(config.duration);
		}

		this.builder.setDismissWhenClicked(config?.dismissOnTap ?? true);

		this.builder.setIsVisibleArrow(config?.showArrow ?? true);

		if (typeof config.onShow === 'function') {
			this.builder.setOnBalloonInitializedListener(
				new com.skydoves.balloon.OnBalloonInitializedListener({
					onBalloonInitialized(view) {
						config.onShow();
					},
				})
			);
		}
		if (typeof config.onClick === 'function') {
			this.builder.setOnBalloonClickListener(
				new com.skydoves.balloon.OnBalloonClickListener({
					onBalloonClick(view) {
						config.onClick();
					},
				})
			);
		}

		if (typeof config.onDismiss === 'function') {
			this.builder.setOnBalloonDismissListener(
				new com.skydoves.balloon.OnBalloonDismissListener({
					onBalloonDismiss() {
						config.onDismiss();
					},
				})
			);
		}

		switch (this.config.position) {
			case 'left':
				this.builder.setArrowOrientation(ORIENTATION_RIGHT());
				break;
			case 'right':
				this.builder.setArrowOrientation(ORIENTATION_LEFT());
				break;
			case 'bottom':
				this.builder.setArrowOrientation(ORIENTATION_TOP());
				break;
			case 'top':
				this.builder.setArrowOrientation(ORIENTATION_BOTTOM());
				break;
			default:
				// NOOP
				break;
		}

		this.tip = this.builder.build();
	}

	show() {
		const isNative = this.view instanceof android.view.View;
		switch (this.config.position) {
			case 'left':
				this.builder.build().showAlignLeft(isNative ? this.view : this.view.nativeView);
				break;
			case 'right':
				this.builder.build().showAlignRight(isNative ? this.view : this.view.nativeView);
				break;
			case 'bottom':
				this.builder.build().showAlignBottom(isNative ? this.view : this.view.nativeView);
				break;
			case 'top':
				this.builder.build().showAlignTop(isNative ? this.view : this.view.nativeView);
				break;
			default:
				this.builder.build().show(isNative ? this.view : this.view.nativeView);
				break;
		}
	}

	hide() {
		this.tip.dismiss();
	}
}

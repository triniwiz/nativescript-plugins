import { booleanConverter, makeParser, makeValidator, Property } from '@nativescript/core';
import { profile } from '@nativescript/core/profiling';
import { ScrollEventData, ContentView, CoreTypes, Utils } from '@nativescript/core';

const scrollBarIndicatorVisibleProperty = new Property<NestedScrollView, boolean>({
	name: 'scrollBarIndicatorVisible',
	defaultValue: true,
	valueConverter: booleanConverter,
});

const converter = makeParser<CoreTypes.OrientationType>(makeValidator('horizontal', 'vertical'));
export const orientationProperty = new Property<NestedScrollView, CoreTypes.OrientationType>({
	name: 'orientation',
	defaultValue: 'vertical',
	affectsLayout: true,
	valueChanged: (target: NestedScrollView, oldValue: CoreTypes.OrientationType, newValue: CoreTypes.OrientationType) => {
		target._onOrientationChanged();
	},
	valueConverter: converter,
});

export class NestedScrollView extends ContentView {
	public static scrollEvent = 'scroll';
	public orientation: CoreTypes.OrientationType;
	public scrollBarIndicatorVisible: boolean;
	private _androidViewId: number = -1;
	private handler;

	public createNativeView() {
		return new androidx.core.widget.NestedScrollView(this._context);
	}

	public initNativeView(): void {
		if (this._androidViewId < 0) {
			this._androidViewId = android.view.View.generateViewId();
		}
		this.nativeViewProtected.setId(this._androidViewId);
		const that = new WeakRef(this);
		this.handler = new androidx.core.widget.NestedScrollView.OnScrollChangeListener({
			onScrollChange(view, scrollX: number, scrollY: number, oldScrollX: number, oldScrollY: number) {
				const owner = that.get();
				if (owner) {
					owner.notify(<ScrollEventData>{
						object: this,
						eventName: NestedScrollView.scrollEvent,
						scrollX: scrollX,
						scrollY: scrollY,
					});
				}
			},
		});
	}

	@profile
	public onLoaded() {
		super.onLoaded();
		if (this.nativeViewProtected) {
			this.nativeViewProtected.setOnScrollChangeListener(this.handler);
		}
	}

	public onUnloaded() {
		if (this.nativeViewProtected) {
			this.nativeViewProtected.setOnScrollChangeListener(null);
		}
		super.onUnloaded();
	}

	disposeNativeView() {
		this.handler = null;
		super.disposeNativeView();
	}

	public _onOrientationChanged() {
		if (this.nativeViewProtected) {
			const parent = this.parent;
			if (parent) {
				parent._removeView(this);
				parent._addView(this);
			}
		}
	}

	[scrollBarIndicatorVisibleProperty.getDefault](): boolean {
		return true;
	}

	[scrollBarIndicatorVisibleProperty.setNative](value: boolean) {
		if (this.nativeViewProtected) {
			if (this.orientation === 'horizontal') {
				this.nativeViewProtected.setHorizontalScrollBarEnabled(value);
			} else {
				this.nativeViewProtected.setVerticalScrollBarEnabled(value);
			}
		}
	}

	public scrollToVerticalOffset(value: number, animated: boolean) {
		const nativeView = this.nativeViewProtected;
		if (nativeView && this.orientation === 'vertical') {
			value *= Utils.layout.getDisplayDensity();

			if (animated) {
				nativeView.smoothScrollTo(0, value);
			} else {
				nativeView.scrollTo(0, value);
			}
		}
	}

	public scrollToHorizontalOffset(value: number, animated: boolean) {
		const nativeView = this.nativeViewProtected;
		if (nativeView && this.orientation === 'horizontal') {
			value *= Utils.layout.getDisplayDensity();

			if (animated) {
				nativeView.smoothScrollTo(value, 0);
			} else {
				nativeView.scrollTo(value, 0);
			}
		}
	}

	get horizontalOffset(): number {
		const nativeView = this.nativeViewProtected;
		if (!nativeView) {
			return 0;
		}

		return nativeView.getScrollX() / Utils.layout.getDisplayDensity();
	}

	get verticalOffset(): number {
		const nativeView = this.nativeViewProtected;
		if (!nativeView) {
			return 0;
		}

		return nativeView.getScrollY() / Utils.layout.getDisplayDensity();
	}

	get scrollableWidth(): number {
		const nativeView = this.nativeViewProtected;
		if (!nativeView || this.orientation !== 'horizontal') {
			return 0;
		}

		return this.getScrollableLength() / Utils.layout.getDisplayDensity();
	}

	get scrollableHeight(): number {
		const nativeView = this.nativeViewProtected;
		if (!nativeView || this.orientation !== 'vertical') {
			return 0;
		}

		return this.getScrollableLength() / Utils.layout.getDisplayDensity();
	}

	private getScrollableLength(): number {
		if (!this.nativeView) {
			return 0;
		}
		return this.nativeView.getChildAt(0).getHeight();
	}
}

scrollBarIndicatorVisibleProperty.register(NestedScrollView);
orientationProperty.register(NestedScrollView);

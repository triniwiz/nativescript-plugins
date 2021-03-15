import { Color } from '@nativescript/core';
import { ToolTipConfig } from './common';
declare const NSMakeRange;
@NativeClass()
@ObjCClass(SexyTooltipDelegate)
class SexyTooltipDelegateImpl extends NSObject implements SexyTooltipDelegate {
	owner: WeakRef<ToolTip>;

	public static initWithOwner(owner: WeakRef<ToolTip>): SexyTooltipDelegateImpl {
		const delegate = SexyTooltipDelegateImpl.alloc().init() as SexyTooltipDelegateImpl;
		delegate.owner = owner;
		return delegate;
	}
	tooltipDidDismiss(tooltip: SexyTooltip) {
		if (currentTip === tooltip) {
			currentTip = undefined;
		} else {
			currentTip?.dismiss();
			currentTip = undefined;
		}
		this.owner.get()?._config?.onDismiss?.();
	}

	tooltipDidPresent(tooltip: SexyTooltip) {
		if (currentTip != tooltip) {
			currentTip?.dismiss();
			currentTip = undefined;
		}
		currentTip = tooltip;
		this.owner.get()?._config?.onShow?.();
	}

	tooltipWasTapped(tooltip: SexyTooltip) {
		this.owner.get()?._config?.onClick?.();
	}

	tooltipWillBeTapped(tooltip: SexyTooltip) {}
}
let currentTip;
export class ToolTip {
	private tip: SexyTooltip;
	_config: ToolTipConfig;
	private view: any;
	private delegate: SexyTooltipDelegateImpl;
	constructor(view: any, config: ToolTipConfig) {
		this.delegate = SexyTooltipDelegateImpl.initWithOwner(new WeakRef(this));
		const text = NSMutableAttributedString.alloc().initWithString(config.text);
		this.view = view;
		this._config = config;

		if (config.textColor) {
			text.addAttributeValueRange(NSForegroundColorAttributeName, new Color(config.textColor).ios, NSMakeRange(0, config.text.length));
		}

		if (typeof config.textSize === 'number') {
			text.addAttributeValueRange(NSFontAttributeName, UIFont.systemFontOfSize(config.textSize), NSMakeRange(0, config.text.length));
		}

		const isNative = view instanceof UIView;

		this.tip = SexyTooltip.alloc().initWithAttributedStringSizedToView(text, isNative ? view : view.ios);

		this.tip.dismissesOnTap = config?.dismissOnTap ?? true;
		if (config.backgroundColor) {
			this.tip.color = new Color(config.backgroundColor).ios;
		}

		if (typeof config.padding === 'number') {
			this.tip.padding = UIEdgeInsetsFromString(`${config.padding},${config.padding},${config.padding},${config.padding}`);
		}

		if (typeof config.arrowSize === 'number') {
			this.tip.arrowHeight = config.arrowSize;
		}

		if (typeof config.radius === 'number') {
			this.tip.cornerRadius = config.radius;
		}
		if (typeof config.showArrow === 'boolean' && !config.showArrow) {
			this.tip.arrowHeight = 0;
		}

		switch (config.position) {
			case 'left':
				this.tip.permittedArrowDirections = [SexyTooltipArrowDirection.Right] as any;
				break;
			case 'right':
				this.tip.permittedArrowDirections = [SexyTooltipArrowDirection.Left] as any;
				break;
			case 'bottom':
				this.tip.permittedArrowDirections = [SexyTooltipArrowDirection.Up] as any;
				break;
			case 'top':
				this.tip.permittedArrowDirections = [SexyTooltipArrowDirection.Down] as any;
				break;
			default:
				this.tip.permittedArrowDirections = [0, 1, 2, 3, 4] as any;
				break;
		}

		this.tip.delegate = this.delegate;
	}
	show() {
		if (typeof this._config.duration === 'number') {
			this.tip.dismissInTimeInterval(this._config.duration / 1000);
		}
		const isNative = this.view instanceof UIView;

		this.tip.presentFromViewAnimated(isNative ? this.view : this.view.ios, true);
	}

	hide() {
		this.tip.dismissAnimated(true);
	}
}

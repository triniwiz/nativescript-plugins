import { Builder, Utils, View, Frame, Color, Device, Screen, knownFolders, path } from '@nativescript/core';
import { PopupOptions } from './common';

export class Popup {
	private _popupController: UIViewController;
	private _options: PopupOptions;
	private resolveData;
	resolve;
	reject;

	constructor(options?: PopupOptions) {
		this._options = new PopupOptions();
		if (options) {
			Object.keys(options).forEach((key) => {
				this._options[key] = options[key];
			});
		}

		this._popupController = UIViewController.new();
		this._popupController.modalPresentationStyle = UIModalPresentationStyle.Popover;
	}

	public showPopup(source: any, view: any): Promise<boolean> {
		return new Promise((resolve, reject) => {
			this.reject = reject;
			this.resolve = resolve;
			const isTablet = Device.deviceType === 'Tablet';
			let nativeView;
			if (!this._popupController.popoverPresentationController.delegate) {
				this._popupController.popoverPresentationController.delegate = UIPopoverPresentationControllerDelegateImpl.initWithOwner(new WeakRef(this));
			}
			if (this._options.backgroundColor) {
				this._popupController.view.backgroundColor = new Color(this._options.backgroundColor).ios;
			}
			if (this._options.hideArrow) {
				this._popupController.popoverPresentationController.permittedArrowDirections = UIPopoverArrowDirection.Unknown;
			}
			// check the view argument
			if (view instanceof View) {
				Frame.topmost()._addView(view);
				this._stylePopup(view, isTablet);
				this._popupController.preferredContentSize = view.nativeView.bounds.size;
				nativeView = view.nativeView;
			} else if (view instanceof UIView) {
				nativeView = view;
			} else if (typeof view === 'string' || view instanceof String) {
				// this is a template so use the builder to load the template
				let filePath;
				let component: View;
				if (view.startsWith('~')) {
					view = view.replace('~', '');
					filePath = knownFolders.currentApp().path;
					component = Builder.load(path.join(filePath, view)) as View;
				} else {
					component = Builder.load(<any>view) as View;
				}
				Frame.topmost()._addView(component);
				this._stylePopup(component, isTablet);
				this._popupController.preferredContentSize = component.nativeView.bounds.size;
				nativeView = component.ios;
			}

			// check the source argument
			if (source instanceof View) {
				this._popupController.popoverPresentationController.sourceView = source.nativeView;
				this._popupController.popoverPresentationController.sourceRect = CGRectMake(0, 0, source.nativeView.frame.size.width, source.nativeView.frame.size.height);
				this._popupController.view.addSubview(nativeView);
				(<UINavigationController>Frame.topmost().ios.controller).presentModalViewControllerAnimated(this._popupController, true);
			} else if (source instanceof UIView) {
				this._popupController.popoverPresentationController.sourceView = source;
				this._popupController.popoverPresentationController.sourceRect = CGRectMake(0, 0, source.frame.size.width, source.frame.size.height);
				this._popupController.view.addSubview(nativeView);
				(<UINavigationController>Frame.topmost().ios.controller).presentModalViewControllerAnimated(this._popupController, true);
			}
		});
	}

	didDismiss = () => {
		if (this.resolve) {
			this.resolve(this.resolveData);
		}
		this.resolve = null;
		this.reject = null;
	};

	getOptions = () => {
		return this._options;
	};

	public hidePopup(data?: any) {
		this.resolveData = data;
		this._popupController.dismissModalViewControllerAnimated(true);
	}

	private _stylePopup(view, isTablet) {
		let height;
		let width;
		switch (this._options.unit) {
			case 'px':
				if (this._options.height && !this._options.width) {
					height = this._options.height;
					width = this._options.height * (Screen.mainScreen.widthPixels / Screen.mainScreen.heightPixels);
				} else if (this._options.width && !this._options.height) {
					height = this._options.width * (Screen.mainScreen.widthPixels / Screen.mainScreen.heightPixels);
					width = this._options.width;
				} else {
					width = this._options.width;
					height = this._options.height;
				}

				layoutRootView(
					view,
					CGRectMake(
						0,
						0, // isTablet ? 0 : ios.getStatusBarHeight(),
						Utils.layout.toDeviceIndependentPixels(width),
						Utils.layout.toDeviceIndependentPixels(height)
					)
				);
				break;
			case '%':
				if (this._options.height && !this._options.width) {
					height = Screen.mainScreen.heightDIPs * (this._options.height / 100);
					width = height * (Screen.mainScreen.widthPixels / Screen.mainScreen.heightPixels);
				} else if (this._options.width && !this._options.height) {
					width = Screen.mainScreen.widthDIPs * (this._options.width / 100);
					height = width * (Screen.mainScreen.widthPixels / Screen.mainScreen.heightPixels);
				} else {
					width = Screen.mainScreen.widthDIPs * (this._options.width / 100);
					height = Screen.mainScreen.heightDIPs * (this._options.height / 100);
				}
				layoutRootView(view, CGRectMake(0, 0, width, height));
				break;
			default:
				if (this._options.height && !this._options.width) {
					height = this._options.height;
					width = this._options.height * (Screen.mainScreen.widthPixels / Screen.mainScreen.heightPixels);
				} else if (this._options.width && !this._options.height) {
					height = this._options.width * (Screen.mainScreen.widthPixels / Screen.mainScreen.heightPixels);
					width = this._options.width;
				} else {
					width = this._options.width ? this._options.width : isTablet ? 400 : 300;
					height = this._options.height ? this._options.height : isTablet ? 320 : 100;
				}
				layoutRootView(view, CGRectMake(0, 0, width, height));
				break;
		}
	}
}

/*
  Replacement for _layoutRootView method removed in NativeScript 6
*/
var layoutRootView = function (rootView, parentBounds) {
	if (!rootView || !parentBounds) {
		return;
	}

	const size = parentBounds.size;
	const width = Utils.layout.toDevicePixels(size.width);
	const height = Utils.layout.toDevicePixels(size.height);

	const widthSpec = Utils.layout.makeMeasureSpec(width, Utils.layout.EXACTLY);
	const heightSpec = Utils.layout.makeMeasureSpec(height, Utils.layout.EXACTLY);

	rootView.measure(widthSpec, heightSpec);

	const origin = parentBounds.origin;
	const left = origin.x;
	const top = origin.y;

	rootView.layout(left, top, width, height);
};

@NativeClass()
class UIPopoverPresentationControllerDelegateImpl extends NSObject implements UIPopoverPresentationControllerDelegate {
	static ObjCProtocols = [UIPopoverPresentationControllerDelegate];
	private _owner: WeakRef<Popup>;

	static initWithOwner(owner: WeakRef<Popup>) {
		const delegate = new UIPopoverPresentationControllerDelegateImpl();
		delegate._owner = owner;
		return delegate;
	}

	adaptivePresentationStyleForPresentationController?(controller: UIPresentationController): UIModalPresentationStyle {
		return UIModalPresentationStyle.None;
	}

	popoverPresentationControllerDidDismissPopover(popoverPresentationController: UIPopoverPresentationController): void {
		if (this._owner.deref()) {
			this._owner.deref().didDismiss();
		}
	}

	popoverPresentationControllerShouldDismissPopover(popoverPresentationController: UIPopoverPresentationController): any {
		if (this._owner.deref()) {
			return this._owner.deref().getOptions().outsideTouchble;
		}
	}
}

import { Builder, Utils, View, Frame, StackLayout, Color, Device, Screen, knownFolders, path } from '@nativescript/core';
import { PopupOptions } from './common';

export class Popup {
    private _popup: android.widget.PopupWindow;
    private _options: PopupOptions;
    private resolveData;
    resolve;
    reject;
    private _view;

    constructor(options?: PopupOptions) {
        this._options = new PopupOptions();
        this._popup = new android.widget.PopupWindow(
            Utils.android.getApplicationContext()
        );
        this._popup.setOnDismissListener(new android.widget.PopupWindow.OnDismissListener({
            onDismiss: () => {
                if (this.resolve) {
                    this.resolve(this.resolveData);
                }
                this.resolve = null;
                this.reject = null;
                if (this._view) {
                    Frame.topmost()._removeView(this._view);
                }
            }
        }));
        if (options) {
            Object.keys(options).forEach(key => {
                this._options[key] = options[key];
            });
        }
    }

    public showPopup(source: any, view: any): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this._popup.setOutsideTouchable(this._options.outsideTouchble);
            this.reject = reject;
            this.resolve = resolve;
            // check the view argument
            if (view instanceof android.view.View) {
                this._popup.setContentView(view);
            } else if (view instanceof View) {
                Frame.topmost()._addView(view);
                this._stylePopup();
                this._view = view;
                this._popup.setContentView(view.android);
            } else if (typeof view === 'string' || view instanceof String) {
                // this is a template so use the builder to load the template
                this._stylePopup();
                const stack = new StackLayout();
                Frame.topmost()._addView(stack);
                stack.removeChildren(); // ensure nothing in the stack
                let filePath;
                let component;
                if (view.startsWith('~')) {
                    view = view.replace('~', '');
                    filePath = knownFolders.currentApp().path;
                    console.log(path.join(filePath, view));
                    component = Builder.load(path.join(filePath, view));
                    console.log(component);
                } else {
                    component = Builder.load(<any>view);
                }
                stack.addChild(component);
                this._view = stack;
                this._popup.setContentView(stack.android);
            }

            // check the source argument
            if (source instanceof android.view.View) {
                this._popup.showAsDropDown(source);
            } else if (source instanceof View) {
                this._popup.showAsDropDown(source.android);
            }
        });
    }

    public hidePopup(data?: any) {
        this.resolveData = data;
        this._popup.dismiss();
    }

    private _stylePopup() {
        let height;
        let width;
        switch (this._options.unit) {
            case 'px':
                if (this._options.height && !this._options.width) {
                    height = this._options.height;
                    width =
                        this._options.height *
                        (Screen.mainScreen.widthPixels / Screen.mainScreen.heightPixels);
                } else if (this._options.width && !this._options.height) {
                    height =
                        this._options.width *
                        (Screen.mainScreen.widthPixels / Screen.mainScreen.heightPixels);
                    width = this._options.width;
                } else {
                    width = this._options.width;
                    height = this._options.height;
                }
                break;
            case '%':
                if (this._options.height && !this._options.width) {
                    height = Screen.mainScreen.heightDIPs * (this._options.height / 100);
                    width =
                        height *
                        (Screen.mainScreen.widthPixels / Screen.mainScreen.heightPixels);
                } else if (this._options.width && !this._options.height) {
                    width = Screen.mainScreen.widthDIPs * (this._options.width / 100);
                    height =
                        width *
                        (Screen.mainScreen.widthPixels / Screen.mainScreen.heightPixels);
                } else {
                    width = Screen.mainScreen.widthDIPs * (this._options.width / 100);
                    height = Screen.mainScreen.heightDIPs * (this._options.height / 100);
                }
                break;
            default:
                if (this._options.height && !this._options.width) {
                    height = this._options.height;
                    width =
                        this._options.height *
                        (Screen.mainScreen.widthPixels / Screen.mainScreen.heightPixels);
                } else if (this._options.width && !this._options.height) {
                    height =
                        this._options.width *
                        (Screen.mainScreen.widthPixels / Screen.mainScreen.heightPixels);
                    width = this._options.width;
                } else {
                    width = this._options.width ? this._options.width : 400;
                    height = this._options.height ? this._options.height : 320;
                }
                break;
        }

        const shape = new android.graphics.drawable.GradientDrawable();
        shape.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);

        if (this._options && this._options.borderRadius) {
            shape.setCornerRadius(this._options.borderRadius);
        }
        if (this._options && this._options.backgroundColor) {
            shape.setColor(new Color(this._options.backgroundColor).android);
        }
        (this._popup as any).setBackgroundDrawable(shape);
        if (parseInt(Device.sdkVersion, 10) >= 21) {
            if (this._options.elevation) {
                (this._popup as any).setElevation(this._options.elevation);
            }
        }
        this._popup.setWidth(Utils.layout.toDevicePixels(width));
        this._popup.setHeight(Utils.layout.toDevicePixels(height));
    }
}
import { Color, Frame } from "@nativescript/core";
import { Configuration } from ".";
declare const TNSStripe;
export class PaymentSheet {

    static _init(context) { }

    static #getConfig(config?: Configuration) {
        let cfg = config || null;

        if (cfg.primaryButtonColor) {
            if (cfg.primaryButtonColor instanceof Color) {
                cfg.primaryButtonColor = cfg.primaryButtonColor.ios;
            } else if (typeof config.primaryButtonColor === 'string') {
                cfg.primaryButtonColor = new Color(config.primaryButtonColor).ios;
            }
        }

        return cfg;
    }

    static presentWithSetupIntent(setupIntent: string, config?: Configuration) {
        return new Promise<void>((resolve, reject) => {
            const rootVC = this.findTopViewController(Frame.topmost().currentPage.ios) || this._rootViewController;

            TNSStripe.presentWithSetupIntent(setupIntent, this.#getConfig(config), rootVC, (status, error) => {
                switch (status) {
                    case "completed":
                        resolve();
                        break;
                    case "cancelled":
                    case "canceled": // Stripe seems to return this misspelled variant
                        reject(new Error('cancelled'))
                        break;
                    case "error":
                        const err = new Error(error.localizedDescription);
                        (err as any).native = error;
                        reject(err)
                        break;
                    default:
                        /** 
                         * Note: previously this was returning just "unknown" - this has proven difficult to debug
                         * for developers implementing this in their app. So better to return something that includes
                         * original message.
                         */
                        reject(new Error(`unknown error: ${JSON.stringify(status)}`));
                        break;
                }
            });
        })
    }

    static presentWithPaymentIntent(paymentIntent: string, config?: Configuration) {
        return new Promise<void>((resolve, reject) => {
            const rootVC = this.findTopViewController(Frame.topmost().currentPage.ios) || this._rootViewController;
            TNSStripe.presentWithPaymentIntent(paymentIntent, this.#getConfig(config), rootVC, (status, error) => {
                switch (status) {
                    case "completed":
                        resolve();
                        break;
                    case "cancelled":
                        reject(new Error('cancelled'))
                        break;
                    case "error":
                        const err = new Error(error.localizedDescription);
                        (err as any).native = error;
                        reject(err)
                        break;
                    default:
                        reject(new Error('unknown'));
                        break;
                }
            });
        })
    }


    private static get _rootViewController(): UIViewController | undefined {
        const keyWindow = UIApplication.sharedApplication.keyWindow;
        return keyWindow != null ? keyWindow.rootViewController : undefined;
    }

    private static findTopViewController(root: UIViewController): UIViewController | undefined {
        const presented = root.presentedViewController;
        if (presented != null) {
            return this.findTopViewController(presented);
        }
        if (root instanceof UISplitViewController) {
            const last = root.viewControllers.lastObject;
            if (last == null) {
                return root;
            }
            return this.findTopViewController(last);
        } else if (root instanceof UINavigationController) {
            const top = root.topViewController;
            if (top == null) {
                return root;
            }
            return this.findTopViewController(top);
        } else if (root instanceof UITabBarController) {
            const selected = root.selectedViewController;
            if (selected == null) {
                return root;
            }
            return this.findTopViewController(selected);
        } else {
            return root;
        }
    }
}
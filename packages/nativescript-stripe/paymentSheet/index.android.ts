import { Color, Utils } from "@nativescript/core";
import { Configuration } from ".";

export class PaymentSheet {
    static #paymentSheet: com.stripe.android.paymentsheet.PaymentSheet;
    static #resolve
    static #reject
    static _init(context) {
        this.#paymentSheet = new com.stripe.android.paymentsheet.PaymentSheet(context, new com.stripe.android.paymentsheet.PaymentSheetResultCallback({
            onPaymentSheetResult(result: com.stripe.android.paymentsheet.PaymentSheetResult) {
                if (result instanceof com.stripe.android.paymentsheet.PaymentSheetResult.Completed) {
                    PaymentSheet.#resolve();
                } else if (result instanceof com.stripe.android.paymentsheet.PaymentSheetResult.Failed) {
                    const error = new Error(result.getError?.().getMessage?.());
                    (error as any).native = result.getError();
                    PaymentSheet.#reject(error);
                } else if (result instanceof com.stripe.android.paymentsheet.PaymentSheetResult.Canceled) {
                    PaymentSheet.#reject(new Error('cancelled'));
                } else {
                    PaymentSheet.#reject(new Error('unknown'));
                }
                PaymentSheet.#reject = undefined;
                PaymentSheet.#resolve = undefined;
            }
        }));
    }

    static #getConfig(config: Configuration) {
        const application = Utils.android.getApplication() as android.app.Application;
        const nativeConfig = new com.stripe.android.paymentsheet.PaymentSheet.Configuration.Builder(config.merchantDisplayName ?? application.getApplicationInfo().loadLabel(application.getPackageManager()).toString());

        if (config.customerConfig) {
            const customerConfiguration = new com.stripe.android.paymentsheet.PaymentSheet.CustomerConfiguration(
                config.customerConfig.id,
                config.customerConfig.ephemeralKey
            );
            nativeConfig.customer(customerConfiguration);
        }

        nativeConfig.allowsDelayedPaymentMethods(config.allowsDelayedPaymentMethods ?? false);
        if (config.googlePayConfig) {
            const googlePay = new com.stripe.android.paymentsheet.PaymentSheet.GooglePayConfiguration(
                config.googlePayConfig.environment === 'prod' ?
                    com.stripe.android.paymentsheet.PaymentSheet.GooglePayConfiguration.Environment.Production :
                    com.stripe.android.paymentsheet.PaymentSheet.GooglePayConfiguration.Environment.Test,
                config.googlePayConfig.countryCode,
                config.googlePayConfig.currencyCode ?? ''
            );
            nativeConfig.googlePay(googlePay);
        }

        if (config.primaryButtonColor) {
            if (config.primaryButtonColor instanceof Color) {
                nativeConfig.primaryButtonColor(
                    android.content.res.ColorStateList.valueOf(config.primaryButtonColor.android)
                );
            } else if (typeof config.primaryButtonColor === 'string') {
                nativeConfig.primaryButtonColor(
                    android.content.res.ColorStateList.valueOf(
                        new Color(config.primaryButtonColor).android
                    )
                );
            }
        }

        if (config.defaultBillingDetails) {
            const billing = new com.stripe.android.paymentsheet.PaymentSheet.BillingDetails.Builder();

            if (config.defaultBillingDetails.email) {
                billing.email(config.defaultBillingDetails.email)
            }

            if (config.defaultBillingDetails.name) {
                billing.name(config.defaultBillingDetails.name)
            }

            if (config.defaultBillingDetails.phone) {
                billing.phone(config.defaultBillingDetails.phone)
            }

            if (config.defaultBillingDetails.address) {
                const address = new com.stripe.android.paymentsheet.PaymentSheet.Address.Builder();
                if (config.defaultBillingDetails.address.city) {
                    address.city(config.defaultBillingDetails.address.city);
                }

                if (config.defaultBillingDetails.address.country) {
                    address.country(config.defaultBillingDetails.address.country);
                }

                if (config.defaultBillingDetails.address.line1) {
                    address.line1(config.defaultBillingDetails.address.line1);
                }

                if (config.defaultBillingDetails.address.line2) {
                    address.line2(config.defaultBillingDetails.address.line2);
                }

                if (config.defaultBillingDetails.address.postalCode) {
                    address.line2(config.defaultBillingDetails.address.postalCode);
                }

                if (config.defaultBillingDetails.address.state) {
                    address.line2(config.defaultBillingDetails.address.state);
                }

                billing.address(address.build());

            }

            nativeConfig.defaultBillingDetails(billing.build());

        }

        return nativeConfig;
    }

    static presentWithSetupIntent(setupIntent: string, config?: Configuration) {
        return new Promise((resolve, reject) => {
            this.#resolve = resolve;
            this.#reject = reject;
            if (config) {
                this.#paymentSheet.presentWithSetupIntent(setupIntent, this.#getConfig(config).build());
            } else {
                this.#paymentSheet.presentWithSetupIntent(setupIntent);
            }
        })
    }

    static presentWithPaymentIntent(paymentIntent: string, config?: Configuration) {
        return new Promise((resolve, reject) => {
            this.#resolve = resolve;
            this.#reject = reject;
            if (config) {
                this.#paymentSheet.presentWithPaymentIntent(paymentIntent, this.#getConfig(config).build());
            } else {
                this.#paymentSheet.presentWithPaymentIntent(paymentIntent);
            }
        })
    }
}
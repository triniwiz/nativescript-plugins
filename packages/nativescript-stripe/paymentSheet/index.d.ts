import { Color } from "@nativescript/core";

interface Configuration {
    merchantDisplayName?: string;
    customerConfig?: CustomerConfiguration;
    applePayConfig?: ApplePayConfiguration;
    allowsDelayedPaymentMethods: boolean;
    googlePayConfig?: GooglePayConfiguration;
    defaultBillingDetails?: DefaultBillingDetails;
    returnURL?: string;
    primaryButtonColor?: Color | string;
    style?: 'auto' | 'dark' | 'light';
}

interface CustomerConfiguration {
    id: string;
    ephemeralKey: string;
}

interface ApplePayConfiguration {
    merchantId: string;
    merchantCountryCode: string;
}

interface GooglePayConfiguration {
    environment: 'prod' | 'test';
    countryCode: string;
    currencyCode?: string;
}

interface DefaultBillingDetails {
    email?: string;
    name?: string;
    phone?: string;
    address?: DefaultBillingDetailsAddress;
}

interface DefaultBillingDetailsAddress {
    city?: string;
    country?: string;
    line1?: string;
    line2?: string;
    postalCode?: string;
    state?: string;
}

export class PaymentSheet {
    static _init(context);
    static presentWithSetupIntent(setupIntent: string, config: Configuration);
    static presentWithPaymentIntent(paymentIntent: string, config: Configuration);
}
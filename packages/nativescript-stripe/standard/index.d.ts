import { AndroidActivityResultEventData, Page } from "@nativescript/core";
import {
  IStripeStandardBackendAPI,
  IStripeStandardConfig,
  StripeStandardAddress,
  StripeStandardBillingAddressFields,
  StripeStandardPaymentListener,
  StripeStandardPaymentMethod,
  StripeStandardShippingAddressField,
  StripeStandardShippingMethod,
  StripeStandardShippingMethods,
  StripeStandardPaymentData,
  StripeStandardPaymentMethodType
} from "./common";
import { Address } from '../';

export {
  IStripeStandardBackendAPI,
  StripeStandardAddress,
  StripeStandardBillingAddressFields,
  StripeStandardPaymentListener,
  StripeStandardPaymentMethod,
  StripeStandardShippingAddressField,
  StripeStandardShippingMethod,
  StripeStandardShippingMethods,
  StripeStandardPaymentData,
  StripeStandardPaymentMethodType
}

export declare class StripeStandardConfig implements IStripeStandardConfig {
  backendAPI: IStripeStandardBackendAPI;
  publishableKey: string;
  appleMerchantID: string;
  companyName: string;
  requiredBillingAddressFields: StripeStandardBillingAddressFields;
  requiredShippingAddressFields: StripeStandardShippingAddressField[];
  createCardSources: any;
  allowedPaymentMethodTypes: StripeStandardPaymentMethodType[];
  private static _instance;
  private _paymentConfigurationInitiated;

  get native(): com.stripe.android.PaymentSessionConfig;

  get nativeBuilder(): com.stripe.android.PaymentSessionConfig.Builder;

  initPaymentConfiguration(): void;

  static get shared(): StripeStandardConfig;
}

export declare class StripeStandardCustomerSession {
  private native: com.stripe.android.CustomerSession;

  constructor();

  public getInstance(shouldPrefetchEphemeralKey: boolean = false): void;

  private static get context();
}

export declare class StripeStandardPaymentSession {
  customerSession: StripeStandardCustomerSession;
  currency: string;
  listener: StripeStandardPaymentListener;
  native: com.stripe.android.PaymentSession;
  selectedPaymentMethod: StripeStandardPaymentMethod;
  selectedShippingMethod: StripeStandardShippingMethod;
  shippingAddress: StripeStandardAddress;
  loading: boolean;
  paymentInProgress: boolean;
  _data: com.stripe.android.PaymentSessionData;
  private receiver;
  private _activityResultListener;

  constructor(_page: Page, amount: number, currency: string, listener: StripeStandardPaymentListener, prefilledAddress?: Address);

  _resultListener(args: AndroidActivityResultEventData): void;

  get amount(): number;

  get isPaymentReady(): boolean;

  requestPayment(): void;

  presentPaymentMethods(): void;

  presentShipping(): void;
}

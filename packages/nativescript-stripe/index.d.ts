import {
  BankAccountHolderType,
  BankAccountStatus,
  CaptureMethod,
  CardBrand,
  CardFunding,
  CardFundingType,
  CardMultilineWidgetBase,
  CreditCardViewBase,
  IAddress,
  IBankAccount,
  ICard,
  ICardParams,
  IPaymentMethodAddress,
  IPaymentMethodCard,
  IPaymentMethodCardChecks,
  IPaymentMethodCardNetworks,
  IPaymentMethodCardWallet,
  IPaymentMethodCardWalletAmexExpressCheckout,
  IPaymentMethodCardWalletApplePay,
  IPaymentMethodCardWalletMasterpass,
  IPaymentMethodCardWalletVisaCheckout,
  IPaymentMethodThreeDSecureUsage,
  ISource,
  ISourceCardDetails,
  ISourceKlarnaDetails,
  ISourceOwner,
  ISourceReceiver,
  ISourceRedirect,
  ISourceSEPADebitDetails,
  ISourceVerification,
  ISourceWeChatPayDetails,
  IToken,
  PaymentMethodCardCheckResult,
  PaymentMethodCardWalletType,
  IPaymentMethod,
  PaymentMethodType,
  SourceCard3DSecureStatus,
  SourceFlow,
  SourceRedirectStatus,
  SourceStatus,
  SourceType,
  SourceUsage,
  SourceVerificationStatus,
  IStripePaymentIntent,
  StripePaymentIntentStatus,
  IPaymentMethodCardWalletGooglePay,
  IPaymentMethodCardWalletSamsungPay
} from './common';

export {init} from './utils';

export declare class Address implements IAddress {
  readonly ios: any;
  readonly android: any;
  email: string;
  name: string;
  phone: string;
  country: string;
  postalCode: string;
  state: string;
  line1: string;
  line2: string;
  city: string;

  constructor();
}

export declare class Card implements ICard {
  readonly android: any;
  readonly ios: any;
  readonly name: string;
  readonly currency: string;
  readonly last4: string;
  readonly brand: CardBrand;
  readonly fingerprint: string;
  readonly funding: CardFunding;
  readonly country: string;
  readonly dynamicLast4: string;
  readonly native;

  get address(): Address;

  /**
   * Returns an image for a card given its brand.
   * The returned value can be used as [src] in an Image tag.
   */
  static cardImage(brand: CardBrand): any;
}

export declare class BankAccount implements IBankAccount {
  readonly accountHolderName: string;
  readonly accountHolderType: BankAccountHolderType;
  readonly bankName: string;
  readonly country: string;
  readonly currency: string;
  readonly fingerprint: string;
  readonly last4: string;
  readonly metadata: Readonly<{}>;
  readonly routingNumber: string;
  readonly status: BankAccountStatus;
}

export declare class Token implements IToken {
  bankAccount: BankAccount;
  card: Card;
  created: Date;
  id: string;
  ios: any;
  android: any;
  liveMode: boolean;
}

export declare class SourceCardDetails implements ISourceCardDetails {
  readonly android: any;
  readonly brand: CardBrand;
  readonly country: string;
  readonly expMonth: number;
  readonly expYear: number;
  readonly funding: CardFundingType;
  readonly ios: any;
  readonly isApplePayCard: boolean;
  readonly last4: string;
  readonly threeDSecureUsage: SourceCard3DSecureStatus;
  readonly dynamicLast4: string;
}

export declare class SourceKlarnaDetails implements ISourceKlarnaDetails {
  readonly clientToken: string;
  readonly purchaseCountry: string;
}

export declare class SourceOwner implements ISourceOwner {
  readonly address: Address;
  readonly email: string;
  readonly name: string;
  readonly phone: string;
  readonly verifiedAddress: Address;
  readonly verifiedEmail: string;
  readonly verifiedName: string;
  readonly verifiedPhone: string;
}

export declare class SourceReceiver implements ISourceReceiver {
  readonly address: string;
  readonly amountCharged: number;
  readonly amountReceived: number;
  readonly amountReturned: number;
  readonly apiResponse: Readonly<{}>;
}

export declare class SourceRedirect implements ISourceRedirect {
  readonly android: any;
  readonly apiResponse: Readonly<{}>;
  readonly ios: any;
  readonly returnURL: string;
  readonly status: SourceRedirectStatus;
  readonly url: string;
}

export declare class SourceSEPADebitDetails implements ISourceSEPADebitDetails {
  readonly android: any;
  readonly apiResponse: Readonly<{}>;
  readonly bankCode: string;
  readonly country: string;
  readonly fingerprint: string;
  readonly ios: any;
  readonly last4: string;
  readonly mandateReference: string;
  readonly mandateURL: string;
}

export declare class SourceVerification implements ISourceVerification {
  readonly apiResponse: Readonly<{}>;
  readonly attemptsRemaining: number;
  readonly status: SourceVerificationStatus;
}

export declare class SourceWeChatPayDetails implements ISourceWeChatPayDetails {
  readonly apiResponse: Readonly<{}>;
  readonly weChatAppURL: string;
}

export declare class Source implements ISource {
  readonly amount: number;
  readonly android: any;
  readonly apiResponse: Readonly<{}>;
  readonly cardDetails: SourceCardDetails;
  readonly clientSecret: string;
  readonly created: Date;
  readonly currency: string;
  readonly details: Readonly<{}>;
  readonly flow: SourceFlow;
  readonly id: string;
  readonly ios: any;
  readonly klarnaDetails: SourceKlarnaDetails;
  readonly liveMode: boolean;
  readonly metaData: Readonly<{}>;
  readonly owner: SourceOwner;
  readonly receiver: SourceReceiver;
  readonly redirect: SourceRedirect;
  readonly sepaDebitDetails: SourceSEPADebitDetails;
  readonly status: SourceStatus;
  readonly type: SourceType;
  readonly usage: SourceUsage;
  readonly verification: SourceVerification;
  readonly weChatPayDetails: SourceWeChatPayDetails;
}

export declare class Stripe {
  constructor(apiKey: string, stripeAccountId?: string);

  setStripeAccount(accountId: string): void;

  private get stripe();

  createCardToken(card: CardParams, cb: (error: Error, token: Token) => void): void;

  createSource(card: CardParams, cb: (error: Error, source: Source) => void): void;

  createPaymentMethod(card: CardParams, cb: (error: Error, pm: PaymentMethod) => void): void;

  retrievePaymentIntent(clientSecret: string, cb: (error: Error, pm: StripePaymentIntent) => void): void;

  confirmSetupIntent(paymentMethodId: string, clientSecret: string, cb: (error: Error, pm: StripeSetupIntent) => void): void;

  authenticateSetupIntent(clientSecret: string, returnUrl: string, cb: (error: Error, pm: StripeSetupIntent) => void): void;

  confirmPaymentIntent(piParams: StripePaymentIntentParams, cb: (error: Error, pm: StripePaymentIntent) => void): void;

  authenticatePaymentIntent(clientSecret: string, returnUrl: string, cb: (error: Error, pm: StripePaymentIntent) => void): void;
}

export declare class CardParams implements ICardParams {
  address: Address;
  readonly native: any
  name: string;
  currency: string;
}

export declare class PaymentMethodCardChecks implements IPaymentMethodCardChecks {
  readonly addressLine1Check: PaymentMethodCardCheckResult;
  readonly addressPostalCodeCheck: PaymentMethodCardCheckResult;
  readonly cvcCheck: PaymentMethodCardCheckResult;
}

export declare class PaymentMethodCardNetworks implements IPaymentMethodCardNetworks {
  readonly available: string[];
  readonly preferred: string;
}

export declare class PaymentMethodThreeDSecureUsage implements IPaymentMethodThreeDSecureUsage {
  readonly supported: boolean;
}

export declare class PaymentMethodAddress implements IPaymentMethodAddress {
  readonly city: string;
  readonly country: string;
  readonly line1: string;
  readonly line2: string;
  readonly postalCode: string;
  readonly state: string;
  readonly android: any;
}

export declare class PaymentMethodCardWalletMasterpass implements IPaymentMethodCardWalletMasterpass {
  readonly billingAddress: PaymentMethodAddress;
  readonly email: string;
  readonly name: string;
  readonly shippingAddress: PaymentMethodAddress;
  readonly android: com.stripe.android.model.wallets.Wallet.MasterpassWallet;
}

export declare class PaymentMethodCardWalletAmexExpressCheckout implements IPaymentMethodCardWalletAmexExpressCheckout {
  readonly dynamicLast4: string;
  readonly android: any;
}

export declare class PaymentMethodCardWalletVisaCheckout implements IPaymentMethodCardWalletVisaCheckout {
  readonly billingAddress: PaymentMethodAddress;
  readonly email: string;
  readonly name: string;
  readonly shippingAddress: PaymentMethodAddress;
  readonly dynamicLast4: string;
  readonly android: any;
}

export declare class PaymentMethodCardWalletApplePay implements IPaymentMethodCardWalletApplePay {
  readonly dynamicLast4: string;
  readonly android: any;
}

export declare class PaymentMethodCardWalletGooglePay implements IPaymentMethodCardWalletGooglePay {
  readonly dynamicLast4: string;
  readonly android: any;
}

export declare class PaymentMethodCardWalletSamsungPay implements IPaymentMethodCardWalletSamsungPay {
  readonly dynamicLast4: string;
  readonly android: any;
}

export declare class PaymentMethodCardWallet implements IPaymentMethodCardWallet {
  readonly masterpass: PaymentMethodCardWalletMasterpass;
  readonly type: PaymentMethodCardWalletType;
  readonly visaCheckout: PaymentMethodCardWalletVisaCheckout;
  readonly amex: PaymentMethodCardWalletAmexExpressCheckout;
  readonly applePay: PaymentMethodCardWalletApplePay;
  readonly googlePay: PaymentMethodCardWalletGooglePay;
  readonly samsungPay: PaymentMethodCardWalletSamsungPay;
}

export declare class PaymentMethodCard implements IPaymentMethodCard {
  readonly brand: CardBrand;
  readonly checks: PaymentMethodCardChecks;
  readonly country: string;
  readonly expMonth: number;
  readonly expYear: number;
  readonly fingerprint: string;
  readonly funding: string;
  readonly last4: string;
  readonly networks: PaymentMethodCardNetworks;
  readonly threeDSecureUsage: PaymentMethodThreeDSecureUsage;
  readonly wallet: PaymentMethodCardWallet;

  public static fromNative(paymentCard: any): PaymentMethodCard;
}

export declare class CreditCardView extends CreditCardViewBase {
  readonly android: com.stripe.android.view.CardInputWidget;
  readonly cardParams: CardParams;
}

export declare class CardMultilineWidget extends CardMultilineWidgetBase {
  readonly android: com.stripe.android.view.CardMultilineWidget;
  readonly card: CardParams;
}

export declare class PaymentMethod implements IPaymentMethod {
  readonly native: com.stripe.android.model.PaymentMethod;
  readonly id: string;
  readonly created: Date;
  readonly type: PaymentMethodType;
  readonly billingDetails: object;
  readonly card: PaymentMethodCard;
  readonly customerId: string;
  readonly metadata: object;
}

declare class StripeIntent {
  native: com.stripe.android.model.PaymentIntent | com.stripe.android.model.SetupIntent;

  get id(): string;

  get clientSecret(): string;

  get description(): string;

  get status(): StripePaymentIntentStatus;

  get requiresAction(): boolean;

  get isSuccess(): boolean;

  get requiresConfirmation(): boolean;

  get requiresCapture(): boolean;
}

export declare class StripePaymentIntent extends StripeIntent implements IStripePaymentIntent {
  native: com.stripe.android.model.PaymentIntent;

  static fromNative(native: com.stripe.android.model.PaymentIntent): StripePaymentIntent;

  static fromApi(json: any): StripePaymentIntent;

  get amount(): number;

  get created(): Date;

  get currency(): string;

  get captureMethod(): CaptureMethod;
}

export declare class StripePaymentIntentParams {
  clientSecret: any;
  paymentMethodId: string;
  sourceId: string;
  returnURL: string;

  get native(): com.stripe.android.model.ConfirmPaymentIntentParams;
}

export declare class StripeSetupIntentParams {
  native: com.stripe.android.model.ConfirmSetupIntentParams;

  constructor(paymentMethodId: string, clientSecret: string);
}

export declare class StripeSetupIntent extends StripeIntent {
  native: com.stripe.android.model.SetupIntent;

  static fromNative(native: com.stripe.android.model.SetupIntent): StripeSetupIntent;

  get paymentMethodId(): string;
}

import { View } from '@nativescript/core';
export declare class CreditCardViewBase extends View {
}
export declare class CardMultilineWidgetBase extends View {
}
export declare function toPaymentMethodCardChecks(check: any): PaymentMethodCardCheckResult;
export declare function toPaymentMethodCardWalletType(type: any): PaymentMethodCardWalletType;
export declare function toCardFundingType(type: any): CardFundingType;
export declare function toSourceCard3DSecureStatus(status: any): SourceCard3DSecureStatus;
export declare function toSourceVerificationStatus(status: any): SourceVerificationStatus;
export declare function toSourceRedirectStatus(redirectStatus: any): SourceRedirectStatus;
export declare function toSourceType(type: any): SourceType;
export declare function toSourceUsage(usage: any): SourceUsage;
export declare function toSourceFlow(flow: any): SourceFlow;
export declare function toSourceStatus(status: any): SourceStatus;
export declare enum PaymentMethodCardCheckResult {
    Pass = "pass",
    Failed = "failed",
    Unavailable = "unavailable",
    Unchecked = "unchecked",
    Unknown = "unknown"
}
export interface IPaymentMethodCardChecks {
    readonly addressLine1Check: PaymentMethodCardCheckResult;
    readonly addressPostalCodeCheck: PaymentMethodCardCheckResult;
    readonly cvcCheck: PaymentMethodCardCheckResult;
}
export interface IPaymentMethodCardNetworks {
    readonly available: string[];
    readonly preferred: string;
}
export interface IPaymentMethodThreeDSecureUsage {
    readonly supported: boolean;
}
export interface IPaymentMethodAddress {
    readonly city: string;
    readonly country: string;
    readonly line1: string;
    readonly line2: string;
    readonly postalCode: string;
    readonly state: string;
}
export interface IPaymentMethodCardWalletMasterpass {
    readonly billingAddress: IPaymentMethodAddress;
    readonly email: string;
    readonly name: string;
    readonly shippingAddress: IPaymentMethodAddress;
}
export declare enum PaymentMethodCardWalletType {
    AmexExpressCheckout = "amexExpressCheckout",
    ApplePay = "applePay",
    GooglePay = "googlePay",
    Masterpass = "masterpass",
    SamsungPay = "samsungPay",
    VisaCheckout = "visaCheckout",
    Unknown = "unknown"
}
export interface IPaymentMethodCardWalletVisaCheckout {
    readonly billingAddress: IPaymentMethodAddress;
    readonly email: string;
    readonly name: string;
    readonly shippingAddress: IPaymentMethodAddress;
    readonly dynamicLast4: string;
}
export interface IPaymentMethodCardWalletAmexExpressCheckout {
    readonly dynamicLast4: string;
}
export interface IPaymentMethodCardWalletApplePay {
    readonly dynamicLast4: string;
}
export interface IPaymentMethodCardWalletGooglePay {
    readonly dynamicLast4: string;
}
export interface IPaymentMethodCardWalletSamsungPay {
    readonly dynamicLast4: string;
}
export interface IPaymentMethodCardWallet {
    readonly masterpass: IPaymentMethodCardWalletMasterpass;
    readonly type: PaymentMethodCardWalletType;
    readonly visaCheckout: IPaymentMethodCardWalletVisaCheckout;
}
export interface IPaymentMethodCard {
    readonly brand: CardBrand;
    readonly checks: IPaymentMethodCardChecks;
    readonly country: string;
    readonly expMonth: number;
    readonly expYear: number;
    readonly fingerprint: string;
    readonly funding: string;
    readonly last4: string;
    readonly networks: IPaymentMethodCardNetworks;
    readonly threeDSecureUsage: IPaymentMethodThreeDSecureUsage;
    readonly wallet: IPaymentMethodCardWallet;
}
export interface IAddress {
    city: string;
    country: string;
    email: string;
    line1: string;
    line2: string;
    name: string;
    phone: string;
    postalCode: string;
    state: string;
    readonly ios: any;
    readonly android: any;
}
export declare function GetBrand(brand: any): CardBrand;
export declare enum CardBrand {
    AmericanExpress = "amex",
    Discover = "discover",
    JCB = "jcb",
    DinersClub = "diners",
    Visa = "visa",
    MasterCard = "mastercard",
    UnionPay = "unionpay",
    Unknown = "unknown"
}
export declare enum CardFunding {
    Credit = "credit",
    Debit = "debit",
    Prepaid = "prepaid",
    Unknown = "unknown"
}
export declare enum PaymentMethodType {
    Card = "card",
    CardPresent = "cardPresent",
    Fpx = "fpx",
    Ideal = "ideal",
    SepaDebit = "sepaDebit",
    AuBecsDebit = "auBecsDebit",
    BacsDebit = "bacsDebit",
    Sofort = "sofort",
    P24 = "p24",
    Bancontact = "bancontact",
    Giropay = "giropay",
    Eps = "eps",
    Oxxo = "oxxo",
    Alipay = "alipay",
    GrabPay = "grabPay",
    PayPal = "payPal",
    Unknown = "unknown"
}
export declare enum CaptureMethod {
    Automatic = "automatic",
    Manual = "manual"
}
export interface ICard {
    readonly native: any;
    readonly brand: CardBrand;
    readonly name: string;
    readonly address: IAddress;
    readonly currency: string;
    readonly last4: string;
    readonly dynamicLast4: string;
    readonly fingerprint: string;
    readonly funding: CardFunding;
    readonly country: string;
}
export interface ICardParams {
    readonly native: any;
    name: string;
    currency: string;
    address: IAddress;
}
export interface IToken {
    id: string;
    bankAccount: IBankAccount;
    card: ICard;
    created: Date;
    ios: any;
    android: any;
    liveMode: boolean;
}
export declare enum SourceFlow {
    Redirect = "redirect",
    Receiver = "receiver",
    CodeVerification = "codeVerification",
    None = "none"
}
export declare enum SourceStatus {
    Canceled = "canceled",
    Chargeable = "chargeable",
    Consumed = "consumed",
    Failed = "failed",
    Pending = "pending"
}
export declare enum CardFundingType {
    Debit = "debit",
    Credit = "credit",
    Prepaid = "prepaid",
    Other = "other"
}
export declare enum SourceCard3DSecureStatus {
    Required = "required",
    Optional = "optional",
    NotSupported = "notSupported",
    Recommended = "recommended",
    Unknown = "unknown"
}
export interface ISourceCardDetails {
    readonly brand: CardBrand;
    readonly country: string;
    readonly expMonth: number;
    readonly expYear: number;
    readonly funding: CardFundingType;
    readonly isApplePayCard: boolean;
    readonly last4: string;
    readonly threeDSecureUsage: SourceCard3DSecureStatus;
    readonly android: any;
    readonly ios: any;
    readonly dynamicLast4: string;
}
export interface ISourceKlarnaDetails {
    readonly clientToken: string;
    readonly purchaseCountry: string;
}
export interface ISourceOwner {
    readonly address: IAddress;
    readonly email: string;
    readonly name: string;
    readonly phone: string;
    readonly verifiedAddress: IAddress;
    readonly verifiedEmail: string;
    readonly verifiedName: string;
    readonly verifiedPhone: string;
}
export interface ISourceReceiver {
    readonly address: string;
    readonly amountCharged: number;
    readonly amountReceived: number;
    readonly amountReturned: number;
    readonly apiResponse: Readonly<{}>;
}
export declare enum SourceRedirectStatus {
    Pending = "pending",
    Succeeded = "succeeded",
    Failed = "failed",
    NotRequired = "notRequired",
    Unknown = "unknown"
}
export interface ISourceRedirect {
    readonly returnURL: string;
    readonly status: SourceRedirectStatus;
    readonly url: string;
    readonly apiResponse: Readonly<{}>;
    readonly ios: any;
    readonly android: any;
}
export interface ISourceSEPADebitDetails {
    readonly bankCode: string;
    readonly country: string;
    readonly fingerprint: string;
    readonly last4: string;
    readonly mandateReference: string;
    readonly mandateURL: string;
    readonly apiResponse: Readonly<{}>;
    readonly ios: any;
    readonly android: any;
}
export declare enum SourceType {
    Bancontact = "bancontact",
    Card = "card",
    Giropay = "giropay",
    IDEAL = "ideal",
    SEPADebit = "sepaDebit",
    Sofort = "sofor",
    ThreeDSecure = "threeDSecure",
    Alipay = "alipay",
    P24 = "p24",
    EPS = "eps",
    Multibanco = "multibanco",
    WeChatPay = "wechatPay",
    Klarna = "klarna",
    Unknown = "unknown"
}
export declare enum SourceUsage {
    Reusable = "reusable",
    SingleUse = "singleUser",
    Unknown = "unknown"
}
export declare enum SourceVerificationStatus {
    Pending = "pending",
    Succeeded = "succeeded",
    Failed = "failed",
    Unknown = "unknown"
}
export interface ISourceVerification {
    readonly attemptsRemaining: number;
    readonly status: SourceVerificationStatus;
    readonly apiResponse: Readonly<{}>;
}
export interface ISourceWeChatPayDetails {
    readonly weChatAppURL: string;
    readonly apiResponse: Readonly<{}>;
}
export interface ISource {
    /**in pennies*/
    readonly amount: number;
    readonly cardDetails: ISourceCardDetails;
    readonly clientSecret?: string;
    readonly created: Date;
    readonly currency?: string;
    readonly details: Readonly<{}>;
    readonly flow: SourceFlow;
    readonly klarnaDetails: ISourceKlarnaDetails;
    readonly metaData: Readonly<{}>;
    readonly owner: ISourceOwner;
    readonly receiver: ISourceReceiver;
    readonly redirect: ISourceRedirect;
    readonly sepaDebitDetails: ISourceSEPADebitDetails;
    readonly type: SourceType;
    readonly usage: SourceUsage;
    readonly verification: ISourceVerification;
    readonly weChatPayDetails: ISourceWeChatPayDetails;
    readonly apiResponse: Readonly<{}>;
    readonly id: string;
    readonly liveMode: boolean;
    readonly status: SourceStatus;
    readonly android: any;
    readonly ios: any;
}
export interface IPaymentMethod {
    readonly native: any;
    id: string;
    created: Date;
    type: PaymentMethodType;
    billingDetails: object;
    card: IPaymentMethodCard;
    customerId: string;
    metadata: object;
}
export interface IStripePaymentIntent {
    readonly native: any;
    id: string;
    clientSecret: string;
    amount: number;
    captureMethod: "manual" | "automatic";
    created: Date;
    currency: string;
    description: string;
    requiresAction: boolean;
    status: StripePaymentIntentStatus;
}
export declare const enum StripePaymentIntentStatus {
    RequiresPaymentMethod = "requires_payment_method",
    RequiresConfirmation = "requires_confirmation",
    RequiresAction = "requires_action",
    Processing = "processing",
    Succeeded = "succeeded",
    RequiresCapture = "requires_capture",
    Canceled = "canceled"
}
export declare const enum StripeRedirectState {
    NotStarted = 0,
    InProgress = 1,
    Cancelled = 2,
    Completed = 3
}
export declare enum BankAccountHolderType {
    Individual = "individual",
    Company = "company"
}
export declare enum BankAccountStatus {
    New = "new",
    Validated = "validated",
    Verified = "verified",
    VerificationFailed = "verificationFailed",
    Errored = "errored"
}
export interface IBankAccount {
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

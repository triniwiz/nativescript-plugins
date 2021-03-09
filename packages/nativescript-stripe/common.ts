import { booleanConverter, Property, View } from '@nativescript/core';

declare const com, STPPaymentMethodCardCheckResult, STPPaymentMethodCardWalletType, STPCardFundingType, STPSourceCard3DSecureStatus, STPSourceVerificationStatus, STPSourceRedirectStatus, STPSourceType, STPSourceUsage, STPSourceFlow, STPSourceStatus, STPCardBrand;

export class CreditCardViewBase extends View {
	public static numberChangedEvent = 'numberChanged';
	public static expMonthChangedEvent = 'expMonthChanged';
	public static expYearChangedEvent = 'expYearChanged';
	public static cvcChangedEvent = 'cvcChanged';
	public static postalCodeChangedEvent = 'postalCodeChanged';
	showPostalCode: boolean;
	isUSZipRequired: boolean;
}

export const showPostalCodeProperty = new Property<CreditCardViewBase, boolean>({
	name: 'showPostalCode',
	defaultValue: true,
	valueConverter: booleanConverter,
});

showPostalCodeProperty.register(CreditCardViewBase);

export const isUSZipRequiredProperty = new Property<CreditCardViewBase, boolean>({
	name: 'isUSZipRequired',
	defaultValue: false,
	valueConverter: booleanConverter,
});

isUSZipRequiredProperty.register(CreditCardViewBase);

export class CardMultilineWidgetBase extends CreditCardViewBase {}

export function toPaymentMethodCardChecks(check: any): PaymentMethodCardCheckResult {
	if (global.isIOS) {
		switch (check) {
			case STPPaymentMethodCardCheckResult.Pass:
				return PaymentMethodCardCheckResult.Pass;
			case STPPaymentMethodCardCheckResult.Failed:
				return PaymentMethodCardCheckResult.Failed;
			case STPPaymentMethodCardCheckResult.Unavailable:
				return PaymentMethodCardCheckResult.Unavailable;
			case STPPaymentMethodCardCheckResult.Unchecked:
				return PaymentMethodCardCheckResult.Unchecked;
			default:
				return PaymentMethodCardCheckResult.Unknown;
		}
	}

	/* https://stripe.com/docs/api/payment_methods/object#payment_method_object-card-checks */
	if (global.isAndroid) {
		switch (check) {
			case 'pass':
				return PaymentMethodCardCheckResult.Pass;
			case 'failed':
				return PaymentMethodCardCheckResult.Failed;
			case 'unavailable':
				return PaymentMethodCardCheckResult.Unavailable;
			case 'unchecked':
				return PaymentMethodCardCheckResult.Unchecked;
			default:
				return PaymentMethodCardCheckResult.Unknown;
		}
	}
}

export function toPaymentMethodCardWalletType(type: any): PaymentMethodCardWalletType {
	if (global.isIOS) {
		switch (type) {
			case STPPaymentMethodCardWalletType.AmexExpressCheckout:
				return PaymentMethodCardWalletType.AmexExpressCheckout;
			case STPPaymentMethodCardWalletType.ApplePay:
				return PaymentMethodCardWalletType.ApplePay;
			case STPPaymentMethodCardWalletType.GooglePay:
				return PaymentMethodCardWalletType.GooglePay;
			case STPPaymentMethodCardWalletType.Masterpass:
				return PaymentMethodCardWalletType.Masterpass;
			case STPPaymentMethodCardWalletType.SamsungPay:
				return PaymentMethodCardWalletType.SamsungPay;
			case STPPaymentMethodCardWalletType.VisaCheckout:
				return PaymentMethodCardWalletType.VisaCheckout;
			default:
				return PaymentMethodCardWalletType.Unknown;
		}
	}
}

export function toCardFundingType(type: any): CardFundingType {
	if (global.isIOS) {
		switch (type) {
			case STPCardFundingType.Credit:
				return CardFundingType.Credit;
			case STPCardFundingType.Debit:
				return CardFundingType.Debit;
			case STPCardFundingType.Prepaid:
				return CardFundingType.Prepaid;
			case STPCardFundingType.Other:
				return CardFundingType.Other;
		}
	}
	if (global.isAndroid) {
		switch (type) {
			case com.stripe.android.model.CardFunding.Credit:
				return CardFundingType.Credit;
			case com.stripe.android.model.CardFunding.Debit:
				return CardFundingType.Debit;
			case com.stripe.android.model.CardFunding.Prepaid:
				return CardFundingType.Prepaid;
			case com.stripe.android.model.CardFunding.Unknown:
				return CardFundingType.Other;
		}
	}
}

export function toSourceCard3DSecureStatus(status: any): SourceCard3DSecureStatus {
	if (global.isIOS) {
		switch (status) {
			case STPSourceCard3DSecureStatus.NotSupported:
				return SourceCard3DSecureStatus.NotSupported;
			case STPSourceCard3DSecureStatus.Optional:
				return SourceCard3DSecureStatus.Optional;
			case STPSourceCard3DSecureStatus.Recommended:
				return SourceCard3DSecureStatus.Recommended;
			case STPSourceCard3DSecureStatus.Required:
				return SourceCard3DSecureStatus.Required;
			case STPSourceCard3DSecureStatus.Unknown:
				return SourceCard3DSecureStatus.Unknown;
		}
	}

	if (global.isAndroid) {
		switch (status) {
			case com.stripe.android.model.SourceTypeModel.Card.ThreeDSecureStatus.NotSupported:
				return SourceCard3DSecureStatus.NotSupported;
			case com.stripe.android.model.SourceTypeModel.Card.ThreeDSecureStatus.Optional:
				return SourceCard3DSecureStatus.Optional;
			case com.stripe.android.model.SourceTypeModel.Card.ThreeDSecureStatus.Recommended:
				return SourceCard3DSecureStatus.Recommended;
			case com.stripe.android.model.SourceTypeModel.Card.ThreeDSecureStatus.Required:
				return SourceCard3DSecureStatus.Required;
			case com.stripe.android.model.SourceTypeModel.Card.ThreeDSecureStatus.Unknown:
				return SourceCard3DSecureStatus.Unknown;
		}
	}
}

export function toSourceVerificationStatus(status: any): SourceVerificationStatus {
	if (global.isIOS) {
		switch (status) {
			case STPSourceVerificationStatus.Failed:
				return SourceVerificationStatus.Failed;
			case STPSourceVerificationStatus.Pending:
				return SourceVerificationStatus.Pending;
			case STPSourceVerificationStatus.Succeeded:
				return SourceVerificationStatus.Succeeded;
			case STPSourceVerificationStatus.Unknown:
				return SourceVerificationStatus.Unknown;
		}
	}

	if (global.isAndroid) {
		switch (status) {
			case com.stripe.android.model.Source.CodeVerification.Status.Failed:
				return SourceVerificationStatus.Failed;
			case com.stripe.android.model.Source.CodeVerification.Status.Pending:
				return SourceVerificationStatus.Pending;
			case com.stripe.android.model.Source.CodeVerification.Status.Succeeded:
				return SourceVerificationStatus.Succeeded;
			default:
				return SourceVerificationStatus.Unknown;
		}
	}
}

export function toSourceRedirectStatus(redirectStatus: any): SourceRedirectStatus {
	if (global.isIOS) {
		switch (redirectStatus) {
			case STPSourceRedirectStatus.Failed:
				return SourceRedirectStatus.Failed;
			case STPSourceRedirectStatus.NotRequired:
				return SourceRedirectStatus.NotRequired;
			case STPSourceRedirectStatus.Pending:
				return SourceRedirectStatus.Pending;
			case STPSourceRedirectStatus.Succeeded:
				return SourceRedirectStatus.Succeeded;
			case STPSourceRedirectStatus.Unknown:
				return SourceRedirectStatus.Unknown;
		}
	}

	if (global.isAndroid) {
		switch (redirectStatus) {
			case com.stripe.android.model.Source.Redirect.Status.Failed:
				return SourceRedirectStatus.Failed;
			case com.stripe.android.model.Source.Redirect.Status.NotRequired:
				return SourceRedirectStatus.NotRequired;
			case com.stripe.android.model.Source.Redirect.Status.Pending:
				return SourceRedirectStatus.Pending;
			case com.stripe.android.model.Source.Redirect.Status.Succeeded:
				return SourceRedirectStatus.Succeeded;
			default:
				return SourceRedirectStatus.Unknown;
		}
	}
}

export function toSourceType(type: any): SourceType {
	if (global.isIOS) {
		switch (type) {
			case STPSourceType.Alipay:
				return SourceType.Alipay;
			case STPSourceType.Bancontact:
				return SourceType.Bancontact;
			case STPSourceType.Card:
				return SourceType.Card;
			case STPSourceType.EPS:
				return SourceType.EPS;
			case STPSourceType.Giropay:
				return SourceType.Giropay;
			case STPSourceType.IDEAL:
				return SourceType.IDEAL;
			case STPSourceType.Klarna:
				return SourceType.Klarna;
			case STPSourceType.Multibanco:
				return SourceType.Multibanco;
			case STPSourceType.P24:
				return SourceType.P24;
			case STPSourceType.SEPADebit:
				return SourceType.SEPADebit;
			case STPSourceType.Sofort:
				return SourceType.Sofort;
			case STPSourceType.ThreeDSecure:
				return SourceType.ThreeDSecure;
			case STPSourceType.Unknown:
				return SourceType.Unknown;
			case STPSourceType.WeChatPay:
				return SourceType.WeChatPay;
		}
	}

	if (global.isAndroid) {
		switch (type) {
			case com.stripe.android.model.Source.SourceType.ALIPAY:
				return SourceType.Alipay;
			case com.stripe.android.model.Source.SourceType.BANCONTACT:
				return SourceType.Bancontact;
			case com.stripe.android.model.Source.SourceType.CARD:
				return SourceType.Card;
			case com.stripe.android.model.Source.SourceType.EPS:
				return SourceType.EPS;
			case com.stripe.android.model.Source.SourceType.GIROPAY:
				return SourceType.Giropay;
			case com.stripe.android.model.Source.SourceType.IDEAL:
				return SourceType.IDEAL;
			case com.stripe.android.model.Source.SourceType.KLARNA:
				return SourceType.Klarna;
			case com.stripe.android.model.Source.SourceType.MULTIBANCO:
				return SourceType.Multibanco;
			case com.stripe.android.model.Source.SourceType.P24:
				return SourceType.P24;
			case com.stripe.android.model.Source.SourceType.SEPA_DEBIT:
				return SourceType.SEPADebit;
			case com.stripe.android.model.Source.SourceType.SOFORT:
				return SourceType.Sofort;
			case com.stripe.android.model.Source.SourceType.THREE_D_SECURE:
				return SourceType.ThreeDSecure;
			case com.stripe.android.model.Source.SourceType.UNKNOWN:
				return SourceType.Unknown;
			case com.stripe.android.model.Source.SourceType.WECHAT:
				return SourceType.WeChatPay;
		}
	}
}

export function toSourceUsage(usage: any): SourceUsage {
	if (global.isIOS) {
		switch (usage) {
			case STPSourceUsage.Reusable:
				return SourceUsage.Reusable;
			case STPSourceUsage.SingleUse:
				return SourceUsage.SingleUse;
			case STPSourceUsage.Unknown:
				return SourceUsage.Unknown;
		}
	}

	if (global.isAndroid) {
		switch (usage) {
			case com.stripe.android.model.Source.Usage.Reusable:
				return SourceUsage.Reusable;
			case com.stripe.android.model.Source.Usage.SingleUse:
				return SourceUsage.SingleUse;
			default:
				return SourceUsage.Unknown;
		}
	}
}

export function toSourceFlow(flow: any) {
	if (global.isIOS) {
		switch (flow) {
			case STPSourceFlow.None:
				return SourceFlow.None;
			case STPSourceFlow.CodeVerification:
				return SourceFlow.CodeVerification;
			case STPSourceFlow.Receiver:
				return SourceFlow.Receiver;
			case STPSourceFlow.Redirect:
				return SourceFlow.Redirect;
		}
	}

	if (global.isAndroid) {
		switch (flow) {
			case com.stripe.android.model.Source.Flow.None:
				return SourceFlow.None;
			case com.stripe.android.model.Source.Flow.CodeVerification:
				return SourceFlow.CodeVerification;
			case com.stripe.android.model.Source.Flow.Receiver:
				return SourceFlow.Receiver;
			case com.stripe.android.model.Source.Flow.Redirect:
				return SourceFlow.Redirect;
		}
	}
}

export function toSourceStatus(status: any) {
	if (global.isIOS) {
		switch (status) {
			case STPSourceStatus.Canceled:
				return SourceStatus.Canceled;
			case STPSourceStatus.Chargeable:
				return SourceStatus.Chargeable;
			case STPSourceStatus.Consumed:
				return SourceStatus.Consumed;
			case STPSourceStatus.Failed:
				return SourceStatus.Failed;
			case STPSourceStatus.Pending:
				return SourceStatus.Pending;
		}
	}

	if (global.isAndroid) {
		switch (status) {
			case com.stripe.android.model.Source.Status.Canceled:
				return SourceStatus.Canceled;
			case com.stripe.android.model.Source.Status.Chargeable:
				return SourceStatus.Chargeable;
			case com.stripe.android.model.Source.Status.Consumed:
				return SourceStatus.Consumed;
			case com.stripe.android.model.Source.Status.Failed:
				return SourceStatus.Failed;
			case com.stripe.android.model.Source.Status.Pending:
				return SourceStatus.Pending;
		}
	}
}

export enum PaymentMethodCardCheckResult {
	Pass = 'pass',

	Failed = 'failed',

	Unavailable = 'unavailable',

	Unchecked = 'unchecked',

	Unknown = 'unknown',
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

export enum PaymentMethodCardWalletType {
	AmexExpressCheckout = 'amexExpressCheckout',

	ApplePay = 'applePay',

	GooglePay = 'googlePay',

	Masterpass = 'masterpass',

	SamsungPay = 'samsungPay',

	VisaCheckout = 'visaCheckout',

	Unknown = 'unknown',
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

export function GetBrand(brand) {
	if (global.isAndroid) {
		switch (brand) {
			case com.stripe.android.model.CardBrand.AmericanExpress:
				return CardBrand.AmericanExpress;
			case com.stripe.android.model.CardBrand.Discover:
				return CardBrand.Discover;
			case com.stripe.android.model.CardBrand.JCB:
				return CardBrand.JCB;
			case com.stripe.android.model.CardBrand.DinersClub:
				return CardBrand.DinersClub;
			case com.stripe.android.model.CardBrand.Visa:
				return CardBrand.Visa;
			case com.stripe.android.model.CardBrand.MasterCard:
				return CardBrand.MasterCard;
			case com.stripe.android.model.CardBrand.UnionPay:
				return CardBrand.UnionPay;
			default:
				return CardBrand.Unknown;
		}
	}

	if (global.isIOS) {
		switch (brand) {
			case STPCardBrand.Amex:
				return CardBrand.AmericanExpress;
			case STPCardBrand.Discover:
				return CardBrand.Discover;
			case STPCardBrand.JCB:
				return CardBrand.JCB;
			case STPCardBrand.DinersClub:
				return CardBrand.DinersClub;
			case STPCardBrand.Visa:
				return CardBrand.Visa;
			case STPCardBrand.MasterCard:
				return CardBrand.MasterCard;
			case STPCardBrand.UnionPay:
				return CardBrand.UnionPay;
			default:
				return CardBrand.Unknown;
		}
	}
}

export enum CardBrand {
	AmericanExpress = 'amex',
	Discover = 'discover',
	JCB = 'jcb',
	DinersClub = 'diners',
	Visa = 'visa',
	MasterCard = 'mastercard',
	UnionPay = 'unionpay',
	Unknown = 'unknown',
}

export enum CardFunding {
	Credit = 'credit',
	Debit = 'debit',
	Prepaid = 'prepaid',
	Unknown = 'unknown',
}

export enum PaymentMethodType {
	Card = 'card',
	CardPresent = 'cardPresent',
	Fpx = 'fpx',
	Ideal = 'ideal',
	SepaDebit = 'sepaDebit',
	AuBecsDebit = 'auBecsDebit',
	BacsDebit = 'bacsDebit',
	Sofort = 'sofort',
	P24 = 'p24',
	Bancontact = 'bancontact',
	Giropay = 'giropay',
	Eps = 'eps',
	Oxxo = 'oxxo',
	Alipay = 'alipay',
	GrabPay = 'grabPay',
	PayPal = 'payPal',
	Unknown = 'unknown',
}

export enum CaptureMethod {
	Automatic = 'automatic',
	Manual = 'manual',
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
	number: string;
	expMonth: number;
	expYear: number;
	cvc: string;
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

export enum SourceFlow {
	Redirect = 'redirect',
	Receiver = 'receiver',
	CodeVerification = 'codeVerification',
	None = 'none',
}

export enum SourceStatus {
	Canceled = 'canceled',
	Chargeable = 'chargeable',
	Consumed = 'consumed',
	Failed = 'failed',
	Pending = 'pending',
}

export enum CardFundingType {
	Debit = 'debit',

	Credit = 'credit',

	Prepaid = 'prepaid',

	Other = 'other',
}

export enum SourceCard3DSecureStatus {
	Required = 'required',

	Optional = 'optional',

	NotSupported = 'notSupported',

	Recommended = 'recommended',

	Unknown = 'unknown',
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

export enum SourceRedirectStatus {
	Pending = 'pending',

	Succeeded = 'succeeded',

	Failed = 'failed',

	NotRequired = 'notRequired',

	Unknown = 'unknown',
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

export enum SourceType {
	Bancontact = 'bancontact',

	Card = 'card',

	Giropay = 'giropay',

	IDEAL = 'ideal',

	SEPADebit = 'sepaDebit',

	Sofort = 'sofor',

	ThreeDSecure = 'threeDSecure',

	Alipay = 'alipay',

	P24 = 'p24',

	EPS = 'eps',

	Multibanco = 'multibanco',

	WeChatPay = 'wechatPay',

	Klarna = 'klarna',

	Unknown = 'unknown',
}

export enum SourceUsage {
	Reusable = 'reusable',

	SingleUse = 'singleUser',

	Unknown = 'unknown',
}

export enum SourceVerificationStatus {
	Pending = 'pending',

	Succeeded = 'succeeded',

	Failed = 'failed',

	Unknown = 'unknown',
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
	amount: number; // in pennies
	captureMethod: 'manual' | 'automatic';
	created: Date;
	currency: string;
	description: string;
	requiresAction: boolean; // true if status == RequiresAction
	status: StripePaymentIntentStatus;
}

export const enum StripePaymentIntentStatus {
	RequiresPaymentMethod = 'requires_payment_method',
	RequiresConfirmation = 'requires_confirmation',
	RequiresAction = 'requires_action',
	Processing = 'processing',
	Succeeded = 'succeeded',
	RequiresCapture = 'requires_capture',
	Canceled = 'canceled',
}

export const enum StripeRedirectState {
	NotStarted = 0,
	InProgress = 1,
	Cancelled = 2,
	Completed = 3,
}

export enum BankAccountHolderType {
	Individual = 'individual',

	Company = 'company',
}

export enum BankAccountStatus {
	New = 'new',

	Validated = 'validated',

	Verified = 'verified',

	VerificationFailed = 'verificationFailed',

	Errored = 'errored',
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

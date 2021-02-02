import { Frame, Utils, View } from '@nativescript/core';
import { BankAccountHolderType, BankAccountStatus, CardBrand, CardFunding, CreditCardViewBase, IAddress, IBankAccount, ICard, ICardParams, IToken, IPaymentMethod, PaymentMethodType, IStripePaymentIntent, StripePaymentIntentStatus, GetBrand } from './common';
import { PaymentMethodCard } from './paymentMethod';
import { Source } from './source';
import { toJSON } from './utils';

export { init } from './utils';

export class Address implements IAddress {
	readonly ios: STPAddress;
	readonly android: any;

	private constructor(card: STPAddress) {
		this.ios = card;
	}

	public static fromNative(card: STPAddress): Address {
		return new Address(card);
	}

	set country(value: string) {
		this.ios.country = value;
	}

	get country(): string {
		return this.ios.country;
	}

	set postalCode(value: string) {
		this.ios.postalCode = value;
	}

	get postalCode(): string {
		return this.ios.postalCode;
	}

	set state(value: string) {
		this.ios.state = value;
	}

	get state(): string {
		return this.ios.state;
	}

	set line1(value: string) {
		this.ios.line1 = value;
	}

	get line1(): string {
		return this.ios.line1;
	}

	set line2(value: string) {
		this.ios.line2 = value;
	}

	get line2(): string {
		return this.ios.line2;
	}

	set city(value: string) {
		this.ios.city = value;
	}

	get city(): string {
		return this.ios.city;
	}

	get email(): string {
		return this.ios.email;
	}

	set email(value: string) {
		this.ios.email = value;
	}

	get name(): string {
		return this.ios.name;
	}

	set name(value: string) {
		this.ios.name = value;
	}

	get phone(): string {
		return this.ios.phone;
	}

	set phone(value: string) {
		this.ios.phone = value;
	}
}

function toBankHolderType(account: STPBankAccountHolderType): BankAccountHolderType {
	switch (account) {
		case STPBankAccountHolderType.Company:
			return BankAccountHolderType.Company;
		case STPBankAccountHolderType.Individual:
			return BankAccountHolderType.Individual;
	}
}

function toBankStatus(status: STPBankAccountStatus): BankAccountStatus {
	switch (status) {
		case STPBankAccountStatus.Errored:
			return BankAccountStatus.Errored;
		case STPBankAccountStatus.New:
			return BankAccountStatus.New;
		case STPBankAccountStatus.Validated:
			return BankAccountStatus.Validated;
		case STPBankAccountStatus.VerificationFailed:
			return BankAccountStatus.VerificationFailed;
		case STPBankAccountStatus.Verified:
			return BankAccountStatus.Verified;
	}
}

export class BankAccount implements IBankAccount {
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

	private constructor(bankAccount: STPBankAccount) {
		this.accountHolderName = bankAccount.accountHolderName;
		this.accountHolderType = toBankHolderType(bankAccount.accountHolderType);
		this.bankName = bankAccount.bankName;
		this.country = bankAccount.country;
		this.fingerprint = bankAccount.fingerprint;
		this.last4 = bankAccount.last4;
		this.routingNumber = bankAccount.routingNumber;
		this.status = toBankStatus(bankAccount.status);
	}

	public static fromNative(bankAccount: STPBankAccount) {
		if (bankAccount) {
			return new BankAccount(bankAccount);
		}
		return null;
	}
}

export class Token implements IToken {
	readonly android: any;
	readonly bankAccount: BankAccount;
	readonly card: Card;
	readonly created: Date;
	readonly id: string;
	readonly ios: any;
	readonly liveMode: boolean;

	private constructor(token: STPToken) {
		this.id = token.tokenId;
		this.bankAccount = BankAccount.fromNative(token.bankAccount);
		this.card = Card.fromNative(token.card);
		this.created = new Date(token.created);
		this.liveMode = token.livemode;
		this.ios = token;
	}

	public static fromNative(token: STPToken) {
		return new Token(token);
	}
}

export class Stripe {
	constructor(apiKey: string) {
		STPPaymentConfiguration.sharedConfiguration.publishableKey = apiKey;
	}

	setStripeAccount(accountId: string) {
		STPAPIClient.sharedClient.stripeAccount = accountId;
		STPPaymentConfiguration.sharedConfiguration.stripeAccount = accountId;
	}

	createCardToken(card: CardParams, cb: (error: Error, token: IToken) => void): void {
		if (!card) {
			if (typeof cb === 'function') {
				cb(new Error('Invalid card'), null);
			}
			return;
		}
		const apiClient = STPAPIClient.sharedClient;
		apiClient.createTokenWithCardCompletion(
			card.native,
			callback(cb, (token: STPToken) => Token.fromNative(token))
		);
	}

	createSource(card: CardParams, cb: (error: Error, source: Source) => void): void {
		if (!card) {
			if (typeof cb === 'function') {
				cb(new Error('Invalid card'), null);
			}
			return;
		}

		const sourceParams = STPSourceParams.cardParamsWithCard(card.native);

		const apiClient = STPAPIClient.sharedClient;
		apiClient.createSourceWithParamsCompletion(
			sourceParams,
			callback(cb, (source: STPSource) => Source.fromNative(source))
		);
	}

	createPaymentMethod(card: CardParams, cb: (error: Error, pm: PaymentMethod) => void): void {
		if (!card) {
			if (typeof cb === 'function') {
				cb(new Error('Invalid card'), null);
			}
			return;
		}
		const apiClient = STPAPIClient.sharedClient;
		const cardParams = STPPaymentMethodCardParams.alloc().initWithCardSourceParams(card.native);
		const billing = STPPaymentMethodBillingDetails.alloc().init();
		billing.address = STPPaymentMethodAddress.alloc().initWithAddress(card.address.ios);
		const params = STPPaymentMethodParams.paramsWithCardBillingDetailsMetadata(cardParams, billing, null);
		apiClient.createPaymentMethodWithParamsCompletion(
			params,
			callback(cb, (pm) => PaymentMethod.fromNative(pm))
		);
	}

	retrievePaymentIntent(clientSecret: string, cb: (error: Error, pm: StripePaymentIntent) => void): void {
		const apiClient = STPAPIClient.sharedClient;
		apiClient.retrievePaymentIntentWithClientSecretCompletion(
			clientSecret,
			callback(cb, (pi) => StripePaymentIntent.fromNative(pi))
		);
	}

	confirmSetupIntent(paymentMethodId: string, clientSecret: string, cb: (error: Error, pm: StripeSetupIntent) => void): void {
		STPPaymentHandler.sharedHandler.confirmSetupIntentWithAuthenticationContextCompletion(new StripeSetupIntentParams(paymentMethodId, clientSecret).native, this._getAuthentificationContext(), (status: STPPaymentHandlerActionStatus, si: STPSetupIntent, error: NSError) => {
			if (error) {
				cb(new Error(error.toLocaleString()), null);
			} else {
				cb(null, StripeSetupIntent.fromNative(si));
			}
		});
	}

	authenticateSetupIntent(clientSecret: string, returnUrl: string, cb: (error: Error, pm: StripeSetupIntent) => void): void {
		STPPaymentHandler.sharedHandler.handleNextActionForSetupIntentWithAuthenticationContextReturnURLCompletion(clientSecret, this._getAuthentificationContext(), returnUrl, (status: STPPaymentHandlerActionStatus, pi: STPSetupIntent, error: NSError) => {
			if (error) {
				cb(new Error(error.toLocaleString()), null);
			} else {
				cb(null, StripeSetupIntent.fromNative(pi));
			}
		});
	}

	confirmPaymentIntent(params: StripePaymentIntentParams, cb: (error: Error, pm: StripePaymentIntent) => void): void {
		STPPaymentHandler.sharedHandler.confirmPaymentWithAuthenticationContextCompletion(params.native, this._getAuthentificationContext(), (status: STPPaymentHandlerActionStatus, pi: STPPaymentIntent, error: NSError) => {
			if (error) {
				cb(new Error(error.toLocaleString()), null);
			} else {
				cb(null, StripePaymentIntent.fromNative(pi));
			}
		});
	}

	authenticatePaymentIntent(clientSecret: string, returnUrl: string, cb: (error: Error, pm: StripePaymentIntent) => void): void {
		STPPaymentHandler.sharedHandler.handleNextActionForPaymentWithAuthenticationContextReturnURLCompletion(clientSecret, this._getAuthentificationContext(), returnUrl, (status: STPPaymentHandlerActionStatus, pi: STPPaymentIntent, error: NSError) => {
			if (error) {
				cb(new Error(error.toLocaleString()), null);
			} else {
				cb(null, StripePaymentIntent.fromNative(pi));
			}
		});
	}

	private get _rootViewController(): UIViewController | undefined {
		const keyWindow = UIApplication.sharedApplication.keyWindow;
		return keyWindow != null ? keyWindow.rootViewController : undefined;
	}

	/*
	 *. Private
	 */

	private _getAuthentificationContext(): STPAuthenticationContext {
		const rootVC = Frame.topmost().currentPage.ios || this._rootViewController;
		return STPAuthenticationContextImp.initWithViewController(Utils.ios.getVisibleViewController(rootVC));
	}
}

@NativeClass
class STPAuthenticationContextImp extends NSObject implements STPAuthenticationContext {
	static ObjCProtocols = [STPAuthenticationContext];
	private _vc: UIViewController;
	public static initWithViewController(vc: UIViewController) {
		const delegate = <STPAuthenticationContextImp>STPAuthenticationContextImp.new();
		delegate._vc = vc;
		return delegate;
	}
	authenticationPresentingViewController(): UIViewController {
		return this._vc;
	}
}

function callback(cb: (error: Error, value: any) => void, cvt: (value: any) => any): (value: any, err: NSError) => void {
	return (value: any, error: NSError) => {
		if (!error) {
			if (typeof cb === 'function') {
				cb(null, cvt(value));
			}
		} else {
			if (typeof cb === 'function') {
				cb(new Error(error.toLocaleString()), null);
			}
		}
	};
}

export class Card implements ICard {
	readonly native: STPCard;
	readonly brand: CardBrand;
	readonly name: string;
	readonly address: Address;
	readonly currency: string;
	readonly last4: string;
	readonly dynamicLast4: string;
	readonly fingerprint: string;
	readonly funding: CardFunding;
	readonly country: string;

	private constructor(card: STPCard) {
		this.native = card;
		this.brand = GetBrand(card.brand);
		this.name = card.name;
		this.address = Address.fromNative(card.address);
		this.currency = card.currency;
		this.last4 = card.last4;
		this.dynamicLast4 = card.dynamicLast4;
		this.funding = CardFunding.Unknown;
		this.country = this.native.country;
	}

	public static fromNative(card: STPCard): Card {
		return new Card(card);
	}

	/**
	 * Returns an image for a card given its brand.
	 * The returned value can be used as [src] in an Image tag.
	 */
	static cardImage(brand: CardBrand): any {
		let nativeBrand: STPCardBrand;
		switch (brand) {
			case CardBrand.AmericanExpress:
				nativeBrand = STPCardBrand.Amex;
				break;
			case CardBrand.DinersClub:
				nativeBrand = STPCardBrand.DinersClub;
				break;
			case CardBrand.Discover:
				nativeBrand = STPCardBrand.Discover;
				break;
			case CardBrand.JCB:
				nativeBrand = STPCardBrand.JCB;
				break;
			case CardBrand.MasterCard:
				nativeBrand = STPCardBrand.Mastercard;
				break;
			case CardBrand.UnionPay:
				nativeBrand = STPCardBrand.Amex;
				break;
			case CardBrand.Visa:
				nativeBrand = STPCardBrand.Visa;
				break;
			default:
				nativeBrand = STPCardBrand.Unknown;
				break;
		}
		return STPImageLibrary.brandImageForCardBrand(nativeBrand);
	}
}

export class CardParams implements ICardParams {
	private _cardParams: STPCardParams;

	constructor();
	constructor(params: STPCardParams);
	constructor(number: string, expMonth: number, expYear: number, cvc: string);
	constructor(...args) {
		if (args[0] instanceof STPCardParams) {
			this._cardParams = args[0];
		} else if (args.length === 4) {
			this._cardParams = STPCardParams.alloc().init();
			this._cardParams.number = args[0];
			this._cardParams.expMonth = args[1];
			this._cardParams.expYear = args[2];
			this._cardParams.cvc = args[3];
		} else {
			this._cardParams = STPCardParams.alloc().init();
		}
	}

	public static fromNative(card: STPCardParams): CardParams {
		return new CardParams(card);
	}

	get number() {
		return this._cardParams.number;
	}

	set number(number: string) {
		this._cardParams.number = number;
	}

	get expMonth() {
		return this._cardParams.expMonth;
	}

	set expMonth(month: number) {
		this._cardParams.expMonth = month;
	}

	get expYear() {
		return this._cardParams.expYear;
	}

	set expYear(year: number) {
		this._cardParams.expYear = year;
	}

	get cvc() {
		return this._cardParams.cvc;
	}

	set cvc(cvc: string) {
		this._cardParams.cvc = cvc;
	}

	get address(): Address {
		return Address.fromNative(this._cardParams.address);
	}

	set address(address: Address) {
		this._cardParams.address = address.ios;
	}

	get native(): STPCardParams {
		return this._cardParams;
	}

	get name(): string {
		return this.native.name;
	}

	set name(value: string) {
		this._cardParams.name = value;
	}

	get currency(): string {
		return this.native.currency;
	}

	set currency(value: string) {
		this._cardParams.currency = value;
	}

	get last4(): string {
		return this._cardParams.last4();
	}
}

export class CreditCardView extends CreditCardViewBase {
	nativeView: STPPaymentCardTextField;

	public createNativeView(): STPPaymentCardTextField {
		return STPPaymentCardTextField.alloc().initWithFrame(CGRectMake(10, 10, 150, 44));
	}

	onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
		const nativeView = this.nativeView;
		if (nativeView) {
			const width = Utils.layout.getMeasureSpecSize(widthMeasureSpec);
			const height = Utils.layout.getMeasureSpecSize(heightMeasureSpec);
			this.setMeasuredDimension(width, height);
		}
	}

	/**
	 * Initializes properties/listeners of the native view.
	 */
	initNativeView(): void {
		// When nativeView is tapped we get the owning JS object through this field.
		(<any>this.nativeView).owner = this;
		super.initNativeView();
	}

	/**
	 * Clean up references to the native view and resets nativeView to its original state.
	 * If you have changed nativeView in some other way except through setNative callbacks
	 * you have a chance here to revert it back to its original state
	 * so that it could be reused later.
	 */

	disposeNativeView(): void {
		(<any>this.nativeView).owner = null;
		super.disposeNativeView();
	}

	get cardParams(): CardParams {
		const cardParams = STPCardParams.alloc().init();
		cardParams.number = this.nativeView.cardParams.number;
		cardParams.expMonth = this.nativeView.cardParams.expMonth;
		cardParams.expYear = this.nativeView.cardParams.expYear;
		cardParams.cvc = this.nativeView.cardParams.cvc;
		return CardParams.fromNative(cardParams);
	}
}

export class PaymentMethod implements IPaymentMethod {
	metadata: object;
	native: STPPaymentMethod;

	static fromNative(native: STPPaymentMethod): PaymentMethod {
		const pm = new PaymentMethod();
		pm.native = native;
		return pm;
	}

	get id(): string {
		return this.native.stripeId;
	}

	get created(): Date {
		return new Date(this.native.created);
	}

	get type(): PaymentMethodType {
		switch (this.native.type) {
			case STPPaymentMethodType.Alipay:
				return PaymentMethodType.Alipay;
			case STPPaymentMethodType.AUBECSDebit:
				return PaymentMethodType.AuBecsDebit;
			case STPPaymentMethodType.BacsDebit:
				return PaymentMethodType.BacsDebit;
			case STPPaymentMethodType.Bancontact:
				return PaymentMethodType.Bancontact;
			case STPPaymentMethodType.Card:
				return PaymentMethodType.Card;
			case STPPaymentMethodType.CardPresent:
				return PaymentMethodType.CardPresent;
			case STPPaymentMethodType.EPS:
				return PaymentMethodType.Eps;
			case STPPaymentMethodType.FPX:
				return PaymentMethodType.Fpx;
			case STPPaymentMethodType.Giropay:
				return PaymentMethodType.Giropay;
			case STPPaymentMethodType.GrabPay:
				return PaymentMethodType.GrabPay;
			case STPPaymentMethodType.iDEAL:
				return PaymentMethodType.Ideal;
			/*case STPPaymentMethodType.Oxxo:
        return PaymentMethodType.Oxxo;*/
			case STPPaymentMethodType.Przelewy24:
				return PaymentMethodType.P24;
			case STPPaymentMethodType.SEPADebit:
				return PaymentMethodType.SepaDebit;
			case STPPaymentMethodType.Sofort:
				return PaymentMethodType.Sofort;
			default:
				return PaymentMethodType.Unknown;
		}
	}

	get billingDetails(): object {
		return this.native.billingDetails;
	}

	get card(): PaymentMethodCard {
		return PaymentMethodCard.fromNative(this.native.card as any);
	}

	get customerId(): string {
		return this.native.customerId;
	}
}

class StripeIntent {
	native: STPSetupIntent | STPPaymentIntent;

	get created(): Date {
		return new Date(this.native.created);
	}

	get clientSecret(): string {
		return this.native.clientSecret;
	}

	get status(): StripePaymentIntentStatus {
		switch (this.native.status) {
			case STPPaymentIntentStatus.Canceled:
				return StripePaymentIntentStatus.Canceled;
			case STPPaymentIntentStatus.Processing:
				return StripePaymentIntentStatus.Processing;
			case STPPaymentIntentStatus.RequiresAction:
				return StripePaymentIntentStatus.RequiresAction;
			case STPPaymentIntentStatus.RequiresCapture:
				return StripePaymentIntentStatus.RequiresCapture;
			case STPPaymentIntentStatus.RequiresConfirmation:
				return StripePaymentIntentStatus.RequiresConfirmation;
			case STPPaymentIntentStatus.RequiresPaymentMethod:
				return StripePaymentIntentStatus.RequiresPaymentMethod;
			case STPPaymentIntentStatus.Succeeded:
				return StripePaymentIntentStatus.Succeeded;
		}
		return null;
	}

	get requiresAction(): boolean {
		return this.native.status === STPPaymentIntentStatus.RequiresAction;
	}

	get isSuccess(): boolean {
		return this.status === StripePaymentIntentStatus.Succeeded;
	}

	get requiresConfirmation(): boolean {
		return this.status === StripePaymentIntentStatus.RequiresConfirmation;
	}

	get requiresCapture(): boolean {
		return this.status === StripePaymentIntentStatus.RequiresCapture;
	}

	get description(): string {
		return this.native.description;
	}
}

export class StripePaymentIntent extends StripeIntent implements IStripePaymentIntent {
	native: STPPaymentIntent;

	static fromNative(native: STPPaymentIntent): StripePaymentIntent {
		const pi = new StripePaymentIntent();
		pi.native = native;
		return pi;
	}

	static fromApi(json: any): StripePaymentIntent {
		const native = STPPaymentIntent.decodedObjectFromAPIResponse(json);
		return StripePaymentIntent.fromNative(native);
	}

	get id(): string {
		return this.native.stripeId;
	}

	get amount(): number {
		return this.native.amount;
	}

	get currency(): string {
		return this.native.currency;
	}

	get captureMethod(): 'manual' | 'automatic' {
		switch (this.native.captureMethod) {
			case STPPaymentIntentCaptureMethod.Automatic:
				return 'automatic';
			case STPPaymentIntentCaptureMethod.Manual:
				return 'manual';
		}
		return null;
	}
}

export class StripePaymentIntentParams {
	clientSecret: string;
	paymentMethodParams: any;
	paymentMethodId: string;
	sourceParams: any;
	sourceId: string;
	returnURL: string; // a URL that opens your app

	get native(): STPPaymentIntentParams {
		const n = STPPaymentIntentParams.alloc().initWithClientSecret(this.clientSecret);
		n.paymentMethodParams = this.paymentMethodParams;
		n.paymentMethodId = this.paymentMethodId;
		n.sourceParams = this.sourceParams;
		n.sourceId = this.sourceId;
		n.returnURL = this.returnURL;
		return n;
	}
}

export class StripeSetupIntent extends StripeIntent {
	native: STPSetupIntent;

	static fromNative(native: STPSetupIntent): StripeSetupIntent {
		const si = new StripeSetupIntent();
		si.native = native;
		return si;
	}

	get id(): string {
		return this.native.stripeID;
	}

	get paymentMethodId(): string {
		return this.native.paymentMethodID;
	}
}

export class StripeSetupIntentParams {
	native: STPSetupIntentConfirmParams;

	constructor(paymentMethodId: string, clientSecret: string) {
		this.native = STPSetupIntentConfirmParams.alloc().initWithClientSecret(clientSecret);
		this.native.paymentMethodID = paymentMethodId;
	}
}

export class StripeRedirectSession {
	native: STPRedirectContext;
	readonly state: StripeRedirectState;

	constructor(paymentIntent: StripePaymentIntent, cb: (error: Error, clientSecret: string) => void) {
		this.native = STPRedirectContext.alloc().initWithPaymentIntentCompletion(
			paymentIntent.native,
			callback(cb, (clientSecret) => clientSecret)
		);
	}

	startRedirectFlow(view: View): void {
		this.native.startRedirectFlowFromViewController(view.viewController);
	}

	cancel(): void {
		this.native.cancel();
	}
}

export const enum StripeRedirectState {
	NotStarted = 0,
	InProgress = 1,
	Cancelled = 2,
	Completed = 3,
}

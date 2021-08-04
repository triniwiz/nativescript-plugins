import { Page } from '@nativescript/core';
import { CardBrand, GetBrand } from '../common';
import { IStripeStandardConfig, StripeStandardAddress, StripeStandardPaymentListener, StripeStandardPaymentMethod, StripeStandardShippingAddressField, StripeStandardShippingMethod, StripeStandardShippingMethods, StripeStandardBillingAddressFields, IStripeStandardBackendAPI, StripeStandardPaymentData, StripeStandardPaymentMethodType } from './common';

export { IStripeStandardBackendAPI, StripeStandardAddress, StripeStandardBillingAddressFields, StripeStandardPaymentListener, StripeStandardPaymentMethod, StripeStandardShippingAddressField, StripeStandardShippingMethod, StripeStandardShippingMethods, StripeStandardPaymentData, StripeStandardPaymentMethodType };

export class StripeStandardConfig implements IStripeStandardConfig {
	enableCardScanning: boolean = false;
	appleMerchantID: string;
	backendAPI: IStripeStandardBackendAPI;
	companyName: string;
	createCardSources;
	publishableKey: string;
	requiredBillingAddressFields: StripeStandardBillingAddressFields;
	requiredShippingAddressFields: StripeStandardShippingAddressField[];
	allowedPaymentMethodTypes: StripeStandardPaymentMethodType[] = [StripeStandardPaymentMethodType.Card, StripeStandardPaymentMethodType.ApplePay];
	stripeAccountId: string;
	private static _instance: StripeStandardConfig;
	get native(): STPPaymentConfiguration {
		// getter gives client a chance to set properties before using.
		if (!this.publishableKey) throw new Error('publishableKey must be set');
		let config = STPPaymentConfiguration.sharedConfiguration;
		STPAPIClient.sharedClient.publishableKey = this.publishableKey;
		config.appleMerchantIdentifier = this.appleMerchantID;
		config.requiredBillingAddressFields = this.requiredBillingAddressFields as any;
		config.cardScanningEnabled = this.enableCardScanning;
		if (this.stripeAccountId){
			STPAPIClient.sharedClient.stripeAccount = this.stripeAccountId;
		}
		if (this.requiredShippingAddressFields && this.requiredShippingAddressFields.length > 0) {
			let fields = new NSMutableSet<STPContactField>({ capacity: 4 });
			this.requiredShippingAddressFields.forEach((f) => {
				switch (f) {
					case StripeStandardShippingAddressField.Name:
						fields.addObject(STPContactField.name);
						break;
					case StripeStandardShippingAddressField.PostalAddress:
						fields.addObject(STPContactField.postalAddress);
						break;
					case StripeStandardShippingAddressField.Phone:
						fields.addObject(STPContactField.phoneNumber);
						break;
					case StripeStandardShippingAddressField.Email:
						fields.addObject(STPContactField.emailAddress);
						break;
				}
			});
			config.requiredShippingAddressFields = fields;
		} else {
			config.requiredShippingAddressFields = undefined;
		}
		config.companyName = this.companyName;
		return config;
	}

	static get shared(): StripeStandardConfig {
		if (!this._instance) {
			this._instance = new StripeStandardConfig();
		}
		return this._instance;
	}
}

export class StripeStandardCustomerSession {
	native: STPCustomerContext;

	constructor() {
		this.native = STPCustomerContext.alloc().initWithKeyProvider(StripeKeyProvider.new());
	}
}

@NativeClass
@ObjCClass(STPCustomerEphemeralKeyProvider)
class StripeKeyProvider extends NSObject implements STPCustomerEphemeralKeyProvider {
	static new(): StripeKeyProvider {
		return <StripeKeyProvider>super.new();
	}

	createCustomerKeyWithAPIVersionCompletion(apiVersion: string, completion: (p1: NSDictionary<any, any>, p2: NSError) => void): void {
		StripeStandardConfig.shared.backendAPI
			.createCustomerKey(apiVersion)
			.then((key) => {
				completion(key, null);
			})
			.catch((e) => {
				completion(null, createError('CustomerKey', 500, e));
			});
	}
}

export class StripeStandardPaymentSession {
	native: STPPaymentContext;
	private delegate: StripePaymentDelegate; // Necessary to keep delegate in memory
	_paymentInProgress: boolean;

	constructor(private page: Page, customerSession: StripeStandardCustomerSession, amount: number, currency: string, listener?: StripeStandardPaymentListener, prefilledAddress?: StripeStandardAddress) {
		StripeStandardConfig.shared.allowedPaymentMethodTypes.forEach((type) => {
			switch (type) {
				case StripeStandardPaymentMethodType.ApplePay:
					StripeStandardConfig.shared.native.applePayEnabled = true;
					break;
				case StripeStandardPaymentMethodType.Fpx:
					StripeStandardConfig.shared.native.fpxEnabled = true;
					break;
			}
		});
		this.native = STPPaymentContext.alloc().initWithCustomerContextConfigurationTheme(customerSession.native, StripeStandardConfig.shared.native, STPTheme.defaultTheme);
		this.native.prefilledInformation = STPUserInformation.alloc().init();
		if (prefilledAddress) {
			const addr = STPAddress.alloc().init();
			addr.name = prefilledAddress.name;
			addr.line1 = prefilledAddress.line1;
			addr.line2 = prefilledAddress.line2;
			addr.city = prefilledAddress.city;
			addr.state = prefilledAddress.state;
			addr.country = prefilledAddress.country;
			addr.postalCode = prefilledAddress.postalCode;
			addr.phone = prefilledAddress.phone;
			addr.email = prefilledAddress.email;
			this.native.prefilledInformation.shippingAddress = addr;
		}
		this.native.paymentAmount = amount;
		this.native.paymentCurrency = currency;
		if (listener) {
			this.delegate = StripePaymentDelegate.create(this, listener);
			this.native.delegate = this.delegate;
		}
	}

	/** Is the Stripe native component loading? */
	get loading(): boolean {
		return this.native.loading;
	}

	get isPaymentReady(): boolean {
		return this.native.selectedPaymentOption != null;
	}

	get paymentInProgress(): boolean {
		return this._paymentInProgress;
	}

	/** Total amount (including shipping) in pennies. */
	get amount(): number {
		return this.native.paymentAmount;
	}

	get selectedPaymentMethod(): StripeStandardPaymentMethod {
		return createPaymentMethod(this.native);
	}

	get selectedShippingMethod(): StripeStandardShippingMethod {
		return createShippingMethod(this.native);
	}

	get shippingAddress(): StripeStandardAddress {
		return createAddress(this.native.shippingAddress);
	}

	/**
	 * Makes sure the hostViewController is set.
	 * For reasons TBD, setting hostViewController in an ngOnInit() results
	 * in infinite recursion. So to make life easier for clients, set the controller here.
	 */
	private ensureHostViewController(): void {
		if (!this.native.hostViewController) this.native.hostViewController = this.page.ios;
	}

	requestPayment() {
		this.ensureHostViewController();
		this._paymentInProgress = true;
		this.native.requestPayment();
	}

	presentPaymentMethods(): void {
		this.ensureHostViewController();
		this.native.presentPaymentOptionsViewController();
	}

	presentShipping(): void {
		this.ensureHostViewController();
		this.native.presentShippingViewController();
	}
}

@NativeClass
@ObjCClass(STPPaymentContextDelegate)
class StripePaymentDelegate extends NSObject implements STPPaymentContextDelegate {

	static create(parent: StripeStandardPaymentSession, listener: StripeStandardPaymentListener): StripePaymentDelegate {
		let self = <StripePaymentDelegate>super.new();
		self.parent = parent;
		self.listener = listener;
		return self;
	}

	private parent: StripeStandardPaymentSession;
	private listener: StripeStandardPaymentListener;

	paymentContextDidChange(paymentContext: STPPaymentContext): void {
		let data = {
			isReadyToCharge: paymentContext.selectedPaymentOption != null,
			paymentMethod: createPaymentMethod(paymentContext),
			shippingInfo: createShippingMethod(paymentContext),
			shippingAddress: createAddress(paymentContext.shippingAddress),
		};
		this.listener.onPaymentDataChanged(data);
	}

	paymentContextDidCreatePaymentResultCompletion(paymentContext: STPPaymentContext, paymentResult: STPPaymentResult, completion: (p1: STPPaymentStatus, p2: NSError) => void): void {
		StripeStandardConfig.shared.backendAPI
			.capturePayment(paymentResult.paymentMethod.stripeId, paymentContext.paymentAmount, createShippingMethod(paymentContext), createAddress(paymentContext.shippingAddress))
			.then((value) => {
				completion(STPPaymentStatus.Success, null);
			})
			.catch((e) => {
				completion(null, createError('PaymentError', 100, e));
			});
	}

	paymentContextDidFailToLoadWithError(paymentContext: STPPaymentContext, error: NSError): void {
		this.listener.onError(error.code, error.localizedDescription);
	}

	paymentContextDidFinishWithError(paymentContext: STPPaymentContext, status: STPPaymentStatus, error: NSError): void {
		this.parent._paymentInProgress = false;
		switch (status) {
			case STPPaymentStatus.Error:
				if (this.listener.onError) this.listener.onError(error.code, error.localizedDescription);
				break;
			case STPPaymentStatus.Success:
				if (this.listener.onPaymentSuccess) this.listener.onPaymentSuccess();
				break;
			case STPPaymentStatus.UserCancellation:
				if (this.listener.onUserCancelled) this.listener.onUserCancelled();
				break;
		}
	}

	paymentContextDidUpdateShippingAddressCompletion(_paymentContext: STPPaymentContext, address: STPAddress, completion: (p1: STPShippingStatus, p2: NSError, p3: NSArray<PKShippingMethod>, p4: PKShippingMethod) => void): void {
		const jsAddress = createAddress(address);
		const methods = this.listener.provideShippingMethods(jsAddress);
		const isValid = this.listener.provideShippingInformationValidation(jsAddress);
		const errorMessage = this.listener.provideShippingInformationValidationErrorMessage(jsAddress);
		if (!methods) {
			completion(STPShippingStatus.Invalid, createError('ShippingError', 120, 'No shipping methods'), null, null);
		} else if (!isValid) {
			completion(STPShippingStatus.Invalid, createError('ShippingError', 123, errorMessage), null, null);
		} else {
			let sh = <NSMutableArray<PKShippingMethod>>NSMutableArray.alloc().init();
			methods.shippingMethods.forEach((m) => sh.addObject(createPKShippingMethod(m)));
			completion(STPShippingStatus.Valid, null, sh, createPKShippingMethod(methods.selectedShippingMethod));
		}
	}
}

function createError(domain: string, code: number, error: string): NSError {
	let userInfo = <NSMutableDictionary<string, any>>NSMutableDictionary.alloc().init();
	userInfo.setValueForKey(error, NSLocalizedDescriptionKey);
	return new NSError({
		domain: domain,
		code: code,
		userInfo: userInfo,
	});
}

function createPaymentMethod(paymentContext: STPPaymentContext): StripeStandardPaymentMethod {
	if (!paymentContext.selectedPaymentOption) return undefined;
	const pmt = paymentContext.selectedPaymentOption;
	if (pmt.isKindOfClass(STPApplePayPaymentOption)) {
		return createPaymentMethodFromApplePay(pmt as any);
	} else if (pmt) {
		const pm = <STPPaymentMethod>(<unknown>pmt);
		if (pm.type === STPPaymentMethodType.Card) {
			return createPaymentMethodFromCard(pm);
		} else if (pm.type === STPPaymentMethodType.FPX) {
			return createPaymentMethodFromFpx(pm as any);
		}
	}
	return { label: 'Error (103)', image: undefined, templateImage: undefined };
}

function createPaymentMethodFromApplePay(applePay: STPApplePayPaymentOption): StripeStandardPaymentMethod {
	return {
		label: applePay.label,
		image: applePay.image,
		templateImage: applePay.templateImage,
		type: StripeStandardPaymentMethodType.ApplePay,
		stripeID: undefined,
		brand: undefined,
	};
}

function createPaymentMethodFromFpx(method: STPPaymentMethodParams): StripeStandardPaymentMethod {
	const brand = method.fpx.bank;
	const name = STPFPXBank.stringFrom(brand);
	const code = STPFPXBank.bankCodeFrom(brand, false);

	return {
		label: method.label,
		image: STPImageLibrary.brandImageForFPXBankBrand(brand),
		templateImage: undefined,
		type: StripeStandardPaymentMethodType.Fpx,
		stripeID: undefined,
		brand: code,
	};
}

function createPaymentMethodFromCard(pmt: STPPaymentMethod): StripeStandardPaymentMethod {
	let image = null;
	switch (GetBrand(pmt.card.brand)) {
		case CardBrand.AmericanExpress:
			image = STPImageLibrary.amexCardImage();
			break;
		case CardBrand.DinersClub:
			image = STPImageLibrary.dinersClubCardImage();
			break;
		case CardBrand.Discover:
			image = STPImageLibrary.discoverCardImage();
			break;
		case CardBrand.JCB:
			image = STPImageLibrary.jcbCardImage();
			break;
		case CardBrand.MasterCard:
			image = STPImageLibrary.mastercardCardImage();
			break;
		case CardBrand.UnionPay:
			image = STPImageLibrary.unionPayCardImage();
			break;
		case CardBrand.Visa:
			image = STPImageLibrary.visaCardImage();
			break;
		default:
			image = STPImageLibrary.unknownCardCardImage();
			break;
	}
	return {
		label: pmt.label,
		image,
		templateImage: pmt.templateImage,
		type: StripeStandardPaymentMethodType.Card,
		stripeID: pmt.stripeId,
		brand: GetBrand(pmt.card.brand),
	};
}

function createShippingMethod(paymentContext: STPPaymentContext): StripeStandardShippingMethod {
	if (!paymentContext.selectedShippingMethod) return undefined;
	return {
		currency: paymentContext.paymentCurrency,
		amount: paymentContext.selectedShippingMethod.amount.doubleValue * 100,
		detail: paymentContext.selectedShippingMethod.detail,
		label: paymentContext.selectedShippingMethod.label,
		identifier: paymentContext.selectedShippingMethod.identifier,
	};
}

function createPKShippingMethod(method: StripeStandardShippingMethod): PKShippingMethod {
	let m = PKShippingMethod.alloc().init();
	m.amount = NSDecimalNumber.alloc().initWithDouble(method.amount / 100);
	m.detail = method.detail;
	m.label = method.label;
	m.identifier = method.identifier;
	return m;
}

function createAddress(address: STPAddress): StripeStandardAddress {
	if (!address) return undefined;
	return {
		name: address.name,
		line1: address.line1,
		line2: address.line2,
		city: address.city,
		state: address.state,
		postalCode: address.postalCode,
		country: address.country,
		phone: address.phone,
		email: address.email,
	};
}

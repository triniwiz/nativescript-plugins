export interface IStripeStandardBackendAPI {
	/**
	 * Calls the client-implemented Stripe backend to retrieve a Customer Key
	 * (ephemeral key) for this session.
	 *
	 * @param apiVersion The API Version to send to the backend.
	 * @returns a Promise with a response containing the ephemeral key as
	 *     returned by the Stripe backend. For example, response.content.toJSON().
	 *     Any error should be reported as a string that can be displayed to the user.
	 */
	createCustomerKey(apiVersion?: string): Promise<any>;

	/**
	 * Calls the client-implemented Stripe backend to complete a charge.
	 *
	 * @param sourceID The Stripe Source ID to send to the backend.
	 * @param amount  The amount to charge, in pennies.
	 * @param shippingMethod The shipping method to use. Not set if StripeConfig.shared().requiredShippingAddressFields.length is 0
	 * @param shippingAddress The address to ship to. Not set if StripeConfig.shared().requiredShippingAddressFields.length is 0
	 * @returns a Promise that resolves on success and rejects on failure.
	 *     Any error should be reported as a string that can be displayed to the user.
	 */
	capturePayment(sourceID: string, amount: number, shippingMethod?: StripeStandardShippingMethod, shippingAddress?: StripeStandardAddress): Promise<void>;
}

export enum StripeStandardPaymentMethodType {
	Card = 'card',
	ApplePay = 'applePay',
	Fpx = 'fpx',
}

export interface StripeStandardPaymentListener {
	onCommunicatingStateChanged(isCommunicating: boolean): void;
	onPaymentDataChanged(data: StripeStandardPaymentData): void;
	onPaymentSuccess(): void;
	onUserCancelled(): void;
	onError(errorCode: number, message: string): void;
	provideShippingMethods(address: StripeStandardAddress): StripeStandardShippingMethods;
	/** Is shipping to the address valid? */
	provideShippingInformationValidation(address: StripeStandardAddress): boolean;
	/** If not valid, an error describing the issue with the address */
	provideShippingInformationValidationErrorMessage(address: StripeStandardAddress): string;
}

export interface StripeStandardPaymentMethod {
	image: any; // a value that can be used as [src] in an Image tag
	label: string;
	templateImage: any;
	/** The method's type (undefined if unsupported type) */
	/**
	 *  @default { @link StripeStandardPaymentMethodType.Card }
	 */
	type?: StripeStandardPaymentMethodType;
	/** Stripe's ID for the selected payment method (undefined if ApplePay) */
	stripeID?: string;
	/** Brand of the payment card (undefined if not a card) */
	brand?: string;
}

export interface StripeStandardShippingMethod {
	amount: number; // in pennies
	detail: string;
	label: string;
	identifier: string;
	currency: string;
}

export interface StripeStandardShippingMethods {
	/** The shipping methods available for the address. */
	shippingMethods: StripeStandardShippingMethod[];
	/** The pre-selected (default) shipping method for the address. */
	selectedShippingMethod: StripeStandardShippingMethod;
}

export interface StripeStandardAddress {
	name?: string;
	line1?: string;
	line2?: string;
	city?: string;
	state?: string;
	postalCode?: string;
	country?: string;
	phone?: string;
	email?: string;
}

export const enum StripeStandardBillingAddressFields {
	None = 0,
	Zip = 1,
	Full = 2,
	Name = 3,
}

/** Available shipping address fields. */
export const enum StripeStandardShippingAddressField {
	Name = 'name',
	PostalAddress = 'address',
	Phone = 'phone',
	Email = 'email',
}

export interface StripeStandardPaymentData {
	/** Has user entered all necessary information to allow a charge to proceed? */
	isReadyToCharge: boolean;
	/** The selected payment method, if any. */
	paymentMethod: StripeStandardPaymentMethod;
	/** The selected shipping method, if any. */
	shippingInfo: StripeStandardShippingMethod;
	/** The selected shipping address, if any. */
	shippingAddress: StripeStandardAddress;
}

export interface IStripeStandardConfig {
	backendAPI: IStripeStandardBackendAPI;

	// The Publishable Key found at https://dashboard.stripe.com/account/apikeys
	// Use "Test Publishable Key" (it looks like pk_test_abcdef) during development.
	/** The Stripe Publishable Key. Required. */
	publishableKey: string;

	// To enable Apple Pay, follow the instructions at https://stripe.com/docs/mobile/apple-pay
	// to create an Apple Merchant ID (it looks like merchant.com.yourappname).
	/** Apple Merchange ID used by Apple Pay. Default: No Apple Pay */
	appleMerchantID: string;

	/** Company name to display during payment flows. Used by Apple Pay Default: iOS application name */
	companyName: string;

	/** Billing address fields the user must fill out. Used by Apple Pay. Default: None */
	requiredBillingAddressFields: StripeStandardBillingAddressFields;

	/** Shipping address fields the user must fill out. If empty, shipping will not be requested. Default: none */
	requiredShippingAddressFields: StripeStandardShippingAddressField[];

	/** If true, a credit card added in the UI will be added as a Source to the Customer. */
	createCardSources;

	/** Enable card entry by scanning only support on iOS atm */
	enableCardScanning: boolean;

	stripeAccountId: string;
}

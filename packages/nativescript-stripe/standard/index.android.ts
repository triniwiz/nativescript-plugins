import { AndroidActivityResultEventData, AndroidApplication, Application, Page, Utils } from '@nativescript/core';
import { IStripeStandardBackendAPI, IStripeStandardConfig, StripeStandardAddress, StripeStandardBillingAddressFields, StripeStandardPaymentListener, StripeStandardPaymentMethod, StripeStandardPaymentMethodType, StripeStandardShippingAddressField, StripeStandardShippingMethod, StripeStandardShippingMethods } from './common';
import { Address } from '../';
import { GetBrand } from '../common';
export { IStripeStandardBackendAPI, StripeStandardAddress, StripeStandardBillingAddressFields, StripeStandardPaymentListener, StripeStandardPaymentMethod, StripeStandardShippingAddressField, StripeStandardShippingMethod, StripeStandardPaymentMethodType };

export class StripeStandardConfig implements IStripeStandardConfig {
	backendAPI: IStripeStandardBackendAPI;
	publishableKey: string;
	appleMerchantID: string;
	companyName: string;
	requiredBillingAddressFields: StripeStandardBillingAddressFields = StripeStandardBillingAddressFields.None;
	requiredShippingAddressFields: StripeStandardShippingAddressField[];
	allowedPaymentMethodTypes: StripeStandardPaymentMethodType[] = [StripeStandardPaymentMethodType.Card];
	createCardSources: any;
	enableCardScanning: boolean = false;
	stripeAccountId: string;
	private static _instance: any;
	private _paymentConfigurationInitiated: boolean = false;

	get native(): com.stripe.android.PaymentSessionConfig {
		// getter gives client a chance to set properties before using.
		return this.nativeBuilder.build();
	}

	get nativeBuilder(): com.stripe.android.PaymentSessionConfig.Builder {
		this.initPaymentConfiguration();
		const shippingRequired = this.requiredShippingAddressFields && this.requiredShippingAddressFields.length !== 0;
		let optionalFields = [];
		if (shippingRequired) {
			if (this.requiredShippingAddressFields.indexOf(StripeStandardShippingAddressField.PostalAddress) < 0) {
				optionalFields.unshift((com as any).stripe.android.view.ShippingInfoWidget.CustomizableShippingField.Line1);
				optionalFields.unshift((com as any).stripe.android.view.ShippingInfoWidget.CustomizableShippingField.Line2);
				optionalFields.unshift((com as any).stripe.android.view.ShippingInfoWidget.CustomizableShippingField.City);
				optionalFields.unshift((com as any).stripe.android.view.ShippingInfoWidget.CustomizableShippingField.State);
				optionalFields.unshift((com as any).stripe.android.view.ShippingInfoWidget.CustomizableShippingField.PostalCode);
			}
			if (this.requiredShippingAddressFields.indexOf(StripeStandardShippingAddressField.Phone) < 0) {
				optionalFields.unshift((com as any).stripe.android.view.ShippingInfoWidget.CustomizableShippingField.Phone);
			}
		}

		return new com.stripe.android.PaymentSessionConfig.Builder().setShippingInfoRequired(shippingRequired).setShippingMethodsRequired(shippingRequired).setOptionalShippingInfoFields(optionalFields);
	}

	initPaymentConfiguration(): void {
		if (!this.publishableKey) throw new Error('publishableKey must be set');
		if (this._paymentConfigurationInitiated) return;
		com.stripe.android.PaymentConfiguration.init(Utils.ad.getApplicationContext(), this.publishableKey, this.stripeAccountId || null);
		this._paymentConfigurationInitiated = true;
	}

	static get shared(): StripeStandardConfig {
		if (!this._instance) {
			this._instance = new StripeStandardConfig();
		}
		return this._instance;
	}
}

export class StripeStandardCustomerSession {
	readonly native: com.stripe.android.CustomerSession;

	constructor(shouldPrefetchEphemeralKey: boolean = false) {
		StripeStandardConfig.shared.initPaymentConfiguration();
		com.stripe.android.CustomerSession.initCustomerSession(StripeStandardCustomerSession.context, createKeyProvider(), shouldPrefetchEphemeralKey);
		this.native = com.stripe.android.CustomerSession.getInstance();
	}

	private static get context(): android.content.Context {
        return Utils.android.getApplicationContext();
	}
}

function createKeyProvider(): com.stripe.android.EphemeralKeyProvider {
	return new com.stripe.android.EphemeralKeyProvider({
		createEphemeralKey(apiVersion: string, keyUpdateListener: com.stripe.android.EphemeralKeyUpdateListener): void {
			StripeStandardConfig.shared.backendAPI
				.createCustomerKey(apiVersion)
				.then((key) => {
					keyUpdateListener.onKeyUpdate(JSON.stringify(key));
				})
				.catch((e) => {
					keyUpdateListener.onKeyUpdateFailure(500, JSON.stringify(e));
				});
		},
	});
}

export class StripeStandardPaymentSession {
	native: com.stripe.android.PaymentSession;
	selectedPaymentMethod: StripeStandardPaymentMethod;
	selectedShippingMethod: StripeStandardShippingMethod;
	shippingAddress: StripeStandardAddress;
	loading: boolean;
	paymentInProgress: boolean;
	_data: com.stripe.android.PaymentSessionData;
	private _activityResultListener;
	private _callback: any;
	constructor(_page: Page, public customerSession: StripeStandardCustomerSession, amount: number, public currency: string, public listener: StripeStandardPaymentListener, prefilledAddress?: Address) {
		let builder = StripeStandardConfig.shared.nativeBuilder;
		if (prefilledAddress) {
			const address: com.stripe.android.model.Address.Builder = prefilledAddress.android;
			const info = new com.stripe.android.model.ShippingInformation(address.build(), prefilledAddress.name, prefilledAddress.phone);
			builder.setPrepopulatedShippingInfo(info);
		}

		const allowPaymentMethodTypes = new java.util.ArrayList();
		StripeStandardConfig.shared.allowedPaymentMethodTypes.forEach((type) => {
			switch (type) {
				case StripeStandardPaymentMethodType.Card:
					allowPaymentMethodTypes.add(com.stripe.android.model.PaymentMethod.Type.Card);
					break;
				case StripeStandardPaymentMethodType.Fpx:
					allowPaymentMethodTypes.add(com.stripe.android.model.PaymentMethod.Type.Fpx);
					break;
			}
		});
		builder.setPaymentMethodTypes(allowPaymentMethodTypes);

		(com as any).github.triniwiz.stripe.Stripe.setShippingMethodsFactory(builder, Application.android.foregroundActivity || Application.android.startActivity);
		(com as any).github.triniwiz.stripe.Stripe.setShippingInformationValidator(builder, Application.android.foregroundActivity || Application.android.startActivity);
		let config = builder.build();
		this.native = new com.stripe.android.PaymentSession(Application.android.foregroundActivity, config);
		this.native.init(createPaymentSessionListener(this, listener));
		this.native.setCartTotal(amount);
		this._activityResultListener = this._resultListener.bind(this);
		Application.android.on(AndroidApplication.activityResultEvent, this._activityResultListener);
	}

	_resultListener(args: AndroidActivityResultEventData) {
		if (args.intent) {
			this.native.handlePaymentData(args.requestCode, args.resultCode, args.intent);
		}
	}

	get amount(): number {
		let data = this._data;
		if (!data) {
			return 0;
		}
		return data.getCartTotal() + (data.getShippingMethod() ? data.getShippingMethod().getAmount() : 0);
	}

	get isPaymentReady(): boolean {
		if (!this._data) {
			return false;
		}
		return this._data.isPaymentReadyToCharge();
	}

	requestPayment() {
		console.log('requestPayment')
		this.paymentInProgress = true;
		const data = this._data;
		const shippingMethod = data.getShippingMethod();
		const shippingCost = shippingMethod ? shippingMethod.getAmount() : 0;
		StripeStandardConfig.shared.backendAPI
			.capturePayment(
				data.getPaymentMethod().component1(), // id
				data.getCartTotal() + shippingCost,
				createShippingMethod(shippingMethod),
				createAddress(data.getShippingInformation())
			)
			.then(() => {
				this.paymentInProgress = false;
				this.listener.onPaymentSuccess();
				this.native.onCompleted();
			})
			.catch((e) => {
				this.listener.onError(100, e);
				this.paymentInProgress = false;
			});
	}

	presentPaymentMethods(): void {
		this.native.presentPaymentMethodSelection(null);
	}

	presentShipping(): void {
		let lastActivity;
		const activityCreatedListener = function (args) {
			lastActivity = args.activity;
		};
		const activityDestroyedListener = function (args) {
			if (args.activity === lastActivity) {
				Application.android.unregisterBroadcastReceiver((com as any).github.triniwiz.stripe.Stripe.SHIPPING_INFO_METHODS_ACTION);
				Application.android.unregisterBroadcastReceiver((com as any).github.triniwiz.stripe.Stripe.SHIPPING_INFO_VALIDATOR_ACTION);
				Application.android.unregisterBroadcastReceiver((com as any).github.triniwiz.stripe.Stripe.SHIPPING_INFO_VALIDATOR_ERROR_ACTION);
				Application.android.off('activityCreated', activityCreatedListener);
				Application.android.off('activityDestroyed', activityDestroyedListener);
				lastActivity = undefined;
			}
		};
		Application.android.on('activityCreated', activityCreatedListener);
		Application.android.on('activityDestroyed', activityDestroyedListener);
		Application.android.registerBroadcastReceiver((com as any).github.triniwiz.stripe.Stripe.SHIPPING_INFO_METHODS_ACTION, (ctx, intent: android.content.Intent) => {
			const info: any = intent.getSerializableExtra('shippingInfo');
			if (info) {
				const data = this.listener.provideShippingMethods({
					name: info.getName(),
					line1: info.getLine1(),
					line2: info.getLine2(),
					city: info.getCity(),
					state: info.getState(),
					postalCode: info.getPostalCode(),
					country: info.getCountry(),
					phone: info.getPhone(),
					email: info.getEmail(),
				});
				const methods = data.shippingMethods;
				const array = new java.util.ArrayList<any>();

				for (let i = 0; i < methods.length; i++) {
					const method = methods[i];
					array.add(
						JSON.stringify({
							label: method.label,
							identifier: method.identifier,
							amount: method.amount,
							currency: method.currency,
							detail: method.detail,
						})
					);
				}

				const intent = new android.content.Intent((com as any).github.triniwiz.stripe.Stripe.UPDATE_SHIPPING_METHODS_ACTION);
				intent.putStringArrayListExtra('shippingMethods', array);
				(Application.android.foregroundActivity || Application.android.startActivity).sendBroadcast(intent);
			}
		});
		Application.android.registerBroadcastReceiver((com as any).github.triniwiz.stripe.Stripe.SHIPPING_INFO_VALIDATOR_ACTION, (ctx, intent: android.content.Intent) => {
			const info: any = intent.getSerializableExtra('shippingInfo');
			if (info) {
				const data = this.listener.provideShippingInformationValidation({
					name: info.getName(),
					line1: info.getLine1(),
					line2: info.getLine2(),
					city: info.getCity(),
					state: info.getState(),
					postalCode: info.getPostalCode(),
					country: info.getCountry(),
					phone: info.getPhone(),
					email: info.getEmail(),
				});
				const intent = new android.content.Intent((com as any).github.triniwiz.stripe.Stripe.UPDATE_SHIPPING_INFO_VALIDATOR_ACTION);
				intent.putExtra('shippingValidation', data);
				(Application.android.foregroundActivity || Application.android.startActivity).sendBroadcast(intent);
			}
		});
		Application.android.registerBroadcastReceiver((com as any).github.triniwiz.stripe.Stripe.SHIPPING_INFO_VALIDATOR_ERROR_ACTION, (ctx, intent: android.content.Intent) => {
			const info: any = intent.getSerializableExtra('shippingInfo');
			if (info) {
				const data = this.listener.provideShippingInformationValidationErrorMessage({
					name: info.getName(),
					line1: info.getLine1(),
					line2: info.getLine2(),
					city: info.getCity(),
					state: info.getState(),
					postalCode: info.getPostalCode(),
					country: info.getCountry(),
					phone: info.getPhone(),
					email: info.getEmail(),
				});
				const intent = new android.content.Intent((com as any).github.triniwiz.stripe.Stripe.UPDATE_SHIPPING_INFO_VALIDATOR_ERROR_ACTION);
				intent.putExtra('shippingValidationErrorMessage', data);
				(Application.android.foregroundActivity || Application.android.startActivity).sendBroadcast(intent);
			}
		});
		this.native.presentShippingFlow();
	}
}

function createPaymentSessionListener(parent: StripeStandardPaymentSession, listener: StripeStandardPaymentListener): com.stripe.android.PaymentSession.PaymentSessionListener {
	return new com.stripe.android.PaymentSession.PaymentSessionListener({
		onPaymentSessionDataChanged: (sessionData: com.stripe.android.PaymentSessionData): void => {
			if (parent.paymentInProgress) return;
			parent.customerSession.native.retrieveCurrentCustomer(
				new com.stripe.android.CustomerSession.CustomerRetrievalListener({
					onCustomerRetrieved(_customer: com.stripe.android.model.Customer) {
						parent._data = sessionData;
						parent.selectedPaymentMethod = createPaymentMethod(sessionData.getPaymentMethod());
						parent.selectedShippingMethod = createShippingMethod(sessionData.getShippingMethod());
						parent.shippingAddress = createAddress(sessionData.getShippingInformation());
						let paymentData = {
							isReadyToCharge: sessionData.isPaymentReadyToCharge(),
							paymentMethod: parent.selectedPaymentMethod,
							shippingInfo: parent.selectedShippingMethod,
							shippingAddress: parent.shippingAddress,
						};
						listener.onPaymentDataChanged(paymentData);
					},
					onError(errorCode: number, errorMessage: string) {
						listener.onError(errorCode, errorMessage);
					},
				})
			);
		},
		onCommunicatingStateChanged: (isCommunicating: boolean): void => {
			parent.loading = isCommunicating;
			listener.onCommunicatingStateChanged(isCommunicating);
		},
		onError: (code: number, message: string): void => {
			listener.onError(code, message);
		},
	});
}
function createPaymentMethod(paymentMethod: com.stripe.android.model.PaymentMethod): StripeStandardPaymentMethod {
	console.log('createPaymentMethod', paymentMethod);
	if (!paymentMethod) return undefined;
	const type = paymentMethod.component4();
	if (type === com.stripe.android.model.PaymentMethod.Type.Fpx) {
		const fpx = paymentMethod.component9(); // fpx
		const pmId = paymentMethod.component1(); // id
		if (fpx) return createPaymentMethodFromFpx(fpx, pmId);
	} else if (type === com.stripe.android.model.PaymentMethod.Type.Card) {
		const pmCard = paymentMethod.component7(); // card
		const pmId = paymentMethod.component1(); // id
		if (pmCard) return createPaymentMethodFromCard(pmCard, pmId);
	}
	return { label: 'Error (103)', image: undefined, templateImage: undefined };
}

function createPaymentMethodFromFpx(fpx: com.stripe.android.model.PaymentMethod.Fpx, stripeID: string): StripeStandardPaymentMethod {
	const bank = (com as any).stripe.android.view.FpxBank.get(fpx.component1());
	return {
		label: bank.getDisplayName(),
		image: getBitmapFromResource(bank.getBrandIconResId()),
		templateImage: undefined,
		type: StripeStandardPaymentMethodType.Fpx,
		stripeID,
		brand: bank.getCode(),
	};
}

function createPaymentMethodFromCard(card: com.stripe.android.model.PaymentMethod.Card, stripeID: string): StripeStandardPaymentMethod {
	const brand = card.component1(); // brand
	const last4 = card.component7(); // last4
	return {
		label: `${GetBrand(brand)} ...${last4}`,
		image: getBitmapFromResource(brand.getIcon()),
		templateImage: undefined,
		type: StripeStandardPaymentMethodType.Card,
		stripeID,
		brand: GetBrand(brand),
	};
}

function getBitmapFromResource(resID: number): android.graphics.Bitmap {
	let image = Application.android.foregroundActivity.getResources().getDrawable(resID, null);
	if (image instanceof android.graphics.Bitmap) {
		return image;
	}
	let bitmap = android.graphics.Bitmap.createBitmap(image.getIntrinsicWidth(), image.getIntrinsicHeight(), android.graphics.Bitmap.Config.ARGB_8888);
	let canvas = new android.graphics.Canvas(bitmap);
	image.setBounds(0, 0, canvas.getWidth(), canvas.getHeight());
	image.draw(canvas);
	return bitmap;
}

function createShippingMethod(shipping: com.stripe.android.model.ShippingMethod): StripeStandardShippingMethod {
	if (!shipping) return undefined;
	return {
		amount: shipping.getAmount(),
		detail: shipping.getDetail(),
		label: shipping.getLabel(),
		identifier: shipping.getIdentifier(),
		currency: shipping.getCurrency()?.getCurrencyCode(),
	};
}

function createAddress(info: com.stripe.android.model.ShippingInformation): StripeStandardAddress {
	if (!info) return undefined;
	const address = info.getAddress();
	if (!address) return undefined;
	return {
		name: info.getName(),
		line1: address.getLine1(),
		line2: address.getLine2(),
		city: address.getCity(),
		state: address.getState(),
		postalCode: address.getPostalCode(),
		country: address.getCountry(),
		phone: info.getPhone(),
		email: undefined,
	};
}

function createAdShippingMethod(method: StripeStandardShippingMethod, currency: string): com.stripe.android.model.ShippingMethod {
	return new com.stripe.android.model.ShippingMethod(method.label, method.identifier, method.amount, currency, method.detail);
}

import { StripeStandardAddress, IStripeStandardBackendAPI, StripeStandardConfig, StripeStandardCustomerSession, StripeStandardPaymentListener, StripeStandardPaymentSession, StripeStandardShippingAddressField, StripeStandardShippingMethod, StripeStandardPaymentMethodType } from '@triniwiz/nativescript-stripe/standard';
import { Page } from '@nativescript/core';
import { request } from '@nativescript/core/http';
import { Stripe, StripePaymentIntentParams } from '@triniwiz/nativescript-stripe';

// 1) To get started with this demo, first head to https://dashboard.stripe.com/account/apikeys
// and copy your "Test Publishable Key" (it looks like pk_test_abcdef) into the line below.
export const publishableKey = 'pk_test_OHSX2noWHfjZMZ6uj0dbeSN7';

// 2) Next, optionally, to have this demo save your user's payment details, head to
// https://github.com/stripe/example-ios-backend , click "Deploy to Heroku", and follow
// the instructions (don't worry, it's free). Paste your Heroku URL below
// (it looks like https://blazing-sunrise-1234.herokuapp.com ).
export const backendBaseURL = 'https://tropical-chemical-pram.glitch.me/';

// 3) Optionally, to enable Apple Pay, follow the instructions at https://stripe.com/docs/apple-pay/apps
// to create an Apple Merchant ID. Paste it below (it looks like merchant.com.yourappname).
const appleMerchantID = '';

export class StripeService implements IStripeStandardBackendAPI {
	private customerSession: StripeStandardCustomerSession;
	private stripe: Stripe;
	constructor() {
		if (-1 !== publishableKey.indexOf('pk_test_yours')) {
			throw new Error('publishableKey must be changed from placeholder');
		}
		if (-1 !== backendBaseURL.indexOf('https://yours.herokuapp.com/')) {
			throw new Error('backendBaseURL must be changed from placeholder');
		}
		this.stripe = new Stripe(publishableKey);
		StripeStandardConfig.shared.backendAPI = this;
		StripeStandardConfig.shared.publishableKey = publishableKey;
		StripeStandardConfig.shared.appleMerchantID = appleMerchantID;
		StripeStandardConfig.shared.companyName = 'Demo Company';
		StripeStandardConfig.shared.requiredShippingAddressFields = [StripeStandardShippingAddressField.PostalAddress];
		StripeStandardConfig.shared.allowedPaymentMethodTypes.push(StripeStandardPaymentMethodType.Card);
		this.customerSession = new StripeStandardCustomerSession();
	}

	// SetupIntent
	createSetupIntent(): Promise<any> {
		return this._postRequest('create_setup_intent').then((response) => response.content.toJSON());
	}

	// PaymentIntent
	createPaymentIntent(amount: number, currency = 'usd'): Promise<any> {
		const content = `amount=${amount}&currency=${currency}`;
		return this._postRequest('create_payment_intent', content).then((response) => response.content.toJSON());
	}

	createCustomerKey(apiVersion: string): Promise<any> {
		const content = `api_version=${apiVersion}`;
		return this._postRequest('ephemeral_keys', content).then((response) => response.content.toJSON());
	}

	capturePayment(stripeID: string, amount: number, shippingMethod?: StripeStandardShippingMethod, shippingAddress?: StripeStandardAddress): Promise<any> {
		let content = `payment_method_id=${stripeID}&amount=${amount}`;
		if (shippingMethod && shippingAddress) content += `&${this._encodeShipping(shippingMethod, shippingAddress)}`;
		return new Promise((resolve, reject) => {
			(async () => {
				try {
					const intent = await this.createPaymentIntent(amount, shippingMethod?.currency);

					const pi = new StripePaymentIntentParams();
					pi.clientSecret = intent.secret;
					pi.paymentMethodId = stripeID;
					if (global.isIOS) {
						pi.returnURL = 'iotriniwiznativescriptplugindemo://payment';
					} else {
						pi.returnURL = 'io.triniwiz.nativescript.plugindemo://payment';
					}
					this.stripe.confirmPaymentIntent(pi, (e, pm) => {
						if (pm?.requiresAction) {
							this.stripe.authenticatePaymentIntent(pm.clientSecret, pi.returnURL, (err, pm) => {
								if (err) {
									reject(err);
								} else {
									resolve(pm);
								}
							});
						} else {
							if (e) {
								reject(e);
							} else {
								resolve(pm);
							}
						}
					});
				} catch (e) {
					reject(e);
				}
			})();
		});

		/*return this._postRequest('confirm_payment_intent', content).then((response) => {
			return response.content.toJSON();
		}); */
	}

	confirmPaymentIntent(paymentIntentID: string): Promise<void> {
		const content = `payment_intent_id=${paymentIntentID}`;
		return this._postRequest('confirm_payment_intent', content);
	}

	createPaymentSession(page: Page, price: number, listener?: StripeStandardPaymentListener): StripeStandardPaymentSession {
		return new StripeStandardPaymentSession(page, price, 'usd', listener);
	}

	showPaymentMethods(paymentSession: StripeStandardPaymentSession) {
		paymentSession.presentPaymentMethods();
	}

	showShipping(paymentSession: StripeStandardPaymentSession) {
		paymentSession.presentShipping();
	}

	requestPayment(paymentSession: StripeStandardPaymentSession) {
		paymentSession.requestPayment();
	}

	/*
	 *  Private
	 */

	private _postRequest(endpoint: string, content = '', urlOverride = undefined): Promise<any> {
		const url = this._backendURL(endpoint, urlOverride);
		return request({
			url: url,
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' },
			content,
		}).then((response) => {
			if (response.statusCode < 200 || response.statusCode >= 300) {
				throw new Error(response.content.toString());
			}
			return response;
		});
	}

	private _backendURL(pathComponent: string, urlOverride = undefined): string {
		if (!backendBaseURL) throw new Error('backendBaseURL must be set');
		if (!urlOverride?.endsWith('/') || !backendBaseURL.endsWith('/')) {
			return (urlOverride || backendBaseURL) + '/' + pathComponent;
		} else {
			return (urlOverride || backendBaseURL) + pathComponent;
		}
	}

	private _encodeShipping(method: StripeStandardShippingMethod, address: StripeStandardAddress): string {
		function entry(label: string, value: string): string {
			return value ? encodeURI(label) + '=' + encodeURI(value) : '';
		}
		return entry('shipping[carrier]', method.label) + entry('&shipping[name]', address.name) + entry('&shipping[address][line1]', address.line1) + entry('&shipping[address][line2]', address.line2) + entry('&shipping[address][city]', address.city) + entry('&shipping[address][state]', address.state) + entry('&shipping[address][country]', address.country) + entry('&shipping[address][postal_code]', address.postalCode) + entry('&phone', address.phone) + entry('&email', address.email);
	}
}

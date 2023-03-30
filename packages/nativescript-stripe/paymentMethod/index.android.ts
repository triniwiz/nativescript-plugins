import { CardBrand, GetBrand, IPaymentMethodAddress, IPaymentMethodCard, IPaymentMethodCardChecks, IPaymentMethodCardNetworks, IPaymentMethodCardWallet, IPaymentMethodCardWalletAmexExpressCheckout, IPaymentMethodCardWalletApplePay, IPaymentMethodCardWalletGooglePay, IPaymentMethodCardWalletMasterpass, IPaymentMethodCardWalletSamsungPay, IPaymentMethodCardWalletVisaCheckout, IPaymentMethodThreeDSecureUsage, PaymentMethodCardCheckResult, PaymentMethodCardWalletType, toPaymentMethodCardChecks } from '../common';

export class PaymentMethodCardChecks implements IPaymentMethodCardChecks {
	readonly addressLine1Check: PaymentMethodCardCheckResult;
	readonly addressPostalCodeCheck: PaymentMethodCardCheckResult;
	readonly cvcCheck: PaymentMethodCardCheckResult;

	constructor(checks: com.stripe.android.model.PaymentMethod.Card.Checks) {
		this.addressLine1Check = toPaymentMethodCardChecks(checks.addressLine1Check);
		this.addressPostalCodeCheck = toPaymentMethodCardChecks(checks.addressPostalCodeCheck);
		this.cvcCheck = toPaymentMethodCardChecks(checks.cvcCheck);
	}

	public static fromNative(checks: com.stripe.android.model.PaymentMethod.Card.Checks) {
		return new PaymentMethodCardChecks(checks);
	}
}

export class PaymentMethodCardNetworks implements IPaymentMethodCardNetworks {
	readonly available: string[];
	readonly preferred: string;

	private constructor(networks: com.stripe.android.model.PaymentMethod.Card.Networks) {
		const available = networks.getAvailable().toArray();
		this.available = [];
		for (let i = 0; i < available.length; i++) {
			this.available.push(available[i]);
		}
		this.preferred = networks.getPreferred();
	}

	public static fromNative(networks: com.stripe.android.model.PaymentMethod.Card.Networks): PaymentMethodCardNetworks {
		return new PaymentMethodCardNetworks(networks);
	}
}

export class PaymentMethodThreeDSecureUsage implements IPaymentMethodThreeDSecureUsage {
	readonly supported: boolean;

	private constructor(usage: com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage) {
		this.supported = usage.component1();
	}

	public static fromNative(usage: com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage) {
		return new PaymentMethodThreeDSecureUsage(usage);
	}
}

export class PaymentMethodAddress implements IPaymentMethodAddress {
	readonly city: string;
	readonly country: string;
	readonly line1: string;
	readonly line2: string;
	readonly postalCode: string;
	readonly state: string;
	readonly android: any;

	private constructor(address: com.stripe.android.model.Address) {
		this.city = address.getCity();
		this.country = address.getCountry();
		this.line1 = address.getLine1();
		this.line2 = address.getLine2();
		this.postalCode = address.getPostalCode();
		this.state = address.getState();
		this.android = address;
	}

	public static fromNative(address: com.stripe.android.model.Address) {
		return new PaymentMethodAddress(address);
	}
}

export class PaymentMethodCardWalletMasterpass implements IPaymentMethodCardWalletMasterpass {
	readonly billingAddress: PaymentMethodAddress;
	readonly email: string;
	readonly name: string;
	readonly shippingAddress: PaymentMethodAddress;
	readonly android: com.stripe.android.model.wallets.Wallet.MasterpassWallet;

	private constructor(wallet: com.stripe.android.model.wallets.Wallet.MasterpassWallet) {
		this.billingAddress = PaymentMethodAddress.fromNative(wallet.getBillingAddress());
		this.email = wallet.getEmail();
		this.name = wallet.getName();
		this.shippingAddress = PaymentMethodAddress.fromNative(wallet.getShippingAddress());
		this.android = wallet;
	}

	public static fromNative(wallet: com.stripe.android.model.wallets.Wallet.MasterpassWallet) {
		return new PaymentMethodCardWalletMasterpass(wallet);
	}
}

export class PaymentMethodCardWalletAmexExpressCheckout implements IPaymentMethodCardWalletAmexExpressCheckout {
	readonly dynamicLast4: string;
	readonly android: any;

	private constructor(wallet: com.stripe.android.model.wallets.Wallet.AmexExpressCheckoutWallet) {
		this.dynamicLast4 = wallet.getDynamicLast4();
		this.android = wallet;
	}

	public static fromNative(wallet: com.stripe.android.model.wallets.Wallet.AmexExpressCheckoutWallet): PaymentMethodCardWalletAmexExpressCheckout {
		return new PaymentMethodCardWalletAmexExpressCheckout(wallet);
	}
}

export class PaymentMethodCardWalletVisaCheckout implements IPaymentMethodCardWalletVisaCheckout {
	readonly billingAddress: PaymentMethodAddress;
	readonly email: string;
	readonly name: string;
	readonly shippingAddress: PaymentMethodAddress;
	readonly dynamicLast4: string;
	readonly android: any;

	private constructor(wallet: com.stripe.android.model.wallets.Wallet.VisaCheckoutWallet) {
		this.billingAddress = PaymentMethodAddress.fromNative(wallet.getBillingAddress());
		this.email = wallet.getEmail();
		this.name = wallet.getName();
		this.shippingAddress = PaymentMethodAddress.fromNative(wallet.getShippingAddress());
		this.dynamicLast4 = wallet.getDynamicLast4();
		this.android = wallet;
	}

	public static fromNative(wallet: com.stripe.android.model.wallets.Wallet.VisaCheckoutWallet) {
		return new PaymentMethodCardWalletVisaCheckout(wallet);
	}
}

export class PaymentMethodCardWalletApplePay implements IPaymentMethodCardWalletApplePay {
	readonly dynamicLast4: string;
	readonly android: any;

	private constructor(wallet: com.stripe.android.model.wallets.Wallet.ApplePayWallet) {
		this.dynamicLast4 = wallet.getDynamicLast4();
		this.android = wallet;
	}

	public static fromNative(wallet: com.stripe.android.model.wallets.Wallet.ApplePayWallet): PaymentMethodCardWalletApplePay {
		return new PaymentMethodCardWalletApplePay(wallet);
	}
}

export class PaymentMethodCardWalletGooglePay implements IPaymentMethodCardWalletGooglePay {
	readonly dynamicLast4: string;
	readonly android: any;

	private constructor(wallet: com.stripe.android.model.wallets.Wallet.GooglePayWallet) {
		this.dynamicLast4 = wallet.getDynamicLast4();
		this.android = wallet;
	}

	public static fromNative(wallet: com.stripe.android.model.wallets.Wallet.GooglePayWallet): PaymentMethodCardWalletGooglePay {
		return new PaymentMethodCardWalletGooglePay(wallet);
	}
}

export class PaymentMethodCardWalletSamsungPay implements IPaymentMethodCardWalletSamsungPay {
	readonly dynamicLast4: string;
	readonly android: any;

	private constructor(wallet: com.stripe.android.model.wallets.Wallet.SamsungPayWallet) {
		this.dynamicLast4 = wallet.getDynamicLast4();
		this.android = wallet;
	}

	public static fromNative(wallet: com.stripe.android.model.wallets.Wallet.SamsungPayWallet): PaymentMethodCardWalletSamsungPay {
		return new PaymentMethodCardWalletSamsungPay(wallet);
	}
}

export class PaymentMethodCardWallet implements IPaymentMethodCardWallet {
	readonly masterpass: PaymentMethodCardWalletMasterpass;
	readonly type: PaymentMethodCardWalletType;
	readonly visaCheckout: PaymentMethodCardWalletVisaCheckout;
	readonly amex: PaymentMethodCardWalletAmexExpressCheckout;
	readonly applePay: PaymentMethodCardWalletApplePay;
	readonly googlePay: PaymentMethodCardWalletGooglePay;
	readonly samsungPay: PaymentMethodCardWalletSamsungPay;

	private constructor(wallet: com.stripe.android.model.wallets.Wallet) {
		if (wallet instanceof com.stripe.android.model.wallets.Wallet.AmexExpressCheckoutWallet) {
			this.type = PaymentMethodCardWalletType.AmexExpressCheckout;
			this.amex = PaymentMethodCardWalletAmexExpressCheckout.fromNative(wallet);
		} else if (wallet instanceof com.stripe.android.model.wallets.Wallet.ApplePayWallet) {
			this.type = PaymentMethodCardWalletType.ApplePay;
			this.applePay = PaymentMethodCardWalletApplePay.fromNative(wallet);
		} else if (wallet instanceof com.stripe.android.model.wallets.Wallet.MasterpassWallet) {
			this.type = PaymentMethodCardWalletType.Masterpass;
			this.masterpass = PaymentMethodCardWalletMasterpass.fromNative(wallet);
		} else if (wallet instanceof com.stripe.android.model.wallets.Wallet.VisaCheckoutWallet) {
			this.type = PaymentMethodCardWalletType.VisaCheckout;
			this.visaCheckout = PaymentMethodCardWalletVisaCheckout.fromNative(wallet);
		} else if (wallet instanceof com.stripe.android.model.wallets.Wallet.GooglePayWallet) {
			this.type = PaymentMethodCardWalletType.GooglePay;
			this.googlePay = PaymentMethodCardWalletGooglePay.fromNative(wallet);
		} else if (wallet instanceof com.stripe.android.model.wallets.Wallet.SamsungPayWallet) {
			this.type = PaymentMethodCardWalletType.SamsungPay;
			this.samsungPay = PaymentMethodCardWalletSamsungPay.fromNative(wallet);
		}
	}

	public static fromNative(wallet: com.stripe.android.model.wallets.Wallet) {
		return new PaymentMethodCardWallet(wallet);
	}
}

export class PaymentMethodCard implements IPaymentMethodCard {
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

	private constructor(paymentCard: com.stripe.android.model.PaymentMethod.Card) {
		console.log(paymentCard.brand);
		this.brand = GetBrand(paymentCard.brand);
		this.checks = PaymentMethodCardChecks.fromNative(paymentCard.checks);
		this.country = paymentCard.country;
		this.expMonth = paymentCard.expiryMonth.intValue();
		this.expYear = paymentCard.expiryYear.intValue();
		this.fingerprint = paymentCard.fingerprint;
		this.funding = paymentCard.funding;
		this.last4 = paymentCard.last4;
		this.threeDSecureUsage = PaymentMethodThreeDSecureUsage.fromNative(paymentCard.threeDSecureUsage);
		this.wallet = PaymentMethodCardWallet.fromNative(paymentCard.wallet);
	}

	public static fromNative(paymentCard: com.stripe.android.model.PaymentMethod.Card): PaymentMethodCard {
		return new PaymentMethodCard(paymentCard);
	}
}

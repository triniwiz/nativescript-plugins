import { CardBrand, GetBrand, IPaymentMethodAddress, IPaymentMethodCard, IPaymentMethodCardChecks, IPaymentMethodCardNetworks, IPaymentMethodCardWallet, IPaymentMethodCardWalletMasterpass, IPaymentMethodCardWalletVisaCheckout, IPaymentMethodThreeDSecureUsage, PaymentMethodCardCheckResult, PaymentMethodCardWalletType, toPaymentMethodCardChecks, toPaymentMethodCardWalletType } from '../common';

export class PaymentMethodCardChecks implements IPaymentMethodCardChecks {
	readonly native: STPPaymentMethodCardChecks;

	constructor(checks: STPPaymentMethodCardChecks) {
		this.native = checks;
	}

	get addressLine1Check(): PaymentMethodCardCheckResult {
		return toPaymentMethodCardChecks(this.native.addressLine1Check);
	}

	get addressPostalCodeCheck(): PaymentMethodCardCheckResult {
		return toPaymentMethodCardChecks(this.native.addressPostalCodeCheck);
	}

	get cvcCheck(): PaymentMethodCardCheckResult {
		return toPaymentMethodCardChecks(this.native.cvcCheck);
	}

	public static fromNative(native: STPPaymentMethodCardChecks) {
		if (!native) {
			return undefined;
		}
		return new PaymentMethodCardChecks(native);
	}
}

export class PaymentMethodCardNetworks implements IPaymentMethodCardNetworks {
	readonly available: string[];
	readonly preferred: string;
	readonly networks: PaymentMethodCardNetworks;

	constructor(networks: STPPaymentMethodCardNetworks) {
		const count = networks.available.count;
		const available = [];
		for (let i = 0; i < count; i++) {
			available.push(networks.available.objectAtIndex(i));
		}
		this.available = available;
		this.preferred = networks.preferred;
	}

	public static fromNative(native: STPPaymentMethodCardNetworks) {
		if (!native) {
			return undefined;
		}
		return new PaymentMethodCardNetworks(native);
	}
}

export class PaymentMethodThreeDSecureUsage implements IPaymentMethodThreeDSecureUsage {
	readonly native: STPPaymentMethodThreeDSecureUsage;
	readonly supported: boolean;

	private constructor(threeDSecureUsage: STPPaymentMethodThreeDSecureUsage) {
		this.native = threeDSecureUsage;
		this.supported = threeDSecureUsage.supported;
	}

	public static fromNative(threeDSecureUsage: STPPaymentMethodThreeDSecureUsage) {
		if (!threeDSecureUsage) {
			return undefined;
		}
		return new PaymentMethodThreeDSecureUsage(threeDSecureUsage);
	}
}

export class PaymentMethodAddress implements IPaymentMethodAddress {
	readonly native: STPPaymentMethodAddress;
	readonly city: string;
	readonly country: string;
	readonly line1: string;
	readonly line2: string;
	readonly postalCode: string;
	readonly state: string;

	constructor(billingAddress: STPPaymentMethodAddress) {
		this.native = billingAddress;
		this.city = billingAddress.city;
		this.country = billingAddress.country;
		this.line1 = billingAddress.line1;
		this.line2 = billingAddress.line2;
		this.postalCode = billingAddress.postalCode;
		this.state = billingAddress.state;
	}
}

export class PaymentMethodCardWalletMasterpass implements IPaymentMethodCardWalletMasterpass {
	readonly native: STPPaymentMethodCardWalletMasterpass;
	readonly billingAddress: PaymentMethodAddress;
	readonly email: string;
	readonly name: string;
	readonly shippingAddress: PaymentMethodAddress;

	constructor(masterpass: STPPaymentMethodCardWalletMasterpass) {
		this.native = masterpass;
		this.billingAddress = new PaymentMethodAddress(masterpass.billingAddress);
		this.email = masterpass.email;
		this.name = masterpass.name;
		this.shippingAddress = new PaymentMethodAddress(masterpass.shippingAddress);
	}

	public static fromNative(native: STPPaymentMethodCardWalletMasterpass) {
		if (!native) {
			return undefined;
		}
		return new PaymentMethodCardWalletMasterpass(native);
	}
}

export class PaymentMethodCardWalletVisaCheckout implements IPaymentMethodCardWalletVisaCheckout {
	readonly native: STPPaymentMethodCardWalletVisaCheckout;
	readonly billingAddress: PaymentMethodAddress;
	readonly email: string;
	readonly name: string;
	readonly shippingAddress: PaymentMethodAddress;
	readonly dynamicLast4: string;

	constructor(visaCheckout: STPPaymentMethodCardWalletVisaCheckout) {
		this.native = visaCheckout;
		this.billingAddress = new PaymentMethodAddress(visaCheckout.billingAddress);
		this.email = visaCheckout.email;
		this.name = visaCheckout.name;
		this.shippingAddress = new PaymentMethodAddress(visaCheckout.shippingAddress);
	}

	public static fromNative(native: STPPaymentMethodCardWalletVisaCheckout) {
		if (!native) {
			return undefined;
		}
		return new PaymentMethodCardWalletVisaCheckout(native);
	}
}

export class PaymentMethodCardWallet implements IPaymentMethodCardWallet {
	readonly native: STPPaymentMethodCardWallet;
	readonly masterpass: PaymentMethodCardWalletMasterpass;
	readonly type: PaymentMethodCardWalletType;
	readonly visaCheckout: PaymentMethodCardWalletVisaCheckout;

	constructor(wallet: STPPaymentMethodCardWallet) {
		this.native = wallet;
		this.masterpass = new PaymentMethodCardWalletMasterpass(wallet.masterpass);
		this.type = toPaymentMethodCardWalletType(wallet.type);
		this.visaCheckout = new PaymentMethodCardWalletVisaCheckout(wallet.visaCheckout);
	}

	public static fromNative(native: STPPaymentMethodCardWallet) {
		if (!native) {
			return undefined;
		}
		return new PaymentMethodCardWallet(native);
	}
}

export class PaymentMethodCard implements IPaymentMethodCard {
	readonly native: STPPaymentMethodCard;
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

	private constructor(card: STPPaymentMethodCard) {
		this.native = card;
		this.brand = GetBrand(this.native.brand);
		this.checks = PaymentMethodCardChecks.fromNative(this.native.checks);
		this.country = this.native.country;
		this.expMonth = this.native.expMonth;
		this.expYear = this.native.expYear;
		this.fingerprint = this.native.fingerprint;
		this.funding = this.native.funding;
		this.last4 = this.native.last4;
		this.networks = PaymentMethodCardNetworks.fromNative(this.native.networks);
		this.threeDSecureUsage = PaymentMethodThreeDSecureUsage.fromNative(this.native.threeDSecureUsage);
		this.wallet = PaymentMethodCardWallet.fromNative(this.native.wallet);
	}

	public static fromNative(native: STPPaymentMethodCard): PaymentMethodCard {
		if (!native) {
			return undefined;
		}
		return new PaymentMethodCard(native);
	}
}

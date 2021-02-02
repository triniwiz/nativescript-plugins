import { CardBrand, CardFundingType, GetBrand, ISource, ISourceCardDetails, ISourceKlarnaDetails, ISourceOwner, ISourceReceiver, ISourceRedirect, ISourceSEPADebitDetails, ISourceVerification, ISourceWeChatPayDetails, SourceCard3DSecureStatus, SourceFlow, SourceRedirectStatus, SourceStatus, SourceType, SourceUsage, SourceVerificationStatus, toCardFundingType, toSourceCard3DSecureStatus, toSourceFlow, toSourceRedirectStatus, toSourceStatus, toSourceType, toSourceUsage, toSourceVerificationStatus } from '../common';
import { Address } from '../';

export class SourceCardDetails implements ISourceCardDetails {
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

	private constructor(details: com.stripe.android.model.SourceTypeModel.Card) {
		this.android = details;
		this.brand = GetBrand(details.getBrand());
		this.country = details.getCountry();
		this.expMonth = details.getExpiryMonth().intValue();
		this.expYear = details.getExpiryYear().intValue();
		this.funding = toCardFundingType(details.getFunding());
		this.last4 = details.getLast4();
		this.dynamicLast4 = details.getDynamicLast4();
		this.threeDSecureUsage = toSourceCard3DSecureStatus(details.getThreeDSecureStatus());
	}

	public static fromNative(details: com.stripe.android.model.SourceTypeModel.Card): SourceCardDetails {
		if (!details) {
			return undefined;
		}
		return new SourceCardDetails(details);
	}
}

export class SourceKlarnaDetails implements ISourceKlarnaDetails {
	readonly clientToken: string;
	readonly purchaseCountry: string;

	private constructor(source: com.stripe.android.model.Source.Klarna) {
		this.clientToken = source.getClientToken();
		this.purchaseCountry = source.getPurchaseCountry();
	}

	public static fromNative(source: com.stripe.android.model.Source.Klarna): SourceKlarnaDetails {
		if (!source) {
			return undefined;
		}
		return new SourceKlarnaDetails(source);
	}
}

export class SourceOwner implements ISourceOwner {
	readonly address: Address;
	readonly email: string;
	readonly name: string;
	readonly phone: string;
	readonly verifiedAddress: Address;
	readonly verifiedEmail: string;
	readonly verifiedName: string;
	readonly verifiedPhone: string;

	private constructor(owner: com.stripe.android.model.Source.Owner) {
		// @ts-ignore
		this.address = Address.fromNative(owner.getAddress());
		this.email = owner.getEmail();
		this.name = owner.getName();
		this.phone = owner.getPhone();
		// @ts-ignore
		this.verifiedAddress = Address.fromNative(owner.getVerifiedAddress());
		this.verifiedEmail = owner.getVerifiedEmail();
		this.verifiedName = owner.getVerifiedName();
		this.verifiedPhone = owner.getVerifiedPhone();
	}

	public static fromNative(owner: com.stripe.android.model.Source.Owner): SourceOwner {
		if (!owner) {
			return undefined;
		}
		return new SourceOwner(owner);
	}
}

export class SourceReceiver implements ISourceReceiver {
	readonly address: string;
	readonly amountCharged: number;
	readonly amountReceived: number;
	readonly amountReturned: number;
	readonly apiResponse: Readonly<{}>;

	private constructor(receiver: com.stripe.android.model.Source.Receiver) {
		this.address = receiver.getAddress();
		this.amountCharged = receiver.getAmountCharged();
		this.amountReceived = receiver.getAmountReceived();
		this.amountReturned = receiver.getAmountReturned();
	}

	public static fromNative(receiver: com.stripe.android.model.Source.Receiver): SourceReceiver {
		if (!receiver) {
			return undefined;
		}
		return new SourceReceiver(receiver);
	}
}

export class SourceRedirect implements ISourceRedirect {
	readonly android: any;
	readonly apiResponse: Readonly<{}>;
	readonly ios: any;
	readonly returnURL: string;
	readonly status: SourceRedirectStatus;
	readonly url: string;

	private constructor(redirect: com.stripe.android.model.Source.Redirect) {
		this.android = redirect;
		this.url = redirect.getUrl();
		this.returnURL = redirect.getReturnUrl();
		this.status = toSourceRedirectStatus(redirect.getStatus());
	}

	public static fromNative(redirect: com.stripe.android.model.Source.Redirect): SourceRedirect {
		if (!redirect) {
			return undefined;
		}
		return new SourceRedirect(redirect);
	}
}

export class SourceSEPADebitDetails implements ISourceSEPADebitDetails {
	readonly android: any;
	readonly apiResponse: Readonly<{}>;
	readonly bankCode: string;
	readonly country: string;
	readonly fingerprint: string;
	readonly ios: any;
	readonly last4: string;
	readonly mandateReference: string;
	readonly mandateURL: string;

	private constructor(details: com.stripe.android.model.SourceTypeModel.SepaDebit) {
		this.android = details;
		this.bankCode = details.getBankCode();
		this.country = details.getCountry();
		this.fingerprint = details.getFingerPrint();
		this.last4 = details.getLast4();
		this.mandateReference = details.getMandateReference();
		this.mandateURL = details.getMandateUrl();
	}

	public static fromNative(details: com.stripe.android.model.SourceTypeModel.SepaDebit): SourceSEPADebitDetails {
		if (!details) {
			return undefined;
		}
		return new SourceSEPADebitDetails(details);
	}
}

export class SourceVerification implements ISourceVerification {
	readonly apiResponse: Readonly<{}>;
	readonly attemptsRemaining: number;
	readonly status: SourceVerificationStatus;

	private constructor(verification: com.stripe.android.model.Source.CodeVerification) {
		this.attemptsRemaining = verification.getAttemptsRemaining();
		this.status = toSourceVerificationStatus(verification.getStatus());
	}

	public static fromNative(verification: com.stripe.android.model.Source.CodeVerification): SourceVerification {
		if (!verification) {
			return undefined;
		}
		return new SourceVerification(verification);
	}
}

export class SourceWeChatPayDetails implements ISourceWeChatPayDetails {
	readonly apiResponse: Readonly<{}>;
	readonly weChatAppURL: string;

	private constructor(details: com.stripe.android.model.WeChat) {
		this.weChatAppURL = details.getQrCodeUrl();
	}

	public static fromNative(details: com.stripe.android.model.WeChat): SourceWeChatPayDetails {
		if (!details) {
			return undefined;
		}
		return new SourceWeChatPayDetails(details);
	}
}

export class Source implements ISource {
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

	private constructor(source: com.stripe.android.model.Source) {
		this.android = source;
		const amount = source.getAmount();
		this.amount = amount?.longValue() ?? Number(amount);
		const type = source.getSourceTypeModel();
		if (type instanceof com.stripe.android.model.SourceTypeModel.Card) {
			this.cardDetails = SourceCardDetails.fromNative(type);
		} else if (type instanceof com.stripe.android.model.SourceTypeModel.SepaDebit) {
			this.sepaDebitDetails = SourceSEPADebitDetails.fromNative(type);
		}
		this.clientSecret = source.getClientSecret();
		this.created = new Date(source.getCreated().longValue());
		this.currency = source.getCurrency();
		this.flow = toSourceFlow(source.getFlow());
		this.ios = source.getId();
		this.type = toSourceType(source.getType());
		if (this.type === SourceType.Klarna) {
			this.klarnaDetails = SourceKlarnaDetails.fromNative(source.getKlarna());
		}
		this.liveMode = source.isLiveMode().booleanValue();
		this.owner = SourceOwner.fromNative(source.getOwner());
		this.receiver = SourceReceiver.fromNative(source.getReceiver());
		this.redirect = SourceRedirect.fromNative(source.getRedirect());
		this.status = toSourceStatus(source.getStatus());
		this.usage = toSourceUsage(source.getUsage());
		this.verification = SourceVerification.fromNative(source.getCodeVerification());
		if (this.type === SourceType.WeChatPay) {
			this.weChatPayDetails = SourceWeChatPayDetails.fromNative(source.getWeChat());
		}
	}

	public static fromNative(source: com.stripe.android.model.Source): Source {
		return new Source(source);
	}
}

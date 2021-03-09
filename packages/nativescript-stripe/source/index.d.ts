import { CardBrand, CardFundingType, ISource, ISourceCardDetails, ISourceKlarnaDetails, ISourceOwner, ISourceReceiver, ISourceRedirect, ISourceSEPADebitDetails, ISourceVerification, ISourceWeChatPayDetails, SourceCard3DSecureStatus, SourceFlow, SourceRedirectStatus, SourceStatus, SourceType, SourceUsage, SourceVerificationStatus } from '@triniwiz/nativescript-stripe/common';
import { Address } from '../index';

export declare class SourceCardDetails implements ISourceCardDetails {
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

	private constructor();

	static fromNative(details: any): SourceCardDetails;
}

export declare class SourceKlarnaDetails implements ISourceKlarnaDetails {
	readonly clientToken: string;
	readonly purchaseCountry: string;

	private constructor();

	static fromNative(source: any): SourceKlarnaDetails;
}

export declare class SourceOwner implements ISourceOwner {
	readonly address: Address;
	readonly email: string;
	readonly name: string;
	readonly phone: string;
	readonly verifiedAddress: Address;
	readonly verifiedEmail: string;
	readonly verifiedName: string;
	readonly verifiedPhone: string;

	private constructor();

	static fromNative(owner: any): SourceOwner;
}

export declare class SourceReceiver implements ISourceReceiver {
	readonly address: string;
	readonly amountCharged: number;
	readonly amountReceived: number;
	readonly amountReturned: number;
	readonly apiResponse: Readonly<{}>;

	private constructor();

	static fromNative(receiver: any): SourceReceiver;
}

export declare class SourceRedirect implements ISourceRedirect {
	readonly android: any;
	readonly apiResponse: Readonly<{}>;
	readonly ios: any;
	readonly returnURL: string;
	readonly status: SourceRedirectStatus;
	readonly url: string;

	private constructor();

	static fromNative(redirect: any): SourceRedirect;
}

export declare class SourceSEPADebitDetails implements ISourceSEPADebitDetails {
	readonly android: any;
	readonly apiResponse: Readonly<{}>;
	readonly bankCode: string;
	readonly country: string;
	readonly fingerprint: string;
	readonly ios: any;
	readonly last4: string;
	readonly mandateReference: string;
	readonly mandateURL: string;

	private constructor();

	static fromNative(details: any): SourceSEPADebitDetails;
}

export declare class SourceVerification implements ISourceVerification {
	readonly apiResponse: Readonly<{}>;
	readonly attemptsRemaining: number;
	readonly status: SourceVerificationStatus;

	private constructor();

	static fromNative(verification: any): SourceVerification;
}

export declare class SourceWeChatPayDetails implements ISourceWeChatPayDetails {
	readonly apiResponse: Readonly<{}>;
	readonly weChatAppURL: string;

	private constructor();

	static fromNative(details: any): SourceWeChatPayDetails;
}

export declare class Source implements ISource {
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

	private constructor();

	static fromNative(source: any): Source;
}

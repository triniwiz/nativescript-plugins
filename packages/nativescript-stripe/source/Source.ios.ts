import {
  CardBrand,
  CardFundingType,
  GetBrand,
  ISource,
  ISourceCardDetails,
  ISourceKlarnaDetails,
  ISourceOwner,
  ISourceReceiver,
  ISourceRedirect,
  ISourceSEPADebitDetails,
  ISourceVerification,
  ISourceWeChatPayDetails,
  SourceCard3DSecureStatus,
  SourceFlow,
  SourceRedirectStatus,
  SourceStatus,
  SourceType,
  SourceUsage,
  SourceVerificationStatus,
  toCardFundingType,
  toSourceCard3DSecureStatus,
  toSourceFlow,
  toSourceRedirectStatus, toSourceStatus,
  toSourceType,
  toSourceUsage,
  toSourceVerificationStatus
} from "@triniwiz/nativescript-stripe/common";
import { Address } from "@triniwiz/nativescript-stripe/index.ios";
import { toJSON } from "@triniwiz/nativescript-stripe/utils";

export class SourceCardDetails implements ISourceCardDetails {
  readonly brand: CardBrand;
  readonly country: string;
  readonly expMonth: number;
  readonly expYear: number;
  readonly funding: CardFundingType;
  readonly isApplePayCard: boolean;
  readonly last4: string;
  readonly threeDSecureUsage: SourceCard3DSecureStatus;
  readonly ios: any;
  readonly android: any;
  readonly dynamicLast4: string;

  private constructor(source: STPSourceCardDetails) {
    this.brand = GetBrand(source.brand);
    this.country = source.country;
    this.expMonth = source.expMonth;
    this.expYear = source.expYear;
    this.funding = toCardFundingType(source.funding);
    this.isApplePayCard = source.isApplePayCard;
    this.last4 = source.last4;
    this.threeDSecureUsage = toSourceCard3DSecureStatus(source.threeDSecure);
    this.ios = source;
  }

  public static fromNative(source: STPSourceCardDetails): SourceCardDetails {
    if (!source) {
      return undefined;
    }
    return new SourceCardDetails(source);
  }
}

export class SourceKlarnaDetails implements ISourceKlarnaDetails {
  readonly clientToken: string;
  readonly purchaseCountry: string;

  private constructor(source: STPSourceKlarnaDetails) {
    this.clientToken = source.clientToken;
    this.purchaseCountry = source.purchaseCountry;
  }

  public static fromNative(source: STPSourceKlarnaDetails): SourceKlarnaDetails {
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

  private constructor(owner: STPSourceOwner) {
    this.address = Address.fromNative(owner.address);
    this.email = owner.email;
    this.name = owner.name;
    this.phone = owner.phone;
    this.verifiedAddress = Address.fromNative(owner.verifiedAddress);
    this.verifiedEmail = owner.verifiedEmail;
    this.verifiedName = owner.verifiedName;
    this.verifiedPhone = owner.verifiedPhone;
  }

  public static fromNative(owner: STPSourceOwner): SourceOwner {
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

  private constructor(receiver: STPSourceReceiver) {
    this.address = receiver.address;
    this.amountCharged = receiver.amountCharged;
    this.amountReceived = receiver.amountReceived;
    this.amountReturned = receiver.amountReturned;
    this.apiResponse = toJSON(receiver.allResponseFields);
  }

  public static fromNative(receiver: STPSourceReceiver): SourceReceiver {
    if (!receiver) {
      return undefined;
    }
    return new SourceReceiver(receiver);
  }
}

export class SourceRedirect implements ISourceRedirect {
  readonly apiResponse: Readonly<{}>;
  readonly returnURL: string;
  readonly status: SourceRedirectStatus;
  readonly url: string;
  readonly ios: any;
  readonly android: any;

  private constructor(redirect: STPSourceRedirect) {
    this.returnURL = redirect.returnURL.absoluteString;
    this.status = toSourceRedirectStatus(redirect.status);
    this.url = redirect.url.absoluteString;
    this.ios = redirect;
    this.apiResponse = toJSON(redirect.allResponseFields);
  }

  public static fromNative(redirect: STPSourceRedirect): SourceRedirect {
    if (!redirect) {
      return undefined;
    }
    return new SourceRedirect(redirect);
  }
}

export class SourceSEPADebitDetails implements ISourceSEPADebitDetails {
  readonly apiResponse: Readonly<{}>;
  readonly bankCode: string;
  readonly country: string;
  readonly fingerprint: string;
  readonly last4: string;
  readonly mandateReference: string;
  readonly mandateURL: string;
  readonly android: any;
  readonly ios: any;

  private constructor(debitDetails: STPSourceSEPADebitDetails) {
    this.bankCode = debitDetails.bankCode;
    this.country = debitDetails.country;
    this.fingerprint = debitDetails.fingerprint;
    this.last4 = debitDetails.last4;
    this.mandateReference = debitDetails.mandateReference;
    this.mandateURL = debitDetails.mandateURL.absoluteString;
    this.ios = debitDetails;
    this.apiResponse = toJSON(debitDetails.allResponseFields);
  }

  public static fromNative(debitDetails: STPSourceSEPADebitDetails) {
    if (!debitDetails) {
      return undefined;
    }
    return new SourceSEPADebitDetails(debitDetails);
  }
}

export class SourceVerification implements ISourceVerification {
  readonly apiResponse: Readonly<{}>;
  readonly attemptsRemaining: number;
  readonly status: SourceVerificationStatus;

  private constructor(verification: STPSourceVerification) {
    this.attemptsRemaining = verification.attemptsRemaining;
    this.status = toSourceVerificationStatus(verification.status);
    this.apiResponse = toJSON(verification.allResponseFields);
  }

  public static fromNative(verification: STPSourceVerification): SourceVerification {
    if (!verification) {
      return undefined;
    }
    return new SourceVerification(verification);
  }
}

export class SourceWeChatPayDetails implements ISourceWeChatPayDetails {
  readonly apiResponse: Readonly<{}>;
  readonly weChatAppURL: string;

  private constructor(details: STPSourceWeChatPayDetails) {
    this.weChatAppURL = details.weChatAppURL;
    this.apiResponse = toJSON(details.allResponseFields);
  }

  public static fromNative(details: STPSourceWeChatPayDetails): SourceWeChatPayDetails {
    if (!details) {
      return undefined;
    }
    return new SourceWeChatPayDetails(details);
  }
}

export class Source implements ISource {
  readonly amount: number;
  readonly clientSecret: string;
  readonly created: Date;
  readonly currency: string;
  readonly flow: SourceFlow;
  readonly id: string;
  readonly liveMode: boolean;
  readonly status: SourceStatus;
  readonly android: any;
  readonly ios: any;
  readonly cardDetails: SourceCardDetails;
  readonly details: Readonly<{}>;
  readonly klarnaDetails: SourceKlarnaDetails;
  readonly metaData: Readonly<{}>;
  readonly owner: SourceOwner;
  readonly receiver: SourceReceiver;
  readonly redirect: SourceRedirect;
  readonly sepaDebitDetails: SourceSEPADebitDetails;
  readonly type: SourceType;
  readonly usage: SourceUsage;
  readonly verification: SourceVerification;
  readonly weChatPayDetails: SourceWeChatPayDetails;
  readonly apiResponse: Readonly<{}>;

  private constructor(source: STPSource) {
    this.amount = source.amount;
    this.clientSecret = source.clientSecret;
    this.created = new Date(source.created);
    this.currency = source.currency;
    this.flow = toSourceFlow(source.flow);
    this.id = source.stripeID;
    this.liveMode = source.livemode;
    this.status = toSourceStatus(source.status);
    this.ios = source;
    this.cardDetails = SourceCardDetails.fromNative(source.cardDetails);
    this.details = toJSON(source.details)
    this.klarnaDetails = SourceKlarnaDetails.fromNative(source.klarnaDetails);
    this.metaData = toJSON(source.metadata)
    this.owner = SourceOwner.fromNative(source.owner);
    this.receiver = SourceReceiver.fromNative(source.receiver);
    this.redirect = SourceRedirect.fromNative(source.redirect);
    this.sepaDebitDetails = SourceSEPADebitDetails.fromNative(source.sepaDebitDetails);
    this.type = toSourceType(source.type);
    this.usage = toSourceUsage(source.usage);
    this.verification = SourceVerification.fromNative(source.verification);
    this.weChatPayDetails = SourceWeChatPayDetails.fromNative(source.weChatPayDetails);
    this.apiResponse = toJSON(source.allResponseFields);
  }


  public static fromNative(source: STPSource): Source {
    return new Source(source);
  }
}

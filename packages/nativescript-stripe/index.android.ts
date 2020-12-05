import { Application, Utils } from "@nativescript/core";
import {
  BankAccountHolderType,
  BankAccountStatus,
  CaptureMethod,
  CardBrand,
  CardFunding,
  CardFundingType,
  CardMultilineWidgetBase,
  CreditCardViewBase,
  GetBrand,
  IAddress,
  IBankAccount,
  ICard,
  ICardParams,
  IToken,
  PaymentMethodCardCheckResult,
  IPaymentMethod,
  PaymentMethodType,
  SourceCard3DSecureStatus,
  SourceFlow,
  SourceRedirectStatus,
  SourceStatus,
  SourceType,
  SourceUsage,
  SourceVerificationStatus,
  IStripePaymentIntent,
  StripePaymentIntentStatus,
} from './common';
import { PaymentMethodCard } from "./paymentMethod/PaymentMethod";
import { Source } from "./source/Source";

export { init } from './utils';

export class Address implements IAddress {
  readonly address: com.stripe.android.model.Address;
  readonly addressBuilder: com.stripe.android.model.Address.Builder;
  readonly card: com.stripe.android.model.Card;
  readonly isReadOnly: boolean;

  private _country: string;
  private _postalCode: string;
  private _state: string;
  private _line1: string;
  private _line2: string;
  private _city: string;
  private _email: string;
  private _name: string;
  private _phone: string;
  ios: any;
  android: any;

  constructor(address?: any) {
    if (address instanceof com.stripe.android.model.Card) {
      this.card = address;
    } else if (address instanceof com.stripe.android.model.Address.Builder) {
      this.addressBuilder = address;
    } else if (address instanceof com.stripe.android.model.Address) {
      this.address = address;
    } else {
      this.addressBuilder = new com.stripe.android.model.Address.Builder();
    }
  }

  public static fromNative(native: com.stripe.android.model.Address): Address {
    return new Address(native);
  }

  public static fromNativeBuilder(native: com.stripe.android.model.Address.Builder): Address {
    return new Address(native);
  }

  public static fromNativeCard(address: com.stripe.android.model.Card): Address {
    return new Address(native);
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value
  }

  get name(): string {
    if (this.card) {
      return this.name;
    }
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get phone(): string {
    return this._phone;
  }

  set country(value: string) {
    if (this.addressBuilder) {
      this.addressBuilder.setCountry(value);
      this._country = value;
    }
  }

  get country(): string {
    if (this.card) {
      return this.card.getAddressCountry()
    }
    if (this.address) {
      return this.address.getCountry();
    }

    if (this.addressBuilder) {
      return this._country;
    }
    return null;
  }

  set postalCode(value: string) {
    if (this.addressBuilder) {
      this.addressBuilder.setPostalCode(value);
      this._postalCode = value;
    }
  }

  get postalCode(): string {
    if (this.card) {
      return this.card.getAddressZip();
    }

    if (this.address) {
      return this.address.getPostalCode();
    }
    if (this.addressBuilder) {
      return this._postalCode;
    }
    return null;
  }

  set state(value: string) {
    if (this.addressBuilder) {
      this.addressBuilder.setState(value);
      this._state = value;
    }
  }

  get state(): string {
    if (this.card) {
      return this.card.getAddressState();
    }
    if (this.address) {
      return this.card.getAddressState();
    }
    if (this.addressBuilder) {
      return this._state;
    }
    return null;
  }

  set line1(value: string) {
    if (this.addressBuilder) {
      this.addressBuilder.setLine1(value);
      this._line1 = value;
    }
  }

  get line1(): string {
    if (this.card) {
      return this.card.getAddressLine1();
    }
    if (this.address) {
      return this.address.getLine1();
    }
    if (this.addressBuilder) {
      return this._line1;
    }
    return null;
  }

  set line2(value: string) {
    if (this.addressBuilder) {
      this.addressBuilder.setLine2(value);
      this._line2 = value;
    }
  }

  get line2(): string {
    if (this.card) {
      return this.card.getAddressLine2();
    }
    if (this.address) {
      return this.address.getLine2();
    }
    if (this.addressBuilder) {
      return this._line2;
    }
    return null;
  }

  set city(value: string) {
    if (this.addressBuilder) {
      this.addressBuilder.setCity(value);
      this._city = value;
    }
  }

  get city(): string {
    if (this.card) {
      return this.card.getAddressCity();
    }
    if (this.address) {
      return this.address.getCity();
    }
    if (this.addressBuilder) {
      return this._city;
    }
    return null;
  }

}

function toCardFunding(funding: com.stripe.android.model.CardFunding): CardFunding {
  switch (funding) {
    case com.stripe.android.model.CardFunding.Credit:
      return CardFunding.Credit;
    case com.stripe.android.model.CardFunding.Debit:
      return CardFunding.Debit;
    case com.stripe.android.model.CardFunding.Prepaid:
      return CardFunding.Prepaid;
    case com.stripe.android.model.CardFunding.Unknown:
      return CardFunding.Unknown;
  }
}

function toBankHolderType(account: com.stripe.android.model.BankAccount.Type): BankAccountHolderType {
  switch (account) {
    case com.stripe.android.model.BankAccount.Type.Company:
      return BankAccountHolderType.Company;
    case com.stripe.android.model.BankAccount.Type.Individual:
      return BankAccountHolderType.Individual;
  }
}

function toBankStatus(status: com.stripe.android.model.BankAccount.Status): BankAccountStatus {
  switch (status) {
    case com.stripe.android.model.BankAccount.Status.Errored:
      return BankAccountStatus.Errored;
    case com.stripe.android.model.BankAccount.Status.New:
      return BankAccountStatus.New;
    case com.stripe.android.model.BankAccount.Status.Validated:
      return BankAccountStatus.Validated;
    case com.stripe.android.model.BankAccount.Status.VerificationFailed:
      return BankAccountStatus.VerificationFailed;
    case com.stripe.android.model.BankAccount.Status.Verified:
      return BankAccountStatus.Verified;
  }
}

function toCardBrand(brand: com.stripe.android.model.CardBrand): CardBrand {
  switch (brand) {
    case com.stripe.android.model.CardBrand.Visa:
      return CardBrand.Visa;
    case com.stripe.android.model.CardBrand.AmericanExpress:
      return CardBrand.AmericanExpress;
    case com.stripe.android.model.CardBrand.MasterCard:
      return CardBrand.MasterCard;
    case com.stripe.android.model.CardBrand.Discover:
      return CardBrand.Discover;
    case com.stripe.android.model.CardBrand.JCB:
      return CardBrand.JCB;
    case com.stripe.android.model.CardBrand.DinersClub:
      return CardBrand.DinersClub;
    case com.stripe.android.model.CardBrand.UnionPay:
      return CardBrand.UnionPay;
  }
  return CardBrand.Unknown;
}

function toCardFundingType(type: com.stripe.android.model.CardFunding): CardFundingType {
  switch (type) {
    case com.stripe.android.model.CardFunding.Credit:
      return CardFundingType.Credit;
    case com.stripe.android.model.CardFunding.Debit:
      return CardFundingType.Debit;
    case com.stripe.android.model.CardFunding.Prepaid:
      return CardFundingType.Prepaid;
    case com.stripe.android.model.CardFunding.Unknown:
      return CardFundingType.Other;
  }
}

function toSourceCard3DSecureStatus(status: com.stripe.android.model.SourceTypeModel.Card.ThreeDSecureStatus): SourceCard3DSecureStatus {
  switch (status) {
    case com.stripe.android.model.SourceTypeModel.Card.ThreeDSecureStatus.NotSupported:
      return SourceCard3DSecureStatus.NotSupported;
    case com.stripe.android.model.SourceTypeModel.Card.ThreeDSecureStatus.Optional:
      return SourceCard3DSecureStatus.Optional;
    case com.stripe.android.model.SourceTypeModel.Card.ThreeDSecureStatus.Recommended:
      return SourceCard3DSecureStatus.Recommended;
    case com.stripe.android.model.SourceTypeModel.Card.ThreeDSecureStatus.Required:
      return SourceCard3DSecureStatus.Required;
    case com.stripe.android.model.SourceTypeModel.Card.ThreeDSecureStatus.Unknown:
      return SourceCard3DSecureStatus.Unknown
  }

}

function toSourceFlow(flow: com.stripe.android.model.Source.Flow): SourceFlow {
  switch (flow) {
    case com.stripe.android.model.Source.Flow.None:
      return SourceFlow.None
    case com.stripe.android.model.Source.Flow.CodeVerification:
      return SourceFlow.CodeVerification;
    case com.stripe.android.model.Source.Flow.Receiver:
      return SourceFlow.Receiver;
    case com.stripe.android.model.Source.Flow.Redirect:
      return SourceFlow.Redirect;
  }
}

function toSourceStatus(status: com.stripe.android.model.Source.Status): SourceStatus {
  switch (status) {
    case com.stripe.android.model.Source.Status.Canceled:
      return SourceStatus.Canceled
    case com.stripe.android.model.Source.Status.Chargeable:
      return SourceStatus.Chargeable;
    case com.stripe.android.model.Source.Status.Consumed:
      return SourceStatus.Consumed;
    case com.stripe.android.model.Source.Status.Failed:
      return SourceStatus.Failed;
    case com.stripe.android.model.Source.Status.Pending:
      return SourceStatus.Pending;
  }
}

function toSourceRedirectStatus(redirectStatus: com.stripe.android.model.Source.Redirect.Status): SourceRedirectStatus {
  switch (redirectStatus) {
    case com.stripe.android.model.Source.Redirect.Status.Failed:
      return SourceRedirectStatus.Failed;
    case com.stripe.android.model.Source.Redirect.Status.NotRequired:
      return SourceRedirectStatus.NotRequired;
    case com.stripe.android.model.Source.Redirect.Status.Pending:
      return SourceRedirectStatus.Pending;
    case com.stripe.android.model.Source.Redirect.Status.Succeeded:
      return SourceRedirectStatus.Succeeded;
  }
}

function toSourceType(type: com.stripe.android.model.Source.SourceType): SourceType {
  switch (type) {
    case com.stripe.android.model.Source.SourceType.ALIPAY:
      return SourceType.Alipay;
    case com.stripe.android.model.Source.SourceType.BANCONTACT:
      return SourceType.Bancontact;
    case com.stripe.android.model.Source.SourceType.CARD:
      return SourceType.Card;
    case com.stripe.android.model.Source.SourceType.EPS:
      return SourceType.EPS;
    case com.stripe.android.model.Source.SourceType.GIROPAY:
      return SourceType.Giropay;
    case com.stripe.android.model.Source.SourceType.IDEAL:
      return SourceType.IDEAL;
    case com.stripe.android.model.Source.SourceType.KLARNA:
      return SourceType.Klarna;
    case com.stripe.android.model.Source.SourceType.MULTIBANCO:
      return SourceType.Multibanco;
    case com.stripe.android.model.Source.SourceType.P24:
      return SourceType.P24;
    case com.stripe.android.model.Source.SourceType.SEPA_DEBIT:
      return SourceType.SEPADebit;
    case com.stripe.android.model.Source.SourceType.SOFORT:
      return SourceType.Sofort;
    case com.stripe.android.model.Source.SourceType.THREE_D_SECURE:
      return SourceType.ThreeDSecure;
    case com.stripe.android.model.Source.SourceType.UNKNOWN:
      return SourceType.Unknown;
    case com.stripe.android.model.Source.SourceType.WECHAT:
      return SourceType.WeChatPay;
  }
}

function toSourceUsage(usage: com.stripe.android.model.Source.Usage): SourceUsage {
  switch (usage) {
    case com.stripe.android.model.Source.Usage.Reusable:
      return SourceUsage.Reusable;
    case com.stripe.android.model.Source.Usage.SingleUse:
      return SourceUsage.SingleUse;
  }
}

function toSourceVerificationStatus(status: com.stripe.android.model.Source.CodeVerification.Status): SourceVerificationStatus {
  switch (status) {
    case com.stripe.android.model.Source.CodeVerification.Status.Failed:
      return SourceVerificationStatus.Failed;
    case com.stripe.android.model.Source.CodeVerification.Status.Pending:
      return SourceVerificationStatus.Pending;
    case com.stripe.android.model.Source.CodeVerification.Status.Succeeded:
      return SourceVerificationStatus.Succeeded;
  }
}

function toPaymentMethodCardChecks(check: string): PaymentMethodCardCheckResult {
  switch (check) {
    case 'pass':
      return PaymentMethodCardCheckResult.Pass;
    case 'fail':
      return PaymentMethodCardCheckResult.Failed;
    case 'unavailable':
      return PaymentMethodCardCheckResult.Unavailable;
    case 'unchecked':
      return PaymentMethodCardCheckResult.Unchecked;
  }
}

export class Card implements ICard {
  readonly android: com.stripe.android.model.Card;
  readonly name: string;
  readonly currency: string;
  readonly last4: string;
  readonly brand: CardBrand;
  readonly fingerprint: string;
  readonly funding: CardFunding;
  readonly country: string;
  readonly dynamicLast4: string;

  private constructor(
    card: com.stripe.android.model.Card
  ) {
    this.android = card;
    this.name = card.getName();
    this.currency = card.getCurrency();
    this.last4 = card.getLast4();
    this.brand = GetBrand(card.getBrand());
    this.fingerprint = card.getFingerprint();
    this.funding = toCardFunding(card.getFunding());
    this.country = this.native.getCountry();
  }

  public static fromNative(card: com.stripe.android.model.Card): Card {
    if (!card) {
      return null;
    }
    return new Card(card);
  }


  get native(): com.stripe.android.model.Card {
    return this.android;
  }

  get address(): Address {
    return Address.fromNativeCard(this.android);
  }

  /**
   * Returns an image for a card given its brand.
   * The returned value can be used as [src] in an Image tag.
   */
  static cardImage(brand: CardBrand): any {
    switch (brand) {
      case CardBrand.AmericanExpress:
        return getBitmapFromResource(com.stripe.android.model.CardBrand.AmericanExpress.getIcon())
      case CardBrand.Discover:
        return getBitmapFromResource(com.stripe.android.model.CardBrand.Discover.getIcon())
      case CardBrand.JCB:
        return getBitmapFromResource(com.stripe.android.model.CardBrand.JCB.getIcon())
      case CardBrand.DinersClub:
        return getBitmapFromResource(com.stripe.android.model.CardBrand.DinersClub.getIcon())
      case CardBrand.Visa:
        return getBitmapFromResource(com.stripe.android.model.CardBrand.Visa.getIcon())
      case CardBrand.MasterCard:
        return getBitmapFromResource(com.stripe.android.model.CardBrand.MasterCard.getIcon())
      case CardBrand.UnionPay:
        return getBitmapFromResource(com.stripe.android.model.CardBrand.UnionPay.getIcon())
      default:
        return getBitmapFromResource(com.stripe.android.model.CardBrand.Unknown.getIcon())
    }
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

  private constructor(bank: com.stripe.android.model.BankAccount) {
    this.accountHolderName = bank.getAccountHolderName();
    this.accountHolderType = toBankHolderType(bank.getAccountHolderType());
    this.bankName = bank.getBankName();
    this.country = bank.getCountryCode();
    this.currency = bank.getCurrency();
    this.fingerprint = bank.getFingerprint();
    this.last4 = bank.getLast4();
    this.metadata = {};
    this.routingNumber = bank.getRoutingNumber();
    this.status = toBankStatus(bank.getStatus());
  }

  public static fromNative(bank: com.stripe.android.model.BankAccount): BankAccount {
    if (!bank) {
      return null;
    }
    return new BankAccount(bank);
  }
}

export class Token implements IToken {
  bankAccount: BankAccount;
  card: Card;
  created: Date;
  id: string;
  ios: any;
  android: any;
  liveMode: boolean;

  private constructor(token: com.stripe.android.model.Token) {
    this.android = token;
    this.bankAccount = BankAccount.fromNative(token.getBankAccount());
    this.card = Card.fromNative(token.getCard());
    this.created = new Date(token.getCreated().toString());
    this.id = token.getId();
    this.liveMode = token.getLivemode();
  }

  public static fromNative(token: com.stripe.android.model.Token) {
    return new Token(token);
  }
}

export class Stripe {
  private _stripe: com.stripe.android.Stripe;
  private _apiKey: string;
  private _stripeAccountId: string;

  constructor(apiKey: string, stripeAccountId?: string) {
    this._apiKey = apiKey;
    this._stripeAccountId = stripeAccountId;
  }

  setStripeAccount(accountId: string) {
    this._stripeAccountId = accountId;
  }

  private get stripe(): com.stripe.android.Stripe {
    if (!this._stripe) {
      this._stripe = new com.stripe.android.Stripe(
        Utils.android.getApplicationContext(),
        this._apiKey,
        this._stripeAccountId
      );
    }
    return this._stripe;
  }

  createCardToken(card: CardParams, cb: (error: Error, token: Token) => void): void {
    if (!card) {
      if (typeof cb === 'function') {
        cb(new Error('Invalid card'), null);
      }
      return;
    }
    this.stripe.createCardToken(
      card.native,
      new com.stripe.android.ApiResultCallback<com.stripe.android.model.Token>({
        onSuccess: function (token: com.stripe.android.model.Token) {
          if (typeof cb === 'function') {
            cb(null, Token.fromNative(token));
          }
        },
        onError: function (error) {
          if (typeof cb === 'function') {
            cb(new Error(error.getLocalizedMessage()), null);
          }
        }
      })
    );
  }

  createSource(card: CardParams, cb: (error: Error, source: Source) => void): void {
    if (!card) {
      if (typeof cb === 'function') {
        cb(new Error('Invalid card'), null);
      }
      return;
    }
    (com as any).github.triniwiz.stripe.Stripe.createCardParams(card.native,
      this.stripe,
      new (com as any).github.triniwiz.stripe.Stripe.Callback({
        onSuccess(source) {
          if (typeof cb === 'function') {
            cb(null, Source.fromNative(source));
          }
        },
        onError(error) {
          if (typeof cb === 'function') {
            console.log('onError', error);
            cb(new Error(error.getLocalizedMessage()), null);
          }
        }
      }));

    /*
 try {
   const SourceParamsClazz = java.lang.Class.forName('com.stripe.android.model.SourceParams');
   const methods = SourceParamsClazz.getDeclaredMethods();
   for (let i = 0; i < methods.length; i++) {
     const method = methods[i];
     const name = method.getName();
     if (name === 'createCardParams') {
       const types = method.getParameterTypes();
       const type = types[0];
       //@ts-ignore
       if (type.isInstance(card._card)) {
         const inputValues = new java.util.ArrayList();
         //@ts-ignore
         inputValues.add(card._card);
         const cardSourceParams = method.invoke(null, inputValues.toArray());
         this.stripe.createSource(
           cardSourceParams,
           new com.stripe.android.ApiResultCallback<com.stripe.android.model.Source>({
             onSuccess: function (source: com.stripe.android.model.Source) {
               if (typeof cb === 'function') {
                 cb(null, Source.fromNative(source));
               }
             },
             onError: function (error) {
               console.log('onError', error);
               cb(new Error(error.getLocalizedMessage()), null);
             }
           })
         );
         break;
       }
     }
   }
 } catch
 (error) {
   console.log('eee', error);
   if (typeof cb === 'function') {
     cb(new Error(error.localizedDescription), null);
   }
 }
 */
  }

  createPaymentMethod(card: CardParams, cb: (error: Error, pm: PaymentMethod) => void): void {
    if (!card) {
      if (typeof cb === 'function') {
        cb(new Error('Invalid card'), null);
      }
      return;
    }

    const params = com.stripe.android.model.PaymentMethodCreateParams.createCard(card.native);
    try {
      const apiResultCallback = new com.stripe.android.ApiResultCallback<com.stripe.android.model.PaymentMethod>({
        onSuccess: (result: com.stripe.android.model.PaymentMethod) => {
          cb(null, PaymentMethod.fromNative(result));
        },
        onError: (error: any) => {
          cb(new Error(error.localizedDescription), null);
        }
      });
      this.stripe.createPaymentMethod(params, apiResultCallback);
    } catch (error) {
      if (typeof cb === 'function') {
        cb(new Error(error.localizedDescription), null);
      }
    }
  }

  retrievePaymentIntent(clientSecret: string, cb: (error: Error, pm: StripePaymentIntent) => void): void {
    try {
      this.stripe.retrievePaymentIntent(clientSecret, new com.stripe.android.ApiResultCallback<com.stripe.android.model.PaymentIntent>({
        onSuccess: (result) => {
          cb(null, StripePaymentIntent.fromNative(pi));
        },
        onError: (error: any) => {
          cb(new Error(error.localizedDescription), null);
        }
      }))
      const pi = this.stripe.retrievePaymentIntentSynchronous(clientSecret);
      cb(null, StripePaymentIntent.fromNative(pi));
    } catch (error) {
      cb(new Error(error.localizedDescription), null);
    }
  }

  confirmSetupIntent(paymentMethodId: string, clientSecret: string, cb: (error: Error, pm: StripeSetupIntent) => void): void {
    try {
      const activity = Application.android.foregroundActivity;

      const resultCb = new com.stripe.android.ApiResultCallback<com.stripe.android.SetupIntentResult>({
        onSuccess: (result: com.stripe.android.SetupIntentResult) => {
          cb(null, StripeSetupIntent.fromNative(result.getIntent()));
        },
        onError: (error: any) => {
          cb(new Error(error.localizedDescription), null);
        }
      });

      activity.onActivityResult = (requestCode, resultCode, data) => {
        this.stripe.onSetupResult(requestCode, data, resultCb);
      };
      this.stripe.confirmSetupIntent(activity, new StripeSetupIntentParams(paymentMethodId, clientSecret).native);
    } catch (error) {
      cb(new Error(error.localizedDescription), null);
    }
  }

  authenticateSetupIntent(clientSecret: string, returnUrl: string, cb: (error: Error, pm: StripeSetupIntent) => void): void {
    const activity = Application.android.foregroundActivity;

    const resultCb = new com.stripe.android.ApiResultCallback<com.stripe.android.SetupIntentResult>({
      onSuccess: (result: com.stripe.android.SetupIntentResult) => {
        cb(null, StripeSetupIntent.fromNative(result.getIntent()));
      },
      onError: (error: any) => {
        cb(new Error(error.localizedDescription), null);
      }
    });

    activity.onActivityResult = (requestCode, resultCode, data) => {
      this.stripe.onSetupResult(requestCode, data, resultCb);
    };

    this.stripe.authenticateSetup(activity, clientSecret);
  }

  confirmPaymentIntent(piParams: StripePaymentIntentParams, cb: (error: Error, pm: StripePaymentIntent) => void): void {
    try {
      const activity = Application.android.foregroundActivity;

      const resultCb = new com.stripe.android.ApiResultCallback<com.stripe.android.PaymentIntentResult>({
        onSuccess: (result: com.stripe.android.PaymentIntentResult) => {
          cb(null, StripePaymentIntent.fromNative(result.getIntent()));
        },
        onError: (error: any) => {
          cb(new Error(error.localizedDescription), null);
        }
      });

      activity.onActivityResult = (requestCode, resultCode, data) => {
        this.stripe.onPaymentResult(requestCode, data, resultCb);
      };
      this.stripe.confirmPayment(activity, piParams.native);
    } catch (error) {
      cb(new Error(error.localizedDescription), null);
    }
  }

  // Manual confirmation flow https://stripe.com/docs/payments/payment-intents/ios#manual-confirmation-ios
  authenticatePaymentIntent(clientSecret: string, returnUrl: string, cb: (error: Error, pm: StripePaymentIntent) => void): void {
    const activity = Application.android.foregroundActivity;

    const resultCb = new com.stripe.android.ApiResultCallback<com.stripe.android.PaymentIntentResult>({
      onSuccess: (result: com.stripe.android.PaymentIntentResult) => {
        cb(null, StripePaymentIntent.fromNative(result.getIntent()));
      },
      onError: (error: any) => {
        cb(new Error(error.localizedDescription), null);
      }
    });

    activity.onActivityResult = (requestCode, resultCode, data) => {
      this.stripe.onPaymentResult(requestCode, data, resultCb);
    };

    this.stripe.authenticatePayment(activity, clientSecret);
  }
}

export class CardParams implements ICardParams {
  _cardParams: com.stripe.android.model.CardParams;
  _address = new com.stripe.android.model.Address.Builder;

  private constructor(
    params: com.stripe.android.model.CardParams
  ) {
    this._cardParams = params;
    this._address = new com.stripe.android.model.Address.Builder();
    const address = this._cardParams.getAddress();
    if (address) {
      this._address.setCity(address.getCity());
      this._address.setState(address.getState());
      this._address.setLine1(address.getLine1());
      this._address.setLine2(address.getLine2());
      this._address.setPostalCode(address.getPostalCode());
      this._address.setCountry(address.getCountry());
    }
  }

  public static fromNative(card: com.stripe.android.model.CardParams): CardParams {
    const address = card.getAddress();
    const newCard = new CardParams(card);
    if (address) {
      newCard._address.setCountry(address.getCountry());
      newCard._address.setCity(address.getCity());
      newCard._address.setLine1(address.getLine1());
      newCard._address.setLine2(address.getLine2());
      newCard._address.setPostalCode(address.getPostalCode());
      newCard._address.setState(address.getState());
    }
    return newCard;
  }

  /*
  public static fromNativePaymentMethod(pm: com.stripe.android.model.PaymentMethod): Card {
    const pmCard = pm.component8(); // card

    const newCard = new Card();
    newCard._last4 = pmCard.component7(); // last4
    newCard._brand = GetBrand(pmCard.component1()); // brand
    newCard._cardParams = new com.stripe.android.model.CardParams(
      null,
      pmCard.expiryMonth as any,
      pmCard.expiryYear as any
    );
    // pmCard.component3()
    newCard._address.setCountry(pmCard.country);
    newCard._cardParams.setAddress(newCard._address.build());
    // newCard._cardParams = new com.stripe.android.model.CardParams(
    //   null,
    //   pmCard.component4(), // expiryMonth
    //   pmCard.component5(), // expiryYear
    //   null).country(pmCard.component3()); // country

    return newCard;
  }
  */

  get address(): Address {
    return Address.fromNativeBuilder(this._address);
  }

  set address(address: Address) {
    if (!address.isReadOnly && address.address instanceof com.stripe.android.model.Address.Builder) {
      this._cardParams.setAddress(address.address.build());
    }
  }

  get native(): com.stripe.android.model.CardParams {
    return this._cardParams;
  }

  get name(): string {
    return this._cardParams.getName();
  }

  set name(value: string) {
    this._cardParams.setName(value);
  }

  get currency(): string {
    return this._cardParams.getCurrency();
  }

  set currency(value: string) {
    this._cardParams.setCurrency(value);
  }
}

function getBitmapFromResource(resID: number): android.graphics.Bitmap {
  let image = Application.android.foregroundActivity.getResources().getDrawable(resID, null);
  if (image instanceof android.graphics.Bitmap) {
    return image;
  }
  let bitmap = android.graphics.Bitmap.createBitmap(image.getIntrinsicWidth(),
    image.getIntrinsicHeight(), android.graphics.Bitmap.Config.ARGB_8888);
  let canvas = new android.graphics.Canvas(bitmap);
  image.setBounds(0, 0, canvas.getWidth(), canvas.getHeight());
  image.draw(canvas);
  return bitmap;
}


export class CreditCardView extends CreditCardViewBase {
  private _widget: com.stripe.android.view.CardInputWidget | com.stripe.android.view.CardMultilineWidget;

  // @ts-ignore
  get android(): com.stripe.android.view.CardInputWidget | com.stripe.android.view.CardMultilineWidget {
    return this._widget;
  }

  public createNativeView(): com.stripe.android.view.CardInputWidget | com.stripe.android.view.CardMultilineWidget {
    if(android.os.Build.VERSION.SDK_INT < 21){
      this._widget = new com.stripe.android.view.CardInputWidget(this._context);
    }else {
      this._widget = new com.stripe.android.view.CardMultilineWidget(this._context);
    }
    return this._widget;
  }

  get cardParams(): CardParams {
    const params = this._widget.getCardParams();
    if (!params) {
      return null;
    }
    return CardParams.fromNative(this._widget.getCardParams());
  }
}

export class PaymentMethod implements IPaymentMethod {
  native: com.stripe.android.model.PaymentMethod;

  static fromNative(native: com.stripe.android.model.PaymentMethod): PaymentMethod {
    const pm = new PaymentMethod();
    pm.native = native;
    return pm;
  }

  get id(): string {
    return this.native.component1();
  }

  get created(): Date {
    return new Date(this.native.component2().longValue() * 1000);
  }

  get type(): PaymentMethodType {
    switch (this.native.component4()) {
      case com.stripe.android.model.PaymentMethod.Type.Alipay:
        return PaymentMethodType.Alipay;
      case com.stripe.android.model.PaymentMethod.Type.AuBecsDebit:
        return PaymentMethodType.AuBecsDebit;
      case com.stripe.android.model.PaymentMethod.Type.BacsDebit:
        return PaymentMethodType.BacsDebit;
      case com.stripe.android.model.PaymentMethod.Type.Bancontact:
        return PaymentMethodType.Bancontact;
      case com.stripe.android.model.PaymentMethod.Type.Card:
        return PaymentMethodType.Card;
      case com.stripe.android.model.PaymentMethod.Type.CardPresent:
        return PaymentMethodType.CardPresent;
      case com.stripe.android.model.PaymentMethod.Type.Eps:
        return PaymentMethodType.Eps;
      case com.stripe.android.model.PaymentMethod.Type.Fpx:
        return PaymentMethodType.Fpx;
      case com.stripe.android.model.PaymentMethod.Type.Giropay:
        return PaymentMethodType.Giropay;
      case com.stripe.android.model.PaymentMethod.Type.GrabPay:
        return PaymentMethodType.GrabPay;
      case com.stripe.android.model.PaymentMethod.Type.Ideal:
        return PaymentMethodType.Ideal;
      case com.stripe.android.model.PaymentMethod.Type.Oxxo:
        return PaymentMethodType.Oxxo;
      case com.stripe.android.model.PaymentMethod.Type.P24:
        return PaymentMethodType.P24;
      case com.stripe.android.model.PaymentMethod.Type.PayPal:
        return PaymentMethodType.PayPal;
      case com.stripe.android.model.PaymentMethod.Type.SepaDebit:
        return PaymentMethodType.SepaDebit;
      case com.stripe.android.model.PaymentMethod.Type.Sofort:
        return PaymentMethodType.Sofort;
    }
  }

  get billingDetails(): object {
    return this.native.component5();
  }

  get card(): PaymentMethodCard {
    return PaymentMethodCard.fromNative(this.native.component8());
  }

  get customerId(): string {
    return this.native.component6();
  }

  get metadata(): object {
    return this.native.component7();
  }
}

class StripeIntent {
  native: com.stripe.android.model.PaymentIntent | com.stripe.android.model.SetupIntent;

  get id(): string {
    return this.native.getId();
  }

  get clientSecret(): string {
    return this.native.getClientSecret();
  }

  get description(): string {
    return this.native.getDescription();
  }

  get status(): StripePaymentIntentStatus {
    switch (this.native.getStatus()) {
      case com.stripe.android.model.StripeIntent.Status.Canceled:
        return StripePaymentIntentStatus.Canceled;
      case com.stripe.android.model.StripeIntent.Status.Processing:
        return StripePaymentIntentStatus.Processing;
      case com.stripe.android.model.StripeIntent.Status.RequiresAction:
        return StripePaymentIntentStatus.RequiresAction;
      case com.stripe.android.model.StripeIntent.Status.RequiresCapture:
        return StripePaymentIntentStatus.RequiresCapture;
      case com.stripe.android.model.StripeIntent.Status.RequiresConfirmation:
        return StripePaymentIntentStatus.RequiresConfirmation;
      case com.stripe.android.model.StripeIntent.Status.RequiresPaymentMethod:
        return StripePaymentIntentStatus.RequiresPaymentMethod;
      case com.stripe.android.model.StripeIntent.Status.Succeeded:
        return StripePaymentIntentStatus.Succeeded;
    }
    return null;
  }

  get requiresAction(): boolean {
    return this.status === StripePaymentIntentStatus.RequiresAction;
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
}

export class StripePaymentIntent extends StripeIntent implements IStripePaymentIntent {
  native: com.stripe.android.model.PaymentIntent;

  static fromNative(native: com.stripe.android.model.PaymentIntent): StripePaymentIntent {
    const pi = new StripePaymentIntent();
    pi.native = native;
    return pi;
  }

  static fromApi(json: any): StripePaymentIntent {
    let native;
    if (typeof json === 'object') {
      if (json instanceof org.json.JSONObject) {
        native = com.stripe.android.model.PaymentIntent.Companion.fromJson(json);
      } else {
        // https://github.com/NativeScript/android-runtime/issues/1500
        // magic 😁
        // @ts-ignore
        native = com.stripe.android.model.PaymentIntent.Companion.fromJson(org.json.JSONObject.from(json));
      }
    }
    return StripePaymentIntent.fromNative(native);
  }

  get amount(): number {
    return this.native.getAmount().longValue();
  }

  get created(): Date {
    const created = this.native.getCreated();
    // @ts-ignore
    if (created.longValue) {
      // @ts-ignore
      return new Date(created.longValue());
    }
    return new Date(created);
  }

  get currency(): string {
    return this.native.getCurrency();
  }

  get captureMethod(): CaptureMethod {
    switch (this.native.getCaptureMethod()) {
      case com.stripe.android.model.PaymentIntent.CaptureMethod.Automatic:
        return CaptureMethod.Automatic;
      case com.stripe.android.model.PaymentIntent.CaptureMethod.Manual:
        return CaptureMethod.Manual;
    }
    return null;
  }
}

export class StripePaymentIntentParams {
  clientSecret: any;
  paymentMethodId: string;
  sourceId: string;
  returnURL: string;  // a URL that opens your app

  get native(): com.stripe.android.model.ConfirmPaymentIntentParams {
    if (this.sourceId) {
      return com.stripe.android.model.ConfirmPaymentIntentParams.createWithSourceId(this.sourceId, this.clientSecret, this.returnURL);
    } else if (this.paymentMethodId) {
      return com.stripe.android.model.ConfirmPaymentIntentParams.createWithPaymentMethodId(this.paymentMethodId, this.clientSecret, this.returnURL);
    } else {
      return com.stripe.android.model.ConfirmPaymentIntentParams.create(this.clientSecret);
    }
  }
}

export class StripeSetupIntentParams {
  native: com.stripe.android.model.ConfirmSetupIntentParams;

  constructor(paymentMethodId: string, clientSecret: string) {
    this.native = com.stripe.android.model.ConfirmSetupIntentParams.create(paymentMethodId, clientSecret);
  }
}

export class StripeSetupIntent extends StripeIntent {
  native: com.stripe.android.model.SetupIntent;

  static fromNative(native: com.stripe.android.model.SetupIntent): StripeSetupIntent {
    const si = new StripeSetupIntent();
    si.native = native;
    return si;
  }

  get paymentMethodId(): string {
    return this.native.getPaymentMethodId();
  }
}

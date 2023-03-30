import {Application, Utils, AndroidActivityResultEventData} from '@nativescript/core';
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
  showPostalCodeProperty,
  isUSZipRequiredProperty
} from './common';
import {PaymentMethodCard} from './paymentMethod';
import {Source} from './source';

export {init} from './utils';

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

  public static fromNativeCard(card: com.stripe.android.model.Card): Address {
    return new Address(card);
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
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
      return this.card.getAddressCountry();
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
      return SourceCard3DSecureStatus.Unknown;
  }
}

function toSourceFlow(flow: com.stripe.android.model.Source.Flow): SourceFlow {
  switch (flow) {
    case com.stripe.android.model.Source.Flow.None:
      return SourceFlow.None;
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
      return SourceStatus.Canceled;
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

  private constructor(card: com.stripe.android.model.Card) {
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
        return getBitmapFromResource(com.stripe.android.model.CardBrand.AmericanExpress.getIcon());
      case CardBrand.Discover:
        return getBitmapFromResource(com.stripe.android.model.CardBrand.Discover.getIcon());
      case CardBrand.JCB:
        return getBitmapFromResource(com.stripe.android.model.CardBrand.JCB.getIcon());
      case CardBrand.DinersClub:
        return getBitmapFromResource(com.stripe.android.model.CardBrand.DinersClub.getIcon());
      case CardBrand.Visa:
        return getBitmapFromResource(com.stripe.android.model.CardBrand.Visa.getIcon());
      case CardBrand.MasterCard:
        return getBitmapFromResource(com.stripe.android.model.CardBrand.MasterCard.getIcon());
      case CardBrand.UnionPay:
        return getBitmapFromResource(com.stripe.android.model.CardBrand.UnionPay.getIcon());
      default:
        return getBitmapFromResource(com.stripe.android.model.CardBrand.Unknown.getIcon());
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
  readonly metadata: Readonly<Record<any, any>>;
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

export function handleOpenURL(url: any): boolean {
  return false;
}

export function handleContinueUserActivity(userActivity: any) {
  return false;
}

export class StripeThreeDSUICustomization {
  public static init() {
    const uiCustomizationBuilder = new com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.Builder();
    const uiCustomization = uiCustomizationBuilder.build();
    com.stripe.android.PaymentAuthConfig.init(new com.stripe.android.PaymentAuthConfig.Builder().set3ds2Config(new com.stripe.android.PaymentAuthConfig.Stripe3ds2Config.Builder().setTimeout(5).setUiCustomization(uiCustomization).build()).build());
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
      this._stripe = new com.stripe.android.Stripe(Utils.android.getApplicationContext(), this._apiKey, this._stripeAccountId);
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
            cb(new Error(error.getMessage() || error.getLocalizedMessage()), null);
          }
        },
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
    (com as any).github.triniwiz.stripe.Stripe.createCardParams(
      card.native,
      this.stripe,
      new (com as any).github.triniwiz.stripe.Stripe.Callback({
        onSuccess(source) {
          if (typeof cb === 'function') {
            cb(null, Source.fromNative(source));
          }
        },
        onError(error) {
          if (typeof cb === 'function') {
            cb(new Error(error.getMessage() || error.getLocalizedMessage()), null);
          }
        },
      })
    );
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
          cb(new Error(error.getMessage() || error.getLocalizedMessage()), null);
        },
      });
      this.stripe.createPaymentMethod(params, apiResultCallback);
    } catch (error) {
      if (typeof cb === 'function') {
        const message = error?.getMessage?.() ?? error?.getLocalizedMessage?.();
        cb(message ? new Error(message) : error, null);
      }
    }
  }

  retrievePaymentIntent(clientSecret: string, cb: (error: Error, pm: StripePaymentIntent) => void): void {
    try {
      this.stripe.retrievePaymentIntent(
        clientSecret,
        new com.stripe.android.ApiResultCallback<com.stripe.android.model.PaymentIntent>({
          onSuccess: (result) => {
            cb(null, StripePaymentIntent.fromNative(result));
          },
          onError: (error: any) => {
            const message = error?.getMessage?.() ?? error?.getLocalizedMessage?.();
            cb(message ? new Error(message) : error, null);
          },
        })
      );
      //const pi = this.stripe.retrievePaymentIntentSynchronous(clientSecret);
      //cb(null, StripePaymentIntent.fromNative(pi));
    } catch (error) {
      const message = error?.getMessage?.() ?? error?.getLocalizedMessage?.();
      cb(message ? new Error(message) : error, null);
    }
  }

  confirmSetupIntent(paymentMethodId: string, clientSecret: string, cb: (error: Error, pm: StripeSetupIntent) => void): void {
    try {
      const activity = Application.android.foregroundActivity;

      const resultCb = new com.stripe.android.ApiResultCallback<com.stripe.android.SetupIntentResult>({
        onSuccess: (result: com.stripe.android.SetupIntentResult) => {
          cb(null, StripeSetupIntent.fromNative(result.getIntent()));
        },
        onError: (error) => {
          cb(new Error(error.getMessage() || error.getLocalizedMessage()), null);
        },
      });


      const result = (args: AndroidActivityResultEventData) => {
        this.stripe.onSetupResult(args.requestCode, args.intent, resultCb);
        Application.android.off('activityResult', result);
      };

      Application.android.on('activityResult', result);


      (com as any).github.triniwiz.stripe.Stripe.confirmSetupIntent(this.stripe, activity, new StripeSetupIntentParams(paymentMethodId, clientSecret).native);
    } catch (error) {
      console.log(error);
      const message = error?.getMessage?.() ?? error?.getLocalizedMessage?.();
      cb(message ? new Error(message) : error, null);
    }
  }

  confirmPaymentIntent(piParams: StripePaymentIntentParams, cb: (error: Error, pm: StripePaymentIntent) => void): void {
    try {
      const activity = Application.android.foregroundActivity;

      const resultCb = new com.stripe.android.ApiResultCallback<com.stripe.android.PaymentIntentResult>({
        onSuccess: (result: com.stripe.android.PaymentIntentResult) => {
          cb(null, StripePaymentIntent.fromNative(result.getIntent()));
        },
        onError: (error: any) => {
          cb(new Error(error.getMessage() || error.getLocalizedMessage()), null);
        },
      });

      const result = (args: AndroidActivityResultEventData) => {
        this.stripe.onPaymentResult(args.requestCode, args.intent, resultCb);
        Application.android.off('activityResult', result);
      };

      Application.android.on('activityResult', result);

      this.stripe.confirmPayment(activity, piParams.native);
    } catch (error) {
      const message = error?.getMessage?.() ?? error?.getLocalizedMessage?.();
      cb(message ? new Error(message) : error, null);
    }
  }
}

export class CardParams implements ICardParams {
  _cardParams: com.stripe.android.model.CardParams;
  _address = new com.stripe.android.model.Address.Builder();

  constructor();
  constructor(params: com.stripe.android.model.CardParams);
  constructor(number: string, expMonth: number, expYear: number, cvc: string);
  constructor(...args) {
    if (args[0] instanceof com.stripe.android.model.CardParams) {
      this._cardParams = args[0];
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
    } else if (args.length === 4) {
      this._cardParams = new com.stripe.android.model.CardParams(args[0], args[1], args[2], args[3]);
      this._address = new com.stripe.android.model.Address.Builder();
    } else {
      this._number = '';
      this._expMonth = 0;
      this._expYear = 0;
      this._cvc = '';
      this._cardParams = new com.stripe.android.model.CardParams('', 0, 0);
      this._address = new com.stripe.android.model.Address.Builder();
    }
  }

  private _copyAddress(oldParams: com.stripe.android.model.CardParams, newParams: com.stripe.android.model.CardParams) {
    this._address = new com.stripe.android.model.Address.Builder();
    const address = oldParams.getAddress();
    if (address) {
      this._address.setCity(address.getCity());
      this._address.setState(address.getState());
      this._address.setLine1(address.getLine1());
      this._address.setLine2(address.getLine2());
      this._address.setPostalCode(address.getPostalCode());
      this._address.setCountry(address.getCountry());
      this._cardParams.setAddress(newParams.getAddress());
    }
  }

  public static fromNative(card: com.stripe.android.model.CardParams): CardParams {
    if (!card) {
      return undefined;
    }
    return new CardParams(card);
  }

  private _number: string;
  get number() {
    return this._number;
  }

  set number(number: string) {
    this._number = number;
    const newParams = new com.stripe.android.model.CardParams(number, this.expMonth, this.expYear, this.cvc);
    this._copyAddress(this._cardParams, newParams);
    this._cardParams = newParams;
  }

  private _expMonth: number;
  get expMonth() {
    return this._expMonth;
  }

  set expMonth(month: number) {
    this._expMonth = month;
    const newParams = new com.stripe.android.model.CardParams(this.number, month, this.expYear, this.cvc);
    this._copyAddress(this._cardParams, newParams);
    this._cardParams = newParams;
  }

  private _expYear: number;
  get expYear() {
    return this._expYear;
  }

  set expYear(year: number) {
    this._expYear = year;
    const newParams = new com.stripe.android.model.CardParams(this.number, this.expMonth, year, this.cvc);
    this._copyAddress(this._cardParams, newParams);
    this._cardParams = newParams;
  }

  private _cvc: string;
  get cvc() {
    return this._cvc;
  }

  set cvc(cvc: string) {
    this._cvc = cvc;
    const newParams = new com.stripe.android.model.CardParams(this.number, this.expMonth, this.expYear, cvc);
    this._copyAddress(this._cardParams, newParams);
    this._cardParams = newParams;
  }

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
  const image = Application.android.foregroundActivity.getResources().getDrawable(resID, null);
  if (image instanceof android.graphics.Bitmap) {
    return image;
  }
  const bitmap = android.graphics.Bitmap.createBitmap(image.getIntrinsicWidth(), image.getIntrinsicHeight(), android.graphics.Bitmap.Config.ARGB_8888);
  const canvas = new android.graphics.Canvas(bitmap);
  image.setBounds(0, 0, canvas.getWidth(), canvas.getHeight());
  image.draw(canvas);
  return bitmap;
}

export class CreditCardView extends CreditCardViewBase {
  private _widget: com.stripe.android.view.CardInputWidget | com.stripe.android.view.CardMultilineWidget;


  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  get android(): com.stripe.android.view.CardInputWidget | com.stripe.android.view.CardMultilineWidget {
    return this._widget;
  }

  public createNativeView(): com.stripe.android.view.CardInputWidget | com.stripe.android.view.CardMultilineWidget {
    if (android.os.Build.VERSION.SDK_INT < 21) {
      this._widget = new com.stripe.android.view.CardInputWidget(this._context);
    } else {
      this._widget = new com.stripe.android.view.CardMultilineWidget(this._context);
    }
    return this._widget;
  }

  initNativeView() {
    super.initNativeView();
    const ref = new WeakRef<CreditCardView>(this);
    this._widget?.setCardNumberTextWatcher(
      new android.text.TextWatcher({
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        afterTextChanged(param0: android.text.Editable): void {
        },
        beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void {
        },
        onTextChanged(param0: any, param1: number, param2: number, param3: number) {
          ref.get()?.notify({
            eventName: CreditCardView.numberChangedEvent,
            object: ref.get(),
            number: typeof param0 === 'object' ? param0?.toString() : param0,
          });
        },
      })
    );

    this._widget?.setExpiryDateTextWatcher(
      new android.text.TextWatcher({
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        afterTextChanged(param0: android.text.Editable): void {
        },
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void {
        },
        onTextChanged(param0: any, param1: number, param2: number, param3: number) {
          if (param0) {
            const str = typeof param0 === 'object' ? param0.toString() ?? '' : param0;
            const values = str?.split?.('/') ?? '';
            ref.get()?.notify({
              eventName: CreditCardView.expMonthChangedEvent,
              object: ref.get(),
              expMonth: (values?.length ?? 0) > 0 ? values[0] : 0,
            });

            ref.get()?.notify({
              eventName: CreditCardView.expYearChangedEvent,
              object: ref.get(),
              expYear: (values?.length ?? 0) === 2 ? values[1] : 0,
            });
          }
        },
      })
    );

    this._widget?.setCvcNumberTextWatcher(
      new android.text.TextWatcher({
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        afterTextChanged(param0: android.text.Editable): void {
        },
        beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void {
        },
        onTextChanged(param0: any, param1: number, param2: number, param3: number) {
          ref.get()?.notify({
            eventName: CreditCardView.cvcChangedEvent,
            object: ref.get(),
            cvc: typeof param0 === 'object' ? param0?.toString() : param0,
          });
        },
      })
    );
    this._widget?.setPostalCodeTextWatcher(
      new android.text.TextWatcher({
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        afterTextChanged(param0: android.text.Editable): void {
        },
        beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void {
        },
        onTextChanged(param0: any, param1: number, param2: number, param3: number) {
          ref.get()?.notify({
            eventName: CreditCardView.postalCodeChangedEvent,
            object: ref.get(),
            postalCode: typeof param0 === 'object' ? param0?.toString() : param0,
          });
        },
      })
    );
    if (this.isUSZipRequired) {
      this._widget.setUsZipCodeRequired(true);
    }

    if (!this.showPostalCode) {
      this._widget.setPostalCodeRequired(false);
      if (android.os.Build.VERSION.SDK_INT < 21) {
        (<com.stripe.android.view.CardInputWidget>this._widget).setPostalCodeEnabled(false);
      } else {
        (<com.stripe.android.view.CardMultilineWidget>this._widget).setShouldShowPostalCode(false);
      }
    }
  }

  [showPostalCodeProperty.setNative](value: boolean) {
    if (this._widget) {
      this._widget.setPostalCodeRequired(value);
      if (android.os.Build.VERSION.SDK_INT < 21) {
        (<com.stripe.android.view.CardInputWidget>this._widget).setPostalCodeEnabled(value);
      } else {
        (<com.stripe.android.view.CardMultilineWidget>this._widget).setShouldShowPostalCode(value);
      }
    }
  }

  [isUSZipRequiredProperty.setNative](value: boolean) {
    if (this._widget) {
      this._widget.setUsZipCodeRequired(value);
    }
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
  metadata: object;
  native: com.stripe.android.model.PaymentMethod;

  static fromNative(native: com.stripe.android.model.PaymentMethod): PaymentMethod {
    const pm = new PaymentMethod();
    pm.native = native;
    return pm;
  }

  get id(): string {
    return this.native.id;
  }

  get created(): Date {
    return new Date(this.native.created.longValue() * 1000);
  }

  get type(): PaymentMethodType {
    switch (this.native.type) {
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
    return this.native.billingDetails;
  }

  get card(): PaymentMethodCard {
    return PaymentMethodCard.fromNative(this.native.card);
  }

  get customerId(): string {
    return this.native.customerId;
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
        native = com.stripe.android.model.PaymentIntent.fromJson(json);
      } else {
        // https://github.com/NativeScript/android-runtime/issues/1500
        // magic 😁
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        native = com.stripe.android.model.PaymentIntent.fromJson(org.json.JSONObject.from(json));
      }
    }
    return StripePaymentIntent.fromNative(native);
  }

  get amount(): number {
    return this.native.getAmount().longValue();
  }

  get created(): Date {
    const created = this.native.getCreated();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (created.longValue) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
  returnURL: string; // a URL that opens your app
  savePaymentMethod = false;

  get native(): com.stripe.android.model.ConfirmPaymentIntentParams {
    const savePaymentMethod = java.lang.Boolean.valueOf(this.savePaymentMethod);
    if (this.sourceId) {
      return com.stripe.android.model.ConfirmPaymentIntentParams.createWithSourceId(this.sourceId, this.clientSecret, this.returnURL, savePaymentMethod);
    } else if (this.paymentMethodId) {
      const intent = com.stripe.android.model.ConfirmPaymentIntentParams.createWithPaymentMethodId(this.paymentMethodId, this.clientSecret, savePaymentMethod);
      intent.setReturnUrl(this.returnURL);
      return intent;
    } else {
      const intent = com.stripe.android.model.ConfirmPaymentIntentParams.create(this.clientSecret);
      intent.setSavePaymentMethod(savePaymentMethod);
      intent.setReturnUrl(this.returnURL);
      return intent;
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

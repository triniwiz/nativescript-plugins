"use strict";
exports.__esModule = true;
exports.BankAccountStatus = exports.BankAccountHolderType = exports.SourceVerificationStatus = exports.SourceUsage = exports.SourceType = exports.SourceRedirectStatus = exports.SourceCard3DSecureStatus = exports.CardFundingType = exports.SourceStatus = exports.SourceFlow = exports.CaptureMethod = exports.PaymentMethodType = exports.CardFunding = exports.CardBrand = exports.GetBrand = exports.PaymentMethodCardWalletType = exports.PaymentMethodCardCheckResult = exports.toSourceStatus = exports.toSourceFlow = exports.toSourceUsage = exports.toSourceType = exports.toSourceRedirectStatus = exports.toSourceVerificationStatus = exports.toSourceCard3DSecureStatus = exports.toCardFundingType = exports.toPaymentMethodCardWalletType = exports.toPaymentMethodCardChecks = exports.CardMultilineWidgetBase = exports.CreditCardViewBase = void 0;
var core_1 = require("@nativescript/core");
var CreditCardViewBase = /** @class */ (function (_super) {
    __extends(CreditCardViewBase, _super);
    function CreditCardViewBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CreditCardViewBase;
}(core_1.View));
exports.CreditCardViewBase = CreditCardViewBase;
var CardMultilineWidgetBase = /** @class */ (function (_super) {
    __extends(CardMultilineWidgetBase, _super);
    function CardMultilineWidgetBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CardMultilineWidgetBase;
}(core_1.View));
exports.CardMultilineWidgetBase = CardMultilineWidgetBase;
function toPaymentMethodCardChecks(check) {
    if (global.isIOS) {
        switch (check) {
            case STPPaymentMethodCardCheckResult.Pass:
                return PaymentMethodCardCheckResult.Pass;
            case STPPaymentMethodCardCheckResult.Failed:
                return PaymentMethodCardCheckResult.Failed;
            case STPPaymentMethodCardCheckResult.Unavailable:
                return PaymentMethodCardCheckResult.Unavailable;
            case STPPaymentMethodCardCheckResult.Unchecked:
                return PaymentMethodCardCheckResult.Unchecked;
            default:
                return PaymentMethodCardCheckResult.Unknown;
        }
    }
    /* https://stripe.com/docs/api/payment_methods/object#payment_method_object-card-checks */
    if (global.isAndroid) {
        switch (check) {
            case 'pass':
                return PaymentMethodCardCheckResult.Pass;
            case 'failed':
                return PaymentMethodCardCheckResult.Failed;
            case 'unavailable':
                return PaymentMethodCardCheckResult.Unavailable;
            case 'unchecked':
                return PaymentMethodCardCheckResult.Unchecked;
            default:
                return PaymentMethodCardCheckResult.Unknown;
        }
    }
}
exports.toPaymentMethodCardChecks = toPaymentMethodCardChecks;
function toPaymentMethodCardWalletType(type) {
    if (global.isIOS) {
        switch (type) {
            case STPPaymentMethodCardWalletType.AmexExpressCheckout:
                return PaymentMethodCardWalletType.AmexExpressCheckout;
            case STPPaymentMethodCardWalletType.ApplePay:
                return PaymentMethodCardWalletType.ApplePay;
            case STPPaymentMethodCardWalletType.GooglePay:
                return PaymentMethodCardWalletType.GooglePay;
            case STPPaymentMethodCardWalletType.Masterpass:
                return PaymentMethodCardWalletType.Masterpass;
            case STPPaymentMethodCardWalletType.SamsungPay:
                return PaymentMethodCardWalletType.SamsungPay;
            case STPPaymentMethodCardWalletType.VisaCheckout:
                return PaymentMethodCardWalletType.VisaCheckout;
            default:
                return PaymentMethodCardWalletType.Unknown;
        }
    }
}
exports.toPaymentMethodCardWalletType = toPaymentMethodCardWalletType;
function toCardFundingType(type) {
    if (global.isIOS) {
        switch (type) {
            case STPCardFundingType.Credit:
                return CardFundingType.Credit;
            case STPCardFundingType.Debit:
                return CardFundingType.Debit;
            case STPCardFundingType.Prepaid:
                return CardFundingType.Prepaid;
            case STPCardFundingType.Other:
                return CardFundingType.Other;
        }
    }
    if (global.isAndroid) {
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
}
exports.toCardFundingType = toCardFundingType;
function toSourceCard3DSecureStatus(status) {
    if (global.isIOS) {
        switch (status) {
            case STPSourceCard3DSecureStatus.NotSupported:
                return SourceCard3DSecureStatus.NotSupported;
            case STPSourceCard3DSecureStatus.Optional:
                return SourceCard3DSecureStatus.Optional;
            case STPSourceCard3DSecureStatus.Recommended:
                return SourceCard3DSecureStatus.Recommended;
            case STPSourceCard3DSecureStatus.Required:
                return SourceCard3DSecureStatus.Required;
            case STPSourceCard3DSecureStatus.Unknown:
                return SourceCard3DSecureStatus.Unknown;
        }
    }
    if (global.isAndroid) {
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
}
exports.toSourceCard3DSecureStatus = toSourceCard3DSecureStatus;
function toSourceVerificationStatus(status) {
    if (global.isIOS) {
        switch (status) {
            case STPSourceVerificationStatus.Failed:
                return SourceVerificationStatus.Failed;
            case STPSourceVerificationStatus.Pending:
                return SourceVerificationStatus.Pending;
            case STPSourceVerificationStatus.Succeeded:
                return SourceVerificationStatus.Succeeded;
            case STPSourceVerificationStatus.Unknown:
                return SourceVerificationStatus.Unknown;
        }
    }
    if (global.isAndroid) {
        switch (status) {
            case com.stripe.android.model.Source.CodeVerification.Status.Failed:
                return SourceVerificationStatus.Failed;
            case com.stripe.android.model.Source.CodeVerification.Status.Pending:
                return SourceVerificationStatus.Pending;
            case com.stripe.android.model.Source.CodeVerification.Status.Succeeded:
                return SourceVerificationStatus.Succeeded;
            default:
                return SourceVerificationStatus.Unknown;
        }
    }
}
exports.toSourceVerificationStatus = toSourceVerificationStatus;
function toSourceRedirectStatus(redirectStatus) {
    if (global.isIOS) {
        switch (redirectStatus) {
            case STPSourceRedirectStatus.Failed:
                return SourceRedirectStatus.Failed;
            case STPSourceRedirectStatus.NotRequired:
                return SourceRedirectStatus.NotRequired;
            case STPSourceRedirectStatus.Pending:
                return SourceRedirectStatus.Pending;
            case STPSourceRedirectStatus.Succeeded:
                return SourceRedirectStatus.Succeeded;
            case STPSourceRedirectStatus.Unknown:
                return SourceRedirectStatus.Unknown;
        }
    }
    if (global.isAndroid) {
        switch (redirectStatus) {
            case com.stripe.android.model.Source.Redirect.Status.Failed:
                return SourceRedirectStatus.Failed;
            case com.stripe.android.model.Source.Redirect.Status.NotRequired:
                return SourceRedirectStatus.NotRequired;
            case com.stripe.android.model.Source.Redirect.Status.Pending:
                return SourceRedirectStatus.Pending;
            case com.stripe.android.model.Source.Redirect.Status.Succeeded:
                return SourceRedirectStatus.Succeeded;
            default:
                return SourceRedirectStatus.Unknown;
        }
    }
}
exports.toSourceRedirectStatus = toSourceRedirectStatus;
function toSourceType(type) {
    if (global.isIOS) {
        switch (type) {
            case STPSourceType.Alipay:
                return SourceType.Alipay;
            case STPSourceType.Bancontact:
                return SourceType.Bancontact;
            case STPSourceType.Card:
                return SourceType.Card;
            case STPSourceType.EPS:
                return SourceType.EPS;
            case STPSourceType.Giropay:
                return SourceType.Giropay;
            case STPSourceType.IDEAL:
                return SourceType.IDEAL;
            case STPSourceType.Klarna:
                return SourceType.Klarna;
            case STPSourceType.Multibanco:
                return SourceType.Multibanco;
            case STPSourceType.P24:
                return SourceType.P24;
            case STPSourceType.SEPADebit:
                return SourceType.SEPADebit;
            case STPSourceType.Sofort:
                return SourceType.Sofort;
            case STPSourceType.ThreeDSecure:
                return SourceType.ThreeDSecure;
            case STPSourceType.Unknown:
                return SourceType.Unknown;
            case STPSourceType.WeChatPay:
                return SourceType.WeChatPay;
        }
    }
    if (global.isAndroid) {
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
}
exports.toSourceType = toSourceType;
function toSourceUsage(usage) {
    if (global.isIOS) {
        switch (usage) {
            case STPSourceUsage.Reusable:
                return SourceUsage.Reusable;
            case STPSourceUsage.SingleUse:
                return SourceUsage.SingleUse;
            case STPSourceUsage.Unknown:
                return SourceUsage.Unknown;
        }
    }
    if (global.isAndroid) {
        switch (usage) {
            case com.stripe.android.model.Source.Usage.Reusable:
                return SourceUsage.Reusable;
            case com.stripe.android.model.Source.Usage.SingleUse:
                return SourceUsage.SingleUse;
            default:
                return SourceUsage.Unknown;
        }
    }
}
exports.toSourceUsage = toSourceUsage;
function toSourceFlow(flow) {
    if (global.isIOS) {
        switch (flow) {
            case STPSourceFlow.None:
                return SourceFlow.None;
            case STPSourceFlow.CodeVerification:
                return SourceFlow.CodeVerification;
            case STPSourceFlow.Receiver:
                return SourceFlow.Receiver;
            case STPSourceFlow.Redirect:
                return SourceFlow.Redirect;
        }
    }
    if (global.isAndroid) {
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
}
exports.toSourceFlow = toSourceFlow;
function toSourceStatus(status) {
    if (global.isIOS) {
        switch (status) {
            case STPSourceStatus.Canceled:
                return SourceStatus.Canceled;
            case STPSourceStatus.Chargeable:
                return SourceStatus.Chargeable;
            case STPSourceStatus.Consumed:
                return SourceStatus.Consumed;
            case STPSourceStatus.Failed:
                return SourceStatus.Failed;
            case STPSourceStatus.Pending:
                return SourceStatus.Pending;
        }
    }
    if (global.isAndroid) {
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
}
exports.toSourceStatus = toSourceStatus;
var PaymentMethodCardCheckResult;
(function (PaymentMethodCardCheckResult) {
    PaymentMethodCardCheckResult["Pass"] = "pass";
    PaymentMethodCardCheckResult["Failed"] = "failed";
    PaymentMethodCardCheckResult["Unavailable"] = "unavailable";
    PaymentMethodCardCheckResult["Unchecked"] = "unchecked";
    PaymentMethodCardCheckResult["Unknown"] = "unknown";
})(PaymentMethodCardCheckResult = exports.PaymentMethodCardCheckResult || (exports.PaymentMethodCardCheckResult = {}));
var PaymentMethodCardWalletType;
(function (PaymentMethodCardWalletType) {
    PaymentMethodCardWalletType["AmexExpressCheckout"] = "amexExpressCheckout";
    PaymentMethodCardWalletType["ApplePay"] = "applePay";
    PaymentMethodCardWalletType["GooglePay"] = "googlePay";
    PaymentMethodCardWalletType["Masterpass"] = "masterpass";
    PaymentMethodCardWalletType["SamsungPay"] = "samsungPay";
    PaymentMethodCardWalletType["VisaCheckout"] = "visaCheckout";
    PaymentMethodCardWalletType["Unknown"] = "unknown";
})(PaymentMethodCardWalletType = exports.PaymentMethodCardWalletType || (exports.PaymentMethodCardWalletType = {}));
function GetBrand(brand) {
    if (global.isAndroid) {
        switch (brand) {
            case com.stripe.android.model.CardBrand.AmericanExpress:
                return CardBrand.AmericanExpress;
            case com.stripe.android.model.CardBrand.Discover:
                return CardBrand.Discover;
            case com.stripe.android.model.CardBrand.JCB:
                return CardBrand.JCB;
            case com.stripe.android.model.CardBrand.DinersClub:
                return CardBrand.DinersClub;
            case com.stripe.android.model.CardBrand.Visa:
                return CardBrand.Visa;
            case com.stripe.android.model.CardBrand.MasterCard:
                return CardBrand.MasterCard;
            case com.stripe.android.model.CardBrand.UnionPay:
                return CardBrand.UnionPay;
            default:
                return CardBrand.Unknown;
        }
    }
    if (global.isIOS) {
        switch (brand) {
            case STPCardBrand.Amex:
                return CardBrand.AmericanExpress;
            case STPCardBrand.Discover:
                return CardBrand.Discover;
            case STPCardBrand.JCB:
                return CardBrand.JCB;
            case STPCardBrand.DinersClub:
                return CardBrand.DinersClub;
            case STPCardBrand.Visa:
                return CardBrand.Visa;
            case STPCardBrand.MasterCard:
                return CardBrand.MasterCard;
            case STPCardBrand.UnionPay:
                return CardBrand.UnionPay;
            default:
                return CardBrand.Unknown;
        }
    }
}
exports.GetBrand = GetBrand;
var CardBrand;
(function (CardBrand) {
    CardBrand["AmericanExpress"] = "amex";
    CardBrand["Discover"] = "discover";
    CardBrand["JCB"] = "jcb";
    CardBrand["DinersClub"] = "diners";
    CardBrand["Visa"] = "visa";
    CardBrand["MasterCard"] = "mastercard";
    CardBrand["UnionPay"] = "unionpay";
    CardBrand["Unknown"] = "unknown";
})(CardBrand = exports.CardBrand || (exports.CardBrand = {}));
var CardFunding;
(function (CardFunding) {
    CardFunding["Credit"] = "credit";
    CardFunding["Debit"] = "debit";
    CardFunding["Prepaid"] = "prepaid";
    CardFunding["Unknown"] = "unknown";
})(CardFunding = exports.CardFunding || (exports.CardFunding = {}));
var PaymentMethodType;
(function (PaymentMethodType) {
    PaymentMethodType["Card"] = "card";
    PaymentMethodType["CardPresent"] = "cardPresent";
    PaymentMethodType["Fpx"] = "fpx";
    PaymentMethodType["Ideal"] = "ideal";
    PaymentMethodType["SepaDebit"] = "sepaDebit";
    PaymentMethodType["AuBecsDebit"] = "auBecsDebit";
    PaymentMethodType["BacsDebit"] = "bacsDebit";
    PaymentMethodType["Sofort"] = "sofort";
    PaymentMethodType["P24"] = "p24";
    PaymentMethodType["Bancontact"] = "bancontact";
    PaymentMethodType["Giropay"] = "giropay";
    PaymentMethodType["Eps"] = "eps";
    PaymentMethodType["Oxxo"] = "oxxo";
    PaymentMethodType["Alipay"] = "alipay";
    PaymentMethodType["GrabPay"] = "grabPay";
    PaymentMethodType["PayPal"] = "payPal";
    PaymentMethodType["Unknown"] = "unknown";
})(PaymentMethodType = exports.PaymentMethodType || (exports.PaymentMethodType = {}));
var CaptureMethod;
(function (CaptureMethod) {
    CaptureMethod["Automatic"] = "automatic";
    CaptureMethod["Manual"] = "manual";
})(CaptureMethod = exports.CaptureMethod || (exports.CaptureMethod = {}));
var SourceFlow;
(function (SourceFlow) {
    SourceFlow["Redirect"] = "redirect";
    SourceFlow["Receiver"] = "receiver";
    SourceFlow["CodeVerification"] = "codeVerification";
    SourceFlow["None"] = "none";
})(SourceFlow = exports.SourceFlow || (exports.SourceFlow = {}));
var SourceStatus;
(function (SourceStatus) {
    SourceStatus["Canceled"] = "canceled";
    SourceStatus["Chargeable"] = "chargeable";
    SourceStatus["Consumed"] = "consumed";
    SourceStatus["Failed"] = "failed";
    SourceStatus["Pending"] = "pending";
})(SourceStatus = exports.SourceStatus || (exports.SourceStatus = {}));
var CardFundingType;
(function (CardFundingType) {
    CardFundingType["Debit"] = "debit";
    CardFundingType["Credit"] = "credit";
    CardFundingType["Prepaid"] = "prepaid";
    CardFundingType["Other"] = "other";
})(CardFundingType = exports.CardFundingType || (exports.CardFundingType = {}));
var SourceCard3DSecureStatus;
(function (SourceCard3DSecureStatus) {
    SourceCard3DSecureStatus["Required"] = "required";
    SourceCard3DSecureStatus["Optional"] = "optional";
    SourceCard3DSecureStatus["NotSupported"] = "notSupported";
    SourceCard3DSecureStatus["Recommended"] = "recommended";
    SourceCard3DSecureStatus["Unknown"] = "unknown";
})(SourceCard3DSecureStatus = exports.SourceCard3DSecureStatus || (exports.SourceCard3DSecureStatus = {}));
var SourceRedirectStatus;
(function (SourceRedirectStatus) {
    SourceRedirectStatus["Pending"] = "pending";
    SourceRedirectStatus["Succeeded"] = "succeeded";
    SourceRedirectStatus["Failed"] = "failed";
    SourceRedirectStatus["NotRequired"] = "notRequired";
    SourceRedirectStatus["Unknown"] = "unknown";
})(SourceRedirectStatus = exports.SourceRedirectStatus || (exports.SourceRedirectStatus = {}));
var SourceType;
(function (SourceType) {
    SourceType["Bancontact"] = "bancontact";
    SourceType["Card"] = "card";
    SourceType["Giropay"] = "giropay";
    SourceType["IDEAL"] = "ideal";
    SourceType["SEPADebit"] = "sepaDebit";
    SourceType["Sofort"] = "sofor";
    SourceType["ThreeDSecure"] = "threeDSecure";
    SourceType["Alipay"] = "alipay";
    SourceType["P24"] = "p24";
    SourceType["EPS"] = "eps";
    SourceType["Multibanco"] = "multibanco";
    SourceType["WeChatPay"] = "wechatPay";
    SourceType["Klarna"] = "klarna";
    SourceType["Unknown"] = "unknown";
})(SourceType = exports.SourceType || (exports.SourceType = {}));
var SourceUsage;
(function (SourceUsage) {
    SourceUsage["Reusable"] = "reusable";
    SourceUsage["SingleUse"] = "singleUser";
    SourceUsage["Unknown"] = "unknown";
})(SourceUsage = exports.SourceUsage || (exports.SourceUsage = {}));
var SourceVerificationStatus;
(function (SourceVerificationStatus) {
    SourceVerificationStatus["Pending"] = "pending";
    SourceVerificationStatus["Succeeded"] = "succeeded";
    SourceVerificationStatus["Failed"] = "failed";
    SourceVerificationStatus["Unknown"] = "unknown";
})(SourceVerificationStatus = exports.SourceVerificationStatus || (exports.SourceVerificationStatus = {}));
var BankAccountHolderType;
(function (BankAccountHolderType) {
    BankAccountHolderType["Individual"] = "individual";
    BankAccountHolderType["Company"] = "company";
})(BankAccountHolderType = exports.BankAccountHolderType || (exports.BankAccountHolderType = {}));
var BankAccountStatus;
(function (BankAccountStatus) {
    BankAccountStatus["New"] = "new";
    BankAccountStatus["Validated"] = "validated";
    BankAccountStatus["Verified"] = "verified";
    BankAccountStatus["VerificationFailed"] = "verificationFailed";
    BankAccountStatus["Errored"] = "errored";
})(BankAccountStatus = exports.BankAccountStatus || (exports.BankAccountStatus = {}));

"use strict";
exports.__esModule = true;
exports.toJSON = exports.init = void 0;
var core_1 = require("@nativescript/core");
exports.init = function (apiKey) {
    if (global.isIOS) {
        Stripe.setDefaultPublishableKey(apiKey);
    }
    if (global.isAndroid) {
        com.stripe.android.PaymentConfiguration.init(core_1.Utils.ad.getApplicationContext(), apiKey);
    }
};
function toJSON(meta, readonly) {
    if (readonly === void 0) { readonly = true; }
    if (global.isIOS) {
        if (meta instanceof NSDictionary) {
            var keys = meta.allKeys;
            var count = keys.count;
            var json = {};
            for (var i = 0; i < count; i++) {
                var key = keys.objectAtIndex(i);
                json[key] = meta.objectForKey(key);
            }
            return Object.freeze(json);
        }
    }
    if (readonly) {
        return Object.freeze({});
    }
    return {};
}
exports.toJSON = toJSON;

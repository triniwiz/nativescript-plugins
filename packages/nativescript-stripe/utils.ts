import { AndroidApplication, Application, Utils } from "@nativescript/core";
import { PaymentSheet } from './paymentSheet';
//declare const com, Stripe, NSDictionary;
let launchActivityDestroyed = false;
let didInit = false;
export const init = (apiKey: string) => {
  if (global.isIOS) {
    StripeAPI.setDefaultPublishableKey(apiKey);
  }
  if (global.isAndroid) {
    com.stripe.android.PaymentConfiguration.init(Utils.ad.getApplicationContext(), apiKey);
    Application.android.on(AndroidApplication.activityCreatedEvent, (event: any) => {
      const activity = event.activity;
      if (launchActivityDestroyed || !didInit) {
        PaymentSheet._init(activity);
        didInit = true;
        launchActivityDestroyed = false;
      }

    });

    Application.android.on(AndroidApplication.activityDestroyedEvent, (event: any) => {
      const activity = event.activity;
      if (activity === Application.android.startActivity) {
        launchActivityDestroyed = true;
      }
    })
  }
}

export function toJSON(meta: any, readonly = true) {
  if (global.isIOS) {
    if (meta instanceof NSDictionary) {
      const keys = meta.allKeys;
      const count = keys.count;
      const json = {};
      for (let i = 0; i < count; i++) {
        const key = keys.objectAtIndex(i);
        json[key] = meta.objectForKey(key);
      }
      return Object.freeze(json);
    }
  }
  if (readonly) {
    return Object.freeze({})
  }
  return {};
}

# Stripe

<p>
<a href="https://www.npmjs.com/package/@triniwiz/nativescript-stripe">
<img src="https://img.shields.io/npm/v/@triniwiz/nativescript-stripe.svg?style=for-the-badge"
            alt="NativeScript Stripe on NPM"/></a>

<a href="https://www.npmjs.com/package/@triniwiz/nativescript-stripe">
<img src="https://img.shields.io/npm/dt/@triniwiz/nativescript-stripe.svg?style=for-the-badge&label=npm%20downloads&" alt="NativeScript Stripe on NPM"></a>

<a href="https://twitter.com/intent/follow?screen_name=triniwiz">
<img src="https://img.shields.io/twitter/follow/triniwiz?style=style=for-the-badge&logo=twitter" alt="follow on Twitter"></a>
</p>


|   Android Device   |  Android Emulator  |     iOS Device     |   iOS Simulator    |
| :----------------: | :----------------: | :----------------: | :----------------: |
| :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |

## Installing

```bash
    ns plugin add @triniwiz/nativescript-stripe
```

## Android

::: warning Note
The minimum required SDK is version 21 (Lollipop :lollipop:)
:::

## iOS

::: warning Note
The minimum required platform version is 11
:::

## Angular

```ts
import { CreditCardViewModule } from "@triniwiz/nativescript-stripe/angular";
...
@NgModule({
  imports: [
    ...
    CreditCardViewModule,
    ...
  ],
  ...
})
export class AppModule { }
```

## Vue

```ts
import Vue from 'nativescript-vue';
import CreditCardView from '@triniwiz/nativescript-stripe/vue';

Vue.use(CreditCardView);
```

```html
<creditCardView></creditCardView>
```

## React

```tsx
import { creditCardView } from '@triniwiz/nativescript-stripe/react';
return <creditCardView />;
```

## Svelte

```ts
import '@triniwiz/nativescript-stripe/svelte';
```

```html
<creditCardView></creditCardView>
```

# Usage

IMPORTANT: Make sure you include `xmlns:stripe="@triniwiz/nativescript-stripe"` on the Page tag

### Using from view

```xml
<stripe:CreditCardView id="card"/>
```

#### Add extra details to card

JavaScript

```js
const ccView = page.getViewById('card');
const cc = ccView.cardParams;
cc.name = 'Osei Fortune';
```

TypeScript

```ts
import { CreditCardView, CardParams } from '@triniwiz/nativescript-stripe';
const ccView: CreditCardView = page.getViewById('card');
const cc: CardParams = ccView.cardParams;
cc.name = 'Osei Fortune';
```

### Using from code

```ts
import { CardParams } from '@triniwiz/nativescript-stripe';
const cc = new CardParams('4242424242424242', 2, 18, '123');
cc.name = 'Osei Fortune';
```

## Standard Integration

The `demo` and `demo-angular` folders contain demos that use the Standard Integration.
They can be used as a starting point, and provide information on how to invoke the
Standard Integration components. For more information, see the README in the
demo folders.

Set Stripe configuration values:

```ts
StripeStandardConfig.shared.backendAPI = <Your API Service>;
StripeStandardConfig.shared.publishableKey = <Your Stripe Key>;
StripeStandardConfig.shared.companyName = <Your Company Name>;
// To support Apple Pay, set appleMerchantID.
StripeStandardConfig.shared.appleMerchantID = <Your Apple Merchant ID>;

// To enable card scanning(beta) on iOS
StripeStandardConfig.shared.enableCardScanning = true;
```

::: warning Note for iOS using enableCardScanning
If the user rejects permissions from the iOS popup, the app is not allowed to ask again. You can instruct the user to go to app settings and enable the camera permission manually from there. Additionally, [App Store Guideline 5.1.1](https://developer.apple.com/app-store/review/guidelines/#data-collection-and-storage) requires apps to clarify the usage of the camera and photo library. To do so, edit your app/App_Resources/iOS/Info.plist and add the following clarification

```Plist
<key>NSCameraUsageDescription</key>
<string>enter your camera permission request text here</string>

```

:::

Create a Customer Session

```ts
let customerSession = new StripeStandardCustomerSession();
```

Create a Payment Session

```ts
let paymentSession = new StripeStandardPaymentSession(page, customerSession, price, 'usd', listener);
```

See [Stripe Docs](httpsope will require [Strong Customer Authentication](https://stripe.com/payments/strong-customer-authent://stripe.com/docs/mobile) for more information.

# Strong Customer Authentication

PSD2 regulations in Eurication)
for some credit card purchases. Stripe supports this, though most of the work to make it happen is
required on the backend server and in the mobile app, outside the `@triniwiz/nativescript-stripe` plugin.

To support SCA, follow the instructions for [iOS](https://stripe.com/docs/payments/payment-intents/ios)
and [Android](https://stripe.com/docs/payments/payment-intents/android) on using `PaymentIntents` instead
of tokens when interacting with your backend server. The `@triniwiz/nativescript-stripe` plugin has
cross-platform data structures and method calls that might be helpful. In `index.d.ts` see:

- `PaymentMethod` and related classes
- `StripePaymentIntent` and related classes
- Methods `Stripe.createPaymentMethod`, `Stripe.retrievePaymentIntent`, `Stripe.confirmPaymentIntent` and `Stripe.confirmSetupIntent`

## Handling secondary customer input

SCA requires the customer to enter additional information with some charge cards. Stripe takes care of this
if you properly handle the redirect from the `StripePaymentIntent` returned from the server.

If you're using the [automatic confirmation flow](https://stripe.com/docs/payments/payment-intents/ios#automatic-confirmation-ios), `confirmPaymentIntent` and `confirmSetupIntent` will automatically manage the SCA validation by showing and validating the payment authentification.

If you're using the [manual confirmation flow](https://stripe.com/docs/payments/payment-intents/ios#manual-confirmation-ios), where back-end creates the `PaymentIntent`|`SetupIntent` and requires an Intent authentification from the customer, `authenticatePaymentIntent` and `authenticateSetupIntent` will allow to manage that extra step before sending back the Intent to your server.

## Status

`demo-angular` now supports `SetupIntent` and `PaymentIntent` SCA integration. Any credit card verification will be automatically prompted to the user.



# ThreeDS

## IOS

The application delegate needs to be overriden to handle the new events 

```ts
import { handleContinueUserActivity, handleOpenURL } from '@triniwiz/nativescript-stripe';
if (global.isIOS) {
	@NativeClass()
	@ObjCClass(UIApplicationDelegate)
	class UIApplicationDelegateImpl extends UIResponder implements UIApplicationDelegate {
		applicationContinueUserActivityRestorationHandler(application: UIApplication, userActivity: NSUserActivity, restorationHandler: (p1: NSArray<UIUserActivityRestoring>) => void): boolean {
			return handleContinueUserActivity(userActivity);
		}
		applicationOpenURLOptions(app: UIApplication, url: NSURL, options: NSDictionary<string, any>): boolean {
			return handleOpenURL(url);
		}
	}

	Application.ios.delegate = UIApplicationDelegateImpl;
}
```

### Initialize  

```ts
import { StripeThreeDSUICustomization } from '@triniwiz/nativescript-stripe';

StripeThreeDSUICustomization.init();
```

# Known Issues

## `const enum` not found

When building with NativeScript v6+, it builds using the webpack-only flow in "transpileOnly" mode. A webpack [issue](https://github.com/NativeScript/nativescript-dev-webpack/issues/927) means that `const enum` values cannot be found in the final output.

This problem is not present in Angular projects and likely won't be an issue if you do not use any of the exported enums.

Unfortunately, the only fix I've found for this is to follow the advice in that issue and modify `webpack.config.js` in your app to set `transpileOnly` to `false`.

Note: This may no longer be needed once this TypeScript [bug](https://github.com/Microsoft/TypeScript/issues/16671) is fixed.

## API

## TODO

- Android Pay
- Apple Pay (supported by Standard Integration, not by Custom Integration)

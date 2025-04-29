# @triniwiz/nativescript-klaviyo-sdk

```javascript
npm install @triniwiz/nativescript-klaviyo-sdk
```

## Initialization

The SDK must be initialized with the short alphanumeric public API key for your Klaviyo account, also known as your Site ID.

Initialize must be called prior to invoking any other SDK methods so that Klaviyo SDK can track profiles, events and push tokens toward the correct Klaviyo account. Any SDK operations invoked before initialize will be dropped, and result in a logged error.

```ts
import { Klaviyo } from '@triniwiz/nativescript-klaviyo-sdk';
Klaviyo.initialize('YOUR_KLAVIYO_PUBLIC_API_KEY');
```

## Identifying a Profile

The SDK provides methods to identify profiles via the Create Client Profile API. A profile can be identified by any combination of the following:

    External ID: A unique identifier used by customers to associate Klaviyo profiles with profiles in an external system, such as a point-of-sale system. Format varies based on the external system.
    Individual's email address
    Individual's phone number in E.164 format

Identifiers are persisted to local storage on each platform so that the SDK can keep track of the current profile.

Profile attributes can be set all at once:

```ts
import { Klaviyo, Profile } from '@triniwiz/nativescript-klaviyo-sdk';

const profile: Profile = {
	email: 'kermit@example.com',
	phoneNumber: '+15555555555',
	externalId: '12345',
	firstName: 'Kermit',
	lastName: 'The Frog',
	title: 'CEO',
	organization: 'Muppets, Inc.',
	location: {
		address1: '666 Fake St.',
		address2: 'Apt 123',
		city: 'Cityville',
		country: 'Countryland',
		region: 'Regionville',
		zip: '11111',
	},
};

Klaviyo.setProfile(profile);
```

or individually:

```ts
import { ProfileAttributeKey, Klaviyo } from '@triniwiz/nativescript-klaviyo-sdk';

Klaviyo.setEmail('kermit@example.com');
Klaviyo.setPhone('+15555555555');
Klaviyo.setExternalId('12345');
Klaviyo.setProfileAttribute(ProfileAttributeKey.FIRST_NAME, 'Kermit');
```

Either way, the native SDKs will group and batch API calls to improve performance.

## Reset Profile

To start a new profile altogether (e.g. if a user logs out), either call Klaviyo.resetProfile() to clear the currently tracked profile identifiers (e.g. on logout), or use Klaviyo.setProfile(profile) to overwrite it with a new profile object.

```ts
import { Klaviyo } from '@triniwiz/nativescript-klaviyo-sdk';

Klaviyo.resetProfile();
```

## Event Tracking

The SDK also provides tools for tracking analytics events via the Create Client Event API. A list of common Klaviyo-defined event metrics is provided in MetricName, or you can just provide a string for a custom event name.

Below is an example using one of the Klaviyo-defined event names:

```ts
import { Klaviyo, EventName } from '@triniwiz/nativescript-klaviyo-sdk';

Klaviyo.createEvent({
	name: EventName.STARTED_CHECKOUT,
	value: 99,
	properties: { products: ['SKU1', 'SKU2'] },
});
```

You can also create an event by providing a string for the event name as follows:

```ts
import { Klaviyo } from '@triniwiz/nativescript-klaviyo-sdk';

Klaviyo.createEvent({
  name: 'My Custom Event',
});
```

## In-App Forms

[In-app forms](https://help.klaviyo.com/hc/en-us/articles/34567685177883) are messages displayed to mobile app users while they are actively using an app. You can create new in-app forms in a drag-and-drop editor in the Sign-Up Forms tab in Klaviyo. Follow the instructions in this section to integrate forms with your app. The SDK will display forms according to their targeting and behavior settings and collect delivery and engagement analytics automatically.

### Prerequisites

- Using Version 1.2.0 and higher
- Import the Klaviyo module

### Setup

To display in-app forms, add the following code to your application

``` ts
import { Klaviyo } from '@triniwiz/nativescript-klaviyo-sdk';

// call this any time after initializing your public API key
Klaviyo.registerForInAppForms();
```

### Behavior

Once `registerForInAppForms()` is called, the SDK will load form data for your account and display no more than one form within 15 seconds, based on form targeting and behavior settings.

You can call `registerForInAppForms()` any time after initializing with your public API key to control when and where in your app's UI a form can appear. It is safe to register multiple times per application session. The SDK will internally prevent multiple forms appearing at once.

Consider how often you want to register for forms. For example, registering from a lifecycle event is advisable so that the user has multiple opportunities to see your messaging if they are browsing your app for a prolonged period. However, be advised the form will be shown as soon as it is ready, so you may still need to condition this based on the user's context within your application. Future versions of this product will provide more control in this regard.

**Note**: At this time, when device orientation changes any currently visible form is closed and will not be re-displayed automatically.


## Push Notifications

### Prerequisites

Integrating push notifications is highly platform-specific. Begin by thoroughly reviewing the setup
instructions for Push Notifications in the README from each native Klaviyo SDK:

- [Android](https://github.com/klaviyo/klaviyo-android-sdk#Push-Notifications)
- [iOS](https://github.com/klaviyo/klaviyo-swift-sdk#Push-Notifications)

### Setup

Refer to the following README sections on push setup:

- [Android](https://github.com/klaviyo/klaviyo-android-sdk#Setup)
- [iOS](https://github.com/klaviyo/klaviyo-swift-sdk#Setup)

### Collecting Push Tokens

Push tokens can be collected either from your app's react native code or in the native code.
Below sections discuss both approaches, and you are free to pick one that best suits your app's architecture.
Note that doing this in one location is sufficient.

#### Token Collection

In order to collect the push token in your NativeScript app you need to:

1. Import a library such as [`@triniwiz/nativescript-klaviyo-push-sdk`](https://www.npmjs.com/package/@triniwiz/nativescript-klaviyo-push-sdk)
  

     ```typescript
	import { KlaviyoPush } from '@triniwiz/nativescript-klaviyo-push-sdk';
	import { Klaviyo } from '@triniwiz/nativescript-klaviyo-sdk';
   

	KlaviyoPush.getInstance().onToken = (token) => {
		  Klaviyo.setPushToken(token)
	};
   ```

#### Notification Permission

Requesting user permission to display notifications can be managed by doing the following


   ```typescript
   import { KlaviyoPush, AuthorizationStatus } from '@triniwiz/nativescript-klaviyo-push-sdk';
async function requestUserPermission() {
	const authStatus = await MessagingCore.getInstance().requestPermission({
		ios: {
			alert: true,
		},
	});
	const enabled = authStatus === AuthorizationStatus.AUTHORIZED || authStatus === AuthorizationStatus.PROVISIONAL;

	if (enabled) {
		console.log('Authorization status:', authStatus);

		const didRegister = await requestUserPermission.getInstance().registerDeviceForRemoteMessages();
	}
}
   ```

### Receiving Push Notifications

You can send test notifications to a specific token using the
[push notification preview](https://help.klaviyo.com/hc/en-us/articles/18011985278875)
feature in order to test your integration.

#### Rich Push

[Rich Push](https://help.klaviyo.com/hc/en-us/articles/16917302437275) is the ability to add images to
push notification messages. On iOS, you will need to implement an extension service to attach images to notifications.
No additional setup is needed to support rich push on Android.

- [Android](https://github.com/klaviyo/klaviyo-android-sdk#Rich-Push)
- [iOS](https://github.com/klaviyo/klaviyo-swift-sdk#Rich-Push)

#### Badge Count

Klaviyo supports setting or incrementing the badge count on iOS when you send a push notification.
To enable this functionality, you will need to implement a notification service extension and app group
as detailed in the [Swift SDK installation instructions](https://github.com/klaviyo/klaviyo-swift-sdk?tab=readme-ov-file#installation).
See the [badge count documentation](https://github.com/klaviyo/klaviyo-swift-sdk?tab=readme-ov-file#badge-count) for more details and the example app for reference.
Android automatically handles badge counts, and no additional setup is needed.

#### Tracking Open Events

The Klaviyo NativeScript SDK handles tracking the events if it contains a deepLink the callback will be triggered

  ```typescript
import { registerUniversalLinkCallback } from "@nativescript-community/universal-links";


 registerUniversalLinkCallback(ul => {

    });


	```

#### Deep Linking

[Deep Links](https://help.klaviyo.com/hc/en-us/articles/14750403974043) allow you to navigate to a particular
page within your app in response to the user opening a notification. Familiarize yourself with the
[React Native Guide](https://reactnative.dev/docs/linking) to deep linking, then read through the platform-specific
instructions below.

- [Android](https://github.com/klaviyo/klaviyo-android-sdk#Deep-Linking) instructions for handling intent filters
- [iOS](https://github.com/klaviyo/klaviyo-swift-sdk#Deep-Linking)


```typescript
import { Linking } from 'react-native';

import { registerUniversalLinkCallback, getUniversalLink } from "@nativescript-community/universal-links";


 registerUniversalLinkCallback(ul => {

    });


//  last universal link which opened the app
getUniversalLink()

```

#### Silent Push Notifications
Silent push notifications (also known as background pushes) allow your app to receive payloads from Klaviyo without displaying a visible alert to the user. These are typically used to trigger background behavior, such as displaying content, personalizing the app interface, or downloading new information from a server. To receive silent push notifications, follow the platform-specific instructions below:
- [Android](https://github.com/klaviyo/klaviyo-android-sdk#Silent-Push-Notifications)
- [iOS](https://github.com/klaviyo/klaviyo-swift-sdk#Silent-Push-Notifications)

#### Custom Data
Klaviyo messages can also include key-value pairs (custom data) for both standard and silent push notifications. To receive custom data, follow the platform-specific instructions below:
- [Android](https://github.com/klaviyo/klaviyo-android-sdk#Custom-Data)
- [iOS](https://github.com/klaviyo/klaviyo-swift-sdk#Custom-Data)


     ```typescript
	import { KlaviyoPush } from '@triniwiz/nativescript-klaviyo-push-sdk';

   
	KlaviyoPush.getInstance().onKlaviyoCustomDataMessage = (data) => {
		  console.log('custom data', data)
	};
   ```


## License

Apache License Version 2.0

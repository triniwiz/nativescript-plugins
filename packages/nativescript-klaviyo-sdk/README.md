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

```
import { Klaviyo } from "klaviyo-react-native-sdk";
...

// call this any time after initializing your public API key
Klaviyo.registerForInAppForms();
```

### Behavior

Once `registerForInAppForms()` is called, the SDK will load form data for your account and display no more than one form within 15 seconds, based on form targeting and behavior settings.

You can call `registerForInAppForms()` any time after initializing with your public API key to control when and where in your app's UI a form can appear. It is safe to register multiple times per application session. The SDK will internally prevent multiple forms appearing at once.

Consider how often you want to register for forms. For example, registering from a lifecycle event is advisable so that the user has multiple opportunities to see your messaging if they are browsing your app for a prolonged period. However, be advised the form will be shown as soon as it is ready, so you may still need to condition this based on the user's context within your application. Future versions of this product will provide more control in this regard.

**Note**: At this time, when device orientation changes any currently visible form is closed and will not be re-displayed automatically.


## License

Apache License Version 2.0

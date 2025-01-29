# @triniwiz/nativescript-descope

# Descope for NativeScript

The Descope SDK for NativeScript provides convenient access to Descope for an application written on top of NativeScript.

## Requirements

- A Descope `Project ID` is required for using the SDK. Find it on the [project page in the Descope Console](https://app.descope.com/settings/project).

## Installing the SDK

Install the package with:

```bash
yarn add @triniwiz/nativescript-descope
# or
npm i --save @triniwiz/nativescript-descope
```

## Usage

### Init SDK

```ts
import { Descope } from '@triniwiz/nativescript-descope';

// Where your application state is being created
Descope.setup({ projectId: '<Your-Project-ID>' });

// Optionally, you can configure the SDK to your needs
Descope.setup({ projectId: '<Your-Project-ID>', baseUrl: 'https://my.app.com' });

// Load any available sessions
await Descope.sessionManager.loadSession();
```

## Session Management

The session manager takes care of loading and saving the session as well
as ensuring that it's refreshed when needed. When the user completes a sign
in flow successfully you should set the `DescopeSession` as the
active session of the session manager.

```ts
import { Descope } from '@triniwiz/nativescript-descope';

const resp = await Descope.otp.email.verify('andy@example.com', '123456');
Descope.sessionManager.manageSession(resp.data);
```

The session manager can then be used at any time to ensure the session
is valid and to authenticate outgoing requests to your backend with a
bearer token authorization header.

```ts
const res = await fetch('/path/to/server/api', {
	headers: {
		Authorization: `Bearer ${Descope.sessionManager.session.sessionJwt}`,
	},
});
```

When the application is relaunched use the `Descope.sessionManager` to load any existing session. Once the `isSessionLoading` flag is `false`, you can check if there's a session available (i.e. an authenticated user).

When the user wants to sign out of the application we revoke the
active session and clear it from the session manager:

```js
import { Descope } from '@triniwiz/nativescript-descope';

// Load any available sessions
await Descope.sessionManager.loadSession();

// Logout a session
await descope.logout(session.refreshJwt);
await clearSession(resp.data);
```

### Accessing the Session

The session information can be accessed via the `Descope.sessionManager`.

### Refreshing the Session

The guiding principal of refreshing the session is the same, regardless of any specific
app architecture or network framework.

Before every authenticated request, add your authorization header to the request the way your server
expects to receive it. As an optimization it is also possible to call `refreshSessionIfAboutToExpire()`.
This async function will preemptively refresh the session token if it is about to expire, or already expired.
That code might look something like this:

```ts
import { Descope } from '@triniwiz/nativescript-descope';
// ... before every authenticated request
try {
	// refresh if needed
	await Descope.sessionManager.refreshSessionIfAboutToExpire();
} catch (e) {
	// fail silently - as this shouldn't affect the request being performed
}

// add authorization header
request.headers.Authorization = `Bearer ${Descope.sessionManager.session.sessionJwt}`;
```

After every error response - if the server responds that the session token is invalid, i.e.
`401` or your equivalent, try to refresh the session token and repeat the request. Otherwise,
clear the session and prompt the user to re-authenticate.
That code might look something like this

```js
// ... on every error response
// assuming 401 is returned ONLY when the session JWT is invalid
if (error.status === 401) {
	try {
		const resp = await descope.refresh(Descope.sessionManager.session.refreshJwt);
		await updateTokens(resp.data.sessionJwt, resp.data.refreshJwt);

		// you can now retry the original request
		// NEED TO MAKE SURE THAT THIS RETRY IS ONLY PERFORMED ONCE
		// otherwise, an endless loop of failed requests might occur
		retryRequest();
	} catch (e) {
		// clear the session as the user must re-authenticate
	}
}
```

## Running Flows

We can authenticate users by building and running Flows. Flows are built in the Descope
[flow editor](https://app.descope.com/flows). The editor allows you to easily
define both the behavior and the UI that take the user through their
authentication journey. Read more about it in the Descope
[getting started](https://docs.descope.com/build/guides/gettingstarted/) guide.

### Setup #1: Define and host your flow

Before we can run a flow, it must first be defined and hosted. Every project
comes with predefined flows out of the box. You can customize your flows to suit your needs
and host it. Follow
the [getting started](https://docs.descope.com/build/guides/gettingstarted/) guide for more details.
You can host the flow yourself or leverage Descope's hosted flow page. Read more about it [here](https://docs.descope.com/customize/auth/oidc/#hosted-flow-application).
You can also check out the [auth-hosting repo itself](https://github.com/descope/auth-hosting).

### (Android Only) Setup #2: Enable App Links

Running a flow via the NativeScript SDK, when targeting Android, requires setting up [App Links](https://developer.android.com/training/app-links#android-app-links).
This is essential for the SDK to be notified when the user has successfully
authenticated using a flow. Once you have a domain set up and
[verified](https://developer.android.com/training/app-links/verify-android-applinks)
for sending App Links, you'll need to handle the incoming deep links in your app:

#### Define a route to handle the App Link sent at the end of a flow

_this code example demonstrates how app links should be handled - you can customize it to fit your app_

```ts
import { Descope } from '@triniwiz/nativescript-descope';
import { registerUniversalLinkCallback } from '@nativescript-community/universal-links';
registerUniversalLinkCallback((url) => {
	// This path needs to correspond to the deep link you configured in your manifest - see below
	try {
		await Descope.flow.exchange(url); // Call exchange to complete the flow
	} catch (e) {
		// Handle errors here
	}
});
```

#### Add a matching Manifest declaration

```xml
<activity
        android:name=".MainActivity"
        android:exported="true"
        android:launchMode="singleTask"
        android:theme="@style/LaunchTheme"
        android:configChanges="orientation|keyboardHidden|keyboard|screenSize|smallestScreenSize|locale|layoutDirection|fontScale|screenLayout|density|uiMode"
        android:hardwareAccelerated="true"
        android:windowSoftInputMode="adjustResize">

    <!-- add the following at the end of the activity tag, after anything you have defined currently -->

    <intent-filter android:autoVerify="true"> <!-- autoVerify required for app links -->
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <!-- replace with your host, the path can change must must be reflected when running the flow -->
        <!-- the path should correspond with the routing path defined above -->
        <data android:scheme="https" android:host="<YOUR_HOST_HERE>" android:path="/auth" />
        <!-- see magic link setup below for more details -->
        <data android:scheme="https" android:host="<YOUR_HOST_HERE>" android:path="/magiclink" />
    </intent-filter>

    <!-- Optional: App Links are blocked by default on Opera and some other browsers. Add a custom scheme for that use case specifically -->
    <intent-filter android:autoVerify="true">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />

        <!-- replace with something unique. this will only be used as a backup for Opera and some other browsers. -->
        <data android:scheme="myapp" android:host="auth" />
    </intent-filter>
</activity>
```

### (OPTIONAL) Setup #3: Support Magic Link Redirects

Supporting Magic Link authentication in flows requires some platform specific setup:

- On Android: add another path entry to the [App Links](https://developer.android.com/training/app-links#android-app-links).
  This is essentially another path in the same as the app link from the [previous setup step](#setup-2-enable-app-links),
  with different handling logic. Refer to the previous section for the manifest setup.
- On iOS: You'll need to [support associated domains](https://developer.apple.com/documentation/xcode/supporting-associated-domains?language=swift).

Regardless of the platform, another path is required to handle magic link redirects specifically. For the sake of this README, let's name
it `/magiclink`

#### Add the required Linking logic

_this code example demonstrates how app links or universal links should be handled - you can customize it to fit your app_

```ts
import { Descope } from '@triniwiz/nativescript-descope';
import { registerUniversalLinkCallback } from '@nativescript-community/universal-links';

registerUniversalLinkCallback((url) => {
	if (url === 'my-deep-link-for-authenticating') {
		try {
			await flow.exchange(event.url); // Call exchange to complete the flow
		} catch (e) {
			// Handle errors here
		}
	} else if (url === 'my-deep-link-for-magic-links') {
		// Adding the magic link handling here
		try {
			await flow.resume(url); // Resume the flow after returning from a magic link
		} catch (e) {
			// Handle errors here
		}
	}
});
```

### Run a Flow

After completing the prerequisite steps, it is now possible to run a flow.
The flow will run in a [Custom Tab](https://developer.chrome.com/docs/android/custom-tabs/) on Android,
or via [ASWebAuthenticationSession](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsession) on iOS.
Run the flow by calling the flow start function:

```js
import { Descope } from '@triniwiz/nativescript-descope';

try {
	// When starting a flow for an authenticated user, provide the authentication info
	let flowAuthentication;
	if (session) {
		flowAuthentication = {
			flowId: 'flow-id',
			refreshJwt: Descope.sessionManager.session.refreshJwt,
		};
	}
	const resp = await Descope.flow.start('<URL_FOR_FLOW_IN_SETUP_#1>', '<URL_FOR_APP_LINK_IN_SETUP_#2>', '<OPTIONAL_CUSTOM_SCHEME_FROM_SETUP_#2>', flowAuthentication);
	await Descope.sessionManager.manageSession(resp.data);
} catch (e) {
	// handle errors
}
```

When running on iOS nothing else is required. When running on Android, `flow.exchange()` function must be called.
See the [app link setup](#-android-only--setup-2--enable-app-links) for more details.


**For more SDK usage examples refer to [docs](https://docs.descope.com/build/guides/client_sdks/)**

## Learn More

To learn more please see the [Descope Documentation and API reference page](https://docs.descope.com/).

## License

Apache License Version 2.0

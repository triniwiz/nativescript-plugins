# NativeScript Radar.io
## Installation

```bash
npm install @triniwiz/nativescript-radar-io
```

To get a Radar publishable API key, [sign up for a Radar account](https://radar.io).

## IOS
### Configure project


> To track the user's location in the foreground, you must add a string for the NSLocationWhenInUseUsageDescription key in your Info.plist file if you haven't already. This string will be displayed when prompting the user for foreground location permissions.

> To track the user's location in the background, you must also add a string for the NSLocationAlwaysUsageDescription (iOS 10 and before) and NSLocationAlwaysAndWhenInUseUsageDescription (iOS 11 and later) keys in your Info.plist file if you haven't already. These strings will be displayed when prompting the user for background location permissions.

```xml
<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
<string>Your iOS 11 and higher background location usage description goes here. e.g., "This app uses your location in the background to recommend places nearby."</string>

<key>NSLocationAlwaysUsageDescription</key>
<string>Your iOS 10 and lower background location usage description goes here. e.g., "This app uses your location in the background to recommend places nearby."</string>

<key>NSLocationWhenInUseUsageDescription</key>
<string>Your foreground location usage description goes here. e.g., "This app uses your location in the foreground to recommend places nearby."</string>
```

For increased reliability and responsiveness in the background, you should also turn on Location updates. Note that this requires additional justification during App Store review. Learn [more](https://radar.io/documentation/sdk#ios-app-store).

**Add to Info.plist**

```xml
<key>UIBackgroundModes</key>
<array>
  <string>fetch</string>
  <string>location</string>
</array>
```


## Usage

### Import module

First, import the module:

```typescript
import { RadarIO } from '@triniwiz/nativescript-radar-io';
```

### Enable Places

If you are using Places, you must set Facebook as your place data provider.

To set Facebook as your place data provider, call:

```javascript
RadarIO.setPlacesProvider('facebook');
```

To disable Places later, call:

```javascript
RadarIO.setPlacesProvider('none');
```

Learn more about [Places](https://radar.io/documentation/places).

### Identify user

Until you identify the user, Radar will automatically identify the user by device ID.

To identify the user when logged in, call:

```javascript
RadarIO.setUserId(userId);
```

where `userId` is a stable unique ID string for the user.

Do not send any PII, like names, email addresses, or publicly available IDs, for `userId`. See [privacy best practices](https://help.radar.io/privacy/what-are-privacy-best-practices-for-radar) for more information.

To set an optional dictionary of custom metadata for the user, call:

```javascript
RadarIO.setMetadata(metadata);
```

where `metadata` is a JSON object with up to 16 keys and values of type string, boolean, or number.

Finally, to set an optional description for the user, displayed in the dashboard, call:

```javascript
RadarIO.setDescription(description);
```

where `description` is a string.

You only need to call these functions once, as these settings will be persisted across app sessions.

### Request permissions

Before tracking the user's location, the user must have granted location permissions for the app.

To determine the whether user has granted location permissions for the app, call:

```javascript
RadarIO.getPermissionsStatus().then((status) => {
  // do something with status
});
```

`status` will be a string, one of:

- `GRANTED`
- `DENIED`
- `UNKNOWN`

To request location permissions for the app, call:

```javascript
RadarIO.requestPermissions(background);
```

where `background` is a boolean indicating whether to request background location permissions or foreground location permissions. On Android, `background` will be ignored.

### Foreground tracking

Once you have initialized the SDK, you have identified the user, and the user has granted permissions, you can track the user's location.

To track the user's location in the foreground, call:

```javascript
RadarIO.trackOnce().then((result) => {
  // do something with result.location, result.events, result.user.geofences
}).catch((err) => {
  // optionally, do something with err
});
```

`err` will be a string, one of:

- `ERROR_PUBLISHABLE_KEY`: the SDK was not initialized
- `ERROR_PERMISSIONS`: the user has not granted location permissions for the app
- `ERROR_LOCATION`: location services were unavailable, or the location request timed out
- `ERROR_NETWORK`: the network was unavailable, or the network connection timed out
- `ERROR_UNAUTHORIZED`: the publishable API key is invalid
- `ERROR_SERVER`: an internal server error occurred
- `ERROR_UNKNOWN`: an unknown error occurred

### Background tracking

Once you have initialized the SDK, you have identified the user, and the user has granted permissions, you can start tracking the user's location in the background.

To start tracking the user's location in the background, call:

```javascript
RadarIO.startTracking();
```

Assuming you have configured your project properly, the SDK will wake up while the user is moving (usually every 3-5 minutes), then shut down when the user stops (usually within 5-10 minutes). To save battery, the SDK will not wake up when stopped, and the user must move at least 100 meters from a stop (sometimes more) to wake up the SDK. **Note that location updates may be delayed significantly by iOS [Low Power Mode](https://support.apple.com/en-us/HT205234), by Android [Doze Mode and App Standby](https://developer.android.com/training/monitoring-device-state/doze-standby.html) and [Background Location Limits](https://developer.android.com/about/versions/oreo/background-location-limits.html), or if the device has connectivity issues, low battery, or wi-fi disabled. These constraints apply to all uses of background location services on iOS and Android, not just Radar. See more about [accuracy and reliability](https://radar.io/documentation/sdk#accuracy).**

Optionally, you can configure advanced tracking options. See the [iOS background tracking documentation](https://radar.io/documentation/sdk#ios-background) and [Android background tracking documentation](https://radar.io/documentation/sdk#android-background) for descriptions of these options.

```javascript
RadarIO.startTracking({
  priority: 'responsiveness', // // use 'efficiency' to avoid Android vitals bad behavior thresholds (ignored on iOS)
  sync: 'possibleStateChanges', // use 'all' to sync all location updates ('possibleStateChanges' recommended)
  offline: 'replayStopped' // use 'replayOff' to disable offline replay ('replayStopped' recommended)
});
```

To stop tracking the user's location in the background (e.g., when the user logs out), call:

```javascript
RadarIO.stopTracking();
```

You only need to call these methods once, as these settings will be persisted across app sessions.

To listen for events, location updates, and errors, you can add event listeners:

```javascript
RadarIO.on('events', (result) => {
  // do something with result.events, result.user
});

RadarIO.on('location', (result) => {
  // do something with result.location, result.user
});

RadarIO.on('error', (err) => {
  // do something with err
});
```

Add event listeners outside of your component lifecycle (e.g., outside of `componentDidMount`) if you want them to work when the app is in the background.

You can also remove event listeners:

```javascript
RadarIO.off('events');

RadarIO.off('location');

RadarIO.off('error');
```

### Battery usage

For most users, background tracking with the native iOS and Android SDKs uses 1-2% battery per day. Learn more in the [SDK documentation](https://radar.io/documentation/sdk).

On Android, a receiver loads and parses the JavaScript bundle when the app is launched in the background. If you do not want to receive events in JavaScript and you want to disable this, add an override to your manifest:

```xml
<receiver
  tools:replace="android:enabled"
  android:name="com.github.triniwiz.radario.Receiver"
  android:enabled="false"
  android:exported="false" />
```

### Manual tracking

You can manually update the user's location by calling:

```javascript
const location = {
  latitude: 39.2904,
  longitude: -76.6122,
  accuracy: 65
};

RadarIO.updateLocation(location).then((result) => {
  // do something with result.events, result.user.geofences
}).catch((err) => {
  // optionally, do something with err
});
```


## License

Apache License Version 2.0

# nativescript-http

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![TotalDownloads][total-downloads-image]][npm-url]
[![Build Status][build-status]][build-url]

[build-status]:https://github.com/klippa-app/nativescript-http/workflows/Build%20CI/badge.svg
[build-url]:https://github.com/klippa-app/nativescript-http/actions
[npm-image]:http://img.shields.io/npm/v/@klippa/nativescript-http.svg
[npm-url]:https://npmjs.org/@klippa/nativescript-http
[downloads-image]:http://img.shields.io/npm/dm/@klippa/nativescript-http.svg
[total-downloads-image]:http://img.shields.io/npm/dt/@klippa/nativescript-http.svg?label=total%20downloads

:rocket: *The best way to do HTTP requests in NativeScript* :rocket:

**A drop-in replacement for the core HTTP with important improvements and additions like proper connection pooling, form data support and certificate pinning.**

## Features
* Ability to use without any code change
* Ability to make all http and image-cache requests go through this plugin
* Backwards compatible (behaves the same as core HTTP)
* Modern TLS & SSL security features
* Shared connection pooling reduces request latency
* Control over concurrency/connection pooling
* Silently recovers from common connection problems
* Everything runs on a native background thread
* Transparent GZIP to shrink response size
* HTTP/2 and SPDY support
* Support for directly posting ArrayBuffer/File/Blob/native(such as `java.io.File` and `NSData.dataWithContentsOfFile`) objects in the content property
* Multipart form data (multipart/form-data) support (for file uploads), supports ArrayBuffer, File, Blob and native objects (like `java.io.File` and `NSData.dataWithContentsOfFile`)
* Ability to set a global user agent
* Ability to control cookies
* Ability to control background image parsing
* Certificate/SSL pinning
* WebSockets
* ImageCache

## NativeScript Version Support
| NS Version | nativescript-http version | Install command | Docs |
| ---        | ---                       | ---             | --- |
| ^7.0.0 | ^2.0.0 | npm install @klippa/nativescript-http | This page |
| ^6.0.0 | ^1.0.0 | tnpm install @klippa/nativescript-http@^1.0.0 | [Here](https://github.com/klippa-app/nativescript-http/blob/ns-version/6/README.md) |

## Installation (NS 7)

```
npm install @klippa/nativescript-http
```

## Usage (NS 7)

### Automatically use this plugin for all HTTP calls

Since this is a drop-in replacement for the [core HTTP](https://docs.nativescript.org/ns-framework-modules/http),
we can automatically use this plugin for all HTTP calls in NativeScript that use the XHR framework to do HTTP calls, this includes:
 * Any JavaScript/Angular/Vue plugin that was created to be used in the browser
   * Axios
   * Angular HTTPClient
   * vue-resource
 * Any NativeScript http method
   * request
   * fetch
   * getString, getJSON, getImage, getFile, getBinary
 * NativeScript image-cache
 * Any NativeScript plugin that uses above methods internally

The way to do this is quite simple, we only have to import a plugin and add the plugin to the `plugins` array in the `webpack.config.js` file:

```javascript
// Add on top of page.
const NativeScriptHTTPPlugin = require("@klippa/nativescript-http/webpack");

// ... code

// Add our plugin to the webpack plugins array.
plugins: [
            // ... other plugins
            new NativeScriptHTTPPlugin()
]

// ... code
```

The `NativeScriptHTTPPlugin` can be given an object with the following properties: `replaceHTTP` (true/false) and `replaceImageCache` (true/false). This way you can control what the plugin replaces. If you don't give this options object we will replace both.

**Note: if you do this, you don't have to do the other integrations.**

**Note 2: please pay attention when upgrading the webpack file after an update to NativeScript, don't forget to re-add it**

#### Validate whether the automatic integration works by adding a self-check

If you are dependant on new functionality in this plugin, like handling form data or certificate pinning and you want to make sure the automatic integration always works, or you just want to play it safe, you can add the following self-check to your code:

*For core NativeScript / Vue / Angular:*

```typescript
import { Http, Dialogs } from "@nativescript/core";

Http.request({
    method: "GET",
    url: "https://nativescript-http-integration-check.local",
}).then((res) => {
    const jsonContent = res.content.toJSON();
    if (!jsonContent || !jsonContent.SelfCheck || jsonContent.SelfCheck !== "OK!") {
        Dialogs.alert("nativescript-http automatic integration failed! Request to https://nativescript-http-integration-check.local failed");
    }
}).catch((e) => {
    Dialogs.alert("nativescript-http automatic integration failed! Request to https://nativescript-http-integration-check.local failed");
});
```

*For Angular HttpClient:*

```typescript
import { Dialogs } from "@nativescript/core";

// Don't forget to inject HttpClient into your component.

// Add the following code in a place where you want to do the self-check in Angular.
this.http.get("https://nativescript-http-integration-check.local", {
    responseType: "json",
}).toPromise().then((res) => {
    // @ts-ignore
    if (!res || !res.SelfCheck || res.SelfCheck !== "OK!") {
        Dialogs.alert("nativescript-http automatic integration failed! Request to https://nativescript-http-integration-check.local failed");
    }
}).catch((e) => {
    Dialogs.alert("nativescript-http automatic integration failed! Request to https://nativescript-http-integration-check.local failed");
});
```

The URL `https://nativescript-http-integration-check.local` is hardcoded internally in this plugin to always return the same result.

If the request fails, or the content isn't the same as what we expect, we know something is wrong and we will get a dialog message that the automatic integration failed.

### Integration in code

Since this is a drop-in replacement for the [core HTTP](https://docs.nativescript.org/ns-framework-modules/http), you can execute the requests in the same way as with the Core HTTP, the only thing different is the import:

The format of options and the output of the request are the same as in core HTTP.

```typescript
import { HttpResponse } from "@nativescript/core";
import { Http } from "@klippa/nativescript-http";

Http.request({
   url: "https://httpbin.org/get",
   method: "GET"
}).then((response: HttpResponse) => {
   // Argument (response) is HttpResponse
}, (e) => {
});
```

### Integration in Angular

We also provide a drop-in replacement `NativeScriptHttpClientModule` from the `nativescript-angular` project.

In order to make Angular use our HTTP implementation, import our module like this:

```typescript
import { NativeScriptHttpClientModule } from "@klippa/nativescript-http/angular";

@NgModule({
    imports: [
        NativeScriptHttpClientModule
    ]
```

From now on you can make requests using Angular's HttpClient service like explained [here](https://docs.nativescript.org/angular/ng-framework-modules/http).

Be aware that this plugin tries to parse your image in the background so you won't have to do this in javascript (core HTTP does the same).
This value is not reachable from the Angular HTTP client, only through response.content.toImage(), so I would advice to use the HTTP client directly (so without the Angular HTTP client) if you are going to download images and display them directly.

## ImageCache

If you use the WebPack plugin, you don't have to do anything to use our ImageCache. It behaves the same as core so you don't have to change anything.

If you don't use the plugin. You can import the `ImageCache` class from `@klippa/nativescript-http`. It has the same API as the core ImageCache.

## Important note for apps with support for < Android 5 (SDK 21)

The default minSdk of NativeScript is 17, this is Android 4.2. We use OkHttp version 4, which [does not have support for Android 4](https://developer.squareup.com/blog/okhttp-3-13-requires-android-5/).

### If you do not care about Android 4 users

If you do not care about Android 4 users, edit the file `App_Resources/Android/app.gradle` and change the minSdk to 21:

```gradle
android {
  defaultConfig {
    minSdkVersion 21
    // ... other config.
  }
  // ... other config.
}
```
This let's the play store know the app can't be installed on anything lower than Android 5.

### If you do care about Android 4 users

Luckily, OkHtpp has a [special support branch called okhttp_3.12.x](https://github.com/square/okhttp/tree/okhttp_3.12.x) for older Android version, and because OkHttp is binary safe, which means all the methods have the same signature, we can just replace the version and everything just works™.

#### I don't mind using an older OkHttp version

If you don't mind everyone having an older OkHttp version, you can do the following easy™ fix:

Edit the file `App_Resources/Android/app.gradle`, add the following lines:

```gradle
android {
  // ... other config.
  configurations.all {
    resolutionStrategy.force "com.squareup.okhttp3:okhttp:3.12.+"
  }
}
```

This will force your build to use the support version of OkHttp.

Please note that this `okhttp_3.12.x` branch is support through December 31, 2020, and it will only get fixes for severe bugs or security issues.

This means you won't get any [cool features](https://github.com/square/okhttp/blob/master/CHANGELOG.md) from version 4.

#### I want to use the latest version for Android 5, and version 3.12 for Android 4

**NOTE: there is currently an [open issue](https://github.com/NativeScript/android-runtime/issues/1597) in the Android runtime that makes it impossible for the configuration below to work**

Luckily, this is also a possibility, but a little bit more difficult because you have to split your builds.

Edit the file `App_Resources/Android/app.gradle`, add the following lines:

```gradle
android {
  // ... other config.
  flavorDimensions "api"

  productFlavors {
    minApi21 {
      dimension "api"
      minSdkVersion 21
      versionNameSuffix "-minApi21"
    }

    minApi17 {
      dimension "api"
      minSdkVersion 17
      versionNameSuffix "-minApi17"
    }
  }
}

android.applicationVariants.all { variant ->
  if (variant.name.contains("minApi17")) {
    variant.getCompileConfiguration().resolutionStrategy.force "com.squareup.okhttp3:okhttp:3.12.+"
    variant.getRuntimeConfiguration().resolutionStrategy.force "com.squareup.okhttp3:okhttp:3.12.+"
  }

  variant.outputs.each { output ->
    if (variant.name.contains("minApi17")) {
      output.versionCodeOverride = 10000000 + variant.versionCode
    } else {
      output.versionCodeOverride = 20000000 + variant.versionCode
    }
  }
}
```

The part in `android` is to create 2 product flavors, one for minSdk 17, and one for minSdk 21. 

The part in `android.applicationVariants` consists of two things:

1. Making sure flavor minApi17 uses version 3.12.+ for minSdk 17
2. Making sure that every flavor has it's own build versionCode. It takes the version from the manifest and does (10000000 + manifestVersionCode) for minApi17 and (20000000 + manifestVersionCode) for minApi21.

This will create 2 APK's when you build a release, one for Android 4 (app-minApi17-release.apk), and one for Android 5 (app-minApi21-release.apk).
You can also combine this with ABI splitting.

When you upload both APK's to the Playstore, Google will make sure the proper APK get's distributed to the different devices.

## Comparison with other NativeScript HTTP Clients

| Plugin | Android | iOS | Background threads | Supports form data | Proper connection pooling | Can replace core http | Certificate / SSL Pinning | WebSockets | ImageCache |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| @nativescript/core/http | :heavy_check_mark: using Java HttpURLConnection | :heavy_check_mark: using NSURLSession | :heavy_check_mark: | :x: | :x: bad Android implementation | - | :x: | :x: | - |
| nativescript-background-http | :heavy_check_mark: using gotev/android-upload-service | :heavy_check_mark: using NSURLSession | :heavy_check_mark: (with a service) | :x: | Unknown | :x: | :x: | :x: | :x: |
| nativescript-http-formdata | :heavy_check_mark: using OkHttp4 | :heavy_check_mark: using OMGHTTPURLRQ | :x: | :heavy_check_mark: | :x: bad OkHttp implementation | :x: | :x: | :x: | :x: |
| nativescript-okhttp | :heavy_check_mark: using OkHttp2 | :x: | :x: | :x: | :x: bad OkHttp implementation | :x: | :x: | :x: | :x: |
| nativescript-https | :heavy_check_mark: using OkHttp3 | :heavy_check_mark: using AFNetworking | :heavy_check_mark: | :x: | :heavy_check_mark: shared client | :white_check_mark: by manually replacing calls, data structures are (almost) the same | :heavy_check_mark: | :x: | :x: |
| @klippa/nativescript-http | :heavy_check_mark: using OkHttp4 | :heavy_check_mark: using NSURLSession | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: shared client | :heavy_check_mark: automatically and manually | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## Implementation differences with NativeScript Core HTTP
 
 * We only try to parse the response as Image when the Content-Type starts with `image/`
 * We use a default timeout of 60s for connect/write/read, you can change this using the timeout option
 * While the code of Core HTTP looks like it supports FormData, it only supports key/value and not files, we do support it with our `HTTPFormData` class.
 
## API

### Form data

By default this client behaves the same as the Core HTTP for FormData objects, meaning it will just encode it as key=value pairs and it does not support Blob/File objects.
It will be posted as `application/x-www-form-urlencoded` unless you override it using a custom header.

If you want to create multipart form data (multipart/form-data) requests, you can use the HTTPFormData class from this plugin.
You can create form data requests like this:

```typescript
import { HttpResponse } from "@nativescript/core";
import { Http, HTTPFormData, HTTPFormDataEntry } from "@klippa/nativescript-http";

const form = new HTTPFormData();
form.append("value", "Test");
// You can also append ArrayBuffer/File/Blob/native(such as java.io.File and NSData.dataWithContentsOfFile) objects directly to form here, but please keep in mind that only the File object has the ability to set a filename. And only Blob/File objects have the ability to set a content type.
// Use HTTPFormDataEntry if you want more control.

// formFile data can be a JavaScript ArrayBuffer but also native file objects like java.io.File and NSData.dataWithContentsOfFile.
const formFile = new HTTPFormDataEntry(new java.io.File(fileLocation), "test.png", "image/png");
form.append("file", formFile);

Http.request({
    url: "https://httpbin.org/post",
    method: "POST",
    content: form
}).then((response: HttpResponse) => {
    // Argument (response) is HttpResponse
}, (e) => {
});
```

**Note: this does not work with the Angular HTTPClient, because it tries to transform the HTTPFormData to json. Use the request() method for Multipart posting.**


### Controlling image decode (Android only)
The NativeScript HTTP implementation always tries to decode responses as image to make sure toImage() works fast.
However, a lot of times you don't want it to do this, as you are not expecting images.
By default this plugin only works like this when the endpoint returns a proper image content type (`ImageParseMethod.CONTENTTYPE`).
With this method you can control this behaviour, with `ImageParseMethod.ALWAYS` you revert to Core HTTP behaviour, with `ImageParseMethod.NEVER` you can completely disable it. 

Note: only has affect on Android, on iOS image decoding already only happens when you use toImage().

```typescript
import { setImageParseMethod, ImageParseMethod } from "@klippa/nativescript-http";

// Add this line where you want to change the image parse mode.
// Options are: NEVER/CONTENTTYPE/ALWAYS.
setImageParseMethod(ImageParseMethod.ALWAYS);
```

### Controlling cookies

Clear all cookies:

```typescript
import { clearCookies } from "@klippa/nativescript-http";

// Add this line where you want to clear cookies.
clearCookies();
```

### Controlling concurrency / connection pool limits

Note: only the domain limit has effect on iOS.

```typescript
import { setConcurrencyLimits } from "@klippa/nativescript-http";

// Add this line where you want to set the concurrency limits.
// First argument is total limit, second per domain.
setConcurrencyLimits(20, 5);
```

### Setting a global User Agent

```typescript
import { setUserAgent } from "@klippa/nativescript-http";

// Add this line where you want to set the user agent.
setUserAgent("MyCoolApp");
```

### WebSockets

Note: certificate pinning is not available for websockets on iOS. Sadly [SocketRocket removed support](https://github.com/facebook/SocketRocket/pull/534) for that.

Creating a WebSocket is quite simple in this plugin:

```typescript
import { newWebsocketConnection } from "@klippa/nativescript-http/websocket";

newWebsocketConnection({
    url: "wss://echo.websocket.org",
    method: "GET",
}, {
    // It's important to wrap callbacks in ngZone for Angular when you do anything binding related.
    // If you don't do this, Angular won't update the views.
    onClosed: (code: number, reason: string) => {
        // Invoked when both peers have indicated that no more messages will be transmitted and the connection has been successfully released.
        // No further calls to this callback will be made.
        console.log("onClosed", code, reason);
    },
    onFailure: (error) => {
        // Invoked when a web socket has been closed due to an error reading from or writing to the network.
        // Both outgoing and incoming messages may have been lost. No further calls to this callback will be made.
        console.log("onFailure", error);
    },
    onOpen: () => {
        // Invoked when a web socket has been accepted by the remote peer and may begin transmitting messages.
        console.log("onOpen");
    },
    onClosing: (code: number, reason: string) => {
        // Invoked when the remote peer has indicated that no more incoming messages will be transmitted.
        // This method will not be called on iOS.
        console.log("onClosing", code, reason);
    },
    onMessage: (text: string) => {
        // Invoked when a text (type 0x1) message has been received.
        console.log("onMessage", text);
    },
    onBinaryMessage: (data: ArrayBuffer) => {
        // Invoked when a binary (type 0x2) message has been received.
        console.log("onBinaryMessage", data);
    }
}).then((webSocket) => {
    // With the webSocket object you can send messages and close the connection.
    // Receiving a WebSocket here does not mean the connection worked, you have to check onFailure and onOpen for that.
});
```

### Certificate pinning

Please read about certificate pinning before you enable it.
It can have serious consequences. Good articles are [here](https://square.github.io/okhttp/4.x/okhttp/okhttp3/-certificate-pinner/) and [here](https://infinum.com/the-capsized-eight/how-to-make-your-ios-apps-more-secure-with-ssl-pinning).

You can use this [question on Stack Overflow](https://stackoverflow.com/questions/40404963/how-do-i-get-public-key-hash-for-ssl-pinning) to learn how to get the certificate hashes.

#### Always provide at least one backup pin
In order to prevent accidentally locking users out of your app, make sure you have at least one backup pin and that you have procedures in place to transition to using the backup pin if your primary pin can no longer be used. For example, if you pin to the public key of your server's certificate, you should generate a backup key that is stored somewhere safe. If you pin to an intermediate CA or a root CA, then you should also select an alternative CA that you are willing to switch to if your current CA (or their intermediate CA) becomes invalid for some reason.

If you do not have a backup pin, you could inadvertently prevent your app from working until you released a new version of your app, and your users updated it. One such incident led to a bank having to ask their CA to issue a new certificate using a deprecated intermediate CA in order to allow their users to use the app, or face weeks of the app being unusable.

```typescript
import { certificatePinningAdd, certificatePinningClear } from "@klippa/nativescript-http";

// Add this line where you want to pin the certificate to a specific domain. The second argument are the certificate hashes that you want to pin.
// You can use *.mydomain.com to also use this for direct subdomains, and **.mydomain.com for any subdomain.
// Note: for iOS, *.publicobject.com also behaves as **.publicobject.com due to limitation in TrustKit.
// Note 2: for Android, if you use the older version of OkHttp, the **. prefix does not work.
// Note 3: for iOS, you need to have at least 2 hashes, because Trustkit requires you to have a backup certificate.
certificatePinningAdd("mydomain.com", ["DCU5TkA8n3L8+QM7dyTjfRlxWibigF+1cxMzRhlJV4=", "Lh1dUR9y6Kja30RrAn7JKnbQG/uEtLMkBgFF2Fuihg=", "Vjs8r4z+80wjNcr1YKepWQboSIRi63WsWXhIMN+eWys="]);

// Use this to clear all certificate pins.
certificatePinningClear();
```

## Roadmap
 * Cache control
 * Allowing self signed certificates (WIP in feature/self-signed)

## About Klippa

[Klippa](https://www.klippa.com/en) is a scale-up from [Groningen, The Netherlands](https://goo.gl/maps/CcCGaPTBz3u8noSd6) and was founded in 2015 by six Dutch IT specialists with the goal to digitize paper processes with modern technologies.

We help clients enhance the effectiveness of their organization by using machine learning and OCR. Since 2015 more than a 1000 happy clients have been served with a variety of the software solutions that Klippa offers. Our passion is to help our clients to digitize paper processes by using smart apps, accounts payable software and data extraction by using OCR.

## License

The MIT License (MIT)


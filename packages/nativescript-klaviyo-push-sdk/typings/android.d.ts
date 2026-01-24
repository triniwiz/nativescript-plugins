declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module klaviyo {
					export module push {
						export class KlaviyoPush {
							public static class: java.lang.Class<io.github.triniwiz.plugins.klaviyo.push.KlaviyoPush>;
							public constructor();
							public static getExecutorsCount(): number;
							public static setOnCustomDataMessageListener(callback: io.github.triniwiz.plugins.klaviyo.push.KlaviyoPush.Callback2<java.util.Map<string,string>,com.google.firebase.messaging.RemoteMessage>): void;
							public static setOnTokenListener(callback: io.github.triniwiz.plugins.klaviyo.push.KlaviyoPush.Callback<string>): void;
							public static getToken(callback: io.github.triniwiz.plugins.klaviyo.push.KlaviyoPush.Callback<string>): void;
							public static setExecutorsCount(value: number): void;
							public static setOnNonKlaviyoMessageListener(callback: io.github.triniwiz.plugins.klaviyo.push.KlaviyoPush.Callback<com.google.firebase.messaging.RemoteMessage>): void;
							public static setOnMessageListener(callback: io.github.triniwiz.plugins.klaviyo.push.KlaviyoPush.Callback<com.google.firebase.messaging.RemoteMessage>): void;
						}
						export module KlaviyoPush {
							export class Callback<T>  extends java.lang.Object {
								public static class: java.lang.Class<io.github.triniwiz.plugins.klaviyo.push.KlaviyoPush.Callback<any>>;
								/**
								 * Constructs a new instance of the io.github.triniwiz.plugins.klaviyo.push.KlaviyoPush$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onSuccess(param0: T): void;
									onError(param0: any): void;
								});
								public constructor();
								public onError(param0: any): void;
								public onSuccess(param0: T): void;
							}
							export class Callback2<U, T>  extends java.lang.Object {
								public static class: java.lang.Class<io.github.triniwiz.plugins.klaviyo.push.KlaviyoPush.Callback2<any,any>>;
								/**
								 * Constructs a new instance of the io.github.triniwiz.plugins.klaviyo.push.KlaviyoPush$Callback2 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onSuccess(param0: U, param1: T): void;
									onError(param0: any): void;
								});
								public constructor();
								public onSuccess(param0: U, param1: T): void;
								public onError(param0: any): void;
							}
							export class Companion {
								public static class: java.lang.Class<io.github.triniwiz.plugins.klaviyo.push.KlaviyoPush.Companion>;
								public getExecutorsCount(): number;
								public setOnCustomDataMessageListener(callback: io.github.triniwiz.plugins.klaviyo.push.KlaviyoPush.Callback2<java.util.Map<string,string>,com.google.firebase.messaging.RemoteMessage>): void;
								public setExecutorsCount(value: number): void;
								public setOnTokenListener(callback: io.github.triniwiz.plugins.klaviyo.push.KlaviyoPush.Callback<string>): void;
								public setOnMessageListener(callback: io.github.triniwiz.plugins.klaviyo.push.KlaviyoPush.Callback<com.google.firebase.messaging.RemoteMessage>): void;
								public setOnNonKlaviyoMessageListener(callback: io.github.triniwiz.plugins.klaviyo.push.KlaviyoPush.Callback<com.google.firebase.messaging.RemoteMessage>): void;
								public getToken(messaging: com.google.firebase.messaging.FirebaseMessaging, callback: io.github.triniwiz.plugins.klaviyo.push.KlaviyoPush.Callback<string>): void;
							}
							export class Service {
								public static class: java.lang.Class<io.github.triniwiz.plugins.klaviyo.push.KlaviyoPush.Service>;
								public onMessageReceived(message: com.google.firebase.messaging.RemoteMessage): void;
								public onKlaviyoNotificationMessageReceived(message: com.google.firebase.messaging.RemoteMessage): void;
								public constructor();
								public onNewToken(newToken: string): void;
								public onKlaviyoCustomDataMessageReceived(customData: java.util.Map<string,string>, message: com.google.firebase.messaging.RemoteMessage): void;
							}
						}
					}
				}
			}
		}
	}
}

//Generics information:
//io.github.triniwiz.plugins.klaviyo.push.KlaviyoPush.Callback:1
//io.github.triniwiz.plugins.klaviyo.push.KlaviyoPush.Callback2:2


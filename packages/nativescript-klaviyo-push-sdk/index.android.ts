import { Application, Device, Utils } from '@nativescript/core';
import { AuthorizationStatus } from './common';

let lastActivity: WeakRef<androidx.appcompat.app.AppCompatActivity>;
let requestPermissionLauncher: androidx.activity.result.ActivityResultLauncher<any>;
const _permissionQueue: { resolve: Function; reject: Function }[] = [];

function register(args: any) {
	if (!lastActivity) {
		// Some activities do not implement activity result API
		if (args.activity.registerForActivityResult) {
			lastActivity = new WeakRef(args.activity);
			requestPermissionLauncher = args.activity.registerForActivityResult(
				new androidx.activity.result.contract.ActivityResultContracts.RequestPermission(),
				new androidx.activity.result.ActivityResultCallback({
					onActivityResult(isGranted: boolean) {
						_permissionQueue.forEach((callback) => {
							callback.resolve(isGranted ? 0 : 1);
						});
						_permissionQueue.splice(0);
					},
				})
			);
		} else {
			Application.android.once('activityCreated', register);
		}
	}
}

Application.android.once('activityCreated', register);

Application.android.on('activityDestroyed', (args) => {
	const activity = lastActivity?.get?.();
	if (activity && args.activity === activity) {
		requestPermissionLauncher?.unregister?.();
		lastActivity = undefined;
		Application.android.once('activityCreated', register);
	}
});

export class KlaviyoPush {
	private static _instance: KlaviyoPush;
	private static _onToken;
	private static _onMessage;
	private static _onNonKlaviyoMessageListener;
	private static _onKlaviyoCustomDataMessage;

	onToken?: (token: string) => void;
	onMessage?: (message: any, nativeMessage: any) => void;
	onNonKlaviyoMessageListener?: (message: any) => void;
	onKlaviyoCustomDataMessage?: (data: Record<any, any>, message: any) => void;

	showNotificationsWhenInForeground: boolean;

	getCurrentToken(): Promise<string> {
		return new Promise((resolve, reject) => {
			io.github.triniwiz.plugins.klaviyo.push.KlaviyoPush.getToken(
				new io.github.triniwiz.plugins.klaviyo.push.KlaviyoPush.Callback({
					onSuccess(result) {
						resolve(result);
					},
					onError(error) {
						const err: any = new Error(error?.getMessage?.() || 'Failed to getToken');
						err.native = error;
						reject(err);
					},
				})
			);
		});
	}

	hasPermission(): Promise<AuthorizationStatus> {
		const context = Utils.android.getApplicationContext();
		if (parseInt(Device.sdkVersion) >= 33) {
			if (androidx.core.content.ContextCompat.checkSelfPermission(context, (android as any).Manifest.permission.POST_NOTIFICATIONS) === android.content.pm.PackageManager.PERMISSION_GRANTED) {
				return Promise.resolve(0);
			} else {
				return Promise.resolve(1);
			}
		}
		return Promise.resolve(androidx.core.app.NotificationManagerCompat.from(Utils.android.getApplicationContext()).areNotificationsEnabled() ? 0 : 1);
	}

	registerDeviceForRemoteMessages(): Promise<void> {
		return Promise.resolve();
	}
	requestPermission(permissions?: any): Promise<AuthorizationStatus> {
		if (parseInt(Device.sdkVersion) >= 33) {
			const activity: androidx.appcompat.app.AppCompatActivity = Application.android.foregroundActivity || Application.android.startActivity;

			return new Promise((resolve, reject) => {
				const requestPermission = (activity: androidx.appcompat.app.AppCompatActivity) => {
					Application.android.on('activityRequestPermissions', (event) => {
						if (event.requestCode === 1001) {
							if (event.grantResults && event.grantResults.length > 0 && event.grantResults[0] === android.content.pm.PackageManager.PERMISSION_GRANTED) {
								resolve(0);
							} else {
								reject(1);
							}
						}
					});
					const perms = Array.create('java.lang.String', 1);
					perms[0] = (android as any).Manifest.permission.POST_NOTIFICATIONS;
					activity.requestPermissions(perms, 1001);
				};

				if (!activity) {
					Application.android.once('activityCreated', (args: any) => {
						requestPermission(args.activity);
					});
				} else {
					requestPermission(activity);
				}
			});
		}
		return this.hasPermission();
	}

	unregisterDeviceForRemoteMessages(): Promise<void> {
		return Promise.resolve();
	}

	get isDeviceRegisteredForRemoteMessages(): boolean {
		return androidx.core.app.NotificationManagerCompat.from(Utils.android.getApplicationContext()).areNotificationsEnabled();
	}

	static getInstance(): KlaviyoPush {
		const instance = this._instance || (this._instance = new KlaviyoPush());
		const ref = new WeakRef(instance);
		if (!KlaviyoPush._onToken) {
			KlaviyoPush._onToken = new io.github.triniwiz.plugins.klaviyo.push.KlaviyoPush.Callback({
				onSuccess(token: string) {
					const owner = ref.get();
					if (owner && owner.onToken) {
						owner.onToken(token);
					}
				},
				onError(error) {},
			});

			io.github.triniwiz.plugins.klaviyo.push.KlaviyoPush.setOnTokenListener(KlaviyoPush._onToken);
		}

		if (!KlaviyoPush._onMessage) {
			KlaviyoPush._onMessage = new io.github.triniwiz.plugins.klaviyo.push.KlaviyoPush.Callback({
				onSuccess(message: any) {
					const owner = ref.get();
					if (owner && owner.onMessage) {
						try {
							owner.onMessage(Utils.dataDeserialize(message), message);
						} catch (error) {}
					}
				},
				onError(error) {},
			});

			io.github.triniwiz.plugins.klaviyo.push.KlaviyoPush.setOnMessageListener(KlaviyoPush._onMessage);
		}

		if (!KlaviyoPush._onNonKlaviyoMessageListener) {
			KlaviyoPush._onNonKlaviyoMessageListener = new io.github.triniwiz.plugins.klaviyo.push.KlaviyoPush.Callback({
				onSuccess(message: any) {
					const owner = ref.get();
					if (owner && owner.onNonKlaviyoMessageListener) {
						try {
							owner.onNonKlaviyoMessageListener(Utils.dataDeserialize(message));
						} catch (error) {}
					}
				},
				onError(error) {},
			});

			io.github.triniwiz.plugins.klaviyo.push.KlaviyoPush.setOnNonKlaviyoMessageListener(KlaviyoPush._onNonKlaviyoMessageListener);
		}

		if (!KlaviyoPush._onKlaviyoCustomDataMessage) {
			KlaviyoPush._onKlaviyoCustomDataMessage = new io.github.triniwiz.plugins.klaviyo.push.KlaviyoPush.Callback2({
				onSuccess(data: any, message: any) {
					const owner = ref.get();
					if (owner && owner.onKlaviyoCustomDataMessage) {
						try {
							owner.onKlaviyoCustomDataMessage(Utils.dataDeserialize(data), Utils.dataDeserialize(message));
						} catch (error) {}
					}
				},
				onError(error) {},
			});

			io.github.triniwiz.plugins.klaviyo.push.KlaviyoPush.setOnCustomDataMessageListener(KlaviyoPush._onKlaviyoCustomDataMessage);
		}

		return instance;
	}
}

export { AuthorizationStatus } from './common';

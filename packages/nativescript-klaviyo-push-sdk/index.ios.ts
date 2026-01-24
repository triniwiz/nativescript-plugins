import { Application, ApplicationSettings, Device, Utils } from '@nativescript/core';
import { AuthorizationStatus } from './common';
import { Permissions } from '.';

const REMOTE_NOTIFICATIONS_REGISTRATION_STATUS = 'io.github.triniwiz.klaviyo.notifications.status';

export class KlaviyoPush {
	private static _instance: KlaviyoPush;
	private static _onToken;
	private static _onMessage;
	private static _onNonKlaviyoMessageListener;
	private static _onKlaviyoCustomDataMessage;

	private _APNSTokenString: string;

	onToken?: (token: string) => void;
	onMessage?: (message: any, nativeMessage: any) => void;
	onNonKlaviyoMessageListener?: (message: any) => void;
	onKlaviyoCustomDataMessage?: (data: Record<any, any>, message: any) => void;

	get showNotificationsWhenInForeground(): boolean {
		return NSCKlaviyoPush.showNotificationsWhenInForeground;
	}

	set showNotificationsWhenInForeground(value: boolean) {
		NSCKlaviyoPush.showNotificationsWhenInForeground = value;
	}

	_hasPermission(resolve, reject) {
		if (parseInt(Device.osVersion) >= 10) {
			UNUserNotificationCenter.currentNotificationCenter().getNotificationSettingsWithCompletionHandler((settings) => {
				let status = AuthorizationStatus.NOT_DETERMINED;
				switch (settings.authorizationStatus) {
					case UNAuthorizationStatus.Authorized:
						status = AuthorizationStatus.AUTHORIZED;
						break;
					case UNAuthorizationStatus.Denied:
						status = AuthorizationStatus.DENIED;
						break;
					case UNAuthorizationStatus.Ephemeral:
						status = AuthorizationStatus.EPHEMERAL;
						break;
					case UNAuthorizationStatus.Provisional:
						status = AuthorizationStatus.PROVISIONAL;
						break;
					case UNAuthorizationStatus.NotDetermined:
						status = AuthorizationStatus.NOT_DETERMINED;
						break;
				}
				resolve(status);
			});
		} else {
			resolve(AuthorizationStatus.AUTHORIZED);
		}
	}

	hasPermission(): Promise<AuthorizationStatus> {
		return new Promise((resolve, reject) => {
			this._hasPermission(resolve, reject);
		});
	}

	private _getTokenQeueue: { resolve: (string) => void; reject: (any?) => void }[] = [];

	registerDeviceForRemoteMessages(): Promise<void> {
		return new Promise((resolve, reject) => {
			if (NSCKlaviyoPush.isSimulator()) {
				ApplicationSettings.setBoolean(REMOTE_NOTIFICATIONS_REGISTRATION_STATUS, true);
				resolve();
			}
			NSCKlaviyoPush.registerDeviceForRemoteMessagesCallback = (result, error) => {
				if (error) {
					const err: any = new Error(error?.localizedDescription);
					err.native = error;
					if (this._getTokenQeueue.length > 0) {
						this._getTokenQeueue.forEach((item) => {
							item.reject(err);
						});
						this._getTokenQeueue.splice(0);
					}
					reject(err);
				} else {
					resolve();
				}
			};
			if (UIApplication?.sharedApplication) {
				UIApplication?.sharedApplication?.registerForRemoteNotifications?.();
			} else {
				const cb = (args) => {
					UIApplication?.sharedApplication?.registerForRemoteNotifications?.();
					Application.off('launch', cb);
				};
				Application.on('launch', cb);
			}
		});
	}

	requestPermission(permissions?: Permissions): Promise<AuthorizationStatus> {
		return new Promise((resolve, reject) => {
			const version = parseInt(Device.osVersion);
			if (version >= 10) {
				let options = UNAuthorizationOptionNone;
				if (permissions?.ios?.alert ?? true) {
					options = options | UNAuthorizationOptions.Alert;
				}

				if (permissions?.ios?.badge ?? true) {
					options = options | UNAuthorizationOptions.Badge;
				}

				if (permissions?.ios?.sound ?? true) {
					options = options | UNAuthorizationOptions.Sound;
				}

				if (permissions?.ios?.carPlay ?? true) {
					options = options | UNAuthorizationOptions.CarPlay;
				}

				if (version >= 12) {
					if (permissions?.ios?.criticalAlert) {
						options = options | UNAuthorizationOptions.CriticalAlert;
					}

					if (permissions?.ios?.provisional) {
						options = options | UNAuthorizationOptions.Provisional;
					}
				}

				if (version >= 13 && version <= 15) {
					options = options | UNAuthorizationOptions.Announcement;
				}

				UNUserNotificationCenter.currentNotificationCenter().requestAuthorizationWithOptionsCompletionHandler(options, (result, error) => {
					if (error) {
						const err: any = new Error(error?.localizedDescription);
						err.native = error;
						reject(err);
						reject(err);
					} else {
						this._hasPermission(resolve, reject);
					}
				});
			} else {
				const notificationTypes = UIUserNotificationType.Sound | UIUserNotificationType.Alert | UIUserNotificationType.Badge;
				const settings = UIUserNotificationSettings.settingsForTypesCategories(notificationTypes, null);
				UIApplication.sharedApplication.registerUserNotificationSettings(settings);
				this._hasPermission(resolve, reject);
			}
		});
	}

	unregisterDeviceForRemoteMessages(): Promise<void> {
		return new Promise((resolve, reject) => {
			try {
				UIApplication.sharedApplication.unregisterForRemoteNotifications();
				ApplicationSettings.setBoolean(REMOTE_NOTIFICATIONS_REGISTRATION_STATUS, false);
				resolve();
			} catch (e) {
				reject(e);
			}
		});
	}
	get isDeviceRegisteredForRemoteMessages(): boolean {
		return UIApplication.sharedApplication.registeredForRemoteNotifications;
	}

	getCurrentToken(): Promise<string> {
		return new Promise(async (resolve, reject) => {
			if (!NSCKlaviyoPush.isSimulator() && !UIApplication.sharedApplication.registeredForRemoteNotifications) {
				reject(new Error('You must be registered for remote messages before calling getToken, see MessagingCore.getInstance().registerDeviceForRemoteMessages()'));
				return;
			}
			if (!this._APNSTokenString) {
				if ((await this.hasPermission()) === AuthorizationStatus.DENIED) {
					reject(new Error('Device is unauthorized to receive an APNSToken token.'));
					return;
				}
				this._getTokenQeueue.push({ resolve, reject });
				return;
			}
			resolve(this._APNSTokenString);
		});
	}

	static getInstance(): KlaviyoPush {
		const instance = this._instance || (this._instance = new KlaviyoPush());
		const ref = new WeakRef(instance);
		if (!KlaviyoPush._onToken) {
			KlaviyoPush._onToken = (token) => {
				instance._APNSTokenString = token;
				const owner = ref.deref();
				if (owner && owner.onToken) {
					owner.onToken(instance._APNSTokenString);
				}

				if (instance._getTokenQeueue.length > 0) {
					instance._getTokenQeueue.forEach((item) => {
						item.resolve(instance._APNSTokenString);
					});
					instance._getTokenQeueue.splice(0);
				}
			};

			NSCKlaviyoPush.onTokenCallback = KlaviyoPush._onToken;
		}

		if (!KlaviyoPush._onMessage) {
			KlaviyoPush._onMessage = (message, completion: () => void) => {
				const owner = ref.deref();
				if (owner && owner.onMessage) {
					try {
						owner.onMessage(Utils.dataDeserialize(message), message);
					} catch (error) {}
				}
				completion();
			};
			NSCKlaviyoPush.onMessageCallback = KlaviyoPush._onMessage;
		}

		if (!KlaviyoPush._onNonKlaviyoMessageListener) {
			KlaviyoPush._onNonKlaviyoMessageListener = (message, completion: () => void) => {
				const owner = ref.deref();
				if (owner && owner.onNonKlaviyoMessageListener) {
					try {
						owner.onNonKlaviyoMessageListener(Utils.dataDeserialize(message));
					} catch (error) {}
				}
				completion;
			};

			NSCKlaviyoPush.onNonKlaviyoMessageCallback = KlaviyoPush._onNonKlaviyoMessageListener;
		}

		if (!KlaviyoPush._onKlaviyoCustomDataMessage) {
			KlaviyoPush._onKlaviyoCustomDataMessage = (data, message, completion: () => void) => {
				const owner = ref.deref();
				if (owner && owner.onKlaviyoCustomDataMessage) {
					try {
						owner.onKlaviyoCustomDataMessage(Utils.dataDeserialize(data), Utils.dataDeserialize(message));
					} catch (error) {}
				}
				completion();
			};
			NSCKlaviyoPush.onCustomDataMessageCallback = KlaviyoPush._onKlaviyoCustomDataMessage;
		}

		return instance;
	}
}

export { AuthorizationStatus } from './common';

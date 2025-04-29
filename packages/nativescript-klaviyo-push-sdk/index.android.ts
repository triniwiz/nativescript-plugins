import { Utils } from '@nativescript/core';


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
				}),
			);
		});
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
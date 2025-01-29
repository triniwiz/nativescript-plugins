import { native_ } from '../../common';
import { PrepFlowResponse } from './descopeModule';
import { Utils } from '@nativescript/core';
declare const io: any;

let instance: DescopeNative;

export class DescopeNative {
	[native_];

	static {
		io.github.triniwiz.plugins.descope.NSCDescope.init(Utils.android.getApplicationContext());
	}

	constructor() {
		this[native_] = new io.github.triniwiz.plugins.descope.NSCDescope(Utils.android.getCurrentActivity());
	}

	static getInstance() {
		if (!instance) {
			instance = new DescopeNative();
		}
		return instance;
	}

	get native() {
		return this[native_];
	}

	static prepFlow(): Promise<PrepFlowResponse> {
		return new Promise((resolve, reject) => {
			try {
				const flow = DescopeNative.getInstance()[native_].prepFlow();
				return resolve({
					codeChallenge: flow.get('codeChallenge'),
					codeVerifier: flow.get('codeVerifier'),
				});
			} catch (error) {
				reject(error);
			}
		});
	}
	static startFlow(flowUrl: string, deepLinkUrl: string, backupCustomScheme: string, codeChallenge: string): Promise<string> {
		return new Promise((resolve, reject) => {
			try {
				DescopeNative.getInstance()[native_].startFlow(
					flowUrl,
					deepLinkUrl,
					backupCustomScheme,
					codeChallenge,
					new io.github.triniwiz.plugins.descope.NSCDescope.Callback({
						onSuccess() {
							resolve('');
						},
						onError(error) {
							reject(error?.getMessage?.());
						},
					}),
				);
			} catch (error) {
				reject(error);
			}
		});
	}
	static resumeFlow(flowUrl: string, incomingUrl: string): Promise<void> {
		return new Promise((resolve, reject) => {
			try {
				DescopeNative.getInstance()[native_].resumeFlow(flowUrl, incomingUrl);
				resolve();
			} catch (error) {
				reject(error);
			}
		});
	}
	static loadItem(key: string): Promise<string> {
		return new Promise((resolve, reject) => {
			try {
				resolve(DescopeNative.getInstance()[native_].loadItem(key));
			} catch (error) {
				reject(error);
			}
		});
	}

	static saveItem(key: string, value: string): Promise<string> {
		return new Promise((resolve, reject) => {
			try {
				resolve(DescopeNative.getInstance()[native_].saveItemE(key, value));
			} catch (error) {
				reject(error);
			}
		});
	}

	static removeItem(key: string): Promise<string> {
		return new Promise((resolve, reject) => {
			try {
				resolve(DescopeNative.getInstance()[native_].removeItemError(key));
			} catch (error) {
				reject(error);
			}
		});
	}
}

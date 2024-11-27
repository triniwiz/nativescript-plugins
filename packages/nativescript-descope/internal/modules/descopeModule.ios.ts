import { native_ } from '../../common';
import { PrepFlowResponse } from './descopeModule';

let instance: NSCDescope;

function init() {
	if (!DescopeNative[native_]) {
		instance = NSCDescope.alloc().init();
	}
}

export class DescopeNative {
	static {
		init();
	}

	static getInstance() {
		init();
		return instance;
	}

	static prepFlow(): Promise<PrepFlowResponse> {
		return new Promise((resolve, reject) => {
			try {
				const flow = DescopeNative.getInstance().prepFlowAndReturnError();
				return resolve({
					codeChallenge: flow.objectForKey('codeChallenge'),
					codeVerifier: flow.objectForKey('codeVerifier'),
				});
			} catch (error) {
				reject(error);
			}
		});
	}
	static startFlow(flowUrl: string, deepLinkUrl: string, backupCustomScheme: string, codeChallenge: string): Promise<string> {
		return new Promise((resolve, reject) => {
			DescopeNative.getInstance().startFlowDeepLinkURLBackupCustomSchemeCodeChallengeCallback(flowUrl, deepLinkUrl, backupCustomScheme, codeChallenge, (response, error) => {
				if (error) {
					reject(new Error(error.localizedDescription));
				} else {
					resolve(response);
				}
			});
		});
	}
	static resumeFlow(flowUrl: string, incomingUrl: string): Promise<void> {
		return new Promise((resolve, reject) => {
			try {
				DescopeNative.getInstance().resumeFlowIncomingURLError(flowUrl, incomingUrl);
				resolve();
			} catch (error) {
				reject(error);
			}
		});
	}
	static loadItem(key: string): Promise<string> {
		return new Promise((resolve, reject) => {
			try {
				resolve(DescopeNative.getInstance().loadItemError(key));
			} catch (error) {
				reject(error);
			}
		});
	}
	static saveItem(key: string, value: string): Promise<string> {
		return new Promise((resolve, reject) => {
			try {
				resolve(DescopeNative.getInstance().saveItemError(key, value));
			} catch (error) {
				reject(error);
			}
		});
	}
	static removeItem(key: string): Promise<string> {
		return new Promise((resolve, reject) => {
			try {
				resolve(DescopeNative.getInstance().removeItemError(key));
			} catch (error) {
				reject(error);
			}
		});
	}
}

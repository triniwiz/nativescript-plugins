import { native_ } from '../../common';
import { PrepFlowResponse } from './descopeModule';

export class DescopeNative {
	[native_]: NSCDescope;

	constructor() {
		this[native_] = NSCDescope.alloc().init();
	}

	get native() {
		return this[native_];
	}

	prepFlow(): Promise<PrepFlowResponse> {
		return new Promise((resolve, reject) => {
			try {
				const flow = this.native.prepFlowAndReturnError();
				return resolve({
					codeChallenge: flow.objectForKey('codeChallenge'),
					codeVerifier: flow.objectForKey('codeVerifier'),
				});
			} catch (error) {
				reject(error);
			}
		});
	}
	startFlow(flowUrl: string, deepLinkUrl: string, backupCustomScheme: string, codeChallenge: string): Promise<string> {
		return new Promise((resolve, reject) => {
			this.native.startFlowDeepLinkURLBackupCustomSchemeCodeChallengeCallback(flowUrl, deepLinkUrl, backupCustomScheme, codeChallenge, (response, error) => {
				if (error) {
					reject(new Error(error.localizedDescription));
				} else {
					resolve(response);
				}
			});
		});
	}
	resumeFlow(flowUrl: string, incomingUrl: string): Promise<void> {
		return new Promise((resolve, reject) => {
			try {
				this.native.resumeFlowIncomingURLError(flowUrl, incomingUrl);
				resolve();
			} catch (error) {
				reject(error);
			}
		});
	}
	loadItem(key: string): Promise<string> {
		return new Promise((resolve, reject) => {
			try {
				resolve(this.native.loadItemError(key));
			} catch (error) {
				reject(error);
			}
		});
	}

	saveItem(key: string, value: string): Promise<string> {
		return new Promise((resolve, reject) => {
			try {
				resolve(this.native.saveItemError(key, value));
			} catch (error) {
				reject(error);
			}
		});
	}

	removeItem(key: string): Promise<string> {
		return new Promise((resolve, reject) => {
			try {
				resolve(this.native.removeItemError(key));
			} catch (error) {
				reject(error);
			}
		});
	}
}

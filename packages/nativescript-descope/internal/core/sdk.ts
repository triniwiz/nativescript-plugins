import createCoreSdk, { type ExtendedResponse } from '@descope/core-js-sdk';
const pkg = require('../../package.json');

export type Sdk = ReturnType<typeof createSdk>;
export type SdkLogger = Parameters<typeof createCoreSdk>[0]['logger'];
export type SdkConfig = Parameters<typeof createCoreSdk>;

export const createSdk = (...config: SdkConfig) => {
	if (config[0]) {
		// set base headers
		config[0].baseHeaders = baseHeaders;
		// set parse cookie logic for iOS and Android
		if (__ANDROID__ || __IOS__) {
			if (!config[0].hooks) config[0].hooks = {};
			config[0].hooks.transformResponse = parseCookies;
		}
	}
	return createCoreSdk(...config);
};

const parseCookies = async (mutableResponse: ExtendedResponse) => {
	const resp = await mutableResponse.json();
	if (mutableResponse.cookies.DS) {
		resp.sessionJwt = mutableResponse.cookies.DS;
	}
	if (mutableResponse.cookies.DSR) {
		resp.refreshJwt = mutableResponse.cookies.DSR;
	}
	return mutableResponse;
};

const baseHeaders = {
	'x-descope-sdk-name': 'nativescript',
	'x-descope-sdk-version': pkg.version,
};

import { transformResponse, type JWTResponse, type SdkResponse } from '@descope/core-js-sdk';
import type { Sdk } from '../internal/core/sdk';
import { DescopeNative } from '../internal/modules/descopeModule';
import type { FlowAuthentication } from '../types';
import { DescopeContext } from './context';

export class FlowManager {
	private context: DescopeContext;
	private currentFlowUrl?: string;
	private currentCodeVerifier?: string;
	private pendingFlowResolution?: {
		resolve: (value: SdkResponse<JWTResponse> | PromiseLike<SdkResponse<JWTResponse>>) => void;
		reject: (reason?: any) => void;
	};

	constructor(context: DescopeContext) {
		this.context = context;
	}

	async start(flowUrl: string, deepLinkUrl?: string, backupCustomScheme?: string, authentication?: FlowAuthentication): Promise<SdkResponse<JWTResponse>> {
		this.context.logger?.log?.('Starting flow');
		this.currentFlowUrl = flowUrl;

		const resp = await DescopeNative.prepFlow();

		if (authentication) {
			await primeFlow(this.context.sdk, resp.codeChallenge, authentication);
		}

		const callbackUrl = await DescopeNative.startFlow(flowUrl, deepLinkUrl || '', backupCustomScheme || '', resp.codeChallenge);

		if (__IOS__) {
			return exchangeForJwtResponse(this.context.sdk, resp.codeVerifier, callbackUrl);
		}

		this.currentCodeVerifier = resp.codeVerifier;
		return new Promise<SdkResponse<JWTResponse>>((resolve, reject) => {
			this.pendingFlowResolution = { resolve, reject };
		});
	}

	async resume(incomingUrl: string): Promise<void> {
		this.context.logger?.log?.('Resuming flow');
		if (!this.currentFlowUrl) {
			this.pendingFlowResolution?.reject('No ongoing flow waiting to resume');
			return;
		}
		await DescopeNative.resumeFlow(this.currentFlowUrl, incomingUrl);
	}

	async exchange(incomingUrl: string): Promise<void> {
		if (!this.currentCodeVerifier) {
			this.pendingFlowResolution?.reject('No ongoing flow waiting to exchange');
			return;
		}

		try {
			this.context.logger?.log?.('Exchanging flow code for JWTs');
			const resp = await exchangeForJwtResponse(this.context.sdk, this.currentCodeVerifier, incomingUrl);
			this.pendingFlowResolution?.resolve(resp);
		} catch (e) {
			this.context.logger?.error?.('Flow exchange failed', e);
			this.pendingFlowResolution?.reject(e);
		} finally {
			// Clear state
			this.currentFlowUrl = undefined;
			this.currentCodeVerifier = undefined;
			this.pendingFlowResolution = undefined;
		}
	}
}

const primeFlow = async (sdk: Sdk, codeChallenge: string, authentication: FlowAuthentication): Promise<SdkResponse<never>> => {
	return transformResponse(sdk.httpClient.post('/v1/flow/prime', { flowId: authentication.flowId, codeChallenge }, { token: authentication.refreshJwt }));
};

const exchangeForJwtResponse = async (sdk: Sdk, codeVerifier: string, callbackUrl: string): Promise<SdkResponse<JWTResponse>> => {
	const code = codeFromUrl(callbackUrl);
	if (code === '') throw new Error('Missing code parameter from callback URL');
	return transformResponse(sdk.httpClient.post('/v1/flow/exchange', { authorizationCode: code, codeVerifier }));
};

const codeFromUrl = (urlString: string): string => {
	const codeParam = 'code=';
	if (!urlString.includes(codeParam)) return '';
	const codeStart = urlString.indexOf(codeParam) + codeParam.length;
	const codeEnd = urlString.indexOf('&', codeStart) === -1 ? urlString.length : urlString.indexOf('&', codeStart);
	return urlString.substring(codeStart, codeEnd);
};

export type PrepFlowResponse = {
	codeChallenge: string;
	codeVerifier: string;
};

export class DescopeNative {
	static prepFlow(): Promise<PrepFlowResponse>;
	static startFlow(flowUrl: string, deepLinkUrl: string, backupCustomScheme: string, codeChallenge: string): Promise<string>;
	static resumeFlow(flowUrl: string, incomingUrl: string): Promise<void>;
	static loadItem(key: string): Promise<string>;
	static saveItem(key: string, value: string): Promise<string>;
	static removeItem(key: string): Promise<string>;
}

declare class NSCDescope extends NSObject {
	static alloc(): NSCDescope; // inherited from NSObject

	static new(): NSCDescope; // inherited from NSObject

	loadItemError(key: string): string;

	prepFlowAndReturnError(): NSDictionary<string, string>;

	removeItemError(key: string): string;

	resumeFlowIncomingURLError(flowURL: string, incomingURL: string): boolean;

	saveItemError(key: string, value: string): string;

	startFlowDeepLinkURLBackupCustomSchemeCodeChallengeCallback(flowURL: string, deepLinkURL: string, backupCustomScheme: string, codeChallenge: string, callback: (p1: string, p2: NSError) => void): void;
}

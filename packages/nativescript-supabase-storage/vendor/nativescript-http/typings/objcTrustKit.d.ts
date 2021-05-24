
declare class TSKPinningValidator extends NSObject {

	static alloc(): TSKPinningValidator; // inherited from NSObject

	static new(): TSKPinningValidator; // inherited from NSObject

	evaluateTrustForHostname(serverTrust: any, serverHostname: string): TSKTrustDecision;

	handleChallengeCompletionHandler(challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): boolean;
}

declare class TSKPinningValidatorResult extends NSObject {

	static alloc(): TSKPinningValidatorResult; // inherited from NSObject

	static new(): TSKPinningValidatorResult; // inherited from NSObject

	readonly certificateChain: NSArray<any>;

	readonly evaluationResult: TSKTrustEvaluationResult;

	readonly finalTrustDecision: TSKTrustDecision;

	readonly serverHostname: string;

	readonly validationDuration: number;
}

declare const enum TSKTrustDecision {

	ShouldAllowConnection = 0,

	ShouldBlockConnection = 1,

	DomainNotPinned = 2
}

declare const enum TSKTrustEvaluationResult {

	Success = 0,

	FailedNoMatchingPin = 1,

	FailedInvalidCertificateChain = 2,

	ErrorInvalidParameters = 3,

	FailedUserDefinedTrustAnchor = 4,

	ErrorCouldNotGenerateSpkiHash = 5
}

declare class TrustKit extends NSObject {

	static alloc(): TrustKit; // inherited from NSObject

	static initSharedInstanceWithConfiguration(trustKitConfig: NSDictionary<string, any>): void;

	static new(): TrustKit; // inherited from NSObject

	static setLoggerBlock(block: (p1: string) => void): void;

	static sharedInstance(): TrustKit;

	pinningValidator: TSKPinningValidator;

	pinningValidatorCallback: (p1: TSKPinningValidatorResult, p2: string, p3: NSDictionary<string, any>) => void;

	pinningValidatorCallbackQueue: NSObject;

	constructor(o: { configuration: NSDictionary<string, any>; });

	initWithConfiguration(trustKitConfig: NSDictionary<string, any>): this;
}

declare var TrustKitVersion: string;

declare var TrustKitVersionNumber: number;

declare var TrustKitVersionString: interop.Reference<number>;

declare var kTSKAdditionalTrustAnchors: string;

declare var kTSKAlgorithmEcDsaSecp256r1: string;

declare var kTSKAlgorithmEcDsaSecp384r1: string;

declare var kTSKAlgorithmRsa2048: string;

declare var kTSKAlgorithmRsa4096: string;

declare var kTSKDisableDefaultReportUri: string;

declare var kTSKEnforcePinning: string;

declare var kTSKExcludeSubdomainFromParentPolicy: string;

declare var kTSKExpirationDate: string;

declare var kTSKIncludeSubdomains: string;

declare var kTSKPinnedDomains: string;

declare var kTSKPublicKeyAlgorithms: string;

declare var kTSKPublicKeyHashes: string;

declare var kTSKReportUris: string;

declare var kTSKSwizzleNetworkDelegates: string;

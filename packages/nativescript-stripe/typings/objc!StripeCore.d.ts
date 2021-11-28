
declare class STPAnalyticsClient extends NSObject {

	static alloc(): STPAnalyticsClient; // inherited from NSObject

	static new(): STPAnalyticsClient; // inherited from NSObject

	static tokenTypeFromParameters(parameters: NSDictionary<any, any>): string;

	productUsage: NSSet<string>;

	static readonly sharedClient: STPAnalyticsClient;
}

declare class STPURLCallbackHandler extends NSObject {

	static alloc(): STPURLCallbackHandler; // inherited from NSObject

	static new(): STPURLCallbackHandler; // inherited from NSObject

	static shared(): STPURLCallbackHandler;

	handleURLCallback(url: NSURL): boolean;

	registerListenerForURL(listener: STPURLCallbackListener, url: NSURL): void;

	unregisterListener(listener: STPURLCallbackListener): void;
}

interface STPURLCallbackListener extends NSObjectProtocol {

	handleURLCallback(url: NSURL): boolean;
}
declare var STPURLCallbackListener: {

	prototype: STPURLCallbackListener;
};

declare var StripeCoreVersionNumber: number;

declare var StripeCoreVersionString: interop.Reference<number>;

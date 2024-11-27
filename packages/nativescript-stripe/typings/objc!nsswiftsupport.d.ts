declare class TNSStripe extends NSObject {
	static alloc(): TNSStripe; // inherited from NSObject

	static new(): TNSStripe; // inherited from NSObject

	static presentWithPaymentIntent(clientSecret: string, config: NSDictionary<any, any>, ctrl: UIViewController, callback: (p1: string, p2: NSError) => void): void;

	static presentWithSetupIntent(clientSecret: string, config: NSDictionary<any, any>, ctrl: UIViewController, callback: (p1: string, p2: NSError) => void): void;
}

declare class ImageCacheItUtils extends NSObject {
	static alloc(): ImageCacheItUtils; // inherited from NSObject

	static applyProcessing(ctx: CIContext, image: UIImage, filters: NSDictionary<string, any>, callback: (p1: UIImage) => void, queue: NSObject & OS_dispatch_queue): NSObject & OS_dispatch_queue;

	static createConcurrentQueue(name: string): NSObject & OS_dispatch_queue;

	static createContext(): CIContext;

	static createImageOverlay(image: UIImage, color: string): UIImage;

	static createImageOverlayColors(image: UIImage, width: number, height: number, red: number, green: number, blue: number, alpha: number): UIImage;

	static createSerialQueue(name: string): NSObject & OS_dispatch_queue;

	static new(): ImageCacheItUtils; // inherited from NSObject
}

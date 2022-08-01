
declare class ImageCacheItUtils extends NSObject {

	static alloc(): ImageCacheItUtils; // inherited from NSObject

	static applyProcessing(ctx: CIContext, image: UIImage, filters: NSDictionary<string, any>, callback: (p1: UIImage) => void, queue: NSObject): NSObject;

	static createConcurrentQueue(name: string): NSObject;

	static createImageOverlay(image: UIImage, color: string): UIImage;

	static createImageOverlayColors(image: UIImage, width: number, height: number, red: number, green: number, blue: number, alpha: number): UIImage;

	static createSerialQueue(name: string): NSObject;

	static new(): ImageCacheItUtils; // inherited from NSObject
}

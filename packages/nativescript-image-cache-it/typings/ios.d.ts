
declare class SDAnimatedImage extends UIImage implements SDAnimatedImageProtocol {

	static alloc(): SDAnimatedImage; // inherited from NSObject

	static new(): SDAnimatedImage; // inherited from NSObject

	static objectWithItemProviderDataTypeIdentifierError(data: NSData, typeIdentifier: string): SDAnimatedImage; // inherited from NSItemProviderReading

	readonly animatedImageFormat: number;

	readonly allFramesLoaded: boolean; // inherited from SDAnimatedImageProtocol

	readonly animatedImageData: NSData; // inherited from SDAnimatedImageProvider

	readonly animatedImageFrameCount: number; // inherited from SDAnimatedImageProvider

	readonly animatedImageLoopCount: number; // inherited from SDAnimatedImageProvider

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { animatedCoder: SDAnimatedImageCoder; scale: number; }); // inherited from SDAnimatedImageProtocol

	constructor(o: { data: NSData; scale: number; options: NSDictionary<string, any>; }); // inherited from SDAnimatedImageProtocol

	animatedImageDurationAtIndex(index: number): number;

	animatedImageFrameAtIndex(index: number): UIImage;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithAnimatedCoderScale(animatedCoder: SDAnimatedImageCoder, scale: number): this;

	initWithDataScaleOptions(data: NSData, scale: number, options: NSDictionary<string, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	preloadAllFrames(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	unloadAllFrames(): void;
}

interface SDAnimatedImageCoder extends SDAnimatedImageProvider, SDImageCoder {

	initWithAnimatedImageDataOptions?(data: NSData, options: NSDictionary<string, any>): SDAnimatedImageCoder;
}
declare var SDAnimatedImageCoder: {

	prototype: SDAnimatedImageCoder;
};

interface SDAnimatedImageProtocol extends SDAnimatedImageProvider {

	allFramesLoaded?: boolean;

	initWithAnimatedCoderScale?(animatedCoder: SDAnimatedImageCoder, scale: number): SDAnimatedImageProtocol;

	initWithDataScaleOptions?(data: NSData, scale: number, options: NSDictionary<string, any>): SDAnimatedImageProtocol;

	preloadAllFrames?(): void;

	unloadAllFrames?(): void;
}
declare var SDAnimatedImageProtocol: {

	prototype: SDAnimatedImageProtocol;
};

interface SDAnimatedImageProvider extends NSObjectProtocol {

	animatedImageData: NSData;

	animatedImageFrameCount: number;

	animatedImageLoopCount: number;

	animatedImageDurationAtIndex(index: number): number;

	animatedImageFrameAtIndex(index: number): UIImage;
}
declare var SDAnimatedImageProvider: {

	prototype: SDAnimatedImageProvider;
};

declare class SDAnimatedImageView extends UIImageView {

	static alloc(): SDAnimatedImageView; // inherited from NSObject

	static appearance(): SDAnimatedImageView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SDAnimatedImageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SDAnimatedImageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SDAnimatedImageView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SDAnimatedImageView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SDAnimatedImageView; // inherited from UIAppearance

	static new(): SDAnimatedImageView; // inherited from NSObject

	readonly currentFrame: UIImage;

	readonly currentFrameIndex: number;

	readonly currentLoopCount: number;

	maxBufferSize: number;

	runLoopMode: string;

	shouldCustomLoopCount: boolean;

	shouldIncrementalLoad: boolean;
}

declare class SDDiskCache extends NSObject implements SDDiskCacheProtocol {

	static alloc(): SDDiskCache; // inherited from NSObject

	static new(): SDDiskCache; // inherited from NSObject

	readonly config: SDImageCacheConfig;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { cachePath: string; config: SDImageCacheConfig; }); // inherited from SDDiskCacheProtocol

	cachePathForKey(key: string): string;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	containsDataForKey(key: string): boolean;

	dataForKey(key: string): NSData;

	initWithCachePathConfig(cachePath: string, config: SDImageCacheConfig): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	moveCacheDirectoryFromPathToPath(srcPath: string, dstPath: string): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeAllData(): void;

	removeDataForKey(key: string): void;

	removeExpiredData(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setDataForKey(data: NSData, key: string): void;

	totalCount(): number;

	totalSize(): number;
}

interface SDDiskCacheProtocol extends NSObjectProtocol {

	cachePathForKey(key: string): string;

	containsDataForKey(key: string): boolean;

	dataForKey(key: string): NSData;

	initWithCachePathConfig?(cachePath: string, config: SDImageCacheConfig): SDDiskCacheProtocol;

	removeAllData(): void;

	removeDataForKey(key: string): void;

	removeExpiredData(): void;

	setDataForKey(data: NSData, key: string): void;

	totalCount(): number;

	totalSize(): number;
}
declare var SDDiskCacheProtocol: {

	prototype: SDDiskCacheProtocol;
};

declare function SDGraphicsBeginImageContext(size: CGSize): void;

declare function SDGraphicsBeginImageContextWithOptions(size: CGSize, opaque: boolean, scale: number): void;

declare function SDGraphicsEndImageContext(): void;

declare function SDGraphicsGetCurrentContext(): any;

declare function SDGraphicsGetImageFromCurrentImageContext(): UIImage;

declare class SDImageAPNGCoder extends NSObject implements SDAnimatedImageCoder, SDProgressiveImageCoder {

	static alloc(): SDImageAPNGCoder; // inherited from NSObject

	static new(): SDImageAPNGCoder; // inherited from NSObject

	static readonly sharedCoder: SDImageAPNGCoder;

	readonly animatedImageData: NSData; // inherited from SDAnimatedImageProvider

	readonly animatedImageFrameCount: number; // inherited from SDAnimatedImageProvider

	readonly animatedImageLoopCount: number; // inherited from SDAnimatedImageProvider

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { incrementalWithOptions: NSDictionary<string, any>; }); // inherited from SDProgressiveImageCoder

	constructor(o: { animatedImageData: NSData; options: NSDictionary<string, any>; }); // inherited from SDAnimatedImageCoder

	animatedImageDurationAtIndex(index: number): number;

	animatedImageFrameAtIndex(index: number): UIImage;

	canDecodeFromData(data: NSData): boolean;

	canEncodeToFormat(format: number): boolean;

	canIncrementalDecodeFromData(data: NSData): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	decodedImageWithDataOptions(data: NSData, options: NSDictionary<string, any>): UIImage;

	encodedDataWithImageFormatOptions(image: UIImage, format: number, options: NSDictionary<string, any>): NSData;

	incrementalDecodedImageWithOptions(options: NSDictionary<string, any>): UIImage;

	initIncrementalWithOptions(options: NSDictionary<string, any>): this;

	initWithAnimatedImageDataOptions(data: NSData, options: NSDictionary<string, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	updateIncrementalDataFinished(data: NSData, finished: boolean): void;
}

declare class SDImageBlurTransformer extends NSObject implements SDImageTransformer {

	static alloc(): SDImageBlurTransformer; // inherited from NSObject

	static new(): SDImageBlurTransformer; // inherited from NSObject

	static transformerWithRadius(blurRadius: number): SDImageBlurTransformer;

	readonly blurRadius: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly transformerKey: string; // inherited from SDImageTransformer

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	transformedImageWithImageForKey(image: UIImage, key: string): UIImage;
}

declare class SDImageCache extends NSObject implements SDImageCacheProtocol {

	static alloc(): SDImageCache; // inherited from NSObject

	static new(): SDImageCache; // inherited from NSObject

	additionalCachePathBlock: (p1: string) => string;

	readonly config: SDImageCacheConfig;

	readonly diskCachePath: string;

	static readonly sharedImageCache: SDImageCache;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { namespace: string; });

	constructor(o: { namespace: string; diskCacheDirectory: string; });

	constructor(o: { namespace: string; diskCacheDirectory: string; config: SDImageCacheConfig; });

	cachePathForKey(key: string): string;

	calculateSizeWithCompletionBlock(completionBlock: (p1: number, p2: number) => void): void;

	class(): typeof NSObject;

	clearDiskOnCompletion(completion: () => void): void;

	clearMemory(): void;

	clearWithCacheTypeCompletion(cacheType: SDImageCacheType, completionBlock: () => void): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	containsImageForKeyCacheTypeCompletion(key: string, cacheType: SDImageCacheType, completionBlock: (p1: SDImageCacheType) => void): void;

	deleteOldFilesWithCompletionBlock(completionBlock: () => void): void;

	diskImageDataExistsWithKey(key: string): boolean;

	diskImageDataForKey(key: string): NSData;

	diskImageExistsWithKeyCompletion(key: string, completionBlock: (p1: boolean) => void): void;

	imageFromCacheForKey(key: string): UIImage;

	imageFromDiskCacheForKey(key: string): UIImage;

	imageFromMemoryCacheForKey(key: string): UIImage;

	initWithNamespace(ns: string): this;

	initWithNamespaceDiskCacheDirectory(ns: string, directory: string): this;

	initWithNamespaceDiskCacheDirectoryConfig(ns: string, directory: string, config: SDImageCacheConfig): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	queryCacheOperationForKeyDone(key: string, doneBlock: (p1: UIImage, p2: NSData, p3: SDImageCacheType) => void): NSOperation;

	queryCacheOperationForKeyOptionsContextDone(key: string, options: SDImageCacheOptions, context: NSDictionary<string, any>, doneBlock: (p1: UIImage, p2: NSData, p3: SDImageCacheType) => void): NSOperation;

	queryCacheOperationForKeyOptionsDone(key: string, options: SDImageCacheOptions, doneBlock: (p1: UIImage, p2: NSData, p3: SDImageCacheType) => void): NSOperation;

	queryImageForKeyOptionsContextCompletion(key: string, options: SDWebImageOptions, context: NSDictionary<string, any>, completionBlock: (p1: UIImage, p2: NSData, p3: SDImageCacheType) => void): SDWebImageOperation;

	removeImageForKeyCacheTypeCompletion(key: string, cacheType: SDImageCacheType, completionBlock: () => void): void;

	removeImageForKeyFromDiskWithCompletion(key: string, fromDisk: boolean, completion: () => void): void;

	removeImageForKeyWithCompletion(key: string, completion: () => void): void;

	removeImageFromDiskForKey(key: string): void;

	removeImageFromMemoryForKey(key: string): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	storeImageDataToDiskForKey(imageData: NSData, key: string): void;

	storeImageForKeyCompletion(image: UIImage, key: string, completionBlock: () => void): void;

	storeImageForKeyToDiskCompletion(image: UIImage, key: string, toDisk: boolean, completionBlock: () => void): void;

	storeImageImageDataForKeyCacheTypeCompletion(image: UIImage, imageData: NSData, key: string, cacheType: SDImageCacheType, completionBlock: () => void): void;

	storeImageImageDataForKeyToDiskCompletion(image: UIImage, imageData: NSData, key: string, toDisk: boolean, completionBlock: () => void): void;

	storeImageToMemoryForKey(image: UIImage, key: string): void;

	totalDiskCount(): number;

	totalDiskSize(): number;
}

declare class SDImageCacheConfig extends NSObject implements NSCopying {

	static alloc(): SDImageCacheConfig; // inherited from NSObject

	static new(): SDImageCacheConfig; // inherited from NSObject

	diskCacheClass: typeof NSObject;

	diskCacheExpireType: SDImageCacheConfigExpireType;

	diskCacheReadingOptions: NSDataReadingOptions;

	diskCacheWritingOptions: NSDataWritingOptions;

	fileManager: NSFileManager;

	maxDiskAge: number;

	maxDiskSize: number;

	maxMemoryCost: number;

	maxMemoryCount: number;

	memoryCacheClass: typeof NSObject;

	shouldCacheImagesInMemory: boolean;

	shouldDisableiCloud: boolean;

	shouldRemoveExpiredDataWhenEnterBackground: boolean;

	shouldUseWeakMemoryCache: boolean;

	static readonly defaultCacheConfig: SDImageCacheConfig;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare const enum SDImageCacheConfigExpireType {

	AccessDate = 0,

	ModificationDate = 1
}

declare function SDImageCacheDecodeImageData(imageData: NSData, cacheKey: string, options: SDWebImageOptions, context: NSDictionary<string, any>): UIImage;

declare const enum SDImageCacheOptions {

	QueryMemoryData = 1,

	QueryMemoryDataSync = 2,

	QueryDiskDataSync = 4,

	ScaleDownLargeImages = 8,

	AvoidDecodeImage = 16,

	DecodeFirstFrameOnly = 32,

	PreloadAllFrames = 64
}

interface SDImageCacheProtocol extends NSObjectProtocol {

	clearWithCacheTypeCompletion(cacheType: SDImageCacheType, completionBlock: () => void): void;

	containsImageForKeyCacheTypeCompletion(key: string, cacheType: SDImageCacheType, completionBlock: (p1: SDImageCacheType) => void): void;

	queryImageForKeyOptionsContextCompletion(key: string, options: SDWebImageOptions, context: NSDictionary<string, any>, completionBlock: (p1: UIImage, p2: NSData, p3: SDImageCacheType) => void): SDWebImageOperation;

	removeImageForKeyCacheTypeCompletion(key: string, cacheType: SDImageCacheType, completionBlock: () => void): void;

	storeImageImageDataForKeyCacheTypeCompletion(image: UIImage, imageData: NSData, key: string, cacheType: SDImageCacheType, completionBlock: () => void): void;
}
declare var SDImageCacheProtocol: {

	prototype: SDImageCacheProtocol;
};

declare const enum SDImageCacheType {

	None = 0,

	Disk = 1,

	Memory = 2,

	All = 3
}

declare class SDImageCachesManager extends NSObject implements SDImageCacheProtocol {

	static alloc(): SDImageCachesManager; // inherited from NSObject

	static new(): SDImageCachesManager; // inherited from NSObject

	caches: NSArray<SDImageCacheProtocol>;

	clearOperationPolicy: SDImageCachesManagerOperationPolicy;

	containsOperationPolicy: SDImageCachesManagerOperationPolicy;

	queryOperationPolicy: SDImageCachesManagerOperationPolicy;

	removeOperationPolicy: SDImageCachesManagerOperationPolicy;

	storeOperationPolicy: SDImageCachesManagerOperationPolicy;

	static readonly sharedManager: SDImageCachesManager;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addCache(cache: SDImageCacheProtocol): void;

	class(): typeof NSObject;

	clearWithCacheTypeCompletion(cacheType: SDImageCacheType, completionBlock: () => void): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	containsImageForKeyCacheTypeCompletion(key: string, cacheType: SDImageCacheType, completionBlock: (p1: SDImageCacheType) => void): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	queryImageForKeyOptionsContextCompletion(key: string, options: SDWebImageOptions, context: NSDictionary<string, any>, completionBlock: (p1: UIImage, p2: NSData, p3: SDImageCacheType) => void): SDWebImageOperation;

	removeCache(cache: SDImageCacheProtocol): void;

	removeImageForKeyCacheTypeCompletion(key: string, cacheType: SDImageCacheType, completionBlock: () => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	storeImageImageDataForKeyCacheTypeCompletion(image: UIImage, imageData: NSData, key: string, cacheType: SDImageCacheType, completionBlock: () => void): void;
}

declare const enum SDImageCachesManagerOperationPolicy {

	Serial = 0,

	Concurrent = 1,

	HighestOnly = 2,

	LowestOnly = 3
}

interface SDImageCoder extends NSObjectProtocol {

	canDecodeFromData(data: NSData): boolean;

	canEncodeToFormat(format: number): boolean;

	decodedImageWithDataOptions(data: NSData, options: NSDictionary<string, any>): UIImage;

	encodedDataWithImageFormatOptions(image: UIImage, format: number, options: NSDictionary<string, any>): NSData;
}
declare var SDImageCoder: {

	prototype: SDImageCoder;
};

declare var SDImageCoderDecodeFirstFrameOnly: string;

declare var SDImageCoderDecodeScaleFactor: string;

declare var SDImageCoderEncodeCompressionQuality: string;

declare var SDImageCoderEncodeFirstFrameOnly: string;

declare class SDImageCoderHelper extends NSObject {

	static CGImageContainsAlpha(cgImage: any): boolean;

	static CGImageCreateDecoded(cgImage: any): any;

	static CGImageCreateDecodedOrientation(cgImage: any, orientation: CGImagePropertyOrientation): any;

	static alloc(): SDImageCoderHelper; // inherited from NSObject

	static animatedImageWithFrames(frames: NSArray<SDImageFrame> | SDImageFrame[]): UIImage;

	static colorSpaceGetDeviceRGB(): any;

	static decodedAndScaledDownImageWithImageLimitBytes(image: UIImage, bytes: number): UIImage;

	static decodedImageWithImage(image: UIImage): UIImage;

	static exifOrientationFromImageOrientation(imageOrientation: UIImageOrientation): CGImagePropertyOrientation;

	static framesFromAnimatedImage(animatedImage: UIImage): NSArray<SDImageFrame>;

	static imageOrientationFromEXIFOrientation(exifOrientation: CGImagePropertyOrientation): UIImageOrientation;

	static new(): SDImageCoderHelper; // inherited from NSObject
}

declare var SDImageCoderWebImageContext: string;

declare class SDImageCodersManager extends NSObject implements SDImageCoder {

	static alloc(): SDImageCodersManager; // inherited from NSObject

	static new(): SDImageCodersManager; // inherited from NSObject

	coders: NSArray<SDImageCoder>;

	static readonly sharedManager: SDImageCodersManager;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addCoder(coder: SDImageCoder): void;

	canDecodeFromData(data: NSData): boolean;

	canEncodeToFormat(format: number): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	decodedImageWithDataOptions(data: NSData, options: NSDictionary<string, any>): UIImage;

	encodedDataWithImageFormatOptions(image: UIImage, format: number, options: NSDictionary<string, any>): NSData;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeCoder(coder: SDImageCoder): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class SDImageCroppingTransformer extends NSObject implements SDImageTransformer {

	static alloc(): SDImageCroppingTransformer; // inherited from NSObject

	static new(): SDImageCroppingTransformer; // inherited from NSObject

	static transformerWithRect(rect: CGRect): SDImageCroppingTransformer;

	readonly rect: CGRect;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly transformerKey: string; // inherited from SDImageTransformer

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	transformedImageWithImageForKey(image: UIImage, key: string): UIImage;
}

declare class SDImageFilterTransformer extends NSObject implements SDImageTransformer {

	static alloc(): SDImageFilterTransformer; // inherited from NSObject

	static new(): SDImageFilterTransformer; // inherited from NSObject

	static transformerWithFilter(filter: CIFilter): SDImageFilterTransformer;

	readonly filter: CIFilter;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly transformerKey: string; // inherited from SDImageTransformer

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	transformedImageWithImageForKey(image: UIImage, key: string): UIImage;
}

declare class SDImageFlippingTransformer extends NSObject implements SDImageTransformer {

	static alloc(): SDImageFlippingTransformer; // inherited from NSObject

	static new(): SDImageFlippingTransformer; // inherited from NSObject

	static transformerWithHorizontalVertical(horizontal: boolean, vertical: boolean): SDImageFlippingTransformer;

	readonly horizontal: boolean;

	readonly vertical: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly transformerKey: string; // inherited from SDImageTransformer

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	transformedImageWithImageForKey(image: UIImage, key: string): UIImage;
}

declare var SDImageFormatGIF: number;

declare var SDImageFormatHEIC: number;

declare var SDImageFormatHEIF: number;

declare var SDImageFormatJPEG: number;

declare var SDImageFormatPNG: number;

declare var SDImageFormatTIFF: number;

declare var SDImageFormatUndefined: number;

declare var SDImageFormatWebP: number;

declare class SDImageFrame extends NSObject {

	static alloc(): SDImageFrame; // inherited from NSObject

	static frameWithImageDuration(image: UIImage, duration: number): SDImageFrame;

	static new(): SDImageFrame; // inherited from NSObject

	readonly duration: number;

	readonly image: UIImage;
}

declare class SDImageGIFCoder extends NSObject implements SDAnimatedImageCoder, SDProgressiveImageCoder {

	static alloc(): SDImageGIFCoder; // inherited from NSObject

	static new(): SDImageGIFCoder; // inherited from NSObject

	static readonly sharedCoder: SDImageGIFCoder;

	readonly animatedImageData: NSData; // inherited from SDAnimatedImageProvider

	readonly animatedImageFrameCount: number; // inherited from SDAnimatedImageProvider

	readonly animatedImageLoopCount: number; // inherited from SDAnimatedImageProvider

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { incrementalWithOptions: NSDictionary<string, any>; }); // inherited from SDProgressiveImageCoder

	constructor(o: { animatedImageData: NSData; options: NSDictionary<string, any>; }); // inherited from SDAnimatedImageCoder

	animatedImageDurationAtIndex(index: number): number;

	animatedImageFrameAtIndex(index: number): UIImage;

	canDecodeFromData(data: NSData): boolean;

	canEncodeToFormat(format: number): boolean;

	canIncrementalDecodeFromData(data: NSData): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	decodedImageWithDataOptions(data: NSData, options: NSDictionary<string, any>): UIImage;

	encodedDataWithImageFormatOptions(image: UIImage, format: number, options: NSDictionary<string, any>): NSData;

	incrementalDecodedImageWithOptions(options: NSDictionary<string, any>): UIImage;

	initIncrementalWithOptions(options: NSDictionary<string, any>): this;

	initWithAnimatedImageDataOptions(data: NSData, options: NSDictionary<string, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	updateIncrementalDataFinished(data: NSData, finished: boolean): void;
}

declare class SDImageIOCoder extends NSObject implements SDProgressiveImageCoder {

	static alloc(): SDImageIOCoder; // inherited from NSObject

	static new(): SDImageIOCoder; // inherited from NSObject

	static readonly sharedCoder: SDImageIOCoder;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { incrementalWithOptions: NSDictionary<string, any>; }); // inherited from SDProgressiveImageCoder

	canDecodeFromData(data: NSData): boolean;

	canEncodeToFormat(format: number): boolean;

	canIncrementalDecodeFromData(data: NSData): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	decodedImageWithDataOptions(data: NSData, options: NSDictionary<string, any>): UIImage;

	encodedDataWithImageFormatOptions(image: UIImage, format: number, options: NSDictionary<string, any>): NSData;

	incrementalDecodedImageWithOptions(options: NSDictionary<string, any>): UIImage;

	initIncrementalWithOptions(options: NSDictionary<string, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	updateIncrementalDataFinished(data: NSData, finished: boolean): void;
}

interface SDImageLoader extends NSObjectProtocol {

	canRequestImageForURL(url: NSURL): boolean;

	requestImageWithURLOptionsContextProgressCompleted(url: NSURL, options: SDWebImageOptions, context: NSDictionary<string, any>, progressBlock: (p1: number, p2: number, p3: NSURL) => void, completedBlock: (p1: UIImage, p2: NSData, p3: NSError, p4: boolean) => void): SDWebImageOperation;

	shouldBlockFailedURLWithURLError(url: NSURL, error: NSError): boolean;
}
declare var SDImageLoader: {

	prototype: SDImageLoader;
};

declare function SDImageLoaderDecodeImageData(imageData: NSData, imageURL: NSURL, options: SDWebImageOptions, context: NSDictionary<string, any>): UIImage;

declare function SDImageLoaderDecodeProgressiveImageData(imageData: NSData, imageURL: NSURL, finished: boolean, operation: SDWebImageOperation, options: SDWebImageOptions, context: NSDictionary<string, any>): UIImage;

declare class SDImageLoadersManager extends NSObject implements SDImageLoader {

	static alloc(): SDImageLoadersManager; // inherited from NSObject

	static new(): SDImageLoadersManager; // inherited from NSObject

	loaders: NSArray<SDImageLoader>;

	static readonly sharedManager: SDImageLoadersManager;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addLoader(loader: SDImageLoader): void;

	canRequestImageForURL(url: NSURL): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeLoader(loader: SDImageLoader): void;

	requestImageWithURLOptionsContextProgressCompleted(url: NSURL, options: SDWebImageOptions, context: NSDictionary<string, any>, progressBlock: (p1: number, p2: number, p3: NSURL) => void, completedBlock: (p1: UIImage, p2: NSData, p3: NSError, p4: boolean) => void): SDWebImageOperation;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldBlockFailedURLWithURLError(url: NSURL, error: NSError): boolean;
}

declare class SDImagePipelineTransformer extends NSObject implements SDImageTransformer {

	static alloc(): SDImagePipelineTransformer; // inherited from NSObject

	static new(): SDImagePipelineTransformer; // inherited from NSObject

	static transformerWithTransformers(transformers: NSArray<SDImageTransformer> | SDImageTransformer[]): SDImagePipelineTransformer;

	readonly transformers: NSArray<SDImageTransformer>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly transformerKey: string; // inherited from SDImageTransformer

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	transformedImageWithImageForKey(image: UIImage, key: string): UIImage;
}

declare class SDImageResizingTransformer extends NSObject implements SDImageTransformer {

	static alloc(): SDImageResizingTransformer; // inherited from NSObject

	static new(): SDImageResizingTransformer; // inherited from NSObject

	static transformerWithSizeScaleMode(size: CGSize, scaleMode: SDImageScaleMode): SDImageResizingTransformer;

	readonly scaleMode: SDImageScaleMode;

	readonly size: CGSize;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly transformerKey: string; // inherited from SDImageTransformer

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	transformedImageWithImageForKey(image: UIImage, key: string): UIImage;
}

declare class SDImageRotationTransformer extends NSObject implements SDImageTransformer {

	static alloc(): SDImageRotationTransformer; // inherited from NSObject

	static new(): SDImageRotationTransformer; // inherited from NSObject

	static transformerWithAngleFitSize(angle: number, fitSize: boolean): SDImageRotationTransformer;

	readonly angle: number;

	readonly fitSize: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly transformerKey: string; // inherited from SDImageTransformer

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	transformedImageWithImageForKey(image: UIImage, key: string): UIImage;
}

declare class SDImageRoundCornerTransformer extends NSObject implements SDImageTransformer {

	static alloc(): SDImageRoundCornerTransformer; // inherited from NSObject

	static new(): SDImageRoundCornerTransformer; // inherited from NSObject

	static transformerWithRadiusCornersBorderWidthBorderColor(cornerRadius: number, corners: UIRectCorner, borderWidth: number, borderColor: UIColor): SDImageRoundCornerTransformer;

	readonly borderColor: UIColor;

	readonly borderWidth: number;

	readonly cornerRadius: number;

	readonly corners: UIRectCorner;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly transformerKey: string; // inherited from SDImageTransformer

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	transformedImageWithImageForKey(image: UIImage, key: string): UIImage;
}

declare function SDImageScaleFactorForKey(key: string): number;

declare const enum SDImageScaleMode {

	Fill = 0,

	AspectFit = 1,

	AspectFill = 2
}

declare class SDImageTintTransformer extends NSObject implements SDImageTransformer {

	static alloc(): SDImageTintTransformer; // inherited from NSObject

	static new(): SDImageTintTransformer; // inherited from NSObject

	static transformerWithColor(tintColor: UIColor): SDImageTintTransformer;

	readonly tintColor: UIColor;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly transformerKey: string; // inherited from SDImageTransformer

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	transformedImageWithImageForKey(image: UIImage, key: string): UIImage;
}

interface SDImageTransformer extends NSObjectProtocol {

	transformerKey: string;

	transformedImageWithImageForKey(image: UIImage, key: string): UIImage;
}
declare var SDImageTransformer: {

	prototype: SDImageTransformer;
};

declare class SDMemoryCache<KeyType, ObjectType> extends NSCache<KeyType, ObjectType> implements SDMemoryCacheProtocol {

	static alloc<KeyType, ObjectType>(): SDMemoryCache<KeyType, ObjectType>; // inherited from NSObject

	static new<KeyType, ObjectType>(): SDMemoryCache<KeyType, ObjectType>; // inherited from NSObject

	readonly config: SDImageCacheConfig;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { config: SDImageCacheConfig; }); // inherited from SDMemoryCacheProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithConfig(config: SDImageCacheConfig): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	objectForKey(key: any): any;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeAllObjects(): void;

	removeObjectForKey(key: any): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setObjectForKey(object: any, key: any): void;

	setObjectForKeyCost(object: any, key: any, cost: number): void;
}

interface SDMemoryCacheProtocol extends NSObjectProtocol {

	initWithConfig?(config: SDImageCacheConfig): SDMemoryCacheProtocol;

	objectForKey(key: any): any;

	removeAllObjects(): void;

	removeObjectForKey(key: any): void;

	setObjectForKey(object: any, key: any): void;

	setObjectForKeyCost(object: any, key: any, cost: number): void;
}
declare var SDMemoryCacheProtocol: {

	prototype: SDMemoryCacheProtocol;
};

interface SDProgressiveImageCoder extends SDImageCoder {

	canIncrementalDecodeFromData(data: NSData): boolean;

	incrementalDecodedImageWithOptions(options: NSDictionary<string, any>): UIImage;

	initIncrementalWithOptions?(options: NSDictionary<string, any>): SDProgressiveImageCoder;

	updateIncrementalDataFinished(data: NSData, finished: boolean): void;
}
declare var SDProgressiveImageCoder: {

	prototype: SDProgressiveImageCoder;
};

declare function SDScaledImageForKey(key: string, image: UIImage): UIImage;

declare function SDScaledImageForScaleFactor(scale: number, image: UIImage): UIImage;

declare function SDTransformedKeyForKey(key: string, transformerKey: string): string;

declare class SDWebImageActivityIndicator extends NSObject implements SDWebImageIndicator {

	static alloc(): SDWebImageActivityIndicator; // inherited from NSObject

	static new(): SDWebImageActivityIndicator; // inherited from NSObject

	readonly indicatorView: UIActivityIndicatorView;

	static readonly grayIndicator: SDWebImageActivityIndicator;

	static readonly grayLargeIndicator: SDWebImageActivityIndicator;

	static readonly whiteIndicator: SDWebImageActivityIndicator;

	static readonly whiteLargeIndicator: SDWebImageActivityIndicator;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	startAnimatingIndicator(): void;

	stopAnimatingIndicator(): void;

	updateIndicatorProgress(progress: number): void;
}

declare class SDWebImageCacheKeyFilter extends NSObject implements SDWebImageCacheKeyFilterProtocol {

	static alloc(): SDWebImageCacheKeyFilter; // inherited from NSObject

	static cacheKeyFilterWithBlock(block: (p1: NSURL) => string): SDWebImageCacheKeyFilter;

	static new(): SDWebImageCacheKeyFilter; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { block: (p1: NSURL) => string; });

	cacheKeyForURL(url: NSURL): string;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithBlock(block: (p1: NSURL) => string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface SDWebImageCacheKeyFilterProtocol extends NSObjectProtocol {

	cacheKeyForURL(url: NSURL): string;
}
declare var SDWebImageCacheKeyFilterProtocol: {

	prototype: SDWebImageCacheKeyFilterProtocol;
};

declare class SDWebImageCacheSerializer extends NSObject implements SDWebImageCacheSerializerProtocol {

	static alloc(): SDWebImageCacheSerializer; // inherited from NSObject

	static cacheSerializerWithBlock(block: (p1: UIImage, p2: NSData, p3: NSURL) => NSData): SDWebImageCacheSerializer;

	static new(): SDWebImageCacheSerializer; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { block: (p1: UIImage, p2: NSData, p3: NSURL) => NSData; });

	cacheDataWithImageOriginalDataImageURL(image: UIImage, data: NSData, imageURL: NSURL): NSData;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithBlock(block: (p1: UIImage, p2: NSData, p3: NSURL) => NSData): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface SDWebImageCacheSerializerProtocol extends NSObjectProtocol {

	cacheDataWithImageOriginalDataImageURL(image: UIImage, data: NSData, imageURL: NSURL): NSData;
}
declare var SDWebImageCacheSerializerProtocol: {

	prototype: SDWebImageCacheSerializerProtocol;
};

declare class SDWebImageCombinedOperation extends NSObject implements SDWebImageOperation {

	static alloc(): SDWebImageCombinedOperation; // inherited from NSObject

	static new(): SDWebImageCombinedOperation; // inherited from NSObject

	readonly cacheOperation: SDWebImageOperation;

	readonly loaderOperation: SDWebImageOperation;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	cancel(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var SDWebImageContextAnimatedImageClass: string;

declare var SDWebImageContextCacheKeyFilter: string;

declare var SDWebImageContextCacheSerializer: string;

declare var SDWebImageContextCustomManager: string;

declare var SDWebImageContextDownloadRequestModifier: string;

declare var SDWebImageContextImageScaleFactor: string;

declare var SDWebImageContextImageTransformer: string;

declare var SDWebImageContextLoaderCachedImage: string;

declare var SDWebImageContextSetImageOperationKey: string;

declare var SDWebImageContextStoreCacheType: string;

declare var SDWebImageDownloadFinishNotification: string;

declare var SDWebImageDownloadReceiveResponseNotification: string;

declare var SDWebImageDownloadStartNotification: string;

declare var SDWebImageDownloadStopNotification: string;

declare class SDWebImageDownloadToken extends NSObject implements SDWebImageOperation {

	static alloc(): SDWebImageDownloadToken; // inherited from NSObject

	static new(): SDWebImageDownloadToken; // inherited from NSObject

	readonly request: NSURLRequest;

	readonly response: NSURLResponse;

	readonly url: NSURL;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	cancel(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class SDWebImageDownloader extends NSObject implements SDImageLoader {

	static alloc(): SDWebImageDownloader; // inherited from NSObject

	static new(): SDWebImageDownloader; // inherited from NSObject

	readonly config: SDWebImageDownloaderConfig;

	readonly currentDownloadCount: number;

	requestModifier: SDWebImageDownloaderRequestModifierProtocol;

	readonly sessionConfiguration: NSURLSessionConfiguration;

	suspended: boolean;

	static readonly sharedDownloader: SDWebImageDownloader;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { config: SDWebImageDownloaderConfig; });

	canRequestImageForURL(url: NSURL): boolean;

	cancelAllDownloads(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	downloadImageWithURLCompleted(url: NSURL, completedBlock: (p1: UIImage, p2: NSData, p3: NSError, p4: boolean) => void): SDWebImageDownloadToken;

	downloadImageWithURLOptionsContextProgressCompleted(url: NSURL, options: SDWebImageDownloaderOptions, context: NSDictionary<string, any>, progressBlock: (p1: number, p2: number, p3: NSURL) => void, completedBlock: (p1: UIImage, p2: NSData, p3: NSError, p4: boolean) => void): SDWebImageDownloadToken;

	downloadImageWithURLOptionsProgressCompleted(url: NSURL, options: SDWebImageDownloaderOptions, progressBlock: (p1: number, p2: number, p3: NSURL) => void, completedBlock: (p1: UIImage, p2: NSData, p3: NSError, p4: boolean) => void): SDWebImageDownloadToken;

	initWithConfig(config: SDWebImageDownloaderConfig): this;

	invalidateSessionAndCancel(cancelPendingOperations: boolean): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	requestImageWithURLOptionsContextProgressCompleted(url: NSURL, options: SDWebImageOptions, context: NSDictionary<string, any>, progressBlock: (p1: number, p2: number, p3: NSURL) => void, completedBlock: (p1: UIImage, p2: NSData, p3: NSError, p4: boolean) => void): SDWebImageOperation;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setValueForHTTPHeaderField(value: string, field: string): void;

	shouldBlockFailedURLWithURLError(url: NSURL, error: NSError): boolean;

	valueForHTTPHeaderField(field: string): string;
}

declare class SDWebImageDownloaderConfig extends NSObject implements NSCopying {

	static alloc(): SDWebImageDownloaderConfig; // inherited from NSObject

	static new(): SDWebImageDownloaderConfig; // inherited from NSObject

	downloadTimeout: number;

	executionOrder: SDWebImageDownloaderExecutionOrder;

	maxConcurrentDownloads: number;

	minimumProgressInterval: number;

	operationClass: typeof NSObject;

	password: string;

	sessionConfiguration: NSURLSessionConfiguration;

	urlCredential: NSURLCredential;

	username: string;

	static readonly defaultDownloaderConfig: SDWebImageDownloaderConfig;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare const enum SDWebImageDownloaderExecutionOrder {

	FIFOExecutionOrder = 0,

	LIFOExecutionOrder = 1
}

declare class SDWebImageDownloaderOperation extends NSOperation implements SDWebImageDownloaderOperationProtocol {

	static alloc(): SDWebImageDownloaderOperation; // inherited from NSObject

	static new(): SDWebImageDownloaderOperation; // inherited from NSObject

	readonly context: NSDictionary<string, any>;

	readonly options: SDWebImageDownloaderOptions;

	credential: NSURLCredential; // inherited from SDWebImageDownloaderOperationProtocol

	readonly dataTask: NSURLSessionTask; // inherited from SDWebImageDownloaderOperationProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	minimumProgressInterval: number; // inherited from SDWebImageDownloaderOperationProtocol

	readonly request: NSURLRequest; // inherited from SDWebImageDownloaderOperationProtocol

	readonly response: NSURLResponse; // inherited from SDWebImageDownloaderOperationProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { request: NSURLRequest; inSession: NSURLSession; options: SDWebImageDownloaderOptions; }); // inherited from SDWebImageDownloaderOperationProtocol

	constructor(o: { request: NSURLRequest; inSession: NSURLSession; options: SDWebImageDownloaderOptions; context: NSDictionary<string, any>; }); // inherited from SDWebImageDownloaderOperationProtocol

	URLSessionDataTaskDidBecomeDownloadTask(session: NSURLSession, dataTask: NSURLSessionDataTask, downloadTask: NSURLSessionDownloadTask): void;

	URLSessionDataTaskDidBecomeStreamTask(session: NSURLSession, dataTask: NSURLSessionDataTask, streamTask: NSURLSessionStreamTask): void;

	URLSessionDataTaskDidReceiveData(session: NSURLSession, dataTask: NSURLSessionDataTask, data: NSData): void;

	URLSessionDataTaskDidReceiveResponseCompletionHandler(session: NSURLSession, dataTask: NSURLSessionDataTask, response: NSURLResponse, completionHandler: (p1: NSURLSessionResponseDisposition) => void): void;

	URLSessionDataTaskWillCacheResponseCompletionHandler(session: NSURLSession, dataTask: NSURLSessionDataTask, proposedResponse: NSCachedURLResponse, completionHandler: (p1: NSCachedURLResponse) => void): void;

	URLSessionDidBecomeInvalidWithError(session: NSURLSession, error: NSError): void;

	URLSessionDidFinishEventsForBackgroundURLSession(session: NSURLSession): void;

	URLSessionDidReceiveChallengeCompletionHandler(session: NSURLSession, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

	URLSessionTaskDidCompleteWithError(session: NSURLSession, task: NSURLSessionTask, error: NSError): void;

	URLSessionTaskDidFinishCollectingMetrics(session: NSURLSession, task: NSURLSessionTask, metrics: NSURLSessionTaskMetrics): void;

	URLSessionTaskDidReceiveChallengeCompletionHandler(session: NSURLSession, task: NSURLSessionTask, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

	URLSessionTaskDidSendBodyDataTotalBytesSentTotalBytesExpectedToSend(session: NSURLSession, task: NSURLSessionTask, bytesSent: number, totalBytesSent: number, totalBytesExpectedToSend: number): void;

	URLSessionTaskIsWaitingForConnectivity(session: NSURLSession, task: NSURLSessionTask): void;

	URLSessionTaskNeedNewBodyStream(session: NSURLSession, task: NSURLSessionTask, completionHandler: (p1: NSInputStream) => void): void;

	URLSessionTaskWillBeginDelayedRequestCompletionHandler(session: NSURLSession, task: NSURLSessionTask, request: NSURLRequest, completionHandler: (p1: NSURLSessionDelayedRequestDisposition, p2: NSURLRequest) => void): void;

	URLSessionTaskWillPerformHTTPRedirectionNewRequestCompletionHandler(session: NSURLSession, task: NSURLSessionTask, response: NSHTTPURLResponse, request: NSURLRequest, completionHandler: (p1: NSURLRequest) => void): void;

	addHandlersForProgressCompleted(progressBlock: (p1: number, p2: number, p3: NSURL) => void, completedBlock: (p1: UIImage, p2: NSData, p3: NSError, p4: boolean) => void): any;

	// @ts-ignore
	cancel(token: any): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithRequestInSessionOptions(request: NSURLRequest, session: NSURLSession, options: SDWebImageDownloaderOptions): this;

	initWithRequestInSessionOptionsContext(request: NSURLRequest, session: NSURLSession, options: SDWebImageDownloaderOptions, context: NSDictionary<string, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface SDWebImageDownloaderOperationProtocol extends NSURLSessionDataDelegate, NSURLSessionTaskDelegate {

	credential?: NSURLCredential;

	dataTask?: NSURLSessionTask;

	minimumProgressInterval?: number;

	request: NSURLRequest;

	response: NSURLResponse;

	addHandlersForProgressCompleted(progressBlock: (p1: number, p2: number, p3: NSURL) => void, completedBlock: (p1: UIImage, p2: NSData, p3: NSError, p4: boolean) => void): any;

	cancel(token: any): boolean;

	initWithRequestInSessionOptions?(request: NSURLRequest, session: NSURLSession, options: SDWebImageDownloaderOptions): SDWebImageDownloaderOperationProtocol;

	initWithRequestInSessionOptionsContext?(request: NSURLRequest, session: NSURLSession, options: SDWebImageDownloaderOptions, context: NSDictionary<string, any>): SDWebImageDownloaderOperationProtocol;
}
declare var SDWebImageDownloaderOperationProtocol: {

	prototype: SDWebImageDownloaderOperationProtocol;
};

declare const enum SDWebImageDownloaderOptions {

	LowPriority = 1,

	ProgressiveLoad = 2,

	UseNSURLCache = 4,

	IgnoreCachedResponse = 8,

	ContinueInBackground = 16,

	HandleCookies = 32,

	AllowInvalidSSLCertificates = 64,

	HighPriority = 128,

	ScaleDownLargeImages = 256,

	AvoidDecodeImage = 512,

	DecodeFirstFrameOnly = 1024,

	PreloadAllFrames = 2048
}

declare class SDWebImageDownloaderRequestModifier extends NSObject implements SDWebImageDownloaderRequestModifierProtocol {

	static alloc(): SDWebImageDownloaderRequestModifier; // inherited from NSObject

	static new(): SDWebImageDownloaderRequestModifier; // inherited from NSObject

	static requestModifierWithBlock(block: (p1: NSURLRequest) => NSURLRequest): SDWebImageDownloaderRequestModifier;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { block: (p1: NSURLRequest) => NSURLRequest; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithBlock(block: (p1: NSURLRequest) => NSURLRequest): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	modifiedRequestWithRequest(request: NSURLRequest): NSURLRequest;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface SDWebImageDownloaderRequestModifierProtocol extends NSObjectProtocol {

	modifiedRequestWithRequest(request: NSURLRequest): NSURLRequest;
}
declare var SDWebImageDownloaderRequestModifierProtocol: {

	prototype: SDWebImageDownloaderRequestModifierProtocol;
};

declare const enum SDWebImageError {

	InvalidURL = 1000,

	BadImageData = 1001,

	CacheNotModified = 1002,

	InvalidDownloadOperation = 2000,

	InvalidDownloadStatusCode = 2001
}

declare var SDWebImageErrorDomain: string;

declare var SDWebImageErrorDownloadStatusCodeKey: string;

interface SDWebImageIndicator extends NSObjectProtocol {

	indicatorView: UIView;

	startAnimatingIndicator(): void;

	stopAnimatingIndicator(): void;

	updateIndicatorProgress?(progress: number): void;
}
declare var SDWebImageIndicator: {

	prototype: SDWebImageIndicator;
};

declare class SDWebImageManager extends NSObject {

	static alloc(): SDWebImageManager; // inherited from NSObject

	static new(): SDWebImageManager; // inherited from NSObject

	cacheKeyFilter: SDWebImageCacheKeyFilterProtocol;

	cacheSerializer: SDWebImageCacheSerializerProtocol;

	delegate: SDWebImageManagerDelegate;

	readonly imageCache: SDImageCacheProtocol;

	readonly imageLoader: SDImageLoader;

	readonly running: boolean;

	transformer: SDImageTransformer;

	static defaultImageCache: SDImageCacheProtocol;

	static defaultImageLoader: SDImageLoader;

	static readonly sharedManager: SDWebImageManager;

	constructor(o: { cache: SDImageCacheProtocol; loader: SDImageLoader; });

	cacheKeyForURL(url: NSURL): string;

	cancelAll(): void;

	initWithCacheLoader(cache: SDImageCacheProtocol, loader: SDImageLoader): this;

	loadImageWithURLOptionsContextProgressCompleted(url: NSURL, options: SDWebImageOptions, context: NSDictionary<string, any>, progressBlock: (p1: number, p2: number, p3: NSURL) => void, completedBlock: (p1: UIImage, p2: NSData, p3: NSError, p4: SDImageCacheType, p5: boolean, p6: NSURL) => void): SDWebImageCombinedOperation;

	loadImageWithURLOptionsProgressCompleted(url: NSURL, options: SDWebImageOptions, progressBlock: (p1: number, p2: number, p3: NSURL) => void, completedBlock: (p1: UIImage, p2: NSData, p3: NSError, p4: SDImageCacheType, p5: boolean, p6: NSURL) => void): SDWebImageCombinedOperation;
}

interface SDWebImageManagerDelegate extends NSObjectProtocol {

	imageManagerShouldBlockFailedURLWithError?(imageManager: SDWebImageManager, imageURL: NSURL, error: NSError): boolean;

	imageManagerShouldDownloadImageForURL?(imageManager: SDWebImageManager, imageURL: NSURL): boolean;
}
declare var SDWebImageManagerDelegate: {

	prototype: SDWebImageManagerDelegate;
};

interface SDWebImageOperation extends NSObjectProtocol {

	cancel(): void;
}
declare var SDWebImageOperation: {

	prototype: SDWebImageOperation;
};

declare const enum SDWebImageOptions {

	RetryFailed = 1,

	LowPriority = 2,

	ProgressiveLoad = 4,

	RefreshCached = 8,

	ContinueInBackground = 16,

	HandleCookies = 32,

	AllowInvalidSSLCertificates = 64,

	HighPriority = 128,

	DelayPlaceholder = 256,

	TransformAnimatedImage = 512,

	AvoidAutoSetImage = 1024,

	ScaleDownLargeImages = 2048,

	QueryMemoryData = 4096,

	QueryMemoryDataSync = 8192,

	QueryDiskDataSync = 16384,

	FromCacheOnly = 32768,

	FromLoaderOnly = 65536,

	ForceTransition = 131072,

	AvoidDecodeImage = 262144,

	DecodeFirstFrameOnly = 524288,

	PreloadAllFrames = 1048576
}

declare class SDWebImagePrefetchToken extends NSObject implements SDWebImageOperation {

	static alloc(): SDWebImagePrefetchToken; // inherited from NSObject

	static new(): SDWebImagePrefetchToken; // inherited from NSObject

	readonly urls: NSArray<NSURL>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	cancel(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class SDWebImagePrefetcher extends NSObject {

	static alloc(): SDWebImagePrefetcher; // inherited from NSObject

	static new(): SDWebImagePrefetcher; // inherited from NSObject

	context: NSDictionary<string, any>;

	delegate: SDWebImagePrefetcherDelegate;

	delegateQueue: NSObject;

	readonly manager: SDWebImageManager;

	maxConcurrentPrefetchCount: number;

	options: SDWebImageOptions;

	static readonly sharedImagePrefetcher: SDWebImagePrefetcher;

	constructor(o: { imageManager: SDWebImageManager; });

	cancelPrefetching(): void;

	initWithImageManager(manager: SDWebImageManager): this;

	prefetchURLs(urls: NSArray<NSURL> | NSURL[]): SDWebImagePrefetchToken;

	prefetchURLsProgressCompleted(urls: NSArray<NSURL> | NSURL[], progressBlock: (p1: number, p2: number) => void, completionBlock: (p1: number, p2: number) => void): SDWebImagePrefetchToken;
}

interface SDWebImagePrefetcherDelegate extends NSObjectProtocol {

	imagePrefetcherDidFinishWithTotalCountSkippedCount?(imagePrefetcher: SDWebImagePrefetcher, totalCount: number, skippedCount: number): void;

	imagePrefetcherDidPrefetchURLFinishedCountTotalCount?(imagePrefetcher: SDWebImagePrefetcher, imageURL: NSURL, finishedCount: number, totalCount: number): void;
}
declare var SDWebImagePrefetcherDelegate: {

	prototype: SDWebImagePrefetcherDelegate;
};

declare class SDWebImageProgressIndicator extends NSObject implements SDWebImageIndicator {

	static alloc(): SDWebImageProgressIndicator; // inherited from NSObject

	static new(): SDWebImageProgressIndicator; // inherited from NSObject

	readonly indicatorView: UIProgressView;

	static readonly barIndicator: SDWebImageProgressIndicator;

	static readonly defaultIndicator: SDWebImageProgressIndicator;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	startAnimatingIndicator(): void;

	stopAnimatingIndicator(): void;

	updateIndicatorProgress(progress: number): void;
}

declare var SDWebImageProgressUnitCountUnknown: number;

declare class SDWebImageTransition extends NSObject {

	static alloc(): SDWebImageTransition; // inherited from NSObject

	static new(): SDWebImageTransition; // inherited from NSObject

	animationOptions: UIViewAnimationOptions;

	animations: (p1: UIView, p2: UIImage) => void;

	avoidAutoSetImage: boolean;

	completion: (p1: boolean) => void;

	duration: number;

	prepares: (p1: UIView, p2: UIImage, p3: NSData, p4: SDImageCacheType, p5: NSURL) => void;

	static readonly curlDownTransition: SDWebImageTransition;

	static readonly curlUpTransition: SDWebImageTransition;

	static readonly fadeTransition: SDWebImageTransition;

	static readonly flipFromBottomTransition: SDWebImageTransition;

	static readonly flipFromLeftTransition: SDWebImageTransition;

	static readonly flipFromRightTransition: SDWebImageTransition;

	static readonly flipFromTopTransition: SDWebImageTransition;
}

declare var WebImageVersionNumber: number;

declare var WebImageVersionString: interop.Reference<number>;

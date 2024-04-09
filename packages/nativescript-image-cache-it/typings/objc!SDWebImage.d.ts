
declare class SDAnimatedImage extends UIImage implements SDAnimatedImageProtocol {

	static alloc(): SDAnimatedImage; // inherited from NSObject

	static new(): SDAnimatedImage; // inherited from NSObject

	static objectWithItemProviderDataTypeIdentifierError(data: NSData, typeIdentifier: string): SDAnimatedImage; // inherited from NSItemProviderReading

	readonly animatedImageFormat: number;

	readonly allFramesLoaded: boolean; // inherited from SDAnimatedImageProtocol

	readonly animatedCoder: SDAnimatedImageCoder; // inherited from SDAnimatedImageProtocol

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

declare const enum SDAnimatedImagePlaybackMode {

	Normal = 0,

	Reverse = 1,

	Bounce = 2,

	ReversedBounce = 3
}

declare class SDAnimatedImagePlayer extends NSObject {

	static alloc(): SDAnimatedImagePlayer; // inherited from NSObject

	static new(): SDAnimatedImagePlayer; // inherited from NSObject

	static playerWithProvider(provider: SDAnimatedImageProvider): SDAnimatedImagePlayer;

	animationFrameHandler: (p1: number, p2: UIImage) => void;

	animationLoopHandler: (p1: number) => void;

	readonly currentFrame: UIImage;

	readonly currentFrameIndex: number;

	readonly currentLoopCount: number;

	readonly isPlaying: boolean;

	maxBufferSize: number;

	playbackMode: SDAnimatedImagePlaybackMode;

	playbackRate: number;

	runLoopMode: string;

	totalFrameCount: number;

	totalLoopCount: number;

	constructor(o: { provider: SDAnimatedImageProvider; });

	clearFrameBuffer(): void;

	initWithProvider(provider: SDAnimatedImageProvider): this;

	pausePlaying(): void;

	seekToFrameAtIndexLoopCount(index: number, loopCount: number): void;

	startPlaying(): void;

	stopPlaying(): void;
}

interface SDAnimatedImageProtocol extends SDAnimatedImageProvider {

	allFramesLoaded?: boolean;

	animatedCoder?: SDAnimatedImageCoder;

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

	autoPlayAnimatedImage: boolean;

	clearBufferWhenStopped: boolean;

	readonly currentFrame: UIImage;

	readonly currentFrameIndex: number;

	readonly currentLoopCount: number;

	maxBufferSize: number;

	playbackMode: SDAnimatedImagePlaybackMode;

	playbackRate: number;

	readonly player: SDAnimatedImagePlayer;

	resetFrameIndexWhenStopped: boolean;

	runLoopMode: string;

	shouldCustomLoopCount: boolean;

	shouldIncrementalLoad: boolean;
}

declare const enum SDCallbackPolicy {

	SafeExecute = 0,

	Dispatch = 1,

	Invoke = 2
}

declare class SDCallbackQueue extends NSObject {

	static alloc(): SDCallbackQueue; // inherited from NSObject

	static new(): SDCallbackQueue; // inherited from NSObject

	policy: SDCallbackPolicy;

	static readonly currentQueue: SDCallbackQueue;

	static readonly globalQueue: SDCallbackQueue;

	static readonly mainQueue: SDCallbackQueue;

	constructor(o: { dispatchQueue: interop.Pointer | interop.Reference<any>; });

	async(block: () => void): void;

	initWithDispatchQueue(queue: interop.Pointer | interop.Reference<any>): this;

	sync(block: () => void): void;
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

	extendedDataForKey(key: string): NSData;

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

	setExtendedDataForKey(extendedData: NSData, key: string): void;

	totalCount(): number;

	totalSize(): number;
}

interface SDDiskCacheProtocol extends NSObjectProtocol {

	cachePathForKey(key: string): string;

	containsDataForKey(key: string): boolean;

	dataForKey(key: string): NSData;

	extendedDataForKey(key: string): NSData;

	initWithCachePathConfig?(cachePath: string, config: SDImageCacheConfig): SDDiskCacheProtocol;

	removeAllData(): void;

	removeDataForKey(key: string): void;

	removeExpiredData(): void;

	setDataForKey(data: NSData, key: string): void;

	setExtendedDataForKey(extendedData: NSData, key: string): void;

	totalCount(): number;

	totalSize(): number;
}
declare var SDDiskCacheProtocol: {

	prototype: SDDiskCacheProtocol;
};

declare function SDGetDecodeOptionsFromContext(context: NSDictionary<string, any>, options: SDWebImageOptions, cacheKey: string): NSDictionary<string, any>;

declare function SDGraphicsBeginImageContext(size: CGSize): void;

declare function SDGraphicsBeginImageContextWithOptions(size: CGSize, opaque: boolean, scale: number): void;

declare function SDGraphicsEndImageContext(): void;

declare function SDGraphicsGetCurrentContext(): any;

declare function SDGraphicsGetImageFromCurrentImageContext(): UIImage;

declare class SDGraphicsImageRenderer extends NSObject {

	static alloc(): SDGraphicsImageRenderer; // inherited from NSObject

	static new(): SDGraphicsImageRenderer; // inherited from NSObject

	constructor(o: { size: CGSize; });

	constructor(o: { size: CGSize; format: SDGraphicsImageRendererFormat; });

	imageWithActions(actions: (p1: any) => void): UIImage;

	initWithSize(size: CGSize): this;

	initWithSizeFormat(size: CGSize, format: SDGraphicsImageRendererFormat): this;
}

declare class SDGraphicsImageRendererFormat extends NSObject {

	static alloc(): SDGraphicsImageRendererFormat; // inherited from NSObject

	static new(): SDGraphicsImageRendererFormat; // inherited from NSObject

	static preferredFormat(): SDGraphicsImageRendererFormat;

	opaque: boolean;

	preferredRange: SDGraphicsImageRendererFormatRange;

	scale: number;
}

declare const enum SDGraphicsImageRendererFormatRange {

	Unspecified = -1,

	Automatic = 0,

	Extended = 1,

	Standard = 2
}

declare class SDImageAPNGCoder extends SDImageIOAnimatedCoder implements SDAnimatedImageCoder, SDProgressiveImageCoder {

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

	encodedDataWithFramesLoopCountFormatOptions(frames: NSArray<SDImageFrame> | SDImageFrame[], loopCount: number, format: number, options: NSDictionary<string, any>): NSData;

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

declare class SDImageAWebPCoder extends SDImageIOAnimatedCoder implements SDAnimatedImageCoder, SDProgressiveImageCoder {

	static alloc(): SDImageAWebPCoder; // inherited from NSObject

	static new(): SDImageAWebPCoder; // inherited from NSObject

	static readonly sharedCoder: SDImageAWebPCoder;

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

	encodedDataWithFramesLoopCountFormatOptions(frames: NSArray<SDImageFrame> | SDImageFrame[], loopCount: number, format: number, options: NSDictionary<string, any>): NSData;

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

	readonly diskCache: SDDiskCacheProtocol;

	readonly diskCachePath: string;

	readonly memoryCache: SDMemoryCacheProtocol;

	static defaultDiskCacheDirectory: string;

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

	diskImageDataQueryForKeyCompletion(key: string, completionBlock: (p1: NSData) => void): void;

	diskImageExistsWithKeyCompletion(key: string, completionBlock: (p1: boolean) => void): void;

	imageFromCacheForKey(key: string): UIImage;

	imageFromCacheForKeyOptionsContext(key: string, options: SDImageCacheOptions, context: NSDictionary<string, any>): UIImage;

	imageFromDiskCacheForKey(key: string): UIImage;

	imageFromDiskCacheForKeyOptionsContext(key: string, options: SDImageCacheOptions, context: NSDictionary<string, any>): UIImage;

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

	queryCacheOperationForKeyDone(key: string, doneBlock: (p1: UIImage, p2: NSData, p3: SDImageCacheType) => void): SDImageCacheToken;

	queryCacheOperationForKeyOptionsContextCacheTypeDone(key: string, options: SDImageCacheOptions, context: NSDictionary<string, any>, queryCacheType: SDImageCacheType, doneBlock: (p1: UIImage, p2: NSData, p3: SDImageCacheType) => void): SDImageCacheToken;

	queryCacheOperationForKeyOptionsContextDone(key: string, options: SDImageCacheOptions, context: NSDictionary<string, any>, doneBlock: (p1: UIImage, p2: NSData, p3: SDImageCacheType) => void): SDImageCacheToken;

	queryCacheOperationForKeyOptionsDone(key: string, options: SDImageCacheOptions, doneBlock: (p1: UIImage, p2: NSData, p3: SDImageCacheType) => void): SDImageCacheToken;

	queryImageForKeyOptionsContextCacheTypeCompletion(key: string, options: SDWebImageOptions, context: NSDictionary<string, any>, cacheType: SDImageCacheType, completionBlock: (p1: UIImage, p2: NSData, p3: SDImageCacheType) => void): SDWebImageOperation;

	queryImageForKeyOptionsContextCompletion(key: string, options: SDWebImageOptions, context: NSDictionary<string, any>, completionBlock: (p1: UIImage, p2: NSData, p3: SDImageCacheType) => void): SDWebImageOperation;

	removeImageForKeyCacheTypeCompletion(key: string, cacheType: SDImageCacheType, completionBlock: () => void): void;

	removeImageForKeyFromDiskWithCompletion(key: string, fromDisk: boolean, completion: () => void): void;

	removeImageForKeyWithCompletion(key: string, completion: () => void): void;

	removeImageFromDiskForKey(key: string): void;

	removeImageFromMemoryForKey(key: string): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	storeImageDataForKeyCompletion(imageData: NSData, key: string, completionBlock: () => void): void;

	storeImageDataToDiskForKey(imageData: NSData, key: string): void;

	storeImageForKeyCompletion(image: UIImage, key: string, completionBlock: () => void): void;

	storeImageForKeyToDiskCompletion(image: UIImage, key: string, toDisk: boolean, completionBlock: () => void): void;

	storeImageImageDataForKeyCacheTypeCompletion(image: UIImage, imageData: NSData, key: string, cacheType: SDImageCacheType, completionBlock: () => void): void;

	storeImageImageDataForKeyOptionsContextCacheTypeCompletion(image: UIImage, imageData: NSData, key: string, options: SDWebImageOptions, context: NSDictionary<string, any>, cacheType: SDImageCacheType, completionBlock: () => void): void;

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

	shouldRemoveExpiredDataWhenTerminate: boolean;

	shouldUseWeakMemoryCache: boolean;

	static readonly defaultCacheConfig: SDImageCacheConfig;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare const enum SDImageCacheConfigExpireType {

	AccessDate = 0,

	ModificationDate = 1,

	CreationDate = 2,

	ChangeDate = 3
}

declare function SDImageCacheDecodeImageData(imageData: NSData, cacheKey: string, options: SDWebImageOptions, context: NSDictionary<string, any>): UIImage;

declare const enum SDImageCacheOptions {

	QueryMemoryData = 1,

	QueryMemoryDataSync = 2,

	QueryDiskDataSync = 4,

	ScaleDownLargeImages = 8,

	AvoidDecodeImage = 16,

	DecodeFirstFrameOnly = 32,

	PreloadAllFrames = 64,

	MatchAnimatedImageClass = 128
}

interface SDImageCacheProtocol extends NSObjectProtocol {

	clearWithCacheTypeCompletion?(cacheType: SDImageCacheType, completionBlock: () => void): void;

	containsImageForKeyCacheTypeCompletion?(key: string, cacheType: SDImageCacheType, completionBlock: (p1: SDImageCacheType) => void): void;

	queryImageForKeyOptionsContextCacheTypeCompletion?(key: string, options: SDWebImageOptions, context: NSDictionary<string, any>, cacheType: SDImageCacheType, completionBlock: (p1: UIImage, p2: NSData, p3: SDImageCacheType) => void): SDWebImageOperation;

	queryImageForKeyOptionsContextCompletion(key: string, options: SDWebImageOptions, context: NSDictionary<string, any>, completionBlock: (p1: UIImage, p2: NSData, p3: SDImageCacheType) => void): SDWebImageOperation;

	removeImageForKeyCacheTypeCompletion?(key: string, cacheType: SDImageCacheType, completionBlock: () => void): void;

	storeImageImageDataForKeyCacheTypeCompletion(image: UIImage, imageData: NSData, key: string, cacheType: SDImageCacheType, completionBlock: () => void): void;

	storeImageImageDataForKeyOptionsContextCacheTypeCompletion?(image: UIImage, imageData: NSData, key: string, options: SDWebImageOptions, context: NSDictionary<string, any>, cacheType: SDImageCacheType, completionBlock: () => void): void;
}
declare var SDImageCacheProtocol: {

	prototype: SDImageCacheProtocol;
};

declare class SDImageCacheToken extends NSObject implements SDWebImageOperation {

	static alloc(): SDImageCacheToken; // inherited from NSObject

	static new(): SDImageCacheToken; // inherited from NSObject

	readonly key: string;

	readonly cancelled: boolean; // inherited from SDWebImageOperation

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

	queryImageForKeyOptionsContextCacheTypeCompletion(key: string, options: SDWebImageOptions, context: NSDictionary<string, any>, cacheType: SDImageCacheType, completionBlock: (p1: UIImage, p2: NSData, p3: SDImageCacheType) => void): SDWebImageOperation;

	queryImageForKeyOptionsContextCompletion(key: string, options: SDWebImageOptions, context: NSDictionary<string, any>, completionBlock: (p1: UIImage, p2: NSData, p3: SDImageCacheType) => void): SDWebImageOperation;

	removeCache(cache: SDImageCacheProtocol): void;

	removeImageForKeyCacheTypeCompletion(key: string, cacheType: SDImageCacheType, completionBlock: () => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	storeImageImageDataForKeyCacheTypeCompletion(image: UIImage, imageData: NSData, key: string, cacheType: SDImageCacheType, completionBlock: () => void): void;

	storeImageImageDataForKeyOptionsContextCacheTypeCompletion(image: UIImage, imageData: NSData, key: string, options: SDWebImageOptions, context: NSDictionary<string, any>, cacheType: SDImageCacheType, completionBlock: () => void): void;
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

	encodedDataWithFramesLoopCountFormatOptions?(frames: NSArray<SDImageFrame> | SDImageFrame[], loopCount: number, format: number, options: NSDictionary<string, any>): NSData;

	encodedDataWithImageFormatOptions(image: UIImage, format: number, options: NSDictionary<string, any>): NSData;
}
declare var SDImageCoder: {

	prototype: SDImageCoder;
};

declare var SDImageCoderDecodeFileExtensionHint: string;

declare var SDImageCoderDecodeFirstFrameOnly: string;

declare var SDImageCoderDecodePreserveAspectRatio: string;

declare var SDImageCoderDecodeScaleDownLimitBytes: string;

declare var SDImageCoderDecodeScaleFactor: string;

declare const enum SDImageCoderDecodeSolution {

	Automatic = 0,

	CoreGraphics = 1,

	UIKit = 2
}

declare var SDImageCoderDecodeThumbnailPixelSize: string;

declare var SDImageCoderDecodeTypeIdentifierHint: string;

declare var SDImageCoderDecodeUseLazyDecoding: string;

declare var SDImageCoderEncodeBackgroundColor: string;

declare var SDImageCoderEncodeCompressionQuality: string;

declare var SDImageCoderEncodeEmbedThumbnail: string;

declare var SDImageCoderEncodeFirstFrameOnly: string;

declare var SDImageCoderEncodeMaxFileSize: string;

declare var SDImageCoderEncodeMaxPixelSize: string;

declare class SDImageCoderHelper extends NSObject {

	static CGImageContainsAlpha(cgImage: any): boolean;

	static CGImageCreateDecoded(cgImage: any): any;

	static CGImageCreateDecodedOrientation(cgImage: any, orientation: CGImagePropertyOrientation): any;

	static CGImageCreateScaledSize(cgImage: any, size: CGSize): any;

	static CGImageIsHardwareSupported(cgImage: any): boolean;

	static alloc(): SDImageCoderHelper; // inherited from NSObject

	static animatedImageWithFrames(frames: NSArray<SDImageFrame> | SDImageFrame[]): UIImage;

	static colorSpaceGetDeviceRGB(): any;

	static decodedAndScaledDownImageWithImageLimitBytes(image: UIImage, bytes: number): UIImage;

	static decodedAndScaledDownImageWithImageLimitBytesPolicy(image: UIImage, bytes: number, policy: SDImageForceDecodePolicy): UIImage;

	static decodedImageWithImage(image: UIImage): UIImage;

	static decodedImageWithImagePolicy(image: UIImage, policy: SDImageForceDecodePolicy): UIImage;

	static exifOrientationFromImageOrientation(imageOrientation: UIImageOrientation): CGImagePropertyOrientation;

	static framesFromAnimatedImage(animatedImage: UIImage): NSArray<SDImageFrame>;

	static imageOrientationFromEXIFOrientation(exifOrientation: CGImagePropertyOrientation): UIImageOrientation;

	static new(): SDImageCoderHelper; // inherited from NSObject

	static preferredPixelFormat(containsAlpha: boolean): SDImagePixelFormat;

	static scaledSizeWithImageSizeLimitBytesBytesPerPixelFrameCount(imageSize: CGSize, limitBytes: number, bytesPerPixel: number, frameCount: number): CGSize;

	static scaledSizeWithImageSizeScaleSizePreserveAspectRatioShouldScaleUp(imageSize: CGSize, scaleSize: CGSize, preserveAspectRatio: boolean, shouldScaleUp: boolean): CGSize;

	static defaultDecodeSolution: SDImageCoderDecodeSolution;

	static defaultScaleDownLimitBytes: number;
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

	encodedDataWithFramesLoopCountFormatOptions(frames: NSArray<SDImageFrame> | SDImageFrame[], loopCount: number, format: number, options: NSDictionary<string, any>): NSData;

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

declare const enum SDImageForceDecodePolicy {

	Automatic = 0,

	Never = 1,

	Always = 2
}

declare var SDImageFormatBMP: number;

declare var SDImageFormatGIF: number;

declare var SDImageFormatHEIC: number;

declare var SDImageFormatHEIF: number;

declare var SDImageFormatJPEG: number;

declare var SDImageFormatPDF: number;

declare var SDImageFormatPNG: number;

declare var SDImageFormatRAW: number;

declare var SDImageFormatSVG: number;

declare var SDImageFormatTIFF: number;

declare var SDImageFormatUndefined: number;

declare var SDImageFormatWebP: number;

declare class SDImageFrame extends NSObject {

	static alloc(): SDImageFrame; // inherited from NSObject

	static frameWithImageDuration(image: UIImage, duration: number): SDImageFrame;

	static new(): SDImageFrame; // inherited from NSObject

	readonly duration: number;

	readonly image: UIImage;

	constructor(o: { image: UIImage; duration: number; });

	initWithImageDuration(image: UIImage, duration: number): this;
}

declare class SDImageGIFCoder extends SDImageIOAnimatedCoder implements SDAnimatedImageCoder, SDProgressiveImageCoder {

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

	encodedDataWithFramesLoopCountFormatOptions(frames: NSArray<SDImageFrame> | SDImageFrame[], loopCount: number, format: number, options: NSDictionary<string, any>): NSData;

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

declare class SDImageHEICCoder extends SDImageIOAnimatedCoder implements SDAnimatedImageCoder, SDProgressiveImageCoder {

	static alloc(): SDImageHEICCoder; // inherited from NSObject

	static new(): SDImageHEICCoder; // inherited from NSObject

	static readonly sharedCoder: SDImageHEICCoder;

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

	encodedDataWithFramesLoopCountFormatOptions(frames: NSArray<SDImageFrame> | SDImageFrame[], loopCount: number, format: number, options: NSDictionary<string, any>): NSData;

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

declare class SDImageIOAnimatedCoder extends NSObject implements SDAnimatedImageCoder, SDProgressiveImageCoder {

	static alloc(): SDImageIOAnimatedCoder; // inherited from NSObject

	static new(): SDImageIOAnimatedCoder; // inherited from NSObject

	static readonly defaultLoopCount: number;

	static readonly delayTimeProperty: string;

	static readonly dictionaryProperty: string;

	static readonly imageFormat: number;

	static readonly imageUTType: string;

	static readonly loopCountProperty: string;

	static readonly unclampedDelayTimeProperty: string;

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

	encodedDataWithFramesLoopCountFormatOptions(frames: NSArray<SDImageFrame> | SDImageFrame[], loopCount: number, format: number, options: NSDictionary<string, any>): NSData;

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

	encodedDataWithFramesLoopCountFormatOptions(frames: NSArray<SDImageFrame> | SDImageFrame[], loopCount: number, format: number, options: NSDictionary<string, any>): NSData;

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

	canRequestImageForURLOptionsContext?(url: NSURL, options: SDWebImageOptions, context: NSDictionary<string, any>): boolean;

	requestImageWithURLOptionsContextProgressCompleted(url: NSURL, options: SDWebImageOptions, context: NSDictionary<string, any>, progressBlock: (p1: number, p2: number, p3: NSURL) => void, completedBlock: (p1: UIImage, p2: NSData, p3: NSError, p4: boolean) => void): SDWebImageOperation;

	shouldBlockFailedURLWithURLError(url: NSURL, error: NSError): boolean;

	shouldBlockFailedURLWithURLErrorOptionsContext?(url: NSURL, error: NSError, options: SDWebImageOptions, context: NSDictionary<string, any>): boolean;
}
declare var SDImageLoader: {

	prototype: SDImageLoader;
};

declare function SDImageLoaderDecodeImageData(imageData: NSData, imageURL: NSURL, options: SDWebImageOptions, context: NSDictionary<string, any>): UIImage;

declare function SDImageLoaderDecodeProgressiveImageData(imageData: NSData, imageURL: NSURL, finished: boolean, operation: SDWebImageOperation, options: SDWebImageOptions, context: NSDictionary<string, any>): UIImage;

declare function SDImageLoaderGetProgressiveCoder(operation: SDWebImageOperation): SDProgressiveImageCoder;

declare function SDImageLoaderSetProgressiveCoder(operation: SDWebImageOperation, progressiveCoder: SDProgressiveImageCoder): void;

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

	canRequestImageForURLOptionsContext(url: NSURL, options: SDWebImageOptions, context: NSDictionary<string, any>): boolean;

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

	shouldBlockFailedURLWithURLErrorOptionsContext(url: NSURL, error: NSError, options: SDWebImageOptions, context: NSDictionary<string, any>): boolean;
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

interface SDImagePixelFormat {
	bitmapInfo: CGBitmapInfo;
	alignment: number;
}
declare var SDImagePixelFormat: interop.StructType<SDImagePixelFormat>;

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

declare function SDSetDecodeOptionsToContext(mutableContext: NSMutableDictionary<string, any>, mutableOptions: interop.Pointer | interop.Reference<SDWebImageOptions>, decodeOptions: NSDictionary<string, any>): void;

declare function SDThumbnailedKeyForKey(key: string, thumbnailPixelSize: CGSize, preserveAspectRatio: boolean): string;

declare function SDTransformedKeyForKey(key: string, transformerKey: string): string;

declare class SDWebImageActivityIndicator extends NSObject implements SDWebImageIndicator {

	static alloc(): SDWebImageActivityIndicator; // inherited from NSObject

	static new(): SDWebImageActivityIndicator; // inherited from NSObject

	readonly indicatorView: UIActivityIndicatorView;

	static readonly grayIndicator: SDWebImageActivityIndicator;

	static readonly grayLargeIndicator: SDWebImageActivityIndicator;

	static readonly largeIndicator: SDWebImageActivityIndicator;

	static readonly mediumIndicator: SDWebImageActivityIndicator;

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

	readonly cancelled: boolean; // inherited from SDWebImageOperation

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

declare var SDWebImageContextCallbackQueue: string;

declare var SDWebImageContextCustomManager: string;

declare var SDWebImageContextDownloadDecryptor: string;

declare var SDWebImageContextDownloadRequestModifier: string;

declare var SDWebImageContextDownloadResponseModifier: string;

declare var SDWebImageContextImageCache: string;

declare var SDWebImageContextImageCoder: string;

declare var SDWebImageContextImageDecodeOptions: string;

declare var SDWebImageContextImageEncodeOptions: string;

declare var SDWebImageContextImageForceDecodePolicy: string;

declare var SDWebImageContextImageLoader: string;

declare var SDWebImageContextImagePreserveAspectRatio: string;

declare var SDWebImageContextImageScaleDownLimitBytes: string;

declare var SDWebImageContextImageScaleFactor: string;

declare var SDWebImageContextImageThumbnailPixelSize: string;

declare var SDWebImageContextImageTransformer: string;

declare var SDWebImageContextImageTypeIdentifierHint: string;

declare var SDWebImageContextLoaderCachedImage: string;

declare var SDWebImageContextOriginalImageCache: string;

declare var SDWebImageContextOriginalQueryCacheType: string;

declare var SDWebImageContextOriginalStoreCacheType: string;

declare var SDWebImageContextQueryCacheType: string;

declare var SDWebImageContextSetImageOperationKey: string;

declare var SDWebImageContextStoreCacheType: string;

declare var SDWebImageDownloadFinishNotification: string;

declare var SDWebImageDownloadReceiveResponseNotification: string;

declare var SDWebImageDownloadStartNotification: string;

declare var SDWebImageDownloadStopNotification: string;

declare class SDWebImageDownloadToken extends NSObject implements SDWebImageOperation {

	static alloc(): SDWebImageDownloadToken; // inherited from NSObject

	static new(): SDWebImageDownloadToken; // inherited from NSObject

	readonly metrics: NSURLSessionTaskMetrics;

	readonly request: NSURLRequest;

	readonly response: NSURLResponse;

	readonly url: NSURL;

	readonly cancelled: boolean; // inherited from SDWebImageOperation

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

	decryptor: SDWebImageDownloaderDecryptorProtocol;

	requestModifier: SDWebImageDownloaderRequestModifierProtocol;

	responseModifier: SDWebImageDownloaderResponseModifierProtocol;

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

	canRequestImageForURLOptionsContext(url: NSURL, options: SDWebImageOptions, context: NSDictionary<string, any>): boolean;

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

	shouldBlockFailedURLWithURLErrorOptionsContext(url: NSURL, error: NSError, options: SDWebImageOptions, context: NSDictionary<string, any>): boolean;

	valueForHTTPHeaderField(field: string): string;
}

declare class SDWebImageDownloaderConfig extends NSObject implements NSCopying {

	static alloc(): SDWebImageDownloaderConfig; // inherited from NSObject

	static new(): SDWebImageDownloaderConfig; // inherited from NSObject

	acceptableContentTypes: NSSet<string>;

	acceptableStatusCodes: NSIndexSet;

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

declare class SDWebImageDownloaderDecryptor extends NSObject implements SDWebImageDownloaderDecryptorProtocol {

	static alloc(): SDWebImageDownloaderDecryptor; // inherited from NSObject

	static decryptorWithBlock(block: (p1: NSData, p2: NSURLResponse) => NSData): SDWebImageDownloaderDecryptor;

	static new(): SDWebImageDownloaderDecryptor; // inherited from NSObject

	static readonly base64Decryptor: SDWebImageDownloaderDecryptor;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { block: (p1: NSData, p2: NSURLResponse) => NSData; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	decryptedDataWithDataResponse(data: NSData, response: NSURLResponse): NSData;

	initWithBlock(block: (p1: NSData, p2: NSURLResponse) => NSData): this;

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

interface SDWebImageDownloaderDecryptorProtocol extends NSObjectProtocol {

	decryptedDataWithDataResponse(data: NSData, response: NSURLResponse): NSData;
}
declare var SDWebImageDownloaderDecryptorProtocol: {

	prototype: SDWebImageDownloaderDecryptorProtocol;
};

declare const enum SDWebImageDownloaderExecutionOrder {

	FIFOExecutionOrder = 0,

	LIFOExecutionOrder = 1
}

declare class SDWebImageDownloaderOperation extends NSOperation implements SDWebImageDownloaderOperationProtocol {

	static alloc(): SDWebImageDownloaderOperation; // inherited from NSObject

	static new(): SDWebImageDownloaderOperation; // inherited from NSObject

	readonly context: NSDictionary<string, any>;

	readonly options: SDWebImageDownloaderOptions;

	acceptableContentTypes: NSSet<string>; // inherited from SDWebImageDownloaderOperationProtocol

	acceptableStatusCodes: NSIndexSet; // inherited from SDWebImageDownloaderOperationProtocol

	credential: NSURLCredential; // inherited from SDWebImageDownloaderOperationProtocol

	readonly dataTask: NSURLSessionTask; // inherited from SDWebImageDownloaderOperationProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly metrics: NSURLSessionTaskMetrics; // inherited from SDWebImageDownloaderOperationProtocol

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

	URLSessionDidCreateTask(session: NSURLSession, task: NSURLSessionTask): void;

	URLSessionDidFinishEventsForBackgroundURLSession(session: NSURLSession): void;

	URLSessionDidReceiveChallengeCompletionHandler(session: NSURLSession, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

	URLSessionTaskDidCompleteWithError(session: NSURLSession, task: NSURLSessionTask, error: NSError): void;

	URLSessionTaskDidFinishCollectingMetrics(session: NSURLSession, task: NSURLSessionTask, metrics: NSURLSessionTaskMetrics): void;

	URLSessionTaskDidReceiveChallengeCompletionHandler(session: NSURLSession, task: NSURLSessionTask, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

	URLSessionTaskDidReceiveInformationalResponse(session: NSURLSession, task: NSURLSessionTask, response: NSHTTPURLResponse): void;

	URLSessionTaskDidSendBodyDataTotalBytesSentTotalBytesExpectedToSend(session: NSURLSession, task: NSURLSessionTask, bytesSent: number, totalBytesSent: number, totalBytesExpectedToSend: number): void;

	URLSessionTaskIsWaitingForConnectivity(session: NSURLSession, task: NSURLSessionTask): void;

	URLSessionTaskNeedNewBodyStream(session: NSURLSession, task: NSURLSessionTask, completionHandler: (p1: NSInputStream) => void): void;

	URLSessionTaskNeedNewBodyStreamFromOffsetCompletionHandler(session: NSURLSession, task: NSURLSessionTask, offset: number, completionHandler: (p1: NSInputStream) => void): void;

	URLSessionTaskWillBeginDelayedRequestCompletionHandler(session: NSURLSession, task: NSURLSessionTask, request: NSURLRequest, completionHandler: (p1: NSURLSessionDelayedRequestDisposition, p2: NSURLRequest) => void): void;

	URLSessionTaskWillPerformHTTPRedirectionNewRequestCompletionHandler(session: NSURLSession, task: NSURLSessionTask, response: NSHTTPURLResponse, request: NSURLRequest, completionHandler: (p1: NSURLRequest) => void): void;

	addHandlersForProgressCompleted(progressBlock: (p1: number, p2: number, p3: NSURL) => void, completedBlock: (p1: UIImage, p2: NSData, p3: NSError, p4: boolean) => void): any;

	addHandlersForProgressCompletedDecodeOptions(progressBlock: (p1: number, p2: number, p3: NSURL) => void, completedBlock: (p1: UIImage, p2: NSData, p3: NSError, p4: boolean) => void, decodeOptions: NSDictionary<string, any>): any;

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

	acceptableContentTypes?: NSSet<string>;

	acceptableStatusCodes?: NSIndexSet;

	credential?: NSURLCredential;

	dataTask?: NSURLSessionTask;

	metrics?: NSURLSessionTaskMetrics;

	minimumProgressInterval?: number;

	request: NSURLRequest;

	response: NSURLResponse;

	addHandlersForProgressCompleted(progressBlock: (p1: number, p2: number, p3: NSURL) => void, completedBlock: (p1: UIImage, p2: NSData, p3: NSError, p4: boolean) => void): any;

	addHandlersForProgressCompletedDecodeOptions(progressBlock: (p1: number, p2: number, p3: NSURL) => void, completedBlock: (p1: UIImage, p2: NSData, p3: NSError, p4: boolean) => void, decodeOptions: NSDictionary<string, any>): any;

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

	PreloadAllFrames = 2048,

	MatchAnimatedImageClass = 4096
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

	constructor(o: { body: NSData; });

	constructor(o: { headers: NSDictionary<string, string>; });

	constructor(o: { method: string; });

	constructor(o: { method: string; headers: NSDictionary<string, string>; body: NSData; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithBlock(block: (p1: NSURLRequest) => NSURLRequest): this;

	initWithBody(body: NSData): this;

	initWithHeaders(headers: NSDictionary<string, string>): this;

	initWithMethod(method: string): this;

	initWithMethodHeadersBody(method: string, headers: NSDictionary<string, string>, body: NSData): this;

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

declare class SDWebImageDownloaderResponseModifier extends NSObject implements SDWebImageDownloaderResponseModifierProtocol {

	static alloc(): SDWebImageDownloaderResponseModifier; // inherited from NSObject

	static new(): SDWebImageDownloaderResponseModifier; // inherited from NSObject

	static responseModifierWithBlock(block: (p1: NSURLResponse) => NSURLResponse): SDWebImageDownloaderResponseModifier;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { block: (p1: NSURLResponse) => NSURLResponse; });

	constructor(o: { headers: NSDictionary<string, string>; });

	constructor(o: { statusCode: number; });

	constructor(o: { statusCode: number; version: string; headers: NSDictionary<string, string>; });

	constructor(o: { version: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithBlock(block: (p1: NSURLResponse) => NSURLResponse): this;

	initWithHeaders(headers: NSDictionary<string, string>): this;

	initWithStatusCode(statusCode: number): this;

	initWithStatusCodeVersionHeaders(statusCode: number, version: string, headers: NSDictionary<string, string>): this;

	initWithVersion(version: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	modifiedResponseWithResponse(response: NSURLResponse): NSURLResponse;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface SDWebImageDownloaderResponseModifierProtocol extends NSObjectProtocol {

	modifiedResponseWithResponse(response: NSURLResponse): NSURLResponse;
}
declare var SDWebImageDownloaderResponseModifierProtocol: {

	prototype: SDWebImageDownloaderResponseModifierProtocol;
};

declare const enum SDWebImageError {

	InvalidURL = 1000,

	BadImageData = 1001,

	CacheNotModified = 1002,

	BlackListed = 1003,

	InvalidDownloadOperation = 2000,

	InvalidDownloadStatusCode = 2001,

	Cancelled = 2002,

	InvalidDownloadResponse = 2003,

	InvalidDownloadContentType = 2004
}

declare var SDWebImageErrorDomain: string;

declare var SDWebImageErrorDownloadContentTypeKey: string;

declare var SDWebImageErrorDownloadResponseKey: string;

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

declare class SDWebImageLoadState extends NSObject {

	static alloc(): SDWebImageLoadState; // inherited from NSObject

	static new(): SDWebImageLoadState; // inherited from NSObject

	progress: NSProgress;

	url: NSURL;
}

declare class SDWebImageManager extends NSObject {

	static alloc(): SDWebImageManager; // inherited from NSObject

	static new(): SDWebImageManager; // inherited from NSObject

	cacheKeyFilter: SDWebImageCacheKeyFilterProtocol;

	cacheSerializer: SDWebImageCacheSerializerProtocol;

	delegate: SDWebImageManagerDelegate;

	readonly imageCache: SDImageCacheProtocol;

	readonly imageLoader: SDImageLoader;

	optionsProcessor: SDWebImageOptionsProcessorProtocol;

	readonly running: boolean;

	transformer: SDImageTransformer;

	static defaultImageCache: SDImageCacheProtocol;

	static defaultImageLoader: SDImageLoader;

	static readonly sharedManager: SDWebImageManager;

	constructor(o: { cache: SDImageCacheProtocol; loader: SDImageLoader; });

	cacheKeyForURL(url: NSURL): string;

	cacheKeyForURLContext(url: NSURL, context: NSDictionary<string, any>): string;

	cancelAll(): void;

	initWithCacheLoader(cache: SDImageCacheProtocol, loader: SDImageLoader): this;

	loadImageWithURLOptionsContextProgressCompleted(url: NSURL, options: SDWebImageOptions, context: NSDictionary<string, any>, progressBlock: (p1: number, p2: number, p3: NSURL) => void, completedBlock: (p1: UIImage, p2: NSData, p3: NSError, p4: SDImageCacheType, p5: boolean, p6: NSURL) => void): SDWebImageCombinedOperation;

	loadImageWithURLOptionsProgressCompleted(url: NSURL, options: SDWebImageOptions, progressBlock: (p1: number, p2: number, p3: NSURL) => void, completedBlock: (p1: UIImage, p2: NSData, p3: NSError, p4: SDImageCacheType, p5: boolean, p6: NSURL) => void): SDWebImageCombinedOperation;

	removeAllFailedURLs(): void;

	removeFailedURL(url: NSURL): void;
}

interface SDWebImageManagerDelegate extends NSObjectProtocol {

	imageManagerShouldBlockFailedURLWithError?(imageManager: SDWebImageManager, imageURL: NSURL, error: NSError): boolean;

	imageManagerShouldDownloadImageForURL?(imageManager: SDWebImageManager, imageURL: NSURL): boolean;
}
declare var SDWebImageManagerDelegate: {

	prototype: SDWebImageManagerDelegate;
};

interface SDWebImageOperation extends NSObjectProtocol {

	cancelled?: boolean;

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

	PreloadAllFrames = 1048576,

	MatchAnimatedImageClass = 2097152,

	WaitStoreCache = 4194304,

	TransformVectorImage = 8388608,

	AvoidAutoCancelImage = 16777216
}

declare class SDWebImageOptionsProcessor extends NSObject implements SDWebImageOptionsProcessorProtocol {

	static alloc(): SDWebImageOptionsProcessor; // inherited from NSObject

	static new(): SDWebImageOptionsProcessor; // inherited from NSObject

	static optionsProcessorWithBlock(block: (p1: NSURL, p2: SDWebImageOptions, p3: NSDictionary<string, any>) => SDWebImageOptionsResult): SDWebImageOptionsProcessor;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { block: (p1: NSURL, p2: SDWebImageOptions, p3: NSDictionary<string, any>) => SDWebImageOptionsResult; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithBlock(block: (p1: NSURL, p2: SDWebImageOptions, p3: NSDictionary<string, any>) => SDWebImageOptionsResult): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	processedResultForURLOptionsContext(url: NSURL, options: SDWebImageOptions, context: NSDictionary<string, any>): SDWebImageOptionsResult;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface SDWebImageOptionsProcessorProtocol extends NSObjectProtocol {

	processedResultForURLOptionsContext(url: NSURL, options: SDWebImageOptions, context: NSDictionary<string, any>): SDWebImageOptionsResult;
}
declare var SDWebImageOptionsProcessorProtocol: {

	prototype: SDWebImageOptionsProcessorProtocol;
};

declare class SDWebImageOptionsResult extends NSObject {

	static alloc(): SDWebImageOptionsResult; // inherited from NSObject

	static new(): SDWebImageOptionsResult; // inherited from NSObject

	readonly context: NSDictionary<string, any>;

	readonly options: SDWebImageOptions;

	constructor(o: { options: SDWebImageOptions; context: NSDictionary<string, any>; });

	initWithOptionsContext(options: SDWebImageOptions, context: NSDictionary<string, any>): this;
}

declare class SDWebImagePrefetchToken extends NSObject implements SDWebImageOperation {

	static alloc(): SDWebImagePrefetchToken; // inherited from NSObject

	static new(): SDWebImagePrefetchToken; // inherited from NSObject

	readonly urls: NSArray<NSURL>;

	readonly cancelled: boolean; // inherited from SDWebImageOperation

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

	readonly manager: SDWebImageManager;

	maxConcurrentPrefetchCount: number;

	options: SDWebImageOptions;

	static readonly sharedImagePrefetcher: SDWebImagePrefetcher;

	constructor(o: { imageManager: SDWebImageManager; });

	cancelPrefetching(): void;

	initWithImageManager(manager: SDWebImageManager): this;

	prefetchURLs(urls: NSArray<NSURL> | NSURL[]): SDWebImagePrefetchToken;

	prefetchURLsOptionsContextProgressCompleted(urls: NSArray<NSURL> | NSURL[], options: SDWebImageOptions, context: NSDictionary<string, any>, progressBlock: (p1: number, p2: number) => void, completionBlock: (p1: number, p2: number) => void): SDWebImagePrefetchToken;

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

	static curlDownTransitionWithDuration(duration: number): SDWebImageTransition;

	static curlUpTransitionWithDuration(duration: number): SDWebImageTransition;

	static fadeTransitionWithDuration(duration: number): SDWebImageTransition;

	static flipFromBottomTransitionWithDuration(duration: number): SDWebImageTransition;

	static flipFromLeftTransitionWithDuration(duration: number): SDWebImageTransition;

	static flipFromRightTransitionWithDuration(duration: number): SDWebImageTransition;

	static flipFromTopTransitionWithDuration(duration: number): SDWebImageTransition;

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

declare var SDWebImageVersionNumber: number;

declare var SDWebImageVersionNumberVar: number;

declare var SDWebImageVersionString: interop.Reference<number>;

declare var SDWebImageVersionStringVar: interop.Reference<number>;

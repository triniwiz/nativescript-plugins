declare const enum NSCDownloaderStatusCode {
	PENDING = 0,

	PAUSED = 1,

	DOWNLOADING = 2,

	COMPLETED = 3,

	ERROR = 4,
}

declare const enum NSCImageCacheItLoadMode {
	Sync = 0,

	Async = 1,
}

declare const enum NSCImageCacheItPriority {
	Low = 0,

	Normal = 1,

	High = 2,
}

declare const enum NSCImageCacheItStretch {
	None = 0,

	AspectFit = 1,

	AspectFill = 2,

	Fill = 3,
}

declare const enum NSCImageCacheItTransition {
	None = 0,

	Fade = 1,
}

declare class NSCImageCacheItView extends SDAnimatedImageView {
	static alloc(): NSCImageCacheItView; // inherited from NSObject

	static appearance(): NSCImageCacheItView; // inherited from UIAppearance

	/**
	 * @since 8.0
	 */
	static appearanceForTraitCollection(trait: UITraitCollection): NSCImageCacheItView; // inherited from UIAppearance

	/**
	 * @since 8.0
	 * @deprecated 9.0
	 */
	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): NSCImageCacheItView; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): NSCImageCacheItView; // inherited from UIAppearance

	/**
	 * @since 5.0
	 * @deprecated 9.0
	 */
	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): NSCImageCacheItView; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): NSCImageCacheItView; // inherited from UIAppearance

	static clear(done: () => void): void;

	static deleteItem(src: string, callback: (p1: NSError) => void): void;

	static didReceiveMemoryWarningWithNotification(notification: NSNotification): void;

	static disableAutoMM(): void;

	static enableAutoMM(): void;

	static getItem(src: string, headers: NSDictionary<string, string>, callback: (p1: NSError, p2: string) => void): void;

	static hasItem(src: string, callback: (p1: boolean) => void): void;

	static new(): NSCImageCacheItView; // inherited from NSObject

	static setMaxDiskCacheAge(newValue: number): void;

	static setMaxDiskCacheSize(newValue: number): void;

	static setMaxMemoryCacheSize(newValue: number): void;

	color: UIColor;

	errorHolder: UIImage;

	fallback: UIImage;

	filter: string;

	font: UIFont;

	headers: NSDictionary<string, string>;

	imageTint: UIColor;

	isLoading: boolean;

	loadMode: NSCImageCacheItLoadMode;

	loadStart: (p1: string) => void;

	onError: (p1: string, p2: string) => void;

	onLoadEnd: (p1: string, p2: UIImage) => void;

	onProgress: (p1: number, p2: number, p3: number, p4: string) => void;

	overlayColor: UIColor;

	placeHolder: UIImage;

	priority: NSCImageCacheItPriority;

	progress: number;

	runLayout: () => void;

	src: string;

	stretch: NSCImageCacheItStretch;

	transition: NSCImageCacheItTransition;

	static maxDiskCacheAge: number;

	static maxDiskCacheSize: number;

	static maxMemoryCacheSize: number;

	isDataURI(uri: string): boolean;

	isFontIconURI(uri: string): boolean;

	loadImageWithString(string: string): void;

	setImageSource(image: UIImage): void;
}

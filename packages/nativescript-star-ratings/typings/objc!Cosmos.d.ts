
declare class CosmosSettings extends NSObject {

	static alloc(): CosmosSettings; // inherited from NSObject

	static default(): CosmosSettings;

	static new(): CosmosSettings; // inherited from NSObject

	disablePanGestures: boolean;

	emptyBorderColor: UIColor;

	emptyBorderWidth: number;

	emptyColor: UIColor;

	emptyImage: UIImage;

	fillMode: StarFillMode;

	filledBorderColor: UIColor;

	filledBorderWidth: number;

	filledColor: UIColor;

	filledImage: UIImage;

	minTouchRating: number;

	passTouchesToSuperview: boolean;

	starMargin: number;

	starPoints: NSArray<NSValue>;

	starSize: number;

	textColor: UIColor;

	textFont: UIFont;

	textMargin: number;

	totalStars: number;

	updateOnTouch: boolean;

	static readonly default_: CosmosSettings;
}

declare var CosmosVersionNumber: number;

declare var CosmosVersionString: interop.Reference<number>;

declare class CosmosView extends UIView {

	static alloc(): CosmosView; // inherited from NSObject

	static appearance(): CosmosView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): CosmosView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): CosmosView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): CosmosView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): CosmosView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): CosmosView; // inherited from UIAppearance

	static new(): CosmosView; // inherited from NSObject

	didFinishTouchingCosmos: (p1: number) => void;

	didTouchCosmos: (p1: number) => void;

	rating: number;

	settings: CosmosSettings;

	text: string;

	constructor(o: { frame: CGRect; settings: CosmosSettings; });

	constructor(o: { settings: CosmosSettings; });

	initWithFrameSettings(frame: CGRect, settings: CosmosSettings): this;

	initWithSettings(settings: CosmosSettings): this;

	prepareForReuse(): void;

	update(): void;
}

declare const enum StarFillMode {

	Full = 0,

	Half = 1,

	Precise = 2
}

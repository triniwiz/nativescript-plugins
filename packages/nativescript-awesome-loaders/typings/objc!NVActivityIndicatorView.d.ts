
declare const enum NVActivityIndicatorType {

	Blank = 0,

	BallPulse = 1,

	BallGridPulse = 2,

	BallClipRotate = 3,

	SquareSpin = 4,

	BallClipRotatePulse = 5,

	BallClipRotateMultiple = 6,

	BallPulseRise = 7,

	BallRotate = 8,

	CubeTransition = 9,

	BallZigZag = 10,

	BallZigZagDeflect = 11,

	BallTrianglePath = 12,

	BallScale = 13,

	LineScale = 14,

	LineScaleParty = 15,

	BallScaleMultiple = 16,

	BallPulseSync = 17,

	BallBeat = 18,

	BallDoubleBounce = 19,

	LineScalePulseOut = 20,

	LineScalePulseOutRapid = 21,

	BallScaleRipple = 22,

	BallScaleRippleMultiple = 23,

	BallSpinFadeLoader = 24,

	LineSpinFadeLoader = 25,

	TriangleSkewSpin = 26,

	Pacman = 27,

	BallGridBeat = 28,

	SemiCircleSpin = 29,

	BallRotateChase = 30,

	Orbit = 31,

	AudioEqualizer = 32,

	CircleStrokeSpin = 33
}

declare class NVActivityIndicatorView extends UIView {

	static alloc(): NVActivityIndicatorView; // inherited from NSObject

	static appearance(): NVActivityIndicatorView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): NVActivityIndicatorView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): NVActivityIndicatorView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NVActivityIndicatorView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): NVActivityIndicatorView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NVActivityIndicatorView; // inherited from UIAppearance

	static new(): NVActivityIndicatorView; // inherited from NSObject

	static setDEFAULT_BLOCKER_BACKGROUND_COLOR(value: UIColor): void;

	static setDEFAULT_BLOCKER_DISPLAY_TIME_THRESHOLD(value: number): void;

	static setDEFAULT_BLOCKER_MESSAGE(value: string): void;

	static setDEFAULT_BLOCKER_MESSAGE_FONT(value: UIFont): void;

	static setDEFAULT_BLOCKER_MESSAGE_SPACING(value: number): void;

	static setDEFAULT_BLOCKER_MINIMUM_DISPLAY_TIME(value: number): void;

	static setDEFAULT_BLOCKER_SIZE(value: CGSize): void;

	static setDEFAULT_COLOR(value: UIColor): void;

	static setDEFAULT_FADE_IN_ANIMATION(value: (p1: UIView) => void): void;

	static setDEFAULT_FADE_OUT_ANIMATION(value: (p1: UIView, p2: () => void) => void): void;

	static setDEFAULT_PADDING(value: number): void;

	static setDEFAULT_TEXT_COLOR(value: UIColor): void;

	static setDEFAULT_TYPE(value: NVActivityIndicatorType): void;

	readonly animating: boolean;

	color: UIColor;

	readonly isAnimating: boolean;

	padding: number;

	type: NVActivityIndicatorType;

	static DEFAULT_BLOCKER_BACKGROUND_COLOR: UIColor;

	static DEFAULT_BLOCKER_DISPLAY_TIME_THRESHOLD: number;

	static DEFAULT_BLOCKER_MESSAGE: string;

	static DEFAULT_BLOCKER_MESSAGE_FONT: UIFont;

	static DEFAULT_BLOCKER_MESSAGE_SPACING: number;

	static DEFAULT_BLOCKER_MINIMUM_DISPLAY_TIME: number;

	static DEFAULT_BLOCKER_SIZE: CGSize;

	static DEFAULT_COLOR: UIColor;

	static DEFAULT_FADE_IN_ANIMATION: (p1: UIView) => void;

	static DEFAULT_FADE_OUT_ANIMATION: (p1: UIView, p2: () => void) => void;

	static DEFAULT_PADDING: number;

	static DEFAULT_TEXT_COLOR: UIColor;

	static DEFAULT_TYPE: NVActivityIndicatorType;

	constructor(o: { frame: CGRect; type: NVActivityIndicatorType; });

	initWithFrameType(frame: CGRect, type: NVActivityIndicatorType): this;

	startAnimating(): void;

	stopAnimating(): void;
}

declare var NVActivityIndicatorViewVersionNumber: number;

declare var NVActivityIndicatorViewVersionString: interop.Reference<number>;

declare class SexyTooltip extends UIView {
	static alloc(): SexyTooltip; // inherited from NSObject

	static appearance(): SexyTooltip; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SexyTooltip; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SexyTooltip; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SexyTooltip; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SexyTooltip; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SexyTooltip; // inherited from UIAppearance

	static maximumContentViewSizeWithDefaultPaddingAndMarginsInView(view: UIView): CGSize;

	static new(): SexyTooltip; // inherited from NSObject

	arrowHeight: number;

	arrowMargin: number;

	attachedToView: boolean;

	readonly attributedString: NSAttributedString;

	borderColor: UIColor;

	color: UIColor;

	contentView: UIView;

	cornerRadius: number;

	delegate: SexyTooltipDelegate;

	dismissesOnTap: boolean;

	readonly fromView: UIView;

	hasShadow: boolean;

	readonly isShowing: boolean;

	margin: UIEdgeInsets;

	padding: UIEdgeInsets;

	permittedArrowDirections: NSArray<any>;

	scrollViewParentClipsToContentSize: boolean;

	constructor(o: { attributedString: NSAttributedString });

	constructor(o: { attributedString: NSAttributedString; sizedToView: UIView });

	constructor(o: { attributedString: NSAttributedString; sizedToView: UIView; withPadding: UIEdgeInsets; andMargin: UIEdgeInsets });

	constructor(o: { contentView: UIView });

	cancelDismissTimer(): void;

	dismiss(): void;

	dismissAnimated(animated: boolean): void;

	dismissInTimeInterval(timeInterval: number): void;

	dismissInTimeIntervalAnimated(timeInterval: number, animated: boolean): void;

	initWithAttributedString(attrStr: NSAttributedString): this;

	initWithAttributedStringSizedToView(attrStr: NSAttributedString, containerView: UIView): this;

	initWithAttributedStringSizedToViewWithPaddingAndMargin(attrStr: NSAttributedString, containerView: UIView, padding: UIEdgeInsets, margin: UIEdgeInsets): this;

	initWithContentView(contentView: UIView): this;

	maximumContentViewSizeInView(view: UIView): CGSize;

	presentFromPointInView(point: CGPoint, view: UIView): void;

	presentFromPointInViewAnimated(point: CGPoint, view: UIView, animated: boolean): void;

	presentFromRectInView(rect: CGRect, view: UIView): void;

	presentFromRectInViewAnimated(rect: CGRect, view: UIView, animated: boolean): void;

	presentFromView(view: UIView): void;

	presentFromViewAnimated(view: UIView, animated: boolean): void;

	presentFromViewInView(fromView: UIView, view: UIView): void;

	presentFromViewInViewAnimated(fromView: UIView, view: UIView, animated: boolean): void;

	presentFromViewInViewWithMarginAnimated(fromView: UIView, view: UIView, margin: number, animated: boolean): void;

	presentFromViewWithMargin(view: UIView, margin: number): void;

	presentFromViewWithMarginAnimated(view: UIView, margin: number, animated: boolean): void;
}

declare const enum SexyTooltipArrowDirection {
	Up = 0,

	Down = 1,

	Left = 2,

	Right = 3,
}

interface SexyTooltipDelegate extends NSObjectProtocol {
	tooltipDidDismiss?(tooltip: SexyTooltip): void;

	tooltipDidPresent?(tooltip: SexyTooltip): void;

	tooltipWasTapped?(tooltip: SexyTooltip): void;

	tooltipWillBeTapped?(tooltip: SexyTooltip): void;
}
declare var SexyTooltipDelegate: {
	prototype: SexyTooltipDelegate;
};

declare var SexyTooltipVersionNumber: number;

declare var SexyTooltipVersionString: interop.Reference<number>;

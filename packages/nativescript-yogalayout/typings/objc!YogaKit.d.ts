
declare const enum YGDimensionFlexibility {

	FlexibleWidth = 1,

	FlexibleHeight = 2
}

declare class YGLayout extends NSObject {

	static alloc(): YGLayout; // inherited from NSObject

	static new(): YGLayout; // inherited from NSObject

	alignContent: YGAlign;

	alignItems: YGAlign;

	alignSelf: YGAlign;

	aspectRatio: number;

	borderBottomWidth: number;

	borderEndWidth: number;

	borderLeftWidth: number;

	borderRightWidth: number;

	borderStartWidth: number;

	borderTopWidth: number;

	borderWidth: number;

	bottom: YGValue;

	direction: YGDirection;

	display: YGDisplay;

	end: YGValue;

	flex: number;

	flexBasis: YGValue;

	flexDirection: YGFlexDirection;

	flexGrow: number;

	flexShrink: number;

	flexWrap: YGWrap;

	height: YGValue;

	readonly intrinsicSize: CGSize;

	readonly isDirty: boolean;

	isEnabled: boolean;

	isIncludedInLayout: boolean;

	readonly isLeaf: boolean;

	justifyContent: YGJustify;

	left: YGValue;

	margin: YGValue;

	marginBottom: YGValue;

	marginEnd: YGValue;

	marginHorizontal: YGValue;

	marginLeft: YGValue;

	marginRight: YGValue;

	marginStart: YGValue;

	marginTop: YGValue;

	marginVertical: YGValue;

	maxHeight: YGValue;

	maxWidth: YGValue;

	minHeight: YGValue;

	minWidth: YGValue;

	readonly numberOfChildren: number;

	overflow: YGOverflow;

	padding: YGValue;

	paddingBottom: YGValue;

	paddingEnd: YGValue;

	paddingHorizontal: YGValue;

	paddingLeft: YGValue;

	paddingRight: YGValue;

	paddingStart: YGValue;

	paddingTop: YGValue;

	paddingVertical: YGValue;

	position: YGPositionType;

	readonly resolvedDirection: YGDirection;

	right: YGValue;

	start: YGValue;

	top: YGValue;

	width: YGValue;

	applyLayoutPreservingOrigin(preserveOrigin: boolean): void;

	applyLayoutPreservingOriginDimensionFlexibility(preserveOrigin: boolean, dimensionFlexibility: YGDimensionFlexibility): void;

	calculateLayoutWithSize(size: CGSize): CGSize;

	markDirty(): void;
}

declare function YGPercentValue(value: number): YGValue;

declare function YGPointValue(value: number): YGValue;

declare var YogaKitVersionNumber: number;

declare var YogaKitVersionString: interop.Reference<number>;

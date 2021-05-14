
declare const enum YGAlign {

	Auto = 0,

	FlexStart = 1,

	Center = 2,

	FlexEnd = 3,

	Stretch = 4,

	Baseline = 5,

	SpaceBetween = 6,

	SpaceAround = 7
}

declare function YGAlignToString(p1: YGAlign): string;

declare function YGAssert(condition: boolean, message: string | interop.Pointer | interop.Reference<any>): void;

declare function YGAssertWithConfig(config: interop.Pointer | interop.Reference<any>, condition: boolean, message: string | interop.Pointer | interop.Reference<any>): void;

declare function YGAssertWithNode(node: interop.Pointer | interop.Reference<any>, condition: boolean, message: string | interop.Pointer | interop.Reference<any>): void;

declare function YGConfigCopy(dest: interop.Pointer | interop.Reference<any>, src: interop.Pointer | interop.Reference<any>): void;

declare function YGConfigFree(config: interop.Pointer | interop.Reference<any>): void;

declare function YGConfigGetContext(config: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function YGConfigGetDefault(): interop.Pointer | interop.Reference<any>;

declare function YGConfigGetInstanceCount(): number;

declare function YGConfigGetUseWebDefaults(config: interop.Pointer | interop.Reference<any>): boolean;

declare function YGConfigIsExperimentalFeatureEnabled(config: interop.Pointer | interop.Reference<any>, feature: YGExperimentalFeature): boolean;

declare function YGConfigNew(): interop.Pointer | interop.Reference<any>;

declare function YGConfigSetCloneNodeFunc(config: interop.Pointer | interop.Reference<any>, callback: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>, p2: interop.Pointer | interop.Reference<any>, p3: number) => interop.Pointer | interop.Reference<any>>): void;

declare function YGConfigSetContext(config: interop.Pointer | interop.Reference<any>, context: interop.Pointer | interop.Reference<any>): void;

declare function YGConfigSetExperimentalFeatureEnabled(config: interop.Pointer | interop.Reference<any>, feature: YGExperimentalFeature, enabled: boolean): void;

declare function YGConfigSetPointScaleFactor(config: interop.Pointer | interop.Reference<any>, pixelsInPoint: number): void;

declare function YGConfigSetPrintTreeFlag(config: interop.Pointer | interop.Reference<any>, enabled: boolean): void;

declare function YGConfigSetShouldDiffLayoutWithoutLegacyStretchBehaviour(config: interop.Pointer | interop.Reference<any>, shouldDiffLayout: boolean): void;

declare function YGConfigSetUseLegacyStretchBehaviour(config: interop.Pointer | interop.Reference<any>, useLegacyStretchBehaviour: boolean): void;

declare function YGConfigSetUseWebDefaults(config: interop.Pointer | interop.Reference<any>, enabled: boolean): void;

declare const enum YGDimension {

	Width = 0,

	Height = 1
}

declare function YGDimensionToString(p1: YGDimension): string;

declare const enum YGDirection {

	Inherit = 0,

	LTR = 1,

	RTL = 2
}

declare function YGDirectionToString(p1: YGDirection): string;

declare const enum YGDisplay {

	Flex = 0,

	None = 1
}

declare function YGDisplayToString(p1: YGDisplay): string;

declare const enum YGEdge {

	Left = 0,

	Top = 1,

	Right = 2,

	Bottom = 3,

	Start = 4,

	End = 5,

	Horizontal = 6,

	Vertical = 7,

	All = 8
}

declare function YGEdgeToString(p1: YGEdge): string;

declare const enum YGExperimentalFeature {

	WebFlexBasis = 0
}

declare function YGExperimentalFeatureToString(p1: YGExperimentalFeature): string;

declare const enum YGFlexDirection {

	Column = 0,

	ColumnReverse = 1,

	Row = 2,

	RowReverse = 3
}

declare function YGFlexDirectionToString(p1: YGFlexDirection): string;

declare function YGFloatIsUndefined(value: number): boolean;

declare const enum YGJustify {

	FlexStart = 0,

	Center = 1,

	FlexEnd = 2,

	SpaceBetween = 3,

	SpaceAround = 4,

	SpaceEvenly = 5
}

declare function YGJustifyToString(p1: YGJustify): string;

declare const enum YGLogLevel {

	Error = 0,

	Warn = 1,

	Info = 2,

	Debug = 3,

	Verbose = 4,

	Fatal = 5
}

declare function YGLogLevelToString(p1: YGLogLevel): string;

declare const enum YGMeasureMode {

	Undefined = 0,

	Exactly = 1,

	AtMost = 2
}

declare function YGMeasureModeToString(p1: YGMeasureMode): string;

declare function YGNodeCalculateLayout(node: interop.Pointer | interop.Reference<any>, availableWidth: number, availableHeight: number, ownerDirection: YGDirection): void;

declare function YGNodeCanUseCachedMeasurement(widthMode: YGMeasureMode, width: number, heightMode: YGMeasureMode, height: number, lastWidthMode: YGMeasureMode, lastWidth: number, lastHeightMode: YGMeasureMode, lastHeight: number, lastComputedWidth: number, lastComputedHeight: number, marginRow: number, marginColumn: number, config: interop.Pointer | interop.Reference<any>): boolean;

declare function YGNodeClone(node: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function YGNodeCopyStyle(dstNode: interop.Pointer | interop.Reference<any>, srcNode: interop.Pointer | interop.Reference<any>): void;

declare function YGNodeFree(node: interop.Pointer | interop.Reference<any>): void;

declare function YGNodeFreeRecursive(node: interop.Pointer | interop.Reference<any>): void;

declare function YGNodeFreeRecursiveWithCleanupFunc(node: interop.Pointer | interop.Reference<any>, cleanup: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>) => void>): void;

declare function YGNodeGetChild(node: interop.Pointer | interop.Reference<any>, index: number): interop.Pointer | interop.Reference<any>;

declare function YGNodeGetChildCount(node: interop.Pointer | interop.Reference<any>): number;

declare function YGNodeGetContext(node: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function YGNodeGetDirtiedFunc(node: interop.Pointer | interop.Reference<any>): interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>) => void>;

declare function YGNodeGetHasNewLayout(node: interop.Pointer | interop.Reference<any>): boolean;

declare function YGNodeGetInstanceCount(): number;

declare function YGNodeGetNodeType(node: interop.Pointer | interop.Reference<any>): YGNodeType;

declare function YGNodeGetOwner(node: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function YGNodeGetParent(node: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function YGNodeHasBaselineFunc(node: interop.Pointer | interop.Reference<any>): boolean;

declare function YGNodeHasMeasureFunc(node: interop.Pointer | interop.Reference<any>): boolean;

declare function YGNodeInsertChild(node: interop.Pointer | interop.Reference<any>, child: interop.Pointer | interop.Reference<any>, index: number): void;

declare function YGNodeIsDirty(node: interop.Pointer | interop.Reference<any>): boolean;

declare function YGNodeIsReferenceBaseline(node: interop.Pointer | interop.Reference<any>): boolean;

declare function YGNodeLayoutGetBorder(node: interop.Pointer | interop.Reference<any>, edge: YGEdge): number;

declare function YGNodeLayoutGetBottom(node: interop.Pointer | interop.Reference<any>): number;

declare function YGNodeLayoutGetDidLegacyStretchFlagAffectLayout(node: interop.Pointer | interop.Reference<any>): boolean;

declare function YGNodeLayoutGetDidUseLegacyFlag(node: interop.Pointer | interop.Reference<any>): boolean;

declare function YGNodeLayoutGetDirection(node: interop.Pointer | interop.Reference<any>): YGDirection;

declare function YGNodeLayoutGetHadOverflow(node: interop.Pointer | interop.Reference<any>): boolean;

declare function YGNodeLayoutGetHeight(node: interop.Pointer | interop.Reference<any>): number;

declare function YGNodeLayoutGetLeft(node: interop.Pointer | interop.Reference<any>): number;

declare function YGNodeLayoutGetMargin(node: interop.Pointer | interop.Reference<any>, edge: YGEdge): number;

declare function YGNodeLayoutGetPadding(node: interop.Pointer | interop.Reference<any>, edge: YGEdge): number;

declare function YGNodeLayoutGetRight(node: interop.Pointer | interop.Reference<any>): number;

declare function YGNodeLayoutGetTop(node: interop.Pointer | interop.Reference<any>): number;

declare function YGNodeLayoutGetWidth(node: interop.Pointer | interop.Reference<any>): number;

declare function YGNodeMarkDirty(node: interop.Pointer | interop.Reference<any>): void;

declare function YGNodeMarkDirtyAndPropogateToDescendants(node: interop.Pointer | interop.Reference<any>): void;

declare function YGNodeNew(): interop.Pointer | interop.Reference<any>;

declare function YGNodeNewWithConfig(config: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function YGNodePrint(node: interop.Pointer | interop.Reference<any>, options: YGPrintOptions): void;

declare function YGNodeRemoveAllChildren(node: interop.Pointer | interop.Reference<any>): void;

declare function YGNodeRemoveChild(node: interop.Pointer | interop.Reference<any>, child: interop.Pointer | interop.Reference<any>): void;

declare function YGNodeReset(node: interop.Pointer | interop.Reference<any>): void;

declare function YGNodeSetBaselineFunc(node: interop.Pointer | interop.Reference<any>, baselineFunc: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>, p2: number, p3: number) => number>): void;

declare function YGNodeSetChildren(owner: interop.Pointer | interop.Reference<any>, children: interop.Reference<interop.Pointer | interop.Reference<any>>, count: number): void;

declare function YGNodeSetContext(node: interop.Pointer | interop.Reference<any>, context: interop.Pointer | interop.Reference<any>): void;

declare function YGNodeSetDirtiedFunc(node: interop.Pointer | interop.Reference<any>, dirtiedFunc: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>) => void>): void;

declare function YGNodeSetHasNewLayout(node: interop.Pointer | interop.Reference<any>, hasNewLayout: boolean): void;

declare function YGNodeSetIsReferenceBaseline(node: interop.Pointer | interop.Reference<any>, isReferenceBaseline: boolean): void;

declare function YGNodeSetMeasureFunc(node: interop.Pointer | interop.Reference<any>, measureFunc: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>, p2: number, p3: YGMeasureMode, p4: number, p5: YGMeasureMode) => YGSize>): void;

declare function YGNodeSetNodeType(node: interop.Pointer | interop.Reference<any>, nodeType: YGNodeType): void;

declare function YGNodeSetPrintFunc(node: interop.Pointer | interop.Reference<any>, printFunc: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>) => void>): void;

declare function YGNodeStyleGetAlignContent(node: interop.Pointer | interop.Reference<any>): YGAlign;

declare function YGNodeStyleGetAlignItems(node: interop.Pointer | interop.Reference<any>): YGAlign;

declare function YGNodeStyleGetAlignSelf(node: interop.Pointer | interop.Reference<any>): YGAlign;

declare function YGNodeStyleGetAspectRatio(node: interop.Pointer | interop.Reference<any>): number;

declare function YGNodeStyleGetBorder(node: interop.Pointer | interop.Reference<any>, edge: YGEdge): number;

declare function YGNodeStyleGetDirection(node: interop.Pointer | interop.Reference<any>): YGDirection;

declare function YGNodeStyleGetDisplay(node: interop.Pointer | interop.Reference<any>): YGDisplay;

declare function YGNodeStyleGetFlex(node: interop.Pointer | interop.Reference<any>): number;

declare function YGNodeStyleGetFlexBasis(node: interop.Pointer | interop.Reference<any>): YGValue;

declare function YGNodeStyleGetFlexDirection(node: interop.Pointer | interop.Reference<any>): YGFlexDirection;

declare function YGNodeStyleGetFlexGrow(node: interop.Pointer | interop.Reference<any>): number;

declare function YGNodeStyleGetFlexShrink(node: interop.Pointer | interop.Reference<any>): number;

declare function YGNodeStyleGetFlexWrap(node: interop.Pointer | interop.Reference<any>): YGWrap;

declare function YGNodeStyleGetHeight(node: interop.Pointer | interop.Reference<any>): YGValue;

declare function YGNodeStyleGetJustifyContent(node: interop.Pointer | interop.Reference<any>): YGJustify;

declare function YGNodeStyleGetMargin(node: interop.Pointer | interop.Reference<any>, edge: YGEdge): YGValue;

declare function YGNodeStyleGetMaxHeight(node: interop.Pointer | interop.Reference<any>): YGValue;

declare function YGNodeStyleGetMaxWidth(node: interop.Pointer | interop.Reference<any>): YGValue;

declare function YGNodeStyleGetMinHeight(node: interop.Pointer | interop.Reference<any>): YGValue;

declare function YGNodeStyleGetMinWidth(node: interop.Pointer | interop.Reference<any>): YGValue;

declare function YGNodeStyleGetOverflow(node: interop.Pointer | interop.Reference<any>): YGOverflow;

declare function YGNodeStyleGetPadding(node: interop.Pointer | interop.Reference<any>, edge: YGEdge): YGValue;

declare function YGNodeStyleGetPosition(node: interop.Pointer | interop.Reference<any>, edge: YGEdge): YGValue;

declare function YGNodeStyleGetPositionType(node: interop.Pointer | interop.Reference<any>): YGPositionType;

declare function YGNodeStyleGetWidth(node: interop.Pointer | interop.Reference<any>): YGValue;

declare function YGNodeStyleSetAlignContent(node: interop.Pointer | interop.Reference<any>, alignContent: YGAlign): void;

declare function YGNodeStyleSetAlignItems(node: interop.Pointer | interop.Reference<any>, alignItems: YGAlign): void;

declare function YGNodeStyleSetAlignSelf(node: interop.Pointer | interop.Reference<any>, alignSelf: YGAlign): void;

declare function YGNodeStyleSetAspectRatio(node: interop.Pointer | interop.Reference<any>, aspectRatio: number): void;

declare function YGNodeStyleSetBorder(node: interop.Pointer | interop.Reference<any>, edge: YGEdge, border: number): void;

declare function YGNodeStyleSetDirection(node: interop.Pointer | interop.Reference<any>, direction: YGDirection): void;

declare function YGNodeStyleSetDisplay(node: interop.Pointer | interop.Reference<any>, display: YGDisplay): void;

declare function YGNodeStyleSetFlex(node: interop.Pointer | interop.Reference<any>, flex: number): void;

declare function YGNodeStyleSetFlexBasis(node: interop.Pointer | interop.Reference<any>, flexBasis: number): void;

declare function YGNodeStyleSetFlexBasisAuto(node: interop.Pointer | interop.Reference<any>): void;

declare function YGNodeStyleSetFlexBasisPercent(node: interop.Pointer | interop.Reference<any>, flexBasis: number): void;

declare function YGNodeStyleSetFlexDirection(node: interop.Pointer | interop.Reference<any>, flexDirection: YGFlexDirection): void;

declare function YGNodeStyleSetFlexGrow(node: interop.Pointer | interop.Reference<any>, flexGrow: number): void;

declare function YGNodeStyleSetFlexShrink(node: interop.Pointer | interop.Reference<any>, flexShrink: number): void;

declare function YGNodeStyleSetFlexWrap(node: interop.Pointer | interop.Reference<any>, flexWrap: YGWrap): void;

declare function YGNodeStyleSetHeight(node: interop.Pointer | interop.Reference<any>, height: number): void;

declare function YGNodeStyleSetHeightAuto(node: interop.Pointer | interop.Reference<any>): void;

declare function YGNodeStyleSetHeightPercent(node: interop.Pointer | interop.Reference<any>, height: number): void;

declare function YGNodeStyleSetJustifyContent(node: interop.Pointer | interop.Reference<any>, justifyContent: YGJustify): void;

declare function YGNodeStyleSetMargin(node: interop.Pointer | interop.Reference<any>, edge: YGEdge, margin: number): void;

declare function YGNodeStyleSetMarginAuto(node: interop.Pointer | interop.Reference<any>, edge: YGEdge): void;

declare function YGNodeStyleSetMarginPercent(node: interop.Pointer | interop.Reference<any>, edge: YGEdge, margin: number): void;

declare function YGNodeStyleSetMaxHeight(node: interop.Pointer | interop.Reference<any>, maxHeight: number): void;

declare function YGNodeStyleSetMaxHeightPercent(node: interop.Pointer | interop.Reference<any>, maxHeight: number): void;

declare function YGNodeStyleSetMaxWidth(node: interop.Pointer | interop.Reference<any>, maxWidth: number): void;

declare function YGNodeStyleSetMaxWidthPercent(node: interop.Pointer | interop.Reference<any>, maxWidth: number): void;

declare function YGNodeStyleSetMinHeight(node: interop.Pointer | interop.Reference<any>, minHeight: number): void;

declare function YGNodeStyleSetMinHeightPercent(node: interop.Pointer | interop.Reference<any>, minHeight: number): void;

declare function YGNodeStyleSetMinWidth(node: interop.Pointer | interop.Reference<any>, minWidth: number): void;

declare function YGNodeStyleSetMinWidthPercent(node: interop.Pointer | interop.Reference<any>, minWidth: number): void;

declare function YGNodeStyleSetOverflow(node: interop.Pointer | interop.Reference<any>, overflow: YGOverflow): void;

declare function YGNodeStyleSetPadding(node: interop.Pointer | interop.Reference<any>, edge: YGEdge, padding: number): void;

declare function YGNodeStyleSetPaddingPercent(node: interop.Pointer | interop.Reference<any>, edge: YGEdge, padding: number): void;

declare function YGNodeStyleSetPosition(node: interop.Pointer | interop.Reference<any>, edge: YGEdge, position: number): void;

declare function YGNodeStyleSetPositionPercent(node: interop.Pointer | interop.Reference<any>, edge: YGEdge, position: number): void;

declare function YGNodeStyleSetPositionType(node: interop.Pointer | interop.Reference<any>, positionType: YGPositionType): void;

declare function YGNodeStyleSetWidth(node: interop.Pointer | interop.Reference<any>, width: number): void;

declare function YGNodeStyleSetWidthAuto(node: interop.Pointer | interop.Reference<any>): void;

declare function YGNodeStyleSetWidthPercent(node: interop.Pointer | interop.Reference<any>, width: number): void;

declare const enum YGNodeType {

	Default = 0,

	Text = 1
}

declare function YGNodeTypeToString(p1: YGNodeType): string;

declare const enum YGOverflow {

	Visible = 0,

	Hidden = 1,

	Scroll = 2
}

declare function YGOverflowToString(p1: YGOverflow): string;

declare const enum YGPositionType {

	Relative = 0,

	Absolute = 1
}

declare function YGPositionTypeToString(p1: YGPositionType): string;

declare const enum YGPrintOptions {

	Layout = 1,

	Style = 2,

	Children = 4
}

declare function YGPrintOptionsToString(p1: YGPrintOptions): string;

declare function YGRoundValueToPixelGrid(value: number, pointScaleFactor: number, forceCeil: boolean, forceFloor: boolean): number;

interface YGSize {
	width: number;
	height: number;
}
declare var YGSize: interop.StructType<YGSize>;

declare const enum YGUnit {

	Undefined = 0,

	Point = 1,

	Percent = 2,

	Auto = 3
}

declare function YGUnitToString(p1: YGUnit): string;

interface YGValue {
	value: number;
	unit: YGUnit;
}
declare var YGValue: interop.StructType<YGValue>;

declare var YGValueAuto: YGValue;

declare var YGValueUndefined: YGValue;

declare var YGValueZero: YGValue;

declare const enum YGWrap {

	NoWrap = 0,

	Wrap = 1,

	WrapReverse = 2
}

declare function YGWrapToString(p1: YGWrap): string;

declare var yogaVersionNumber: number;

declare var yogaVersionString: interop.Reference<number>;

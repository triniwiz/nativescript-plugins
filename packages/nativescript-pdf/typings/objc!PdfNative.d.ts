interface CCellWidth {
	type_: CCellWidthType;
	value: CPdfNativePoints;
}
declare var CCellWidth: interop.StructType<CCellWidth>;

declare const enum CCellWidthType {
	Auto = 0,

	Wrap = 1,

	Fixed = 2,
}

interface CColumnDef {
	header: interop.Pointer | interop.Reference<any>;
	data_key: interop.Pointer | interop.Reference<any>;
}
declare var CColumnDef: interop.StructType<CColumnDef>;

interface CColumnKey {
	type_: CColumnKeyType;
	index: number;
	data_key: interop.Pointer | interop.Reference<any>;
}
declare var CColumnKey: interop.StructType<CColumnKey>;

declare const enum CColumnKeyType {
	Index = 0,

	DataKey = 1,
}

declare const enum CHorizontalAlign {
	Left = 0,

	Center = 1,

	Right = 2,
}

interface CPdfNativeColor {
	r: number;
	g: number;
	b: number;
	a: number;
}
declare var CPdfNativeColor: interop.StructType<CPdfNativeColor>;

declare const enum CPdfNativeColorOptionalType {
	None = 0,

	Some = 1,
}

interface CPdfNativeMargin {
	top: CPdfNativePoints;
	right: CPdfNativePoints;
	bottom: CPdfNativePoints;
	left: CPdfNativePoints;
}
declare var CPdfNativeMargin: interop.StructType<CPdfNativeMargin>;

interface CPdfNativePadding {
	top: CPdfNativePoints;
	right: CPdfNativePoints;
	bottom: CPdfNativePoints;
	left: CPdfNativePoints;
}
declare var CPdfNativePadding: interop.StructType<CPdfNativePadding>;

interface CPdfNativePoints {
	value: number;
	unit: PdfNativeUnit;
	changed: boolean;
}
declare var CPdfNativePoints: interop.StructType<CPdfNativePoints>;

declare const enum CPdfNativePointsOptionalType {
	None = 0,

	Some = 1,
}

interface CPdfNativeRenderInfo {
	data: interop.Pointer | interop.Reference<any>;
	width: number;
	height: number;
}
declare var CPdfNativeRenderInfo: interop.StructType<CPdfNativeRenderInfo>;

declare const enum CVerticalAlign {
	Top = 0,

	Middle = 1,

	Bottom = 2,
}

declare class LDOTiledView extends UIView {
	static alloc(): LDOTiledView; // inherited from NSObject

	static appearance(): LDOTiledView; // inherited from UIAppearance

	/**
	 * @since 8.0
	 */
	static appearanceForTraitCollection(trait: UITraitCollection): LDOTiledView; // inherited from UIAppearance

	/**
	 * @since 8.0
	 * @deprecated 9.0
	 */
	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): LDOTiledView; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): LDOTiledView; // inherited from UIAppearance

	/**
	 * @since 5.0
	 * @deprecated 9.0
	 */
	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): LDOTiledView; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): LDOTiledView; // inherited from UIAppearance

	static layerClass(): typeof NSObject;

	static new(): LDOTiledView; // inherited from NSObject
}

declare class NSCPdf extends NSObject {
	static alloc(): NSCPdf; // inherited from NSObject

	static new(): NSCPdf; // inherited from NSObject

	static readonly instance: NSCPdf;

	loadFromBytesWithBytesPassword(bytes: NSData, password: string): NSCPdfDocument;

	loadFromPathWithPathPassword(path: string, password: string): NSCPdfDocument;
}

declare class NSCPdfCellWidth extends NSObject {
	static Fixed(value: number): NSCPdfCellWidth;

	static alloc(): NSCPdfCellWidth; // inherited from NSObject

	static new(): NSCPdfCellWidth; // inherited from NSObject

	static readonly Auto: NSCPdfCellWidth;

	static readonly Wrap: NSCPdfCellWidth;
}

declare class NSCPdfColor extends NSObject {
	static alloc(): NSCPdfColor; // inherited from NSObject

	static gray(value: number): NSCPdfColor;

	static grey(value: number): NSCPdfColor;

	static new(): NSCPdfColor; // inherited from NSObject

	a: number;

	b: number;

	g: number;

	r: number;

	constructor();

	constructor(o: { a: number });

	init(r: number, g: number, b: number): this;

	initA(r: number, g: number, b: number, a: number): this;
}

declare class NSCPdfColumnDef extends NSObject {
	static alloc(): NSCPdfColumnDef; // inherited from NSObject

	static new(): NSCPdfColumnDef; // inherited from NSObject

	dataKey: string;

	header: string;

	constructor(o: { header: string; dataKey: string });

	initWithHeaderDataKey(header: string, dataKey: string): this;
}

declare class NSCPdfColumnKey extends NSObject {
	static alloc(): NSCPdfColumnKey; // inherited from NSObject

	static new(): NSCPdfColumnKey; // inherited from NSObject
}

declare class NSCPdfDocument extends NSObject {
	static alloc(): NSCPdfDocument; // inherited from NSObject

	static new(): NSCPdfDocument; // inherited from NSObject

	readonly count: number;

	fontSize: number;

	readonly height: number;

	lineWidth: number;

	readonly width: number;

	constructor(o: { config: NSCPdfDocumentConfig });

	addFileToVFS(fileName: string, fileContent: string): void;

	addFont(postScriptNameOrPath: string, id: string, fontStyle: string, fontWeight: string, encoding: string): boolean;

	addImage(image: UIImage, x: number, y: number, width: number, height: number): void;

	addImageWithBase64(base64: string, mime: string, x: number, y: number, width: number, height: number): void;

	addImageWithData(data: NSData, x: number, y: number, width: number, height: number): void;

	addPage(): void;

	addPageWithSizeOrientation(size: NSCPdfPagerSize, orientation: NSCPdfOrientation): void;

	addText(text: string, x: number, y: number, options: NSCPdfTextOptions): void;

	circle(x: number, y: number, r: number, style: NSCPdfStyle): void;

	ellipse(x: number, y: number, rx: number, ry: number, style: NSCPdfStyle): void;

	existsFileInVFS(fileName: string): boolean;

	getFileFromVFS(fileName: string): string;

	initWithConfig(config: NSCPdfDocumentConfig): this;

	rect(x: number, y: number, width: number, height: number, style: NSCPdfStyle): void;

	renderTileWithViewportOffsetViewportWidthViewportHeightScaleXYWidthHeight(index: number, viewportWidth: number, viewportHeight: number, scale: number, x: number, y: number, width: number, height: number): any;

	renderToBuffer(index: number, buffer: NSMutableData, width: number, height: number): void;

	renderToCGContextImage(index: number, width: number, height: number, rect: CGRect, scaleX: number, scaleY: number, withScale: boolean, flipVertical: boolean, flipHorizontal: boolean): any;

	renderToCGContextIn(index: number, width: number, height: number, rect: CGRect, context: any): void;

	roundedRect(x: number, y: number, width: number, height: number, rx: number, ry: number, style: NSCPdfStyle): void;

	saveSyncTo(file: string): NSError;

	saveToCallback(file: string, callback: (p1: NSError) => void): void;

	setDrawColor(r: number, g: number, b: number): void;

	setDrawColorA(r: number, g: number, b: number, a: number): void;

	setFillColor(r: number, g: number, b: number): void;

	setFillColorA(r: number, g: number, b: number, a: number): void;

	setFont(fontName: string, fontStyle: string, fontWeight: string): void;

	setFontColor(r: number, g: number, b: number): void;

	setFontColorA(r: number, g: number, b: number, a: number): void;

	table(config: NSCPdfTable): string;
}

declare class NSCPdfDocumentConfig extends NSObject {
	static alloc(): NSCPdfDocumentConfig; // inherited from NSObject

	static new(): NSCPdfDocumentConfig; // inherited from NSObject

	deviceScale: number;

	orientation: NSCPdfOrientation;

	size: NSCPdfPagerSize;

	units: NSCPdfUnit;

	constructor();

	init(orientation: NSCPdfOrientation, size: NSCPdfPagerSize, units: NSCPdfUnit, deviceScale: number): this;
}

declare const enum NSCPdfFontFamily {
	Helvetica = 0,

	Times = 1,

	Courier = 2,
}

declare const enum NSCPdfFontStyle {
	Normal = 0,

	Bold = 1,

	Italic = 2,

	BoldItalic = 3,
}

declare const enum NSCPdfHorizontalAlign {
	Left = 0,

	Center = 1,

	Right = 2,
}

declare class NSCPdfInfo extends NSObject {
	static alloc(): NSCPdfInfo; // inherited from NSObject

	static new(): NSCPdfInfo; // inherited from NSObject

	constructor(o: { width: number; height: number; data: NSData });

	initWithWidthHeightData(width: number, height: number, data: NSData): this;
}

declare class NSCPdfMargin extends NSObject {
	static alloc(): NSCPdfMargin; // inherited from NSObject

	static defaultWithLeftRightTopBottom(left: number, right: number, top: number, bottom: number): NSCPdfMargin;

	static defaultWithUniform(uniform: number): NSCPdfMargin;

	static new(): NSCPdfMargin; // inherited from NSObject

	bottom: number;

	left: number;

	right: number;

	top: number;

	constructor();

	constructor(o: { uniform: number });

	init(top: number, left: number, bottom: number, right: number): this;

	initWithUniform(uniform: number): this;
}

declare const enum NSCPdfOrientation {
	Landscape = 0,

	Portrait = 1,
}

declare const enum NSCPdfOverflow {
	LineBreak = 0,

	Ellipsize = 1,

	Visible = 2,

	Hidden = 3,
}

declare class NSCPdfPadding extends NSObject {
	static alloc(): NSCPdfPadding; // inherited from NSObject

	static new(): NSCPdfPadding; // inherited from NSObject

	bottom: number;

	left: number;

	right: number;

	top: number;

	constructor();

	constructor(o: { uniform: number });

	init(top: number, left: number, bottom: number, right: number): this;

	initWithUniform(uniform: number): this;
}

declare const enum NSCPdfPageBreak {
	Auto = 0,

	Avoid = 1,

	Always = 2,
}

declare class NSCPdfPageView extends UIView {
	static alloc(): NSCPdfPageView; // inherited from NSObject

	static appearance(): NSCPdfPageView; // inherited from UIAppearance

	/**
	 * @since 8.0
	 */
	static appearanceForTraitCollection(trait: UITraitCollection): NSCPdfPageView; // inherited from UIAppearance

	/**
	 * @since 8.0
	 * @deprecated 9.0
	 */
	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): NSCPdfPageView; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): NSCPdfPageView; // inherited from UIAppearance

	/**
	 * @since 5.0
	 * @deprecated 9.0
	 */
	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): NSCPdfPageView; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): NSCPdfPageView; // inherited from UIAppearance

	static new(): NSCPdfPageView; // inherited from NSObject

	readonly document: NSCPdfDocument;

	readonly pageIndex: number;

	clearCache(): void;

	configureWithPageIndexDocument(pageIndex: number, document: NSCPdfDocument): void;

	prewarmLowResWithHighPriority(highPriority: boolean): void;

	tiledViewTileForRowColumnZoomLevelZoomScaleBoundsRect(tiledView: LDOTiledView, row: number, col: number, zoomLevel: number, preciseZoomScale: number, viewBounds: CGRect, tileRect: CGRect): UIImage;

	updateForZoomScale(zoomScale: number): void;
}

declare class NSCPdfPagerSize extends NSObject {
	static a4(): NSCPdfPagerSize;

	static alloc(): NSCPdfPagerSize; // inherited from NSObject

	static custom(width: number, height: number): NSCPdfPagerSize;

	static new(): NSCPdfPagerSize; // inherited from NSObject

	static standard(value: NSCPdfStandardPaperSize): NSCPdfPagerSize;
}

declare const enum NSCPdfRotationDirection {
	Cw = 0,

	Ccw = 1,
}

declare class NSCPdfRotationOrMatrix extends NSObject {
	static alloc(): NSCPdfRotationOrMatrix; // inherited from NSObject

	static angle(deg: number): NSCPdfRotationOrMatrix;

	static matrix(a: number, b: number, c: number, d: number, e: number, f: number): NSCPdfRotationOrMatrix;

	static new(): NSCPdfRotationOrMatrix; // inherited from NSObject

	static readonly zero: NSCPdfRotationOrMatrix;
}

declare class NSCPdfScrollView extends UIScrollView implements UIScrollViewDelegate {
	static alloc(): NSCPdfScrollView; // inherited from NSObject

	static appearance(): NSCPdfScrollView; // inherited from UIAppearance

	/**
	 * @since 8.0
	 */
	static appearanceForTraitCollection(trait: UITraitCollection): NSCPdfScrollView; // inherited from UIAppearance

	/**
	 * @since 8.0
	 * @deprecated 9.0
	 */
	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): NSCPdfScrollView; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): NSCPdfScrollView; // inherited from UIAppearance

	/**
	 * @since 5.0
	 * @deprecated 9.0
	 */
	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): NSCPdfScrollView; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): NSCPdfScrollView; // inherited from UIAppearance

	static new(): NSCPdfScrollView; // inherited from NSObject

	currentPage: number;

	document: NSCPdfDocument;

	onError: (p1: NSError) => void;

	onLoaded: (p1: NSCPdfDocument) => void;

	onPageChange: (p1: number) => void;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadFromBytes(bytes: NSData, password: string): void;

	loadFromPath(path: string, password: string): void;

	loadFromUrl(url: string, password: string): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollToPageAnimated(page: number, animated: boolean): void;

	/**
	 * @since 11.0
	 */
	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	/**
	 * @since 3.2
	 */
	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	/**
	 * @since 3.2
	 */
	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	/**
	 * @since 5.0
	 */
	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare const enum NSCPdfShowFoot {
	EveryPage = 0,

	LastPage = 1,

	Never = 2,
}

declare const enum NSCPdfShowHead {
	EveryPage = 0,

	FirstPage = 1,

	Never = 2,
}

declare const enum NSCPdfStandardPaperSize {
	USLetterAnsiA = 0,

	USHalfLetter = 1,

	USGovernmentLetter = 2,

	USLegal = 3,

	USJuniorLegal = 4,

	USGovernmentLegal = 5,

	USLedgerTabloidAnsiB = 6,

	A0x4 = 7,

	A0x2 = 8,

	A0 = 9,

	A1 = 10,

	A2 = 11,

	A3 = 12,

	A4 = 13,

	A4R = 14,

	A5 = 15,

	A6 = 16,

	A7 = 17,

	A8 = 18,

	A9 = 19,

	A10 = 20,

	B0 = 21,

	B1 = 22,

	B2 = 23,

	B3 = 24,

	B4 = 25,

	B5 = 26,

	B6 = 27,

	B7 = 28,

	B8 = 29,

	B9 = 30,

	B10 = 31,

	C0 = 32,

	C1 = 33,

	C2 = 34,

	C3 = 35,

	C4 = 36,

	C5 = 37,

	C6 = 38,

	C7 = 39,

	C8 = 40,

	C9 = 41,

	C10 = 42,

	AnsiBPlus = 43,

	AnsiC = 44,

	AnsiD = 45,

	AnsiE = 46,

	ArchA = 47,

	ArchB = 48,

	ArchC = 49,

	ArchD = 50,

	ArchE = 51,
}

declare const enum NSCPdfStyle {
	S = 0,

	F = 1,

	Df = 2,

	Fd = 3,
}

declare class NSCPdfStyleDef extends NSObject {
	static alloc(): NSCPdfStyleDef; // inherited from NSObject

	static default(): NSCPdfStyleDef;

	static new(): NSCPdfStyleDef; // inherited from NSObject

	cellPadding: NSCPdfPadding;

	cellWidth: NSCPdfCellWidth;

	fillColor: NSCPdfColor;

	font: NSCPdfFontFamily;

	fontSize: number;

	fontStyle: NSCPdfFontStyle;

	horizontalAlign: NSCPdfHorizontalAlign;

	lineColor: NSCPdfColor;

	lineWidth: number;

	minCellHeight: number;

	overflow: NSCPdfOverflow;

	textColor: NSCPdfColor;

	verticalAlign: NSCPdfVerticalAlign;

	clone(): NSCPdfStyleDef;

	getMinCellWidth(): number;

	updateMinCellWidth(value: number): void;
}

declare class NSCPdfTable extends NSObject {
	static alloc(): NSCPdfTable; // inherited from NSObject

	static new(): NSCPdfTable; // inherited from NSObject

	alternateRowsStyles: NSCPdfStyleDef;

	body: NSArray<NSArray<NSCPdfTableCellOrString>>;

	bodyStyles: NSCPdfStyleDef;

	columnStyles: NSDictionary<NSCPdfColumnKey, NSCPdfStyleDef>;

	columns: NSArray<NSCPdfColumnDef>;

	foot: NSArray<NSArray<NSCPdfTableCellOrString>>;

	footStyles: NSCPdfStyleDef;

	head: NSArray<NSArray<NSCPdfTableCellOrString>>;

	headStyles: NSCPdfStyleDef;

	margin: NSCPdfMargin;

	pageBreak: NSCPdfPageBreak;

	position: NSArray<number>;

	showFoot: NSCPdfShowFoot;

	showHead: NSCPdfShowHead;

	styles: NSCPdfStyleDef;

	theme: NSCPdfTableTheme;

	updatePosition(x: number, y: number): void;
}

declare class NSCPdfTableCell extends NSObject {
	static alloc(): NSCPdfTableCell; // inherited from NSObject

	static new(): NSCPdfTableCell; // inherited from NSObject

	constructor();

	init(content: string, colSpan: number, rowSpan: number, style: NSCPdfStyleDef): this;
}

declare class NSCPdfTableCellOrString extends NSObject {
	static Cell(value: NSCPdfTableCell): NSCPdfTableCellOrString;

	static alloc(): NSCPdfTableCellOrString; // inherited from NSObject

	static empty(): NSCPdfTableCellOrString;

	static new(): NSCPdfTableCellOrString; // inherited from NSObject

	static withString(value: string): NSCPdfTableCellOrString;

	constructor(o: { string: string; cell: NSCPdfTableCell });

	initWithStringCell(string: string, cell: NSCPdfTableCell): this;
}

declare const enum NSCPdfTableTheme {
	Striped = 0,

	Grid = 1,

	Plain = 2,
}

declare const enum NSCPdfTextAlignment {
	Left = 0,

	Center = 1,

	Right = 2,
}

declare const enum NSCPdfTextBaseline {
	Alphabetic = 0,

	Ideographic = 1,

	Bottom = 2,

	Top = 3,

	Middle = 4,

	Hanging = 5,
}

declare class NSCPdfTextOptions extends NSObject {
	static alloc(): NSCPdfTextOptions; // inherited from NSObject

	static new(): NSCPdfTextOptions; // inherited from NSObject

	align: NSCPdfTextAlignment;

	angle: NSCPdfRotationOrMatrix;

	baseline: NSCPdfTextBaseline;

	charSpace: number;

	horizontalScale: number;

	lineHeightFactor: number;

	maxWidth: number;

	rotationDirection: NSCPdfRotationDirection;
}

declare class NSCPdfTiledView extends UIScrollView implements UIScrollViewDelegate {
	static alloc(): NSCPdfTiledView; // inherited from NSObject

	static appearance(): NSCPdfTiledView; // inherited from UIAppearance

	/**
	 * @since 8.0
	 */
	static appearanceForTraitCollection(trait: UITraitCollection): NSCPdfTiledView; // inherited from UIAppearance

	/**
	 * @since 8.0
	 * @deprecated 9.0
	 */
	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): NSCPdfTiledView; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): NSCPdfTiledView; // inherited from UIAppearance

	/**
	 * @since 5.0
	 * @deprecated 9.0
	 */
	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): NSCPdfTiledView; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): NSCPdfTiledView; // inherited from UIAppearance

	static new(): NSCPdfTiledView; // inherited from NSObject

	document: NSCPdfDocument;

	onError: (p1: NSError) => void;

	onLoaded: (p1: NSCPdfDocument) => void;

	onPageChange: (p1: number) => void;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadFromBytes(bytes: NSData, password: string): void;

	loadFromPath(path: string, password: string): void;

	loadFromUrl(url: string, password: string): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	/**
	 * @since 11.0
	 */
	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	/**
	 * @since 3.2
	 */
	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	/**
	 * @since 3.2
	 */
	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	/**
	 * @since 5.0
	 */
	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare const enum NSCPdfUnit {
	Mm = 0,

	Points = 1,

	Cm = 2,

	Inches = 3,
}

declare const enum NSCPdfVerticalAlign {
	Top = 0,

	Middle = 1,

	Bottom = 2,
}

declare class NSCPdfView extends UIView {
	static alloc(): NSCPdfView; // inherited from NSObject

	static appearance(): NSCPdfView; // inherited from UIAppearance

	/**
	 * @since 8.0
	 */
	static appearanceForTraitCollection(trait: UITraitCollection): NSCPdfView; // inherited from UIAppearance

	/**
	 * @since 8.0
	 * @deprecated 9.0
	 */
	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): NSCPdfView; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): NSCPdfView; // inherited from UIAppearance

	/**
	 * @since 5.0
	 * @deprecated 9.0
	 */
	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): NSCPdfView; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): NSCPdfView; // inherited from UIAppearance

	static new(): NSCPdfView; // inherited from NSObject

	currentPage: number;

	document: NSCPdfDocument;

	maximumZoomScale: number;

	minimumZoomScale: number;

	onError: (p1: NSError) => void;

	onLoaded: (p1: NSCPdfDocument) => void;

	onPageChange: (p1: number) => void;

	zoomScale: number;

	loadFromBytes(bytes: NSData, password: string): void;

	loadFromPath(path: string, password: string): void;

	loadFromUrl(url: string, password: string): void;

	scrollToPageAnimated(page: number, animated: boolean): void;
}

declare const enum PdfNativeFontFamily {
	Helvetica = 0,

	Times = 1,

	Courier = 2,
}

declare const enum PdfNativeFontStyle {
	Normal = 0,

	Bold = 1,

	Italic = 2,

	BoldItalic = 3,
}

declare const enum PdfNativeOrientation {
	Landscape = 0,

	Portrait = 1,
}

declare const enum PdfNativeOverflow {
	LineBreak = 0,

	Ellipsize = 1,

	Visible = 2,

	Hidden = 3,
}

declare const enum PdfNativePageBreak {
	Auto = 0,

	Avoid = 1,

	Always = 2,
}

interface PdfNativePaperSize_Custom_Body {
	_0: number;
	_1: number;
}
declare var PdfNativePaperSize_Custom_Body: interop.StructType<PdfNativePaperSize_Custom_Body>;

declare const enum PdfNativePaperSize_Tag {
	StandardPaper = 0,

	Custom = 1,
}

declare const enum PdfNativeRotationDirection {
	CW = 0,

	CCW = 1,
}

declare const enum PdfNativeRotationOrMatrixKind {
	Rotation = 0,

	Matrix = 1,
}

declare const enum PdfNativeShowFoot {
	EveryPage = 0,

	LastPage = 1,

	Never = 2,
}

declare const enum PdfNativeShowHead {
	EveryPage = 0,

	FirstPage = 1,

	Never = 2,
}

declare const enum PdfNativeStandardPaperSize {
	USLetterAnsiA = 0,

	USHalfLetter = 1,

	USGovernmentLetter = 2,

	USLegal = 3,

	USJuniorLegal = 4,

	USGovernmentLegal = 5,

	USLedgerTabloidAnsiB = 6,

	A0x4 = 7,

	A0x2 = 8,

	A0 = 9,

	A1 = 10,

	A2 = 11,

	A3 = 12,

	A4 = 13,

	A4R = 14,

	A5 = 15,

	A6 = 16,

	A7 = 17,

	A8 = 18,

	A9 = 19,

	A10 = 20,

	B0 = 21,

	B1 = 22,

	B2 = 23,

	B3 = 24,

	B4 = 25,

	B5 = 26,

	B6 = 27,

	B7 = 28,

	B8 = 29,

	B9 = 30,

	B10 = 31,

	C0 = 32,

	C1 = 33,

	C2 = 34,

	C3 = 35,

	C4 = 36,

	C5 = 37,

	C6 = 38,

	C7 = 39,

	C8 = 40,

	C9 = 41,

	C10 = 42,

	AnsiBPlus = 43,

	AnsiC = 44,

	AnsiD = 45,

	AnsiE = 46,

	ArchA = 47,

	ArchB = 48,

	ArchC = 49,

	ArchD = 50,

	ArchE = 51,
}

declare const enum PdfNativeStyle {
	S = 0,

	F = 1,

	DF = 2,

	FD = 3,
}

declare const enum PdfNativeTableTheme {
	Striped = 0,

	Grid = 1,

	Plain = 2,
}

declare const enum PdfNativeTextAlignment {
	Left = 0,

	Center = 1,

	Right = 2,

	Justify = 3,
}

declare const enum PdfNativeTextBaseline {
	Alphabetic = 0,

	Ideographic = 1,

	Bottom = 2,

	Top = 3,

	Middle = 4,

	Hanging = 5,
}

declare const enum PdfNativeUnit {
	Mm = 0,

	Points = 1,

	Cm = 2,

	Inches = 3,
}

declare var PdfNativeVersionNumber: number;

declare var PdfNativeVersionString: interop.Reference<number>;

declare function pdf_native_document_add_font(instance: interop.Pointer | interop.Reference<any>, path: string | interop.Pointer | interop.Reference<any>, id: string | interop.Pointer | interop.Reference<any>, style: string | interop.Pointer | interop.Reference<any>, weight: string | interop.Pointer | interop.Reference<any>, is_ttf: boolean, is_cid_font: boolean): boolean;

declare function pdf_native_document_add_font_with_bytes(instance: interop.Pointer | interop.Reference<any>, bytes: string | interop.Pointer | interop.Reference<any>, size: number, id: string | interop.Pointer | interop.Reference<any>, style: string | interop.Pointer | interop.Reference<any>, weight: string | interop.Pointer | interop.Reference<any>, is_ttf: boolean, is_cid_font: boolean): boolean;

declare function pdf_native_document_add_image(instance: interop.Pointer | interop.Reference<any>, image_data: string | interop.Pointer | interop.Reference<any>, image_size: number, x: number, y: number, width: number, height: number): void;

declare function pdf_native_document_add_raw_image(instance: interop.Pointer | interop.Reference<any>, image_data: string | interop.Pointer | interop.Reference<any>, image_size: number, image_width: number, image_height: number, x: number, y: number, width: number, height: number): void;

declare function pdf_native_document_circle(instance: interop.Pointer | interop.Reference<any>, x: number, y: number, r: number, style: PdfNativeStyle): void;

declare function pdf_native_document_count(instance: interop.Pointer | interop.Reference<any>): number;

declare function pdf_native_document_current_page(instance: interop.Pointer | interop.Reference<any>): number;

declare function pdf_native_document_delete_page(instance: interop.Pointer | interop.Reference<any>, index: number): void;

declare function pdf_native_document_ellipse(instance: interop.Pointer | interop.Reference<any>, x: number, y: number, rx: number, ry: number, style: PdfNativeStyle): void;

declare function pdf_native_document_get_font_size(instance: interop.Pointer | interop.Reference<any>): number;

declare function pdf_native_document_get_line_width(instance: interop.Pointer | interop.Reference<any>): number;

declare function pdf_native_document_height(instance: interop.Pointer | interop.Reference<any>): number;

declare function pdf_native_document_page_info(instance: interop.Pointer | interop.Reference<any>, buffer: string | interop.Pointer | interop.Reference<any>, size: number): void;

declare function pdf_native_document_rect(instance: interop.Pointer | interop.Reference<any>, x: number, y: number, width: number, height: number, style: PdfNativeStyle): void;

declare function pdf_native_document_release(instance: interop.Pointer | interop.Reference<any>): void;

declare function pdf_native_document_render_into_buffer(instance: interop.Pointer | interop.Reference<any>, index: number, buffer: string | interop.Pointer | interop.Reference<any>, buffer_size: number, width: number, height: number): void;

declare function pdf_native_document_render_into_buffer_with_scale(instance: interop.Pointer | interop.Reference<any>, index: number, viewport_width: number, viewport_height: number, scale_x: number, scale_y: number, x: number, y: number, width: number, height: number, buffer: string | interop.Pointer | interop.Reference<any>, buffer_size: number): void;

declare function pdf_native_document_render_to_buffer(instance: interop.Pointer | interop.Reference<any>, index: number, width: number, height: number, flip_vertical: boolean, flip_horizontal: boolean): interop.Pointer | interop.Reference<CPdfNativeRenderInfo>;

declare function pdf_native_document_render_to_buffer_with_scale(instance: interop.Pointer | interop.Reference<any>, index: number, viewport_width: number, viewport_height: number, scale_x: number, scale_y: number, x: number, y: number, width: number, height: number, flip_vertical: boolean, flip_horizontal: boolean): interop.Pointer | interop.Reference<CPdfNativeRenderInfo>;

declare function pdf_native_document_render_to_buffer_with_scale_and_tile(instance: interop.Pointer | interop.Reference<any>, index: number, tile_width: number, tile_height: number, viewport_width: number, viewport_height: number, scale: number, row: number, column: number): interop.Pointer | interop.Reference<CPdfNativeRenderInfo>;

declare function pdf_native_document_render_to_buffer_with_viewport_offset_and_size(instance: interop.Pointer | interop.Reference<any>, index: number, viewport_width: number, viewport_height: number, scale: number, x: number, y: number, width: number, height: number): interop.Pointer | interop.Reference<CPdfNativeRenderInfo>;

declare function pdf_native_document_render_to_buffers(instance: interop.Pointer | interop.Reference<any>, indices: interop.Pointer | interop.Reference<number>, indices_size: number, width: number, height: number, flip_vertical: boolean, flip_horizontal: boolean): interop.Pointer | interop.Reference<any>;

declare function pdf_native_document_render_to_buffers_with_scale(instance: interop.Pointer | interop.Reference<any>, indices: interop.Pointer | interop.Reference<number>, indices_size: number, viewport_width: number, viewport_height: number, scale_x: number, scale_y: number, x: number, y: number, width: number, height: number, flip_vertical: boolean, flip_horizontal: boolean): interop.Pointer | interop.Reference<any>;

declare function pdf_native_document_rounded_rect(instance: interop.Pointer | interop.Reference<any>, x: number, y: number, width: number, height: number, rx: number, ry: number, style: PdfNativeStyle): void;

declare function pdf_native_document_save_to_file(instance: interop.Pointer | interop.Reference<any>, file: string | interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function pdf_native_document_set_draw_color(instance: interop.Pointer | interop.Reference<any>, r: number, g: number, b: number, a: number): void;

declare function pdf_native_document_set_fill_color(instance: interop.Pointer | interop.Reference<any>, r: number, g: number, b: number, a: number): void;

declare function pdf_native_document_set_font(instance: interop.Pointer | interop.Reference<any>, font_name: string | interop.Pointer | interop.Reference<any>, font_style: string | interop.Pointer | interop.Reference<any>, font_weight: string | interop.Pointer | interop.Reference<any>): void;

declare function pdf_native_document_set_font_color(instance: interop.Pointer | interop.Reference<any>, r: number, g: number, b: number, a: number): void;

declare function pdf_native_document_set_font_size(instance: interop.Pointer | interop.Reference<any>, size: number): void;

declare function pdf_native_document_set_line_width(instance: interop.Pointer | interop.Reference<any>, width: number): void;

declare function pdf_native_document_set_page(instance: interop.Pointer | interop.Reference<any>, index: number): void;

declare function pdf_native_document_width(instance: interop.Pointer | interop.Reference<any>): number;

declare function pdf_native_init(): interop.Pointer | interop.Reference<any>;

declare function pdf_native_load_from_bytes(instance: interop.Pointer | interop.Reference<any>, buffer: string | interop.Pointer | interop.Reference<any>, size: number, password: string | interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function pdf_native_load_from_path(instance: interop.Pointer | interop.Reference<any>, path: string | interop.Pointer | interop.Reference<any>, password: string | interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function pdf_native_release(instance: interop.Pointer | interop.Reference<any>): void;

declare function pdf_native_render_info_release(instance: interop.Pointer | interop.Reference<CPdfNativeRenderInfo>): void;

declare function pdf_native_string_release(string: string | interop.Pointer | interop.Reference<any>): void;

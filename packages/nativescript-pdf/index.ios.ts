import { Image, ImageSource, knownFolders, Utils, View, File } from '@nativescript/core';
import { PageBreak, PDFViewBase, srcProperty, TextAlignment, TextBaseline } from './common';
import { IPDFDocument, PageSize, StyleDef, TableCell, TableCellOrString, TableOptions, TextOptions } from '.';
const native_ = Symbol('[[native]]');

export class PDFView extends PDFViewBase {
	createNativeView(): Object {
		return NSCPdfView.new();
	}

	_currentPage: number;

	get currentPage(): number {
		return this._currentPage;
	}

	initNativeView(): void {
		super.initNativeView();
		const nativeView = this.nativeViewProtected as NSCPdfView;
		if (nativeView) {
			const ref = new WeakRef(this);
			nativeView.onLoaded = (document) => {
				const view = ref.deref();
				if (!view) {
					return;
				}

				view._document = new PDFDocument(document as never);
				view.notify({ eventName: 'documentLoaded', object: view });
			};

			nativeView.onError = (error) => {
				const view = ref.deref();
				if (!view) {
					return;
				}
				view.notify({ eventName: 'documentError', object: view, error });
			};

			nativeView.onPageChange = (index) => {
				const view = ref.deref();
				if (!view) {
					return;
				}
				view._currentPage = index;
				view.notify({ eventName: 'pageChanged', object: view, currentPage: index });
			};
		}
	}

	// public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
	// 	const nativeView = this.nativeView;
	// 	if (nativeView) {
	// 		const width = Utils.layout.getMeasureSpecSize(widthMeasureSpec);
	// 		const height = Utils.layout.getMeasureSpecSize(heightMeasureSpec);
	// 		this.setMeasuredDimension(width, height);
	// 	}
	// }

	private _document: PDFDocument;

	get document(): PDFDocument {
		return this._document;
	}

	set document(value: PDFDocument) {
		if (value && value instanceof PDFDocument) {
			this._document = value;
			const nativeView = this.nativeViewProtected as NSCPdfView;
			if (nativeView) {
				nativeView.document = value[native_];
			}
		}
	}

	[srcProperty.setNative](value: string) {
		const nativeView = this.nativeViewProtected as NSCPdfView;
		if (nativeView) {
			if (value && value.length > 0) {
				if (value.startsWith('https://') || value.startsWith('http://')) {
					nativeView.loadFromUrl(value, null);
				} else if (value.startsWith('~/')) {
					nativeView.loadFromPath(value.replace('~', knownFolders.currentApp().path), null);
				} else {
					nativeView.loadFromPath(value, null);
				}
			} else {
				nativeView.document = null;
			}
		}
	}

	loadFromBuffer(value: ArrayBuffer | Uint8Array, password?: string) {
		const nativeView = this.nativeViewProtected as NSCPdfView;
		if (nativeView) {
			nativeView.loadFromBytes(value as never, password ?? null);
		}
	}
}

function parseStyle(value: 'S' | 'F' | 'DF' | 'FD') {
	switch (value) {
		case 'S':
			return NSCPdfStyle.S;
		case 'F':
			return NSCPdfStyle.F;
		case 'DF':
			return NSCPdfStyle.Df;
		case 'FD':
			return NSCPdfStyle.Fd;
		default:
			return NSCPdfStyle.S;
	}
}

function parsePageSize(size: PageSize): NSCPdfPagerSize {
	switch (size) {
		case 'a0':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.A0);
		case 'a1':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.A1);
		case 'a2':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.A2);
		case 'a3':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.A3);
		case 'a4':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.A4);
		case 'a5':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.A5);
		case 'a6':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.A6);
		case 'a7':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.A7);
		case 'a8':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.A8);
		case 'a9':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.A9);
		case 'a10':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.A10);
		case 'b0':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.B0);
		case 'b1':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.B1);
		case 'b2':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.B2);
		case 'b3':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.B3);
		case 'b4':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.B4);
		case 'b5':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.B5);
		case 'b6':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.B6);
		case 'b7':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.B7);
		case 'b8':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.B8);
		case 'b9':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.B9);
		case 'b10':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.B10);
		case 'c0':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.C0);
		case 'c1':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.C1);
		case 'c2':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.C2);
		case 'c3':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.C3);
		case 'c4':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.C4);
		case 'c5':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.C5);
		case 'c6':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.C6);
		case 'c7':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.C7);
		case 'c8':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.C8);
		case 'c9':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.C9);
		case 'c10':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.C10);
		case 'dl':
			return NSCPdfPagerSize.custom(110, 220);
		case 'letter':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.USLetterAnsiA);
		case 'government-letter':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.USGovernmentLetter);
		case 'legal':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.USLegal);
		case 'junior-legal':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.USJuniorLegal);
		case 'ledger':
			return NSCPdfPagerSize.custom(432, 279);
		case 'tabloid':
			return NSCPdfPagerSize.standard(NSCPdfStandardPaperSize.USLedgerTabloidAnsiB);
		case 'credit-card':
			return NSCPdfPagerSize.custom(85.6, 53.98);
		default:
			if (Array.isArray(size) && size.length === 2) {
				return NSCPdfPagerSize.custom(size[0], size[1]);
			}
			return NSCPdfPagerSize.a4();
	}
}

function parseTextAlignment(value: TextAlignment | 'left' | 'center' | 'right' | 'justify'): NSCPdfTextAlignment {
	switch (value) {
		case 'left':
			return NSCPdfTextAlignment.Left;
		case 'center':
			return NSCPdfTextAlignment.Center;
		case 'right':
			return NSCPdfTextAlignment.Right;
		case 'justify':
			// todo
			return NSCPdfTextAlignment.Left;
		default:
			return NSCPdfTextAlignment.Left;
	}
}

function parseTextBaseline(value: TextBaseline | 'alphabetic' | 'ideographic' | 'bottom' | 'top' | 'middle' | 'hanging'): NSCPdfTextBaseline {
	switch (value) {
		case 'alphabetic':
			return NSCPdfTextBaseline.Alphabetic;
		case 'ideographic':
			return NSCPdfTextBaseline.Ideographic;
		case 'bottom':
			return NSCPdfTextBaseline.Bottom;
		case 'top':
			return NSCPdfTextBaseline.Top;
		case 'middle':
			return NSCPdfTextBaseline.Middle;
		case 'hanging':
			return NSCPdfTextBaseline.Hanging;
		default:
			return NSCPdfTextBaseline.Alphabetic;
	}
}

function parseVertialAlignment(value: 'top' | 'middle' | 'bottom') {
	switch (value) {
		case 'top':
			return NSCPdfVerticalAlign.Top;
		case 'middle':
			return NSCPdfVerticalAlign.Middle;
		case 'bottom':
			return NSCPdfVerticalAlign.Bottom;
		default:
			return null;
	}
}

function parseHorizontalAlignment(value: 'left' | 'center' | 'right') {
	switch (value) {
		case 'left':
			return NSCPdfHorizontalAlign.Left;
		case 'center':
			return NSCPdfHorizontalAlign.Center;
		case 'right':
			return NSCPdfHorizontalAlign.Right;
		default:
			return null;
	}
}

function parseColor(value?: number | [number, number, number] | [number, number, number, number]): [number, number, number, number] | null {
	if (typeof value === 'number') {
		return [value, value, value, 255];
	} else if (Array.isArray(value)) {
		if (value.length === 3) {
			return [value[0], value[1], value[2], 255];
		} else if (value.length === 4) {
			return [value[0], value[1], value[2], value[3]];
		}
	}
	return null;
}

function parseStyleDef(style: StyleDef) {
	const styleDef = NSCPdfStyleDef.default();
	if (style?.font) {
		switch (style.font) {
			case 'helvetica':
				styleDef.font = NSCPdfFontFamily.Helvetica;
				break;
			case 'times':
				styleDef.font = NSCPdfFontFamily.Times;
				break;
			case 'courier':
				styleDef.font = NSCPdfFontFamily.Courier;
				break;
			default:
				break;
		}
	}

	if (style?.overflow) {
		switch (style.overflow) {
			case 'linebreak':
				styleDef.overflow = NSCPdfOverflow.LineBreak;
				break;
			case 'ellipsize':
				styleDef.overflow = NSCPdfOverflow.Ellipsize;
				break;
			case 'visible':
				styleDef.overflow = NSCPdfOverflow.Visible;
				break;
			case 'hidden':
				styleDef.overflow = NSCPdfOverflow.Hidden;
				break;
			default:
				break;
		}
	}

	const fillColor = parseColor(style?.fillColor);
	if (fillColor) {
		styleDef.fillColor = NSCPdfColor.alloc().initA(fillColor[0], fillColor[1], fillColor[2], fillColor[3]);
	}

	const textColor = parseColor(style?.textColor);
	if (textColor) {
		styleDef.textColor = NSCPdfColor.alloc().initA(textColor[0], textColor[1], textColor[2], textColor[3]);
	}

	if (Object.hasOwn(style, 'cellWidth')) {
		switch (style.cellWidth) {
			case 'auto':
				styleDef.cellWidth = NSCPdfCellWidth.Auto;
				break;
			case 'wrap':
				styleDef.cellWidth = NSCPdfCellWidth.Wrap;
				break;
			default:
				if (typeof style.cellWidth === 'number') {
					styleDef.cellWidth = NSCPdfCellWidth.Fixed(style.cellWidth);
				}
				break;
		}
	}

	if (Object.hasOwn(style, 'minCellWidth')) {
		if (typeof style.minCellWidth === 'number') {
			styleDef.updateMinCellWidth(style.minCellWidth);
		} else {
			styleDef.updateMinCellWidth(-1);
		}
	}

	if (typeof style.minCellHeight === 'number') {
		styleDef.minCellHeight = style.minCellHeight;
	}

	const horizontalAlign = parseHorizontalAlignment(style?.horizontalAlign);
	if (typeof horizontalAlign === 'number') {
		styleDef.horizontalAlign = horizontalAlign;
	}

	const verticalAlign = parseVertialAlignment(style?.verticalAlign);
	if (typeof verticalAlign === 'number') {
		styleDef.verticalAlign = verticalAlign;
	}

	if (typeof style?.fontSize === 'number') {
		styleDef.fontSize = style.fontSize;
	}

	if (style?.fontStyle) {
		switch (style.fontStyle) {
			case 'normal':
				styleDef.fontStyle = NSCPdfFontStyle.Normal;
				break;
			case 'bold':
				styleDef.fontStyle = NSCPdfFontStyle.Bold;
				break;
			case 'italic':
				styleDef.fontStyle = NSCPdfFontStyle.Italic;
				break;
			case 'bolditalic':
				styleDef.fontStyle = NSCPdfFontStyle.BoldItalic;
				break;
			default:
				styleDef.fontStyle = NSCPdfFontStyle.Normal;
				break;
		}
	}

	if (Array.isArray(style?.cellPadding)) {
		if (style.cellPadding.length === 4) {
			styleDef.cellPadding = NSCPdfPadding.alloc().init(style.cellPadding[0], style.cellPadding[1], style.cellPadding[2], style.cellPadding[3]);
		} else if (style.cellPadding.length === 2) {
			styleDef.cellPadding = NSCPdfPadding.alloc().init(style.cellPadding[0], style.cellPadding[1], style.cellPadding[0], style.cellPadding[1]);
		} else if (style.cellPadding.length === 1) {
			styleDef.cellPadding = NSCPdfPadding.alloc().initWithUniform(style.cellPadding[0]);
		}
	} else if (typeof style?.cellPadding === 'number') {
		styleDef.cellPadding = NSCPdfPadding.alloc().initWithUniform(style.cellPadding);
	}

	const lineColor = parseColor(style?.lineColor);
	if (lineColor) {
		styleDef.lineColor = NSCPdfColor.alloc().initA(lineColor[0], lineColor[1], lineColor[2], lineColor[3]);
	}

	if (typeof style?.lineWidth === 'number') {
		styleDef.lineWidth = style.lineWidth;
	}

	return styleDef;
}

function parseTableCellOrString(value: TableCellOrString[][]) {
	if (Array.isArray(value) && value.length > 0) {
		const length = value.length;
		const nativeArray = NSMutableArray.alloc().initWithCapacity(length);
		for (let i = 0; i < length; i++) {
			const innerArray = value[i];
			const innerLength = innerArray.length ?? 0;
			const nativeInnerArray = NSMutableArray.alloc().initWithCapacity(innerLength);

			for (let j = 0; j < innerLength; j++) {
				const inner = innerArray[j];
				if (inner) {
					if (inner === undefined || inner === null) {
						nativeInnerArray.addObject(NSCPdfTableCellOrString.withString(`${inner}`));
					} else {
						switch (typeof inner) {
							case 'string':
								if (inner.length === 0) {
									nativeInnerArray.addObject(NSCPdfTableCellOrString.empty());
								} else {
									nativeInnerArray.addObject(NSCPdfTableCellOrString.withString(inner as never));
								}
								break;
							case 'object':
								{
									const style = parseStyleDef((inner as TableCell).style);
									const cell = NSCPdfTableCell.alloc().init((inner as TableCell).content, (inner as TableCell).rowSpan, (inner as TableCell).colSpan, style);
									nativeInnerArray.addObject(NSCPdfTableCellOrString.Cell(cell));
								}
								break;
							default:
								break;
						}
					}
				}
			}
			nativeArray.addObject(nativeInnerArray);
		}
		return nativeArray;
	} else {
		return NSArray.new();
	}
}

export class HookData {
	[native_]: NSCPdfHookData;
	constructor(data: NSCPdfHookData) {
		this[native_] = data;
	}
	get index(): number {
		return this[native_]?.pageIndex ?? 0;
	}

	get x(): number {
		return this[native_]?.x ?? 0;
	}

	get y(): number {
		return this[native_]?.y ?? 0;
	}
}

export class CellHookData extends HookData {
	[native_]: NSCPdfCellHookData;
	constructor(data: NSCPdfCellHookData) {
		super(data);
		this[native_] = data;
	}

	get colSpan(): number {
		return this[native_]?.colSpan ?? 0;
	}

	get columnIndex(): number {
		return this[native_]?.columnIndex ?? 0;
	}

	get content(): string {
		return this[native_]?.content ?? '';
	}

	set content(value: string) {
		if (this[native_]) {
			this[native_].content = value;
		}
	}

	get height(): number {
		return this[native_]?.height ?? 0;
	}

	get lineCount(): number {
		return this[native_]?.lineCount ?? 0;
	}

	get rowIndex(): number {
		return this[native_]?.rowIndex ?? 0;
	}

	get rowSpan(): number {
		return this[native_]?.rowSpan ?? 0;
	}

	get section(): 'head' | 'body' | 'foot' {
		switch (this[native_]?.section) {
			case NSCPdfSection.Head:
				return 'head';
			case NSCPdfSection.Body:
				return 'body';
			case NSCPdfSection.Foot:
				return 'foot';
			default:
				return 'unknown' as never;
		}
	}

	get width(): number {
		return this[native_]?.width ?? 0;
	}
}

export class PdfImage {
	[native_]: NSCPdfImage;
	constructor(image) {
		this[native_] = image;
	}

	get width(): number {
		return this[native_]?.width ?? 0;
	}

	get height(): number {
		return this[native_]?.height ?? 0;
	}

	static from(bitmap: ImageSource | UIImage | ArrayBuffer, width: number | null | undefined, height: number | null | undefined): PdfImage {
		let image: NSCPdfImage | null = null;
		if (bitmap instanceof UIImage) {
			image = NSCPdfImage.fromImage(bitmap);
		} else if (bitmap instanceof ImageSource) {
			image = NSCPdfImage.fromImage(bitmap.ios);
		} else if (bitmap instanceof ArrayBuffer) {
			image = NSCPdfImage.fromEncodedData(NSData.dataWithData(bitmap as never));
		} else {
			if (arguments.length === 3 && typeof width === 'number' && typeof height === 'number') {
				try {
					image = NSCPdfImage.fromData(NSData.dataWithData(bitmap as never), width, height);
				} catch (e) {
					console.info(e);
				}
			} else {
				try {
					image = NSCPdfImage.fromEncodedData(NSData.dataWithData(bitmap as never));
				} catch (e) {
					console.info(e);
				}
			}
		}

		if (image) {
			return new PdfImage(image);
		}
		return null;
	}

	static fromAsync(bitmap: ImageSource | UIImage | ArrayBuffer, width: number | null | undefined, height: number | null | undefined): Promise<PdfImage> {
		return new Promise<PdfImage>((resolve, reject) => {
			const cb = (image) => {
				if (image) {
					resolve(new PdfImage(image));
				} else {
					reject(new Error('Could not create image'));
				}
			};
			if (bitmap instanceof UIImage) {
				NSCPdfImage.fromImageAsync(bitmap, cb);
			} else if (bitmap instanceof ImageSource) {
				NSCPdfImage.fromImageAsync(bitmap.ios, cb);
			} else if (bitmap instanceof ArrayBuffer) {
				NSCPdfImage.fromEncodedDataAsync(NSData.dataWithData(bitmap as never), cb);
			} else {
				if (arguments.length === 3 && typeof width === 'number' && typeof height === 'number') {
					NSCPdfImage.fromDataAsync(bitmap as never, width, height, cb);
				} else {
					try {
						NSCPdfImage.fromEncodedDataAsync(bitmap as never, cb);
					} catch (error) {
						reject(new Error('Could not create image'));
					}
				}
			}
		});
	}
}

export class PDFDocument implements IPDFDocument {
	[native_]: NSCPdfDocument;
	constructor(document?: { units: 'mm' | 'cm' | 'inches' | 'points' }) {
		if (document && document instanceof NSCPdfDocument) {
			this[native_] = document;
		} else {
			if (document && document.units) {
				const config = NSCPdfDocumentConfig.new();
				switch (document.units) {
					case 'cm':
						config.units = NSCPdfUnit.Cm;
						break;
					case 'inches':
						config.units = NSCPdfUnit.Inches;
						break;
					case 'points':
						config.units = NSCPdfUnit.Points;
						break;
					default:
						config.units = NSCPdfUnit.Mm;
						break;
				}

				this[native_] = NSCPdfDocument.alloc().initWithConfig(config);
			} else {
				this[native_] = NSCPdfDocument.new();
			}
		}
	}

	willDrawPage?: (HookData) => void;
	didDrawPage?: (HookData) => void;
	willDrawCell?: (CellHookData) => boolean;
	didDrawCell?: (CellHookData) => void;

	get native() {
		return this[native_];
	}

	get width(): number {
		return this[native_].width;
	}

	get height(): number {
		return this[native_].height;
	}

	addFileToVFS(filename, filecontent) {
		this[native_].addFileToVFS(filename, filecontent);
		return this;
	}

	existsFileInVFS(filename) {
		return this[native_].existsFileInVFS(filename);
	}

	getFileFromVFS(filename) {
		return this[native_].getFileFromVFS(filename);
	}

	addFont(postScriptNameOrFilePath: string | File, id: string, fontStyle: string, fontWeight: `100` | `200` | `300` | `400` | `500` | `600` | `700` | `800` | `900` | `normal` | `bold` = 'normal', encoding: 'StandardEncoding' | 'MacRomanEncoding' | 'Identity-H' | 'WinAnsiEncoding' = 'Identity-H') {
		if (typeof postScriptNameOrFilePath === 'string') {
			let path = postScriptNameOrFilePath;
			if (postScriptNameOrFilePath.startsWith('~/')) {
				path = postScriptNameOrFilePath.replace('~', knownFolders.currentApp().path);
			}
			this[native_].addFont(path, id, fontStyle, fontWeight ?? 'normal', encoding ?? 'Identity-H');
		} else if (postScriptNameOrFilePath instanceof File) {
			this[native_].addFont(postScriptNameOrFilePath.path, id, fontStyle, fontWeight ?? 'normal', encoding ?? 'Identity-H');
		}
		return this;
	}

	setFont(fontName: string, fontStyle: string, fontWeight: string | null = null) {
		this[native_].setFont(fontName, fontStyle, fontWeight ?? null);
		return this;
	}

	text(text: string, x: number, y: number, options?: TextOptions) {
		const opts = new NSCPdfTextOptions();
		if (options) {
			opts.align = parseTextAlignment(options?.align ?? 'left');
			opts.baseline = parseTextBaseline(options?.baseline ?? 'alphabetic');
			if (Array.isArray(options.angle)) {
				opts.angle = NSCPdfRotationOrMatrix.matrix(options.angle[0], options.angle[1], options.angle[2], options.angle[3], options.angle[4], options.angle[5]);
			} else if (typeof options.angle === 'number') {
				opts.angle = NSCPdfRotationOrMatrix.angle(options.angle);
			}
			opts.rotationDirection = options.rotationDirection ? (options.rotationDirection === 'cw' ? NSCPdfRotationDirection.Cw : NSCPdfRotationDirection.Ccw) : NSCPdfRotationDirection.Cw;
			opts.charSpace = options.charSpace ?? 0;
			opts.horizontalScale = options.horizontalScale ?? 1;
			opts.lineHeightFactor = options.lineHeightFactor ?? 1;
			opts.maxWidth = options.maxWidth ?? 0;
		}
		this[native_].addText(text, x, y, opts);
		return this;
	}

	roundedRect(x: number, y: number, width: number, height: number, rx: number, ry: number, style: 'S' | 'F' | 'DF' | 'FD' = 'S') {
		this[native_].roundedRect(x, y, width, height, rx, ry, parseStyle(style));
		return this;
	}

	circle(x: number, y: number, r: number, style: 'S' | 'F' | 'DF' | 'FD' = 'S') {
		this[native_].circle(x, y, r, parseStyle(style));
		return this;
	}

	addImage(bitmap: Image | ImageSource | UIImage | PdfImage, x: number, y: number, width?: number, height?: number);
	addImage(bitmap: string, mime: string, x: number, y: number, width?: number, height?: number);
	addImage(bitmap: any, xorMime: any, xOrY: number, widthOrY?: number, heightOrWidth?: number, height?: number) {
		if (bitmap instanceof Image) {
			this[native_].addImageWidthHeight(bitmap.ios, xorMime, xOrY, widthOrY ?? -1, heightOrWidth ?? -1);
		} else if (bitmap instanceof ImageSource) {
			this[native_].addImageWidthHeight(bitmap.ios, xorMime, xOrY, widthOrY ?? -1, heightOrWidth ?? -1);
		} else if ((bitmap as any) instanceof UIImage) {
			this[native_].addImageWidthHeight(bitmap as never, xorMime, xOrY, widthOrY ?? -1, heightOrWidth ?? -1);
		} else if (bitmap && typeof bitmap === 'string' && xorMime && typeof xorMime === 'string') {
			this[native_].addImageWithBase64WidthHeight(bitmap, xorMime, xOrY, widthOrY, heightOrWidth ?? -1, height ?? -1);
		} else if (bitmap && bitmap instanceof NSData) {
			this[native_].addImageWithDataWidthHeight(bitmap, xorMime, xOrY, widthOrY ?? -1, heightOrWidth ?? -1);
		} else if (bitmap && (bitmap instanceof Uint8Array || bitmap instanceof Uint8ClampedArray)) {
			this[native_].addImageWithDataWidthHeight(NSData.dataWithData(bitmap as never), xorMime, xOrY, widthOrY ?? -1, heightOrWidth ?? -1);
		} else if (bitmap instanceof PdfImage) {
			this[native_].addImageWithPdfWidthHeight(bitmap[native_], xorMime, xOrY, widthOrY ?? -1, heightOrWidth ?? -1);
		}
		return this;
	}

	setFontColor(r: number, g: number, b: number, a: number = 255) {
		// @ts-ignore
		this[native_].setFontColorA(r, g, b, a ?? 255);
		return this;
	}

	setFillColor(r: number, g: number, b: number, a: number = 255) {
		// @ts-ignore
		this[native_].setFillColorA(r, g, b, a ?? 255);
		return this;
	}

	setDrawColor(r: number, g: number, b: number, a: number = 255) {
		// @ts-ignore
		this[native_].setDrawColorA(r, g, b, a ?? 255);
		return this;
	}

	addPage(size?: PageSize, orientation?: 'portrait' | 'landscape') {
		if (!size && !orientation) {
			this[native_].addPage();
		} else {
			this[native_].addPageWithSizeOrientation(parsePageSize(size), orientation === 'landscape' ? NSCPdfOrientation.Landscape : NSCPdfOrientation.Portrait);
		}
		return this;
	}

	getFontSize() {
		return this[native_].fontSize;
	}

	setFontSize(value: number) {
		this[native_].fontSize = value;
		return this;
	}

	ellipse(x: number, y: number, rx: number, ry: number, style: 'S' | 'F' | 'DF' | 'FD' = 'S') {
		this[native_].ellipse(x, y, rx, ry, parseStyle(style));
		return this;
	}
	rect(x: number, y: number, width: number, height: number, style: 'S' | 'F' | 'DF' | 'FD' = 'S') {
		this[native_].rect(x, y, width, height, parseStyle(style));
		return this;
	}

	count() {
		return this[native_].count;
	}
	getHeight(): number {
		return this[native_].height;
	}

	setLineWidth(value: number) {
		this[native_].lineWidth = value;
		return this;
	}

	table(options?: TableOptions): { x: number; y: number } {
		const opts = NSCPdfTable.new();

		if (this.willDrawPage) {
			opts.willDrawPage = (data) => {
				this.willDrawPage(new HookData(data));
			};
		}

		if (this.didDrawPage) {
			opts.didDrawPage = (data) => {
				this.didDrawPage(new HookData(data));
			};
		}

		if (this.willDrawCell) {
			opts.willDrawCell = (data) => {
				return this.willDrawCell(new CellHookData(data)) ?? true;
			};
		}

		if (this.didDrawCell) {
			opts.didDrawCell = (data) => {
				this.didDrawCell(new CellHookData(data));
			};
		}

		if (options) {
			if (options.columns) {
				const len = options.columns.length;
				const columns = NSMutableArray.alloc().initWithCapacity(len);
				for (let i = 0; i < len; i++) {
					const column = options.columns[i];
					const newColumn = NSCPdfColumnDef.alloc().initWithHeaderDataKey(column.header, column.dataKey);
					columns.insertObjectAtIndex(newColumn, i);
				}
				opts.columns = columns;
			}

			if (options.columnStyles) {
				const keys = Object.keys(options.columnStyles);
				const columnStyles = NSMutableDictionary.alloc().initWithCapacity(keys.length);
				for (const key of keys) {
					const style = options.columnStyles[key];
					const styleDef = parseStyleDef(style);
					columnStyles.setValueForKey(styleDef, key);
				}
				opts.columnStyles = columnStyles;
			}

			if (options.styles) {
				opts.styles = parseStyleDef(options.styles);
			}

			if (options.alternateRowsStyles) {
				opts.alternateRowsStyles = parseStyleDef(options.alternateRowsStyles);
			}

			if (options.headStyles) {
				opts.headStyles = parseStyleDef(options.headStyles);
			}

			if (options.bodyStyles) {
				opts.bodyStyles = parseStyleDef(options.bodyStyles);
			}

			if (options.footStyles) {
				opts.footStyles = parseStyleDef(options.footStyles);
			}

			if (typeof options.margin === 'number') {
				opts.margin = NSCPdfMargin.alloc().initWithUniform(options.margin);
			} else if (Array.isArray(options.margin)) {
				switch (options.margin.length) {
					case 4:
						opts.margin = NSCPdfMargin.alloc().init(options.margin[0], options.margin[1], options.margin[2], options.margin[3]);
						break;
					case 3:
						opts.margin = NSCPdfMargin.alloc().init(options.margin[0], options.margin[1], options.margin[2], options.margin[1]);
						break;
					case 2:
						opts.margin = NSCPdfMargin.alloc().init(options.margin[0], options.margin[1], options.margin[0], options.margin[1]);
						break;
					case 1:
						opts.margin = NSCPdfMargin.alloc().initWithUniform(options.margin[0]);
						break;
				}
			}

			opts.head = parseTableCellOrString(options.head) as never;

			opts.body = parseTableCellOrString(options.body) as never;

			opts.foot = parseTableCellOrString(options.foot) as never;

			let hasPosition = false;
			const position = [0, 0];

			if (typeof options.startX === 'number') {
				position[0] = options.startX;
				hasPosition = true;
			}

			if (typeof options.startY === 'number') {
				position[1] = options.startY;
				hasPosition = true;
			}

			if (Array.isArray(options.position)) {
				if (typeof options.position[0] === 'number') {
					position[0] = options.position[0];
					hasPosition = true;
				}
				if (typeof options.position[1] === 'number') {
					position[1] = options.position[1];
					hasPosition = true;
				}
			}

			if (hasPosition) {
				opts.updatePosition(position[0], position[1]);
			}

			if (options.showHead) {
				switch (options.showHead) {
					case 'everyPage':
						opts.showHead = NSCPdfShowHead.EveryPage;
						break;
					case 'firstPage':
						opts.showHead = NSCPdfShowHead.FirstPage;
						break;
					case 'never':
						opts.showHead = NSCPdfShowHead.Never;
						break;
				}
			}

			if (options.showFoot) {
				switch (options.showFoot) {
					case 'everyPage':
						opts.showFoot = NSCPdfShowFoot.EveryPage;
						break;
					case 'lastPage':
						opts.showFoot = NSCPdfShowFoot.LastPage;
						break;
					case 'never':
						opts.showFoot = NSCPdfShowFoot.Never;
						break;
				}
			}

			if (options.theme) {
				switch (options.theme) {
					case 'striped':
						opts.theme = NSCPdfTableTheme.Striped;
						break;
					case 'grid':
						opts.theme = NSCPdfTableTheme.Grid;
						break;
					case 'Plain':
						opts.theme = NSCPdfTableTheme.Plain;
						break;
				}
			}
		}

		try {
			let position = JSON.parse(this[native_].table(opts));

			if (position.x !== -1 && position.y !== -1) {
				return { x: position.x, y: position.y };
			}
		} catch (error) {
			console.error('Error creating table', error);
		}

		return { x: 0, y: 0 };
	}

	saveSync(path: string): boolean {
		const err = this.native.saveSyncTo(path);
		if (err) {
			console.error('Error saving PDF document', err);
			return false;
		}
		return true;
	}

	save(path: string): Promise<void> {
		return new Promise((resolve, reject) => {
			this.native.saveToCallback(path, (error) => {
				if (error == null) {
					resolve();
				} else {
					reject(new Error(error.localizedDescription));
				}
			});
		});
	}
}

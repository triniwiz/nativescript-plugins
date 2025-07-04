import { Image, ImageSource, knownFolders, View } from '@nativescript/core';
import { PageBreak, PDFViewBase, srcProperty, TextAlignment, TextBaseline } from './common';
import { IPDFDocument, PageSize, StyleDef, TableCell, TableCellOrString, TableOptions, TextOptions } from '.';
const native_ = Symbol('[[native]]');

export class PDFView extends PDFViewBase {
	createNativeView(): Object {
		return new io.github.triniwiz.plugins.pdf.PdfView(this._context);
	}

	_currentPage: number;

	get currentPage(): number {
		return this._currentPage;
	}

	initNativeView(): void {
		super.initNativeView();
		if (this.nativeViewProtected) {
			const ref = new WeakRef(this);
			this.nativeViewProtected.setListener(
				new io.github.triniwiz.plugins.pdf.PdfView.Listener({
					onLoad(document) {
						if (!ref.get()) {
							return;
						}
						const view = ref.get();
						view._document = new PDFDocument(document);
						view.notify({ eventName: 'documentLoaded', object: view });
					},
					onError(error) {
						if (!ref.get()) {
							return;
						}
						const view = ref.get();
						view.notify({ eventName: 'documentError', object: view, error });
					},
					onPageChange(index) {
						if (!ref.get()) {
							return;
						}
						const view = ref.get();
						view.notify({ eventName: 'pageChanged', object: view, currentPage: index });
					},
				})
			);
		}
	}

	private _document: PDFDocument;

	get document(): PDFDocument {
		return this._document;
	}

	set document(value: PDFDocument) {
		if (value && value instanceof PDFDocument) {
			this._document = value;
			const nativeView = this.nativeViewProtected as io.github.triniwiz.plugins.pdf.PdfView;
			if (nativeView) {
				console.log('Setting document on PDFView', value[native_]);
				nativeView.setDocument(value[native_]);
			}
		}
	}

	[srcProperty.setNative](value: string) {
		const nativeView = this.nativeViewProtected as io.github.triniwiz.plugins.pdf.PdfView;
		if (nativeView) {
			if (value && value.length > 0) {
				if (value.startsWith('https://') || value.startsWith('http://')) {
					nativeView.loadFromUrl(value);
				} else if (value.startsWith('~/')) {
					nativeView.loadFromPath(value.replace('~', knownFolders.currentApp().path));
				} else {
					nativeView.loadFromPath(value);
				}
			} else {
				this.nativeViewProtected.setDocument(null);
			}
		}
	}

	loadFromBuffer(value: ArrayBuffer | Uint8Array) {
		const nativeView = this.nativeViewProtected as io.github.triniwiz.plugins.pdf.PdfView;
		if (nativeView) {
			nativeView.loadFromBuffer(value as never);
		}
	}
}

function parseStyle(value: 'S' | 'F' | 'DF' | 'FD') {
	switch (value) {
		case 'S':
			return io.github.triniwiz.plugins.pdf.PdfStyle.S;
		case 'F':
			return io.github.triniwiz.plugins.pdf.PdfStyle.F;
		case 'DF':
			return io.github.triniwiz.plugins.pdf.PdfStyle.DF;
		case 'FD':
			return io.github.triniwiz.plugins.pdf.PdfStyle.FD;
		default:
			return io.github.triniwiz.plugins.pdf.PdfStyle.S;
	}
}

function parsePageSize(size: PageSize): io.github.triniwiz.plugins.pdf.PdfPagerSize {
	switch (size) {
		case 'a0':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.A0);
		case 'a1':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.A1);
		case 'a2':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.A2);
		case 'a3':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.A3);
		case 'a4':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.A4);
		case 'a5':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.A5);
		case 'a6':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.A6);
		case 'a7':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.A7);
		case 'a8':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.A8);
		case 'a9':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.A9);
		case 'a10':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.A10);
		case 'b0':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.B0);
		case 'b1':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.B1);
		case 'b2':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.B2);
		case 'b3':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.B3);
		case 'b4':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.B4);
		case 'b5':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.B5);
		case 'b6':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.B6);
		case 'b7':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.B7);
		case 'b8':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.B8);
		case 'b9':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.B9);
		case 'b10':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.B10);
		case 'c0':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.C0);
		case 'c1':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.C1);
		case 'c2':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.C2);
		case 'c3':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.C3);
		case 'c4':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.C4);
		case 'c5':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.C5);
		case 'c6':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.C6);
		case 'c7':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.C7);
		case 'c8':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.C8);
		case 'c9':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.C9);
		case 'c10':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.C10);
		case 'dl':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.custom(110, 220);
		case 'letter':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.USLetterAnsiA);
		case 'government-letter':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.USGovernmentLetter);
		case 'legal':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.USLegal);
		case 'junior-legal':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.USJuniorLegal);
		case 'ledger':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.custom(432, 279);
		case 'tabloid':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.standard(io.github.triniwiz.plugins.pdf.PdfStandardPaperSize.USLedgerTabloidAnsiB);
		case 'credit-card':
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.custom(85.6, 53.98);
		default:
			if (Array.isArray(size) && size.length === 2) {
				return io.github.triniwiz.plugins.pdf.PdfPagerSize.custom(size[0], size[1]);
			}
			return io.github.triniwiz.plugins.pdf.PdfPagerSize.a4();
	}
}

function parseTextAlignment(value: TextAlignment | 'left' | 'center' | 'right' | 'justify'): io.github.triniwiz.plugins.pdf.PdfTextAlignment {
	switch (value) {
		case 'left':
			return io.github.triniwiz.plugins.pdf.PdfTextAlignment.Left;
		case 'center':
			return io.github.triniwiz.plugins.pdf.PdfTextAlignment.Center;
		case 'right':
			return io.github.triniwiz.plugins.pdf.PdfTextAlignment.Right;
		case 'justify':
			return io.github.triniwiz.plugins.pdf.PdfTextAlignment.Justify;
		default:
			return io.github.triniwiz.plugins.pdf.PdfTextAlignment.Left;
	}
}

function parseTextBaseline(value: TextBaseline | 'alphabetic' | 'ideographic' | 'bottom' | 'top' | 'middle' | 'hanging'): io.github.triniwiz.plugins.pdf.PdfTextBaseline {
	switch (value) {
		case 'alphabetic':
			return io.github.triniwiz.plugins.pdf.PdfTextBaseline.Alphabetic;
		case 'ideographic':
			return io.github.triniwiz.plugins.pdf.PdfTextBaseline.Ideographic;
		case 'bottom':
			return io.github.triniwiz.plugins.pdf.PdfTextBaseline.Bottom;
		case 'top':
			return io.github.triniwiz.plugins.pdf.PdfTextBaseline.Top;
		case 'middle':
			return io.github.triniwiz.plugins.pdf.PdfTextBaseline.Middle;
		case 'hanging':
			return io.github.triniwiz.plugins.pdf.PdfTextBaseline.Hanging;
		default:
			return io.github.triniwiz.plugins.pdf.PdfTextBaseline.Alphabetic;
	}
}

function parseVertialAlignment(value: 'top' | 'middle' | 'bottom') {
	switch (value) {
		case 'top':
			return io.github.triniwiz.plugins.pdf.table.VerticalAlign.Top;
		case 'middle':
			return io.github.triniwiz.plugins.pdf.table.VerticalAlign.Middle;
		case 'bottom':
			return io.github.triniwiz.plugins.pdf.table.VerticalAlign.Bottom;
		default:
			return null;
	}
}

function parseHorizontalAlignment(value: 'left' | 'center' | 'right') {
	switch (value) {
		case 'left':
			return io.github.triniwiz.plugins.pdf.table.HorizontalAlign.Left;
		case 'center':
			return io.github.triniwiz.plugins.pdf.table.HorizontalAlign.Center;
		case 'right':
			return io.github.triniwiz.plugins.pdf.table.HorizontalAlign.Right;
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
	const styleDef = io.github.triniwiz.plugins.pdf.table.StyleDef.default();
	if (style?.font) {
		switch (style.font) {
			case 'helvetica':
				styleDef.setFont(io.github.triniwiz.plugins.pdf.table.FontFamily.Helvetica);
				break;
			case 'times':
				styleDef.setFont(io.github.triniwiz.plugins.pdf.table.FontFamily.Times);
				break;
			case 'courier':
				styleDef.setFont(io.github.triniwiz.plugins.pdf.table.FontFamily.Courier);
				break;
			default:
				break;
		}
	}

	if (style?.overflow) {
		switch (style.overflow) {
			case 'linebreak':
				styleDef.setOverflow(io.github.triniwiz.plugins.pdf.table.Overflow.LineBreak);
				break;
			case 'ellipsize':
				styleDef.setOverflow(io.github.triniwiz.plugins.pdf.table.Overflow.Ellipsize);
				break;
			case 'visible':
				styleDef.setOverflow(io.github.triniwiz.plugins.pdf.table.Overflow.Visible);
				break;
			case 'hidden':
				styleDef.setOverflow(io.github.triniwiz.plugins.pdf.table.Overflow.Hidden);
				break;
			default:
				break;
		}
	}

	const fillColor = parseColor(style?.fillColor);
	if (fillColor) {
		styleDef.setFillColor(fillColor[0], fillColor[1], fillColor[2], fillColor[3]);
	}

	const textColor = parseColor(style?.textColor);
	if (textColor) {
		styleDef.setTextColor(textColor[0], textColor[1], textColor[2], textColor[3]);
	}

	if (Object.hasOwn(style, 'cellWidth')) {
		switch (style.cellWidth) {
			case 'auto':
				styleDef.setCellWidth(io.github.triniwiz.plugins.pdf.table.CellWidth.Auto);
				break;
			case 'wrap':
				styleDef.setCellWidth(io.github.triniwiz.plugins.pdf.table.CellWidth.Wrap);
				break;
			default:
				if (typeof style.cellWidth === 'number') {
					styleDef.setCellWidth(new io.github.triniwiz.plugins.pdf.table.CellWidth.Fixed(style.cellWidth));
				}
				break;
		}
	}

	if (typeof style.minCellWidth === 'number') {
		styleDef.setMinCellWidth(java.lang.Float.valueOf(style.minCellWidth));
	}

	if (typeof style.minCellHeight === 'number') {
		styleDef.setMinCellHeight(style.minCellHeight);
	}

	const horizontalAlign = parseHorizontalAlignment(style?.horizontalAlign);
	if (horizontalAlign) {
		styleDef.setHorizontalAlign(horizontalAlign);
	}

	const verticalAlign = parseVertialAlignment(style?.verticalAlign);
	if (verticalAlign) {
		styleDef.setVerticalAlign(verticalAlign);
	}

	if (typeof style?.fontSize === 'number') {
		styleDef.setFontSize(style.fontSize);
	}

	if (style?.fontStyle) {
		switch (style.fontStyle) {
			case 'normal':
				styleDef.setFontStyle(io.github.triniwiz.plugins.pdf.table.FontStyle.Normal);
				break;
			case 'bold':
				styleDef.setFontStyle(io.github.triniwiz.plugins.pdf.table.FontStyle.Bold);
				break;
			case 'italic':
				styleDef.setFontStyle(io.github.triniwiz.plugins.pdf.table.FontStyle.Italic);
				break;
			case 'bolditalic':
				styleDef.setFontStyle(io.github.triniwiz.plugins.pdf.table.FontStyle.BoldItalic);
				break;
			default:
				styleDef.setFontStyle(io.github.triniwiz.plugins.pdf.table.FontStyle.Normal);
				break;
		}
	}

	if (Array.isArray(style?.cellPadding)) {
		if (style.cellPadding.length === 4) {
			styleDef.setCellPadding(new io.github.triniwiz.plugins.pdf.table.Padding(style.cellPadding[0], style.cellPadding[1], style.cellPadding[2], style.cellPadding[3]));
		} else if (style.cellPadding.length === 2) {
			styleDef.setCellPadding(new io.github.triniwiz.plugins.pdf.table.Padding(style.cellPadding[0], style.cellPadding[1], style.cellPadding[0], style.cellPadding[1]));
		} else if (style.cellPadding.length === 1) {
			styleDef.setCellPadding(new io.github.triniwiz.plugins.pdf.table.Padding(style.cellPadding[0]));
		}
	} else if (typeof style?.cellPadding === 'number') {
		styleDef.setCellPadding(new io.github.triniwiz.plugins.pdf.table.Padding(style.cellPadding));
	}

	const lineColor = parseColor(style?.lineColor);
	if (lineColor) {
		styleDef.setLineColor(lineColor[0], lineColor[1], lineColor[2], lineColor[3]);
	}

	if (typeof style?.lineWidth === 'number') {
		styleDef.setLineWidth(style.lineWidth);
	}

	return styleDef;
}

function parseTableCellOrString(value: TableCellOrString[][]) {
	if (Array.isArray(value)) {
		const length = value.length;
		const nativeArray = Array.create('[Lio.github.triniwiz.plugins.pdf.table.TableCellOrString;', length);
		for (let i = 0; i < length; i++) {
			const innerArray = value[i];
			const innerLength = innerArray.length ?? 0;
			const nativeInnerArray = Array.create('io.github.triniwiz.plugins.pdf.table.TableCellOrString', innerLength);

			for (let j = 0; j < innerLength; j++) {
				const inner = innerArray[j];
				if (inner) {
					const type = typeof inner;
					if (type === 'object') {
						const style = parseStyleDef((inner as TableCell).style);
						const cell = new io.github.triniwiz.plugins.pdf.table.TableCell((inner as TableCell).content, (inner as TableCell).rowSpan, (inner as TableCell).colSpan, style);
						nativeInnerArray[j] = new io.github.triniwiz.plugins.pdf.table.TableCellOrString.Cell(cell);
					} else if (type === 'string') {
						nativeInnerArray[j] = new io.github.triniwiz.plugins.pdf.table.TableCellOrString.StringValue(inner as never);
					}
				}
			}
			nativeArray[i] = nativeInnerArray;
		}
		return nativeArray;
	}
	return [];
}

export class PDFDocument implements IPDFDocument {
	[native_]: io.github.triniwiz.plugins.pdf.PdfDocument;
	constructor(document?: { units: 'mm' | 'cm' | 'inches' | 'points' }) {
		if (document && document instanceof io.github.triniwiz.plugins.pdf.PdfDocument) {
			this[native_] = document;
		} else {
			this[native_] = new io.github.triniwiz.plugins.pdf.PdfDocument();
		}
	}

	get native() {
		return this[native_];
	}

	get width(): number {
		return this[native_].getWidth();
	}

	get height(): number {
		return this[native_].getHeight();
	}

	addText(text: string, x: number, y: number, options?: TextOptions) {
		const opts = new io.github.triniwiz.plugins.pdf.PdfTextOptions();
		if (options) {
			opts.setAlign(parseTextAlignment(options?.align ?? 'left'));
			opts.setBaseline(parseTextBaseline(options?.baseline ?? 'alphabetic'));
			if (Array.isArray(options.angle)) {
				opts.setAngle(io.github.triniwiz.plugins.pdf.PdfRotationOrMatrix.matrix(options.angle[0], options.angle[1], options.angle[2], options.angle[3], options.angle[4], options.angle[5]));
			} else if (typeof options.angle === 'number') {
				opts.setAngle(io.github.triniwiz.plugins.pdf.PdfRotationOrMatrix.angle(options.angle));
			}
			opts.setRotationDirection(options.rotationDirection ? (options.rotationDirection === 'cw' ? io.github.triniwiz.plugins.pdf.PdfRotationDirection.CW : io.github.triniwiz.plugins.pdf.PdfRotationDirection.CCW) : io.github.triniwiz.plugins.pdf.PdfRotationDirection.CW);
			opts.setCharSpace(options.charSpace ?? 0);
			opts.setHorizontalScale(options.horizontalScale ?? 1);
			opts.setLineHeightFactor(options.lineHeightFactor ?? 1);
			opts.setMaxWidth(options.maxWidth ?? 0);
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

	addImage(bitmap: Image | ImageSource, x: number, y: number, width?: number, height?: number) {
		if (bitmap instanceof Image) {
			this[native_].addImage(bitmap.android, x, y, java.lang.Integer.valueOf(width ?? -1), java.lang.Integer.valueOf(height ?? -1));
		} else if (bitmap instanceof ImageSource) {
			this[native_].addImage(bitmap.android, x, y, java.lang.Integer.valueOf(width ?? -1), java.lang.Integer.valueOf(height ?? -1));
		} else if ((bitmap as any) instanceof globalAndroid.graphics.Bitmap) {
			this[native_].addImage(bitmap as never, x, y, java.lang.Integer.valueOf(width ?? -1), java.lang.Integer.valueOf(height ?? -1));
		}
		return this;
	}

	setFontColor(r: number, g: number, b: number, a: number = 255) {
		this[native_].setFontColor(r, g, b, a ?? 255);
		return this;
	}

	setFillColor(r: number, g: number, b: number, a: number = 255) {
		this[native_].setFillColor(r, g, b, a ?? 255);
		return this;
	}

	setDrawColor(r: number, g: number, b: number, a: number = 255) {
		this[native_].setDrawColor(r, g, b, a ?? 255);
		return this;
	}

	addPage(size?: PageSize, orientation?: 'portrait' | 'landscape') {
		this[native_].addPage(parsePageSize(size), orientation === 'landscape' ? io.github.triniwiz.plugins.pdf.PdfOrientation.Landscape : io.github.triniwiz.plugins.pdf.PdfOrientation.Portrait);
		return this;
	}

	getFontSize() {
		return this[native_].getFontSize();
	}

	setFontSize(value: number) {
		this[native_].setFontSize(value);
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
		return this[native_].count();
	}
	getHeight(): number {
		return this[native_].getHeight();
	}

	setLineWidth(value: number) {
		this[native_].setLineWidth(value);
		return this;
	}

	table(options?: TableOptions) {
		const opts = new io.github.triniwiz.plugins.pdf.table.PdfTable();

		if (options) {
			if (options.columns) {
				const len = options.columns.length;
				const columns = Array.create('io.github.triniwiz.plugins.pdf.table.ColumnDef', options.columns.length);
				for (let i = 0; i < len; i++) {
					const column = options.columns[i];
					const newColumn = new io.github.triniwiz.plugins.pdf.table.ColumnDef(column.header, column.dataKey);
					columns[i] = newColumn;
				}
				opts.setColumns(columns);
			}

			if (options.columnStyles) {
				const columnStyles = new java.util.HashMap<string, io.github.triniwiz.plugins.pdf.table.StyleDef>();
				Object.keys(options.columnStyles).forEach((key) => {
					const style = options.columnStyles[key];
					const styleDef = parseStyleDef(style);
					columnStyles.put(key, styleDef);
				});
				opts.setColumnStyles(columnStyles);
			}

			if (options.headStyles) {
				opts.setHeadStyles(parseStyleDef(options.headStyles));
			}

			if (options.bodyStyles) {
				opts.setBodyStyles(parseStyleDef(options.bodyStyles));
			}

			if (options.footStyles) {
				opts.setFootStyles(parseStyleDef(options.footStyles));
			}

			opts.setHead(parseTableCellOrString(options.head));

			opts.setBody(parseTableCellOrString(options.body));

			opts.setFoot(parseTableCellOrString(options.foot));

			if (Array.isArray(options.position)) {
				opts.updatePosition(options.position[0], options.position[1] ?? 0);
			}

			if (options.showHead) {
				switch (options.showHead) {
					case 'everyPage':
						opts.setShowHead(io.github.triniwiz.plugins.pdf.table.ShowHead.EveryPage);
						break;
					case 'firstPage':
						opts.setShowHead(io.github.triniwiz.plugins.pdf.table.ShowHead.FirstPage);
						break;
					case 'never':
						opts.setShowHead(io.github.triniwiz.plugins.pdf.table.ShowHead.Never);
						break;
				}
			}

			if (options.showFoot) {
				switch (options.showFoot) {
					case 'everyPage':
						opts.setShowFoot(io.github.triniwiz.plugins.pdf.table.ShowFoot.EveryPage);
						break;
					case 'lastPage':
						opts.setShowFoot(io.github.triniwiz.plugins.pdf.table.ShowFoot.LastPage);
						break;
					case 'never':
						opts.setShowFoot(io.github.triniwiz.plugins.pdf.table.ShowFoot.Never);
						break;
				}
			}

			if (options.theme) {
				switch (options.theme) {
					case 'striped':
						opts.setTheme(io.github.triniwiz.plugins.pdf.table.TableTheme.Striped);
						break;
					case 'grid':
						opts.setTheme(io.github.triniwiz.plugins.pdf.table.TableTheme.Grid);
						break;
					case 'Plain':
						opts.setTheme(io.github.triniwiz.plugins.pdf.table.TableTheme.Plain);
						break;
				}
			}
		}

		this[native_].table(opts);
		return this;
	}
}

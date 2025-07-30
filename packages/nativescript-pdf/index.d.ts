import { PDFViewBase, TextAlignment, TextBaseline } from './common';

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

export type PageSize = 'a0' | 'a1' | 'a2' | 'a3' | 'a4' | 'a5' | 'a6' | 'a7' | 'a8' | 'a9' | 'a10' | 'b0' | 'b1' | 'b2' | 'b3' | 'b4' | 'b5' | 'b6' | 'b7' | 'b8' | 'b9' | 'b10' | 'c0' | 'c1' | 'c2' | 'c3' | 'c4' | 'c5' | 'c6' | 'c7' | 'c8' | 'c9' | 'c10' | 'dl' | 'letter' | 'government-letter' | 'legal' | 'junior-legal' | 'ledger' | 'tabloid' | 'credit-card' | [number, number];

interface TextOptions {
	align?: TextAlignment | 'left' | 'center' | 'right' | 'justify';
	baseline?: TextBaseline | 'alphabetic' | 'ideographic' | 'bottom' | 'top' | 'middle' | 'hanging';
	angle?: number | [number, number, number, number, number, number];
	rotationDirection?: RotationDirection | 'cw' | 'ccw';
	charSpace?: number;
	horizontalScale?: number;
	lineHeightFactor?: number;
	maxWidth?: number;
}

interface ColumnDef {
	header?: string;
	dataKey?: string;
}

type FontFamily = 'helvetica' | 'times' | 'courier';

type FontStyle = 'normal' | 'bold' | 'italic' | 'bolditalic';

type Overflow = 'linebreak' | 'ellipsize' | 'visible' | 'hidden';

type Color = [number, number, number] | [number, number, number, number] | number;

type HorizontalAlign = 'left' | 'center' | 'right';

type VerticalAlign = 'top' | 'middle' | 'bottom';

type Padding = [number, number, number, number] | number;

type CellWidth = 'auto' | 'wrap' | number;

interface StyleDef {
	font?: FontFamily;
	fontStyle?: FontStyle;
	overflow?: Overflow;
	fillColor?: Color;
	textColor?: Color;
	cellWidth?: CellWidth;
	minCellWidth?: number;
	minCellHeight?: number;
	horizontalAlign?: HorizontalAlign;
	verticalAlign?: VerticalAlign;
	fontSize?: number;
	cellPadding?: Padding;
	lineColor?: Color;
	lineWidth?: number;
}

type ColumnKey = string | number;

interface TableCell {
	content: string;
	rowSpan: number;
	colSpan: number;
	style: StyleDef?;
}

type TableCellOrString = TableCell | string;

type TableTheme = 'striped' | 'grid' | 'Plain';

type PageBreak = 'auto' | 'always' | 'avoid';

type ShowHead = 'everyPage' | 'firstPage' | 'never';

type ShowFoot = 'everyPage' | 'lastPage' | 'never';

interface TableOptions {
	styles?: StyleDef;
	alternateRowsStyles?: StyleDef;
	columns?: Array<ColumnDef>;
	columnStyles?: Record<ColumnKey, StyleDef>;
	headStyles?: StyleDef;
	bodyStyles?: StyleDef;
	footStyles?: StyleDef;
	head?: TableCellOrString[][];
	body?: TableCellOrString[][];
	foot?: TableCellOrString[][];
	startX?: number;
	startY?: number;
	position?: [number, number];
	theme?: TableTheme;
	pageBreak?: PageBreak;
	showHead?: ShowHead;
	showFoot?: ShowFoot;
	margin?: [number, number, number, number] | [number, number, number] | [number, number] | [number] | number;
}

export class IPDFDocument {
	text(text: string, x: number, y: number, options?: TextOptions): this;

	roundedRect(x: number, y: number, width: number, height: number, rx: number, ry: number, style?: 'S' | 'F' | 'DF' | 'FD'): this;

	circle(x: number, y: number, r: number, style?: 'S' | 'F' | 'DF' | 'FD'): this;

	addImage(bitmap: Image, x: number, y: number, width?: number, height?: number): this;

	addImage(data: string, mime: string, x: number, y: number, width?: number, height?: number): this;

	setFontColor(r: number, g: number, b: number, a?: number): this;

	setFillColor(r: number, g: number, b: number, a?: number): this;

	setDrawColor(r: number, g: number, b: number, a?: number): this;

	addPage(size?: PageSize, orientation?: 'portrait' | 'landscape'): this;

	setFontSize(value: number): this;

	ellipse(x: number, y: number, rx: number, ry: number, style?: 'S' | 'F' | 'DF' | 'FD'): this;

	rect(x: number, y: number, width: number, height: number, style?: 'S' | 'F' | 'DF' | 'FD'): this;

	getFontSize(): number;

	table(): { x: number; y: number };

	count(): number;

	getHeight(): number;

	setLineWidth(value: number): this;

	table(options: TableOptions): { x: number; y: number };

	saveSync(path: string): boolean;

	save(path: string): Promise<void>;
}

export class PDFDocument extends IPDFDocument {
	constructor(document?: { units?: 'mm' | 'cm' | 'inches' | 'points' });

	readonly native: any;

	readonly width: number;

	readonly height: number;
}

export class PDFView extends PDFViewBase {
	readonly currentPage: number;

	document: PDFDocument;

	loadFromBuffer(value: ArrayBuffer | Uint8Array);
}

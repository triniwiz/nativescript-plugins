import { Property, View } from '@nativescript/core';
export class PDFViewBase extends View {
	src: string;
}

export const srcProperty = new Property<PDFViewBase, string>({
	name: 'src',
	defaultValue: '',
});

srcProperty.register(PDFViewBase);

export enum PageBreak {
	Auto,
	Avoid,
	Always,
}

export const enum TextAlignment {
	Left = 'left',
	Center = 'center',
	Right = 'right',
	Justify = 'justify',
}

export const enum TextBaseline {
	Alphabetic = 'alphabetic',
	Ideographic = 'ideographic',
	Bottom = 'bottom',
	Top = 'top',
	Middle = 'middle',
	Hanging = 'hanging',
}

export const enum RotationDirection {
	CW = 'cw',
	CCW = 'ccw',
}

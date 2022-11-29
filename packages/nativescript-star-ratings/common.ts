import { View, Property, CssProperty, Style, booleanConverter, Color } from '@nativescript/core';

export enum FillMode {
	FULL = 'full',
	HALF = 'half',
	PRECISE = 'precise',
}

export abstract class StarRatingBase extends View {
	max: number;
	value: number;
    starSize: number;
    starMargin: number;
	fillMode: FillMode;
	abstract emptyBorderColor: Color | string;
	abstract filledBorderColor: Color | string;
	abstract emptyColor: Color | string;
	abstract filledColor: Color | string;
	indicator: boolean;
    updateOnTouch: boolean;
}

export const maxProperty = new Property<StarRatingBase, number>({
	name: 'max',
	defaultValue: 5,
});
export const valueProperty = new Property<StarRatingBase, number>({
	name: 'value',
	defaultValue: 1,
});
export const starSize = new Property({
    name: 'starSize',
    defaultValue: 20,
});
export const starMargin = new Property({
    name: 'starMargin',
    defaultValue: 5,
});
export const fillModeProperty = new Property<StarRatingBase, FillMode | 'full' | 'half' | 'precise'>({
	name: 'fillMode',
	defaultValue: FillMode.FULL,
});
export const emptyBorderColorProperty = new CssProperty<Style, Color | string>({
	name: 'emptyBorderColor',
	cssName: 'empty-border-color',
});
export const filledBorderColorProperty = new CssProperty<Style, Color | string>({
	name: 'filledBorderColor',
	cssName: 'filled-border-color',
});
export const emptyColorProperty = new CssProperty<Style, Color | string>({
	name: 'emptyColor',
	cssName: 'empty-color',
});
export const filledColorProperty = new CssProperty<Style, Color | string>({
	name: 'filledColor',
	cssName: 'filled-color',
});
export const indicatorProperty = new Property<StarRatingBase, boolean>({
	name: 'indicator',
	defaultValue: false,
	valueConverter: booleanConverter,
});
export const updateOnTouch = new Property({
    name: 'updateOnTouch',
    defaultValue: false,
    valueConverter: booleanConverter,
});
declare module '@nativescript/core/ui/styling/style' {
	interface Style {
		emptyBorderColor: Color | string;
		filledBorderColor: Color | string;
		emptyColor: Color | string;
		filledColor: Color | string;
	}
}

starSize.register(StarRatingBase);
starMargin.register(StarRatingBase);
updateOnTouch.register(StarRatingBase);
indicatorProperty.register(StarRatingBase);
fillModeProperty.register(StarRatingBase);
emptyBorderColorProperty.register(Style);
filledBorderColorProperty.register(Style);
emptyColorProperty.register(Style);
filledColorProperty.register(Style);
maxProperty.register(StarRatingBase);
valueProperty.register(StarRatingBase);

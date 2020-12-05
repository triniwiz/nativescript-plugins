import {
  View,
  Property,
  CssProperty,
  Style,
  booleanConverter, Color
} from '@nativescript/core';

export enum FillMode {
  FULL = 'full',
  HALF = 'half',
  PRECISE = 'precise'
}

export class StarRatingBase extends View {
  max: number;
  value: number;
  fillMode: FillMode;
  emptyBorderColor: Color | string;
  filledBorderColor: Color | string;
  emptyColor: Color | string;
  filledColor: Color | string;
}

export const maxProperty = new Property<StarRatingBase, number>({
  name: 'max',
  defaultValue: 5
});
export const valueProperty = new Property<StarRatingBase, number>({
  name: 'value',
  defaultValue: 1
});
export const fillModeProperty = new Property<StarRatingBase, FillMode | 'full' | 'half' | 'precise'>({
  name: 'fillMode',
  defaultValue: FillMode.FULL
});
export const emptyBorderColorProperty = new CssProperty<Style, Color | string>({
  name: 'emptyBorderColor',
  cssName: 'empty-border-color'
});
export const filledBorderColorProperty = new CssProperty<Style, Color | string>({
  name: 'filledBorderColor',
  cssName: 'filled-border-color'
});
export const emptyColorProperty = new CssProperty<Style, Color | string>({
  name: 'emptyColor',
  cssName: 'empty-color'
});
export const filledColorProperty = new CssProperty<Style, Color | string>({
  name: 'filledColor',
  cssName: 'filled-color'
});
export const indicatorProperty = new Property<StarRatingBase, boolean>({
  name: "indicator",
  defaultValue: true
});

declare module '@nativescript/core/ui/styling/style' {
  interface Style {
    emptyBorderColor: Color | string;
    filledBorderColor: Color | string;
    emptyColor: Color | string;
    filledColor: Color | string;
  }
}

indicatorProperty.register(StarRatingBase);
fillModeProperty.register(StarRatingBase);
emptyBorderColorProperty.register(Style);
filledBorderColorProperty.register(Style);
emptyColorProperty.register(Style);
filledColorProperty.register(Style);
maxProperty.register(StarRatingBase);
valueProperty.register(StarRatingBase);


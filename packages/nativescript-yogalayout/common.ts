import {
  AddChildFromBuilder,
  Property,
  View as NSView,
  PercentLength,
  Style,
  CssProperty,
  PropertyChangeData
} from '@nativescript/core';

export enum ParsedValueType {
  Auto = 'auto',
  Px = 'px',
  Dip = 'dip',
  Percent = '%',
}

export interface ParsedValue {
  type: ParsedValueType;
  value: number;
}

export type SizeType = PercentLength | string;

export enum FlexDirection {
  Row = 'row',
  RowReverse = 'row-reverse',
  Column = 'column',
  ColumnReverse = 'column-reverse',
}

export enum FlexAlignSelf {
  Auto = 'auto',
  FlexStart = 'flex-start',
  FlexEnd = 'flex-end',
  Center = 'center',
  Stretch = 'stretch',
  BaseLine = 'baseline',
}

export enum FlexAlignItems {
  FlexStart = 'flex-start',
  FlexEnd = 'flex-end',
  Center = 'center',
  Stretch = 'stretch',
  BaseLine = 'baseline',
}

export enum FlexJustify {
  FlexStart = 'flex-start',
  Center = 'center',
  FlexEnd = 'flex-end',
  SpaceBetween = 'space-between',
  SpaceAround = 'space-around',
  SpaceEvenly = 'space-evenly'
}

export enum FlexAlignContent {
  Stretch = 'stretch',
  FlexStart = 'flex-start',
  Center = 'center',
  FlexEnd = 'flex-end',
  SpaceBetween = 'space-between',
  SpaceAround = 'space-around',
}

export enum Overflow {
  Visible = 'visible',
  Hidden = 'hidden',
  Scroll = 'scroll',
}

export enum Position {
  Relative = 'relative',
  Absolute = 'absolute'
}

export enum FlexWrap {
  Wrap = 'wrap',
  NoWrap = 'no-wrap',
  WrapReverse = 'wrap-reverse'
}

export function toYGValue(value: SizeType): ParsedValue {
  if (typeof value === 'string') {
    if (value === 'auto') {
      return {type: ParsedValueType.Auto, value: 0};
    } else {
      const val = parseInt(value, 10);

      if (!isNaN(val)) {
        return {type: ParsedValueType.Dip, value: val};
      }
    }
  } else if (typeof value === 'number') {
    return {type: ParsedValueType.Dip, value};
  } else {
    if (value) {
      // @ts-ignore
      switch (value.unit) {
        case '%':
          // @ts-ignore
          return {type: ParsedValueType.Percent, value: value.value};
        case 'px':
          // @ts-ignore
          return {type: ParsedValueType.Px, value: value.value};
        case 'dip':
          // @ts-ignore
          return {type: ParsedValueType.Dip, value: value.value};
      }
    }
  }

  return {type: ParsedValueType.Auto, value: 0};
}


export abstract class ViewBase extends NSView implements AddChildFromBuilder {
  maxWidth: SizeType;
  maxHeight: SizeType;
  flex: number;
  flexDirection: FlexDirection;
  alignItems: FlexAlignItems;
  overflow: Overflow;
  position: Position;

  left: any; /* SizeType */
  top: any; /* SizeType */
  right: any; /* SizeType */
  bottom: any; /* SizeType */

  abstract _addChildFromBuilder(name: string, value: any): void;


  _addPropertyChangeHandler(view: NSView) {
    const style = view.style;
    style.on('flexChange', this._onPropertyChange, this);
    style.on('flexGrowChange', this._onPropertyChange, this);
    style.on('flexShrinkChange', this._onPropertyChange, this);
    style.on('flexWrapBeforeChange', this._onPropertyChange, this);
    style.on('alignSelfChange', this._onPropertyChange, this);
    style.on('orderChange', this._onPropertyChange, this);
  }

  _removePropertyChangeHandler(view: NSView) {
    const style = view.style;
    style.off('flexChange', this._onPropertyChange, this);
    style.off('flexGrowChange', this._onPropertyChange, this);
    style.off('flexShrinkChange', this._onPropertyChange, this);
    style.off('flexWrapBeforeChange', this._onPropertyChange, this);
    style.off('alignSelfChange', this._onPropertyChange, this);
    style.off('orderChange', this._onPropertyChange, this);
  }

  _onPropertyChange(data: PropertyChangeData) {
   /* switch (data.propertyName) {
      case 'flexGrowChange':
        break;
      case 'flexShrinkChange':
        break;
      case 'flexWrapBeforeChange':
        break;
      case 'alignSelfChange':
        break;
    }
    */
  }
}

export const maxWidthProperty = new CssProperty<Style, SizeType>({
  name: 'maxWidth',
  cssName: 'max-width',
  defaultValue: 'auto',
});

maxWidthProperty.register(Style);

export const maxHeightProperty = new CssProperty<Style, SizeType>({
  name: 'maxHeight',
  cssName: 'maxHeight',
  defaultValue: 'auto',
});

maxHeightProperty.register(Style);

export const flexProperty = new CssProperty<Style, number>({
  name: 'flex',
  cssName: 'flex',
  defaultValue: 1.0,
  valueConverter: (val) => Number(val),
});

flexProperty.register(Style);

export const flexDirectionProperty = new CssProperty<Style, FlexDirection>({
  name: 'flexDirection',
  cssName: 'flex-direction',
  defaultValue: FlexDirection.Row,
});

flexDirectionProperty.register(Style);


export const flexGrowProperty = new CssProperty<Style, number>({
  name: 'flexGrow',
  cssName: 'flex-grow',
  defaultValue: 0,
  valueConverter: (val) => Number(val),
});

flexGrowProperty.register(Style);


export const flexShrinkProperty = new CssProperty<Style, number>({
  name: 'flexShrink',
  cssName: 'flex-shrink',
  defaultValue: 1,
  valueConverter: (val) => Number(val),
});

flexShrinkProperty.register(Style);


export const flexBasisProperty = new CssProperty<Style, SizeType>({
  name: 'flexBasis',
  cssName: 'flex-basis',
  defaultValue: 'auto',
});

flexBasisProperty.register(Style);


export const alignContentProperty = new CssProperty<Style, FlexAlignContent>({
  name: 'alignContent',
  cssName: 'alignContent',
});

alignContentProperty.register(Style);


export const alignItemsProperty = new CssProperty<Style, FlexAlignItems>({
  name: 'alignItems',
  cssName: 'align-items',
  defaultValue: FlexAlignItems.Stretch,
});

alignItemsProperty.register(Style);


export const alignSelfProperty = new CssProperty<Style, FlexAlignSelf>({
  name: 'alignSelf',
  cssName: 'align-self',
  defaultValue: FlexAlignSelf.Auto,
});

alignSelfProperty.register(Style);

export const overflowProperty = new CssProperty<Style, Overflow>({
  name: 'overflow',
  cssName: 'overflow',
  defaultValue: Overflow.Visible,
});

overflowProperty.register(Style);


export const positionProperty = new CssProperty<Style, Position>({
  name: 'position',
  cssName: 'position',
  defaultValue: Position.Relative,
});

positionProperty.register(Style);


export const leftProperty = new CssProperty<Style, SizeType>({
  name: 'left',
  cssName: 'left'
});

leftProperty.register(Style);

export const topProperty = new CssProperty<Style, SizeType>({
  name: 'top',
  cssName: 'top'
});

topProperty.register(Style);


export const rightProperty = new CssProperty<Style, SizeType>({
  name: 'right',
  cssName: 'right'
});

rightProperty.register(Style);


export const bottomProperty = new CssProperty<Style, SizeType>({
  name: 'bottom',
  cssName: 'bottom'
});

bottomProperty.register(Style);

export const justifyContentProperty = new CssProperty<Style, FlexJustify>({
  name: 'justifyContent',
  cssName: 'justify-content',
  defaultValue: FlexJustify.FlexStart
});

justifyContentProperty.register(Style);

export const flexWrapProperty = new CssProperty<Style, FlexWrap>({
  name: 'flexWrap',
  cssName: 'flex-wrap',
  defaultValue: FlexWrap.NoWrap
});

flexWrapProperty.register(Style);


declare module "@nativescript/core/ui/styling/style" {
  interface Style {
    left: any;
    top: any;
    right: any;
    bottom: any;
    // @ts-ignore
    justifyContent: any;
    maxWidth: any;
    maxHeight: any;
    flex: number;
    overflow: Overflow;
    position: Position;
    flexBasis: any;
  }
}

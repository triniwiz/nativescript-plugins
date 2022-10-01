import {registerElement, RNSStyle} from 'react-nativescript';
import type { View as YogaLayout } from '..';
import {ViewAttributes, NativeScriptProps} from 'react-nativescript';
import {
  CoreTypes
} from '@nativescript/core';

export function registerYogaLayout(): void {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  registerElement('yoga', () => require('../').View);
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  registerElement('yogaText', () => require('../text').Text);
}

export interface YogaDistinctAttributes {
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  paddingBottom?: string | number | CoreTypes.LengthType;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  paddingLeft?: string | number | CoreTypes.LengthType;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  paddingRight?: string | number | CoreTypes.LengthType;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  paddingTop?: string | number | CoreTypes.LengthType;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  padding?: string | number | CoreTypes.LengthType;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  paddingVertical?: string | number | CoreTypes.LengthType;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  paddingHorizontal?: string | number | CoreTypes.LengthType;
  
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  marginTop?: string | number | CoreTypes.LengthType;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  marginRight?: string | number | CoreTypes.LengthType;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  marginBottom?: string | number | CoreTypes.LengthType;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  marginLeft?: string | number | CoreTypes.LengthType;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  margin?: string | number | CoreTypes.LengthType;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  marginHorizontal?: string | number | CoreTypes.LengthType;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  marginVertical?: string | number | CoreTypes.LengthType;
  
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  top?: string | number | CoreTypes.LengthType;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  right?: string | number | CoreTypes.LengthType;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  bottom?: string | number | CoreTypes.LengthType;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  left?: string | number | CoreTypes.LengthType;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  start?: string | number | CoreTypes.LengthType;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  end?: string | number | CoreTypes.LengthType;
  
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  maxHeight?: string | number | CoreTypes.LengthType;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  maxWidth?: string | number | CoreTypes.LengthType;
  
  alignItems?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline";
  overflow?: "visible" | "hidden" | "scroll";
  position?: "relative" | "absolute";
  alignSelf?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline" | "auto";
  flexGrow?: number;
  flexShrink?: number;
  
  /**
   * Number values are interpreted as display-independent pixels.
   */
  flexBasis?: number | CoreTypes.LengthType;
  flex?: number;
  flexDirection?: "row" | "column" | "column-reverse" | "row-reverse";
  /**
   * TODO: Change the implementation to accept a cross-platform "rtl" | "ltr" | "inherit" enum.
   * @platform iOS     YGDirection.RTL | YGDirection.LTR | YGDirection.Inherit
   * @platform android com.facebook.yoga.YogaDirection.RTL | com.facebook.yoga.YogaDirection.LTR | com.facebook.yoga.YogaDirection.INHERIT
   */
  direction?: any;
  alignContent?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline";
  
  flexWrap?: "no-wrap" | "wrap" | "wrap-reverse";
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-around" | "space-between" | "space-evenly";
}

export type YogaAttributes = ViewAttributes & YogaDistinctAttributes;

/**
 * NativeScript Core imposes its own values for various styles, across FlexboxLayout and other components.
 * In the case of a name clash, we'll take the YogaLayout ones as definitive.
 * This allows for stricter typings; for RNSStyle, we accept arbitrary strings (as it's easier than fixing the
 * Core typings). But for YogaLayout-specific properties, we can tighten things up and enforce enumerated strings.
 */
export type OptionalStyleAllowingStringWithFlexExceptions = Omit<RNSStyle, keyof YogaDistinctAttributes> & {
  [P in keyof YogaDistinctAttributes]?: YogaDistinctAttributes[P];
};

export interface YogaProps extends Omit<NativeScriptProps<YogaAttributes, YogaLayout>, "style"> {
  style?: OptionalStyleAllowingStringWithFlexExceptions;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/prefer-namespace-keyword, @typescript-eslint/no-namespace
  module JSX {
    interface IntrinsicElements {
      yoga: YogaProps;
      yogaText: import("./Text").RNTextProps;
    }
  }
}

declare module "react-nativescript" {
  /**
   * @see the augmentation of import("@nativescript/core").Style made by the plugin in ../common.ts.
   */
  interface RNSStyle {
    left?: YogaDistinctAttributes["left"];
    top?: YogaDistinctAttributes["top"];
    right?: YogaDistinctAttributes["right"];
    bottom?: YogaDistinctAttributes["bottom"];
    start?: YogaDistinctAttributes["start"];
    end?: YogaDistinctAttributes["end"];
    marginVertical?: YogaDistinctAttributes["marginVertical"];
    marginHorizontal?: YogaDistinctAttributes["marginHorizontal"];
    paddingHorizontal?: YogaDistinctAttributes["paddingHorizontal"];
    paddingVertical?: YogaDistinctAttributes["paddingVertical"];
    justifyContent?: YogaDistinctAttributes["justifyContent"];
    maxWidth?: YogaDistinctAttributes["maxWidth"];
    maxHeight?: YogaDistinctAttributes["maxHeight"];
    flex?: YogaDistinctAttributes["flex"];
    overflow?: YogaDistinctAttributes["overflow"];
    position?: YogaDistinctAttributes["position"];
    flexBasis?: YogaDistinctAttributes["flexBasis"];
    direction?: YogaDistinctAttributes["direction"];
  }
}

export { View } from "./View";
export { Text } from "./Text";
export { TextInput } from "./TextInput";
export { Button } from "./Button";
export type {  RNViewProps as ViewProps } from "./View";
export type {  RNTextProps as TextProps } from "./Text";
export type {  RNTextInputProps as TextInputProps } from "./TextInput";
export type {  RNButtonProps as ButtonProps } from "./Button";
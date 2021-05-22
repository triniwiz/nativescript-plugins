import {registerElement} from 'react-nativescript';
import type {View as YogaLayout} from '../';
import {ViewAttributes, NativeScriptProps} from 'react-nativescript';
import {
  LengthPercentUnit,
  LengthDipUnit,
  LengthPxUnit,
} from '@nativescript/core';

export function registerYogaLayout(): void {
  registerElement('yoga', () => require('../').View);
}

export { View, RNViewProps } from "./View";

interface YogaDistinctAttributes {
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  paddingBottom?: string | number | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  paddingLeft?: string | number | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  paddingRight?: string | number | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  paddingTop?: string | number | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  padding?: string | number | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  paddingVertical?: string | number | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  paddingHorizontal?: string | number | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
  
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  marginTop?: string | number | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  marginRight?: string | number | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  marginBottom?: string | number | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  marginLeft?: string | number | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  margin?: string | number | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  marginHorizontal?: string | number | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  marginVertical?: string | number | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
  
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  top?: string | number | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  right?: string | number | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  bottom?: string | number | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  left?: string | number | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  start?: string | number | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  end?: string | number | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
  
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  maxHeight?: string | number | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
  /**
   * Number values are interpreted as display-independent pixels. Will no-op if set to "auto".
   */
  maxWidth?: string | number | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
  
  alignItems?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline";
  overflow?: "visible" | "hidden" | "scroll";
  position?: "relative" | "absolute";
  alignSelf?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline" | "auto";
  flexGrow?: number;
  flexShrink?: number;
  
  /**
   * Number values are interpreted as display-independent pixels.
   */
  flexBasis?: number | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
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

declare global {
  module JSX {
    interface IntrinsicElements {
      yoga: NativeScriptProps<YogaAttributes, YogaLayout>;
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
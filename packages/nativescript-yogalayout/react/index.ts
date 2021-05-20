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

export type YogaAttributes = ViewAttributes & {
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
  alignContent?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline";

  flexWrap?: "no-wrap" | "wrap" | "wrap-reverse";
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-around" | "space-between" | "space-evenly";
};

declare global {
  module JSX {
    interface IntrinsicElements {
      yoga: NativeScriptProps<YogaAttributes, YogaLayout>;
    }
  }
}

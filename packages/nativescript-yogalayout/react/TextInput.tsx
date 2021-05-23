/// <reference path="./index.ts" />

import * as React from "react";
import { View } from "./View";
import type { RNOnlyTextStyles, RNOnlyTextProps } from "./Text";
import { nestTextChildren } from "./Text";
import { convertStyleRNToRNS, mapEventHandlersRNToRNS } from "./ReactNativeCompat";
import { TextField } from "@nativescript/core";
import { NativeScriptProps, RNSStyle, TextFieldAttributes } from "react-nativescript";

/**
 * @see https://facebook.github.io/react-native/docs/textinput.html#props
 * @see TextInputProps["style"] in @types/react-native
 */
export interface RNOnlyTextInputStyles extends RNOnlyTextStyles {}

/**
 * Note: Should in future extend YogaProps (and Yoga styles), but for now we implement it with TextField.
 * We'll need a dedicated TextInput component based on Yoga layout for the real deal.
 * 
 * Under-the-hood, I've implemented it as a TextField, so it's easiest just to extend TextFieldAttributes.
 * These props are filled in primarily for API compatibility with React Native's text component.
 * In any cases where the feature does not exist in NativeScript, we accept the prop but no-op.
 * 
 * There are many more RN-only props than this, but only these are used in RNTester, so we'll support just
 * these for now.
 */
export interface RNTextInputProps extends Omit<NativeScriptProps<TextFieldAttributes, TextField>, "style">, RNOnlyTextProps {
    onTextLayout?: (...args: any[]) => void,
    suppressHighlighting?: boolean,
    allowFontScaling?: boolean,
    multiline?: boolean,
    adjustsFontSizeToFit?: boolean,
    selectable?: boolean,
    ellipsizeMode?: "tail"|"middle"|"head"|"clip",
    numberOfLines?: number,

    style?: RNSStyle & RNOnlyTextStyles;
}

export function TextInput(props: RNTextInputProps){
    const {
        style,
        onPress,
        onTextLayout,

        /* Not supported in {N}? */
        multiline,
        suppressHighlighting,
        allowFontScaling,
        adjustsFontSizeToFit,
        selectable,
        ellipsizeMode,
        numberOfLines,

        children,
        ...otherProps
    } = props;

    /* Here's my very limited support for nesting children inside Text (which I don't like as a pattern anyway...) */
    if(React.Children.count(children) > 1){
        return (
            // RNTester seems to default to row direction in nested texts.
            <View flexDirection={'row'}>{nestTextChildren(children, { ...otherProps })}</View>
        );
    }

    const styleResolved = style ? convertStyleRNToRNS(style) as RNSStyle & RNOnlyTextStyles : void 0;

    return (
        <textField {...mapEventHandlersRNToRNS(otherProps)}  {...(styleResolved ? { style: styleResolved } : {})}>
            {children}
        </textField>
    );
};

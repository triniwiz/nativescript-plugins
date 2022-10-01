/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./index.ts" />

import * as React from "react";
import { RNOnlyViewStyles, View } from "./View";
import { convertStyleRNToRNS, mapEventHandlersRNToRNS } from "./ReactNativeCompat";
import { TextView } from "@nativescript/core";
import { NativeScriptProps, RNSStyle, TextViewAttributes } from "react-nativescript";

export interface RNOnlyTextProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onPress?: (...args: any[]) => void,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onTextLayout?: (...args: any[]) => void,
    suppressHighlighting?: boolean,
    allowFontScaling?: boolean,
    multiline?: boolean,
    adjustsFontSizeToFit?: boolean,
    selectable?: boolean,
    ellipsizeMode?: "tail"|"middle"|"head"|"clip",
    numberOfLines?: number,
}

/**
 * Note: Does NOT extend YogaProps, even in React Native. The idea is that it's to be used almost like a
 * text node, with all layout handled by the parent. So neither the style nor props inherit from yoga.
 * 
 * Under-the-hood, I've implemented it as a TextView, so it's easiest just to extend TextViewAttributes.
 * These props are filled in primarily for API compatibility with React Native's text component.
 * In any cases where the feature does not exist in NativeScript, we accept the prop but no-op.
 */
export interface RNTextProps extends Omit<NativeScriptProps<TextViewAttributes, TextView>, "style">, RNOnlyTextProps {
    style?: RNSStyle & RNOnlyTextStyles;
}

/**
 * @see https://facebook.github.io/react-native/docs/text.html#style
 * @see TextStyle in @types/react-native
 */
export interface RNOnlyTextStyles extends RNOnlyTextIOSStyles, RNOnlyTextAndroidStyles, RNOnlyViewStyles {
    textAlign?: "auto" | "initial" | "left" | "center" | "right" | "justify";
    textDecorationLine?: "none" | "underline" | "line-through" | "underline line-through";
    textDecorationStyle?: "solid" | "double" | "dashed" | "dotted";
    textDecorationColor?: string;

    textShadowOffset?: { width: number, height: number };
    textShadowRadius?: number;
    textShadowColor?: string;
}

/**
 * @see TextStyleIOS in @types/react-native
 */
export interface RNOnlyTextIOSStyles {
    fontVariant?: string[];
}
/**
 * @see TextStyleAndroid in @types/react-native
 */
export interface RNOnlyTextAndroidStyles {
    textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center';
    includeFontPadding?: boolean;
}

export function nestTextChildren(children: React.ReactNode, parentProps): React.ReactNode {
    return React.Children.map(children, function(child: React.ReactNode, i: number){
        if(typeof child === "string" || typeof child === "number"){
            // console.log(`[nestTextChildren] ReactText case`);
            // ReactText case.
            return (<Text>{child}</Text>);
        } else if(typeof child === "boolean" || !child){
            // console.log(`[nestTextChildren] falsy or boolean case`);
            return child;
        } else if(Array.isArray(child)){
            // console.log(`[nestTextChildren] array case`);
            // ReactFragment case.
            // FIXME: support
            return null;
        }

        // const { children, ...rest } = (child as React.ReactElement).props;
        // console.log(`[nestTextChildren] default (ReactElement) case, with props`, { ...rest });
        /* I'm assuming it's ReactElement at this point, but it could still be a ReactPortal | ReactFragment.
         * May break in such case. */
        // if((child as React.ReactElement).props){
        //     Object.assign({}, (child as React.ReactElement).props, { ...parentProps });
        // }
        return child;
    });
}
export function Text(props: RNTextProps){
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
            <View flexDirection="row">{nestTextChildren(children, { ...otherProps })}</View>
        );
    }

    const styleResolved = style ? convertStyleRNToRNS(style) as RNSStyle & RNOnlyTextStyles : void 0;

    return (
        <textView {...mapEventHandlersRNToRNS(otherProps)} {...(styleResolved ? { style: styleResolved } : {})}>
            {children}
        </textView>
    );
};

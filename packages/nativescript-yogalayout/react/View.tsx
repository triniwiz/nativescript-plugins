/// <reference path="./index.ts" />

import * as React from "react";
import type { YogaProps } from "./index";
import { Color } from "@nativescript/core";
import { FontWeight } from "@nativescript/core/ui/enums";

export function View(props: RNViewProps = {}){
    const { style, ...otherProps } = props;

    const styleResolved = style ? convertStyleRNToRNS(style) : void 0;

    return (
        <yoga flexDirection="column" {...mapEventHandlersRNToRNS(otherProps)} style={styleResolved} />
    );
}

/**
 * We accept these at the typings level just to enable API compatibility, but any unsupported keys or values will be treated as a no-op.
 */
 export interface RNOnlyStyles {
    tintColor?: string;
    placeholderColor?: string;
    
    textShadowOffset?: { width: number, height: number };
    textShadowRadius?: number;
    textShadowColor?: string;
    fontVariant?: string[];
    
    direction?: "inherit" | "ltr" | "rtl"; // Technically ios-only, according to @types/react-native
    textAlign?: "auto" | "initial" | "left" | "center" | "right" | "justify";
    textDecorationLine?: "none" | "underline" | "line-through" | "underline line-through";
    textDecorationStyle?: "solid" | "double" | "dashed" | "dotted";
    textDecorationColor?: string;
}

export interface RNViewProps extends YogaProps {
    style?: YogaProps["style"] & RNOnlyStyles;
}

export function mapEventHandlersRNToRNS(handlers: Record<string, any>): RNViewProps {
    return Object.keys(handlers).reduce((acc: Record<string, any>, name: string) => {
        const handler = handlers[name];
        const mappedName = mapEventHandlerNameRNToRNS(name);
        if(mappedName === null){
            delete handlers[name];
            return acc;
        }
        if(mappedName === name){
            return acc;
        }
        delete handlers[name];
        handlers[mappedName] = handler;
        return acc;
    }, handlers);
}

export function mapEventHandlerNameRNToRNS(name: string): string | null {
    switch(name){
        case "onPress":
            return "onTap";
        case "onTextLayout":
            // Not supported
            return null;
        default:
            return name;
    }
}

export function convertStyleRNToRNS(styles: RNViewProps["style"] | RNViewProps["style"][]): RNViewProps["style"] {
    const flattenedStyle: RNViewProps["style"] = flattenStyle(styles);

    /* Here we shallow-clone the flattened style to avoid any objects sharing the same instance of e.g. FontWeight and Color. */
    // const style: Partial<PermissiveStyle> = { ...flattenedStyle };

    return Object.keys(flattenedStyle).reduce((acc: RNViewProps["style"], name: string) => {
        const mapping = mapStyleRNToRNS(name, flattenedStyle[name]);
        delete flattenedStyle[name];
        if(mapping === null) return acc; // Explicitly not supported.

        Object.keys(mapping).forEach((key: string) => {
            flattenedStyle[key] = mapping[key];
        });
        return acc;
    }, flattenedStyle);
}

export function flattenStyle(styles: RNViewProps["style"] | RNViewProps["style"][]): RNViewProps["style"] {
    if(!Array.isArray(styles)) return styles;
    return Object.assign({}, ...styles);
}

export function mapStyleRNToRNS(name: string, value: string): Record<string, any>|null {
    switch(name){
        case "textShadowColor":
        case "textShadowRadius":
        case "textShadowOffset":
        case "fontVariant":
            return null;
        case "fontWeight":
            let fontWeight;
            switch(value){
                case "100":
                case "thin":
                    fontWeight = FontWeight.thin; // 100
                case "200":
                case "extraLight":
                    fontWeight = FontWeight.extraLight; // 200
                case "300":
                case "light":
                    fontWeight = FontWeight.light; // 300
                case "400":
                case "normal":
                    fontWeight = FontWeight.normal; // 400
                case "500":
                case "medium":
                    fontWeight = FontWeight.medium; // 500
                case "600":
                case "semiBold":
                    fontWeight = FontWeight.semiBold; // 600
                case "700":
                case "bold":
                    fontWeight = FontWeight.bold; // 700
                case "800":
                case "extraBold":
                    fontWeight = FontWeight.extraBold; // 800
                case "900":
                case "black":
                    fontWeight = FontWeight.black; // 900
                default:
                    fontWeight = FontWeight.normal; // I don't have the motivation to support in-between values.
            }
            return { [name]: fontWeight };
        case "textAlign": {
            if(value === "justify" || value === "auto"){
                // Not supported.
                return null;
            }
            return { "textAlignment": value };
        }
        case "textDecorationLine":
            return { "textDecoration": value };
        // NativeScript text decorations can't be coloured nor styled, as far as I understand.
        case "textDecorationStyle":
        case "textDecorationColor":
            return null;
        case "tintColor": // Supported only on Image component
        case "placeholderColor": // Not supported at all
            return null;
        case "color":
        case "backgroundColor":
        case "borderTopColor":
        case "borderRightColor":
        case "borderBottomColor":
        case "borderLeftColor":
        case "tabTextColor":
        case "tabBackgroundColor":
        case "selectedTabTextColor":
        case "androidSelectedTabHighlightColor":
        case "separatorColor":
        case "selectedBackgroundColor":
        case "androidStatusBarBackground": {
            /**
             * @see https://facebook.github.io/react-native/docs/colors
             */
            if(typeof value === "string" || (value as any) instanceof Color){
                return { [name]: value };
            }
            return null;
        }
        case "position":
        case "direction": // Beware: We don't have a cross-platform API for this yet; it relies upon Obj-C and iOS enums for now. React Native expects "inherit" | "ltr" | "rtl".
        case "width":
        case "height":
        case "marginLeft":
        case "marginTop":
        case "marginRight":
        case "marginBottom":
        case "borderWidth":
        case "borderTopWidth":
        case "borderRightWidth":
        case "borderBottomWidth":
        case "borderLeftWidth":
        case "borderRadius":
        case "borderTopLeftRadius":
        case "borderTopRightRadius":
        case "borderBottomRightRadius":
        case "borderBottomLeftRadius":
        case "minWidth":
        case "minHeight":
        case "paddingLeft":
        case "paddingTop":
        case "paddingRight":
        case "paddingBottom":
        case "paddingVertical":
        case "paddingHorizontal":
        case "top":
        case "left":
        case "right":
        case "bottom":
        case "padding":
        case "margin":
        case "borderColor":
        case "borderWidth":
            return { [name]: value };
        default:
            /* We'll see how this goes... */
            return { [name]: value };
    }
}

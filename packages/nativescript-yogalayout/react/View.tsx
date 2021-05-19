/// <reference path="./index.ts" />

import * as React from "react";
import { YogaAttributes } from "./index";
import type {View as YogaLayout} from '../';
import { Color, Length, PercentLength } from "@nativescript/core";
import { NativeScriptProps, RNSStyle } from "react-nativescript";
import { FontWeight } from "@nativescript/core/ui/enums";

export function View(props: RNViewProps = {}){
    const { style = {}, ...rest } = props;
    return (
        //@ts-ignore Everything will be fine
        <yoga flexDirection={"column"} {...mapEventHandlersRNToRNS(rest)} {...convertStyleRNToRNS(style)} />
    );
}

export function mapEventHandlersRNToRNS(handlers: Record<string, (...args: any[]) => void>): Record<string, (...args: any[]) => void> {
    return Object.keys(handlers).reduce((acc: Record<string, (...args: any[]) => void>, name: string) => {
        const handler = handlers[name];
        const mappedName = mapEventHandlerNameRNToRNS(name, handler);
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

export function mapEventHandlerNameRNToRNS(name: string, value: (...args: any[]) => void): string | null {
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
        case "position":
            return { [name]: value };
        // Not sure what this would map to in NS.
        /**
         * @see https://facebook.github.io/react-native/docs/layout-props#direction
         */
        case "direction":
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
        case "textAlign":
            return (value === "justify" || value === "auto") ? null : { "textAlignment": value }; // "auto" and "justify" not supported.
        case "textDecorationLine":
            return { "textDecoration": value };
        // NativeScript text decorations can't be coloured nor styled, as far as I understand.
        case "textDecorationStyle":
        case "textDecorationColor":
            return null;
        case "color":
        case "tintColor":
        case "placeholderColor":
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
        case "width":
        case "height":
        case "marginLeft":
        case "marginTop":
        case "marginRight":
        case "marginBottom":
            return { [name]: value };
        case "marginVertical":
        case "marginHorizontal":
            return name === "marginVertical" ? 
            {
                "marginTop": value,
                "marginBottom": value,
            } : 
            {
                "marginLeft": value,
                "marginRight": value,
            };
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

        case "top":
        case "left":
        case "right":
        case "bottom":
            return { [name]: value };
        /* strings allowed */
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

/**
 * see https://facebook.github.io/react-native/docs/height-and-width.html
 */
export function mapLengthRNToRNS(name: string, length: number|string, expectsPercent: boolean|null): Length|PercentLength {
    if(typeof length === "string"){
        if(length.slice(-1) === "%"){
            if(!expectsPercent){
                throw new Error(`Percent length not allowed for property '${name}'`);
            }
            return { value: parseFloat(length), unit: "%" };
        } else {
            if(expectsPercent){
                throw new Error(`Percent length expected for property '${name}'`);
            }
            return { value: parseFloat(length), unit: "dip" };
        }
    } else {
        return { value: length, unit: "dip" };
    }
    // return typeof length === "string" ? 
    //     { value: parseFloat(length), unit: length.slice(-1) === "%" ? "%" : "dip" } :
    //     { value: length, unit: "dip" };
}

export interface RNOnlyStyles {
    tintColor?: string;
    placeholderColor?: string;
    
    textShadowOffset?: { width: number, height: number };
    textShadowRadius?: number;
    textShadowColor?: string;
    fontVariant?: string[];
    
    position?: "absolute"|"relative";
    direction?: "inherit" | "ltr" | "rtl"; // Technically ios-only, according to @types/react-native
    marginVertical?: number;
    marginHorizontal?: number;
    textAlign?: "auto"|"initial" | "left" | "center" | "right" | "justify";
    textDecorationLine?: "none" | "underline" | "line-through" | "underline line-through";
    textDecorationStyle?: "solid" | "double" | "dashed" | "dotted";
    textDecorationColor?: string;
}

export interface RNViewProps extends NativeScriptProps<YogaAttributes, YogaLayout> {
    style?: RNSStyle & RNOnlyStyles;
}
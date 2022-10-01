// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./index.ts" />

import * as React from "react";
import type { YogaProps } from "./index";
import { convertStyleRNToRNS, mapEventHandlersRNToRNS } from "./ReactNativeCompat";

export function View(props: RNViewProps = {}){
    const { style, ...otherProps } = props;

    const styleResolved = style ? convertStyleRNToRNS(style) : void 0;

    return (
        <yoga flexDirection="column" flexShrink={0} alignContent="flex-start" {...mapEventHandlersRNToRNS(otherProps)}  {...(styleResolved ? { style: styleResolved } : {})} />
    );
}

/**
 * @see https://facebook.github.io/react-native/docs/view.html#style
 * @see https://github.com/facebook/react-native/blob/master/Libraries/Components/View/ViewStylePropTypes.js
 * @see ViewStyle
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RNOnlyViewStyles {
    // There are certainly some, but not used in RNTester.
}

// export interface RNOnlyStyles extends RNOnlyTextStyles, RNOnlyViewStyles {
//     // tintColor?: string; // No longer in @types/react-native.
    
//     // placeholderColor?: string; // I may have meant 'placeholderTextColor' in TextInputProps
// }

export interface RNViewProps extends YogaProps {
    /**
     * We accept these styles at the typings level just to enable API compatibility, but any
     * unsupported keys or values will be treated as a no-op.
     */
    style?: YogaProps["style"] & RNOnlyViewStyles;
}

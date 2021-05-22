import { Color } from "@nativescript/core";
// Conflicts with NativeScript 7 (which this monorepo uses), so we'll use the underlying values of the enum directly instead.
// import { FontWeight } from "@nativescript/core/ui/enums";

export function mapEventHandlersRNToRNS<T extends {}>(handlers: T): T {
    return Object.keys(handlers).reduce((acc: T, name: string) => {
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

export function convertStyleRNToRNS<T extends {}>(styles: T | T[]): T {
    const flattenedStyle: T = flattenStyle(styles);

    /* Here we shallow-clone the flattened style to avoid any objects sharing the same instance of e.g. FontWeight and Color. */
    // const style: Partial<PermissiveStyle> = { ...flattenedStyle };

    return Object.keys(flattenedStyle).reduce((acc: T, name: string) => {
        const mapping = mapStyleRNToRNS(name, flattenedStyle[name]);
        if(mapping === null){
            return acc; // Explicitly not supported.
        }

        Object.keys(mapping).forEach((key: string) => {
            acc[key] = mapping[key];
        });
        return acc;
    }, {} as T);
}

export function flattenStyle<T extends {}>(styles: T | T[]): T {
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
                    fontWeight = "100"; // FontWeight.thin; // 100
                case "200":
                case "extraLight":
                    fontWeight = "200"; // FontWeight.extraLight; // 200
                case "300":
                case "light":
                    fontWeight = "300"; // FontWeight.light; // 300
                case "400":
                case "normal":
                    fontWeight = "400"; // FontWeight.normal; // 400
                case "500":
                case "medium":
                    fontWeight = "500"; // FontWeight.medium; // 500
                case "600":
                case "semiBold":
                    fontWeight = "600"; // FontWeight.semiBold; // 600
                case "700":
                case "bold":
                    fontWeight = "700"; // FontWeight.bold; // 700
                case "800":
                case "extraBold":
                    fontWeight = "800"; // FontWeight.extraBold; // 800
                case "900":
                case "black":
                    fontWeight = "900"; // FontWeight.black; // 900
                default:
                    // Here we don't support in-between values, but I think they're disallowed in RN and CSS anyway.
                    fontWeight = "400"; // FontWeight.normal;
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

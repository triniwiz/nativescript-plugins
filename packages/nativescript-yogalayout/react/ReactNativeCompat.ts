/* eslint-disable no-duplicate-case */
import { Color, FontWeight } from '@nativescript/core';

import { OptionalStyleAllowingStringWithFlexExceptions } from './index';
import { RNSStyle } from 'react-nativescript';
import { FontWeightType } from '@nativescript/core/ui/styling/font-interfaces';

// I can't figure out the ideal generic typing for this, sorry!
export function mapEventHandlersRNToRNS<T extends Record<string, unknown>>(handlers: T): T {
	return Object.keys(handlers).reduce((acc: T, name: string) => {
		const handler = handlers[name];
		const mappedName = mapEventHandlerNameRNToRNS(name);
		if (mappedName === null) {
			delete handlers[name];
			return acc;
		}
		if (mappedName === name) {
			return acc;
		}
		delete handlers[name];

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore I can't figure out this typings issue, either :P
		handlers[mappedName] = handler;
		return acc;
	}, handlers);
}

export function mapEventHandlerNameRNToRNS(name: string): string | null {
	switch (name) {
		case 'onPress':
			return 'onTap';
		case 'onTextLayout':
			// Not supported
			return null;
		default:
			return name;
	}
}

export function convertStyleRNToRNS<T extends RNSStyle>(styles: T | T[]): OptionalStyleAllowingStringWithFlexExceptions {
	const flattenedStyle = flattenStyle(styles);

	/* Here we shallow-clone the flattened style to avoid any objects sharing the same instance of e.g. FontWeight and Color. */
	return Object.keys(flattenedStyle).reduce((acc: OptionalStyleAllowingStringWithFlexExceptions, name: string) => {
		const mapping = mapStyleRNToRNS(name, flattenedStyle[name]);
		if (mapping === null) {
			return acc; // Explicitly not supported.
		}

		Object.keys(mapping).forEach((key: string) => {
			acc[key] = mapping[key];
		});
		return acc;
	}, {});
}

export function flattenStyle<T extends RNSStyle>(styles: T | T[]): T {
	if (!Array.isArray(styles)) return styles;
	return Object.assign({}, ...styles);
}

export function mapStyleRNToRNS(name: string, value: unknown): Record<string, any> | null {
	switch (name) {
		case 'textShadowColor':
		case 'textShadowRadius':
		case 'textShadowOffset':
		case 'fontVariant':
			return null;
		case 'fontWeight': {
			/**
			 * FIXME: Migrate to FontWeight enum once monorepo is using NativeScript 8 for this package.
			 */
			let fontWeight: FontWeightType;
			switch (value) {
				case '100':
				case 'thin':
					fontWeight = FontWeight.THIN; // 100
					break;
				case '200':
				case 'extraLight':
					fontWeight = FontWeight.EXTRA_LIGHT; // 200
					break;
				case '300':
				case 'light':
					fontWeight = FontWeight.LIGHT; // 300
					break;
				case '400':
				case 'normal':
					fontWeight = FontWeight.NORMAL; // 400
					break;
				case '500':
				case 'medium':
					fontWeight = FontWeight.MEDIUM; // 500
					break;
				case '600':
				case 'semiBold':
					fontWeight = FontWeight.SEMI_BOLD; // 600
					break;
				case '700':
				case 'bold':
					fontWeight = FontWeight.BOLD; // 700
					break;
				case '800':
				case 'extraBold':
					fontWeight = FontWeight.EXTRA_BOLD; // 800
					break;
				case '900':
				case 'black':
					fontWeight = FontWeight.BLACK; // 900
					break;
				default:
					// Here we don't support in-between values, but I think they're disallowed in RN and CSS anyway.
					fontWeight = FontWeight.NORMAL;
					break;
			}
			return { [name]: fontWeight };
		}
		case 'textAlign': {
			if (value === 'justify' || value === 'auto') {
				// Not supported.
				return null;
			}
			return { textAlignment: value };
		}
		case 'textDecorationLine':
			return { textDecoration: value };
		// NativeScript text decorations can't be coloured nor styled, as far as I understand.
		case 'textDecorationStyle':
		case 'textDecorationColor':
			return null;
		case 'tintColor': // Supported only on Image component
		case 'placeholderColor': // Not supported at all
			return null;
		case 'color':
		case 'backgroundColor':
		case 'borderTopColor':
		case 'borderRightColor':
		case 'borderBottomColor':
		case 'borderLeftColor':
		case 'tabTextColor':
		case 'tabBackgroundColor':
		case 'selectedTabTextColor':
		case 'androidSelectedTabHighlightColor':
		case 'separatorColor':
		case 'selectedBackgroundColor':
		case 'androidStatusBarBackground': {
			/**
			 * @see https://facebook.github.io/react-native/docs/colors
			 */
			if (typeof value === 'string' || (value as unknown) instanceof Color) {
				return { [name]: value };
			}
			return null;
		}
		case 'position':
		case 'direction': // Beware: We don't have a cross-platform API for this yet; it relies upon Obj-C and iOS enums for now. React Native expects "inherit" | "ltr" | "rtl".
		case 'width':
		case 'height':
		case 'marginLeft':
		case 'marginTop':
		case 'marginRight':
		case 'marginBottom':
		case 'borderWidth':
		case 'borderTopWidth':
		case 'borderRightWidth':
		case 'borderBottomWidth':
		case 'borderLeftWidth':
		case 'borderRadius':
		case 'borderTopLeftRadius':
		case 'borderTopRightRadius':
		case 'borderBottomRightRadius':
		case 'borderBottomLeftRadius':
		case 'minWidth':
		case 'minHeight':
		case 'paddingLeft':
		case 'paddingTop':
		case 'paddingRight':
		case 'paddingBottom':
		case 'paddingVertical':
		case 'paddingHorizontal':
		case 'top':
		case 'left':
		case 'right':
		case 'bottom':
		case 'padding':
		case 'margin':
		case 'borderColor':
		case 'borderWidth':
			return { [name]: value };
		default:
			/* We'll see how this goes... */
			return { [name]: value };
	}
}

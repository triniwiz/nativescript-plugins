// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./index.ts" />

import * as React from 'react';
import { mapEventHandlersRNToRNS } from './ReactNativeCompat';
import { Button as NSButton } from '@nativescript/core';
import { ButtonAttributes, NativeScriptProps } from 'react-nativescript';
import { RNOnlyTextProps } from './Text';

/**
 * Note: Does NOT extend YogaProps, even in React Native. The idea is that it's to be used almost like a
 * text node, with all layout handled by the parent. It also does not support 'style' in React Native.
 *
 * Under-the-hood, I've implemented it as a TextView, so it's easiest just to extend TextViewAttributes.
 * These props are filled in primarily for API compatibility with React Native's text component.
 * In any cases where the feature does not exist in NativeScript, we accept the prop but no-op.
 */
export interface RNButtonProps extends Omit<NativeScriptProps<ButtonAttributes, NSButton>, 'style'>, RNOnlyTextProps {
	title: string;
}

export function Button(props: RNButtonProps) {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { onPress, title, ...otherProps } = props;

	//making ts happy :D
	return <button color="black" text={title} {...mapEventHandlersRNToRNS(otherProps as any)} />;
}

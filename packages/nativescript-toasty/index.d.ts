import { Color, Length } from '@nativescript/core';

export declare class Toasty {
	constructor(opts: ToastyOptions);

	position: ToastPosition;
	duration: ToastDuration;
	textColor: Color | string;
	backgroundColor: Color | string;
	yAxisOffset?: Length | number;
	xAxisOffset?: Length | number;
	readonly width: number;
	readonly height: number;

	/**
	 * Shows the toast.
	 */
	show(): void;

	/**
	 * Hide/Cancel the toast.
	 */
	cancel(): void;

	/**
	 * Sets the position of the toast.
	 * @param value [ToastPosition] - Position of toast.
	 */
	setToastPosition(value: ToastPosition): this;

	/**
	 * Sets the duration of the toast.
	 * @param value [ToastDuration] - Duration of toast.
	 */
	setToastDuration(value: ToastDuration): this;

	/**
	 * Set the text color of the toast.
	 * @param value [Color | string] - Color of the string message.
	 */
	setTextColor(value: Color | string): this;

	/**
	 * Set the background color of the toast.
	 * @param value [Color |  string] - Color of the background.
	 * On Android this currently removes the default Toast rounded borders.
	 */
	setBackgroundColor(value: Color | string): this;
}

export enum ToastDuration {
	'SHORT' = 'short',
	'LONG' = 'long',
}

export enum ToastPosition {
	'BOTTOM' = 'bottom',
	'BOTTOM_LEFT' = 'bottomLeft',
	'BOTTOM_RIGHT' = 'bottomRight',
	'CENTER' = 'center',
	'CENTER_LEFT' = 'centerLeft',
	'CENTER_RIGHT' = 'centerRight',
	'TOP' = 'top',
	'TOP_LEFT' = 'topLeft',
	'TOP_RIGHT' = 'topRight',
}

export interface ToastyOptions {
	/**
	 * Message text of the Toast.
	 */
	text: string;

	/**
	 * Duration to show the Toast.
	 */
	duration?: ToastDuration;

	/**
	 * Position of the Toast.
	 */
	position?: ToastPosition;

	/**
	 * Text color of the Toast message.
	 */
	textColor?: Color | string;

	/**
	 * Background Color of the Toast.
	 */
	backgroundColor?: Color | string;

	/**
	 *  Y Position
	 */
	yAxisOffset?: Length | number;
	/**
	 *  X Position
	 */
	xAxisOffset?: Length | number;

	/**
	 *  Tap toast to dismiss
	 */
	tapToDismiss?: boolean;

	/**
	 * The native iOS/Android view to anchor the Toast to.
	 */
	anchorView?: any;

	/**
	 * Android specific configuration options.
	 */
	android?: {
		/**
		 *   Called when the toast is shown avaiable on API 30+
		 */
		onShown?: () => void;
		/**
		 *   Called when the toast is hidden avaiable on API 30+
		 */
		onHidden?: () => void;
	};

	/**
	 * iOS Specific configuration options.
	 */
	ios?: {
		/**
		 * The number of lines to allow for the toast message.
		 */
		messageNumberOfLines?: number;

		/**
		 * The corner radius of the Toast.
		 */
		cornerRadius?: number;

		/**
		 * True to display a shadow for the Toast.
		 */
		displayShadow?: boolean;

		/**
		 * The color of the shadow. Only visible if `displayShadow` is true.
		 */
		shadowColor?: Color | string;
	};
}

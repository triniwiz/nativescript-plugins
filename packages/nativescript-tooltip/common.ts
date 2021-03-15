export interface ToolTipConfig {
	showArrow?: boolean;
	position?: ToolTipPosition;
	text: string;
	textSize?: number;
	duration?: number;
	width?: number;
	backgroundColor?: string;
	textColor?: string;
	dismissOnTapOutside?: boolean;
	dismissOnTap?: boolean;
	padding?: number;
	arrowSize?: number;
	radius?: number;
	onShow?: () => void;
	onClick?: () => void;
	onDismiss?: () => void;
}
export type ToolTipPosition = 'left' | 'up' | 'right' | 'down' | 'top' | 'bottom';

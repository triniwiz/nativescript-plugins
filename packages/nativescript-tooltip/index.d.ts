export * from './common';

import { Color } from '@nativescript/core';
import { ToolTipConfig } from './common';
export class ToolTip {
	constructor(view: any, config: ToolTipConfig);
	show(): void;
	hide();
}

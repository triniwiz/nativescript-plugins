import { PopupOptions } from './common';

export * from './common';

export declare class Popup {
    constructor(options?: PopupOptions);
	showPopup(source: any, view: any): Promise<boolean>;
	hidePopup(data?: any): void;
}

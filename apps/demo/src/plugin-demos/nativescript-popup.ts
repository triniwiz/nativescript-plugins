import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptPopup } from '@demo/shared';
import {} from '@triniwiz/nativescript-popup';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptPopup {}

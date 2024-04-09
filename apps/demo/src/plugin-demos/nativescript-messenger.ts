import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptMessenger } from '@demo/shared';
import { } from '@triniwiz/nativescript-messenger';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptMessenger {
	
}

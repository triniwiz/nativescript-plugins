import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptAppwrite } from '@demo/shared';
import { } from '@triniwiz/nativescript-appwrite';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptAppwrite {
	
}

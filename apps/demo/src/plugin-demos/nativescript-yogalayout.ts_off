import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptYogalayout } from '@demo/shared';
import {} from '@triniwiz/nativescript-yogalayout';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel(page);
}

export class DemoModel extends DemoSharedNativescriptYogalayout {}

import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptNestedScrollview } from '@demo/shared';
import {} from '@triniwiz/nativescript-nested-scrollview';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptNestedScrollview {}

import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptFancyListView } from '@demo/shared';
import {} from '@triniwiz/nativescript-fancy-list-view';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptFancyListView {}

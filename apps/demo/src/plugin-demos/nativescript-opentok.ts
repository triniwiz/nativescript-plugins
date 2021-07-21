import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptOpentok } from '@demo/shared';
import {} from '@triniwiz/nativescript-opentok';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptOpentok {}

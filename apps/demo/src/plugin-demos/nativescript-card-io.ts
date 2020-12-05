import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptCardIo } from '@demo/shared';
import {} from '@triniwiz/nativescript-card-io';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptCardIo {}

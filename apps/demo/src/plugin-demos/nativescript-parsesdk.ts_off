import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptParsesdk } from '@demo/shared';
import {} from '@triniwiz/nativescript-parsesdk';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptParsesdk {}

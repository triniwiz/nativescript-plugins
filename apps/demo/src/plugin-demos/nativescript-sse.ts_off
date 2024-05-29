import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptSse } from '@demo/shared';
import {} from '@triniwiz/nativescript-sse';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptSse {}

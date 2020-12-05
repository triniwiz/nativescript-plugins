import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptTwitter } from '@demo/shared';
import {} from '@triniwiz/nativescript-twitter';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptTwitter {}

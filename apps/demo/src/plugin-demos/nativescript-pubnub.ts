import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptPubnub } from '@demo/shared';
import {} from '@triniwiz/nativescript-pubnub';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptPubnub {}

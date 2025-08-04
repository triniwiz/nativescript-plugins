import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptKlaviyoSdk } from '@demo/shared';
import { } from '@triniwiz/nativescript-klaviyo-sdk';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptKlaviyoSdk {
	
}

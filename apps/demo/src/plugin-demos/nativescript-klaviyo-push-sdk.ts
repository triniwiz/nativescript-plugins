import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptKlaviyoPushSdk } from '@demo/shared';
import { } from '@triniwiz/nativescript-klaviyo-push-sdk';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptKlaviyoPushSdk {
	
}

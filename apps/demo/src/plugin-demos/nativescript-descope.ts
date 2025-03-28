import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptDescope } from '@demo/shared';
import {} from '@triniwiz/nativescript-descope';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptDescope {}

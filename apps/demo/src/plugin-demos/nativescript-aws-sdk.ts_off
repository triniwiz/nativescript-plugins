import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptAwsSdk } from '@demo/shared';
import {} from '@triniwiz/nativescript-aws-sdk';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptAwsSdk {}

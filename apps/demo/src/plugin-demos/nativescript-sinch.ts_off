import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptSinch } from '@demo/shared';
import {} from '@triniwiz/nativescript-sinch';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptSinch {}

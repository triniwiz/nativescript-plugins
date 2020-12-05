import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptImageoptimize } from '@demo/shared';
import {} from '@triniwiz/nativescript-imageoptimize';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptImageoptimize {}

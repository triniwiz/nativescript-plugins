import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptAccordion } from '@demo/shared';
import {} from '@triniwiz/nativescript-accordion';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptAccordion {}

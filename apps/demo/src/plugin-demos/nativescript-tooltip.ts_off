import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptTooltip } from '@demo/shared';
import {} from '@triniwiz/nativescript-tooltip';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptTooltip {}

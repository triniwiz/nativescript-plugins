import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptRadarIo } from '@demo/shared';
import {} from '@triniwiz/nativescript-radar-io';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptRadarIo {}

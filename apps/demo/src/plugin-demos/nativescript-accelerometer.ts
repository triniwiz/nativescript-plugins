import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptAccelerometer } from '@demo/shared';
import {} from '@triniwiz/nativescript-accelerometer';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptAccelerometer {}

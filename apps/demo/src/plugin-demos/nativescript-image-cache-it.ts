import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptImageCacheIt } from '@demo/shared';
import {} from '@triniwiz/nativescript-image-cache-it';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptImageCacheIt {}

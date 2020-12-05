import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptImageZoom } from '@demo/shared';
import {} from '@triniwiz/nativescript-image-zoom';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptImageZoom {}

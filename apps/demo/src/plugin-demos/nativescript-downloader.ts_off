import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptDownloader } from '@demo/shared';
import {} from '@triniwiz/nativescript-downloader';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptDownloader {}

import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptYoutubeplayer } from '@demo/shared';
import {} from '@triniwiz/nativescript-youtubeplayer';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptYoutubeplayer {}

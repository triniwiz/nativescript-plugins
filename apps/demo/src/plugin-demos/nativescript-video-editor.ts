import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptVideoEditor } from '@demo/shared';
import {} from '@triniwiz/nativescript-video-editor';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptVideoEditor {}

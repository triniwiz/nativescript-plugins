import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptVideorecorder } from '@demo/shared';
import {} from '@triniwiz/nativescript-videorecorder';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptVideorecorder {}

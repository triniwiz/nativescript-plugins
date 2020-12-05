import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptSocketio } from '@demo/shared';
import {} from '@triniwiz/nativescript-socketio';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptSocketio {}

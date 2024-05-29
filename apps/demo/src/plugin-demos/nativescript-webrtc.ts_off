import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptWebrtc } from '@demo/shared';
import {} from '@triniwiz/nativescript-webrtc';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptWebrtc {}

import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptPusherBeams } from '@demo/shared';
import {} from '@triniwiz/nativescript-pusher-beams';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptPusherBeams {}

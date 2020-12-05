import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptPusherChannels } from '@demo/shared';
import {} from '@triniwiz/nativescript-pusher-channels';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptPusherChannels {}

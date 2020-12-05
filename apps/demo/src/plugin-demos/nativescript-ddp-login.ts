import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptDdpLogin } from '@demo/shared';
import {} from '@triniwiz/nativescript-ddp-login';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptDdpLogin {}

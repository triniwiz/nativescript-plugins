import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptFancyCamera } from '@demo/shared';
import {} from '@triniwiz/nativescript-fancy-camera';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptFancyCamera {}

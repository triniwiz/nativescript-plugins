import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptSplashscreen } from '@demo/shared';
import {} from '@triniwiz/nativescript-splashscreen';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptSplashscreen {}

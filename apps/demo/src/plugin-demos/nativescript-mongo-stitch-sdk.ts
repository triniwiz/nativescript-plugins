import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptMongoStitchSdk } from '@demo/shared';
import {} from '@triniwiz/nativescript-mongo-stitch-sdk';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptMongoStitchSdk {}

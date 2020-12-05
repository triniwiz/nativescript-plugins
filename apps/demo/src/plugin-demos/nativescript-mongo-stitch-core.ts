import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptMongoStitchCore } from '@demo/shared';
import {} from '@triniwiz/nativescript-mongo-stitch-core';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptMongoStitchCore {}

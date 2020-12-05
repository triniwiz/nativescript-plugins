import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptMongoStitchServicesMongodbRemote } from '@demo/shared';
import {} from '@triniwiz/nativescript-mongo-stitch-services-mongodb-remote';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptMongoStitchServicesMongodbRemote {}

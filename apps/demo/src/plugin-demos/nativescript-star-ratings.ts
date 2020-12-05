import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptStarRatings } from '@demo/shared';
import {} from '@triniwiz/nativescript-star-ratings';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptStarRatings {}

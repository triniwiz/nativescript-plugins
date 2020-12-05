import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptFfmpeg } from '@demo/shared';
import {} from '@triniwiz/nativescript-ffmpeg';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptFfmpeg {}

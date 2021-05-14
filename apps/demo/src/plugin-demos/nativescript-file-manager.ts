import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptFileManager } from '@demo/shared';
import {} from '@triniwiz/nativescript-file-manager';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptFileManager {}

import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptAutocomplete } from '@demo/shared';
import {} from '@triniwiz/nativescript-autocomplete';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptAutocomplete {}

import { EventData, Page, Frame } from '@nativescript/core';
import { DemoSharedNativescriptCouchbase } from '@demo/shared';
let page;

export function navigatingTo(args: EventData) {
	page = <Page>args.object;
	page.bindingContext = new DemoModel();

	page.getViewById('input').on('textChange', (args: any) => {
		page.bindingContext.set('input', args.object.text);
	});
}

export function pageLoaded(args: EventData) {}

export function addNew(args) {
	page.bindingContext.addItem();
	const input = page.getViewById('input') as any;
	if (input) {
		input.text = '';
	}
}

export function addLargeItem(args) {
	page.bindingContext.addLargeItem();
}

export function nukeIt(args) {
	page.bindingContext.nukeIt();
}

export function goToSearch(args) {
	Frame.topmost().navigate('~/plugin-demos/extras/nativescript-couchbase-search/nativescript-couchbase-search');
}

export class DemoModel extends DemoSharedNativescriptCouchbase {}

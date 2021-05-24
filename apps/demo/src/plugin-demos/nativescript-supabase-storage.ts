import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptSupabaseStorage } from '@demo/shared';
import {} from '@triniwiz/nativescript-supabase-storage';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptSupabaseStorage {}

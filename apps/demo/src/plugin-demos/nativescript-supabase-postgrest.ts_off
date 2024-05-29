import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptSupabasePostgrest } from '@demo/shared';
import {} from '@triniwiz/nativescript-supabase-postgrest';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptSupabasePostgrest {}

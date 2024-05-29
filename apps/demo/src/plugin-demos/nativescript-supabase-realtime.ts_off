import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptSupabaseRealtime } from '@demo/shared';
import {} from '@triniwiz/nativescript-supabase-realtime';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptSupabaseRealtime {}

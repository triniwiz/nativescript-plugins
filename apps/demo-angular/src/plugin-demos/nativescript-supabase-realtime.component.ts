import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptSupabaseRealtime } from '@demo/shared';
import {} from '@triniwiz/nativescript-supabase-realtime';

@Component({
	selector: 'demo-nativescript-supabase-realtime',
	templateUrl: 'nativescript-supabase-realtime.component.html',
})
export class NativescriptSupabaseRealtimeComponent {
	demoShared: DemoSharedNativescriptSupabaseRealtime;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptSupabaseRealtime();
	}
}

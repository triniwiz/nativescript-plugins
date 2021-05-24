import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptSupabasePostgrest } from '@demo/shared';


@Component({
	selector: 'demo-nativescript-supabase-postgrest',
	templateUrl: 'nativescript-supabase-postgrest.component.html',
})
export class NativescriptSupabasePostgrestComponent {
	demoShared: DemoSharedNativescriptSupabasePostgrest;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptSupabasePostgrest();
	}
}

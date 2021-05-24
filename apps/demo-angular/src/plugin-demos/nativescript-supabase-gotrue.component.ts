import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptSupabaseGotrue } from '@demo/shared';


@Component({
	selector: 'demo-nativescript-supabase-gotrue',
	templateUrl: 'nativescript-supabase-gotrue.component.html',
})
export class NativescriptSupabaseGotrueComponent {
	demoShared: DemoSharedNativescriptSupabaseGotrue;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptSupabaseGotrue();
	}
}

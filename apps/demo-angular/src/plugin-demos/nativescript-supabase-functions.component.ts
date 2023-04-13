import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptSupabaseFunctions } from '@demo/shared';
import {} from '@triniwiz/nativescript-supabase-functions';

@Component({
	selector: 'demo-nativescript-supabase-functions',
	templateUrl: 'nativescript-supabase-functions.component.html',
})
export class NativescriptSupabaseFunctionsComponent {
	demoShared: DemoSharedNativescriptSupabaseFunctions;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptSupabaseFunctions();
	}
}

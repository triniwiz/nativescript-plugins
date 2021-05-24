import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptSupabaseStorage } from '@demo/shared';


@Component({
	selector: 'demo-nativescript-supabase-storage',
	templateUrl: 'nativescript-supabase-storage.component.html',
})
export class NativescriptSupabaseStorageComponent {
	demoShared: DemoSharedNativescriptSupabaseStorage;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptSupabaseStorage();
	}
}

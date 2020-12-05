import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptCouchbase } from '@demo/shared';
import {} from '@triniwiz/nativescript-couchbase';

@Component({
	selector: 'demo-nativescript-couchbase',
	templateUrl: 'nativescript-couchbase.component.html',
})
export class NativescriptCouchbaseComponent {
	demoShared: DemoSharedNativescriptCouchbase;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptCouchbase();
	}
}

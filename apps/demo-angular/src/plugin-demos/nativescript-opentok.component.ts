import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptOpentok } from '@demo/shared';
import {} from '@triniwiz/nativescript-opentok';

@Component({
	selector: 'demo-nativescript-opentok',
	templateUrl: 'nativescript-opentok.component.html',
})
export class NativescriptOpentokComponent {
	demoShared: DemoSharedNativescriptOpentok;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptOpentok();
	}
}

import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptPubnub } from '@demo/shared';
import {} from '@triniwiz/nativescript-pubnub';

@Component({
	selector: 'demo-nativescript-pubnub',
	templateUrl: 'nativescript-pubnub.component.html',
})
export class NativescriptPubnubComponent {
	demoShared: DemoSharedNativescriptPubnub;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptPubnub();
	}
}

import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptMongoStitchSdk } from '@demo/shared';
import {} from '@triniwiz/nativescript-mongo-stitch-sdk';

@Component({
	selector: 'demo-nativescript-mongo-stitch-sdk',
	templateUrl: 'nativescript-mongo-stitch-sdk.component.html',
})
export class NativescriptMongoStitchSdkComponent {
	demoShared: DemoSharedNativescriptMongoStitchSdk;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptMongoStitchSdk();
	}
}

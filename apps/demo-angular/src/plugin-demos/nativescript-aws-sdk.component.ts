import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptAwsSdk } from '@demo/shared';
import {} from '@triniwiz/nativescript-aws-sdk';

@Component({
	selector: 'demo-nativescript-aws-sdk',
	templateUrl: 'nativescript-aws-sdk.component.html',
})
export class NativescriptAwsSdkComponent {
	demoShared: DemoSharedNativescriptAwsSdk;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptAwsSdk();
	}
}

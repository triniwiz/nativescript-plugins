import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptAwsSdkS3 } from '@demo/shared';
import {} from '@triniwiz/nativescript-aws-sdk-s3';

@Component({
	selector: 'demo-nativescript-aws-sdk-s3',
	templateUrl: 'nativescript-aws-sdk-s3.component.html',
})
export class NativescriptAwsSdkS3Component {
	demoShared: DemoSharedNativescriptAwsSdkS3;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptAwsSdkS3();
	}
}

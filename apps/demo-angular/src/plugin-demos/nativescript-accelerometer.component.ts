import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptAccelerometer } from '@demo/shared';
import {} from '@triniwiz/nativescript-accelerometer';

@Component({
	selector: 'demo-nativescript-accelerometer',
	templateUrl: 'nativescript-accelerometer.component.html',
})
export class NativescriptAccelerometerComponent {
	demoShared: DemoSharedNativescriptAccelerometer;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptAccelerometer();
	}
}

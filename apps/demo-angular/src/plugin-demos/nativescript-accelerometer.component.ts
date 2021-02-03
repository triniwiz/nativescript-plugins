import { Component, NgZone, OnInit, OnDestroy } from '@angular/core';
import { DemoSharedNativescriptAccelerometer } from '@demo/shared';
import { AccelerometerData } from '@triniwiz/nativescript-accelerometer';
import { Observable, BehaviorSubject } from "rxjs";

@Component({
	selector: 'demo-nativescript-accelerometer',
	templateUrl: 'nativescript-accelerometer.component.html',
})
export class NativescriptAccelerometerComponent implements OnInit, OnDestroy {
	demoShared: DemoSharedNativescriptAccelerometer;

	data$ = new BehaviorSubject({ x: 0, y: 0, z: 0 });

	constructor(private _ngZone: NgZone) { }

	ngOnDestroy(): void {
		this.demoShared.destroy();
	}

	ngOnInit() {
		console.log("ngOnInit demo-nativescript-accelerometer")
		this.demoShared = new DemoSharedNativescriptAccelerometer();

		this.demoShared.start((data) => {
			// console.dir(data);
			this.data$.next(data);
		});
	}

	toggleUpdates() {
		this.demoShared.toggleUpdates();
	}
}

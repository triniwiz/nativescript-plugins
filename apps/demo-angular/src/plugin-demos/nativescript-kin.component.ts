import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptKin } from '@demo/shared';

@Component({
	selector: 'demo-nativescript-kin',
	templateUrl: 'nativescript-kin.component.html',
})
export class NativescriptKinComponent {
	demoShared: DemoSharedNativescriptKin;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptKin();
	}
}

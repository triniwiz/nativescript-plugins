import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptImageoptimize } from '@demo/shared';
import {} from '@triniwiz/nativescript-imageoptimize';

@Component({
	selector: 'demo-nativescript-imageoptimize',
	templateUrl: 'nativescript-imageoptimize.component.html',
})
export class NativescriptImageoptimizeComponent {
	demoShared: DemoSharedNativescriptImageoptimize;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptImageoptimize();
	}
}

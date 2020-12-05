import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptRadarIo } from '@demo/shared';
import {} from '@triniwiz/nativescript-radar-io';

@Component({
	selector: 'demo-nativescript-radar-io',
	templateUrl: 'nativescript-radar-io.component.html',
})
export class NativescriptRadarIoComponent {
	demoShared: DemoSharedNativescriptRadarIo;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptRadarIo();
	}
}

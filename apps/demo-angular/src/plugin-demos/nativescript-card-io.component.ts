import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptCardIo } from '@demo/shared';
import {} from '@triniwiz/nativescript-card-io';

@Component({
	selector: 'demo-nativescript-card-io',
	templateUrl: 'nativescript-card-io.component.html',
})
export class NativescriptCardIoComponent {
	demoShared: DemoSharedNativescriptCardIo;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptCardIo();
	}
}

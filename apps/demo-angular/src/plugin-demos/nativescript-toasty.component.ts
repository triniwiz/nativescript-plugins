import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptToasty } from '@demo/shared';
import {} from '@triniwiz/nativescript-toasty';

@Component({
	selector: 'demo-nativescript-toasty',
	templateUrl: 'nativescript-toasty.component.html',
})
export class NativescriptToastyComponent {
	demoShared: DemoSharedNativescriptToasty;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptToasty();
	}
}

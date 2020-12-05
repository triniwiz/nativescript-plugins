import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptHere } from '@demo/shared';
import {} from '@triniwiz/nativescript-here';

@Component({
	selector: 'demo-nativescript-here',
	templateUrl: 'nativescript-here.component.html',
})
export class NativescriptHereComponent {
	demoShared: DemoSharedNativescriptHere;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptHere();
	}
}

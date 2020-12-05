import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptSinch } from '@demo/shared';
import {} from '@triniwiz/nativescript-sinch';

@Component({
	selector: 'demo-nativescript-sinch',
	templateUrl: 'nativescript-sinch.component.html',
})
export class NativescriptSinchComponent {
	demoShared: DemoSharedNativescriptSinch;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptSinch();
	}
}

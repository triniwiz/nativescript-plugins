import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptDescope } from '@demo/shared';
import {} from '@triniwiz/nativescript-descope';

@Component({
	selector: 'demo-nativescript-descope',
	templateUrl: 'nativescript-descope.component.html',
})
export class NativescriptDescopeComponent {
	demoShared: DemoSharedNativescriptDescope;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptDescope();
	}
}

import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptParsesdk } from '@demo/shared';
import {} from '@triniwiz/nativescript-parsesdk';

@Component({
	selector: 'demo-nativescript-parsesdk',
	templateUrl: 'nativescript-parsesdk.component.html',
})
export class NativescriptParsesdkComponent {
	demoShared: DemoSharedNativescriptParsesdk;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptParsesdk();
	}
}

import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptPopup } from '@demo/shared';
import {} from '@triniwiz/nativescript-popup';

@Component({
	selector: 'demo-nativescript-popup',
	templateUrl: 'nativescript-popup.component.html',
})
export class NativescriptPopupComponent {
	demoShared: DemoSharedNativescriptPopup;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptPopup();
	}
}

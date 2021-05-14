import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptYogalayout } from '@demo/shared';
import {} from '@triniwiz/nativescript-yogalayout';

@Component({
	selector: 'demo-nativescript-yogalayout',
	templateUrl: 'nativescript-yogalayout.component.html',
})
export class NativescriptYogalayoutComponent {
	demoShared: DemoSharedNativescriptYogalayout;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptYogalayout();
	}
}

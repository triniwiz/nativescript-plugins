import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptNestedScrollview } from '@demo/shared';
import {} from '@triniwiz/nativescript-nested-scrollview';

@Component({
	selector: 'demo-nativescript-nested-scrollview',
	templateUrl: 'nativescript-nested-scrollview.component.html',
})
export class NativescriptNestedScrollviewComponent {
	demoShared: DemoSharedNativescriptNestedScrollview;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptNestedScrollview();
	}
}

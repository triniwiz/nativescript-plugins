import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptPager } from '@demo/shared';
import {} from '@triniwiz/nativescript-pager';

@Component({
	selector: 'demo-nativescript-pager',
	templateUrl: 'nativescript-pager.component.html',
})
export class NativescriptPagerComponent {
	demoShared: DemoSharedNativescriptPager;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptPager();
	}
}

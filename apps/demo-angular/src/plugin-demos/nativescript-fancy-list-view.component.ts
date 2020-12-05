import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptFancyListView } from '@demo/shared';
import {} from '@triniwiz/nativescript-fancy-list-view';

@Component({
	selector: 'demo-nativescript-fancy-list-view',
	templateUrl: 'nativescript-fancy-list-view.component.html',
})
export class NativescriptFancyListViewComponent {
	demoShared: DemoSharedNativescriptFancyListView;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptFancyListView();
	}
}

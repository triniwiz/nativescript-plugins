import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptTextdrawable } from '@demo/shared';
import {} from '@triniwiz/nativescript-textdrawable';

@Component({
	selector: 'demo-nativescript-textdrawable',
	templateUrl: 'nativescript-textdrawable.component.html',
})
export class NativescriptTextdrawableComponent {
	demoShared: DemoSharedNativescriptTextdrawable;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptTextdrawable();
	}
}

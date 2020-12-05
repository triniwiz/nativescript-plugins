import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptTooltip } from '@demo/shared';
import {} from '@triniwiz/nativescript-tooltip';

@Component({
	selector: 'demo-nativescript-tooltip',
	templateUrl: 'nativescript-tooltip.component.html',
})
export class NativescriptTooltipComponent {
	demoShared: DemoSharedNativescriptTooltip;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptTooltip();
	}
}

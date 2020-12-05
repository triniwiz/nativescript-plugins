import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptAccordion } from '@demo/shared';
import {} from '@triniwiz/nativescript-accordion';

@Component({
	selector: 'demo-nativescript-accordion',
	templateUrl: 'nativescript-accordion.component.html',
})
export class NativescriptAccordionComponent {
	demoShared: DemoSharedNativescriptAccordion;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptAccordion();
	}
}

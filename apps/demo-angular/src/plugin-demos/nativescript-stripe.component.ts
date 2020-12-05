import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptStripe } from '@demo/shared';
import {} from '@triniwiz/nativescript-stripe';

@Component({
	selector: 'demo-nativescript-stripe',
	templateUrl: 'nativescript-stripe.component.html',
})
export class NativescriptStripeComponent {
	demoShared: DemoSharedNativescriptStripe;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptStripe();
	}
}

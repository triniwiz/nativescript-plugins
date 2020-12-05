import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptStarRatings } from '@demo/shared';
import {} from '@triniwiz/nativescript-star-ratings';

@Component({
	selector: 'demo-nativescript-star-ratings',
	templateUrl: 'nativescript-star-ratings.component.html',
})
export class NativescriptStarRatingsComponent {
	demoShared: DemoSharedNativescriptStarRatings;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptStarRatings();
	}
}

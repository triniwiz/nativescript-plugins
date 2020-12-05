import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptImageCacheIt } from '@demo/shared';
import {} from '@triniwiz/nativescript-image-cache-it';

@Component({
	selector: 'demo-nativescript-image-cache-it',
	templateUrl: 'nativescript-image-cache-it.component.html',
})
export class NativescriptImageCacheItComponent {
	demoShared: DemoSharedNativescriptImageCacheIt;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptImageCacheIt();
	}
}

import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptImageZoom } from '@demo/shared';
import {} from '@triniwiz/nativescript-image-zoom';

@Component({
	selector: 'demo-nativescript-image-zoom',
	templateUrl: 'nativescript-image-zoom.component.html',
})
export class NativescriptImageZoomComponent {
	demoShared: DemoSharedNativescriptImageZoom;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptImageZoom();
	}
}

import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptFancyCamera } from '@demo/shared';
import {} from '@triniwiz/nativescript-fancy-camera';

@Component({
	selector: 'demo-nativescript-fancy-camera',
	templateUrl: 'nativescript-fancy-camera.component.html',
})
export class NativescriptFancyCameraComponent {
	demoShared: DemoSharedNativescriptFancyCamera;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptFancyCamera();
	}
}

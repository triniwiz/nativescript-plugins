import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptSplashscreen } from '@demo/shared';
import {} from '@triniwiz/nativescript-splashscreen';

@Component({
	selector: 'demo-nativescript-splashscreen',
	templateUrl: 'nativescript-splashscreen.component.html',
})
export class NativescriptSplashscreenComponent {
	demoShared: DemoSharedNativescriptSplashscreen;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptSplashscreen();
	}
}

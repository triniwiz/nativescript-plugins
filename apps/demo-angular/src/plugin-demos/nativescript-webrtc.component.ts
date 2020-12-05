import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptWebrtc } from '@demo/shared';
import {} from '@triniwiz/nativescript-webrtc';

@Component({
	selector: 'demo-nativescript-webrtc',
	templateUrl: 'nativescript-webrtc.component.html',
})
export class NativescriptWebrtcComponent {
	demoShared: DemoSharedNativescriptWebrtc;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptWebrtc();
	}
}

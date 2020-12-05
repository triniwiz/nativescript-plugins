import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptPusherBeams } from '@demo/shared';
import {} from '@triniwiz/nativescript-pusher-beams';

@Component({
	selector: 'demo-nativescript-pusher-beams',
	templateUrl: 'nativescript-pusher-beams.component.html',
})
export class NativescriptPusherBeamsComponent {
	demoShared: DemoSharedNativescriptPusherBeams;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptPusherBeams();
	}
}

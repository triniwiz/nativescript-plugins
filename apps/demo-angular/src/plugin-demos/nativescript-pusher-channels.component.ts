import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptPusherChannels } from '@demo/shared';
import {} from '@triniwiz/nativescript-pusher-channels';

@Component({
	selector: 'demo-nativescript-pusher-channels',
	templateUrl: 'nativescript-pusher-channels.component.html',
})
export class NativescriptPusherChannelsComponent {
	demoShared: DemoSharedNativescriptPusherChannels;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptPusherChannels();
	}
}

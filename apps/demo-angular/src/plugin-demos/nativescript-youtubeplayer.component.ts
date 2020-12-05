import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptYoutubeplayer } from '@demo/shared';
import {} from '@triniwiz/nativescript-youtubeplayer';

@Component({
	selector: 'demo-nativescript-youtubeplayer',
	templateUrl: 'nativescript-youtubeplayer.component.html',
})
export class NativescriptYoutubeplayerComponent {
	demoShared: DemoSharedNativescriptYoutubeplayer;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptYoutubeplayer();
	}
}

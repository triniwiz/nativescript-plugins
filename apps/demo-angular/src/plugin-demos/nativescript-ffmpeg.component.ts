import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptFfmpeg } from '@demo/shared';
import {} from '@triniwiz/nativescript-ffmpeg';

@Component({
	selector: 'demo-nativescript-ffmpeg',
	templateUrl: 'nativescript-ffmpeg.component.html',
})
export class NativescriptFfmpegComponent {
	demoShared: DemoSharedNativescriptFfmpeg;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptFfmpeg();
	}
}

import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptDownloader } from '@demo/shared';
import {} from '@triniwiz/nativescript-downloader';

@Component({
	selector: 'demo-nativescript-downloader',
	templateUrl: 'nativescript-downloader.component.html',
})
export class NativescriptDownloaderComponent {
	demoShared: DemoSharedNativescriptDownloader;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptDownloader();
	}
}

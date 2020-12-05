import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptVideorecorder } from '@demo/shared';
import {} from '@triniwiz/nativescript-videorecorder';

@Component({
	selector: 'demo-nativescript-videorecorder',
	templateUrl: 'nativescript-videorecorder.component.html',
})
export class NativescriptVideorecorderComponent {
	demoShared: DemoSharedNativescriptVideorecorder;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptVideorecorder();
	}
}

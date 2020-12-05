import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptSocketio } from '@demo/shared';
import {} from '@triniwiz/nativescript-socketio';

@Component({
	selector: 'demo-nativescript-socketio',
	templateUrl: 'nativescript-socketio.component.html',
})
export class NativescriptSocketioComponent {
	demoShared: DemoSharedNativescriptSocketio;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptSocketio();
	}
}

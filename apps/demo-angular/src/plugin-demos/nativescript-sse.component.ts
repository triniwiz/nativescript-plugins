import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptSse } from '@demo/shared';
import {} from '@triniwiz/nativescript-sse';

@Component({
	selector: 'demo-nativescript-sse',
	templateUrl: 'nativescript-sse.component.html',
})
export class NativescriptSseComponent {
	demoShared: DemoSharedNativescriptSse;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptSse();
	}
}

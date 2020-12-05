import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptTwitter } from '@demo/shared';
import {} from '@triniwiz/nativescript-twitter';

@Component({
	selector: 'demo-nativescript-twitter',
	templateUrl: 'nativescript-twitter.component.html',
})
export class NativescriptTwitterComponent {
	demoShared: DemoSharedNativescriptTwitter;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptTwitter();
	}
}

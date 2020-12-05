import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptDdpLogin } from '@demo/shared';
import {} from '@triniwiz/nativescript-ddp-login';

@Component({
	selector: 'demo-nativescript-ddp-login',
	templateUrl: 'nativescript-ddp-login.component.html',
})
export class NativescriptDdpLoginComponent {
	demoShared: DemoSharedNativescriptDdpLogin;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptDdpLogin();
	}
}

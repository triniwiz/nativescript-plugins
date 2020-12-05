import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptMongoStitchServicesMongodbRemote } from '@demo/shared';
import {} from '@triniwiz/nativescript-mongo-stitch-services-mongodb-remote';

@Component({
	selector: 'demo-nativescript-mongo-stitch-services-mongodb-remote',
	templateUrl: 'nativescript-mongo-stitch-services-mongodb-remote.component.html',
})
export class NativescriptMongoStitchServicesMongodbRemoteComponent {
	demoShared: DemoSharedNativescriptMongoStitchServicesMongodbRemote;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptMongoStitchServicesMongodbRemote();
	}
}

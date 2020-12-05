import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptMongoStitchCore } from '@demo/shared';
import {} from '@triniwiz/nativescript-mongo-stitch-core';

@Component({
	selector: 'demo-nativescript-mongo-stitch-core',
	templateUrl: 'nativescript-mongo-stitch-core.component.html',
})
export class NativescriptMongoStitchCoreComponent {
	demoShared: DemoSharedNativescriptMongoStitchCore;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptMongoStitchCore();
	}
}

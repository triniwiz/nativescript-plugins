import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptAwesomeLoaders } from '@demo/shared';
import {} from '@triniwiz/nativescript-awesome-loaders';

@Component({
	selector: 'demo-nativescript-awesome-loaders',
	templateUrl: 'nativescript-awesome-loaders.component.html',
})
export class NativescriptAwesomeLoadersComponent {
	demoShared: DemoSharedNativescriptAwesomeLoaders;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptAwesomeLoaders();
	}
}

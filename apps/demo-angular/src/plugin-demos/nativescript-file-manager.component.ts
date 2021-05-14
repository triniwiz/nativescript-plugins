import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptFileManager } from '@demo/shared';
import {} from '@triniwiz/nativescript-file-manager';

@Component({
	selector: 'demo-nativescript-file-manager',
	templateUrl: 'nativescript-file-manager.component.html',
})
export class NativescriptFileManagerComponent {
	demoShared: DemoSharedNativescriptFileManager;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptFileManager();
	}
}

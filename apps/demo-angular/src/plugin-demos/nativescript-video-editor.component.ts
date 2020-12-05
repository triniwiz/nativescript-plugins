import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptVideoEditor } from '@demo/shared';
import {} from '@triniwiz/nativescript-video-editor';

@Component({
	selector: 'demo-nativescript-video-editor',
	templateUrl: 'nativescript-video-editor.component.html',
})
export class NativescriptVideoEditorComponent {
	demoShared: DemoSharedNativescriptVideoEditor;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptVideoEditor();
	}
}

import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptPdf } from '@demo/shared';
import {} from '@triniwiz/nativescript-pdf';

@Component({
	selector: 'demo-nativescript-pdf',
	templateUrl: 'nativescript-pdf.component.html',
})
export class NativescriptPdfComponent {
	demoShared: DemoSharedNativescriptPdf;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptPdf();
	}
}

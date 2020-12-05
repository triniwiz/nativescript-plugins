import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptAutocomplete } from '@demo/shared';
import {} from '@triniwiz/nativescript-autocomplete';

@Component({
	selector: 'demo-nativescript-autocomplete',
	templateUrl: 'nativescript-autocomplete.component.html',
})
export class NativescriptAutocompleteComponent {
	demoShared: DemoSharedNativescriptAutocomplete;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptAutocomplete();
	}
}

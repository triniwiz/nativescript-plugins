import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptKlaviyoSdk } from '@demo/shared';
import { } from '@triniwiz/nativescript-klaviyo-sdk';

@Component({
	selector: 'demo-nativescript-klaviyo-sdk',
	templateUrl: 'nativescript-klaviyo-sdk.component.html',
})
export class NativescriptKlaviyoSdkComponent {
  
  demoShared: DemoSharedNativescriptKlaviyoSdk;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptKlaviyoSdk();
  }

}
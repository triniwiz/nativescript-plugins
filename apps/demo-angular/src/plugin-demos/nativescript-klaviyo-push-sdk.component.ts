import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptKlaviyoPushSdk } from '@demo/shared';
import { } from '@triniwiz/nativescript-klaviyo-push-sdk';

@Component({
	selector: 'demo-nativescript-klaviyo-push-sdk',
	templateUrl: 'nativescript-klaviyo-push-sdk.component.html',
})
export class NativescriptKlaviyoPushSdkComponent {
  
  demoShared: DemoSharedNativescriptKlaviyoPushSdk;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptKlaviyoPushSdk();
  }

}
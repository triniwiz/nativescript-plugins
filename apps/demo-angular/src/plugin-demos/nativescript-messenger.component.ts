import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptMessenger } from '@demo/shared';
import { } from '@triniwiz/nativescript-messenger';

@Component({
	selector: 'demo-nativescript-messenger',
	templateUrl: 'nativescript-messenger.component.html',
})
export class NativescriptMessengerComponent {
  
  demoShared: DemoSharedNativescriptMessenger;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptMessenger();
  }

}
import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptAppwrite } from '@demo/shared';
import { } from '@triniwiz/nativescript-appwrite';

@Component({
	selector: 'demo-nativescript-appwrite',
	templateUrl: 'nativescript-appwrite.component.html',
})
export class NativescriptAppwriteComponent {
  
  demoShared: DemoSharedNativescriptAppwrite;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptAppwrite();
  }

}
import {Component, NgZone} from '@angular/core';
import {DemoSharedNativescriptSupabase} from '@demo/shared';

@Component({
  selector: 'demo-nativescript-supabase',
  templateUrl: 'nativescript-supabase.component.html',
})
export class NativescriptSupabaseComponent {
  demoShared: DemoSharedNativescriptSupabase;

  constructor(private _ngZone: NgZone) {
  }

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptSupabase();
  }
}

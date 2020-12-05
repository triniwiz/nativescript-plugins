import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptPusherChannelsComponent } from './nativescript-pusher-channels.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptPusherChannelsComponent }])],
	declarations: [NativescriptPusherChannelsComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptPusherChannelsModule {}

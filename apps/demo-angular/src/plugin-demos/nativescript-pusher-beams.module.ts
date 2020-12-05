import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptPusherBeamsComponent } from './nativescript-pusher-beams.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptPusherBeamsComponent }])],
	declarations: [NativescriptPusherBeamsComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptPusherBeamsModule {}

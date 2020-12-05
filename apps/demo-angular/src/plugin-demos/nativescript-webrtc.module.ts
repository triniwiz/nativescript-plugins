import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptWebrtcComponent } from './nativescript-webrtc.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptWebrtcComponent }])],
	declarations: [NativescriptWebrtcComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptWebrtcModule {}

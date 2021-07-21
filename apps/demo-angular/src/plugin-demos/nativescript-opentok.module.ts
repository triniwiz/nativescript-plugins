import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptOpentokComponent } from './nativescript-opentok.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptOpentokComponent }])],
	declarations: [NativescriptOpentokComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptOpentokModule {}

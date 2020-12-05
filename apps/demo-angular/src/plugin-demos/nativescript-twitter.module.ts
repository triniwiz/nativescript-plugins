import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptTwitterComponent } from './nativescript-twitter.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptTwitterComponent }])],
	declarations: [NativescriptTwitterComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptTwitterModule {}

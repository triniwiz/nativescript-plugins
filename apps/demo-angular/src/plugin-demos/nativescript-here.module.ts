import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptHereComponent } from './nativescript-here.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptHereComponent }])],
	declarations: [NativescriptHereComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptHereModule {}

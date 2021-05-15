import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptKinComponent } from './nativescript-kin.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptKinComponent }])],
	declarations: [NativescriptKinComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptKinModule {}

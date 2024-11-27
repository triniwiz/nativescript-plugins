import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptDescopeComponent } from './nativescript-descope.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptDescopeComponent }])],
	declarations: [NativescriptDescopeComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptDescopeModule {}

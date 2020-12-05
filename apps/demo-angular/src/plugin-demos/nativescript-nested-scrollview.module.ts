import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptNestedScrollviewComponent } from './nativescript-nested-scrollview.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptNestedScrollviewComponent }])],
	declarations: [NativescriptNestedScrollviewComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptNestedScrollviewModule {}

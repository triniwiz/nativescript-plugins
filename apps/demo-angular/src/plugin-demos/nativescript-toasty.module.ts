import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptToastyComponent } from './nativescript-toasty.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptToastyComponent }])],
	declarations: [NativescriptToastyComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptToastyModule {}

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptPagerComponent } from './nativescript-pager.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptPagerComponent }])],
	declarations: [NativescriptPagerComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptPagerModule {}

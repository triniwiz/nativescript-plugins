import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptImageoptimizeComponent } from './nativescript-imageoptimize.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptImageoptimizeComponent }])],
	declarations: [NativescriptImageoptimizeComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptImageoptimizeModule {}

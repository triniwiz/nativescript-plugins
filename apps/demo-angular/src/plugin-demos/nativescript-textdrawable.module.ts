import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptTextdrawableComponent } from './nativescript-textdrawable.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptTextdrawableComponent }])],
	declarations: [NativescriptTextdrawableComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptTextdrawableModule {}

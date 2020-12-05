import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptPopupComponent } from './nativescript-popup.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptPopupComponent }])],
	declarations: [NativescriptPopupComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptPopupModule {}

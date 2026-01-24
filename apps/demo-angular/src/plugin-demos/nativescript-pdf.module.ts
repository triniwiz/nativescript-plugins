import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptPdfComponent } from './nativescript-pdf.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptPdfComponent }])],
	declarations: [NativescriptPdfComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptPdfModule {}

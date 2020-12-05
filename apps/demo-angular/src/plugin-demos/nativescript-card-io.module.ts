import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptCardIoComponent } from './nativescript-card-io.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptCardIoComponent }])],
	declarations: [NativescriptCardIoComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptCardIoModule {}

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptRadarIoComponent } from './nativescript-radar-io.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptRadarIoComponent }])],
	declarations: [NativescriptRadarIoComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptRadarIoModule {}

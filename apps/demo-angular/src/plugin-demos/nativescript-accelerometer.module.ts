import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptAccelerometerComponent } from './nativescript-accelerometer.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptAccelerometerComponent }])],
	declarations: [NativescriptAccelerometerComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptAccelerometerModule {}

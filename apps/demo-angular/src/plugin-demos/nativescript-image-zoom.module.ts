import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptImageZoomComponent } from './nativescript-image-zoom.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptImageZoomComponent }])],
	declarations: [NativescriptImageZoomComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptImageZoomModule {}

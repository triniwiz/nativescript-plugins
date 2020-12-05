import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptFancyCameraComponent } from './nativescript-fancy-camera.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptFancyCameraComponent }])],
	declarations: [NativescriptFancyCameraComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptFancyCameraModule {}

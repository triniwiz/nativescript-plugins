import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptSplashscreenComponent } from './nativescript-splashscreen.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptSplashscreenComponent }])],
	declarations: [NativescriptSplashscreenComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptSplashscreenModule {}

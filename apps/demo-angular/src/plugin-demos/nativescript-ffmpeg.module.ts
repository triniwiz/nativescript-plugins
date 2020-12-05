import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptFfmpegComponent } from './nativescript-ffmpeg.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptFfmpegComponent }])],
	declarations: [NativescriptFfmpegComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptFfmpegModule {}

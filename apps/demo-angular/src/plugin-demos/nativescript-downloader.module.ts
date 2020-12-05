import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptDownloaderComponent } from './nativescript-downloader.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptDownloaderComponent }])],
	declarations: [NativescriptDownloaderComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptDownloaderModule {}

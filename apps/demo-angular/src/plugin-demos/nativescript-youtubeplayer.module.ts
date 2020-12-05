import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptYoutubeplayerComponent } from './nativescript-youtubeplayer.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptYoutubeplayerComponent }])],
	declarations: [NativescriptYoutubeplayerComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptYoutubeplayerModule {}

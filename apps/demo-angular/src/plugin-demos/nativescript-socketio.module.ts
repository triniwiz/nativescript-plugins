import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptSocketioComponent } from './nativescript-socketio.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptSocketioComponent }])],
	declarations: [NativescriptSocketioComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptSocketioModule {}

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptMongoStitchCoreComponent } from './nativescript-mongo-stitch-core.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptMongoStitchCoreComponent }])],
	declarations: [NativescriptMongoStitchCoreComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptMongoStitchCoreModule {}

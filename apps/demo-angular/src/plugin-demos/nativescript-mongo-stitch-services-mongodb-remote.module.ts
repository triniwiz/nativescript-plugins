import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptMongoStitchServicesMongodbRemoteComponent } from './nativescript-mongo-stitch-services-mongodb-remote.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptMongoStitchServicesMongodbRemoteComponent }])],
	declarations: [NativescriptMongoStitchServicesMongodbRemoteComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptMongoStitchServicesMongodbRemoteModule {}

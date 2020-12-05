import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptCouchbaseComponent } from './nativescript-couchbase.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptCouchbaseComponent }])],
	declarations: [NativescriptCouchbaseComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptCouchbaseModule {}

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptYogalayoutComponent } from './nativescript-yogalayout.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptYogalayoutComponent }])],
	declarations: [NativescriptYogalayoutComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptYogalayoutModule {}

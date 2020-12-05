import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptStripeComponent } from './nativescript-stripe.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptStripeComponent }])],
	declarations: [NativescriptStripeComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptStripeModule {}

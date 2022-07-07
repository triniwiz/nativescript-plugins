import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { registerElement } from "@nativescript/angular";
import { DIRECTIVES } from "./nativescript-stripe.directives";
export * from './nativescript-stripe.directives';
import { CreditCardView } from "@triniwiz/nativescript-stripe"

registerElement("CreditCardView", () => CreditCardView);

@NgModule({
  declarations: [DIRECTIVES],
  exports: [DIRECTIVES],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CreditCardViewModule { }
import { Directive } from '@angular/core';

@Directive({
	selector: 'CreditCardView',
	standalone: false,
})
export class CreditCardViewDirective {}

export const DIRECTIVES = CreditCardViewDirective;

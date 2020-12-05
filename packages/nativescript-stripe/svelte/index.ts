import { registerNativeViewElement } from 'svelte-native/dom'

registerNativeViewElement("creditCardView", () => require("../").CreditCardView);
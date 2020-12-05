export default {
	install(Vue) {
		Vue.registerElement('CreditCardView', () => require('../').CreditCardView);
	}
}
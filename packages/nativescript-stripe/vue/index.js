module.exports = function install(Vue) {
	Vue.registerElement('CreditCardView', () => require('../').CreditCardView);
}
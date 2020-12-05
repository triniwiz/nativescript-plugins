module.exports = function install(Vue) {
  Vue.registerElement('NativeAccordion', () => require('../').Accordion);
  Vue.component('Accordion', require('./accordion')(Vue))
}

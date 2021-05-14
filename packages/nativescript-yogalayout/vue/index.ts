export default {
  install(Vue) {
    Vue.registerElement('View', () => require('../').View);
  }
}

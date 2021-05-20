export default {
  install(Vue) {
    Vue.registerElement('ImageCacheIt', () => require('../').ImageCacheIt);
  }
}

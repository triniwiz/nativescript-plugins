module.exports = function install(Vue) {
	Vue.registerElement('ImageCacheIt', () => require('../').ImageCacheIt);
}

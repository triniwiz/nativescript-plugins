export default {
	install(Vue) {
		Vue.registerElement('YoutubePlayer', () => require('../').YoutubePlayer);
	},
};

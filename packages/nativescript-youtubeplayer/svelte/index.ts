import { registerNativeViewElement } from 'svelte-native/dom';

registerNativeViewElement('youtubePlayer', () => require('../').YoutubePlayer);

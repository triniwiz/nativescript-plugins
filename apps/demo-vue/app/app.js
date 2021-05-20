import Vue from "nativescript-vue";
import View from '@triniwiz/nativescript-yogalayout/vue';

Vue.use(View);
import Home from "./components/Home";

new Vue({
    render: h => h('frame', [h(Home)]),
}).$start();

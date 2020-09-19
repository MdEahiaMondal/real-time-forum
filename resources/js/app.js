import Vue from 'vue'

require('./bootstrap');

Vue.component('main-home', require('./views/MainHome').default);

import User from "./apis/User";
window.User = User

import Exception from "./helpers/Exception";
window.Exception = Exception


window.EventBus = new Vue();


import VueSimplemde from 'vue-simplemde'
import 'simplemde/dist/simplemde.min.css'
Vue.component('vue-simplemde', VueSimplemde)
Vue.component('app-notification', require('./components/AppNotification').default)

import vuetify from './plugins/vuetify'
import router from './router/index'

import md from 'marked'
window.md = md

const app = new Vue({
    el: '#app',
    vuetify,
    router
});

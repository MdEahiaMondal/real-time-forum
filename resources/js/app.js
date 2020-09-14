import Vue from 'vue'

require('./bootstrap');

Vue.component('main-home', require('./views/MainHome').default);



import vuetify from './plugins/vuetify'
import router from './router/index'

const app = new Vue({
    el: '#app',
    vuetify,
    router
});

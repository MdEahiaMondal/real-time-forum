import Vue from 'vue'

require('./bootstrap');

Vue.component('main-home', require('./views/MainHome').default);



import vuetify from './plugins/vuetify'

const app = new Vue({
    el: '#app',
    vuetify
});

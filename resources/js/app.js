import Vue from 'vue'

require('./bootstrap');

Vue.component('example-component', require('./components/ExampleComponent.vue').default);



import vuetify from './plugins/vuetify'

const app = new Vue({
    el: '#app',
    vuetify
});

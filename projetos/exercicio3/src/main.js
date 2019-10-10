import Vue from 'vue'
import App from './App.vue'
import Titulo from "./components/titulo.vue"
import Tabela from "./components/tabela.vue"
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios';

const routes =
[ 
  {path: '/', component: App, name: "home"},
  {path: '/titulo', component: Titulo, name: "exemplo", props: {titulo: "teste 4", cor: "green"}},
  
];

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

Vue.component("titulo", Titulo);
Vue.component("tabela", Tabela);

new Vue({
  /* render: h => h(App), */
  router
}).$mount('#app')

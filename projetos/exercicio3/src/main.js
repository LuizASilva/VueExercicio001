import Vue from 'vue'
import App from './App.vue'
import Titulo from "./components/titulo.vue"
import Tabela from "./components/tabela.vue"
import Home from "./components/home.vue"
import Menus from "./components/menus.vue"
import Formulario from "./components/formulario.vue"
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const routes =
[ 
  {path: '/', component: App, name: "home", props: {titulo: "Bem vindo ao exercício 3"}},
  /* {path: '/menus', component: Menus, name: "menus", props: {titulo: "Menu"}}, */
  {path: '/tabela', component: Tabela, name: "tabela", props: {titulo: "Tabela"}},
  {path: '/formulario', component: Formulario, name: "formulario", props: {titulo: "Formulário"}},
  
];

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

Vue.component("titulo", Titulo);
Vue.component("tabela", Tabela);
Vue.component("home", Home);
Vue.component("menus", Menus);
Vue.component("formulario", Formulario);

new Vue({
  /* render: h => h(App), */
  router
}).$mount('#app')

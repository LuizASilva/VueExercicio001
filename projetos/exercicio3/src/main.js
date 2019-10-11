import Vue from 'vue'
import App from './App.vue'
import Titulo from "./components/titulo.vue"
import Tabela from "./components/tabela.vue"
import Home from "./components/home.vue"
import Menu from "./components/menu.vue"
import Formulario from "./components/formulario.vue"
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios';

const routes =
[ 
  {path: '/', component: App, name: "home", props: {titulo: "Bem vindo ao exercício 3", nomelink: "home"}},
  {path: '/titulo', component: Titulo, name: "titulo", props: {titulo: "Exercício 3 - Luiz", nomelink: "titulo"}},
  {path: '/menu', component: Titulo, name: "menu", props: {titulo: "Bem vindo ao exercício 3", nomelink: "menu"}},
  {path: '/tabela', component: Titulo, name: "tabela", props: {titulo: "Tabela", nomelink: "formulário"}},
  {path: '/formulario', component: Titulo, name: "exemplo", props: {titulo: "Formulário", nomelink: "formulário"}},
  
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
Vue.component("home", Home);
Vue.component("menu", Menu);
Vue.component("formulario", Formulario);

new Vue({
  /* render: h => h(App), */
  router
}).$mount('#app')

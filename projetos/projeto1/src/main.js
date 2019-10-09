import Vue from 'vue'
import App from './App.vue'
import Titulo from "./components/Titulo.vue"
import Tabela from "./components/tabela.vue"
import VueRouter from 'vue-router'

const routes =
[ 
  {path: '/', component: App},
  {path: '/titulo', component: Titulo}
  
];

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.use(VueRouter)
Vue.config.productionTip = false

Vue.component("titulo", Titulo);
Vue.component("tabela", Tabela);

new Vue({
  /* render: h => h(App), */
  router
}).$mount('#app')

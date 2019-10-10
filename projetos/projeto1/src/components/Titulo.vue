<template>
<div>
  <!-- <h1 v-bind:style="{color: cor}">{{titulo}}</h1> -->
  <h1 :style="{color: cor}">{{titulo}}</h1>
  <input type="button" @click="mandarprahome" value="Volta pra Home">
  <br />
  <!-- Usando o rowter para criar links sem a necessidade de digitar na barra de endereços -->
  <!-- <router-link to="/">Clique para ir para home</router-link> -->
  <router-link :to="{name: 'home'}">Clique para ir para home</router-link>  
</div>
</template>

<script>
export default {
  
    /* props: ['titulo', 'cor'] */
    props: { 
    titulo: {
      type: String,
      default: "Titulo"
    },    
    cor: {
      type: String,
      default: "red"
    }
},
methods: {
  mandarprahome(){
    /* this.$router.push('/'); */
    this.$router.push({name: 'home'});
  }
}
};
</script>

<style>

</style>
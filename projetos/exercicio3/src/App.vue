<template>
  <div id="app">
    
    <titulo :titulo="titulo"></titulo>
    <menus></menus>
    <home></home>
  </div>
</template>

<script>

export default {
      data(){
    return{
      titulo: "Exercicio 3 - Luiz Silva"      
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

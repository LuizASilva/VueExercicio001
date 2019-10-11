<template>
  <div id="app">
    <titulo titulo="Exercicio 3 - Luiz"></titulo>
  </div>
</template>

<script>

export default {
      data(){
    return{
      cabecalhos: ['id','Nome', 'Cargo', 'Unidade', 'salario']/*,
      registros:  [
        {id: 1, nome: "Paulo", cargo: "Analista", unidade: "Tupis", salario: 1000.00},
        {id: 2, nome: "Natália", cargo: "Redatora", unidade: "Sede", salario: 2000.00}
      ]*/
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

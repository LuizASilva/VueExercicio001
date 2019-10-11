<template>
<div>
    <titulo{{titulo}}></titulo>
    <menu{{nomelink}}></menu>
  <table id="styletabela" name="Tabela Json">  
  <thead>
    <tr>
      <th v-for="cabecalho in cabecalhos" :key="cabecalho" v-text="cabecalho" scope="col"></th>    
    </tr>
  </thead>
  <tbody>
    <tr v-for="registro in registrosAPI" :key="registro.id">
      <td v-for="valor in registro" :key="valor">{{valor}}</td>
    </tr>
  </tbody>
  </table> 
  <br />
  <br />
  <strong>Total dos salários computed: </strong> {{calculaSalariosComputed}}  
</div>
</template>

<script>
    export default {
      
    props: { 
    titulo: {
      type: String,
      default: "Tabela Default"
    },
    nomelink: {
      type: String,
      default: "home"
    },
    cabecalhos: {
      type: String,
      default: ""
    }
    },    
    data(){
        return {
        registrosAPI: {}
        };
    },
    mounted()
    {
        this.axios
        .get('http://10.0.2.15:3000/registros')
        .then(response => (this.registrosAPI = response.data));
        this.registrosAPI.indexOf
    },
    /*Deve se dar preferência para os computed pois é resolvido/executado apenas uma vez*/ 
    computed: {
    calculaSalariosComputed(){    
    var total = 0;
      for(var valor of this.registrosAPI){
        total += valor.salario
    }    
    return total;
  }
}
};
</script>

<style>

</style>
<template>
<div>
  <titulo titulo="Curso Vue.JS - Aula 02 - Exercicio 2" cor="red"></titulo>   
   <table id="styletabela" name="Tabela Resultados">
   <!-- <table name="Tabela Resultados"> -->
  <thead>
    <tr>
      <th v-for="cabecalho in cabecalhos" :key="cabecalho" v-text="cabecalho" scope="col"></th>    
    </tr>
  </thead>
  <tbody>
    <tr v-for="registro in registros" :key="registro.id">
      <td v-for="valor in registro" :key="valor">{{valor}}</td>
    </tr>
  </tbody>
  </table> 
    <!-- <input type="button" v-on:click="mostraDados" value="mostra dados"/> -->
  <br /><br />
  <strong>Total dos salários: </strong> {{mostraDados()}}
  <br />
  <strong>Total do contador method: </strong> {{contadormethod}}
  <br />
  <strong>Total dos salários computed: </strong> {{calculaSalariosComputed}}
  <br />
  <strong>Total do contador computed: </strong> {{contadorcomputed}}
  
</div>

</template>

<script>
export default { 

  props: ['cabecalhos', 'registros'],
  data(){
    return {
      contadormethod: 0,
      contadorcomputed: 0
    }
  },
  methods:{
  /*Não deve ser usado dentro de templates ou para efetuar o calculo de valores
  pois toda rotina é executada pelo vue que detém o controle da execução, o processo pode tender a infinito*/   
  mostraDados(){
    this.contadormethod++;
    var total = 0;
      for(var valor of this.registros){
        total += valor.salario
      }
    /* alert(total); */
    return total;
  }
  },
  /*Deve se dar preferência para os computed pois é resolvido/executado apenas uma vez*/ 
  computed: {
   calculaSalariosComputed(){
    this.contadorcomputed++;
    var total = 0;
      for(var valor of this.registros){
        total += valor.salario
    }    
    return total;
  }
}
  };
</script>

  <style>
    /* #nome define um estilo  */
    #styletabela{ 
      width: 100%;    
    
      background-color:cornsilk;
      color: green;
      border: 1px solid black;
      
    } 
    th, td
    { 
      
      background-color:cornsilk;
      color: black;
      border: 1px solid black;
    } 
    
    strong
    {
      text-align: left;
    }
      
  </style>
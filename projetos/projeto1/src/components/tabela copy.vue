<template>
<div>
  <!-- <titulo titulo="Curso Vue.JS - Aula 02 - Exercicio 2" cor="red"></titulo>   -->

  <!-- Usando o rowter para criar links sem a necessidade de digitar na barra de endereços -->
  <!-- <router-link to="/titulo">Clique para ir para o Titulo</router-link> -->
  <!-- <router-link :to="{name: 'exemplo'}">Clique para ir para o Titulo</router-link> -->
  <router-link :to="{name: 'exemplo'}" props: :titulo="teste4" :cor="green">Clique para ir para o Titulo</router-link>
  

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

  <h4>Nome: </h4>
  <h4><input type="text" name="nome" value="" v-model="nome" /></h4>

  <h4>Em qual unidade você está alocado ? </h4><br>
  <form action="#" method="POST">
      <select name="selectlocal" id="selectlocal" v-model="sedeselecionada">
          <option value="">Selecione sua sede</option>
          <option v-for="sede in sedes" :key="sede.codigo" v-text="sede.nome" :value="sede.codigo"></option>>
      </select>
  </form>
  <p><b>Total de alteraçoões nome: {{contadorNome}}</b></p>
</div>

</template>

<script>
export default { 

  props: ['cabecalhos', 'registros'],
  data(){
    return {
      contadormethod: 0,
      contadorcomputed: 0,
      nome: "",
      sedeselecionada: "",      
      sedes: [
                {"nome": "Tupis","codigo": 1},
                {"nome": "Catalão","codigo": 2}, 
                {"nome": "Bhtrans","codigo": 3} 
                ],
     contadorNome: 0       
    }
  },
  methods:{
  /*Não deve ser usado dentro de templates ou para efetuar o calculo de valores
  pois toda rotina é executada pelo vue que detém o controle da execução, o processo pode tender a infinito
  Depende da interação com usuário - voltado para evento*/   
  mostraDados(){
    /* this.contadormethod++; */
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
    /* this.contadorcomputed++; */
    var total = 0;
      for(var valor of this.registros){
        total += valor.salario
    }    
    return total;
  }
},
  /*atribui um observador para uma variável o atributo valor recebe o conteúdo de sedeselecionada*/
  watch:{
    /* sedeselecionada: (valor) => { forma abreviada do javascript para definir uma function*/
    sedeselecionada: function(valor){
      if(valor === ""){
        alert("Favor selecionar uma opção!");
      }
    },

    /* nome(){  forma abreviada para usar watch*/
    nome: function(){    
        if(this.contadorNome === 10){
           this.$router.push('/titulo');  
        }
        this.contadorNome++;        
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
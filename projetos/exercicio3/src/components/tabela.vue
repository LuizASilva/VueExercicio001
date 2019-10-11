<template>
<div>
  
<titulo v-bind:titulo="titulo"></titulo>
<menus></menus>

  <h2><p><b>Tabela de Funcionários</b></p></h2> 
  <table id="tabela" name="Tabela Funcionários">      
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
  <strong>Total dos salários: </strong> {{calculaSalariosComputed}}  
</div>
</template>

<script>
    export default {
      
   props: ['titulo'],
    data(){
        return {
        
        cabecalhos: ['id','Nome', 'Cargo', 'Unidade', 'salario']  ,
        registrosAPI: []
        }
    },
    mounted()
    {
        this.axios
        .get('http://10.0.2.15:3000/registros')
        .then(response => (this.registrosAPI = response.data));
            
    },
    
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
  
  #tabela{ 
      width: 100%;
      color: green;
      border: 1px solid black;      
    } 
    th, td
    {         
      color: black;
      border: 1px solid black;
    }  
</style>
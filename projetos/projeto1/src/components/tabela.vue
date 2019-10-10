<template>
<div>
  <titulo titulo="Teste Tabela BD"></titulo>
   <table id="styletabela" name="Tabela Resultados">  
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
  <br/><p>Registros db Json</p>
  <table id="styletabela" name="Tabela Resultados">  
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
  {{registrosAPI}}
</div>

</template>

<script>
export default { 

  props: ['cabecalhos', 'registros'],
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
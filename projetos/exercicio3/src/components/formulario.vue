<template>
<div>
    <titulo{{titulo}}></titulo>
    <menu{{nomelink}}></menu> 

    <h4>Nome: </h4>
    <h4><input type="text" name="nome" value="" v-model="nome" />Digite seu nome</h4>

    <h4>Em qual unidade você está alocado ? </h4><br>

    <form action="#" method="POST">
        <select name="selectlocal" id="selectlocal" v-model="sedeselecionada">
            <option value="">Selecione sua sede</option>
            <option :value="sede.codigo" v-for="sede in sedes" :key="sede.codigo" v-text="sede.nome"></option>>
        </select>

        <h4>Atividades na Empresa: </h4>

        <textarea name="atividades" rows="10" cols="100" v-model="atividades">Descreva suas atividades na empresa</textarea><br><br>

        <input type="button" v-on:click="salvadados" value="Salvar" /><br><br>
    </form>  

</div>
</template>

<script>
    export default {
      
    props: { 
    titulo: {
      type: String,
      default: "Formulário Default"
    },
    nomelink: {
      type: String,
      default: "home"
    }
    },
     data(){
    return {      
      nome: "",
      sedeselecionada: "",      
      sedes: [
                {"nome": "Tupis","codigo": 1},
                {"nome": "Catalão","codigo": 2}, 
                {"nome": "Bhtrans","codigo": 3} 
                ],
     atividades: ''       
    }
  },
  methods:{  
  salvadados(){             
    alert('Dados salvos com sucesso.');
  }
  }
};
</script>

<style>

</style>
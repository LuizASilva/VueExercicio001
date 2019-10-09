<template>
<div>
  <!-- <h1 v-bind:style="{color: cor}">{{titulo}}</h1> -->
  <h1 :style="{color: cor}">{{titulo}}</h1>
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
}
};
</script>

<style>

</style>
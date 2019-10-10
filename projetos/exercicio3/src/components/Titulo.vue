<template>
<div>
    <h1>{{titulo}}</h1>
</div>
</template>

<script>
    export default {
  
    /* props: ['titulo', 'cor'] */
    props: { 
    titulo: {
      type: String,
      default: "Titulo"
    }
    }
};
</script>

<style>

</style>
<template>
<div>
    <h1>{{titulo}}</h1>
</div>
</template>

<script>
    export default {
      
    props: { 
    titulo: {
      type: String,
      default: "Titulo Default"
    }
    }
};
</script>

<style>

</style>
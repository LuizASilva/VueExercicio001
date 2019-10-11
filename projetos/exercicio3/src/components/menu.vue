<template>
<div>
    <titulo{{titulo}}></titulo>
    <menu{{nomelink}}></menu>    
</div>
</template>

<script>
    export default {
      
    props: { 
    titulo: {
      type: String,
      default: "Menu Default"
    },
    nomelink: {
      type: String,
      default: "home"
    }
    }
};
</script>

<style>

</style>
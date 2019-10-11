<template>
<div>
  <titulo{{titulo}}></titulo>
  <menu{{nomelink}}></menu> 
  <br />
</div>

</template>

<script>
export default { 

   props: { 
    titulo: {
      type: String,
      default: "Home Default"
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
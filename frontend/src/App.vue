
<template>
  <div id="app">
   <NavLink />
   <router-view />
     
  </div>
</template>



<script>
import NavLink from './components/NavLink.vue'

export default {
  name:"App",
  components:{
    NavLink
   
  }
}

</script>

<style>


</style>






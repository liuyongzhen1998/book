<template>
  <div id="app">
    <router-view/>
    <bottoms></bottoms>
  </div>
</template>

<script>
  import bottoms from "./components/foot"
export default {
  components:{
    'bottoms':bottoms
  }
}
</script>

<style >
</style>

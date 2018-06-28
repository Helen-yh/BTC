<template>
  <div id="app">
      <my-footer></my-footer>
    <router-view/>
  </div>
</template>

<script>
import myFooter from './components/footer.vue'
export default {
  name: 'App',
  data: function () {
    return {
      msg: 1
    }
  },
  components: {
    myFooter
  }
}
</script>

<style>
</style>

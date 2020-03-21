<template>
  <div id="app">
    <m-header></m-header>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from './components/m-header'
export default {
  components: {
    MHeader
  }
}
</script>

<style lang="scss" scoped>
</style>

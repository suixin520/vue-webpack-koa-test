<template>
  <div class="m-header">
    <h1 class="text">test</h1>
    <h1 class="text">{{test}}</h1>
    <!-- <router-link to="/user" class="mine" tag="div">
      <i class="icon-mine"></i>
    </router-link> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['test'])
  }
}
</script>

<style lang="scss" scoped>
.m-header {
  color:red;
}
</style>

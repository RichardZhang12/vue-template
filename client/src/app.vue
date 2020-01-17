<template>
  <div id="app">
    <base-item></base-item>
    <router-link to="/home">home</router-link>
     <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import baseItem from './base.vue'
export default {
  data() {
    return {
      title: '标题11111'
    }
  },
  components: {
    baseItem
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-size: 12px;
  h1 {
    color: red;
  }
}
</style>
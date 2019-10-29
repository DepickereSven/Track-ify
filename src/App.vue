<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
    const defaultLayout = 'default'

    export default {
        computed: {
            layout() {
                return (this.$route.meta.layout || defaultLayout) + '-layout'
            }
        }
    }
</script>

<style lang="css">
  @import "app.css";
</style>

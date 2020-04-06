<template lang="pug">
div
  v-app-bar-nav-icon(
    dark
    @click="sidebar = !sidebar"
  )
  v-navigation-drawer(
    app
    v-model="sidebar"
  )
</template>

<script>
export default {
  name: 'NavMobileVersion',
  props: {
    menu: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    sidebar: false
  })
}
</script>

<style scoped>
</style>

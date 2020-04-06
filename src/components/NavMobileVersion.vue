<template lang="pug">
div
  v-app-bar-nav-icon(
    v-if="$vuetify.breakpoint.smAndDown"
    @click="sidebar = !sidebar"
  )

  v-navigation-drawer(
    app
    v-model="sidebar"
    class="primary"
    right
    width="100%"
    hide-overlay
  )
    v-list(
      nav
      shaped
      class="text-uppercase"
    )
      v-list-item
        v-list-item-icon
          v-img(
            :src="require('../assets/logo.svg')"
            contain
            height="24"
            width="24"
          )
        v-list-item-title
          span Vitaliy Ostapchuk
        v-spacer
        v-app-bar-nav-icon(
          @click="sidebar = !sidebar"
        )

      v-divider

      v-list-item-group(
        v-model="menu"
      )
        v-list-item(
          v-for="item in menu"
          :key="item.link"
          :title="item.title"
          :href="item.link"
          text
        )
          v-list-item-icon
            v-icon(left) {{item.icon}}
          v-list-item-title
            span {{item.text}}
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
    sidebar: false,
    home: '/home'
  })
}
</script>

<style scoped>
</style>

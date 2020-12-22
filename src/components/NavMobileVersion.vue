<template lang="pug">
div
  v-app-bar-nav-icon(
    v-if="$vuetify.breakpoint.smAndDown"
    @click="sidebar = !sidebar"
  )

  v-navigation-drawer(
    app
    v-model="sidebar"
    right
    width="100%"
    hide-overlay
  )
    v-list(
      nav
      shaped
      class="text-uppercase"
      height="100%"
    )
      v-list-item(
        class="mobile-top-bar"
      )
        app-logo
        v-spacer
        v-app-bar-nav-icon
          v-btn(
            @click="sidebar = !sidebar"
            class="my-4"
            icon
          )
            v-icon(
              size="24px"
              color="primary"
            ) mdi-close

      v-divider

      v-list-item-group(
        v-model="menu"
        class="pa-4"
      )
        v-list-item(
          v-for="item in menu"
          :key="item.link"
          :title="item.title"
          :href="item.link"
          class="my-4"
          text
        )
          v-list-item-icon
            v-icon(
              left
              color="primary"
            ) {{item.icon}}
          v-list-item-title
            span(
              class="primary--text"
            ) {{item.text}}

      v-spacer

      v-container(
        class="fix-bottom"
        fluid
      )
         v-row(
          align="center"
          justify="center"
        )
          social-networks(
            v-bind:isDark="false"
          )
          p(
            class="my-4 primary--text font-weight-light font-italic body-2"
          )
            | &copy; {{ new Date().getFullYear() }} — Designed & Built by Vitaliy Ostapchuk


</template>

<script>
import AppLogo from './AppLogo'
import SocialNetworks from './SocialNetworks'

export default {
  name: 'NavMobileVersion',
  components: {
    AppLogo,
    SocialNetworks
  },
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
.v-btn:hover {
  background: #1362e2;
}
</style>

<template lang="pug">
v-app-bar(
  app
  :flat="$vuetify.breakpoint.mdAndUp"
  class="center-elem white"
  height="90"
  max-width="1500"
)
  app-logo
  v-spacer

  nav-desktop-version(
    v-if="$vuetify.breakpoint.mdAndUp"
    :menu="menu"
  )
  nav-mobile-version(
    v-if="$vuetify.breakpoint.smAndDown"
    :menu="menu"
  )
</template>

<script>
import AppLogo from './AppLogo'
import NavMobileVersion from './NavMobileVersion'
import NavDesktopVersion from './NavDesktopVersion'

export default {
  name: 'Header',
  components: {
    AppLogo,
    NavMobileVersion,
    NavDesktopVersion
  },
  data: () => ({
    menu: [
      {
        icon: 'mdi-home',
        link: '/home',
        title: 'Back to home page',
        text: 'Home'
      },
      {
        icon: 'mdi-information-variant',
        link: '/about',
        title: 'Some things about me, portfolio & some things I\'ve built',
        text: 'About Me'
      },
      {
        icon: 'mdi-card-account-mail',
        link: '/contact',
        title: 'Get in touch!',
        text: 'Contact'
      }
    ]
  })
}
</script>

<style scoped>
</style>

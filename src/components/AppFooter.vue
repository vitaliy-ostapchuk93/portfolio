<template lang="pug">
v-footer(
  padless
  dark
)
  v-row(
    justify="center"
    no-gutters
    class="primary"

  )
    v-col(
      class="py-4 text-center"
      cols="12"
    )
      social-networks

    v-divider

    v-col(
      class="text-center"
      cols="12"
    )
      v-btn(
        v-for="item in legalmenu"
        :key="item.title"
        :href="item.link"
        class="font-weight-light overline"
        text
      )
        span {{item.text}}

    v-divider

    v-col(
      class="py-3 text-center font-weight-light font-italic body-2"
      cols="12"
    )
      | &copy; {{ new Date().getFullYear() }} — Designed & Built by Vitaliy Ostapchuk

</template>

<script>
import SocialNetworks from './SocialNetworks'

export default {
  name: 'Footer',
  components: {
    SocialNetworks
  },
  data: () => ({
    legalmenu: [
      {
        link: '/privacy-policy',
        text: 'Privacy Policy'
      },
      {
        link: '/terms-of-service',
        text: 'Terms of Service'
      },
      {
        link: '/impressum',
        text: 'Impressum'
      }
    ]
  })
}
</script>

<style scoped>
</style>

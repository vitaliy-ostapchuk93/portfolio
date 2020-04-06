<template lang="pug">
v-footer(
  padless
  dark
  class="primary"
)
  v-row(
    justify="center"
    no-gutters
  )
    v-col(
      class="py-4 text-center"
      cols="12"
    )
      v-btn(
        v-for="profile in profiles"
        :key="profile.icon"
        :href="profile.link"
        target="_blank"
        class="mx-4"
        icon
      )
        v-icon(size="24px") {{profile.icon}}

    v-divider

    v-col(
      class="text-center"
      cols="12"
    )
      v-btn(
        v-for="item in legalmenu"
        :key="item.title"
        :href="item.link"
        class="font-weight-thin"
        text
      )
        span {{item.text}}

    v-divider

    v-col(
      class="py-3 text-center font-weight-light font-italic"
      cols="12"
    )
      | &copy; {{ new Date().getFullYear() }} — Designed & Built by Vitaliy Ostapchuk

</template>

<script>
export default {
  name: 'Footer',

  data: () => ({
    profiles: [
      {
        icon: 'mdi-twitter',
        link: 'https://twitter.com/vitaliy_ostapch'
      },
      {
        icon: 'mdi-linkedin',
        link: 'https://www.linkedin.com/in/vitaliy-ostapchuk/'
      },
      {
        icon: 'mdi-github',
        link: 'https://github.com/vitaliy-ostapchuk93'
      },
      {
        icon: 'mdi-email',
        link: 'mailto:vitaliy.ostapchuk93@gmail.com'
      }
    ],
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

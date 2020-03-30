<template lang="pug">
v-footer(
  absolute
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
        :key="icon"
        class="mx-4"
        icon
        :href="profile.link"
        target="_blank"
      )
        v-icon(size="24px") {{profile.icon}}

    v-divider

    v-col(
      class="py-4 text-center"
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
    ]
  })
}
</script>

<style scoped>
</style>

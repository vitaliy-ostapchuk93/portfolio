<template lang="pug">
v-container(
  min-width="360px"
  fluid
)
  v-row(
    align="center"
    justify="center"
  )
    v-btn(
      v-for="profile in profiles"
      :key="profile.icon"
      :href="profile.link"
      target="_blank"
      class="mx-4"
      icon
    )
      v-icon(
        size="24px"
        :color="iconColor"
      ) {{profile.icon}}
</template>

<script>
export default {
  name: 'SocialNetworks',
  props: {
    isDark: {
      type: Boolean,
      required: false,
      default: true
    }
  },
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
  }),
  computed: {
    iconColor: function () {
      return this.isDark ? 'white' : 'primary'
    }
  }
}
</script>

<style scoped>
.v-btn:hover {
  background: #1362e2;
}
</style>

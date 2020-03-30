<template lang="pug">
v-app-bar(
  app
  dark
  class="primary"
)

  v-toolbar-title(
    headline
    text-uppercase
  )
    v-btn(
      text
      href="/home"
    )
      v-img(
        :src="require('../assets/logo.svg')"
        contain
        height="24"
        width="24"
      )
      span.mr-2 Vitaliy Ostapchuk

  v-spacer

  v-btn(
    v-for="item in menu"
    text
    :href="item.link"
  )
    v-icon(left) {{item.icon}}
    span {{item.title}}
</template>

<script>
export default {
  name: 'Header',

  data: () => ({
    menu: [
      {
        icon: 'mdi-home',
        link: '/home',
        title: 'Home'
      },
      {
        icon: 'mdi-information-variant ',
        link: '/about',
        title: 'About'
      },
      {
        icon: 'mdi-briefcase',
        link: '/work',
        title: 'Work'
      },
      {
        icon: 'mdi-electron-framework ',
        link: '/experience',
        title: 'Experience'
      },
      {
        icon: 'mdi-card-account-mail',
        link: '/contact',
        title: 'Contact'
      }
    ]
  })
}
</script>

<style scoped></style>

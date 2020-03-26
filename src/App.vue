<template lang="pug">
v-app
  v-app-bar(app)
    v-toolbar-title.headline.text-uppercase
      span.mr-2 Material
      span.font-weight-light Design

    v-spacer

    v-btn(
      text
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      rel="noopener"
      target="_blank"
    )
      span Latest Release
      v-icon(right) mdi-open-in-new

  v-content
    router-view
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',

  components: {
    HelloWorld
  },

  data: () => ({
    //
  })
}
</script>

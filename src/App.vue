<template lang="pug">
v-app
  app-header
  v-content
    router-view
  app-footer
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',

  components: {
    'app-header': Header,
    'app-footer': Footer
  },

  data: () => ({
    //
  })
}
</script>

<style scoped>
</style>

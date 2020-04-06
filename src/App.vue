<template lang="pug">
v-app
  app-header
  v-content
    v-container(
      fluid
    )
      router-view
  app-footer
</template>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

export default {
  name: 'App',

  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter
  },

  data: () => ({
    //
  })
}
</script>

<style scoped>
</style>

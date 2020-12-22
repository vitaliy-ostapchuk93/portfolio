<template lang="pug">
v-app(
  max-width="1400"
)
  app-header
  v-main
    v-container(
      fluid
      class="pa-4 fill-height main-view"
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
    AppHeader,
    AppFooter
  },
  data: () => ({
    //
  })
}
</script>

<style>
</style>

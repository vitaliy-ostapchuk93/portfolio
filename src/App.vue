<template lang="pug">
v-app
  app-header
  v-main
    v-container(
      fluid
      class="pa-4 fill-height"
    )
      transition(
        name="fade"
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

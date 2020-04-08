<template lang="pug">
v-app
  app-header
  v-content
    v-container(
      fluid
      class="p-4"
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
.v-content{
  background-image: url('~@/assets/random-shapes.svg');
  background-repeat: repeat;
  background-size: 50px 50px;
}
</style>

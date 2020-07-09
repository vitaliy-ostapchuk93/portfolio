<template lang="pug">
v-container(
  fluid
  fill-height
)
  v-row(
    v-if="$vuetify.breakpoint.lgAndUp"
  )
    v-col(
      cols="5"
    )
      home-text
    v-col(
      cols="7"
      class="align-self-end"
    )
      home-logo

  v-row(
    v-if="$vuetify.breakpoint.mdAndDown"
  )
    home-text
    home-logo
</template>

<script>
import HomeLogo from '../components/HomeLogo'
import HomeText from '../components/HomeText'

export default {
  name: 'Home',
  components: {
    HomeLogo,
    HomeText
  },
  data: () => ({
    // ...
  })
}
</script>


<style scoped>
</style>

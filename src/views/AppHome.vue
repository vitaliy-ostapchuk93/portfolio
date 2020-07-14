<template lang="pug">
v-container(
  fluid
  fill-height
)
  v-card(
   :flat="$vuetify.breakpoint.mdAndUp"
  )
    v-row(
      v-if="$vuetify.breakpoint.lgAndUp"
      class="pa-4"
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
      class="pa-4"
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

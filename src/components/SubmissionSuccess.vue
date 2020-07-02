<template lang="pug">
v-container(
  fluid
)
  v-card(
   class="mx-auto"
   max-width="800"
  )
    v-card-title(
      class="secondary--text display-2 layout justify-center pt-12"
    )
      v-img(
        :src="require('../assets/tick.svg')"
        class="my-3"
        contain
        height="250"
      )

    v-card-text(
      class="title primary--text layout justify-center pa-12"
    ) {{description}}

    v-card-actions(
      class="primary--text pb-10 layout justify-center"
    )
      v-btn(
        color="primary lighten-2"
        text
        to="/home"
      ) {{backBtn}}

</template>

<script>
export default {
  name: 'NotFound',
  data: () => ({
    title: 'Success!',
    description: 'Your form has been submitted, thank you!',
    backBtn: 'Back to main page'
  }),
  created () {
    setTimeout(() => this.$router.push({ path: '/home' }), 5000)
  }
}
</script>

<style scoped>
</style>

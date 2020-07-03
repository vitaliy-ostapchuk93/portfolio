<template lang="pug">
v-container(
  fluid
)
  v-row
    v-col(
      cols="4"
    )
      v-img(
        :src="require('../assets/bird.svg')"
        class="img-bird align-self-center"
        contain
      )
    v-col(
      cols="8"
    )
      v-img(
        :src="require('../assets/holo2.png')"
        class="img-holo align-self-end"
        contain
      )
</template>

<script>
export default {
  name: 'HomeLogo',
  data: () => ({
    // ...
  })
}
</script>

<style scoped>
</style>

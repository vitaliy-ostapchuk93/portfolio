<template lang="pug">
v-btn(
  text
  title="Home"
  href="/home"
)
  v-img(
    :src="require('../assets/logo-transparent.svg')"
    class="mr-3"
    contain
    max-height="80"
    max-width="180"
  )
</template>

<script>
export default {
  name: 'AppLogo',
  data: () => ({
    // ...
  })
}
</script>

<style scoped>
</style>

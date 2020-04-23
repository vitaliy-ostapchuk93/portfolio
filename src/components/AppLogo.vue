<template lang="pug">
v-img(
  :src="require('../assets/logo.svg')"
  class="mr-3"
  contain
  max-height="40"
  max-width="120"
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

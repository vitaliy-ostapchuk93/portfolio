<template lang="pug">
v-toolbar-title(
    headline
    text-uppercase
  )
    v-btn(
      text
      href="/home"
    )
      v-list-item
        v-list-item-icon
          v-img(
            :src="require('../assets/logo.svg')"
            contain
            height="24"
            width="24"
          )
        v-list-item-title
          span Vitaliy Ostapchuk
</template>

<script>
export default {
  name: 'NavToolbarTitle',
  data: () => ({
    // ...
  })
}
</script>

<style scoped>
</style>

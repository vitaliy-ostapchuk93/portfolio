<template lang="pug">
div
  v-btn(
    v-for="item in menu"
    :key="item.link"
    :title="item.title"
    :href="item.link"
    text
  )
    h2(
      class="primary--text"
    ) {{item.text}}
</template>

<script>
export default {
  name: 'NavMobileVersion',
  props: {
    menu: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    // ...
  })
}
</script>

<style scoped>
.v-btn:hover {
  color: #1362e2;
}
</style>

<template lang="pug">
v-layout(text-center wrap)
  v-flex(xs12)
    a(
      href='https://www.freepik.com/free-vector/404-error-design-with-milk_1535244.htm'
      target="_blank"
      class="text--disabled"
    )
      v-img(
        :src="require('../assets/bad-milk.svg')"
        class="my-3"
        contain
        height="600"
      )

</template>

<script>
export default {
  metaInfo: {
    title: 'NotFound'
  }
}
</script>

<style scoped>
</style>

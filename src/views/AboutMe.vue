<template lang="pug">
v-container(
  fluid
)
  v-card(
    class="mx-auto fill-height"
    max-width="800"
    :flat="$vuetify.breakpoint.mdAndUp"
  )
    v-card-subtitle
      v-img(
        :src="require('../assets/undraw/profile.svg')"
        class="my-3"
        contain
        height="500"
      )
    v-card-title(
      class="accent--text layout justify-center"
    )
      p(
        v-if="$vuetify.breakpoint.lgAndUp"
        class="tagline font-weight-medium display-4"
      ) {{title}}
      p(
        v-if="$vuetify.breakpoint.mdAndDown"
        class="tagline font-weight-medium display-2"
      ) {{title}}
</template>

<script>
export default {
  name: 'About',
  data: () => ({
    title: 'about me ...'
  })
}
</script>

<style scoped>
.tagline {
  font-family: Gilroy-Thin!important;
}
</style>

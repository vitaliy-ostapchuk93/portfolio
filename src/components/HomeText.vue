<template lang="pug">
v-card(
  class="mx-auto transparent-bg pa-2"
  flat
)
  v-card-title(
    class="accent--text py-8"
  )
    p(
      class="tagline font-weight-medium display-4"
    ) {{tagline}}

  v-card-subtitle(
    class="title py-10"
  )
    p(
      class="font-weight-bold primary--text"
    ) {{intro}}
    p(
      class="display-1 font-weight-bold secondary--text"
    ) {{name}}
  v-card-text
    p(
      class="title primary--text"
    ) {{description}}
</template>

<script>
export default {
  name: 'HomeText',
  data: () => ({
    tagline: "let's build something great!",
    intro: 'Hi, my name is',
    name: 'Vitaliy Ostapchuk.',
    description: "I'm a 3D Software Engineer based in Stuttgart (Germany) specializing in building and occasionally designing exceptional, high-quality applications and websites."
  })
}
</script>

<style scoped>
.tagline {
  font-family: Gilroy-Thin!important;
}
</style>

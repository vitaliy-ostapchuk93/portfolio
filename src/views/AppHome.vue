<template lang="pug">
v-container(
  fluid
)
  v-card(
   class="mx-auto transparent-bg"
   max-width="800"
   flat
  )
    v-card-title(
      class="tagline secondary--text font-weight-bold py-12"
    )
      p(
        v-if="$vuetify.breakpoint.mdAndUp"
        class="display-4"
      ) {{tagline}}
      p(
        class="display-3"
        v-if="$vuetify.breakpoint.smAndDown"
      ) {{tagline}}
    v-card-subtitle(
      class="title primary--text py-10"
    )
      p(
        class="font-weight-bold"
      ) {{intro}}
      p(
        class="display-1 font-weight-bold"
      ) {{name}}
    v-card-text(
      class="primary--text"
    )
      p(
        class="subtitle-1"
      ) {{description}}
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    tagline: 'let`s build something great!',
    intro: 'Hi, my name is',
    name: 'Vitaliy Ostapchuk.',
    description: 'I`m a 3D Software Engineer based in Stuttgart (Germany) specializing in building and occasionally designing exceptional, high-quality applications and websites.'
  })
}
</script>


<style scoped>
</style>

<template lang="pug">
v-container(
  fluid
)
  v-card(
   class="mx-auto transparent-bg"
   max-width="800"
   flat
  )
    v-card-text(
      class="tagline secondary--text font-weight-bold"
    )
      p(
        v-if="$vuetify.breakpoint.mdAndUp"
        class="display-4"
      ) {{tagline}}
      p(
        class="display-3"
        v-if="$vuetify.breakpoint.smAndDown"
      ) {{tagline}}
    br
    v-card-text(
      class="title primary--text"
    )
      p(
        class="font-weight-bold"
      ) {{intro}}
      p(
        class="display-1 font-weight-bold"
      ) {{name}}
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

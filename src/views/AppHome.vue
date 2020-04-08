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
      class="display-4 secondary--text"
    )
      p(
        class="font-weight-bold"
      )
        | let's build something great!
    br
    v-card-text(
      class="title primary--text"
    )
      p(
        class="font-weight-bold"
      )
        | Hi, my name is
      p(
        class="display-1 font-weight-bold"
      )
        | Vitaliy Ostapchuk.
      p(
        class="subtitle-2"
      )
        | I'm a 3D Software Engineer based in Stuttgart (Germany) specializing in building and occasionally designing exceptional, high-quality applications and websites.
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    // ...
  })
}
</script>


<style scoped>
</style>

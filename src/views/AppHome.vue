<template lang="pug">
v-container(
  fluid
)
  v-card(
    class="mx-auto transparent-bg"
    v-bind:class="{ 'd-flex' : $vuetify.breakpoint.lgAndUp }"
  )
    v-card(
      class="mx-auto transparent-bg pa-2"
    )
      v-card-title(
        class="accent--text font-weight-bold py-12"
      )
        p(
          v-if="$vuetify.breakpoint.mdAndUp"
          class="tagline display-4"
        ) {{tagline}}
        p(
          class="display-3"
          v-if="$vuetify.breakpoint.smAndDown"
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
    v-card(
      class="mx-auto transparent-bg d-flex justify-center"
      v-bind:class="{ 'desktopFlex' : $vuetify.breakpoint.mdAndUp }"
    )
      v-img(
        :src="require('../assets/bird.svg')"
        class="img-bird align-self-center"
        width="20%"
        contain
      )
      v-img(
        :src="require('../assets/holo2.png')"
        class="img-holo align-self-end"
        width="40%"
        contain
      )
</template>

<script>
export default {
  name: 'Home',
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
  font-size: 7rem!important;
}

.desktopFlex {
  max-width: 60%;
}
</style>

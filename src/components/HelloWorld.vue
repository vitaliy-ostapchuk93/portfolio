<template lang="pug">
v-container(
  fluid
)
  v-row(
    align="center"
    justify="center"
  )
    v-col(
      cols="12"
      sm="6"
      md="5"
    )
      v-card(
        flat
      )
        v-card-text(
          class="display-4 primary--text"
        )
          p(
            class="font-weight-bold"
          )
            | let's build something great!
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
            | I'm a software engineer based in Stuttgart, Germany specializing in building (and occasionally designing) exceptional, high-quality applications and websites.
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    // ...
  })
}
</script>

<style scoped>
.v-card{
  background-color: transparent;
}
</style>

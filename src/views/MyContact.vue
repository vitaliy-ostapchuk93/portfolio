<template lang="pug">
v-container(
  fluid
)
  v-card(
   class="mx-auto"
   max-width="800"
   flat
  )
    v-card-title
      p(
        class="display-2 layout justify-center"
      ) {{title}}

    v-card-text(
      class="title primary--text py-10"
    )
      v-row(
        justify="space-around"
      )
        v-avatar(
           size="250"
        )
          img(
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="Vitaliy Ostapchuk"
          )
    v-card-text(
      class="title primary--text py-10"
    )
      v-card(
        class="mx-auto"
        max-width="600"
        flat
      )
        p {{description}}
    v-card-actions
      v-btn(
        outlined
        color="secondary"
      ) Button
</template>

<script>
export default {
  name: 'Contact',
  data: () => ({
    title: 'Get In Touch!',
    description: "Although I'm not currently looking for freelance opportunities, my inbox is always open. Whether for a potential project or just to say hi, I'll try my best to answer your email!"
  })
}
</script>

<style scoped>
</style>

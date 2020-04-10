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
        class="display-2 justify-center"
      ) {{title}}

    v-card-text(
      class="title primary--text py-10"
    )
      v-row(
        justify="space-around"
      )
        img(
          src=""
          alt="Vitaliy Ostapchuk"
        )

      p {{description}}
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

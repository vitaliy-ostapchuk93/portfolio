<template lang="pug">
v-container(
  fluid
)
  v-card(
   class="mx-auto"
   max-width="800"
   flat
  )
    v-card-title(
      class="secondary--text"
    )
      p(
        class="display-2 layout justify-center"
      ) {{title}}

    v-card-subtitle(
      class="display-2 layout justify-center"
    )
      v-avatar(
        size="350"
      )
        img(
          :src="require('../assets/profile.jpg')"
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

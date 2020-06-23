<template lang="pug">
v-container
  v-card(
    class="mx-auto"
    min-width="410"
    flat
  )
    v-card-title(
      class="justify-center"
    )
      v-icon(
        large
        color="accent"
        class="ma-4"
      ) mdi-briefcase
      p(
        class="ma-4 accent--text font-weight-medium text-uppercase display-1"
      ) Work
    v-card-text
      my-work

  v-divider(
    inset
    class="ma-8"
  )

  v-card(
    class="mx-auto"
    min-width="410"
    flat
  )
    v-card-title(
      class="justify-center"
    )
      v-icon(
        large
        color="accent"
        class="ma-4"
      ) mdi-school
      p(
        class="ma-4 accent--text font-weight-medium text-uppercase display-1"
      ) Education
    v-card-text
      my-education

  v-divider(
    inset
    class="ma-8"
  )

  v-card(
    class="mx-auto"
    min-width="410"
    flat
  )
    v-card-title(
      class="justify-center"
    )
      v-icon(
        large
        color="accent"
        class="ma-4"
      ) mdi-rocket-launch
      p(
        class="ma-4 accent--text font-weight-medium text-uppercase display-1"
      ) Projects &amp; Other
    v-card-text
      my-projects

</template>

<script>
import MyWork from './MyWork'
import MyEducation from './MyEducation'
import MyProjects from './MyProjects'

export default {
  name: 'Experience',
  components: {
    MyWork,
    MyEducation,
    MyProjects
  },
  data: () => ({
    // ...
  })
}
</script>

<style scoped>
</style>

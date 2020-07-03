<template lang="pug">
v-container(
  class="pa-0"
)
  v-card(
    class="mx-auto"
    flat
  )
    v-card-title(
      class="px-0 justify-center accent--text"
    )
      v-icon(
        large
        color="accent"
        class="ma-4"
      ) mdi-briefcase
      p(
        class="ma-4 accent--text font-weight-medium text-uppercase display-2"
      ) {{work}}

    v-card-text(
      class="pa-0"
    )
      my-work

  v-divider(
    inset
    class="ma-8"
  )

  v-card(
    class="mx-auto"
    flat
  )
    v-card-title(
      class="px-0 justify-center accent--text"
    )
      v-icon(
        large
        color="accent"
        class="ma-4"
      ) mdi-school
      p(
        class="ma-4 font-weight-medium text-uppercase display-2"
      ) Education
    v-card-text(
      class="pa-0"
    )
      my-education

  v-divider(
    inset
    class="ma-8"
  )

  v-card(
    class="mx-auto"
    flat
  )
    v-card-title(
      class="px-0 justify-center accent--text"
    )
      v-icon(
        large
        color="accent"
        class="ma-4"
      ) mdi-rocket-launch
      p(
        class="ma-4 font-weight-medium text-uppercase display-2"
      ) Projects &amp; Other
    v-card-text(
      class="pa-0"
    )
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
    work: 'Work',
    education: 'Education',
    projects: 'Projects &amp; Other'
  })
}
</script>

<style scoped>
</style>

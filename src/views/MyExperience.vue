<template lang="pug">
v-container(
  class="pa-0"
)
  v-card(
    class="mx-auto"
    :flat="$vuetify.breakpoint.mdAndUp"
  )
    v-card-subtitle
      v-img(
        :src="require('../assets/undraw/on_the_office.svg')"
        class="my-3"
        contain
        height="500"
      )
    v-card-title(
      class="px-0 justify-center accent--text"
    )
      v-icon(
        x-large
        color="accent"
        class="ma-4"
      ) mdi-briefcase
      p(
        class="tagline ma-4 font-weight-medium display-2"
      ) {{work}}

    v-card-text(
      class="pa-0"
    )
      my-work

    v-card-subtitle
      v-img(
        :src="require('../assets/undraw/certificate.svg')"
        class="my-3"
        contain
        height="500"
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
        class="tagline ma-4 font-weight-medium display-2"
      ) {{education}}
    v-card-text(
      class="pa-0"
    )
      my-education

    v-card-subtitle
      v-img(
        :src="require('../assets/undraw/working_from_anywhere.svg')"
        class="my-3"
        contain
        height="500"
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
        class="tagline ma-4 font-weight-medium display-2"
      ) {{projects}}
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
    projects: 'Projects & Other'
  })
}
</script>

<style scoped>
.tagline {
  font-family: Gilroy-Thin!important;
}
</style>

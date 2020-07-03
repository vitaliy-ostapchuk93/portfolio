<template lang="pug">
v-card(
  class="pa-md-4 mx-auto"
  outlined
)
  v-carousel(
    height="400"
    cycle
    hide-delimiters
    show-arrows-on-hover
  )
    v-carousel-item(
      v-for="(picture, i) in projectPictures"
      :key="i"
    )
      v-sheet(
        color="white"
        height="100%"
      )
        v-row(
          class="fill-height"
          align="center"
          justify="center"
        )
          v-img(
            :src="picture"
            contain
          )

  v-card-title(
    primary-title
    class="headline primary--text"
  ) {{projectName}}

  v-card-text(
    class="text--primary"
  ) {{projectDescription}}

  v-container
    v-chip(
      v-for="tag in projectTags"
      :key="tag"
      class="ma-1"
      color="secondary"
      outlined
      small
    ) {{tag}}

  v-card-actions
    v-btn(
      v-if="projectLink"
      :href="projectLink"
      target="_blank"
      class="mx-2"
      color="primary lighten-2"
      icon
    )
      v-icon(size="24px") mdi-open-in-new
    v-btn(
      v-if="projectGit"
      :href="projectGit"
      target="_blank"
      class="mx-2"
      color="primary lighten-2"
      icon
    )
      v-icon(size="24px") mdi-github
</template>

<script>
export default {
  name: 'ProjectItem',
  props: {
    projectPictures: {
      type: Array,
      required: true
    },
    projectName: {
      type: String,
      required: true
    },
    projectDescription: {
      type: String,
      required: true
    },
    projectTags: {
      type: Array,
      required: true
    },
    projectLink: {
      type: String,
      required: false,
      default: ''
    },
    projectGit: {
      type: String,
      required: false,
      default: ''
    }
  },
  data: () => ({
    // ...
  })
}
</script>

<style scoped>
</style>

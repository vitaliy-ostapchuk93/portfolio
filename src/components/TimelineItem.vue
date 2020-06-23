<template lang="pug">
v-timeline-item(
  color="secondary"
)
  template(
    v-slot:opposite
  )
    span(
      class="headline font-weight-bold primary--text"
    )
      | {{yearStart}} - {{yearEnd}}

  v-card(
    class="pa-md-4 mx-lg-auto"
    max-width="600"
    min-width="300px"
    outlined
  )

    v-card-subtitle(
      primary-title
      class="pa-4 pt-8 overline secondary--text"
    )
      h2 {{head}} &#64;

    timeline-item-title(
      :itemTitle="title"
      :itemLogo="logo"
      :itemLink="link"
    )

    timeline-item-description(
      :itemDescription="description"
    )
</template>

<script>
import TimelineItemTitle from './TimelineItemTitle'
import TimelineItemDescription from './TimelineItemDescription'

export default {
  name: 'TimelineItem',
  components: {
    TimelineItemTitle,
    TimelineItemDescription
  },
  props: {
    head: {
      type: String,
      required: true
    },
    title: {
      type: [String, Array],
      required: true
    },
    logo: {
      type: [Object, Array],
      required: true
    },
    yearStart: {
      type: Number,
      required: true
    },
    yearEnd: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: [String, Array],
      default: '',
      required: false
    }
  },
  data: () => ({
    // ...
  })
}
</script>

<style scoped>
</style>

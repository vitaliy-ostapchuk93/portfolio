<template lang="pug">
v-timeline-item(
  color="secondary"
  :small="$vuetify.breakpoint.smAndDown"
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
    outlined
  )

    v-card-subtitle(
      primary-title
      class="pa-4 pt-8 overline secondary--text"
    )
      h2 {{head}} &#64;

    timeline-item-title(
      v-if="$vuetify.breakpoint.mdAndUp"
      :itemTitle="title"
      :itemLogo="logo"
      :itemLink="link"
    )

    timeline-item-title-mobile(
      v-if="$vuetify.breakpoint.smAndDown"
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
import TimelineItemTitleMobile from './TimelineItemTitleMobile'
import TimelineItemDescription from './TimelineItemDescription'

export default {
  name: 'TimelineItem',
  components: {
    TimelineItemTitle,
    TimelineItemTitleMobile,
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
      type: [String, Array],
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
      type: [String, Object],
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

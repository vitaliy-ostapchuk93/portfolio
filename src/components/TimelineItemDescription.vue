<template lang="pug">
v-card-text(
  class="text--primary"
)
  div(
    v-if="typeof(itemDescription) === 'string'"
  ) {{itemDescription}}

  div(
    v-if="typeof(itemDescription) === 'object'"
  )
    p(
      class="subtitle-2"
    ) Thesis
    p(
      class="body-2"
    ) {{itemDescription.thesis}}

    p(
      v-if="itemDescription.modules.length > 1"
      class="subtitle-2"
    ) Selective modules
    p(
      v-if="itemDescription.modules.length == 1"
      class="subtitle-2"
    ) Selective module
    li(
      v-for="smodule in itemDescription.modules"
      class="body-2"
    ) {{smodule}}

</template>

<script>
export default {
  name: 'TimelineItemTitle',
  props: {
    itemDescription: {
      type: [String, Object],
      required: true
    }
  },
  data: () => ({
    // ...
  })
}
</script>

<style scoped>
</style>

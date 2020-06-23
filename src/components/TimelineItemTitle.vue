<template lang="pug">
v-card-title(
  primary-title
  class="headline"
)

  v-layout(
    v-if="typeof(itemTitle) === 'string'"
    row
    wrap
    class="px-4"
  )
    v-flex(
      xs7
    )
      a(
        v-if="itemLink"
        :href="itemLink"
        target="_blank"
      ) {{itemTitle}}
      p(
        v-if="!itemLink"
      ) {{itemTitle}}
    v-flex(
      xs4
      class="mx-auto"
    )
      v-img(
        :src="itemLogo"
        contain
      )

  v-layout(
    v-if="typeof(itemTitle) === 'object' && itemTitle.length == 2 && typeof(itemLink) === 'object' && itemLink.length == 2"
    row
    wrap
    class="px-4"
  )
    p
      a(
        :href="itemLink[0]"
        target="_blank"
      ) {{itemTitle[0]}}
      | &#32; &amp; &#32;
      a(
        :href="itemLink[1]"
        target="_blank"
      ) {{itemTitle[1]}}

  v-layout(
    v-if="typeof(itemLogo) === 'object' && itemLogo.length"
    row
    wrap
    class="px-4"
  )
    v-img(
      v-if="typeof(itemLogo) === 'object' && itemLogo.length"
      v-for="logo in itemLogo"
      :key="logo"
      :src="logo"
      class="align-self-center mx-3"
      width="30%"
      contain
    )
</template>

<script>
export default {
  name: 'TimelineItemTitle',
  props: {
    itemTitle: {
      type: [String, Array],
      required: true
    },
    itemLogo: {
      type: [Object, Array],
      required: true
    },
    itemLink: {
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

<template lang="pug">
v-card(
  class="mx-auto transparent-bg pa-2"
  flat
)
  v-card-title(
    class="accent--text py-8"
  )
    p(
      v-if="$vuetify.breakpoint.lgAndUp"
      class="tagline font-weight-medium display-4"
    ) {{tagline}}
    p(
      v-if="$vuetify.breakpoint.mdAndDown"
      class="tagline font-weight-medium display-2"
    ) {{tagline}}

  v-card-subtitle(
    class="title py-10"
  )
    p(
      class="font-weight-bold primary--text"
    ) {{intro}}
    p(
      class="display-1 font-weight-bold secondary--text"
    ) {{name}}
  v-card-text
    p(
      class="title primary--text"
    ) {{description}}
</template>

<script>
import i18n from '@/plugins/vue-i18n'

export default {
  name: 'HomeText',
  data: () => ({
    tagline: i18n.t('home_tagline'),
    intro: i18n.t('home_intro'),
    name: i18n.t('home_name'),
    description: i18n.t('home_description')
  })
}
</script>

<style scoped>
.tagline {
  font-family: Gilroy-Thin!important;
}
</style>

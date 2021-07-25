<template lang="pug">
v-timeline(
  :dense="$vuetify.breakpoint.smAndDown"
  class="mr-6"
)
  timeline-item(
    v-for="item in work"
    :key="item.id"
    :yearStart="item.yearStart"
    :yearEnd="item.yearEnd"
    :head="item.position"
    :title="item.company"
    :logo="item.logo"
    :link="item.website"
    :description="item.description"
  )
</template>

<script>
import i18n from '@/plugins/vue-i18n'

import TimelineItem from '../components/TimelineItem'

export default {
  name: 'Work',
  components: {
    TimelineItem
  },
  data: () => ({
    work: [
      {
        id: 'FARO',
        position: i18n.t('work_position_FARO'),
        company: 'FARO Europe GmbH',
        website: 'https://www.faro.com',
        logo: require('../assets/work/FARO.svg'),
        yearStart: 2019,
        yearEnd: new Date().getFullYear(),
        description: i18n.t('work_description_FARO')
      },
      {
        id: 'IMBI',
        position: i18n.t('work_position_IMBI'),
        company: i18n.t('work_company_IMBI'),
        website: 'https://www.klinikum.uni-heidelberg.de/medizinische-biometrie/wir-ueber-uns/wir-ueber-uns',
        logo: require('../assets/work/IMBI.png'),
        yearStart: 2016,
        yearEnd: 2017,
        description: i18n.t('work_description_IMBI')
      },
      {
        id: 'Freelance',
        position: i18n.t('work_position_Freelance'),
        company: '',
        website: '',
        logo: require('../assets/work/Freelancer.png'),
        yearStart: 2013,
        yearEnd: 2016,
        description: i18n.t('work_description_Freelance')
      }
    ]
  })
}
</script>

<style scoped>
</style>

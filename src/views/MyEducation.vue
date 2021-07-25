<template lang="pug">
v-timeline(
  :dense="$vuetify.breakpoint.smAndDown"
  class="mr-6"
)

  timeline-item(
    v-for="item in education"
    :key="item.id"
    :yearStart="item.yearStart"
    :yearEnd="item.yearEnd"
    :head="item.degree"
    :title="item.school"
    :logo="item.logo"
    :link="item.website"
    :description="item.description"
  )
</template>

<script>
import i18n from '@/plugins/vue-i18n'

import TimelineItem from '../components/TimelineItem'

export default {
  name: 'Education',
  components: {
    TimelineItem
  },
  data: () => ({
    education: [
      {
        id: 'MASTER',
        degree: i18n.t('education_master'),
        school: [
          i18n.t('education_uni_heidelberg'),
          i18n.t('education_hs_heilbronn')
        ],
        website: [
          'https://www.uni-heidelberg.de/en/study/all-subjects/medical-informatics/medical-informatics-master',
          'https://www.hs-heilbronn.de/mim'
        ],
        logo: [
          require('../assets/education/logo_hd.png'),
          require('../assets/education/logo_hhn.png')
        ],
        yearStart: 2017,
        yearEnd: 2019,
        description: {
          thesis: i18n.t('education_master_thesis'),
          link: 'https://opus-hshn.bsz-bw.de/frontdoor/index/index/searchtype/all/docId/169/start/2/rows/10',
          modules: [
            i18n.t('education_modules_mbs'),
            i18n.t('education_modules_dmed'),
            i18n.t('education_modules_dm'),
            i18n.t('education_modules_sc'),
            i18n.t('education_modules_ii')
          ]
        }

      },
      {
        id: 'MASTERTAIWAN',
        degree: i18n.t('education_master_tw'),
        school: 'Taipei Medical University, Taipei (Taiwan)',
        website: 'http://eng.tmu.edu.tw/',
        logo: require('../assets/education/logo_tmu.png'),
        yearStart: 2018,
        yearEnd: 2019,
        description: ''
      },
      {
        id: 'BACHELOR',
        degree: i18n.t('education_bachelor'),
        school: [
          i18n.t('education_uni_heidelberg'),
          i18n.t('education_hs_heilbronn')
        ],
        website: [
          'https://www.uni-heidelberg.de/en/study/all-subjects/medical-informatics/medical-informatics-bachelor-100',
          'https://www.hs-heilbronn.de/mib'
        ],
        logo: [
          require('../assets/education/logo_hd.png'),
          require('../assets/education/logo_hhn.png')
        ],
        yearStart: 2013,
        yearEnd: 2017,
        description: {
          thesis: i18n.t('education_bachelor_thesis'),
          modules: [
            i18n.t('education_modules_mbs')
          ]
        }
      },
      {
        id: 'HIGHSCHOOL1',
        degree: i18n.t('education_highschool'),
        school: 'Friedrich-Dessauer-Gymnasium, Frankfurt (Germany)',
        website: 'https://www.fdg-frankfurt.de/',
        logo: require('../assets/education/logo_fdg.png'),
        yearStart: 2010,
        yearEnd: 2013,
        description: ''
      },
      {
        id: 'HIGHSCHOOL2',
        degree: i18n.t('education_gymnasium'),
        school: 'Elizabethtown High School, Elizabethtown KY (USA)',
        website: 'https://www.etown.k12.ky.us/1/Home',
        logo: require('../assets/education/logo_etown.png'),
        yearStart: 2010,
        yearEnd: 2011,
        description: ''
      }
    ]
  })
}
</script>

<style scoped>
</style>

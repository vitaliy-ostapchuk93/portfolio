<template lang="pug">
v-timeline(
  :dense="$vuetify.breakpoint.smAndDown"
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
        degree: 'M.Sc. in Medical Informatics',
        school: [
          'Ruprecht Karl University of Heidelberg',
          'Heilbronn University of Applied Sciences'
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
          thesis: 'Implementation of an interactive pattern mining framework on electronic health record datasets',
          link: 'https://opus-hshn.bsz-bw.de/frontdoor/index/index/searchtype/all/docId/169/start/2/rows/10',
          modules: [
            'Medical Image and Signal Processing',
            'Digital Media',
            'Data Mining',
            'Scientific Computing',
            'Innovative interaction technologies'
          ]
        }

      },
      {
        id: 'MASTERTAIWAN',
        degree: 'M.Sc. in Medical Informatics (Thesis)',
        school: 'Taipei Medical University, Taipei (Taiwan)',
        website: 'http://eng.tmu.edu.tw/',
        logo: require('../assets/education/logo_tmu.png'),
        yearStart: 2018,
        yearEnd: 2019,
        description: ''
      },
      {
        id: 'BACHELOR',
        degree: 'B.Sc. in Medical Informatics',
        school: [
          'Ruprecht Karl University of Heidelberg',
          'Heilbronn University of Applied Sciences'
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
          thesis: 'Design and implementation of a software component for surface scanning of fibula grafts for navigation-assisted mandibular reconstruction',
          modules: [
            'Medical Image and Signal Processing'
          ]
        }
      },
      {
        id: 'HIGHSCHOOL1',
        degree: 'High School',
        school: 'Friedrich-Dessauer-Gymnasium, Frankfurt (Germany)',
        website: 'https://www.fdg-frankfurt.de/',
        logo: require('../assets/education/logo_fdg.png'),
        yearStart: 2010,
        yearEnd: 2013,
        description: ''
      },
      {
        id: 'HIGHSCHOOL2',
        degree: 'High School',
        school: 'Elizabethtown High School, Elizabethtown KY (USA)',
        website: 'https://www.etown.k12.ky.us/1/Home',
        logo: require('../assets/education/logo_etown.png'),
        yearStart: 2010,
        yearEnd: 2011,
        description: ''
      },
      {
        id: 'MIDDLESCHOOL',
        degree: 'Middle School',
        school: 'Leibnizschule, Frankfurt (Germany)',
        website: 'https://www.leibnizschule-ffm.de/',
        logo: require('../assets/education/logo_leibnizschule.png'),
        yearStart: 2005,
        yearEnd: 2010,
        description: ''
      }
    ]
  })
}
</script>

<style scoped>
</style>

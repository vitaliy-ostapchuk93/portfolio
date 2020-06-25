<template lang="pug">
v-timeline(
  :dense="$vuetify.breakpoint.smAndDown"
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
        position: '3D Software Engineer',
        company: 'FARO Europe GmbH & Co. KG',
        website: 'https://www.faro.com',
        logo: require('../assets/work/FARO.svg'),
        yearStart: 2019,
        yearEnd: new Date().getFullYear(),
        description: 'FARO® is the world’s most trusted source for 3D measurement, imaging and realization technology. The company develops and manufactures leading edge solutions that enable high-precision 3D capture, measurement and analysis across a variety of industries including manufacturing, construction, engineering and public safety.'
      },
      {
        id: 'IMBI',
        position: 'Working Student',
        company: 'Institut für Medizinische Biometrie und Informatik',
        website: 'https://www.klinikum.uni-heidelberg.de/medizinische-biometrie/wir-ueber-uns/wir-ueber-uns',
        logo: require('../assets/work/IMBI.png'),
        yearStart: 2016,
        yearEnd: 2017,
        description: 'The Department of Biometry at the Institute of Medical Biometry and Informatics (IMBI) has many years of extensive expertise in both biometric-statistical method development and consulting as well as in the planning, implementation and evaluation of patient-oriented research projects. The IMBI is involved in a wide range of activities in university and non-university teaching, as well as in the part-time Master course in Medical Biometry/Biostatistics. The research projects supervised by the IMBI working groups cover the entire spectrum of medical disciplines and include clinical therapy studies of all phases, diagnostic and prognosis studies, genetic studies, observational and evaluation studies, systematic reviews and clinical registries.'
      },
      {
        id: 'Freelance',
        position: 'Freelancer',
        company: 'Multiple Companies',
        website: '',
        logo: require('../assets/work/Freelancer.png'),
        yearStart: 2013,
        yearEnd: 2016,
        description: 'Occasionally developing websites, designing logos, redefining processes or help setting up the IT infrastructure for small companies.'
      }
    ]
  })
}
</script>

<style scoped>
</style>

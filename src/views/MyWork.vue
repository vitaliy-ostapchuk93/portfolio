<template lang="pug">
v-card(
  class="transparent-bg mx-auto"
  max-width="1200"
  min-width="450"
  flat
)
  v-timeline(
    :dense="$vuetify.breakpoint.smAndDown"
    reverse
  )
    v-timeline-item(
      v-for="item in work"
      :key="item.id"
      color="secondary"
      :small="$vuetify.breakpoint.smAndDown"
    )
      template(
        v-slot:opposite
      )
        span(
          class="headline font-weight-bold primary--text"
        )
          | {{item.yearStart}} - {{item.yearEnd}}

      v-card(
        class="mx-auto"
        max-width="600"
        min-width="300px"
        outlined
      )
        v-container(
          fluid
        )
          v-layout(
            row
            wrap
            class="pa-4 align-center"
          )
            v-flex(
              xs12
            )
              v-card-title(
                primary-title
                class="overline secondary--text"
              )
                h2 {{item.position}} &#64;

            v-flex(
              xs8
            )
              v-card-title(
                primary-title
                class="headline"
              )
                a(
                  v-if="item.website"
                  :href="item.website"
                  target="_blank"
                ) {{item.company}}
              v-card-title(
                v-if="!item.website"
                primary-title
                class="headline"
              ) {{item.company}}

            v-flex(
              xs3
            )
              v-img(
                :src="item.logo"
                contain
              )

            v-flex(
              xs12
            )
              v-card-text(class="text--primary")
                p {{item.description}}
</template>

<script>
export default {
  name: 'Work',
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

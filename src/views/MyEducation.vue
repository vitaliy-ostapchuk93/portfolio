<template lang="pug">
v-timeline(
  :dense="$vuetify.breakpoint.smAndDown"
)
  v-timeline-item(
    v-for="item in education"
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
              h2 {{item.degree}} &#64;

          v-card-title(
            primary-title
            class="headline"
            v-if="item.university"
          )
            p {{item.university}}

          v-card-text(
            v-if="item.university"
          )
            v-layout(
              row
              wrap
              class="pa-2 align-center"
            )
              v-img(
                v-for="logo in item.logos"
                :key="logo"
                :src="logo"
                class="align-self-center mx-3"
                width="30%"
                contain
              )

          v-card-text(
            v-if="item.university"
            class="subtitle-1 py-10"
          )
            v-btn(
              v-if="item.link"
              text
              color="primary"
              class="pl-0"
              :href="item.link"
              tile
            )
              v-icon(
                class="pa-2"
              ) mdi-file-link-outline
              | Thesis
            v-btn(
              v-if="!item.link"
              text
              color="primary"
              class="pa-0"
            ) Thesis
            p {{item.thesis}}
    </v-btn>
    </template>

<script>
export default {
  name: 'Education',
  data: () => ({
    education: [
      {
        id: 'MASTER',
        degree: 'M.Sc. in Medical Informatics',
        university: 'Ruprecht Karl University of Heidelberg & Heilbronn University of Applied Sciences',
        websites: [
          'https://www.uni-heidelberg.de/en/study/all-subjects/medical-informatics/medical-informatics-master',
          'https://www.hs-heilbronn.de/mim'
        ],
        logos: [
          require('../assets/education/logo_hd.png'),
          require('../assets/education/logo_hhn.png')
        ],
        yearStart: 2017,
        yearEnd: 2019,
        thesis: 'Implementation of an interactive pattern mining framework on electronic health record datasets',
        link: 'https://opus-hshn.bsz-bw.de/frontdoor/index/index/searchtype/all/docId/169/start/2/rows/10'
      },
      {
        id: 'BACHELOR',
        degree: 'B.Sc. in Medical Informatics',
        university: 'Ruprecht Karl University of Heidelberg & Heilbronn University of Applied Sciences',
        websites: [
          'https://www.uni-heidelberg.de/en/study/all-subjects/medical-informatics/medical-informatics-bachelor-100',
          'https://www.hs-heilbronn.de/mib'
        ],
        logos: [
          require('../assets/education/logo_hd.png'),
          require('../assets/education/logo_hhn.png')
        ],
        yearStart: 2013,
        yearEnd: 2017,
        thesis: 'Entwurf und Implementierung einer Software-Komponente zur Oberflächenabtastung von Fibulatransplantaten für die navigationsgestützte Mandibularekonstruktion'
      }
    ]
  })
}
</script>

<style scoped>
</style>

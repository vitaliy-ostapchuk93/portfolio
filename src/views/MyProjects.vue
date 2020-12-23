<template lang="pug">
v-container
  v-row
    v-col(
      v-for="project in projects"
      :key="project.name"
      :cols="projectColSize"
    )
      project-item(
        :projectName="project.name",
        :projectDescription="project.description"
        :projectPictures="project.pictures"
        :projectTags="project.tags"
        :projectLink="project.link"
        :projectGit="project.git"
      )

</template>

<script>
import i18n from '@/plugins/vue-i18n'

import ProjectItem from '../components/ProjectItem'

export default {
  name: 'Projects',
  components: {
    ProjectItem
  },
  data: () => ({
    projects: [
      {
        name: i18n.t('projects_disease_miner_name'),
        description: i18n.t('projects_disease_miner_description'),
        pictures: [
          require('../assets/projects/master/dashboard.png'),
          require('../assets/projects/master/explorer.png'),
          require('../assets/projects/master/results.png'),
          require('../assets/projects/master/algo.png')
        ],
        tags: [
          {
            title: 'Java',
            icon: 'mdi-language-java'
          },
          {
            title: 'HTML',
            icon: 'mdi-language-html5'
          },
          {
            title: 'CSS',
            icon: 'mdi-language-css3'
          },
          {
            title: 'Tomcat',
            iconSrc: require('../assets/icons/tomcat.svg')
          },
          {
            title: 'Jenkins',
            iconSrc: require('../assets/icons/jenkins.svg')
          },
          {
            title: 'Master Thesis',
            iconSrc: require('../assets/icons/graduate.png')
          },
          {
            title: 'Pattern Mining'
          },
          {
            title: 'Big Data'
          }
        ],
        link: 'https://opus-hshn.bsz-bw.de/frontdoor/index/index/searchtype/all/docId/169/start/3/rows/10',
        git: 'https://github.com/vitaliy-ostapchuk93/disease-pattern-miner'
      },
      {
        name: 'ARA',
        description: i18n.t('projects_ara_description'),
        pictures: [
          require('../assets/projects/ara/concept.jpg'),
          require('../assets/projects/ara/sleeve-and-holo.jpg'),
          require('../assets/projects/ara/sleeve-and-pi.jpg'),
          require('../assets/projects/ara/me-holo.png')
        ],
        tags: [
          {
            title: 'Unity',
            icon: 'mdi-unity'
          },
          {
            title: 'C#',
            icon: 'mdi-language-csharp'
          },
          {
            title: 'Python',
            icon: 'mdi-language-python'
          },
          {
            title: 'Raspberry Pi',
            icon: 'mdi-raspberry-pi'
          },
          {
            title: 'Augmented Reality',
            icon: 'mdi-augmented-reality'
          },
          {
            title: 'Haptic Interfaces'
          },
          {
            title: 'Small Animal Phobia'
          },
          {
            title: 'Medical Computing'
          }
        ],
        link: 'https://ieeexplore.ieee.org/abstract/document/8904800/keywords#keywords'
      },
      {
        name: 'Portfolio',
        description: i18n.t('projects_portfolio_description'),
        pictures: [
          require('../assets/projects/portfolio/home-desktop.png'),
          require('../assets/projects/portfolio/home-mobile.png'),
          require('../assets/projects/portfolio/timeline-desktop-1.png'),
          require('../assets/projects/portfolio/menu-mobile.png'),
          require('../assets/projects/portfolio/timeline-desktop-2.png')
        ],
        tags: [
          {
            title: 'NodeJS',
            icon: 'mdi-nodejs'
          },
          {
            title: 'Vue',
            icon: 'mdi-vuejs'
          },
          {
            title: 'JavaScript',
            icon: 'mdi-language-javascript'
          },
          {
            title: 'HTML',
            icon: 'mdi-language-html5'
          },
          {
            title: 'Vuetify',
            icon: 'mdi-vuetify'
          },
          {
            title: 'Netlify'
          },
          {
            title: 'YARN'
          },
          {
            title: 'Express'
          },
          {
            title: 'SASS'
          },
          {
            title: 'Pug'
          }
        ],
        link: 'https://vitaliy-ostapchuk.netlify.app',
        git: 'https://github.com/vitaliy-ostapchuk93/portfolio'
      },
      {
        name: i18n.t('project_bachelor_name'),
        description: i18n.t('project_bachelor_description'),
        pictures: [
          require('../assets/projects/bachelor/computer-assisted-nav.png'),
          require('../assets/projects/bachelor/nav-exp.png'),
          require('../assets/projects/bachelor/app-1.png'),
          require('../assets/projects/bachelor/app-2.png'),
          require('../assets/projects/bachelor/mandibula-reconstruction.png')
        ],
        tags: [
          {
            title: 'C++',
            icon: 'mdi-language-cpp'
          },
          {
            title: 'Qt'
          },
          {
            title: 'Bachelor Thesis',
            iconSrc: require('../assets/icons/graduate.png')
          },
          {
            title: 'Medical Image Computing'
          },
          {
            title: 'Signal Processing'
          },
          {
            title: 'Usability'
          }
        ]
      }
    ]
  }),
  computed: {
    projectColSize: function () {
      if (this.$vuetify.breakpoint.smAndDown) {
        return 12
      } else if (this.$vuetify.breakpoint.mdOnly) {
        return 6
      } else {
        return 6
      }
    }
  }
}
</script>

<style scoped>
</style>

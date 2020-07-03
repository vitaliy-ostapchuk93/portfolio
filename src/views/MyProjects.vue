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
import ProjectItem from '../components/ProjectItem'

export default {
  name: 'Projects',
  components: {
    ProjectItem
  },
  data: () => ({
    projects: [
      {
        name: 'Disease Pattern Miner',
        description: 'Disease Pattern Miner is a free, open-source mining framework for interactively discovering sequential disease patterns in medical health record datasets ...',
        pictures: [
          require('../assets/projects/master/dashboard.png'),
          require('../assets/projects/master/explorer.png'),
          require('../assets/projects/master/results.png'),
          require('../assets/projects/master/algo.png')
        ],
        tags: [
          'Master Thesis',
          'Java',
          'Tomcat',
          'Jenkins',
          'Pattern Mining',
          'Big Data',
          'HTML',
          'CSS'
        ],
        link: 'https://opus-hshn.bsz-bw.de/frontdoor/index/index/searchtype/all/docId/169/start/3/rows/10',
        git: 'https://github.com/vitaliy-ostapchuk93/disease-pattern-miner'
      },
      {
        name: 'ARA',
        description: 'Exposure therapy in Augmented Reality has proven its effectiveness in the treatment of small animal phobia. However, the conventional Augmented Reality Exposure Therapy confronts the user with visual stimulation only. The proposed concept called ARA aims to enhance the sense of realism by adding vibrotactile feedback to Augmented Reality Exposure Therapy ...',
        pictures: [
          require('../assets/projects/ara/concept.jpg'),
          require('../assets/projects/ara/sleeve-and-holo.jpg'),
          require('../assets/projects/ara/sleeve-and-pi.jpg'),
          require('../assets/projects/ara/me-holo.png')
        ],
        tags: [
          'Augmented Reality',
          'Haptic Interfaces',
          'Medical Computing',
          'Small Animal Phobia',
          'Unity',
          'C#',
          'Python',
          'Raspberry Pi'
        ],
        link: 'https://ieeexplore.ieee.org/abstract/document/8904800/keywords#keywords'
      },
      {
        name: 'Portfolio',
        description: 'My personal portfolio built with Vue and hosted with Netlify ...',
        pictures: [
          require('../assets/projects/portfolio/home-desktop.png'),
          require('../assets/projects/portfolio/home-mobile.png'),
          require('../assets/projects/portfolio/timeline-desktop-1.png'),
          require('../assets/projects/portfolio/menu-mobile.png'),
          require('../assets/projects/portfolio/timeline-desktop-2.png')
        ],
        tags: [
          'Vue',
          'Netlify',
          'YARN',
          'JavaScript',
          'Express',
          'Vuetify',
          'NodeJS',
          'SASS',
          'Pug'
        ],
        link: 'https://vitaliy-ostapchuk.netlify.app',
        git: 'https://github.com/vitaliy-ostapchuk93/portfolio'
      },
      {
        name: 'Navigation-assisted fibula reconstruction',
        description: '',
        pictures: [
          require('../assets/projects/bachelor/computer-assisted-nav.png'),
          require('../assets/projects/bachelor/nav-exp.png'),
          require('../assets/projects/bachelor/app-1.png'),
          require('../assets/projects/bachelor/app-2.png'),
          require('../assets/projects/bachelor/mandibula-reconstruction.png')
        ],
        tags: [
          'Bachelor Thesis',
          'Medical Image Computing',
          'C++',
          'Qt',
          'Signal Processing',
          'Usability'
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

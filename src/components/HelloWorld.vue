<template lang="pug">
v-layout(text-center wrap)
  v-flex(xs12)
    v-img(
      :src="require('../assets/logo.svg')"
      class="my-3"
      contain
      height="200"
    )

  v-flex(mb-4)
    h1.mb-6
      .headline {{ $t("hello") }}
      .display-3 {{ msg }}

    p.subheading.font-weight-regular
      | For help and collaboration with other Vuetify developers,
      br
      | please join our online
      |
      a(
        href="https://community.vuetifyjs.com"
        rel="noopener"
        target="_blank"
      ) Discord Community

  v-flex(mb-5 xs12)
    h2.headline.mb-3 What's next?
    v-layout(justify-center)
      a(
        v-for="(next, i) in whatsNext"
        :key="i"
        :href="next.href"
        class="subheading mx-3"
        rel="noopener"
        target="_blank"
      ) {{ next.text }}

  v-flex(xs12 mb-5)
    h2.headline.mb-3 Important Links
    v-layout(justify-center)
      a(
        v-for="(link, i) in importantLinks"
        :key="i"
        :href="link.href"
        class="subheading mx-3"
        rel="noopener"
        target="_blank"
      ) {{ link.text }}

  v-flex(xs12 mb-5)
    h2.headline.mb-3 Ecosystem
    v-layout(justify-center)
      a(
        v-for="(eco, i) in ecosystem"
        :key="i"
        :href="eco.href"
        class="subheading mx-3"
        rel="noopener"
        target="_blank"
      ) {{ eco.text }}
</template>

<script>
export default {
  props: {
    msg: {
      required: true,
      type: String
    }
  },
  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader'
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify'
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify'
      }
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com'
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com'
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify'
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs'
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify'
      }
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer'
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/layout/pre-defined'
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
      }
    ]
  })
}
</script>

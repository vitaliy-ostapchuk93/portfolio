import Vue from 'vue'
import VueI18n from 'vue-i18n'

import messages from '@/assets/locales'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'en_US',
  fallbackLocale: 'en_US',
  messages
})

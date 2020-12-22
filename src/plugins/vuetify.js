/* jshint -W033 */

import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#050038',
        secondary: '#1362e2',
        accent: '#f24d00',
        error: '#D50000',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      }
    }
  },
  icons: {
    iconfont: 'mdi'
  }
})

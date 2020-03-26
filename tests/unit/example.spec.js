import Vue from 'vue'
import Vuetify from 'vuetify'

import { createLocalVue, shallowMount } from '@vue/test-utils'
import VueI18n from 'vue-i18n'
import Vue2Filters from 'vue2-filters'
import Vuelidate from 'vuelidate'

import HelloWorld from '@/components/HelloWorld.vue'


Vue.use(Vuetify)

const localVue = createLocalVue()

localVue.use(VueI18n)
localVue.use(Vue2Filters)
localVue.use(Vuelidate)
localVue.use(Vuetify)

describe('HelloWorld.vue', () => {
  let vuetify
  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
      localVue,
      i18n: new VueI18n(),
      vuetify
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

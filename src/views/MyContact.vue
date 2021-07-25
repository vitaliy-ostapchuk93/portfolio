<template lang="pug">
v-container(
  fluid
)
  v-card(
    class="mx-auto fill-height"
    max-width="800"
    :flat="$vuetify.breakpoint.mdAndUp"
  )
    v-card-subtitle
      v-img(
        :src="require('../assets/undraw/envelope.svg')"
        class="my-3"
        contain
        height="300"
      )
    v-card-title(
      class="accent--text layout justify-center"
    )
      p(
        v-if="$vuetify.breakpoint.lgAndUp"
        class="tagline font-weight-medium display-4"
      ) {{title}}
      p(
        v-if="$vuetify.breakpoint.mdAndDown"
        class="tagline font-weight-medium display-2"
      ) {{title}}

    v-card-text(
      class="title primary--text"
    ) {{description}}

    v-card-actions(
      class="primary--text layout justify-center"
    )
      v-col(
        :cols="9"
      )
        form(
          name="contact"
          method="POST"
          action="/thanks"
          netlify
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          @submit.prevent="handleSubmit"
        )
          input(
            type="hidden"
            name="form-name"
            value="contact"
          )
          v-text-field(
            v-model="name"
            :error-messages="nameErrors"
            :label="$t('contact_name')"
            name="name"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          )
          v-text-field(
            v-model="email"
            :error-messages="emailErrors"
            :label="$t('contact_email')"
            name="email"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          )
          v-textarea(
            v-model="message"
            :error-messages="messageErrors"
            :label="$t('contact_message')"
            name="message"
            required
            @input="$v.message.$touch()"
            @blur="$v.message.$touch()"
          )

          v-row(
            justify="center"
          )
            div(
              data-netlify-recaptcha="true"
            )

          v-row(
            justify="center"
          )
            v-btn(
              color="primary lighten-2"
              class="pa-4"
              text
              type="submit"
            ) {{submitBtn}}
            v-btn(
              color="primary lighten-2"
              class="pa-4"
              text
              @click="handleClear"
            ) {{clearBtn}}
</template>

<script>
import i18n from '@/plugins/vue-i18n'

import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'Contact',
  mixins: [validationMixin],
  validations: {
    name: { required },
    email: { required, email },
    message: { required }
  },
  data: () => ({
    title: i18n.t('contact_tagline'),
    description: i18n.t('contact_description'),
    name: '',
    email: '',
    message: '',
    submitBtn: i18n.t('contact_submit'),
    clearBtn: i18n.t('contact_clear')
  }),
  computed: {
    form () {
      return {
        name: this.name,
        email: this.email,
        message: this.message
      }
    },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.required && errors.push(i18n.t('contact_error_name_required'))
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push(i18n.t('contact_error_email_invalid'))
      !this.$v.email.required && errors.push(i18n.t('contact_error_email_required'))
      return errors
    },
    messageErrors () {
      const errors = []
      if (!this.$v.message.$dirty) return errors
      !this.$v.message.required && errors.push(i18n.t('contact_error_message_required'))
      return errors
    }
  },
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit () {
      this.$v.$touch()
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
      this.axios.post(
        '/contact',
        this.encode({
          'form-name': 'contact',
          ...this.form
        }),
        axiosConfig
      ).then(() => {
        this.$router.push('thanks')
      }).catch(() => {
        this.$router.push('404')
      })
    },
    handleClear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.message = ''
    }
  }
}
</script>

<style scoped>
.tagline {
  font-family: Gilroy-Thin!important;
}
</style>

<template lang="pug">
v-container(
  fluid
)
  v-card(
   class="mx-auto"
   max-width="800"
   flat
  )
    v-card-title(
      class="secondary--text display-2 layout justify-center"
    ) {{title}}

    v-card-text(
      class="title primary--text py-10"
    ) {{description}}

    v-card-actions(
      class="primary--text py-10 "
    )
      v-container(
        fluid
      )
        v-row(
           justify="center"
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
            )
              input(
                type="hidden"
                name="form-name"
                value="contact"
              )
              v-text-field(
                v-model="name"
                :error-messages="nameErrors"
                label="Name"
                name="name"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              )
              v-text-field(
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                name="email"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              )
              v-textarea(
                v-model="message"
                :error-messages="messageErrors"
                label="Message"
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
                  @click="handleSubmit"
                ) {{submitBtn}}
                v-btn(
                  color="primary lighten-2"
                  class="pa-4"
                  text
                  @click="handleClear"
                ) {{clearBtn}}

</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import axios from 'axios'

export default {
  name: 'Contact',
  mixins: [validationMixin],
  validations: {
    name: { required },
    email: { required, email },
    message: { required }
  },
  data: () => ({
    title: 'Get In Touch!',
    description: "Although I'm not currently looking for freelance opportunities, my inbox is always open. Whether for a potential project or just to say hi, I'll try my best to answer your email!",
    name: '',
    email: '',
    message: '',
    submitBtn: 'Submit',
    clearBtn: 'Clear'
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
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    messageErrors () {
      const errors = []
      if (!this.$v.message.$dirty) return errors
      !this.$v.message.required && errors.push('Message content is required.')
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
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
      axios.post(
        '/',
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
</style>

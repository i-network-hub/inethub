<template>
  <div class="contact container-custom flex flex-row items-center justify-center">
    <div class="contact-inner mx-auto">
      <div class="row">
        <div class="col-xs-12 col-md-6 center-xs middle-xs">
          <div v-if="submitted" class="contact-form contact-form--greeting">
            <div class="contact-form__heading">Great</div>
            <div class="contact-form__subheading">We have recived your request. Our team will get in touch with you soon.</div>
          </div>
          <div v-else class="contact-form">
            <span class="contact-form__heading">Hello!</span>
            <span class="contact-form__subheading">
              Please provide us a little information so that we can get back to you.
            </span>
            <span v-if="error.message" class="contact-form__error"> {{ error.message }} </span>
            <input :class="{'contact-form__input': true, 'contact-form__input--error': error.nameError }" type="text" v-model="name" placeholder="Your Name">
            <input :class="{'contact-form__input': true, 'contact-form__input--error': error.emailError || error.contactError }" type="text" v-model="email" placeholder="Your Email Id">
            <input :class="{'contact-form__input': true, 'contact-form__input--error': error.phoneError || error.contactError }" type="text" v-model="phone" placeholder="Your Phone Number">
            <button class="contact-cta" @click="submitForm" >
              <Loader v-if="loading"/>
              Submit
            </button>
          </div>
        </div>
        <div class="col-xs-12 col-md-6">
          <div class="contact-illustration">
            <img src="~@/assets/illustrations/IllustrationContact.svg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Loader from './../components/Loader'

export default {
  name: 'Contact',
  components: {
    Loader
  },
  data () {
    return {
      name: '',
      email: '',
      phone: '',
      error: {},
      loading: false,
      submitted: false,
      endpoint: 'https://us-central1-inetworkhub-b1c87.cloudfunctions.net/function/lead'
    }
  },
  methods: {
    validPhone (phone) {
      return String(parseInt(phone)).length === 10
    },
    validEmail (email) {
      return true
    },
    verifyData () {
      console.log('Verifying')

      if (!this.name) {
        this.error = {
          nameError: true,
          emailError: false,
          phoneError: false,
          message: 'Please tell us what should we call you.'
        }
      } else if (!this.email && !this.phone) {
        this.error = {
          nameError: false,
          emailError: true,
          phoneError: true,
          message: 'Please provide atleast one of email or phone so that we can reach back to you.'
        }
      } else if (!this.validEmail(this.email)) {
        this.error = {
          nameError: false,
          emailError: true,
          phoneError: false,
          message: 'Invlaid email. Please see if you typed email correctly.'
        }
      } else if (!this.validPhone(this.phone)) {
        this.error = {
          nameError: false,
          emailError: false,
          phoneError: true,
          message: 'Your phone number looks invalid.'
        }
      } else {
        this.error = {
          nameError: false,
          emailError: false,
          phoneError: false,
          message: ''
        }
      }
    },

    async submitForm () {
      this.loading = true
      this.verifyData()

      const { emailError, phoneError, nameError } = this.error

      if (!emailError && !phoneError && !nameError) {
        await axios.post(this.endpoint, {
          name: this.name,
          email: this.email,
          phone: this.phone
        }).then(res => {
          if (res.data.error) {
            throw new Error(res.data.error.message)
          }

          this.loading = false
          this.submitted = true
        }).catch(() => {
          this.loading = false
          this.submitted = false
        })
      } else {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.contact
  min-height: calc(100vh - 200px)
  margin-bottom: 150px !important

  &-cta
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    border: none
    font-size: var(--font-sm)
    font-weight: var(--weight-medium)
    color: var(--color-white)
    background-color: var(--color-primary)
    margin-top: 30px
    padding: var(--p-2) var(--p-3)
    border-radius: var(--radius-small)
    cursor: pointer
    width: 100%
    position: relative
    img
      display: block
      width: 45px
      margin-left: 15px
      transition: all var(--t-fast)
    &:hover
      img
        margin-left: 30px
  &-inner
    height: 500px
    border-radius: 16px
    overflow: hidden
    border: 1px solid var(--color-grey-light)
    @media (min-width: 1024px)
      max-width: 1000px

  &-form
    padding: 50px
    &__heading
      font-size: var(--font-xl)
      font-weight: var(--weight-bold)
    &__subheading
      margin-top: 15px
      display: block
      font-size: var(--font-lg)
      font-weight: var(--weight-medium)
      margin-bottom: 50px
    &__error
      font-size: var(--font-sm)
      color: red
      font-weight: var(--weight-medium)
    &__input
      display: block
      width: 100%
      height: 50px
      border: 1px solid var(--color-primary)
      padding: var(--p-1) var(--p-2)
      border-radius: var(--radius-small)
      color: var(--text-primary)
      margin: 15px 0
      &:active,
      &:focus
        outline: none
      &--error
        border: 1px solid red
    &--greeting
      margin-top: 130px
  &-illustration
    padding: 50px
    img
      display: block
      width: 100%
      height: auto
      background-size: contain
</style>

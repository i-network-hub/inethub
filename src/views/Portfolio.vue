<template>
  <div class="portfolio text-center ">
    <h1>Have a look at our portfolio.</h1>
  

  <div class="portfolio-wrapper">
      <a href=" https://firstsenseacademy.in/" target="_blank" class="website">
      <img src="~@/assets/images/firstsenseacademy.3c7e7a50.png" alt="Firstsenseacademy">
     <p> <a href=" https://firstsenseacademy.in/" target="_blank" >First Sense Academy</a></p>
      </a>

    <a href=" http://calltro.com/" target="_blank" class="website">
      <img src="~@/assets/images/calltronics.jpg" alt="Calltronics">
     <p> <a href="http://calltro.com/" target="_blank" >Calltronics</a></p>
      </a>

       <a href="  http://www.daretodream.co.in/" target="_blank" class="website">
      <img src="~@/assets/images/daretodream.jpg" alt="daretodream">
      <p><a href=" http://www.daretodream.co.in/" target="_blank" >Dare To Dream</a></p> 
      </a>

       <a href="http://www.farmhouseindore.com/" target="_blank" class="website">
      <img src="~@/assets/images/trinity.jpg" alt="TrinityRealEstates">
      <p><a href="http://www.farmhouseindore.com/" target="_blank" >Trinity Real Estates</a></p> 
      </a>
      
       <a href="http://www.mukatibimawala.co.in/" target="_blank" class="website">
      <img src="~@/assets/images/lic.jpg" alt="LIC">
      <p><a href="http://www.mukatibimawala.co.in/" target="_blank" >LIC</a></p> 
      </a>

        <a href="http://www.wowwordsofwise.co.in/" target="_blank" class="website">
      <img src="~@/assets/images/wow.jpg" alt="WOW!">
      <p><a href="http://www.wowwordsofwise.co.in/" target="_blank" >WOW! Words Of Wise</a></p> 
      </a>
      
       <a href="https://banarsi-dhaba.herokuapp.com/" target="_blank" class="website">
      <img src="~@/assets/images/banarsidhaba.jpg" alt="BanarsiDhaba">
      <p><a href="https://banarsi-dhaba.herokuapp.com/" target="_blank" >Banarsi Dhaba</a></p> 
      </a>
      
      <a href="http://www.suryapharmalimited-tz.com/" target="_blank" class="website">
      <img src="~@/assets/images/suryapharma.jpg" alt="SuryaPharma">
      <p><a href="http://www.suryapharmalimited-tz.com/" target="_blank" >Surya Pharma Limited</a></p> 
      </a>
    
       <h1 class="m-t-6 m-r-4"> &amp; Many More... </h1>


  </div>
  </div>
</template>

<script>
import axios from 'axios'
import Loader from './../components/Loader'

export default {
  name: 'Portfolio',
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

.portfolio
    min-height: calc(100vh - var(--nav-height))
    text-align: center
    padding: 0 20px
    -webkit-box-sizing: border-box
    box-sizing: border-box
    font-family: var(--font)
        color: var(--text-primary)
div 
    display: block    

.portfolio-wrapper
    display: -webkit-box
    display: -ms-flexbox
    display: flex
    flex-drection: row
    -ms-flex-wrap: wrap
    flex-wrap: wrap
    max-width: 1000px
    -webkit-box-pack: justify
    -ms-flex-pack: justify
    justify-content: space-between
    margin: 50px auto

.website
    width: 300px
    margin: 30px -10px
    color: var(--black)

a 
    color: var(--black)
    img 
      display: block
      width: 100%
      height: auto
      -webkit-transition: all .24s ease-in-out
      transition: all .24s ease-in-out 
      border-style: none
    &:hover
      img
        transform: scale(1.1)
        -moz-transform: scale(1.1)
        -webkit-transform: scale(1.1)
        -o-transform: scale(1.1)

  
    

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

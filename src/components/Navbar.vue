<template>
  <nav class="navbar" :style="{ 'background-color': navBackground }">
    <div class="navbar__inner mx-auto">
      <div class="row middle-xs">
        <div class="col-xs-6 col-md-2"  @click="$router.push('/')">
          <img src="~@/assets/icon/logonew.svg" alt="" class="navbar__logo">
        </div>
        <div class="col-md-8 center-xs navbar__menu-wrapper ">
          <div class="navbar__menu">
            <div class="navbar__menu-items flex flex-row">
              <router-link @click="toggle" exact to="/" class="navbar__menu-item">Home</router-link>
              <router-link @click="toggle" exact to="/about" class="navbar__menu-item">About Us</router-link>

              <div class="navbar__menu-items-servicesContainer" @mouseenter="menuActive = true" @mouseleave="menuActive = false">
                <router-link @click="toggle" exact to="/services" class="navbar__menu-item">Services</router-link>

                <transition name="fade-drop">
                  <div class="navbar__menu-items-servicesContainer-servicesDropdown" v-if="menuActive">
                     <ul>
                      <router-link :to="'/website-development'">
                        <li class="service-list-item">
                          <div class="icon">
                            <img src="~@/assets/icon/html5.svg" alt="HTML5 icon">
                          </div>
                          <div class="content">
                            <div class="title">Website Development</div>
                            <div class="para">Get a webite built for your bussiness.</div>
                          </div>
                        </li>
                      </router-link>

                      <router-link :to="'/website-design'">
                        <li class="service-list-item">
                          <div class="icon">
                            <img src="~@/assets/icon/css3.svg" alt="CSS3 icon">
                          </div>
                          <div class="content">
                            <div class="title">Website Design</div>
                            <div class="para">Convey personality of your bussiness with a beautifully designed website.</div>
                          </div>
                        </li>
                      </router-link>

                      <router-link :to="'/application-development'">
                        <li class="service-list-item">
                          <div class="icon">
                            <img src="~@/assets/icon/android.svg" alt="Android icon">
                          </div>
                          <div class="content">
                            <div class="title">Application Development</div>
                            <div class="para">Mobile application are a great way to be in touch with your customers.</div>
                          </div>
                        </li>
                      </router-link>

                      <router-link :to="'/search-engine-optimization'">
                        <li class="service-list-item">
                          <div class="icon">
                            <img src="~@/assets/icon/googlecloud.svg" alt="SEO icon">
                          </div>
                          <div class="content">
                            <div class="title">Search Engine Optimization</div>
                            <div class="para">Get discoverd among millons of others.</div>
                          </div>
                        </li>
                      </router-link>

                      <router-link :to="'/social-media-marketing'">
                        <li class="service-list-item">
                          <div class="icon">
                            <img src="~@/assets/icon/socialmedia.svg" alt="Social media icon">
                          </div>
                          <div class="content">
                            <div class="title">Social Media Marketing</div>
                            <div class="para">Reach out to your potential customers.</div>
                          </div>
                        </li>
                      </router-link>

                       <router-link :to="'/website-maintainence'">
                        <li class="service-list-item">
                          <div class="icon">
                            <img src="~@/assets/icon/react.svg" alt="React icon">
                          </div>
                          <div class="content">
                            <div class="title">Website Maintenance</div>
                            <div class="para">Revamp your old website or application.</div>
                          </div>
                        </li>
                      </router-link>

                      <router-link :to="'/databases'">
                        <li class="service-list-item">
                          <div class="icon">
                            <img src="~@/assets/icon/mysql.svg" alt="MySQL icon">
                          </div>
                          <div class="content">
                            <div class="title">Databases</div>
                            <div class="para">Store all your valuble data.</div>
                          </div>
                        </li>
                      </router-link>

                    </ul>
                  </div>
                </transition>
              </div>             
            
              <router-link @click="toggle" exact to="/portfolio" class="navbar__menu-item">Portfolio</router-link>
            </div>
          </div>
        </div>
        <div class="col-xs-6 col-md-2 ">
          <button class="navbar-cta" @click="$router.push('/contact')">Contact Us</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      isOpen: false,
      navBackground: 1,
      menuActive: false,
    }
  },

  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    },
    handleScroll (event) {
      let scroll = parseInt(window.scrollY)

      if (scroll > 100) {
        this.navBackground = `rgba(255, 255, 255, 1)`
      } else {
        this.navBackground = `rgba(255, 255, 255, ${scroll / 100})`
      }
    },
  },

  created () {
    window.addEventListener('scroll', this.handleScroll)
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted: function () {
    this.handleScroll()
  }
};
</script>

<style lang="sass" scoped>
.navbar
  display: block
  position: fixed
  top: 0
  left: 0
  width: 100vw
  height: auto
  padding: 30px
  background-color: var(--color-white)
  z-index: 900
  &__inner
    width: auto
    max-width: 1420px
  &__logo
    width: 100px
    font-family: Poppins
    @media (min-width: 760px)
      width: 120px
    @media (min-width: 1366px)
      width: 120px
  &__menu-wrapper
    display: none
    @media (min-width: 760px)
      display: block
  &__menu
    width: 100%
    display: none
    &-items
      width: 100%
      .dropdown
        #dropdown
          visibility: hidden

      &-servicesContainer
        cursor: pointer
        display: block
        margin-left: 30px
        font-size: var(--font-sm)
        font-weight: var(--weight-medium)
        padding: 0
        border-bottom: 3px solid transparent
        color: var(--text-primary)
        position: relative

        a
          padding-bottom: 20px !important          

        .fade-drop-enter-active, .fade-drop-leave-active
          transition: all .3s
        .fade-drop-enter, .fade-drop-leave-to 
          opacity: 0
          transform: translateY(-20px)
          transition: all .3s
        
        &-servicesDropdown
          width: 300px
          min-height: auto
          position: absolute
          z-index: 999
          background-color: white
          top: 40px
          border-radius: 4px
          left: -80px
          box-shadow: 0 4px 8px 0 rgba(0,0,0,.24)
          -webkit-box-shadow: 0 4px 8px 0 rgba(0,0,0,.24)
          box-sizing: border-box
          display: flex
          flex-wrap: wrap
          align-content: space-between

          ul
            padding: 0
            margin: 0

            a
              text-decoration: none
              color: inherit

          .service-list-item
              width: 100%
              display: flex
              list-style-type: none
              padding: 15px
              font-size: var(--font-sm)
              text-align: left
              cursor: pointer
              transition: all 0.2s ease

              .icon
                display: inline-block
                width: 20px
                min-width: 20px
                height: 20px
                margin-right: 16px

                img
                  filter: invert(16%) sepia(98%) saturate(7485%) hue-rotate(217deg) brightness(107%) contrast(93%)

              .title
                font-size: 16px
                font-weight: 500
                padding-bottom: 5px

              .para
                display: inline-block
                font-size: 12px
                font-weight: 400

          .service-list-item:hover
            background-color: var(--color-blue)
            color: white
            transition: all 0.3s ease

            .icon img
              filter: invert(0) sepia(0%) saturate(0%) hue-rotate(304deg) brightness(200%) contrast(102%)

    &-item
      display: block
      margin-left: 30px
      font-size: var(--font-sm)
      font-weight: var(--weight-medium)
      padding: 4px 0
      border-bottom: 3px solid transparent
      color: var(--text-primary)
      &:first-child
        margin-left: 0

    @media (min-width: 760px)
      display: block

  &-cta
    padding: var(--p-1) var(--p-2)
    font-size: var(--font-sm)
    font-weight: var(--weight-medium)
    border: 2px solid var(--color-primary)
    background-color: var(--color-white)
    color: var(--color-primary)
    border-radius: var(--radius-small)
    cursor: pointer
    transition: var(--t-fast)
    &:hover
      background-color: var(--color-primary)
      color: var(--color-white)

  .router-link-active
    padding: 4px 0
    border-bottom: 3px solid var(--color-primary)

</style>

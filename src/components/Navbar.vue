<style lang="css" scoped>
.icon svg:hover{
  fill: brown;
}
</style>
<template>
  <div class="container">
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

                         <router-link :to="'/website-maintenance'">
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

                        <router-link :to="'/web-scraping'">
                          <li class="service-list-item">
                            <div class="icon">
                             <svg class="svg-icon" viewBox="0 0 20 20">
                              <path fill="#0957EA" d="M15.131,8.29c-0.944,0-1.711,0.766-1.711,1.71s0.767,1.711,1.711,1.711s1.71-0.767,1.71-1.711S16.075,8.29,15.131,8.29 M15.131,10.855c-0.472,0-0.855-0.383-0.855-0.855s0.384-0.855,0.855-0.855S15.986,9.528,15.986,10S15.603,10.855,15.131,10.855 M12.993,15.131c-0.236,0-0.428,0.191-0.428,0.427c0,0.237,0.191,0.429,0.428,0.429c0.235,0,0.427-0.191,0.427-0.429C13.42,15.322,13.229,15.131,12.993,15.131 M4.87,10.855c-0.473,0-0.855,0.383-0.855,0.856c0,0.471,0.383,0.854,0.855,0.854c0.472,0,0.854-0.384,0.854-0.854C5.724,11.238,5.341,10.855,4.87,10.855 M8.717,12.565c-0.708,0-1.283,0.574-1.283,1.283c0,0.708,0.574,1.282,1.283,1.282S10,14.557,10,13.849C10,13.14,9.426,12.565,8.717,12.565M8.717,14.275c-0.236,0-0.427-0.191-0.427-0.427c0-0.236,0.191-0.429,0.427-0.429s0.427,0.192,0.427,0.429C9.145,14.084,8.953,14.275,8.717,14.275 M11.283,10c-0.236,0-0.428,0.191-0.428,0.428c0,0.236,0.191,0.427,0.428,0.427c0.235,0,0.427-0.191,0.427-0.427C11.71,10.191,11.519,10,11.283,10 M10,0.594c-5.195,0-9.406,4.211-9.406,9.406c0,5.195,4.211,9.406,9.406,9.406c5.195,0,9.406-4.211,9.406-9.406C19.406,4.805,15.195,0.594,10,0.594 M10,18.552c-4.723,0-8.551-3.829-8.551-8.552c0-4.722,3.828-8.551,8.551-8.551S18.552,5.278,18.552,10C18.552,14.723,14.723,18.552,10,18.552M7.435,4.014c-1.417,0-2.565,1.149-2.565,2.565c0,1.417,1.148,2.565,2.565,2.565C8.851,9.145,10,7.997,10,6.58C10,5.164,8.851,4.014,7.435,4.014 M7.435,8.29c-0.944,0-1.71-0.766-1.71-1.71c0-0.945,0.766-1.71,1.71-1.71c0.945,0,1.71,0.765,1.71,1.71C9.145,7.524,8.379,8.29,7.435,8.29"></path>
                            </svg>
                            </div>
                            <div class="content">
                              <div class="title">Web Scraping</div>
                              <div class="para">Store all your valuble data.</div>
                            </div>
                          </li>
                        </router-link>

                        <router-link :to="'/content-writing'">
                          <li class="service-list-item">
                            <div class="icon">
                             <svg class="svg-icon" viewBox="0 0 20 20">
							<path fill="#0957EA" d="M18.303,4.742l-1.454-1.455c-0.171-0.171-0.475-0.171-0.646,0l-3.061,3.064H2.019c-0.251,0-0.457,0.205-0.457,0.456v9.578c0,0.251,0.206,0.456,0.457,0.456h13.683c0.252,0,0.457-0.205,0.457-0.456V7.533l2.144-2.146C18.481,5.208,18.483,4.917,18.303,4.742 M15.258,15.929H2.476V7.263h9.754L9.695,9.792c-0.057,0.057-0.101,0.13-0.119,0.212L9.18,11.36h-3.98c-0.251,0-0.457,0.205-0.457,0.456c0,0.253,0.205,0.456,0.457,0.456h4.336c0.023,0,0.899,0.02,1.498-0.127c0.312-0.077,0.55-0.137,0.55-0.137c0.08-0.018,0.155-0.059,0.212-0.118l3.463-3.443V15.929z M11.241,11.156l-1.078,0.267l0.267-1.076l6.097-6.091l0.808,0.808L11.241,11.156z"></path>
						</svg>
                            </div>
                            <div class="content">
                              <div class="title">Content Writing</div>
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

          <div class="navbar-hamburger__icon" @click="toggleActive()">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

    </nav>

  <app-sidenav class="sidenav" @close="isActive = false" :is-active="isActive"></app-sidenav>

  </div>
</template>

<script>
import TheSideNav from "@/components/TheSideNav";

export default {
  name: 'Navbar',
  data () {
    return {
      isOpen: false,
      navBackground: 1,
      menuActive: false,
      isActive: false
    }
  },

  components: {
    appSidenav: TheSideNav
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
    toggleActive() {
      this.isActive = !this.isActive;
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
.container
  height: 100%
  width: 100vw
  .sidenav
    min-height: 100vh
    min-width: 100vw
    position: absolute
    top: 0
.navbar
  display: block
  position: fixed
  top: 0
  left: 0
  width: 100vw
  height: auto
  padding: 20px 30px 30px
  background-color: var(--color-white)
  z-index: 900
  &__inner
    width: auto
    max-width: 1420px
  &__logo
    width: 100px
    font-family: Poppins
    cursor: pointer
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
            margin: 5px 0px

            a
              text-decoration: none
              color: inherit

          .service-list-item
              width: 100%
              display: flex
              list-style-type: none
              padding: 8px 15px
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

.navbar-hamburger__icon
  display: none
  flex-direction: column
  align-content: center
  height: 40px
  width: 40px
  cursor: pointer
  position: absolute
  right: 20px

  span
    width: 25px
    height: 3px
    border-radius: 3px
    background-color: var(--color-black-light)
    margin-bottom: 3px
    position: absolute
    z-index: 999
  span:nth-of-type(1)
    top: 12px
  span:nth-of-type(2)
    top: 19px
  span:nth-of-type(3)
    top: 26px

@media (max-width: 760px)
  .navbar-hamburger__icon
    display: flex


</style>

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
                            <svg fill="#b4b4b4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title>HTML5 icon</title>
                            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path>
                            </svg>
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
                            <svg fill="#b4b4b4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title>CSS3 icon</title>
                            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"></path>
                            </svg>
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
                            <svg fill="#b4b4b4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title>Android icon</title>
                            <path d="M24 19H0a13.6 13.6 0 0 1 2.21-6.07A11.2 11.2 0 0 1 5.87 9.4l.41-.23-2.02-3.41a.51.51 0 0 1 .17-.7.5.5 0 0 1 .69.18l2.08 3.5a12.62 12.62 0 0 1 4.84-.9 12.2 12.2 0 0 1 4.75.9l2.07-3.5a.5.5 0 0 1 .7-.17.51.51 0 0 1 .16.7L17.7 9.19l.5.28a11.38 11.38 0 0 1 3.63 3.62A14.48 14.48 0 0 1 24 19zm-7.5-4.48a1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1 1 1 0 0 0-1 1zm-11 0a1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1 1 1 0 0 0-1 1z"></path>
                            </svg>
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
                            <svg fill="#b4b4b4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title>SEO icon</title>
                            <path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.365 9.365 0 0 0-2.821-4.552l-.043.043.006-.05A9.344 9.344 0 0 0 12.19 2.38zm-.358 4.146c1.244-.04 2.518.368 3.486 1.15a5.186 5.186 0 0 1 1.862 4.078v.518c3.53-.07 3.53 5.262 0 5.193h-5.193l-.008.009v-.04H6.785a2.59 2.59 0 0 1-1.067-.23h.001a2.597 2.597 0 1 1 3.437-3.437l3.013-3.012A6.747 6.747 0 0 0 8.11 8.24c.018-.01.04-.026.054-.023a5.186 5.186 0 0 1 3.67-1.69z"></path>
                            </svg>
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
                            <svg fill="#b4b4b4" role="img" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                            <title>Social Media icon</title>
                            <path d="M 25 4.0625 C 12.414063 4.0625 2.0625 12.925781 2.0625 24 C 2.0625 30.425781 5.625 36.09375 11 39.71875 C 10.992188 39.933594 11 40.265625 10.71875 41.3125 C 10.371094 42.605469 9.683594 44.4375 8.25 46.46875 L 7.21875 47.90625 L 9 47.9375 C 15.175781 47.964844 18.753906 43.90625 19.3125 43.25 C 21.136719 43.65625 23.035156 43.9375 25 43.9375 C 37.582031 43.9375 47.9375 35.074219 47.9375 24 C 47.9375 12.925781 37.582031 4.0625 25 4.0625 Z M 25 5.9375 C 36.714844 5.9375 46.0625 14.089844 46.0625 24 C 46.0625 33.910156 36.714844 42.0625 25 42.0625 C 22.996094 42.0625 21.050781 41.820313 19.21875 41.375 L 18.65625 41.25 L 18.28125 41.71875 C 18.28125 41.71875 15.390625 44.976563 10.78125 45.75 C 11.613281 44.257813 12.246094 42.871094 12.53125 41.8125 C 12.929688 40.332031 12.9375 39.3125 12.9375 39.3125 L 12.9375 38.8125 L 12.5 38.53125 C 7.273438 35.21875 3.9375 29.941406 3.9375 24 C 3.9375 14.089844 13.28125 5.9375 25 5.9375 Z"></path>
                            </svg>
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
                            <svg fill="#b4b4b4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title>React icon</title>
                            <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z"></path>
                            </svg>
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
                            <svg fill="#b4b4b4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title>MySql icon</title>
                            <path d="M16.405 5.676c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.87h-.927c-.03-1.562-.123-3.03-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01c-.103 1.323-.168 2.793-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008L4.25 13.34h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.79h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483h.88zM22.112 18.87h-2.63v-5.53h.885v4.85h1.745zM18.792 19.005l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.763c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zM13.842 17.338c0 .47-.172.856-.516 1.156s-.803.45-1.384.45c-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22.188-.147.3-.354.3-.615 0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476c-.36-.152-.715-.23-1.064-.23-.283 0-.502.068-.654.206-.153.136-.248.31-.248.524 0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zM23.224 11.486c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193-.194-.26-.435-.487-.695-.675-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395-.34-.295-.717-.582-1.104-.823-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514-.192-.368-.38-.775-.547-1.163-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133-.12-.12-.255-.267-.35-.4-.28-.377-.527-.79-.747-1.218-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303-.087-.124-.18-.285-.24-.427-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46.876.556 1.596 1.345 2.085 2.286.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"></path>
                            </svg>
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

        a
          padding-bottom: 20px !important

        &-item
        display: block
        margin-left: 30px
        font-size: var(--font-sm)
        font-weight: var(--weight-medium)
        padding: 0
        border-bottom: 3px solid transparent
        color: var(--text-primary)
        position: relative

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

                svg path
                  fill: var(--color-blue)

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

            .icon svg path
              fill: white
              transition: fill 0.3s ease

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

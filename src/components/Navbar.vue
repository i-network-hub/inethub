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
              <router-link @click="toggle" exact to="/services" class="navbar__menu-item">Services</router-link>
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
      navBackground: 1
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
    }
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
}
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

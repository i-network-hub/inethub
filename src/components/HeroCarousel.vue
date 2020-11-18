<template>
  <div class="hero-carousel mx-auto">
    <slot :name="slide"/>
    <div class="hero-carousel__controls flex flex-row justify-between items-center">
      <span class="arrow-left" @click="previous">
        <img src="~@/assets/icon/arrow-left.svg" alt="arrow-left">
      </span>
      <div class="dots">
        <span v-for="i in count" :key="i" :class="{'dots-current': i === index }"/>
      </div>
      <span class="arrow-right" @click="next">
        <img src="~@/assets/icon/arrow-left.svg" alt="arrow-right">
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroCarousel',
  data () {
    return {
      index: 1,
      count: 0
    }
  },
  computed: {
    slide () {
      return `slide-${this.index}`
    }
  },
  mounted () {
    this.count = Object.keys(this.$slots).length
  },
  methods: {
    previous () {
      if (this.index > 1) {
        this.index = this.index - 1
      } else {
        this.index = this.count
      }
    },
    next () {
      if (this.index < this.count) {
        this.index = this.index + 1
      } else {
        this.index = 1
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.hero-carousel
  max-width: 600px

  h2
    display: inline-block
    margin-bottom: var(--p-4)
  &__controls
    width: 100%
    padding: var(--p-2) 0

    .dots
      span
        display: inline-block
        width: 10px
        height: 10px
        border-radius: 50%
        background-color: var(--color-main-light)
        margin: 0 var(--m-1)
      &-current
        background-color: var(--color-main-dark) !important

    .arrow-left,
    .arrow-right
      display: block
      width: 50px
      height: auto
      cursor: pointer
      padding: var(--p-2) 0
      transition: transform var(--t-fast)
      user-select: none

      img
        display: block
        width: 100%
        height: auto
        background-size: contain

      &:hover
        transform: scale(1.1)

    .arrow-right
      transform: rotate(180deg)
      &:hover
        transform: rotate(180deg) scale(1.1)
</style>

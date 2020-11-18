<template>
  <div class="hero row  middle-xs center-xs">
    <div class="col-xs-4 col-xs-offset-1">
      <div class="hero-info__wrapper">
        <span class="hero-text">
          I Network Technologies
        </span>
        <p class="hero-description">
          ITfy Technologies is a software development company specialized in providing
          Geographical Information System, Software Development, Mobile and Web Application
          development services.
        </p>
        <div class="flex flex-row justify-between">
          <Textbox />
          <Button class="m-l-2"/>
        </div>
      </div>
    </div>
    <div class="col-xs-7">
      <div class="hero-illustration">
        <img src="~@/assets/illustrations/hero.png" alt="">
        <img src="~@/assets/illustrations/overlay.svg" class="illustration-overlay" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Textbox from '@/components/Textbox'
import Button from '@/components/Button'

export default {
  name: 'Hero',
  components: {
    Textbox,
    Button
  }
}
</script>

<style lang="sass" scoped>
.hero
  margin-bottom: 150px
  &-info__wrapper
    max-width: 550px
    text-align: left
  &-text
    font-size: var(--font-hero)
    font-weight: var(--weight-black)
  &-description
    font-size: var(--font-tiny)
    font-weight: var(--weight-regular)
    line-height: var(--lh-tiny)
    margin-bottom: var(--m-4)

  &-illustration
    position: relative
    width: 80%
    height: auto
    margin-right: 0
    margin-left: auto
    padding: var(--p-5)
    img
      display: block
      width: 100%
      height: auto
      background-size: contain

    .illustration-overlay
      pointer-events: none
      width: 110%
      position: absolute
      top: -20%
      right: -8%
      z-index: var(--z-2)
</style>

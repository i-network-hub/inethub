<template>
  <div class="loader">
    <div class="loader-circle">
      <div class="loader-circle-mask"></div>
      <div class="loader-circle-inner">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style lang="sass" scoped>
.loader
  position: absolute
  width: 100%
  height: auto
  display: flex
  flex-direction: row
  align-items: center
  justify-content: center
  flex-wrap: no-wrap
  background-color: var(--color-primary)

  &-circle
    width: 30px
    height: 30px
    border-radius: 50%
    background-color: white
    overflow: hidden
    position: relative
    &-inner
      width: 26px
      height: 26px
      top: 2px
      left: 2px
      border-radius: 50%
      background-color: var(--color-primary)
      position: absolute
    &-mask
      width: 40px
      height: 40px
      background-color: black
      position: absolute
      top: 15px
      left: 15px
      background-color: var(--color-primary)
      // background-color: green
      transform-origin: top left
      animation-name: rotate
      animation-duration: 1s
      animation-timing-function: linear
      animation-direction: forward
      animation-iteration-count: infinite

@keyframes rotate
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)
</style>

<template>
  <div class="carousel">
    <div class="carousel__options flex flex-row items-center">
      <div class="carousel__option">
        Website Devlopment
      </div>
      <div class="carousel__option">
        CMS Devlopment
      </div>
      <div class="carousel__option">
        E-Commerce Devlopment
      </div>
    </div>
    <div class="carousel__items flex flex-row flex-nowrap justify-between p-y-2">
      <div id="item-1" class="carousel__item">
        <img src="~@/assets/images/image 3.png" alt="">
      </div>
      <div id="item-2" class="carousel__item">
        <img src="~@/assets/images/image 4.png" alt="">
      </div>
      <div id="item-3" class="carousel__item">
        <img src="~@/assets/images/image 5.png" alt="">
      </div>
      <div id="item-4" class="carousel__item">
        <img src="~@/assets/images/image 6.png" alt="">
      </div>
      <div id="item-5" class="carousel__item">
        <img src="~@/assets/images/image 7.png" alt="">
      </div>
    </div>
    <div class="carousel__navigation flex flex-row flex-nowrap justfy-end">
      <span class="arrow-left">
        <img src="~@/assets/icon/ArrowLeft.svg" alt="">
      </span>
      <span class="arrow-left">
        <img src="~@/assets/icon/ArrowRight.svg" alt="">
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
      index: 1
    }
  },
  mounted () {
    const items = document.querySelectorAll('.carousel__item')
    const selectedElement = items[this.index]

    selectedElement.classList.add('item-selected')
  }
}
</script>

<style lang="sass">
.carousel
  &__options
    padding: 16px 0
    display: flex
    flex-direction: row
    align-items: center
    justify-content: space-between
  &__option
    font-size: 14px
    font-weight: 600
    color: var(--colorblack-light)
    &:last-child
      padding-left: 16px

  &__items
    position: relative
    min-height: 250px
  &__item
    width: 180px
    display: none
    box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.1)
    img
      display: block
      width: 100%
      height: auto
      background-size: contain

  .item-selected
    cursor: pointer
    box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.1)
    display: block
    position: absolute
    z-index: 10
    left: calc(50% - 90px)
    transition: all 0.24s ease-in-out
    transform: scale(1.2)
</style>

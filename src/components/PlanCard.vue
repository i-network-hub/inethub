<template>
  <div class="plan-card">
    <div class="plan-card__gradient"></div>
    <div class="plan-card__content">
      <span class="plan-card__plan">Professional</span>
      <span class="plan-card__price">Contact Us</span>
      <span class="plan-card__details">
        Do you have your bussiness already setup and want to give it a boost or you want a custom solutions for your bussiness
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlanCard'
}
</script>

<style lang="sass" scoped>
.plan-card
  width: 450px
  height: auto
  min-height: 580px
  margin: 100px auto
  border-radius: 20px
  overflow: hidden
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4)
  position: relative

  &__gradient
    width: 110%
    height: 600px
    position: absolute
    top: -20px
    left: -43px
    background: linear-gradient(to bottom, #DC74FF 0%, #4F61F0 100%)
    border-bottom-right-radius: 350px
    z-index: 1

  &__content
    position: relative
    width: 100%
    padding: 80px 40px
    text-align: center
    z-index: 2

  &__plan
    font-size: 24px
    font-weight: 500
    color: #ffffff

  &__price
    display: block
    margin-top: 50px
    font-size: 40px
    font-weight: 600
    color: #fff

  &__details
    width: 70%
    display: block
    margin: 30px auto
    font-size: 14px
    font-weight: 400
    color: #fff
</style>

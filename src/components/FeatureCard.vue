<template>
  <div class="feature-card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FeatureCard'
}
</script>

<style lang="sass">
.feature-card
  border-radius: 10px
  width: 150px
  height: 150px
  border: 1px solid var(--color-gray-medium)
  transition: all var(--t-fast)
  cursor: pointer

  &:hover
    transform: scale(1.3)
    background-color: var(--color-main-light)
    box-shadow: 0 0 50px 0 rgba(#E4857F, 0.2)

  img
    display: block
    width: 100%
    height: auto
    background-size: contain
</style>

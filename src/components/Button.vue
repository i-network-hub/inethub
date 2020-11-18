<template>
  <button>
    Request Quote
  </button>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style lang="sass" scoped>
button
  display: inline-block
  flex-shrink: 0
  width: auto
  min-width: 100px
  padding: var(--p-2) var(--p-3)

  border: none
  border-radius: var(--radius)

  font-size: var(--font-tiny)
  font-weight: var(--weight-medium)
  color: var(--color-white)

  background-color: var(--color-main)
  transition: background-color var(--t-fast)
  cursor: pointer
  @include remove-focus

  &:hover
    background-color: var(--color-main-light)
  &:active
    background-color: var(--color-main-dark)
</style>

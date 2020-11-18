<template>
  <div class="textbox">
    <input type="text" placeholder="john@example.com">
  </div>
</template>

<script>
export default {
  name: 'Textbox'
}
</script>

<style lang="sass" scoped>
.textbox
  display: inline-block
  width: 100%
  border-radius: var(--radius)
  background-color: var(--color-gray-light)

  input
    display: inline-block
    width: 100%
    height: auto
    padding: var(--p-2) var(--p-2)
    background-color: transparent
    border: none
    border-radius: var(--radius)
    font-size: var(--font-tiny)
    @include remove-focus
</style>

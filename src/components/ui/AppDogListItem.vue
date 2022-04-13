<template>
  <li @click="$emit('select')" :class="selected">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "AppDogListItem",
  emits: ['select'],
  props: {
    selected: {
      type: Boolean,
      default: false
    }
  },

  setup() {

  },
}
</script>

<style scoped>

</style>
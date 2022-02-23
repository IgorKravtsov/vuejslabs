<template>
  <button class="btn" :class="type" @click="$emit('click')">
    <slot/>
  </button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "AppButton",
  emits: ['click'],
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  }
})
</script>

<style scoped>
  .btn {
    max-height: 50px;
  }
</style>
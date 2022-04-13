<template>
  <div class="form-control">
    <label v-if="label" :for="'input-' + id">{{ label }}</label>
    <input type="text" :id="'input-' + id" :value="initialValue" @input="$emit('input', $event)">
<!--           @change="onChange" :value="initialValue"-->
  </div>
</template>

<script>
import {defineComponent, ref} from 'vue'
export default defineComponent({
  name: "AppFormControl",
  props: ['initialValue', 'label', 'onChange'],
  emits: ['input'],
  setup(props) {
    const { initialValue } = props
    const value = ref(initialValue)
    const id = ref(Math.random())
    return {
      value,
      id
    }
  },
})
</script>

<style scoped>

</style>
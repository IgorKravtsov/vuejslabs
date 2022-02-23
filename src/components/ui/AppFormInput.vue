<template>
  <div class="form-control">
    <label v-if="label" :for="'input-' + Math.random()">{{ label }}</label>
    <input type="text" :id="'input-' + Math.random()" :value="initialValue" @input="$emit('input', $event)">
<!--           @change="onChange" :value="initialValue"-->
  </div>
</template>

<script>
import {defineComponent, ref} from 'vue'
export default defineComponent({
  name: "AppFormControl",
  props: ['initialValue', 'label', 'onChange'],
  setup(props) {
    const { initialValue } = props
    const value = ref(initialValue)
    return {
      value
    }
  },
})
</script>

<style scoped>

</style>
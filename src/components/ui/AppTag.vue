<template>
  <span :class="['badge', className]">
    <slot></slot>
  </span>
</template>

<script>
import {ref, watch} from 'vue'

export default {
  props: {
    color: {
      type: String,
      required: true,
      validator(value) {
        return ['green', 'red', 'yellow'].includes(value)
      }
    }
  },
  setup(props) {
    const classesMap = {
      green: 'primary',
      red: 'danger',
      yellow: 'warning'
    }

    // const textMap = {
    //   active: 'Активен',
    //   cancelled: 'Отменен',
    //   done: 'Завершен',
    //   pending: 'Выполняется'
    // }

    watch(props, val => {
      className.value = classesMap[val.color]
      // text.value = textMap[val.type]
    })

    const className = ref(classesMap[props.color])
    // const text = ref(textMap[props.color])

    return {
      className,
    }
  }
}
</script>

<style scoped>

</style>
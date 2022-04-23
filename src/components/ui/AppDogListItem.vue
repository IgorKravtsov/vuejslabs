<template>
  <li :class="isChangeColor ? (selected ? 'selected-list-item' : '') : ''" class="list-item" @click="$emit('select', { dog })">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'AppDogListItem',
  emits: ['select'],
  props: ['selected', 'dog', 'isChangeColor'],
  // {
  //   selected: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },

  setup(props, ctx) {
    return {
      dog: props.dog,
      selected: props.selected,
      isSelectedList: props.isSelectedList,
    }
  },
}
</script>

<style scoped>
.list-item {
  cursor: pointer;
  border-radius: 10px;
  justify-content: center;
}
.selected-list-item {
  background-color: aqua;
}
</style>

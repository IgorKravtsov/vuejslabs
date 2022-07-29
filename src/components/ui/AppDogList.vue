<template>
  <ul :key="dog.breed" v-for="dog in dogList" class="list">
    <app-dog-list-item @select="selectFunc" :selected="checkIsSelected(dog)" :dog="dog" :isChangeColor="isChangeColor">
      {{ dog.breed }}
    </app-dog-list-item>
  </ul>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import AppDogListItem from '@/components/ui/AppDogListItem'

export default {
  name: 'AppDogList',
  components: { AppDogListItem },
  emits: ['select', 'checkClick'],
  props: ['dogs', 'isCanAdd', 'isChangeColor'],
  setup(props, ctx) {
    const store = useStore()
    const selected = computed(() => store.getters['secondLab/selected'])
    const selectFunc = obj => {
      if (props.isCanAdd) {
        store.commit('secondLab/addRemoveSelected', obj.dog)
        ctx.emit('checkClick', { kostil: false })
      }
    }

    const checkIsSelected = dog => {
      return selected.value.findIndex(item => item.breed === dog.breed) !== -1
    }

    return {
      dogList: props.dogs,
      selectFunc,
      checkIsSelected,
      isChangeColor: props.isChangeColor,
    }
  },
}
</script>

<style scoped lang="scss">
// @import '@vueform/multiselect/themes/default.css';
.list {
  min-height: 50px;
  text-align: center;
}
</style>

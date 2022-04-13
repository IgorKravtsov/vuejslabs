<template>
  <ul>
<!--    <app-dog-list-item v-for="dogObj in dogs" @select="selectBreed(dogObj)">-->
<!--      {{ dogObj.breed }}-->
<!--    </app-dog-list-item>-->
    <Multiselect
        v-model="value"
        :options="selected"
        mode="multiple"
    />
  </ul>
</template>

<script>
import {ref, emit, computed} from "vue";
import AppDogListItem from "@/components/ui/AppDogListItem";
import Multiselect from '@vueform/multiselect'

export default {
  name: "AppDogList",
  components: {AppDogListItem, Multiselect},
  emits: ['select'],
  props: ['dogs'],
  setup(props, ctx) {
    // const dogArr = computed(() => props.dogs?.value?.length > 0 ? props.dogs.value : []);
    // const dogList = ref(dogArr.value.map(dog => ({...dog, isSelected: false})));
    const value = ref(null)

    const selectBreed = (dog) => {
      dog.isSelected = !dog.isSelected
      ctx.emit('select');
    }

    return {
      // dogList: dogs,
      selected: [
          'Batman',
          'Spiderman'
      ],
      value,
      selectBreed
    }
  },
}
</script>

<style scoped lang="scss">
 @import '@vueform/multiselect/themes/default.css';
</style>
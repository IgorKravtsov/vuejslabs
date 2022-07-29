<template>
  <app-loader v-if="loading"></app-loader>

  <div v-else>
    <h3>Task 2-5</h3>

    <div class="list-wrapper">
      <div v-if="isRender">
        <app-dogs-list :dogs="dogs" :isCanAdd="true" :check="isRender" @checkClick="checkClick" :isChangeColor="true"></app-dogs-list>
      </div>
      <div>
        <app-dogs-list :dogs="selected" :isChangeColor="false"></app-dogs-list>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, watch, ref } from 'vue'

import AppDogsList from '@/components/ui/AppDogList'
import AppLoader from '@/components/ui/AppLoader'
import AppAccordion from '@/components/ui/accordion/AppAccordion'
import AppAccordionItem from '@/components/ui/accordion/AppAccordionItem'

export default {
  name: 'TheTask2',
  components: { AppDogsList, AppLoader, AppAccordion, AppAccordionItem },
  setup() {
    const store = useStore()
    const dogs = computed(() => store.getters['secondLab/dogs'])
    const loading = computed(() => store.getters.loading)
    const selected = computed(() => store.getters['secondLab/selected'])

    const isRender = ref(true)

    const checkClick = obj => {
      isRender.value = obj.isRender
      setTimeout(() => {
        isRender.value = !obj.isRender
      })
    }

    return {
      dogs,
      loading,
      selected,
      isRender,
      checkClick,
    }
  },
}
</script>

<style scoped>
.list-wrapper {
  display: flex;
  justify-content: space-around;
}
</style>

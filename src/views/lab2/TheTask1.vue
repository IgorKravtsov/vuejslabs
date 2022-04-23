<template>
  <!-- <div class="card"> -->
  <app-accordion>
    <app-accordion-item>
      <template v-slot:trigger>
        <h3>Task 1</h3>
      </template>

      <template v-slot:content v-if="dogs?.length">
        <div class="select-container">
          <select multiple :size="dogs?.length" v-model="selected">
            <option :key="dog" v-for="dog in dogs" :value="dog.breed">{{ dog.breed }}</option>
          </select>

          <select multiple :size="selected.length" class="second-select">
            <option :key="dog" v-for="dog in selected" :value="dog.breed">{{ dog }}</option>
          </select>
        </div>
      </template>
    </app-accordion-item>
  </app-accordion>

  <!-- </div> -->
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref, watch } from 'vue'
import AppLoader from '@/components/ui/AppLoader'
import AppAccordion from '@/components/ui/accordion/AppAccordion'
import AppAccordionItem from '@/components/ui/accordion/AppAccordionItem'

export default {
  name: 'TheTask1',
  components: { AppLoader, AppAccordion, AppAccordionItem },
  setup() {
    const store = useStore()
    const dogs = computed(() => store.getters['secondLab/dogs'])
    const loading = computed(() => store.getters.loading)
    const selected = ref([])

    // const changed = (e, a) => console.log(e.target, '', a)
    // watch(selected, first => {
    //   console.log('Watch function called with args:', first)
    //   // First arg function registerCleanup, second is undefined
    // })

    return {
      dogs,
      loading,
      selected,
    }
  },
}
</script>

<style scoped lang="scss">
.select-container {
  display: flex;
  justify-content: space-around;
}

.second-select {
  width: 150px;
}
</style>

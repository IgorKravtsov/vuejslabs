<template>
  <div class="card">
    <h3>Task 4</h3>
    <app-loader v-if="loading"></app-loader>
    <div v-else class="container">
      <h3>{{ randomDog?.breed }}</h3>
      <ul class="underBreedContainer">
        <li :key="underBreed" v-for="underBreed in randomDog?.underBreeds">
          <app-tag color="red">{{ underBreed }}</app-tag>
        </li>
      </ul>
      <app-button @click="getRandomDog">Случайная порода</app-button>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import AppButton from '@/components/ui/AppButton'
import AppLoader from '@/components/ui/AppLoader'
import AppTag from '@/components/ui/AppTag'

export default {
  name: 'TheTask4',
  components: { AppButton, AppLoader, AppTag },
  props: [],
  setup() {
    const store = useStore()
    const dogs = computed(() => store.getters['firstLab/dogs'])
    const loading = computed(() => store.getters.loading)

    const randomDog = ref(null)

    const getRandomDog = () => {
      const rand = Math.floor(Math.random() * dogs.value.length)
      randomDog.value = dogs.value[rand]
    }

    return {
      getRandomDog,
      loading,
      randomDog,
    }
  },
}
</script>

<style scoped>
li {
  list-style: none;
}

.container {
  display: flex;
  justify-content: space-between;
}

.underBreedContainer {
  flex-wrap: wrap;
}
</style>

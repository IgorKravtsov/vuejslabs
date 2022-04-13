<template>
  <div class="card">
    <h3>Task 1</h3>
    <app-loader v-if="loading"></app-loader>
    <select v-else>
      <option v-for="dog in dogs" :value="dog.breed">{{ dog.breed }}</option>
    </select>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";
import AppLoader from "@/components/ui/AppLoader";

export default {
  name: "TheTask1",
  components: {AppLoader},
  setup() {
    const store = useStore();
    const dogs = computed(() => store.getters["secondLab/dogs"])
    const loading = computed(() => store.getters.loading)

    return {
      dogs,
      loading
    }
  }
}
</script>

<style scoped>

</style>
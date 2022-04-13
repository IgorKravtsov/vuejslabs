<template>
<!--  <div class="card">-->
    <app-dogs-list :dogs="dogs"></app-dogs-list>
<!--  </div>-->
  <h1>wejhfoewihi</h1>
</template>

<script>
import AppDogsList from "@/components/ui/AppDogList";
import {useStore} from "vuex";
import {computed} from "vue";
export default {
  name: "TheTask2",
  components: {AppDogsList},
  setup() {
    const store = useStore();
    const dogs = computed(() => store.getters["secondLab/dogs"])

    return {
      dogs
    }
  }
}
</script>

<style scoped>

</style>
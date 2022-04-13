<template>
  <div class="card">
    <the-task1></the-task1>
    <the-task2></the-task2>
  </div>
</template>

<script>
import {defineComponent, onMounted} from 'vue'
import {useStore} from "vuex";
import TheTask1 from "@/views/lab2/TheTask1";
import TheTask2 from "@/views/lab2/TheTask2";


export default defineComponent({
  name: "Lab2View",
  components: {TheTask2, TheTask1},
  setup() {
    const store = useStore();

    onMounted(async () => {
      await store.dispatch('secondLab/getDogList');
    });
  }
})
</script>

<style scoped>

</style>
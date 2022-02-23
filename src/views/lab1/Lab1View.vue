<template>
  <div class="card">
    <h3>Task 1-2</h3>
    <app-form-input
        :label="`Привет, ${userName === '' ? 'незнакомец' : userName}`"
        :initial-value="userName"
        @input="onChange"
    />
  </div>

  <the-task3></the-task3>
  <the-task4></the-task4>
  <the-task5></the-task5>

</template>

<script>
import {defineComponent, onMounted} from 'vue'
import {useStore} from "vuex";
import {useFirstTask} from "@/use/firstTask";
import AppButton from "@/components/ui/AppButton"
import AppFormInput from "@/components/ui/AppFormInput"
import AppLoader from "@/components/ui/AppLoader"
import AppAccordion from "@/components/ui/accordion/AppAccordion";
import AppAccordionItem from "@/components/ui/accordion/AppAccordionItem";
import AppTag from "@/components/ui/AppTag";
import TheTask3 from "@/views/lab1/TheTask3";
import TheTask4 from "@/views/lab1/TheTask4";
import TheTask5 from "@/views/lab1/TheTask5";

export default defineComponent({
  setup(){
    const store = useStore();

    onMounted(async () => {
      await store.dispatch('firstLab/getDogList');
    });

    return {
      ...useFirstTask(),
    }
  },
  name: "Lab1View",
  components: {
    AppButton,
    AppFormInput,
    AppLoader,
    AppAccordion,
    AppAccordionItem,
    AppTag,
    TheTask3,
    TheTask4,
    TheTask5,

  }
})
</script>

<style scoped lang="scss">

</style>
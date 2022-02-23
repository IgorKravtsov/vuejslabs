<template>
  <div class="card">
    <app-accordion>

      <app-accordion-item>
        <template v-slot:trigger>
          <h3>Task 5</h3>
        </template>

        <template v-slot:content>
          <div class="btn_container">
            <app-button @click="addRandom">Add random</app-button>
            <app-button @click="deleteRandom" type="danger">Delete random</app-button>
            <app-button @click="shuffleList" type="outline">Mix list</app-button>
          </div>

          <ul v-if="dogList.length" class="dog_list">
            <li v-for="(dogObj, index) in dogList" :key="Math.random().toString(4)">
              <h4>{{ index+1 }}. {{ dogObj.breed }}</h4>
            </li>
          </ul>
          <h3 v-else>Please, add a dog for the first</h3>
        </template>

      </app-accordion-item>
    </app-accordion>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed, ref} from "vue";
import AppButton from "@/components/ui/AppButton";
import AppAccordionItem from "@/components/ui/accordion/AppAccordionItem";
import AppAccordion from "@/components/ui/accordion/AppAccordion";
import {shuffle} from "@/utils/shuffle";

export default {
  name: "TheTask5",
  components: {AppAccordionItem, AppButton, AppAccordion},
  props: [],
  setup() {
    const store = useStore();
    const dogs = computed(() => store.getters["firstLab/dogs"])
    const loading = computed(() => store.getters.loading)

    const dogList = ref([]);


    const addRandom = () => {
      const rand = Math.floor(Math.random() * dogs.value?.length)
      let breed = {};
      Object.assign(breed, dogs.value[rand])
      dogList.value.unshift(breed) // Add to the top of a list
    }

    const deleteRandom = () => {
      const rand = Math.floor(Math.random() * dogList.value?.length)
      dogList.value = [...dogList.value?.slice(0, rand), ...dogList.value?.slice(rand + 1, dogList.value?.length)]
    }

    const shuffleList = () => {
      if(dogList.value?.length) {
        shuffle(dogList.value);
      }
    }

    return {
      loading,
      dogList,
      addRandom,
      deleteRandom,
      shuffleList,
    }
  }
}
</script>

<style scoped>

  .btn_container {
    display: flex;
    width: 550px;
    justify-content: space-between;
    margin: 0 auto;
  }

  .dog_list {
    padding-left: 30px;
  }
</style>
<template>
  <app-loader v-if="loading" ></app-loader>
  <div class="card">
    <app-accordion>

      <app-accordion-item>
        <template v-slot:trigger>
          <h3>Task 3</h3>
        </template>

        <template v-slot:content>
          <div v-if="dogs?.length" v-for="(obj) in dogs" :key="obj.breed">
            <app-accordion>

              <app-accordion-item>

                <template v-slot:trigger>
                  <h4>{{ obj.breed }}</h4>
                  <div v-if="obj?.underBreeds?.length">open</div>
                </template>

                <template v-slot:content>
                  <div v-if="obj?.underBreeds?.length" v-for="underBreed in obj.underBreeds" :key="underBreed">
                    <app-tag color="red">
                      {{ underBreed }}
                    </app-tag>
                  </div>
                </template>

              </app-accordion-item>

            </app-accordion>
          </div>
        </template>
      </app-accordion-item>
    </app-accordion>
  </div>
</template>

<script>
import AppAccordion from "@/components/ui/accordion/AppAccordion";
import AppAccordionItem from "@/components/ui/accordion/AppAccordionItem";
import AppTag from "@/components/ui/AppTag";
import AppLoader from "@/components/ui/AppLoader";

import {computed} from "vue";
import {useStore} from "vuex";
export default {
  name: "TheTask3",
  setup() {
    const store = useStore();

    const dogs = computed(() => store.getters["firstLab/dogs"])
    const loading = computed(() => store.getters.loading)
    return {
      loading,
      dogs
    }
  },
  components: {
    AppAccordion,
    AppAccordionItem,
    AppTag,
    AppLoader,
  }
}
</script>

<style scoped>

</style>
<template>
  <the-navbar></the-navbar>

  <div class="container with-nav">
    <div class="card">
      <h1>{{ title }}</h1>
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import TheNavbar from '@/components/TheNavbar'

export default defineComponent({
  setup() {
    const route = useRoute()
    return {
      title: computed(() => route.meta.title)
    }
  },
  name: "MainLayout",
  components: {TheNavbar}
})
</script>

<style scoped>

</style>